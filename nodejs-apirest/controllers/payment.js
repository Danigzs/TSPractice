var mongoose = require('mongoose');
var Payment = mongoose.model('Payment');
var Order = mongoose.model('Order');
//GET - Return all registers
exports.findAll = function (req, res) {

  Payment.find(function (err, payments) {
    if (err) res.send(500, err.message);
    console.log('GET /payments')
    res.json({
      payments: payments
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Payment.findById(req.params.id, function (err, payment) {
    if (err) return res.send(500, err.message);
    console.log('GET /clients/' + req.params.id);
    res.status(200).jsonp(payment);
  });
};


exports.getOrderPayments = function (req, res) {
  
  console.log(req.query);
  Payment.find({
    order_id: req.query.id
  }, function (err, payments) {
    if (err) res.send(500, err.message);
    res.status(200).json({
      payments: payments
    });
  });
}

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var payment = new Payment({
    order_id: req.body.order_id,
    paymentWay: req.body.paymentWay,
    date: req.body.date,
    concept: req.body.concept,
    amount: req.body.amount
  });
  payment.save(function (err, payment) {
    if (err) {
      console.log(err);
      return res.status(500).json({
      response:{status: 500,
      success:false,
      message: "Ha ocurrido un problema. El Pago no se ha realizado correctamente."
    }});
    }
    Order.findById({_id:payment.order_id}, function (err, order) {
      if(err) return res.send(500,err.message);
      order.pagosTotales = payment.amount;
      order.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        response:{ 
        status: 200,
        success:true,
        message: "El Pago se ha realizado correctamente"
      }});
      });
    })
  });
};
