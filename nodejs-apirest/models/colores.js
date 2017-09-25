var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var coloresSchema = new Schema({
 
  color:{
      type:Number
  }
});

coloresSchema.plugin(autoIncrement.plugin, 'Colores');
module.exports = mongoose.model('Colores', coloresSchema);

