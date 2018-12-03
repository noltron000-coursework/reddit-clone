const express = require('express');
const exprHBS = require('express-handlebars');
const exprVld = require('express-validator');
const bodyPrs = require('body-parser');
const bCrypt = require('bcryptjs')
const dotENV = require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;

/* all middleware must appear after express(); is initialized. */

// set up handlebars
app.engine('.hbs', exprHBS({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// use body parser
app.use(bodyPrs.json());
app.use(bodyPrs.urlencoded({
	extended: false
}));

// use validator - adding after parser init!
app.use(exprVld());

// use cookie parser for JWTs etc
app.use(cookieParser());

// // use method override - with POST having ?_method=DELETE or ?_method=PUT
// app.use(express.static('public'));
// app.use(methodOverride('_method'));

// require other files
const subflames = require('./controllers/subflames.js')(app);
const flares = require('./controllers/flares.js')(app);
const embers = require('./controllers/embers.js')(app);
const auth = require('./controllers/auth.js')(app);
const data = require('./data/flamewarz-db.js');

// setting up basic routes
app.get('/', (req, res) => {
	console.log(req.cookies);
	res.render('home')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
})