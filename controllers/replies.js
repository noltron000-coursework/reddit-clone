const Flare = require("../models/flare");
const Ember = require("../models/ember");
const Pyro = require("../models/pyro");

module.exports = app => {
	// CREATE REPLY
	app.flare("/flares/:flareId/embers/:emberId/replies", (req, res) => {
		console.log(req.body);
	});
};
