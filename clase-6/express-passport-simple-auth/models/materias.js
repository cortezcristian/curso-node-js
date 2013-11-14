var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var materiaSchema = new Schema({
	titulo    : String  
});

materiaSchema.static("borrarRegExp", function(regexp, cb){
   this.remove({titulo:regexp}, function(err){
       if(!err){
        cb();   
       }else{
        cb(err);
       }
   });    
});

module.exports = mongoose.model('Materias', materiaSchema);
