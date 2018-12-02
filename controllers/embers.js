const Ember = require('../models/ember');
const Flare = require('../models/flare');


module.exports = (app) => {
	// CREATE Comment
	app.post("/flares/:flareId/embers", (req, res) => {

		// INSTANTIATE INSTANCE OF MODEL
		const ember = new Ember(req.body);

		// SAVE INSTANCE OF Comment MODEL TO DB
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
