var mongoose = require('mongoose');
var Payment = mongoose.model('Payment');

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


exports.getOrderPayments = function(req,res){
  Payment.find({order_id:req.params.id},function(err,payments){
    if(err)res.send(500,err.message);
    res.status(200).json({
      payments:payments
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
    if (err) return res.send(500, err.message);
    res.status(200).json({
      payment: payment
    });

  });
};
  
