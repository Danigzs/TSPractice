var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var reportereporteSchema = new Schema({
 
  fecha: {
    type: Date
  },
  fechaLocal: {
    type: String
  },
  planesdiarios: [],
  visitasplaneadas: {
    type: String
  },
  entrevistasrealizadas: {
    type: String
  },
  ventasconcretadas:{
    type:String
  },
  montototaldepedidos: {
    type:String
  },
  visitasrecibidas: {
    type:String
  } ,
  montodecobranza: {
    type:String
  } ,
  montodedescuentos: {
    type:String
  } ,
  revisado: {
    type:Boolean,
    default:false
  } ,
  creador:{
    
  },
  revisadoPor:{
    
  },
  fechaRevisado:{
   type:Date 
  }

});

reportereporteSchema.plugin(autoIncrement.plugin, 'Reporteplandiario');
module.exports = mongoose.model('Reporteplandiario', reportereporteSchema);
