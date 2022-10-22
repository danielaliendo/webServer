const { engine } = require('express-handlebars');
const express = require('express');
var path = require('path')

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});


app.get('/elements', (req, res) => {
  res.render('elements');
});


app.get('/generic', (req, res) => {
  res.render('generic');
});

app.listen(8080);