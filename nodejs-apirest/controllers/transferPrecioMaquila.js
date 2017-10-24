var mongoose = require('mongoose');
var TransferPrecioMaquila = mongoose.model('TransferPrecioMaquila');

//GET - Return all registers
exports.findAll = function (req, res) {
    TransferPrecioMaquila.find(function (err, transferPrecioMaquila) {
    if (err) res.send(500, err.message);
    console.log('GET /transferPrecioMaquila')
    res.status(200).json({
        transferPrecioMaquila: transferPrecioMaquila
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    TransferPrecioMaquila.findById(req.params.id, function (err, transferPrecioMaquila) {
    if (err) return res.send(500, err.message);
    console.log('GET /transferPrecioMaquila/' + req.params.id);
    res.status(200).json({
        transferPrecioMaquila: transferPrecioMaquila
    });
  });
};

exports.findByTransferPrecioMaquila = function (req, res) {
  TransferPrecioMaquila.find({
    "prendaDe":{
      $gte:req.query.quantity
    }
  },function (err, transferPrecioMaquila) {
    if (err) return res.status(500).send( err.message);

    var result = transferPrecioMaquila.filter((transfer) => req.query.quantity <= transfer.prendaHasta);

    res.status(200).json({
      transferPrecioMaquila: result
    });

  });
};


// //POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var transferPrecioMaquila = new TransferPrecioMaquila({
    prendaDe:req.body.prendaDe,
    prendaHasta:req.body.prendaHasta,
    costo:req.body.costo
  });
  transferPrecioMaquila.save(function (err, transferPrecioMaquila) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        transferPrecioMaquila: transferPrecioMaquila
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

