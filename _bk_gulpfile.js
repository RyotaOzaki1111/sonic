//分割代入をして gulp.hoge()と書かずにhoge()と書ける
const {
  src, dest, task, watch, series, parallel
} 
= require("gulp");


const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync");
const plumber = require("gulp-plumber");
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const ssi = require('connect-ssi');
const ejs = require('gulp-ejs');
const newer = require('gulp-newer');
const del = import('del'); //ESモジュールである del モジュールを、CommonJSモジュールである gulpfile.js から requireしようとしたことにあったため、importで読み込むとエラーが消えた
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const mmq = require("gulp-merge-media-queries"); //cssメディアクエリの並び替え
const imagemin = require('gulp-imagemin'); //画像自動圧縮
const webp = require('gulp-webp');
// const gsap = require('gsap'); // gsapの複数回における宣言エラーが起きるためコメントアウト




// ----------------------------
// パス設定
// ----------------------------

var root = {
  src: 'src/',
  srcAsset: 'src/assets/',
  dist: 'dist/',
  distAsset: 'dist/assets/'
  //サブディレクトリがあるため一階層下がる
  //dist配下のディレクトリで指定
}

const paths = {
  html: {
    src: root.src + '**/*.+(html|shtml|htm)',
    dest: root.dist + ''
  },

  ejs: {
    src: root.src + 'ejs/pages/**/*.ejs',
    ignore: root.src + 'ejs/component/**/_*.ejs',
    watchdir: root.src + 'ejs/**/*.ejs',
    dest: root.dist + ''
  },

  json: {
    src: root.src + 'data/config.json'
  },

  css: {
    src: root.srcAsset + 'scss/**/*.scss',
    dest: root.distAsset + 'css'
  },

  jsPlugin: {
    src: root.srcAsset + 'js/vendor/*.+(js|js.map)',
    dest: root.distAsset + 'js/vendor'
  },

  js: {
    src: root.srcAsset + 'js/*.js',
    dest: root.distAsset + 'js'
  },

  img: {
    src: root.srcAsset + 'images/**/*',
    dest: root.distAsset + 'images'
  },

  font: {
    src: root.srcAsset + 'font/**/*',
    dest: root.distAsset + 'font'
  },
  server: 'dist/'
}

// ----------------------------
// 関数定義
// ----------------------------

// html コピー
function html() {
  return src(paths.html.src)
  .pipe(plumber())
  .pipe(newer(paths.html.dest))
  .pipe(dest(paths.html.dest))
}

// ejs コンパイル
function ejsCompile() {
  return src([paths.ejs.src, '!' +paths.ejs.ignore])
  .pipe(plumber())
  .pipe(ejs())
  .pipe(rename(
    { extname: ".html" }
  ))
  .pipe(dest(paths.ejs.dest))
}

// scss トランスパイル開発用
function cssDev() {
  const plugins = [
    autoprefixer()
  ]
  return src(paths.css.src)
    .pipe(plumber())
    .pipe(newer(paths.css.dest))
    // .pipe(sourcemaps.init())
    .pipe(sass({ //scssコンパイルの処理
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(mmq()) //メディアクエリ順序指定
    // .pipe(sourcemaps.write(""))
    .pipe(dest(paths.css.dest))
}

// scss トランスパイルビルド用
function cssBuild() {
  const plugins = [
    autoprefixer(),
    cssnano()
  ]
  return src(paths.css.src)
    .pipe(plumber())
    .pipe(newer(paths.css.dest))
    // .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(mmq()) //メディアクエリ順序指定
    // .pipe(sourcemaps.write(""))
    .pipe(dest(paths.css.dest))
}

// jsプラグイン move
function jsPlugin() {
  return src(paths.jsPlugin.src)
  .pipe(plumber())
  .pipe(newer(paths.jsPlugin.dest))
  .pipe(dest(paths.jsPlugin.dest))
}

// jsトランスパイル開発用
function jsDev() {
  return src(paths.js.src)
  .pipe(plumber())
  .pipe(newer(paths.js.dest))
  .pipe(uglify())
  .pipe(rename({
    extname: '.min.js'
  }))
  .pipe(dest(paths.js.dest));
}

// jsトランスパイルビルド用
function jsBuild() {
  return src(paths.js.src)
  .pipe(plumber())
  .pipe(newer(paths.js.dest))
  .pipe(uglify())
  .pipe(rename({
    extname: '.min.js'
  }))
  .pipe(dest(paths.js.dest));
}

// image move
function images() {
  return src(paths.img.src)
  .pipe(plumber())
  .pipe(imagemin())
  .pipe(webp())
  .pipe(newer(paths.img.dest))
  .pipe(dest(paths.img.dest))
}

// font move
function fonts() {
  return src(paths.font.src)
  .pipe(plumber())
  .pipe(newer(paths.font.dest))
  .pipe(dest(paths.font.dest))
}

//gsapの使用
function runGsap() {
  return src(paths.js.src)
  .pipe(plumber())
  .pipe(newer(paths.js.dest))
  .pipe(uglify())
  .pipe(rename({
    extname: '.min.js'
  }))
  .pipe(dest(paths.js.dest));
}

// dist配下を削除
function distDel(done) {
  del([root.dist + '**'])
  done();
}


// ローカルサーバー立ち上げ
const createServer = browserSync.create();
function server(done) {
  createServer.init({
    server: {
      baseDir: paths.server,
      middleware: [
        ssi({
          baseDir:root.dist,
          ext: '.html'
        })
      ]
    },
    notify: false,
    startPaths: 'index.html'
  })
  done();
}

// リロード
function reload(done) {
  createServer.reload();
  done();
}

//- 監視
function watcher() {
  watch(paths.html.src, series(html, reload))//第一引数＝監視対象をファイル指定、第二引数＝指定したファイルが更新されたときの処理
  watch(paths.ejs.watchdir, series(ejsCompile, reload))
  watch(paths.css.src, series(cssDev, reload))
  watch(paths.jsPlugin.src, series(jsPlugin, reload))
  watch(paths.js.src, series(jsDev, reload))
  watch(paths.img.src, series(images, reload))
  watch(paths.font.src, series(fonts, reload))
}

// ----------------------------
// タスク定義
// ----------------------------
const runDev = series(parallel(cssDev, jsPlugin, jsDev, fonts, images, html, ejsCompile, runGsap), server, watcher);
const runBuild = series(distDel, parallel(cssBuild, jsPlugin, jsBuild, fonts, images, html, ejsCompile, runGsap));

exports.default = runDev;
exports.build = runBuild;
