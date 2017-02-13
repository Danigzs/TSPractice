var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
 name:        { type: String },
 email:       { type: String },
 Municipio:   { type: Number },
 genre:       { type: String, enum: ['male', 'female'] },
 tecnicas :   { type: String }
});


module.exports = mongoose.model('Client', clientSchema);