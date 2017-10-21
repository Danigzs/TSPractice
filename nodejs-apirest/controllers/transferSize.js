var mongoose = require('mongoose');
var TransferSize = mongoose.model('transferSize');

//GET - Return all registers
exports.findAll = function (req, res) {

    TransferSize.find(function (err, transferSize) {
    if (err) res.send(500, err.message);
    console.log('GET /transferSize')
    res.status(200).json({
        transferSize: transferSize
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    TransferSize.findById(req.params.id, function (err, transferSize) {
    if (err) return res.send(500, err.message);
    console.log('GET /transferSize/' + req.params.id);
    res.status(200).json({
        transferSize: transferSize
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var transferSize = new TransferSize({
    size: req.body.size,
    costo: req.body.costo,
  });
  transferSize.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        transferSize: transferSize
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    TransferSize.findById(req.params.id, function (err, transferSize) {
        transferSize.size = req.body.size;
        transferSize.costo = req.body.costo;
        transferSize.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        transferSize: transferSize
      });
    });
  });
};
