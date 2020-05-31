'use strict';
var argv       = require('yargs').argv;
var gulp       = require('gulp');
var gzip       = require('gulp-gzip');
var htmlmin    = require('gulp-htmlmin');
var prettyData = require('gulp-pretty-data');
var size       = require('gulp-size');
var when       = require('gulp-if');

// include paths file
var paths      = require('../paths');

// 'gulp html:gzip' -- does nothing
// 'gulp html:gzip --prod' -- minifies and gzips HTML files for production
gulp.task('html:gzip', () =>
  gulp.src(paths.siteFolderName + paths.htmlPattern)
    .pipe(when(argv.prod, htmlmin({
      removeComments: true,
      collapseWhitespace: false,
      collapseBooleanAttributes: false,
      removeAttributeQuotes: false,
      removeRedundantAttributes: false,
      minifyJS: true,
      minifyCSS: true
    })))
    .pipe(when(argv.prod, size({title: 'optimized HTML'})))
    .pipe(when(argv.prod, gulp.dest(paths.siteFolderName)))
    .pipe(when(argv.prod, gzip({append: true})))
    .pipe(when(argv.prod, size({
      title: 'gzipped HTML',
      gzip: true
    })))
    .pipe(when(argv.prod, gulp.dest(paths.siteFolderName)))
);

// 'gulp xml:gzip' -- does nothing
// 'gulp xml:gzip' --prod'  -- minifies XML and JSON files for production
gulp.task('xml:gzip', () =>
  gulp.src(paths.siteFolderName + paths.xmlPattern)
    .pipe(when(argv.prod, prettyData({
      type: 'minify',
      preserveComments: true
    })))
    .pipe(when(argv.prod, size({title: 'optimized XML'})))
    .pipe(when(argv.prod, gulp.dest(paths.siteFolderName)))
);
