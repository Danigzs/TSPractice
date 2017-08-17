var mongoose = require('mongoose');
var Sublimado = mongoose.model('Sublimado');

//GET - Return all registers
exports.findAll = function (req, res) {

  Sublimado.find(function (err, sublimado) {
    if (err) res.send(500, err.message);
    console.log('GET /sublimado')
    res.status(200).json({
      sublimado: sublimado
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Sublimado.findById(req.params.id, function (err, sublimado) {
    if (err) return res.send(500, err.message);
    console.log('GET /sublimado/' + req.params.id);
    res.status(200).json({
      sublimado: sublimado
        });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var sublimado = new Sublimado({
    size: req.body.size,
    position: req.body.position,
    price: req.body.price,   
  });
  sublimado.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      sublimado: sublimado
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    Sublimado.findById(req.params.id, function (err, sublimado) {
    sublimado.size = req.body.size;
    sublimado.position = req.body.position;
    sublimado.price = req.body.price;
    sublimado.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({client:client});
    });
  });
};

