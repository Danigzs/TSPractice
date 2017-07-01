var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var roleSchema = new Schema({
  name: {
    type: String
  },
  isAdmin:{
    type: Number
  }
});

roleSchema.plugin(autoIncrement.plugin, 'Role');
module.exports = mongoose.model('Role', roleSchema); 
