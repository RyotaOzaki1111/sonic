(() => {
  // 与えられた引数 t をチェックして、
// null または undefined である場合にはエラーをスローする。
// それ以外の場合には、引数 t をオブジェクトとして扱い、そのオブジェクトを返す。

//初期化 = 変数に値を代入して使えるようにすること
//イベントリスナー(クリック時などの特定の動作が発生したとき) = 指定したイベントの種類の発生を監視し、指定のイベントが発生した場合、関数を実行します。
//popstateイベント　= ブラウザの履歴を１つ以上追加した後に、ユーザがブラウザの「戻る」ボタンを押下した時に発動します。

function i(t) {
  if (null == t)
      throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(t)
}

//-------スムーススクロール関連-------
let Vt = function(t, e, n, r)   {  
  //関数 Vt は、n（デフォルトは Promise）を使って新し い Promise インスタンスを作成します。
  //この Promise インスタンスは、非同期処理が完了したときに結果を解決するためのものです。
  // 関数 Vt 内で、ジェネレーター関数 r を非同期イテレーションします。これは、ジェネレーター関数内のコードを逐次実行するためのメカニズムです。
  // r の next() メソッドを呼び出すことで、ジェネレーター関数の次のイテレーションが実行されます。その結果は Promise として返されます。
  // ジェネレーター関数が done: true を返すまで、l() 関数が再帰的に呼び出されます。
  // l() 関数は、ジェネレーターの実行結果に応じて次のステップを実行します。ジェネレーター関数が非同期関数を返した場合は、その結果を Promise にラップして処理を続行します。
  // 最終的に、ジェネレーター関数が完了し、done: true を返した場合は、Promise が解決され、結果が返されます。
  // この関数は、非同期処理をより簡潔に表現するためのヘルパー関数として使用されます。

  //t:  ジェネレーター関数内で this として参照されるオブジェクト（コンテキスト）。
  //e:  ジェネレーター関数に渡される引数の配列。
  //n:  Promise のコンストラクタ関数。省略された場合はデフォルトで Promise が使用されます。
  //r:  ジェネレーター関数自体。
  return new (n || (n = Promise))((function(i, o) {
      function a(t) {
          try {
              l(r.next(t))
          } catch (t) {
              o(t)
          }
      }
      function s(t) {
          try {
              l(r.throw(t))
          } catch (t) {
              o(t)
          }
      }
      function l(t) {
          var e;
          t.done ? i(t.value) : (e = t.value,
          e instanceof n ? e : new n((function(t) {
              t(e)
          }
          ))).then(a, s)
      }
      l((r = r.apply(t, e || [])).next())
  }
  ))
};

function zt(t) { //指定された要素 t の位置（上端と左端）を取得する関数。

// 変数 e（上端の位置）と変数 n（左端の位置）を 0 で初期化します。
// 変数 r を引数 t で初期化します。変数 r は現在の要素を指します。
// do-while ループを実行します。ループ内では以下の処理が行われます：
// 変数 e に現在の要素の上端の位置を加算します（r.offsetTop）。
// 変数 n に現在の要素の左端の位置を加算します（r.offsetLeft）。
// 変数 r を現在の要素の親要素（offsetParent）に更新します。
// ループ条件が真である場合は、ループを繰り返します。つまり、親要素が存在する限りループが続きます。
// ループが終了したら、上端の位置と左端の位置をオブジェクトとして返します。返されるオブジェクトは { top: e, left: n } の形式です。
// この関数を使用すると、指定された要素のドキュメント内での位置情報を取得できます。位置情報は、上端と左端の座標値として提供されます。

  let e = 0
    , n = 0
    , r = t;
  do {
      e += r.offsetTop || 0,
      n += r.offsetLeft || 0,
      r = r.offsetParent
  } while (r);
  return {
      top: e,
      left: n
  }
}
class Qt { //要素のスクロールに関連する情報と操作を提供します。
  constructor(t) { //引数 t は要素を指定します。
      this.element = t //this.element に指定された要素を格納します。
  }
  getHorizontalScroll() { //要素の水平方向のスクロール位置（スクロールバーの左端からの距離）を取得します。this.element.scrollLeft を返します。
      return this.element.scrollLeft
  }
  getVerticalScroll() { //要素の垂直方向のスクロール位置（スクロールバーの上端からの距離）を取得します。this.element.scrollTop を返します。
      return this.element.scrollTop
  }
  getMaxHorizontalScroll() { //要素の水平方向の最大スクロール量（コンテンツ全体の幅からビューポートの幅を引いた値）を取得します。this.element.scrollWidth - this.element.clientWidth を返します。
      return this.element.scrollWidth - this.element.clientWidth
  }
  getMaxVerticalScroll() { //要素の垂直方向の最大スクロール量（コンテンツ全体の高さからビューポートの高さを引いた値）を取得します。this.element.scrollHeight - this.element.clientHeight を返します。
      return this.element.scrollHeight - this.element.clientHeight
  }
  getHorizontalElementScrollOffset(t, e) { //水平方向の要素のスクロールオフセット（指定された要素 t の左端から、親要素 e の左端までの距離）を取得します。zt(t).left - zt(e).left を返します
      return zt(t).left - zt(e).left
  }
  getVerticalElementScrollOffset(t, e) { //垂直方向の要素のスクロールオフセット（指定された要素 t の上端から、親要素 e の上端までの距離）を取得します。zt(t).top - zt(e).top を返します。
      return zt(t).top - zt(e).top
  }
  scrollTo(t, e) { //要素を指定された水平方向と垂直方向の位置にスクロールします。引数 t は水平方向の位置、引数 e は垂直方向の位置を指定します。this.element.scrollLeft に t を代入し、this.element.scrollTop に e を代入します。
      this.element.scrollLeft = t,
      this.element.scrollTop = e
  }
}
class Ht {
  constructor() {
      this.element = window
  }
  getHorizontalScroll() {
      return window.scrollX || document.documentElement.scrollLeft
  }
  getVerticalScroll() {
      return window.scrollY || document.documentElement.scrollTop
  }
  getMaxHorizontalScroll() {
      return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth) - window.innerWidth
  }
  getMaxVerticalScroll() {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - window.innerHeight
  }
  getHorizontalElementScrollOffset(t) {
      return (window.scrollX || document.documentElement.scrollLeft) + t.getBoundingClientRect().left
  }
  getVerticalElementScrollOffset(t) {
      return (window.scrollY || document.documentElement.scrollTop) + t.getBoundingClientRect().top
  }
  scrollTo(t, e) {
      window.scrollTo(t, e)
  }
}
const qt = {
  elements: [],
  cancelMethods: [],
  add: (t,e)=>{
      qt.elements.push(t),
      qt.cancelMethods.push(e)
  }
  ,
  remove: (t,e)=>{
      const n = qt.elements.indexOf(t);
      n > -1 && (e && qt.cancelMethods[n](),
      qt.elements.splice(n, 1),
      qt.cancelMethods.splice(n, 1))
  }
}
, Kt = "undefined" != typeof window
, Zt = {
  cancelOnUserAction: !0,
  easing: t=>--t * t * t + 1,
  elementToScroll: Kt ? window : null,
  horizontalOffset: 0,
  maxDuration: 3e3,
  minDuration: 250,
  speed: 500,
  verticalOffset: 0
};




//-------iosスクロール制御。 iOSデバイスでのスクロール制御を実現するための関数群です。wt 関数を使用して特定の要素内でスクロール制御を有効化し、Et 関数を使用してスクロール制御を無効化できます。-------
var ct = !1;
if ("undefined" != typeof window) { //ブラウザがパッシブイベントリスナーをサポートしているかどうかを判定しています。パッシブイベントリスナーは、スクロールなどの操作を滑らかにするために使用されます。
    var _t = {
        get passive() {
            ct = !0
        }
    };
    window.addEventListener("testPassive", null, _t),
    window.removeEventListener("testPassive", null, _t)
}
let pt = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1) //変数 pt は、ユーザーがiOSデバイス（iPhone、iPad、iPod）またはMacデバイスであるかどうかを判定します。
  , ht = [] //変数 ht は、スクロール制御が有効になっている要素の配列を格納します。dt は、現在スクロール制御が有効化されているかどうかを示すフラグです。ft は、タッチイベント時のY座標を格納します。yt と gt は、スクロール制御時に一時的に変更されるCSSプロパティの値を保持します。
  , dt = !1
  , ft = -1
  , yt = void 0
  , gt = void 0
  , vt = function(t) { //関数 vt は、与えられたタッチイベントがスクロール制御が許可されている要素内で発生したものかどうかを判定します。
    return ht.some((function(e) {
        return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
    }
    ))
}
  , mt = function(t) { //関数 mt は、タッチイベントがスクロール制御が許可された要素内で発生したものであれば、デフォルトのスクロール動作を禁止します。
    var e = t || window.event;
    return !!vt(e.target) || (e.touches.length > 1 || (e.preventDefault && e.preventDefault(),
    !1))
}
  , Tt = function() { //関数 Tt は、スクロール制御が終了した際に一時的に変更されたCSSプロパティを元に戻します。
    void 0 !== gt && (document.body.style.paddingRight = gt,
    gt = void 0),
    void 0 !== yt && (document.body.style.overflow = yt,
    yt = void 0)
}
  , wt = function(t, e) { //関数 wt は、特定の要素内でのスクロール制御を有効化します。引数 t には制御対象の要素を指定し、引数 e にはオプションの設定を指定します。
    if (t) {
        if (!ht.some((function(e) {
            return e.targetElement === t
        }
        ))) {
            var n = {
                targetElement: t,
                options: e || {}
            };
            ht = [].concat(function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++)
                        n[e] = t[e];
                    return n
                }
                return Array.from(t)
            }(ht), [n]),
            pt ? (t.ontouchstart = function(t) {
                1 === t.targetTouches.length && (ft = t.targetTouches[0].clientY)
            }
            ,
            t.ontouchmove = function(e) {
                1 === e.targetTouches.length && function(t, e) {
                    var n = t.targetTouches[0].clientY - ft;
                    !vt(t.target) && (e && 0 === e.scrollTop && n > 0 || function(t) {
                        return !!t && t.scrollHeight - t.scrollTop <= t.clientHeight
                    }(e) && n < 0 ? mt(t) : t.stopPropagation())
                }(e, t)
            }
            ,
            dt || (document.addEventListener("touchmove", mt, ct ? {
                passive: !1
            } : void 0),
            dt = !0)) : function(t) {
                if (void 0 === gt) {
                    var e = !!t && !0 === t.reserveScrollBarGap
                      , n = window.innerWidth - document.documentElement.clientWidth;
                    e && n > 0 && (gt = document.body.style.paddingRight,
                    document.body.style.paddingRight = n + "px")
                }
                void 0 === yt && (yt = document.body.style.overflow,
                document.body.style.overflow = "hidden")
            }(e)
        }
    } else
        console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")
}
  , Et = function(t) { //特定の要素内でのスクロール制御を無効化します。
    t ? (ht = ht.filter((function(e) {
        return e.targetElement !== t
    }
    )),
    pt ? (t.ontouchstart = null,
    t.ontouchmove = null,
    dt && 0 === ht.length && (document.removeEventListener("touchmove", mt, ct ? {
        passive: !1
    } : void 0),
    dt = !1)) : ht.length || Tt()) : console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")
};



//-------グローバル変数の定義-------
//-------メディアクエリとヘッダーの定義-------
const mediaQuery = window.matchMedia("(min-width: 960px)");
const header = document.getElementById("header");

//-------オブジェクト思考のファンクション管理------
let commonScroll; //-------スクロール位置へ移動するアニメーションを格納する変数 -------
// let carouselSlider; //-------カルーセルスライダーを格納するための変数-------
// let kvApp;
// let myAt;


//-------初期設定-------
const init = function () {

  //-------変数を用意し（宣言し）、
  //-------init関数の処理で、それぞれオブジェクトを生成し、
  //-------インスタンス化する

  commonScroll = new CommonScroll({
    selector: document.querySelectorAll('*[data-scroll-target]')
  })

  // carouselSlider = new CarouselSlider({
  //   selector: document.querySelector("[data-js-id = 'movieCarousel']")
  // })

  // kvApp = new Kv({
  //   selector: document.querySelector("[data-js-id = 'kv']")
  // })

  // myAt =new At({
  //   selector: document.querySelector("[data-js-id='wordCarousel']")
  // })
}

//-------DOMが完全に読み込まれたら実行する
window.addEventListener('DOMContentLoaded', init);



//-------それぞれのオブジェクトを以下に定義する

//-------resizeReload
function resizeReload() {
  location.reload();  //現在のURLを再読み込みする
}


function mediaQueryChange() {
  return mediaQuery.addEventListener("change", resizeReload);
} 

/*
Slider Object
*/

const Jt = function(t, e = {}) { //引数 t はスクロール先の位置を指定します。引数 e はオプションパラメータであり、デフォルト値は空のオブジェクト
//tはいくつかの形式で指定できる
//  Element オブジェクト: スクロール先の要素を指定します。
//  number: 縦方向のスクロール位置を指定します。
//  [x, y] の配列: 横方向と縦方向のスクロール位置を指定します。
  return Vt(this, void 0, void 0, function* () { //関数内部では、引数 e の値とデフォルト設定をマージしたオプションオブジェクト o を作成します。
    if (!Kt)
      return new Promise((t) => {  
        t(false);
//         スクロール先の位置を計算し、水平方向と垂直方向のスクロールオフセットを設定します。
//         スクロール先が設定範囲を超えないように調整します。
//         スクロールアニメーションの時間や速度を計算します。
//         ユーザーの操作によってスクロールがキャンセルされる場合は、イベントリスナーを設定します。
//         スクロールアニメーションを実行し、Promise を返します。Promise の結果はスクロールアニメーションの完了状態（成功または失敗）です。
              });

    if (!window.Promise)
      throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";
      // 引数 e の elementToScroll プロパティが window か DOM 要素かによって、スクロール対象の要素を取得します。

    let n, r, i;
    const o = Object.assign(Object.assign({}, Zt), e);
    const a = o.elementToScroll === window;
    const s = !!o.elementToScroll.nodeName;

    if (!a && !s)
      throw "Element to scroll needs to be either window or DOM element.";

    const l = a ? document.documentElement : o.elementToScroll;

    if (
      "smooth" ===
      getComputedStyle(l).getPropertyValue("scroll-behavior")
    ) {
      console.warn(
        `${l.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`
      );
    }

    const u = a ? new Ht() : new Qt(o.elementToScroll);

    if (t instanceof Element) {
      if (i = t, s && (!o.elementToScroll.contains(i) || o.elementToScroll.isSameNode(i)))
        throw "options.elementToScroll has to be a parent of scrollToElement";

      n = u.getHorizontalElementScrollOffset(i, o.elementToScroll);
      r = u.getVerticalElementScrollOffset(i, o.elementToScroll);
    } else if ("number" == typeof t) {
      n = u.getHorizontalScroll();
      r = t;
    } else {
      if (!Array.isArray(t) || 2 !== t.length)
        throw "Wrong function signature. Check documentation.\nAvailable method signatures are:\n  animateScrollTo(y:number, options)\n  animateScrollTo([x:number | null, y:number | null], options)\n  animateScrollTo(scrollToElement:Element, options)";

      n = null === t[0] ? u.getHorizontalScroll() : t[0];
      r = null === t[1] ? u.getVerticalScroll() : t[1];
    }

    n += o.horizontalOffset;
    r += o.verticalOffset;

    const c = u.getMaxHorizontalScroll();
    const _ = u.getHorizontalScroll();
    if (n > c) {
      n = c;
    }

    const p = n - _;
    const h = u.getMaxVerticalScroll();
    const d = u.getVerticalScroll();
    if (r > h) {
      r = h;
    }

    const f = r - d;
    const y = Math.abs(Math.round(p / 1e3 * o.speed));
    const g = Math.abs(Math.round(f / 1e3 * o.speed));
    let v = y > g ? y : g;
    if (v < o.minDuration) {
      v = o.minDuration;
    } else if (v > o.maxDuration) {
      v = o.maxDuration;
    }

    return new Promise((t, e) => {
      let i;

      if (0 === p && 0 === f) {
        t(true);
      }

      qt.remove(u.element, true);

      const a = () => {
        h();
        cancelAnimationFrame(i);
        t(false);
      };

      qt.add(u.element, a);

      const s = o.cancelOnUserAction ? a : (t) => t.preventDefault();
      const l = o.cancelOnUserAction ? { passive: true } : { passive: false };
      const c = ["wheel", "touchstart", "keydown", "mousedown"];

      const h = () => {
        c.forEach((t) => {
          u.element.removeEventListener(t, s, l);
        });
      };

      c.forEach((t) => {
        u.element.addEventListener(t, s, l);
      });

      const y = Date.now();
      const g = () => {
        const e = Date.now() - y;
        const a = e / v;
        const s = Math.round(_ + p * o.easing(a));
        const l = Math.round(d + f * o.easing(a));

        if (e < v && (s !== n || l !== r)) {
          u.scrollTo(s, l);
          i = requestAnimationFrame(g);
        } else {
          u.scrollTo(n, r);
          cancelAnimationFrame(i);
          h();
          qt.remove(u.element, false);
          t(true);
        }
      };

      i = requestAnimationFrame(g);
    });
  });
};



function CommonScroll() {
  const scrollTargets = P('*[data-scroll-target]'); //配列を取得
  let isScrolling = false; //変数 isScrolling を初期化し、スクロールの状態を表すフラグとします。

  scrollTargets.forEach((target) => {
    target.addEventListener('click', () => {
      scrollToTarget(target.dataset.scrollTarget);
    });
  });

//関数 scrollToTarget は、スクロール処理を制御します。
// もし現在スクロール中であれば、処理を中断します（isScrolling が true の場合）。
// スクロールを解除するために関数 e を呼び出します。
// スクロールを固定するために関数 t を呼び出します。
// globalHeader という要素の高さを取得し、data-scroll-id 属性の値に対応する要素を取得します（変数 o）。
// Jt という関数を使用して、対象の要素までスクロールします。verticalOffset を -1 * i（ヘッダーの高さの負数）に設定し、ヘッダー分のオフセットを考慮します。
// スクロールが完了したら、r を false に戻します。

  const scrollToTarget = (targetId) => {
    if (isScrolling) return; //もし現在スクロール中であれば、処理を中断します（isScrolling が true の場合)

    isScrolling = true;
    removeScroll(); //スクロール解除する関数 
    fixedScroll(targetId); //スクロールを固定する関数
    const i = lt("globalHeader").getBoundingClientRect().height
    , o = S(`*[data-scroll-id=${targetId}]`);
    Jt(o, {
        verticalOffset: -1 * i
    }).then((()=>{
      isScrolling = false;
    }))
}  

  const  removeScroll = () => {
    // スクロール前のアクションを実行する（例: ローディング表示の表示）
    isScrolling = false;
  };

  const fixedScroll = (targetId) => {
    const targetElement = document.querySelector(`*[data-scroll-id="${targetId}"]`);
    const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const headerHeight = document.querySelector("[data-js-id = 'globalHeader' ]").getBoundingClientRect().height;
    const scrollToPosition = targetOffset - headerHeight;

    return new Promise((resolve) => {
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
        complete: resolve
      });
    });
  };
}



//関数内で指定したスタイルを設定するための機能(elementsが配列と単体の場合を加味したコード)
// const r = function(elements, styles) {
//   if (typeof elements[Symbol.iterator] === 'function') {
//     // `elements`が反復可能な場合
//     for (const element of elements) {
//       applyStyles(element, styles);
//     }
//   } else {
//     // `elements`が単体の要素の場合
//     applyStyles(elements, styles);
//   }
// };

// function applyStyles(element, styles) {
//   for (const prop in styles) {
//     element.style[prop] = styles[prop];
//   }
// }

const lt = t=>S(`*[data-js-id=${t}]`)


"use strict";
const t = ["fontSize", "width", "height", "left", "right", "top", "bottom", "marginLeft", "marginRight", "marginBottom", "marginTop", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "borderRadius"]
, e = ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "rotate", "skewX", "skewY"]
, n = t=>Array.isArray(t) ? t : [t] // 引数が配列の場合はそのまま返し、それ以外の場合は引数を要素とする新しい配列を返します
, r = (t,e)=>{
  n(t).forEach((t=>o(t, e)))
} 
, o = (n,r)=>{
  const i = {};
  try {
      Object.entries(r).forEach((([r,o])=>{
          switch (!0) {
          case (e=>t.includes(e))(r):
              u(n, r, o);
              break;
          case (t=>e.includes(t))(r):
              i[r] = o;
              break;
          default:
              l(n, r, String(o))
          }
      }
      ))
  } catch (t) {
      console.log(t)
  }
  c(n, i)
}
          , a = t=>"string" == typeof (t = 0 === t ? "0" : t) ? t : `${t}px`
          , s = t=>"string" == typeof (t = 0 === t ? "0" : t) ? t : `${t}deg`
          , l = (t,e,n)=>{
            t.style[e] = n
        }
          , u = (t,e,n)=>{
            t.style[e] = a(n)}
, c = (t,e)=>{
  const n = []
    , r = (t=>{
      const e = {}
        , n = t.split(")").map((t=>t + ")"))
        , r = n.find((t=>t.match("translate3d")));
      if (r) {
          const t = /(translate3d\()(.*)(\))/.exec(r)[2].split(",").map((t=>t.trim()));
          e.translateX = t[0],
          e.translateY = t[1],
          e.translateZ = t[2]
      }
      const i = n.find((t=>t.match(/rotate\(/)));
      if (i) {
          const t = /(rotate\()(.*)(\))/.exec(i)[2].split(",").map((t=>t.trim()));
          e.rotate = t[0]
      }
      const o = n.find((t=>t.match("scale")));
      if (o) {
          const t = /(scale\()(.*)(\))/.exec(o)[2].split(",").map((t=>t.trim()));
          e.scaleX = t[0],
          e.scaleY = t[1]
      }
      const a = n.find((t=>t.match(/skew\(/)));
      if (a) {
          const t = /(skew\()(.*)(\))/.exec(a)[2].split(",").map((t=>t.trim()));
          e.skewX = t[0],
          e.skewY = t[1]
      }
      return e
  }
  )(t.style.transform);
  if (p(e) || p(r)) {
      const t = a(_(e.translateX, r.translateX))
        , i = a(_(e.translateY, r.translateY))
        , o = a(_(e.translateZ, r.translateZ));
      n.push(`translate3d(${t}, ${i}, ${o})`)
  }
  if (h(e) || h(r)) {
      const t = s(_(e.rotate, r.rotate));
      n.push(`rotate(${t})`)
  }
  if (d(e) || d(r)) {
      const t = _(e.scaleX, r.scaleX, "1")
        , i = _(e.scaleY, r.scaleY, "1");
      n.push(`scale(${t}, ${i})`)
  }
  if (f(e) || f(r)) {
      const t = s(_(e.skewX, r.skewX))
        , i = s(_(e.skewY, r.skewY));
      n.push(`skew(${t}, ${i})`)
  }
  t.style.transform = n.join(" ")
}
, _ = (t,e,n="0")=>void 0 !== t ? t : e || n
, p = t=>void 0 !== t.translateX || void 0 !== t.translateY || void 0 !== t.translateZ
, h = t=>void 0 !== t.rotate
, d = t=>void 0 !== t.scaleX || void 0 !== t.scaleY
, f = t=>void 0 !== t.skewX || void 0 !== t.skewY
, y = (t,e)=>{
  const n = new RegExp(`(.*)${e}`).exec(t)
    , r = n ? n[1] : t;
  return isNaN(r) || !t ? void 0 : parseInt(r)
}
, g = t=>y(t, "px")
, v = t=>{ //与えられた配列の要素をコピーして新しい配列を作成し、その新しい配列を返す
  const e = [];
  for (let n = 0; n < t.length; n++) {
      const r = t[n];
      e.push(r)
  }
  return e
}
, m = (t,e)=>{
  t instanceof NodeList && (t = v(t));
  const r = n(t)
    , i = n(e);
  r.forEach((t=>t.classList.add(...i)))
}
, T = (t,e)=>{
  t instanceof NodeList && (t = v(t));
  const r = n(t)
    , i = n(e);
  r.forEach((t=>t.classList.remove(...i)))
}
, w = (t,e,r,i="",o=!0)=>{
  t instanceof NodeList && (t = v(t));
  n(t).forEach((t=>E(t, e, r, o, i)))
}
, E = (t,e,n,r=!0,i="")=>{
  ("function" == typeof e ? e(t) : e) ? (m(t, n),
  r && i && T(t, i)) : (i && m(t, i),
  r && T(t, n))
}
, b = (t,e)=>t.classList.contains(e)
, S = (t,e=document)=>e.querySelector(t) //指定されたCSSセレクターに一致する最初の要素を取得するためのショートカット。tはCSSセレクターの文字列。eは検索対象の要素。デフォルトではdocument（ドキュメント全体）が使用される。
, P = (t,e=document)=>{ //指定されたCSSセレクターに一致する全ての要素を取得し、それらの要素を配列として返す関数。
  const n = e.querySelectorAll(t);
  return v(n)
};


// const S = (selector, context = document) => context.querySelector(selector); //この関数は、第1引数にセレクター文字列、第2引数にコンテキスト要素（省略可能でデフォルト値はdocument）を受け取ります。context.querySelector(selector)は、指定されたコンテキスト内で最初に一致する要素を取得するためのメソッドです。
// const P = (selector, context = document) => Array.from(context.querySelectorAll(selector)); //指定されたコンテキスト内のすべての要素を取得し、配列として返す関数。

t=>new Promise((e=>setTimeout(e, t)));
const tt = i(329);

function et(t, e, n) {
  const r = n ? .75 : 1; //上記は引数として要素t、位置情報e,アニメーションのスケールフラグnを受け取る
  Tween24.prop(t, {
    x: e.x,
    scaleX: r,
    scaleY: r
  }).play();
}

class Rt { //インデックス情報を持つカルーセル要素を表すクラス。index インスタンス変数を初期化するコンストラクタと、 _index のゲッターメソッドと _x のゲッターメソッドが定義されている。updatePosition メソッドは、カルーセル要素の位置を更新するための計算を行う。
  constructor(t) {
      this._index = t; // インスタンス変数 _index を初期化するコンストラクタ
  }

  get index() {
      return this._index; // _index のゲッターメソッド
  }

  get x() {
      return this._x; // _x のゲッターメソッド
  }

  updatePosition(t, e, n) {
    const r = Math.abs(this._index);
    switch (!0) {
    case 0 === this._index:
        this._x = 0;
        break;
    case this._index > 0:
        this._x = t / 2 + e / 2 + e * (r - 1) + n * r;
        break;
    case this._index < 0:
        this._x = -1 * (t / 2 + e / 2 + e * (r - 1) + n * r)
    }
  }
}


class Nt { //カルーセル要素の位置情報を持つクラス。_posIndex、_domIndex、_dom インスタンス変数を初期化するコンストラクタと、それぞれのゲッターメソッドが定義されています。updateNextIndex メソッドは、次の位置インデックスを更新し、updatePosIndex メソッドは位置インデックスを更新する。
  constructor(t, e, n) {
      this._posIndex = n;
      this._domIndex = e;
      this._dom = t;
      r(t, {
          position: "absolute",
          top: 0,
          left: 0
      });
  }

  get posIndex() {
      return this._posIndex;
  }

  get nextPosIndex() {
      return this._nextPosIndex;
  }

  get dom() {
      return this._dom;
  }

  get domIndex() {
      return this._domIndex;
  }

  updateNextIndex(t) {
      this._nextPosIndex = this._posIndex + t;
  }

  updatePosIndex() {
      this._posIndex = this._nextPosIndex;
  }
}


let st = function(t, e, n, r) {
  return new (n || (n = Promise))((function(i, o) {
      function a(t) {
          try {
              l(r.next(t))
          } catch (t) {
              o(t)
          }
      }
      function s(t) {
          try {
              l(r.throw(t))
          } catch (t) {
              o(t)
          }
      }
      function l(t) {
          var e;
          t.done ? i(t.value) : (e = t.value,
          e instanceof n ? e : new n((function(t) {
              t(e)
          }
          ))).then(a, s)
      }
      l((r = r.apply(t, e || [])).next())
  }
  ))
};

const J = t => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, t);
  });
};

const it = "click";
const ot = "resize";

const At = () => { //即時実行関数として実行される
  let e, n, i, o = false, //カルーセルの要素や位置に関する変数
  a = 0; 
  

  //変数の初期化
  const t = document.querySelector("[data-js-id = 'wordCarousel']");
  // const s = document.querySelector("[data-js-id = 'wordCarousel'] ul");
  // const l = document.querySelectorAll("[data-js-id = 'wordCarousel'] li");
  const s = S("ul", t)
      , l = P("li", t)

  const u = []; //Rtインスタンスを格納する用。カルーセル内の要素の位置情報を格納する配列。
  const c = []; //Ntインスタンスを格納する用。カルーセル内の要素の配列で、表示される順序と位置情報を保持。

    const _ = () => { //Word Carousel の初期化および各要素の位置とアニメーションの更新を行う関数。カルーセルの初期設定と各要素の位置情報を更新する関数です。c 配列から posIndex プロパティが 0 と一致する要素を検索し、その要素の位置情報を取得します。カルーセルの高さを調整し、カルーセル内のテキスト要素を水平方向に移動させます。各要素の位置情報を更新し、Tween24 ライブラリを使用してアニメーションさせます。
    const o = c.find((t) => t.posIndex === 0).dom; //find((条件))) =>　この場合は、posIndex プロパティが 0 と一致する要素を検索　.domプロパティが格納され、これは要素のDOMオブジェクト
    const a = o.getBoundingClientRect();
    i = parseInt(getComputedStyle(o).marginRight);
    e = a.width; //スライド中央の値
    n = 0.75 * e; //スライド左右のwidthの値

    r(t, {
      height: a.height + 5 + "px"
    }),
    r(s, {
      transform: e / 2
    }),

    u.forEach((t) => {
      t.updatePosition(e, n, i);
    });

    c.forEach((t) => {
      const e = u.find((e=>e.index === t.posIndex));
      Tween24.prop(t.dom).x(e.x).play();
    });
  };

  const p = () => { //Word Carousel を前にスライドさせる関数 カルーセルを前後にスライドさせるための関数です。d() 関数を呼び出し、引数として -1 または 1 を渡します。
    d(-1);
  };

  const h = () => { //Word Carousel を後ろにスライドさせる関数
    d(1);
  };

  const d = (t) => { //指定された方向に Word Carousel をスライドさせる関数です。内部で 匿名関数を呼び出して要素を追加し、各要素のアニメーションを設定 カルーセルをスライドさせる関数です。引数 t が -1 の場合は前方向にスライドし、1 の場合は後方向にスライドします。新しい要素を追加し、古い要素を削除することでスライドを実現します。アニメーションの設定や完了時の処理を行います。
    if (o)
        return;

        (t=>{ //
          const e = c[t > 0 ? 0 : c.length - 1]
            , n = (e.domIndex + -1 * t + l.length) % l.length
            , i = l[n].cloneNode(!0)
            , o = e.posIndex + -1 * t
            , a = new Nt(i,n,o);
          s.appendChild(i);
          const _ = u.find((t=>t.index === o));
          et(i, _, !0),
          t > 0 ? c.unshift(a) : c.push(a);
          const p = S("span", i)
            , h = S(".description", i);
          r([h, p], {
              opacity: 0
          })
      }
      )(t);

      const e = [];
      clearTimeout(a),
      c.forEach((n=>{
          n.updateNextIndex(t);
          const r = u.find((t=>t.index === n.nextPosIndex))
            , i = 0 === n.nextPosIndex ? 1 : .75;
          e.push(Tween24.tween(n.dom, 1, Ease24._4_QuartInOut).x(r.x).scale(i));
          const o = S("span", n.dom)
            , a = S(".description", n.dom);
          0 === n.posIndex && e.push(Tween24.tween([o, a], .3, Ease24._4_QuartOut).opacity(0)),
          0 === n.nextPosIndex && e.push(Tween24.tween([o, a], .3, Ease24._4_QuartOut).opacity(1).delay(.9))
      }
      )),
      Tween24.parallel(...e).onInit((()=>{
          o = !0,
          c.forEach((t=>T(t.dom, "active")))
      }
      )).onComplete((()=>{
          o = !1;
          const e = t > 0 ? c.pop() : c.shift();
          s.removeChild(e.dom),
          c.forEach((t=>{
              w(t.dom, 0 === t.nextPosIndex, "active"),
              t.updatePosIndex()
          }
          )),
          _(),
          f()
      }
      )).play()
  },

  f = () => { //自動スライドを開始するためのタイマーを設定する関数です。5秒ごとに p() 関数を呼び出します。
    a = window.setTimeout(() => {
      p()
    }, 5000);
  };

  let y = 0; //y 変数はリサイズイベントの遅延を管理するためのタイマーです。リサイズイベントが発生するたびに、古いタイマーをクリアして _() 関数を150ミリ秒後に実行します。
  window.addEventListener(ot, (()=>{
    clearTimeout(y),
    y = window.setTimeout(_, 150)
  }
  )),


  (()=>{ //即時関数は、コードが読み込まれた直後に実行されます。各テキスト要素のドラッグを無効化し、カルーセルの初期設定を行います。u 配列にカルーセル内の要素の位置情報を追加し、c 配列にカルーセル内の要素を追加します。各要素に対して初期の位置情報や表示状態を設定し、アニメーションのための設定を行います。
    l.forEach((t=>{
      S("img", t).draggable = !1  //コンピュータは0はfalse、1はtrueとして認識している
    }
    ));
    const o = l[0]
      , a = o.getBoundingClientRect();
    for (i = g(getComputedStyle(o).marginRight),
    e = a.width,
    n = .75 * e,
    r(t, {
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        height: a.height + 5
    }),
    r(s, {
        width: 0,
        position: "relative",
        translateX: e / -2
    }); s.hasChildNodes(); )
        s.removeChild(s.firstChild);
    for (let t = -4; t <= 4; t++) {
        const r = new Rt(t);
        u.push(r),
        r.updatePosition(e, n, i)
    }
    for (let t = -3; t < 4; t++) {
        const e = (t + 100 * l.length) % l.length
          , n = new Nt(l[e].cloneNode(!0),e,t);
        c.push(n)
    }
    c.forEach((t=>{
        const e = u.find((e=>e.index === t.posIndex));
        if (s.appendChild(t.dom),
        et(t.dom, e, 0 !== t.posIndex),
        w(t.dom, 0 === t.posIndex, "active"), 
        0 !== t.posIndex) {
            const e = S(".description", t.dom)
              , n = S("span", t.dom);
            r([e, n], {
                opacity: 0
            });
        }
    }
    ))
}
)();

const v = new IntersectionObserver((t=>m(t))) //v はカルーセル要素の表示状態を監視するための Intersection Observer インスタンスです。カルーセル要素が表示されると自動的に f() 関数を呼び出し、Intersection Observer の監視を解除します。
  , m = e=>{
    e.forEach((e=>{
        e.isIntersecting && (f(),
        v.unobserve(t))
    }
 ))
};
v.observe(t)
};At()

const bt = ()=>{
  const t = S(".modal-wrapper")
    , e = S("button.close", t)
    // , n = S("section.forecast .carousel")
    , r = P("section.diary [data-modal-btn]");
  let i, o = "", a = !1; //i :  YouTubeプレーヤーオブジェクトを格納する変数 o : モーダルウィンドウの種類を表す変数  a : モーダルウィンドウが表示されているかどうかを表すフラグ
  // const s = S(".yt-player"); //s : YouTubeプレーヤーの要素を表すセレクター

  // YouTubeプレーヤーの作成

  // YouTubeプレーヤーが存在する場合、i 変数に新しいプレーヤーオブジェクトを作成
  // (null === YT || void 0 === YT ? void 0 : YT.Player) ? i = new YT.Player(s,{}) : window.onYouTubeIframeAPIReady = ()=>{
  //     i = new YT.Player(s,{}) //YouTubeプレーヤーが存在しない場合、window.onYouTubeIframeAPIReady イベントハンドラを定義し、YouTubeのIFrame APIがロードされたときに実行される関数内でプレーヤーオブジェクトを作成
  // }
  // ;
  const l = ()=>{ //モーダルウィンドウを表示するための処理を行います。要素の不透明度を設定し、表示スタイルを block に変更します。また、必要に応じてボディの余白を調整。
      Tween24.tween(t, .2).opacity(1).style("display", "block").play();
      const e = window.innerWidth
        , n = document.body.clientWidth;
      if (n < e) {
          const t = e - n;
          Tween24.prop("body").style("padding-right", `${t}px`).play()
      }
  }
    , u = t=>{ //特定のモーダルウィンドウ要素を表示するための処理を行います。要素の不透明度を設定し、表示スタイルを flex に変更します。一定の遅延を経てから表示処理を行う
      Tween24.serial(Tween24.prop(t).opacity(0), Tween24.tween(t, .3).opacity(1).style("display", "flex").delay(.5)).play()
  }
  ;
  r.forEach((e=>{ //ダイアリーセクションのモーダルボタンごとにクリックイベントリスナーを登録します。モーダルウィンドウの種類を "diary" に設定し、対応するモーダルウィンドウ要素を表示します。
      e.addEventListener("click", (e=>{
          a = !0;
          const n = e.currentTarget;
          o = "diary";
          const r = S(`[data-modal=${o}]`)
            , i = S(`[data-modal-diary=${n.dataset.modalBtn}]`);
          P("[data-modal-diary]").forEach((t=>t.style.display = "none")),
          i.style.display = "block",
          l(),
          u(r),
          wt(t)
      }
      ))
  }
  )),

  (()=>{  // モーダルウィンドウの非表示処理
      const n = ()=>{ //モーダルウィンドウの外側がクリックされたときの処理を行います。モーダルウィンドウの内部要素をクリックした場合は無視します
          var e;
          Tween24.serial(Tween24.prop("body").style("padding-right", "0px"), Tween24.tween(t, .2).opacity(0), Tween24.tween(t, .2).style("display", "none")).play(),
          e = S(`[data-modal=${o}]`),
          Tween24.serial(Tween24.tween(e, .2).opacity(0), Tween24.tween(e, .2).style("display", "none")).play(),
          Et(t),
          i && i.stopVideo(),
          a = !1
      }
      ;
      t.addEventListener("click", (t=>t.target.closest("div.modal-inner") || n())),
      e.addEventListener("click", (()=>n())), //閉じるボタンがクリックされたときの処理を行います
      document.addEventListener("keydown", (t=>a && "Escape" === t.code && n()))  //キーボードの Escape キーが押されたときの処理を行います。
  }
  )()
}; bt(),

(() => {
  (() => {
    const dots = document.querySelectorAll(".dots li");  //ドットインジゲーターを取得
    let isDragging = false;
  
    const setActiveDot = (index) => {  //現在スライドのドットにactive付与するための関数
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };
  
    dots.forEach((dot,index) => {
      if (index === 0 || dot.dataset.carouselTarget === "1") {
        dot.classList.add("active");
      }
      dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.carouselTarget) - 1;
        slider.moveToIdx(index, true);
        setActiveDot(index);
      });
    });
  
    const prevButton = document.querySelector("[data-js-id='movieCarouselPrev']"); //前ボタン
    const nextButton = document.querySelector("[data-js-id='movieCarouselNext']"); //後ろボタン
  
    const slider = new KeenSlider('.carousel', { //keen-sliderの初期化
      drag: false,
      loop: true,
      defaultAnimation: {
        duration: 1000
      },
      slides: {
        perView: 'auto'
      },
      breakpoints: {
        '(max-width:959px)': {
          slides: {
            perView: 1
          }
        }
      },
      animationStarted: () => {
        isDragging = true;
      },
      animationEnded: () => {
        isDragging = false;
      }
    });
  
    const Gt = ()=>window.innerWidth < 960; //ウィンドウの幅を基にして真偽値を返す関数
  
    nextButton.addEventListener('click', () => {
      if (!isDragging) {
        const currentSlide = slider.track.absToRel( slider.track.details.abs);
        let nextSlide;
        const totalSlides = slider.slides.length;
  
        if (Gt()) {
          nextSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        } else {
          nextSlide = currentSlide === totalSlides - 2 ? 0 : currentSlide + 3;
        }
        slider.moveToIdx(nextSlide);
        setActiveDot(nextSlide);
      }
    });
  
    prevButton.addEventListener('click', () => {
      if (!isDragging) {
        const currentSlide = slider.track.absToRel( slider.track.details.abs);
        let  prevSlide;
        const totalSlides = slider.slides.length;
  
        if (Gt()) {
          prevSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        } else {
          prevSlide = currentSlide === 0 ? totalSlides - 2 : currentSlide - 3;
        }
        slider.moveToIdx(prevSlide);
        setActiveDot(prevSlide);
      }
    });
  })()
  
  let te, ee, ne, re, ie;
  (() => {
  const oe = function(t) { //kvのぼかしアニメーション
    const e = {
      value: 8
    };
  
    const n = Tween24.tween(e, 0.7, Ease24._4_QuartInOut, {
      value: 0
    });
  
    n.onUpdate(function() {
      r(t, {
        filter: `blur(${e.value}px)`
      });
    });
  
    n.onComplete(function() {
      r(t, {
        filter: "none"
      });
    });
  
    return n;
  };
  
    const Kv = () => {
      // const t = document.querySelector("[data-js-id = 'kv']");
      const t = lt("kv");
      const te = document.querySelector(".img1");
      const ee = document.querySelector(".img2");
      const [ne, re, ie] = document.querySelectorAll(".texts span");
    
    
      const elements = [te, ee, ne, re, ie];
      elements.forEach(element => {
          element.style.opacity = 0;
      });
    
      // t.style.visibility = "visible";
      // t.style.overflow = "hidden";
      r(t, {
        visibility: "visible",
        overflow: "hidden"
      })
  
      te.style.transform = "matrix(1.02, 0, 0, 1.02, 0, 0)";
      ee.style.transform = "matrix(1.02, 0, 0, 1.02, 0, 0)";
      ne.style.filter = "blur(8px)";
      re.style.filter = "blur(8px)";
      ie.style.filter = "blur(8px)";
    
    
      const kvElements = [
        Tween24.tween([te], 1.8, Ease24._4_ExpoInOut).opacity(1).scale(1),
        Tween24.tween([ee], 1.8, Ease24._4_ExpoInOut).opacity(1).scale(1).delay(0.4),
      ];
      
      const texts_Ne = Tween24.parallel(
        Tween24.tween([ne], 0.5, Ease24._4_QuartInOut).opacity(1),
        // Tween24.wait(1),
        oe(ne)
      );
      
      const texts_Re = Tween24.parallel(
        Tween24.tween([re], 0.5, Ease24._4_QuartInOut).opacity(1),
        // Tween24.wait(1),
        oe(re)
      );
      
      const texts_Ie = Tween24.parallel(
        Tween24.tween([ie], 0.5, Ease24._4_QuartInOut).opacity(1),
        // Tween24.wait(1),
        oe(ie)
      )
      
      const textsSerial = Tween24.serial(
        texts_Ne,
        texts_Re,
        texts_Ie
      ).delay(1.2);
      
      const animateParallel = Tween24.parallel(
        Tween24.parallel(...kvElements),
        textsSerial
      ).delay(1.6);
      
      animateParallel.play();
    }; Kv()
  })(),
  

  (()=>{
    const t = S("section.diary")
      , e = P(".year", t)
      , n = P("nav .tab", t)
      , i = P("[data-group]", t)
      , o = "active"
      , a = t=>{ //ここの引数tは年の要素を表す
        T(e, o), //T関数：classlistのactiveを削除 ◆ここでは年の要素からactiveクラスを削除
        m(t, o), //m関数：classlistのactiveを付与 ◆ここでは引数で指定された年の要素にactiveクラスを付与
        n.forEach((e=>{ //タブの data-year 属性が引数の年と一致する場合、タブ要素の表示を flex に設定し、一致しない場合は none に設定する
            const n = e.dataset.year === t.dataset.year;
            r(e, {
                display: n ? "flex" : "none"
            })
        }
        ))
      }
      , s = t=>{ //ここの引数tはタブの要素を指す
        T(n, o), //タブ要素から既存の active クラスを削除
        m(t, o) //引数で指定されたタブの要素に active クラスを付与
    }
      , l = e=>st(void 0, void 0, void 0, (function*() { //ここの引数eはタブのデータ属性を指す
        yield J(200), //J(200) の待機後にグループ要素から既存の active クラスを削除します。
        T(i, o)
        yield J(500); //J(500) の待機後に、data-group 属性が引数で指定された値と一致する要素を取得し、それに active クラスを付与します。
        const n = S(`[data-group = '${e}']`, t);
        m(n, o) 
    }
    ));
    n.forEach((t=>{
        t.addEventListener("click", (()=>{
            b(t, o) || (s(t),
            l(t.dataset.tab))
        }
        ))
    }
    )),
    e.forEach((t=>{
        t.addEventListener("click", (()=>{
            if (b(t, o))
                return;
            a(t);
            const e = n.find((e=>e.dataset.tab === t.dataset.tab));
            s(e),
            l(t.dataset.tab)
        }
        ))
    }
    )),
    a(e[0]),
    s(n[3])
    // l(i[0].dataset.group);
  
    try {
      const ig = i[0]?.dataset.group;
      l(ig);
    }
    catch(e) {
      console.log(e.message);
    }
  })()

  //sp用のハンバーガーメニュー開閉
  var ae;
  ae = ()=>{
      const {releaseScroll: t, closeNav: e} = (()=>{
          let t = !1
            , e = !1;
          const n = lt("spNavBtn")
            , i = lt("spNav")
            , o = S(".bg1", i)
            , a = S(".bg2", i)
            , s = [...P("li", i)];
          n.addEventListener(it, (()=>{
              e || (t ? u() : l())
          }
          ));
          const l = ()=>{
              Tween24.serial(Tween24.func((()=>{
                  t = !0,
                  e = !0,
                  _(),
                  m(n, "close"),
                  r(i, {
                      display: "block",
                      opacity: 1
                  }),
                  r([o, a], {
                      opacity: 0
                  }),
                  r(s, {
                      opacity: 0
                  })
              }
              )), Tween24.prop(s, {
                  x: .02 * -window.innerWidth
              }), Tween24.prop([o, a], {
                  x: .05 * -window.innerWidth
              }), Tween24.parallel(Tween24.tween(o, .6, Ease24._4_QuartOut).x(0).opacity(.95), Tween24.tween(a, .6, Ease24._4_QuartOut).x(0).opacity(1).delay(.3)), Tween24.lag(.07, Tween24.tween(s, .6, Ease24._4_QuartOut).x(0).opacity(1)).delay(.2)).onComplete((()=>{
                  e = !1
              }
              )).play()
          }
            , u = ()=>{
              t && Tween24.serial(Tween24.func((()=>{
                  e = !0,
                  t = !1,
                  T(n, "close")
              }
              )), Tween24.tween(i, .4, Ease24._4_QuartOut).opacity(0).x(.05 * window.innerWidth), Tween24.prop(i, {
                  x: 0
              })).onComplete((()=>{
                  r(i, {
                      display: "none"
                  }),
                  c(),
                  e = !1
              }
              )).play()
          }
            , c = ()=>{
              Et(i)
          }
            , _ = ()=>{
              wt(i)
          }
          ;
          return {
              closeNav: u,
              releaseScroll: c
          }
      }
      )();
      ((t,e)=>{
          const n = P("*[data-scroll-target]");
          let r = !1;
          n.forEach((t=>t.addEventListener(it, (()=>{
              i(t.dataset.scrollTarget)
          }
          ))));
          const i = n=>{
              if (r)
                  return;
              r = !0,
              e(),
              t();
              const i = lt("globalHeader").getBoundingClientRect().height
                , o = S(`*[data-scroll-id=${n}]`);
                console.log(i)
              Jt(o, {
                  verticalOffset: -1 * i
              }).then((()=>{
                  r = !1
              }
              ))
          }
      }
      )(e, t)
  },window.addEventListener("DOMContentLoaded", ae)

})()//全体の関数を実行,

// (t=>{
//   window.addEventListener("load", t)
// })
})();
