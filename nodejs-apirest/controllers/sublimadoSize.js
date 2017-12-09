var mongoose = require('mongoose');
var SublimadoSize = mongoose.model('sublimadoSize');

//GET - Return all registers
exports.findAll = function (req, res) {

  SublimadoSize.find(function (err, sublimadoSize) {
    if (err) res.send(500, err.message);
    console.log('GET /sublimadoSize')
    res.status(200).json({
        sublimadoSize: sublimadoSize
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    SublimadoSize.findById(req.params.id, function (err, sublimadoSize) {
    if (err) return res.send(500, err.message);
    console.log('GET /sublimadoSize/' + req.params.id);
    res.status(200).json({
        sublimadoSize: sublimadoSize
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var sublimadoSize = new SublimadoSize({
    size: req.body.size,
    costo: req.body.costo,
  });
  sublimadoSize.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        sublimadoSize: sublimadoSize
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    SublimadoSize.findById(req.params.id, function (err, sublimadoSize) {
        sublimadoSize.size = req.body.size;
        sublimadoSize.costo = req.body.costo;
        sublimadoSize.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        sublimadoSize: sublimadoSize
      });
    });
  });
};

exports.delete = function (req, res) {
  SublimadoSize.findById(req.params.id, function (err, sublimadoSize) {
    if(sublimadoSize)
    sublimadoSize.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  }); 
};