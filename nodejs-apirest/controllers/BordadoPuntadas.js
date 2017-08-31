var mongoose = require('mongoose');
var BordadoPuntadas = mongoose.model('Nombre');

//GET - Return all registers
exports.findAll = function (req, res) {

  BordadoPuntadas.find(function (err, bordadoPuntadas) {
    if (err) res.send(500, err.message);
    console.log('GET /bordadoPuntadas')
    res.status(200).json({
        bordadoPuntadas: bordadoPuntadas
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    BordadoPuntadas.findById(req.params.id, function (err, bordadoPuntadas) {
    if (err) return res.send(500, err.message);
    console.log('GET /bordadoPuntadas/' + req.params.id);
    res.status(200).json({
        bordadoPuntadas: bordadoPuntadas
        });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var bordadoPuntadas = new BordadoPuntadas({
    nombre: req.body.nombre,
    costo: req.body.costo,
  });
  nombre.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      costo: costo
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    BordadoPuntadas.findById(req.params.id, function (err, bordadoPuntadas) {
        bordadoPuntadas.nombre = req.body.nombre;
        bordadoPuntadas.costo = req.body.costo;    
        bordadoPuntadas.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({client:client});
    });
  });
};

