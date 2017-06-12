var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var Schema = mongoose.Schema;

var tecnicaSchema = new Schema({
  name: {
    type: String
  },
  subType: {
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

tecnicaSchema.plugin(autoIncrement.plugin, 'Tecnica');

module.exports = mongoose.model('Tecnica', tecnicaSchema);
