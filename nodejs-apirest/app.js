var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();
var path = require('path');

// Connection to DB
var db;
mongoose.connect('mongodb://localhost/bordesa', function(err, res) {
 if(err) throw err;
db = res;
 console.log('Connected to Database');
});

// Middlewares

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); 


// Import Models and Controllers
var models = require('./models/client')(app, mongoose);
var modelSeller = require('./models/seller')(app, mongoose);
var modelsTecnica = require('./models/tecnica')(app, mongoose);
var modelProduct = require('./models/product')(app, mongoose);
var modelOrder = require('./models/order')(app, mongoose);
var modelTecnicaCotizacion = require('./models/tecnicaCotizacion')(app, mongoose);
var modelProductCotizacion = require('./models/productCotizacion')(app, mongoose);
var modelOrder = require('./models/order')(app, mongoose);
var modelOrderProducts = require('./models/orderProducts')(app, mongoose);


var ClientCtrl = require('./controllers/client');
var OrderCtrl = require('./controllers/order');
var TecnicaCtrl = require('./controllers/tecnica');
var ProductCtrl = require('./controllers/product');
var SellerCtrl = require('./controllers/seller');
var OrderProductsCtrl = require('./controllers/orderProducts');

// API routes
var api = express.Router();

api.route('/clients') 
 .get(ClientCtrl.findAll)
 .post(ClientCtrl.add);

api.route('/clients/:id') 
 .get(ClientCtrl.findById)
 .put(ClientCtrl.update)
 .delete(ClientCtrl.delete);


api.route('/orders') 
 .get(OrderCtrl.findAll)
 .post(OrderCtrl.add);

api.route('/orders/:id') 
 .get(OrderCtrl.findById)
 .put(OrderCtrl.update)

 api.route('/orderProducts') 
 .get(OrderProductsCtrl.findAll)
 .post(OrderProductsCtrl.add);


api.route('/tecnicas') 
 .get(TecnicaCtrl.findAll)
 .post(TecnicaCtrl.add);

api.route('/tecnicas/:id') 
 .get(TecnicaCtrl.findById)
 .put(TecnicaCtrl.update)


api.route('/products') 
 .get(ProductCtrl.findAll)
 .post(ProductCtrl.add);

api.route('/products/:id') 
 .get(ProductCtrl.findById)
 .put(ProductCtrl.update);

api.route('/sellers') 
 .get(SellerCtrl.findAll)
 .post(SellerCtrl.add);

api.route('/sellers/:id') 
 .get(SellerCtrl.findById)
 .put(SellerCtrl.update);


app.use('/api', api);


// Start server
app.listen(8000, '0.0.0.0', function() {
 console.log("Node server running on http://localhost:8000");
});