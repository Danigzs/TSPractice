var mongoose = require('mongoose');
var VinilTipo = mongoose.model('vinilTipo');

//GET - Return all registers
exports.findAll = function (req, res) {

    VinilTipo.find(function (err, vinilTipo) {
    if (err) res.send(500, err.message);
    console.log('GET /vinilTipo')
    res.status(200).json({
        vinilTipo: vinilTipo
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    VinilTipo.findById(req.params.id, function (err, vinilTipo) {
    if (err) return res.send(500, err.message);
    console.log('GET /vinilTipo/' + req.params.id);
    res.status(200).json({
        vinilTipo: vinilTipo
        });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var vinilTipo = new VinilTipo({
    nombre: req.body.nombre,
    costo: req.body.costo,
  });
  vinilTipo.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        vinilTipo: vinilTipo
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    VinilTipo.findById(req.params.id, function (err, vinilTipo) {
        vinilTipo.nombre = req.body.nombre;
        vinilTipo.costo = req.body.costo;    
        vinilTipo.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({client:client});
    });
  });
};

//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  VinilTipo.findById(req.params.id, function (err, vinilTipo) {
    if(vinilTipo)
    vinilTipo.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  }); 
};