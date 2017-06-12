var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  supplies: {
    type: String
  },
  code: {
    type: String
  },
  isProvider: {
    type: String
  },
  isBordesa: {
    type: String
  },
  price: {
    type: String
  }
});


module.exports = mongoose.model('Product', productSchema);
