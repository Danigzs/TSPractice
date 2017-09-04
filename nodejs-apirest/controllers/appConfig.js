var mongoose = require('mongoose');
var AppConfig = mongoose.model('AppConfig');

//GET - Return all registers
exports.findAll = function (req, res) {
  AppConfig.findOne(function (err, appConfig) {
    if (err) res.send(500, err.message);
    console.log('GET /appConfig')
    res.status(200).json({
      appConfig: appConfig
    });

  });
};

//GET - Return a register with specified ID
exports.findById = function (req, res) {
  AppConfig.findById(req.params.id, function (err, appConfig) {
    if (err) return res.send(500, err.message);
    console.log('GET /appConfig/' + req.params.id);
    res.status(200).json({
      appConfig: appConfig
    });
  });
};


// //POST - Insert a new register
exports.add = function (req, res) {
  console.log('POST in');
  console.log(req.body);
  var appConfig = new AppConfig({
    bordado: req.body.bordado,
    serigrafia: req.body.serigrafia,
    sublimado: req.body.sublimado
  });
  appConfig.save(function (err, appConfig) {
    if (err) return res.send(500, err.message);
    res.status(200).json({
      appConfig: appConfig
    });

  });
};
 
//PUT - Update a register already exists
exports.update = function (req, res) {
    AppConfig.findById(req.params.id, function (err, appConfig) {
      if(req.body.bordado)
        appConfig.bordado = req.body.bordado;
      if(req.body.serigrafia)
        appConfig.serigrafia = req.body.serigrafia;
      if(req.body.sublimado)
        appConfig.sublimado = req.body.sublimado; 
      appConfig.save(function (err) {
      
        if (err) return res.send(500, err.message);
      res.status(200).json({appConfig:appConfig});
    });
  });
};

