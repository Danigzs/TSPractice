var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var sublimadoschema = new Schema({

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

sublimadoschema.plugin(autoIncrement.plugin, 'sublimadoPrecio');
module.exports = mongoose.model('SublimadoPrecio', sublimadoschema);
