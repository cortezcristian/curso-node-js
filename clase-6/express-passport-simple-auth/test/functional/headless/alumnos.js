var Browser = require("zombie")
    , assert = require("assert")
    , utils = require('../../../utils')
    , fixtures = require('mongoose-fixtures')
    , browser = new Browser({debug:false})
    , domain = "http://localhost:3000"
    , Personas, idAlumnoEditado;

/**
* Database Connection
*/
var dbConex = exports.dbConex = utils.dbConnection("localhost","demo-test","","");


/**
 * Test entities creation
 */
describe('Headless Testing', function(){
    before(function(){
        //Before all tests
        Personas = require("../../../models/personas.js");
    });

    describe('ABM de Alumnos', function(){
        it('Crear un nuevo alumno', function(done){
            browser.visit(domain+"/new", function () {
                 browser.
                   fill("nombre", "Ariel").
                   pressButton("Guardar", function() {
                       if(browser.location.pathname == "/"){
                           done()
                       }else{
                            throw new Error('El alumno no fue ingresado con exito');
                       }
                   });
            });
        });

        it('Listar Alumnos', function(done){
            browser.visit(domain+"/", function () {
               if(browser.location.pathname == "/" && browser.html("table")!=""){
                   done()
               }else{
                    throw new Error('El listado no fue mostrado con exito');
               }
            });
        });

        it('Editar Datos de Alumno', function(done){
            idAlumnoEditado = "";
            browser.visit(domain+"/", function () {
               if(browser.location.pathname == "/" && browser.html("table")!=""){
                   browser.clickLink('Editar', function(){
                        if(browser.location.pathname.match(/edit/)){
                             idAlumnoEditado = browser.location.pathname.split("/").slice(-1);
                             browser.
                               fill("nombre", "AlumnoDemo").
                               pressButton("Guardar", function() {
                                   if(browser.location.pathname == "/"){
                                       Personas.buscarPorNombre("AlumnoDemo", function(p){
                                           //console.log(p, ">>", idAlumnoEditado[0]);
                                           if(p[0]._id==idAlumnoEditado[0]){
                                             done()
                                           }else{
                                             throw new Error('El alumno no fue editado con exito');
                                               
                                           }    
                                       });
                                   }else{
                                        throw new Error('El alumno no fue editado con exito');
                                   }
                               });
                            
                        } //Edit page    
                   });
               }else{
                    throw new Error('El listado no fue mostrado con exito');
               }
            });
        });

        it('Borrar Alumno', function(done){
            browser.visit(domain+"/delete/"+idAlumnoEditado, function () {
               if(browser.location.pathname == "/"){
                   done()
               }else{
                    throw new Error('El alumno no fue borrado con exito');
               }
            });
        });
    });
    
});

