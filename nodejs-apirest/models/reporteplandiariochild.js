var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var reportereporteSchema = new Schema({
  
  hora: {
    type: String
  },
  cliente: {
    type: String
  },
  direccion: {
    type: String
  },
  telefono:{
    type:String
  },
  objetivo: {
    type:String
  },
  
  observaciones: {
    type:String

  } 

});

reportereporteSchema.plugin(autoIncrement.plugin, 'Reporteplandiariochild');
module.exports = mongoose.model('Reporteplandiariochild', reportereporteSchema);
