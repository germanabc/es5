/*
 * @Author: baocheng
 * @Date:   2017-12-24 20:25:50
 * @Last Modified by:   baocheng
 * @Last Modified time: 2017-12-24 21:14:25
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    src: 'src/a.js',
                    dest: 'build/a.min.js'
                }
            }
        }
    });
  //加载包含"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //默认被执行的任务列表
    grunt.registerTask('default',['uglify']);
}