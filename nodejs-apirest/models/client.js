var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  name: {
    type: String
  },
  businessName: {
    type: String
  },
  address: {
    type: String
  },
  state: {
    type: String
  },
  town: {
    type: String
  },
  district: {
    type: String
  },
  country: {
    type: String
  },
  postalCode: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  attentTo: {
    type: String
  },
  rfc: {
    type: String
  },
  code: {
    type: String
  }
});


module.exports = mongoose.model('Client', clientSchema);
