var gulp = require("gulp");

var jade = require("gulp-jade");
var sass = require("gulp-sass");
var webpack = require("gulp-webpack");
var named = require("vinyl-named");

gulp.task("views", function(){
	gulp.src("src/*.jade")
		.pipe(jade({
			pretty: true
		}).on("error", console.error))
		.pipe(gulp.dest("dist"));
});

gulp.task("scripts", function(){
	gulp.src(["src/js/index.js", "src/js/application.js"])
		.pipe(named())
		.pipe(webpack(require("./webpack.config.js")))
		.pipe(gulp.dest("dist/js"));
});

gulp.task("styles", function(){
	gulp.src(["src/sass/index.sass"])
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("dist/css"));
});

gulp.task("images", function(){
	gulp.src("src/images/*")
		.pipe(gulp.dest("dist/images"));
});

gulp.task("build", ["views", "scripts", "styles", "images"]);

gulp.task("watch", function(){
	gulp.watch("src/**/*", ["build"]);
});
