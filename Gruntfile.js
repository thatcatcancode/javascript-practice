module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), 
    jasmine: {
      specs: "./tests/**/*.js" 
    },
  
    watch: {
      scripts: {
        files: "./tests/**/*.js", 
        tasks: ["jasmine"], 
        options: {
          interrupt: true
        },
      },
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-jasmine");  
  grunt.loadNpmTasks("grunt-contrib-watch");
  
  grunt.registerTask("test", ["default"]);
  grunt.registerTask("default", ["jasmine"]);
};


