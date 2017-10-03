var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var ubicacionesSchema = new Schema({
 
  ubicaciones:{
      type:String
  }, 

});

ubicacionesSchema.plugin(autoIncrement.plugin, 'Ubicaciones');
module.exports = mongoose.model('Ubicaciones', ubicacionesSchema);

