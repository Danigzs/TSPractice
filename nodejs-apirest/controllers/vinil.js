var mongoose = require('mongoose');
var Vinil = mongoose.model('Vinil');

//GET - Return all registers
exports.findAll = function (req, res) {

  Vinil.find(function (err, vinil) {
    if (err) res.send(500, err.message);
    console.log('GET /vinil')
    res.status(200).json({
        vinil: vinil
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    Vinil.findById(req.params.id, function (err, vinil) {
    if (err) return res.send(500, err.message);
    console.log('GET /vinil/' + req.params.id);
    res.status(200).json({
        vinil: vinil
        });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var vinil = new Vinil({
      tipo: req.body.tipo,
    size: req.body.size,
    position: req.body.position,
    price: req.body.price,   
  });
  vinil.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        vinil: vinil
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    Vinil.findById(req.params.id, function (err, vinil) {
        vinil.size = req.body.size;
        vinil.position = req.body.position;
        vinil.price = req.body.price;
        vinil.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({client:client});
    });
  });
};

