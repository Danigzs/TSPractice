var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tecnicaCotizacionSchema = new Schema({
  tecnica_id: {
    type: mongoose.Schema.Types.ObjectId,  
    required: true
  },
   name: {
    type: String
  },
  subType: {
    type: String
  },
  size: {
    type: String
  },
  position: {
    type: String
  },
  price: {
    type: Number
  },
  quantity:{
    type: Number
  }
});


module.exports = mongoose.model('TecnicaCotzacion', tecnicaCotizacionSchema);
