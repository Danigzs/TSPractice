var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();
var path = require('path');
var __projectRoot = __dirname + '/../';

// Connection to DB
mongoose.connect('mongodb://localhost/clients', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());
app.use(express.static(__projectRoot));

// Import Models and Controllers
var models = require('./models/client')(app, mongoose);
var ClientCtrl = require('./controllers/client');

var router = express.Router();

// Index - Route
app.get('/', function (req, res) {
    res.sendFile(path.join(__projectRoot + '/index.html'));
});

app.use(router);

// API routes
var api = express.Router();

api.route('/clients') 
 .get(ClientCtrl.findAll)
 .post(ClientCtrl.add);

api.route('/clients/:id') 
 .get(ClientCtrl.findById)
 .put(ClientCtrl.update)
 .delete(ClientCtrl.delete);

app.use('/api', api);


// Start server
app.listen(8888, function() {
 console.log("Node server running on http://localhost:8888");
});