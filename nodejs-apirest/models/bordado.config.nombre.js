var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var confignombreSchema = new Schema({
 
  Nombre:{
      type:String
  },
  Costo:{
      type:Number
  }

});

confignombre.plugin(autoIncrement.plugin, 'Nombre');
module.exports = mongoose.model('Nombre', confignombreSchema);

