(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === 'childList')
        for (const h of d.addedNodes)
          h.tagName === 'LINK' && h.rel === 'modulepreload' && u(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === 'use-credentials'
        ? (d.credentials = 'include')
        : c.crossOrigin === 'anonymous'
          ? (d.credentials = 'omit')
          : (d.credentials = 'same-origin'),
      d
    );
  }
  function u(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = o(c);
    fetch(c.href, d);
  }
})();
function Eo(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default')
    ? s.default
    : s;
}
var wl = { exports: {} },
  Vr = {},
  xl = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf;
function rm() {
  if (yf) return J;
  yf = 1;
  var s = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    o = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    d = Symbol.for('react.provider'),
    h = Symbol.for('react.context'),
    v = Symbol.for('react.forward_ref'),
    S = Symbol.for('react.suspense'),
    _ = Symbol.for('react.memo'),
    N = Symbol.for('react.lazy'),
    P = Symbol.iterator;
  function j(w) {
    return w === null || typeof w != 'object'
      ? null
      : ((w = (P && w[P]) || w['@@iterator']),
        typeof w == 'function' ? w : null);
  }
  var Q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Y = Object.assign,
    K = {};
  function $(w, R, G) {
    (this.props = w),
      (this.context = R),
      (this.refs = K),
      (this.updater = G || Q);
  }
  ($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (w, R) {
      if (typeof w != 'object' && typeof w != 'function' && w != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, w, R, 'setState');
    }),
    ($.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, 'forceUpdate');
    });
  function me() {}
  me.prototype = $.prototype;
  function Se(w, R, G) {
    (this.props = w),
      (this.context = R),
      (this.refs = K),
      (this.updater = G || Q);
  }
  var ne = (Se.prototype = new me());
  (ne.constructor = Se), Y(ne, $.prototype), (ne.isPureReactComponent = !0);
  var ee = Array.isArray,
    Ee = Object.prototype.hasOwnProperty,
    X = { current: null },
    ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Le(w, R, G) {
    var Z,
      ie = {},
      oe = null,
      fe = null;
    if (R != null)
      for (Z in (R.ref !== void 0 && (fe = R.ref),
      R.key !== void 0 && (oe = '' + R.key),
      R))
        Ee.call(R, Z) && !ce.hasOwnProperty(Z) && (ie[Z] = R[Z]);
    var ue = arguments.length - 2;
    if (ue === 1) ie.children = G;
    else if (1 < ue) {
      for (var ye = Array(ue), Ze = 0; Ze < ue; Ze++)
        ye[Ze] = arguments[Ze + 2];
      ie.children = ye;
    }
    if (w && w.defaultProps)
      for (Z in ((ue = w.defaultProps), ue))
        ie[Z] === void 0 && (ie[Z] = ue[Z]);
    return {
      $$typeof: s,
      type: w,
      key: oe,
      ref: fe,
      props: ie,
      _owner: X.current,
    };
  }
  function Ut(w, R) {
    return {
      $$typeof: s,
      type: w.type,
      key: R,
      ref: w.ref,
      props: w.props,
      _owner: w._owner,
    };
  }
  function Ot(w) {
    return typeof w == 'object' && w !== null && w.$$typeof === s;
  }
  function dn(w) {
    var R = { '=': '=0', ':': '=2' };
    return (
      '$' +
      w.replace(/[=:]/g, function (G) {
        return R[G];
      })
    );
  }
  var xt = /\/+/g;
  function Je(w, R) {
    return typeof w == 'object' && w !== null && w.key != null
      ? dn('' + w.key)
      : R.toString(36);
  }
  function ft(w, R, G, Z, ie) {
    var oe = typeof w;
    (oe === 'undefined' || oe === 'boolean') && (w = null);
    var fe = !1;
    if (w === null) fe = !0;
    else
      switch (oe) {
        case 'string':
        case 'number':
          fe = !0;
          break;
        case 'object':
          switch (w.$$typeof) {
            case s:
            case i:
              fe = !0;
          }
      }
    if (fe)
      return (
        (fe = w),
        (ie = ie(fe)),
        (w = Z === '' ? '.' + Je(fe, 0) : Z),
        ee(ie)
          ? ((G = ''),
            w != null && (G = w.replace(xt, '$&/') + '/'),
            ft(ie, R, G, '', function (Ze) {
              return Ze;
            }))
          : ie != null &&
            (Ot(ie) &&
              (ie = Ut(
                ie,
                G +
                  (!ie.key || (fe && fe.key === ie.key)
                    ? ''
                    : ('' + ie.key).replace(xt, '$&/') + '/') +
                  w
              )),
            R.push(ie)),
        1
      );
    if (((fe = 0), (Z = Z === '' ? '.' : Z + ':'), ee(w)))
      for (var ue = 0; ue < w.length; ue++) {
        oe = w[ue];
        var ye = Z + Je(oe, ue);
        fe += ft(oe, R, G, ye, ie);
      }
    else if (((ye = j(w)), typeof ye == 'function'))
      for (w = ye.call(w), ue = 0; !(oe = w.next()).done; )
        (oe = oe.value), (ye = Z + Je(oe, ue++)), (fe += ft(oe, R, G, ye, ie));
    else if (oe === 'object')
      throw (
        ((R = String(w)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (R === '[object Object]'
              ? 'object with keys {' + Object.keys(w).join(', ') + '}'
              : R) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return fe;
  }
  function St(w, R, G) {
    if (w == null) return w;
    var Z = [],
      ie = 0;
    return (
      ft(w, Z, '', '', function (oe) {
        return R.call(G, oe, ie++);
      }),
      Z
    );
  }
  function Ke(w) {
    if (w._status === -1) {
      var R = w._result;
      (R = R()),
        R.then(
          function (G) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 1), (w._result = G));
          },
          function (G) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 2), (w._result = G));
          }
        ),
        w._status === -1 && ((w._status = 0), (w._result = R));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ke = { current: null },
    z = { transition: null },
    W = {
      ReactCurrentDispatcher: ke,
      ReactCurrentBatchConfig: z,
      ReactCurrentOwner: X,
    };
  function F() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (J.Children = {
      map: St,
      forEach: function (w, R, G) {
        St(
          w,
          function () {
            R.apply(this, arguments);
          },
          G
        );
      },
      count: function (w) {
        var R = 0;
        return (
          St(w, function () {
            R++;
          }),
          R
        );
      },
      toArray: function (w) {
        return (
          St(w, function (R) {
            return R;
          }) || []
        );
      },
      only: function (w) {
        if (!Ot(w))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return w;
      },
    }),
    (J.Component = $),
    (J.Fragment = o),
    (J.Profiler = c),
    (J.PureComponent = Se),
    (J.StrictMode = u),
    (J.Suspense = S),
    (J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W),
    (J.act = F),
    (J.cloneElement = function (w, R, G) {
      if (w == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            w +
            '.'
        );
      var Z = Y({}, w.props),
        ie = w.key,
        oe = w.ref,
        fe = w._owner;
      if (R != null) {
        if (
          (R.ref !== void 0 && ((oe = R.ref), (fe = X.current)),
          R.key !== void 0 && (ie = '' + R.key),
          w.type && w.type.defaultProps)
        )
          var ue = w.type.defaultProps;
        for (ye in R)
          Ee.call(R, ye) &&
            !ce.hasOwnProperty(ye) &&
            (Z[ye] = R[ye] === void 0 && ue !== void 0 ? ue[ye] : R[ye]);
      }
      var ye = arguments.length - 2;
      if (ye === 1) Z.children = G;
      else if (1 < ye) {
        ue = Array(ye);
        for (var Ze = 0; Ze < ye; Ze++) ue[Ze] = arguments[Ze + 2];
        Z.children = ue;
      }
      return {
        $$typeof: s,
        type: w.type,
        key: ie,
        ref: oe,
        props: Z,
        _owner: fe,
      };
    }),
    (J.createContext = function (w) {
      return (
        (w = {
          $$typeof: h,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (w.Provider = { $$typeof: d, _context: w }),
        (w.Consumer = w)
      );
    }),
    (J.createElement = Le),
    (J.createFactory = function (w) {
      var R = Le.bind(null, w);
      return (R.type = w), R;
    }),
    (J.createRef = function () {
      return { current: null };
    }),
    (J.forwardRef = function (w) {
      return { $$typeof: v, render: w };
    }),
    (J.isValidElement = Ot),
    (J.lazy = function (w) {
      return { $$typeof: N, _payload: { _status: -1, _result: w }, _init: Ke };
    }),
    (J.memo = function (w, R) {
      return { $$typeof: _, type: w, compare: R === void 0 ? null : R };
    }),
    (J.startTransition = function (w) {
      var R = z.transition;
      z.transition = {};
      try {
        w();
      } finally {
        z.transition = R;
      }
    }),
    (J.unstable_act = F),
    (J.useCallback = function (w, R) {
      return ke.current.useCallback(w, R);
    }),
    (J.useContext = function (w) {
      return ke.current.useContext(w);
    }),
    (J.useDebugValue = function () {}),
    (J.useDeferredValue = function (w) {
      return ke.current.useDeferredValue(w);
    }),
    (J.useEffect = function (w, R) {
      return ke.current.useEffect(w, R);
    }),
    (J.useId = function () {
      return ke.current.useId();
    }),
    (J.useImperativeHandle = function (w, R, G) {
      return ke.current.useImperativeHandle(w, R, G);
    }),
    (J.useInsertionEffect = function (w, R) {
      return ke.current.useInsertionEffect(w, R);
    }),
    (J.useLayoutEffect = function (w, R) {
      return ke.current.useLayoutEffect(w, R);
    }),
    (J.useMemo = function (w, R) {
      return ke.current.useMemo(w, R);
    }),
    (J.useReducer = function (w, R, G) {
      return ke.current.useReducer(w, R, G);
    }),
    (J.useRef = function (w) {
      return ke.current.useRef(w);
    }),
    (J.useState = function (w) {
      return ke.current.useState(w);
    }),
    (J.useSyncExternalStore = function (w, R, G) {
      return ke.current.useSyncExternalStore(w, R, G);
    }),
    (J.useTransition = function () {
      return ke.current.useTransition();
    }),
    (J.version = '18.3.1'),
    J
  );
}
var vf;
function Kl() {
  return vf || ((vf = 1), (xl.exports = rm())), xl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gf;
function im() {
  if (gf) return Vr;
  gf = 1;
  var s = Kl(),
    i = Symbol.for('react.element'),
    o = Symbol.for('react.fragment'),
    u = Object.prototype.hasOwnProperty,
    c = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(v, S, _) {
    var N,
      P = {},
      j = null,
      Q = null;
    _ !== void 0 && (j = '' + _),
      S.key !== void 0 && (j = '' + S.key),
      S.ref !== void 0 && (Q = S.ref);
    for (N in S) u.call(S, N) && !d.hasOwnProperty(N) && (P[N] = S[N]);
    if (v && v.defaultProps)
      for (N in ((S = v.defaultProps), S)) P[N] === void 0 && (P[N] = S[N]);
    return {
      $$typeof: i,
      type: v,
      key: j,
      ref: Q,
      props: P,
      _owner: c.current,
    };
  }
  return (Vr.Fragment = o), (Vr.jsx = h), (Vr.jsxs = h), Vr;
}
var wf;
function om() {
  return wf || ((wf = 1), (wl.exports = im())), wl.exports;
}
var g = om(),
  C = Kl();
const xe = Eo(C);
var oo = {},
  Sl = { exports: {} },
  Ge = {},
  El = { exports: {} },
  kl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xf;
function sm() {
  return (
    xf ||
      ((xf = 1),
      (function (s) {
        function i(z, W) {
          var F = z.length;
          z.push(W);
          e: for (; 0 < F; ) {
            var w = (F - 1) >>> 1,
              R = z[w];
            if (0 < c(R, W)) (z[w] = W), (z[F] = R), (F = w);
            else break e;
          }
        }
        function o(z) {
          return z.length === 0 ? null : z[0];
        }
        function u(z) {
          if (z.length === 0) return null;
          var W = z[0],
            F = z.pop();
          if (F !== W) {
            z[0] = F;
            e: for (var w = 0, R = z.length, G = R >>> 1; w < G; ) {
              var Z = 2 * (w + 1) - 1,
                ie = z[Z],
                oe = Z + 1,
                fe = z[oe];
              if (0 > c(ie, F))
                oe < R && 0 > c(fe, ie)
                  ? ((z[w] = fe), (z[oe] = F), (w = oe))
                  : ((z[w] = ie), (z[Z] = F), (w = Z));
              else if (oe < R && 0 > c(fe, F))
                (z[w] = fe), (z[oe] = F), (w = oe);
              else break e;
            }
          }
          return W;
        }
        function c(z, W) {
          var F = z.sortIndex - W.sortIndex;
          return F !== 0 ? F : z.id - W.id;
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var d = performance;
          s.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            v = h.now();
          s.unstable_now = function () {
            return h.now() - v;
          };
        }
        var S = [],
          _ = [],
          N = 1,
          P = null,
          j = 3,
          Q = !1,
          Y = !1,
          K = !1,
          $ = typeof setTimeout == 'function' ? setTimeout : null,
          me = typeof clearTimeout == 'function' ? clearTimeout : null,
          Se = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ne(z) {
          for (var W = o(_); W !== null; ) {
            if (W.callback === null) u(_);
            else if (W.startTime <= z)
              u(_), (W.sortIndex = W.expirationTime), i(S, W);
            else break;
            W = o(_);
          }
        }
        function ee(z) {
          if (((K = !1), ne(z), !Y))
            if (o(S) !== null) (Y = !0), Ke(Ee);
            else {
              var W = o(_);
              W !== null && ke(ee, W.startTime - z);
            }
        }
        function Ee(z, W) {
          (Y = !1), K && ((K = !1), me(Le), (Le = -1)), (Q = !0);
          var F = j;
          try {
            for (
              ne(W), P = o(S);
              P !== null && (!(P.expirationTime > W) || (z && !dn()));

            ) {
              var w = P.callback;
              if (typeof w == 'function') {
                (P.callback = null), (j = P.priorityLevel);
                var R = w(P.expirationTime <= W);
                (W = s.unstable_now()),
                  typeof R == 'function'
                    ? (P.callback = R)
                    : P === o(S) && u(S),
                  ne(W);
              } else u(S);
              P = o(S);
            }
            if (P !== null) var G = !0;
            else {
              var Z = o(_);
              Z !== null && ke(ee, Z.startTime - W), (G = !1);
            }
            return G;
          } finally {
            (P = null), (j = F), (Q = !1);
          }
        }
        var X = !1,
          ce = null,
          Le = -1,
          Ut = 5,
          Ot = -1;
        function dn() {
          return !(s.unstable_now() - Ot < Ut);
        }
        function xt() {
          if (ce !== null) {
            var z = s.unstable_now();
            Ot = z;
            var W = !0;
            try {
              W = ce(!0, z);
            } finally {
              W ? Je() : ((X = !1), (ce = null));
            }
          } else X = !1;
        }
        var Je;
        if (typeof Se == 'function')
          Je = function () {
            Se(xt);
          };
        else if (typeof MessageChannel < 'u') {
          var ft = new MessageChannel(),
            St = ft.port2;
          (ft.port1.onmessage = xt),
            (Je = function () {
              St.postMessage(null);
            });
        } else
          Je = function () {
            $(xt, 0);
          };
        function Ke(z) {
          (ce = z), X || ((X = !0), Je());
        }
        function ke(z, W) {
          Le = $(function () {
            z(s.unstable_now());
          }, W);
        }
        (s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (s.unstable_continueExecution = function () {
            Y || Q || ((Y = !0), Ke(Ee));
          }),
          (s.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Ut = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (s.unstable_getFirstCallbackNode = function () {
            return o(S);
          }),
          (s.unstable_next = function (z) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var W = 3;
                break;
              default:
                W = j;
            }
            var F = j;
            j = W;
            try {
              return z();
            } finally {
              j = F;
            }
          }),
          (s.unstable_pauseExecution = function () {}),
          (s.unstable_requestPaint = function () {}),
          (s.unstable_runWithPriority = function (z, W) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var F = j;
            j = z;
            try {
              return W();
            } finally {
              j = F;
            }
          }),
          (s.unstable_scheduleCallback = function (z, W, F) {
            var w = s.unstable_now();
            switch (
              (typeof F == 'object' && F !== null
                ? ((F = F.delay),
                  (F = typeof F == 'number' && 0 < F ? w + F : w))
                : (F = w),
              z)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = F + R),
              (z = {
                id: N++,
                callback: W,
                priorityLevel: z,
                startTime: F,
                expirationTime: R,
                sortIndex: -1,
              }),
              F > w
                ? ((z.sortIndex = F),
                  i(_, z),
                  o(S) === null &&
                    z === o(_) &&
                    (K ? (me(Le), (Le = -1)) : (K = !0), ke(ee, F - w)))
                : ((z.sortIndex = R), i(S, z), Y || Q || ((Y = !0), Ke(Ee))),
              z
            );
          }),
          (s.unstable_shouldYield = dn),
          (s.unstable_wrapCallback = function (z) {
            var W = j;
            return function () {
              var F = j;
              j = W;
              try {
                return z.apply(this, arguments);
              } finally {
                j = F;
              }
            };
          });
      })(kl)),
    kl
  );
}
var Sf;
function lm() {
  return Sf || ((Sf = 1), (El.exports = sm())), El.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ef;
function um() {
  if (Ef) return Ge;
  Ef = 1;
  var s = Kl(),
    i = lm();
  function o(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var u = new Set(),
    c = {};
  function d(e, t) {
    h(e, t), h(e + 'Capture', t);
  }
  function h(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var v = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    S = Object.prototype.hasOwnProperty,
    _ =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    N = {},
    P = {};
  function j(e) {
    return S.call(P, e)
      ? !0
      : S.call(N, e)
        ? !1
        : _.test(e)
          ? (P[e] = !0)
          : ((N[e] = !0), !1);
  }
  function Q(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function Y(e, t, n, r) {
    if (t === null || typeof t > 'u' || Q(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function K(e, t, n, r, l, a, f) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = a),
      (this.removeEmptyString = f);
  }
  var $ = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      $[e] = new K(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      $[t] = new K(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        $[e] = new K(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      $[e] = new K(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        $[e] = new K(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      $[e] = new K(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      $[e] = new K(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      $[e] = new K(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      $[e] = new K(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var me = /[\-:]([a-z])/g;
  function Se(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(me, Se);
      $[t] = new K(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(me, Se);
        $[t] = new K(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(me, Se);
      $[t] = new K(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      $[e] = new K(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    ($.xlinkHref = new K(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      $[e] = new K(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function ne(e, t, n, r) {
    var l = $.hasOwnProperty(t) ? $[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (Y(t, n, l, r) && (n = null),
      r || l === null
        ? j(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ee = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ee = Symbol.for('react.element'),
    X = Symbol.for('react.portal'),
    ce = Symbol.for('react.fragment'),
    Le = Symbol.for('react.strict_mode'),
    Ut = Symbol.for('react.profiler'),
    Ot = Symbol.for('react.provider'),
    dn = Symbol.for('react.context'),
    xt = Symbol.for('react.forward_ref'),
    Je = Symbol.for('react.suspense'),
    ft = Symbol.for('react.suspense_list'),
    St = Symbol.for('react.memo'),
    Ke = Symbol.for('react.lazy'),
    ke = Symbol.for('react.offscreen'),
    z = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (z && e[z]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var F = Object.assign,
    w;
  function R(e) {
    if (w === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        w = (t && t[1]) || '';
      }
    return (
      `
` +
      w +
      e
    );
  }
  var G = !1;
  function Z(e, t) {
    if (!e || G) return '';
    G = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (k) {
            var r = k;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (k) {
            r = k;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (k) {
          r = k;
        }
        e();
      }
    } catch (k) {
      if (k && r && typeof k.stack == 'string') {
        for (
          var l = k.stack.split(`
`),
            a = r.stack.split(`
`),
            f = l.length - 1,
            p = a.length - 1;
          1 <= f && 0 <= p && l[f] !== a[p];

        )
          p--;
        for (; 1 <= f && 0 <= p; f--, p--)
          if (l[f] !== a[p]) {
            if (f !== 1 || p !== 1)
              do
                if ((f--, p--, 0 > p || l[f] !== a[p])) {
                  var m =
                    `
` + l[f].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      m.includes('<anonymous>') &&
                      (m = m.replace('<anonymous>', e.displayName)),
                    m
                  );
                }
              while (1 <= f && 0 <= p);
            break;
          }
      }
    } finally {
      (G = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? R(e) : '';
  }
  function ie(e) {
    switch (e.tag) {
      case 5:
        return R(e.type);
      case 16:
        return R('Lazy');
      case 13:
        return R('Suspense');
      case 19:
        return R('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = Z(e.type, !1)), e;
      case 11:
        return (e = Z(e.type.render, !1)), e;
      case 1:
        return (e = Z(e.type, !0)), e;
      default:
        return '';
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case ce:
        return 'Fragment';
      case X:
        return 'Portal';
      case Ut:
        return 'Profiler';
      case Le:
        return 'StrictMode';
      case Je:
        return 'Suspense';
      case ft:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case dn:
          return (e.displayName || 'Context') + '.Consumer';
        case Ot:
          return (e._context.displayName || 'Context') + '.Provider';
        case xt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case St:
          return (
            (t = e.displayName || null), t !== null ? t : oe(e.type) || 'Memo'
          );
        case Ke:
          (t = e._payload), (e = e._init);
          try {
            return oe(e(t));
          } catch {}
      }
    return null;
  }
  function fe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return oe(t);
      case 8:
        return t === Le ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function ue(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function ye(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function Ze(e) {
    var t = ye(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var l = n.get,
        a = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (f) {
            (r = '' + f), a.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (f) {
            r = '' + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Xr(e) {
    e._valueTracker || (e._valueTracker = Ze(e));
  }
  function Su(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = ye(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Gr(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function No(e, t) {
    var n = t.checked;
    return F({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Eu(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ue(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      });
  }
  function ku(e, t) {
    (t = t.checked), t != null && ne(e, 'checked', t, !1);
  }
  function To(e, t) {
    ku(e, t);
    var n = ue(t.value),
      r = t.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? Ro(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Ro(e, t.type, ue(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Cu(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (
        !(
          (r !== 'submit' && r !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n);
  }
  function Ro(e, t, n) {
    (t !== 'number' || Gr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  var rr = Array.isArray;
  function Rn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + ue(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Oo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return F({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function _u(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(o(92));
        if (rr(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: ue(n) };
  }
  function Nu(e, t) {
    var n = ue(t.value),
      r = ue(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
  }
  function Tu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t);
  }
  function Ru(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Po(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? Ru(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Jr,
    Ou = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          Jr = Jr || document.createElement('div'),
            Jr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Jr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function ir(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var or = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    up = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(or).forEach(function (e) {
    up.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (or[t] = or[e]);
    });
  });
  function Pu(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (or.hasOwnProperty(e) && or[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function Lu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = Pu(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var ap = F(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Lo(e, t) {
    if (t) {
      if (ap[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(o(62));
    }
  }
  function jo(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Io = null;
  function zo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ao = null,
    On = null,
    Pn = null;
  function ju(e) {
    if ((e = Tr(e))) {
      if (typeof Ao != 'function') throw Error(o(280));
      var t = e.stateNode;
      t && ((t = xi(t)), Ao(e.stateNode, e.type, t));
    }
  }
  function Iu(e) {
    On ? (Pn ? Pn.push(e) : (Pn = [e])) : (On = e);
  }
  function zu() {
    if (On) {
      var e = On,
        t = Pn;
      if (((Pn = On = null), ju(e), t)) for (e = 0; e < t.length; e++) ju(t[e]);
    }
  }
  function Au(e, t) {
    return e(t);
  }
  function Du() {}
  var Do = !1;
  function Fu(e, t, n) {
    if (Do) return e(t, n);
    Do = !0;
    try {
      return Au(e, t, n);
    } finally {
      (Do = !1), (On !== null || Pn !== null) && (Du(), zu());
    }
  }
  function sr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = xi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(o(231, t, typeof n));
    return n;
  }
  var Fo = !1;
  if (v)
    try {
      var lr = {};
      Object.defineProperty(lr, 'passive', {
        get: function () {
          Fo = !0;
        },
      }),
        window.addEventListener('test', lr, lr),
        window.removeEventListener('test', lr, lr);
    } catch {
      Fo = !1;
    }
  function cp(e, t, n, r, l, a, f, p, m) {
    var k = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, k);
    } catch (O) {
      this.onError(O);
    }
  }
  var ur = !1,
    Zr = null,
    br = !1,
    Bo = null,
    fp = {
      onError: function (e) {
        (ur = !0), (Zr = e);
      },
    };
  function dp(e, t, n, r, l, a, f, p, m) {
    (ur = !1), (Zr = null), cp.apply(fp, arguments);
  }
  function pp(e, t, n, r, l, a, f, p, m) {
    if ((dp.apply(this, arguments), ur)) {
      if (ur) {
        var k = Zr;
        (ur = !1), (Zr = null);
      } else throw Error(o(198));
      br || ((br = !0), (Bo = k));
    }
  }
  function pn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Bu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Mu(e) {
    if (pn(e) !== e) throw Error(o(188));
  }
  function hp(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = pn(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var a = l.alternate;
      if (a === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === a.child) {
        for (a = l.child; a; ) {
          if (a === n) return Mu(l), e;
          if (a === r) return Mu(l), t;
          a = a.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) (n = l), (r = a);
      else {
        for (var f = !1, p = l.child; p; ) {
          if (p === n) {
            (f = !0), (n = l), (r = a);
            break;
          }
          if (p === r) {
            (f = !0), (r = l), (n = a);
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = a.child; p; ) {
            if (p === n) {
              (f = !0), (n = a), (r = l);
              break;
            }
            if (p === r) {
              (f = !0), (r = a), (n = l);
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function $u(e) {
    return (e = hp(e)), e !== null ? Uu(e) : null;
  }
  function Uu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Uu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Vu = i.unstable_scheduleCallback,
    Hu = i.unstable_cancelCallback,
    mp = i.unstable_shouldYield,
    yp = i.unstable_requestPaint,
    _e = i.unstable_now,
    vp = i.unstable_getCurrentPriorityLevel,
    Mo = i.unstable_ImmediatePriority,
    Ku = i.unstable_UserBlockingPriority,
    ei = i.unstable_NormalPriority,
    gp = i.unstable_LowPriority,
    Wu = i.unstable_IdlePriority,
    ti = null,
    Et = null;
  function wp(e) {
    if (Et && typeof Et.onCommitFiberRoot == 'function')
      try {
        Et.onCommitFiberRoot(ti, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var dt = Math.clz32 ? Math.clz32 : Ep,
    xp = Math.log,
    Sp = Math.LN2;
  function Ep(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((xp(e) / Sp) | 0)) | 0;
  }
  var ni = 64,
    ri = 4194304;
  function ar(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ii(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      a = e.pingedLanes,
      f = n & 268435455;
    if (f !== 0) {
      var p = f & ~l;
      p !== 0 ? (r = ar(p)) : ((a &= f), a !== 0 && (r = ar(a)));
    } else (f = n & ~l), f !== 0 ? (r = ar(f)) : a !== 0 && (r = ar(a));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (a = t & -t), l >= a || (l === 16 && (a & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - dt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function kp(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Cp(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        a = e.pendingLanes;
      0 < a;

    ) {
      var f = 31 - dt(a),
        p = 1 << f,
        m = l[f];
      m === -1
        ? (!(p & n) || p & r) && (l[f] = kp(p, t))
        : m <= t && (e.expiredLanes |= p),
        (a &= ~p);
    }
  }
  function $o(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Qu() {
    var e = ni;
    return (ni <<= 1), !(ni & 4194240) && (ni = 64), e;
  }
  function Uo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function cr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - dt(t)),
      (e[t] = n);
  }
  function _p(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - dt(n),
        a = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~a);
    }
  }
  function Vo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - dt(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ae = 0;
  function qu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Yu,
    Ho,
    Xu,
    Gu,
    Ju,
    Ko = !1,
    oi = [],
    Vt = null,
    Ht = null,
    Kt = null,
    fr = new Map(),
    dr = new Map(),
    Wt = [],
    Np =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function Zu(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Vt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ht = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Kt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        fr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        dr.delete(t.pointerId);
    }
  }
  function pr(e, t, n, r, l, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: a,
          targetContainers: [l],
        }),
        t !== null && ((t = Tr(t)), t !== null && Ho(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Tp(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return (Vt = pr(Vt, e, t, n, r, l)), !0;
      case 'dragenter':
        return (Ht = pr(Ht, e, t, n, r, l)), !0;
      case 'mouseover':
        return (Kt = pr(Kt, e, t, n, r, l)), !0;
      case 'pointerover':
        var a = l.pointerId;
        return fr.set(a, pr(fr.get(a) || null, e, t, n, r, l)), !0;
      case 'gotpointercapture':
        return (
          (a = l.pointerId), dr.set(a, pr(dr.get(a) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function bu(e) {
    var t = hn(e.target);
    if (t !== null) {
      var n = pn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Bu(n)), t !== null)) {
            (e.blockedOn = t),
              Ju(e.priority, function () {
                Xu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function si(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Io = r), n.target.dispatchEvent(r), (Io = null);
      } else return (t = Tr(n)), t !== null && Ho(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function ea(e, t, n) {
    si(e) && n.delete(t);
  }
  function Rp() {
    (Ko = !1),
      Vt !== null && si(Vt) && (Vt = null),
      Ht !== null && si(Ht) && (Ht = null),
      Kt !== null && si(Kt) && (Kt = null),
      fr.forEach(ea),
      dr.forEach(ea);
  }
  function hr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ko ||
        ((Ko = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Rp)));
  }
  function mr(e) {
    function t(l) {
      return hr(l, e);
    }
    if (0 < oi.length) {
      hr(oi[0], e);
      for (var n = 1; n < oi.length; n++) {
        var r = oi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Vt !== null && hr(Vt, e),
        Ht !== null && hr(Ht, e),
        Kt !== null && hr(Kt, e),
        fr.forEach(t),
        dr.forEach(t),
        n = 0;
      n < Wt.length;
      n++
    )
      (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
      bu(n), n.blockedOn === null && Wt.shift();
  }
  var Ln = ee.ReactCurrentBatchConfig,
    li = !0;
  function Op(e, t, n, r) {
    var l = ae,
      a = Ln.transition;
    Ln.transition = null;
    try {
      (ae = 1), Wo(e, t, n, r);
    } finally {
      (ae = l), (Ln.transition = a);
    }
  }
  function Pp(e, t, n, r) {
    var l = ae,
      a = Ln.transition;
    Ln.transition = null;
    try {
      (ae = 4), Wo(e, t, n, r);
    } finally {
      (ae = l), (Ln.transition = a);
    }
  }
  function Wo(e, t, n, r) {
    if (li) {
      var l = Qo(e, t, n, r);
      if (l === null) as(e, t, r, ui, n), Zu(e, r);
      else if (Tp(l, e, t, n, r)) r.stopPropagation();
      else if ((Zu(e, r), t & 4 && -1 < Np.indexOf(e))) {
        for (; l !== null; ) {
          var a = Tr(l);
          if (
            (a !== null && Yu(a),
            (a = Qo(e, t, n, r)),
            a === null && as(e, t, r, ui, n),
            a === l)
          )
            break;
          l = a;
        }
        l !== null && r.stopPropagation();
      } else as(e, t, r, null, n);
    }
  }
  var ui = null;
  function Qo(e, t, n, r) {
    if (((ui = null), (e = zo(r)), (e = hn(e)), e !== null))
      if (((t = pn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Bu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ui = e), null;
  }
  function ta(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (vp()) {
          case Mo:
            return 1;
          case Ku:
            return 4;
          case ei:
          case gp:
            return 16;
          case Wu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Qt = null,
    qo = null,
    ai = null;
  function na() {
    if (ai) return ai;
    var e,
      t = qo,
      n = t.length,
      r,
      l = 'value' in Qt ? Qt.value : Qt.textContent,
      a = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === l[a - r]; r++);
    return (ai = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function ci(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function fi() {
    return !0;
  }
  function ra() {
    return !1;
  }
  function be(e) {
    function t(n, r, l, a, f) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = a),
        (this.target = f),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(a) : a[p]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? fi
          : ra),
        (this.isPropagationStopped = ra),
        this
      );
    }
    return (
      F(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = fi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = fi));
        },
        persist: function () {},
        isPersistent: fi,
      }),
      t
    );
  }
  var jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Yo = be(jn),
    yr = F({}, jn, { view: 0, detail: 0 }),
    Lp = be(yr),
    Xo,
    Go,
    vr,
    di = F({}, yr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== vr &&
              (vr && e.type === 'mousemove'
                ? ((Xo = e.screenX - vr.screenX), (Go = e.screenY - vr.screenY))
                : (Go = Xo = 0),
              (vr = e)),
            Xo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Go;
      },
    }),
    ia = be(di),
    jp = F({}, di, { dataTransfer: 0 }),
    Ip = be(jp),
    zp = F({}, yr, { relatedTarget: 0 }),
    Jo = be(zp),
    Ap = F({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Dp = be(Ap),
    Fp = F({}, jn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Bp = be(Fp),
    Mp = F({}, jn, { data: 0 }),
    oa = be(Mp),
    $p = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Up = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Vp = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Hp(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Vp[e])
        ? !!t[e]
        : !1;
  }
  function Zo() {
    return Hp;
  }
  var Kp = F({}, yr, {
      key: function (e) {
        if (e.key) {
          var t = $p[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = ci(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Up[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zo,
      charCode: function (e) {
        return e.type === 'keypress' ? ci(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? ci(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Wp = be(Kp),
    Qp = F({}, di, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    sa = be(Qp),
    qp = F({}, yr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zo,
    }),
    Yp = be(qp),
    Xp = F({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gp = be(Xp),
    Jp = F({}, di, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Zp = be(Jp),
    bp = [9, 13, 27, 32],
    bo = v && 'CompositionEvent' in window,
    gr = null;
  v && 'documentMode' in document && (gr = document.documentMode);
  var eh = v && 'TextEvent' in window && !gr,
    la = v && (!bo || (gr && 8 < gr && 11 >= gr)),
    ua = ' ',
    aa = !1;
  function ca(e, t) {
    switch (e) {
      case 'keyup':
        return bp.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function fa(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var In = !1;
  function th(e, t) {
    switch (e) {
      case 'compositionend':
        return fa(t);
      case 'keypress':
        return t.which !== 32 ? null : ((aa = !0), ua);
      case 'textInput':
        return (e = t.data), e === ua && aa ? null : e;
      default:
        return null;
    }
  }
  function nh(e, t) {
    if (In)
      return e === 'compositionend' || (!bo && ca(e, t))
        ? ((e = na()), (ai = qo = Qt = null), (In = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return la && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var rh = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function da(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!rh[e.type] : t === 'textarea';
  }
  function pa(e, t, n, r) {
    Iu(r),
      (t = vi(t, 'onChange')),
      0 < t.length &&
        ((n = new Yo('onChange', 'change', null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var wr = null,
    xr = null;
  function ih(e) {
    La(e, 0);
  }
  function pi(e) {
    var t = Bn(e);
    if (Su(t)) return e;
  }
  function oh(e, t) {
    if (e === 'change') return t;
  }
  var ha = !1;
  if (v) {
    var es;
    if (v) {
      var ts = 'oninput' in document;
      if (!ts) {
        var ma = document.createElement('div');
        ma.setAttribute('oninput', 'return;'),
          (ts = typeof ma.oninput == 'function');
      }
      es = ts;
    } else es = !1;
    ha = es && (!document.documentMode || 9 < document.documentMode);
  }
  function ya() {
    wr && (wr.detachEvent('onpropertychange', va), (xr = wr = null));
  }
  function va(e) {
    if (e.propertyName === 'value' && pi(xr)) {
      var t = [];
      pa(t, xr, e, zo(e)), Fu(ih, t);
    }
  }
  function sh(e, t, n) {
    e === 'focusin'
      ? (ya(), (wr = t), (xr = n), wr.attachEvent('onpropertychange', va))
      : e === 'focusout' && ya();
  }
  function lh(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return pi(xr);
  }
  function uh(e, t) {
    if (e === 'click') return pi(t);
  }
  function ah(e, t) {
    if (e === 'input' || e === 'change') return pi(t);
  }
  function ch(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var pt = typeof Object.is == 'function' ? Object.is : ch;
  function Sr(e, t) {
    if (pt(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!S.call(t, l) || !pt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ga(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wa(e, t) {
    var n = ga(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ga(n);
    }
  }
  function xa(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? xa(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Sa() {
    for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Gr(e.document);
    }
    return t;
  }
  function ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function fh(e) {
    var t = Sa(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      xa(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && ns(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          'selectionStart' in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            a = Math.min(r.start, l);
          (r = r.end === void 0 ? a : Math.min(r.end, l)),
            !e.extend && a > r && ((l = r), (r = a), (a = l)),
            (l = wa(n, a));
          var f = wa(n, r);
          l &&
            f &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== f.node ||
              e.focusOffset !== f.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            a > r
              ? (e.addRange(t), e.extend(f.node, f.offset))
              : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var dh = v && 'documentMode' in document && 11 >= document.documentMode,
    zn = null,
    rs = null,
    Er = null,
    is = !1;
  function Ea(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    is ||
      zn == null ||
      zn !== Gr(r) ||
      ((r = zn),
      'selectionStart' in r && ns(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Er && Sr(Er, r)) ||
        ((Er = r),
        (r = vi(rs, 'onSelect')),
        0 < r.length &&
          ((t = new Yo('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = zn))));
  }
  function hi(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var An = {
      animationend: hi('Animation', 'AnimationEnd'),
      animationiteration: hi('Animation', 'AnimationIteration'),
      animationstart: hi('Animation', 'AnimationStart'),
      transitionend: hi('Transition', 'TransitionEnd'),
    },
    os = {},
    ka = {};
  v &&
    ((ka = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete An.animationend.animation,
      delete An.animationiteration.animation,
      delete An.animationstart.animation),
    'TransitionEvent' in window || delete An.transitionend.transition);
  function mi(e) {
    if (os[e]) return os[e];
    if (!An[e]) return e;
    var t = An[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ka) return (os[e] = t[n]);
    return e;
  }
  var Ca = mi('animationend'),
    _a = mi('animationiteration'),
    Na = mi('animationstart'),
    Ta = mi('transitionend'),
    Ra = new Map(),
    Oa =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function qt(e, t) {
    Ra.set(e, t), d(t, [e]);
  }
  for (var ss = 0; ss < Oa.length; ss++) {
    var ls = Oa[ss],
      ph = ls.toLowerCase(),
      hh = ls[0].toUpperCase() + ls.slice(1);
    qt(ph, 'on' + hh);
  }
  qt(Ca, 'onAnimationEnd'),
    qt(_a, 'onAnimationIteration'),
    qt(Na, 'onAnimationStart'),
    qt('dblclick', 'onDoubleClick'),
    qt('focusin', 'onFocus'),
    qt('focusout', 'onBlur'),
    qt(Ta, 'onTransitionEnd'),
    h('onMouseEnter', ['mouseout', 'mouseover']),
    h('onMouseLeave', ['mouseout', 'mouseover']),
    h('onPointerEnter', ['pointerout', 'pointerover']),
    h('onPointerLeave', ['pointerout', 'pointerover']),
    d(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    d(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    d('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    d(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    d(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    d(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var kr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    mh = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(kr)
    );
  function Pa(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), pp(r, t, void 0, e), (e.currentTarget = null);
  }
  function La(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var f = r.length - 1; 0 <= f; f--) {
            var p = r[f],
              m = p.instance,
              k = p.currentTarget;
            if (((p = p.listener), m !== a && l.isPropagationStopped()))
              break e;
            Pa(l, p, k), (a = m);
          }
        else
          for (f = 0; f < r.length; f++) {
            if (
              ((p = r[f]),
              (m = p.instance),
              (k = p.currentTarget),
              (p = p.listener),
              m !== a && l.isPropagationStopped())
            )
              break e;
            Pa(l, p, k), (a = m);
          }
      }
    }
    if (br) throw ((e = Bo), (br = !1), (Bo = null), e);
  }
  function pe(e, t) {
    var n = t[ms];
    n === void 0 && (n = t[ms] = new Set());
    var r = e + '__bubble';
    n.has(r) || (ja(t, e, 2, !1), n.add(r));
  }
  function us(e, t, n) {
    var r = 0;
    t && (r |= 4), ja(n, e, r, t);
  }
  var yi = '_reactListening' + Math.random().toString(36).slice(2);
  function Cr(e) {
    if (!e[yi]) {
      (e[yi] = !0),
        u.forEach(function (n) {
          n !== 'selectionchange' && (mh.has(n) || us(n, !1, e), us(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[yi] || ((t[yi] = !0), us('selectionchange', !1, t));
    }
  }
  function ja(e, t, n, r) {
    switch (ta(t)) {
      case 1:
        var l = Op;
        break;
      case 4:
        l = Pp;
        break;
      default:
        l = Wo;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Fo ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1);
  }
  function as(e, t, n, r, l) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var f = r.tag;
        if (f === 3 || f === 4) {
          var p = r.stateNode.containerInfo;
          if (p === l || (p.nodeType === 8 && p.parentNode === l)) break;
          if (f === 4)
            for (f = r.return; f !== null; ) {
              var m = f.tag;
              if (
                (m === 3 || m === 4) &&
                ((m = f.stateNode.containerInfo),
                m === l || (m.nodeType === 8 && m.parentNode === l))
              )
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (((f = hn(p)), f === null)) return;
            if (((m = f.tag), m === 5 || m === 6)) {
              r = a = f;
              continue e;
            }
            p = p.parentNode;
          }
        }
        r = r.return;
      }
    Fu(function () {
      var k = a,
        O = zo(n),
        L = [];
      e: {
        var T = Ra.get(e);
        if (T !== void 0) {
          var A = Yo,
            B = e;
          switch (e) {
            case 'keypress':
              if (ci(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              A = Wp;
              break;
            case 'focusin':
              (B = 'focus'), (A = Jo);
              break;
            case 'focusout':
              (B = 'blur'), (A = Jo);
              break;
            case 'beforeblur':
            case 'afterblur':
              A = Jo;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              A = ia;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              A = Ip;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              A = Yp;
              break;
            case Ca:
            case _a:
            case Na:
              A = Dp;
              break;
            case Ta:
              A = Gp;
              break;
            case 'scroll':
              A = Lp;
              break;
            case 'wheel':
              A = Zp;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              A = Bp;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              A = sa;
          }
          var M = (t & 4) !== 0,
            Ne = !M && e === 'scroll',
            x = M ? (T !== null ? T + 'Capture' : null) : T;
          M = [];
          for (var y = k, E; y !== null; ) {
            E = y;
            var I = E.stateNode;
            if (
              (E.tag === 5 &&
                I !== null &&
                ((E = I),
                x !== null &&
                  ((I = sr(y, x)), I != null && M.push(_r(y, I, E)))),
              Ne)
            )
              break;
            y = y.return;
          }
          0 < M.length &&
            ((T = new A(T, B, null, n, O)), L.push({ event: T, listeners: M }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((T = e === 'mouseover' || e === 'pointerover'),
            (A = e === 'mouseout' || e === 'pointerout'),
            T &&
              n !== Io &&
              (B = n.relatedTarget || n.fromElement) &&
              (hn(B) || B[Pt]))
          )
            break e;
          if (
            (A || T) &&
            ((T =
              O.window === O
                ? O
                : (T = O.ownerDocument)
                  ? T.defaultView || T.parentWindow
                  : window),
            A
              ? ((B = n.relatedTarget || n.toElement),
                (A = k),
                (B = B ? hn(B) : null),
                B !== null &&
                  ((Ne = pn(B)), B !== Ne || (B.tag !== 5 && B.tag !== 6)) &&
                  (B = null))
              : ((A = null), (B = k)),
            A !== B)
          ) {
            if (
              ((M = ia),
              (I = 'onMouseLeave'),
              (x = 'onMouseEnter'),
              (y = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((M = sa),
                (I = 'onPointerLeave'),
                (x = 'onPointerEnter'),
                (y = 'pointer')),
              (Ne = A == null ? T : Bn(A)),
              (E = B == null ? T : Bn(B)),
              (T = new M(I, y + 'leave', A, n, O)),
              (T.target = Ne),
              (T.relatedTarget = E),
              (I = null),
              hn(O) === k &&
                ((M = new M(x, y + 'enter', B, n, O)),
                (M.target = E),
                (M.relatedTarget = Ne),
                (I = M)),
              (Ne = I),
              A && B)
            )
              t: {
                for (M = A, x = B, y = 0, E = M; E; E = Dn(E)) y++;
                for (E = 0, I = x; I; I = Dn(I)) E++;
                for (; 0 < y - E; ) (M = Dn(M)), y--;
                for (; 0 < E - y; ) (x = Dn(x)), E--;
                for (; y--; ) {
                  if (M === x || (x !== null && M === x.alternate)) break t;
                  (M = Dn(M)), (x = Dn(x));
                }
                M = null;
              }
            else M = null;
            A !== null && Ia(L, T, A, M, !1),
              B !== null && Ne !== null && Ia(L, Ne, B, M, !0);
          }
        }
        e: {
          if (
            ((T = k ? Bn(k) : window),
            (A = T.nodeName && T.nodeName.toLowerCase()),
            A === 'select' || (A === 'input' && T.type === 'file'))
          )
            var U = oh;
          else if (da(T))
            if (ha) U = ah;
            else {
              U = lh;
              var V = sh;
            }
          else
            (A = T.nodeName) &&
              A.toLowerCase() === 'input' &&
              (T.type === 'checkbox' || T.type === 'radio') &&
              (U = uh);
          if (U && (U = U(e, k))) {
            pa(L, U, n, O);
            break e;
          }
          V && V(e, T, k),
            e === 'focusout' &&
              (V = T._wrapperState) &&
              V.controlled &&
              T.type === 'number' &&
              Ro(T, 'number', T.value);
        }
        switch (((V = k ? Bn(k) : window), e)) {
          case 'focusin':
            (da(V) || V.contentEditable === 'true') &&
              ((zn = V), (rs = k), (Er = null));
            break;
          case 'focusout':
            Er = rs = zn = null;
            break;
          case 'mousedown':
            is = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (is = !1), Ea(L, n, O);
            break;
          case 'selectionchange':
            if (dh) break;
          case 'keydown':
          case 'keyup':
            Ea(L, n, O);
        }
        var H;
        if (bo)
          e: {
            switch (e) {
              case 'compositionstart':
                var q = 'onCompositionStart';
                break e;
              case 'compositionend':
                q = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                q = 'onCompositionUpdate';
                break e;
            }
            q = void 0;
          }
        else
          In
            ? ca(e, n) && (q = 'onCompositionEnd')
            : e === 'keydown' &&
              n.keyCode === 229 &&
              (q = 'onCompositionStart');
        q &&
          (la &&
            n.locale !== 'ko' &&
            (In || q !== 'onCompositionStart'
              ? q === 'onCompositionEnd' && In && (H = na())
              : ((Qt = O),
                (qo = 'value' in Qt ? Qt.value : Qt.textContent),
                (In = !0))),
          (V = vi(k, q)),
          0 < V.length &&
            ((q = new oa(q, e, null, n, O)),
            L.push({ event: q, listeners: V }),
            H ? (q.data = H) : ((H = fa(n)), H !== null && (q.data = H)))),
          (H = eh ? th(e, n) : nh(e, n)) &&
            ((k = vi(k, 'onBeforeInput')),
            0 < k.length &&
              ((O = new oa('onBeforeInput', 'beforeinput', null, n, O)),
              L.push({ event: O, listeners: k }),
              (O.data = H)));
      }
      La(L, t);
    });
  }
  function _r(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function vi(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        a = l.stateNode;
      l.tag === 5 &&
        a !== null &&
        ((l = a),
        (a = sr(e, n)),
        a != null && r.unshift(_r(e, a, l)),
        (a = sr(e, t)),
        a != null && r.push(_r(e, a, l))),
        (e = e.return);
    }
    return r;
  }
  function Dn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ia(e, t, n, r, l) {
    for (var a = t._reactName, f = []; n !== null && n !== r; ) {
      var p = n,
        m = p.alternate,
        k = p.stateNode;
      if (m !== null && m === r) break;
      p.tag === 5 &&
        k !== null &&
        ((p = k),
        l
          ? ((m = sr(n, a)), m != null && f.unshift(_r(n, m, p)))
          : l || ((m = sr(n, a)), m != null && f.push(_r(n, m, p)))),
        (n = n.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var yh = /\r\n?/g,
    vh = /\u0000|\uFFFD/g;
  function za(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        yh,
        `
`
      )
      .replace(vh, '');
  }
  function gi(e, t, n) {
    if (((t = za(t)), za(e) !== t && n)) throw Error(o(425));
  }
  function wi() {}
  var cs = null,
    fs = null;
  function ds(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ps = typeof setTimeout == 'function' ? setTimeout : void 0,
    gh = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Aa = typeof Promise == 'function' ? Promise : void 0,
    wh =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Aa < 'u'
          ? function (e) {
              return Aa.resolve(null).then(e).catch(xh);
            }
          : ps;
  function xh(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function hs(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (r === 0) {
            e.removeChild(l), mr(t);
            return;
          }
          r--;
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = l;
    } while (n);
    mr(t);
  }
  function Yt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function Da(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Fn = Math.random().toString(36).slice(2),
    kt = '__reactFiber$' + Fn,
    Nr = '__reactProps$' + Fn,
    Pt = '__reactContainer$' + Fn,
    ms = '__reactEvents$' + Fn,
    Sh = '__reactListeners$' + Fn,
    Eh = '__reactHandles$' + Fn;
  function hn(e) {
    var t = e[kt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pt] || n[kt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Da(e); e !== null; ) {
            if ((n = e[kt])) return n;
            e = Da(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Tr(e) {
    return (
      (e = e[kt] || e[Pt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Bn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function xi(e) {
    return e[Nr] || null;
  }
  var ys = [],
    Mn = -1;
  function Xt(e) {
    return { current: e };
  }
  function he(e) {
    0 > Mn || ((e.current = ys[Mn]), (ys[Mn] = null), Mn--);
  }
  function de(e, t) {
    Mn++, (ys[Mn] = e.current), (e.current = t);
  }
  var Gt = {},
    Fe = Xt(Gt),
    We = Xt(!1),
    mn = Gt;
  function $n(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Gt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      a;
    for (a in n) l[a] = t[a];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Qe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Si() {
    he(We), he(Fe);
  }
  function Fa(e, t, n) {
    if (Fe.current !== Gt) throw Error(o(168));
    de(Fe, t), de(We, n);
  }
  function Ba(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(o(108, fe(e) || 'Unknown', l));
    return F({}, n, r);
  }
  function Ei(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Gt),
      (mn = Fe.current),
      de(Fe, e),
      de(We, We.current),
      !0
    );
  }
  function Ma(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n
      ? ((e = Ba(e, t, mn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        he(We),
        he(Fe),
        de(Fe, e))
      : he(We),
      de(We, n);
  }
  var Lt = null,
    ki = !1,
    vs = !1;
  function $a(e) {
    Lt === null ? (Lt = [e]) : Lt.push(e);
  }
  function kh(e) {
    (ki = !0), $a(e);
  }
  function Jt() {
    if (!vs && Lt !== null) {
      vs = !0;
      var e = 0,
        t = ae;
      try {
        var n = Lt;
        for (ae = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Lt = null), (ki = !1);
      } catch (l) {
        throw (Lt !== null && (Lt = Lt.slice(e + 1)), Vu(Mo, Jt), l);
      } finally {
        (ae = t), (vs = !1);
      }
    }
    return null;
  }
  var Un = [],
    Vn = 0,
    Ci = null,
    _i = 0,
    it = [],
    ot = 0,
    yn = null,
    jt = 1,
    It = '';
  function vn(e, t) {
    (Un[Vn++] = _i), (Un[Vn++] = Ci), (Ci = e), (_i = t);
  }
  function Ua(e, t, n) {
    (it[ot++] = jt), (it[ot++] = It), (it[ot++] = yn), (yn = e);
    var r = jt;
    e = It;
    var l = 32 - dt(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var a = 32 - dt(t) + l;
    if (30 < a) {
      var f = l - (l % 5);
      (a = (r & ((1 << f) - 1)).toString(32)),
        (r >>= f),
        (l -= f),
        (jt = (1 << (32 - dt(t) + l)) | (n << l) | r),
        (It = a + e);
    } else (jt = (1 << a) | (n << l) | r), (It = e);
  }
  function gs(e) {
    e.return !== null && (vn(e, 1), Ua(e, 1, 0));
  }
  function ws(e) {
    for (; e === Ci; )
      (Ci = Un[--Vn]), (Un[Vn] = null), (_i = Un[--Vn]), (Un[Vn] = null);
    for (; e === yn; )
      (yn = it[--ot]),
        (it[ot] = null),
        (It = it[--ot]),
        (it[ot] = null),
        (jt = it[--ot]),
        (it[ot] = null);
  }
  var et = null,
    tt = null,
    ve = !1,
    ht = null;
  function Va(e, t) {
    var n = at(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ha(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (et = e), (tt = Yt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (et = e), (tt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = yn !== null ? { id: jt, overflow: It } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = at(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (et = e),
              (tt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function xs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ss(e) {
    if (ve) {
      var t = tt;
      if (t) {
        var n = t;
        if (!Ha(e, t)) {
          if (xs(e)) throw Error(o(418));
          t = Yt(n.nextSibling);
          var r = et;
          t && Ha(e, t)
            ? Va(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (et = e));
        }
      } else {
        if (xs(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (ve = !1), (et = e);
      }
    }
  }
  function Ka(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    et = e;
  }
  function Ni(e) {
    if (e !== et) return !1;
    if (!ve) return Ka(e), (ve = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !ds(e.type, e.memoizedProps))),
      t && (t = tt))
    ) {
      if (xs(e)) throw (Wa(), Error(o(418)));
      for (; t; ) Va(e, t), (t = Yt(t.nextSibling));
    }
    if ((Ka(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                tt = Yt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        tt = null;
      }
    } else tt = et ? Yt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wa() {
    for (var e = tt; e; ) e = Yt(e.nextSibling);
  }
  function Hn() {
    (tt = et = null), (ve = !1);
  }
  function Es(e) {
    ht === null ? (ht = [e]) : ht.push(e);
  }
  var Ch = ee.ReactCurrentBatchConfig;
  function Rr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var l = r,
          a = '' + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === a
          ? t.ref
          : ((t = function (f) {
              var p = l.refs;
              f === null ? delete p[a] : (p[a] = f);
            }),
            (t._stringRef = a),
            t);
      }
      if (typeof e != 'string') throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Ti(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e
        )
      ))
    );
  }
  function Qa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function qa(e) {
    function t(x, y) {
      if (e) {
        var E = x.deletions;
        E === null ? ((x.deletions = [y]), (x.flags |= 16)) : E.push(y);
      }
    }
    function n(x, y) {
      if (!e) return null;
      for (; y !== null; ) t(x, y), (y = y.sibling);
      return null;
    }
    function r(x, y) {
      for (x = new Map(); y !== null; )
        y.key !== null ? x.set(y.key, y) : x.set(y.index, y), (y = y.sibling);
      return x;
    }
    function l(x, y) {
      return (x = sn(x, y)), (x.index = 0), (x.sibling = null), x;
    }
    function a(x, y, E) {
      return (
        (x.index = E),
        e
          ? ((E = x.alternate),
            E !== null
              ? ((E = E.index), E < y ? ((x.flags |= 2), y) : E)
              : ((x.flags |= 2), y))
          : ((x.flags |= 1048576), y)
      );
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 2), x;
    }
    function p(x, y, E, I) {
      return y === null || y.tag !== 6
        ? ((y = pl(E, x.mode, I)), (y.return = x), y)
        : ((y = l(y, E)), (y.return = x), y);
    }
    function m(x, y, E, I) {
      var U = E.type;
      return U === ce
        ? O(x, y, E.props.children, I, E.key)
        : y !== null &&
            (y.elementType === U ||
              (typeof U == 'object' &&
                U !== null &&
                U.$$typeof === Ke &&
                Qa(U) === y.type))
          ? ((I = l(y, E.props)), (I.ref = Rr(x, y, E)), (I.return = x), I)
          : ((I = Ji(E.type, E.key, E.props, null, x.mode, I)),
            (I.ref = Rr(x, y, E)),
            (I.return = x),
            I);
    }
    function k(x, y, E, I) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== E.containerInfo ||
        y.stateNode.implementation !== E.implementation
        ? ((y = hl(E, x.mode, I)), (y.return = x), y)
        : ((y = l(y, E.children || [])), (y.return = x), y);
    }
    function O(x, y, E, I, U) {
      return y === null || y.tag !== 7
        ? ((y = _n(E, x.mode, I, U)), (y.return = x), y)
        : ((y = l(y, E)), (y.return = x), y);
    }
    function L(x, y, E) {
      if ((typeof y == 'string' && y !== '') || typeof y == 'number')
        return (y = pl('' + y, x.mode, E)), (y.return = x), y;
      if (typeof y == 'object' && y !== null) {
        switch (y.$$typeof) {
          case Ee:
            return (
              (E = Ji(y.type, y.key, y.props, null, x.mode, E)),
              (E.ref = Rr(x, null, y)),
              (E.return = x),
              E
            );
          case X:
            return (y = hl(y, x.mode, E)), (y.return = x), y;
          case Ke:
            var I = y._init;
            return L(x, I(y._payload), E);
        }
        if (rr(y) || W(y))
          return (y = _n(y, x.mode, E, null)), (y.return = x), y;
        Ti(x, y);
      }
      return null;
    }
    function T(x, y, E, I) {
      var U = y !== null ? y.key : null;
      if ((typeof E == 'string' && E !== '') || typeof E == 'number')
        return U !== null ? null : p(x, y, '' + E, I);
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case Ee:
            return E.key === U ? m(x, y, E, I) : null;
          case X:
            return E.key === U ? k(x, y, E, I) : null;
          case Ke:
            return (U = E._init), T(x, y, U(E._payload), I);
        }
        if (rr(E) || W(E)) return U !== null ? null : O(x, y, E, I, null);
        Ti(x, E);
      }
      return null;
    }
    function A(x, y, E, I, U) {
      if ((typeof I == 'string' && I !== '') || typeof I == 'number')
        return (x = x.get(E) || null), p(y, x, '' + I, U);
      if (typeof I == 'object' && I !== null) {
        switch (I.$$typeof) {
          case Ee:
            return (
              (x = x.get(I.key === null ? E : I.key) || null), m(y, x, I, U)
            );
          case X:
            return (
              (x = x.get(I.key === null ? E : I.key) || null), k(y, x, I, U)
            );
          case Ke:
            var V = I._init;
            return A(x, y, E, V(I._payload), U);
        }
        if (rr(I) || W(I)) return (x = x.get(E) || null), O(y, x, I, U, null);
        Ti(y, I);
      }
      return null;
    }
    function B(x, y, E, I) {
      for (
        var U = null, V = null, H = y, q = (y = 0), ze = null;
        H !== null && q < E.length;
        q++
      ) {
        H.index > q ? ((ze = H), (H = null)) : (ze = H.sibling);
        var se = T(x, H, E[q], I);
        if (se === null) {
          H === null && (H = ze);
          break;
        }
        e && H && se.alternate === null && t(x, H),
          (y = a(se, y, q)),
          V === null ? (U = se) : (V.sibling = se),
          (V = se),
          (H = ze);
      }
      if (q === E.length) return n(x, H), ve && vn(x, q), U;
      if (H === null) {
        for (; q < E.length; q++)
          (H = L(x, E[q], I)),
            H !== null &&
              ((y = a(H, y, q)),
              V === null ? (U = H) : (V.sibling = H),
              (V = H));
        return ve && vn(x, q), U;
      }
      for (H = r(x, H); q < E.length; q++)
        (ze = A(H, x, q, E[q], I)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              H.delete(ze.key === null ? q : ze.key),
            (y = a(ze, y, q)),
            V === null ? (U = ze) : (V.sibling = ze),
            (V = ze));
      return (
        e &&
          H.forEach(function (ln) {
            return t(x, ln);
          }),
        ve && vn(x, q),
        U
      );
    }
    function M(x, y, E, I) {
      var U = W(E);
      if (typeof U != 'function') throw Error(o(150));
      if (((E = U.call(E)), E == null)) throw Error(o(151));
      for (
        var V = (U = null), H = y, q = (y = 0), ze = null, se = E.next();
        H !== null && !se.done;
        q++, se = E.next()
      ) {
        H.index > q ? ((ze = H), (H = null)) : (ze = H.sibling);
        var ln = T(x, H, se.value, I);
        if (ln === null) {
          H === null && (H = ze);
          break;
        }
        e && H && ln.alternate === null && t(x, H),
          (y = a(ln, y, q)),
          V === null ? (U = ln) : (V.sibling = ln),
          (V = ln),
          (H = ze);
      }
      if (se.done) return n(x, H), ve && vn(x, q), U;
      if (H === null) {
        for (; !se.done; q++, se = E.next())
          (se = L(x, se.value, I)),
            se !== null &&
              ((y = a(se, y, q)),
              V === null ? (U = se) : (V.sibling = se),
              (V = se));
        return ve && vn(x, q), U;
      }
      for (H = r(x, H); !se.done; q++, se = E.next())
        (se = A(H, x, q, se.value, I)),
          se !== null &&
            (e &&
              se.alternate !== null &&
              H.delete(se.key === null ? q : se.key),
            (y = a(se, y, q)),
            V === null ? (U = se) : (V.sibling = se),
            (V = se));
      return (
        e &&
          H.forEach(function (nm) {
            return t(x, nm);
          }),
        ve && vn(x, q),
        U
      );
    }
    function Ne(x, y, E, I) {
      if (
        (typeof E == 'object' &&
          E !== null &&
          E.type === ce &&
          E.key === null &&
          (E = E.props.children),
        typeof E == 'object' && E !== null)
      ) {
        switch (E.$$typeof) {
          case Ee:
            e: {
              for (var U = E.key, V = y; V !== null; ) {
                if (V.key === U) {
                  if (((U = E.type), U === ce)) {
                    if (V.tag === 7) {
                      n(x, V.sibling),
                        (y = l(V, E.props.children)),
                        (y.return = x),
                        (x = y);
                      break e;
                    }
                  } else if (
                    V.elementType === U ||
                    (typeof U == 'object' &&
                      U !== null &&
                      U.$$typeof === Ke &&
                      Qa(U) === V.type)
                  ) {
                    n(x, V.sibling),
                      (y = l(V, E.props)),
                      (y.ref = Rr(x, V, E)),
                      (y.return = x),
                      (x = y);
                    break e;
                  }
                  n(x, V);
                  break;
                } else t(x, V);
                V = V.sibling;
              }
              E.type === ce
                ? ((y = _n(E.props.children, x.mode, I, E.key)),
                  (y.return = x),
                  (x = y))
                : ((I = Ji(E.type, E.key, E.props, null, x.mode, I)),
                  (I.ref = Rr(x, y, E)),
                  (I.return = x),
                  (x = I));
            }
            return f(x);
          case X:
            e: {
              for (V = E.key; y !== null; ) {
                if (y.key === V)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === E.containerInfo &&
                    y.stateNode.implementation === E.implementation
                  ) {
                    n(x, y.sibling),
                      (y = l(y, E.children || [])),
                      (y.return = x),
                      (x = y);
                    break e;
                  } else {
                    n(x, y);
                    break;
                  }
                else t(x, y);
                y = y.sibling;
              }
              (y = hl(E, x.mode, I)), (y.return = x), (x = y);
            }
            return f(x);
          case Ke:
            return (V = E._init), Ne(x, y, V(E._payload), I);
        }
        if (rr(E)) return B(x, y, E, I);
        if (W(E)) return M(x, y, E, I);
        Ti(x, E);
      }
      return (typeof E == 'string' && E !== '') || typeof E == 'number'
        ? ((E = '' + E),
          y !== null && y.tag === 6
            ? (n(x, y.sibling), (y = l(y, E)), (y.return = x), (x = y))
            : (n(x, y), (y = pl(E, x.mode, I)), (y.return = x), (x = y)),
          f(x))
        : n(x, y);
    }
    return Ne;
  }
  var Kn = qa(!0),
    Ya = qa(!1),
    Ri = Xt(null),
    Oi = null,
    Wn = null,
    ks = null;
  function Cs() {
    ks = Wn = Oi = null;
  }
  function _s(e) {
    var t = Ri.current;
    he(Ri), (e._currentValue = t);
  }
  function Ns(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Qn(e, t) {
    (Oi = e),
      (ks = Wn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (qe = !0), (e.firstContext = null));
  }
  function st(e) {
    var t = e._currentValue;
    if (ks !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Wn === null)) {
        if (Oi === null) throw Error(o(308));
        (Wn = e), (Oi.dependencies = { lanes: 0, firstContext: e });
      } else Wn = Wn.next = e;
    return t;
  }
  var gn = null;
  function Ts(e) {
    gn === null ? (gn = [e]) : gn.push(e);
  }
  function Xa(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Ts(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      zt(e, r)
    );
  }
  function zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zt = !1;
  function Rs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ga(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function At(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), re & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        zt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Ts(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      zt(e, n)
    );
  }
  function Pi(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vo(e, n);
    }
  }
  function Ja(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        a = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          a === null ? (l = a = f) : (a = a.next = f), (n = n.next);
        } while (n !== null);
        a === null ? (l = a = t) : (a = a.next = t);
      } else l = a = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: a,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Li(e, t, n, r) {
    var l = e.updateQueue;
    Zt = !1;
    var a = l.firstBaseUpdate,
      f = l.lastBaseUpdate,
      p = l.shared.pending;
    if (p !== null) {
      l.shared.pending = null;
      var m = p,
        k = m.next;
      (m.next = null), f === null ? (a = k) : (f.next = k), (f = m);
      var O = e.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (p = O.lastBaseUpdate),
        p !== f &&
          (p === null ? (O.firstBaseUpdate = k) : (p.next = k),
          (O.lastBaseUpdate = m)));
    }
    if (a !== null) {
      var L = l.baseState;
      (f = 0), (O = k = m = null), (p = a);
      do {
        var T = p.lane,
          A = p.eventTime;
        if ((r & T) === T) {
          O !== null &&
            (O = O.next =
              {
                eventTime: A,
                lane: 0,
                tag: p.tag,
                payload: p.payload,
                callback: p.callback,
                next: null,
              });
          e: {
            var B = e,
              M = p;
            switch (((T = t), (A = n), M.tag)) {
              case 1:
                if (((B = M.payload), typeof B == 'function')) {
                  L = B.call(A, L, T);
                  break e;
                }
                L = B;
                break e;
              case 3:
                B.flags = (B.flags & -65537) | 128;
              case 0:
                if (
                  ((B = M.payload),
                  (T = typeof B == 'function' ? B.call(A, L, T) : B),
                  T == null)
                )
                  break e;
                L = F({}, L, T);
                break e;
              case 2:
                Zt = !0;
            }
          }
          p.callback !== null &&
            p.lane !== 0 &&
            ((e.flags |= 64),
            (T = l.effects),
            T === null ? (l.effects = [p]) : T.push(p));
        } else
          (A = {
            eventTime: A,
            lane: T,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            O === null ? ((k = O = A), (m = L)) : (O = O.next = A),
            (f |= T);
        if (((p = p.next), p === null)) {
          if (((p = l.shared.pending), p === null)) break;
          (T = p),
            (p = T.next),
            (T.next = null),
            (l.lastBaseUpdate = T),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (O === null && (m = L),
        (l.baseState = m),
        (l.firstBaseUpdate = k),
        (l.lastBaseUpdate = O),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (f |= l.lane), (l = l.next);
        while (l !== t);
      } else a === null && (l.shared.lanes = 0);
      (Sn |= f), (e.lanes = f), (e.memoizedState = L);
    }
  }
  function Za(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function'))
            throw Error(o(191, l));
          l.call(r);
        }
      }
  }
  var Or = {},
    Ct = Xt(Or),
    Pr = Xt(Or),
    Lr = Xt(Or);
  function wn(e) {
    if (e === Or) throw Error(o(174));
    return e;
  }
  function Os(e, t) {
    switch ((de(Lr, t), de(Pr, e), de(Ct, Or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Po(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Po(t, e));
    }
    he(Ct), de(Ct, t);
  }
  function qn() {
    he(Ct), he(Pr), he(Lr);
  }
  function ba(e) {
    wn(Lr.current);
    var t = wn(Ct.current),
      n = Po(t, e.type);
    t !== n && (de(Pr, e), de(Ct, n));
  }
  function Ps(e) {
    Pr.current === e && (he(Ct), he(Pr));
  }
  var ge = Xt(0);
  function ji(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ls = [];
  function js() {
    for (var e = 0; e < Ls.length; e++)
      Ls[e]._workInProgressVersionPrimary = null;
    Ls.length = 0;
  }
  var Ii = ee.ReactCurrentDispatcher,
    Is = ee.ReactCurrentBatchConfig,
    xn = 0,
    we = null,
    Oe = null,
    je = null,
    zi = !1,
    jr = !1,
    Ir = 0,
    _h = 0;
  function Be() {
    throw Error(o(321));
  }
  function zs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!pt(e[n], t[n])) return !1;
    return !0;
  }
  function As(e, t, n, r, l, a) {
    if (
      ((xn = a),
      (we = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ii.current = e === null || e.memoizedState === null ? Oh : Ph),
      (e = n(r, l)),
      jr)
    ) {
      a = 0;
      do {
        if (((jr = !1), (Ir = 0), 25 <= a)) throw Error(o(301));
        (a += 1),
          (je = Oe = null),
          (t.updateQueue = null),
          (Ii.current = Lh),
          (e = n(r, l));
      } while (jr);
    }
    if (
      ((Ii.current = Fi),
      (t = Oe !== null && Oe.next !== null),
      (xn = 0),
      (je = Oe = we = null),
      (zi = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function Ds() {
    var e = Ir !== 0;
    return (Ir = 0), e;
  }
  function _t() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return je === null ? (we.memoizedState = je = e) : (je = je.next = e), je;
  }
  function lt() {
    if (Oe === null) {
      var e = we.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = je === null ? we.memoizedState : je.next;
    if (t !== null) (je = t), (Oe = e);
    else {
      if (e === null) throw Error(o(310));
      (Oe = e),
        (e = {
          memoizedState: Oe.memoizedState,
          baseState: Oe.baseState,
          baseQueue: Oe.baseQueue,
          queue: Oe.queue,
          next: null,
        }),
        je === null ? (we.memoizedState = je = e) : (je = je.next = e);
    }
    return je;
  }
  function zr(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Fs(e) {
    var t = lt(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = Oe,
      l = r.baseQueue,
      a = n.pending;
    if (a !== null) {
      if (l !== null) {
        var f = l.next;
        (l.next = a.next), (a.next = f);
      }
      (r.baseQueue = l = a), (n.pending = null);
    }
    if (l !== null) {
      (a = l.next), (r = r.baseState);
      var p = (f = null),
        m = null,
        k = a;
      do {
        var O = k.lane;
        if ((xn & O) === O)
          m !== null &&
            (m = m.next =
              {
                lane: 0,
                action: k.action,
                hasEagerState: k.hasEagerState,
                eagerState: k.eagerState,
                next: null,
              }),
            (r = k.hasEagerState ? k.eagerState : e(r, k.action));
        else {
          var L = {
            lane: O,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          };
          m === null ? ((p = m = L), (f = r)) : (m = m.next = L),
            (we.lanes |= O),
            (Sn |= O);
        }
        k = k.next;
      } while (k !== null && k !== a);
      m === null ? (f = r) : (m.next = p),
        pt(r, t.memoizedState) || (qe = !0),
        (t.memoizedState = r),
        (t.baseState = f),
        (t.baseQueue = m),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (a = l.lane), (we.lanes |= a), (Sn |= a), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Bs(e) {
    var t = lt(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      a = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var f = (l = l.next);
      do (a = e(a, f.action)), (f = f.next);
      while (f !== l);
      pt(a, t.memoizedState) || (qe = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a);
    }
    return [a, r];
  }
  function ec() {}
  function tc(e, t) {
    var n = we,
      r = lt(),
      l = t(),
      a = !pt(r.memoizedState, l);
    if (
      (a && ((r.memoizedState = l), (qe = !0)),
      (r = r.queue),
      Ms(ic.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || a || (je !== null && je.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Ar(9, rc.bind(null, n, r, l, t), void 0, null),
        Ie === null)
      )
        throw Error(o(349));
      xn & 30 || nc(n, t, l);
    }
    return l;
  }
  function nc(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function rc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), oc(t) && sc(e);
  }
  function ic(e, t, n) {
    return n(function () {
      oc(t) && sc(e);
    });
  }
  function oc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !pt(e, n);
    } catch {
      return !0;
    }
  }
  function sc(e) {
    var t = zt(e, 1);
    t !== null && gt(t, e, 1, -1);
  }
  function lc(e) {
    var t = _t();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Rh.bind(null, we, e)),
      [t.memoizedState, e]
    );
  }
  function Ar(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = we.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (we.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function uc() {
    return lt().memoizedState;
  }
  function Ai(e, t, n, r) {
    var l = _t();
    (we.flags |= e),
      (l.memoizedState = Ar(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Di(e, t, n, r) {
    var l = lt();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (Oe !== null) {
      var f = Oe.memoizedState;
      if (((a = f.destroy), r !== null && zs(r, f.deps))) {
        l.memoizedState = Ar(t, n, a, r);
        return;
      }
    }
    (we.flags |= e), (l.memoizedState = Ar(1 | t, n, a, r));
  }
  function ac(e, t) {
    return Ai(8390656, 8, e, t);
  }
  function Ms(e, t) {
    return Di(2048, 8, e, t);
  }
  function cc(e, t) {
    return Di(4, 2, e, t);
  }
  function fc(e, t) {
    return Di(4, 4, e, t);
  }
  function dc(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function pc(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Di(4, 4, dc.bind(null, t, e), n)
    );
  }
  function $s() {}
  function hc(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zs(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function mc(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zs(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function yc(e, t, n) {
    return xn & 21
      ? (pt(n, t) ||
          ((n = Qu()), (we.lanes |= n), (Sn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n));
  }
  function Nh(e, t) {
    var n = ae;
    (ae = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Is.transition;
    Is.transition = {};
    try {
      e(!1), t();
    } finally {
      (ae = n), (Is.transition = r);
    }
  }
  function vc() {
    return lt().memoizedState;
  }
  function Th(e, t, n) {
    var r = rn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gc(e))
    )
      wc(t, n);
    else if (((n = Xa(e, t, n, r)), n !== null)) {
      var l = Ve();
      gt(n, e, r, l), xc(n, t, r);
    }
  }
  function Rh(e, t, n) {
    var r = rn(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (gc(e)) wc(t, l);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = t.lastRenderedReducer), a !== null)
      )
        try {
          var f = t.lastRenderedState,
            p = a(f, n);
          if (((l.hasEagerState = !0), (l.eagerState = p), pt(p, f))) {
            var m = t.interleaved;
            m === null
              ? ((l.next = l), Ts(t))
              : ((l.next = m.next), (m.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Xa(e, t, l, r)),
        n !== null && ((l = Ve()), gt(n, e, r, l), xc(n, t, r));
    }
  }
  function gc(e) {
    var t = e.alternate;
    return e === we || (t !== null && t === we);
  }
  function wc(e, t) {
    jr = zi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function xc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vo(e, n);
    }
  }
  var Fi = {
      readContext: st,
      useCallback: Be,
      useContext: Be,
      useEffect: Be,
      useImperativeHandle: Be,
      useInsertionEffect: Be,
      useLayoutEffect: Be,
      useMemo: Be,
      useReducer: Be,
      useRef: Be,
      useState: Be,
      useDebugValue: Be,
      useDeferredValue: Be,
      useTransition: Be,
      useMutableSource: Be,
      useSyncExternalStore: Be,
      useId: Be,
      unstable_isNewReconciler: !1,
    },
    Oh = {
      readContext: st,
      useCallback: function (e, t) {
        return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: st,
      useEffect: ac,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Ai(4194308, 4, dc.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ai(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ai(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = _t();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = _t();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Th.bind(null, we, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = _t();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: lc,
      useDebugValue: $s,
      useDeferredValue: function (e) {
        return (_t().memoizedState = e);
      },
      useTransition: function () {
        var e = lc(!1),
          t = e[0];
        return (e = Nh.bind(null, e[1])), (_t().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = we,
          l = _t();
        if (ve) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), Ie === null)) throw Error(o(349));
          xn & 30 || nc(r, t, n);
        }
        l.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (l.queue = a),
          ac(ic.bind(null, r, a, e), [e]),
          (r.flags |= 2048),
          Ar(9, rc.bind(null, r, a, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = _t(),
          t = Ie.identifierPrefix;
        if (ve) {
          var n = It,
            r = jt;
          (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Ir++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':');
        } else (n = _h++), (t = ':' + t + 'r' + n.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ph = {
      readContext: st,
      useCallback: hc,
      useContext: st,
      useEffect: Ms,
      useImperativeHandle: pc,
      useInsertionEffect: cc,
      useLayoutEffect: fc,
      useMemo: mc,
      useReducer: Fs,
      useRef: uc,
      useState: function () {
        return Fs(zr);
      },
      useDebugValue: $s,
      useDeferredValue: function (e) {
        var t = lt();
        return yc(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = Fs(zr)[0],
          t = lt().memoizedState;
        return [e, t];
      },
      useMutableSource: ec,
      useSyncExternalStore: tc,
      useId: vc,
      unstable_isNewReconciler: !1,
    },
    Lh = {
      readContext: st,
      useCallback: hc,
      useContext: st,
      useEffect: Ms,
      useImperativeHandle: pc,
      useInsertionEffect: cc,
      useLayoutEffect: fc,
      useMemo: mc,
      useReducer: Bs,
      useRef: uc,
      useState: function () {
        return Bs(zr);
      },
      useDebugValue: $s,
      useDeferredValue: function (e) {
        var t = lt();
        return Oe === null ? (t.memoizedState = e) : yc(t, Oe.memoizedState, e);
      },
      useTransition: function () {
        var e = Bs(zr)[0],
          t = lt().memoizedState;
        return [e, t];
      },
      useMutableSource: ec,
      useSyncExternalStore: tc,
      useId: vc,
      unstable_isNewReconciler: !1,
    };
  function mt(e, t) {
    if (e && e.defaultProps) {
      (t = F({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Us(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : F({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Bi = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? pn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ve(),
        l = rn(e),
        a = At(r, l);
      (a.payload = t),
        n != null && (a.callback = n),
        (t = bt(e, a, l)),
        t !== null && (gt(t, e, l, r), Pi(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ve(),
        l = rn(e),
        a = At(r, l);
      (a.tag = 1),
        (a.payload = t),
        n != null && (a.callback = n),
        (t = bt(e, a, l)),
        t !== null && (gt(t, e, l, r), Pi(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ve(),
        r = rn(e),
        l = At(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = bt(e, l, r)),
        t !== null && (gt(t, e, r, n), Pi(t, e, r));
    },
  };
  function Sc(e, t, n, r, l, a, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, a, f)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Sr(n, r) || !Sr(l, a)
          : !0
    );
  }
  function Ec(e, t, n) {
    var r = !1,
      l = Gt,
      a = t.contextType;
    return (
      typeof a == 'object' && a !== null
        ? (a = st(a))
        : ((l = Qe(t) ? mn : Fe.current),
          (r = t.contextTypes),
          (a = (r = r != null) ? $n(e, l) : Gt)),
      (t = new t(n, a)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Bi),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = a)),
      t
    );
  }
  function kc(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Bi.enqueueReplaceState(t, t.state, null);
  }
  function Vs(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Rs(e);
    var a = t.contextType;
    typeof a == 'object' && a !== null
      ? (l.context = st(a))
      : ((a = Qe(t) ? mn : Fe.current), (l.context = $n(e, a))),
      (l.state = e.memoizedState),
      (a = t.getDerivedStateFromProps),
      typeof a == 'function' && (Us(e, t, a, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Bi.enqueueReplaceState(l, l.state, null),
        Li(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function Yn(e, t) {
    try {
      var n = '',
        r = t;
      do (n += ie(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (a) {
      l =
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Hs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ks(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var jh = typeof WeakMap == 'function' ? WeakMap : Map;
  function Cc(e, t, n) {
    (n = At(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Wi || ((Wi = !0), (ol = r)), Ks(e, t);
      }),
      n
    );
  }
  function _c(e, t, n) {
    (n = At(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Ks(e, t);
        });
    }
    var a = e.stateNode;
    return (
      a !== null &&
        typeof a.componentDidCatch == 'function' &&
        (n.callback = function () {
          Ks(e, t),
            typeof r != 'function' &&
              (tn === null ? (tn = new Set([this])) : tn.add(this));
          var f = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: f !== null ? f : '',
          });
        }),
      n
    );
  }
  function Nc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new jh();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Qh.bind(null, e, t, n)), t.then(e, e));
  }
  function Tc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Rc(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = At(-1, 1)), (t.tag = 2), bt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Ih = ee.ReactCurrentOwner,
    qe = !1;
  function Ue(e, t, n, r) {
    t.child = e === null ? Ya(t, null, n, r) : Kn(t, e.child, n, r);
  }
  function Oc(e, t, n, r, l) {
    n = n.render;
    var a = t.ref;
    return (
      Qn(t, l),
      (r = As(e, t, n, r, a, l)),
      (n = Ds()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Dt(e, t, l))
        : (ve && n && gs(t), (t.flags |= 1), Ue(e, t, r, l), t.child)
    );
  }
  function Pc(e, t, n, r, l) {
    if (e === null) {
      var a = n.type;
      return typeof a == 'function' &&
        !dl(a) &&
        a.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = a), Lc(e, t, a, r, l))
        : ((e = Ji(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((a = e.child), !(e.lanes & l))) {
      var f = a.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Sr), n(f, r) && e.ref === t.ref)
      )
        return Dt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = sn(a, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Lc(e, t, n, r, l) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Sr(a, r) && e.ref === t.ref)
        if (((qe = !1), (t.pendingProps = r = a), (e.lanes & l) !== 0))
          e.flags & 131072 && (qe = !0);
        else return (t.lanes = e.lanes), Dt(e, t, l);
    }
    return Ws(e, t, n, r, l);
  }
  function jc(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      a = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          de(Gn, nt),
          (nt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = a !== null ? a.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            de(Gn, nt),
            (nt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = a !== null ? a.baseLanes : n),
          de(Gn, nt),
          (nt |= r);
      }
    else
      a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
        de(Gn, nt),
        (nt |= r);
    return Ue(e, t, l, n), t.child;
  }
  function Ic(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ws(e, t, n, r, l) {
    var a = Qe(n) ? mn : Fe.current;
    return (
      (a = $n(t, a)),
      Qn(t, l),
      (n = As(e, t, n, r, a, l)),
      (r = Ds()),
      e !== null && !qe
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Dt(e, t, l))
        : (ve && r && gs(t), (t.flags |= 1), Ue(e, t, n, l), t.child)
    );
  }
  function zc(e, t, n, r, l) {
    if (Qe(n)) {
      var a = !0;
      Ei(t);
    } else a = !1;
    if ((Qn(t, l), t.stateNode === null))
      $i(e, t), Ec(t, n, r), Vs(t, n, r, l), (r = !0);
    else if (e === null) {
      var f = t.stateNode,
        p = t.memoizedProps;
      f.props = p;
      var m = f.context,
        k = n.contextType;
      typeof k == 'object' && k !== null
        ? (k = st(k))
        : ((k = Qe(n) ? mn : Fe.current), (k = $n(t, k)));
      var O = n.getDerivedStateFromProps,
        L =
          typeof O == 'function' ||
          typeof f.getSnapshotBeforeUpdate == 'function';
      L ||
        (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof f.componentWillReceiveProps != 'function') ||
        ((p !== r || m !== k) && kc(t, f, r, k)),
        (Zt = !1);
      var T = t.memoizedState;
      (f.state = T),
        Li(t, r, f, l),
        (m = t.memoizedState),
        p !== r || T !== m || We.current || Zt
          ? (typeof O == 'function' && (Us(t, n, O, r), (m = t.memoizedState)),
            (p = Zt || Sc(t, n, p, r, T, m, k))
              ? (L ||
                  (typeof f.UNSAFE_componentWillMount != 'function' &&
                    typeof f.componentWillMount != 'function') ||
                  (typeof f.componentWillMount == 'function' &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == 'function' &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (f.props = r),
            (f.state = m),
            (f.context = k),
            (r = p))
          : (typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
            (r = !1));
    } else {
      (f = t.stateNode),
        Ga(e, t),
        (p = t.memoizedProps),
        (k = t.type === t.elementType ? p : mt(t.type, p)),
        (f.props = k),
        (L = t.pendingProps),
        (T = f.context),
        (m = n.contextType),
        typeof m == 'object' && m !== null
          ? (m = st(m))
          : ((m = Qe(n) ? mn : Fe.current), (m = $n(t, m)));
      var A = n.getDerivedStateFromProps;
      (O =
        typeof A == 'function' ||
        typeof f.getSnapshotBeforeUpdate == 'function') ||
        (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof f.componentWillReceiveProps != 'function') ||
        ((p !== L || T !== m) && kc(t, f, r, m)),
        (Zt = !1),
        (T = t.memoizedState),
        (f.state = T),
        Li(t, r, f, l);
      var B = t.memoizedState;
      p !== L || T !== B || We.current || Zt
        ? (typeof A == 'function' && (Us(t, n, A, r), (B = t.memoizedState)),
          (k = Zt || Sc(t, n, k, r, T, B, m) || !1)
            ? (O ||
                (typeof f.UNSAFE_componentWillUpdate != 'function' &&
                  typeof f.componentWillUpdate != 'function') ||
                (typeof f.componentWillUpdate == 'function' &&
                  f.componentWillUpdate(r, B, m),
                typeof f.UNSAFE_componentWillUpdate == 'function' &&
                  f.UNSAFE_componentWillUpdate(r, B, m)),
              typeof f.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != 'function' ||
                (p === e.memoizedProps && T === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != 'function' ||
                (p === e.memoizedProps && T === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = B)),
          (f.props = r),
          (f.state = B),
          (f.context = m),
          (r = k))
        : (typeof f.componentDidUpdate != 'function' ||
            (p === e.memoizedProps && T === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != 'function' ||
            (p === e.memoizedProps && T === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Qs(e, t, n, r, a, l);
  }
  function Qs(e, t, n, r, l, a) {
    Ic(e, t);
    var f = (t.flags & 128) !== 0;
    if (!r && !f) return l && Ma(t, n, !1), Dt(e, t, a);
    (r = t.stateNode), (Ih.current = t);
    var p =
      f && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && f
        ? ((t.child = Kn(t, e.child, null, a)), (t.child = Kn(t, null, p, a)))
        : Ue(e, t, p, a),
      (t.memoizedState = r.state),
      l && Ma(t, n, !0),
      t.child
    );
  }
  function Ac(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Fa(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Fa(e, t.context, !1),
      Os(e, t.containerInfo);
  }
  function Dc(e, t, n, r, l) {
    return Hn(), Es(l), (t.flags |= 256), Ue(e, t, n, r), t.child;
  }
  var qs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ys(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Fc(e, t, n) {
    var r = t.pendingProps,
      l = ge.current,
      a = !1,
      f = (t.flags & 128) !== 0,
      p;
    if (
      ((p = f) ||
        (p = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      p
        ? ((a = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      de(ge, l & 1),
      e === null)
    )
      return (
        Ss(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((f = r.children),
            (e = r.fallback),
            a
              ? ((r = t.mode),
                (a = t.child),
                (f = { mode: 'hidden', children: f }),
                !(r & 1) && a !== null
                  ? ((a.childLanes = 0), (a.pendingProps = f))
                  : (a = Zi(f, r, 0, null)),
                (e = _n(e, r, n, null)),
                (a.return = t),
                (e.return = t),
                (a.sibling = e),
                (t.child = a),
                (t.child.memoizedState = Ys(n)),
                (t.memoizedState = qs),
                e)
              : Xs(t, f))
      );
    if (((l = e.memoizedState), l !== null && ((p = l.dehydrated), p !== null)))
      return zh(e, t, f, r, p, l, n);
    if (a) {
      (a = r.fallback), (f = t.mode), (l = e.child), (p = l.sibling);
      var m = { mode: 'hidden', children: r.children };
      return (
        !(f & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = m),
            (t.deletions = null))
          : ((r = sn(l, m)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        p !== null ? (a = sn(p, a)) : ((a = _n(a, f, n, null)), (a.flags |= 2)),
        (a.return = t),
        (r.return = t),
        (r.sibling = a),
        (t.child = r),
        (r = a),
        (a = t.child),
        (f = e.child.memoizedState),
        (f =
          f === null
            ? Ys(n)
            : {
                baseLanes: f.baseLanes | n,
                cachePool: null,
                transitions: f.transitions,
              }),
        (a.memoizedState = f),
        (a.childLanes = e.childLanes & ~n),
        (t.memoizedState = qs),
        r
      );
    }
    return (
      (a = e.child),
      (e = a.sibling),
      (r = sn(a, { mode: 'visible', children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Xs(e, t) {
    return (
      (t = Zi({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Mi(e, t, n, r) {
    return (
      r !== null && Es(r),
      Kn(t, e.child, null, n),
      (e = Xs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function zh(e, t, n, r, l, a, f) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Hs(Error(o(422)))), Mi(e, t, f, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((a = r.fallback),
            (l = t.mode),
            (r = Zi({ mode: 'visible', children: r.children }, l, 0, null)),
            (a = _n(a, l, f, null)),
            (a.flags |= 2),
            (r.return = t),
            (a.return = t),
            (r.sibling = a),
            (t.child = r),
            t.mode & 1 && Kn(t, e.child, null, f),
            (t.child.memoizedState = Ys(f)),
            (t.memoizedState = qs),
            a);
    if (!(t.mode & 1)) return Mi(e, t, f, null);
    if (l.data === '$!') {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var p = r.dgst;
      return (
        (r = p), (a = Error(o(419))), (r = Hs(a, r, void 0)), Mi(e, t, f, r)
      );
    }
    if (((p = (f & e.childLanes) !== 0), qe || p)) {
      if (((r = Ie), r !== null)) {
        switch (f & -f) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | f) ? 0 : l),
          l !== 0 &&
            l !== a.retryLane &&
            ((a.retryLane = l), zt(e, l), gt(r, e, l, -1));
      }
      return fl(), (r = Hs(Error(o(421)))), Mi(e, t, f, r);
    }
    return l.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = qh.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = a.treeContext),
        (tt = Yt(l.nextSibling)),
        (et = t),
        (ve = !0),
        (ht = null),
        e !== null &&
          ((it[ot++] = jt),
          (it[ot++] = It),
          (it[ot++] = yn),
          (jt = e.id),
          (It = e.overflow),
          (yn = t)),
        (t = Xs(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Bc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ns(e.return, t, n);
  }
  function Gs(e, t, n, r, l) {
    var a = e.memoizedState;
    a === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((a.isBackwards = t),
        (a.rendering = null),
        (a.renderingStartTime = 0),
        (a.last = r),
        (a.tail = n),
        (a.tailMode = l));
  }
  function Mc(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      a = r.tail;
    if ((Ue(e, t, r.children, n), (r = ge.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Bc(e, n, t);
          else if (e.tag === 19) Bc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((de(ge, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && ji(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Gs(t, !1, l, n, a);
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && ji(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Gs(t, !0, n, null, a);
          break;
        case 'together':
          Gs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function $i(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Dt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Sn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = sn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Ah(e, t, n) {
    switch (t.tag) {
      case 3:
        Ac(t), Hn();
        break;
      case 5:
        ba(t);
        break;
      case 1:
        Qe(t.type) && Ei(t);
        break;
      case 4:
        Os(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        de(Ri, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (de(ge, ge.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? Fc(e, t, n)
              : (de(ge, ge.current & 1),
                (e = Dt(e, t, n)),
                e !== null ? e.sibling : null);
        de(ge, ge.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Mc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          de(ge, ge.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), jc(e, t, n);
    }
    return Dt(e, t, n);
  }
  var $c, Js, Uc, Vc;
  ($c = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Js = function () {}),
    (Uc = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), wn(Ct.current);
        var a = null;
        switch (n) {
          case 'input':
            (l = No(e, l)), (r = No(e, r)), (a = []);
            break;
          case 'select':
            (l = F({}, l, { value: void 0 })),
              (r = F({}, r, { value: void 0 })),
              (a = []);
            break;
          case 'textarea':
            (l = Oo(e, l)), (r = Oo(e, r)), (a = []);
            break;
          default:
            typeof l.onClick != 'function' &&
              typeof r.onClick == 'function' &&
              (e.onclick = wi);
        }
        Lo(n, r);
        var f;
        n = null;
        for (k in l)
          if (!r.hasOwnProperty(k) && l.hasOwnProperty(k) && l[k] != null)
            if (k === 'style') {
              var p = l[k];
              for (f in p) p.hasOwnProperty(f) && (n || (n = {}), (n[f] = ''));
            } else
              k !== 'dangerouslySetInnerHTML' &&
                k !== 'children' &&
                k !== 'suppressContentEditableWarning' &&
                k !== 'suppressHydrationWarning' &&
                k !== 'autoFocus' &&
                (c.hasOwnProperty(k)
                  ? a || (a = [])
                  : (a = a || []).push(k, null));
        for (k in r) {
          var m = r[k];
          if (
            ((p = l != null ? l[k] : void 0),
            r.hasOwnProperty(k) && m !== p && (m != null || p != null))
          )
            if (k === 'style')
              if (p) {
                for (f in p)
                  !p.hasOwnProperty(f) ||
                    (m && m.hasOwnProperty(f)) ||
                    (n || (n = {}), (n[f] = ''));
                for (f in m)
                  m.hasOwnProperty(f) &&
                    p[f] !== m[f] &&
                    (n || (n = {}), (n[f] = m[f]));
              } else n || (a || (a = []), a.push(k, n)), (n = m);
            else
              k === 'dangerouslySetInnerHTML'
                ? ((m = m ? m.__html : void 0),
                  (p = p ? p.__html : void 0),
                  m != null && p !== m && (a = a || []).push(k, m))
                : k === 'children'
                  ? (typeof m != 'string' && typeof m != 'number') ||
                    (a = a || []).push(k, '' + m)
                  : k !== 'suppressContentEditableWarning' &&
                    k !== 'suppressHydrationWarning' &&
                    (c.hasOwnProperty(k)
                      ? (m != null && k === 'onScroll' && pe('scroll', e),
                        a || p === m || (a = []))
                      : (a = a || []).push(k, m));
        }
        n && (a = a || []).push('style', n);
        var k = a;
        (t.updateQueue = k) && (t.flags |= 4);
      }
    }),
    (Vc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Dr(e, t) {
    if (!ve)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Dh(e, t, n) {
    var r = t.pendingProps;
    switch ((ws(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Me(t), null;
      case 1:
        return Qe(t.type) && Si(), Me(t), null;
      case 3:
        return (
          (r = t.stateNode),
          qn(),
          he(We),
          he(Fe),
          js(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ni(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), ht !== null && (ul(ht), (ht = null)))),
          Js(e, t),
          Me(t),
          null
        );
      case 5:
        Ps(t);
        var l = wn(Lr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Uc(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return Me(t), null;
          }
          if (((e = wn(Ct.current)), Ni(t))) {
            (r = t.stateNode), (n = t.type);
            var a = t.memoizedProps;
            switch (((r[kt] = t), (r[Nr] = a), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                pe('cancel', r), pe('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                pe('load', r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < kr.length; l++) pe(kr[l], r);
                break;
              case 'source':
                pe('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                pe('error', r), pe('load', r);
                break;
              case 'details':
                pe('toggle', r);
                break;
              case 'input':
                Eu(r, a), pe('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!a.multiple }),
                  pe('invalid', r);
                break;
              case 'textarea':
                _u(r, a), pe('invalid', r);
            }
            Lo(n, a), (l = null);
            for (var f in a)
              if (a.hasOwnProperty(f)) {
                var p = a[f];
                f === 'children'
                  ? typeof p == 'string'
                    ? r.textContent !== p &&
                      (a.suppressHydrationWarning !== !0 &&
                        gi(r.textContent, p, e),
                      (l = ['children', p]))
                    : typeof p == 'number' &&
                      r.textContent !== '' + p &&
                      (a.suppressHydrationWarning !== !0 &&
                        gi(r.textContent, p, e),
                      (l = ['children', '' + p]))
                  : c.hasOwnProperty(f) &&
                    p != null &&
                    f === 'onScroll' &&
                    pe('scroll', r);
              }
            switch (n) {
              case 'input':
                Xr(r), Cu(r, a, !0);
                break;
              case 'textarea':
                Xr(r), Tu(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof a.onClick == 'function' && (r.onclick = wi);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (f = l.nodeType === 9 ? l : l.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = Ru(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = f.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                    ? (e = f.createElement(n, { is: r.is }))
                    : ((e = f.createElement(n)),
                      n === 'select' &&
                        ((f = e),
                        r.multiple
                          ? (f.multiple = !0)
                          : r.size && (f.size = r.size)))
                : (e = f.createElementNS(e, n)),
              (e[kt] = t),
              (e[Nr] = r),
              $c(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((f = jo(n, r)), n)) {
                case 'dialog':
                  pe('cancel', e), pe('close', e), (l = r);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  pe('load', e), (l = r);
                  break;
                case 'video':
                case 'audio':
                  for (l = 0; l < kr.length; l++) pe(kr[l], e);
                  l = r;
                  break;
                case 'source':
                  pe('error', e), (l = r);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  pe('error', e), pe('load', e), (l = r);
                  break;
                case 'details':
                  pe('toggle', e), (l = r);
                  break;
                case 'input':
                  Eu(e, r), (l = No(e, r)), pe('invalid', e);
                  break;
                case 'option':
                  l = r;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = F({}, r, { value: void 0 })),
                    pe('invalid', e);
                  break;
                case 'textarea':
                  _u(e, r), (l = Oo(e, r)), pe('invalid', e);
                  break;
                default:
                  l = r;
              }
              Lo(n, l), (p = l);
              for (a in p)
                if (p.hasOwnProperty(a)) {
                  var m = p[a];
                  a === 'style'
                    ? Lu(e, m)
                    : a === 'dangerouslySetInnerHTML'
                      ? ((m = m ? m.__html : void 0), m != null && Ou(e, m))
                      : a === 'children'
                        ? typeof m == 'string'
                          ? (n !== 'textarea' || m !== '') && ir(e, m)
                          : typeof m == 'number' && ir(e, '' + m)
                        : a !== 'suppressContentEditableWarning' &&
                          a !== 'suppressHydrationWarning' &&
                          a !== 'autoFocus' &&
                          (c.hasOwnProperty(a)
                            ? m != null && a === 'onScroll' && pe('scroll', e)
                            : m != null && ne(e, a, m, f));
                }
              switch (n) {
                case 'input':
                  Xr(e), Cu(e, r, !1);
                  break;
                case 'textarea':
                  Xr(e), Tu(e);
                  break;
                case 'option':
                  r.value != null && e.setAttribute('value', '' + ue(r.value));
                  break;
                case 'select':
                  (e.multiple = !!r.multiple),
                    (a = r.value),
                    a != null
                      ? Rn(e, !!r.multiple, a, !1)
                      : r.defaultValue != null &&
                        Rn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == 'function' && (e.onclick = wi);
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus;
                  break e;
                case 'img':
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Me(t), null;
      case 6:
        if (e && t.stateNode != null) Vc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(o(166));
          if (((n = wn(Lr.current)), wn(Ct.current), Ni(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[kt] = t),
              (a = r.nodeValue !== n) && ((e = et), e !== null))
            )
              switch (e.tag) {
                case 3:
                  gi(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    gi(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[kt] = t),
              (t.stateNode = r);
        }
        return Me(t), null;
      case 13:
        if (
          (he(ge),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ve && tt !== null && t.mode & 1 && !(t.flags & 128))
            Wa(), Hn(), (t.flags |= 98560), (a = !1);
          else if (((a = Ni(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (
                ((a = t.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(o(317));
              a[kt] = t;
            } else
              Hn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Me(t), (a = !1);
          } else ht !== null && (ul(ht), (ht = null)), (a = !0);
          if (!a) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ge.current & 1 ? Pe === 0 && (Pe = 3) : fl())),
            t.updateQueue !== null && (t.flags |= 4),
            Me(t),
            null);
      case 4:
        return (
          qn(),
          Js(e, t),
          e === null && Cr(t.stateNode.containerInfo),
          Me(t),
          null
        );
      case 10:
        return _s(t.type._context), Me(t), null;
      case 17:
        return Qe(t.type) && Si(), Me(t), null;
      case 19:
        if ((he(ge), (a = t.memoizedState), a === null)) return Me(t), null;
        if (((r = (t.flags & 128) !== 0), (f = a.rendering), f === null))
          if (r) Dr(a, !1);
          else {
            if (Pe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((f = ji(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      Dr(a, !1),
                      r = f.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (a = n),
                      (e = r),
                      (a.flags &= 14680066),
                      (f = a.alternate),
                      f === null
                        ? ((a.childLanes = 0),
                          (a.lanes = e),
                          (a.child = null),
                          (a.subtreeFlags = 0),
                          (a.memoizedProps = null),
                          (a.memoizedState = null),
                          (a.updateQueue = null),
                          (a.dependencies = null),
                          (a.stateNode = null))
                        : ((a.childLanes = f.childLanes),
                          (a.lanes = f.lanes),
                          (a.child = f.child),
                          (a.subtreeFlags = 0),
                          (a.deletions = null),
                          (a.memoizedProps = f.memoizedProps),
                          (a.memoizedState = f.memoizedState),
                          (a.updateQueue = f.updateQueue),
                          (a.type = f.type),
                          (e = f.dependencies),
                          (a.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return de(ge, (ge.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null &&
              _e() > Jn &&
              ((t.flags |= 128), (r = !0), Dr(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ji(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Dr(a, !0),
                a.tail === null &&
                  a.tailMode === 'hidden' &&
                  !f.alternate &&
                  !ve)
              )
                return Me(t), null;
            } else
              2 * _e() - a.renderingStartTime > Jn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Dr(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((n = a.last),
              n !== null ? (n.sibling = f) : (t.child = f),
              (a.last = f));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = _e()),
            (t.sibling = null),
            (n = ge.current),
            de(ge, r ? (n & 1) | 2 : n & 1),
            t)
          : (Me(t), null);
      case 22:
      case 23:
        return (
          cl(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? nt & 1073741824 &&
              (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Me(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Fh(e, t) {
    switch ((ws(t), t.tag)) {
      case 1:
        return (
          Qe(t.type) && Si(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          qn(),
          he(We),
          he(Fe),
          js(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ps(t), null;
      case 13:
        if (
          (he(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Hn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return he(ge), null;
      case 4:
        return qn(), null;
      case 10:
        return _s(t.type._context), null;
      case 22:
      case 23:
        return cl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ui = !1,
    $e = !1,
    Bh = typeof WeakSet == 'function' ? WeakSet : Set,
    D = null;
  function Xn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          Ce(e, t, r);
        }
      else n.current = null;
  }
  function Zs(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var Hc = !1;
  function Mh(e, t) {
    if (((cs = li), (e = Sa()), ns(e))) {
      if ('selectionStart' in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              a = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, a.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0,
              p = -1,
              m = -1,
              k = 0,
              O = 0,
              L = e,
              T = null;
            t: for (;;) {
              for (
                var A;
                L !== n || (l !== 0 && L.nodeType !== 3) || (p = f + l),
                  L !== a || (r !== 0 && L.nodeType !== 3) || (m = f + r),
                  L.nodeType === 3 && (f += L.nodeValue.length),
                  (A = L.firstChild) !== null;

              )
                (T = L), (L = A);
              for (;;) {
                if (L === e) break t;
                if (
                  (T === n && ++k === l && (p = f),
                  T === a && ++O === r && (m = f),
                  (A = L.nextSibling) !== null)
                )
                  break;
                (L = T), (T = L.parentNode);
              }
              L = A;
            }
            n = p === -1 || m === -1 ? null : { start: p, end: m };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      fs = { focusedElem: e, selectionRange: n }, li = !1, D = t;
      D !== null;

    )
      if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (D = e);
      else
        for (; D !== null; ) {
          t = D;
          try {
            var B = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (B !== null) {
                    var M = B.memoizedProps,
                      Ne = B.memoizedState,
                      x = t.stateNode,
                      y = x.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? M : mt(t.type, M),
                        Ne
                      );
                    x.__reactInternalSnapshotBeforeUpdate = y;
                  }
                  break;
                case 3:
                  var E = t.stateNode.containerInfo;
                  E.nodeType === 1
                    ? (E.textContent = '')
                    : E.nodeType === 9 &&
                      E.documentElement &&
                      E.removeChild(E.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (I) {
            Ce(t, t.return, I);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (D = e);
            break;
          }
          D = t.return;
        }
    return (B = Hc), (Hc = !1), B;
  }
  function Fr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var a = l.destroy;
          (l.destroy = void 0), a !== void 0 && Zs(t, n, a);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Vi(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function bs(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Kc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Kc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[kt],
          delete t[Nr],
          delete t[ms],
          delete t[Sh],
          delete t[Eh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Wc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Qc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function el(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = wi));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (el(e, t, n), e = e.sibling; e !== null; )
        el(e, t, n), (e = e.sibling);
  }
  function tl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (tl(e, t, n), e = e.sibling; e !== null; )
        tl(e, t, n), (e = e.sibling);
  }
  var Ae = null,
    yt = !1;
  function en(e, t, n) {
    for (n = n.child; n !== null; ) qc(e, t, n), (n = n.sibling);
  }
  function qc(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == 'function')
      try {
        Et.onCommitFiberUnmount(ti, n);
      } catch {}
    switch (n.tag) {
      case 5:
        $e || Xn(n, t);
      case 6:
        var r = Ae,
          l = yt;
        (Ae = null),
          en(e, t, n),
          (Ae = r),
          (yt = l),
          Ae !== null &&
            (yt
              ? ((e = Ae),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ae.removeChild(n.stateNode));
        break;
      case 18:
        Ae !== null &&
          (yt
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8
                ? hs(e.parentNode, n)
                : e.nodeType === 1 && hs(e, n),
              mr(e))
            : hs(Ae, n.stateNode));
        break;
      case 4:
        (r = Ae),
          (l = yt),
          (Ae = n.stateNode.containerInfo),
          (yt = !0),
          en(e, t, n),
          (Ae = r),
          (yt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !$e &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var a = l,
              f = a.destroy;
            (a = a.tag),
              f !== void 0 && (a & 2 || a & 4) && Zs(n, t, f),
              (l = l.next);
          } while (l !== r);
        }
        en(e, t, n);
        break;
      case 1:
        if (
          !$e &&
          (Xn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == 'function')
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (p) {
            Ce(n, t, p);
          }
        en(e, t, n);
        break;
      case 21:
        en(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? (($e = (r = $e) || n.memoizedState !== null), en(e, t, n), ($e = r))
          : en(e, t, n);
        break;
      default:
        en(e, t, n);
    }
  }
  function Yc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Bh()),
        t.forEach(function (r) {
          var l = Yh.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function vt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var a = e,
            f = t,
            p = f;
          e: for (; p !== null; ) {
            switch (p.tag) {
              case 5:
                (Ae = p.stateNode), (yt = !1);
                break e;
              case 3:
                (Ae = p.stateNode.containerInfo), (yt = !0);
                break e;
              case 4:
                (Ae = p.stateNode.containerInfo), (yt = !0);
                break e;
            }
            p = p.return;
          }
          if (Ae === null) throw Error(o(160));
          qc(a, f, l), (Ae = null), (yt = !1);
          var m = l.alternate;
          m !== null && (m.return = null), (l.return = null);
        } catch (k) {
          Ce(l, t, k);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Xc(t, e), (t = t.sibling);
  }
  function Xc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((vt(t, e), Nt(e), r & 4)) {
          try {
            Fr(3, e, e.return), Vi(3, e);
          } catch (M) {
            Ce(e, e.return, M);
          }
          try {
            Fr(5, e, e.return);
          } catch (M) {
            Ce(e, e.return, M);
          }
        }
        break;
      case 1:
        vt(t, e), Nt(e), r & 512 && n !== null && Xn(n, n.return);
        break;
      case 5:
        if (
          (vt(t, e),
          Nt(e),
          r & 512 && n !== null && Xn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            ir(l, '');
          } catch (M) {
            Ce(e, e.return, M);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var a = e.memoizedProps,
            f = n !== null ? n.memoizedProps : a,
            p = e.type,
            m = e.updateQueue;
          if (((e.updateQueue = null), m !== null))
            try {
              p === 'input' && a.type === 'radio' && a.name != null && ku(l, a),
                jo(p, f);
              var k = jo(p, a);
              for (f = 0; f < m.length; f += 2) {
                var O = m[f],
                  L = m[f + 1];
                O === 'style'
                  ? Lu(l, L)
                  : O === 'dangerouslySetInnerHTML'
                    ? Ou(l, L)
                    : O === 'children'
                      ? ir(l, L)
                      : ne(l, O, L, k);
              }
              switch (p) {
                case 'input':
                  To(l, a);
                  break;
                case 'textarea':
                  Nu(l, a);
                  break;
                case 'select':
                  var T = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!a.multiple;
                  var A = a.value;
                  A != null
                    ? Rn(l, !!a.multiple, A, !1)
                    : T !== !!a.multiple &&
                      (a.defaultValue != null
                        ? Rn(l, !!a.multiple, a.defaultValue, !0)
                        : Rn(l, !!a.multiple, a.multiple ? [] : '', !1));
              }
              l[Nr] = a;
            } catch (M) {
              Ce(e, e.return, M);
            }
        }
        break;
      case 6:
        if ((vt(t, e), Nt(e), r & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (l = e.stateNode), (a = e.memoizedProps);
          try {
            l.nodeValue = a;
          } catch (M) {
            Ce(e, e.return, M);
          }
        }
        break;
      case 3:
        if (
          (vt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            mr(t.containerInfo);
          } catch (M) {
            Ce(e, e.return, M);
          }
        break;
      case 4:
        vt(t, e), Nt(e);
        break;
      case 13:
        vt(t, e),
          Nt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((a = l.memoizedState !== null),
            (l.stateNode.isHidden = a),
            !a ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (il = _e())),
          r & 4 && Yc(e);
        break;
      case 22:
        if (
          ((O = n !== null && n.memoizedState !== null),
          e.mode & 1 ? (($e = (k = $e) || O), vt(t, e), ($e = k)) : vt(t, e),
          Nt(e),
          r & 8192)
        ) {
          if (
            ((k = e.memoizedState !== null),
            (e.stateNode.isHidden = k) && !O && e.mode & 1)
          )
            for (D = e, O = e.child; O !== null; ) {
              for (L = D = O; D !== null; ) {
                switch (((T = D), (A = T.child), T.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Fr(4, T, T.return);
                    break;
                  case 1:
                    Xn(T, T.return);
                    var B = T.stateNode;
                    if (typeof B.componentWillUnmount == 'function') {
                      (r = T), (n = T.return);
                      try {
                        (t = r),
                          (B.props = t.memoizedProps),
                          (B.state = t.memoizedState),
                          B.componentWillUnmount();
                      } catch (M) {
                        Ce(r, n, M);
                      }
                    }
                    break;
                  case 5:
                    Xn(T, T.return);
                    break;
                  case 22:
                    if (T.memoizedState !== null) {
                      Zc(L);
                      continue;
                    }
                }
                A !== null ? ((A.return = T), (D = A)) : Zc(L);
              }
              O = O.sibling;
            }
          e: for (O = null, L = e; ; ) {
            if (L.tag === 5) {
              if (O === null) {
                O = L;
                try {
                  (l = L.stateNode),
                    k
                      ? ((a = l.style),
                        typeof a.setProperty == 'function'
                          ? a.setProperty('display', 'none', 'important')
                          : (a.display = 'none'))
                      : ((p = L.stateNode),
                        (m = L.memoizedProps.style),
                        (f =
                          m != null && m.hasOwnProperty('display')
                            ? m.display
                            : null),
                        (p.style.display = Pu('display', f)));
                } catch (M) {
                  Ce(e, e.return, M);
                }
              }
            } else if (L.tag === 6) {
              if (O === null)
                try {
                  L.stateNode.nodeValue = k ? '' : L.memoizedProps;
                } catch (M) {
                  Ce(e, e.return, M);
                }
            } else if (
              ((L.tag !== 22 && L.tag !== 23) ||
                L.memoizedState === null ||
                L === e) &&
              L.child !== null
            ) {
              (L.child.return = L), (L = L.child);
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              O === L && (O = null), (L = L.return);
            }
            O === L && (O = null),
              (L.sibling.return = L.return),
              (L = L.sibling);
          }
        }
        break;
      case 19:
        vt(t, e), Nt(e), r & 4 && Yc(e);
        break;
      case 21:
        break;
      default:
        vt(t, e), Nt(e);
    }
  }
  function Nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Wc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (ir(l, ''), (r.flags &= -33));
            var a = Qc(e);
            tl(e, a, l);
            break;
          case 3:
          case 4:
            var f = r.stateNode.containerInfo,
              p = Qc(e);
            el(e, p, f);
            break;
          default:
            throw Error(o(161));
        }
      } catch (m) {
        Ce(e, e.return, m);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function $h(e, t, n) {
    (D = e), Gc(e);
  }
  function Gc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
      var l = D,
        a = l.child;
      if (l.tag === 22 && r) {
        var f = l.memoizedState !== null || Ui;
        if (!f) {
          var p = l.alternate,
            m = (p !== null && p.memoizedState !== null) || $e;
          p = Ui;
          var k = $e;
          if (((Ui = f), ($e = m) && !k))
            for (D = l; D !== null; )
              (f = D),
                (m = f.child),
                f.tag === 22 && f.memoizedState !== null
                  ? bc(l)
                  : m !== null
                    ? ((m.return = f), (D = m))
                    : bc(l);
          for (; a !== null; ) (D = a), Gc(a), (a = a.sibling);
          (D = l), (Ui = p), ($e = k);
        }
        Jc(e);
      } else
        l.subtreeFlags & 8772 && a !== null ? ((a.return = l), (D = a)) : Jc(e);
    }
  }
  function Jc(e) {
    for (; D !== null; ) {
      var t = D;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                $e || Vi(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !$e)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : mt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var a = t.updateQueue;
                a !== null && Za(t, a, r);
                break;
              case 3:
                var f = t.updateQueue;
                if (f !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Za(t, f, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var m = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      m.autoFocus && n.focus();
                      break;
                    case 'img':
                      m.src && (n.src = m.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var k = t.alternate;
                  if (k !== null) {
                    var O = k.memoizedState;
                    if (O !== null) {
                      var L = O.dehydrated;
                      L !== null && mr(L);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          $e || (t.flags & 512 && bs(t));
        } catch (T) {
          Ce(t, t.return, T);
        }
      }
      if (t === e) {
        D = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (D = n);
        break;
      }
      D = t.return;
    }
  }
  function Zc(e) {
    for (; D !== null; ) {
      var t = D;
      if (t === e) {
        D = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (D = n);
        break;
      }
      D = t.return;
    }
  }
  function bc(e) {
    for (; D !== null; ) {
      var t = D;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Vi(4, t);
            } catch (m) {
              Ce(t, n, m);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == 'function') {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (m) {
                Ce(t, l, m);
              }
            }
            var a = t.return;
            try {
              bs(t);
            } catch (m) {
              Ce(t, a, m);
            }
            break;
          case 5:
            var f = t.return;
            try {
              bs(t);
            } catch (m) {
              Ce(t, f, m);
            }
        }
      } catch (m) {
        Ce(t, t.return, m);
      }
      if (t === e) {
        D = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        (p.return = t.return), (D = p);
        break;
      }
      D = t.return;
    }
  }
  var Uh = Math.ceil,
    Hi = ee.ReactCurrentDispatcher,
    nl = ee.ReactCurrentOwner,
    ut = ee.ReactCurrentBatchConfig,
    re = 0,
    Ie = null,
    Te = null,
    De = 0,
    nt = 0,
    Gn = Xt(0),
    Pe = 0,
    Br = null,
    Sn = 0,
    Ki = 0,
    rl = 0,
    Mr = null,
    Ye = null,
    il = 0,
    Jn = 1 / 0,
    Ft = null,
    Wi = !1,
    ol = null,
    tn = null,
    Qi = !1,
    nn = null,
    qi = 0,
    $r = 0,
    sl = null,
    Yi = -1,
    Xi = 0;
  function Ve() {
    return re & 6 ? _e() : Yi !== -1 ? Yi : (Yi = _e());
  }
  function rn(e) {
    return e.mode & 1
      ? re & 2 && De !== 0
        ? De & -De
        : Ch.transition !== null
          ? (Xi === 0 && (Xi = Qu()), Xi)
          : ((e = ae),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ta(e.type))),
            e)
      : 1;
  }
  function gt(e, t, n, r) {
    if (50 < $r) throw (($r = 0), (sl = null), Error(o(185)));
    cr(e, n, r),
      (!(re & 2) || e !== Ie) &&
        (e === Ie && (!(re & 2) && (Ki |= n), Pe === 4 && on(e, De)),
        Xe(e, r),
        n === 1 &&
          re === 0 &&
          !(t.mode & 1) &&
          ((Jn = _e() + 500), ki && Jt()));
  }
  function Xe(e, t) {
    var n = e.callbackNode;
    Cp(e, t);
    var r = ii(e, e === Ie ? De : 0);
    if (r === 0)
      n !== null && Hu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Hu(n), t === 1))
        e.tag === 0 ? kh(tf.bind(null, e)) : $a(tf.bind(null, e)),
          wh(function () {
            !(re & 6) && Jt();
          }),
          (n = null);
      else {
        switch (qu(r)) {
          case 1:
            n = Mo;
            break;
          case 4:
            n = Ku;
            break;
          case 16:
            n = ei;
            break;
          case 536870912:
            n = Wu;
            break;
          default:
            n = ei;
        }
        n = cf(n, ef.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function ef(e, t) {
    if (((Yi = -1), (Xi = 0), re & 6)) throw Error(o(327));
    var n = e.callbackNode;
    if (Zn() && e.callbackNode !== n) return null;
    var r = ii(e, e === Ie ? De : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Gi(e, r);
    else {
      t = r;
      var l = re;
      re |= 2;
      var a = rf();
      (Ie !== e || De !== t) && ((Ft = null), (Jn = _e() + 500), kn(e, t));
      do
        try {
          Kh();
          break;
        } catch (p) {
          nf(e, p);
        }
      while (!0);
      Cs(),
        (Hi.current = a),
        (re = l),
        Te !== null ? (t = 0) : ((Ie = null), (De = 0), (t = Pe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = $o(e)), l !== 0 && ((r = l), (t = ll(e, l)))),
        t === 1)
      )
        throw ((n = Br), kn(e, 0), on(e, r), Xe(e, _e()), n);
      if (t === 6) on(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !Vh(l) &&
            ((t = Gi(e, r)),
            t === 2 && ((a = $o(e)), a !== 0 && ((r = a), (t = ll(e, a)))),
            t === 1))
        )
          throw ((n = Br), kn(e, 0), on(e, r), Xe(e, _e()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Cn(e, Ye, Ft);
            break;
          case 3:
            if (
              (on(e, r),
              (r & 130023424) === r && ((t = il + 500 - _e()), 10 < t))
            ) {
              if (ii(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ve(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = ps(Cn.bind(null, e, Ye, Ft), t);
              break;
            }
            Cn(e, Ye, Ft);
            break;
          case 4:
            if ((on(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var f = 31 - dt(r);
              (a = 1 << f), (f = t[f]), f > l && (l = f), (r &= ~a);
            }
            if (
              ((r = l),
              (r = _e() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Uh(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ps(Cn.bind(null, e, Ye, Ft), r);
              break;
            }
            Cn(e, Ye, Ft);
            break;
          case 5:
            Cn(e, Ye, Ft);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Xe(e, _e()), e.callbackNode === n ? ef.bind(null, e) : null;
  }
  function ll(e, t) {
    var n = Mr;
    return (
      e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
      (e = Gi(e, t)),
      e !== 2 && ((t = Ye), (Ye = n), t !== null && ul(t)),
      e
    );
  }
  function ul(e) {
    Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
  }
  function Vh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              a = l.getSnapshot;
            l = l.value;
            try {
              if (!pt(a(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function on(e, t) {
    for (
      t &= ~rl,
        t &= ~Ki,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - dt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function tf(e) {
    if (re & 6) throw Error(o(327));
    Zn();
    var t = ii(e, 0);
    if (!(t & 1)) return Xe(e, _e()), null;
    var n = Gi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = $o(e);
      r !== 0 && ((t = r), (n = ll(e, r)));
    }
    if (n === 1) throw ((n = Br), kn(e, 0), on(e, t), Xe(e, _e()), n);
    if (n === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Cn(e, Ye, Ft),
      Xe(e, _e()),
      null
    );
  }
  function al(e, t) {
    var n = re;
    re |= 1;
    try {
      return e(t);
    } finally {
      (re = n), re === 0 && ((Jn = _e() + 500), ki && Jt());
    }
  }
  function En(e) {
    nn !== null && nn.tag === 0 && !(re & 6) && Zn();
    var t = re;
    re |= 1;
    var n = ut.transition,
      r = ae;
    try {
      if (((ut.transition = null), (ae = 1), e)) return e();
    } finally {
      (ae = r), (ut.transition = n), (re = t), !(re & 6) && Jt();
    }
  }
  function cl() {
    (nt = Gn.current), he(Gn);
  }
  function kn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), gh(n)), Te !== null))
      for (n = Te.return; n !== null; ) {
        var r = n;
        switch ((ws(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Si();
            break;
          case 3:
            qn(), he(We), he(Fe), js();
            break;
          case 5:
            Ps(r);
            break;
          case 4:
            qn();
            break;
          case 13:
            he(ge);
            break;
          case 19:
            he(ge);
            break;
          case 10:
            _s(r.type._context);
            break;
          case 22:
          case 23:
            cl();
        }
        n = n.return;
      }
    if (
      ((Ie = e),
      (Te = e = sn(e.current, null)),
      (De = nt = t),
      (Pe = 0),
      (Br = null),
      (rl = Ki = Sn = 0),
      (Ye = Mr = null),
      gn !== null)
    ) {
      for (t = 0; t < gn.length; t++)
        if (((n = gn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            a = n.pending;
          if (a !== null) {
            var f = a.next;
            (a.next = l), (r.next = f);
          }
          n.pending = r;
        }
      gn = null;
    }
    return e;
  }
  function nf(e, t) {
    do {
      var n = Te;
      try {
        if ((Cs(), (Ii.current = Fi), zi)) {
          for (var r = we.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          zi = !1;
        }
        if (
          ((xn = 0),
          (je = Oe = we = null),
          (jr = !1),
          (Ir = 0),
          (nl.current = null),
          n === null || n.return === null)
        ) {
          (Pe = 1), (Br = t), (Te = null);
          break;
        }
        e: {
          var a = e,
            f = n.return,
            p = n,
            m = t;
          if (
            ((t = De),
            (p.flags |= 32768),
            m !== null && typeof m == 'object' && typeof m.then == 'function')
          ) {
            var k = m,
              O = p,
              L = O.tag;
            if (!(O.mode & 1) && (L === 0 || L === 11 || L === 15)) {
              var T = O.alternate;
              T
                ? ((O.updateQueue = T.updateQueue),
                  (O.memoizedState = T.memoizedState),
                  (O.lanes = T.lanes))
                : ((O.updateQueue = null), (O.memoizedState = null));
            }
            var A = Tc(f);
            if (A !== null) {
              (A.flags &= -257),
                Rc(A, f, p, a, t),
                A.mode & 1 && Nc(a, k, t),
                (t = A),
                (m = k);
              var B = t.updateQueue;
              if (B === null) {
                var M = new Set();
                M.add(m), (t.updateQueue = M);
              } else B.add(m);
              break e;
            } else {
              if (!(t & 1)) {
                Nc(a, k, t), fl();
                break e;
              }
              m = Error(o(426));
            }
          } else if (ve && p.mode & 1) {
            var Ne = Tc(f);
            if (Ne !== null) {
              !(Ne.flags & 65536) && (Ne.flags |= 256),
                Rc(Ne, f, p, a, t),
                Es(Yn(m, p));
              break e;
            }
          }
          (a = m = Yn(m, p)),
            Pe !== 4 && (Pe = 2),
            Mr === null ? (Mr = [a]) : Mr.push(a),
            (a = f);
          do {
            switch (a.tag) {
              case 3:
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var x = Cc(a, m, t);
                Ja(a, x);
                break e;
              case 1:
                p = m;
                var y = a.type,
                  E = a.stateNode;
                if (
                  !(a.flags & 128) &&
                  (typeof y.getDerivedStateFromError == 'function' ||
                    (E !== null &&
                      typeof E.componentDidCatch == 'function' &&
                      (tn === null || !tn.has(E))))
                ) {
                  (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                  var I = _c(a, p, t);
                  Ja(a, I);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        sf(n);
      } catch (U) {
        (t = U), Te === n && n !== null && (Te = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rf() {
    var e = Hi.current;
    return (Hi.current = Fi), e === null ? Fi : e;
  }
  function fl() {
    (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
      Ie === null || (!(Sn & 268435455) && !(Ki & 268435455)) || on(Ie, De);
  }
  function Gi(e, t) {
    var n = re;
    re |= 2;
    var r = rf();
    (Ie !== e || De !== t) && ((Ft = null), kn(e, t));
    do
      try {
        Hh();
        break;
      } catch (l) {
        nf(e, l);
      }
    while (!0);
    if ((Cs(), (re = n), (Hi.current = r), Te !== null)) throw Error(o(261));
    return (Ie = null), (De = 0), Pe;
  }
  function Hh() {
    for (; Te !== null; ) of(Te);
  }
  function Kh() {
    for (; Te !== null && !mp(); ) of(Te);
  }
  function of(e) {
    var t = af(e.alternate, e, nt);
    (e.memoizedProps = e.pendingProps),
      t === null ? sf(e) : (Te = t),
      (nl.current = null);
  }
  function sf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Fh(n, t)), n !== null)) {
          (n.flags &= 32767), (Te = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Pe = 6), (Te = null);
          return;
        }
      } else if (((n = Dh(n, t, nt)), n !== null)) {
        Te = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function Cn(e, t, n) {
    var r = ae,
      l = ut.transition;
    try {
      (ut.transition = null), (ae = 1), Wh(e, t, n, r);
    } finally {
      (ut.transition = l), (ae = r);
    }
    return null;
  }
  function Wh(e, t, n, r) {
    do Zn();
    while (nn !== null);
    if (re & 6) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var a = n.lanes | n.childLanes;
    if (
      (_p(e, a),
      e === Ie && ((Te = Ie = null), (De = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Qi ||
        ((Qi = !0),
        cf(ei, function () {
          return Zn(), null;
        })),
      (a = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || a)
    ) {
      (a = ut.transition), (ut.transition = null);
      var f = ae;
      ae = 1;
      var p = re;
      (re |= 4),
        (nl.current = null),
        Mh(e, n),
        Xc(n, e),
        fh(fs),
        (li = !!cs),
        (fs = cs = null),
        (e.current = n),
        $h(n),
        yp(),
        (re = p),
        (ae = f),
        (ut.transition = a);
    } else e.current = n;
    if (
      (Qi && ((Qi = !1), (nn = e), (qi = l)),
      (a = e.pendingLanes),
      a === 0 && (tn = null),
      wp(n.stateNode),
      Xe(e, _e()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Wi) throw ((Wi = !1), (e = ol), (ol = null), e);
    return (
      qi & 1 && e.tag !== 0 && Zn(),
      (a = e.pendingLanes),
      a & 1 ? (e === sl ? $r++ : (($r = 0), (sl = e))) : ($r = 0),
      Jt(),
      null
    );
  }
  function Zn() {
    if (nn !== null) {
      var e = qu(qi),
        t = ut.transition,
        n = ae;
      try {
        if (((ut.transition = null), (ae = 16 > e ? 16 : e), nn === null))
          var r = !1;
        else {
          if (((e = nn), (nn = null), (qi = 0), re & 6)) throw Error(o(331));
          var l = re;
          for (re |= 4, D = e.current; D !== null; ) {
            var a = D,
              f = a.child;
            if (D.flags & 16) {
              var p = a.deletions;
              if (p !== null) {
                for (var m = 0; m < p.length; m++) {
                  var k = p[m];
                  for (D = k; D !== null; ) {
                    var O = D;
                    switch (O.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fr(8, O, a);
                    }
                    var L = O.child;
                    if (L !== null) (L.return = O), (D = L);
                    else
                      for (; D !== null; ) {
                        O = D;
                        var T = O.sibling,
                          A = O.return;
                        if ((Kc(O), O === k)) {
                          D = null;
                          break;
                        }
                        if (T !== null) {
                          (T.return = A), (D = T);
                          break;
                        }
                        D = A;
                      }
                  }
                }
                var B = a.alternate;
                if (B !== null) {
                  var M = B.child;
                  if (M !== null) {
                    B.child = null;
                    do {
                      var Ne = M.sibling;
                      (M.sibling = null), (M = Ne);
                    } while (M !== null);
                  }
                }
                D = a;
              }
            }
            if (a.subtreeFlags & 2064 && f !== null) (f.return = a), (D = f);
            else
              e: for (; D !== null; ) {
                if (((a = D), a.flags & 2048))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fr(9, a, a.return);
                  }
                var x = a.sibling;
                if (x !== null) {
                  (x.return = a.return), (D = x);
                  break e;
                }
                D = a.return;
              }
          }
          var y = e.current;
          for (D = y; D !== null; ) {
            f = D;
            var E = f.child;
            if (f.subtreeFlags & 2064 && E !== null) (E.return = f), (D = E);
            else
              e: for (f = y; D !== null; ) {
                if (((p = D), p.flags & 2048))
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Vi(9, p);
                    }
                  } catch (U) {
                    Ce(p, p.return, U);
                  }
                if (p === f) {
                  D = null;
                  break e;
                }
                var I = p.sibling;
                if (I !== null) {
                  (I.return = p.return), (D = I);
                  break e;
                }
                D = p.return;
              }
          }
          if (
            ((re = l),
            Jt(),
            Et && typeof Et.onPostCommitFiberRoot == 'function')
          )
            try {
              Et.onPostCommitFiberRoot(ti, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ae = n), (ut.transition = t);
      }
    }
    return !1;
  }
  function lf(e, t, n) {
    (t = Yn(n, t)),
      (t = Cc(e, t, 1)),
      (e = bt(e, t, 1)),
      (t = Ve()),
      e !== null && (cr(e, 1, t), Xe(e, t));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) lf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          lf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (tn === null || !tn.has(r)))
          ) {
            (e = Yn(n, e)),
              (e = _c(t, e, 1)),
              (t = bt(t, e, 1)),
              (e = Ve()),
              t !== null && (cr(t, 1, e), Xe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Qh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ve()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ie === e &&
        (De & n) === n &&
        (Pe === 4 || (Pe === 3 && (De & 130023424) === De && 500 > _e() - il)
          ? kn(e, 0)
          : (rl |= n)),
      Xe(e, t);
  }
  function uf(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = ri), (ri <<= 1), !(ri & 130023424) && (ri = 4194304))
        : (t = 1));
    var n = Ve();
    (e = zt(e, t)), e !== null && (cr(e, t, n), Xe(e, n));
  }
  function qh(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), uf(e, n);
  }
  function Yh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    r !== null && r.delete(t), uf(e, n);
  }
  var af;
  af = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || We.current) qe = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (qe = !1), Ah(e, t, n);
        qe = !!(e.flags & 131072);
      }
    else (qe = !1), ve && t.flags & 1048576 && Ua(t, _i, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        $i(e, t), (e = t.pendingProps);
        var l = $n(t, Fe.current);
        Qn(t, n), (l = As(null, t, r, e, l, n));
        var a = Ds();
        return (
          (t.flags |= 1),
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Qe(r) ? ((a = !0), Ei(t)) : (a = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Rs(t),
              (l.updater = Bi),
              (t.stateNode = l),
              (l._reactInternals = t),
              Vs(t, r, e, n),
              (t = Qs(null, t, r, !0, a, n)))
            : ((t.tag = 0), ve && a && gs(t), Ue(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            ($i(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Gh(r)),
            (e = mt(r, e)),
            l)
          ) {
            case 0:
              t = Ws(null, t, r, e, n);
              break e;
            case 1:
              t = zc(null, t, r, e, n);
              break e;
            case 11:
              t = Oc(null, t, r, e, n);
              break e;
            case 14:
              t = Pc(null, t, r, mt(r.type, e), n);
              break e;
          }
          throw Error(o(306, r, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          Ws(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          zc(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ac(t), e === null)) throw Error(o(387));
          (r = t.pendingProps),
            (a = t.memoizedState),
            (l = a.element),
            Ga(e, t),
            Li(t, r, null, n);
          var f = t.memoizedState;
          if (((r = f.element), a.isDehydrated))
            if (
              ((a = {
                element: r,
                isDehydrated: !1,
                cache: f.cache,
                pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
                transitions: f.transitions,
              }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              t.flags & 256)
            ) {
              (l = Yn(Error(o(423)), t)), (t = Dc(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Yn(Error(o(424)), t)), (t = Dc(e, t, r, n, l));
              break e;
            } else
              for (
                tt = Yt(t.stateNode.containerInfo.firstChild),
                  et = t,
                  ve = !0,
                  ht = null,
                  n = Ya(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Hn(), r === l)) {
              t = Dt(e, t, n);
              break e;
            }
            Ue(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ba(t),
          e === null && Ss(t),
          (r = t.type),
          (l = t.pendingProps),
          (a = e !== null ? e.memoizedProps : null),
          (f = l.children),
          ds(r, l) ? (f = null) : a !== null && ds(r, a) && (t.flags |= 32),
          Ic(e, t),
          Ue(e, t, f, n),
          t.child
        );
      case 6:
        return e === null && Ss(t), null;
      case 13:
        return Fc(e, t, n);
      case 4:
        return (
          Os(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Kn(t, null, r, n)) : Ue(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          Oc(e, t, r, l, n)
        );
      case 7:
        return Ue(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (a = t.memoizedProps),
            (f = l.value),
            de(Ri, r._currentValue),
            (r._currentValue = f),
            a !== null)
          )
            if (pt(a.value, f)) {
              if (a.children === l.children && !We.current) {
                t = Dt(e, t, n);
                break e;
              }
            } else
              for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                var p = a.dependencies;
                if (p !== null) {
                  f = a.child;
                  for (var m = p.firstContext; m !== null; ) {
                    if (m.context === r) {
                      if (a.tag === 1) {
                        (m = At(-1, n & -n)), (m.tag = 2);
                        var k = a.updateQueue;
                        if (k !== null) {
                          k = k.shared;
                          var O = k.pending;
                          O === null
                            ? (m.next = m)
                            : ((m.next = O.next), (O.next = m)),
                            (k.pending = m);
                        }
                      }
                      (a.lanes |= n),
                        (m = a.alternate),
                        m !== null && (m.lanes |= n),
                        Ns(a.return, n, t),
                        (p.lanes |= n);
                      break;
                    }
                    m = m.next;
                  }
                } else if (a.tag === 10) f = a.type === t.type ? null : a.child;
                else if (a.tag === 18) {
                  if (((f = a.return), f === null)) throw Error(o(341));
                  (f.lanes |= n),
                    (p = f.alternate),
                    p !== null && (p.lanes |= n),
                    Ns(f, n, t),
                    (f = a.sibling);
                } else f = a.child;
                if (f !== null) f.return = a;
                else
                  for (f = a; f !== null; ) {
                    if (f === t) {
                      f = null;
                      break;
                    }
                    if (((a = f.sibling), a !== null)) {
                      (a.return = f.return), (f = a);
                      break;
                    }
                    f = f.return;
                  }
                a = f;
              }
          Ue(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Qn(t, n),
          (l = st(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ue(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = mt(r, t.pendingProps)),
          (l = mt(r.type, l)),
          Pc(e, t, r, l, n)
        );
      case 15:
        return Lc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          $i(e, t),
          (t.tag = 1),
          Qe(r) ? ((e = !0), Ei(t)) : (e = !1),
          Qn(t, n),
          Ec(t, r, l),
          Vs(t, r, l, n),
          Qs(null, t, r, !0, e, n)
        );
      case 19:
        return Mc(e, t, n);
      case 22:
        return jc(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function cf(e, t) {
    return Vu(e, t);
  }
  function Xh(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function at(e, t, n, r) {
    return new Xh(e, t, n, r);
  }
  function dl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Gh(e) {
    if (typeof e == 'function') return dl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === xt)) return 11;
      if (e === St) return 14;
    }
    return 2;
  }
  function sn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = at(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ji(e, t, n, r, l, a) {
    var f = 2;
    if (((r = e), typeof e == 'function')) dl(e) && (f = 1);
    else if (typeof e == 'string') f = 5;
    else
      e: switch (e) {
        case ce:
          return _n(n.children, l, a, t);
        case Le:
          (f = 8), (l |= 8);
          break;
        case Ut:
          return (
            (e = at(12, n, t, l | 2)), (e.elementType = Ut), (e.lanes = a), e
          );
        case Je:
          return (e = at(13, n, t, l)), (e.elementType = Je), (e.lanes = a), e;
        case ft:
          return (e = at(19, n, t, l)), (e.elementType = ft), (e.lanes = a), e;
        case ke:
          return Zi(n, l, a, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Ot:
                f = 10;
                break e;
              case dn:
                f = 9;
                break e;
              case xt:
                f = 11;
                break e;
              case St:
                f = 14;
                break e;
              case Ke:
                (f = 16), (r = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ''));
      }
    return (
      (t = at(f, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = a), t
    );
  }
  function _n(e, t, n, r) {
    return (e = at(7, e, r, t)), (e.lanes = n), e;
  }
  function Zi(e, t, n, r) {
    return (
      (e = at(22, e, r, t)),
      (e.elementType = ke),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function pl(e, t, n) {
    return (e = at(6, e, null, t)), (e.lanes = n), e;
  }
  function hl(e, t, n) {
    return (
      (t = at(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Jh(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Uo(0)),
      (this.expirationTimes = Uo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Uo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ml(e, t, n, r, l, a, f, p, m) {
    return (
      (e = new Jh(e, t, n, p, m)),
      t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
      (a = at(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Rs(a),
      e
    );
  }
  function Zh(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: X,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function ff(e) {
    if (!e) return Gt;
    e = e._reactInternals;
    e: {
      if (pn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Qe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Qe(n)) return Ba(e, n, t);
    }
    return t;
  }
  function df(e, t, n, r, l, a, f, p, m) {
    return (
      (e = ml(n, r, !0, e, l, a, f, p, m)),
      (e.context = ff(null)),
      (n = e.current),
      (r = Ve()),
      (l = rn(n)),
      (a = At(r, l)),
      (a.callback = t ?? null),
      bt(n, a, l),
      (e.current.lanes = l),
      cr(e, l, r),
      Xe(e, r),
      e
    );
  }
  function bi(e, t, n, r) {
    var l = t.current,
      a = Ve(),
      f = rn(l);
    return (
      (n = ff(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = At(a, f)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = bt(l, t, f)),
      e !== null && (gt(e, l, f, a), Pi(e, l, f)),
      f
    );
  }
  function eo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function pf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function yl(e, t) {
    pf(e, t), (e = e.alternate) && pf(e, t);
  }
  var hf =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function vl(e) {
    this._internalRoot = e;
  }
  (to.prototype.render = vl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      bi(e, t, null, null);
    }),
    (to.prototype.unmount = vl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          En(function () {
            bi(null, e, null, null);
          }),
            (t[Pt] = null);
        }
      });
  function to(e) {
    this._internalRoot = e;
  }
  to.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Gu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
      Wt.splice(n, 0, e), n === 0 && bu(e);
    }
  };
  function gl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function no(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function mf() {}
  function bh(e, t, n, r, l) {
    if (l) {
      if (typeof r == 'function') {
        var a = r;
        r = function () {
          var k = eo(f);
          a.call(k);
        };
      }
      var f = df(t, r, e, 0, null, !1, !1, '', mf);
      return (
        (e._reactRootContainer = f),
        (e[Pt] = f.current),
        Cr(e.nodeType === 8 ? e.parentNode : e),
        En(),
        f
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
      var p = r;
      r = function () {
        var k = eo(m);
        p.call(k);
      };
    }
    var m = ml(e, 0, !1, null, null, !1, !1, '', mf);
    return (
      (e._reactRootContainer = m),
      (e[Pt] = m.current),
      Cr(e.nodeType === 8 ? e.parentNode : e),
      En(function () {
        bi(t, m, n, r);
      }),
      m
    );
  }
  function ro(e, t, n, r, l) {
    var a = n._reactRootContainer;
    if (a) {
      var f = a;
      if (typeof l == 'function') {
        var p = l;
        l = function () {
          var m = eo(f);
          p.call(m);
        };
      }
      bi(t, f, e, l);
    } else f = bh(n, t, e, l, r);
    return eo(f);
  }
  (Yu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ar(t.pendingLanes);
          n !== 0 &&
            (Vo(t, n | 1), Xe(t, _e()), !(re & 6) && ((Jn = _e() + 500), Jt()));
        }
        break;
      case 13:
        En(function () {
          var r = zt(e, 1);
          if (r !== null) {
            var l = Ve();
            gt(r, e, 1, l);
          }
        }),
          yl(e, 1);
    }
  }),
    (Ho = function (e) {
      if (e.tag === 13) {
        var t = zt(e, 134217728);
        if (t !== null) {
          var n = Ve();
          gt(t, e, 134217728, n);
        }
        yl(e, 134217728);
      }
    }),
    (Xu = function (e) {
      if (e.tag === 13) {
        var t = rn(e),
          n = zt(e, t);
        if (n !== null) {
          var r = Ve();
          gt(n, e, t, r);
        }
        yl(e, t);
      }
    }),
    (Gu = function () {
      return ae;
    }),
    (Ju = function (e, t) {
      var n = ae;
      try {
        return (ae = e), t();
      } finally {
        ae = n;
      }
    }),
    (Ao = function (e, t, n) {
      switch (t) {
        case 'input':
          if ((To(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = xi(r);
                if (!l) throw Error(o(90));
                Su(r), To(r, l);
              }
            }
          }
          break;
        case 'textarea':
          Nu(e, n);
          break;
        case 'select':
          (t = n.value), t != null && Rn(e, !!n.multiple, t, !1);
      }
    }),
    (Au = al),
    (Du = En);
  var em = { usingClientEntryPoint: !1, Events: [Tr, Bn, xi, Iu, zu, al] },
    Ur = {
      findFiberByHostInstance: hn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    tm = {
      bundleType: Ur.bundleType,
      version: Ur.version,
      rendererPackageName: Ur.rendererPackageName,
      rendererConfig: Ur.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = $u(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ur.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var io = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!io.isDisabled && io.supportsFiber)
      try {
        (ti = io.inject(tm)), (Et = io);
      } catch {}
  }
  return (
    (Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = em),
    (Ge.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!gl(t)) throw Error(o(200));
      return Zh(e, t, null, n);
    }),
    (Ge.createRoot = function (e, t) {
      if (!gl(e)) throw Error(o(299));
      var n = !1,
        r = '',
        l = hf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ml(e, 1, !1, null, null, n, !1, r, l)),
        (e[Pt] = t.current),
        Cr(e.nodeType === 8 ? e.parentNode : e),
        new vl(t)
      );
    }),
    (Ge.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(o(188))
          : ((e = Object.keys(e).join(',')), Error(o(268, e)));
      return (e = $u(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ge.flushSync = function (e) {
      return En(e);
    }),
    (Ge.hydrate = function (e, t, n) {
      if (!no(t)) throw Error(o(200));
      return ro(null, e, t, !0, n);
    }),
    (Ge.hydrateRoot = function (e, t, n) {
      if (!gl(e)) throw Error(o(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        a = '',
        f = hf;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (f = n.onRecoverableError)),
        (t = df(t, null, e, 1, n ?? null, l, !1, a, f)),
        (e[Pt] = t.current),
        Cr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new to(t);
    }),
    (Ge.render = function (e, t, n) {
      if (!no(t)) throw Error(o(200));
      return ro(null, e, t, !1, n);
    }),
    (Ge.unmountComponentAtNode = function (e) {
      if (!no(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (En(function () {
            ro(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Pt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ge.unstable_batchedUpdates = al),
    (Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!no(n)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return ro(e, t, n, !1, r);
    }),
    (Ge.version = '18.3.1-next-f1338f8080-20240426'),
    Ge
  );
}
var kf;
function Wf() {
  if (kf) return Sl.exports;
  kf = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (i) {
        console.error(i);
      }
  }
  return s(), (Sl.exports = um()), Sl.exports;
}
var Cf;
function am() {
  if (Cf) return oo;
  Cf = 1;
  var s = Wf();
  return (oo.createRoot = s.createRoot), (oo.hydrateRoot = s.hydrateRoot), oo;
}
var cm = am(),
  Cl = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var _f;
function fm() {
  return (
    _f ||
      ((_f = 1),
      (function (s) {
        (function () {
          var i = {}.hasOwnProperty;
          function o() {
            for (var d = '', h = 0; h < arguments.length; h++) {
              var v = arguments[h];
              v && (d = c(d, u(v)));
            }
            return d;
          }
          function u(d) {
            if (typeof d == 'string' || typeof d == 'number') return d;
            if (typeof d != 'object') return '';
            if (Array.isArray(d)) return o.apply(null, d);
            if (
              d.toString !== Object.prototype.toString &&
              !d.toString.toString().includes('[native code]')
            )
              return d.toString();
            var h = '';
            for (var v in d) i.call(d, v) && d[v] && (h = c(h, v));
            return h;
          }
          function c(d, h) {
            return h ? (d ? d + ' ' + h : d + h) : d;
          }
          s.exports
            ? ((o.default = o), (s.exports = o))
            : (window.classNames = o);
        })();
      })(Cl)),
    Cl.exports
  );
}
var dm = fm();
const b = Eo(dm);
function Il() {
  return (
    (Il = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var u in o) ({}).hasOwnProperty.call(o, u) && (s[u] = o[u]);
          }
          return s;
        }),
    Il.apply(null, arguments)
  );
}
function Qf(s, i) {
  if (s == null) return {};
  var o = {};
  for (var u in s)
    if ({}.hasOwnProperty.call(s, u)) {
      if (i.includes(u)) continue;
      o[u] = s[u];
    }
  return o;
}
function Nf(s) {
  return 'default' + s.charAt(0).toUpperCase() + s.substr(1);
}
function pm(s) {
  var i = hm(s, 'string');
  return typeof i == 'symbol' ? i : String(i);
}
function hm(s, i) {
  if (typeof s != 'object' || s === null) return s;
  var o = s[Symbol.toPrimitive];
  if (o !== void 0) {
    var u = o.call(s, i);
    if (typeof u != 'object') return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(s);
}
function mm(s, i, o) {
  var u = C.useRef(s !== void 0),
    c = C.useState(i),
    d = c[0],
    h = c[1],
    v = s !== void 0,
    S = u.current;
  return (
    (u.current = v),
    !v && S && d !== i && h(i),
    [
      v ? s : d,
      C.useCallback(
        function (_) {
          for (
            var N = arguments.length, P = new Array(N > 1 ? N - 1 : 0), j = 1;
            j < N;
            j++
          )
            P[j - 1] = arguments[j];
          o && o.apply(void 0, [_].concat(P)), h(_);
        },
        [o]
      ),
    ]
  );
}
function qf(s, i) {
  return Object.keys(i).reduce(function (o, u) {
    var c,
      d = o,
      h = d[Nf(u)],
      v = d[u],
      S = Qf(d, [Nf(u), u].map(pm)),
      _ = i[u],
      N = mm(v, h, s[_]),
      P = N[0],
      j = N[1];
    return Il({}, S, ((c = {}), (c[u] = P), (c[_] = j), c));
  }, s);
}
function zl(s, i) {
  return (
    (zl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, u) {
          return (o.__proto__ = u), o;
        }),
    zl(s, i)
  );
}
function ym(s, i) {
  (s.prototype = Object.create(i.prototype)),
    (s.prototype.constructor = s),
    zl(s, i);
}
const Yf = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  Xf = 'xs',
  Wl = C.createContext({ prefixes: {}, breakpoints: Yf, minBreakpoint: Xf });
function le(s, i) {
  const { prefixes: o } = C.useContext(Wl);
  return s || o[i] || i;
}
function Ql() {
  const { breakpoints: s } = C.useContext(Wl);
  return s;
}
function ql() {
  const { minBreakpoint: s } = C.useContext(Wl);
  return s;
}
function vm(s) {
  return (s && s.ownerDocument) || document;
}
function gm(s) {
  var i = vm(s);
  return (i && i.defaultView) || window;
}
function wm(s, i) {
  return gm(s).getComputedStyle(s, i);
}
var xm = /([A-Z])/g;
function Sm(s) {
  return s.replace(xm, '-$1').toLowerCase();
}
var Em = /^ms-/;
function so(s) {
  return Sm(s).replace(Em, '-ms-');
}
var km =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Cm(s) {
  return !!(s && km.test(s));
}
function yo(s, i) {
  var o = '',
    u = '';
  if (typeof i == 'string')
    return s.style.getPropertyValue(so(i)) || wm(s).getPropertyValue(so(i));
  Object.keys(i).forEach(function (c) {
    var d = i[c];
    !d && d !== 0
      ? s.style.removeProperty(so(c))
      : Cm(c)
        ? (u += c + '(' + d + ') ')
        : (o += so(c) + ': ' + d + ';');
  }),
    u && (o += 'transform: ' + u + ';'),
    (s.style.cssText += ';' + o);
}
var _l = { exports: {} },
  Nl,
  Tf;
function _m() {
  if (Tf) return Nl;
  Tf = 1;
  var s = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  return (Nl = s), Nl;
}
var Tl, Rf;
function Nm() {
  if (Rf) return Tl;
  Rf = 1;
  var s = _m();
  function i() {}
  function o() {}
  return (
    (o.resetWarningCache = i),
    (Tl = function () {
      function u(h, v, S, _, N, P) {
        if (P !== s) {
          var j = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((j.name = 'Invariant Violation'), j);
        }
      }
      u.isRequired = u;
      function c() {
        return u;
      }
      var d = {
        array: u,
        bigint: u,
        bool: u,
        func: u,
        number: u,
        object: u,
        string: u,
        symbol: u,
        any: u,
        arrayOf: c,
        element: u,
        elementType: u,
        instanceOf: c,
        node: u,
        objectOf: c,
        oneOf: c,
        oneOfType: c,
        shape: c,
        exact: c,
        checkPropTypes: o,
        resetWarningCache: i,
      };
      return (d.PropTypes = d), d;
    }),
    Tl
  );
}
var Of;
function Tm() {
  return Of || ((Of = 1), (_l.exports = Nm()())), _l.exports;
}
var Rm = Tm();
const rt = Eo(Rm);
var Om = Wf();
const Wr = Eo(Om),
  Pf = { disabled: !1 },
  Gf = xe.createContext(null);
var Pm = function (i) {
    return i.scrollTop;
  },
  Qr = 'unmounted',
  un = 'exited',
  Bt = 'entering',
  an = 'entered',
  vo = 'exiting',
  $t = (function (s) {
    ym(i, s);
    function i(u, c) {
      var d;
      d = s.call(this, u, c) || this;
      var h = c,
        v = h && !h.isMounting ? u.enter : u.appear,
        S;
      return (
        (d.appearStatus = null),
        u.in
          ? v
            ? ((S = un), (d.appearStatus = Bt))
            : (S = an)
          : u.unmountOnExit || u.mountOnEnter
            ? (S = Qr)
            : (S = un),
        (d.state = { status: S }),
        (d.nextCallback = null),
        d
      );
    }
    i.getDerivedStateFromProps = function (c, d) {
      var h = c.in;
      return h && d.status === Qr ? { status: un } : null;
    };
    var o = i.prototype;
    return (
      (o.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (o.componentDidUpdate = function (c) {
        var d = null;
        if (c !== this.props) {
          var h = this.state.status;
          this.props.in
            ? h !== Bt && h !== an && (d = Bt)
            : (h === Bt || h === an) && (d = vo);
        }
        this.updateStatus(!1, d);
      }),
      (o.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (o.getTimeouts = function () {
        var c = this.props.timeout,
          d,
          h,
          v;
        return (
          (d = h = v = c),
          c != null &&
            typeof c != 'number' &&
            ((d = c.exit),
            (h = c.enter),
            (v = c.appear !== void 0 ? c.appear : h)),
          { exit: d, enter: h, appear: v }
        );
      }),
      (o.updateStatus = function (c, d) {
        if ((c === void 0 && (c = !1), d !== null))
          if ((this.cancelNextCallback(), d === Bt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var h = this.props.nodeRef
                ? this.props.nodeRef.current
                : Wr.findDOMNode(this);
              h && Pm(h);
            }
            this.performEnter(c);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === un &&
            this.setState({ status: Qr });
      }),
      (o.performEnter = function (c) {
        var d = this,
          h = this.props.enter,
          v = this.context ? this.context.isMounting : c,
          S = this.props.nodeRef ? [v] : [Wr.findDOMNode(this), v],
          _ = S[0],
          N = S[1],
          P = this.getTimeouts(),
          j = v ? P.appear : P.enter;
        if ((!c && !h) || Pf.disabled) {
          this.safeSetState({ status: an }, function () {
            d.props.onEntered(_);
          });
          return;
        }
        this.props.onEnter(_, N),
          this.safeSetState({ status: Bt }, function () {
            d.props.onEntering(_, N),
              d.onTransitionEnd(j, function () {
                d.safeSetState({ status: an }, function () {
                  d.props.onEntered(_, N);
                });
              });
          });
      }),
      (o.performExit = function () {
        var c = this,
          d = this.props.exit,
          h = this.getTimeouts(),
          v = this.props.nodeRef ? void 0 : Wr.findDOMNode(this);
        if (!d || Pf.disabled) {
          this.safeSetState({ status: un }, function () {
            c.props.onExited(v);
          });
          return;
        }
        this.props.onExit(v),
          this.safeSetState({ status: vo }, function () {
            c.props.onExiting(v),
              c.onTransitionEnd(h.exit, function () {
                c.safeSetState({ status: un }, function () {
                  c.props.onExited(v);
                });
              });
          });
      }),
      (o.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (o.safeSetState = function (c, d) {
        (d = this.setNextCallback(d)), this.setState(c, d);
      }),
      (o.setNextCallback = function (c) {
        var d = this,
          h = !0;
        return (
          (this.nextCallback = function (v) {
            h && ((h = !1), (d.nextCallback = null), c(v));
          }),
          (this.nextCallback.cancel = function () {
            h = !1;
          }),
          this.nextCallback
        );
      }),
      (o.onTransitionEnd = function (c, d) {
        this.setNextCallback(d);
        var h = this.props.nodeRef
            ? this.props.nodeRef.current
            : Wr.findDOMNode(this),
          v = c == null && !this.props.addEndListener;
        if (!h || v) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var S = this.props.nodeRef
              ? [this.nextCallback]
              : [h, this.nextCallback],
            _ = S[0],
            N = S[1];
          this.props.addEndListener(_, N);
        }
        c != null && setTimeout(this.nextCallback, c);
      }),
      (o.render = function () {
        var c = this.state.status;
        if (c === Qr) return null;
        var d = this.props,
          h = d.children;
        d.in,
          d.mountOnEnter,
          d.unmountOnExit,
          d.appear,
          d.enter,
          d.exit,
          d.timeout,
          d.addEndListener,
          d.onEnter,
          d.onEntering,
          d.onEntered,
          d.onExit,
          d.onExiting,
          d.onExited,
          d.nodeRef;
        var v = Qf(d, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return xe.createElement(
          Gf.Provider,
          { value: null },
          typeof h == 'function'
            ? h(c, v)
            : xe.cloneElement(xe.Children.only(h), v)
        );
      }),
      i
    );
  })(xe.Component);
$t.contextType = Gf;
$t.propTypes = {};
function bn() {}
$t.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: bn,
  onEntering: bn,
  onEntered: bn,
  onExit: bn,
  onExiting: bn,
  onExited: bn,
};
$t.UNMOUNTED = Qr;
$t.EXITED = un;
$t.ENTERING = Bt;
$t.ENTERED = an;
$t.EXITING = vo;
function Lm() {
  const s = C.version.split('.');
  return { major: +s[0], minor: +s[1], patch: +s[2] };
}
function Jf(s) {
  if (!s || typeof s == 'function') return null;
  const { major: i } = Lm();
  return i >= 19 ? s.props.ref : s.ref;
}
const jm = !!(
  typeof window < 'u' &&
  window.document &&
  window.document.createElement
);
var Al = !1,
  Dl = !1;
try {
  var Rl = {
    get passive() {
      return (Al = !0);
    },
    get once() {
      return (Dl = Al = !0);
    },
  };
  jm &&
    (window.addEventListener('test', Rl, Rl),
    window.removeEventListener('test', Rl, !0));
} catch {}
function Im(s, i, o, u) {
  if (u && typeof u != 'boolean' && !Dl) {
    var c = u.once,
      d = u.capture,
      h = o;
    !Dl &&
      c &&
      ((h =
        o.__once ||
        function v(S) {
          this.removeEventListener(i, v, d), o.call(this, S);
        }),
      (o.__once = h)),
      s.addEventListener(i, h, Al ? u : d);
  }
  s.addEventListener(i, o, u);
}
function zm(s, i, o, u) {
  var c = u && typeof u != 'boolean' ? u.capture : u;
  s.removeEventListener(i, o, c),
    o.__once && s.removeEventListener(i, o.__once, c);
}
function Zf(s, i, o, u) {
  return (
    Im(s, i, o, u),
    function () {
      zm(s, i, o, u);
    }
  );
}
function Am(s, i, o, u) {
  if ((u === void 0 && (u = !0), s)) {
    var c = document.createEvent('HTMLEvents');
    c.initEvent(i, o, u), s.dispatchEvent(c);
  }
}
function Dm(s) {
  var i = yo(s, 'transitionDuration') || '',
    o = i.indexOf('ms') === -1 ? 1e3 : 1;
  return parseFloat(i) * o;
}
function Fm(s, i, o) {
  o === void 0 && (o = 5);
  var u = !1,
    c = setTimeout(function () {
      u || Am(s, 'transitionend', !0);
    }, i + o),
    d = Zf(
      s,
      'transitionend',
      function () {
        u = !0;
      },
      { once: !0 }
    );
  return function () {
    clearTimeout(c), d();
  };
}
function Bm(s, i, o, u) {
  o == null && (o = Dm(s) || 0);
  var c = Fm(s, o, u),
    d = Zf(s, 'transitionend', i);
  return function () {
    c(), d();
  };
}
function Lf(s, i) {
  const o = yo(s, i) || '',
    u = o.indexOf('ms') === -1 ? 1e3 : 1;
  return parseFloat(o) * u;
}
function bf(s, i) {
  const o = Lf(s, 'transitionDuration'),
    u = Lf(s, 'transitionDelay'),
    c = Bm(
      s,
      (d) => {
        d.target === s && (c(), i(d));
      },
      o + u
    );
}
function Hr(...s) {
  return s
    .filter((i) => i != null)
    .reduce((i, o) => {
      if (typeof o != 'function')
        throw new Error(
          'Invalid Argument Type, must only provide functions, undefined, or null.'
        );
      return i === null
        ? o
        : function (...c) {
            i.apply(this, c), o.apply(this, c);
          };
    }, null);
}
function ed(s) {
  s.offsetHeight;
}
const jf = (s) =>
  !s || typeof s == 'function'
    ? s
    : (i) => {
        s.current = i;
      };
function Mm(s, i) {
  const o = jf(s),
    u = jf(i);
  return (c) => {
    o && o(c), u && u(c);
  };
}
function $m(s, i) {
  return C.useMemo(() => Mm(s, i), [s, i]);
}
function Um(s) {
  return s && 'setState' in s ? Wr.findDOMNode(s) : (s ?? null);
}
const td = xe.forwardRef(
    (
      {
        onEnter: s,
        onEntering: i,
        onEntered: o,
        onExit: u,
        onExiting: c,
        onExited: d,
        addEndListener: h,
        children: v,
        childRef: S,
        ..._
      },
      N
    ) => {
      const P = C.useRef(null),
        j = $m(P, S),
        Q = (X) => {
          j(Um(X));
        },
        Y = (X) => (ce) => {
          X && P.current && X(P.current, ce);
        },
        K = C.useCallback(Y(s), [s]),
        $ = C.useCallback(Y(i), [i]),
        me = C.useCallback(Y(o), [o]),
        Se = C.useCallback(Y(u), [u]),
        ne = C.useCallback(Y(c), [c]),
        ee = C.useCallback(Y(d), [d]),
        Ee = C.useCallback(Y(h), [h]);
      return g.jsx($t, {
        ref: N,
        ..._,
        onEnter: K,
        onEntered: me,
        onEntering: $,
        onExit: Se,
        onExited: ee,
        onExiting: ne,
        addEndListener: Ee,
        nodeRef: P,
        children:
          typeof v == 'function'
            ? (X, ce) => v(X, { ...ce, ref: Q })
            : xe.cloneElement(v, { ref: Q }),
      });
    }
  ),
  Vm = {
    height: ['marginTop', 'marginBottom'],
    width: ['marginLeft', 'marginRight'],
  };
function Hm(s, i) {
  const o = `offset${s[0].toUpperCase()}${s.slice(1)}`,
    u = i[o],
    c = Vm[s];
  return u + parseInt(yo(i, c[0]), 10) + parseInt(yo(i, c[1]), 10);
}
const Km = {
    [un]: 'collapse',
    [vo]: 'collapsing',
    [Bt]: 'collapsing',
    [an]: 'collapse show',
  },
  Wm = xe.forwardRef(
    (
      {
        onEnter: s,
        onEntering: i,
        onEntered: o,
        onExit: u,
        onExiting: c,
        className: d,
        children: h,
        dimension: v = 'height',
        in: S = !1,
        timeout: _ = 300,
        mountOnEnter: N = !1,
        unmountOnExit: P = !1,
        appear: j = !1,
        getDimensionValue: Q = Hm,
        ...Y
      },
      K
    ) => {
      const $ = typeof v == 'function' ? v() : v,
        me = C.useMemo(
          () =>
            Hr((X) => {
              X.style[$] = '0';
            }, s),
          [$, s]
        ),
        Se = C.useMemo(
          () =>
            Hr((X) => {
              const ce = `scroll${$[0].toUpperCase()}${$.slice(1)}`;
              X.style[$] = `${X[ce]}px`;
            }, i),
          [$, i]
        ),
        ne = C.useMemo(
          () =>
            Hr((X) => {
              X.style[$] = null;
            }, o),
          [$, o]
        ),
        ee = C.useMemo(
          () =>
            Hr((X) => {
              (X.style[$] = `${Q($, X)}px`), ed(X);
            }, u),
          [u, Q, $]
        ),
        Ee = C.useMemo(
          () =>
            Hr((X) => {
              X.style[$] = null;
            }, c),
          [$, c]
        );
      return g.jsx(td, {
        ref: K,
        addEndListener: bf,
        ...Y,
        'aria-expanded': Y.role ? S : null,
        onEnter: me,
        onEntering: Se,
        onEntered: ne,
        onExit: ee,
        onExiting: Ee,
        childRef: Jf(h),
        in: S,
        timeout: _,
        mountOnEnter: N,
        unmountOnExit: P,
        appear: j,
        children: (X, ce) =>
          xe.cloneElement(h, {
            ...ce,
            className: b(
              d,
              h.props.className,
              Km[X],
              $ === 'width' && 'collapse-horizontal'
            ),
          }),
      });
    }
  ),
  nd = (s) =>
    C.forwardRef((i, o) =>
      g.jsx('div', { ...i, ref: o, className: b(i.className, s) })
    );
function Qm(s) {
  const i = C.useRef(s);
  return (
    C.useEffect(() => {
      i.current = s;
    }, [s]),
    i
  );
}
function Yl(s) {
  const i = Qm(s);
  return C.useCallback(
    function (...o) {
      return i.current && i.current(...o);
    },
    [i]
  );
}
const qm = ['as', 'disabled'];
function Ym(s, i) {
  if (s == null) return {};
  var o = {};
  for (var u in s)
    if ({}.hasOwnProperty.call(s, u)) {
      if (i.indexOf(u) >= 0) continue;
      o[u] = s[u];
    }
  return o;
}
function Xm(s) {
  return !s || s.trim() === '#';
}
function Xl({
  tagName: s,
  disabled: i,
  href: o,
  target: u,
  rel: c,
  role: d,
  onClick: h,
  tabIndex: v = 0,
  type: S,
}) {
  s || (o != null || u != null || c != null ? (s = 'a') : (s = 'button'));
  const _ = { tagName: s };
  if (s === 'button') return [{ type: S || 'button', disabled: i }, _];
  const N = (j) => {
      if (((i || (s === 'a' && Xm(o))) && j.preventDefault(), i)) {
        j.stopPropagation();
        return;
      }
      h == null || h(j);
    },
    P = (j) => {
      j.key === ' ' && (j.preventDefault(), N(j));
    };
  return (
    s === 'a' && (o || (o = '#'), i && (o = void 0)),
    [
      {
        role: d ?? 'button',
        disabled: void 0,
        tabIndex: i ? void 0 : v,
        href: o,
        target: s === 'a' ? u : void 0,
        'aria-disabled': i || void 0,
        rel: s === 'a' ? c : void 0,
        onClick: N,
        onKeyDown: P,
      },
      _,
    ]
  );
}
const rd = C.forwardRef((s, i) => {
  let { as: o, disabled: u } = s,
    c = Ym(s, qm);
  const [d, { tagName: h }] = Xl(Object.assign({ tagName: o, disabled: u }, c));
  return g.jsx(h, Object.assign({}, c, d, { ref: i }));
});
rd.displayName = 'Button';
const Gm = ['onKeyDown'];
function Jm(s, i) {
  if (s == null) return {};
  var o = {};
  for (var u in s)
    if ({}.hasOwnProperty.call(s, u)) {
      if (i.indexOf(u) >= 0) continue;
      o[u] = s[u];
    }
  return o;
}
function Zm(s) {
  return !s || s.trim() === '#';
}
const id = C.forwardRef((s, i) => {
  let { onKeyDown: o } = s,
    u = Jm(s, Gm);
  const [c] = Xl(Object.assign({ tagName: 'a' }, u)),
    d = Yl((h) => {
      c.onKeyDown(h), o == null || o(h);
    });
  return Zm(u.href) || u.role === 'button'
    ? g.jsx('a', Object.assign({ ref: i }, u, c, { onKeyDown: d }))
    : g.jsx('a', Object.assign({ ref: i }, u, { onKeyDown: o }));
});
id.displayName = 'Anchor';
const bm = { [Bt]: 'show', [an]: 'show' },
  Gl = C.forwardRef(
    (
      {
        className: s,
        children: i,
        transitionClasses: o = {},
        onEnter: u,
        ...c
      },
      d
    ) => {
      const h = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...c,
        },
        v = C.useCallback(
          (S, _) => {
            ed(S), u == null || u(S, _);
          },
          [u]
        );
      return g.jsx(td, {
        ref: d,
        addEndListener: bf,
        ...h,
        onEnter: v,
        childRef: Jf(i),
        children: (S, _) =>
          C.cloneElement(i, {
            ..._,
            className: b('fade', s, i.props.className, bm[S], o[S]),
          }),
      });
    }
  );
Gl.displayName = 'Fade';
const od = C.forwardRef(
  (
    {
      as: s,
      bsPrefix: i,
      variant: o = 'primary',
      size: u,
      active: c = !1,
      disabled: d = !1,
      className: h,
      ...v
    },
    S
  ) => {
    const _ = le(i, 'btn'),
      [N, { tagName: P }] = Xl({ tagName: s, disabled: d, ...v }),
      j = P;
    return g.jsx(j, {
      ...N,
      ...v,
      ref: S,
      disabled: d,
      className: b(
        h,
        _,
        c && 'active',
        o && `${_}-${o}`,
        u && `${_}-${u}`,
        v.href && d && 'disabled'
      ),
    });
  }
);
od.displayName = 'Button';
const Jl = C.forwardRef(
  ({ className: s, bsPrefix: i, as: o = 'div', ...u }, c) => (
    (i = le(i, 'card-body')), g.jsx(o, { ref: c, className: b(s, i), ...u })
  )
);
Jl.displayName = 'CardBody';
const sd = C.forwardRef(
  ({ className: s, bsPrefix: i, as: o = 'div', ...u }, c) => (
    (i = le(i, 'card-footer')), g.jsx(o, { ref: c, className: b(s, i), ...u })
  )
);
sd.displayName = 'CardFooter';
const Zl = C.createContext(null);
Zl.displayName = 'CardHeaderContext';
const ld = C.forwardRef(
  ({ bsPrefix: s, className: i, as: o = 'div', ...u }, c) => {
    const d = le(s, 'card-header'),
      h = C.useMemo(() => ({ cardHeaderBsPrefix: d }), [d]);
    return g.jsx(Zl.Provider, {
      value: h,
      children: g.jsx(o, { ref: c, ...u, className: b(i, d) }),
    });
  }
);
ld.displayName = 'CardHeader';
const ud = C.forwardRef(
  ({ bsPrefix: s, className: i, variant: o, as: u = 'img', ...c }, d) => {
    const h = le(s, 'card-img');
    return g.jsx(u, { ref: d, className: b(o ? `${h}-${o}` : h, i), ...c });
  }
);
ud.displayName = 'CardImg';
const ad = C.forwardRef(
  ({ className: s, bsPrefix: i, as: o = 'div', ...u }, c) => (
    (i = le(i, 'card-img-overlay')),
    g.jsx(o, { ref: c, className: b(s, i), ...u })
  )
);
ad.displayName = 'CardImgOverlay';
const cd = C.forwardRef(
  ({ className: s, bsPrefix: i, as: o = 'a', ...u }, c) => (
    (i = le(i, 'card-link')), g.jsx(o, { ref: c, className: b(s, i), ...u })
  )
);
cd.displayName = 'CardLink';
const ey = nd('h6'),
  fd = C.forwardRef(
    ({ className: s, bsPrefix: i, as: o = ey, ...u }, c) => (
      (i = le(i, 'card-subtitle')),
      g.jsx(o, { ref: c, className: b(s, i), ...u })
    )
  );
fd.displayName = 'CardSubtitle';
const dd = C.forwardRef(
  ({ className: s, bsPrefix: i, as: o = 'p', ...u }, c) => (
    (i = le(i, 'card-text')), g.jsx(o, { ref: c, className: b(s, i), ...u })
  )
);
dd.displayName = 'CardText';
const ty = nd('h5'),
  pd = C.forwardRef(
    ({ className: s, bsPrefix: i, as: o = ty, ...u }, c) => (
      (i = le(i, 'card-title')), g.jsx(o, { ref: c, className: b(s, i), ...u })
    )
  );
pd.displayName = 'CardTitle';
const hd = C.forwardRef(
  (
    {
      bsPrefix: s,
      className: i,
      bg: o,
      text: u,
      border: c,
      body: d = !1,
      children: h,
      as: v = 'div',
      ...S
    },
    _
  ) => {
    const N = le(s, 'card');
    return g.jsx(v, {
      ref: _,
      ...S,
      className: b(i, N, o && `bg-${o}`, u && `text-${u}`, c && `border-${c}`),
      children: d ? g.jsx(Jl, { children: h }) : h,
    });
  }
);
hd.displayName = 'Card';
const Tn = Object.assign(hd, {
  Img: ud,
  Title: pd,
  Subtitle: fd,
  Body: Jl,
  Link: cd,
  Text: dd,
  Header: ld,
  Footer: sd,
  ImgOverlay: ad,
});
function If(s, i) {
  let o = 0;
  return C.Children.map(s, (u) => (C.isValidElement(u) ? i(u, o++) : u));
}
function ny(s, i) {
  let o = 0;
  C.Children.forEach(s, (u) => {
    C.isValidElement(u) && i(u, o++);
  });
}
function ry(s, i) {
  return C.Children.toArray(s).some((o) => C.isValidElement(o) && o.type === i);
}
function iy({ as: s, bsPrefix: i, className: o, ...u }) {
  i = le(i, 'col');
  const c = Ql(),
    d = ql(),
    h = [],
    v = [];
  return (
    c.forEach((S) => {
      const _ = u[S];
      delete u[S];
      let N, P, j;
      typeof _ == 'object' && _ != null
        ? ({ span: N, offset: P, order: j } = _)
        : (N = _);
      const Q = S !== d ? `-${S}` : '';
      N && h.push(N === !0 ? `${i}${Q}` : `${i}${Q}-${N}`),
        j != null && v.push(`order${Q}-${j}`),
        P != null && v.push(`offset${Q}-${P}`);
    }),
    [
      { ...u, className: b(o, ...h, ...v) },
      { as: s, bsPrefix: i, spans: h },
    ]
  );
}
const bl = C.forwardRef((s, i) => {
  const [{ className: o, ...u }, { as: c = 'div', bsPrefix: d, spans: h }] =
    iy(s);
  return g.jsx(c, { ...u, ref: i, className: b(o, !h.length && d) });
});
bl.displayName = 'Col';
var oy = Function.prototype.bind.call(Function.prototype.call, [].slice);
function sy(s, i) {
  return oy(s.querySelectorAll(i));
}
function ly(s, i, o) {
  const u = C.useRef(s !== void 0),
    [c, d] = C.useState(i),
    h = s !== void 0,
    v = u.current;
  return (
    (u.current = h),
    !h && v && c !== i && d(i),
    [
      h ? s : c,
      C.useCallback(
        (...S) => {
          const [_, ...N] = S;
          let P = o == null ? void 0 : o(_, ...N);
          return d(_), P;
        },
        [o]
      ),
    ]
  );
}
function uy() {
  const [, s] = C.useReducer((i) => i + 1, 0);
  return s;
}
const eu = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  md = xe.createContext(eu),
  ay = xe.createContext(!1);
let cy = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  ),
  Ol = new WeakMap();
function fy(s = !1) {
  let i = C.useContext(md),
    o = C.useRef(null);
  if (o.current === null && !s) {
    var u, c;
    let d =
      (c = xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      c === void 0 ||
      (u = c.ReactCurrentOwner) === null ||
      u === void 0
        ? void 0
        : u.current;
    if (d) {
      let h = Ol.get(d);
      h == null
        ? Ol.set(d, { id: i.current, state: d.memoizedState })
        : d.memoizedState !== h.state && ((i.current = h.id), Ol.delete(d));
    }
    o.current = ++i.current;
  }
  return o.current;
}
function dy(s) {
  let i = C.useContext(md);
  i === eu &&
    !cy &&
    console.warn(
      'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
    );
  let o = fy(!!s),
    u = `react-aria${i.prefix}`;
  return s || `${u}-${o}`;
}
function py(s) {
  let i = xe.useId(),
    [o] = C.useState(gy()),
    u = o ? 'react-aria' : `react-aria${eu.prefix}`;
  return s || `${u}-${i}`;
}
const hy = typeof xe.useId == 'function' ? py : dy;
function my() {
  return !1;
}
function yy() {
  return !0;
}
function vy(s) {
  return () => {};
}
function gy() {
  return typeof xe.useSyncExternalStore == 'function'
    ? xe.useSyncExternalStore(vy, my, yy)
    : C.useContext(ay);
}
const er = C.createContext(null),
  Yr = (s, i = null) => (s != null ? String(s) : i || null),
  tu = C.createContext(null);
tu.displayName = 'NavContext';
const wy = 'data-rr-ui-',
  xy = 'rrUi';
function nu(s) {
  return `${wy}${s}`;
}
function Sy(s) {
  return `${xy}${s}`;
}
const yd = C.createContext(null);
yd.displayName = 'NavbarContext';
const Ey = { type: rt.string, tooltip: rt.bool, as: rt.elementType },
  ko = C.forwardRef(
    (
      { as: s = 'div', className: i, type: o = 'valid', tooltip: u = !1, ...c },
      d
    ) =>
      g.jsx(s, {
        ...c,
        ref: d,
        className: b(i, `${o}-${u ? 'tooltip' : 'feedback'}`),
      })
  );
ko.displayName = 'Feedback';
ko.propTypes = Ey;
const Mt = C.createContext({}),
  ru = C.forwardRef(
    (
      {
        id: s,
        bsPrefix: i,
        className: o,
        type: u = 'checkbox',
        isValid: c = !1,
        isInvalid: d = !1,
        as: h = 'input',
        ...v
      },
      S
    ) => {
      const { controlId: _ } = C.useContext(Mt);
      return (
        (i = le(i, 'form-check-input')),
        g.jsx(h, {
          ...v,
          ref: S,
          type: u,
          id: s || _,
          className: b(o, i, c && 'is-valid', d && 'is-invalid'),
        })
      );
    }
  );
ru.displayName = 'FormCheckInput';
const go = C.forwardRef(
  ({ bsPrefix: s, className: i, htmlFor: o, ...u }, c) => {
    const { controlId: d } = C.useContext(Mt);
    return (
      (s = le(s, 'form-check-label')),
      g.jsx('label', { ...u, ref: c, htmlFor: o || d, className: b(i, s) })
    );
  }
);
go.displayName = 'FormCheckLabel';
const vd = C.forwardRef(
  (
    {
      id: s,
      bsPrefix: i,
      bsSwitchPrefix: o,
      inline: u = !1,
      reverse: c = !1,
      disabled: d = !1,
      isValid: h = !1,
      isInvalid: v = !1,
      feedbackTooltip: S = !1,
      feedback: _,
      feedbackType: N,
      className: P,
      style: j,
      title: Q = '',
      type: Y = 'checkbox',
      label: K,
      children: $,
      as: me = 'input',
      ...Se
    },
    ne
  ) => {
    (i = le(i, 'form-check')), (o = le(o, 'form-switch'));
    const { controlId: ee } = C.useContext(Mt),
      Ee = C.useMemo(() => ({ controlId: s || ee }), [ee, s]),
      X = (!$ && K != null && K !== !1) || ry($, go),
      ce = g.jsx(ru, {
        ...Se,
        type: Y === 'switch' ? 'checkbox' : Y,
        ref: ne,
        isValid: h,
        isInvalid: v,
        disabled: d,
        as: me,
      });
    return g.jsx(Mt.Provider, {
      value: Ee,
      children: g.jsx('div', {
        style: j,
        className: b(
          P,
          X && i,
          u && `${i}-inline`,
          c && `${i}-reverse`,
          Y === 'switch' && o
        ),
        children:
          $ ||
          g.jsxs(g.Fragment, {
            children: [
              ce,
              X && g.jsx(go, { title: Q, children: K }),
              _ && g.jsx(ko, { type: N, tooltip: S, children: _ }),
            ],
          }),
      }),
    });
  }
);
vd.displayName = 'FormCheck';
const wo = Object.assign(vd, { Input: ru, Label: go }),
  gd = C.forwardRef(
    (
      {
        bsPrefix: s,
        type: i,
        size: o,
        htmlSize: u,
        id: c,
        className: d,
        isValid: h = !1,
        isInvalid: v = !1,
        plaintext: S,
        readOnly: _,
        as: N = 'input',
        ...P
      },
      j
    ) => {
      const { controlId: Q } = C.useContext(Mt);
      return (
        (s = le(s, 'form-control')),
        g.jsx(N, {
          ...P,
          type: i,
          size: u,
          ref: j,
          readOnly: _,
          id: c || Q,
          className: b(
            d,
            S ? `${s}-plaintext` : s,
            o && `${s}-${o}`,
            i === 'color' && `${s}-color`,
            h && 'is-valid',
            v && 'is-invalid'
          ),
        })
      );
    }
  );
gd.displayName = 'FormControl';
const ky = Object.assign(gd, { Feedback: ko }),
  wd = C.forwardRef(
    ({ className: s, bsPrefix: i, as: o = 'div', ...u }, c) => (
      (i = le(i, 'form-floating')),
      g.jsx(o, { ref: c, className: b(s, i), ...u })
    )
  );
wd.displayName = 'FormFloating';
const iu = C.forwardRef(({ controlId: s, as: i = 'div', ...o }, u) => {
  const c = C.useMemo(() => ({ controlId: s }), [s]);
  return g.jsx(Mt.Provider, { value: c, children: g.jsx(i, { ...o, ref: u }) });
});
iu.displayName = 'FormGroup';
const xd = C.forwardRef(
  (
    {
      as: s = 'label',
      bsPrefix: i,
      column: o = !1,
      visuallyHidden: u = !1,
      className: c,
      htmlFor: d,
      ...h
    },
    v
  ) => {
    const { controlId: S } = C.useContext(Mt);
    i = le(i, 'form-label');
    let _ = 'col-form-label';
    typeof o == 'string' && (_ = `${_} ${_}-${o}`);
    const N = b(c, i, u && 'visually-hidden', o && _);
    return (
      (d = d || S),
      o
        ? g.jsx(bl, { ref: v, as: 'label', className: N, htmlFor: d, ...h })
        : g.jsx(s, { ref: v, className: N, htmlFor: d, ...h })
    );
  }
);
xd.displayName = 'FormLabel';
const Sd = C.forwardRef(({ bsPrefix: s, className: i, id: o, ...u }, c) => {
  const { controlId: d } = C.useContext(Mt);
  return (
    (s = le(s, 'form-range')),
    g.jsx('input', {
      ...u,
      type: 'range',
      ref: c,
      className: b(i, s),
      id: o || d,
    })
  );
});
Sd.displayName = 'FormRange';
const Ed = C.forwardRef(
  (
    {
      bsPrefix: s,
      size: i,
      htmlSize: o,
      className: u,
      isValid: c = !1,
      isInvalid: d = !1,
      id: h,
      ...v
    },
    S
  ) => {
    const { controlId: _ } = C.useContext(Mt);
    return (
      (s = le(s, 'form-select')),
      g.jsx('select', {
        ...v,
        size: o,
        ref: S,
        className: b(
          u,
          s,
          i && `${s}-${i}`,
          c && 'is-valid',
          d && 'is-invalid'
        ),
        id: h || _,
      })
    );
  }
);
Ed.displayName = 'FormSelect';
const kd = C.forwardRef(
  ({ bsPrefix: s, className: i, as: o = 'small', muted: u, ...c }, d) => (
    (s = le(s, 'form-text')),
    g.jsx(o, { ...c, ref: d, className: b(i, s, u && 'text-muted') })
  )
);
kd.displayName = 'FormText';
const Cd = C.forwardRef((s, i) => g.jsx(wo, { ...s, ref: i, type: 'switch' }));
Cd.displayName = 'Switch';
const Cy = Object.assign(Cd, { Input: wo.Input, Label: wo.Label }),
  _d = C.forwardRef(
    (
      { bsPrefix: s, className: i, children: o, controlId: u, label: c, ...d },
      h
    ) => (
      (s = le(s, 'form-floating')),
      g.jsxs(iu, {
        ref: h,
        className: b(i, s),
        controlId: u,
        ...d,
        children: [o, g.jsx('label', { htmlFor: u, children: c })],
      })
    )
  );
_d.displayName = 'FloatingLabel';
const _y = { _ref: rt.any, validated: rt.bool, as: rt.elementType },
  ou = C.forwardRef(({ className: s, validated: i, as: o = 'form', ...u }, c) =>
    g.jsx(o, { ...u, ref: c, className: b(s, i && 'was-validated') })
  );
ou.displayName = 'Form';
ou.propTypes = _y;
const Nn = Object.assign(ou, {
    Group: iu,
    Control: ky,
    Floating: wd,
    Check: wo,
    Switch: Cy,
    Label: xd,
    Text: kd,
    Range: Sd,
    Select: Ed,
    FloatingLabel: _d,
  }),
  zf = (s) =>
    !s || typeof s == 'function'
      ? s
      : (i) => {
          s.current = i;
        };
function Ny(s, i) {
  const o = zf(s),
    u = zf(i);
  return (c) => {
    o && o(c), u && u(c);
  };
}
function Nd(s, i) {
  return C.useMemo(() => Ny(s, i), [s, i]);
}
const tr = C.createContext(null),
  Ty = ['as', 'active', 'eventKey'];
function Ry(s, i) {
  if (s == null) return {};
  var o = {};
  for (var u in s)
    if ({}.hasOwnProperty.call(s, u)) {
      if (i.indexOf(u) >= 0) continue;
      o[u] = s[u];
    }
  return o;
}
function Td({ key: s, onClick: i, active: o, id: u, role: c, disabled: d }) {
  const h = C.useContext(er),
    v = C.useContext(tu),
    S = C.useContext(tr);
  let _ = o;
  const N = { role: c };
  if (v) {
    !c && v.role === 'tablist' && (N.role = 'tab');
    const P = v.getControllerId(s ?? null),
      j = v.getControlledId(s ?? null);
    (N[nu('event-key')] = s),
      (N.id = P || u),
      (_ = o == null && s != null ? v.activeKey === s : o),
      (_ ||
        (!(S != null && S.unmountOnExit) && !(S != null && S.mountOnEnter))) &&
        (N['aria-controls'] = j);
  }
  return (
    N.role === 'tab' &&
      ((N['aria-selected'] = _),
      _ || (N.tabIndex = -1),
      d && ((N.tabIndex = -1), (N['aria-disabled'] = !0))),
    (N.onClick = Yl((P) => {
      d ||
        (i == null || i(P),
        s != null && h && !P.isPropagationStopped() && h(s, P));
    })),
    [N, { isActive: _ }]
  );
}
const Rd = C.forwardRef((s, i) => {
  let { as: o = rd, active: u, eventKey: c } = s,
    d = Ry(s, Ty);
  const [h, v] = Td(Object.assign({ key: Yr(c, d.href), active: u }, d));
  return (
    (h[nu('active')] = v.isActive),
    g.jsx(o, Object.assign({}, d, h, { ref: i }))
  );
});
Rd.displayName = 'NavItem';
const Oy = ['as', 'onSelect', 'activeKey', 'role', 'onKeyDown'];
function Py(s, i) {
  if (s == null) return {};
  var o = {};
  for (var u in s)
    if ({}.hasOwnProperty.call(s, u)) {
      if (i.indexOf(u) >= 0) continue;
      o[u] = s[u];
    }
  return o;
}
const Af = () => {},
  Df = nu('event-key'),
  Od = C.forwardRef((s, i) => {
    let { as: o = 'div', onSelect: u, activeKey: c, role: d, onKeyDown: h } = s,
      v = Py(s, Oy);
    const S = uy(),
      _ = C.useRef(!1),
      N = C.useContext(er),
      P = C.useContext(tr);
    let j, Q;
    P &&
      ((d = d || 'tablist'),
      (c = P.activeKey),
      (j = P.getControlledId),
      (Q = P.getControllerId));
    const Y = C.useRef(null),
      K = (ne) => {
        const ee = Y.current;
        if (!ee) return null;
        const Ee = sy(ee, `[${Df}]:not([aria-disabled=true])`),
          X = ee.querySelector('[aria-selected=true]');
        if (!X || X !== document.activeElement) return null;
        const ce = Ee.indexOf(X);
        if (ce === -1) return null;
        let Le = ce + ne;
        return (
          Le >= Ee.length && (Le = 0), Le < 0 && (Le = Ee.length - 1), Ee[Le]
        );
      },
      $ = (ne, ee) => {
        ne != null && (u == null || u(ne, ee), N == null || N(ne, ee));
      },
      me = (ne) => {
        if ((h == null || h(ne), !P)) return;
        let ee;
        switch (ne.key) {
          case 'ArrowLeft':
          case 'ArrowUp':
            ee = K(-1);
            break;
          case 'ArrowRight':
          case 'ArrowDown':
            ee = K(1);
            break;
          default:
            return;
        }
        ee &&
          (ne.preventDefault(),
          $(ee.dataset[Sy('EventKey')] || null, ne),
          (_.current = !0),
          S());
      };
    C.useEffect(() => {
      if (Y.current && _.current) {
        const ne = Y.current.querySelector(`[${Df}][aria-selected=true]`);
        ne == null || ne.focus();
      }
      _.current = !1;
    });
    const Se = Nd(i, Y);
    return g.jsx(er.Provider, {
      value: $,
      children: g.jsx(tu.Provider, {
        value: {
          role: d,
          activeKey: Yr(c),
          getControlledId: j || Af,
          getControllerId: Q || Af,
        },
        children: g.jsx(
          o,
          Object.assign({}, v, { onKeyDown: me, ref: Se, role: d })
        ),
      }),
    });
  });
Od.displayName = 'Nav';
const Ly = Object.assign(Od, { Item: Rd });
function Pd({
  children: s,
  in: i,
  onExited: o,
  mountOnEnter: u,
  unmountOnExit: c,
}) {
  const d = C.useRef(null),
    h = C.useRef(i),
    v = Yl(o);
  C.useEffect(() => {
    i ? (h.current = !0) : v(d.current);
  }, [i, v]);
  const S = Nd(d, s.ref),
    _ = C.cloneElement(s, { ref: S });
  return i ? _ : c || (!h.current && u) ? null : _;
}
const su = C.forwardRef(
  ({ className: s, bsPrefix: i, as: o = 'div', ...u }, c) => (
    (i = le(i, 'nav-item')), g.jsx(o, { ref: c, className: b(s, i), ...u })
  )
);
su.displayName = 'NavItem';
const lu = C.forwardRef(
  (
    {
      bsPrefix: s,
      className: i,
      as: o = id,
      active: u,
      eventKey: c,
      disabled: d = !1,
      ...h
    },
    v
  ) => {
    s = le(s, 'nav-link');
    const [S, _] = Td({ key: Yr(c, h.href), active: u, disabled: d, ...h });
    return g.jsx(o, {
      ...h,
      ...S,
      ref: v,
      disabled: d,
      className: b(i, s, d && 'disabled', _.isActive && 'active'),
    });
  }
);
lu.displayName = 'NavLink';
const Ld = C.forwardRef((s, i) => {
  const {
      as: o = 'div',
      bsPrefix: u,
      variant: c,
      fill: d = !1,
      justify: h = !1,
      navbar: v,
      navbarScroll: S,
      className: _,
      activeKey: N,
      ...P
    } = qf(s, { activeKey: 'onSelect' }),
    j = le(u, 'nav');
  let Q,
    Y,
    K = !1;
  const $ = C.useContext(yd),
    me = C.useContext(Zl);
  return (
    $
      ? ((Q = $.bsPrefix), (K = v ?? !0))
      : me && ({ cardHeaderBsPrefix: Y } = me),
    g.jsx(Ly, {
      as: o,
      ref: i,
      activeKey: N,
      className: b(_, {
        [j]: !K,
        [`${Q}-nav`]: K,
        [`${Q}-nav-scroll`]: K && S,
        [`${Y}-${c}`]: !!Y,
        [`${j}-${c}`]: !!c,
        [`${j}-fill`]: d,
        [`${j}-justified`]: h,
      }),
      ...P,
    })
  );
});
Ld.displayName = 'Nav';
const jy = Object.assign(Ld, { Item: su, Link: lu }),
  jd = C.forwardRef(({ bsPrefix: s, className: i, as: o = 'div', ...u }, c) => {
    const d = le(s, 'row'),
      h = Ql(),
      v = ql(),
      S = `${d}-cols`,
      _ = [];
    return (
      h.forEach((N) => {
        const P = u[N];
        delete u[N];
        let j;
        P != null && typeof P == 'object' ? ({ cols: j } = P) : (j = P);
        const Q = N !== v ? `-${N}` : '';
        j != null && _.push(`${S}${Q}-${j}`);
      }),
      g.jsx(o, { ref: c, ...u, className: b(i, d, ..._) })
    );
  });
jd.displayName = 'Row';
const Id = C.forwardRef(
  (
    {
      bsPrefix: s,
      variant: i,
      animation: o = 'border',
      size: u,
      as: c = 'div',
      className: d,
      ...h
    },
    v
  ) => {
    s = le(s, 'spinner');
    const S = `${s}-${o}`;
    return g.jsx(c, {
      ref: v,
      ...h,
      className: b(d, S, u && `${S}-${u}`, i && `text-${i}`),
    });
  }
);
Id.displayName = 'Spinner';
function Iy(s, i = Yf, o = Xf) {
  const u = [];
  return (
    Object.entries(s).forEach(([c, d]) => {
      d != null &&
        (typeof d == 'object'
          ? i.forEach((h) => {
              const v = d[h];
              if (v != null) {
                const S = h !== o ? `-${h}` : '';
                u.push(`${c}${S}-${v}`);
              }
            })
          : u.push(`${c}-${d}`));
    }),
    u
  );
}
const zd = C.forwardRef(
  (
    { as: s = 'div', bsPrefix: i, className: o, direction: u, gap: c, ...d },
    h
  ) => {
    i = le(i, u === 'horizontal' ? 'hstack' : 'vstack');
    const v = Ql(),
      S = ql();
    return g.jsx(s, {
      ...d,
      ref: h,
      className: b(o, i, ...Iy({ gap: c }, v, S)),
    });
  }
);
zd.displayName = 'Stack';
const zy = [
    'active',
    'eventKey',
    'mountOnEnter',
    'transition',
    'unmountOnExit',
    'role',
    'onEnter',
    'onEntering',
    'onEntered',
    'onExit',
    'onExiting',
    'onExited',
  ],
  Ay = ['activeKey', 'getControlledId', 'getControllerId'],
  Dy = ['as'];
function Fl(s, i) {
  if (s == null) return {};
  var o = {};
  for (var u in s)
    if ({}.hasOwnProperty.call(s, u)) {
      if (i.indexOf(u) >= 0) continue;
      o[u] = s[u];
    }
  return o;
}
function Ad(s) {
  let {
      active: i,
      eventKey: o,
      mountOnEnter: u,
      transition: c,
      unmountOnExit: d,
      role: h = 'tabpanel',
      onEnter: v,
      onEntering: S,
      onEntered: _,
      onExit: N,
      onExiting: P,
      onExited: j,
    } = s,
    Q = Fl(s, zy);
  const Y = C.useContext(tr);
  if (!Y)
    return [
      Object.assign({}, Q, { role: h }),
      {
        eventKey: o,
        isActive: i,
        mountOnEnter: u,
        transition: c,
        unmountOnExit: d,
        onEnter: v,
        onEntering: S,
        onEntered: _,
        onExit: N,
        onExiting: P,
        onExited: j,
      },
    ];
  const { activeKey: K, getControlledId: $, getControllerId: me } = Y,
    Se = Fl(Y, Ay),
    ne = Yr(o);
  return [
    Object.assign({}, Q, { role: h, id: $(o), 'aria-labelledby': me(o) }),
    {
      eventKey: o,
      isActive: i == null && ne != null ? Yr(K) === ne : i,
      transition: c || Se.transition,
      mountOnEnter: u ?? Se.mountOnEnter,
      unmountOnExit: d ?? Se.unmountOnExit,
      onEnter: v,
      onEntering: S,
      onEntered: _,
      onExit: N,
      onExiting: P,
      onExited: j,
    },
  ];
}
const Dd = C.forwardRef((s, i) => {
  let { as: o = 'div' } = s,
    u = Fl(s, Dy);
  const [
    c,
    {
      isActive: d,
      onEnter: h,
      onEntering: v,
      onEntered: S,
      onExit: _,
      onExiting: N,
      onExited: P,
      mountOnEnter: j,
      unmountOnExit: Q,
      transition: Y = Pd,
    },
  ] = Ad(u);
  return g.jsx(tr.Provider, {
    value: null,
    children: g.jsx(er.Provider, {
      value: null,
      children: g.jsx(Y, {
        in: d,
        onEnter: h,
        onEntering: v,
        onEntered: S,
        onExit: _,
        onExiting: N,
        onExited: P,
        mountOnEnter: j,
        unmountOnExit: Q,
        children: g.jsx(
          o,
          Object.assign({}, c, { ref: i, hidden: !d, 'aria-hidden': !d })
        ),
      }),
    }),
  });
});
Dd.displayName = 'TabPanel';
const uu = (s) => {
  const {
      id: i,
      generateChildId: o,
      onSelect: u,
      activeKey: c,
      defaultActiveKey: d,
      transition: h,
      mountOnEnter: v,
      unmountOnExit: S,
      children: _,
    } = s,
    [N, P] = ly(c, d, u),
    j = hy(i),
    Q = C.useMemo(() => o || ((K, $) => (j ? `${j}-${$}-${K}` : null)), [j, o]),
    Y = C.useMemo(
      () => ({
        onSelect: P,
        activeKey: N,
        transition: h,
        mountOnEnter: v || !1,
        unmountOnExit: S || !1,
        getControlledId: (K) => Q(K, 'tabpane'),
        getControllerId: (K) => Q(K, 'tab'),
      }),
      [P, N, h, v, S, Q]
    );
  return g.jsx(tr.Provider, {
    value: Y,
    children: g.jsx(er.Provider, { value: P || null, children: _ }),
  });
};
uu.Panel = Dd;
function au(s) {
  return typeof s == 'boolean' ? (s ? Gl : Pd) : s;
}
const Fd = ({ transition: s, ...i }) => g.jsx(uu, { ...i, transition: au(s) });
Fd.displayName = 'TabContainer';
const cu = C.forwardRef(
  ({ className: s, bsPrefix: i, as: o = 'div', ...u }, c) => (
    (i = le(i, 'tab-content')), g.jsx(o, { ref: c, className: b(s, i), ...u })
  )
);
cu.displayName = 'TabContent';
const fu = C.forwardRef(({ bsPrefix: s, transition: i, ...o }, u) => {
  const [
      { className: c, as: d = 'div', ...h },
      {
        isActive: v,
        onEnter: S,
        onEntering: _,
        onEntered: N,
        onExit: P,
        onExiting: j,
        onExited: Q,
        mountOnEnter: Y,
        unmountOnExit: K,
        transition: $ = Gl,
      },
    ] = Ad({ ...o, transition: au(i) }),
    me = le(s, 'tab-pane');
  return g.jsx(tr.Provider, {
    value: null,
    children: g.jsx(er.Provider, {
      value: null,
      children: g.jsx($, {
        in: v,
        onEnter: S,
        onEntering: _,
        onEntered: N,
        onExit: P,
        onExiting: j,
        onExited: Q,
        mountOnEnter: Y,
        unmountOnExit: K,
        children: g.jsx(d, {
          ...h,
          ref: u,
          className: b(c, me, v && 'active'),
        }),
      }),
    }),
  });
});
fu.displayName = 'TabPane';
const Fy = {
    eventKey: rt.oneOfType([rt.string, rt.number]),
    title: rt.node.isRequired,
    disabled: rt.bool,
    tabClassName: rt.string,
    tabAttrs: rt.object,
  },
  Bd = () => {
    throw new Error(
      "ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly"
    );
  };
Bd.propTypes = Fy;
const ao = Object.assign(Bd, { Container: Fd, Content: cu, Pane: fu });
function By(s) {
  let i;
  return (
    ny(s, (o) => {
      i == null && (i = o.props.eventKey);
    }),
    i
  );
}
function My(s) {
  const {
    title: i,
    eventKey: o,
    disabled: u,
    tabClassName: c,
    tabAttrs: d,
    id: h,
  } = s.props;
  return i == null
    ? null
    : g.jsx(su, {
        as: 'li',
        role: 'presentation',
        children: g.jsx(lu, {
          as: 'button',
          type: 'button',
          eventKey: o,
          disabled: u,
          id: h,
          className: c,
          ...d,
          children: i,
        }),
      });
}
const du = (s) => {
  const {
    id: i,
    onSelect: o,
    transition: u,
    mountOnEnter: c = !1,
    unmountOnExit: d = !1,
    variant: h = 'tabs',
    children: v,
    activeKey: S = By(v),
    ..._
  } = qf(s, { activeKey: 'onSelect' });
  return g.jsxs(uu, {
    id: i,
    activeKey: S,
    onSelect: o,
    transition: au(u),
    mountOnEnter: c,
    unmountOnExit: d,
    children: [
      g.jsx(jy, {
        id: i,
        ..._,
        role: 'tablist',
        as: 'ul',
        variant: h,
        children: If(v, My),
      }),
      g.jsx(cu, {
        children: If(v, (N) => {
          const P = { ...N.props };
          return (
            delete P.title,
            delete P.disabled,
            delete P.tabClassName,
            delete P.tabAttrs,
            g.jsx(fu, { ...P })
          );
        }),
      }),
    ],
  });
};
du.displayName = 'Tabs';
const Rt = Object.create(null);
Rt.open = '0';
Rt.close = '1';
Rt.ping = '2';
Rt.pong = '3';
Rt.message = '4';
Rt.upgrade = '5';
Rt.noop = '6';
const co = Object.create(null);
Object.keys(Rt).forEach((s) => {
  co[Rt[s]] = s;
});
const Bl = { type: 'error', data: 'parser error' },
  Md =
    typeof Blob == 'function' ||
    (typeof Blob < 'u' &&
      Object.prototype.toString.call(Blob) === '[object BlobConstructor]'),
  $d = typeof ArrayBuffer == 'function',
  Ud = (s) =>
    typeof ArrayBuffer.isView == 'function'
      ? ArrayBuffer.isView(s)
      : s && s.buffer instanceof ArrayBuffer,
  pu = ({ type: s, data: i }, o, u) =>
    Md && i instanceof Blob
      ? o
        ? u(i)
        : Ff(i, u)
      : $d && (i instanceof ArrayBuffer || Ud(i))
        ? o
          ? u(i)
          : Ff(new Blob([i]), u)
        : u(Rt[s] + (i || '')),
  Ff = (s, i) => {
    const o = new FileReader();
    return (
      (o.onload = function () {
        const u = o.result.split(',')[1];
        i('b' + (u || ''));
      }),
      o.readAsDataURL(s)
    );
  };
function Bf(s) {
  return s instanceof Uint8Array
    ? s
    : s instanceof ArrayBuffer
      ? new Uint8Array(s)
      : new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
}
let Pl;
function $y(s, i) {
  if (Md && s.data instanceof Blob)
    return s.data.arrayBuffer().then(Bf).then(i);
  if ($d && (s.data instanceof ArrayBuffer || Ud(s.data))) return i(Bf(s.data));
  pu(s, !1, (o) => {
    Pl || (Pl = new TextEncoder()), i(Pl.encode(o));
  });
}
const Mf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  qr = typeof Uint8Array > 'u' ? [] : new Uint8Array(256);
for (let s = 0; s < Mf.length; s++) qr[Mf.charCodeAt(s)] = s;
const Uy = (s) => {
    let i = s.length * 0.75,
      o = s.length,
      u,
      c = 0,
      d,
      h,
      v,
      S;
    s[s.length - 1] === '=' && (i--, s[s.length - 2] === '=' && i--);
    const _ = new ArrayBuffer(i),
      N = new Uint8Array(_);
    for (u = 0; u < o; u += 4)
      (d = qr[s.charCodeAt(u)]),
        (h = qr[s.charCodeAt(u + 1)]),
        (v = qr[s.charCodeAt(u + 2)]),
        (S = qr[s.charCodeAt(u + 3)]),
        (N[c++] = (d << 2) | (h >> 4)),
        (N[c++] = ((h & 15) << 4) | (v >> 2)),
        (N[c++] = ((v & 3) << 6) | (S & 63));
    return _;
  },
  Vy = typeof ArrayBuffer == 'function',
  hu = (s, i) => {
    if (typeof s != 'string') return { type: 'message', data: Vd(s, i) };
    const o = s.charAt(0);
    return o === 'b'
      ? { type: 'message', data: Hy(s.substring(1), i) }
      : co[o]
        ? s.length > 1
          ? { type: co[o], data: s.substring(1) }
          : { type: co[o] }
        : Bl;
  },
  Hy = (s, i) => {
    if (Vy) {
      const o = Uy(s);
      return Vd(o, i);
    } else return { base64: !0, data: s };
  },
  Vd = (s, i) => {
    switch (i) {
      case 'blob':
        return s instanceof Blob ? s : new Blob([s]);
      case 'arraybuffer':
      default:
        return s instanceof ArrayBuffer ? s : s.buffer;
    }
  },
  Hd = '',
  Ky = (s, i) => {
    const o = s.length,
      u = new Array(o);
    let c = 0;
    s.forEach((d, h) => {
      pu(d, !1, (v) => {
        (u[h] = v), ++c === o && i(u.join(Hd));
      });
    });
  },
  Wy = (s, i) => {
    const o = s.split(Hd),
      u = [];
    for (let c = 0; c < o.length; c++) {
      const d = hu(o[c], i);
      if ((u.push(d), d.type === 'error')) break;
    }
    return u;
  };
function Qy() {
  return new TransformStream({
    transform(s, i) {
      $y(s, (o) => {
        const u = o.length;
        let c;
        if (u < 126)
          (c = new Uint8Array(1)), new DataView(c.buffer).setUint8(0, u);
        else if (u < 65536) {
          c = new Uint8Array(3);
          const d = new DataView(c.buffer);
          d.setUint8(0, 126), d.setUint16(1, u);
        } else {
          c = new Uint8Array(9);
          const d = new DataView(c.buffer);
          d.setUint8(0, 127), d.setBigUint64(1, BigInt(u));
        }
        s.data && typeof s.data != 'string' && (c[0] |= 128),
          i.enqueue(c),
          i.enqueue(o);
      });
    },
  });
}
let Ll;
function lo(s) {
  return s.reduce((i, o) => i + o.length, 0);
}
function uo(s, i) {
  if (s[0].length === i) return s.shift();
  const o = new Uint8Array(i);
  let u = 0;
  for (let c = 0; c < i; c++)
    (o[c] = s[0][u++]), u === s[0].length && (s.shift(), (u = 0));
  return s.length && u < s[0].length && (s[0] = s[0].slice(u)), o;
}
function qy(s, i) {
  Ll || (Ll = new TextDecoder());
  const o = [];
  let u = 0,
    c = -1,
    d = !1;
  return new TransformStream({
    transform(h, v) {
      for (o.push(h); ; ) {
        if (u === 0) {
          if (lo(o) < 1) break;
          const S = uo(o, 1);
          (d = (S[0] & 128) === 128),
            (c = S[0] & 127),
            c < 126 ? (u = 3) : c === 126 ? (u = 1) : (u = 2);
        } else if (u === 1) {
          if (lo(o) < 2) break;
          const S = uo(o, 2);
          (c = new DataView(S.buffer, S.byteOffset, S.length).getUint16(0)),
            (u = 3);
        } else if (u === 2) {
          if (lo(o) < 8) break;
          const S = uo(o, 8),
            _ = new DataView(S.buffer, S.byteOffset, S.length),
            N = _.getUint32(0);
          if (N > Math.pow(2, 21) - 1) {
            v.enqueue(Bl);
            break;
          }
          (c = N * Math.pow(2, 32) + _.getUint32(4)), (u = 3);
        } else {
          if (lo(o) < c) break;
          const S = uo(o, c);
          v.enqueue(hu(d ? S : Ll.decode(S), i)), (u = 0);
        }
        if (c === 0 || c > s) {
          v.enqueue(Bl);
          break;
        }
      }
    },
  });
}
const Kd = 4;
function Re(s) {
  if (s) return Yy(s);
}
function Yy(s) {
  for (var i in Re.prototype) s[i] = Re.prototype[i];
  return s;
}
Re.prototype.on = Re.prototype.addEventListener = function (s, i) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks['$' + s] = this._callbacks['$' + s] || []).push(i),
    this
  );
};
Re.prototype.once = function (s, i) {
  function o() {
    this.off(s, o), i.apply(this, arguments);
  }
  return (o.fn = i), this.on(s, o), this;
};
Re.prototype.off =
  Re.prototype.removeListener =
  Re.prototype.removeAllListeners =
  Re.prototype.removeEventListener =
    function (s, i) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var o = this._callbacks['$' + s];
      if (!o) return this;
      if (arguments.length == 1) return delete this._callbacks['$' + s], this;
      for (var u, c = 0; c < o.length; c++)
        if (((u = o[c]), u === i || u.fn === i)) {
          o.splice(c, 1);
          break;
        }
      return o.length === 0 && delete this._callbacks['$' + s], this;
    };
Re.prototype.emit = function (s) {
  this._callbacks = this._callbacks || {};
  for (
    var i = new Array(arguments.length - 1),
      o = this._callbacks['$' + s],
      u = 1;
    u < arguments.length;
    u++
  )
    i[u - 1] = arguments[u];
  if (o) {
    o = o.slice(0);
    for (var u = 0, c = o.length; u < c; ++u) o[u].apply(this, i);
  }
  return this;
};
Re.prototype.emitReserved = Re.prototype.emit;
Re.prototype.listeners = function (s) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks['$' + s] || []
  );
};
Re.prototype.hasListeners = function (s) {
  return !!this.listeners(s).length;
};
const Co =
    typeof Promise == 'function' && typeof Promise.resolve == 'function'
      ? (i) => Promise.resolve().then(i)
      : (i, o) => o(i, 0),
  ct =
    typeof self < 'u'
      ? self
      : typeof window < 'u'
        ? window
        : Function('return this')(),
  Xy = 'arraybuffer';
function Wd(s, ...i) {
  return i.reduce((o, u) => (s.hasOwnProperty(u) && (o[u] = s[u]), o), {});
}
const Gy = ct.setTimeout,
  Jy = ct.clearTimeout;
function _o(s, i) {
  i.useNativeTimers
    ? ((s.setTimeoutFn = Gy.bind(ct)), (s.clearTimeoutFn = Jy.bind(ct)))
    : ((s.setTimeoutFn = ct.setTimeout.bind(ct)),
      (s.clearTimeoutFn = ct.clearTimeout.bind(ct)));
}
const Zy = 1.33;
function by(s) {
  return typeof s == 'string'
    ? ev(s)
    : Math.ceil((s.byteLength || s.size) * Zy);
}
function ev(s) {
  let i = 0,
    o = 0;
  for (let u = 0, c = s.length; u < c; u++)
    (i = s.charCodeAt(u)),
      i < 128
        ? (o += 1)
        : i < 2048
          ? (o += 2)
          : i < 55296 || i >= 57344
            ? (o += 3)
            : (u++, (o += 4));
  return o;
}
function Qd() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function tv(s) {
  let i = '';
  for (let o in s)
    s.hasOwnProperty(o) &&
      (i.length && (i += '&'),
      (i += encodeURIComponent(o) + '=' + encodeURIComponent(s[o])));
  return i;
}
function nv(s) {
  let i = {},
    o = s.split('&');
  for (let u = 0, c = o.length; u < c; u++) {
    let d = o[u].split('=');
    i[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
  }
  return i;
}
class rv extends Error {
  constructor(i, o, u) {
    super(i),
      (this.description = o),
      (this.context = u),
      (this.type = 'TransportError');
  }
}
class mu extends Re {
  constructor(i) {
    super(),
      (this.writable = !1),
      _o(this, i),
      (this.opts = i),
      (this.query = i.query),
      (this.socket = i.socket),
      (this.supportsBinary = !i.forceBase64);
  }
  onError(i, o, u) {
    return super.emitReserved('error', new rv(i, o, u)), this;
  }
  open() {
    return (this.readyState = 'opening'), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === 'opening' || this.readyState === 'open') &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(i) {
    this.readyState === 'open' && this.write(i);
  }
  onOpen() {
    (this.readyState = 'open'),
      (this.writable = !0),
      super.emitReserved('open');
  }
  onData(i) {
    const o = hu(i, this.socket.binaryType);
    this.onPacket(o);
  }
  onPacket(i) {
    super.emitReserved('packet', i);
  }
  onClose(i) {
    (this.readyState = 'closed'), super.emitReserved('close', i);
  }
  pause(i) {}
  createUri(i, o = {}) {
    return (
      i +
      '://' +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(o)
    );
  }
  _hostname() {
    const i = this.opts.hostname;
    return i.indexOf(':') === -1 ? i : '[' + i + ']';
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ':' + this.opts.port
      : '';
  }
  _query(i) {
    const o = tv(i);
    return o.length ? '?' + o : '';
  }
}
class iv extends mu {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return 'polling';
  }
  doOpen() {
    this._poll();
  }
  pause(i) {
    this.readyState = 'pausing';
    const o = () => {
      (this.readyState = 'paused'), i();
    };
    if (this._polling || !this.writable) {
      let u = 0;
      this._polling &&
        (u++,
        this.once('pollComplete', function () {
          --u || o();
        })),
        this.writable ||
          (u++,
          this.once('drain', function () {
            --u || o();
          }));
    } else o();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved('poll');
  }
  onData(i) {
    const o = (u) => {
      if (
        (this.readyState === 'opening' && u.type === 'open' && this.onOpen(),
        u.type === 'close')
      )
        return (
          this.onClose({ description: 'transport closed by the server' }), !1
        );
      this.onPacket(u);
    };
    Wy(i, this.socket.binaryType).forEach(o),
      this.readyState !== 'closed' &&
        ((this._polling = !1),
        this.emitReserved('pollComplete'),
        this.readyState === 'open' && this._poll());
  }
  doClose() {
    const i = () => {
      this.write([{ type: 'close' }]);
    };
    this.readyState === 'open' ? i() : this.once('open', i);
  }
  write(i) {
    (this.writable = !1),
      Ky(i, (o) => {
        this.doWrite(o, () => {
          (this.writable = !0), this.emitReserved('drain');
        });
      });
  }
  uri() {
    const i = this.opts.secure ? 'https' : 'http',
      o = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (o[this.opts.timestampParam] = Qd()),
      !this.supportsBinary && !o.sid && (o.b64 = 1),
      this.createUri(i, o)
    );
  }
}
let qd = !1;
try {
  qd = typeof XMLHttpRequest < 'u' && 'withCredentials' in new XMLHttpRequest();
} catch {}
const ov = qd;
function sv() {}
class lv extends iv {
  constructor(i) {
    if ((super(i), typeof location < 'u')) {
      const o = location.protocol === 'https:';
      let u = location.port;
      u || (u = o ? '443' : '80'),
        (this.xd =
          (typeof location < 'u' && i.hostname !== location.hostname) ||
          u !== i.port);
    }
  }
  doWrite(i, o) {
    const u = this.request({ method: 'POST', data: i });
    u.on('success', o),
      u.on('error', (c, d) => {
        this.onError('xhr post error', c, d);
      });
  }
  doPoll() {
    const i = this.request();
    i.on('data', this.onData.bind(this)),
      i.on('error', (o, u) => {
        this.onError('xhr poll error', o, u);
      }),
      (this.pollXhr = i);
  }
}
class Tt extends Re {
  constructor(i, o, u) {
    super(),
      (this.createRequest = i),
      _o(this, u),
      (this._opts = u),
      (this._method = u.method || 'GET'),
      (this._uri = o),
      (this._data = u.data !== void 0 ? u.data : null),
      this._create();
  }
  _create() {
    var i;
    const o = Wd(
      this._opts,
      'agent',
      'pfx',
      'key',
      'passphrase',
      'cert',
      'ca',
      'ciphers',
      'rejectUnauthorized',
      'autoUnref'
    );
    o.xdomain = !!this._opts.xd;
    const u = (this._xhr = this.createRequest(o));
    try {
      u.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          u.setDisableHeaderCheck && u.setDisableHeaderCheck(!0);
          for (let c in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(c) &&
              u.setRequestHeader(c, this._opts.extraHeaders[c]);
        }
      } catch {}
      if (this._method === 'POST')
        try {
          u.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        } catch {}
      try {
        u.setRequestHeader('Accept', '*/*');
      } catch {}
      (i = this._opts.cookieJar) === null || i === void 0 || i.addCookies(u),
        'withCredentials' in u &&
          (u.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (u.timeout = this._opts.requestTimeout),
        (u.onreadystatechange = () => {
          var c;
          u.readyState === 3 &&
            ((c = this._opts.cookieJar) === null ||
              c === void 0 ||
              c.parseCookies(u.getResponseHeader('set-cookie'))),
            u.readyState === 4 &&
              (u.status === 200 || u.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof u.status == 'number' ? u.status : 0);
                  }, 0));
        }),
        u.send(this._data);
    } catch (c) {
      this.setTimeoutFn(() => {
        this._onError(c);
      }, 0);
      return;
    }
    typeof document < 'u' &&
      ((this._index = Tt.requestsCount++), (Tt.requests[this._index] = this));
  }
  _onError(i) {
    this.emitReserved('error', i, this._xhr), this._cleanup(!0);
  }
  _cleanup(i) {
    if (!(typeof this._xhr > 'u' || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = sv), i))
        try {
          this._xhr.abort();
        } catch {}
      typeof document < 'u' && delete Tt.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const i = this._xhr.responseText;
    i !== null &&
      (this.emitReserved('data', i),
      this.emitReserved('success'),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
}
Tt.requestsCount = 0;
Tt.requests = {};
if (typeof document < 'u') {
  if (typeof attachEvent == 'function') attachEvent('onunload', $f);
  else if (typeof addEventListener == 'function') {
    const s = 'onpagehide' in ct ? 'pagehide' : 'unload';
    addEventListener(s, $f, !1);
  }
}
function $f() {
  for (let s in Tt.requests)
    Tt.requests.hasOwnProperty(s) && Tt.requests[s].abort();
}
const uv = (function () {
  const s = Yd({ xdomain: !1 });
  return s && s.responseType !== null;
})();
class av extends lv {
  constructor(i) {
    super(i);
    const o = i && i.forceBase64;
    this.supportsBinary = uv && !o;
  }
  request(i = {}) {
    return (
      Object.assign(i, { xd: this.xd }, this.opts), new Tt(Yd, this.uri(), i)
    );
  }
}
function Yd(s) {
  const i = s.xdomain;
  try {
    if (typeof XMLHttpRequest < 'u' && (!i || ov)) return new XMLHttpRequest();
  } catch {}
  if (!i)
    try {
      return new ct[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch {}
}
const Xd =
  typeof navigator < 'u' &&
  typeof navigator.product == 'string' &&
  navigator.product.toLowerCase() === 'reactnative';
class cv extends mu {
  get name() {
    return 'websocket';
  }
  doOpen() {
    const i = this.uri(),
      o = this.opts.protocols,
      u = Xd
        ? {}
        : Wd(
            this.opts,
            'agent',
            'perMessageDeflate',
            'pfx',
            'key',
            'passphrase',
            'cert',
            'ca',
            'ciphers',
            'rejectUnauthorized',
            'localAddress',
            'protocolVersion',
            'origin',
            'maxPayload',
            'family',
            'checkServerIdentity'
          );
    this.opts.extraHeaders && (u.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(i, o, u);
    } catch (c) {
      return this.emitReserved('error', c);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (i) =>
        this.onClose({
          description: 'websocket connection closed',
          context: i,
        })),
      (this.ws.onmessage = (i) => this.onData(i.data)),
      (this.ws.onerror = (i) => this.onError('websocket error', i));
  }
  write(i) {
    this.writable = !1;
    for (let o = 0; o < i.length; o++) {
      const u = i[o],
        c = o === i.length - 1;
      pu(u, this.supportsBinary, (d) => {
        try {
          this.doWrite(u, d);
        } catch {}
        c &&
          Co(() => {
            (this.writable = !0), this.emitReserved('drain');
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < 'u' &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const i = this.opts.secure ? 'wss' : 'ws',
      o = this.query || {};
    return (
      this.opts.timestampRequests && (o[this.opts.timestampParam] = Qd()),
      this.supportsBinary || (o.b64 = 1),
      this.createUri(i, o)
    );
  }
}
const jl = ct.WebSocket || ct.MozWebSocket;
class fv extends cv {
  createSocket(i, o, u) {
    return Xd ? new jl(i, o, u) : o ? new jl(i, o) : new jl(i);
  }
  doWrite(i, o) {
    this.ws.send(o);
  }
}
class dv extends mu {
  get name() {
    return 'webtransport';
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri('https'),
        this.opts.transportOptions[this.name]
      );
    } catch (i) {
      return this.emitReserved('error', i);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((i) => {
        this.onError('webtransport error', i);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((i) => {
          const o = qy(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            u = i.readable.pipeThrough(o).getReader(),
            c = Qy();
          c.readable.pipeTo(i.writable),
            (this._writer = c.writable.getWriter());
          const d = () => {
            u.read()
              .then(({ done: v, value: S }) => {
                v || (this.onPacket(S), d());
              })
              .catch((v) => {});
          };
          d();
          const h = { type: 'open' };
          this.query.sid && (h.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(h).then(() => this.onOpen());
        });
      });
  }
  write(i) {
    this.writable = !1;
    for (let o = 0; o < i.length; o++) {
      const u = i[o],
        c = o === i.length - 1;
      this._writer.write(u).then(() => {
        c &&
          Co(() => {
            (this.writable = !0), this.emitReserved('drain');
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var i;
    (i = this._transport) === null || i === void 0 || i.close();
  }
}
const pv = { websocket: fv, webtransport: dv, polling: av },
  hv =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  mv = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor',
  ];
function Ml(s) {
  if (s.length > 8e3) throw 'URI too long';
  const i = s,
    o = s.indexOf('['),
    u = s.indexOf(']');
  o != -1 &&
    u != -1 &&
    (s =
      s.substring(0, o) +
      s.substring(o, u).replace(/:/g, ';') +
      s.substring(u, s.length));
  let c = hv.exec(s || ''),
    d = {},
    h = 14;
  for (; h--; ) d[mv[h]] = c[h] || '';
  return (
    o != -1 &&
      u != -1 &&
      ((d.source = i),
      (d.host = d.host.substring(1, d.host.length - 1).replace(/;/g, ':')),
      (d.authority = d.authority
        .replace('[', '')
        .replace(']', '')
        .replace(/;/g, ':')),
      (d.ipv6uri = !0)),
    (d.pathNames = yv(d, d.path)),
    (d.queryKey = vv(d, d.query)),
    d
  );
}
function yv(s, i) {
  const o = /\/{2,9}/g,
    u = i.replace(o, '/').split('/');
  return (
    (i.slice(0, 1) == '/' || i.length === 0) && u.splice(0, 1),
    i.slice(-1) == '/' && u.splice(u.length - 1, 1),
    u
  );
}
function vv(s, i) {
  const o = {};
  return (
    i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (u, c, d) {
      c && (o[c] = d);
    }),
    o
  );
}
const $l =
    typeof addEventListener == 'function' &&
    typeof removeEventListener == 'function',
  fo = [];
$l &&
  addEventListener(
    'offline',
    () => {
      fo.forEach((s) => s());
    },
    !1
  );
class cn extends Re {
  constructor(i, o) {
    if (
      (super(),
      (this.binaryType = Xy),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      i && typeof i == 'object' && ((o = i), (i = null)),
      i)
    ) {
      const u = Ml(i);
      (o.hostname = u.host),
        (o.secure = u.protocol === 'https' || u.protocol === 'wss'),
        (o.port = u.port),
        u.query && (o.query = u.query);
    } else o.host && (o.hostname = Ml(o.host).host);
    _o(this, o),
      (this.secure =
        o.secure != null
          ? o.secure
          : typeof location < 'u' && location.protocol === 'https:'),
      o.hostname && !o.port && (o.port = this.secure ? '443' : '80'),
      (this.hostname =
        o.hostname ||
        (typeof location < 'u' ? location.hostname : 'localhost')),
      (this.port =
        o.port ||
        (typeof location < 'u' && location.port
          ? location.port
          : this.secure
            ? '443'
            : '80')),
      (this.transports = []),
      (this._transportsByName = {}),
      o.transports.forEach((u) => {
        const c = u.prototype.name;
        this.transports.push(c), (this._transportsByName[c] = u);
      }),
      (this.opts = Object.assign(
        {
          path: '/engine.io',
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: 't',
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        o
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, '') +
        (this.opts.addTrailingSlash ? '/' : '')),
      typeof this.opts.query == 'string' &&
        (this.opts.query = nv(this.opts.query)),
      $l &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            'beforeunload',
            this._beforeunloadEventListener,
            !1
          )),
        this.hostname !== 'localhost' &&
          ((this._offlineEventListener = () => {
            this._onClose('transport close', {
              description: 'network connection lost',
            });
          }),
          fo.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(i) {
    const o = Object.assign({}, this.opts.query);
    (o.EIO = Kd), (o.transport = i), this.id && (o.sid = this.id);
    const u = Object.assign(
      {},
      this.opts,
      {
        query: o,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[i]
    );
    return new this._transportsByName[i](u);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved('error', 'No transports available');
      }, 0);
      return;
    }
    const i =
      this.opts.rememberUpgrade &&
      cn.priorWebsocketSuccess &&
      this.transports.indexOf('websocket') !== -1
        ? 'websocket'
        : this.transports[0];
    this.readyState = 'opening';
    const o = this.createTransport(i);
    o.open(), this.setTransport(o);
  }
  setTransport(i) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = i),
      i
        .on('drain', this._onDrain.bind(this))
        .on('packet', this._onPacket.bind(this))
        .on('error', this._onError.bind(this))
        .on('close', (o) => this._onClose('transport close', o));
  }
  onOpen() {
    (this.readyState = 'open'),
      (cn.priorWebsocketSuccess = this.transport.name === 'websocket'),
      this.emitReserved('open'),
      this.flush();
  }
  _onPacket(i) {
    if (
      this.readyState === 'opening' ||
      this.readyState === 'open' ||
      this.readyState === 'closing'
    )
      switch (
        (this.emitReserved('packet', i), this.emitReserved('heartbeat'), i.type)
      ) {
        case 'open':
          this.onHandshake(JSON.parse(i.data));
          break;
        case 'ping':
          this._sendPacket('pong'),
            this.emitReserved('ping'),
            this.emitReserved('pong'),
            this._resetPingTimeout();
          break;
        case 'error':
          const o = new Error('server error');
          (o.code = i.data), this._onError(o);
          break;
        case 'message':
          this.emitReserved('data', i.data),
            this.emitReserved('message', i.data);
          break;
      }
  }
  onHandshake(i) {
    this.emitReserved('handshake', i),
      (this.id = i.sid),
      (this.transport.query.sid = i.sid),
      (this._pingInterval = i.pingInterval),
      (this._pingTimeout = i.pingTimeout),
      (this._maxPayload = i.maxPayload),
      this.onOpen(),
      this.readyState !== 'closed' && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const i = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + i),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose('ping timeout');
      }, i)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved('drain') : this.flush();
  }
  flush() {
    if (
      this.readyState !== 'closed' &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const i = this._getWritablePackets();
      this.transport.send(i),
        (this._prevBufferLen = i.length),
        this.emitReserved('flush');
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === 'polling' &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let o = 1;
    for (let u = 0; u < this.writeBuffer.length; u++) {
      const c = this.writeBuffer[u].data;
      if ((c && (o += by(c)), u > 0 && o > this._maxPayload))
        return this.writeBuffer.slice(0, u);
      o += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const i = Date.now() > this._pingTimeoutTime;
    return (
      i &&
        ((this._pingTimeoutTime = 0),
        Co(() => {
          this._onClose('ping timeout');
        }, this.setTimeoutFn)),
      i
    );
  }
  write(i, o, u) {
    return this._sendPacket('message', i, o, u), this;
  }
  send(i, o, u) {
    return this._sendPacket('message', i, o, u), this;
  }
  _sendPacket(i, o, u, c) {
    if (
      (typeof o == 'function' && ((c = o), (o = void 0)),
      typeof u == 'function' && ((c = u), (u = null)),
      this.readyState === 'closing' || this.readyState === 'closed')
    )
      return;
    (u = u || {}), (u.compress = u.compress !== !1);
    const d = { type: i, data: o, options: u };
    this.emitReserved('packetCreate', d),
      this.writeBuffer.push(d),
      c && this.once('flush', c),
      this.flush();
  }
  close() {
    const i = () => {
        this._onClose('forced close'), this.transport.close();
      },
      o = () => {
        this.off('upgrade', o), this.off('upgradeError', o), i();
      },
      u = () => {
        this.once('upgrade', o), this.once('upgradeError', o);
      };
    return (
      (this.readyState === 'opening' || this.readyState === 'open') &&
        ((this.readyState = 'closing'),
        this.writeBuffer.length
          ? this.once('drain', () => {
              this.upgrading ? u() : i();
            })
          : this.upgrading
            ? u()
            : i()),
      this
    );
  }
  _onError(i) {
    if (
      ((cn.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === 'opening')
    )
      return this.transports.shift(), this._open();
    this.emitReserved('error', i), this._onClose('transport error', i);
  }
  _onClose(i, o) {
    if (
      this.readyState === 'opening' ||
      this.readyState === 'open' ||
      this.readyState === 'closing'
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners('close'),
        this.transport.close(),
        this.transport.removeAllListeners(),
        $l &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              'beforeunload',
              this._beforeunloadEventListener,
              !1
            ),
          this._offlineEventListener))
      ) {
        const u = fo.indexOf(this._offlineEventListener);
        u !== -1 && fo.splice(u, 1);
      }
      (this.readyState = 'closed'),
        (this.id = null),
        this.emitReserved('close', i, o),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
cn.protocol = Kd;
class gv extends cn {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === 'open' && this.opts.upgrade))
      for (let i = 0; i < this._upgrades.length; i++)
        this._probe(this._upgrades[i]);
  }
  _probe(i) {
    let o = this.createTransport(i),
      u = !1;
    cn.priorWebsocketSuccess = !1;
    const c = () => {
      u ||
        (o.send([{ type: 'ping', data: 'probe' }]),
        o.once('packet', (P) => {
          if (!u)
            if (P.type === 'pong' && P.data === 'probe') {
              if (
                ((this.upgrading = !0), this.emitReserved('upgrading', o), !o)
              )
                return;
              (cn.priorWebsocketSuccess = o.name === 'websocket'),
                this.transport.pause(() => {
                  u ||
                    (this.readyState !== 'closed' &&
                      (N(),
                      this.setTransport(o),
                      o.send([{ type: 'upgrade' }]),
                      this.emitReserved('upgrade', o),
                      (o = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const j = new Error('probe error');
              (j.transport = o.name), this.emitReserved('upgradeError', j);
            }
        }));
    };
    function d() {
      u || ((u = !0), N(), o.close(), (o = null));
    }
    const h = (P) => {
      const j = new Error('probe error: ' + P);
      (j.transport = o.name), d(), this.emitReserved('upgradeError', j);
    };
    function v() {
      h('transport closed');
    }
    function S() {
      h('socket closed');
    }
    function _(P) {
      o && P.name !== o.name && d();
    }
    const N = () => {
      o.removeListener('open', c),
        o.removeListener('error', h),
        o.removeListener('close', v),
        this.off('close', S),
        this.off('upgrading', _);
    };
    o.once('open', c),
      o.once('error', h),
      o.once('close', v),
      this.once('close', S),
      this.once('upgrading', _),
      this._upgrades.indexOf('webtransport') !== -1 && i !== 'webtransport'
        ? this.setTimeoutFn(() => {
            u || o.open();
          }, 200)
        : o.open();
  }
  onHandshake(i) {
    (this._upgrades = this._filterUpgrades(i.upgrades)), super.onHandshake(i);
  }
  _filterUpgrades(i) {
    const o = [];
    for (let u = 0; u < i.length; u++)
      ~this.transports.indexOf(i[u]) && o.push(i[u]);
    return o;
  }
}
let wv = class extends gv {
  constructor(i, o = {}) {
    const u = typeof i == 'object' ? i : o;
    (!u.transports || (u.transports && typeof u.transports[0] == 'string')) &&
      (u.transports = (u.transports || ['polling', 'websocket', 'webtransport'])
        .map((c) => pv[c])
        .filter((c) => !!c)),
      super(i, u);
  }
};
function xv(s, i = '', o) {
  let u = s;
  (o = o || (typeof location < 'u' && location)),
    s == null && (s = o.protocol + '//' + o.host),
    typeof s == 'string' &&
      (s.charAt(0) === '/' &&
        (s.charAt(1) === '/' ? (s = o.protocol + s) : (s = o.host + s)),
      /^(https?|wss?):\/\//.test(s) ||
        (typeof o < 'u' ? (s = o.protocol + '//' + s) : (s = 'https://' + s)),
      (u = Ml(s))),
    u.port ||
      (/^(http|ws)$/.test(u.protocol)
        ? (u.port = '80')
        : /^(http|ws)s$/.test(u.protocol) && (u.port = '443')),
    (u.path = u.path || '/');
  const d = u.host.indexOf(':') !== -1 ? '[' + u.host + ']' : u.host;
  return (
    (u.id = u.protocol + '://' + d + ':' + u.port + i),
    (u.href =
      u.protocol + '://' + d + (o && o.port === u.port ? '' : ':' + u.port)),
    u
  );
}
const Sv = typeof ArrayBuffer == 'function',
  Ev = (s) =>
    typeof ArrayBuffer.isView == 'function'
      ? ArrayBuffer.isView(s)
      : s.buffer instanceof ArrayBuffer,
  Gd = Object.prototype.toString,
  kv =
    typeof Blob == 'function' ||
    (typeof Blob < 'u' && Gd.call(Blob) === '[object BlobConstructor]'),
  Cv =
    typeof File == 'function' ||
    (typeof File < 'u' && Gd.call(File) === '[object FileConstructor]');
function yu(s) {
  return (
    (Sv && (s instanceof ArrayBuffer || Ev(s))) ||
    (kv && s instanceof Blob) ||
    (Cv && s instanceof File)
  );
}
function po(s, i) {
  if (!s || typeof s != 'object') return !1;
  if (Array.isArray(s)) {
    for (let o = 0, u = s.length; o < u; o++) if (po(s[o])) return !0;
    return !1;
  }
  if (yu(s)) return !0;
  if (s.toJSON && typeof s.toJSON == 'function' && arguments.length === 1)
    return po(s.toJSON(), !0);
  for (const o in s)
    if (Object.prototype.hasOwnProperty.call(s, o) && po(s[o])) return !0;
  return !1;
}
function _v(s) {
  const i = [],
    o = s.data,
    u = s;
  return (
    (u.data = Ul(o, i)), (u.attachments = i.length), { packet: u, buffers: i }
  );
}
function Ul(s, i) {
  if (!s) return s;
  if (yu(s)) {
    const o = { _placeholder: !0, num: i.length };
    return i.push(s), o;
  } else if (Array.isArray(s)) {
    const o = new Array(s.length);
    for (let u = 0; u < s.length; u++) o[u] = Ul(s[u], i);
    return o;
  } else if (typeof s == 'object' && !(s instanceof Date)) {
    const o = {};
    for (const u in s)
      Object.prototype.hasOwnProperty.call(s, u) && (o[u] = Ul(s[u], i));
    return o;
  }
  return s;
}
function Nv(s, i) {
  return (s.data = Vl(s.data, i)), delete s.attachments, s;
}
function Vl(s, i) {
  if (!s) return s;
  if (s && s._placeholder === !0) {
    if (typeof s.num == 'number' && s.num >= 0 && s.num < i.length)
      return i[s.num];
    throw new Error('illegal attachments');
  } else if (Array.isArray(s))
    for (let o = 0; o < s.length; o++) s[o] = Vl(s[o], i);
  else if (typeof s == 'object')
    for (const o in s)
      Object.prototype.hasOwnProperty.call(s, o) && (s[o] = Vl(s[o], i));
  return s;
}
const Tv = [
    'connect',
    'connect_error',
    'disconnect',
    'disconnecting',
    'newListener',
    'removeListener',
  ],
  Rv = 5;
var te;
(function (s) {
  (s[(s.CONNECT = 0)] = 'CONNECT'),
    (s[(s.DISCONNECT = 1)] = 'DISCONNECT'),
    (s[(s.EVENT = 2)] = 'EVENT'),
    (s[(s.ACK = 3)] = 'ACK'),
    (s[(s.CONNECT_ERROR = 4)] = 'CONNECT_ERROR'),
    (s[(s.BINARY_EVENT = 5)] = 'BINARY_EVENT'),
    (s[(s.BINARY_ACK = 6)] = 'BINARY_ACK');
})(te || (te = {}));
class Ov {
  constructor(i) {
    this.replacer = i;
  }
  encode(i) {
    return (i.type === te.EVENT || i.type === te.ACK) && po(i)
      ? this.encodeAsBinary({
          type: i.type === te.EVENT ? te.BINARY_EVENT : te.BINARY_ACK,
          nsp: i.nsp,
          data: i.data,
          id: i.id,
        })
      : [this.encodeAsString(i)];
  }
  encodeAsString(i) {
    let o = '' + i.type;
    return (
      (i.type === te.BINARY_EVENT || i.type === te.BINARY_ACK) &&
        (o += i.attachments + '-'),
      i.nsp && i.nsp !== '/' && (o += i.nsp + ','),
      i.id != null && (o += i.id),
      i.data != null && (o += JSON.stringify(i.data, this.replacer)),
      o
    );
  }
  encodeAsBinary(i) {
    const o = _v(i),
      u = this.encodeAsString(o.packet),
      c = o.buffers;
    return c.unshift(u), c;
  }
}
function Uf(s) {
  return Object.prototype.toString.call(s) === '[object Object]';
}
class vu extends Re {
  constructor(i) {
    super(), (this.reviver = i);
  }
  add(i) {
    let o;
    if (typeof i == 'string') {
      if (this.reconstructor)
        throw new Error('got plaintext data when reconstructing a packet');
      o = this.decodeString(i);
      const u = o.type === te.BINARY_EVENT;
      u || o.type === te.BINARY_ACK
        ? ((o.type = u ? te.EVENT : te.ACK),
          (this.reconstructor = new Pv(o)),
          o.attachments === 0 && super.emitReserved('decoded', o))
        : super.emitReserved('decoded', o);
    } else if (yu(i) || i.base64)
      if (this.reconstructor)
        (o = this.reconstructor.takeBinaryData(i)),
          o && ((this.reconstructor = null), super.emitReserved('decoded', o));
      else throw new Error('got binary data when not reconstructing a packet');
    else throw new Error('Unknown type: ' + i);
  }
  decodeString(i) {
    let o = 0;
    const u = { type: Number(i.charAt(0)) };
    if (te[u.type] === void 0) throw new Error('unknown packet type ' + u.type);
    if (u.type === te.BINARY_EVENT || u.type === te.BINARY_ACK) {
      const d = o + 1;
      for (; i.charAt(++o) !== '-' && o != i.length; );
      const h = i.substring(d, o);
      if (h != Number(h) || i.charAt(o) !== '-')
        throw new Error('Illegal attachments');
      u.attachments = Number(h);
    }
    if (i.charAt(o + 1) === '/') {
      const d = o + 1;
      for (; ++o && !(i.charAt(o) === ',' || o === i.length); );
      u.nsp = i.substring(d, o);
    } else u.nsp = '/';
    const c = i.charAt(o + 1);
    if (c !== '' && Number(c) == c) {
      const d = o + 1;
      for (; ++o; ) {
        const h = i.charAt(o);
        if (h == null || Number(h) != h) {
          --o;
          break;
        }
        if (o === i.length) break;
      }
      u.id = Number(i.substring(d, o + 1));
    }
    if (i.charAt(++o)) {
      const d = this.tryParse(i.substr(o));
      if (vu.isPayloadValid(u.type, d)) u.data = d;
      else throw new Error('invalid payload');
    }
    return u;
  }
  tryParse(i) {
    try {
      return JSON.parse(i, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(i, o) {
    switch (i) {
      case te.CONNECT:
        return Uf(o);
      case te.DISCONNECT:
        return o === void 0;
      case te.CONNECT_ERROR:
        return typeof o == 'string' || Uf(o);
      case te.EVENT:
      case te.BINARY_EVENT:
        return (
          Array.isArray(o) &&
          (typeof o[0] == 'number' ||
            (typeof o[0] == 'string' && Tv.indexOf(o[0]) === -1))
        );
      case te.ACK:
      case te.BINARY_ACK:
        return Array.isArray(o);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class Pv {
  constructor(i) {
    (this.packet = i), (this.buffers = []), (this.reconPack = i);
  }
  takeBinaryData(i) {
    if (
      (this.buffers.push(i), this.buffers.length === this.reconPack.attachments)
    ) {
      const o = Nv(this.reconPack, this.buffers);
      return this.finishedReconstruction(), o;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const Lv = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: vu,
      Encoder: Ov,
      get PacketType() {
        return te;
      },
      protocol: Rv,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function wt(s, i, o) {
  return (
    s.on(i, o),
    function () {
      s.off(i, o);
    }
  );
}
const jv = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Jd extends Re {
  constructor(i, o, u) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = i),
      (this.nsp = o),
      u && u.auth && (this.auth = u.auth),
      (this._opts = Object.assign({}, u)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const i = this.io;
    this.subs = [
      wt(i, 'open', this.onopen.bind(this)),
      wt(i, 'packet', this.onpacket.bind(this)),
      wt(i, 'error', this.onerror.bind(this)),
      wt(i, 'close', this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === 'open' && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...i) {
    return i.unshift('message'), this.emit.apply(this, i), this;
  }
  emit(i, ...o) {
    var u, c, d;
    if (jv.hasOwnProperty(i))
      throw new Error('"' + i.toString() + '" is a reserved event name');
    if (
      (o.unshift(i),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(o), this;
    const h = { type: te.EVENT, data: o };
    if (
      ((h.options = {}),
      (h.options.compress = this.flags.compress !== !1),
      typeof o[o.length - 1] == 'function')
    ) {
      const N = this.ids++,
        P = o.pop();
      this._registerAckCallback(N, P), (h.id = N);
    }
    const v =
        (c =
          (u = this.io.engine) === null || u === void 0
            ? void 0
            : u.transport) === null || c === void 0
          ? void 0
          : c.writable,
      S =
        this.connected &&
        !(
          !((d = this.io.engine) === null || d === void 0) &&
          d._hasPingExpired()
        );
    return (
      (this.flags.volatile && !v) ||
        (S
          ? (this.notifyOutgoingListeners(h), this.packet(h))
          : this.sendBuffer.push(h)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(i, o) {
    var u;
    const c =
      (u = this.flags.timeout) !== null && u !== void 0
        ? u
        : this._opts.ackTimeout;
    if (c === void 0) {
      this.acks[i] = o;
      return;
    }
    const d = this.io.setTimeoutFn(() => {
        delete this.acks[i];
        for (let v = 0; v < this.sendBuffer.length; v++)
          this.sendBuffer[v].id === i && this.sendBuffer.splice(v, 1);
        o.call(this, new Error('operation has timed out'));
      }, c),
      h = (...v) => {
        this.io.clearTimeoutFn(d), o.apply(this, v);
      };
    (h.withError = !0), (this.acks[i] = h);
  }
  emitWithAck(i, ...o) {
    return new Promise((u, c) => {
      const d = (h, v) => (h ? c(h) : u(v));
      (d.withError = !0), o.push(d), this.emit(i, ...o);
    });
  }
  _addToQueue(i) {
    let o;
    typeof i[i.length - 1] == 'function' && (o = i.pop());
    const u = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: i,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    i.push((c, ...d) =>
      u !== this._queue[0]
        ? void 0
        : (c !== null
            ? u.tryCount > this._opts.retries &&
              (this._queue.shift(), o && o(c))
            : (this._queue.shift(), o && o(null, ...d)),
          (u.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(u),
      this._drainQueue();
  }
  _drainQueue(i = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const o = this._queue[0];
    (o.pending && !i) ||
      ((o.pending = !0),
      o.tryCount++,
      (this.flags = o.flags),
      this.emit.apply(this, o.args));
  }
  packet(i) {
    (i.nsp = this.nsp), this.io._packet(i);
  }
  onopen() {
    typeof this.auth == 'function'
      ? this.auth((i) => {
          this._sendConnectPacket(i);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(i) {
    this.packet({
      type: te.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, i)
        : i,
    });
  }
  onerror(i) {
    this.connected || this.emitReserved('connect_error', i);
  }
  onclose(i, o) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved('disconnect', i, o),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((i) => {
      if (!this.sendBuffer.some((u) => String(u.id) === i)) {
        const u = this.acks[i];
        delete this.acks[i],
          u.withError &&
            u.call(this, new Error('socket has been disconnected'));
      }
    });
  }
  onpacket(i) {
    if (i.nsp === this.nsp)
      switch (i.type) {
        case te.CONNECT:
          i.data && i.data.sid
            ? this.onconnect(i.data.sid, i.data.pid)
            : this.emitReserved(
                'connect_error',
                new Error(
                  'It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)'
                )
              );
          break;
        case te.EVENT:
        case te.BINARY_EVENT:
          this.onevent(i);
          break;
        case te.ACK:
        case te.BINARY_ACK:
          this.onack(i);
          break;
        case te.DISCONNECT:
          this.ondisconnect();
          break;
        case te.CONNECT_ERROR:
          this.destroy();
          const u = new Error(i.data.message);
          (u.data = i.data.data), this.emitReserved('connect_error', u);
          break;
      }
  }
  onevent(i) {
    const o = i.data || [];
    i.id != null && o.push(this.ack(i.id)),
      this.connected
        ? this.emitEvent(o)
        : this.receiveBuffer.push(Object.freeze(o));
  }
  emitEvent(i) {
    if (this._anyListeners && this._anyListeners.length) {
      const o = this._anyListeners.slice();
      for (const u of o) u.apply(this, i);
    }
    super.emit.apply(this, i),
      this._pid &&
        i.length &&
        typeof i[i.length - 1] == 'string' &&
        (this._lastOffset = i[i.length - 1]);
  }
  ack(i) {
    const o = this;
    let u = !1;
    return function (...c) {
      u || ((u = !0), o.packet({ type: te.ACK, id: i, data: c }));
    };
  }
  onack(i) {
    const o = this.acks[i.id];
    typeof o == 'function' &&
      (delete this.acks[i.id],
      o.withError && i.data.unshift(null),
      o.apply(this, i.data));
  }
  onconnect(i, o) {
    (this.id = i),
      (this.recovered = o && this._pid === o),
      (this._pid = o),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved('connect'),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((i) => this.emitEvent(i)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((i) => {
        this.notifyOutgoingListeners(i), this.packet(i);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose('io server disconnect');
  }
  destroy() {
    this.subs && (this.subs.forEach((i) => i()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: te.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose('io client disconnect'),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(i) {
    return (this.flags.compress = i), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(i) {
    return (this.flags.timeout = i), this;
  }
  onAny(i) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(i),
      this
    );
  }
  prependAny(i) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(i),
      this
    );
  }
  offAny(i) {
    if (!this._anyListeners) return this;
    if (i) {
      const o = this._anyListeners;
      for (let u = 0; u < o.length; u++)
        if (i === o[u]) return o.splice(u, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(i) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(i),
      this
    );
  }
  prependAnyOutgoing(i) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(i),
      this
    );
  }
  offAnyOutgoing(i) {
    if (!this._anyOutgoingListeners) return this;
    if (i) {
      const o = this._anyOutgoingListeners;
      for (let u = 0; u < o.length; u++)
        if (i === o[u]) return o.splice(u, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(i) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const o = this._anyOutgoingListeners.slice();
      for (const u of o) u.apply(this, i.data);
    }
  }
}
function nr(s) {
  (s = s || {}),
    (this.ms = s.min || 100),
    (this.max = s.max || 1e4),
    (this.factor = s.factor || 2),
    (this.jitter = s.jitter > 0 && s.jitter <= 1 ? s.jitter : 0),
    (this.attempts = 0);
}
nr.prototype.duration = function () {
  var s = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var i = Math.random(),
      o = Math.floor(i * this.jitter * s);
    s = Math.floor(i * 10) & 1 ? s + o : s - o;
  }
  return Math.min(s, this.max) | 0;
};
nr.prototype.reset = function () {
  this.attempts = 0;
};
nr.prototype.setMin = function (s) {
  this.ms = s;
};
nr.prototype.setMax = function (s) {
  this.max = s;
};
nr.prototype.setJitter = function (s) {
  this.jitter = s;
};
class Hl extends Re {
  constructor(i, o) {
    var u;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      i && typeof i == 'object' && ((o = i), (i = void 0)),
      (o = o || {}),
      (o.path = o.path || '/socket.io'),
      (this.opts = o),
      _o(this, o),
      this.reconnection(o.reconnection !== !1),
      this.reconnectionAttempts(o.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(o.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(o.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (u = o.randomizationFactor) !== null && u !== void 0 ? u : 0.5
      ),
      (this.backoff = new nr({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(o.timeout == null ? 2e4 : o.timeout),
      (this._readyState = 'closed'),
      (this.uri = i);
    const c = o.parser || Lv;
    (this.encoder = new c.Encoder()),
      (this.decoder = new c.Decoder()),
      (this._autoConnect = o.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(i) {
    return arguments.length
      ? ((this._reconnection = !!i), i || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(i) {
    return i === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = i), this);
  }
  reconnectionDelay(i) {
    var o;
    return i === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = i),
        (o = this.backoff) === null || o === void 0 || o.setMin(i),
        this);
  }
  randomizationFactor(i) {
    var o;
    return i === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = i),
        (o = this.backoff) === null || o === void 0 || o.setJitter(i),
        this);
  }
  reconnectionDelayMax(i) {
    var o;
    return i === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = i),
        (o = this.backoff) === null || o === void 0 || o.setMax(i),
        this);
  }
  timeout(i) {
    return arguments.length ? ((this._timeout = i), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(i) {
    if (~this._readyState.indexOf('open')) return this;
    this.engine = new wv(this.uri, this.opts);
    const o = this.engine,
      u = this;
    (this._readyState = 'opening'), (this.skipReconnect = !1);
    const c = wt(o, 'open', function () {
        u.onopen(), i && i();
      }),
      d = (v) => {
        this.cleanup(),
          (this._readyState = 'closed'),
          this.emitReserved('error', v),
          i ? i(v) : this.maybeReconnectOnOpen();
      },
      h = wt(o, 'error', d);
    if (this._timeout !== !1) {
      const v = this._timeout,
        S = this.setTimeoutFn(() => {
          c(), d(new Error('timeout')), o.close();
        }, v);
      this.opts.autoUnref && S.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(S);
        });
    }
    return this.subs.push(c), this.subs.push(h), this;
  }
  connect(i) {
    return this.open(i);
  }
  onopen() {
    this.cleanup(), (this._readyState = 'open'), this.emitReserved('open');
    const i = this.engine;
    this.subs.push(
      wt(i, 'ping', this.onping.bind(this)),
      wt(i, 'data', this.ondata.bind(this)),
      wt(i, 'error', this.onerror.bind(this)),
      wt(i, 'close', this.onclose.bind(this)),
      wt(this.decoder, 'decoded', this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved('ping');
  }
  ondata(i) {
    try {
      this.decoder.add(i);
    } catch (o) {
      this.onclose('parse error', o);
    }
  }
  ondecoded(i) {
    Co(() => {
      this.emitReserved('packet', i);
    }, this.setTimeoutFn);
  }
  onerror(i) {
    this.emitReserved('error', i);
  }
  socket(i, o) {
    let u = this.nsps[i];
    return (
      u
        ? this._autoConnect && !u.active && u.connect()
        : ((u = new Jd(this, i, o)), (this.nsps[i] = u)),
      u
    );
  }
  _destroy(i) {
    const o = Object.keys(this.nsps);
    for (const u of o) if (this.nsps[u].active) return;
    this._close();
  }
  _packet(i) {
    const o = this.encoder.encode(i);
    for (let u = 0; u < o.length; u++) this.engine.write(o[u], i.options);
  }
  cleanup() {
    this.subs.forEach((i) => i()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose('forced close');
  }
  disconnect() {
    return this._close();
  }
  onclose(i, o) {
    var u;
    this.cleanup(),
      (u = this.engine) === null || u === void 0 || u.close(),
      this.backoff.reset(),
      (this._readyState = 'closed'),
      this.emitReserved('close', i, o),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const i = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved('reconnect_failed'),
        (this._reconnecting = !1);
    else {
      const o = this.backoff.duration();
      this._reconnecting = !0;
      const u = this.setTimeoutFn(() => {
        i.skipReconnect ||
          (this.emitReserved('reconnect_attempt', i.backoff.attempts),
          !i.skipReconnect &&
            i.open((c) => {
              c
                ? ((i._reconnecting = !1),
                  i.reconnect(),
                  this.emitReserved('reconnect_error', c))
                : i.onreconnect();
            }));
      }, o);
      this.opts.autoUnref && u.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(u);
        });
    }
  }
  onreconnect() {
    const i = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved('reconnect', i);
  }
}
const Kr = {};
function ho(s, i) {
  typeof s == 'object' && ((i = s), (s = void 0)), (i = i || {});
  const o = xv(s, i.path || '/socket.io'),
    u = o.source,
    c = o.id,
    d = o.path,
    h = Kr[c] && d in Kr[c].nsps,
    v = i.forceNew || i['force new connection'] || i.multiplex === !1 || h;
  let S;
  return (
    v ? (S = new Hl(u, i)) : (Kr[c] || (Kr[c] = new Hl(u, i)), (S = Kr[c])),
    o.query && !i.query && (i.query = o.queryKey),
    S.socket(o.path, i)
  );
}
Object.assign(ho, { Manager: Hl, Socket: Jd, io: ho, connect: ho });
var Zd = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Vf = xe.createContext && xe.createContext(Zd),
  Iv = ['attr', 'size', 'title'];
function zv(s, i) {
  if (s == null) return {};
  var o = Av(s, i),
    u,
    c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(s);
    for (c = 0; c < d.length; c++)
      (u = d[c]),
        !(i.indexOf(u) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(s, u) &&
          (o[u] = s[u]);
  }
  return o;
}
function Av(s, i) {
  if (s == null) return {};
  var o = {};
  for (var u in s)
    if (Object.prototype.hasOwnProperty.call(s, u)) {
      if (i.indexOf(u) >= 0) continue;
      o[u] = s[u];
    }
  return o;
}
function xo() {
  return (
    (xo = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var u in o)
              Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
          }
          return s;
        }),
    xo.apply(this, arguments)
  );
}
function Hf(s, i) {
  var o = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(s);
    i &&
      (u = u.filter(function (c) {
        return Object.getOwnPropertyDescriptor(s, c).enumerable;
      })),
      o.push.apply(o, u);
  }
  return o;
}
function So(s) {
  for (var i = 1; i < arguments.length; i++) {
    var o = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? Hf(Object(o), !0).forEach(function (u) {
          Dv(s, u, o[u]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o))
        : Hf(Object(o)).forEach(function (u) {
            Object.defineProperty(s, u, Object.getOwnPropertyDescriptor(o, u));
          });
  }
  return s;
}
function Dv(s, i, o) {
  return (
    (i = Fv(i)),
    i in s
      ? Object.defineProperty(s, i, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[i] = o),
    s
  );
}
function Fv(s) {
  var i = Bv(s, 'string');
  return typeof i == 'symbol' ? i : i + '';
}
function Bv(s, i) {
  if (typeof s != 'object' || !s) return s;
  var o = s[Symbol.toPrimitive];
  if (o !== void 0) {
    var u = o.call(s, i || 'default');
    if (typeof u != 'object') return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (i === 'string' ? String : Number)(s);
}
function bd(s) {
  return (
    s &&
    s.map((i, o) =>
      xe.createElement(i.tag, So({ key: o }, i.attr), bd(i.child))
    )
  );
}
function He(s) {
  return (i) =>
    xe.createElement(Mv, xo({ attr: So({}, s.attr) }, i), bd(s.child));
}
function Mv(s) {
  var i = (o) => {
    var { attr: u, size: c, title: d } = s,
      h = zv(s, Iv),
      v = c || o.size || '1em',
      S;
    return (
      o.className && (S = o.className),
      s.className && (S = (S ? S + ' ' : '') + s.className),
      xe.createElement(
        'svg',
        xo(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          o.attr,
          u,
          h,
          {
            className: S,
            style: So(So({ color: s.color || o.color }, o.style), s.style),
            height: v,
            width: v,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        d && xe.createElement('title', null, d),
        s.children
      )
    );
  };
  return Vf !== void 0
    ? xe.createElement(Vf.Consumer, null, (o) => i(o))
    : i(Zd);
}
function $v(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
        },
        child: [],
      },
    ],
  })(s);
}
function Uv(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z',
        },
        child: [],
      },
    ],
  })(s);
}
function Vv(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
        },
        child: [],
      },
    ],
  })(s);
}
function Hv(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z',
        },
        child: [],
      },
    ],
  })(s);
}
function Kv(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z',
        },
        child: [],
      },
    ],
  })(s);
}
function Wv(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z',
        },
        child: [],
      },
    ],
  })(s);
}
function Qv(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z',
        },
        child: [],
      },
    ],
  })(s);
}
function qv(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8l-144 0c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272l144 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z',
        },
        child: [],
      },
    ],
  })(s);
}
function Yv(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3L280 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64z',
        },
        child: [],
      },
    ],
  })(s);
}
function gu(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 384 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z',
        },
        child: [],
      },
    ],
  })(s);
}
function ep(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z',
        },
        child: [],
      },
    ],
  })(s);
}
function wu(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 384 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z',
        },
        child: [],
      },
    ],
  })(s);
}
function Xv(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z',
        },
        child: [],
      },
    ],
  })(s);
}
function Gv(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z',
        },
        child: [],
      },
    ],
  })(s);
}
function Jv(s) {
  return He({
    tag: 'svg',
    attr: { viewBox: '0 0 384 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z',
        },
        child: [],
      },
    ],
  })(s);
}
const tp = C.createContext(null),
  np = () => {
    const s = C.useContext(tp);
    if (s === null)
      throw new Error(
        'useSocketContext must be used within socketContext.Provider'
      );
    return s;
  },
  rp = (s) => typeof s == 'object' && s !== null,
  Zv = (s, i) => i in s,
  bv = (s) => Object.values(s).every((i) => typeof i == 'string'),
  eg = 'playbook_output',
  tg = (s) => rp(s) && Zv(s, 'output') && typeof s.output == 'string',
  ng = (s) => rp(s) && bv(s),
  fn = ({ iconProps: s, children: i, ...o }) =>
    g.jsxs(od, {
      ...o,
      children: [
        (s == null ? void 0 : s.Icon) &&
          g.jsx(s.Icon, {
            ...(s.utilClassesString ? { className: s.utilClassesString } : {}),
            style: { marginTop: -4 },
          }),
        i,
      ],
    }),
  rg = ({ href: s, iconProps: i, children: o }) =>
    g.jsx(fn, {
      ...(i ? { iconProps: i } : {}),
      variant: 'light',
      target: '_blank',
      href: s,
      children: o,
    }),
  mo = ({ value: s, min: i, max: o, step: u, onChange: c, label: d }) =>
    g.jsxs(g.Fragment, {
      children: [
        g.jsx(Nn.Label, {
          column: !0,
          sm: '4',
          className: 'small-label',
          children: d,
        }),
        g.jsxs(jd, {
          children: [
            g.jsxs(bl, {
              children: [
                g.jsx(Nn.Range, {
                  value: s,
                  min: i,
                  max: o,
                  step: u,
                  onChange: c,
                }),
                g.jsxs('div', {
                  className: 'd-flex justify-content-between',
                  children: [
                    g.jsx('div', { className: 'small-label', children: i }),
                    g.jsx('div', { className: 'small-label', children: o }),
                  ],
                }),
              ],
            }),
            g.jsx('div', {
              style: { width: '90px' },
              children: g.jsx(Nn.Control, {
                type: 'number',
                value: s,
                min: i,
                max: o,
                step: u,
                onChange: c,
                className: 'blend-input',
              }),
            }),
          ],
        }),
      ],
    }),
  xu = ({ children: s }) => g.jsx('h3', { className: 'mb-3', children: s }),
  ip = ({ children: s }) =>
    g.jsx('div', { className: 'hstack gap-3', children: s }),
  op = ({ children: s, utilClassesString: i }) =>
    g.jsx(Nn, { className: `vstack gap-3 ${i ?? ''}`, children: s }),
  sp = [
    't2.micro',
    't2.small',
    't2.medium',
    't3.micro',
    't3.small',
    't3.medium',
  ],
  ig = (s) => sp.find((i) => i === s) !== void 0,
  og = () => {
    const [s, i] = C.useState(!1),
      [o, u] = C.useState(3),
      [c, d] = C.useState('t2.micro');
    return g.jsx(Tn, {
      children: g.jsxs(Tn.Body, {
        children: [
          g.jsx(xu, { children: 'Cluster Properties' }),
          g.jsxs(op, {
            utilClassesString: 'mb-3',
            children: [
              g.jsx(mo, {
                value: o,
                min: 1,
                max: 10,
                step: 1,
                onChange: (h) => {
                  u(Number(h.target.value));
                },
                label: 'Number of Nodes',
              }),
              g.jsxs(Nn.Group, {
                children: [
                  g.jsx(Nn.Label, {
                    column: !0,
                    sm: '4',
                    className: 'small-label',
                    children: 'Instance Type',
                  }),
                  g.jsx(Nn.Select, {
                    value: c,
                    onChange: (h) => {
                      ig(h.target.value) && d(h.target.value);
                    },
                    children: sp.map((h) =>
                      g.jsx('option', { value: h, children: h }, h)
                    ),
                  }),
                ],
              }),
              g.jsxs(ip, {
                children: [
                  g.jsx(fn, {
                    variant: 'primary',
                    onClick: () => {
                      console.log('Saving cluster properties...');
                    },
                    children: 'Save',
                  }),
                  g.jsx(fn, {
                    variant: s ? 'warning' : 'success',
                    iconProps: { Icon: s ? wu : gu, utilClassesString: 'me-2' },
                    onClick: () => {
                      i((h) => !h),
                        console.log(`Cluster ${s ? 'stopped' : 'started'}.`);
                    },
                    children: `${s ? 'Stop' : 'Run'} Cluster`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  sg = () => {
    const [s, i] = C.useState(!1),
      [o, u] = C.useState(1e3),
      [c, d] = C.useState(500),
      [h, v] = C.useState(2);
    return g.jsx(Tn, {
      children: g.jsxs(Tn.Body, {
        children: [
          g.jsx(xu, { children: 'Loader Properties' }),
          g.jsxs(op, {
            children: [
              g.jsx(mo, {
                value: o,
                min: 500,
                max: 5e3,
                step: 100,
                onChange: (S) => {
                  u(Number(S.target.value));
                },
                label: 'Read Ops/sec',
              }),
              g.jsx(mo, {
                value: c,
                min: 100,
                max: 5e3,
                step: 100,
                onChange: (S) => {
                  d(Number(S.target.value));
                },
                label: 'Write Ops/sec',
              }),
              g.jsx(mo, {
                value: h,
                min: 1,
                max: 20,
                step: 1,
                onChange: (S) => {
                  v(Number(S.target.value));
                },
                label: 'Number of Loader Instances',
              }),
              g.jsxs(ip, {
                children: [
                  g.jsx(fn, {
                    variant: 'primary',
                    onClick: () => {
                      console.log('Saving loader properties...');
                    },
                    children: 'Save',
                  }),
                  g.jsx(fn, {
                    variant: s ? 'warning' : 'success',
                    iconProps: { Icon: s ? wu : gu, utilClassesString: 'me-2' },
                    onClick: () => {
                      i((S) => !S),
                        console.log(`Loader ${s ? 'stopped' : 'started'}.`);
                    },
                    children: `${s ? 'Stop' : 'Start'} Loader`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  lg = () => g.jsxs(g.Fragment, { children: [g.jsx(og, {}), g.jsx(sg, {})] }),
  ug = [
    {
      eventKey: 'original_cluster',
      Icon: Qv,
      title: 'Set up 3-node cluster',
      description:
        'Initialize a resilient ScyllaDB cluster with three interconnected nodes, ready for high-performance data operations.',
      collapseId: 'stepOneCollapse',
    },
    {
      eventKey: 'sample_data',
      Icon: Jv,
      title: 'Load sample data',
      description:
        'Populate the database with predefined sample data, showcasing key-value pairs, relational mappings, or time-series metrics.',
      collapseId: 'stepTwoCollapse',
    },
    {
      eventKey: 'start_stress',
      Icon: ep,
      title: 'Start loader',
      description:
        'Simulate real-world traffic by generating a continuous workload on the database to evaluate its performance.',
      collapseId: 'stepThreeCollapse',
    },
    {
      eventKey: 'scale_out',
      Icon: Gv,
      title: 'Scale out (add 3 nodes)',
      description:
        "Seamlessly add three additional nodes to the cluster, enabling automatic data redistribution and increased capacity using ScyllaDB's tablet architecture.",
      collapseId: 'stepFourCollapse',
    },
    {
      eventKey: 'scale_in',
      Icon: qv,
      title: 'Scale in (remove 3 nodes)',
      description:
        'Simulate real-world traffic by generating a continuous workload on the database to evaluate its performance.',
      collapseId: 'stepFiveCollapse',
    },
    {
      eventKey: 'stop_stress',
      Icon: wu,
      title: 'Stop loader',
      description:
        'Simulate real-world traffic by generating a continuous workload on the database to evaluate its performance.',
      collapseId: 'stepSixCollapse',
    },
  ],
  ag = () =>
    g.jsxs('div', {
      children: [
        g.jsx(xu, { children: 'Tablets demo' }),
        g.jsx('ol', {
          className: 'cards-list',
          children: ug.map((s) =>
            g.jsx('li', { children: g.jsx(cg, { ...s }) }, s.eventKey)
          ),
        }),
      ],
    }),
  cg = ({ Icon: s, title: i, description: o, collapseId: u, eventKey: c }) => {
    const [d, h] = C.useState(!0),
      [v, S] = C.useState('idle'),
      { emitEvent: _ } = np();
    return g.jsxs(Tn, {
      className: 'p-2',
      children: [
        g.jsxs('div', {
          className: 'desc',
          children: [
            g.jsx(fg, {
              Icon: s,
              title: i,
              collapseId: u,
              setIsOpen: h,
              isOpen: d,
            }),
            g.jsx(dg, { isOpen: d, collapseId: u, description: o }),
          ],
        }),
        g.jsx('div', {
          className: 'actions',
          children: g.jsx(pg, {
            runState: v,
            onClick: () => {
              S('success'), _(c);
            },
          }),
        }),
      ],
    });
  },
  fg = ({ Icon: s, title: i, collapseId: o, setIsOpen: u, isOpen: c }) =>
    g.jsx('a', {
      className: 'd-block flex-grow-1',
      onClick: () => {
        u((d) => !d);
      },
      'aria-controls': o,
      'aria-expanded': c,
      children: g.jsxs('h4', { children: [g.jsx(s, {}), ' ', i] }),
    }),
  dg = ({ isOpen: s, collapseId: i, description: o }) =>
    g.jsx(Wm, {
      in: s,
      children: g.jsx('div', {
        className: 'collapse-content',
        id: i,
        children: o,
      }),
    }),
  pg = ({ runState: s, onClick: i }) => {
    switch (s) {
      case 'idle':
        return g.jsx(fn, {
          variant: 'light',
          onClick: i,
          iconProps: { Icon: gu, utilClassesString: 'me-2' },
          children: 'Run',
        });
      case 'running':
        return g.jsxs(fn, {
          variant: 'light',
          disabled: !0,
          children: [
            g.jsx(Id, {
              as: 'span',
              animation: 'border',
              size: 'sm',
              role: 'status',
              'aria-hidden': 'true',
              className: 'me-2',
            }),
            'Running',
          ],
        });
      case 'success':
        return g.jsx(fn, {
          variant: 'success',
          disabled: !0,
          iconProps: { Icon: Kv },
        });
    }
  },
  hg = '/assets/scylladb-mascot-cloud-CBF4AqgV.svg',
  mg = () =>
    g.jsxs(g.Fragment, {
      children: [g.jsx(yg, {}), g.jsx(gg, {}), g.jsx(wg, {})],
    }),
  yg = () =>
    g.jsx(Tn, {
      children: g.jsxs(Tn.Body, {
        className: 'section-about',
        children: [
          g.jsx('img', { src: hg, alt: '' }),
          g.jsxs('h2', {
            children: [
              '1 million ops/sec ',
              g.jsx('br', {}),
              'ScyllaDB demos with Terraform',
            ],
          }),
          g.jsx('p', {
            className: 'lead',
            children:
              'Test and benchmark ScyllaDB under a 1 million operations per second workload.',
          }),
        ],
      }),
    }),
  vg = [
    { href: 'https://www.scylladb.com', buttonText: 'ScyllaDB.com' },
    {
      href: 'https://docs.scylladb.com',
      buttonText: 'Documentation',
      Icon: Hv,
    },
    { href: 'https://github.com/scylladb', buttonText: 'GitHub', Icon: $v },
    { href: 'https://twitter.com/scylladb', buttonText: 'X', Icon: Vv },
    {
      href: 'https://www.linkedin.com/company/scylladb',
      buttonText: 'LinkedIn',
      Icon: Uv,
    },
  ],
  gg = () =>
    g.jsx('div', {
      className: 'flex-grow-1',
      children: g.jsx('div', {
        className: 'hstack justify-content-center gap-3 flex-wrap',
        children: vg.map((s) =>
          g.jsx(
            rg,
            {
              href: s.href,
              ...(s.Icon
                ? { iconProps: { Icon: s.Icon, utilClassesString: 'me-1' } }
                : {}),
              children: s.buttonText,
            },
            s.href
          )
        ),
      }),
    }),
  wg = () =>
    g.jsxs('div', {
      className: 'border-top pt-3 small text-center',
      children: [
        '© ',
        new Date().getFullYear(),
        ' ScyllaDB. All rights reserved.',
      ],
    }),
  xg = [
    { key: 'dashboard', title: 'Dashboard', Icon: Yv, Component: lg },
    { key: 'scenarios', title: 'Scenarios', Icon: ep, Component: ag },
    { key: 'about', title: 'About', Icon: Wv, Component: mg },
  ],
  Sg = () =>
    g.jsx(du, {
      defaultActiveKey: 'dashboard',
      id: 'controlTabs',
      className: 'nav-tabs nav-fill',
      children: xg.map(({ key: s, title: i, Icon: o, Component: u }) =>
        g.jsx(
          ao,
          {
            eventKey: s,
            title: g.jsx(lp, { title: i, Icon: o }),
            children: g.jsx(u, {}),
          },
          s
        )
      ),
    }),
  lp = ({ title: s, Icon: i }) =>
    g.jsxs(zd, {
      direction: 'horizontal',
      gap: 2,
      className: 'justify-content-center',
      children: [g.jsx(i, {}), g.jsx('span', { children: s })],
    }),
  Eg = '/data/grafana-urls.json',
  kg = () => {
    const [s, i] = C.useState(!0),
      [o, u] = C.useState(!1),
      [c, d] = C.useState(null),
      h = C.useCallback(
        async () => (
          i(!1),
          u(!0),
          fetch(Eg)
            .then((v) => {
              if (!v.ok)
                throw new Error('Network response was not ok ' + v.statusText);
              return v.json();
            })
            .then((v) => {
              if (ng(v)) console.log('Fetched grafanaUrls'), d(v);
              else
                throw new Error(
                  'Invalid Grafana URLs data received. Expected Record<string, string> but got' +
                    String(v)
                );
            })
            .catch((v) => {
              console.error('Error fetching grafanaUrls:', v);
            })
            .finally(() => {
              u(!1);
            })
        ),
        []
      );
    return (
      C.useEffect(() => {
        s && !o && h();
      }, [s, o, h]),
      g.jsx('div', {
        className: 'grafana',
        children: g.jsxs(du, {
          defaultActiveKey: 'console',
          id: 'tabMenu',
          className: 'nav-tabs',
          transition: !1,
          children: [
            g.jsx(ao, {
              eventKey: 'console',
              title: g.jsx(lp, { title: 'Console', Icon: Xv }),
              children: g.jsx(Cg, {}),
            }),
            s || o
              ? g.jsx(ao, { eventKey: 'loading', title: 'Loading Grafana...' })
              : c
                ? Object.entries(c).map(([v, S]) =>
                    g.jsx(
                      ao,
                      {
                        eventKey: v.toLowerCase(),
                        title: v,
                        children: g.jsx('iframe', { src: S, title: v }),
                      },
                      v
                    )
                  )
                : g.jsx(g.Fragment, {}),
          ],
        }),
      })
    );
  },
  Cg = () => {
    const { socketRef: s } = np(),
      [i, o] = C.useState('[Welcome to ScyllaDB Tech Demo]'),
      u = C.useRef(null);
    return (
      C.useEffect(
        () => (
          (s.current = ho()),
          s.current.on(eg, (c) => {
            tg(c)
              ? (o((d) => d + c.output), console.log(i))
              : console.error('Invalid data received:', c);
          }),
          () => {
            var c;
            (c = s.current) == null || c.disconnect();
          }
        ),
        [s, i]
      ),
      C.useEffect(() => {
        u.current && (u.current.scrollTop = u.current.scrollHeight);
      }, [i]),
      g.jsx('pre', {
        id: 'output',
        className: 'pre flex-grow-1',
        ref: u,
        children: i,
      })
    );
  },
  _g = ({ children: s }) => {
    const i = C.useRef(null),
      o = (u) => {
        console.log(`Emitting event: ${u}`), i.current && i.current.emit(u);
      };
    return g.jsx(tp.Provider, {
      value: { socketRef: i, emitEvent: o },
      children: s,
    });
  },
  Ng = '/assets/scylla-logo-CZR6A2u7.svg',
  Tg = () =>
    g.jsxs('div', {
      className: 'top-nav d-flex align-items-center justify-content-between',
      children: [
        g.jsx('img', { src: Ng, alt: 'ScyllaDB' }),
        g.jsx('h3', { children: 'Tech Demo' }),
      ],
    }),
  Rg = () =>
    g.jsxs(_g, {
      children: [
        g.jsxs('div', {
          className: 'controls gap-4',
          children: [g.jsx(Tg, {}), g.jsx(Sg, {})],
        }),
        g.jsx(kg, {}),
      ],
    }),
  Kf = document.getElementById('root');
if (Kf)
  cm.createRoot(Kf).render(g.jsx(C.StrictMode, { children: g.jsx(Rg, {}) }));
else throw new Error('No root element found');
