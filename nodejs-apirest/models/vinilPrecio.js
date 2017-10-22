var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var vinilprecioschema = new Schema({

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

vinilprecioschema.plugin(autoIncrement.plugin, 'vinilPrecio');
module.exports = mongoose.model('VinilPrecio', vinilprecioschema);
