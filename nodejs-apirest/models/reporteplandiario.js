var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var reportereporteSchema = new Schema({
 
  fecha: {
    type: Date
  },
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

  } ,
  creador:{
    
  }

});

reportereporteSchema.plugin(autoIncrement.plugin, 'Reporteplandiario');
module.exports = mongoose.model('Reporteplandiario', reportereporteSchema);
