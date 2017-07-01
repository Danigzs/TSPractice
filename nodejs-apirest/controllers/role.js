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
  Role.findById(req.params.id, function (err, seller) {
    if (err) return res.send(500, err.message);
    console.log('GET /roles/' + req.params.id);
    res.status(200).jsonp({role:role});
  });
};
