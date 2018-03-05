var mongoose = require('mongoose');
var User = mongoose.model('User');

//GET - Return all registers
exports.findAll = function (req, res) {

  User.find(function (err, users) {
    if (err) res.send(500, err.message);
    console.log('GET /user')
    res.json({
      users: users
    });

  });
};

exports.sellerUsers = function (req, res) {
  User.find(function (err, users) {
    if (err) res.send(500, err.message);
    console.log('GET /user')
    res.json({
      users: users.filter(function(v,i){v.password = "*****"; if(!v.role && !v.role.name) return false; return v.role.name == "vendedor";})
    });

  });
   
}; 
//GET - Return a register with specified ID
exports.findById = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) return res.send(500, err.message);
    console.log('GET /users/' + req.params.id);
    res.status(200).jsonp({
      user: user
    });
  });
};

//POST - Insert a new register
exports.register = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
  });
  user.save(function (err, user) {
    if (err) return res.send(500, err.message);
    user.password = "";
    res.status(200).json({
      user: user
    });

  });
};

//POST - Get An User by username and password
exports.login = function (req, res) {
    console.log(req.query);
  User.findOne({username:req.query.username}, function (err, user) {
    if (err) return res.send(500, err.message);
    if (!user) {
      res.status(200).jsonp({
        success: false,
        user: {},
        message: "No existe usuario"
      });
    } else if (user.password == req.params.password) {
      res.status(200).jsonp({
        success: true,
        user: user
      });
    } else {
      res.status(200).jsonp({
        success: false,
        user: user,
        message: "Contraseña incorrecta"
      });
    }

  });
};



// //PUT - Update a register already exists
// exports.update = function (req, res) {
//   Seller.findById(req.params.id, function (err, seller) {
//     seller.name =  req.body.name,
//   seller.store =  req.body.store,
//   seller.address =  req.body.address,
//   seller.phone =  req.body.phone,
//   seller.email =  req.body.email,
//   seller.rfc =  req.body.rfc,
//   seller.code =   req.body.code
//     seller.save(function (err) {
//       if (err) return res.send(500, err.message);
//      res.status(200).json({
//       seller: seller
//     });
//     });
//   });
// };

// //DELETE - Delete a register with specified ID
// exports.delete = function (req, res) {
//   Seller.findById(req.params.id, function (err, seller) {
//     seller.remove(function (err) {
//       if (err) return res.send(500, err.message);
//       res.json({
//         message: 'Successfully deleted'
//       });
//     });
//   });
// };
