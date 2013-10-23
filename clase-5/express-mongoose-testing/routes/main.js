var app = module.parent.exports.app
  , Personas = require('../models/personas.js');

/*
 * GET 
 */

app.get('/', function(req, res){
  Personas.buscarAlumnos(function(pers){
    res.render('index', { title: 'Listado', obj: pers });
  });
});

/*app.get('/new/nombre/:name', function(req, res){
  var p = new Personas({nombre: req.params.name, cargo: "Alumno"});
  p.save(function(err, p){
    if(err){
      console.log(err);    
    }    
    res.render('index', { title: 'Nuevo', obj: p });
  });
});*/

app.get('/new', function(req, res){
  Personas.obtenerAlumno(req.params.id, function(pers){
    res.render('new', { title: 'Nuevo', obj: pers });
  });
});

app.post('/new', function(req, res){
  var p = new Personas({nombre: req.body.nombre, cargo: "Alumno"});
  p.save(function(err, p){
    res.redirect("/");
  });
});

app.get('/delete/:id', function(req, res){
  Personas.eliminarAlumno(req.params.id, function(){
    res.redirect("/");
  });
});

app.get('/edit/:id', function(req, res){
  Personas.obtenerAlumno(req.params.id, function(pers){
    res.render('edit', { title: 'Editar', obj: pers });
  });
});

app.post('/edit/:id', function(req, res){
  Personas.editarAlumno(req.params.id, req.body.nombre, function(pers){
    res.redirect("/");
  });
});
