var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var reportereporteSchema = new Schema({
  fecha: {
    type: Date
  },
  recibido: {
    type: Date
  },
  folio: {
    type: String
  },
  cliente:{
    
  },
  fechaRecibido: {
    type:Date
  },
  solicitante: {
    
  },
  horaEntrada: {
    type:String
  },
  tecnica: {
    
  },
  puntadas: {
    
  },
  tintas: {
    
  },
  fechaSalida: {
    type: Date
  },
  horaSalida: {
    type: String
  },
  comprasTaller:{

  },
  logotipo: {
    type: String
  },
  comentarios: {
    type: String
  },
  trabajoCreadoPor: {
    type: String
  }

});

reportereporteSchema.plugin(autoIncrement.plugin, 'Reportediseno');
module.exports = mongoose.model('Reportediseno', reportereporteSchema);
