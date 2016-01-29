var express = require('express');

var CONFIG = require('./config.json');

var app = express();

// dont need to require in jade
// express does this internally
app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/login', function (req, res) {
  res.render('login');
});

app.post('/login', function (req, res) {
  // TODO: Implement Logins!
  res.send('logging in...');
});

app.get('/secret', function (req, res) {
  res.render('secret');
});

var server = app.listen(CONFIG.PORT, function () {
  console.log('Listening on port', server.address().port);
});