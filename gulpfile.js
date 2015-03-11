var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var notify = require('gulp-notify');
var csscomb = require('gulp-csscomb');
// var frontnote = require("gulp-frontnote");
// var browser = require("browser-sync");


// LIVE Reload
//
// gulp.task("server", function() {
//     browser({
//         server: {
//             baseDir: "./"
//         }
//     });
// }); 


// JS圧縮
// gulp.task("js", function() {
//     gulp.src(["js/**/*.js","!js/min/**/*.js"])
//         .pipe(plumber())
//         .pipe(frontnote({
//             css: '../css/style.css'
//           }))
//         .pipe(sass())
//         // .pipe(autoprefixer())
//         .pipe(gulp.dest("./css"))
//         .pipe(browser.reload({stream:true}));
// });
 

gulp.task("sass", function() {
    gulp.src("sass/scss/style.scss")
        .pipe(plumber({
	      errorHandler: notify.onError("Error: <%= error.message %>") //<-
	    }))
        // .pipe(frontnote())
        .pipe(sass())
        .pipe(gulp.dest("www/common/css/"))
        // .pipe(autoprefixer())
        // .pipe(browser.reload({stream:true}))
});


gulp.task("default", function() {
    // gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch("sass/scss/style.scss",["sass"]);
});

// CSSのプロパティの順番整理
gulp.task('csscomb', function () {
  return gulp.src(dir.src + '/{,**/}*.css') // 読み込みファイル
    .pipe(csscomb())
    .pipe(gulp.dest(dir.dist)); // 書き出し先
});



