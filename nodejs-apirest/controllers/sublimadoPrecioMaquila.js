var mongoose = require('mongoose');
var SublimadoPrecioMaquila = mongoose.model('SublimadoPrecioMaquila');

//GET - Return all registers
exports.findAll = function (req, res) {
  SublimadoPrecioMaquila.find(function (err, sublimadoPrecioMaquila) {
    if (err) res.send(500, err.message);
    console.log('GET /sublimadoPrecioMaquila')
    res.status(200).json({
      sublimadoPrecioMaquila: sublimadoPrecioMaquila
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    SublimadoPrecioMaquila.findById(req.params.id, function (err, sublimadoPrecioMaquila) {
    if (err) return res.send(500, err.message);
    console.log('GET /sublimadoPrecioMaquila/' + req.params.id);
    res.status(200).json({
      sublimadoPrecioMaquila: sublimadoPrecioMaquila
    });
  });
};

exports.findBySublimadoPrecioMaquila = function (req, res) {
  SublimadoPrecioMaquila.find({
    "prendaDe":{
      $gte:req.query.quantity
    }
  },function (err, sublimadoPrecioMaquila) {
    if (err) return res.status(500).send( err.message);

    var result = sublimadoPrecioMaquila.filter((sublimado) => req.query.quantity <= sublimado.prendaHasta);

    res.status(200).json({
      sublimadoPrecioMaquila: result
    });

  });
};


// //POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var sublimadoPrecioMaquila = new SublimadoPrecioMaquila({   
    prendaDe:req.body.prendaDe,
    prendaHasta:req.body.prendaHasta,
    costo:req.body.costo
  });
  sublimadoPrecioMaquila.save(function (err, sublimadoPrecioMaquila) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      sublimadoPrecioMaquila: sublimadoPrecioMaquila
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

