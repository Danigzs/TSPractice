var mongoose = require('mongoose');
var VinilPrecio = mongoose.model('VinilPrecio');

//GET - Return all registers
exports.findAll = function (req, res) {
    VinilPrecio.find(function (err, vinilPrecio) {
    if (err) res.send(500, err.message);
    console.log('GET /vinilPrecio')
    res.status(200).json({
        vinilPrecio: vinilPrecio
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    VinilPrecio.findById(req.params.id, function (err, vinilPrecio) {
    if (err) return res.send(500, err.message);
    console.log('GET /vinilPrecio/' + req.params.id);
    res.status(200).json({
        vinilPrecio: vinilPrecio
    });
  });
};

exports.findByVinilPrecio = function (req, res) {
  VinilPrecio.find({
      "prendaDe":{
        $gte:req.query.quantity
      }
    },function (err, vinilPrecio) {
      if (err) return res.status(500).send( err.message);
      var result = transferPrecio.filter((transfer) => req.query.quantity <= vinil.prendaHasta);
      res.status(200).json({
        vinilPrecio: result
      });  
    });
  };

// //POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var vinilPrecio = new VinilPrecio({
    prendaDe:req.body.prendaDe,
    prendaHasta:req.body.prendaHasta,
    costo:req.body.costo
  });
  vinilPrecio.save(function (err, vinilPrecio) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        vinilPrecio: vinilPrecio
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

