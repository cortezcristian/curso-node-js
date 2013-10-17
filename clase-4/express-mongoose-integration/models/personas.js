var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var personaSchema = new Schema({
	playerId      : String,      
	identity      : String  
});

module.exports = mongoose.model('Personas', personaSchema);
