var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var reportereporteSchema = new Schema({
 
  fecha: {
    type: Date
  },
  fechaEntrada: {
    type: Date
  },
  fechaSalida: {
    type: Date
  },
  tipoPrenda: {
    type: String
  },
  cantidad:{
    type:Number
  },
  folio: {
    type:String
  },
  cliente: {
    
  },
  status: {
    type:Number
  },
  statusText: {
    type:String

  },
  comentarios: {
    type:String

  } 

});

reportereporteSchema.plugin(autoIncrement.plugin, 'Reportecostura');
module.exports = mongoose.model('Reportecostura', reportereporteSchema);
