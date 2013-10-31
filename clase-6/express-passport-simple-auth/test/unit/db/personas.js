var assert = require("assert")
    , utils = require('../../../utils')
    , fixtures = require('mongoose-fixtures')
    , Personas, alumnoId, Administradores;

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
        Administradores = require("../../../models/administradores.js");
    });

    describe('Operaciones con Administradores', function(){
        it('Crear un nuevo administrador en la BD', function(done){
            var a = new Administradores({nombre: "Super Admin", email: "admin@admin.com", password: "123456"});
            a.save(function(err, p){
                if(!err){
                    done();
                } else {
                   throw new Error('No se pudo crear');
                } 
            });
        });
    });

    describe('Operaciones con Alumnos', function(){
        it('Crear un nuevo alumno en la BD', function(done){
            var p = new Personas({nombre: "Jorge", cargo: "Alumno"});
            p.save(function(err, p){
                alumnoId = p._id; 
                if(!err){
                    done();
                } else {
                   throw new Error('No se pudo crear');
                        
                } 
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
        });

        it('Editar Datos de Alumno', function(done){
            Personas.editarAlumno(alumnoId, "Ramon", function(pers){
                if(pers.nombre == "Ramon"){
                    done();    
                }else{
                    throw new Error('El alumno no fue encontrado');
                }
            });
        });

        it('Borrar Alumno', function(done){
              Personas.eliminarAlumno(alumnoId, done);
        });

        it('Buscar Alumno por Nombre', function(done){
            fixtures.load('../../fixtures/alumnos.js', function(err){
              Personas.buscarPorNombre("Juan Pablo", function(pers){
                if(pers[0].nombre == "Juan Pablo"){
                    done();    
                }else{
                    done((new Error('El alumno no fue encontrado')));
                }
              });
            });
        });
    });
    
});

