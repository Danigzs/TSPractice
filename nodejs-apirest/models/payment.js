var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var paymentSchema = new Schema({
  order_id: {
    type: Number, 
    required: true
  },
  paymentWay:{
      type:String
  },
  date:{
      type:Date
  },
  concept:{
      type:String
  },
  amount:{
      type:Number
  }

});

paymentSchema.plugin(autoIncrement.plugin, 'Payment');
module.exports = mongoose.model('Payment', paymentSchema);

