var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var bordadoNombreSchema = new Schema({
 
  nombre:{
      type:String
  },
  costo:{
      type:Number
  }

});

bordadoNombreSchema.plugin(autoIncrement.plugin, 'Nombre');
module.exports = mongoose.model('Nombre', bordadoNombreSchema);