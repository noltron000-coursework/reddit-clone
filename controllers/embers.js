const Ember = require('../models/ember');

module.exports = (app) => {
	// CREATE Comment
	app.post("/posts/:postId/comments", function (req, res) {
		// INSTANTIATE INSTANCE OF MODEL
		const ember = new Ember(req.body);

		// SAVE INSTANCE OF Comment MODEL TO DB
		ember
			.save()
			.then(ember => {
				// REDIRECT TO THE ROOT
				return res.redirect(`/`);
			})
			.catch(err => {
				console.log(err);
			});
	});
};
