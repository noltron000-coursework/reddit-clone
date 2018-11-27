const express = require('express');
const exphbs = require('express-handlebars');


const app = express();
const port = 3000;

// set up handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// override with POST having ?_method=DELETE or ?_method=PUT
// app.use(express.static('public'));
// app.use(methodOverride('_method'));



app.get('/', (req, res) => {
	res.render('home')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))