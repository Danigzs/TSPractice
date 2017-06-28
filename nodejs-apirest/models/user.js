var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var paymentSchema = new Schema({
  _id: {
    type: Number, 
    required: true
  },
  username:{
      type:String
  },
  password:{
      type:String
  },
  firstName:{
      type:String
  },
  lastName:{
      type:String
  },
  range:{
      type:String
  }

});

paymentSchema.plugin(autoIncrement.plugin, 'User');
module.exports = mongoose.model('User', userSchema);