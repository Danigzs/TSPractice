var mongoose = require('mongoose');
var Product = mongoose.model('Product');

//GET - Return all registers
exports.findAll = function (req, res) {

  Product.find(function (err, products) {
    if (err) res.send(500, err.message);
    console.log('GET /products')
    res.status(200).json({
      products: products
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return res.send(500, err.message);
    console.log('GET /products/' + req.params.id);
     res.status(200).json({
      product: product
    });

  });
};

//GET - Return a register with specified ID
exports.updateStock = function (req, res) {
  Product.findById({_id:req.params.id}, function (err, product) {
    if (err) return res.send(500, err.message);
    console.log('GET /products stock/' + req.params.id);
     product.stock = req.body.stock;
     product.save(function(error){
       if (err) return res.send(500, err.message);
        res.status(200).json({
        product: product
      });
     });
     

  });
};


//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var product = new Product({
    name: req.body.name,
    code: req.body.code,
    isProvider: req.body.isProvider,
    isBordesa: req.body.isBordesa,
    description: req.body.description,
    supplies: req.body.supplies,
    price: req.body.price,
    stock:req.body.stock
  });
  product.save(function (err, client) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      product: product
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    product.name =  req.body.name,
    product.code = req.body.code,
    product.isProvider =  req.body.isProvider,
    product.isBordesa =  req.body.isBordesa,
    product.description =  req.body.description,
    product.supplies =  req.body.supplies,
    product.price =  req.body.price,
    product.stock =  req.body.stock
    product.save(function (err) {
      if (err) return res.send(500, err.message);
     res.status(200).json({
      product: product
    })
    });
  });
};
 
