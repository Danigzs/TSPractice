var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productCotizacionSchema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,  
    required: true
  },
  price: {
    type: Number
  },
  quantity:{
    type: Number
  }
});


module.exports = mongoose.model('ProductCotzacion', productCotizacionSchema);
