var mongoose = require('mongoose');
var SerigrafiaPrecioCliente = mongoose.model('SerigrafiaPrecioCliente');

//GET - Return all registers
exports.findAll = function (req, res) {
  SerigrafiaPrecioCliente.find(function (err, serigrafiaPrecioCliente) {
    if (err) res.send(500, err.message);
    console.log('GET /serigrafiaPrecioCliente')
    res.status(200).json({
      serigrafiaPrecioCliente: serigrafiaPrecioCliente
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  SerigrafiaPrecioCliente.findById(req.params.id, function (err, serigrafiaPrecioCliente) {
    if (err) return res.send(500, err.message);
    console.log('GET /serigrafiaPrecioCliente/' + req.params.id);
    res.status(200).json({
      serigrafiaPrecioCliente: serigrafiaPrecioCliente
    });
  });
};



exports.findByInkQuantityWItem = function (req, res) {
  SerigrafiaPrecioCliente.find({
    "tintas":req.query.tintas
  },function (err, serigrafiaPrecioCliente) {
    if (err) return res.status(500).send( err.message);
    console.log(req.query.prendas);
    console.log(serigrafiaPrecioCliente.map((serigrafia => serigrafia.prendaDe)));
    console.log(serigrafiaPrecioCliente.map((serigrafia => serigrafia.prendaHasta)));
    var result = serigrafiaPrecioCliente.filter((serigrafia) => (req.query.prendas >=  serigrafia.prendaDe)  && (req.query.prendas <= serigrafia.prendaHasta));
    res.status(200).json({
      serigrafiaPrecioCliente: result
    });

  });
};


// //POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var serigrafiaPrecioCliente = new SerigrafiaPrecioCliente({
    tintas: req.body.tintas,
    prendaDe:req.body.prendaDe,
    prendaHasta:req.body.prendaHasta,
    costo:req.body.costo
  });
  serigrafiaPrecioCliente.save(function (err, serigrafiaPrecioCliente) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      serigrafiaPrecioCliente: serigrafiaPrecioCliente
    });

  });
};


// //POST - Insert a new register
// exports.add = function (req, res) {
//   console.log('POST');
//   console.log(req.body);
//   var serigrafiaPrecioTinta = new SerigrafiaPrecioTinta({
//     bordadoPrice: req.body.bordadoPrice,
//     puntadaPrice: req.body.puntadaPrice,
//     tamanoPrice: req.body.tamanoPrice,
//   });
//   bordadoBase.save(function (err, bordadoBase) {
//     if (err) return res.send(500, err.message);
//     res.status(200).json({
//       bordadoBase: bordadoBase
//     });

//   });
// };
 
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

