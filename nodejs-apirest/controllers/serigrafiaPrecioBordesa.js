var mongoose = require('mongoose');
var SerigrafiaPrecioBordesa = mongoose.model('SerigrafiaPrecioBordesa');

//GET - Return all registers
exports.findAll = function (req, res) {
  SerigrafiaPrecioBordesa.find(function (err, serigrafiaPrecioBordesa) {
    if (err) res.send(500, err.message);
    console.log('GET /serigrafiaPrecioPrenda')
    res.status(200).json({
      serigrafiaPrecioBordesa: serigrafiaPrecioBordesa
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  SerigrafiaPrecioBordesa.findById(req.params.id, function (err, serigrafiaPrecioBordesa) {
    if (err) return res.send(500, err.message);
    console.log('GET /serigrafiaPrecioBordesa/' + req.params.id);
    res.status(200).json({
      serigrafiaPrecioBordesa: serigrafiaPrecioBordesa
    });
  });
};


//POST - Return a register with specified ID
exports.findByInkQuantity = function (req, res) {
  SerigrafiaPrecioBordesa.find({
    "tintas":req.query.tintas
  },function (err, serigrafiaPrecioBordesa) {
    if (err) return res.status(500).send( err.message);
    
    console.log(req.query.prendas);
    console.log(serigrafiaPrecioBordesa.map((serigrafia => serigrafia.prendaDe)));
    console.log(serigrafiaPrecioBordesa.map((serigrafia => serigrafia.prendaHasta)));
    var result = serigrafiaPrecioBordesa.filter((serigrafia) => (req.query.prendas >=  serigrafia.prendaDe)  && (req.query.prendas <= serigrafia.prendaHasta));
    res.status(200).json({
      serigrafiaPrecioBordesa: result
    });

  });
};

// //POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var serigrafiaPrecioBordesa = new SerigrafiaPrecioBordesa({
    tintas: req.body.tintas,
    prendaDe:req.body.prendaDe,
    prendaHasta:req.body.prendaHasta,
    costo:req.body.costo,


  });
  serigrafiaPrecioBordesa.save(function (err, serigrafiaPrecioBordesa) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      serigrafiaPrecioBordesa: serigrafiaPrecioBordesa
    });

  });
};

// //PUT - Update a register already exists
// exports.update = function (req, res) {
//     BordadoBase.findById(req.params.id, function (err, bordadoBase) {
//       if(req.body.bordadoPrice)
//         bordadoBase.bordadoPrice = req.body.bordadoPrice;
//       if(req.body.puntadaPrice)
//         bordadoBase.puntadaPrice = req.body.puntadaPrice;
//       if(req.body.tamanoPrice)
//         bordadoBase.tamanoPrice = req.body.tamanoPrice; 
//       bordadoBase.save(function (err) {
  
//         if (err) return res.send(500, err.message);
//       res.status(200).json({bordadoBase:bordadoBase});
//     });
//   });
// };

