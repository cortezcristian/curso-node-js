var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var personaSchema = new Schema({
	nombre      : String,      
	cargo       : String  
});

module.exports = mongoose.model('Personas', personaSchema);
