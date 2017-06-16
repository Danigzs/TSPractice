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
  // products: [{
  //   type: mongoose.Schema.Types.ObjectId  
  // }],

  // maquilas: [{
  //   type: mongoose.Schema.Types.ObjectId   
  // }],
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
  discount: {
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

