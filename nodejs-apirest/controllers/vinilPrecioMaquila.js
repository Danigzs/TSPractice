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

//PUT - Update a register already exists
exports.update = function (req, res) {
  VinilPrecioMaquila.findById(req.params.id, function (err, vinilPrecioMaquila) {
    vinilPrecioMaquila.prendaDe = req.body.prendaDe;
    vinilPrecioMaquila.prendaHasta = req.body.prendaHasta;   
    vinilPrecioMaquila.costo = req.body.costo;    
 
    vinilPrecioMaquila.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({vinilPrecioMaquila:vinilPrecioMaquila});
    });
  });
};


//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  VinilPrecioMaquila.findById(req.params.id, function (err, vinilPrecioMaquila) {
    if(vinilPrecioMaquila)
    vinilPrecioMaquila.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  }); 
};