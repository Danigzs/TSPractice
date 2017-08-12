var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var Schema = mongoose.Schema;

var sublimadoSchema = new Schema({
  size: {
    type: String
  },
  position: {
    type: String
  },
  price: {
    type: Number
  }
  
});

sublimadoSchema.plugin(autoIncrement.plugin, 'Sublimado');

module.exports = mongoose.model('Sublimado', sublimadoSchema);
