var mongoose = require('mongoose');
var Ubicaciones = mongoose.model('Ubicaciones');

//GET - Return all registers
exports.findAll = function (req, res) {

    Ubicaciones.find(function (err, ubicaciones) {
    if (err) res.send(500, err.message);
    console.log('GET /ubicaciones')
    res.status(200).json({
        ubicaciones: ubicaciones
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    Ubicaciones.findById(req.params.id, function (err, ubicaciones) {
    if (err) return res.send(500, err.message);
    console.log('GET /ubicaciones/' + req.params.id);
    res.status(200).json({
        ubicaciones: ubicaciones
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var ubicaciones = new Ubicaciones({
    ubicaciones: req.body.ubicaciones,    
  });
  ubicaciones.save(function (err, ubicaciones) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        ubicaciones: ubicaciones
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
        Ubicaciones.findById(req.params.id, function (err, ubicaciones) {
        ubicaciones.ubicaciones = req.body.ubicaciones;    
        ubicaciones.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        ubicaciones: ubicaciones
      });
    });
  });
};

//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  Ubicaciones.findById(req.params.id, function (err, ubicaciones) {
    if(ubicaciones)
    ubicaciones.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  }); 
};
