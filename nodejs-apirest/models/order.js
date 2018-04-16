var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var Schema = mongoose.Schema;

var orderSchema = new Schema({
  client:{
  },
  seller: {
  },
  user: {
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
  usercreador: {
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
  descuento:{
    type:Number
  },
  paymentDate:{
    type:String
  },
  esCotizacion:{
    type:Number
  },
  pagosTotales:{
    type:Number,
    default:0
  },
  estimatedDate:{
    type:Date
  },
  orderHistory:[{
    type:String
  }],
  orderAreaHistory:[{
    type:String
  }]

});

orderSchema.plugin(autoIncrement.plugin, 'Order');
module.exports = mongoose.model('Order', orderSchema);

