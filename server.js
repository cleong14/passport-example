var express = require('express');
var app = express();

var PORT = 3000;

var server = app.listen(PORT, function () {
  console.log('Listening on port', server.address().port);
});