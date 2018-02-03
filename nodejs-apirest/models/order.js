var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

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
  graficos:[{
  }],
  tecnicaBordados:[{
  }],
  isPaid: {
    type: Number
  }, 
  total: {
    type: Number
  },
  folio: {
    type: Number
  },
  statusText:{
    type:String
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
  status:{
    type:Number
  },
  subTotal:{
    type:Number
  },
  shippingDate: {
    type: Date
  },
  createdAt:{
    type:Date
  },
  payments:{
    type:Number
  },
  esCotizacion:{
    type:Number
  }

});

orderSchema.plugin(autoIncrement.plugin, 'Order');
module.exports = mongoose.model('Order', orderSchema);

