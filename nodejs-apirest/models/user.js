var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:{
      type:String
  },
  username:{
      type:String
  },
  password:{
      type:String
  }, 
  email:{
      type:String
  },
  role:{

  }

});

userSchema.plugin(autoIncrement.plugin, 'User');
module.exports = mongoose.model('User', userSchema);