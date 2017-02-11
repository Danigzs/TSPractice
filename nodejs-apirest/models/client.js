var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
 name:        { type: String },
 email:       { type: String },
 Domicilio:   { type: Number },
 genre:       { type: String, enum: ['male', 'female'] },
 tecnicas :   { type: String, enum: ['Bordado', 'Bordado 3D', 'Serigrafia', 'Vinil', 'Bordado plano', 'Digitalizado']}
});


module.exports = mongoose.model('Client', clientSchema);