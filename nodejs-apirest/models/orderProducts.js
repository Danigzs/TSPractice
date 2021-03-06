var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderProductSchema = new Schema({
   order_id:{
    type: mongoose.Schema.Types.ObjectId,  
    required: true
  },
   product_id:{
    type: mongoose.Schema.Types.ObjectId  },
   maquila_id:{
    type: mongoose.Schema.Types.ObjectId  },
   quantity:{
    type: Number
  },
   price:{
    type: Number
  } 
});


module.exports = mongoose.model('OrderProducts', orderProductSchema);
