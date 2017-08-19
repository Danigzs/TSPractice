var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();
var path = require('path');
var __projectRoot = __dirname + '/../';
var cors = require('cors')
app.use(cors())

// Connection to DB
var db;
mongoose.connect('mongodb://localhost/bordesa', function (err, res) {
  if (err) throw err;
  db = res;
  console.log('Connected to Database');
});

// Middlewares

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__projectRoot));


// Import Models and Controllers
var models = require('./models/client')(app, mongoose);
var modelProvideer = require('./models/provideer')(app, mongoose);
var modelSeller = require('./models/seller')(app, mongoose);
var modelsTecnica = require('./models/tecnica')(app, mongoose);
var modelProduct = require('./models/product')(app, mongoose);
var modelOrder = require('./models/order')(app, mongoose);
var modelTecnicaCotizacion = require('./models/tecnicaCotizacion')(app, mongoose);
var modelProductCotizacion = require('./models/productCotizacion')(app, mongoose);
var modelOrder = require('./models/order')(app, mongoose);
var modelOrderProducts = require('./models/orderProducts')(app, mongoose);
var modelPayment = require('./models/payment')(app, mongoose);
var modelRole = require('./models/role')(app, mongoose);
var modelUser = require('./models/user')(app, mongoose);
var modelBordado = require('./models/bordado')(app, mongoose);
var modelSerigrafia = require('./models/serigrafia')(app, mongoose);
var modelSublimado = require('./models/sublimado')(app, mongoose);

var ClientCtrl = require('./controllers/client');
var ProvideerCtrl = require('./controllers/provideer');
var OrderCtrl = require('./controllers/order');
var TecnicaCtrl = require('./controllers/tecnica');
var ProductCtrl = require('./controllers/product');
var SellerCtrl = require('./controllers/seller');
var PaymentCtrl = require('./controllers/payment');
var HomeCtrl = require('./controllers/home');
var RoleCtrl = require('./controllers/role');
var UserCtrl = require('./controllers/user');
var BordadoCtrl = require('./controllers/bordado');
var SerigrafiaCtrl = require('./controllers/serigrafia');
var SublimadoCtrl = require('./controllers/sublimado')

var OrderProductsCtrl = require('./controllers/orderProducts');

var router = express.Router();
// Index - Route
// app.route('/*').get(function(req, res) { 
//     return res.sendFile(path.join(__projectRoot, 'index.html')); 
// });

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


//Provideer
api.route('/provideers')
  .get(ProvideerCtrl.findAll)
  .post(ProvideerCtrl.add);

api.route('/provideers/:id')
  .get(ProvideerCtrl.findById)
  .put(ProvideerCtrl.update)
  .delete(ProvideerCtrl.delete);



//Roles Routes
api.route('/roles')
  .get(RoleCtrl.findAll)

api.route('/roles/:id')
  .get(RoleCtrl.findById)

//User Routes
api.route('/users')
  .get(UserCtrl.findAll)

api.route('/users/:id')
  .get(UserCtrl.findById)

api.route('/login')
  .post(UserCtrl.login)

api.route('/register')
  .post(UserCtrl.register)


// 


api.route('/home')
  .get(HomeCtrl.getHome)

api.route('/orders')
  .get(OrderCtrl.findAll)
  .post(OrderCtrl.add);

api.route('/getLastOrder')
  .get(OrderCtrl.getLast)

api.route('/ordersByFolio/:id')
  .get(OrderCtrl.getOrderByFolio);

api.route('/orders/:id')
  .get(OrderCtrl.findById)
  .put(OrderCtrl.update)

api.route('/orderProducts')
  .get(OrderProductsCtrl.findAll)
  .post(OrderProductsCtrl.add);


api.route('/payments')
  .get(PaymentCtrl.findAll)
  .post(PaymentCtrl.add);

api.route('/getOrderPayments')
  .get(PaymentCtrl.getOrderPayments);

api.route('/tecnicas')
  .get(TecnicaCtrl.findAll)
  .post(TecnicaCtrl.add);

api.route('/tecnicas/:id')
  .get(TecnicaCtrl.findById)
  .put(TecnicaCtrl.update)

api.route('/bordado')
  .get(BordadoCtrl.findAll)
  .post(BordadoCtrl.add);

api.route('/bordado/:id')
  .get(BordadoCtrl.findById)
  .put(BordadoCtrl.update)

api.route('/serigrafia')
  .get(SerigrafiaCtrl.findAll)
  .post(SerigrafiaCtrl.add);

api.route('/serigrafia/:id')
  .get(SerigrafiaCtrl.findById)
  .put(SerigrafiaCtrl.update)

api.route('/sublimado')
  .get(SublimadoCtrl.findAll)
  .post(SublimadoCtrl.add);

api.route('/sublimado/:id')
  .get(SublimadoCtrl.findById)
  .put(SublimadoCtrl.update)

api.route('/products')
  .get(ProductCtrl.findAll)
  .post(ProductCtrl.add);

api.route('/products/:id')
  .get(ProductCtrl.findById)
  .put(ProductCtrl.update);




//
// ─── SELLERS ROUTES ─────────────────────────────────────────────────────────────
//


api.route('/sellers')
  .get(SellerCtrl.findAll)
  .post(SellerCtrl.add);

api.route('/sellers/:id')
  .get(SellerCtrl.findById)
  .put(SellerCtrl.update);

app.use('/api', api);


// Start server
app.listen(8000, '0.0.0.0', function () {
  console.log("Node server running on http://localhost:8000");
});
