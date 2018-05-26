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
var userId = req.params.userId;
  var promise = fillOrders();
  promise.then(function (orders) {
    res.json({
      orders: orders
    });
  });

};


//GET - Return all registers
exports.findAllByUser = function (req, res) {
var userId = req.params.id;
console.log(req.params);
console.log("Get all orders by user " + userId);
  var promise = fillOrders();
  promise.then(function (orders) {
    res.json({
      orders: orders.filter(function(v,i){ if(!v.user) return false; if(v.user._id == userId) return true; })
    });
  });

};



//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Order.findById(req.params.id, function (err, order) {
    if (err) return res.send(500, err.message);
    console.log('GET /order/' + req.params.id);
    res.status(200).jsonp({orders:[order]});
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
      user: req.body.user,
      estimatedDate: req.body.estimatedDate,
      products: req.body.products,
      maquilas: req.body.maquilas,
      graficos: req.body.graficos,
      tecnicaBordados : req.body.tecnicaBordados,
      orderHistory: req.body.orderHistory,
      orderAreaHistory: req.body.orderAreaHistory,
      statusText: req.body.statusText,
      total: req.body.total,
      folio: (ord) ? parseInt(ord.folio) + 1 : 1,
      notes: req.body.notes,
      isPaid: req.body.isPaid,
      usercreador: req.body.usercreador,
      advance: req.body.advance,
      descuento:req.body.descuento,
      debt: req.body.debt,
      status: req.body.status,
      area: req.body.area,
      areaText: req.body.areaText,
      subTotal:req.body.subTotal, 
      esCotizacion:req.body.esCotizacion,
      shippingWay: req.body.shippingWay,
      shippingDate: req.body.shippingDate,
      paymentDate: req.body.paymentDate,
      requiereFactura: req.body.requiereFactura,
      factura: req.body.factura,
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
  var _order = new Order(req.body);

  Order.findById({_id:req.params.id}, function (err, order) {
 


    order.client = _order.client;
      order.seller = _order.seller;
      order.user = _order.user;
      order.products = _order.products;
      order.maquilas = _order.maquilas;
      order.estimatedDate = _order.estimatedDate;
      order.graficos = _order.graficos;
      order.orderHistory = _order.orderHistory;
      order.orderAreaHistory = _order.orderAreaHistory;
      order.tecnicaBordados = _order.tecnicaBordados;
      order.statusText = _order.statusText;
      order.areaText = _order.areaText;
      order.total = _order.total;
      order.folio = _order.folio;
      order.esCotizacion = _order.esCotizacion;
      order.status = _order.status;
      order.area = _order.area;
      order.usercreador =  _order.usercreador,
      order.subTotal =_order.subTotal;
      order.notes = _order.notes;
      order.descuento = _order.descuento;
      order.advance = _order.advance;
      order.debt = _order.debt;
      order.shippingWay = _order.shippingWay;
      order.shippingDate = _order.shippingDate;
      order.paymentDate = _order.paymentDate;
      order.requiereFactura = _order.requiereFactura;
      order.factura = _order.factura;
    order.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        order: order
      });
    });
  });
};
