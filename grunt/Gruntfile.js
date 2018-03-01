/*
 * @Author: shawn
 * @Date:   2018-02-27 15:25:13
 * @Last Modified by:   shawn
 * @Last Modified time: 2018-02-28 15:02:57
 */
// 源码目录
var sourceDir = './src/';
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                // 定义一个用于插入合并输出文件之间的字符
                separator: '-------------------'
            },
            dist: {
                // 将要被合并的文件
                src: ['src/**/*.js'],
                // 合并后的JS文件的存放位置
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                // mangle: false,
                beautify: false,
                // 此处定义的banner注释将插入到输出文件的顶部
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['src/test.js']
                    // expand: true,
                    // cwd: './grunt/',
                    // src: 'src/test.js',
                    // dest: 'dist/abc.min.js'
                }
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },

        jshint: {
            // define the files to lint
            files: ['gruntfile.js', 'src/**/*.js', 'dist/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit', 'concat']
        },
        less: {
            options: {
                compress: true,
            },
            build: {
                expand: true,
                cwd: './src/stylesheets/',
                src: 'a.less',
                dest: 'dist/',
                ext: '.min.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './src/stylesheets/',
                    src: 'compress.css',
                    dest: 'dist/',
                    ext: '.min.css'
                }]
            }
        },
        sprite: {
            options: {
                // sprite背景图源文件夹，只有匹配此路径才会处理，默认 images/slice/
                imagepath: 'src/images/',
                // 映射CSS中背景路径，支持函数和数组，默认为 null
                // imagepath_map: '../images/',
                // 雪碧图输出目录，注意，会覆盖之前文件！默认 images/
                spritedest: 'dist/publicImg/',
                // 替换后的背景路径，默认 ../images/
                // spritepath: '../publicImg/',
                // 各图片间间距，如果设置为奇数，会强制+1以保证生成的2x图片为偶数宽高，默认 0
                padding: 2,
                // 是否使用 image-set 作为2x图片实现，默认不使用
                useimageset: false,
                // 是否以时间戳为文件名生成新的雪碧图文件，如果启用请注意清理之前生成的文件，默认不生成新文件
                newsprite: false,
                // 给雪碧图追加时间戳，默认不追加
                spritestamp: true,
                // 在CSS文件末尾追加时间戳，默认不追加
                cssstamp: true,
                // 默认使用二叉树最优排列算法
                algorithm: 'binary-tree',
                // 默认使用`pixelsmith`图像处理引擎
                engine: 'pixelsmith'
            },
            autoSprite: {
                files: [{
                    // 启用动态扩展
                    expand: true,
                    // css文件源的文件夹
                    cwd: 'src/stylesheets/',
                    // 匹配规则
                    src: 'sprite.css',
                    // 导出css和sprite的路径地址
                    dest: 'dist/',
                    // 导出的css名
                    ext: '.min.css'
                }]
            }
        }
    });


    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.loadNpmTasks('grunt-css-sprite');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');

    // 在命令行上输入"grunt test"，test task就会被执行。
    grunt.registerTask('test', ['jshint', 'qunit']);

    // 只需在命令行上输入"grunt"，就会执行default task
    grunt.registerTask('default', ['less', 'cssmin','sprite']);
    // grunt.registerTask('default', ['concat']);
    // grunt.registerTask('default', ['uglify','qunit']);
    // grunt.registerTask('default', ['uglify','qunit','jshint']);
    // grunt.registerTask('default', ['uglify','qunit','jshint','concat']);

};