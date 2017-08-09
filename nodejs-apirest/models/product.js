var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
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
    type: Number
  },
  stock:{
    type:Number
  }
});

productSchema.plugin(autoIncrement.plugin, 'Product');
module.exports = mongoose.model('Product', productSchema);
