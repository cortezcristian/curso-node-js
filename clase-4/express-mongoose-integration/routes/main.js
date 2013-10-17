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
