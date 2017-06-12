var mongoose = require('mongoose');
var Tecnica = mongoose.model('Tecnica');

//GET - Return all registers
exports.findAll = function (req, res) {

  Tecnica.find(function (err, tecnicas) {
    if (err) res.send(500, err.message);
    console.log('GET /tecnicas')
    res.status(200).json({
      tecnicas: tecnicas
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Tecnica.findById(req.params.id, function (err, tecnica) {
    if (err) return res.send(500, err.message);
    console.log('GET /tecnicas/' + req.params.id);
    res.status(200).json({
      tecnica: tecnica
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var tecnica = new Tecnica({
    name: req.body.name,
    subType: req.body.subType,
    size: req.body.size,
    position: req.body.position,
    price: req.body.price
  });
  tecnica.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      tecnica: tecnica
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
  Tecnica.findById(req.params.id, function (err, tecnica) {
    tecnica.name = req.body.name;
    tecnica.subType = req.body.subType;
    tecnica.size = req.body.size;
    tecnica.position = req.body.position;
    tecnica.price = req.body.price;
    tecnica.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({client:client});
    });
  });
};

