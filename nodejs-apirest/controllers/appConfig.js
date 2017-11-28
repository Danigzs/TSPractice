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

    presecado: req.body.presecado,
    revelado: req.body.revelado,
    minBordado: req.body.minBordado,
    minSerigrafia: req.body.minSerigrafia,
    minSublimado: req.body.minSublimado,
    minTransfer: req.body.minTransfer,
    minVinil: req.body.minVinil
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
     
        if(req.body.revelado)
        appConfig.revelado = req.body.revelado; 
        if(req.body.presecado)
        appConfig.presecado = req.body.presecado; 
        if(req.body.minBordado)
        appConfig.minBordado = req.body.minBordado; 
        if(req.body.minSerigrafia)
        appConfig.minSerigrafia = req.body.minSerigrafia; 
        if(req.body.minSublimado)
        appConfig.minSublimado = req.body.minSublimado; 
        if(req.body.minTransfer)
        appConfig.minTransfer = req.body.minTransfer; 
        if(req.body.minVinil)
        appConfig.minVinil = req.body.minVinil; 
      appConfig.save(function (err) {
      
        if (err) return res.send(500, err.message);
      res.status(200).json({appConfig:appConfig});
    });
  });
};

