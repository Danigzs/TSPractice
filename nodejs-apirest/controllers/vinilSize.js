var mongoose = require('mongoose');
var VinilSize = mongoose.model('vinilSize');

//GET - Return all registers
exports.findAll = function (req, res) {

    VinilSize.find(function (err, vinilSize) {
    if (err) res.send(500, err.message);
    console.log('GET /vinilSize')
    res.status(200).json({
        vinilSize: vinilSize
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    VinilSize.findById(req.params.id, function (err, vinilSize) {
    if (err) return res.send(500, err.message);
    console.log('GET /vinilSize/' + req.params.id);
    res.status(200).json({
        vinilSize: vinilSize
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var vinilSize = new VinilSize({
    size: req.body.size,
    costo: req.body.costo,
  });
  vinilSize.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        vinilSize: vinilSize
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    VinilSize.findById(req.params.id, function (err, vinilSize) {
        vinilSize.size = req.body.size;
        vinilSize.costo = req.body.costo;
        vinilSize.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        vinilSize: vinilSize
      });
    });
  });
};

//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  VinilSize.findById(req.params.id, function (err, vinilSize) {
    if(vinilSize)
    vinilSize.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  }); 
};
