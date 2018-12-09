const SubFlame = require('../models/subflame');
const Flare = require('../models/flare');

module.exports = (app) => {
	// INDEX all subflames
	app.get('/f', (req, res) => {
		SubFlame.find({})
			.then(subflames => {
				res.render('subflames-index', {
					subflames
				});
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
		const subflame = new SubFlame(req.body);
		// save instance of subflame model to db
		// console.log(req.body);
		subflame
			.save((err, subflame) => {
				console.log(err);
				// console.log(subflame);
				res.redirect('/f');
			});
	});

	// SHOW single subflame
	app.get('/f/:id', (req, res) => {
		// look up subflame
		SubFlame.findById(req.params.id)
			.then(subflame => {
				Flare.find({ subflame: req.params.id })
					.then(flare => {
						res.render('subflames-show', {
							subflame: subflame,
							flare: flare
						});
					});
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