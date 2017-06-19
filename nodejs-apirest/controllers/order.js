var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var OrderProducts = mongoose.model('OrderProducts');
var Product = mongoose.model('Product');
var Tecnica = mongoose.model('Tecnica');

 
//GET - Return all registers
exports.findAll = function (req, res) {

  Order.find(function (err, orders) {
    if (err) res.send(500, err.message);
    console.log('GET /orders');
    
      res.json({
        orders: orders
      });


  });
};



//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Order.findById(req.params.id, function (err, order) {
    if (err) return res.send(500, err.message);
    console.log('GET /orders/' + req.params.id);
    res.status(200).jsonp(client);
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var order = new Order({
    client: req.body.client,
    seller: req.body.seller,
    products: req.body.products,
    maquilas: req.body.maquilas,
    total: req.body.total,
    folio: req.body.folio,
    notes: req.body.notes,
    isPaid: req.body.isPaid,
    advance: req.body.advance,
    debt: req.body.debt,
    shippingWay: req.body.shippingWay,
    shippingDate: req.body.shippingDate,
    createdAt: new Date()

  });

  order.save(function (err, order) {
    if (err) return res.send(500, err.message);
 
  res.status(200).json({
      order: order
    });
    

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
  Oder.findById(req.params.id, function (err, order) {
    order.client = req.body.client,
      order.seller = req.body.seller,
      order.products = req.body.products,
      order.maquilas = req.body.maquilas,
      order.total = req.body.total,
      order.folio = req.body.folio,
      order.notes = req.body.notes,
      order.advance = req.body.advance,
      order.debt = req.body.debt,
      order.shippingWay = req.body.shippingWay,
      order.shippingDate = req.body.shippingDate
    order.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        order: order
      });
    });
  });
};

