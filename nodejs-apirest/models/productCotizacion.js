var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productCotizacionSchema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
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
  quantity: {
    type: Number
  },
  total:{
    type: Number
  }
});


module.exports = mongoose.model('ProductCotzacion', productCotizacionSchema);
