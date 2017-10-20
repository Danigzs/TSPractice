var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var sublimadosizeSchema = new Schema({
 
  size:{
      type:String
  },
  costo:{
      type:Number
  }

});

sublimadosizeSchema.plugin(autoIncrement.plugin, 'sublimadoSize');
module.exports = mongoose.model('sublimadoSize', sublimadosizeSchema);

