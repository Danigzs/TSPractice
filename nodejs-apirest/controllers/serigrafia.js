var mongoose = require('mongoose');
var Serigrafia = mongoose.model('Serigrafia');

//GET - Return all registers
exports.findAll = function (req, res) {

  Serigrafia.find(function (err, serigrafia) {
    if (err) res.send(500, err.message);
    console.log('GET /serigrafia')
    res.status(200).json({
      serigrafia: serigrafia
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Serigrafia.findById(req.params.id, function (err, serigrafia) {
    if (err) return res.send(500, err.message);
    console.log('GET /serigrafia/' + req.params.id);
    res.status(200).json({
      serigrafia: serigrafia
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var serigrafia = new Serigrafia({
    size: req.body.size,
    position: req.body.position,
    price: req.body.price,
    tintas: req.body.tintas
  });
  serigrafia.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      serigrafia: serigrafia
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    Serigrafia.findById(req.params.id, function (err, serigrafia) {
    serigrafia.size = req.body.size;
    serigrafia.position = req.body.position;
    serigrafia.price = req.body.price;
    serigrafia.tintas = req.body.tintas;
    serigrafia.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({client:client});
    });
  });
};

