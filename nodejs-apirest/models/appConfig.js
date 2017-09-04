var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var schema = new Schema({

  bordado: {
    type: Number
  },
  serigrafia: {
    type: Number
  },
  sublimado: {
    type: Number
  }

});

schema.plugin(autoIncrement.plugin, 'AppConfig');
module.exports = mongoose.model('AppConfig', schema);
