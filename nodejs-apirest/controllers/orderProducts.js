var mongoose = require('mongoose');
var OrderProducts = mongoose.model('OrderProducts');

//GET - Return all registers
exports.findAll = function (req, res) {

  OrderProducts.find(function (err, orderProducts) {
    if (err) res.send(500, err.message);
    console.log('GET /orderProducts')
    res.json({
      orderProducts: orderProducts
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  OrderProducts.findById(req.params.id, function (err, orderProducts) {
    if (err) return res.send(500, err.message);
    console.log('GET /orderProducts/' + req.params.id);
    res.status(200).jsonp(orderProducts);
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var orderProducts = new OrderProducts({
    order_id: req.body.order_id,
    product_id: req.body.product_id,
    maquila_id: req.body.maquila_id,
    quantity: req.body.quantity,
    price: req.body.price

  });
  orderProducts.save(function (err, orderProduct) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      orderProduct: orderProduct
    });

  });
};
 
