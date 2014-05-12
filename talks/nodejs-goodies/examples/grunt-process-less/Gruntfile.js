module.exports = function(grunt) {
 
grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   less: {
     process: {
       options: {compress:true},
       files: {
         'estilos.css': 'estilos.less',
       }
     }
   }
 }); // The end of grunt.initConfig
 
 // Grunt Packages
 grunt.loadNpmTasks('grunt-contrib-less');
};
