var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var bordadopuntadasSchema = new Schema({
 
 
  costo:{
      type:Number
  }

});

bordadopuntadasSchema.plugin(autoIncrement.plugin, 'Puntadas');
module.exports = mongoose.model('Puntadas', bordadopuntadasSchema);

