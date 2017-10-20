var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var sublimadopreciomaquilaschema = new Schema({

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

sublimadopreciomaquilaschema.plugin(autoIncrement.plugin, 'sublimadoPrecioMaquila');
module.exports = mongoose.model('SublimadoPrecioMaquila', sublimadopreciomaquilaschema);
