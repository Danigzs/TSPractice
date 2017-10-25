var mongoose = require('mongoose');
var VinilPrecioMaquila = mongoose.model('VinilPrecioMaquila');

//GET - Return all registers
exports.findAll = function (req, res) {
    VinilPrecioMaquila.find(function (err, vinilPrecioMaquila) {
    if (err) res.send(500, err.message);
    console.log('GET /vinilPrecioMaquila')
    res.status(200).json({
        vinilPrecioMaquila: vinilPrecioMaquila
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    VinilPrecioMaquila.findById(req.params.id, function (err, vinilPrecioMaquila) {
    if (err) return res.send(500, err.message);
    console.log('GET /vinilPrecioMaquila/' + req.params.id);
    res.status(200).json({
        vinilPrecioMaquila: vinilPrecioMaquila
    });
  });
};

exports.findByVinilPrecioMaquila = function (req, res) {
  VinilPrecioMaquila.find({
    "prendaDe":{
      $gte:req.query.quantity
    }
  },function (err, vinilPrecioMaquila) {
    if (err) return res.status(500).send( err.message);

    var result = vinilPrecioMaquila.filter((vinil) => (req.query.quantity >=  vinil.prendaDe)  && (req.query.quantity <= vinil.prendaHasta));

    res.status(200).json({
      vinilPrecioMaquila: result
    });

  });
};

// //POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var vinilPrecioMaquila = new VinilPrecioMaquila({   
    prendaDe:req.body.prendaDe,
    prendaHasta:req.body.prendaHasta,
    costo:req.body.costo
  });
  vinilPrecioMaquila.save(function (err, vinilPrecioMaquila) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        vinilPrecioMaquila: vinilPrecioMaquila
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

