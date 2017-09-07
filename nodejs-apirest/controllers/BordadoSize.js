var mongoose = require('mongoose');
var BordadoSize = mongoose.model('Size');

//GET - Return all registers
exports.findAll = function (req, res) {

  BordadoSize.find(function (err, bordadoSize) {
    if (err) res.send(500, err.message);
    console.log('GET /bordadoSize')
    res.status(200).json({
      bordadoSize: bordadoSize
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  BordadoSize.findById(req.params.id, function (err, bordadoSize) {
    if (err) return res.send(500, err.message);
    console.log('GET /bordadoSize/' + req.params.id);
    res.status(200).json({
      bordadoSize: bordadoSize
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var bordadoSize = new BordadoSize({
    size: req.body.size,
    costo: req.body.costo,
  });
  bordadoSize.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      bordadoSize: bordadoSize
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
  BordadoSize.findById(req.params.id, function (err, bordadoSize) {
    bordadoSize.size = req.body.size;
    bordadoSize.costo = req.body.costo;
    bordadoSize.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        bordadoSize: bordadoSize
      });
    });
  });
};
