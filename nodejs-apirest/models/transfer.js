var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var Schema = mongoose.Schema;

var transferSchema = new Schema({
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

transferSchema.plugin(autoIncrement.plugin, 'Transfer');

module.exports = mongoose.model('Transfer', transferSchema);