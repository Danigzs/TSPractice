var mongoose = require('mongoose');
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


module.exports = mongoose.model('Seller', sellerSchema);
