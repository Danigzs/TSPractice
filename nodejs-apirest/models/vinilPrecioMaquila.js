var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var vinilpreciosmaquilaschema = new Schema({

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

vinilpreciosmaquilaschema.plugin(autoIncrement.plugin, 'vinilPrecioMaquila');
module.exports = mongoose.model('VinilPrecioMaquila', vinilpreciosmaquilaschema);
