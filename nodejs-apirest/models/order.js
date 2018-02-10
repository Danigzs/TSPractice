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
  areaText:{
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
  area:{
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
  },
  orderHistory:[{
    type:String
  }]

});

orderSchema.plugin(autoIncrement.plugin, 'Order');
module.exports = mongoose.model('Order', orderSchema);

