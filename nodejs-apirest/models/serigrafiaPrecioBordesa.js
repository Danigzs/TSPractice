var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var schema = new Schema({

  tintas: {
    type: Number
  },
  prendaDe: {
    type: Number
  },
  prendaHasta: {
    type: Number
  },
  costo: {
    type: Number    
  },
  presecado: {
    type: Number
  },
  revelado: {
    type: Number
  }

});

schema.plugin(autoIncrement.plugin, 'SerigrafiaPrecioBordesa');
module.exports = mongoose.model('SerigrafiaPrecioBordesa', schema);
