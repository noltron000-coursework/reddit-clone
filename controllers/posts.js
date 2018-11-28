const Post = require('../models/post');

module.exports = (app) => {
	// CREATE
	app.post('/posts/new', (req, res) => {
		// INSTANTIATE INSTANCE OF POST MODEL
		const post = new Post(req.body);
		// SAVE INSTANCE OF POST MODEL TO DB
		console.log(req.body);
		post.save((err, post) => {
			// REDIRECT TO THE ROOT
			console.log(post);
			console.log(err);

			return res.redirect(`/`);
		})
	});
};