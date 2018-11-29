const Subflame = require('../models/subflare');

module.exports = (app) => {
	// INDEX all subflames
	app.get('/f', (req, res) => {
		Subflame.find({})
			.then(subflames => {
				res.render('subflames-index', { subflames });
			})
			.catch(err => {
				console.log(err.message);
			});
	})

	// NEW subflames form
	app.get('/f/new', (req, res) => {
		res.render('subflames-new')
	})

	// CREATE subflames
	app.post('/f/new', (req, res) => {
		// instantiate instance of subflame model
		const subflame = new Subflame(req.body);
		// save instance of subflame model to db
		console.log(req.body);
		subflame.save((err, subflame) => {
			// redirect to the index
			console.log(subflame);
			console.log(err);
			return res.redirect('/subflames');
		});
	});

	// SHOW single subflame
	app.get("/f/:id", function (req, res) {
		// look up subflame
		Subflame.findById(req.params.id)
			.then(subflame => {
				res.render("subflames-show", { subflame });
			})
			.catch(err => {
				console.log(err.message);
			});
	});


	// EDIT subflame form
	app.get('/f/:id', (req, res) => {
		res.render('subflames-edit')
	})

	// UPDATE subflame
	app.get('/f/:id', (req, res) => {
	})

	// DELETE subflame
	app.get('/f/:id', (req, res) => {
	})
};