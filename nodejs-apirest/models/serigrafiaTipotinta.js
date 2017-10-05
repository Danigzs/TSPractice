var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var serigrafiatipotintaSchema = new Schema({
 
  tipotinta:{
      type:String
  },
  costo:{
      type:Number
  }

});

serigrafiatipotintaSchema.plugin(autoIncrement.plugin, 'Tipotinta');
module.exports = mongoose.model('Tipotinta', serigrafiatipotintaSchema);

