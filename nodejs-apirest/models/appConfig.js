var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var schema = new Schema({


  presecado: {
    type: Number
  },
  revelado: {
    type: Number
  },
  minBordado:{
    type: Number
  },
  minSerigrafia:{
    type: Number
  },
  minSublimado:{
    type:Number
  },
  minTransfer:{
    type: Number
  },
  minVinil:{
    type: Number
  }

});

schema.plugin(autoIncrement.plugin, 'AppConfig');
module.exports = mongoose.model('AppConfig', schema);
