var assert = require("assert")
    , utils = require('../../../utils')
    , fixtures = require('mongoose-fixtures')
    , Personas, idAlumno;

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
            p.save(function(err, p){
                alumnoId = p._id; 
                done();   
            });
        });

        it('Obtener Datos de Alumno', function(done){
            Personas.obtenerAlumno(alumnoId, function(pers){
                if(pers[0].nombre == "Jorge"){
                    done()    
                }else{
                    throw new Error('El alumno no fue encontrado');
                }
            });
            //fixtures.load('../../fixtures/alumnos.js', function(err){
            //});
        });

        it('Editar Datos de Alumno', function(done){
            Personas.editarAlumno(alumnoId, "Ramon", function(pers){
                if(pers.nombre == "Ramon"){
                    done()    
                }else{
                    throw new Error('El alumno no fue encontrado');
                }
            });
        });

        it('Borrar Alumno', function(done){
              Personas.eliminarAlumno(alumnoId, done);
        });
    });
    
});

