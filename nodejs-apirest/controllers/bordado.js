var mongoose = require('mongoose');
var Bordado = mongoose.model('Bordado');

//GET - Return all registers
exports.findAll = function (req, res) {

  Bordado.find(function (err, bordado) {
    if (err) res.send(500, err.message);
    console.log('GET /bordado')
    res.status(200).json({
      bordado: bordado
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Bordado.findById(req.params.id, function (err, bordado) {
    if (err) return res.send(500, err.message);
    console.log('GET /bordado/' + req.params.id);
    res.status(200).json({
      bordado: bordado
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var bordado = new Bordado({
    size: req.body.size,
    position: req.body.position,
    price: req.body.price,
    puntadas: req.body.puntadas,
    bordado: req.body.bordado,
    colores: req.body.colores
  });
  bordado.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      bordado: bordado
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    Bordado.findById(req.params.id, function (err, bordado) {
    bordado.size = req.body.size;
    bordado.position = req.body.position;
    bordado.price = req.body.price;
    bordado.puntadas=req.body.puntadas;
    bordado.bordado=req.body.bordado;
    bordado.colores=req.body.colores;
    bordado.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({client:client});
    });
  });
};

