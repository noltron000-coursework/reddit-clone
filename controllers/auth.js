const jwt = require('jsonwebtoken');
const Pyro = require('../models/pyro');

module.exports = (app) => {
	// SIGN UP FORM
	app.get("/signup", (req, res) => {
		res.render("pyros-signup");
	});

	// SIGN UP POST
	app.post("/signup", (req, res) => {
		// Create Pyro and JWT
		const pyro = new Pyro(req.body);
		pyro
			.save()
			.then(pyro => {
				let token = jwt.sign({ _id: pyro._id }, process.env.SECRET, { expiresIn: "60 days" });
				res.redirect("/");
			})
			.catch(err => {
				console.log(err.message);
				return res.status(400).send({ err: err });
			});
	});
};