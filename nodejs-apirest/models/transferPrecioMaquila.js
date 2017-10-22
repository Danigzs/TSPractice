var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var transferPrecioMaquilaschema = new Schema({

  prendaDe: {
    type: Number
  },
  prendaHasta: {
    type: Number
  },
  costo: {
    type: Number    
  }

});

transferPrecioMaquilaschema.plugin(autoIncrement.plugin, 'transferPrecioMaquila');
module.exports = mongoose.model('TransferPrecioMaquila', transferPrecioMaquilaschema);