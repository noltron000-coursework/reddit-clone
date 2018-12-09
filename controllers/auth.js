const jwt = require('jsonwebtoken');
const Pyro = require('../models/pyro');

module.exports = (app) => {
	// SIGN UP FORM
	app.get('/signup', (req, res) => {
		res.render('pyros-signup.hbs');
	});

	// SIGN UP POST
	app.post('/signup', (req, res) => {
		// Create Pyro and JWT
		const pyro = new Pyro(req.body);
		pyro
			.save()
			.then((pyro) => {
				const token = jwt.sign(
					{ _id: pyro._id },
					process.env.SECRET,
					{ expiresIn: '60 days' }
				);
				res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
				res.redirect('/');
			})
			.catch((err) => {
				console.log(err.message);
				return res.status(400).send({ err: err });
			});
	});

	// LOGIN FORM
	app.get('/login', (req, res) => {
		res.render('pyros-login.hbs');
	});

	// LOGIN POST
	app.post('/login', (req, res) => {
		const pyroname = req.body.pyroname;
		const password = req.body.password;
		// Find this pyro name
		Pyro.findOne({ pyroname }, 'pyroname password')
			.then(pyro => {
				if (!pyro) {
					// Pyro not found
					return res.status(401).send({
						message: 'Wrong Pyroname or Password'
					});
				}
				// Check the password
				pyro.comparePassword(password, (err, isMatch) => {
					if (!isMatch) {
						// Password does not match
						return res.status(401).send({
							message: 'Wrong Pyroname or Password'
						});
					}
					// Create a token
					const token = jwt.sign(
						{
							_id: pyro._id,
							pyroname: pyro.pyroname
						},
						process.env.SECRET,
						{ expiresIn: '60 days' }
					);
					// Set a cookie and redirect to root
					res.cookie('nToken', token, {
						maxAge: 900000,
						httpOnly: true
					});
					res.redirect('/');
				});
			})
			.catch((err) => {
				console.log(err);
			});
	});

	// LOGOUT
	app.get('/logout', (req, res) => {
		res.clearCookie('nToken');
		res.redirect('/');
	});
};