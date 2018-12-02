const Ember = require('../models/ember');

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
				res.redirect('/flares/:flareId/embers');
			})
			.catch((err) => {
				console.log(err);
			});
	});
};
