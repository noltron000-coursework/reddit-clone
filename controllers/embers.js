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
			// Find the parent Pyromancer
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
	app.post("/flares/:flareId/embers/:emberId/replies", (req, res) => {
		// LOOKUP THE PARENT
		Flare.findById(req.params.flareId)
			.then(flare => {

				// FIND THE CHILD EMBER
				const ember = flare.embers.id(req.params.emberId);
				const finalEmber = new Ember(req.body);
				// ADD THE REPLY
				ember.embers.unshift(finalEmber);

				// SAVE THE CHANGE TO THE PARENT DOCUMENT
				return flare.save();
			})
			.then(flare => {
				// REDIRECT TO THE NEW POST
				res.redirect('/flares/' + flare._id);
			})
			.catch(err => {
				console.log(err.message);
			});
	});
};