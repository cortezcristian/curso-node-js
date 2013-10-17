var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo-test');

var Persona = mongoose.model('Persona', {
     /* campo implicito '_id' */
      nombre: String, 
       cargo: String
});

var cc = new Persona({nombre: "Cristian", cargo: "Profesor"});
cc.save(function(err){
    if(err){
        console.log(err);    
    }    
});
