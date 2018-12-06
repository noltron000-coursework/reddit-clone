const Ember = require('../models/ember');
const Flare = require('../models/flare');
const Pyro = require('../models/pyro');


module.exports = (app) => {
	// CREATE EMBER
	// TODO: find a way to prevent unauthorized users
	// from accessing this ROUTE or variable URL via Middleware
	// akin to checkAuth in server.js
	app.post('/flares/:flareId/embers', (req, res) => {
		// INSTANTIATE INSTANCE OF EMBER MODEL
		const ember = new Ember(req.body);
		ember.author = req.pyro._id;
		ember
			// Save instance to DB
			.save()
			// Find the parent Flare
			.then(() => {
				return Flare.findById(req.params.flareId);
			})
			.then((flare) => {
				flare.embers.unshift(ember);
				flare.save();
			})

			// FIND AUTHOR AND UPDATE THEIR EMBERS
			.then(() => {
				return Pyro.findById(req.pyro._id);
			})
			// Find the author, save its posts
			.then((pyro) => {
				pyro.embers.unshift(ember);
				pyro.save();
			})
			// Redirect to original Flare
			.then(() => {
				res.redirect('/flares/' + req.params.flareId);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	// CREATE NESTED EMBER
	// TODO: find a way to prevent unauthorized users
	// from accessing this ROUTE or variable URL via Middleware
	// akin to checkAuth in server.js
	app.post("/flares/:flareId/embers/:emberId/replies", (req, res) => {
		// INSTANTIATE INSTANCE OF EMBER MODEL
		const newEmber = new Ember(req.body);
		newEmber.author = req.pyro._id;
		newEmber
			// Save instance to DB
			.save()
			// Find the parent Flare
			.then(() => {
				return Flare.findById(req.params.flareId);
			})

			// Find the parent Ember
			.then((flare) => {
				const parEmber = flare.embers.id(req.params.emberId);
				// Save new Ember content in Flare & parent Ember
				parEmber.embers.unshift(newEmber);
				parEmber.save()
				flare.save();
			})

			// FIND AUTHOR AND UPDATE THEIR EMBERS
			.then(() => {
				return Pyro.findById(req.pyro._id);
			})
			// Find the author, save its posts
			.then((pyro) => {
				pyro.embers.unshift(newEmber);
				pyro.save();
			})

			// REDIRECT TO ORIGINAL FLARE
			.then(() => {
				res.redirect('/flares/' + req.params.flareId);
			})
			.catch(err => {
				console.log(err.message);
			});
	});
};