var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var configpuntadasSchema = new Schema({
 
 
  Costo:{
      type:Number
  }

});

configpuntadas.plugin(autoIncrement.plugin, 'Puntadas');
module.exports = mongoose.model('Puntadas', configpuntadasSchema);

