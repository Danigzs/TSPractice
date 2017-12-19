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
var modelTransfer = require('./models/transfer')(app, mongoose);
var modelPosiciones = require('./models/posiciones')(app, mongoose);
var modelbordadoNombre = require('./models/BordadoNombre')(app, mongoose);
var modelbordadoPuntadas = require('./models/BordadoPuntadas')(app, mongoose);
var modelbordadoTamaño = require('./models/BordadoSize')(app, mongoose);
var modelserigrafiaTipotinta = require('./models/SerigrafiaTipoTinta')(app, mongoose);
var modelSerigrafiaPrecioBordesa = require('./models/serigrafiaPrecioBordesa')(app, mongoose);
var modelSerigrafiaPrecioCliente = require('./models/serigrafiaPrecioCliente')(app, mongoose);
var modelAppConfig = require('./models/appConfig')(app, mongoose);
var modelColores = require('./models/colores')(app, mongoose);
var modelubicaciones = require ('./models/ubicaciones')(app, mongoose);
var modelserigrafiaPrecioBordesa = require('./models/serigrafiaPrecioBordesa')(app, mongoose);
var modelserigrafiaSize = require('./models/serigrafiaSize')(app, mongoose);
var modelsublimadoPrecio = require('./models/sublimadoPrecio')(app,mongoose);
var modelsublimadoPrecioMaquila = require('./models/sublimadoPrecioMaquila')(app,mongoose);
var modelsublimadoSize = require('./models/sublimadoSize')(app, mongoose);
var modeltransferSize = require('./models/transferSize')(app, mongoose);
var modeltransferPrecio = require('./models/transferPrecio')(app, mongoose);
var modeltransferPrecioMaquila = require('./models/transferPrecioMaquila')(app, mongoose);
var modelvinilTipo = require('./models/vinilTipo')(app, mongoose);
var modelvinilPrecio = require('./models/vinilPrecio')(app, mongoose);
var modelvinilPrecioMaquila = require('./models/vinilPrecioMaquila')(app, mongoose);
var modelvinilSize = require('./models/vinilSize')(app, mongoose);
var modelVinil = require('./models/vinil')(app, mongoose);





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
var SublimadoCtrl = require('./controllers/sublimado');
var TransferCtrl = require('./controllers/transfer');
var bordadoNombreCtrl = require('./controllers/BordadoNombre');
var bordadoPuntadasCtrl = require('./controllers/BordadoPuntadas');
var bordadoTamañoCtrl = require('./controllers/BordadoSize');
var SerigrafiaTipoTintaCtrl = require ('./controllers/SerigrafiaTipoTinta');
var serigrafiaPrecioBordesaCtrl = require ('./controllers/serigrafiaPrecioBordesa');
var serigrafiaPrecioClienteCtrl = require ('./controllers/serigrafiaPrecioCliente');
var appConfigCtrl = require ('./controllers/appConfig');
var posicionesCtrl = require ('./controllers/posiciones');
var coloresCtrl = require ('./controllers/colores');
var ubicacionesCtrl = require('./controllers/ubicaciones');
var serigrafiaPrecioBordesaCtrl = require('./controllers/serigrafiaPrecioBordesa');
var serigrafiaSizeCtrl = require('./controllers/serigrafiaSize');
var sublimadoPrecioCtrl = require('./controllers/sublimadoPrecio');
var sublimadoPrecioMaquilaCtrl = require('./controllers/sublimadoPrecioMaquila');
var sublimadoSizeCtrl = require('./controllers/sublimadoSize');
var transferSizeCtrl = require('./controllers/transferSize');
var transferPrecioCtrl = require('./controllers/transferPrecio');
var transferPrecioMaquilaCtrl = require('./controllers/transferPrecioMaquila');
var vinilTipoCtrl = require('./controllers/vinilTipo');
var vinilPrecioCtrl = require('./controllers/vinilPrecio');
var vinilPrecioMaquilaCtrl = require('./controllers/vinilPrecioMaquila');
var vinilSizeCtrl = require('./controllers/vinilSize');
var VinilCtrl = require('./controllers/vinil');



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

api.route('/transfer')
  .get(TransferCtrl.findAll)
  .post(TransferCtrl.add);

api.route('/transfer/:id')
  .get(TransferCtrl.findById)
  .put(TransferCtrl.update)

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


api.route('/bordadoNombre')
  .get(bordadoNombreCtrl.findAll)
  .post(bordadoNombreCtrl.add)

api.route('/bordadoNombre/:id')
  .get(bordadoNombreCtrl.findById)
  .put(bordadoNombreCtrl.update)
  .delete(bordadoNombreCtrl.delete);

api.route('/bordadoSize')
  .get(bordadoTamañoCtrl.findAll)
  .post(bordadoTamañoCtrl.add)

api.route('/bordadoSize/:id')
  .get(bordadoTamañoCtrl.findById)
  .put(bordadoTamañoCtrl.update)
  .delete(bordadoTamañoCtrl.delete);
  

api.route('/bordadoPuntadas')
  .get(bordadoPuntadasCtrl.findAll)
  .post(bordadoPuntadasCtrl.add)

api.route('/bordadoPuntadas/:id')
  .get(bordadoPuntadasCtrl.findById)
  .put(bordadoPuntadasCtrl.update)
  .delete(bordadoPuntadasCtrl.delete);
  

  api.route('/tipos')
  .get(SerigrafiaTipoTintaCtrl.findAll)
  .post(SerigrafiaTipoTintaCtrl.add)

api.route('/tipos/:id')
  .get(SerigrafiaTipoTintaCtrl.findById)
  .put(SerigrafiaTipoTintaCtrl.update)
  .delete(SerigrafiaTipoTintaCtrl.delete);
  

api.route('/serigrafiaPrecioBordesa')
  .get(serigrafiaPrecioBordesaCtrl.findAll)
  
  .post(serigrafiaPrecioBordesaCtrl.add)

api.route('/findByInkQuantity')
.get(serigrafiaPrecioBordesaCtrl.findByInkQuantity)

api.route('/serigrafiaPrecioBordesa/:id')
  .get(serigrafiaPrecioBordesaCtrl.findById) 
  .delete(serigrafiaPrecioBordesaCtrl.delete);
  

api.route('/serigrafiaPrecioCliente')
  .get(serigrafiaPrecioClienteCtrl.findAll)
  .post(serigrafiaPrecioClienteCtrl.add)

api.route('/findByInkQuantityWItem')
.get(serigrafiaPrecioClienteCtrl.findByInkQuantityWItem)


api.route('/serigrafiaPrecioCliente/:id')
  .get(serigrafiaPrecioClienteCtrl.findById)


api.route('/appConfig')
  .get(appConfigCtrl.findAll)
  .post(appConfigCtrl.add)

api.route('/appConfig/:id')
  .get(appConfigCtrl.findById)
  .put(appConfigCtrl.update);
  

  api.route('/posiciones')
  .get(posicionesCtrl.findAll)
  .post(posicionesCtrl.add);

api.route('/posiciones/:id')
  .get(posicionesCtrl.findById)
  .put(posicionesCtrl.update)
  .delete(posicionesCtrl.delete);
  

  api.route('/ubicaciones')
  .get(ubicacionesCtrl.findAll)
  .post(ubicacionesCtrl.add);

api.route('/ubicaciones/:id')
  .get(ubicacionesCtrl.findById)
  .put(ubicacionesCtrl.update)
  .delete(ubicacionesCtrl.delete);
  

  api.route('/colores')
  .get(coloresCtrl.findAll)
  .post(coloresCtrl.add);

api.route('/colores/:id')
  .get(coloresCtrl.findById)
  .put(coloresCtrl.update)
  .delete(coloresCtrl.delete);
  


api.route('/products')
  .get(ProductCtrl.findAll)
  .post(ProductCtrl.add);

api.route('/products/:id')
  .get(ProductCtrl.findById)
  .put(ProductCtrl.update);

  api.route('/serigrafiaSize')
  .get(serigrafiaSizeCtrl.findAll)
  .post(serigrafiaSizeCtrl.add)

api.route('/serigrafiaSize/:id')
  .get(serigrafiaSizeCtrl.findById)
  .put(serigrafiaSizeCtrl.update)
  .delete(serigrafiaSizeCtrl.delete);
  

  api.route('/sublimadoPrecio')
  .get(sublimadoPrecioCtrl.findAll)
  .post(sublimadoPrecioCtrl.add)

api.route('/sublimadoPrecio/:id')
  .get(sublimadoPrecioCtrl.findById)

api.route('/sublimadoPrecio/:id')
  .get(sublimadoPrecioCtrl.findById)


  api.route('/findBySublimadoPrecio')
  .get(sublimadoPrecioCtrl.findBySublimadoPrecio)

  api.route('/findByTransferPrecio')
  .get(transferPrecioCtrl.findByTransferPrecio)

api.route('/sublimadoPrecioMaquila')
  .get(sublimadoPrecioMaquilaCtrl.findAll)
  .post(sublimadoPrecioMaquilaCtrl.add)

api.route('/sublimadoPrecioMaquila/:id')
  .get(sublimadoPrecioMaquilaCtrl.findById)
  .delete(sublimadoPrecioMaquilaCtrl.delete)
  

api.route('/findBySublimadoPrecioMaquila')
  .get(sublimadoPrecioMaquilaCtrl.findBySublimadoPrecioMaquila)

  api.route('/findByTransferPrecioMaquila')
  .get(transferPrecioMaquilaCtrl.findByTransferPrecioMaquila)
  
  api.route('/findByVinilPrecioMaquila')
  .get(vinilPrecioMaquilaCtrl.findByVinilPrecioMaquila)

  api.route('/findByVinilPrecio')
  .get(vinilPrecioCtrl.findByVinilPrecio)

  api.route('/sublimadoSize')
  .get(sublimadoSizeCtrl.findAll)
  .post(sublimadoSizeCtrl.add)

api.route('/sublimadoSize/:id')
  .get(sublimadoSizeCtrl.findById)
  .put(sublimadoSizeCtrl.update)  
  .delete(sublimadoSizeCtrl.delete)
  

  api.route('/transferSize')
  .get(transferSizeCtrl.findAll)
  .post(transferSizeCtrl.add)

api.route('/transferSize/:id')
  .get(transferSizeCtrl.findById)
  .put(transferSizeCtrl.update)  
  .delete(transferSizeCtrl.delete)
  
  api.route('/transferPrecio')
  .get(transferPrecioCtrl.findAll)
  .post(transferPrecioCtrl.add)

api.route('/transferPrecio/:id')
  .get(transferPrecioCtrl.findById)
 
  api.route('/transferPrecioMaquila')
  .get(transferPrecioMaquilaCtrl.findAll)
  .post(transferPrecioMaquilaCtrl.add)

api.route('/transferPrecioMaquila/:id')
  .get(transferPrecioMaquilaCtrl.findById)

api.route('/findByTransferPrecio')
  .get(transferPrecioCtrl.findByTransferPrecio)

api.route('/findByTransferPrecioMaquila')
  .get(transferPrecioMaquilaCtrl.findByTransferPrecioMaquila)

  api.route('/vinilTipo')
  .get(vinilTipoCtrl.findAll)
  .post(vinilTipoCtrl.add)

api.route('/vinilTipo/:id')
  .get(vinilTipoCtrl.findById)
  .put(vinilTipoCtrl.update)
  .delete(vinilTipoCtrl.delete)
  

  api.route('/vinilPrecio')
  .get(vinilPrecioCtrl.findAll)
  .post(vinilPrecioCtrl.add)

api.route('/vinilPrecio/:id')
  .get(vinilPrecioCtrl.findById)


  api.route('/vinilPrecioMaquila')
  .get(vinilPrecioMaquilaCtrl.findAll)
  .post(vinilPrecioMaquilaCtrl.add)

api.route('/vinilPrecioMaquila/:id')
  .get(vinilPrecioMaquilaCtrl.findById)
  .delete(vinilPrecioMaquilaCtrl.delete)


  api.route('/vinilSize')
  .get(vinilSizeCtrl.findAll)
  .post(vinilSizeCtrl.add)

api.route('/vinilSize/:id')
  .get(vinilSizeCtrl.findById)
  .put(vinilSizeCtrl.update)  
  .delete(vinilSizeCtrl.delete)
  

  api.route('/vinil')
  .get(VinilCtrl.findAll)
  .post(VinilCtrl.add);

api.route('/vinil/:id')
  .get(VinilCtrl.findById)
  .put(VinilCtrl.update)

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
