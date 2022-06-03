import gulp from 'gulp'
const {src, dest, parallel, series, watch } = gulp

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import concat from 'gulp-concat'
import autoprefixer from 'gulp-autoprefixer'
import uglify from 'gulp-uglify'
import browserSync from 'browser-sync'
import imagemin from 'gulp-imagemin';
import del from 'del';

const browsersync = () => {
	browserSync.init({
        server: {
            baseDir: "app/"
        },
		notify:false
    });
}

const styles = () => {
  return src('app/sass/**/*.sass')
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		 overrideBrowserslist: ['last 10 versions'],
		 grid: true
	}))
	.pipe(dest('app/css'))
	.pipe(browserSync.stream())
}

const imageMin = () => {
	 return src('app/images/**/*.*')
	 .pipe(imagemin())
	 .pipe(dest('dist/images'))
}


const scripts = () =>{
	return src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/slick-carousel/slick/slick.js',
		'app/js/main.js'
	])
	.pipe(concat('main.min.js'))
 	.pipe(uglify()) 
	.pipe(dest('app/js'))
	.pipe(browserSync.stream())
}

const buildTask = () =>{
	return src ([
		'app/**/*.html',
		'app/css/style.min.css',
		'app/js/main.min.js',
	], {base: 'app'})
	.pipe(dest('dist'))
}

const clinDist = () => {
	return del('dist')
}



const watching = () =>{
	watch(['app/sass/**/*.sass'], styles)
	watch(['app/js/**/*.js','!app/js/main.min.js'], scripts)
	watch(['app/**/*.html']).on('change', browserSync.reload)
}

export {styles,scripts,watching,browsersync,imageMin}   // проверка

export let build = series(clinDist,imageMin,buildTask)  //dist
export default(scripts, styles, parallel(browsersync, watching))  //gulp
