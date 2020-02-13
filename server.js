var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var conn = require('./db_connection.js');
var routes = require('./routes/appRoutes');


app.use('/', routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);
console.log('API server started on: ' + port);