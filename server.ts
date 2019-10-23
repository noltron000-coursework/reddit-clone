console.log("hello world")

// const express = require('express');
// const exprHBS = require('express-handlebars');
// const exprVld = require('express-validator');
// const bodyPrs = require('body-parser');
// const bCrypt = require('bcryptjs')
// const dotENV = require('dotenv').config();
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');

// const checkAuth = (req, res, next) => {
// 	// console.log('Checking authentication:');
// 	// console.log(req.cookies);
// 	if (typeof req.cookies.nToken === 'undefined' || req.cookies.nToken === null) {
// 		req.pyro = null;
// 	} else {
// 		const token = req.cookies.nToken;
// 		const decodedToken = jwt.decode(token, { complete: true }) || {};
// 		req.pyro = decodedToken.payload;
// 	}
// 	res.locals.authPyro = req.pyro;
// 	next();
// };

// const forceNoAuth = (req, res, next) => {
// 	if (res.locals.authPyro) {
// 		return res
// 			.status(401)
// 			.send({ error: 'access denied' }); // UNAUTHORIZED
// 	} else { next() }
// }

// const forceAuth = (req, res, next) => {
// 	if (!res.locals.authPyro) {
// 		return res
// 			.status(401)
// 			.send({ error: 'access denied' }); // UNAUTHORIZED
// 	} else { next() }
// }

// const app = express();
// const port = 3000;

// /* all middleware must appear after express(); is initialized. */

// // serve static or public folder
// app.use(express.static('static'))

// // set up handlebars
// app.engine('.hbs', exprHBS({ extname: '.hbs', defaultLayout: 'main' }));
// app.set('view engine', 'hbs');

// // use body parser
// app.use(bodyPrs.json());
// app.use(bodyPrs.urlencoded({
// 	extended: false
// }));

// // use validator - adding after parser init!
// app.use(exprVld());

// // use cookie parser for JWTs etc
// app.use(cookieParser());

// // // use method override - with POST having ?_method=DELETE or ?_method=PUT
// // app.use(methodOverride('_method'));

// // use checkAuth custom middleware
// app.use(checkAuth);
// app.get(('/login', '/signup'), forceNoAuth);
// app.get(('/f/new', '/flares/new', '/flares/:flareId/embers'), forceAuth);

// // require other files
// const subflames = require('./controllers/subflames.js')(app);
// const flares = require('./controllers/flares.js')(app);
// const embers = require('./controllers/embers.js')(app);
// const auth = require('./controllers/auth.js')(app);
// const data = require('./data/flamewarz-db.js');

// // setting up basic routes
// app.get('/', (req, res) => {
// 	res.render('home.hbs')
// })

// app.listen(port, () => {
// 	console.log(`Example app listening on http://localhost:${port}/ !`)
// })
