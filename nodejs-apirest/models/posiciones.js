var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var posicionesSchema = new Schema({
 
  posiciones:{
      type:String
  },
  costo:{
      type:Number
  }

});

posicionesSchema.plugin(autoIncrement.plugin, 'Posiciones');
module.exports = mongoose.model('Posiciones', posicionesSchema);

