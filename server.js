const express = require('express');
const exprHBS = require('express-handlebars');
const bodyParse = require('body-parser');
const exprValid = require('express-validator');

const app = express();
const port = 8000;

// set up handlebars
app.engine('.hbs', exprHBS({
	extname: '.hbs',
	defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

// use body parser
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
	extended: false
}));

// use validator - adding after parser init!
app.use(exprValid());

// // use method override - with POST having ?_method=DELETE or ?_method=PUT
// app.use(express.static('public'));
// app.use(methodOverride('_method'));

// require other files
const subflames = require('./controllers/subflames.js')(app);
const flares = require('./controllers/flares.js')(app);
const embers = require('./controllers/embers.js')(app);
const data = require('./data/flamewarz-db.js');

// setting up basic routes
app.get('/', (req, res) => {
	res.render('home')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
})