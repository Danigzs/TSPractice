var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Payment = mongoose.model('Payment');
var Product = mongoose.model('Product');
var Tecnica = mongoose.model('Tecnica');
var Promise = require('promise');

function fillOrders() {
  return new Promise(function (resolve, reject) {
    Order.find(function (err, orders) {
      if (err) res.send(500, err.message);
      console.log('GET /orders ' + orders.length);
      orders.forEach(function (order, index) {
        order.payments = 0;
        Payment.find({
          order_id: order._id
        }, function (err, payments) {
          if(payments)
          payments.forEach(function (payment) {
            order.payments += payment.amount;
          });
        });

        if (index == orders.length-1) {
          resolve(orders)
        }
      });
    });
  });
}


exports.getOrderByFolio = function(req,res){
  Order.find({folio:req.params.folio,function(err,orders) {
    if(err) return res.send(500,err.message);
    res.status(200).json({orders:orders});
  }})
}
//GET - Return all registers
exports.findAll = function (req, res) {

  var promise = fillOrders();
  promise.then(function (orders) {
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


exports.getLast = function (req, res) {
  Order.findOne({
    $query: {},
    $orderby: {
      _id: -1
    }
  }, {}, {
    limit: 1
  }, function (err, order) {
    if (err) return res.send(500, err.message);
    console.log(parseInt(order.folio) + 1);
    res.status(200).json({
      order: order
    });

  });



}

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);

  Order.findOne({
    $query: {},
    $orderby: {
      _id: -1
    }
  }, {}, {
    limit: 1
  }, function (err, ord) {


    if (err) return res.send(500, err.message);
    console.log("ORDEEEEN" + ord);
    var order = new Order({
      client: req.body.client,
      seller: req.body.seller,
      products: req.body.products,
      maquilas: req.body.maquilas,
      total: req.body.total,
      folio: (ord) ? parseInt(ord.folio) + 1 : 1,
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
