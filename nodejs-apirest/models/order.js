var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  client_id:{
    type: mongoose.Schema.Types.ObjectId,  
    required: true
  },
  seller_id: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true
  },
  products:[{
  }],
  maquilas:[{
  }],
  isPaid: {
    type: Number
  },
  paidTotal: {
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
  }

});


module.exports = mongoose.model('Order', orderSchema);

