var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var transferPrecioschema = new Schema({

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

transferPrecioschema.plugin(autoIncrement.plugin, 'transferPrecio');
module.exports = mongoose.model('TransferPrecio', transferPrecioschema);
