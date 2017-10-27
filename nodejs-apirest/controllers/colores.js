var mongoose = require('mongoose');
var Colores = mongoose.model('Colores');

//GET - Return all registers
exports.findAll = function (req, res) {

    Colores.find(function (err, colores) {
    if (err) res.send(500, err.message);
    console.log('GET /colores')
    res.status(200).json({
        colores: colores
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    Colores.findById(req.params.id, function (err, colores) {
    if (err) return res.send(500, err.message);
    console.log('GET /colores/' + req.params.id);
    res.status(200).json({
        colores: colores
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var colores = new Colores({
    color: req.body.color,
    hilo: req.body.hilo,
    marca: req.body.marca,
  });
  colores.save(function (err, colores) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        colores: colores
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    Colores.findById(req.params.id, function (err, colores) {
        colores.color = req.body.color;
        colores.hilo = req.body.hilo;
        colores.marca = req.body.marca;
        colores.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        colores: colores
      });
    });
  });
};
