var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var tintasSchema = new Schema({
 
  tinta:{
      type:String
  },
  costo:{
      type:Number
  }

});

tintasSchema.plugin(autoIncrement.plugin, 'Tintas');
module.exports = mongoose.model('Tintas', tintasSchema);