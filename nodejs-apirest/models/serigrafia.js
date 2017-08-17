var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var Schema = mongoose.Schema;

var serigrafiaSchema = new Schema({
  size: {
    type: String
  },
  position: {
    type: String
  },
  price: {
    type: Number
  },
  tintas:{
    type:String
  }
  
});

serigrafiaSchema.plugin(autoIncrement.plugin, 'Serigrafia');

module.exports = mongoose.model('Serigrafia', serigrafiaSchema);
