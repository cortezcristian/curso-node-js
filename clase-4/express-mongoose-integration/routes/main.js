var app = module.parent.exports.app
  , Personas = require('../models/personas.js');

/*
 * GET 
 */

app.get('/', function(req, res){
  Personas.find(function(err, pers) {
    res.render('index', { title: 'Listado', obj: pers });
  });
});

app.get('/new/nombre/:name', function(req, res){
  var p = new Personas({nombre: req.params.name, cargo: "Alumno"});
  p.save(function(err, p){
    if(err){
      console.log(err);    
    }    
    res.render('index', { title: 'Nuevo', obj: p });
  });
});
