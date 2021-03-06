var mongoose = require('mongoose');
var Posiciones = mongoose.model('Posiciones');

//GET - Return all registers
exports.findAll = function (req, res) {

    Posiciones.find(function (err, posiciones) {
    if (err) res.send(500, err.message);
    console.log('GET /posiciones')
    res.status(200).json({
        posiciones: posiciones
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    Posiciones.findById(req.params.id, function (err, posiciones) {
    if (err) return res.send(500, err.message);
    console.log('GET /posiciones/' + req.params.id);
    res.status(200).json({
        posiciones: posiciones
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var posiciones = new Posiciones({
    posiciones: req.body.posiciones,
    costo: req.body.costo,
  });
  posiciones.save(function (err, posiciones) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        posiciones: posiciones
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    Posiciones.findById(req.params.id, function (err, posiciones) {
    posiciones.posiciones = req.body.posiciones;
    posiciones.costo = req.body.costo;
    posiciones.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        posiciones: posiciones
      });
    });
  });
};

//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  Posiciones.findById(req.params.id, function (err, posiciones) {
    if(posiciones)
    posiciones.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  }); 
};

