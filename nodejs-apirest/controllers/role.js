var mongoose = require('mongoose');
var Role = mongoose.model('Role');

//GET - Return all registers
exports.findAll = function (req, res) {
  Role.find(function (err, roles) {
    if (err) res.send(500, err.message);
    console.log('GET /roles')
    res.json({
      roles: roles
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  Role.findById(req.params.id, function (err, role) {
    if (err) return res.send(500, err.message);
    console.log('GET /roles/' + req.params.id);
    res.status(200).jsonp({role:role});
  });
};

//POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST');
  console.log(req.body);
  var role = new Role({
    name: req.body.name,
    isAdmin: req.body.isAdmin
  
  });
  role.save(function (err, role) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      role: role
    });

  });
};

//PUT - Update a register already exists
exports.update = function (req, res) {
  console.log("Update role " + req.params.id)
  var _role = new Role(req.body);
  Role.findById({_id:req.params.id}, function (err, role) {
     
    role.name =  _role.name,
  role.isAdmin =  _role.isAdmin,
 
    rolle.save(function (err,role) {
      if (err) return res.send(500).json({role:null});
     res.status(200).json({
       role: role
    });
    });
  });
};

//DELETE - Delete a register with specified ID
exports.delete = function (req, res) {
  Role.findById(req.params.id, function (err, role) {
    role.remove(function (err) {
      if (err) return res.send(500, err.message);
      res.json({
        message: 'Successfully deleted'
      });
    });
  });
};