var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  client:{
  },
  seller: {
  },
  products:[{
  }],
  maquilas:[{
  }],
  isPaid: {
    type: Number
  }, 
  total: {
    type: Number
  },
  folio: {
    type: String
  },
  notes: {
    type: String
  },
  advance: {
    type: Number
  },
  debt: {
    type: Number
  },
  shippingWay: {
    type: String
  },
  shippingDate: {
    type: Number
  },
  createdAt:{
    type:Date
  }

});


module.exports = mongoose.model('Order', orderSchema);

