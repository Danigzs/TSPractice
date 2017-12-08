var mongoose = require('mongoose');
var SerigrafiaSize = mongoose.model('serigrafiaSize');

//GET - Return all registers
exports.findAll = function (req, res) {

  SerigrafiaSize.find(function (err, serigrafiaSize) {
    if (err) res.send(500, err.message);
    console.log('GET /serigrafiaSize')
    res.status(200).json({
      serigrafiaSize: serigrafiaSize
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
    SerigrafiaSize.findById(req.params.id, function (err, serigrafiaSize) {
    if (err) return res.send(500, err.message);
    console.log('GET /serigrafiaSize/' + req.params.id);
    res.status(200).json({
        serigrafiaSize: serigrafiaSize
    });
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var serigrafiaSize = new SerigrafiaSize({
    size: req.body.size,
    costo: req.body.costo,
  });
  serigrafiaSize.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
        serigrafiaSize: serigrafiaSize
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
    SerigrafiaSize.findById(req.params.id, function (err, serigrafiaSize) {
    serigrafiaSize.size = req.body.size;
    serigrafiaSize.costo = req.body.costo;
    serigrafiaSize.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({
        serigrafiaSize: serigrafiaSize
      });
    });
  });
};

exports.update = function (req, res) {
  SerigrafiaSize.findById(req.params.id, function (err, serigrafiaSize) {
    serigrafiaSize.size = req.body.size;
    serigrafiaSize.costo = req.body.costo;    
    serigrafiaSize.save(function (err) {
      if (err) return res.send(500, err.message);
      res.status(200).json({serigrafiaSize:serigrafiaSize});
    });
  });
};


//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  SerigrafiaSize.findById(req.params.id, function (err, serigrafiaSize) {
    if(serigrafiaSize)
    serigrafiaSize.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  }); 
};
