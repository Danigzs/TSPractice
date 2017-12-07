var mongoose = require('mongoose');
var SerigrafiaTipotinta = mongoose.model('Tipotinta');

//GET - Return all registers
exports.findAll = function (req, res) {

    SerigrafiaTipotinta.find(function (err, tipos) {
    if (err) res.send(500, err.message);
    console.log('GET /tipos')
    res.status(200).json({
      tipos: tipos
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    SerigrafiaTipotinta.findById(req.params.id, function (err, tipos) {
    if (err) return res.send(500, err.message);
    console.log('GET /tipos/' + req.params.id);
    res.status(200).json({
      tipos: tipos
        });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var tipos = new SerigrafiaTipotinta({
    tipotinta: req.body.tipotinta,
    costo: req.body.costo,
  });
  tipos.save(function (err, tipos) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      tipos: tipos
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    SerigrafiaTipotinta.findById(req.params.id, function (err, tipos) {
      tipos.tipotinta = req.body.tipotinta;
      tipos.costo = req.body.costo;    
      tipos.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({tipos:tipos});
    });
  });
};

//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  SerigrafiaTipotinta.findById(req.params.id, function (err, tipos) {
    if(tipos)
    tipos.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  }); 
};
