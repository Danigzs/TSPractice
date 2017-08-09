var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var provideerSchema = new Schema({
  name: {
    type: String
  }
});

provideerSchema.plugin(autoIncrement.plugin, 'Provideer');
module.exports = mongoose.model('Provideer', provideerSchema);
