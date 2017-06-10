"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var useref = require("gulp-useref");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var cssnano = require("gulp-cssnano");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var del = require("del");
var runSequence = require("run-sequence");

gulp.task("sass", function() {
  return gulp
    .src("./app/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./app/styles"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./app/scss/**/*.scss", ["sass"]);
});

gulp.task("useref", function() {
  return (gulp
      .src("app/*.html")
      .pipe(useref())
      .pipe(gulpIf("*.js", uglify()))
      // Minifies only if it's a CSS file
      .pipe(gulpIf("*.css", cssnano()))
      .pipe(gulp.dest("dist")) );
});

// gulp.task("images", function() {
//   return (gulp
//       .src("app/assets/**/*.+(png|jpg|jpeg|gif|svg)")
//       // Caching images that ran through imagemin
//       .pipe(
//         cache(
//           imagemin({
//             interlaced: true
//           })
//         )
//       )
//       .pipe(gulp.dest("dist/assets")) );
// });

gulp.task("clean:dist", function() {
  return del.sync("dist");
});

gulp.task("build", function(callback) {
  runSequence("clean:dist", ["sass", "useref"], callback);
});
