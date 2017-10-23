var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var vinilsizeSchema = new Schema({
 
  size:{
      type:String
  },
  costo:{
      type:Number
  }

});

vinilsizeSchema.plugin(autoIncrement.plugin, 'vinilSize');
module.exports = mongoose.model('vinilSize', vinilsizeSchema);

