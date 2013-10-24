var assert = require("assert")
    , utils = require('../../../utils')
    , fixtures = require('mongoose-fixtures')
    , Personas;

/**
* Database Connection
*/
var dbConex = exports.dbConex = utils.dbConnection("localhost","demo-test","","");


/**
 * Test entities creation
 */
describe('Model Test Personas', function(){
    before(function(){
        //Before all tests
        Personas = require("../../../models/personas.js");
    });

    describe('Operaciones con Alumnos', function(){
        it('Crear un nuevo alumno en la BD', function(done){
            var p = new Personas({nombre: "Jorge", cargo: "Alumno"});
            p.save(done);
        });

        it('Obtener Datos de Alumno', function(done){
            var p = new Personas({nombre: "Jorge", cargo: "Alumno"});
            p.save(done);
        });

        it('Editar Datos de Alumno', function(done){
            var p = new Personas({nombre: "Jorge", cargo: "Alumno"});
            p.save(done);
        });

        it('Borrar Alumno', function(done){
            var p = new Personas({nombre: "Jorge", cargo: "Alumno"});
            p.save(done);
        });
    });
    
});

