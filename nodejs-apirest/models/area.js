var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var Schema = mongoose.Schema;

var areaSchema = new Schema({

  nombre: {
    type: String
  }
});

areaSchema.plugin(autoIncrement.plugin, 'Area');

module.exports = mongoose.model('Area', areaSchema);
