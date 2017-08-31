var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var bordadosizeSchema = new Schema({
 
  size:{
      type:String
  },
  costo:{
      type:Number
  }

});

bordadosizeSchema.plugin(autoIncrement.plugin, 'Size');
module.exports = mongoose.model('Size', bordadosizeSchema);

