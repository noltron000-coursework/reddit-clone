const Pyro = require('../models/pyro');

module.exports = (app) => {
	// SIGN UP FORM
	app.get("/signup", (req, res) => {
		res.render("pyros-signup");
	});

	// SIGN UP POST
	app.post("/sign-up", (req, res) => {
		// Create Pyro
		const pyro = new Pyro(req.body);

		pyro
			.save()
			.then(pyro => {
				res.redirect("/");
			})
			.catch(err => {
				console.log(err.message);
			});
	});
};