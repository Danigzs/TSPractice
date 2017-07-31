var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var Schema = mongoose.Schema;

var tecnicaSchema = new Schema({
  name: {
    type: String
  },
  subType: {
    type: String
  },
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
  }
});

tecnicaSchema.plugin(autoIncrement.plugin, 'Tecnica');

module.exports = mongoose.model('Tecnica', tecnicaSchema);
