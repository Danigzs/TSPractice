var mongoose = require('mongoose');
var Client = mongoose.model('Client');

//GET - Return all registers
exports.findAll = function (req, res) {

  Client.find(function (err, clients) {
    if (err) res.send(500, err.message);
    console.log('GET /clients')
    res.json({
      clients: clients
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Client.findById(req.params.id, function (err, client) {
    if (err) return res.send(500, err.message);
    console.log('GET /clients/' + req.params.id);
    res.status(200).jsonp(client);
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var client = new Client({
    name: req.body.name,
  businessName: req.body.businessName,
  address: req.body.address,
  state: req.body.state,
  town: req.body.town,
  district: req.body.district,
  country: req.body.country,
  postalCode: req.body.postalCode,
  phone: req.body.phone,
  email: req.body.email,
  vendedor: req.body.vendedor,
  attentTo: req.body.attentTo,
  rfc: req.body.rfc,
  code:  req.body.code
  });
  client.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      client: client
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
  Client.findById(req.params.id, function (err, client) {
    client.name =  req.body.name,
  client.businessName =  req.body.businessName,
  client.address =  req.body.address,
  client.state =  req.body.state,
  client.town =  req.body.town,
  client.district =  req.body.district,
  client.country =  req.body.country,
  client.postalCode =  req.body.postalCode,
  client.phone =  req.body.phone,
  client.vendedor =  req.body.vendedor,
  client.email =  req.body.email,
  client.attentTo =  req.body.attentTo,
  client.rfc =  req.body.rfc,
  client.code =   req.body.code
    client.save(function (err) {
      if (err) return res.send(500, err.message);
     res.status(200).json({
      client: client
    });
    });
  });
};

//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  Client.findById(req.params.id, function (err, client) {
    client.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  });
};

