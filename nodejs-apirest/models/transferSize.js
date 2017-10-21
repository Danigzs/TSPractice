var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var transfersizeSchema = new Schema({
 
  size:{
      type:String
  },
  costo:{
      type:Number
  }

});
transfersizeSchema.plugin(autoIncrement.plugin, 'transferSize');
module.exports = mongoose.model('transferSize', transfersizeSchema);

