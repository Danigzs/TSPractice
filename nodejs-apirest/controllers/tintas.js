var mongoose = require('mongoose');
var Tintas = mongoose.model('Tintas');

//GET - Return all registers
exports.findAll = function (req, res) {

    Tintas.find(function (err, tintas) {
    if (err) res.send(500, err.message);
    console.log('GET /tintas')
    res.status(200).json({
        tintas: tintas
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    Tintas.findById(req.params.id, function (err, tintas) {
    if (err) return res.send(500, err.message);
    console.log('GET /tintas/' + req.params.id);
    res.status(200).json({
        tintas: tintas
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var tintas = new Tintas({
    tinta: req.body.tinta,
    costo: req.body.costo,
  });
  tintas.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        tintas: tintas
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    Tintas.findById(req.params.id, function (err, tintas) {
        tintas.tinta = req.body.tinta;
        tintas.costo = req.body.costo;
        tintas.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        tintas: tintas
      });
    });
  });
};
