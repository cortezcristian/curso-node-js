var assert = require("assert")
    , utils = require('../../../utils')
    , fixtures = require('mongoose-fixtures')
    , Materias;

/**
* Database Connection
*/
var dbConex = exports.dbConex = utils.dbConnection("localhost","demo-test","","");


/**
 * Test entities creation
 */
describe('Model Test Materias', function(){
    before(function(){
        //Before all tests
        Materias = require("../../../models/materias.js");

    });

    describe('Operaciones con Materias', function(){
        it('Crear un nueva materia en la BD', function(done){
            var a = new Materias({titulo: "Fisica I"});
            a.save(function(err, p){
                if(!err){
                    done();
                } else {
                   throw new Error('No se pudo crear');
                } 
            });
        });
        it('Borrar una materia con regexp', function(done){
            Materias.borrarRegExp(/isi/, done);
        });
    });
});

