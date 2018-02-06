var mongoose = require('mongoose');
var Area = mongoose.model('Area');

//GET - Return all registers
exports.findAll = function (req, res) {

    Area.find(function (err, area) {
    if (err) res.send(500, err.message);
    console.log('GET /area')
    res.status(200).json({
        area: area
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    Area.findById(req.params._id, function (err, area) {
    if (err) return res.send(500, err.message);
    console.log('GET /area/' + req.params._id);
    res.status(200).json({
        area: area
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var area = new Area({
    nombre: req.body.nombre,
  });
  area.save(function (err, area) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        area: area
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    Area.findById(req.params.id, function (err, area) {
        area.nombre = req.body.nombre;
        tintas.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        area: area
      });
    });
  });
};
