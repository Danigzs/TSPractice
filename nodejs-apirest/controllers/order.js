var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var OrderProducts = mongoose.model('OrderProducts');

//GET - Return all registers
exports.findAll = function (req, res) {

  Order.find(function (err, orders) {
    if (err) res.send(500, err.message);
    console.log('GET /orders')
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
    client_id: req.body.client._id,
    seller_id: req.body.seller._id,
    total: req.body.total,
    folio: req.body.folio,
    notes: req.body.notes,
    advance: req.body.advance,
    discount: req.body.discount,
    shippingWay: req.body.shippingWay,
    shippingDate: req.body.shippingDate

  });

  order.save(function (err, order) {
    if (err) return res.send(500, err.message);

    var prods = req.body.products;
    var maquilas = req.body.maquilas;
    console.log(JSON.stringify(prods));
    prods.forEach(function(element) {
    console.log("ORDER SAVED, saving prod = " + element);
    
      var orderProducts = new OrderProducts({
          order_id:order._id,
          product_id:element._id,
          maquila_id:null,
          quantity:element.quantity,
          price:element.price
      });
          console.log("orderProducts = " + JSON.stringify(orderProducts));

      orderProducts.save(function(err,op){

      })
      
    }, this);
    maquilas.forEach(function(element) {
        var orderProducts = new OrderProducts({
          order_id:order._id,
          product_id:null,
          maquila_id:element._id,
          quantity:element.quantity,
          price:element.price
      });
      orderProducts.save(function(err,op){
        
      })
    }, this);


    res.status(200).json({
      order: order
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
  Oder.findById(req.params.id, function (err, order) {
  order.client_id= req.body.client_id,
    order.seller_id= req.body.seller_id,
    order.products= req.body.products,
    order.maquilas= req.body.maquilas,
    order.total= req.body.total,
    order.folio= req.body.folio,
    order.notes= req.body.notes,
    order.advance= req.body.advance,
    order.discount= req.body.discount,
    order.shippingWay= req.body.shippingWay,
    order.shippingDate= req.body.shippingDate
    order.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        order: order
      });
    });
  });
};

