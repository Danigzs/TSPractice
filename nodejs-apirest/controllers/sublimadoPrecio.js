var mongoose = require('mongoose');
var SublimadoPrecio = mongoose.model('SublimadoPrecio');

//GET - Return all registers
exports.findAll = function (req, res) {
    SublimadoPrecio.find(function (err, sublimadoPrecio) {
    if (err) res.send(500, err.message);
    console.log('GET /sublimadoPrecio')
    res.status(200).json({
        sublimadoPrecio: sublimadoPrecio
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    SublimadoPrecio.findById(req.params.id, function (err, sublimadoPrecio) {
    if (err) return res.send(500, err.message);
    console.log('GET /sublimadoPrecio/' + req.params.id);
    res.status(200).json({
        sublimadoPrecio: sublimadoPrecio
    });
  });
};


exports.findBySublimadoPrecio = function (req, res) {
  SublimadoPrecio.find(function (err, sublimadoPrecio) {
    if (err) return res.status(500).send( err.message);
    console.log(sublimadoPrecio);
    var result = sublimadoPrecio.filter((sublimado) => (req.query.quantity >=  sublimado.prendaDe)  && (req.query.quantity <= sublimado.prendaHasta));
    res.status(200).json({
      sublimadoPrecio: result
    });

  });
};


// //POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var sublimadoPrecio = new SublimadoPrecio({
    prendaDe:req.body.prendaDe,
    prendaHasta:req.body.prendaHasta,
    costo:req.body.costo
  });
  sublimadoPrecio.save(function (err, sublimadoPrecio) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        sublimadoPrecio: sublimadoPrecio
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

