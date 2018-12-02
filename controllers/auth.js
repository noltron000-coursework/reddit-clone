module.exports = (app) => {
	// SIGN UP FORM
	app.get("/signup", (req, res) => {
		res.render("users-signup");
	});
}