var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var Schema = mongoose.Schema;

var vinilSchema = new Schema({
    tipo: {
        type: String
      },
    size: {
    type: String
  },
  position: {
    type: String
  },
  price: {
    type: Number
  }
  
});

vinilSchema.plugin(autoIncrement.plugin, 'Vinil');

module.exports = mongoose.model('Vinil', vinilSchema);