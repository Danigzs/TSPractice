var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var reportebordadoSchema = new Schema({
  reporte_bordado_id: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date
  },
  maquina: {
    type: String
  },
  folio: {
    type: String
  },
  logo: {
    type: String
  },
  puntadas_logo: {
    type: String
  },
  total_puntadas: {
    type: Number
  },
  fecha_inicio: {
    type: String
  },
  fecha_final: {
    type: String
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
