var mongoose = require('mongoose');
var Provideer = mongoose.model('Provideer');

//GET - Return all registers
exports.findAll = function (req, res) {

  Provideer.find(function (err, provideers) {
    if (err) res.send(500, err.message);
    console.log('GET /provideers')
    res.json({
      provideers: provideers
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Provideer.findById(req.params.id, function (err, provideer) {
    if (err) return res.send(500, err.message);
    console.log('GET /provideers/' + req.params.id);
    res.status(200).jsonp(provideer);
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var provideer = new Provideer({
    name: req.body.name
  });
  provideer.save(function (err, provideer) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      provideer: provideer
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
  Provideer.findById(req.params.id, function (err, provideer) {
    provideer.name =  req.body.name,
    client.save(function (err) {
      if (err) return res.send(500, err.message);
     res.status(200).json({
      provideer: provideer
    });
    });
  });
};

//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  Provideer.findById(req.params.id, function (err, provideer) {
    provideer.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  });
};
