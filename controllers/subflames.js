const SubFlame = require('../models/subflame');
const Flare = require('../models/flare');

module.exports = (app) => {
	// INDEX all subflames
	app.get('/f', (req, res) => {
		SubFlame.find({})
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
		const subflame = new SubFlame(req.body);
		// save instance of subflame model to db
		console.log(req.body);
		subflame.save((err, subflame) => {
			// redirect to the index
			console.log(subflame);
			console.log(err);
			return res.redirect('/f');
		});
	});


	/* PRIMARY TODO */
	// SHOW single subflame
	app.get("/f/:id", function (req, res) {
		// look up subflame
		SubFlame.findById(req.params.id)
			.then(subflame => {
				Flare.find({ subflame: req.params.id })
					.then(flare => {
						res.render("subflames-show", {
							subflame: subflame,
							flare: flare
						});
					});
			})
			// TODO: find all flares referencing this subflame.
			// TODO: display all of those flares like an index.
			// Link: https://github.com/MakeSchool-Tutorials/Node-Reddit-Clone/blob/master/P04-Create-Subreddits/content.md#resolving-the-nsubreddit-route
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