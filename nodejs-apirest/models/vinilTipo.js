var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var vinilTipoSchema = new Schema({
 
  nombre:{
      type:String
  },
  costo:{
      type:Number
  }

});

vinilTipoSchema.plugin(autoIncrement.plugin, 'vinilTipo');
module.exports = mongoose.model('vinilTipo', vinilTipoSchema);