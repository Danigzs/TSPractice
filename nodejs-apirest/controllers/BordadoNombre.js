var mongoose = require('mongoose');
var BordadoNombre = mongoose.model('Nombre');

//GET - Return all registers
exports.findAll = function (req, res) {

  BordadoNombre.find(function (err, bordadoNombre) {
    if (err) res.send(500, err.message);
    console.log('GET /bordadoNombre')
    res.status(200).json({
      bordadoNombre: bordadoNombre
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  BordadoNombre.findById(req.params.id, function (err, bordadoNombre) {
    if (err) return res.send(500, err.message);
    console.log('GET /bordadoNombre/' + req.params.id);
    res.status(200).json({
      bordadoNombre: bordadoNombre
        });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var bordadoNombre = new BordadoNombre({
    nombre: req.body.nombre,
    costo: req.body.costo,
  });
  bordadoNombre.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      bordadoNombre: bordadoNombre
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
  BordadoNombre.findById(req.params.id, function (err, bordadoNombre) {
    bordadoNombre.nombre = req.body.nombre;
    bordadoNombre.costo = req.body.costo;    
    bordadoNombre.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({client:client});
    });
  });
};

