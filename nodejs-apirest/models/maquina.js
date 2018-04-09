var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var maquinaSchema = new Schema({
  name: {
    type: String
  }
});

maquinaSchema.plugin(autoIncrement.plugin, 'Maquina');
module.exports = mongoose.model('Maquina', maquinaSchema); 
