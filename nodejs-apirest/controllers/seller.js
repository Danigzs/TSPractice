var mongoose = require('mongoose');
var Seller = mongoose.model('Seller');

//GET - Return all registers
exports.findAll = function (req, res) {

  Seller.find(function (err, sellers) {
    if (err) res.send(500, err.message);
    console.log('GET /sellers')
    res.json({
      sellers: sellers
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Seller.findById({_id:req.params.id}, function (err, seller) {
    if (err) return res.send(500, err.message);
    console.log('GET /sellers/' + req.params.id);
    res.status(200).jsonp(seller);
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var seller = new Seller({
    name: req.body.name,
  store: req.body.store,
  address: req.body.address,
  phone: req.body.phone,
  email: req.body.email,
  rfc: req.body.rfc,
  code:  req.body.code
  });
  seller.save(function (err, seller) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      seller: seller
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
  console.log("Update seller " + req.params.id)
  var _seller = new Seller(req.body);
  Seller.findById({_id:req.params.id}, function (err, seller) {
     
    seller.name =  _seller.name,
  seller.store =  _seller.store,
  seller.address =  _seller.address,
  seller.phone =  _seller.phone,
  seller.email =  _seller.email,
  seller.rfc =  _seller.rfc,
  seller.code =   _seller.code
    seller.save(function (err,seller) {
      if (err) return res.send(500).json({seller:null});
     res.status(200).json({
       seller: seller
    });
    });
  });
};

//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  Seller.findById(req.params.id, function (err, seller) {
    seller.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  });
};
