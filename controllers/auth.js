const Pyro = require('../models/pyro');

module.exports = (app) => {
	// SIGN UP FORM
	app.get("/signup", (req, res) => {
		res.render("pyros-signup");
	});

	// SIGN UP POST
	app.post("/signup", (req, res) => {
		// Create Pyro
		console.log("got here")
		const pyro = new Pyro(req.body);
		console.log("got here!")
		pyro
			.save()
			.then(pyro => {
				console.log('hello')
				res.redirect("/");
			})
			.catch(err => {
				console.log(err.message);
			});
	});
};