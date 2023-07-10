/*
  =============================
  gulpの設定
  =============================
*/

// ----------------------------
// パッケージの読み込み
// ----------------------------


import gulp from 'gulp';
import path from 'path'; 
//pathはNode.jsの組み込みモジュールであり、
//path.extnameなどの関数を使用するためには、モジュールをインポートする必要がある。

//- ejs packages
import ejs from 'gulp-ejs';

//- css packages
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );

import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'gulp-postcss';

//- js packages
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';


//- image packages

import imagemin from 'gulp-imagemin';
 //画像自動圧縮
import webp from 'gulp-webp'; //webpに変換
import gulpIf from 'gulp-if';


//- server packages
import browserSync from 'browser-sync';

// other packages
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import rename from 'gulp-rename';
import del from 'del';
import fs from 'fs';


// ----------------------------
// パス設定
// ----------------------------

var root = {
  src: 'src/',
  srcAsset: 'src/assets/',
  dist: 'dist/',
  distAsset: 'dist/assets/'
}

const paths = {
  html: {
    src: root.src + '**/*.+(html|shtml|htm)',
    dest: root.dist + ''
  },

  ejs: {
    src: root.src + 'ejs/pages/**/*.ejs',
    ignore: root.src + 'ejs/**/_*.ejs',
    dest: root.dist + ''
  },

  json: {
    config: root.src + 'data/config.json',
    src: root.src + '**/*.json',
    ignore: root.src + 'data/*.json',
    dest: root.dist + ''
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
    src: root.srcAsset + 'js/**/*.js',
    dest: root.distAsset + 'js'
  },

  img: {
    src: root.srcAsset + 'images/**/*',
    ignore: root.srcAsset + 'images/**/*.{png,svg}',
    dest: root.distAsset + 'images'
  },

  font: {
    src: root.srcAsset + 'font/**/*',
    dest: root.distAsset + 'font'
  },

  server: 'dist/'
}

const other = {
  src: [
    root.src + '**/*.+(woff|woff2|ttf|otf)',
    root.src + '**/*.+(php)',
    root.src + '**/*.+(pdf)',
    root.src + '**/*.+(xml)',
    root.src + '**/*.+(mov|mp4|wmv|mpg)',
    root.src + '**/*.+(ico)'
  ],
  dist: '',
}

// ----------------------------
// 関数定義
// ----------------------------

// html コピー
export function html() {
  return gulp.src(paths.html.src)
  .pipe(plumber())
  .pipe(newer(paths.html.dest))
  .pipe(gulp.dest(paths.html.dest))
}

// ejs コンパイル
export function ejsCompile() {
  const json_path = paths.json.config;
  const conf = JSON.parse(fs.readFileSync(json_path));
  return gulp.src([paths.ejs.src, '!' + paths.ejs.ignore])
  .pipe(plumber())
  .pipe(ejs(
    { conf }
  ))
  .pipe(rename(
    { extname: ".html" }
  ))
  .pipe(gulp.dest(paths.ejs.dest))
}

// scss コンパイルパイル開発用
export function cssDev() {
  const plugins = [
    autoprefixer()
  ]
  return gulp.src(paths.css.src)
    .pipe(plumber())
    .pipe(newer(paths.css.dest))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write(""))
    .pipe(gulp.dest(paths.css.dest)) 
}

// scss トランスパイルビルド用
export function cssBuild() {
  const plugins = [
    autoprefixer(),
    cssnano()
  ]
  return gulp.src(paths.css.src)
    .pipe(plumber())
    .pipe(newer(paths.css.dest))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write(""))
    .pipe(gulp.dest(paths.css.dest)) 
}

// jsプラグイン move
export function jsPlugin() {
  return gulp.src(paths.jsPlugin.src)
  .pipe(plumber())
  .pipe(newer(paths.jsPlugin.dest))
  .pipe(gulp.dest(paths.jsPlugin.dest))
}

// jsトランスパイル開発用
export function jsDev() {
  return gulp.src(paths.js.src)
  // .pipe(babel({
  //   presets: ['@babel/preset-env']
  // }))
  .pipe(babel({
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-transform-modules-commonjs']
  }))
  .pipe(plumber())
  .pipe(newer(paths.js.dest))
  // .pipe(rename({
  //   extname: '.min.js'
  // }))
  .pipe(gulp.dest(paths.js.dest));
}

// jsトランスパイルビルド用
export function jsBuild() {
  return gulp.src(paths.js.src)
  // .pipe(babel({
  //   presets: ['@babel/preset-env']
  // }))
  .pipe(babel({
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-transform-modules-commonjs']
  }))
  .pipe(plumber())
  .pipe(newer(paths.js.dest))
  .pipe(uglify())
  // .pipe(rename({
  //   extname: '.min.js'
  // }))
  .pipe(gulp.dest(paths.js.dest));
}


// image move
export function images() {
  return gulp.src(paths.img.src)
  .pipe(plumber()) //エラーハンドリングを追加します。これにより、タスク中にエラーが発生した場合にもタスクが中断されず、エラーメッセージが表示されます。
  .pipe(imagemin())
  .pipe(gulpIf(file => { //条件に基づいて画像ファイルをWebP形式に変換します。
                         // gulpIf()は、指定された条件に基づいてパイプラインを分岐させるための関数です。
                         //  file....以下は各ファイルに対して実行される条件関数です。ここでは、ファイルの拡張子を確認して、.pngと.svg以外の場合にtrueを返します。
    const ext = path.extname(file.path).toLowerCase();
    return ext !== '.png' && ext !== '.svg'; //与えられたファイルの拡張子が.pngでもなく.svgでもない場合にtrueを返します。
    //詳細を説明すると、extは与えられたファイルの拡張子を表しています。
    //!==は厳密な不等号演算子であり、左辺と右辺が異なる場合にtrueを返します。
    //したがって、ext !== '.png'はファイルの拡張子が.pngではない場合にtrueを返し、
    //ext !== '.svg'はファイルの拡張子が.svgではない場合にtrueを返します。

  }, webp({
    transform: [{ //transformプロパティには、変換時のオプションが指定されています。
      target: paths.img.dest,
      format: 'webp'
    }]
  })))
  .pipe(newer(paths.img.dest)) //変換後のファイルと出力先ディレクトリ（paths.img.dest）を比較し、新しく変換されたファイルのみをパイプラインに通過させます。
  .pipe(gulp.dest(paths.img.dest))  
}

// font move
export function fonts() {
  return gulp.src(paths.font.src)
  .pipe(plumber())
  .pipe(newer(paths.font.dest))
  .pipe(gulp.dest(paths.font.dest))
}

// json move
export function json() {
  return gulp.src([paths.json.src, '!' + paths.json.ignore])
  .pipe(plumber())
  .pipe(newer(paths.json.dest))
  .pipe(gulp.dest(paths.json.dest))
}

// other move
export function copyOther() {
  return gulp.src(other.src, {since: gulp.lastRun(copyOther)})
  .pipe(gulp.dest(root.dist))
}

// dist配下を削除
export function distDel(done) {
  del([root.dist + '**'])
  done();
}

// ローカルサーバー立ち上げ
const createServer = browserSync.create();
export function server(done) { //このserver()関数を実行すると、browser-syncが起動し、指定された設定でローカルサーバーが立ち上がる。
  createServer.init({
    server: { //提供する静的ファイルの基準となるディレクトリを指定
      baseDir: paths.server,
      // middleware: [
      //   ssi({
      //     baseDir:root.dist,
      //     ext: '.html'
      //   })
      // ]
    },
    notify: false, //ブラウザシンクの通知機能を有効または無効にします。ここではfalseに設定されています。
    startPaths: '/sonic/index.html' //ブラウザが開かれたときに表示するファイルのパスを指定します。/sonic/index.htmlが指定されているので、ブラウザが開かれたときに/sonic/index.htmlが表示されます。
  })
  done(); //タスクの完了を通知
}

// リロード
export function reload(done) {
  createServer.reload();
  done();
}

//- 監視
export function watch() {
  gulp.watch(paths.html.src, gulp.series(html, reload))
  gulp.watch([paths.ejs.src, paths.ejs.ignore], gulp.series(ejsCompile, reload))
  gulp.watch(paths.css.src, gulp.series(cssDev, reload))
  gulp.watch(paths.jsPlugin.src, gulp.series(jsPlugin, reload))
  gulp.watch(paths.js.src, gulp.series(jsDev, reload))
  gulp.watch(paths.img.src, gulp.series(images, reload))
  gulp.watch(paths.font.src, gulp.series(fonts, reload))
  gulp.watch(other.src, gulp.series(copyOther, reload))
  gulp.watch([paths.json.src, paths.json.ignore, paths.json.config], gulp.series(json, reload))
}

// ----------------------------
// タスク定義
// ----------------------------
const runDev = gulp.series(gulp.parallel(cssDev, jsPlugin, jsDev, fonts, json, copyOther, images, html, ejsCompile), server, watch);
const runBuild = gulp.series(distDel, gulp.parallel(cssBuild, jsPlugin, jsBuild, fonts, images, html, ejsCompile));

exports.default = runDev;
exports.build = runBuild;