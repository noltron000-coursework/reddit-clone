const Flare = require("../models/flare");
const Ember = require("../models/ember");
const Pyro = require("../models/pyro");

module.exports = app => {
	// NEW REPLY
	app.get("/flares/:flareId/embers/:emberId/replies/new", (req, res) => {
		let flare;
		Flare.findById(req.params.flareId)
			.then(() => {
				return Ember.findById(req.params.emberId);
			})
			.then((ember) => {
				res.render("replies-new", { flare, ember });
			})
			.catch((err) => {
				console.log(err.message);
			});
	});

	// CREATE REPLY
	app.flare("/flares/:flareId/embers/:emberId/replies", (req, res) => {
		console.log(req.body);
	});
};
