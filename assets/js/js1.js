/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.6.0",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(j).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: "absolute", visibility: "hidden", display: "block" },
    Ge = { letterSpacing: "0", fontWeight: "400" };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        "normal" === i && t in Ge && (i = Ge[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Ye);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement("input")),
    (nt = E.createElement("select").appendChild(E.createElement("option"))),
    (tt.type = "checkbox"),
    (y.checkOn = "" !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (y.radioValue = "t" === tt.value);
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = vt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(yt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : ht(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e)
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) At(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, "\r\n") };
                })
              : { name: t.name, value: n.replace(Et, "\r\n") };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");
  function It(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + "").replace(
            Ht,
            bt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Nt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Tt.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, "$1")),
              (o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              S.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && "withCredentials" in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Bt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/*! Bootstrap v4.4.1 (https://getbootstrap.com/) | Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors) | Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE) */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], t)
    : t(((e = e || self).bootstrap = {}), e.jQuery);
})(this, function (e, p) {
  "use strict";
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function s(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }
  function t(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function l(o) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? t(Object(r), !0).forEach(function (e) {
            var t, n, i;
            (t = o),
              (i = r[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = i);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
        : t(Object(r)).forEach(function (e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return o;
  }
  p = p && p.hasOwnProperty("default") ? p.default : p;
  var n = "transitionend";
  function o(e) {
    var t = this,
      n = !1;
    return (
      p(this).one(m.TRANSITION_END, function () {
        n = !0;
      }),
      setTimeout(function () {
        n || m.triggerTransitionEnd(t);
      }, e),
      this
    );
  }
  var m = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (e) {
      for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
      return e;
    },
    getSelectorFromElement: function (e) {
      var t = e.getAttribute("data-target");
      if (!t || "#" === t) {
        var n = e.getAttribute("href");
        t = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(t) ? t : null;
      } catch (e) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (e) {
      if (!e) return 0;
      var t = p(e).css("transition-duration"),
        n = p(e).css("transition-delay"),
        i = parseFloat(t),
        o = parseFloat(n);
      return i || o
        ? ((t = t.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(t) + parseFloat(n)))
        : 0;
    },
    reflow: function (e) {
      return e.offsetHeight;
    },
    triggerTransitionEnd: function (e) {
      p(e).trigger(n);
    },
    supportsTransitionEnd: function () {
      return Boolean(n);
    },
    isElement: function (e) {
      return (e[0] || e).nodeType;
    },
    typeCheckConfig: function (e, t, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = t[i],
            s =
              r && m.isElement(r)
                ? "element"
                : ((a = r),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase());
          if (!new RegExp(o).test(s))
            throw new Error(
              e.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function (e) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof e.getRootNode)
        return e instanceof ShadowRoot
          ? e
          : e.parentNode
          ? m.findShadowRoot(e.parentNode)
          : null;
      var t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof p)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var e = p.fn.jquery.split(" ")[0].split(".");
      if (
        (e[0] < 2 && e[1] < 9) ||
        (1 === e[0] && 9 === e[1] && e[2] < 1) ||
        4 <= e[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  m.jQueryDetection(),
    (p.fn.emulateTransitionEnd = o),
    (p.event.special[m.TRANSITION_END] = {
      bindType: n,
      delegateType: n,
      handle: function (e) {
        if (p(e.target).is(this))
          return e.handleObj.handler.apply(this, arguments);
      },
    });
  var r = "alert",
    a = "bs.alert",
    c = "." + a,
    h = p.fn[r],
    u = {
      CLOSE: "close" + c,
      CLOSED: "closed" + c,
      CLICK_DATA_API: "click" + c + ".data-api",
    },
    f = "alert",
    d = "fade",
    g = "show",
    _ = (function () {
      function i(e) {
        this._element = e;
      }
      var e = i.prototype;
      return (
        (e.close = function (e) {
          var t = this._element;
          e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() ||
              this._removeElement(t);
        }),
        (e.dispose = function () {
          p.removeData(this._element, a), (this._element = null);
        }),
        (e._getRootElement = function (e) {
          var t = m.getSelectorFromElement(e),
            n = !1;
          return (
            t && (n = document.querySelector(t)),
            (n = n || p(e).closest("." + f)[0])
          );
        }),
        (e._triggerCloseEvent = function (e) {
          var t = p.Event(u.CLOSE);
          return p(e).trigger(t), t;
        }),
        (e._removeElement = function (t) {
          var n = this;
          if ((p(t).removeClass(g), p(t).hasClass(d))) {
            var e = m.getTransitionDurationFromElement(t);
            p(t)
              .one(m.TRANSITION_END, function (e) {
                return n._destroyElement(t, e);
              })
              .emulateTransitionEnd(e);
          } else this._destroyElement(t);
        }),
        (e._destroyElement = function (e) {
          p(e).detach().trigger(u.CLOSED).remove();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var e = p(this),
              t = e.data(a);
            t || ((t = new i(this)), e.data(a, t)), "close" === n && t[n](this);
          });
        }),
        (i._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
        ]),
        i
      );
    })();
  p(document).on(
    u.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    _._handleDismiss(new _())
  ),
    (p.fn[r] = _._jQueryInterface),
    (p.fn[r].Constructor = _),
    (p.fn[r].noConflict = function () {
      return (p.fn[r] = h), _._jQueryInterface;
    });
  var v = "button",
    y = "bs.button",
    E = "." + y,
    b = ".data-api",
    w = p.fn[v],
    T = "active",
    C = "btn",
    S = "focus",
    D = '[data-toggle^="button"]',
    I = '[data-toggle="buttons"]',
    A = '[data-toggle="button"]',
    O = '[data-toggle="buttons"] .btn',
    N = 'input:not([type="hidden"])',
    k = ".active",
    L = ".btn",
    P = {
      CLICK_DATA_API: "click" + E + b,
      FOCUS_BLUR_DATA_API: "focus" + E + b + " blur" + E + b,
      LOAD_DATA_API: "load" + E + b,
    },
    x = (function () {
      function n(e) {
        this._element = e;
      }
      var e = n.prototype;
      return (
        (e.toggle = function () {
          var e = !0,
            t = !0,
            n = p(this._element).closest(I)[0];
          if (n) {
            var i = this._element.querySelector(N);
            if (i) {
              if ("radio" === i.type)
                if (i.checked && this._element.classList.contains(T)) e = !1;
                else {
                  var o = n.querySelector(k);
                  o && p(o).removeClass(T);
                }
              else
                "checkbox" === i.type
                  ? "LABEL" === this._element.tagName &&
                    i.checked === this._element.classList.contains(T) &&
                    (e = !1)
                  : (e = !1);
              e &&
                ((i.checked = !this._element.classList.contains(T)),
                p(i).trigger("change")),
                i.focus(),
                (t = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (t &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains(T)
              ),
            e && p(this._element).toggleClass(T));
        }),
        (e.dispose = function () {
          p.removeData(this._element, y), (this._element = null);
        }),
        (n._jQueryInterface = function (t) {
          return this.each(function () {
            var e = p(this).data(y);
            e || ((e = new n(this)), p(this).data(y, e)),
              "toggle" === t && e[t]();
          });
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
        ]),
        n
      );
    })();
  p(document)
    .on(P.CLICK_DATA_API, D, function (e) {
      var t = e.target;
      if (
        (p(t).hasClass(C) || (t = p(t).closest(L)[0]),
        !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))
      )
        e.preventDefault();
      else {
        var n = t.querySelector(N);
        if (
          n &&
          (n.hasAttribute("disabled") || n.classList.contains("disabled"))
        )
          return void e.preventDefault();
        x._jQueryInterface.call(p(t), "toggle");
      }
    })
    .on(P.FOCUS_BLUR_DATA_API, D, function (e) {
      var t = p(e.target).closest(L)[0];
      p(t).toggleClass(S, /^focus(in)?$/.test(e.type));
    }),
    p(window).on(P.LOAD_DATA_API, function () {
      for (
        var e = [].slice.call(document.querySelectorAll(O)),
          t = 0,
          n = e.length;
        t < n;
        t++
      ) {
        var i = e[t],
          o = i.querySelector(N);
        o.checked || o.hasAttribute("checked")
          ? i.classList.add(T)
          : i.classList.remove(T);
      }
      for (
        var r = 0, s = (e = [].slice.call(document.querySelectorAll(A))).length;
        r < s;
        r++
      ) {
        var a = e[r];
        "true" === a.getAttribute("aria-pressed")
          ? a.classList.add(T)
          : a.classList.remove(T);
      }
    }),
    (p.fn[v] = x._jQueryInterface),
    (p.fn[v].Constructor = x),
    (p.fn[v].noConflict = function () {
      return (p.fn[v] = w), x._jQueryInterface;
    });
  var j = "carousel",
    H = "bs.carousel",
    R = "." + H,
    F = ".data-api",
    M = p.fn[j],
    W = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    U = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    B = "next",
    q = "prev",
    K = "left",
    Q = "right",
    V = {
      SLIDE: "slide" + R,
      SLID: "slid" + R,
      KEYDOWN: "keydown" + R,
      MOUSEENTER: "mouseenter" + R,
      MOUSELEAVE: "mouseleave" + R,
      TOUCHSTART: "touchstart" + R,
      TOUCHMOVE: "touchmove" + R,
      TOUCHEND: "touchend" + R,
      POINTERDOWN: "pointerdown" + R,
      POINTERUP: "pointerup" + R,
      DRAG_START: "dragstart" + R,
      LOAD_DATA_API: "load" + R + F,
      CLICK_DATA_API: "click" + R + F,
    },
    Y = "carousel",
    z = "active",
    X = "slide",
    G = "carousel-item-right",
    $ = "carousel-item-left",
    J = "carousel-item-next",
    Z = "carousel-item-prev",
    ee = "pointer-event",
    te = ".active",
    ne = ".active.carousel-item",
    ie = ".carousel-item",
    oe = ".carousel-item img",
    re = ".carousel-item-next, .carousel-item-prev",
    se = ".carousel-indicators",
    ae = "[data-slide], [data-slide-to]",
    le = '[data-ride="carousel"]',
    ce = { TOUCH: "touch", PEN: "pen" },
    he = (function () {
      function r(e, t) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(t)),
          (this._element = e),
          (this._indicatorsElement = this._element.querySelector(se)),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var e = r.prototype;
      return (
        (e.next = function () {
          this._isSliding || this._slide(B);
        }),
        (e.nextWhenVisible = function () {
          !document.hidden &&
            p(this._element).is(":visible") &&
            "hidden" !== p(this._element).css("visibility") &&
            this.next();
        }),
        (e.prev = function () {
          this._isSliding || this._slide(q);
        }),
        (e.pause = function (e) {
          e || (this._isPaused = !0),
            this._element.querySelector(re) &&
              (m.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (e.cycle = function (e) {
          e || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (e.to = function (e) {
          var t = this;
          this._activeElement = this._element.querySelector(ne);
          var n = this._getItemIndex(this._activeElement);
          if (!(e > this._items.length - 1 || e < 0))
            if (this._isSliding)
              p(this._element).one(V.SLID, function () {
                return t.to(e);
              });
            else {
              if (n === e) return this.pause(), void this.cycle();
              var i = n < e ? B : q;
              this._slide(i, this._items[e]);
            }
        }),
        (e.dispose = function () {
          p(this._element).off(R),
            p.removeData(this._element, H),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (e._getConfig = function (e) {
          return (e = l({}, W, {}, e)), m.typeCheckConfig(j, e, U), e;
        }),
        (e._handleSwipe = function () {
          var e = Math.abs(this.touchDeltaX);
          if (!(e <= 40)) {
            var t = e / this.touchDeltaX;
            (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next();
          }
        }),
        (e._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            p(this._element).on(V.KEYDOWN, function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              p(this._element)
                .on(V.MOUSEENTER, function (e) {
                  return t.pause(e);
                })
                .on(V.MOUSELEAVE, function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (e._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var n = function (e) {
                t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              i = function (e) {
                t._pointerEvent &&
                  ce[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            p(this._element.querySelectorAll(oe)).on(
              V.DRAG_START,
              function (e) {
                return e.preventDefault();
              }
            ),
              this._pointerEvent
                ? (p(this._element).on(V.POINTERDOWN, function (e) {
                    return n(e);
                  }),
                  p(this._element).on(V.POINTERUP, function (e) {
                    return i(e);
                  }),
                  this._element.classList.add(ee))
                : (p(this._element).on(V.TOUCHSTART, function (e) {
                    return n(e);
                  }),
                  p(this._element).on(V.TOUCHMOVE, function (e) {
                    return (function (e) {
                      e.originalEvent.touches &&
                      1 < e.originalEvent.touches.length
                        ? (t.touchDeltaX = 0)
                        : (t.touchDeltaX =
                            e.originalEvent.touches[0].clientX - t.touchStartX);
                    })(e);
                  }),
                  p(this._element).on(V.TOUCHEND, function (e) {
                    return i(e);
                  }));
          }
        }),
        (e._keydown = function (e) {
          if (!/input|textarea/i.test(e.target.tagName))
            switch (e.which) {
              case 37:
                e.preventDefault(), this.prev();
                break;
              case 39:
                e.preventDefault(), this.next();
            }
        }),
        (e._getItemIndex = function (e) {
          return (
            (this._items =
              e && e.parentNode
                ? [].slice.call(e.parentNode.querySelectorAll(ie))
                : []),
            this._items.indexOf(e)
          );
        }),
        (e._getItemByDirection = function (e, t) {
          var n = e === B,
            i = e === q,
            o = this._getItemIndex(t),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return t;
          var s = (o + (e === q ? -1 : 1)) % this._items.length;
          return -1 == s ? this._items[this._items.length - 1] : this._items[s];
        }),
        (e._triggerSlideEvent = function (e, t) {
          var n = this._getItemIndex(e),
            i = this._getItemIndex(this._element.querySelector(ne)),
            o = p.Event(V.SLIDE, {
              relatedTarget: e,
              direction: t,
              from: i,
              to: n,
            });
          return p(this._element).trigger(o), o;
        }),
        (e._setActiveIndicatorElement = function (e) {
          if (this._indicatorsElement) {
            var t = [].slice.call(this._indicatorsElement.querySelectorAll(te));
            p(t).removeClass(z);
            var n = this._indicatorsElement.children[this._getItemIndex(e)];
            n && p(n).addClass(z);
          }
        }),
        (e._slide = function (e, t) {
          var n,
            i,
            o,
            r = this,
            s = this._element.querySelector(ne),
            a = this._getItemIndex(s),
            l = t || (s && this._getItemByDirection(e, s)),
            c = this._getItemIndex(l),
            h = Boolean(this._interval);
          if (
            ((o = e === B ? ((n = $), (i = J), K) : ((n = G), (i = Z), Q)),
            l && p(l).hasClass(z))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
            s &&
            l
          ) {
            (this._isSliding = !0),
              h && this.pause(),
              this._setActiveIndicatorElement(l);
            var u = p.Event(V.SLID, {
              relatedTarget: l,
              direction: o,
              from: a,
              to: c,
            });
            if (p(this._element).hasClass(X)) {
              p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n);
              var f = parseInt(l.getAttribute("data-interval"), 10);
              f
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = f))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var d = m.getTransitionDurationFromElement(s);
              p(s)
                .one(m.TRANSITION_END, function () {
                  p(l)
                    .removeClass(n + " " + i)
                    .addClass(z),
                    p(s).removeClass(z + " " + i + " " + n),
                    (r._isSliding = !1),
                    setTimeout(function () {
                      return p(r._element).trigger(u);
                    }, 0);
                })
                .emulateTransitionEnd(d);
            } else
              p(s).removeClass(z),
                p(l).addClass(z),
                (this._isSliding = !1),
                p(this._element).trigger(u);
            h && this.cycle();
          }
        }),
        (r._jQueryInterface = function (i) {
          return this.each(function () {
            var e = p(this).data(H),
              t = l({}, W, {}, p(this).data());
            "object" == typeof i && (t = l({}, t, {}, i));
            var n = "string" == typeof i ? i : t.slide;
            if (
              (e || ((e = new r(this, t)), p(this).data(H, e)),
              "number" == typeof i)
            )
              e.to(i);
            else if ("string" == typeof n) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            } else t.interval && t.ride && (e.pause(), e.cycle());
          });
        }),
        (r._dataApiClickHandler = function (e) {
          var t = m.getSelectorFromElement(this);
          if (t) {
            var n = p(t)[0];
            if (n && p(n).hasClass(Y)) {
              var i = l({}, p(n).data(), {}, p(this).data()),
                o = this.getAttribute("data-slide-to");
              o && (i.interval = !1),
                r._jQueryInterface.call(p(n), i),
                o && p(n).data(H).to(o),
                e.preventDefault();
            }
          }
        }),
        s(r, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return W;
            },
          },
        ]),
        r
      );
    })();
  p(document).on(V.CLICK_DATA_API, ae, he._dataApiClickHandler),
    p(window).on(V.LOAD_DATA_API, function () {
      for (
        var e = [].slice.call(document.querySelectorAll(le)),
          t = 0,
          n = e.length;
        t < n;
        t++
      ) {
        var i = p(e[t]);
        he._jQueryInterface.call(i, i.data());
      }
    }),
    (p.fn[j] = he._jQueryInterface),
    (p.fn[j].Constructor = he),
    (p.fn[j].noConflict = function () {
      return (p.fn[j] = M), he._jQueryInterface;
    });
  var ue = "collapse",
    fe = "bs.collapse",
    de = "." + fe,
    pe = p.fn[ue],
    me = { toggle: !0, parent: "" },
    ge = { toggle: "boolean", parent: "(string|element)" },
    _e = {
      SHOW: "show" + de,
      SHOWN: "shown" + de,
      HIDE: "hide" + de,
      HIDDEN: "hidden" + de,
      CLICK_DATA_API: "click" + de + ".data-api",
    },
    ve = "show",
    ye = "collapse",
    Ee = "collapsing",
    be = "collapsed",
    we = "width",
    Te = "height",
    Ce = ".show, .collapsing",
    Se = '[data-toggle="collapse"]',
    De = (function () {
      function a(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(Se)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = m.getSelectorFromElement(r),
            a = [].slice
              .call(document.querySelectorAll(s))
              .filter(function (e) {
                return e === t;
              });
          null !== s &&
            0 < a.length &&
            ((this._selector = s), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var e = a.prototype;
      return (
        (e.toggle = function () {
          p(this._element).hasClass(ve) ? this.hide() : this.show();
        }),
        (e.show = function () {
          var e,
            t,
            n = this;
          if (
            !this._isTransitioning &&
            !p(this._element).hasClass(ve) &&
            (this._parent &&
              0 ===
                (e = [].slice
                  .call(this._parent.querySelectorAll(Ce))
                  .filter(function (e) {
                    return "string" == typeof n._config.parent
                      ? e.getAttribute("data-parent") === n._config.parent
                      : e.classList.contains(ye);
                  })).length &&
              (e = null),
            !(
              e &&
              (t = p(e).not(this._selector).data(fe)) &&
              t._isTransitioning
            ))
          ) {
            var i = p.Event(_e.SHOW);
            if ((p(this._element).trigger(i), !i.isDefaultPrevented())) {
              e &&
                (a._jQueryInterface.call(p(e).not(this._selector), "hide"),
                t || p(e).data(fe, null));
              var o = this._getDimension();
              p(this._element).removeClass(ye).addClass(Ee),
                (this._element.style[o] = 0),
                this._triggerArray.length &&
                  p(this._triggerArray)
                    .removeClass(be)
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                s = m.getTransitionDurationFromElement(this._element);
              p(this._element)
                .one(m.TRANSITION_END, function () {
                  p(n._element).removeClass(Ee).addClass(ye).addClass(ve),
                    (n._element.style[o] = ""),
                    n.setTransitioning(!1),
                    p(n._element).trigger(_e.SHOWN);
                })
                .emulateTransitionEnd(s),
                (this._element.style[o] = this._element[r] + "px");
            }
          }
        }),
        (e.hide = function () {
          var e = this;
          if (!this._isTransitioning && p(this._element).hasClass(ve)) {
            var t = p.Event(_e.HIDE);
            if ((p(this._element).trigger(t), !t.isDefaultPrevented())) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                m.reflow(this._element),
                p(this._element).addClass(Ee).removeClass(ye).removeClass(ve);
              var i = this._triggerArray.length;
              if (0 < i)
                for (var o = 0; o < i; o++) {
                  var r = this._triggerArray[o],
                    s = m.getSelectorFromElement(r);
                  if (null !== s)
                    p([].slice.call(document.querySelectorAll(s))).hasClass(
                      ve
                    ) || p(r).addClass(be).attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[n] = "";
              var a = m.getTransitionDurationFromElement(this._element);
              p(this._element)
                .one(m.TRANSITION_END, function () {
                  e.setTransitioning(!1),
                    p(e._element)
                      .removeClass(Ee)
                      .addClass(ye)
                      .trigger(_e.HIDDEN);
                })
                .emulateTransitionEnd(a);
            }
          }
        }),
        (e.setTransitioning = function (e) {
          this._isTransitioning = e;
        }),
        (e.dispose = function () {
          p.removeData(this._element, fe),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (e._getConfig = function (e) {
          return (
            ((e = l({}, me, {}, e)).toggle = Boolean(e.toggle)),
            m.typeCheckConfig(ue, e, ge),
            e
          );
        }),
        (e._getDimension = function () {
          return p(this._element).hasClass(we) ? we : Te;
        }),
        (e._getParent = function () {
          var e,
            n = this;
          m.isElement(this._config.parent)
            ? ((e = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (e = this._config.parent[0]))
            : (e = document.querySelector(this._config.parent));
          var t =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            i = [].slice.call(e.querySelectorAll(t));
          return (
            p(i).each(function (e, t) {
              n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
            }),
            e
          );
        }),
        (e._addAriaAndCollapsedClass = function (e, t) {
          var n = p(e).hasClass(ve);
          t.length && p(t).toggleClass(be, !n).attr("aria-expanded", n);
        }),
        (a._getTargetFromElement = function (e) {
          var t = m.getSelectorFromElement(e);
          return t ? document.querySelector(t) : null;
        }),
        (a._jQueryInterface = function (i) {
          return this.each(function () {
            var e = p(this),
              t = e.data(fe),
              n = l(
                {},
                me,
                {},
                e.data(),
                {},
                "object" == typeof i && i ? i : {}
              );
            if (
              (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
              t || ((t = new a(this, n)), e.data(fe, t)),
              "string" == typeof i)
            ) {
              if ("undefined" == typeof t[i])
                throw new TypeError('No method named "' + i + '"');
              t[i]();
            }
          });
        }),
        s(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return me;
            },
          },
        ]),
        a
      );
    })();
  p(document).on(_e.CLICK_DATA_API, Se, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();
    var n = p(this),
      t = m.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(t));
    p(i).each(function () {
      var e = p(this),
        t = e.data(fe) ? "toggle" : n.data();
      De._jQueryInterface.call(e, t);
    });
  }),
    (p.fn[ue] = De._jQueryInterface),
    (p.fn[ue].Constructor = De),
    (p.fn[ue].noConflict = function () {
      return (p.fn[ue] = pe), De._jQueryInterface;
    });
  var Ie =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      "undefined" != typeof navigator,
    Ae = (function () {
      for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
        if (Ie && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
      return 0;
    })();
  var Oe =
    Ie && window.Promise
      ? function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function () {
                (t = !1), e();
              }));
          };
        }
      : function (e) {
          var t = !1;
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                (t = !1), e();
              }, Ae));
          };
        };
  function Ne(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  function ke(e, t) {
    if (1 !== e.nodeType) return [];
    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
    return t ? n[t] : n;
  }
  function Le(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function Pe(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;
      case "#document":
        return e.body;
    }
    var t = ke(e),
      n = t.overflow,
      i = t.overflowX,
      o = t.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? e : Pe(Le(e));
  }
  function xe(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }
  var je = Ie && !(!window.MSInputMethodContext || !document.documentMode),
    He = Ie && /MSIE 10/.test(navigator.userAgent);
  function Re(e) {
    return 11 === e ? je : 10 === e ? He : je || He;
  }
  function Fe(e) {
    if (!e) return document.documentElement;
    for (
      var t = Re(10) ? document.body : null, n = e.offsetParent || null;
      n === t && e.nextElementSibling;

    )
      n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === ke(n, "position")
        ? Fe(n)
        : n
      : e
      ? e.ownerDocument.documentElement
      : document.documentElement;
  }
  function Me(e) {
    return null !== e.parentNode ? Me(e.parentNode) : e;
  }
  function We(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? e : t,
      o = n ? t : e,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s = r.commonAncestorContainer;
    if ((e !== s && t !== s) || i.contains(o))
      return (function (e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || Fe(e.firstElementChild) === e);
      })(s)
        ? s
        : Fe(s);
    var a = Me(e);
    return a.host ? We(a.host, t) : We(e, Me(t).host);
  }
  function Ue(e, t) {
    var n =
        "top" === (1 < arguments.length && void 0 !== t ? t : "top")
          ? "scrollTop"
          : "scrollLeft",
      i = e.nodeName;
    if ("BODY" !== i && "HTML" !== i) return e[n];
    var o = e.ownerDocument.documentElement;
    return (e.ownerDocument.scrollingElement || o)[n];
  }
  function Be(e, t) {
    var n = "x" === t ? "Left" : "Top",
      i = "Left" == n ? "Right" : "Bottom";
    return (
      parseFloat(e["border" + n + "Width"], 10) +
      parseFloat(e["border" + i + "Width"], 10)
    );
  }
  function qe(e, t, n, i) {
    return Math.max(
      t["offset" + e],
      t["scroll" + e],
      n["client" + e],
      n["offset" + e],
      n["scroll" + e],
      Re(10)
        ? parseInt(n["offset" + e]) +
            parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")])
        : 0
    );
  }
  function Ke(e) {
    var t = e.body,
      n = e.documentElement,
      i = Re(10) && getComputedStyle(n);
    return { height: qe("Height", t, n, i), width: qe("Width", t, n, i) };
  }
  var Qe = function (e, t, n) {
    return t && Ve(e.prototype, t), n && Ve(e, n), e;
  };
  function Ve(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function Ye(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var ze =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    };
  function Xe(e) {
    return ze({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function Ge(e) {
    var t = {};
    try {
      if (Re(10)) {
        t = e.getBoundingClientRect();
        var n = Ue(e, "top"),
          i = Ue(e, "left");
        (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
      } else t = e.getBoundingClientRect();
    } catch (e) {}
    var o = {
        left: t.left,
        top: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top,
      },
      r = "HTML" === e.nodeName ? Ke(e.ownerDocument) : {},
      s = r.width || e.clientWidth || o.width,
      a = r.height || e.clientHeight || o.height,
      l = e.offsetWidth - s,
      c = e.offsetHeight - a;
    if (l || c) {
      var h = ke(e);
      (l -= Be(h, "x")), (c -= Be(h, "y")), (o.width -= l), (o.height -= c);
    }
    return Xe(o);
  }
  function $e(e, t, n) {
    var i = 2 < arguments.length && void 0 !== n && n,
      o = Re(10),
      r = "HTML" === t.nodeName,
      s = Ge(e),
      a = Ge(t),
      l = Pe(e),
      c = ke(t),
      h = parseFloat(c.borderTopWidth, 10),
      u = parseFloat(c.borderLeftWidth, 10);
    i && r && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    var f = Xe({
      top: s.top - a.top - h,
      left: s.left - a.left - u,
      width: s.width,
      height: s.height,
    });
    if (((f.marginTop = 0), (f.marginLeft = 0), !o && r)) {
      var d = parseFloat(c.marginTop, 10),
        p = parseFloat(c.marginLeft, 10);
      (f.top -= h - d),
        (f.bottom -= h - d),
        (f.left -= u - p),
        (f.right -= u - p),
        (f.marginTop = d),
        (f.marginLeft = p);
    }
    return (
      (o && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) &&
        (f = (function (e, t, n) {
          var i = 2 < arguments.length && void 0 !== n && n,
            o = Ue(t, "top"),
            r = Ue(t, "left"),
            s = i ? -1 : 1;
          return (
            (e.top += o * s),
            (e.bottom += o * s),
            (e.left += r * s),
            (e.right += r * s),
            e
          );
        })(f, t)),
      f
    );
  }
  function Je(e) {
    if (!e || !e.parentElement || Re()) return document.documentElement;
    for (var t = e.parentElement; t && "none" === ke(t, "transform"); )
      t = t.parentElement;
    return t || document.documentElement;
  }
  function Ze(e, t, n, i, o) {
    var r = 4 < arguments.length && void 0 !== o && o,
      s = { top: 0, left: 0 },
      a = r ? Je(e) : We(e, xe(t));
    if ("viewport" === i)
      s = (function (e, t) {
        var n = 1 < arguments.length && void 0 !== t && t,
          i = e.ownerDocument.documentElement,
          o = $e(e, i),
          r = Math.max(i.clientWidth, window.innerWidth || 0),
          s = Math.max(i.clientHeight, window.innerHeight || 0),
          a = n ? 0 : Ue(i),
          l = n ? 0 : Ue(i, "left");
        return Xe({
          top: a - o.top + o.marginTop,
          left: l - o.left + o.marginLeft,
          width: r,
          height: s,
        });
      })(a, r);
    else {
      var l = void 0;
      "scrollParent" === i
        ? "BODY" === (l = Pe(Le(t))).nodeName &&
          (l = e.ownerDocument.documentElement)
        : (l = "window" === i ? e.ownerDocument.documentElement : i);
      var c = $e(l, a, r);
      if (
        "HTML" !== l.nodeName ||
        (function e(t) {
          var n = t.nodeName;
          if ("BODY" === n || "HTML" === n) return !1;
          if ("fixed" === ke(t, "position")) return !0;
          var i = Le(t);
          return !!i && e(i);
        })(a)
      )
        s = c;
      else {
        var h = Ke(e.ownerDocument),
          u = h.height,
          f = h.width;
        (s.top += c.top - c.marginTop),
          (s.bottom = u + c.top),
          (s.left += c.left - c.marginLeft),
          (s.right = f + c.left);
      }
    }
    var d = "number" == typeof (n = n || 0);
    return (
      (s.left += d ? n : n.left || 0),
      (s.top += d ? n : n.top || 0),
      (s.right -= d ? n : n.right || 0),
      (s.bottom -= d ? n : n.bottom || 0),
      s
    );
  }
  function et(e, t, i, n, o, r) {
    var s = 5 < arguments.length && void 0 !== r ? r : 0;
    if (-1 === e.indexOf("auto")) return e;
    var a = Ze(i, n, s, o),
      l = {
        top: { width: a.width, height: t.top - a.top },
        right: { width: a.right - t.right, height: a.height },
        bottom: { width: a.width, height: a.bottom - t.bottom },
        left: { width: t.left - a.left, height: a.height },
      },
      c = Object.keys(l)
        .map(function (e) {
          return ze({ key: e }, l[e], {
            area: (function (e) {
              return e.width * e.height;
            })(l[e]),
          });
        })
        .sort(function (e, t) {
          return t.area - e.area;
        }),
      h = c.filter(function (e) {
        var t = e.width,
          n = e.height;
        return t >= i.clientWidth && n >= i.clientHeight;
      }),
      u = 0 < h.length ? h[0].key : c[0].key,
      f = e.split("-")[1];
    return u + (f ? "-" + f : "");
  }
  function tt(e, t, n, i) {
    var o = 3 < arguments.length && void 0 !== i ? i : null;
    return $e(n, o ? Je(t) : We(t, xe(n)), o);
  }
  function nt(e) {
    var t = e.ownerDocument.defaultView.getComputedStyle(e),
      n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
      i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
    return { width: e.offsetWidth + i, height: e.offsetHeight + n };
  }
  function it(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function ot(e, t, n) {
    n = n.split("-")[0];
    var i = nt(e),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      s = r ? "top" : "left",
      a = r ? "left" : "top",
      l = r ? "height" : "width",
      c = r ? "width" : "height";
    return (
      (o[s] = t[s] + t[l] / 2 - i[l] / 2),
      (o[a] = n === a ? t[a] - i[c] : t[it(a)]),
      o
    );
  }
  function rt(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function st(e, n, t) {
    return (
      (void 0 === t
        ? e
        : e.slice(
            0,
            (function (e, t, n) {
              if (Array.prototype.findIndex)
                return e.findIndex(function (e) {
                  return e[t] === n;
                });
              var i = rt(e, function (e) {
                return e[t] === n;
              });
              return e.indexOf(i);
            })(e, "name", t)
          )
      ).forEach(function (e) {
        e.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var t = e.function || e.fn;
        e.enabled &&
          Ne(t) &&
          ((n.offsets.popper = Xe(n.offsets.popper)),
          (n.offsets.reference = Xe(n.offsets.reference)),
          (n = t(n, e)));
      }),
      n
    );
  }
  function at(e, n) {
    return e.some(function (e) {
      var t = e.name;
      return e.enabled && t === n;
    });
  }
  function lt(e) {
    for (
      var t = [!1, "ms", "Webkit", "Moz", "O"],
        n = e.charAt(0).toUpperCase() + e.slice(1),
        i = 0;
      i < t.length;
      i++
    ) {
      var o = t[i],
        r = o ? "" + o + n : e;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function ct(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function ht(e, t, n, i) {
    (n.updateBound = i),
      ct(e).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = Pe(e);
    return (
      (function e(t, n, i, o) {
        var r = "BODY" === t.nodeName,
          s = r ? t.ownerDocument.defaultView : t;
        s.addEventListener(n, i, { passive: !0 }),
          r || e(Pe(s.parentNode), n, i, o),
          o.push(s);
      })(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function ut() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = (function (e, t) {
        return (
          ct(e).removeEventListener("resize", t.updateBound),
          t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound);
          }),
          (t.updateBound = null),
          (t.scrollParents = []),
          (t.scrollElement = null),
          (t.eventsEnabled = !1),
          t
        );
      })(this.reference, this.state)));
  }
  function ft(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function dt(n, i) {
    Object.keys(i).forEach(function (e) {
      var t = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) &&
        ft(i[e]) &&
        (t = "px"),
        (n.style[e] = i[e] + t);
    });
  }
  function pt(e, t) {
    function n(e) {
      return e;
    }
    var i = e.offsets,
      o = i.popper,
      r = i.reference,
      s = Math.round,
      a = Math.floor,
      l = s(r.width),
      c = s(o.width),
      h = -1 !== ["left", "right"].indexOf(e.placement),
      u = -1 !== e.placement.indexOf("-"),
      f = t ? (h || u || l % 2 == c % 2 ? s : a) : n,
      d = t ? s : n;
    return {
      left: f(l % 2 == 1 && c % 2 == 1 && !u && t ? o.left - 1 : o.left),
      top: d(o.top),
      bottom: d(o.bottom),
      right: f(o.right),
    };
  }
  var mt = Ie && /Firefox/i.test(navigator.userAgent);
  function gt(e, t, n) {
    var i = rt(e, function (e) {
        return e.name === t;
      }),
      o =
        !!i &&
        e.some(function (e) {
          return e.name === n && e.enabled && e.order < i.order;
        });
    if (!o) {
      var r = "`" + t + "`",
        s = "`" + n + "`";
      console.warn(
        s +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var _t = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    vt = _t.slice(3);
  function yt(e, t) {
    var n = 1 < arguments.length && void 0 !== t && t,
      i = vt.indexOf(e),
      o = vt.slice(i + 1).concat(vt.slice(0, i));
    return n ? o.reverse() : o;
  }
  var Et = "flip",
    bt = "clockwise",
    wt = "counterclockwise";
  function Tt(e, o, r, t) {
    var s = [0, 0],
      a = -1 !== ["right", "left"].indexOf(t),
      n = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      i = n.indexOf(
        rt(n, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    n[i] &&
      -1 === n[i].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var l = /\s*,\s*|\s+/,
      c =
        -1 !== i
          ? [
              n.slice(0, i).concat([n[i].split(l)[0]]),
              [n[i].split(l)[1]].concat(n.slice(i + 1)),
            ]
          : [n];
    return (
      (c = c.map(function (e, t) {
        var n = (1 === t ? !a : a) ? "height" : "width",
          i = !1;
        return e
          .reduce(function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((e[e.length - 1] = t), (i = !0), e)
              : i
              ? ((e[e.length - 1] += t), (i = !1), e)
              : e.concat(t);
          }, [])
          .map(function (e) {
            return (function (e, t, n, i) {
              var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                s = o[2];
              if (!r) return e;
              if (0 !== s.indexOf("%"))
                return "vh" !== s && "vw" !== s
                  ? r
                  : (("vh" === s
                      ? Math.max(
                          document.documentElement.clientHeight,
                          window.innerHeight || 0
                        )
                      : Math.max(
                          document.documentElement.clientWidth,
                          window.innerWidth || 0
                        )) /
                      100) *
                      r;
              var a = void 0;
              switch (s) {
                case "%p":
                  a = n;
                  break;
                case "%":
                case "%r":
                default:
                  a = i;
              }
              return (Xe(a)[t] / 100) * r;
            })(e, n, o, r);
          });
      })).forEach(function (n, i) {
        n.forEach(function (e, t) {
          ft(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1));
        });
      }),
      s
    );
  }
  var Ct = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];
            if (i) {
              var o = e.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
                  start: Ye({}, l, r[l]),
                  end: Ye({}, l, r[l] + r[c] - s[c]),
                };
              e.offsets.popper = ze({}, s, h[i]);
            }
            return e;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (e, t) {
            var n = t.offset,
              i = e.placement,
              o = e.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;
            return (
              (l = ft(+n) ? [+n, 0] : Tt(n, r, s, a)),
              "left" === a
                ? ((r.top += l[0]), (r.left -= l[1]))
                : "right" === a
                ? ((r.top += l[0]), (r.left += l[1]))
                : "top" === a
                ? ((r.left += l[0]), (r.top -= l[1]))
                : "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
              (e.popper = r),
              e
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, i) {
            var t = i.boundariesElement || Fe(e.instance.popper);
            e.instance.reference === t && (t = Fe(t));
            var n = lt("transform"),
              o = e.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[n];
            (o.top = ""), (o.left = ""), (o[n] = "");
            var l = Ze(
              e.instance.popper,
              e.instance.reference,
              i.padding,
              t,
              e.positionFixed
            );
            (o.top = r), (o.left = s), (o[n] = a), (i.boundaries = l);
            var c = i.priority,
              h = e.offsets.popper,
              u = {
                primary: function (e) {
                  var t = h[e];
                  return (
                    h[e] < l[e] &&
                      !i.escapeWithReference &&
                      (t = Math.max(h[e], l[e])),
                    Ye({}, e, t)
                  );
                },
                secondary: function (e) {
                  var t = "right" === e ? "left" : "top",
                    n = h[t];
                  return (
                    h[e] > l[e] &&
                      !i.escapeWithReference &&
                      (n = Math.min(
                        h[t],
                        l[e] - ("right" === e ? h.width : h.height)
                      )),
                    Ye({}, t, n)
                  );
                },
              };
            return (
              c.forEach(function (e) {
                var t =
                  -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                h = ze({}, h, u[t](e));
              }),
              (e.offsets.popper = h),
              e
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              n = t.popper,
              i = t.reference,
              o = e.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]),
              n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])),
              e
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, t) {
            var n;
            if (!gt(e.instance.modifiers, "arrow", "keepTogether")) return e;
            var i = t.element;
            if ("string" == typeof i) {
              if (!(i = e.instance.popper.querySelector(i))) return e;
            } else if (!e.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                e
              );
            var o = e.placement.split("-")[0],
              r = e.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              u = h.toLowerCase(),
              f = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = nt(i)[c];
            a[d] - p < s[u] && (e.offsets.popper[u] -= s[u] - (a[d] - p)),
              a[u] + p > s[d] && (e.offsets.popper[u] += a[u] + p - s[d]),
              (e.offsets.popper = Xe(e.offsets.popper));
            var m = a[u] + a[c] / 2 - p / 2,
              g = ke(e.instance.popper),
              _ = parseFloat(g["margin" + h], 10),
              v = parseFloat(g["border" + h + "Width"], 10),
              y = m - e.offsets.popper[u] - _ - v;
            return (
              (y = Math.max(Math.min(s[c] - p, y), 0)),
              (e.arrowElement = i),
              (e.offsets.arrow =
                (Ye((n = {}), u, Math.round(y)), Ye(n, f, ""), n)),
              e
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (m, g) {
            if (at(m.instance.modifiers, "inner")) return m;
            if (m.flipped && m.placement === m.originalPlacement) return m;
            var _ = Ze(
                m.instance.popper,
                m.instance.reference,
                g.padding,
                g.boundariesElement,
                m.positionFixed
              ),
              v = m.placement.split("-")[0],
              y = it(v),
              E = m.placement.split("-")[1] || "",
              b = [];
            switch (g.behavior) {
              case Et:
                b = [v, y];
                break;
              case bt:
                b = yt(v);
                break;
              case wt:
                b = yt(v, !0);
                break;
              default:
                b = g.behavior;
            }
            return (
              b.forEach(function (e, t) {
                if (v !== e || b.length === t + 1) return m;
                (v = m.placement.split("-")[0]), (y = it(v));
                var n = m.offsets.popper,
                  i = m.offsets.reference,
                  o = Math.floor,
                  r =
                    ("left" === v && o(n.right) > o(i.left)) ||
                    ("right" === v && o(n.left) < o(i.right)) ||
                    ("top" === v && o(n.bottom) > o(i.top)) ||
                    ("bottom" === v && o(n.top) < o(i.bottom)),
                  s = o(n.left) < o(_.left),
                  a = o(n.right) > o(_.right),
                  l = o(n.top) < o(_.top),
                  c = o(n.bottom) > o(_.bottom),
                  h =
                    ("left" === v && s) ||
                    ("right" === v && a) ||
                    ("top" === v && l) ||
                    ("bottom" === v && c),
                  u = -1 !== ["top", "bottom"].indexOf(v),
                  f =
                    !!g.flipVariations &&
                    ((u && "start" === E && s) ||
                      (u && "end" === E && a) ||
                      (!u && "start" === E && l) ||
                      (!u && "end" === E && c)),
                  d =
                    !!g.flipVariationsByContent &&
                    ((u && "start" === E && a) ||
                      (u && "end" === E && s) ||
                      (!u && "start" === E && c) ||
                      (!u && "end" === E && l)),
                  p = f || d;
                (r || h || p) &&
                  ((m.flipped = !0),
                  (r || h) && (v = b[t + 1]),
                  p &&
                    (E = (function (e) {
                      return "end" === e ? "start" : "start" === e ? "end" : e;
                    })(E)),
                  (m.placement = v + (E ? "-" + E : "")),
                  (m.offsets.popper = ze(
                    {},
                    m.offsets.popper,
                    ot(m.instance.popper, m.offsets.reference, m.placement)
                  )),
                  (m = st(m.instance.modifiers, m, "flip")));
              }),
              m
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (o[s ? "left" : "top"] =
                r[n] - (a ? o[s ? "width" : "height"] : 0)),
              (e.placement = it(t)),
              (e.offsets.popper = Xe(o)),
              e
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!gt(e.instance.modifiers, "hide", "preventOverflow")) return e;
            var t = e.offsets.reference,
              n = rt(e.instance.modifiers, function (e) {
                return "preventOverflow" === e.name;
              }).boundaries;
            if (
              t.bottom < n.top ||
              t.left > n.right ||
              t.top > n.bottom ||
              t.right < n.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
            }
            return e;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var n = t.x,
              i = t.y,
              o = e.offsets.popper,
              r = rt(e.instance.modifiers, function (e) {
                return "applyStyle" === e.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s = void 0 !== r ? r : t.gpuAcceleration,
              a = Fe(e.instance.popper),
              l = Ge(a),
              c = { position: o.position },
              h = pt(e, window.devicePixelRatio < 2 || !mt),
              u = "bottom" === n ? "top" : "bottom",
              f = "right" === i ? "left" : "right",
              d = lt("transform"),
              p = void 0,
              m = void 0;
            if (
              ((m =
                "bottom" == u
                  ? "HTML" === a.nodeName
                    ? -a.clientHeight + h.bottom
                    : -l.height + h.bottom
                  : h.top),
              (p =
                "right" == f
                  ? "HTML" === a.nodeName
                    ? -a.clientWidth + h.right
                    : -l.width + h.right
                  : h.left),
              s && d)
            )
              (c[d] = "translate3d(" + p + "px, " + m + "px, 0)"),
                (c[u] = 0),
                (c[f] = 0),
                (c.willChange = "transform");
            else {
              var g = "bottom" == u ? -1 : 1,
                _ = "right" == f ? -1 : 1;
              (c[u] = m * g), (c[f] = p * _), (c.willChange = u + ", " + f);
            }
            var v = { "x-placement": e.placement };
            return (
              (e.attributes = ze({}, v, e.attributes)),
              (e.styles = ze({}, c, e.styles)),
              (e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles)),
              e
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            return (
              dt(e.instance.popper, e.styles),
              (function (t, n) {
                Object.keys(n).forEach(function (e) {
                  !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                });
              })(e.instance.popper, e.attributes),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                dt(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad: function (e, t, n, i, o) {
            var r = tt(o, t, e, n.positionFixed),
              s = et(
                n.placement,
                r,
                t,
                e,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              t.setAttribute("x-placement", s),
              dt(t, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    St =
      (Qe(Dt, [
        {
          key: "update",
          value: function () {
            return function () {
              if (!this.state.isDestroyed) {
                var e = {
                  instance: this,
                  styles: {},
                  arrowStyles: {},
                  attributes: {},
                  flipped: !1,
                  offsets: {},
                };
                (e.offsets.reference = tt(
                  this.state,
                  this.popper,
                  this.reference,
                  this.options.positionFixed
                )),
                  (e.placement = et(
                    this.options.placement,
                    e.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                  )),
                  (e.originalPlacement = e.placement),
                  (e.positionFixed = this.options.positionFixed),
                  (e.offsets.popper = ot(
                    this.popper,
                    e.offsets.reference,
                    e.placement
                  )),
                  (e.offsets.popper.position = this.options.positionFixed
                    ? "fixed"
                    : "absolute"),
                  (e = st(this.modifiers, e)),
                  this.state.isCreated
                    ? this.options.onUpdate(e)
                    : ((this.state.isCreated = !0), this.options.onCreate(e));
              }
            }.call(this);
          },
        },
        {
          key: "destroy",
          value: function () {
            return function () {
              return (
                (this.state.isDestroyed = !0),
                at(this.modifiers, "applyStyle") &&
                  (this.popper.removeAttribute("x-placement"),
                  (this.popper.style.position = ""),
                  (this.popper.style.top = ""),
                  (this.popper.style.left = ""),
                  (this.popper.style.right = ""),
                  (this.popper.style.bottom = ""),
                  (this.popper.style.willChange = ""),
                  (this.popper.style[lt("transform")] = "")),
                this.disableEventListeners(),
                this.options.removeOnDestroy &&
                  this.popper.parentNode.removeChild(this.popper),
                this
              );
            }.call(this);
          },
        },
        {
          key: "enableEventListeners",
          value: function () {
            return function () {
              this.state.eventsEnabled ||
                (this.state = ht(
                  this.reference,
                  this.options,
                  this.state,
                  this.scheduleUpdate
                ));
            }.call(this);
          },
        },
        {
          key: "disableEventListeners",
          value: function () {
            return ut.call(this);
          },
        },
      ]),
      Dt);
  function Dt(e, t) {
    var n = this,
      i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    !(function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    })(this, Dt),
      (this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }),
      (this.update = Oe(this.update.bind(this))),
      (this.options = ze({}, Dt.Defaults, i)),
      (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
      (this.reference = e && e.jquery ? e[0] : e),
      (this.popper = t && t.jquery ? t[0] : t),
      (this.options.modifiers = {}),
      Object.keys(ze({}, Dt.Defaults.modifiers, i.modifiers)).forEach(function (
        e
      ) {
        n.options.modifiers[e] = ze(
          {},
          Dt.Defaults.modifiers[e] || {},
          i.modifiers ? i.modifiers[e] : {}
        );
      }),
      (this.modifiers = Object.keys(this.options.modifiers)
        .map(function (e) {
          return ze({ name: e }, n.options.modifiers[e]);
        })
        .sort(function (e, t) {
          return e.order - t.order;
        })),
      this.modifiers.forEach(function (e) {
        e.enabled &&
          Ne(e.onLoad) &&
          e.onLoad(n.reference, n.popper, n.options, e, n.state);
      }),
      this.update();
    var o = this.options.eventsEnabled;
    o && this.enableEventListeners(), (this.state.eventsEnabled = o);
  }
  (St.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (St.placements = _t),
    (St.Defaults = Ct);
  var It = "dropdown",
    At = "bs.dropdown",
    Ot = "." + At,
    Nt = ".data-api",
    kt = p.fn[It],
    Lt = new RegExp("38|40|27"),
    Pt = {
      HIDE: "hide" + Ot,
      HIDDEN: "hidden" + Ot,
      SHOW: "show" + Ot,
      SHOWN: "shown" + Ot,
      CLICK: "click" + Ot,
      CLICK_DATA_API: "click" + Ot + Nt,
      KEYDOWN_DATA_API: "keydown" + Ot + Nt,
      KEYUP_DATA_API: "keyup" + Ot + Nt,
    },
    xt = "disabled",
    jt = "show",
    Ht = "dropup",
    Rt = "dropright",
    Ft = "dropleft",
    Mt = "dropdown-menu-right",
    Wt = "position-static",
    Ut = '[data-toggle="dropdown"]',
    Bt = ".dropdown form",
    qt = ".dropdown-menu",
    Kt = ".navbar-nav",
    Qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    Vt = "top-start",
    Yt = "top-end",
    zt = "bottom-start",
    Xt = "bottom-end",
    Gt = "right-start",
    $t = "left-start",
    Jt = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    Zt = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    en = (function () {
      function c(e, t) {
        (this._element = e),
          (this._popper = null),
          (this._config = this._getConfig(t)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var e = c.prototype;
      return (
        (e.toggle = function () {
          if (!this._element.disabled && !p(this._element).hasClass(xt)) {
            var e = p(this._menu).hasClass(jt);
            c._clearMenus(), e || this.show(!0);
          }
        }),
        (e.show = function (e) {
          if (
            (void 0 === e && (e = !1),
            !(
              this._element.disabled ||
              p(this._element).hasClass(xt) ||
              p(this._menu).hasClass(jt)
            ))
          ) {
            var t = { relatedTarget: this._element },
              n = p.Event(Pt.SHOW, t),
              i = c._getParentFromElement(this._element);
            if ((p(i).trigger(n), !n.isDefaultPrevented())) {
              if (!this._inNavbar && e) {
                if ("undefined" == typeof St)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var o = this._element;
                "parent" === this._config.reference
                  ? (o = i)
                  : m.isElement(this._config.reference) &&
                    ((o = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (o = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary && p(i).addClass(Wt),
                  (this._popper = new St(
                    o,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === p(i).closest(Kt).length &&
                p(document.body).children().on("mouseover", null, p.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                p(this._menu).toggleClass(jt),
                p(i).toggleClass(jt).trigger(p.Event(Pt.SHOWN, t));
            }
          }
        }),
        (e.hide = function () {
          if (
            !this._element.disabled &&
            !p(this._element).hasClass(xt) &&
            p(this._menu).hasClass(jt)
          ) {
            var e = { relatedTarget: this._element },
              t = p.Event(Pt.HIDE, e),
              n = c._getParentFromElement(this._element);
            p(n).trigger(t),
              t.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                p(this._menu).toggleClass(jt),
                p(n).toggleClass(jt).trigger(p.Event(Pt.HIDDEN, e)));
          }
        }),
        (e.dispose = function () {
          p.removeData(this._element, At),
            p(this._element).off(Ot),
            (this._element = null),
            (this._menu = null) !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (e.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e._addEventListeners = function () {
          var t = this;
          p(this._element).on(Pt.CLICK, function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (e._getConfig = function (e) {
          return (
            (e = l(
              {},
              this.constructor.Default,
              {},
              p(this._element).data(),
              {},
              e
            )),
            m.typeCheckConfig(It, e, this.constructor.DefaultType),
            e
          );
        }),
        (e._getMenuElement = function () {
          if (!this._menu) {
            var e = c._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(qt));
          }
          return this._menu;
        }),
        (e._getPlacement = function () {
          var e = p(this._element.parentNode),
            t = zt;
          return (
            e.hasClass(Ht)
              ? ((t = Vt), p(this._menu).hasClass(Mt) && (t = Yt))
              : e.hasClass(Rt)
              ? (t = Gt)
              : e.hasClass(Ft)
              ? (t = $t)
              : p(this._menu).hasClass(Mt) && (t = Xt),
            t
          );
        }),
        (e._detectNavbar = function () {
          return 0 < p(this._element).closest(".navbar").length;
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = l(
                      {},
                      e.offsets,
                      {},
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (e._getPopperConfig = function () {
          var e = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (e.modifiers.applyStyle = { enabled: !1 }),
            l({}, e, {}, this._config.popperConfig)
          );
        }),
        (c._jQueryInterface = function (t) {
          return this.each(function () {
            var e = p(this).data(At);
            if (
              (e ||
                ((e = new c(this, "object" == typeof t ? t : null)),
                p(this).data(At, e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        (c._clearMenus = function (e) {
          if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
            for (
              var t = [].slice.call(document.querySelectorAll(Ut)),
                n = 0,
                i = t.length;
              n < i;
              n++
            ) {
              var o = c._getParentFromElement(t[n]),
                r = p(t[n]).data(At),
                s = { relatedTarget: t[n] };
              if ((e && "click" === e.type && (s.clickEvent = e), r)) {
                var a = r._menu;
                if (
                  p(o).hasClass(jt) &&
                  !(
                    e &&
                    (("click" === e.type &&
                      /input|textarea/i.test(e.target.tagName)) ||
                      ("keyup" === e.type && 9 === e.which)) &&
                    p.contains(o, e.target)
                  )
                ) {
                  var l = p.Event(Pt.HIDE, s);
                  p(o).trigger(l),
                    l.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        p(document.body)
                          .children()
                          .off("mouseover", null, p.noop),
                      t[n].setAttribute("aria-expanded", "false"),
                      r._popper && r._popper.destroy(),
                      p(a).removeClass(jt),
                      p(o).removeClass(jt).trigger(p.Event(Pt.HIDDEN, s)));
                }
              }
            }
        }),
        (c._getParentFromElement = function (e) {
          var t,
            n = m.getSelectorFromElement(e);
          return n && (t = document.querySelector(n)), t || e.parentNode;
        }),
        (c._dataApiKeydownHandler = function (e) {
          if (
            (/input|textarea/i.test(e.target.tagName)
              ? !(
                  32 === e.which ||
                  (27 !== e.which &&
                    ((40 !== e.which && 38 !== e.which) ||
                      p(e.target).closest(qt).length))
                )
              : Lt.test(e.which)) &&
            (e.preventDefault(),
            e.stopPropagation(),
            !this.disabled && !p(this).hasClass(xt))
          ) {
            var t = c._getParentFromElement(this),
              n = p(t).hasClass(jt);
            if (n || 27 !== e.which)
              if (n && (!n || (27 !== e.which && 32 !== e.which))) {
                var i = [].slice
                  .call(t.querySelectorAll(Qt))
                  .filter(function (e) {
                    return p(e).is(":visible");
                  });
                if (0 !== i.length) {
                  var o = i.indexOf(e.target);
                  38 === e.which && 0 < o && o--,
                    40 === e.which && o < i.length - 1 && o++,
                    o < 0 && (o = 0),
                    i[o].focus();
                }
              } else {
                if (27 === e.which) {
                  var r = t.querySelector(Ut);
                  p(r).trigger("focus");
                }
                p(this).trigger("click");
              }
          }
        }),
        s(c, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Jt;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Zt;
            },
          },
        ]),
        c
      );
    })();
  p(document)
    .on(Pt.KEYDOWN_DATA_API, Ut, en._dataApiKeydownHandler)
    .on(Pt.KEYDOWN_DATA_API, qt, en._dataApiKeydownHandler)
    .on(Pt.CLICK_DATA_API + " " + Pt.KEYUP_DATA_API, en._clearMenus)
    .on(Pt.CLICK_DATA_API, Ut, function (e) {
      e.preventDefault(),
        e.stopPropagation(),
        en._jQueryInterface.call(p(this), "toggle");
    })
    .on(Pt.CLICK_DATA_API, Bt, function (e) {
      e.stopPropagation();
    }),
    (p.fn[It] = en._jQueryInterface),
    (p.fn[It].Constructor = en),
    (p.fn[It].noConflict = function () {
      return (p.fn[It] = kt), en._jQueryInterface;
    });
  var tn = "modal",
    nn = "bs.modal",
    on = "." + nn,
    rn = p.fn[tn],
    sn = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    an = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    ln = {
      HIDE: "hide" + on,
      HIDE_PREVENTED: "hidePrevented" + on,
      HIDDEN: "hidden" + on,
      SHOW: "show" + on,
      SHOWN: "shown" + on,
      FOCUSIN: "focusin" + on,
      RESIZE: "resize" + on,
      CLICK_DISMISS: "click.dismiss" + on,
      KEYDOWN_DISMISS: "keydown.dismiss" + on,
      MOUSEUP_DISMISS: "mouseup.dismiss" + on,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + on,
      CLICK_DATA_API: "click" + on + ".data-api",
    },
    cn = "modal-dialog-scrollable",
    hn = "modal-scrollbar-measure",
    un = "modal-backdrop",
    fn = "modal-open",
    dn = "fade",
    pn = "show",
    mn = "modal-static",
    gn = ".modal-dialog",
    _n = ".modal-body",
    vn = '[data-toggle="modal"]',
    yn = '[data-dismiss="modal"]',
    En = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    bn = ".sticky-top",
    wn = (function () {
      function o(e, t) {
        (this._config = this._getConfig(t)),
          (this._element = e),
          (this._dialog = e.querySelector(gn)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var e = o.prototype;
      return (
        (e.toggle = function (e) {
          return this._isShown ? this.hide() : this.show(e);
        }),
        (e.show = function (e) {
          var t = this;
          if (!this._isShown && !this._isTransitioning) {
            p(this._element).hasClass(dn) && (this._isTransitioning = !0);
            var n = p.Event(ln.SHOW, { relatedTarget: e });
            p(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(this._element).on(ln.CLICK_DISMISS, yn, function (e) {
                  return t.hide(e);
                }),
                p(this._dialog).on(ln.MOUSEDOWN_DISMISS, function () {
                  p(t._element).one(ln.MOUSEUP_DISMISS, function (e) {
                    p(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return t._showElement(e);
                }));
          }
        }),
        (e.hide = function (e) {
          var t = this;
          if (
            (e && e.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = p.Event(ln.HIDE);
            if (
              (p(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var i = p(this._element).hasClass(dn);
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(document).off(ln.FOCUSIN),
                p(this._element).removeClass(pn),
                p(this._element).off(ln.CLICK_DISMISS),
                p(this._dialog).off(ln.MOUSEDOWN_DISMISS),
                i)
              ) {
                var o = m.getTransitionDurationFromElement(this._element);
                p(this._element)
                  .one(m.TRANSITION_END, function (e) {
                    return t._hideModal(e);
                  })
                  .emulateTransitionEnd(o);
              } else this._hideModal();
            }
          }
        }),
        (e.dispose = function () {
          [window, this._element, this._dialog].forEach(function (e) {
            return p(e).off(on);
          }),
            p(document).off(ln.FOCUSIN),
            p.removeData(this._element, nn),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (e.handleUpdate = function () {
          this._adjustDialog();
        }),
        (e._getConfig = function (e) {
          return (e = l({}, sn, {}, e)), m.typeCheckConfig(tn, e, an), e;
        }),
        (e._triggerBackdropTransition = function () {
          var e = this;
          if ("static" === this._config.backdrop) {
            var t = p.Event(ln.HIDE_PREVENTED);
            if ((p(this._element).trigger(t), t.defaultPrevented)) return;
            this._element.classList.add(mn);
            var n = m.getTransitionDurationFromElement(this._element);
            p(this._element)
              .one(m.TRANSITION_END, function () {
                e._element.classList.remove(mn);
              })
              .emulateTransitionEnd(n),
              this._element.focus();
          } else this.hide();
        }),
        (e._showElement = function (e) {
          var t = this,
            n = p(this._element).hasClass(dn),
            i = this._dialog ? this._dialog.querySelector(_n) : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            p(this._dialog).hasClass(cn) && i
              ? (i.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && m.reflow(this._element),
            p(this._element).addClass(pn),
            this._config.focus && this._enforceFocus();
          function o() {
            t._config.focus && t._element.focus(),
              (t._isTransitioning = !1),
              p(t._element).trigger(r);
          }
          var r = p.Event(ln.SHOWN, { relatedTarget: e });
          if (n) {
            var s = m.getTransitionDurationFromElement(this._dialog);
            p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(s);
          } else o();
        }),
        (e._enforceFocus = function () {
          var t = this;
          p(document)
            .off(ln.FOCUSIN)
            .on(ln.FOCUSIN, function (e) {
              document !== e.target &&
                t._element !== e.target &&
                0 === p(t._element).has(e.target).length &&
                t._element.focus();
            });
        }),
        (e._setEscapeEvent = function () {
          var t = this;
          this._isShown && this._config.keyboard
            ? p(this._element).on(ln.KEYDOWN_DISMISS, function (e) {
                27 === e.which && t._triggerBackdropTransition();
              })
            : this._isShown || p(this._element).off(ln.KEYDOWN_DISMISS);
        }),
        (e._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? p(window).on(ln.RESIZE, function (e) {
                return t.handleUpdate(e);
              })
            : p(window).off(ln.RESIZE);
        }),
        (e._hideModal = function () {
          var e = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              p(document.body).removeClass(fn),
                e._resetAdjustments(),
                e._resetScrollbar(),
                p(e._element).trigger(ln.HIDDEN);
            });
        }),
        (e._removeBackdrop = function () {
          this._backdrop &&
            (p(this._backdrop).remove(), (this._backdrop = null));
        }),
        (e._showBackdrop = function (e) {
          var t = this,
            n = p(this._element).hasClass(dn) ? dn : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = un),
              n && this._backdrop.classList.add(n),
              p(this._backdrop).appendTo(document.body),
              p(this._element).on(ln.CLICK_DISMISS, function (e) {
                t._ignoreBackdropClick
                  ? (t._ignoreBackdropClick = !1)
                  : e.target === e.currentTarget &&
                    t._triggerBackdropTransition();
              }),
              n && m.reflow(this._backdrop),
              p(this._backdrop).addClass(pn),
              !e)
            )
              return;
            if (!n) return void e();
            var i = m.getTransitionDurationFromElement(this._backdrop);
            p(this._backdrop).one(m.TRANSITION_END, e).emulateTransitionEnd(i);
          } else if (!this._isShown && this._backdrop) {
            p(this._backdrop).removeClass(pn);
            var o = function () {
              t._removeBackdrop(), e && e();
            };
            if (p(this._element).hasClass(dn)) {
              var r = m.getTransitionDurationFromElement(this._backdrop);
              p(this._backdrop)
                .one(m.TRANSITION_END, o)
                .emulateTransitionEnd(r);
            } else o();
          } else e && e();
        }),
        (e._adjustDialog = function () {
          var e =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            e &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !e &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (e._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (e._checkScrollbar = function () {
          var e = document.body.getBoundingClientRect();
          (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (e._setScrollbar = function () {
          var o = this;
          if (this._isBodyOverflowing) {
            var e = [].slice.call(document.querySelectorAll(En)),
              t = [].slice.call(document.querySelectorAll(bn));
            p(e).each(function (e, t) {
              var n = t.style.paddingRight,
                i = p(t).css("padding-right");
              p(t)
                .data("padding-right", n)
                .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
            }),
              p(t).each(function (e, t) {
                var n = t.style.marginRight,
                  i = p(t).css("margin-right");
                p(t)
                  .data("margin-right", n)
                  .css(
                    "margin-right",
                    parseFloat(i) - o._scrollbarWidth + "px"
                  );
              });
            var n = document.body.style.paddingRight,
              i = p(document.body).css("padding-right");
            p(document.body)
              .data("padding-right", n)
              .css(
                "padding-right",
                parseFloat(i) + this._scrollbarWidth + "px"
              );
          }
          p(document.body).addClass(fn);
        }),
        (e._resetScrollbar = function () {
          var e = [].slice.call(document.querySelectorAll(En));
          p(e).each(function (e, t) {
            var n = p(t).data("padding-right");
            p(t).removeData("padding-right"), (t.style.paddingRight = n || "");
          });
          var t = [].slice.call(document.querySelectorAll("" + bn));
          p(t).each(function (e, t) {
            var n = p(t).data("margin-right");
            "undefined" != typeof n &&
              p(t).css("margin-right", n).removeData("margin-right");
          });
          var n = p(document.body).data("padding-right");
          p(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (e._getScrollbarWidth = function () {
          var e = document.createElement("div");
          (e.className = hn), document.body.appendChild(e);
          var t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e), t;
        }),
        (o._jQueryInterface = function (n, i) {
          return this.each(function () {
            var e = p(this).data(nn),
              t = l(
                {},
                sn,
                {},
                p(this).data(),
                {},
                "object" == typeof n && n ? n : {}
              );
            if (
              (e || ((e = new o(this, t)), p(this).data(nn, e)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n](i);
            } else t.show && e.show(i);
          });
        }),
        s(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return sn;
            },
          },
        ]),
        o
      );
    })();
  p(document).on(ln.CLICK_DATA_API, vn, function (e) {
    var t,
      n = this,
      i = m.getSelectorFromElement(this);
    i && (t = document.querySelector(i));
    var o = p(t).data(nn) ? "toggle" : l({}, p(t).data(), {}, p(this).data());
    ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
    var r = p(t).one(ln.SHOW, function (e) {
      e.isDefaultPrevented() ||
        r.one(ln.HIDDEN, function () {
          p(n).is(":visible") && n.focus();
        });
    });
    wn._jQueryInterface.call(p(t), o, this);
  }),
    (p.fn[tn] = wn._jQueryInterface),
    (p.fn[tn].Constructor = wn),
    (p.fn[tn].noConflict = function () {
      return (p.fn[tn] = rn), wn._jQueryInterface;
    });
  var Tn = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    Cn = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Sn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    Dn =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function In(e, r, t) {
    if (0 === e.length) return e;
    if (t && "function" == typeof t) return t(e);
    for (
      var n = new window.DOMParser().parseFromString(e, "text/html"),
        s = Object.keys(r),
        a = [].slice.call(n.body.querySelectorAll("*")),
        i = function (e) {
          var t = a[e],
            n = t.nodeName.toLowerCase();
          if (-1 === s.indexOf(t.nodeName.toLowerCase()))
            return t.parentNode.removeChild(t), "continue";
          var i = [].slice.call(t.attributes),
            o = [].concat(r["*"] || [], r[n] || []);
          i.forEach(function (e) {
            !(function (e, t) {
              var n = e.nodeName.toLowerCase();
              if (-1 !== t.indexOf(n))
                return (
                  -1 === Tn.indexOf(n) ||
                  Boolean(e.nodeValue.match(Sn) || e.nodeValue.match(Dn))
                );
              for (
                var i = t.filter(function (e) {
                    return e instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(e, o) && t.removeAttribute(e.nodeName);
          });
        },
        o = 0,
        l = a.length;
      o < l;
      o++
    )
      i(o);
    return n.body.innerHTML;
  }
  var An = "tooltip",
    On = "bs.tooltip",
    Nn = "." + On,
    kn = p.fn[An],
    Ln = "bs-tooltip",
    Pn = new RegExp("(^|\\s)" + Ln + "\\S+", "g"),
    xn = ["sanitize", "whiteList", "sanitizeFn"],
    jn = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    Hn = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    Rn = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Cn,
      popperConfig: null,
    },
    Fn = "show",
    Mn = "out",
    Wn = {
      HIDE: "hide" + Nn,
      HIDDEN: "hidden" + Nn,
      SHOW: "show" + Nn,
      SHOWN: "shown" + Nn,
      INSERTED: "inserted" + Nn,
      CLICK: "click" + Nn,
      FOCUSIN: "focusin" + Nn,
      FOCUSOUT: "focusout" + Nn,
      MOUSEENTER: "mouseenter" + Nn,
      MOUSELEAVE: "mouseleave" + Nn,
    },
    Un = "fade",
    Bn = "show",
    qn = ".tooltip-inner",
    Kn = ".arrow",
    Qn = "hover",
    Vn = "focus",
    Yn = "click",
    zn = "manual",
    Xn = (function () {
      function i(e, t) {
        if ("undefined" == typeof St)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = e),
          (this.config = this._getConfig(t)),
          (this.tip = null),
          this._setListeners();
      }
      var e = i.prototype;
      return (
        (e.enable = function () {
          this._isEnabled = !0;
        }),
        (e.disable = function () {
          this._isEnabled = !1;
        }),
        (e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (e.toggle = function (e) {
          if (this._isEnabled)
            if (e) {
              var t = this.constructor.DATA_KEY,
                n = p(e.currentTarget).data(t);
              n ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this._getDelegateConfig()
                )),
                p(e.currentTarget).data(t, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (p(this.getTipElement()).hasClass(Bn))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            p.removeData(this.element, this.constructor.DATA_KEY),
            p(this.element).off(this.constructor.EVENT_KEY),
            p(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && p(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (e.show = function () {
          var t = this;
          if ("none" === p(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var e = p.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            p(this.element).trigger(e);
            var n = m.findShadowRoot(this.element),
              i = p.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (e.isDefaultPrevented() || !i) return;
            var o = this.getTipElement(),
              r = m.getUID(this.constructor.NAME);
            o.setAttribute("id", r),
              this.element.setAttribute("aria-describedby", r),
              this.setContent(),
              this.config.animation && p(o).addClass(Un);
            var s =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              a = this._getAttachment(s);
            this.addAttachmentClass(a);
            var l = this._getContainer();
            p(o).data(this.constructor.DATA_KEY, this),
              p.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || p(o).appendTo(l),
              p(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new St(
                this.element,
                o,
                this._getPopperConfig(a)
              )),
              p(o).addClass(Bn),
              "ontouchstart" in document.documentElement &&
                p(document.body).children().on("mouseover", null, p.noop);
            var c = function () {
              t.config.animation && t._fixTransition();
              var e = t._hoverState;
              (t._hoverState = null),
                p(t.element).trigger(t.constructor.Event.SHOWN),
                e === Mn && t._leave(null, t);
            };
            if (p(this.tip).hasClass(Un)) {
              var h = m.getTransitionDurationFromElement(this.tip);
              p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h);
            } else c();
          }
        }),
        (e.hide = function (e) {
          function t() {
            n._hoverState !== Fn && i.parentNode && i.parentNode.removeChild(i),
              n._cleanTipClass(),
              n.element.removeAttribute("aria-describedby"),
              p(n.element).trigger(n.constructor.Event.HIDDEN),
              null !== n._popper && n._popper.destroy(),
              e && e();
          }
          var n = this,
            i = this.getTipElement(),
            o = p.Event(this.constructor.Event.HIDE);
          if ((p(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (p(i).removeClass(Bn),
              "ontouchstart" in document.documentElement &&
                p(document.body).children().off("mouseover", null, p.noop),
              (this._activeTrigger[Yn] = !1),
              (this._activeTrigger[Vn] = !1),
              (this._activeTrigger[Qn] = !1),
              p(this.tip).hasClass(Un))
            ) {
              var r = m.getTransitionDurationFromElement(i);
              p(i).one(m.TRANSITION_END, t).emulateTransitionEnd(r);
            } else t();
            this._hoverState = "";
          }
        }),
        (e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (e.addAttachmentClass = function (e) {
          p(this.getTipElement()).addClass(Ln + "-" + e);
        }),
        (e.getTipElement = function () {
          return (this.tip = this.tip || p(this.config.template)[0]), this.tip;
        }),
        (e.setContent = function () {
          var e = this.getTipElement();
          this.setElementContent(p(e.querySelectorAll(qn)), this.getTitle()),
            p(e).removeClass(Un + " " + Bn);
        }),
        (e.setElementContent = function (e, t) {
          "object" != typeof t || (!t.nodeType && !t.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (t = In(t, this.config.whiteList, this.config.sanitizeFn)),
                e.html(t))
              : e.text(t)
            : this.config.html
            ? p(t).parent().is(e) || e.empty().append(t)
            : e.text(p(t).text());
        }),
        (e.getTitle = function () {
          var e = this.element.getAttribute("data-original-title");
          return (e =
            e ||
            ("function" == typeof this.config.title
              ? this.config.title.call(this.element)
              : this.config.title));
        }),
        (e._getPopperConfig = function (e) {
          var t = this;
          return l(
            {},
            {
              placement: e,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: Kn },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (e) {
                e.originalPlacement !== e.placement &&
                  t._handlePopperPlacementChange(e);
              },
              onUpdate: function (e) {
                return t._handlePopperPlacementChange(e);
              },
            },
            {},
            this.config.popperConfig
          );
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = l(
                      {},
                      e.offsets,
                      {},
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (e._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : m.isElement(this.config.container)
            ? p(this.config.container)
            : p(document).find(this.config.container);
        }),
        (e._getAttachment = function (e) {
          return Hn[e.toUpperCase()];
        }),
        (e._setListeners = function () {
          var i = this;
          this.config.trigger.split(" ").forEach(function (e) {
            if ("click" === e)
              p(i.element).on(
                i.constructor.Event.CLICK,
                i.config.selector,
                function (e) {
                  return i.toggle(e);
                }
              );
            else if (e !== zn) {
              var t =
                  e === Qn
                    ? i.constructor.Event.MOUSEENTER
                    : i.constructor.Event.FOCUSIN,
                n =
                  e === Qn
                    ? i.constructor.Event.MOUSELEAVE
                    : i.constructor.Event.FOCUSOUT;
              p(i.element)
                .on(t, i.config.selector, function (e) {
                  return i._enter(e);
                })
                .on(n, i.config.selector, function (e) {
                  return i._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              i.element && i.hide();
            }),
            p(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = l({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (e._fixTitle = function () {
          var e = typeof this.element.getAttribute("data-original-title");
          (!this.element.getAttribute("title") && "string" == e) ||
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (e._enter = function (e, t) {
          var n = this.constructor.DATA_KEY;
          (t = t || p(e.currentTarget).data(n)) ||
            ((t = new this.constructor(
              e.currentTarget,
              this._getDelegateConfig()
            )),
            p(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusin" === e.type ? Vn : Qn] = !0),
            p(t.getTipElement()).hasClass(Bn) || t._hoverState === Fn
              ? (t._hoverState = Fn)
              : (clearTimeout(t._timeout),
                (t._hoverState = Fn),
                t.config.delay && t.config.delay.show
                  ? (t._timeout = setTimeout(function () {
                      t._hoverState === Fn && t.show();
                    }, t.config.delay.show))
                  : t.show());
        }),
        (e._leave = function (e, t) {
          var n = this.constructor.DATA_KEY;
          (t = t || p(e.currentTarget).data(n)) ||
            ((t = new this.constructor(
              e.currentTarget,
              this._getDelegateConfig()
            )),
            p(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusout" === e.type ? Vn : Qn] = !1),
            t._isWithActiveTrigger() ||
              (clearTimeout(t._timeout),
              (t._hoverState = Mn),
              t.config.delay && t.config.delay.hide
                ? (t._timeout = setTimeout(function () {
                    t._hoverState === Mn && t.hide();
                  }, t.config.delay.hide))
                : t.hide());
        }),
        (e._isWithActiveTrigger = function () {
          for (var e in this._activeTrigger)
            if (this._activeTrigger[e]) return !0;
          return !1;
        }),
        (e._getConfig = function (e) {
          var t = p(this.element).data();
          return (
            Object.keys(t).forEach(function (e) {
              -1 !== xn.indexOf(e) && delete t[e];
            }),
            "number" ==
              typeof (e = l(
                {},
                this.constructor.Default,
                {},
                t,
                {},
                "object" == typeof e && e ? e : {}
              )).delay && (e.delay = { show: e.delay, hide: e.delay }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            m.typeCheckConfig(An, e, this.constructor.DefaultType),
            e.sanitize &&
              (e.template = In(e.template, e.whiteList, e.sanitizeFn)),
            e
          );
        }),
        (e._getDelegateConfig = function () {
          var e = {};
          if (this.config)
            for (var t in this.config)
              this.constructor.Default[t] !== this.config[t] &&
                (e[t] = this.config[t]);
          return e;
        }),
        (e._cleanTipClass = function () {
          var e = p(this.getTipElement()),
            t = e.attr("class").match(Pn);
          null !== t && t.length && e.removeClass(t.join(""));
        }),
        (e._handlePopperPlacementChange = function (e) {
          var t = e.instance;
          (this.tip = t.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement));
        }),
        (e._fixTransition = function () {
          var e = this.getTipElement(),
            t = this.config.animation;
          null === e.getAttribute("x-placement") &&
            (p(e).removeClass(Un),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = t));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var e = p(this).data(On),
              t = "object" == typeof n && n;
            if (
              (e || !/dispose|hide/.test(n)) &&
              (e || ((e = new i(this, t)), p(this).data(On, e)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return Rn;
            },
          },
          {
            key: "NAME",
            get: function () {
              return An;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return On;
            },
          },
          {
            key: "Event",
            get: function () {
              return Wn;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return Nn;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return jn;
            },
          },
        ]),
        i
      );
    })();
  (p.fn[An] = Xn._jQueryInterface),
    (p.fn[An].Constructor = Xn),
    (p.fn[An].noConflict = function () {
      return (p.fn[An] = kn), Xn._jQueryInterface;
    });
  var Gn = "popover",
    $n = "bs.popover",
    Jn = "." + $n,
    Zn = p.fn[Gn],
    ei = "bs-popover",
    ti = new RegExp("(^|\\s)" + ei + "\\S+", "g"),
    ni = l({}, Xn.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    ii = l({}, Xn.DefaultType, { content: "(string|element|function)" }),
    oi = "fade",
    ri = "show",
    si = ".popover-header",
    ai = ".popover-body",
    li = {
      HIDE: "hide" + Jn,
      HIDDEN: "hidden" + Jn,
      SHOW: "show" + Jn,
      SHOWN: "shown" + Jn,
      INSERTED: "inserted" + Jn,
      CLICK: "click" + Jn,
      FOCUSIN: "focusin" + Jn,
      FOCUSOUT: "focusout" + Jn,
      MOUSEENTER: "mouseenter" + Jn,
      MOUSELEAVE: "mouseleave" + Jn,
    },
    ci = (function (e) {
      function i() {
        return e.apply(this, arguments) || this;
      }
      !(function (e, t) {
        (e.prototype = Object.create(t.prototype)),
          ((e.prototype.constructor = e).__proto__ = t);
      })(i, e);
      var t = i.prototype;
      return (
        (t.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (t.addAttachmentClass = function (e) {
          p(this.getTipElement()).addClass(ei + "-" + e);
        }),
        (t.getTipElement = function () {
          return (this.tip = this.tip || p(this.config.template)[0]), this.tip;
        }),
        (t.setContent = function () {
          var e = p(this.getTipElement());
          this.setElementContent(e.find(si), this.getTitle());
          var t = this._getContent();
          "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find(ai), t),
            e.removeClass(oi + " " + ri);
        }),
        (t._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (t._cleanTipClass = function () {
          var e = p(this.getTipElement()),
            t = e.attr("class").match(ti);
          null !== t && 0 < t.length && e.removeClass(t.join(""));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var e = p(this).data($n),
              t = "object" == typeof n ? n : null;
            if (
              (e || !/dispose|hide/.test(n)) &&
              (e || ((e = new i(this, t)), p(this).data($n, e)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return ni;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Gn;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return $n;
            },
          },
          {
            key: "Event",
            get: function () {
              return li;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return Jn;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ii;
            },
          },
        ]),
        i
      );
    })(Xn);
  (p.fn[Gn] = ci._jQueryInterface),
    (p.fn[Gn].Constructor = ci),
    (p.fn[Gn].noConflict = function () {
      return (p.fn[Gn] = Zn), ci._jQueryInterface;
    });
  var hi = "scrollspy",
    ui = "bs.scrollspy",
    fi = "." + ui,
    di = p.fn[hi],
    pi = { offset: 10, method: "auto", target: "" },
    mi = { offset: "number", method: "string", target: "(string|element)" },
    gi = {
      ACTIVATE: "activate" + fi,
      SCROLL: "scroll" + fi,
      LOAD_DATA_API: "load" + fi + ".data-api",
    },
    _i = "dropdown-item",
    vi = "active",
    yi = '[data-spy="scroll"]',
    Ei = ".nav, .list-group",
    bi = ".nav-link",
    wi = ".nav-item",
    Ti = ".list-group-item",
    Ci = ".dropdown",
    Si = ".dropdown-item",
    Di = ".dropdown-toggle",
    Ii = "offset",
    Ai = "position",
    Oi = (function () {
      function n(e, t) {
        var n = this;
        (this._element = e),
          (this._scrollElement = "BODY" === e.tagName ? window : e),
          (this._config = this._getConfig(t)),
          (this._selector =
            this._config.target +
            " " +
            bi +
            "," +
            this._config.target +
            " " +
            Ti +
            "," +
            this._config.target +
            " " +
            Si),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          p(this._scrollElement).on(gi.SCROLL, function (e) {
            return n._process(e);
          }),
          this.refresh(),
          this._process();
      }
      var e = n.prototype;
      return (
        (e.refresh = function () {
          var t = this,
            e = this._scrollElement === this._scrollElement.window ? Ii : Ai,
            o = "auto" === this._config.method ? e : this._config.method,
            r = o === Ai ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (e) {
                var t,
                  n = m.getSelectorFromElement(e);
                if ((n && (t = document.querySelector(n)), t)) {
                  var i = t.getBoundingClientRect();
                  if (i.width || i.height) return [p(t)[o]().top + r, n];
                }
                return null;
              })
              .filter(function (e) {
                return e;
              })
              .sort(function (e, t) {
                return e[0] - t[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (e.dispose = function () {
          p.removeData(this._element, ui),
            p(this._scrollElement).off(fi),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (e._getConfig = function (e) {
          if (
            "string" !=
            typeof (e = l({}, pi, {}, "object" == typeof e && e ? e : {}))
              .target
          ) {
            var t = p(e.target).attr("id");
            t || ((t = m.getUID(hi)), p(e.target).attr("id", t)),
              (e.target = "#" + t);
          }
          return m.typeCheckConfig(hi, e, mi), e;
        }),
        (e._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (e._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (e._process = function () {
          var e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            n = this._config.offset + t - this._getOffsetHeight();
          if ((this._scrollHeight !== t && this.refresh(), n <= e)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              e < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                e >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  e < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (e._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var e = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            n = p([].slice.call(document.querySelectorAll(e.join(","))));
          n.hasClass(_i)
            ? (n.closest(Ci).find(Di).addClass(vi), n.addClass(vi))
            : (n.addClass(vi),
              n
                .parents(Ei)
                .prev(bi + ", " + Ti)
                .addClass(vi),
              n.parents(Ei).prev(wi).children(bi).addClass(vi)),
            p(this._scrollElement).trigger(gi.ACTIVATE, { relatedTarget: t });
        }),
        (e._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (e) {
              return e.classList.contains(vi);
            })
            .forEach(function (e) {
              return e.classList.remove(vi);
            });
        }),
        (n._jQueryInterface = function (t) {
          return this.each(function () {
            var e = p(this).data(ui);
            if (
              (e ||
                ((e = new n(this, "object" == typeof t && t)),
                p(this).data(ui, e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "Default",
            get: function () {
              return pi;
            },
          },
        ]),
        n
      );
    })();
  p(window).on(gi.LOAD_DATA_API, function () {
    for (
      var e = [].slice.call(document.querySelectorAll(yi)), t = e.length;
      t--;

    ) {
      var n = p(e[t]);
      Oi._jQueryInterface.call(n, n.data());
    }
  }),
    (p.fn[hi] = Oi._jQueryInterface),
    (p.fn[hi].Constructor = Oi),
    (p.fn[hi].noConflict = function () {
      return (p.fn[hi] = di), Oi._jQueryInterface;
    });
  var Ni = "bs.tab",
    ki = "." + Ni,
    Li = p.fn.tab,
    Pi = {
      HIDE: "hide" + ki,
      HIDDEN: "hidden" + ki,
      SHOW: "show" + ki,
      SHOWN: "shown" + ki,
      CLICK_DATA_API: "click" + ki + ".data-api",
    },
    xi = "dropdown-menu",
    ji = "active",
    Hi = "disabled",
    Ri = "fade",
    Fi = "show",
    Mi = ".dropdown",
    Wi = ".nav, .list-group",
    Ui = ".active",
    Bi = "> li > .active",
    qi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    Ki = ".dropdown-toggle",
    Qi = "> .dropdown-menu .active",
    Vi = (function () {
      function i(e) {
        this._element = e;
      }
      var e = i.prototype;
      return (
        (e.show = function () {
          var n = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                p(this._element).hasClass(ji)) ||
              p(this._element).hasClass(Hi)
            )
          ) {
            var e,
              i,
              t = p(this._element).closest(Wi)[0],
              o = m.getSelectorFromElement(this._element);
            if (t) {
              var r = "UL" === t.nodeName || "OL" === t.nodeName ? Bi : Ui;
              i = (i = p.makeArray(p(t).find(r)))[i.length - 1];
            }
            var s = p.Event(Pi.HIDE, { relatedTarget: this._element }),
              a = p.Event(Pi.SHOW, { relatedTarget: i });
            if (
              (i && p(i).trigger(s),
              p(this._element).trigger(a),
              !a.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              o && (e = document.querySelector(o)),
                this._activate(this._element, t);
              var l = function () {
                var e = p.Event(Pi.HIDDEN, { relatedTarget: n._element }),
                  t = p.Event(Pi.SHOWN, { relatedTarget: i });
                p(i).trigger(e), p(n._element).trigger(t);
              };
              e ? this._activate(e, e.parentNode, l) : l();
            }
          }
        }),
        (e.dispose = function () {
          p.removeData(this._element, Ni), (this._element = null);
        }),
        (e._activate = function (e, t, n) {
          function i() {
            return o._transitionComplete(e, r, n);
          }
          var o = this,
            r = (
              !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
                ? p(t).children(Ui)
                : p(t).find(Bi)
            )[0],
            s = n && r && p(r).hasClass(Ri);
          if (r && s) {
            var a = m.getTransitionDurationFromElement(r);
            p(r)
              .removeClass(Fi)
              .one(m.TRANSITION_END, i)
              .emulateTransitionEnd(a);
          } else i();
        }),
        (e._transitionComplete = function (e, t, n) {
          if (t) {
            p(t).removeClass(ji);
            var i = p(t.parentNode).find(Qi)[0];
            i && p(i).removeClass(ji),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !1);
          }
          if (
            (p(e).addClass(ji),
            "tab" === e.getAttribute("role") &&
              e.setAttribute("aria-selected", !0),
            m.reflow(e),
            e.classList.contains(Ri) && e.classList.add(Fi),
            e.parentNode && p(e.parentNode).hasClass(xi))
          ) {
            var o = p(e).closest(Mi)[0];
            if (o) {
              var r = [].slice.call(o.querySelectorAll(Ki));
              p(r).addClass(ji);
            }
            e.setAttribute("aria-expanded", !0);
          }
          n && n();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var e = p(this),
              t = e.data(Ni);
            if (
              (t || ((t = new i(this)), e.data(Ni, t)), "string" == typeof n)
            ) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
        ]),
        i
      );
    })();
  p(document).on(Pi.CLICK_DATA_API, qi, function (e) {
    e.preventDefault(), Vi._jQueryInterface.call(p(this), "show");
  }),
    (p.fn.tab = Vi._jQueryInterface),
    (p.fn.tab.Constructor = Vi),
    (p.fn.tab.noConflict = function () {
      return (p.fn.tab = Li), Vi._jQueryInterface;
    });
  var Yi = "toast",
    zi = "bs.toast",
    Xi = "." + zi,
    Gi = p.fn[Yi],
    $i = {
      CLICK_DISMISS: "click.dismiss" + Xi,
      HIDE: "hide" + Xi,
      HIDDEN: "hidden" + Xi,
      SHOW: "show" + Xi,
      SHOWN: "shown" + Xi,
    },
    Ji = "fade",
    Zi = "hide",
    eo = "show",
    to = "showing",
    no = { animation: "boolean", autohide: "boolean", delay: "number" },
    io = { animation: !0, autohide: !0, delay: 500 },
    oo = '[data-dismiss="toast"]',
    ro = (function () {
      function i(e, t) {
        (this._element = e),
          (this._config = this._getConfig(t)),
          (this._timeout = null),
          this._setListeners();
      }
      var e = i.prototype;
      return (
        (e.show = function () {
          var e = this,
            t = p.Event($i.SHOW);
          if ((p(this._element).trigger(t), !t.isDefaultPrevented())) {
            this._config.animation && this._element.classList.add(Ji);
            var n = function () {
              e._element.classList.remove(to),
                e._element.classList.add(eo),
                p(e._element).trigger($i.SHOWN),
                e._config.autohide &&
                  (e._timeout = setTimeout(function () {
                    e.hide();
                  }, e._config.delay));
            };
            if (
              (this._element.classList.remove(Zi),
              m.reflow(this._element),
              this._element.classList.add(to),
              this._config.animation)
            ) {
              var i = m.getTransitionDurationFromElement(this._element);
              p(this._element).one(m.TRANSITION_END, n).emulateTransitionEnd(i);
            } else n();
          }
        }),
        (e.hide = function () {
          if (this._element.classList.contains(eo)) {
            var e = p.Event($i.HIDE);
            p(this._element).trigger(e),
              e.isDefaultPrevented() || this._close();
          }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(eo) &&
              this._element.classList.remove(eo),
            p(this._element).off($i.CLICK_DISMISS),
            p.removeData(this._element, zi),
            (this._element = null),
            (this._config = null);
        }),
        (e._getConfig = function (e) {
          return (
            (e = l(
              {},
              io,
              {},
              p(this._element).data(),
              {},
              "object" == typeof e && e ? e : {}
            )),
            m.typeCheckConfig(Yi, e, this.constructor.DefaultType),
            e
          );
        }),
        (e._setListeners = function () {
          var e = this;
          p(this._element).on($i.CLICK_DISMISS, oo, function () {
            return e.hide();
          });
        }),
        (e._close = function () {
          function e() {
            t._element.classList.add(Zi), p(t._element).trigger($i.HIDDEN);
          }
          var t = this;
          if ((this._element.classList.remove(eo), this._config.animation)) {
            var n = m.getTransitionDurationFromElement(this._element);
            p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n);
          } else e();
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var e = p(this),
              t = e.data(zi);
            if (
              (t ||
                ((t = new i(this, "object" == typeof n && n)), e.data(zi, t)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n](this);
            }
          });
        }),
        s(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.4.1";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return no;
            },
          },
          {
            key: "Default",
            get: function () {
              return io;
            },
          },
        ]),
        i
      );
    })();
  (p.fn[Yi] = ro._jQueryInterface),
    (p.fn[Yi].Constructor = ro),
    (p.fn[Yi].noConflict = function () {
      return (p.fn[Yi] = Gi), ro._jQueryInterface;
    }),
    (e.Alert = _),
    (e.Button = x),
    (e.Carousel = he),
    (e.Collapse = De),
    (e.Dropdown = en),
    (e.Modal = wn),
    (e.Popover = ci),
    (e.Scrollspy = Oi),
    (e.Tab = Vi),
    (e.Toast = ro),
    (e.Tooltip = Xn),
    (e.Util = m),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
/*! jQuery Form Plugin | Version: 3.51.0-2014.06.20 | Requires jQuery v1.5 or later | Copyright (c) 2014 M. Alsup | Dual licensed under the MIT and GPL licenses. */
!(function (e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e("undefined" != typeof jQuery ? jQuery : window.Zepto);
})(function (e) {
  "use strict";
  function t(t) {
    var r = t.data;
    t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r));
  }
  function r(t) {
    var r = t.target,
      a = e(r);
    if (!a.is("[type=submit],[type=image]")) {
      var n = a.closest("[type=submit]");
      if (0 === n.length) return;
      r = n[0];
    }
    var i = this;
    if (((i.clk = r), "image" == r.type))
      if (void 0 !== t.offsetX) (i.clk_x = t.offsetX), (i.clk_y = t.offsetY);
      else if ("function" == typeof e.fn.offset) {
        var o = a.offset();
        (i.clk_x = t.pageX - o.left), (i.clk_y = t.pageY - o.top);
      } else
        (i.clk_x = t.pageX - r.offsetLeft), (i.clk_y = t.pageY - r.offsetTop);
    setTimeout(function () {
      i.clk = i.clk_x = i.clk_y = null;
    }, 100);
  }
  function a() {
    if (e.fn.ajaxSubmit.debug) {
      var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
      window.console && window.console.log
        ? window.console.log(t)
        : window.opera && window.opera.postError && window.opera.postError(t);
    }
  }
  var n = {};
  (n.fileapi = void 0 !== e("<input type='file'/>").get(0).files),
    (n.formdata = void 0 !== window.FormData);
  var i = !!e.fn.prop;
  (e.fn.attr2 = function () {
    if (!i) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return (e && e.jquery) || "string" == typeof e
      ? e
      : this.attr.apply(this, arguments);
  }),
    (e.fn.ajaxSubmit = function (t) {
      function r(r) {
        var a,
          n,
          i = e.param(r, t.traditional).split("&"),
          o = i.length,
          s = [];
        for (a = 0; o > a; a++)
          (i[a] = i[a].replace(/\+/g, " ")),
            (n = i[a].split("=")),
            s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
        return s;
      }
      function o(a) {
        for (var n = new FormData(), i = 0; i < a.length; i++)
          n.append(a[i].name, a[i].value);
        if (t.extraData) {
          var o = r(t.extraData);
          for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]);
        }
        t.data = null;
        var s = e.extend(!0, {}, e.ajaxSettings, t, {
          contentType: !1,
          processData: !1,
          cache: !1,
          type: u || "POST",
        });
        t.uploadProgress &&
          (s.xhr = function () {
            var r = e.ajaxSettings.xhr();
            return (
              r.upload &&
                r.upload.addEventListener(
                  "progress",
                  function (e) {
                    var r = 0,
                      a = e.loaded || e.position,
                      n = e.total;
                    e.lengthComputable && (r = Math.ceil((a / n) * 100)),
                      t.uploadProgress(e, a, n, r);
                  },
                  !1
                ),
              r
            );
          }),
          (s.data = null);
        var c = s.beforeSend;
        return (
          (s.beforeSend = function (e, r) {
            (r.data = t.formData ? t.formData : n), c && c.call(this, e, r);
          }),
          e.ajax(s)
        );
      }
      function s(r) {
        function n(e) {
          var t = null;
          try {
            e.contentWindow && (t = e.contentWindow.document);
          } catch (r) {
            a("cannot get iframe.contentWindow document: " + r);
          }
          if (t) return t;
          try {
            t = e.contentDocument ? e.contentDocument : e.document;
          } catch (r) {
            a("cannot get iframe.contentDocument: " + r), (t = e.document);
          }
          return t;
        }
        function o() {
          function t() {
            try {
              var e = n(g).readyState;
              a("state = " + e),
                e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50);
            } catch (r) {
              a("Server abort: ", r, " (", r.name, ")"),
                s(k),
                j && clearTimeout(j),
                (j = void 0);
            }
          }
          var r = f.attr2("target"),
            i = f.attr2("action"),
            o = "multipart/form-data",
            c = f.attr("enctype") || f.attr("encoding") || o;
          w.setAttribute("target", p),
            (!u || /post/i.test(u)) && w.setAttribute("method", "POST"),
            i != m.url && w.setAttribute("action", m.url),
            m.skipEncodingOverride ||
              (u && !/post/i.test(u)) ||
              f.attr({
                encoding: "multipart/form-data",
                enctype: "multipart/form-data",
              }),
            m.timeout &&
              (j = setTimeout(function () {
                (T = !0), s(D);
              }, m.timeout));
          var l = [];
          try {
            if (m.extraData)
              for (var d in m.extraData)
                m.extraData.hasOwnProperty(d) &&
                  l.push(
                    e.isPlainObject(m.extraData[d]) &&
                      m.extraData[d].hasOwnProperty("name") &&
                      m.extraData[d].hasOwnProperty("value")
                      ? e(
                          '<input type="hidden" name="' +
                            m.extraData[d].name +
                            '">'
                        )
                          .val(m.extraData[d].value)
                          .appendTo(w)[0]
                      : e('<input type="hidden" name="' + d + '">')
                          .val(m.extraData[d])
                          .appendTo(w)[0]
                  );
            m.iframeTarget || v.appendTo("body"),
              g.attachEvent
                ? g.attachEvent("onload", s)
                : g.addEventListener("load", s, !1),
              setTimeout(t, 15);
            try {
              w.submit();
            } catch (h) {
              var x = document.createElement("form").submit;
              x.apply(w);
            }
          } finally {
            w.setAttribute("action", i),
              w.setAttribute("enctype", c),
              r ? w.setAttribute("target", r) : f.removeAttr("target"),
              e(l).remove();
          }
        }
        function s(t) {
          if (!x.aborted && !F) {
            if (
              ((M = n(g)),
              M || (a("cannot access response document"), (t = k)),
              t === D && x)
            )
              return x.abort("timeout"), void S.reject(x, "timeout");
            if (t == k && x)
              return (
                x.abort("server abort"),
                void S.reject(x, "error", "server abort")
              );
            if ((M && M.location.href != m.iframeSrc) || T) {
              g.detachEvent
                ? g.detachEvent("onload", s)
                : g.removeEventListener("load", s, !1);
              var r,
                i = "success";
              try {
                if (T) throw "timeout";
                var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                if (
                  (a("isXml=" + o),
                  !o &&
                    window.opera &&
                    (null === M.body || !M.body.innerHTML) &&
                    --O)
                )
                  return (
                    a("requeing onLoad callback, DOM not available"),
                    void setTimeout(s, 250)
                  );
                var u = M.body ? M.body : M.documentElement;
                (x.responseText = u ? u.innerHTML : null),
                  (x.responseXML = M.XMLDocument ? M.XMLDocument : M),
                  o && (m.dataType = "xml"),
                  (x.getResponseHeader = function (e) {
                    var t = { "content-type": m.dataType };
                    return t[e.toLowerCase()];
                  }),
                  u &&
                    ((x.status = Number(u.getAttribute("status")) || x.status),
                    (x.statusText =
                      u.getAttribute("statusText") || x.statusText));
                var c = (m.dataType || "").toLowerCase(),
                  l = /(json|script|text)/.test(c);
                if (l || m.textarea) {
                  var f = M.getElementsByTagName("textarea")[0];
                  if (f)
                    (x.responseText = f.value),
                      (x.status = Number(f.getAttribute("status")) || x.status),
                      (x.statusText =
                        f.getAttribute("statusText") || x.statusText);
                  else if (l) {
                    var p = M.getElementsByTagName("pre")[0],
                      h = M.getElementsByTagName("body")[0];
                    p
                      ? (x.responseText = p.textContent
                          ? p.textContent
                          : p.innerText)
                      : h &&
                        (x.responseText = h.textContent
                          ? h.textContent
                          : h.innerText);
                  }
                } else
                  "xml" == c &&
                    !x.responseXML &&
                    x.responseText &&
                    (x.responseXML = X(x.responseText));
                try {
                  E = _(x, c, m);
                } catch (y) {
                  (i = "parsererror"), (x.error = r = y || i);
                }
              } catch (y) {
                a("error caught: ", y), (i = "error"), (x.error = r = y || i);
              }
              x.aborted && (a("upload aborted"), (i = null)),
                x.status &&
                  (i =
                    (x.status >= 200 && x.status < 300) || 304 === x.status
                      ? "success"
                      : "error"),
                "success" === i
                  ? (m.success && m.success.call(m.context, E, "success", x),
                    S.resolve(x.responseText, "success", x),
                    d && e.event.trigger("ajaxSuccess", [x, m]))
                  : i &&
                    (void 0 === r && (r = x.statusText),
                    m.error && m.error.call(m.context, x, i, r),
                    S.reject(x, "error", r),
                    d && e.event.trigger("ajaxError", [x, m, r])),
                d && e.event.trigger("ajaxComplete", [x, m]),
                d && !--e.active && e.event.trigger("ajaxStop"),
                m.complete && m.complete.call(m.context, x, i),
                (F = !0),
                m.timeout && clearTimeout(j),
                setTimeout(function () {
                  m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(),
                    (x.responseXML = null);
                }, 100);
            }
          }
        }
        var c,
          l,
          m,
          d,
          p,
          v,
          g,
          x,
          y,
          b,
          T,
          j,
          w = f[0],
          S = e.Deferred();
        if (
          ((S.abort = function (e) {
            x.abort(e);
          }),
          r)
        )
          for (l = 0; l < h.length; l++)
            (c = e(h[l])),
              i ? c.prop("disabled", !1) : c.removeAttr("disabled");
        if (
          ((m = e.extend(!0, {}, e.ajaxSettings, t)),
          (m.context = m.context || m),
          (p = "jqFormIO" + new Date().getTime()),
          m.iframeTarget
            ? ((v = e(m.iframeTarget)),
              (b = v.attr2("name")),
              b ? (p = b) : v.attr2("name", p))
            : ((v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />')),
              v.css({ position: "absolute", top: "-1000px", left: "-1000px" })),
          (g = v[0]),
          (x = {
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: "n/a",
            getAllResponseHeaders: function () {},
            getResponseHeader: function () {},
            setRequestHeader: function () {},
            abort: function (t) {
              var r = "timeout" === t ? "timeout" : "aborted";
              a("aborting upload... " + r), (this.aborted = 1);
              try {
                g.contentWindow.document.execCommand &&
                  g.contentWindow.document.execCommand("Stop");
              } catch (n) {}
              v.attr("src", m.iframeSrc),
                (x.error = r),
                m.error && m.error.call(m.context, x, r, t),
                d && e.event.trigger("ajaxError", [x, m, r]),
                m.complete && m.complete.call(m.context, x, r);
            },
          }),
          (d = m.global),
          d && 0 === e.active++ && e.event.trigger("ajaxStart"),
          d && e.event.trigger("ajaxSend", [x, m]),
          m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)
        )
          return m.global && e.active--, S.reject(), S;
        if (x.aborted) return S.reject(), S;
        (y = w.clk),
          y &&
            ((b = y.name),
            b &&
              !y.disabled &&
              ((m.extraData = m.extraData || {}),
              (m.extraData[b] = y.value),
              "image" == y.type &&
                ((m.extraData[b + ".x"] = w.clk_x),
                (m.extraData[b + ".y"] = w.clk_y))));
        var D = 1,
          k = 2,
          A = e("meta[name=csrf-token]").attr("content"),
          L = e("meta[name=csrf-param]").attr("content");
        L && A && ((m.extraData = m.extraData || {}), (m.extraData[L] = A)),
          m.forceSync ? o() : setTimeout(o, 10);
        var E,
          M,
          F,
          O = 50,
          X =
            e.parseXML ||
            function (e, t) {
              return (
                window.ActiveXObject
                  ? ((t = new ActiveXObject("Microsoft.XMLDOM")),
                    (t.async = "false"),
                    t.loadXML(e))
                  : (t = new DOMParser().parseFromString(e, "text/xml")),
                t &&
                t.documentElement &&
                "parsererror" != t.documentElement.nodeName
                  ? t
                  : null
              );
            },
          C =
            e.parseJSON ||
            function (e) {
              return window.eval("(" + e + ")");
            },
          _ = function (t, r, a) {
            var n = t.getResponseHeader("content-type") || "",
              i = "xml" === r || (!r && n.indexOf("xml") >= 0),
              o = i ? t.responseXML : t.responseText;
            return (
              i &&
                "parsererror" === o.documentElement.nodeName &&
                e.error &&
                e.error("parsererror"),
              a && a.dataFilter && (o = a.dataFilter(o, r)),
              "string" == typeof o &&
                ("json" === r || (!r && n.indexOf("json") >= 0)
                  ? (o = C(o))
                  : ("script" === r || (!r && n.indexOf("javascript") >= 0)) &&
                    e.globalEval(o)),
              o
            );
          };
        return S;
      }
      if (!this.length)
        return (
          a("ajaxSubmit: skipping submit process - no element selected"), this
        );
      var u,
        c,
        l,
        f = this;
      "function" == typeof t ? (t = { success: t }) : void 0 === t && (t = {}),
        (u = t.type || this.attr2("method")),
        (c = t.url || this.attr2("action")),
        (l = "string" == typeof c ? e.trim(c) : ""),
        (l = l || window.location.href || ""),
        l && (l = (l.match(/^([^#]+)/) || [])[1]),
        (t = e.extend(
          !0,
          {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "")
              ? "javascript:false"
              : "about:blank",
          },
          t
        ));
      var m = {};
      if ((this.trigger("form-pre-serialize", [this, t, m]), m.veto))
        return (
          a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this
        );
      if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)
        return (
          a("ajaxSubmit: submit aborted via beforeSerialize callback"), this
        );
      var d = t.traditional;
      void 0 === d && (d = e.ajaxSettings.traditional);
      var p,
        h = [],
        v = this.formToArray(t.semantic, h);
      if (
        (t.data && ((t.extraData = t.data), (p = e.param(t.data, d))),
        t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)
      )
        return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
      if ((this.trigger("form-submit-validate", [v, this, t, m]), m.veto))
        return (
          a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this
        );
      var g = e.param(v, d);
      p && (g = g ? g + "&" + p : p),
        "GET" == t.type.toUpperCase()
          ? ((t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g),
            (t.data = null))
          : (t.data = g);
      var x = [];
      if (
        (t.resetForm &&
          x.push(function () {
            f.resetForm();
          }),
        t.clearForm &&
          x.push(function () {
            f.clearForm(t.includeHidden);
          }),
        !t.dataType && t.target)
      ) {
        var y = t.success || function () {};
        x.push(function (r) {
          var a = t.replaceTarget ? "replaceWith" : "html";
          e(t.target)[a](r).each(y, arguments);
        });
      } else t.success && x.push(t.success);
      if (
        ((t.success = function (e, r, a) {
          for (var n = t.context || this, i = 0, o = x.length; o > i; i++)
            x[i].apply(n, [e, r, a || f, f]);
        }),
        t.error)
      ) {
        var b = t.error;
        t.error = function (e, r, a) {
          var n = t.context || this;
          b.apply(n, [e, r, a, f]);
        };
      }
      if (t.complete) {
        var T = t.complete;
        t.complete = function (e, r) {
          var a = t.context || this;
          T.apply(a, [e, r, f]);
        };
      }
      var j = e("input[type=file]:enabled", this).filter(function () {
          return "" !== e(this).val();
        }),
        w = j.length > 0,
        S = "multipart/form-data",
        D = f.attr("enctype") == S || f.attr("encoding") == S,
        k = n.fileapi && n.formdata;
      a("fileAPI :" + k);
      var A,
        L = (w || D) && !k;
      t.iframe !== !1 && (t.iframe || L)
        ? t.closeKeepAlive
          ? e.get(t.closeKeepAlive, function () {
              A = s(v);
            })
          : (A = s(v))
        : (A = (w || D) && k ? o(v) : e.ajax(t)),
        f.removeData("jqxhr").data("jqxhr", A);
      for (var E = 0; E < h.length; E++) h[E] = null;
      return this.trigger("form-submit-notify", [this, t]), this;
    }),
    (e.fn.ajaxForm = function (n) {
      if (
        ((n = n || {}),
        (n.delegation = n.delegation && e.isFunction(e.fn.on)),
        !n.delegation && 0 === this.length)
      ) {
        var i = { s: this.selector, c: this.context };
        return !e.isReady && i.s
          ? (a("DOM not ready, queuing ajaxForm"),
            e(function () {
              e(i.s, i.c).ajaxForm(n);
            }),
            this)
          : (a(
              "terminating; zero elements found by selector" +
                (e.isReady ? "" : " (DOM not ready)")
            ),
            this);
      }
      return n.delegation
        ? (e(document)
            .off("submit.form-plugin", this.selector, t)
            .off("click.form-plugin", this.selector, r)
            .on("submit.form-plugin", this.selector, n, t)
            .on("click.form-plugin", this.selector, n, r),
          this)
        : this.ajaxFormUnbind()
            .bind("submit.form-plugin", n, t)
            .bind("click.form-plugin", n, r);
    }),
    (e.fn.ajaxFormUnbind = function () {
      return this.unbind("submit.form-plugin click.form-plugin");
    }),
    (e.fn.formToArray = function (t, r) {
      var a = [];
      if (0 === this.length) return a;
      var i,
        o = this[0],
        s = this.attr("id"),
        u = t ? o.getElementsByTagName("*") : o.elements;
      if (
        (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()),
        s &&
          ((i = e(':input[form="' + s + '"]').get()),
          i.length && (u = (u || []).concat(i))),
        !u || !u.length)
      )
        return a;
      var c, l, f, m, d, p, h;
      for (c = 0, p = u.length; p > c; c++)
        if (((d = u[c]), (f = d.name), f && !d.disabled))
          if (t && o.clk && "image" == d.type)
            o.clk == d &&
              (a.push({ name: f, value: e(d).val(), type: d.type }),
              a.push(
                { name: f + ".x", value: o.clk_x },
                { name: f + ".y", value: o.clk_y }
              ));
          else if (((m = e.fieldValue(d, !0)), m && m.constructor == Array))
            for (r && r.push(d), l = 0, h = m.length; h > l; l++)
              a.push({ name: f, value: m[l] });
          else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
              for (l = 0; l < v.length; l++)
                a.push({ name: f, value: v[l], type: d.type });
            else a.push({ name: f, value: "", type: d.type });
          } else
            null !== m &&
              "undefined" != typeof m &&
              (r && r.push(d),
              a.push({
                name: f,
                value: m,
                type: d.type,
                required: d.required,
              }));
      if (!t && o.clk) {
        var g = e(o.clk),
          x = g[0];
        (f = x.name),
          f &&
            !x.disabled &&
            "image" == x.type &&
            (a.push({ name: f, value: g.val() }),
            a.push(
              { name: f + ".x", value: o.clk_x },
              { name: f + ".y", value: o.clk_y }
            ));
      }
      return a;
    }),
    (e.fn.formSerialize = function (t) {
      return e.param(this.formToArray(t));
    }),
    (e.fn.fieldSerialize = function (t) {
      var r = [];
      return (
        this.each(function () {
          var a = this.name;
          if (a) {
            var n = e.fieldValue(this, t);
            if (n && n.constructor == Array)
              for (var i = 0, o = n.length; o > i; i++)
                r.push({ name: a, value: n[i] });
            else
              null !== n &&
                "undefined" != typeof n &&
                r.push({ name: this.name, value: n });
          }
        }),
        e.param(r)
      );
    }),
    (e.fn.fieldValue = function (t) {
      for (var r = [], a = 0, n = this.length; n > a; a++) {
        var i = this[a],
          o = e.fieldValue(i, t);
        null === o ||
          "undefined" == typeof o ||
          (o.constructor == Array && !o.length) ||
          (o.constructor == Array ? e.merge(r, o) : r.push(o));
      }
      return r;
    }),
    (e.fieldValue = function (t, r) {
      var a = t.name,
        n = t.type,
        i = t.tagName.toLowerCase();
      if (
        (void 0 === r && (r = !0),
        r &&
          (!a ||
            t.disabled ||
            "reset" == n ||
            "button" == n ||
            (("checkbox" == n || "radio" == n) && !t.checked) ||
            (("submit" == n || "image" == n) && t.form && t.form.clk != t) ||
            ("select" == i && -1 == t.selectedIndex)))
      )
        return null;
      if ("select" == i) {
        var o = t.selectedIndex;
        if (0 > o) return null;
        for (
          var s = [],
            u = t.options,
            c = "select-one" == n,
            l = c ? o + 1 : u.length,
            f = c ? o : 0;
          l > f;
          f++
        ) {
          var m = u[f];
          if (m.selected) {
            var d = m.value;
            if (
              (d ||
                (d =
                  m.attributes &&
                  m.attributes.value &&
                  !m.attributes.value.specified
                    ? m.text
                    : m.value),
              c)
            )
              return d;
            s.push(d);
          }
        }
        return s;
      }
      return e(t).val();
    }),
    (e.fn.clearForm = function (t) {
      return this.each(function () {
        e("input,select,textarea", this).clearFields(t);
      });
    }),
    (e.fn.clearFields = e.fn.clearInputs =
      function (t) {
        var r =
          /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
          var a = this.type,
            n = this.tagName.toLowerCase();
          r.test(a) || "textarea" == n
            ? (this.value = "")
            : "checkbox" == a || "radio" == a
            ? (this.checked = !1)
            : "select" == n
            ? (this.selectedIndex = -1)
            : "file" == a
            ? /MSIE/.test(navigator.userAgent)
              ? e(this).replaceWith(e(this).clone(!0))
              : e(this).val("")
            : t &&
              ((t === !0 && /hidden/.test(a)) ||
                ("string" == typeof t && e(this).is(t))) &&
              (this.value = "");
        });
      }),
    (e.fn.resetForm = function () {
      return this.each(function () {
        ("function" == typeof this.reset ||
          ("object" == typeof this.reset && !this.reset.nodeType)) &&
          this.reset();
      });
    }),
    (e.fn.enable = function (e) {
      return (
        void 0 === e && (e = !0),
        this.each(function () {
          this.disabled = !e;
        })
      );
    }),
    (e.fn.selected = function (t) {
      return (
        void 0 === t && (t = !0),
        this.each(function () {
          var r = this.type;
          if ("checkbox" == r || "radio" == r) this.checked = t;
          else if ("option" == this.tagName.toLowerCase()) {
            var a = e(this).parent("select");
            t &&
              a[0] &&
              "select-one" == a[0].type &&
              a.find("option").selected(!1),
              (this.selected = t);
          }
        })
      );
    }),
    (e.fn.ajaxSubmit.debug = !1);
});
/*! jQuery Validation Plugin - v1.16.0 - 12/2/2016 | http://jqueryvalidation.org/ | Copyright (c) 2016 JÃ¶rn Zaefferer; Licensed MIT */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof module && module.exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var c = a.data(this[0], "validator");
      return c
        ? c
        : (this.attr("novalidate", "novalidate"),
          (c = new a.validator(b, this[0])),
          a.data(this[0], "validator", c),
          c.settings.onsubmit &&
            (this.on("click.validate", ":submit", function (b) {
              c.settings.submitHandler && (c.submitButton = b.target),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") &&
                  (c.cancelSubmit = !0);
            }),
            this.on("submit.validate", function (b) {
              function d() {
                var d, e;
                return (
                  !c.settings.submitHandler ||
                  (c.submitButton &&
                    (d = a("<input type='hidden'/>")
                      .attr("name", c.submitButton.name)
                      .val(a(c.submitButton).val())
                      .appendTo(c.currentForm)),
                  (e = c.settings.submitHandler.call(c, c.currentForm, b)),
                  c.submitButton && d.remove(),
                  void 0 !== e && e)
                );
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                  ? c.pendingRequest
                    ? ((c.formSubmitted = !0), !1)
                    : d()
                  : (c.focusInvalid(), !1)
              );
            })),
          c);
    },
    valid: function () {
      var b, c, d;
      return (
        a(this[0]).is("form")
          ? (b = this.validate().form())
          : ((d = []),
            (b = !0),
            (c = a(this[0].form).validate()),
            this.each(function () {
              (b = c.element(this) && b), b || (d = d.concat(c.errorList));
            }),
            (c.errorList = d)),
        b
      );
    },
    rules: function (b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0];
      if (null != j && null != j.form) {
        if (b)
          switch (
            ((d = a.data(j.form, "validator").settings),
            (e = d.rules),
            (f = a.validator.staticRules(j)),
            b)
          ) {
            case "add":
              a.extend(f, a.validator.normalizeRule(c)),
                delete f.messages,
                (e[j.name] = f),
                c.messages &&
                  (d.messages[j.name] = a.extend(
                    d.messages[j.name],
                    c.messages
                  ));
              break;
            case "remove":
              return c
                ? ((i = {}),
                  a.each(c.split(/\s/), function (b, c) {
                    (i[c] = f[c]),
                      delete f[c],
                      "required" === c && a(j).removeAttr("aria-required");
                  }),
                  i)
                : (delete e[j.name], f);
          }
        return (
          (g = a.validator.normalizeRules(
            a.extend(
              {},
              a.validator.classRules(j),
              a.validator.attributeRules(j),
              a.validator.dataRules(j),
              a.validator.staticRules(j)
            ),
            j
          )),
          g.required &&
            ((h = g.required),
            delete g.required,
            (g = a.extend({ required: h }, g)),
            a(j).attr("aria-required", "true")),
          g.remote &&
            ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
          g
        );
      }
    },
  }),
    a.extend(a.expr.pseudos || a.expr[":"], {
      blank: function (b) {
        return !a.trim("" + a(b).val());
      },
      filled: function (b) {
        var c = a(b).val();
        return null !== c && !!a.trim("" + c);
      },
      unchecked: function (b) {
        return !a(b).prop("checked");
      },
    }),
    (a.validator = function (b, c) {
      (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init();
    }),
    (a.validator.format = function (b, c) {
      return 1 === arguments.length
        ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
          }
        : void 0 === c
        ? b
        : (arguments.length > 2 &&
            c.constructor !== Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor !== Array && (c = [c]),
          a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
              return c;
            });
          }),
          b);
    }),
    a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        pendingClass: "pending",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (a) {
          (this.lastActive = a),
            this.settings.focusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.hideThese(this.errorsFor(a)));
        },
        onfocusout: function (a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function (b, c) {
          var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
          (9 === c.which && "" === this.elementValue(b)) ||
            a.inArray(c.keyCode, d) !== -1 ||
            ((b.name in this.submitted || b.name in this.invalid) &&
              this.element(b));
        },
        onclick: function (a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).addClass(c).removeClass(d)
            : a(b).addClass(c).removeClass(d);
        },
        unhighlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).removeClass(c).addClass(d)
            : a(b).removeClass(c).addClass(d);
        },
      },
      setDefaults: function (b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: a.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: a.validator.format("Please enter at least {0} characters."),
        rangelength: a.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: a.validator.format("Please enter a value between {0} and {1}."),
        max: a.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: a.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
        step: a.validator.format("Please enter a multiple of {0}."),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function b(b) {
            !this.form &&
              this.hasAttribute("contenteditable") &&
              (this.form = a(this).closest("form")[0]);
            var c = a.data(this.form, "validator"),
              d = "on" + b.type.replace(/^validate/, ""),
              e = c.settings;
            e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b);
          }
          (this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var c,
            d = (this.groups = {});
          a.each(this.settings.groups, function (b, c) {
            "string" == typeof c && (c = c.split(/\s/)),
              a.each(c, function (a, c) {
                d[c] = b;
              });
          }),
            (c = this.settings.rules),
            a.each(c, function (b, d) {
              c[b] = a.validator.normalizeRule(d);
            }),
            a(this.currentForm)
              .on(
                "focusin.validate focusout.validate keyup.validate",
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                b
              )
              .on(
                "click.validate",
                "select, option, [type='radio'], [type='checkbox']",
                b
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).on(
                "invalid-form.validate",
                this.settings.invalidHandler
              ),
            a(this.currentForm)
              .find("[required], [data-rule-required], .required")
              .attr("aria-required", "true");
        },
        form: function () {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function (b) {
          var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;
          return (
            void 0 === f
              ? delete this.invalid[e.name]
              : (this.prepareElement(f),
                (this.currentElements = a(f)),
                (d = this.groups[f.name]),
                d &&
                  a.each(this.groups, function (a, b) {
                    b === d &&
                      a !== f.name &&
                      ((e = g.validationTargetFor(g.clean(g.findByName(a)))),
                      e &&
                        e.name in g.invalid &&
                        (g.currentElements.push(e), (h = g.check(e) && h)));
                  }),
                (c = this.check(f) !== !1),
                (h = h && c),
                c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
                this.numberOfInvalids() ||
                  (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr("aria-invalid", !c)),
            h
          );
        },
        showErrors: function (b) {
          if (b) {
            var c = this;
            a.extend(this.errorMap, b),
              (this.errorList = a.map(this.errorMap, function (a, b) {
                return { message: a, element: c.findByName(b)[0] };
              })),
              (this.successList = a.grep(this.successList, function (a) {
                return !(a.name in b);
              }));
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.invalid = {}),
            (this.submitted = {}),
            this.prepareForm(),
            this.hideErrors();
          var b = this.elements()
            .removeData("previousValue")
            .removeAttr("aria-invalid");
          this.resetElements(b);
        },
        resetElements: function (a) {
          var b;
          if (this.settings.unhighlight)
            for (b = 0; a[b]; b++)
              this.settings.unhighlight.call(
                this,
                a[b],
                this.settings.errorClass,
                ""
              ),
                this.findByName(a[b].name).removeClass(
                  this.settings.validClass
                );
          else
            a.removeClass(this.settings.errorClass).removeClass(
              this.settings.validClass
            );
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (a) {
          var b,
            c = 0;
          for (b in a) a[b] && c++;
          return c;
        },
        hideErrors: function () {
          this.hideThese(this.toHide);
        },
        hideThese: function (a) {
          a.not(this.containers).text(""), this.addWrapper(a).hide();
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .focus()
                .trigger("focusin");
            } catch (b) {}
        },
        findLastActive: function () {
          var b = this.lastActive;
          return (
            b &&
            1 ===
              a.grep(this.errorList, function (a) {
                return a.element.name === b.name;
              }).length &&
            b
          );
        },
        elements: function () {
          var b = this,
            c = {};
          return a(this.currentForm)
            .find("input, select, textarea, [contenteditable]")
            .not(":submit, :reset, :image, :disabled")
            .not(this.settings.ignore)
            .filter(function () {
              var d = this.name || a(this).attr("name");
              return (
                !d &&
                  b.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                this.hasAttribute("contenteditable") &&
                  (this.form = a(this).closest("form")[0]),
                !(d in c || !b.objectLength(a(this).rules())) &&
                  ((c[d] = !0), !0)
              );
            });
        },
        clean: function (b) {
          return a(b)[0];
        },
        errors: function () {
          var b = this.settings.errorClass.split(" ").join(".");
          return a(this.settings.errorElement + "." + b, this.errorContext);
        },
        resetInternals: function () {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([]));
        },
        reset: function () {
          this.resetInternals(), (this.currentElements = a([]));
        },
        prepareForm: function () {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function (a) {
          this.reset(), (this.toHide = this.errorsFor(a));
        },
        elementValue: function (b) {
          var c,
            d,
            e = a(b),
            f = b.type;
          return "radio" === f || "checkbox" === f
            ? this.findByName(b.name).filter(":checked").val()
            : "number" === f && "undefined" != typeof b.validity
            ? b.validity.badInput
              ? "NaN"
              : e.val()
            : ((c = b.hasAttribute("contenteditable") ? e.text() : e.val()),
              "file" === f
                ? "C:\\fakepath\\" === c.substr(0, 12)
                  ? c.substr(12)
                  : ((d = c.lastIndexOf("/")),
                    d >= 0
                      ? c.substr(d + 1)
                      : ((d = c.lastIndexOf("\\")),
                        d >= 0 ? c.substr(d + 1) : c))
                : "string" == typeof c
                ? c.replace(/\r/g, "")
                : c);
        },
        check: function (b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
            d,
            e,
            f = a(b).rules(),
            g = a.map(f, function (a, b) {
              return b;
            }).length,
            h = !1,
            i = this.elementValue(b);
          if ("function" == typeof f.normalizer) {
            if (((i = f.normalizer.call(b, i)), "string" != typeof i))
              throw new TypeError(
                "The normalizer should return a string value."
              );
            delete f.normalizer;
          }
          for (d in f) {
            e = { method: d, parameters: f[d] };
            try {
              if (
                ((c = a.validator.methods[d].call(this, i, b, e.parameters)),
                "dependency-mismatch" === c && 1 === g)
              ) {
                h = !0;
                continue;
              }
              if (((h = !1), "pending" === c))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return this.formatAndAdd(b, e), !1;
            } catch (j) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    "Exception occurred when checking element " +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method.",
                    j
                  ),
                j instanceof TypeError &&
                  (j.message +=
                    ".  Exception occurred when checking element " +
                    b.id +
                    ", check the '" +
                    e.method +
                    "' method."),
                j)
              );
            }
          }
          if (!h) return this.objectLength(f) && this.successList.push(b), !0;
        },
        customDataMessage: function (b, c) {
          return (
            a(b).data(
              "msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
            ) || a(b).data("msg")
          );
        },
        customMessage: function (a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function () {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
        },
        defaultMessage: function (b, c) {
          "string" == typeof c && (c = { method: c });
          var d = this.findDefined(
              this.customMessage(b.name, c.method),
              this.customDataMessage(b, c.method),
              (!this.settings.ignoreTitle && b.title) || void 0,
              a.validator.messages[c.method],
              "<strong>Warning: No message defined for " + b.name + "</strong>"
            ),
            e = /\$?\{(\d+)\}/g;
          return (
            "function" == typeof d
              ? (d = d.call(this, c.parameters, b))
              : e.test(d) &&
                (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
            d
          );
        },
        formatAndAdd: function (a, b) {
          var c = this.defaultMessage(a, b);
          this.errorList.push({ message: c, element: a, method: b.method }),
            (this.errorMap[a.name] = c),
            (this.submitted[a.name] = c);
        },
        addWrapper: function (a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function () {
          var a, b, c;
          for (a = 0; this.errorList[a]; a++)
            (c = this.errorList[a]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  c.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(c.element, c.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (a = 0, b = this.validElements(); b[a]; a++)
              this.settings.unhighlight.call(
                this,
                b[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return a(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (b, c) {
          var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr("aria-describedby");
          h.length
            ? (h
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              h.html(c))
            : ((h = a("<" + this.settings.errorElement + ">")
                .attr("id", i + "-error")
                .addClass(this.settings.errorClass)
                .html(c || "")),
              (d = h),
              this.settings.wrapper &&
                (d = h
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.length
                ? this.labelContainer.append(d)
                : this.settings.errorPlacement
                ? this.settings.errorPlacement.call(this, d, a(b))
                : d.insertAfter(b),
              h.is("label")
                ? h.attr("for", i)
                : 0 ===
                    h.parents("label[for='" + this.escapeCssMeta(i) + "']")
                      .length &&
                  ((f = h.attr("id")),
                  j
                    ? j.match(
                        new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")
                      ) || (j += " " + f)
                    : (j = f),
                  a(b).attr("aria-describedby", j),
                  (e = this.groups[b.name]),
                  e &&
                    ((g = this),
                    a.each(g.groups, function (b, c) {
                      c === e &&
                        a(
                          "[name='" + g.escapeCssMeta(b) + "']",
                          g.currentForm
                        ).attr("aria-describedby", h.attr("id"));
                    })))),
            !c &&
              this.settings.success &&
              (h.text(""),
              "string" == typeof this.settings.success
                ? h.addClass(this.settings.success)
                : this.settings.success(h, b)),
            (this.toShow = this.toShow.add(h));
        },
        errorsFor: function (b) {
          var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
          return (
            d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
            this.errors().filter(e)
          );
        },
        escapeCssMeta: function (a) {
          return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
        },
        idOrName: function (a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        validationTargetFor: function (b) {
          return (
            this.checkable(b) && (b = this.findByName(b.name)),
            a(b).not(this.settings.ignore)[0]
          );
        },
        checkable: function (a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function (b) {
          return a(this.currentForm).find(
            "[name='" + this.escapeCssMeta(b) + "']"
          );
        },
        getLength: function (b, c) {
          switch (c.nodeName.toLowerCase()) {
            case "select":
              return a("option:selected", c).length;
            case "input":
              if (this.checkable(c))
                return this.findByName(c.name).filter(":checked").length;
          }
          return b.length;
        },
        depend: function (a, b) {
          return (
            !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
          );
        },
        dependTypes: {
          boolean: function (a) {
            return a;
          },
          string: function (b, c) {
            return !!a(b, c.form).length;
          },
          function: function (a, b) {
            return a(b);
          },
        },
        optional: function (b) {
          var c = this.elementValue(b);
          return (
            !a.validator.methods.required.call(this, c, b) &&
            "dependency-mismatch"
          );
        },
        startRequest: function (b) {
          this.pending[b.name] ||
            (this.pendingRequest++,
            a(b).addClass(this.settings.pendingClass),
            (this.pending[b.name] = !0));
        },
        stopRequest: function (b, c) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            a(b).removeClass(this.settings.pendingClass),
            c && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
              : !c &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler("invalid-form", [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function (b, c) {
          return (
            (c = ("string" == typeof c && c) || "remote"),
            a.data(b, "previousValue") ||
              a.data(b, "previousValue", {
                old: null,
                valid: !0,
                message: this.defaultMessage(b, { method: c }),
              })
          );
        },
        destroy: function () {
          this.resetForm(),
            a(this.currentForm)
              .off(".validate")
              .removeData("validator")
              .find(".validate-equalTo-blur")
              .off(".validate-equalTo")
              .removeClass("validate-equalTo-blur");
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (b, c) {
        b.constructor === String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function (b) {
        var c = {},
          d = a(b).attr("class");
        return (
          d &&
            a.each(d.split(" "), function () {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      normalizeAttributeRule: function (a, b, c, d) {
        /min|max|step/.test(c) &&
          (null === b || /number|range|text/.test(b)) &&
          ((d = Number(d)), isNaN(d) && (d = void 0)),
          d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
      },
      attributeRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          "required" === c
            ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
            : (d = f.attr(c)),
            this.normalizeAttributeRule(e, g, c, d);
        return (
          e.maxlength &&
            /-1|2147483647|524288/.test(e.maxlength) &&
            delete e.maxlength,
          e
        );
      },
      dataRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          (d = f.data(
            "rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
          )),
            this.normalizeAttributeRule(e, g, c, d);
        return e;
      },
      staticRules: function (b) {
        var c = {},
          d = a.data(b.form, "validator");
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function (b, c) {
        return (
          a.each(b, function (d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case "string":
                  f = !!a(e.depends, c.form).length;
                  break;
                case "function":
                  f = e.depends.call(c, c);
              }
              f
                ? (b[d] = void 0 === e.param || e.param)
                : (a.data(c.form, "validator").resetElements(a(c)),
                  delete b[d]);
            }
          }),
          a.each(b, function (d, e) {
            b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
          }),
          a.each(["minlength", "maxlength"], function () {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(["rangelength", "range"], function () {
            var c;
            b[this] &&
              (a.isArray(b[this])
                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                : "string" == typeof b[this] &&
                  ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                  (b[this] = [Number(c[0]), Number(c[1])])));
          }),
          a.validator.autoCreateRanges &&
            (null != b.min &&
              null != b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            null != b.minlength &&
              null != b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b
        );
      },
      normalizeRule: function (b) {
        if ("string" == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function () {
            c[this] = !0;
          }),
            (b = c);
        }
        return b;
      },
      addMethod: function (b, c, d) {
        (a.validator.methods[b] = c),
          (a.validator.messages[b] =
            void 0 !== d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function (b, c, d) {
          if (!this.depend(d, c)) return "dependency-mismatch";
          if ("select" === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }
          return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0;
        },
        email: function (a, b) {
          return (
            this.optional(b) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              a
            )
          );
        },
        url: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
              a
            )
          );
        },
        date: function (a, b) {
          return (
            this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
          );
        },
        dateISO: function (a, b) {
          return (
            this.optional(b) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              a
            )
          );
        },
        number: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          );
        },
        digits: function (a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        minlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || e >= d;
        },
        maxlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || e <= d;
        },
        rangelength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || (e >= d[0] && e <= d[1]);
        },
        min: function (a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function (a, b, c) {
          return this.optional(b) || a <= c;
        },
        range: function (a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        step: function (b, c, d) {
          var e,
            f = a(c).attr("type"),
            g = "Step attribute on input type " + f + " is not supported.",
            h = ["text", "number", "range"],
            i = new RegExp("\\b" + f + "\\b"),
            j = f && !i.test(h.join()),
            k = function (a) {
              var b = ("" + a).match(/(?:\.(\d+))?$/);
              return b && b[1] ? b[1].length : 0;
            },
            l = function (a) {
              return Math.round(a * Math.pow(10, e));
            },
            m = !0;
          if (j) throw new Error(g);
          return (
            (e = k(d)),
            (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
            this.optional(c) || m
          );
        },
        equalTo: function (b, c, d) {
          var e = a(d);
          return (
            this.settings.onfocusout &&
              e.not(".validate-equalTo-blur").length &&
              e
                .addClass("validate-equalTo-blur")
                .on("blur.validate-equalTo", function () {
                  a(c).valid();
                }),
            b === e.val()
          );
        },
        remote: function (b, c, d, e) {
          if (this.optional(c)) return "dependency-mismatch";
          e = ("string" == typeof e && e) || "remote";
          var f,
            g,
            h,
            i = this.previousValue(c, e);
          return (
            this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (i.originalMessage =
              i.originalMessage || this.settings.messages[c.name][e]),
            (this.settings.messages[c.name][e] = i.message),
            (d = ("string" == typeof d && { url: d }) || d),
            (h = a.param(a.extend({ data: b }, d.data))),
            i.old === h
              ? i.valid
              : ((i.old = h),
                (f = this),
                this.startRequest(c),
                (g = {}),
                (g[c.name] = b),
                a.ajax(
                  a.extend(
                    !0,
                    {
                      mode: "abort",
                      port: "validate" + c.name,
                      dataType: "json",
                      data: g,
                      context: f.currentForm,
                      success: function (a) {
                        var d,
                          g,
                          h,
                          j = a === !0 || "true" === a;
                        (f.settings.messages[c.name][e] = i.originalMessage),
                          j
                            ? ((h = f.formSubmitted),
                              f.resetInternals(),
                              (f.toHide = f.errorsFor(c)),
                              (f.formSubmitted = h),
                              f.successList.push(c),
                              (f.invalid[c.name] = !1),
                              f.showErrors())
                            : ((d = {}),
                              (g =
                                a ||
                                f.defaultMessage(c, {
                                  method: e,
                                  parameters: b,
                                })),
                              (d[c.name] = i.message = g),
                              (f.invalid[c.name] = !0),
                              f.showErrors(d)),
                          (i.valid = j),
                          f.stopRequest(c, j);
                      },
                    },
                    d
                  )
                ),
                "pending")
          );
        },
      },
    });
  var b,
    c = {};
  return (
    a.ajaxPrefilter
      ? a.ajaxPrefilter(function (a, b, d) {
          var e = a.port;
          "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
        })
      : ((b = a.ajax),
        (a.ajax = function (d) {
          var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
          return "abort" === e
            ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
            : b.apply(this, arguments);
        })),
    a
  );
});
/*! Magnific Popup - v0.9.9 - 2013-12-27 * http://dimsemenov.com/plugins/magnific-popup/ * Copyright (c) 2013 Dmitry Semenov; */
(function (e) {
  var t,
    n,
    i,
    o,
    r,
    a,
    s,
    l = "Close",
    c = "BeforeClose",
    d = "AfterClose",
    u = "BeforeAppend",
    p = "MarkupParse",
    f = "Open",
    m = "Change",
    g = "mfp",
    h = "." + g,
    v = "mfp-ready",
    C = "mfp-removing",
    y = "mfp-prevent-close",
    w = function () {},
    b = !!window.jQuery,
    I = e(window),
    x = function (e, n) {
      t.ev.on(g + e + h, n);
    },
    k = function (t, n, i, o) {
      var r = document.createElement("div");
      return (
        (r.className = "mfp-" + t),
        i && (r.innerHTML = i),
        o ? n && n.appendChild(r) : ((r = e(r)), n && r.appendTo(n)),
        r
      );
    },
    T = function (n, i) {
      t.ev.triggerHandler(g + n, i),
        t.st.callbacks &&
          ((n = n.charAt(0).toLowerCase() + n.slice(1)),
          t.st.callbacks[n] &&
            t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
    },
    E = function (n) {
      return (
        (n === s && t.currTemplate.closeBtn) ||
          ((t.currTemplate.closeBtn = e(
            t.st.closeMarkup.replace("%title%", t.st.tClose)
          )),
          (s = n)),
        t.currTemplate.closeBtn
      );
    },
    _ = function () {
      e.magnificPopup.instance ||
        ((t = new w()), t.init(), (e.magnificPopup.instance = t));
    },
    S = function () {
      var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== e.transition) return !0;
      for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
      return !1;
    };
  (w.prototype = {
    constructor: w,
    init: function () {
      var n = navigator.appVersion;
      (t.isIE7 = -1 !== n.indexOf("MSIE 7.")),
        (t.isIE8 = -1 !== n.indexOf("MSIE 8.")),
        (t.isLowIE = t.isIE7 || t.isIE8),
        (t.isAndroid = /android/gi.test(n)),
        (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
        (t.supportsTransition = S()),
        (t.probablyMobile =
          t.isAndroid ||
          t.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (o = e(document)),
        (t.popupsCache = {});
    },
    open: function (n) {
      i || (i = e(document.body));
      var r;
      if (n.isObj === !1) {
        (t.items = n.items.toArray()), (t.index = 0);
        var s,
          l = n.items;
        for (r = 0; l.length > r; r++)
          if (((s = l[r]), s.parsed && (s = s.el[0]), s === n.el[0])) {
            t.index = r;
            break;
          }
      } else
        (t.items = e.isArray(n.items) ? n.items : [n.items]),
          (t.index = n.index || 0);
      if (t.isOpen) return t.updateItemHTML(), void 0;
      (t.types = []),
        (a = ""),
        (t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o),
        n.key
          ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
            (t.currTemplate = t.popupsCache[n.key]))
          : (t.currTemplate = {}),
        (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
        (t.fixedContentPos =
          "auto" === t.st.fixedContentPos
            ? !t.probablyMobile
            : t.st.fixedContentPos),
        t.st.modal &&
          ((t.st.closeOnContentClick = !1),
          (t.st.closeOnBgClick = !1),
          (t.st.showCloseBtn = !1),
          (t.st.enableEscapeKey = !1)),
        t.bgOverlay ||
          ((t.bgOverlay = k("bg").on("click" + h, function () {
            t.close();
          })),
          (t.wrap = k("wrap")
            .attr("tabindex", -1)
            .on("click" + h, function (e) {
              t._checkIfClose(e.target) && t.close();
            })),
          (t.container = k("container", t.wrap))),
        (t.contentContainer = k("content")),
        t.st.preloader &&
          (t.preloader = k("preloader", t.container, t.st.tLoading));
      var c = e.magnificPopup.modules;
      for (r = 0; c.length > r; r++) {
        var d = c[r];
        (d = d.charAt(0).toUpperCase() + d.slice(1)), t["init" + d].call(t);
      }
      T("BeforeOpen"),
        t.st.showCloseBtn &&
          (t.st.closeBtnInside
            ? (x(p, function (e, t, n, i) {
                n.close_replaceWith = E(i.type);
              }),
              (a += " mfp-close-btn-in"))
            : t.wrap.append(E())),
        t.st.alignTop && (a += " mfp-align-top"),
        t.fixedContentPos
          ? t.wrap.css({
              overflow: t.st.overflowY,
              overflowX: "hidden",
              overflowY: t.st.overflowY,
            })
          : t.wrap.css({ top: I.scrollTop(), position: "absolute" }),
        (t.st.fixedBgPos === !1 ||
          ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
          t.bgOverlay.css({ height: o.height(), position: "absolute" }),
        t.st.enableEscapeKey &&
          o.on("keyup" + h, function (e) {
            27 === e.keyCode && t.close();
          }),
        I.on("resize" + h, function () {
          t.updateSize();
        }),
        t.st.closeOnContentClick || (a += " mfp-auto-cursor"),
        a && t.wrap.addClass(a);
      var u = (t.wH = I.height()),
        m = {};
      if (t.fixedContentPos && t._hasScrollBar(u)) {
        var g = t._getScrollbarSize();
        g && (m.marginRight = g);
      }
      t.fixedContentPos &&
        (t.isIE7
          ? e("body, html").css("overflow", "hidden")
          : (m.overflow = "hidden"));
      var C = t.st.mainClass;
      return (
        t.isIE7 && (C += " mfp-ie7"),
        C && t._addClassToMFP(C),
        t.updateItemHTML(),
        T("BuildControls"),
        e("html").css(m),
        t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i),
        (t._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          t.content
            ? (t._addClassToMFP(v), t._setFocus())
            : t.bgOverlay.addClass(v),
            o.on("focusin" + h, t._onFocusIn);
        }, 16),
        (t.isOpen = !0),
        t.updateSize(u),
        T(f),
        n
      );
    },
    close: function () {
      t.isOpen &&
        (T(c),
        (t.isOpen = !1),
        t.st.removalDelay && !t.isLowIE && t.supportsTransition
          ? (t._addClassToMFP(C),
            setTimeout(function () {
              t._close();
            }, t.st.removalDelay))
          : t._close());
    },
    _close: function () {
      T(l);
      var n = C + " " + v + " ";
      if (
        (t.bgOverlay.detach(),
        t.wrap.detach(),
        t.container.empty(),
        t.st.mainClass && (n += t.st.mainClass + " "),
        t._removeClassFromMFP(n),
        t.fixedContentPos)
      ) {
        var i = { marginRight: "" };
        t.isIE7 ? e("body, html").css("overflow", "") : (i.overflow = ""),
          e("html").css(i);
      }
      o.off("keyup" + h + " focusin" + h),
        t.ev.off(h),
        t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        t.bgOverlay.attr("class", "mfp-bg"),
        t.container.attr("class", "mfp-container"),
        !t.st.showCloseBtn ||
          (t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0) ||
          (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
        t._lastFocusedEl && e(t._lastFocusedEl).focus(),
        (t.currItem = null),
        (t.content = null),
        (t.currTemplate = null),
        (t.prevHeight = 0),
        T(d);
    },
    updateSize: function (e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
          i = window.innerHeight * n;
        t.wrap.css("height", i), (t.wH = i);
      } else t.wH = e || I.height();
      t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize");
    },
    updateItemHTML: function () {
      var n = t.items[t.index];
      t.contentContainer.detach(),
        t.content && t.content.detach(),
        n.parsed || (n = t.parseEl(t.index));
      var i = n.type;
      if (
        (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
        (t.currItem = n),
        !t.currTemplate[i])
      ) {
        var o = t.st[i] ? t.st[i].markup : !1;
        T("FirstMarkupParse", o), (t.currTemplate[i] = o ? e(o) : !0);
      }
      r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
      var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
        n,
        t.currTemplate[i]
      );
      t.appendContent(a, i),
        (n.preloaded = !0),
        T(m, n),
        (r = n.type),
        t.container.prepend(t.contentContainer),
        T("AfterChange");
    },
    appendContent: function (e, n) {
      (t.content = e),
        e
          ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0
            ? t.content.find(".mfp-close").length || t.content.append(E())
            : (t.content = e)
          : (t.content = ""),
        T(u),
        t.container.addClass("mfp-" + n + "-holder"),
        t.contentContainer.append(t.content);
    },
    parseEl: function (n) {
      var i,
        o = t.items[n];
      if (
        (o.tagName
          ? (o = { el: e(o) })
          : ((i = o.type), (o = { data: o, src: o.src })),
        o.el)
      ) {
        for (var r = t.types, a = 0; r.length > a; a++)
          if (o.el.hasClass("mfp-" + r[a])) {
            i = r[a];
            break;
          }
        (o.src = o.el.attr("data-mfp-src")),
          o.src || (o.src = o.el.attr("href"));
      }
      return (
        (o.type = i || t.st.type || "inline"),
        (o.index = n),
        (o.parsed = !0),
        (t.items[n] = o),
        T("ElementParse", o),
        t.items[n]
      );
    },
    addGroup: function (e, n) {
      var i = function (i) {
        (i.mfpEl = this), t._openClick(i, e, n);
      };
      n || (n = {});
      var o = "click.magnificPopup";
      (n.mainEl = e),
        n.items
          ? ((n.isObj = !0), e.off(o).on(o, i))
          : ((n.isObj = !1),
            n.delegate
              ? e.off(o).on(o, n.delegate, i)
              : ((n.items = e), e.off(o).on(o, i)));
    },
    _openClick: function (n, i, o) {
      var r =
        void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
      if (r || (2 !== n.which && !n.ctrlKey && !n.metaKey)) {
        var a =
          void 0 !== o.disableOn
            ? o.disableOn
            : e.magnificPopup.defaults.disableOn;
        if (a)
          if (e.isFunction(a)) {
            if (!a.call(t)) return !0;
          } else if (a > I.width()) return !0;
        n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()),
          (o.el = e(n.mfpEl)),
          o.delegate && (o.items = i.find(o.delegate)),
          t.open(o);
      }
    },
    updateStatus: function (e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n),
          i || "loading" !== e || (i = t.st.tLoading);
        var o = { status: e, text: i };
        T("UpdateStatus", o),
          (e = o.status),
          (i = o.text),
          t.preloader.html(i),
          t.preloader.find("a").on("click", function (e) {
            e.stopImmediatePropagation();
          }),
          t.container.addClass("mfp-s-" + e),
          (n = e);
      }
    },
    _checkIfClose: function (n) {
      if (!e(n).hasClass(y)) {
        var i = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (i && o) return !0;
        if (
          !t.content ||
          e(n).hasClass("mfp-close") ||
          (t.preloader && n === t.preloader[0])
        )
          return !0;
        if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function (e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function (e) {
      return (
        (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
      );
    },
    _setFocus: function () {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function (n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target)
        ? void 0
        : (t._setFocus(), !1);
    },
    _parseMarkup: function (t, n, i) {
      var o;
      i.data && (n = e.extend(i.data, n)),
        T(p, [t, n, i]),
        e.each(n, function (e, n) {
          if (void 0 === n || n === !1) return !0;
          if (((o = e.split("_")), o.length > 1)) {
            var i = t.find(h + "-" + o[0]);
            if (i.length > 0) {
              var r = o[1];
              "replaceWith" === r
                ? i[0] !== n[0] && i.replaceWith(n)
                : "img" === r
                ? i.is("img")
                  ? i.attr("src", n)
                  : i.replaceWith(
                      '<img src="' + n + '" class="' + i.attr("class") + '" />'
                    )
                : i.attr(o[1], n);
            }
          } else t.find(h + "-" + e).html(n);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        (e.id = "mfp-sbm"),
          (e.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(e),
          (t.scrollbarSize = e.offsetWidth - e.clientWidth),
          document.body.removeChild(e);
      }
      return t.scrollbarSize;
    },
  }),
    (e.magnificPopup = {
      instance: null,
      proto: w.prototype,
      modules: [],
      open: function (t, n) {
        return (
          _(),
          (t = t ? e.extend(!0, {}, t) : {}),
          (t.isObj = !0),
          (t.index = n || 0),
          this.instance.open(t)
        );
      },
      close: function () {
        return e.magnificPopup.instance && e.magnificPopup.instance.close();
      },
      registerModule: function (t, n) {
        n.options && (e.magnificPopup.defaults[t] = n.options),
          e.extend(this.proto, n.proto),
          this.modules.push(t);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&times;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
      },
    }),
    (e.fn.magnificPopup = function (n) {
      _();
      var i = e(this);
      if ("string" == typeof n)
        if ("open" === n) {
          var o,
            r = b ? i.data("magnificPopup") : i[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;
          r.items
            ? (o = r.items[a])
            : ((o = i), r.delegate && (o = o.find(r.delegate)), (o = o.eq(a))),
            t._openClick({ mfpEl: o }, i, r);
        } else
          t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
      else
        (n = e.extend(!0, {}, n)),
          b ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
          t.addGroup(i, n);
      return i;
    });
  var P,
    O,
    z,
    M = "inline",
    B = function () {
      z && (O.after(z.addClass(P)).detach(), (z = null));
    };
  e.magnificPopup.registerModule(M, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        t.types.push(M),
          x(l + "." + M, function () {
            B();
          });
      },
      getInline: function (n, i) {
        if ((B(), n.src)) {
          var o = t.st.inline,
            r = e(n.src);
          if (r.length) {
            var a = r[0].parentNode;
            a &&
              a.tagName &&
              (O || ((P = o.hiddenClass), (O = k(P)), (P = "mfp-" + P)),
              (z = r.after(O).detach().removeClass(P))),
              t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), (r = e("<div>"));
          return (n.inlineElement = r), r;
        }
        return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      },
    },
  });
  var F,
    H = "ajax",
    L = function () {
      F && i.removeClass(F);
    },
    A = function () {
      L(), t.req && t.req.abort();
    };
  e.magnificPopup.registerModule(H, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        t.types.push(H),
          (F = t.st.ajax.cursor),
          x(l + "." + H, A),
          x("BeforeChange." + H, A);
      },
      getAjax: function (n) {
        F && i.addClass(F), t.updateStatus("loading");
        var o = e.extend(
          {
            url: n.src,
            success: function (i, o, r) {
              var a = { data: i, xhr: r };
              T("ParseAjax", a),
                t.appendContent(e(a.data), H),
                (n.finished = !0),
                L(),
                t._setFocus(),
                setTimeout(function () {
                  t.wrap.addClass(v);
                }, 16),
                t.updateStatus("ready"),
                T("AjaxContentAdded");
            },
            error: function () {
              L(),
                (n.finished = n.loadError = !0),
                t.updateStatus(
                  "error",
                  t.st.ajax.tError.replace("%url%", n.src)
                );
            },
          },
          t.st.ajax.settings
        );
        return (t.req = e.ajax(o)), "";
      },
    },
  });
  var j,
    N = function (n) {
      if (n.data && void 0 !== n.data.title) return n.data.title;
      var i = t.st.image.titleSrc;
      if (i) {
        if (e.isFunction(i)) return i.call(t, n);
        if (n.el) return n.el.attr(i) || "";
      }
      return "";
    };
  e.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var e = t.st.image,
          n = ".image";
        t.types.push("image"),
          x(f + n, function () {
            "image" === t.currItem.type && e.cursor && i.addClass(e.cursor);
          }),
          x(l + n, function () {
            e.cursor && i.removeClass(e.cursor), I.off("resize" + h);
          }),
          x("Resize" + n, t.resizeImage),
          t.isLowIE && x("AfterChange", t.resizeImage);
      },
      resizeImage: function () {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var n = 0;
          t.isLowIE &&
            (n =
              parseInt(e.img.css("padding-top"), 10) +
              parseInt(e.img.css("padding-bottom"), 10)),
            e.img.css("max-height", t.wH - n);
        }
      },
      _onImageHasSize: function (e) {
        e.img &&
          ((e.hasSize = !0),
          j && clearInterval(j),
          (e.isCheckingImgSize = !1),
          T("ImageHasSize", e),
          e.imgHidden &&
            (t.content && t.content.removeClass("mfp-loading"),
            (e.imgHidden = !1)));
      },
      findImageSize: function (e) {
        var n = 0,
          i = e.img[0],
          o = function (r) {
            j && clearInterval(j),
              (j = setInterval(function () {
                return i.naturalWidth > 0
                  ? (t._onImageHasSize(e), void 0)
                  : (n > 200 && clearInterval(j),
                    n++,
                    3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500),
                    void 0);
              }, r));
          };
        o(1);
      },
      getImage: function (n, i) {
        var o = 0,
          r = function () {
            n &&
              (n.img[0].complete
                ? (n.img.off(".mfploader"),
                  n === t.currItem &&
                    (t._onImageHasSize(n), t.updateStatus("ready")),
                  (n.hasSize = !0),
                  (n.loaded = !0),
                  T("ImageLoadComplete"))
                : (o++, 200 > o ? setTimeout(r, 100) : a()));
          },
          a = function () {
            n &&
              (n.img.off(".mfploader"),
              n === t.currItem &&
                (t._onImageHasSize(n),
                t.updateStatus("error", s.tError.replace("%url%", n.src))),
              (n.hasSize = !0),
              (n.loaded = !0),
              (n.loadError = !0));
          },
          s = t.st.image,
          l = i.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          (c.className = "mfp-img"),
            (n.img = e(c).on("load.mfploader", r).on("error.mfploader", a)),
            (c.src = n.src),
            l.is("img") && (n.img = n.img.clone()),
            (c = n.img[0]),
            c.naturalWidth > 0 ? (n.hasSize = !0) : c.width || (n.hasSize = !1);
        }
        return (
          t._parseMarkup(i, { title: N(n), img_replaceWith: n.img }, n),
          t.resizeImage(),
          n.hasSize
            ? (j && clearInterval(j),
              n.loadError
                ? (i.addClass("mfp-loading"),
                  t.updateStatus("error", s.tError.replace("%url%", n.src)))
                : (i.removeClass("mfp-loading"), t.updateStatus("ready")),
              i)
            : (t.updateStatus("loading"),
              (n.loading = !0),
              n.hasSize ||
                ((n.imgHidden = !0),
                i.addClass("mfp-loading"),
                t.findImageSize(n)),
              i)
        );
      },
    },
  });
  var W,
    R = function () {
      return (
        void 0 === W &&
          (W = void 0 !== document.createElement("p").style.MozTransform),
        W
      );
    };
  e.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (e) {
        return e.is("img") ? e : e.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var e,
          n = t.st.zoom,
          i = ".zoom";
        if (n.enabled && t.supportsTransition) {
          var o,
            r,
            a = n.duration,
            s = function (e) {
              var t = e
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                r = "transition";
              return (
                (o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i),
                t.css(o),
                t
              );
            },
            d = function () {
              t.content.css("visibility", "visible");
            };
          x("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (
                (clearTimeout(o),
                t.content.css("visibility", "hidden"),
                (e = t._getItemToZoom()),
                !e)
              )
                return d(), void 0;
              (r = s(e)),
                r.css(t._getOffset()),
                t.wrap.append(r),
                (o = setTimeout(function () {
                  r.css(t._getOffset(!0)),
                    (o = setTimeout(function () {
                      d(),
                        setTimeout(function () {
                          r.remove(), (e = r = null), T("ZoomAnimationEnded");
                        }, 16);
                    }, a));
                }, 16));
            }
          }),
            x(c + i, function () {
              if (t._allowZoom()) {
                if ((clearTimeout(o), (t.st.removalDelay = a), !e)) {
                  if (((e = t._getItemToZoom()), !e)) return;
                  r = s(e);
                }
                r.css(t._getOffset(!0)),
                  t.wrap.append(r),
                  t.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    r.css(t._getOffset());
                  }, 16);
              }
            }),
            x(l + i, function () {
              t._allowZoom() && (d(), r && r.remove(), (e = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === t.currItem.type;
      },
      _getItemToZoom: function () {
        return t.currItem.hasSize ? t.currItem.img : !1;
      },
      _getOffset: function (n) {
        var i;
        i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
        var o = i.offset(),
          r = parseInt(i.css("padding-top"), 10),
          a = parseInt(i.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - r;
        var s = {
          width: i.width(),
          height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r,
        };
        return (
          R()
            ? (s["-moz-transform"] = s.transform =
                "translate(" + o.left + "px," + o.top + "px)")
            : ((s.left = o.left), (s.top = o.top)),
          s
        );
      },
    },
  });
  var Z = "iframe",
    q = "//about:blank",
    D = function (e) {
      if (t.currTemplate[Z]) {
        var n = t.currTemplate[Z].find("iframe");
        n.length &&
          (e || (n[0].src = q),
          t.isIE8 && n.css("display", e ? "block" : "none"));
      }
    };
  e.magnificPopup.registerModule(Z, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        t.types.push(Z),
          x("BeforeChange", function (e, t, n) {
            t !== n && (t === Z ? D() : n === Z && D(!0));
          }),
          x(l + "." + Z, function () {
            D();
          });
      },
      getIframe: function (n, i) {
        var o = n.src,
          r = t.st.iframe;
        e.each(r.patterns, function () {
          return o.indexOf(this.index) > -1
            ? (this.id &&
                (o =
                  "string" == typeof this.id
                    ? o.substr(
                        o.lastIndexOf(this.id) + this.id.length,
                        o.length
                      )
                    : this.id.call(this, o)),
              (o = this.src.replace("%id%", o)),
              !1)
            : void 0;
        });
        var a = {};
        return (
          r.srcAction && (a[r.srcAction] = o),
          t._parseMarkup(i, a, n),
          t.updateStatus("ready"),
          i
        );
      },
    },
  });
  var K = function (e) {
      var n = t.items.length;
      return e > n - 1 ? e - n : 0 > e ? n + e : e;
    },
    Y = function (e, t, n) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
    };
  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var n = t.st.gallery,
          i = ".mfp-gallery",
          r = Boolean(e.fn.mfpFastClick);
        return (
          (t.direction = !0),
          n && n.enabled
            ? ((a += " mfp-gallery"),
              x(f + i, function () {
                n.navigateByImgClick &&
                  t.wrap.on("click" + i, ".mfp-img", function () {
                    return t.items.length > 1 ? (t.next(), !1) : void 0;
                  }),
                  o.on("keydown" + i, function (e) {
                    37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                  });
              }),
              x("UpdateStatus" + i, function (e, n) {
                n.text &&
                  (n.text = Y(n.text, t.currItem.index, t.items.length));
              }),
              x(p + i, function (e, i, o, r) {
                var a = t.items.length;
                o.counter = a > 1 ? Y(n.tCounter, r.index, a) : "";
              }),
              x("BuildControls" + i, function () {
                if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                  var i = n.arrowMarkup,
                    o = (t.arrowLeft = e(
                      i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(y)),
                    a = (t.arrowRight = e(
                      i
                        .replace(/%title%/gi, n.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(y)),
                    s = r ? "mfpFastClick" : "click";
                  o[s](function () {
                    t.prev();
                  }),
                    a[s](function () {
                      t.next();
                    }),
                    t.isIE7 &&
                      (k("b", o[0], !1, !0),
                      k("a", o[0], !1, !0),
                      k("b", a[0], !1, !0),
                      k("a", a[0], !1, !0)),
                    t.container.append(o.add(a));
                }
              }),
              x(m + i, function () {
                t._preloadTimeout && clearTimeout(t._preloadTimeout),
                  (t._preloadTimeout = setTimeout(function () {
                    t.preloadNearbyImages(), (t._preloadTimeout = null);
                  }, 16));
              }),
              x(l + i, function () {
                o.off(i),
                  t.wrap.off("click" + i),
                  t.arrowLeft &&
                    r &&
                    t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),
                  (t.arrowRight = t.arrowLeft = null);
              }),
              void 0)
            : !1
        );
      },
      next: function () {
        (t.direction = !0), (t.index = K(t.index + 1)), t.updateItemHTML();
      },
      prev: function () {
        (t.direction = !1), (t.index = K(t.index - 1)), t.updateItemHTML();
      },
      goTo: function (e) {
        (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var e,
          n = t.st.gallery.preload,
          i = Math.min(n[0], t.items.length),
          o = Math.min(n[1], t.items.length);
        for (e = 1; (t.direction ? o : i) >= e; e++)
          t._preloadItem(t.index + e);
        for (e = 1; (t.direction ? i : o) >= e; e++)
          t._preloadItem(t.index - e);
      },
      _preloadItem: function (n) {
        if (((n = K(n)), !t.items[n].preloaded)) {
          var i = t.items[n];
          i.parsed || (i = t.parseEl(n)),
            T("LazyLoad", i),
            "image" === i.type &&
              (i.img = e('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  i.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (i.hasSize = !0), (i.loadError = !0), T("LazyLoadError", i);
                })
                .attr("src", i.src)),
            (i.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  e.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
            n = e.ratio;
          (n = isNaN(n) ? n() : n),
            n > 1 &&
              (x("ImageHasSize." + U, function (e, t) {
                t.img.css({
                  "max-width": t.img[0].naturalWidth / n,
                  width: "100%",
                });
              }),
              x("ElementParse." + U, function (t, i) {
                i.src = e.replaceSrc(i, n);
              }));
        }
      },
    },
  }),
    (function () {
      var t = 1e3,
        n = "ontouchstart" in window,
        i = function () {
          I.off("touchmove" + r + " touchend" + r);
        },
        o = "mfpFastClick",
        r = "." + o;
      (e.fn.mfpFastClick = function (o) {
        return e(this).each(function () {
          var a,
            s = e(this);
          if (n) {
            var l, c, d, u, p, f;
            s.on("touchstart" + r, function (e) {
              (u = !1),
                (f = 1),
                (p = e.originalEvent
                  ? e.originalEvent.touches[0]
                  : e.touches[0]),
                (c = p.clientX),
                (d = p.clientY),
                I.on("touchmove" + r, function (e) {
                  (p = e.originalEvent ? e.originalEvent.touches : e.touches),
                    (f = p.length),
                    (p = p[0]),
                    (Math.abs(p.clientX - c) > 10 ||
                      Math.abs(p.clientY - d) > 10) &&
                      ((u = !0), i());
                }).on("touchend" + r, function (e) {
                  i(),
                    u ||
                      f > 1 ||
                      ((a = !0),
                      e.preventDefault(),
                      clearTimeout(l),
                      (l = setTimeout(function () {
                        a = !1;
                      }, t)),
                      o());
                });
            });
          }
          s.on("click" + r, function () {
            a || o();
          });
        });
      }),
        (e.fn.destroyMfpFastClick = function () {
          e(this).off("touchstart" + r + " click" + r),
            n && I.off("touchmove" + r + " touchend" + r);
        });
    })(),
    _();
})(window.jQuery || window.Zepto);
/*! Waypoints - 4.0.0 | https://github.com/imakewebthings/waypoints/blob/master/licenses.txt */
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.invokeAll("enable");
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s],
              l = o.oldScroll < a.triggerPoint,
              h = o.newScroll >= a.triggerPoint,
              p = l && h,
              u = !l && !h;
            (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = y + l - f),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();
/*! Jquery.rcounter.js - 1.0.0 */
!(function (e) {
  "use strict";
  e.fn.rCounter = function (t) {
    var c = e.extend({ duration: 20, easing: "swing" }, t);
    return this.each(function () {
      var f = e(this);
      f.waypoint(
        function (dir) {
          for (
            var t = [],
              e = (f.length, f.text()),
              n = /[,\-]/.test(e),
              i = /[,\-]/.test(e),
              r = ((e = e.replace(/,/g, "")), c.duration),
              o = i ? (e.split(".")[1] || []).length : 0,
              a = r;
            1 <= a;
            a--
          ) {
            var s = parseInt((e / r) * a);
            if ((i && (s = parseFloat((e / r) * a).toFixed(o)), n))
              for (; /(\d+)(\d{3})/.test(s.toString()); )
                s = s.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            t.unshift(s);
          }
          var u = function () {
            f.text(t.shift()), setTimeout(u, c.duration);
          };
          setTimeout(u, c.duration);
          this.destroy();
        },
        { offset: "100%", triggerOnce: !0 }
      );
    });
  };
})(jQuery);
/*! JavaScript Cookie v2.2.0 * https://github.com/js-cookie/js-cookie * Copyright 2006, 2015 Klaus Hartl & Fagner Brack * Released under the MIT license */
!(function (e) {
  var n;
  if (
    ("function" == typeof define && define.amd && (define(e), (n = !0)),
    "object" == typeof exports && ((module.exports = e()), (n = !0)),
    !n)
  ) {
    var t = window.Cookies,
      o = (window.Cookies = e());
    o.noConflict = function () {
      return (window.Cookies = t), o;
    };
  }
})(function () {
  function e() {
    for (var e = 0, n = {}; e < arguments.length; e++) {
      var t = arguments[e];
      for (var o in t) n[o] = t[o];
    }
    return n;
  }
  function n(e) {
    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  return (function t(o) {
    function r() {}
    function i(n, t, i) {
      if ("undefined" != typeof document) {
        "number" == typeof (i = e({ path: "/" }, r.defaults, i)).expires &&
          (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
          (i.expires = i.expires ? i.expires.toUTCString() : "");
        try {
          var c = JSON.stringify(t);
          /^[\{\[]/.test(c) && (t = c);
        } catch (e) {}
        (t = o.write
          ? o.write(t, n)
          : encodeURIComponent(String(t)).replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
              decodeURIComponent
            )),
          (n = encodeURIComponent(String(n))
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/[\(\)]/g, escape));
        var f = "";
        for (var u in i)
          i[u] &&
            ((f += "; " + u), !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
        return (document.cookie = n + "=" + t + f);
      }
    }
    function c(e, t) {
      if ("undefined" != typeof document) {
        for (
          var r = {},
            i = document.cookie ? document.cookie.split("; ") : [],
            c = 0;
          c < i.length;
          c++
        ) {
          var f = i[c].split("="),
            u = f.slice(1).join("=");
          t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
          try {
            var a = n(f[0]);
            if (((u = (o.read || o)(u, a) || n(u)), t))
              try {
                u = JSON.parse(u);
              } catch (e) {}
            if (((r[a] = u), e === a)) break;
          } catch (e) {}
        }
        return e ? r[e] : r;
      }
    }
    return (
      (r.set = i),
      (r.get = function (e) {
        return c(e, !1);
      }),
      (r.getJSON = function (e) {
        return c(e, !0);
      }),
      (r.remove = function (n, t) {
        i(n, "", e(t, { expires: -1 }));
      }),
      (r.defaults = {}),
      (r.withConverter = t),
      r
    );
  })(function () {});
});
1;
