const express = require('express');
const exprhbs = require('express-handlebars');

const app = express();
const port = 3000;

const posts = require('./controllers/posts.js')(app);

// set up handlebars
app.engine('.hbs', exprhbs({
	extname: '.hbs',
	defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

// override with POST having ?_method=DELETE or ?_method=PUT
// app.use(express.static('public'));
// app.use(methodOverride('_method'));


app.get('/', (req, res) => {
	res.render('home')
})

app.get('/posts/new', (req, res) => {
	res.render('posts-new')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))