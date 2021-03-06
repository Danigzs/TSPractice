var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var reportebordadoSchema = new Schema({
  fecha: {
    type: Date
  },
  maquina: {
    type: String
  },
  folio: {
    type: String
  },
  noPiezasPorMaquina: {
    type:String
  },
  productoBordado: {
    type:String
  },
  noPiezasPorDia: {
    type:String
  },
  logo: {
    type: String
  },
  puntadasLogo: {
    type: Number
  },
  totalPuntadas: {
    type: Number
  },
  fechaInicio: {
    type: Date
  },
  fechaFinal: {
    type: Date
  },
  observaciones: {
    type: String
  },
  bordador: {
    type: String
  }

});

reportebordadoSchema.plugin(autoIncrement.plugin, 'Reportebordado');
module.exports = mongoose.model('Reportebordado', reportebordadoSchema);
