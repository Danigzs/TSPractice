var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var marcaSchema = new Schema({
  nombre: {
    type: String
  }
});

marcaSchema.plugin(autoIncrement.plugin, 'Marca');
module.exports = mongoose.model('Marca', marcaSchema); 
