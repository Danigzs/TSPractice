var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var sellerSchema = new Schema({
  name: {
    type: String
  },
  store:{
    type: String
  },
  address: {
    type: String
  },
  
  phone: {
    type: String
  },
  email: {
    type: String
  },
  rfc: {
    type: String
  },
  code: {
    type: String
  }
});

sellerSchema.plugin(autoIncrement.plugin, 'Seller');
module.exports = mongoose.model('Seller', sellerSchema);
