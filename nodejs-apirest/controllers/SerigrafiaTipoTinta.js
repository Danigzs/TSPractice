var mongoose = require('mongoose');
var SerigrafiaTipotinta = mongoose.model('Nombre');

//GET - Return all registers
exports.findAll = function (req, res) {

    SerigrafiaTipotinta.find(function (err, serigrafiatipotinta) {
    if (err) res.send(500, err.message);
    console.log('GET /serigrafiatipotinta')
    res.status(200).json({
        serigrafiatipotinta: serigrafiatipotinta
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    SerigrafiaTipotinta.findById(req.params.id, function (err, serigrafiatipotinta) {
    if (err) return res.send(500, err.message);
    console.log('GET /serigrafiatipotinta/' + req.params.id);
    res.status(200).json({
        serigrafiatipotinta: serigrafiatipotinta
        });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var serigrafiatipotinta = new SerigrafiaTipotinta({
    tipotinta: req.body.tipotinta,
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
    SerigrafiaTipotinta.findById(req.params.id, function (err, serigrafiatipotinta) {
        serigrafiatipotinta.tipotinta = req.body.tipotinta;
        serigrafiatipotinta.tipotinta = req.body.costo;    
        serigrafiatipotinta.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({client:client});
    });
  });
};

