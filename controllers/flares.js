const SubFlame = require('../models/subflame');
const Flare = require('../models/flare');

module.exports = (app) => {
	// INDEX all flares
	app.get('/flares', (req, res) => {
		Flare.find({})
			.then(flares => {
				res.render('flares-index', { flares });
			})
			.catch(err => {
				console.log(err.message);
			});
	});

	// NEW flares form
	app.get('/flares/new', (req, res) => {
		SubFlame.find({})
			.then(subflames => {
				res.render('flares-new', { subflames });
			});
	});

	// CREATE flares
	app.post('/flares/new', (req, res) => {
		// instantiate instance of flare model
		const flare = new Flare(req.body);
		// save instance of flare model to db
		flare.save((err, flare) => {
			// redirect to flares index
			console.log(err);
			console.log(flare);
			res.redirect('/flares');
		})
	});

	// SHOW single flare
	app.get('/flares/:id', function (req, res) {
		// LOOK UP THE POST

		// LOOK UP THE POST
		Flare.findById(req.params.id)
			.populate('embers')
			.then((flare) => {
				res.render('flares-show.hbs', { flare })
			}).catch((err) => {
				console.log(err.message)
			})
	});


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