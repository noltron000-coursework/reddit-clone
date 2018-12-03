const Ember = require('../models/ember');
const Flare = require('../models/flare');


module.exports = (app) => {
	// CREATE EMBER
	// find a way to prevent unauthorized users
	// from accessing this ROUTE or variable URL
	app.post('/flares/:flareId/embers', (req, res) => {
		// INSTANTIATE INSTANCE OF MODEL
		const ember = new Ember(req.body);
		ember.author = req.pyro._id;
		// SAVE INSTANCE OF EMBER MODEL TO DB
		ember
			.save()
			.then((ember) => {
				// redirect to the index
				console.log(ember);
				return Flare.findById(req.params.flareId);
			})
			.then((flare) => {
				flare.embers.unshift(ember);
				return flare.save();
			})
			.then((flare) => {
				res.redirect(`/`);
			})
			.catch((err) => {
				console.log(err);
			});
	});
};
