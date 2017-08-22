var mongoose = require('mongoose');
var Transfer = mongoose.model('Transfer');

//GET - Return all registers
exports.findAll = function (req, res) {

  Transfer.find(function (err, transfer) {
    if (err) res.send(500, err.message);
    console.log('GET /transfer')
    res.status(200).json({
      transfer: transfer
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Transfer.findById(req.params.id, function (err, transfer) {
    if (err) return res.send(500, err.message);
    console.log('GET /transfer/' + req.params.id);
    res.status(200).json({
      transfer: transfer
        });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var transfer = new Transfer({
    size: req.body.size,
    position: req.body.position,
    price: req.body.price,   
  });
  transfer.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      transfer: transfer
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    Transfer.findById(req.params.id, function (err, transfer) {
    transfer.size = req.body.size;
    transfer.position = req.body.position;
    transfer.price = req.body.price;
    transfer.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({client:client});
    });
  });
};

