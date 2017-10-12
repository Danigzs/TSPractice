var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var serigrafiasizeSchema = new Schema({
 
  size:{
      type:String
  },
  costo:{
      type:Number
  }

});

serigrafiasizeSchema.plugin(autoIncrement.plugin, 'serigrafiaSize');
module.exports = mongoose.model('serigrafiaSize', serigrafiasizeSchema);

