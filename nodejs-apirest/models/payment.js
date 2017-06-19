var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paymentSchema = new Schema({
  order_id: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true
  },
  paymentWay:{
      type:String
  },
  paymentDate:{
      type:Number
  },
  concept:{
      type:String
  },
  amount:{
      type:Number
  }

});


module.exports = mongoose.model('Payment', paymentSchema);

