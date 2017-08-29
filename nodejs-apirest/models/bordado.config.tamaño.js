var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var configtamañoSchema = new Schema({
 
  Tamaño:{
      type:String
  },
  Costo:{
      type:Number
  }

});

configtamaño.plugin(autoIncrement.plugin, 'Tamaño');
module.exports = mongoose.model('Tamaño', configtamañoSchema);

