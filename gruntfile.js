module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.initConfig({
		uglify:{
			my_target : {
				files : {
					'js/script.js': ['components/js/*.js']
				} // end files
			} // end my_target
		}, // end ugfligy			
		watch: {
			options: { livereload: true },
			scripts: {
				files : ['components/js/*.js'],
				tasks : ['uglify']
			}, // end scripts
			html: {
				files : ['*.html']
			} // end html			
		} // end watch
	}) // end initConfig
	grunt.registerTask('default','watch');
} // end exports
