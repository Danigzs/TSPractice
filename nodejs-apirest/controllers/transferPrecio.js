var mongoose = require('mongoose');
var TransferPrecio = mongoose.model('TransferPrecio');

//GET - Return all registers
exports.findAll = function (req, res) {
    TransferPrecio.find(function (err, transferPrecio) {
    if (err) res.send(500, err.message);
    console.log('GET /transferPrecio')
    res.status(200).json({
        transferPrecio: transferPrecio
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    TransferPrecio.findById(req.params.id, function (err, transferPrecio) {
    if (err) return res.send(500, err.message);
    console.log('GET /transferPrecio/' + req.params.id);
    res.status(200).json({
        transferPrecio: transferPrecio
    });
  });
};

// //POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var transferPrecio = new TransferPrecio({
    prendaDe:req.body.prendaDe,
    prendaHasta:req.body.prendaHasta,
    costo:req.body.costo
  });
  transferPrecio.save(function (err, transferPrecio) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        transferPrecio: transferPrecio
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

