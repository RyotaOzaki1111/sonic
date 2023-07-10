"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  // 与えられた引数 t をチェックして、
  // null または undefined である場合にはエラーをスローする。
  // それ以外の場合には、引数 t をオブジェクトとして扱い、そのオブジェクトを返す。

  //初期化 = 変数に値を代入して使えるようにすること
  //イベントリスナー(クリック時などの特定の動作が発生したとき) = 指定したイベントの種類の発生を監視し、指定のイベントが発生した場合、関数を実行します。
  //popstateイベント　= ブラウザの履歴を１つ以上追加した後に、ユーザがブラウザの「戻る」ボタンを押下した時に発動します。

  function i(t) {
    if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t);
  }

  //-------スムーススクロール関連-------
  var Vt = function Vt(t, e, n, r) {
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
    return new (n || (n = Promise))(function (i, o) {
      function a(t) {
        try {
          l(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function s(t) {
        try {
          l(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function l(t) {
        var e;
        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
          t(e);
        })).then(a, s);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
  function zt(t) {
    //指定された要素 t の位置（上端と左端）を取得する関数。

    // 変数 e（上端の位置）と変数 n（左端の位置）を 0 で初期化します。
    // 変数 r を引数 t で初期化します。変数 r は現在の要素を指します。
    // do-while ループを実行します。ループ内では以下の処理が行われます：
    // 変数 e に現在の要素の上端の位置を加算します（r.offsetTop）。
    // 変数 n に現在の要素の左端の位置を加算します（r.offsetLeft）。
    // 変数 r を現在の要素の親要素（offsetParent）に更新します。
    // ループ条件が真である場合は、ループを繰り返します。つまり、親要素が存在する限りループが続きます。
    // ループが終了したら、上端の位置と左端の位置をオブジェクトとして返します。返されるオブジェクトは { top: e, left: n } の形式です。
    // この関数を使用すると、指定された要素のドキュメント内での位置情報を取得できます。位置情報は、上端と左端の座標値として提供されます。

    var e = 0,
      n = 0,
      r = t;
    do {
      e += r.offsetTop || 0, n += r.offsetLeft || 0, r = r.offsetParent;
    } while (r);
    return {
      top: e,
      left: n
    };
  }
  var Qt = /*#__PURE__*/function () {
    //要素のスクロールに関連する情報と操作を提供します。
    function Qt(t) {
      _classCallCheck(this, Qt);
      //引数 t は要素を指定します。
      this.element = t; //this.element に指定された要素を格納します。
    }
    _createClass(Qt, [{
      key: "getHorizontalScroll",
      value: function getHorizontalScroll() {
        //要素の水平方向のスクロール位置（スクロールバーの左端からの距離）を取得します。this.element.scrollLeft を返します。
        return this.element.scrollLeft;
      }
    }, {
      key: "getVerticalScroll",
      value: function getVerticalScroll() {
        //要素の垂直方向のスクロール位置（スクロールバーの上端からの距離）を取得します。this.element.scrollTop を返します。
        return this.element.scrollTop;
      }
    }, {
      key: "getMaxHorizontalScroll",
      value: function getMaxHorizontalScroll() {
        //要素の水平方向の最大スクロール量（コンテンツ全体の幅からビューポートの幅を引いた値）を取得します。this.element.scrollWidth - this.element.clientWidth を返します。
        return this.element.scrollWidth - this.element.clientWidth;
      }
    }, {
      key: "getMaxVerticalScroll",
      value: function getMaxVerticalScroll() {
        //要素の垂直方向の最大スクロール量（コンテンツ全体の高さからビューポートの高さを引いた値）を取得します。this.element.scrollHeight - this.element.clientHeight を返します。
        return this.element.scrollHeight - this.element.clientHeight;
      }
    }, {
      key: "getHorizontalElementScrollOffset",
      value: function getHorizontalElementScrollOffset(t, e) {
        //水平方向の要素のスクロールオフセット（指定された要素 t の左端から、親要素 e の左端までの距離）を取得します。zt(t).left - zt(e).left を返します
        return zt(t).left - zt(e).left;
      }
    }, {
      key: "getVerticalElementScrollOffset",
      value: function getVerticalElementScrollOffset(t, e) {
        //垂直方向の要素のスクロールオフセット（指定された要素 t の上端から、親要素 e の上端までの距離）を取得します。zt(t).top - zt(e).top を返します。
        return zt(t).top - zt(e).top;
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(t, e) {
        //要素を指定された水平方向と垂直方向の位置にスクロールします。引数 t は水平方向の位置、引数 e は垂直方向の位置を指定します。this.element.scrollLeft に t を代入し、this.element.scrollTop に e を代入します。
        this.element.scrollLeft = t, this.element.scrollTop = e;
      }
    }]);
    return Qt;
  }();
  var Ht = /*#__PURE__*/function () {
    function Ht() {
      _classCallCheck(this, Ht);
      this.element = window;
    }
    _createClass(Ht, [{
      key: "getHorizontalScroll",
      value: function getHorizontalScroll() {
        return window.scrollX || document.documentElement.scrollLeft;
      }
    }, {
      key: "getVerticalScroll",
      value: function getVerticalScroll() {
        return window.scrollY || document.documentElement.scrollTop;
      }
    }, {
      key: "getMaxHorizontalScroll",
      value: function getMaxHorizontalScroll() {
        return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth) - window.innerWidth;
      }
    }, {
      key: "getMaxVerticalScroll",
      value: function getMaxVerticalScroll() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - window.innerHeight;
      }
    }, {
      key: "getHorizontalElementScrollOffset",
      value: function getHorizontalElementScrollOffset(t) {
        return (window.scrollX || document.documentElement.scrollLeft) + t.getBoundingClientRect().left;
      }
    }, {
      key: "getVerticalElementScrollOffset",
      value: function getVerticalElementScrollOffset(t) {
        return (window.scrollY || document.documentElement.scrollTop) + t.getBoundingClientRect().top;
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(t, e) {
        window.scrollTo(t, e);
      }
    }]);
    return Ht;
  }();
  var qt = {
      elements: [],
      cancelMethods: [],
      add: function add(t, e) {
        qt.elements.push(t), qt.cancelMethods.push(e);
      },
      remove: function remove(t, e) {
        var n = qt.elements.indexOf(t);
        n > -1 && (e && qt.cancelMethods[n](), qt.elements.splice(n, 1), qt.cancelMethods.splice(n, 1));
      }
    },
    Kt = "undefined" != typeof window,
    Zt = {
      cancelOnUserAction: !0,
      easing: function easing(t) {
        return --t * t * t + 1;
      },
      elementToScroll: Kt ? window : null,
      horizontalOffset: 0,
      maxDuration: 3e3,
      minDuration: 250,
      speed: 500,
      verticalOffset: 0
    };

  //-------iosスクロール制御。 iOSデバイスでのスクロール制御を実現するための関数群です。wt 関数を使用して特定の要素内でスクロール制御を有効化し、Et 関数を使用してスクロール制御を無効化できます。-------
  var ct = !1;
  if ("undefined" != typeof window) {
    //ブラウザがパッシブイベントリスナーをサポートしているかどうかを判定しています。パッシブイベントリスナーは、スクロールなどの操作を滑らかにするために使用されます。
    var _t = {
      get passive() {
        ct = !0;
      }
    };
    window.addEventListener("testPassive", null, _t), window.removeEventListener("testPassive", null, _t);
  }
  var pt = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1) //変数 pt は、ユーザーがiOSデバイス（iPhone、iPad、iPod）またはMacデバイスであるかどうかを判定します。
    ,
    ht = [] //変数 ht は、スクロール制御が有効になっている要素の配列を格納します。dt は、現在スクロール制御が有効化されているかどうかを示すフラグです。ft は、タッチイベント時のY座標を格納します。yt と gt は、スクロール制御時に一時的に変更されるCSSプロパティの値を保持します。
    ,
    dt = !1,
    ft = -1,
    yt = void 0,
    gt = void 0,
    vt = function vt(t) {
      //関数 vt は、与えられたタッチイベントがスクロール制御が許可されている要素内で発生したものかどうかを判定します。
      return ht.some(function (e) {
        return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t));
      });
    },
    mt = function mt(t) {
      //関数 mt は、タッチイベントがスクロール制御が許可された要素内で発生したものであれば、デフォルトのスクロール動作を禁止します。
      var e = t || window.event;
      return !!vt(e.target) || e.touches.length > 1 || (e.preventDefault && e.preventDefault(), !1);
    },
    Tt = function Tt() {
      //関数 Tt は、スクロール制御が終了した際に一時的に変更されたCSSプロパティを元に戻します。
      void 0 !== gt && (document.body.style.paddingRight = gt, gt = void 0), void 0 !== yt && (document.body.style.overflow = yt, yt = void 0);
    },
    wt = function wt(t, e) {
      //関数 wt は、特定の要素内でのスクロール制御を有効化します。引数 t には制御対象の要素を指定し、引数 e にはオプションの設定を指定します。
      if (t) {
        if (!ht.some(function (e) {
          return e.targetElement === t;
        })) {
          var n = {
            targetElement: t,
            options: e || {}
          };
          ht = [].concat(function (t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
              return n;
            }
            return Array.from(t);
          }(ht), [n]), pt ? (t.ontouchstart = function (t) {
            1 === t.targetTouches.length && (ft = t.targetTouches[0].clientY);
          }, t.ontouchmove = function (e) {
            1 === e.targetTouches.length && function (t, e) {
              var n = t.targetTouches[0].clientY - ft;
              !vt(t.target) && (e && 0 === e.scrollTop && n > 0 || function (t) {
                return !!t && t.scrollHeight - t.scrollTop <= t.clientHeight;
              }(e) && n < 0 ? mt(t) : t.stopPropagation());
            }(e, t);
          }, dt || (document.addEventListener("touchmove", mt, ct ? {
            passive: !1
          } : void 0), dt = !0)) : function (t) {
            if (void 0 === gt) {
              var e = !!t && !0 === t.reserveScrollBarGap,
                n = window.innerWidth - document.documentElement.clientWidth;
              e && n > 0 && (gt = document.body.style.paddingRight, document.body.style.paddingRight = n + "px");
            }
            void 0 === yt && (yt = document.body.style.overflow, document.body.style.overflow = "hidden");
          }(e);
        }
      } else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    },
    Et = function Et(t) {
      //特定の要素内でのスクロール制御を無効化します。
      t ? (ht = ht.filter(function (e) {
        return e.targetElement !== t;
      }), pt ? (t.ontouchstart = null, t.ontouchmove = null, dt && 0 === ht.length && (document.removeEventListener("touchmove", mt, ct ? {
        passive: !1
      } : void 0), dt = !1)) : ht.length || Tt()) : console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
    };

  //-------グローバル変数の定義-------
  //-------メディアクエリとヘッダーの定義-------
  var mediaQuery = window.matchMedia("(min-width: 960px)");
  var header = document.getElementById("header");

  //-------オブジェクト思考のファンクション管理------
  var commonScroll; //-------スクロール位置へ移動するアニメーションを格納する変数 -------
  // let carouselSlider; //-------カルーセルスライダーを格納するための変数-------
  // let kvApp;
  // let myAt;

  //-------初期設定-------
  var init = function init() {
    //-------変数を用意し（宣言し）、
    //-------init関数の処理で、それぞれオブジェクトを生成し、
    //-------インスタンス化する

    commonScroll = new CommonScroll({
      selector: document.querySelectorAll('*[data-scroll-target]')
    });

    // carouselSlider = new CarouselSlider({
    //   selector: document.querySelector("[data-js-id = 'movieCarousel']")
    // })

    // kvApp = new Kv({
    //   selector: document.querySelector("[data-js-id = 'kv']")
    // })

    // myAt =new At({
    //   selector: document.querySelector("[data-js-id='wordCarousel']")
    // })
  };

  //-------DOMが完全に読み込まれたら実行する
  window.addEventListener('DOMContentLoaded', init);

  //-------それぞれのオブジェクトを以下に定義する

  //-------resizeReload
  function resizeReload() {
    location.reload(); //現在のURLを再読み込みする
  }

  function mediaQueryChange() {
    return mediaQuery.addEventListener("change", resizeReload);
  }

  /*
  Slider Object
  */

  var Jt = function Jt(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    //引数 t はスクロール先の位置を指定します。引数 e はオプションパラメータであり、デフォルト値は空のオブジェクト
    //tはいくつかの形式で指定できる
    //  Element オブジェクト: スクロール先の要素を指定します。
    //  number: 縦方向のスクロール位置を指定します。
    //  [x, y] の配列: 横方向と縦方向のスクロール位置を指定します。
    return Vt(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var n, r, i, o, a, s, l, u, c, _, p, h, d, f, y, g, v;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (Kt) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", new Promise(function (t) {
              t(false);
              //         スクロール先の位置を計算し、水平方向と垂直方向のスクロールオフセットを設定します。
              //         スクロール先が設定範囲を超えないように調整します。
              //         スクロールアニメーションの時間や速度を計算します。
              //         ユーザーの操作によってスクロールがキャンセルされる場合は、イベントリスナーを設定します。
              //         スクロールアニメーションを実行し、Promise を返します。Promise の結果はスクロールアニメーションの完了状態（成功または失敗）です。
            }));
          case 2:
            if (window.Promise) {
              _context.next = 4;
              break;
            }
            throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";
          case 4:
            o = Object.assign(Object.assign({}, Zt), e);
            a = o.elementToScroll === window;
            s = !!o.elementToScroll.nodeName;
            if (!(!a && !s)) {
              _context.next = 9;
              break;
            }
            throw "Element to scroll needs to be either window or DOM element.";
          case 9:
            l = a ? document.documentElement : o.elementToScroll;
            if ("smooth" === getComputedStyle(l).getPropertyValue("scroll-behavior")) {
              console.warn("".concat(l.tagName, " has \"scroll-behavior: smooth\" which can mess up with animated-scroll-to's animations"));
            }
            u = a ? new Ht() : new Qt(o.elementToScroll);
            if (!(t instanceof Element)) {
              _context.next = 19;
              break;
            }
            if (!(i = t, s && (!o.elementToScroll.contains(i) || o.elementToScroll.isSameNode(i)))) {
              _context.next = 15;
              break;
            }
            throw "options.elementToScroll has to be a parent of scrollToElement";
          case 15:
            n = u.getHorizontalElementScrollOffset(i, o.elementToScroll);
            r = u.getVerticalElementScrollOffset(i, o.elementToScroll);
            _context.next = 28;
            break;
          case 19:
            if (!("number" == typeof t)) {
              _context.next = 24;
              break;
            }
            n = u.getHorizontalScroll();
            r = t;
            _context.next = 28;
            break;
          case 24:
            if (!(!Array.isArray(t) || 2 !== t.length)) {
              _context.next = 26;
              break;
            }
            throw "Wrong function signature. Check documentation.\nAvailable method signatures are:\n  animateScrollTo(y:number, options)\n  animateScrollTo([x:number | null, y:number | null], options)\n  animateScrollTo(scrollToElement:Element, options)";
          case 26:
            n = null === t[0] ? u.getHorizontalScroll() : t[0];
            r = null === t[1] ? u.getVerticalScroll() : t[1];
          case 28:
            n += o.horizontalOffset;
            r += o.verticalOffset;
            c = u.getMaxHorizontalScroll();
            _ = u.getHorizontalScroll();
            if (n > c) {
              n = c;
            }
            p = n - _;
            h = u.getMaxVerticalScroll();
            d = u.getVerticalScroll();
            if (r > h) {
              r = h;
            }
            f = r - d;
            y = Math.abs(Math.round(p / 1e3 * o.speed));
            g = Math.abs(Math.round(f / 1e3 * o.speed));
            v = y > g ? y : g;
            if (v < o.minDuration) {
              v = o.minDuration;
            } else if (v > o.maxDuration) {
              v = o.maxDuration;
            }
            return _context.abrupt("return", new Promise(function (t, e) {
              var i;
              if (0 === p && 0 === f) {
                t(true);
              }
              qt.remove(u.element, true);
              var a = function a() {
                h();
                cancelAnimationFrame(i);
                t(false);
              };
              qt.add(u.element, a);
              var s = o.cancelOnUserAction ? a : function (t) {
                return t.preventDefault();
              };
              var l = o.cancelOnUserAction ? {
                passive: true
              } : {
                passive: false
              };
              var c = ["wheel", "touchstart", "keydown", "mousedown"];
              var h = function h() {
                c.forEach(function (t) {
                  u.element.removeEventListener(t, s, l);
                });
              };
              c.forEach(function (t) {
                u.element.addEventListener(t, s, l);
              });
              var y = Date.now();
              var g = function g() {
                var e = Date.now() - y;
                var a = e / v;
                var s = Math.round(_ + p * o.easing(a));
                var l = Math.round(d + f * o.easing(a));
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
            }));
          case 43:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  function CommonScroll() {
    var scrollTargets = P('*[data-scroll-target]'); //配列を取得
    var isScrolling = false; //変数 isScrolling を初期化し、スクロールの状態を表すフラグとします。

    scrollTargets.forEach(function (target) {
      target.addEventListener('click', function () {
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

    var scrollToTarget = function scrollToTarget(targetId) {
      if (isScrolling) return; //もし現在スクロール中であれば、処理を中断します（isScrolling が true の場合)

      isScrolling = true;
      removeScroll(); //スクロール解除する関数 
      fixedScroll(targetId); //スクロールを固定する関数
      var i = lt("globalHeader").getBoundingClientRect().height,
        o = S("*[data-scroll-id=".concat(targetId, "]"));
      Jt(o, {
        verticalOffset: -1 * i
      }).then(function () {
        isScrolling = false;
      });
    };
    var removeScroll = function removeScroll() {
      // スクロール前のアクションを実行する（例: ローディング表示の表示）
      isScrolling = false;
    };
    var fixedScroll = function fixedScroll(targetId) {
      var targetElement = document.querySelector("*[data-scroll-id=\"".concat(targetId, "\"]"));
      var targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
      var headerHeight = document.querySelector("[data-js-id = 'globalHeader' ]").getBoundingClientRect().height;
      var scrollToPosition = targetOffset - headerHeight;
      return new Promise(function (resolve) {
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

  var lt = function lt(t) {
    return S("*[data-js-id=".concat(t, "]"));
  };
  "use strict";
  var t = ["fontSize", "width", "height", "left", "right", "top", "bottom", "marginLeft", "marginRight", "marginBottom", "marginTop", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "borderRadius"],
    e = ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "rotate", "skewX", "skewY"],
    n = function n(t) {
      return Array.isArray(t) ? t : [t];
    } // 引数が配列の場合はそのまま返し、それ以外の場合は引数を要素とする新しい配列を返します
    ,
    r = function r(t, e) {
      n(t).forEach(function (t) {
        return o(t, e);
      });
    },
    o = function o(n, r) {
      var i = {};
      try {
        Object.entries(r).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            r = _ref2[0],
            o = _ref2[1];
          switch (!0) {
            case function (e) {
              return t.includes(e);
            }(r):
              u(n, r, o);
              break;
            case function (t) {
              return e.includes(t);
            }(r):
              i[r] = o;
              break;
            default:
              l(n, r, String(o));
          }
        });
      } catch (t) {
        console.log(t);
      }
      c(n, i);
    },
    a = function a(t) {
      return "string" == typeof (t = 0 === t ? "0" : t) ? t : "".concat(t, "px");
    },
    s = function s(t) {
      return "string" == typeof (t = 0 === t ? "0" : t) ? t : "".concat(t, "deg");
    },
    l = function l(t, e, n) {
      t.style[e] = n;
    },
    u = function u(t, e, n) {
      t.style[e] = a(n);
    },
    c = function c(t, e) {
      var n = [],
        r = function (t) {
          var e = {},
            n = t.split(")").map(function (t) {
              return t + ")";
            }),
            r = n.find(function (t) {
              return t.match("translate3d");
            });
          if (r) {
            var _t2 = /(translate3d\()(.*)(\))/.exec(r)[2].split(",").map(function (t) {
              return t.trim();
            });
            e.translateX = _t2[0], e.translateY = _t2[1], e.translateZ = _t2[2];
          }
          var i = n.find(function (t) {
            return t.match(/rotate\(/);
          });
          if (i) {
            var _t3 = /(rotate\()(.*)(\))/.exec(i)[2].split(",").map(function (t) {
              return t.trim();
            });
            e.rotate = _t3[0];
          }
          var o = n.find(function (t) {
            return t.match("scale");
          });
          if (o) {
            var _t4 = /(scale\()(.*)(\))/.exec(o)[2].split(",").map(function (t) {
              return t.trim();
            });
            e.scaleX = _t4[0], e.scaleY = _t4[1];
          }
          var a = n.find(function (t) {
            return t.match(/skew\(/);
          });
          if (a) {
            var _t5 = /(skew\()(.*)(\))/.exec(a)[2].split(",").map(function (t) {
              return t.trim();
            });
            e.skewX = _t5[0], e.skewY = _t5[1];
          }
          return e;
        }(t.style.transform);
      if (p(e) || p(r)) {
        var _t6 = a(_(e.translateX, r.translateX)),
          i = a(_(e.translateY, r.translateY)),
          _o = a(_(e.translateZ, r.translateZ));
        n.push("translate3d(".concat(_t6, ", ").concat(i, ", ").concat(_o, ")"));
      }
      if (h(e) || h(r)) {
        var _t7 = s(_(e.rotate, r.rotate));
        n.push("rotate(".concat(_t7, ")"));
      }
      if (d(e) || d(r)) {
        var _t8 = _(e.scaleX, r.scaleX, "1"),
          _i2 = _(e.scaleY, r.scaleY, "1");
        n.push("scale(".concat(_t8, ", ").concat(_i2, ")"));
      }
      if (f(e) || f(r)) {
        var _t9 = s(_(e.skewX, r.skewX)),
          _i3 = s(_(e.skewY, r.skewY));
        n.push("skew(".concat(_t9, ", ").concat(_i3, ")"));
      }
      t.style.transform = n.join(" ");
    },
    _ = function _(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
      return void 0 !== t ? t : e || n;
    },
    p = function p(t) {
      return void 0 !== t.translateX || void 0 !== t.translateY || void 0 !== t.translateZ;
    },
    h = function h(t) {
      return void 0 !== t.rotate;
    },
    d = function d(t) {
      return void 0 !== t.scaleX || void 0 !== t.scaleY;
    },
    f = function f(t) {
      return void 0 !== t.skewX || void 0 !== t.skewY;
    },
    y = function y(t, e) {
      var n = new RegExp("(.*)".concat(e)).exec(t),
        r = n ? n[1] : t;
      return isNaN(r) || !t ? void 0 : parseInt(r);
    },
    g = function g(t) {
      return y(t, "px");
    },
    v = function v(t) {
      //与えられた配列の要素をコピーして新しい配列を作成し、その新しい配列を返す
      var e = [];
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        e.push(r);
      }
      return e;
    },
    m = function m(t, e) {
      t instanceof NodeList && (t = v(t));
      var r = n(t),
        i = n(e);
      r.forEach(function (t) {
        var _t$classList;
        return (_t$classList = t.classList).add.apply(_t$classList, _toConsumableArray(i));
      });
    },
    T = function T(t, e) {
      t instanceof NodeList && (t = v(t));
      var r = n(t),
        i = n(e);
      r.forEach(function (t) {
        var _t$classList2;
        return (_t$classList2 = t.classList).remove.apply(_t$classList2, _toConsumableArray(i));
      });
    },
    w = function w(t, e, r) {
      var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
      t instanceof NodeList && (t = v(t));
      n(t).forEach(function (t) {
        return E(t, e, r, o, i);
      });
    },
    E = function E(t, e, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
      var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
      ("function" == typeof e ? e(t) : e) ? (m(t, n), r && i && T(t, i)) : (i && m(t, i), r && T(t, n));
    },
    b = function b(t, e) {
      return t.classList.contains(e);
    },
    S = function S(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      return e.querySelector(t);
    } //指定されたCSSセレクターに一致する最初の要素を取得するためのショートカット。tはCSSセレクターの文字列。eは検索対象の要素。デフォルトではdocument（ドキュメント全体）が使用される。
    ,
    P = function P(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      //指定されたCSSセレクターに一致する全ての要素を取得し、それらの要素を配列として返す関数。
      var n = e.querySelectorAll(t);
      return v(n);
    };

  // const S = (selector, context = document) => context.querySelector(selector); //この関数は、第1引数にセレクター文字列、第2引数にコンテキスト要素（省略可能でデフォルト値はdocument）を受け取ります。context.querySelector(selector)は、指定されたコンテキスト内で最初に一致する要素を取得するためのメソッドです。
  // const P = (selector, context = document) => Array.from(context.querySelectorAll(selector)); //指定されたコンテキスト内のすべての要素を取得し、配列として返す関数。

  (function (t) {
    return new Promise(function (e) {
      return setTimeout(e, t);
    });
  });
  var tt = i(329);
  function et(t, e, n) {
    var r = n ? .75 : 1; //上記は引数として要素t、位置情報e,アニメーションのスケールフラグnを受け取る
    Tween24.prop(t, {
      x: e.x,
      scaleX: r,
      scaleY: r
    }).play();
  }
  var Rt = /*#__PURE__*/function () {
    //インデックス情報を持つカルーセル要素を表すクラス。index インスタンス変数を初期化するコンストラクタと、 _index のゲッターメソッドと _x のゲッターメソッドが定義されている。updatePosition メソッドは、カルーセル要素の位置を更新するための計算を行う。
    function Rt(t) {
      _classCallCheck(this, Rt);
      this._index = t; // インスタンス変数 _index を初期化するコンストラクタ
    }
    _createClass(Rt, [{
      key: "index",
      get: function get() {
        return this._index; // _index のゲッターメソッド
      }
    }, {
      key: "x",
      get: function get() {
        return this._x; // _x のゲッターメソッド
      }
    }, {
      key: "updatePosition",
      value: function updatePosition(t, e, n) {
        var r = Math.abs(this._index);
        switch (!0) {
          case 0 === this._index:
            this._x = 0;
            break;
          case this._index > 0:
            this._x = t / 2 + e / 2 + e * (r - 1) + n * r;
            break;
          case this._index < 0:
            this._x = -1 * (t / 2 + e / 2 + e * (r - 1) + n * r);
        }
      }
    }]);
    return Rt;
  }();
  var Nt = /*#__PURE__*/function () {
    //カルーセル要素の位置情報を持つクラス。_posIndex、_domIndex、_dom インスタンス変数を初期化するコンストラクタと、それぞれのゲッターメソッドが定義されています。updateNextIndex メソッドは、次の位置インデックスを更新し、updatePosIndex メソッドは位置インデックスを更新する。
    function Nt(t, e, n) {
      _classCallCheck(this, Nt);
      this._posIndex = n;
      this._domIndex = e;
      this._dom = t;
      r(t, {
        position: "absolute",
        top: 0,
        left: 0
      });
    }
    _createClass(Nt, [{
      key: "posIndex",
      get: function get() {
        return this._posIndex;
      }
    }, {
      key: "nextPosIndex",
      get: function get() {
        return this._nextPosIndex;
      }
    }, {
      key: "dom",
      get: function get() {
        return this._dom;
      }
    }, {
      key: "domIndex",
      get: function get() {
        return this._domIndex;
      }
    }, {
      key: "updateNextIndex",
      value: function updateNextIndex(t) {
        this._nextPosIndex = this._posIndex + t;
      }
    }, {
      key: "updatePosIndex",
      value: function updatePosIndex() {
        this._posIndex = this._nextPosIndex;
      }
    }]);
    return Nt;
  }();
  var st = function st(t, e, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function a(t) {
        try {
          l(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function s(t) {
        try {
          l(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function l(t) {
        var e;
        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
          t(e);
        })).then(a, s);
      }
      l((r = r.apply(t, e || [])).next());
    });
  };
  var J = function J(t) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, t);
    });
  };
  var it = "click";
  var ot = "resize";
  var At = function At() {
    //即時実行関数として実行される
    var e,
      n,
      i,
      o = false,
      //カルーセルの要素や位置に関する変数
      a = 0;

    //変数の初期化
    var t = document.querySelector("[data-js-id = 'wordCarousel']");
    // const s = document.querySelector("[data-js-id = 'wordCarousel'] ul");
    // const l = document.querySelectorAll("[data-js-id = 'wordCarousel'] li");
    var s = S("ul", t),
      l = P("li", t);
    var u = []; //Rtインスタンスを格納する用。カルーセル内の要素の位置情報を格納する配列。
    var c = []; //Ntインスタンスを格納する用。カルーセル内の要素の配列で、表示される順序と位置情報を保持。

    var _ = function _() {
      //Word Carousel の初期化および各要素の位置とアニメーションの更新を行う関数。カルーセルの初期設定と各要素の位置情報を更新する関数です。c 配列から posIndex プロパティが 0 と一致する要素を検索し、その要素の位置情報を取得します。カルーセルの高さを調整し、カルーセル内のテキスト要素を水平方向に移動させます。各要素の位置情報を更新し、Tween24 ライブラリを使用してアニメーションさせます。
      var o = c.find(function (t) {
        return t.posIndex === 0;
      }).dom; //find((条件))) =>　この場合は、posIndex プロパティが 0 と一致する要素を検索　.domプロパティが格納され、これは要素のDOMオブジェクト
      var a = o.getBoundingClientRect();
      i = parseInt(getComputedStyle(o).marginRight);
      e = a.width; //スライド中央の値
      n = 0.75 * e; //スライド左右のwidthの値

      r(t, {
        height: a.height + 5 + "px"
      }), r(s, {
        transform: e / 2
      }), u.forEach(function (t) {
        t.updatePosition(e, n, i);
      });
      c.forEach(function (t) {
        var e = u.find(function (e) {
          return e.index === t.posIndex;
        });
        Tween24.prop(t.dom).x(e.x).play();
      });
    };
    var p = function p() {
      //Word Carousel を前にスライドさせる関数 カルーセルを前後にスライドさせるための関数です。d() 関数を呼び出し、引数として -1 または 1 を渡します。
      d(-1);
    };
    var h = function h() {
      //Word Carousel を後ろにスライドさせる関数
      d(1);
    };
    var d = function d(t) {
        var _Tween;
        //指定された方向に Word Carousel をスライドさせる関数です。内部で 匿名関数を呼び出して要素を追加し、各要素のアニメーションを設定 カルーセルをスライドさせる関数です。引数 t が -1 の場合は前方向にスライドし、1 の場合は後方向にスライドします。新しい要素を追加し、古い要素を削除することでスライドを実現します。アニメーションの設定や完了時の処理を行います。
        if (o) return;
        (function (t) {
          //
          var e = c[t > 0 ? 0 : c.length - 1],
            n = (e.domIndex + -1 * t + l.length) % l.length,
            i = l[n].cloneNode(!0),
            o = e.posIndex + -1 * t,
            a = new Nt(i, n, o);
          s.appendChild(i);
          var _ = u.find(function (t) {
            return t.index === o;
          });
          et(i, _, !0), t > 0 ? c.unshift(a) : c.push(a);
          var p = S("span", i),
            h = S(".description", i);
          r([h, p], {
            opacity: 0
          });
        })(t);
        var e = [];
        clearTimeout(a), c.forEach(function (n) {
          n.updateNextIndex(t);
          var r = u.find(function (t) {
              return t.index === n.nextPosIndex;
            }),
            i = 0 === n.nextPosIndex ? 1 : .75;
          e.push(Tween24.tween(n.dom, 1, Ease24._4_QuartInOut).x(r.x).scale(i));
          var o = S("span", n.dom),
            a = S(".description", n.dom);
          0 === n.posIndex && e.push(Tween24.tween([o, a], .3, Ease24._4_QuartOut).opacity(0)), 0 === n.nextPosIndex && e.push(Tween24.tween([o, a], .3, Ease24._4_QuartOut).opacity(1).delay(.9));
        }), (_Tween = Tween24).parallel.apply(_Tween, e).onInit(function () {
          o = !0, c.forEach(function (t) {
            return T(t.dom, "active");
          });
        }).onComplete(function () {
          o = !1;
          var e = t > 0 ? c.pop() : c.shift();
          s.removeChild(e.dom), c.forEach(function (t) {
            w(t.dom, 0 === t.nextPosIndex, "active"), t.updatePosIndex();
          }), _(), f();
        }).play();
      },
      f = function f() {
        //自動スライドを開始するためのタイマーを設定する関数です。5秒ごとに p() 関数を呼び出します。
        a = window.setTimeout(function () {
          p();
        }, 5000);
      };
    var y = 0; //y 変数はリサイズイベントの遅延を管理するためのタイマーです。リサイズイベントが発生するたびに、古いタイマーをクリアして _() 関数を150ミリ秒後に実行します。
    window.addEventListener(ot, function () {
      clearTimeout(y), y = window.setTimeout(_, 150);
    }), function () {
      //即時関数は、コードが読み込まれた直後に実行されます。各テキスト要素のドラッグを無効化し、カルーセルの初期設定を行います。u 配列にカルーセル内の要素の位置情報を追加し、c 配列にカルーセル内の要素を追加します。各要素に対して初期の位置情報や表示状態を設定し、アニメーションのための設定を行います。
      l.forEach(function (t) {
        S("img", t).draggable = !1; //コンピュータは0はfalse、1はtrueとして認識している
      });

      var o = l[0],
        a = o.getBoundingClientRect();
      for (i = g(getComputedStyle(o).marginRight), e = a.width, n = .75 * e, r(t, {
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        height: a.height + 5
      }), r(s, {
        width: 0,
        position: "relative",
        translateX: e / -2
      }); s.hasChildNodes();) s.removeChild(s.firstChild);
      for (var _t10 = -4; _t10 <= 4; _t10++) {
        var _r2 = new Rt(_t10);
        u.push(_r2), _r2.updatePosition(e, n, i);
      }
      for (var _t11 = -3; _t11 < 4; _t11++) {
        var _e2 = (_t11 + 100 * l.length) % l.length,
          _n2 = new Nt(l[_e2].cloneNode(!0), _e2, _t11);
        c.push(_n2);
      }
      c.forEach(function (t) {
        var e = u.find(function (e) {
          return e.index === t.posIndex;
        });
        if (s.appendChild(t.dom), et(t.dom, e, 0 !== t.posIndex), w(t.dom, 0 === t.posIndex, "active"), 0 !== t.posIndex) {
          var _e3 = S(".description", t.dom),
            _n3 = S("span", t.dom);
          r([_e3, _n3], {
            opacity: 0
          });
        }
      });
    }();
    var v = new IntersectionObserver(function (t) {
        return m(t);
      }) //v はカルーセル要素の表示状態を監視するための Intersection Observer インスタンスです。カルーセル要素が表示されると自動的に f() 関数を呼び出し、Intersection Observer の監視を解除します。
      ,
      m = function m(e) {
        e.forEach(function (e) {
          e.isIntersecting && (f(), v.unobserve(t));
        });
      };
    v.observe(t);
  };
  At();
  var bt = function bt() {
    var t = S(".modal-wrapper"),
      e = S("button.close", t)
      // , n = S("section.forecast .carousel")
      ,
      r = P("section.diary [data-modal-btn]");
    var i,
      o = "",
      a = !1; //i :  YouTubeプレーヤーオブジェクトを格納する変数 o : モーダルウィンドウの種類を表す変数  a : モーダルウィンドウが表示されているかどうかを表すフラグ
    // const s = S(".yt-player"); //s : YouTubeプレーヤーの要素を表すセレクター

    // YouTubeプレーヤーの作成

    // YouTubeプレーヤーが存在する場合、i 変数に新しいプレーヤーオブジェクトを作成
    // (null === YT || void 0 === YT ? void 0 : YT.Player) ? i = new YT.Player(s,{}) : window.onYouTubeIframeAPIReady = ()=>{
    //     i = new YT.Player(s,{}) //YouTubeプレーヤーが存在しない場合、window.onYouTubeIframeAPIReady イベントハンドラを定義し、YouTubeのIFrame APIがロードされたときに実行される関数内でプレーヤーオブジェクトを作成
    // }
    // ;
    var l = function l() {
        //モーダルウィンドウを表示するための処理を行います。要素の不透明度を設定し、表示スタイルを block に変更します。また、必要に応じてボディの余白を調整。
        Tween24.tween(t, .2).opacity(1).style("display", "block").play();
        var e = window.innerWidth,
          n = document.body.clientWidth;
        if (n < e) {
          var _t12 = e - n;
          Tween24.prop("body").style("padding-right", "".concat(_t12, "px")).play();
        }
      },
      u = function u(t) {
        //特定のモーダルウィンドウ要素を表示するための処理を行います。要素の不透明度を設定し、表示スタイルを flex に変更します。一定の遅延を経てから表示処理を行う
        Tween24.serial(Tween24.prop(t).opacity(0), Tween24.tween(t, .3).opacity(1).style("display", "flex").delay(.5)).play();
      };
    r.forEach(function (e) {
      //ダイアリーセクションのモーダルボタンごとにクリックイベントリスナーを登録します。モーダルウィンドウの種類を "diary" に設定し、対応するモーダルウィンドウ要素を表示します。
      e.addEventListener("click", function (e) {
        a = !0;
        var n = e.currentTarget;
        o = "diary";
        var r = S("[data-modal=".concat(o, "]")),
          i = S("[data-modal-diary=".concat(n.dataset.modalBtn, "]"));
        P("[data-modal-diary]").forEach(function (t) {
          return t.style.display = "none";
        }), i.style.display = "block", l(), u(r), wt(t);
      });
    }), function () {
      // モーダルウィンドウの非表示処理
      var n = function n() {
        //モーダルウィンドウの外側がクリックされたときの処理を行います。モーダルウィンドウの内部要素をクリックした場合は無視します
        var e;
        Tween24.serial(Tween24.prop("body").style("padding-right", "0px"), Tween24.tween(t, .2).opacity(0), Tween24.tween(t, .2).style("display", "none")).play(), e = S("[data-modal=".concat(o, "]")), Tween24.serial(Tween24.tween(e, .2).opacity(0), Tween24.tween(e, .2).style("display", "none")).play(), Et(t), i && i.stopVideo(), a = !1;
      };
      t.addEventListener("click", function (t) {
        return t.target.closest("div.modal-inner") || n();
      }), e.addEventListener("click", function () {
        return n();
      }),
      //閉じるボタンがクリックされたときの処理を行います
      document.addEventListener("keydown", function (t) {
        return a && "Escape" === t.code && n();
      }); //キーボードの Escape キーが押されたときの処理を行います。
    }();
  };

  bt(), function () {
    (function () {
      var dots = document.querySelectorAll(".dots li"); //ドットインジゲーターを取得
      var isDragging = false;
      var setActiveDot = function setActiveDot(index) {
        //現在スライドのドットにactive付与するための関数
        dots.forEach(function (dot, i) {
          if (i === index) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      };
      dots.forEach(function (dot, index) {
        if (index === 0 || dot.dataset.carouselTarget === "1") {
          dot.classList.add("active");
        }
        dot.addEventListener('click', function () {
          var index = parseInt(dot.dataset.carouselTarget) - 1;
          slider.moveToIdx(index, true);
          setActiveDot(index);
        });
      });
      var prevButton = document.querySelector("[data-js-id='movieCarouselPrev']"); //前ボタン
      var nextButton = document.querySelector("[data-js-id='movieCarouselNext']"); //後ろボタン

      var slider = new KeenSlider('.carousel', {
        //keen-sliderの初期化
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
        animationStarted: function animationStarted() {
          isDragging = true;
        },
        animationEnded: function animationEnded() {
          isDragging = false;
        }
      });
      var Gt = function Gt() {
        return window.innerWidth < 960;
      }; //ウィンドウの幅を基にして真偽値を返す関数

      nextButton.addEventListener('click', function () {
        if (!isDragging) {
          var currentSlide = slider.track.absToRel(slider.track.details.abs);
          var nextSlide;
          var totalSlides = slider.slides.length;
          if (Gt()) {
            nextSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
          } else {
            nextSlide = currentSlide === totalSlides - 2 ? 0 : currentSlide + 3;
          }
          slider.moveToIdx(nextSlide);
          setActiveDot(nextSlide);
        }
      });
      prevButton.addEventListener('click', function () {
        if (!isDragging) {
          var currentSlide = slider.track.absToRel(slider.track.details.abs);
          var prevSlide;
          var totalSlides = slider.slides.length;
          if (Gt()) {
            prevSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
          } else {
            prevSlide = currentSlide === 0 ? totalSlides - 2 : currentSlide - 3;
          }
          slider.moveToIdx(prevSlide);
          setActiveDot(prevSlide);
        }
      });
    })();
    var te, ee, ne, re, ie;
    (function () {
      var oe = function oe(t) {
        //kvのぼかしアニメーション
        var e = {
          value: 8
        };
        var n = Tween24.tween(e, 0.7, Ease24._4_QuartInOut, {
          value: 0
        });
        n.onUpdate(function () {
          r(t, {
            filter: "blur(".concat(e.value, "px)")
          });
        });
        n.onComplete(function () {
          r(t, {
            filter: "none"
          });
        });
        return n;
      };
      var Kv = function Kv() {
        var _Tween2;
        // const t = document.querySelector("[data-js-id = 'kv']");
        var t = lt("kv");
        var te = document.querySelector(".img1");
        var ee = document.querySelector(".img2");
        var _document$querySelect = document.querySelectorAll(".texts span"),
          _document$querySelect2 = _slicedToArray(_document$querySelect, 3),
          ne = _document$querySelect2[0],
          re = _document$querySelect2[1],
          ie = _document$querySelect2[2];
        var elements = [te, ee, ne, re, ie];
        elements.forEach(function (element) {
          element.style.opacity = 0;
        });

        // t.style.visibility = "visible";
        // t.style.overflow = "hidden";
        r(t, {
          visibility: "visible",
          overflow: "hidden"
        });
        te.style.transform = "matrix(1.02, 0, 0, 1.02, 0, 0)";
        ee.style.transform = "matrix(1.02, 0, 0, 1.02, 0, 0)";
        ne.style.filter = "blur(8px)";
        re.style.filter = "blur(8px)";
        ie.style.filter = "blur(8px)";
        var kvElements = [Tween24.tween([te], 1.8, Ease24._4_ExpoInOut).opacity(1).scale(1), Tween24.tween([ee], 1.8, Ease24._4_ExpoInOut).opacity(1).scale(1).delay(0.4)];
        var texts_Ne = Tween24.parallel(Tween24.tween([ne], 0.5, Ease24._4_QuartInOut).opacity(1),
        // Tween24.wait(1),
        oe(ne));
        var texts_Re = Tween24.parallel(Tween24.tween([re], 0.5, Ease24._4_QuartInOut).opacity(1),
        // Tween24.wait(1),
        oe(re));
        var texts_Ie = Tween24.parallel(Tween24.tween([ie], 0.5, Ease24._4_QuartInOut).opacity(1),
        // Tween24.wait(1),
        oe(ie));
        var textsSerial = Tween24.serial(texts_Ne, texts_Re, texts_Ie).delay(1.2);
        var animateParallel = Tween24.parallel((_Tween2 = Tween24).parallel.apply(_Tween2, kvElements), textsSerial).delay(1.6);
        animateParallel.play();
      };
      Kv();
    })(), function () {
      var t = S("section.diary"),
        e = P(".year", t),
        n = P("nav .tab", t),
        i = P("[data-group]", t),
        o = "active",
        a = function a(t) {
          //ここの引数tは年の要素を表す
          T(e, o),
          //T関数：classlistのactiveを削除 ◆ここでは年の要素からactiveクラスを削除
          m(t, o),
          //m関数：classlistのactiveを付与 ◆ここでは引数で指定された年の要素にactiveクラスを付与
          n.forEach(function (e) {
            //タブの data-year 属性が引数の年と一致する場合、タブ要素の表示を flex に設定し、一致しない場合は none に設定する
            var n = e.dataset.year === t.dataset.year;
            r(e, {
              display: n ? "flex" : "none"
            });
          });
        },
        s = function s(t) {
          //ここの引数tはタブの要素を指す
          T(n, o),
          //タブ要素から既存の active クラスを削除
          m(t, o); //引数で指定されたタブの要素に active クラスを付与
        },
        l = function l(e) {
          return st(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var n;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return J(200);
                case 2:
                  //J(200) の待機後にグループ要素から既存の active クラスを削除します。
                  T(i, o);
                  _context2.next = 5;
                  return J(500);
                case 5:
                  //J(500) の待機後に、data-group 属性が引数で指定された値と一致する要素を取得し、それに active クラスを付与します。
                  n = S("[data-group = '".concat(e, "']"), t);
                  m(n, o);
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
        };
      n.forEach(function (t) {
        t.addEventListener("click", function () {
          b(t, o) || (s(t), l(t.dataset.tab));
        });
      }), e.forEach(function (t) {
        t.addEventListener("click", function () {
          if (b(t, o)) return;
          a(t);
          var e = n.find(function (e) {
            return e.dataset.tab === t.dataset.tab;
          });
          s(e), l(t.dataset.tab);
        });
      }), a(e[0]), s(n[3]);
      // l(i[0].dataset.group);

      try {
        var _i$;
        var ig = (_i$ = i[0]) === null || _i$ === void 0 ? void 0 : _i$.dataset.group;
        l(ig);
      } catch (e) {
        console.log(e.message);
      }
    }();

    //sp用のハンバーガーメニュー開閉
    var ae;
    ae = function ae() {
      var _ref3 = function () {
          var t = !1,
            e = !1;
          var n = lt("spNavBtn"),
            i = lt("spNav"),
            o = S(".bg1", i),
            a = S(".bg2", i),
            s = _toConsumableArray(P("li", i));
          n.addEventListener(it, function () {
            e || (t ? u() : l());
          });
          var l = function l() {
              Tween24.serial(Tween24.func(function () {
                t = !0, e = !0, _(), m(n, "close"), r(i, {
                  display: "block",
                  opacity: 1
                }), r([o, a], {
                  opacity: 0
                }), r(s, {
                  opacity: 0
                });
              }), Tween24.prop(s, {
                x: .02 * -window.innerWidth
              }), Tween24.prop([o, a], {
                x: .05 * -window.innerWidth
              }), Tween24.parallel(Tween24.tween(o, .6, Ease24._4_QuartOut).x(0).opacity(.95), Tween24.tween(a, .6, Ease24._4_QuartOut).x(0).opacity(1).delay(.3)), Tween24.lag(.07, Tween24.tween(s, .6, Ease24._4_QuartOut).x(0).opacity(1)).delay(.2)).onComplete(function () {
                e = !1;
              }).play();
            },
            u = function u() {
              t && Tween24.serial(Tween24.func(function () {
                e = !0, t = !1, T(n, "close");
              }), Tween24.tween(i, .4, Ease24._4_QuartOut).opacity(0).x(.05 * window.innerWidth), Tween24.prop(i, {
                x: 0
              })).onComplete(function () {
                r(i, {
                  display: "none"
                }), c(), e = !1;
              }).play();
            },
            c = function c() {
              Et(i);
            },
            _ = function _() {
              wt(i);
            };
          return {
            closeNav: u,
            releaseScroll: c
          };
        }(),
        t = _ref3.releaseScroll,
        e = _ref3.closeNav;
      (function (t, e) {
        var n = P("*[data-scroll-target]");
        var r = !1;
        n.forEach(function (t) {
          return t.addEventListener(it, function () {
            i(t.dataset.scrollTarget);
          });
        });
        var i = function i(n) {
          if (r) return;
          r = !0, e(), t();
          var i = lt("globalHeader").getBoundingClientRect().height,
            o = S("*[data-scroll-id=".concat(n, "]"));
          console.log(i);
          Jt(o, {
            verticalOffset: -1 * i
          }).then(function () {
            r = !1;
          });
        };
      })(e, t);
    }, window.addEventListener("DOMContentLoaded", ae);
  }(); //全体の関数を実行,

  // (t=>{
  //   window.addEventListener("load", t)
  // })
})();