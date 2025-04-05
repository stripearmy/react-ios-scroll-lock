import ne from "react";
function oe(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var R = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ae() {
  if (D) return _;
  D = 1;
  var a = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function c(f, s, t) {
    var o = null;
    if (t !== void 0 && (o = "" + t), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      t = {};
      for (var i in s)
        i !== "key" && (t[i] = s[i]);
    } else t = s;
    return s = t.ref, {
      $$typeof: a,
      type: f,
      key: o,
      ref: s !== void 0 ? s : null,
      props: t
    };
  }
  return _.Fragment = m, _.jsx = c, _.jsxs = c, _;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L;
function se() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
          return "Fragment";
        case z:
          return "Profiler";
        case V:
          return "StrictMode";
        case H:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case J:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case B:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case N:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function c(e) {
      try {
        m(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), m(e);
      }
    }
    function f(e) {
      if (e === O) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = S.A;
      return e === null ? null : e.getOwner();
    }
    function t() {
      return Error("react-stack-top-frame");
    }
    function o(e) {
      if (g.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function i(e, r) {
      function n() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function q() {
      var e = a(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, n, l, p, d, h, j) {
      return n = d.ref, e = {
        $$typeof: w,
        type: e,
        key: r,
        props: d,
        _owner: p
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: q
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function y(e, r, n, l, p, d, h, j) {
      var u = r.children;
      if (u !== void 0)
        if (l)
          if (re(u)) {
            for (l = 0; l < u.length; l++)
              P(u[l]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(u);
      if (g.call(r, "key")) {
        u = a(e);
        var E = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        l = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", $[u + l] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          u,
          E,
          u
        ), $[u + l] = !0);
      }
      if (u = null, n !== void 0 && (c(n), u = "" + n), o(r) && (c(r.key), u = "" + r.key), "key" in r) {
        n = {};
        for (var x in r)
          x !== "key" && (n[x] = r[x]);
      } else n = r;
      return u && i(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        u,
        d,
        p,
        s(),
        n,
        h,
        j
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var b = ne, w = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), X = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), S = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, re = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var C, Y = {}, I = b["react-stack-bottom-frame"].bind(
      b,
      t
    )(), F = k(f(t)), $ = {};
    v.Fragment = O, v.jsx = function(e, r, n, l, p) {
      var d = 1e4 > S.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        n,
        !1,
        l,
        p,
        d ? Error("react-stack-top-frame") : I,
        d ? k(f(e)) : F
      );
    }, v.jsxs = function(e, r, n, l, p) {
      var d = 1e4 > S.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        n,
        !0,
        l,
        p,
        d ? Error("react-stack-top-frame") : I,
        d ? k(f(e)) : F
      );
    };
  }()), v;
}
var M;
function le() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? R.exports = ae() : R.exports = se()), R.exports;
}
var T = le(), A = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var W;
function ue() {
  return W || (W = 1, function(a) {
    (function() {
      var m = {}.hasOwnProperty;
      function c() {
        for (var t = "", o = 0; o < arguments.length; o++) {
          var i = arguments[o];
          i && (t = s(t, f(i)));
        }
        return t;
      }
      function f(t) {
        if (typeof t == "string" || typeof t == "number")
          return t;
        if (typeof t != "object")
          return "";
        if (Array.isArray(t))
          return c.apply(null, t);
        if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]"))
          return t.toString();
        var o = "";
        for (var i in t)
          m.call(t, i) && t[i] && (o = s(o, i));
        return o;
      }
      function s(t, o) {
        return o ? t ? t + " " + o : t + o : t;
      }
      a.exports ? (c.default = c, a.exports = c) : window.classNames = c;
    })();
  }(A)), A.exports;
}
var ce = ue();
const ie = /* @__PURE__ */ oe(ce);
function de({
  children: a,
  isOpen: m = !1,
  isInline: c = !1,
  className: f = "",
  bgColor: s = ""
}) {
  Promise.resolve({           });
  const t = ie({
    isl_holder: !0,
    "isl_holder--contents": c,
    "isl_holder--open": m,
    [f]: !!f
  }), o = s ? { "--isl-bg": s } : void 0;
  return /* @__PURE__ */ T.jsx("div", { className: t, style: o, children: /* @__PURE__ */ T.jsx("div", { className: "isl_scroller", children: /* @__PURE__ */ T.jsx("div", { className: "isl_scroller_inner", children: /* @__PURE__ */ T.jsx("div", { className: "isl_scroller_content", children: a }) }) }) });
}
export {
  de as IosScrollLock
};
