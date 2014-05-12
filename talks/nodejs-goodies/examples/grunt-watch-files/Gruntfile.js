module.exports = function(grunt) {
 
grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   less: {
     process: {
       options: {compress:true},
       files: {
         'estilos.css': '*.less',
       }
     }
   },
   watch: {
     lessfiles: {
       files: '*.less',
       tasks: ['less:process']
     }
   }
 }); // end grunt.initConfig
 
 grunt.loadNpmTasks('grunt-contrib-less');
 grunt.loadNpmTasks('grunt-contrib-watch');
};
