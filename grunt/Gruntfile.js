module.exports = function(grunt) {
var pkg = grunt.file.readJSON('package.json');
    grunt.initConfig({
        sass: {
            options: {
                style: 'expanded',//CSSのスタイル
                sourcemap: false,//ソースマップを書き出す
                noCache: false//キャッシュファイルを生成しない
            },
            styles: {
                src: '../sass/scss/style.scss',//SCSSファイル
                dest: '../css/style.css'//CSSファイル
            }
        },
        //JSファイルを圧縮
        uglify: {
            js: {
                src: "../js/import.js",//圧縮するファイル
                dest: "../js/import.min.js"//圧縮したファイル
            }
        },

        //JSファイルを結合
        concat : {
            js : {
                src : [//結合するファイル
                '../js/app.js',
                '../js/app.namespace.js',
                '../js/app.databind.js',
                '../js/app.gallery.js'
                ],
                dest : 'js/import.js'//結合したファイル
            }
        },
        //監視対象のファイル
        watch: {
            sass: {
                files: ["../sass/scss/*.scss"],
                tasks: ['sass']//対象が変更されると実行されるタスク
            },
            js: {
                files: ["../corporate/js/*.js"],
                tasks: ['concat','uglify']//対象が変更されると実行されるタスク
            },
                  // html
            html: {
                files: '../*.html',
                tasks: []
          },
        }

    });

        //使用するなプラグイン
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

  // gruntコマンドで実行するタスクの設定
  grunt.registerTask('default', ['watch','sass','uglify','concat']);
};

