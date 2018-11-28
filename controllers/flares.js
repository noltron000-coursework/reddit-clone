const Post = require('../models/flare');

module.exports = (app) => {
	// INDEX all flares
	app.get('/flares', (req, res) => {
		res.render('flares-index')
	})

	// NEW flares form
	app.get('/flares/new', (req, res) => {
		res.render('flares-new')
	})

	// CREATE flares
	app.post('/flares/new', (req, res) => {
		// instantiate instance of post model
		const post = new Post(req.body);
		// save instance of post model to db
		console.log(req.body);
		post.save((err, post) => {
			// redirect to the index
			console.log(post);
			console.log(err);
			return res.redirect(`/flares`);
		});
	});

	// SHOW single flare
	app.get('/flares/:id', (req, res) => {
		res.render('flares-show')
	})

	// EDIT flare form
	app.get('/flares/:id', (req, res) => {
		res.render('flares-edit')
	})

	// UPDATE flare
	app.get('/flares/:id', (req, res) => {
	})

	// DELETE flare
	app.get('/flares/:id', (req, res) => {
	})
};