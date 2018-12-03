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
		// SAVE INSTANCE OF EMBER MODEL TO DB
		ember
			.save()
			.then((ember) => {
				return Flare.findById(req.params.flareId);
			})
			.then((flare) => {
				flare.embers.unshift(ember);
				flare.save();
			})
			.then((ember) => {
				return Pyro.findById(req.pyro._id);
			})
			.then((pyro) => {
				pyro.embers.unshift(ember);
				pyro.save();
			})
			.then((pyro) => {
				// REDIRECT TO THE NEW POST
				res.redirect("/");
			})
			.catch((err) => {
				console.log(err);
			});
	});
};
