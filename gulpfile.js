let {src,dest,watch} = require('gulp'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	cssnano = require('gulp-cssnano'),
	htmlmin = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin');
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');
	
function fnIndex(){
	return src('./src/index.html')
	.pipe(dest('./dist'));
}
function fnCss(){
	return src('./src/sass/*.scss')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(cssnano())
	.pipe(rename({suffix : '.min'}))
	.pipe(dest('./dist/css'));
}

function fnJs(){
	return src('./src/js/*.js')
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(uglify())
	.pipe(rename({suffix : '.min'}))
	.pipe(dest('./dist/js'));
}
function fnImg(){
	return src('./src/img/*')
	.pipe(imagemin())
	.pipe(dest('./dist/img'));
}
function fnPages(){
	return src('./src/pages/*.html')
	.pipe(htmlmin())
	.pipe(dest('./dist/pages'));
}

function fnWatch(){
	watch('./src/index.html',fnIndex);
	watch('./src/sass/*.scss',fnCss);
	watch('./src/js/*.js',fnJs);
	watch('./src/img/*',fnImg);
	watch('./src/pages/*.html',fnPages);
}

exports.index = fnIndex;
exports.css = fnCss;
exports.js = fnJs;
exports.img = fnImg;
exports.pages = fnPages;
exports.default = fnWatch;