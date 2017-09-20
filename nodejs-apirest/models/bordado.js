var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var Schema = mongoose.Schema;

var bordadoSchema = new Schema({
  size: {
    type: String
  },
  position: {
    type: String
  },
  price: {
    type: Number
  },
  puntadas:{
    type: Number
  },
  bordado:{
    type:String
  },
  colores:{
    type:String
  },
  cantidad:{
    type:Number
  }
});

bordadoSchema.plugin(autoIncrement.plugin, 'Bordado');

module.exports = mongoose.model('Bordado', bordadoSchema);
