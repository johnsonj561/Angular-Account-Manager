"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = "1.11.1",
      m = function m(a, b) {
    return new m.fn.init(a, b);
  },
      n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      o = /^-ms-/,
      p = /-([\da-z])/gi,
      q = function q(a, b) {
    return b.toUpperCase();
  };m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function toArray() {
      return d.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    }, pushStack: function pushStack(a) {
      var b = m.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a, b) {
      return m.each(this, a, b);
    }, map: function map(a) {
      return this.pushStack(m.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(d.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (e = arguments[h])) for (d in e) {
        a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
      }
    }return g;
  }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === m.type(a);
    }, isArray: Array.isArray || function (a) {
      return "array" === m.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a == a.window;
    }, isNumeric: function isNumeric(a) {
      return !m.isArray(a) && a - parseFloat(a) >= 0;
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, isPlainObject: function isPlainObject(a) {
      var b;if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;try {
        if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }if (k.ownLast) for (b in a) {
        return j.call(a, b);
      }for (b in a) {}return void 0 === b || j.call(a, b);
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(b) {
      b && m.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    }, camelCase: function camelCase(a) {
      return a.replace(o, "ms-").replace(p, q);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = r(a);if (c) {
        if (g) {
          for (; f > e; e++) {
            if (d = b.apply(a[e], c), d === !1) break;
          }
        } else for (e in a) {
          if (d = b.apply(a[e], c), d === !1) break;
        }
      } else if (g) {
        for (; f > e; e++) {
          if (d = b.call(a[e], e, a[e]), d === !1) break;
        }
      } else for (e in a) {
        if (d = b.call(a[e], e, a[e]), d === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(n, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      var d;if (b) {
        if (g) return g.call(b, a, c);for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
          if (c in b && b[c] === a) return c;
        }
      }return -1;
    }, merge: function merge(a, b) {
      var c = +b.length,
          d = 0,
          e = a.length;while (c > d) {
        a[e++] = b[d++];
      }if (c !== c) while (void 0 !== b[d]) {
        a[e++] = b[d++];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = r(a),
          i = [];if (h) for (; g > f; f++) {
        d = b(a[f], f, c), null != d && i.push(d);
      } else for (f in a) {
        d = b(a[f], f, c), null != d && i.push(d);
      }return e.apply([], i);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, e, f;return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function e() {
        return a.apply(b || this, c.concat(d.call(arguments)));
      }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
    }, now: function now() {
      return +new Date();
    }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });function r(a) {
    var b = a.length,
        c = m.type(a);return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var s = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + -new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = gb(),
        z = gb(),
        A = gb(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = "undefined",
        D = 1 << 31,
        E = {}.hasOwnProperty,
        F = [],
        G = F.pop,
        H = F.push,
        I = F.push,
        J = F.slice,
        K = F.indexOf || function (a) {
      for (var b = 0, c = this.length; c > b; b++) {
        if (this[b] === a) return b;
      }return -1;
    },
        L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        O = N.replace("w", "w#"),
        P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
        Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
        R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        S = new RegExp("^" + M + "*," + M + "*"),
        T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        V = new RegExp(Q),
        W = new RegExp("^" + O + "$"),
        X = { ID: new RegExp("^#(" + N + ")"), CLASS: new RegExp("^\\.(" + N + ")"), TAG: new RegExp("^(" + N.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + Q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ab = /[+~]/,
        bb = /'|\\/g,
        cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        db = function db(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    };try {
      I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
    } catch (eb) {
      I = { apply: F.length ? function (a, b) {
          H.apply(a, J.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function fb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;if (1 !== (k = b.nodeType) && 9 !== k) return [];if (p && !e) {
        if (f = _.exec(a)) if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
        } else {
          if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d;
        }if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) {
              o[l] = s + qb(o[l]);
            }w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",");
          }if (x) try {
            return I.apply(d, w.querySelectorAll(x)), d;
          } catch (y) {} finally {
            r || b.removeAttribute("id");
          }
        }
      }return i(a.replace(R, "$1"), b, d, e);
    }function gb() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function hb(a) {
      return a[u] = !0, a;
    }function ib(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function jb(a, b) {
      var c = a.split("|"),
          e = a.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function kb(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function lb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function mb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function nb(a) {
      return hb(function (b) {
        return b = +b, hb(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function ob(a) {
      return a && _typeof(a.getElementsByTagName) !== C && a;
    }c = fb.support = {}, f = fb.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fb.setDocument = function (a) {
      var b,
          e = a ? a.ownerDocument || a : v,
          g = e.defaultView;return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
        m();
      }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
        m();
      })), c.attributes = ib(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ib(function (a) {
        return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length;
      }), c.getById = ib(function (a) {
        return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if (_typeof(b.getElementById) !== C && p) {
          var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(cb, db);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(cb, db);return function (a) {
          var c = _typeof(a.getAttributeNode) !== C && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return _typeof(b.getElementsByTagName) !== C ? b.getElementsByTagName(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return _typeof(b.getElementsByClassName) !== C && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
        a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked");
      }), ib(function (a) {
        var b = e.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            f = a.parentNode,
            g = b.parentNode,
            h = [a],
            i = [b];if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;if (f === g) return kb(a, b);c = a;while (c = c.parentNode) {
          h.unshift(c);
        }c = b;while (c = c.parentNode) {
          i.unshift(c);
        }while (h[d] === i[d]) {
          d++;
        }return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, e) : n;
    }, fb.matches = function (a, b) {
      return fb(a, null, null, b);
    }, fb.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fb(b, n, null, [a]).length > 0;
    }, fb.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fb.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fb.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fb.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = fb.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = fb.selectors = { cacheLength: 50, createPseudo: hb, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(cb, db).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || _typeof(a.getAttribute) !== C && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fb.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;if (q) {
              if (f) {
                while (p) {
                  l = b;while (l = l[p]) {
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [w, n, m];break;
                  }
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
              }return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: hb(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(R, "$1"));return d[u] ? hb(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), !c.pop();
          };
        }), has: hb(function (a) {
          return function (b) {
            return fb(a, b).length > 0;
          };
        }), contains: hb(function (a) {
          return function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: hb(function (a) {
          return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Z.test(a.nodeName);
        }, input: function input(a) {
          return Y.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: nb(function () {
          return [0];
        }), last: nb(function (a, b) {
          return [b - 1];
        }), eq: nb(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: nb(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: nb(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: nb(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: nb(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = lb(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = mb(b);
    }function pb() {}pb.prototype = d.filters = d.pseudos, d.setFilters = new pb(), g = fb.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
    };function qb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function rb(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function sb(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function tb(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fb(a, b[d], c);
      }return c;
    }function ub(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }return g;
    }function vb(a, b, c, d, e, f) {
      return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || tb(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ub(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = ub(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
      });
    }function wb(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
        return a === b;
      }, h, !0), l = rb(function (a) {
        return K.call(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
          }m.push(c);
        }
      }return sb(m);
    }function xb(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            m,
            o,
            p = 0,
            q = "0",
            r = _f && [],
            s = [],
            t = j,
            u = _f || e && d.find.TAG("*", k),
            v = w += null == t ? 1 : Math.random() || .1,
            x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;while (o = a[m++]) {
              if (o(l, g, h)) {
                i.push(l);break;
              }
            }k && (w = v);
          }c && ((l = !o && l) && p--, _f && r.push(l));
        }if (p += q, c && q !== p) {
          m = 0;while (o = b[m++]) {
            o(r, s, g, h);
          }if (_f) {
            if (p > 0) while (q--) {
              r[q] || s[q] || (s[q] = G.call(i));
            }s = ub(s);
          }I.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
        }return k && (w = v, j = t), r;
      };return c ? hb(f) : f;
    }return h = fb.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, xb(e, d)), f.selector = a;
      }return f;
    }, i = fb.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ib(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || jb("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ib(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || jb("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ib(function (a) {
      return null == a.getAttribute("disabled");
    }) || jb(L, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fb;
  }(a);m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;var t = m.expr.match.needsContext,
      u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      v = /^.[^:#\[\.,]*$/;function w(a, b, c) {
    if (m.isFunction(b)) return m.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return m.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);b = m.filter(b, a);
    }return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }m.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, m.fn.extend({ find: function find(a) {
      var b,
          c = [],
          d = this,
          e = d.length;if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
        for (b = 0; e > b; b++) {
          if (m.contains(d[b], this)) return !0;
        }
      }));for (b = 0; e > b; b++) {
        m.find(a, d[b], c);
      }return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    }, filter: function filter(a) {
      return this.pushStack(w(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(w(this, a || [], !0));
    }, is: function is(a) {
      return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
    } });var x,
      y = a.document,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = m.fn.init = function (a, b) {
    var c, d;if (!a) return this;if ("string" == typeof a) {
      if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);if (c[1]) {
        if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) {
          m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        }return this;
      }if (d = y.getElementById(c[2]), d && d.parentNode) {
        if (d.id !== c[2]) return x.find(a);this.length = 1, this[0] = d;
      }return this.context = y, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this));
  };A.prototype = m.fn, x = m(y);var B = /^(?:parents|prev(?:Until|All))/,
      C = { children: !0, contents: !0, next: !0, prev: !0 };m.extend({ dir: function dir(a, b, c) {
      var d = [],
          e = a[b];while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
        1 === e.nodeType && d.push(e), e = e[b];
      }return d;
    }, sibling: function sibling(a, b) {
      for (var c = []; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && c.push(a);
      }return c;
    } }), m.fn.extend({ has: function has(a) {
      var b,
          c = m(a, this),
          d = c.length;return this.filter(function () {
        for (b = 0; d > b; b++) {
          if (m.contains(this, c[b])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? m.unique(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function D(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);return a;
  }m.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return m.dir(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return m.dir(a, "parentNode", c);
    }, next: function next(a) {
      return D(a, "nextSibling");
    }, prev: function prev(a) {
      return D(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return m.dir(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return m.dir(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return m.dir(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return m.dir(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return m.sibling((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return m.sibling(a.firstChild);
    }, contents: function contents(a) {
      return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
    } }, function (a, b) {
    m.fn[a] = function (c, d) {
      var e = m.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });var E = /\S+/g,
      F = {};function G(a) {
    var b = F[a] = {};return m.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }m.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function j(l) {
      for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
        if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          c = !1;break;
        }
      }b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
    },
        k = { add: function add() {
        if (h) {
          var d = h.length;!function f(b) {
            m.each(b, function (b, c) {
              var d = m.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
            });
          }(arguments), b ? e = h.length : c && (g = d, j(c));
        }return this;
      }, remove: function remove() {
        return h && m.each(arguments, function (a, c) {
          var d;while ((d = m.inArray(c, h, d)) > -1) {
            h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
          }
        }), this;
      }, has: function has(a) {
        return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
      }, empty: function empty() {
        return h = [], e = 0, this;
      }, disable: function disable() {
        return h = i = c = void 0, this;
      }, disabled: function disabled() {
        return !h;
      }, lock: function lock() {
        return i = void 0, c || k.disable(), this;
      }, locked: function locked() {
        return !i;
      }, fireWith: function fireWith(a, c) {
        return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this;
      }, fire: function fire() {
        return k.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return k;
  }, m.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return m.Deferred(function (c) {
            m.each(b, function (b, f) {
              var g = m.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? m.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, m.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : m.Deferred(),
          h = function h(a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
        c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var H;m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }, m.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? m.readyWait++ : m.ready(!0);
    }, ready: function ready(a) {
      if (a === !0 ? ! --m.readyWait : !m.isReady) {
        if (!y.body) return setTimeout(m.ready);m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")));
      }
    } });function I() {
    y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }function J() {
    (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready());
  }m.ready.promise = function (b) {
    if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);else {
      y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);var c = !1;try {
        c = null == a.frameElement && y.documentElement;
      } catch (d) {}c && c.doScroll && !function e() {
        if (!m.isReady) {
          try {
            c.doScroll("left");
          } catch (a) {
            return setTimeout(e, 50);
          }I(), m.ready();
        }
      }();
    }return H.promise(b);
  };var K = "undefined",
      L;for (L in m(k)) {
    break;
  }k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
    var a, b, c, d;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), _typeof(b.style.zoom) !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
  }), function () {
    var a = y.createElement("div");if (null == k.deleteExpando) {
      k.deleteExpando = !0;try {
        delete a.test;
      } catch (b) {
        k.deleteExpando = !1;
      }
    }a = null;
  }(), m.acceptData = function (a) {
    var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
  };var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      N = /([A-Z])/g;function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
        } catch (e) {}m.data(a, b, c);
      } else c = void 0;
    }return c;
  }function P(a) {
    var b;for (b in a) {
      if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    }return !0;
  }function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f,
          g,
          h = m.expando,
          i = a.nodeType,
          j = i ? m.cache : a,
          k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f;
    }
  }function R(a, b, c) {
    if (m.acceptData(a)) {
      var d,
          e,
          f = a.nodeType,
          g = f ? m.cache : a,
          h = f ? a[m.expando] : m.expando;if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;while (e--) {
            delete d[b[e]];
          }if (c ? !P(d) : !m.isEmptyObject(d)) return;
        }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
      }
    }
  }m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(a) {
      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
    }, data: function data(a, b, c) {
      return Q(a, b, c);
    }, removeData: function removeData(a, b) {
      return R(a, b);
    }, _data: function _data(a, b, c) {
      return Q(a, b, c, !0);
    }, _removeData: function _removeData(a, b) {
      return R(a, b, !0);
    } }), m.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
          }m._data(f, "parsedAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        m.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        m.data(this, a, b);
      }) : f ? O(f, a, m.data(f, a)) : void 0;
    }, removeData: function removeData(a) {
      return this.each(function () {
        m.removeData(this, a);
      });
    } }), m.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = m.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = m._queueHooks(a, b),
          g = function g() {
        m.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () {
          m._removeData(a, b + "queue"), m._removeData(a, c);
        }) });
    } }), m.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = m.queue(this, a, b);m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        m.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = m.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = ["Top", "Right", "Bottom", "Left"],
      U = function U(a, b) {
    return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
  },
      V = m.access = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === m.type(c)) {
      e = !0;for (h in c) {
        m.access(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(m(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      W = /^(?:checkbox|radio)$/i;!function () {
    var a = y.createElement("input"),
        b = y.createElement("div"),
        c = y.createDocumentFragment();if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
      k.noCloneEvent = !1;
    }), b.cloneNode(!0).click()), null == k.deleteExpando) {
      k.deleteExpando = !0;try {
        delete b.test;
      } catch (d) {
        k.deleteExpando = !1;
      }
    }
  }(), function () {
    var b,
        c,
        d = y.createElement("div");for (b in { submit: !0, change: !0, focusin: !0 }) {
      c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
    }d = null;
  }();var X = /^(?:input|select|textarea)$/i,
      Y = /^key/,
      Z = /^(?:mouse|pointer|contextmenu)|click/,
      $ = /^(?:focusinfocus|focusoutblur)$/,
      _ = /^([^.]*)(?:\.(.+)|)$/;function ab() {
    return !0;
  }function bb() {
    return !1;
  }function cb() {
    try {
      return y.activeElement;
    } catch (a) {}
  }m.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          n,
          o,
          p,
          q,
          r = m._data(a);if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return (typeof m === "undefined" ? "undefined" : _typeof(m)) === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;while (h--) {
          f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
        }a = null;
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          n,
          o,
          p,
          q,
          r = m.hasData(a) && m._data(a);if (r && (k = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;while (j--) {
          if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;while (f--) {
              g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
            }i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
          } else for (o in k) {
            m.event.remove(a, o + b[j], c, d, !0);
          }
        }m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
      }
    }, trigger: function trigger(b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          l,
          n,
          o = [d || y],
          p = j.call(b, "type") ? b.type : b,
          q = j.call(b, "namespace") ? b.namespace.split(".") : [];if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), l = h;
          }l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
        }n = 0;while ((h = o[n++]) && !b.isPropagationStopped()) {
          b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        }if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
          l = d[g], l && (d[g] = null), m.event.triggered = p;try {
            d[p]();
          } catch (r) {}m.event.triggered = void 0, l && (d[g] = l);
        }return b.result;
      }
    }, dispatch: function dispatch(a) {
      a = m.event.fix(a);var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (m._data(this, "events") || {})[a.type] || [],
          k = m.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = m.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, g = 0;while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
            (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (e = [], f = 0; h > f; f++) {
            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
          }e.length && g.push({ elem: i, handlers: e });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, fix: function fix(a) {
      if (a[m.expando]) return a;var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;while (b--) {
        c = d[b], a[c] = f[c];
      }return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            d,
            e,
            f = b.button,
            g = b.fromElement;return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== cb() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === cb() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return m.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } }, simulate: function simulate(a, b, c, d) {
      var e = m.extend(new m.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    } }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  } : function (a, b, c) {
    var d = "on" + b;a.detachEvent && (_typeof(a[d]) === K && (a[d] = null), a.detachEvent(d, c));
  }, m.Event = function (a, b) {
    return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
  }, m.Event.prototype = { isDefaultPrevented: bb, isPropagationStopped: bb, isImmediatePropagationStopped: bb, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    m.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), k.submitBubbles || (m.event.special.submit = { setup: function setup() {
      return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
            c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
          a._submit_bubble = !0;
        }), m._data(c, "submitBubbles", !0));
      });
    }, postDispatch: function postDispatch(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
    }, teardown: function teardown() {
      return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
    } }), k.changeBubbles || (m.event.special.change = { setup: function setup() {
      return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
      }), m.event.add(this, "click._change", function (a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
      })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
        }), m._data(b, "changeBubbles", !0));
      });
    }, handle: function handle(a) {
      var b = a.target;return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    }, teardown: function teardown() {
      return m.event.remove(this, "._change"), !X.test(this.nodeName);
    } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      m.event.simulate(b, a.target, m.event.fix(a), !0);
    };m.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = m._data(d, b);e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = m._data(d, b) - 1;e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
      } };
  }), m.fn.extend({ on: function on(a, b, c, d, e) {
      var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        "string" != typeof b && (c = c || b, b = void 0);for (f in a) {
          this.on(f, b, c, a[f], e);
        }return this;
      }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;else if (!d) return this;return 1 === e && (g = d, d = function d(a) {
        return m().off(a), g.apply(this, arguments);
      }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
        m.event.add(this, a, d, c, b);
      });
    }, one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
        m.event.remove(this, a, c, b);
      });
    }, trigger: function trigger(a, b) {
      return this.each(function () {
        m.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? m.event.trigger(a, b, c, !0) : void 0;
    } });function db(a) {
    var b = eb.split("|"),
        c = a.createDocumentFragment();if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }return c;
  }var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      fb = / jQuery\d+="(?:null|\d+)"/g,
      gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
      hb = /^\s+/,
      ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      jb = /<([\w:]+)/,
      kb = /<tbody/i,
      lb = /<|&#?\w+;/,
      mb = /<(?:script|style|link)/i,
      nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ob = /^$|\/(?:java|ecma)script/i,
      pb = /^true\/(.*)/,
      qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      rb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
      sb = db(y),
      tb = sb.appendChild(y.createElement("div"));rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;function ub(a, b) {
    var c,
        d,
        e = 0,
        f = _typeof(a.getElementsByTagName) !== K ? a.getElementsByTagName(b || "*") : _typeof(a.querySelectorAll) !== K ? a.querySelectorAll(b || "*") : void 0;if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
      !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
    }return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f;
  }function vb(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }function wb(a, b) {
    return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function xb(a) {
    return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
  }function yb(a) {
    var b = pb.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function zb(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) {
      m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
    }
  }function Ab(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c,
          d,
          e,
          f = m._data(a),
          g = m._data(b, f),
          h = f.events;if (h) {
        delete g.handle, g.events = {};for (c in h) {
          for (d = 0, e = h[c].length; e > d; d++) {
            m.event.add(b, c, h[c][d]);
          }
        }
      }g.data && (g.data = m.extend({}, g.data));
    }
  }function Bb(a, b) {
    var c, d, e;if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
        e = m._data(b);for (d in e.events) {
          m.removeEvent(b, d, e.handle);
        }b.removeAttribute(m.expando);
      }"script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
  }m.extend({ clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = m.contains(a.ownerDocument, a);if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) {
        d[g] && Bb(e, d[g]);
      }if (b) if (c) for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) {
        Ab(e, d[g]);
      } else Ab(a, f);return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f;
    }, buildFragment: function buildFragment(a, b, c, d) {
      for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) {
        if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);else if (lb.test(f)) {
          h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];while (e--) {
            h = h.lastChild;
          }if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
            f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;while (e--) {
              m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
            }
          }m.merge(p, h.childNodes), h.textContent = "";while (h.firstChild) {
            h.removeChild(h.firstChild);
          }h = o.lastChild;
        } else p.push(b.createTextNode(f));
      }h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;while (f = p[q++]) {
        if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
          e = 0;while (f = h[e++]) {
            ob.test(f.type || "") && c.push(f);
          }
        }
      }return h = null, o;
    }, cleanData: function cleanData(a, b) {
      for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
        if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
          if (g.events) for (e in g.events) {
            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
          }j[f] && (delete j[f], l ? delete d[i] : _typeof(d.removeAttribute) !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
        }
      }
    } }), m.fn.extend({ text: function text(a) {
      return V(this, function (a) {
        return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
      }, null, a, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, remove: function remove(a, b) {
      for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
        b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
      }return this;
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && m.cleanData(ub(a, !1));while (a.firstChild) {
          a.removeChild(a.firstChild);
        }a.options && m.nodeName(a, "select") && (a.options.length = 0);
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return m.clone(this, a, b);
      });
    }, html: function html(a) {
      return V(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(ib, "<$1></$2>");try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = arguments[0];return this.domManip(arguments, function (b) {
        a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    }, detach: function detach(a) {
      return this.remove(a, !0);
    }, domManip: function domManip(a, b) {
      a = e.apply([], a);var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          n = this,
          o = l - 1,
          p = a[0],
          q = m.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function (c) {
        var d = n.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
        for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) {
          d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
        }if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) {
          d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
        }i = c = null;
      }return this;
    } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    m.fn[a] = function (a) {
      for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
        c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
      }return this.pushStack(e);
    };
  });var Cb,
      Db = {};function Eb(b, c) {
    var d,
        e = m(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");return e.detach(), f;
  }function Fb(a) {
    var b = y,
        c = Db[a];return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c;
  }!function () {
    var a;k.shrinkWrapBlocks = function () {
      if (null != a) return a;a = !1;var b, c, d;return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), _typeof(b.style.zoom) !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0;
    };
  }();var Gb = /^margin/,
      Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ib,
      Jb,
      Kb = /^(top|right|bottom|left)$/;a.getComputedStyle ? (Ib = function Ib(a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null);
  }, Jb = function Jb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
  }) : y.documentElement.currentStyle && (Ib = function Ib(a) {
    return a.currentStyle;
  }, Jb = function Jb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });function Lb(a, b) {
    return { get: function get() {
        var c = a();if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }!function () {
    var b, c, d, e, f, g, h;if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
      var _i = function _i() {
        var b, c, d, i;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d));
      };

      c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function reliableHiddenOffsets() {
          return null == g && _i(), g;
        }, boxSizingReliable: function boxSizingReliable() {
          return null == f && _i(), f;
        }, pixelPosition: function pixelPosition() {
          return null == e && _i(), e;
        }, reliableMarginRight: function reliableMarginRight() {
          return null == h && _i(), h;
        } });
    }
  }(), m.swap = function (a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };var Mb = /alpha\([^)]*\)/i,
      Nb = /opacity\s*=\s*([^)]*)/,
      Ob = /^(none|table(?!-c[ea]).+)/,
      Pb = new RegExp("^(" + S + ")(.*)$", "i"),
      Qb = new RegExp("^([+-])=(" + S + ")", "i"),
      Rb = { position: "absolute", visibility: "hidden", display: "block" },
      Sb = { letterSpacing: "0", fontWeight: "400" },
      Tb = ["Webkit", "O", "Moz", "ms"];function Ub(a, b) {
    if (b in a) return b;var c = b.charAt(0).toUpperCase() + b.slice(1),
        d = b,
        e = Tb.length;while (e--) {
      if (b = Tb[e] + c, b in a) return b;
    }return d;
  }function Vb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }function Wb(a, b, c) {
    var d = Pb.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }function Xb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
    }return g;
  }function Yb(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ib(a),
        g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }m.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Jb(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = m.camelCase(b),
            i = a.style;if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];if (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = m.camelCase(b);return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
    } }), m.each(["height", "width"], function (a, b) {
    m.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
          return Yb(a, b, d);
        }) : Yb(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e = d && Ib(a);return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
      } };
  }), k.opacity || (m.cssHooks.opacity = { get: function get(a, b) {
      return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    }, set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e);
    } }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
    return b ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"]) : void 0;
  }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    m.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Gb.test(a) || (m.cssHooks[a + b].set = Wb);
  }), m.fn.extend({ css: function css(a, b) {
      return V(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (m.isArray(b)) {
          for (d = Ib(a), e = b.length; e > g; g++) {
            f[b[g]] = m.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Vb(this, !0);
    }, hide: function hide() {
      return Vb(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        U(this) ? m(this).show() : m(this).hide();
      });
    } });function Zb(a, b, c, d, e) {
    return new Zb.prototype.init(a, b, c, d, e);
  }m.Tween = Zb, Zb.prototype = { constructor: Zb, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Zb.propHooks[this.prop];return a && a.get ? a.get(this) : Zb.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Zb.propHooks[this.prop];return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this;
    } }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = { _default: { get: function get(a) {
        var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
      }, set: function set(a) {
        m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      } } }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, m.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    } }, m.fx = Zb.prototype.init, m.fx.step = {};var $b,
      _b,
      ac = /^(?:toggle|show|hide)$/,
      bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      cc = /queueHooks$/,
      dc = [ic],
      ec = { "*": [function (a, b) {
      var c = this.createTween(a, b),
          d = c.cur(),
          e = bc.exec(b),
          f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
          g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
          h = 1,
          i = 20;if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;do {
          h = h || ".5", g /= h, m.style(c.elem, a, g + f);
        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
      }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
    }] };function fc() {
    return setTimeout(function () {
      $b = void 0;
    }), $b = m.now();
  }function gc(a, b) {
    var c,
        d = { height: a },
        e = 0;for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
      c = T[e], d["margin" + c] = d["padding" + c] = a;
    }return b && (d.opacity = d.width = a), d;
  }function hc(a, b, c) {
    for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ic(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        l,
        n = this,
        o = {},
        p = a.style,
        q = a.nodeType && U(a),
        r = m._data(a, "fxshow");c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, n.always(function () {
      n.always(function () {
        h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], ac.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;q = !0;
        }o[d] = r && r[d] || m.style(a, d);
      } else j = void 0;
    }if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
        m(a).hide();
      }), n.done(function () {
        var b;m._removeData(a, "fxshow");for (b in o) {
          m.style(a, b, o[b]);
        }
      });for (d in o) {
        g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function jc(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function kc(a, b, c) {
    var d,
        e,
        f = 0,
        g = dc.length,
        h = m.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $b || fc(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jc(k, j.opts.specialEasing); g > f; f++) {
      if (d = dc[f].call(j, a, k, j.opts)) return d;
    }return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }m.Animation = m.extend(kc, { tweener: function tweener(a, b) {
      m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b);
      }
    }, prefilter: function prefilter(a, b) {
      b ? dc.unshift(a) : dc.push(a);
    } }), m.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b };return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
    }, d;
  }, m.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = m.isEmptyObject(a),
          f = m.speed(b, c, d),
          g = function g() {
        var b = kc(this, m.extend({}, a), f);(e || m._data(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = m.timers,
            g = m._data(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && cc.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }(b || !c) && m.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = m._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = m.timers,
            g = d ? d.length : 0;for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), m.each(["toggle", "show", "hide"], function (a, b) {
    var c = m.fn[b];m.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e);
    };
  }), m.each({ slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    m.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), m.timers = [], m.fx.tick = function () {
    var a,
        b = m.timers,
        c = 0;for ($b = m.now(); c < b.length; c++) {
      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    }b.length || m.fx.stop(), $b = void 0;
  }, m.fx.timer = function (a) {
    m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
  }, m.fx.interval = 13, m.fx.start = function () {
    _b || (_b = setInterval(m.fx.tick, m.fx.interval));
  }, m.fx.stop = function () {
    clearInterval(_b), _b = null;
  }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) {
    return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a, b, c, d, e;b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value;
  }();var lc = /\r/g;m.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c);
      }
    } }), m.extend({ valHooks: { option: { get: function get(a) {
          var b = m.find.attr(a, "value");return null != b ? b : m.trim(m.text(a));
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
              if (b = m(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = m.makeArray(b),
              g = e.length;while (g--) {
            if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
              d.selected = c = !0;
            } catch (h) {
              d.scrollHeight;
            } else d.selected = !1;
          }return c || (a.selectedIndex = -1), e;
        } } } }), m.each(["radio", "checkbox"], function () {
    m.valHooks[this] = { set: function set(a, b) {
        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
      } }, k.checkOn || (m.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var mc,
      nc,
      oc = m.expr.attrHandle,
      pc = /^(?:checked|selected)$/i,
      qc = k.getSetAttribute,
      rc = k.input;m.fn.extend({ attr: function attr(a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    } }), m.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b));
    }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d);
      }
    }, attrHooks: { type: { set: function set(a, b) {
          if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } } }), nc = { set: function set(a, b, c) {
      return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c;
    } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = oc[b] || m.find.attr;oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
      var e, f;return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e;
    } : function (a, b, c) {
      return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), rc && qc || (m.attrHooks.value = { set: function set(a, b, c) {
      return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c);
    } }), qc || (mc = { set: function set(a, b, c) {
      var d = a.getAttributeNode(c);return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
    } }, oc.id = oc.name = oc.coords = function (a, b, c) {
    var d;return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, m.valHooks.button = { get: function get(a, b) {
      var c = a.getAttributeNode(b);return c && c.specified ? c.value : void 0;
    }, set: mc.set }, m.attrHooks.contenteditable = { set: function set(a, b, c) {
      mc.set(a, "" === b ? !1 : b, c);
    } }, m.each(["width", "height"], function (a, b) {
    m.attrHooks[b] = { set: function set(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
      } };
  })), k.style || (m.attrHooks.style = { get: function get(a) {
      return a.style.cssText || void 0;
    }, set: function set(a, b) {
      return a.style.cssText = b + "";
    } });var sc = /^(?:input|select|textarea|button|object)$/i,
      tc = /^(?:a|area)$/i;m.fn.extend({ prop: function prop(a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return a = m.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = m.find.attr(a, "tabindex");return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1;
        } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
    m.propHooks[b] = { get: function get(a) {
        return a.getAttribute(b, 4);
      } };
  }), k.optSelected || (m.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    m.propFix[this.toLowerCase()] = this;
  }), k.enctype || (m.propFix.enctype = "encoding");var uc = /[\t\r\n\f]/g;m.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = this.length,
          j = "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
        m(this).addClass(a.call(this, b, this.className));
      });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
          f = 0;while (e = b[f++]) {
            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
          }g = m.trim(d), c.className !== g && (c.className = g);
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = this.length,
          j = 0 === arguments.length || "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
        m(this).removeClass(a.call(this, b, this.className));
      });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
          f = 0;while (e = b[f++]) {
            while (d.indexOf(" " + e + " ") >= 0) {
              d = d.replace(" " + e + " ", " ");
            }
          }g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
        m(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          var b,
              d = 0,
              e = m(this),
              f = a.match(E) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
      });
    }, hasClass: function hasClass(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
      }return !1;
    } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    m.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), m.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }, bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } });var vc = m.now(),
      wc = /\?/,
      xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");var c,
        d = null,
        e = m.trim(b + "");return e && !m.trim(e.replace(xc, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
  }, m.parseXML = function (b) {
    var c, d;if (!b || "string" != typeof b) return null;try {
      a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c;
  };var yc,
      zc,
      Ac = /#.*$/,
      Bc = /([?&])_=[^&]*/,
      Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ec = /^(?:GET|HEAD)$/,
      Fc = /^\/\//,
      Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Hc = {},
      Ic = {},
      Jc = "*/".concat("*");try {
    zc = location.href;
  } catch (Kc) {
    zc = y.createElement("a"), zc.href = "", zc = zc.href;
  }yc = Gc.exec(zc.toLowerCase()) || [];function Lc(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(E) || [];if (m.isFunction(c)) while (d = f[e++]) {
        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Mc(a, b, c, d) {
    var e = {},
        f = a === Ic;function g(h) {
      var i;return e[h] = !0, m.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Nc(a, b) {
    var c,
        d,
        e = m.ajaxSettings.flatOptions || {};for (d in b) {
      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    }return c && m.extend(!0, a, c), a;
  }function Oc(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (e) for (g in h) {
      if (h[g] && h[g].test(e)) {
        i.unshift(g);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;break;
        }d || (d = g);
      }f = f || d;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function Pc(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a);
    }, ajaxPrefilter: Lc(Hc), ajaxTransport: Lc(Ic), ajax: function ajax(a, b) {
      "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = m.ajaxSetup({}, b),
          l = k.context || k,
          n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
          o = m.Deferred(),
          p = m.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === t) {
            if (!j) {
              j = {};while (b = Cc.exec(f)) {
                j[b[1].toLowerCase()] = b[2];
              }
            }b = j[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === t ? f : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return t || (k.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > t) for (b in a) {
            q[b] = [q[b], a[b]];
          } else v.always(a[v.status]);return this;
        }, abort: function abort(a) {
          var b = a || u;return i && i.abort(b), x(0, b), this;
        } };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);for (d in k.headers) {
        v.setRequestHeader(d, k.headers[d]);
      }if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (d in { success: 1, error: 1, complete: 1 }) {
        v[d](k[d]);
      }if (i = Mc(Ic, k, b, v)) {
        v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout");
        }, k.timeout));try {
          t = 1, i.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;x(-1, w);
        }
      } else x(-1, "No Transport");function x(a, b, c, d) {
        var j,
            r,
            s,
            u,
            w,
            x = b;2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")));
      }return v;
    }, getJSON: function getJSON(a, b, c) {
      return m.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return m.get(a, void 0, b, "script");
    } }), m.each(["get", "post"], function (a, b) {
    m[b] = function (a, c, d, e) {
      return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d });
    };
  }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    m.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), m._evalUrl = function (a) {
    return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, m.fn.extend({ wrapAll: function wrapAll(a) {
      if (m.isFunction(a)) return this.each(function (b) {
        m(this).wrapAll(a.call(this, b));
      });if (this[0]) {
        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;while (a.firstChild && 1 === a.firstChild.nodeType) {
            a = a.firstChild;
          }return a;
        }).append(this);
      }return this;
    }, wrapInner: function wrapInner(a) {
      return this.each(m.isFunction(a) ? function (b) {
        m(this).wrapInner(a.call(this, b));
      } : function () {
        var b = m(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = m.isFunction(a);return this.each(function (c) {
        m(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
      }).end();
    } }), m.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
  }, m.expr.filters.visible = function (a) {
    return !m.expr.filters.hidden(a);
  };var Qc = /%20/g,
      Rc = /\[\]$/,
      Sc = /\r?\n/g,
      Tc = /^(?:submit|button|image|reset|file)$/i,
      Uc = /^(?:input|select|textarea|keygen)/i;function Vc(a, b, c, d) {
    var e;if (m.isArray(b)) m.each(b, function (b, e) {
      c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
    });else if (c || "object" !== m.type(b)) d(a, b);else for (e in b) {
      Vc(a + "[" + e + "]", b[e], c, d);
    }
  }m.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Vc(c, a[c], b, e);
    }return d.join("&").replace(Qc, "+");
  }, m.fn.extend({ serialize: function serialize() {
      return m.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = m.prop(this, "elements");return a ? m.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a));
      }).map(function (a, b) {
        var c = m(this).val();return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
          return { name: b.name, value: a.replace(Sc, "\r\n") };
        }) : { name: b.name, value: c.replace(Sc, "\r\n") };
      }).get();
    } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c();
  } : Zc;var Wc = 0,
      Xc = {},
      Yc = m.ajaxSettings.xhr();a.ActiveXObject && m(a).on("unload", function () {
    for (var a in Xc) {
      Xc[a](void 0, !0);
    }
  }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
    if (!a.crossDomain || k.cors) {
      var _b3;return { send: function send(c, d) {
          var e,
              f = a.xhr(),
              g = ++Wc;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
            f[e] = a.xhrFields[e];
          }a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
            void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
          }f.send(a.hasContent && a.data || null), _b3 = function b(c, e) {
            var h, i, j;if (_b3 && (e || 4 === f.readyState)) if (delete Xc[g], _b3 = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();else {
              j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);try {
                i = f.statusText;
              } catch (k) {
                i = "";
              }h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
            }j && d(h, i, j, f.getAllResponseHeaders());
          }, a.async ? 4 === f.readyState ? setTimeout(_b3) : f.onreadystatechange = Xc[g] = _b3 : _b3();
        }, abort: function abort() {
          _b3 && _b3(void 0, !0);
        } };
    }
  });function Zc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }function $c() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
        return m.globalEval(a), a;
      } } }), m.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), m.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
          c = y.head || m("head")[0] || y.documentElement;return { send: function send(d, e) {
          b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        }, abort: function abort() {
          b && b.onload(void 0, !0);
        } };
    }
  });var _c = [],
      ad = /(=)\?(?=&|$)|\?\?/;m.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = _c.pop() || m.expando + "_" + vc++;return this[a] = !0, a;
    } }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || m.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), m.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || y;var d = u.exec(a),
        e = !c && [];return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes));
  };var bd = m.fn.load;m.fn.load = function (a, b, c) {
    if ("string" != typeof a && bd) return bd.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) {
      e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, e || [a.responseText, b, a]);
    }), this;
  }, m.expr.filters.animated = function (a) {
    return m.grep(m.timers, function (b) {
      return a === b.elem;
    }).length;
  };var cd = a.document.documentElement;function dd(a) {
    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }m.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = m.css(a, "position"),
          l = m(a),
          n = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
    } }, m.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        m.offset.setOffset(this, a, b);
      });var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;if (f) return b = f.documentElement, m.contains(b, e) ? (_typeof(e.getBoundingClientRect) !== K && (d = e.getBoundingClientRect()), c = dd(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent || cd;while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
          a = a.offsetParent;
        }return a || cd;
      });
    } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = /Y/.test(b);m.fn[a] = function (d) {
      return V(this, function (a, d, e) {
        var f = dd(a);return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), m.each(["top", "left"], function (a, b) {
    m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
      return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0;
    });
  }), m.each({ Height: "height", Width: "width" }, function (a, b) {
    m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      m.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return V(this, function (b, c, d) {
          var e;return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), m.fn.size = function () {
    return this.length;
  }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return m;
  });var ed = a.jQuery,
      fd = a.$;return m.noConflict = function (b) {
    return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m;
  }, (typeof b === "undefined" ? "undefined" : _typeof(b)) === K && (a.jQuery = a.$ = m), m;
});; /*
     AngularJS v1.6.6
     (c) 2010-2017 Google, Inc. http://angularjs.org
     License: MIT
     */
(function (u) {
  'use strict';
  function oe(a) {
    if (E(a)) t(a.objectMaxDepth) && (Lc.objectMaxDepth = Ub(a.objectMaxDepth) ? a.objectMaxDepth : NaN);else return Lc;
  }function Ub(a) {
    return Y(a) && 0 < a;
  }function M(a, b) {
    b = b || Error;return function () {
      var d = arguments[0],
          c;c = "[" + (a ? a + ":" : "") + d + "] http://errors.angularjs.org/1.6.6/" + (a ? a + "/" : "") + d;for (d = 1; d < arguments.length; d++) {
        c = c + (1 == d ? "?" : "&") + "p" + (d - 1) + "=";var e = encodeURIComponent,
            f;f = arguments[d];f = "function" == typeof f ? f.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof f ? "undefined" : "string" != typeof f ? JSON.stringify(f) : f;c += e(f);
      }return new b(c);
    };
  }function xa(a) {
    if (null == a || $a(a)) return !1;if (I(a) || D(a) || B && a instanceof B) return !0;var b = "length" in Object(a) && a.length;return Y(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" === typeof a.item);
  }function p(a, b, d) {
    var c, e;if (a) if (A(a)) for (c in a) {
      "prototype" !== c && "length" !== c && "name" !== c && a.hasOwnProperty(c) && b.call(d, a[c], c, a);
    } else if (I(a) || xa(a)) {
      var f = "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a));c = 0;for (e = a.length; c < e; c++) {
        (f || c in a) && b.call(d, a[c], c, a);
      }
    } else if (a.forEach && a.forEach !== p) a.forEach(b, d, a);else if (Mc(a)) for (c in a) {
      b.call(d, a[c], c, a);
    } else if ("function" === typeof a.hasOwnProperty) for (c in a) {
      a.hasOwnProperty(c) && b.call(d, a[c], c, a);
    } else for (c in a) {
      ra.call(a, c) && b.call(d, a[c], c, a);
    }return a;
  }function Nc(a, b, d) {
    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) {
      b.call(d, a[c[e]], c[e]);
    }return c;
  }function Vb(a) {
    return function (b, d) {
      a(d, b);
    };
  }function pe() {
    return ++sb;
  }function Wb(a, b, d) {
    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
      var g = b[e];if (E(g) || A(g)) for (var k = Object.keys(g), h = 0, l = k.length; h < l; h++) {
        var m = k[h],
            n = g[m];d && E(n) ? ea(n) ? a[m] = new Date(n.valueOf()) : ab(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Xb(n) ? a[m] = n.clone() : (E(a[m]) || (a[m] = I(n) ? [] : {}), Wb(a[m], [n], !0)) : a[m] = n;
      }
    }c ? a.$$hashKey = c : delete a.$$hashKey;return a;
  }function P(a) {
    return Wb(a, ya.call(arguments, 1), !1);
  }function qe(a) {
    return Wb(a, ya.call(arguments, 1), !0);
  }function Z(a) {
    return parseInt(a, 10);
  }function Yb(a, b) {
    return P(Object.create(a), b);
  }function C() {}
  function bb(a) {
    return a;
  }function ka(a) {
    return function () {
      return a;
    };
  }function Zb(a) {
    return A(a.toString) && a.toString !== ha;
  }function w(a) {
    return "undefined" === typeof a;
  }function t(a) {
    return "undefined" !== typeof a;
  }function E(a) {
    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a));
  }function Mc(a) {
    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && !Oc(a);
  }function D(a) {
    return "string" === typeof a;
  }function Y(a) {
    return "number" === typeof a;
  }function ea(a) {
    return "[object Date]" === ha.call(a);
  }function $b(a) {
    switch (ha.call(a)) {case "[object Error]":
        return !0;
      case "[object Exception]":
        return !0;case "[object DOMException]":
        return !0;default:
        return a instanceof Error;}
  }function A(a) {
    return "function" === typeof a;
  }function ab(a) {
    return "[object RegExp]" === ha.call(a);
  }function $a(a) {
    return a && a.window === a;
  }function cb(a) {
    return a && a.$evalAsync && a.$watch;
  }function Na(a) {
    return "boolean" === typeof a;
  }function re(a) {
    return a && Y(a.length) && se.test(ha.call(a));
  }function Xb(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
  }function te(a) {
    var b = {};a = a.split(",");var d;for (d = 0; d < a.length; d++) {
      b[a[d]] = !0;
    }return b;
  }function za(a) {
    return N(a.nodeName || a[0] && a[0].nodeName);
  }function db(a, b) {
    var d = a.indexOf(b);0 <= d && a.splice(d, 1);return d;
  }function pa(a, b, d) {
    function c(a, b, c) {
      c--;if (0 > c) return "...";var d = b.$$hashKey,
          g;if (I(a)) {
        g = 0;for (var f = a.length; g < f; g++) {
          b.push(e(a[g], c));
        }
      } else if (Mc(a)) for (g in a) {
        b[g] = e(a[g], c);
      } else if (a && "function" === typeof a.hasOwnProperty) for (g in a) {
        a.hasOwnProperty(g) && (b[g] = e(a[g], c));
      } else for (g in a) {
        ra.call(a, g) && (b[g] = e(a[g], c));
      }d ? b.$$hashKey = d : delete b.$$hashKey;
      return b;
    }function e(a, b) {
      if (!E(a)) return a;var d = g.indexOf(a);if (-1 !== d) return k[d];if ($a(a) || cb(a)) throw qa("cpws");var d = !1,
          e = f(a);void 0 === e && (e = I(a) ? [] : Object.create(Oc(a)), d = !0);g.push(a);k.push(e);return d ? c(a, e, b) : e;
    }function f(a) {
      switch (ha.call(a)) {case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
          return new a.constructor(e(a.buffer), a.byteOffset, a.length);case "[object ArrayBuffer]":
          if (!a.slice) {
            var b = new ArrayBuffer(a.byteLength);new Uint8Array(b).set(new Uint8Array(a));return b;
          }return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":
          return new a.constructor(a.valueOf());case "[object RegExp]":
          return b = new RegExp(a.source, a.toString().match(/[^/]*$/)[0]), b.lastIndex = a.lastIndex, b;case "[object Blob]":
          return new a.constructor([a], { type: a.type });}if (A(a.cloneNode)) return a.cloneNode(!0);
    }
    var g = [],
        k = [];d = Ub(d) ? d : NaN;if (b) {
      if (re(b) || "[object ArrayBuffer]" === ha.call(b)) throw qa("cpta");if (a === b) throw qa("cpi");I(b) ? b.length = 0 : p(b, function (a, c) {
        "$$hashKey" !== c && delete b[c];
      });g.push(a);k.push(b);return c(a, b, d);
    }return e(a, d);
  }function ac(a, b) {
    return a === b || a !== a && b !== b;
  }function sa(a, b) {
    if (a === b) return !0;if (null === a || null === b) return !1;if (a !== a && b !== b) return !0;var d = typeof a === "undefined" ? "undefined" : _typeof(a),
        c;if (d === (typeof b === "undefined" ? "undefined" : _typeof(b)) && "object" === d) if (I(a)) {
      if (!I(b)) return !1;if ((d = a.length) === b.length) {
        for (c = 0; c < d; c++) {
          if (!sa(a[c], b[c])) return !1;
        }return !0;
      }
    } else {
      if (ea(a)) return ea(b) ? ac(a.getTime(), b.getTime()) : !1;if (ab(a)) return ab(b) ? a.toString() === b.toString() : !1;if (cb(a) || cb(b) || $a(a) || $a(b) || I(b) || ea(b) || ab(b)) return !1;d = S();for (c in a) {
        if ("$" !== c.charAt(0) && !A(a[c])) {
          if (!sa(a[c], b[c])) return !1;d[c] = !0;
        }
      }for (c in b) {
        if (!(c in d) && "$" !== c.charAt(0) && t(b[c]) && !A(b[c])) return !1;
      }return !0;
    }return !1;
  }function eb(a, b, d) {
    return a.concat(ya.call(b, d));
  }function Ra(a, b) {
    var d = 2 < arguments.length ? ya.call(arguments, 2) : [];return !A(b) || b instanceof RegExp ? b : d.length ? function () {
      return arguments.length ? b.apply(a, eb(d, arguments, 0)) : b.apply(a, d);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }function Pc(a, b) {
    var d = b;"string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : $a(b) ? d = "$WINDOW" : b && u.document === b ? d = "$DOCUMENT" : cb(b) && (d = "$SCOPE");return d;
  }function fb(a, b) {
    if (!w(a)) return Y(b) || (b = b ? 2 : null), JSON.stringify(a, Pc, b);
  }function Qc(a) {
    return D(a) ? JSON.parse(a) : a;
  }function Rc(a, b) {
    a = a.replace(ue, "");var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;return T(d) ? b : d;
  }function bc(a, b, d) {
    d = d ? -1 : 1;var c = a.getTimezoneOffset();b = Rc(b, c);d *= b - c;a = new Date(a.getTime());a.setMinutes(a.getMinutes() + d);return a;
  }function Aa(a) {
    a = B(a).clone().empty();var b = B("<div>").append(a).html();try {
      return a[0].nodeType === Oa ? N(b) : b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (a, b) {
        return "<" + N(b);
      });
    } catch (d) {
      return N(b);
    }
  }function Sc(a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {}
  }function Tc(a) {
    var b = {};p((a || "").split("&"), function (a) {
      var c, e, f;a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = Sc(e), t(e) && (f = t(f) ? Sc(f) : !0, ra.call(b, e) ? I(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f));
    });return b;
  }function cc(a) {
    var b = [];p(a, function (a, c) {
      I(a) ? p(a, function (a) {
        b.push(ia(c, !0) + (!0 === a ? "" : "=" + ia(a, !0)));
      }) : b.push(ia(c, !0) + (!0 === a ? "" : "=" + ia(a, !0)));
    });return b.length ? b.join("&") : "";
  }function gb(a) {
    return ia(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
  }function ia(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
  }function ve(a, b) {
    var d,
        c,
        e = Ha.length;for (c = 0; c < e; ++c) {
      if (d = Ha[c] + b, D(d = a.getAttribute(d))) return d;
    }return null;
  }function we(a, b) {
    var d,
        c,
        e = {};p(Ha, function (b) {
      b += "app";!d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
    });p(Ha, function (b) {
      b += "app";var e;!d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
    });d && (xe ? (e.strictDi = null !== ve(d, "strict-di"), b(d, c ? [c] : [], e)) : u.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."));
  }function Uc(a, b, d) {
    E(d) || (d = {});d = P({ strictDi: !1 }, d);var c = function c() {
      a = B(a);if (a.injector()) {
        var c = a[0] === u.document ? "document" : Aa(a);throw qa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }b = b || [];b.unshift(["$provide", function (b) {
        b.value("$rootElement", a);
      }]);d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(!0);
      }]);
      b.unshift("ng");c = hb(b, d.strictDi);c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
        a.$apply(function () {
          b.data("$injector", d);c(b)(a);
        });
      }]);return c;
    },
        e = /^NG_ENABLE_DEBUG_INFO!/,
        f = /^NG_DEFER_BOOTSTRAP!/;u && e.test(u.name) && (d.debugInfoEnabled = !0, u.name = u.name.replace(e, ""));if (u && !f.test(u.name)) return c();u.name = u.name.replace(f, "");$.resumeBootstrap = function (a) {
      p(a, function (a) {
        b.push(a);
      });return c();
    };A($.resumeDeferredBootstrap) && $.resumeDeferredBootstrap();
  }function ye() {
    u.name = "NG_ENABLE_DEBUG_INFO!" + u.name;u.location.reload();
  }function ze(a) {
    a = $.element(a).injector();if (!a) throw qa("test");return a.get("$$testability");
  }function Vc(a, b) {
    b = b || "_";return a.replace(Ae, function (a, c) {
      return (c ? b : "") + a.toLowerCase();
    });
  }function Be() {
    var a;if (!Wc) {
      var b = tb();(la = w(b) ? u.jQuery : b ? u[b] : void 0) && la.fn.on ? (B = la, P(la.fn, { scope: Sa.scope, isolateScope: Sa.isolateScope, controller: Sa.controller, injector: Sa.injector, inheritedData: Sa.inheritedData }), a = la.cleanData, la.cleanData = function (b) {
        for (var c, e = 0, f; null != (f = b[e]); e++) {
          (c = la._data(f, "events")) && c.$destroy && la(f).triggerHandler("$destroy");
        }a(b);
      }) : B = U;$.element = B;Wc = !0;
    }
  }function ib(a, b, d) {
    if (!a) throw qa("areq", b || "?", d || "required");return a;
  }function ub(a, b, d) {
    d && I(a) && (a = a[a.length - 1]);ib(A(a), b, "not a function, got " + (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) ? a.constructor.name || "Object" : typeof a === "undefined" ? "undefined" : _typeof(a)));return a;
  }function Ia(a, b) {
    if ("hasOwnProperty" === a) throw qa("badname", b);
  }function Xc(a, b, d) {
    if (!b) return a;b = b.split(".");for (var c, e = a, f = b.length, g = 0; g < f; g++) {
      c = b[g], a && (a = (e = a)[c]);
    }return !d && A(a) ? Ra(e, a) : a;
  }function vb(a) {
    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) {
      if (c || a[e] !== b) c || (c = B(ya.call(a, 0, e))), c.push(b);
    }return c || a;
  }function S() {
    return Object.create(null);
  }function dc(a) {
    if (null == a) return "";switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "string":
        break;case "number":
        a = "" + a;break;default:
        a = !Zb(a) || I(a) || ea(a) ? fb(a) : a.toString();}return a;
  }function Ce(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c());
    }var d = M("$injector"),
        c = M("ng");a = b(a, "angular", Object);a.$$minErr = a.$$minErr || M;return b(a, "module", function () {
      var a = {};return function (f, g, k) {
        var h = {};if ("hasOwnProperty" === f) throw c("badname", "module");g && a.hasOwnProperty(f) && (a[f] = null);return b(a, f, function () {
          function a(b, c, d, g) {
            g || (g = e);return function () {
              g[d || "push"]([b, c, arguments]);return p;
            };
          }function b(a, c, d) {
            d || (d = e);return function (b, e) {
              e && A(e) && (e.$$moduleName = f);d.push([a, c, arguments]);return p;
            };
          }if (!g) throw d("nomod", f);var e = [],
              q = [],
              G = [],
              L = a("$injector", "invoke", "push", q),
              p = { _invokeQueue: e, _configBlocks: q,
            _runBlocks: G, info: function info(a) {
              if (t(a)) {
                if (!E(a)) throw c("aobj", "value");h = a;return this;
              }return h;
            }, requires: g, name: f, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide", "decorator", q), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), component: b("$compileProvider", "component"), config: L, run: function run(a) {
              G.push(a);return this;
            } };k && L(k);return p;
        });
      };
    });
  }function ja(a, b) {
    if (I(a)) {
      b = b || [];for (var d = 0, c = a.length; d < c; d++) {
        b[d] = a[d];
      }
    } else if (E(a)) for (d in b = b || {}, a) {
      if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
    }return b || a;
  }function De(a, b) {
    var d = [];Ub(b) && (a = $.copy(a, null, b));return JSON.stringify(a, function (a, b) {
      b = Pc(a, b);if (E(b)) {
        if (0 <= d.indexOf(b)) return "...";d.push(b);
      }return b;
    });
  }function Ee(a) {
    P(a, { errorHandlingConfig: oe, bootstrap: Uc, copy: pa, extend: P, merge: qe, equals: sa,
      element: B, forEach: p, injector: hb, noop: C, bind: Ra, toJson: fb, fromJson: Qc, identity: bb, isUndefined: w, isDefined: t, isString: D, isFunction: A, isObject: E, isNumber: Y, isElement: Xb, isArray: I, version: Fe, isDate: ea, lowercase: N, uppercase: wb, callbacks: { $$counter: 0 }, getTestability: ze, reloadWithDebugInfo: ye, $$minErr: M, $$csp: Ja, $$encodeUriSegment: gb, $$encodeUriQuery: ia, $$stringify: dc });ec = Ce(u);ec("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({ $$sanitizeUri: Ge });a.provider("$compile", Yc).directive({ a: He, input: Zc,
        textarea: Zc, form: Ie, script: Je, select: Ke, option: Le, ngBind: Me, ngBindHtml: Ne, ngBindTemplate: Oe, ngClass: Pe, ngClassEven: Qe, ngClassOdd: Re, ngCloak: Se, ngController: Te, ngForm: Ue, ngHide: Ve, ngIf: We, ngInclude: Xe, ngInit: Ye, ngNonBindable: Ze, ngPluralize: $e, ngRepeat: af, ngShow: bf, ngStyle: cf, ngSwitch: df, ngSwitchWhen: ef, ngSwitchDefault: ff, ngOptions: gf, ngTransclude: hf, ngModel: jf, ngList: kf, ngChange: lf, pattern: $c, ngPattern: $c, required: ad, ngRequired: ad, minlength: bd, ngMinlength: bd, maxlength: cd, ngMaxlength: cd, ngValue: mf,
        ngModelOptions: nf }).directive({ ngInclude: of }).directive(xb).directive(dd);a.provider({ $anchorScroll: pf, $animate: qf, $animateCss: rf, $$animateJs: sf, $$animateQueue: tf, $$AnimateRunner: uf, $$animateAsyncRun: vf, $browser: wf, $cacheFactory: xf, $controller: yf, $document: zf, $$isDocumentHidden: Af, $exceptionHandler: Bf, $filter: ed, $$forceReflow: Cf, $interpolate: Df, $interval: Ef, $http: Ff, $httpParamSerializer: Gf, $httpParamSerializerJQLike: Hf, $httpBackend: If, $xhrFactory: Jf, $jsonpCallbacks: Kf, $location: Lf, $log: Mf, $parse: Nf,
        $rootScope: Of, $q: Pf, $$q: Qf, $sce: Rf, $sceDelegate: Sf, $sniffer: Tf, $templateCache: Uf, $templateRequest: Vf, $$testability: Wf, $timeout: Xf, $window: Yf, $$rAF: Zf, $$jqLite: $f, $$Map: ag, $$cookieReader: bg });
    }]).info({ angularVersion: "1.6.6" });
  }function jb(a, b) {
    return b.toUpperCase();
  }function yb(a) {
    return a.replace(cg, jb);
  }function fc(a) {
    a = a.nodeType;return 1 === a || !a || 9 === a;
  }function fd(a, b) {
    var d,
        c,
        e = b.createDocumentFragment(),
        f = [];if (gc.test(a)) {
      d = e.appendChild(b.createElement("div"));c = (dg.exec(a) || ["", ""])[1].toLowerCase();
      c = aa[c] || aa._default;d.innerHTML = c[1] + a.replace(eg, "<$1></$2>") + c[2];for (c = c[0]; c--;) {
        d = d.lastChild;
      }f = eb(f, d.childNodes);d = e.firstChild;d.textContent = "";
    } else f.push(b.createTextNode(a));e.textContent = "";e.innerHTML = "";p(f, function (a) {
      e.appendChild(a);
    });return e;
  }function U(a) {
    if (a instanceof U) return a;var b;D(a) && (a = Q(a), b = !0);if (!(this instanceof U)) {
      if (b && "<" !== a.charAt(0)) throw hc("nosel");return new U(a);
    }if (b) {
      b = u.document;var d;a = (d = fg.exec(a)) ? [b.createElement(d[1])] : (d = fd(a, b)) ? d.childNodes : [];ic(this, a);
    } else A(a) ? gd(a) : ic(this, a);
  }function jc(a) {
    return a.cloneNode(!0);
  }function zb(a, b) {
    !b && fc(a) && B.cleanData([a]);a.querySelectorAll && B.cleanData(a.querySelectorAll("*"));
  }function hd(a, b, d, c) {
    if (t(c)) throw hc("offargs");var e = (c = Ab(a)) && c.events,
        f = c && c.handle;if (f) if (b) {
      var g = function g(b) {
        var c = e[b];t(d) && db(c || [], d);t(d) && c && 0 < c.length || (a.removeEventListener(b, f), delete e[b]);
      };p(b.split(" "), function (a) {
        g(a);Bb[a] && g(Bb[a]);
      });
    } else for (b in e) {
      "$destroy" !== b && a.removeEventListener(b, f), delete e[b];
    }
  }
  function kc(a, b) {
    var d = a.ng339,
        c = d && kb[d];c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), hd(a)), delete kb[d], a.ng339 = void 0));
  }function Ab(a, b) {
    var d = a.ng339,
        d = d && kb[d];b && !d && (a.ng339 = d = ++gg, d = kb[d] = { events: {}, data: {}, handle: void 0 });return d;
  }function lc(a, b, d) {
    if (fc(a)) {
      var c,
          e = t(d),
          f = !e && b && !E(b),
          g = !b;a = (a = Ab(a, !f)) && a.data;if (e) a[yb(b)] = d;else {
        if (g) return a;if (f) return a && a[yb(b)];for (c in b) {
          a[yb(c)] = b[c];
        }
      }
    }
  }function Cb(a, b) {
    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
  }function Db(a, b) {
    b && a.setAttribute && p(b.split(" "), function (b) {
      a.setAttribute("class", Q((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Q(b) + " ", " ")));
    });
  }function Eb(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");p(b.split(" "), function (a) {
        a = Q(a);-1 === d.indexOf(" " + a + " ") && (d += a + " ");
      });a.setAttribute("class", Q(d));
    }
  }function ic(a, b) {
    if (b) if (b.nodeType) a[a.length++] = b;else {
      var d = b.length;if ("number" === typeof d && b.window !== b) {
        if (d) for (var c = 0; c < d; c++) {
          a[a.length++] = b[c];
        }
      } else a[a.length++] = b;
    }
  }function id(a, b) {
    return Fb(a, "$" + (b || "ngController") + "Controller");
  }function Fb(a, b, d) {
    9 === a.nodeType && (a = a.documentElement);for (b = I(b) ? b : [b]; a;) {
      for (var c = 0, e = b.length; c < e; c++) {
        if (t(d = B.data(a, b[c]))) return d;
      }a = a.parentNode || 11 === a.nodeType && a.host;
    }
  }function jd(a) {
    for (zb(a, !0); a.firstChild;) {
      a.removeChild(a.firstChild);
    }
  }function Gb(a, b) {
    b || zb(a);var d = a.parentNode;d && d.removeChild(a);
  }function hg(a, b) {
    b = b || u;if ("complete" === b.document.readyState) b.setTimeout(a);else B(b).on("load", a);
  }function gd(a) {
    function b() {
      u.document.removeEventListener("DOMContentLoaded", b);u.removeEventListener("load", b);a();
    }"complete" === u.document.readyState ? u.setTimeout(a) : (u.document.addEventListener("DOMContentLoaded", b), u.addEventListener("load", b));
  }function kd(a, b) {
    var d = Hb[b.toLowerCase()];return d && ld[za(a)] && d;
  }function ig(a, b) {
    var d = function d(c, _d) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };var f = b[_d || c.type],
          g = f ? f.length : 0;if (g) {
        if (w(c.immediatePropagationStopped)) {
          var k = c.stopImmediatePropagation;c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = !0;c.stopPropagation && c.stopPropagation();k && k.call(c);
          };
        }c.isImmediatePropagationStopped = function () {
          return !0 === c.immediatePropagationStopped;
        };var h = f.specialHandlerWrapper || jg;1 < g && (f = ja(f));for (var l = 0; l < g; l++) {
          c.isImmediatePropagationStopped() || h(a, c, f[l]);
        }
      }
    };d.elem = a;return d;
  }function jg(a, b, d) {
    d.call(a, b);
  }function kg(a, b, d) {
    var c = b.relatedTarget;c && (c === a || lg.call(a, c)) || d.call(a, b);
  }function $f() {
    this.$get = function () {
      return P(U, { hasClass: function hasClass(a, b) {
          a.attr && (a = a[0]);return Cb(a, b);
        }, addClass: function addClass(a, b) {
          a.attr && (a = a[0]);return Eb(a, b);
        }, removeClass: function removeClass(a, b) {
          a.attr && (a = a[0]);return Db(a, b);
        } });
    };
  }function Pa(a, b) {
    var d = a && a.$$hashKey;if (d) return "function" === typeof d && (d = a.$$hashKey()), d;d = typeof a === "undefined" ? "undefined" : _typeof(a);return d = "function" === d || "object" === d && null !== a ? a.$$hashKey = d + ":" + (b || pe)() : d + ":" + a;
  }function md() {
    this._keys = [];this._values = [];this._lastKey = NaN;this._lastIndex = -1;
  }function nd(a) {
    a = Function.prototype.toString.call(a).replace(mg, "");return a.match(ng) || a.match(og);
  }function pg(a) {
    return (a = nd(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }function hb(a, b) {
    function d(a) {
      return function (b, c) {
        if (E(b)) p(b, Vb(a));else return a(b, c);
      };
    }function c(a, b) {
      Ia(a, "service");if (A(b) || I(b)) b = q.instantiate(b);if (!b.$get) throw Ba("pget", a);return n[a + "Provider"] = b;
    }function e(a, b) {
      return function () {
        var c = z.invoke(b, this);if (w(c)) throw Ba("undef", a);return c;
      };
    }function f(a, b, d) {
      return c(a, { $get: !1 !== d ? e(a, b) : b });
    }function g(a) {
      ib(w(a) || I(a), "modulesToLoad", "not an array");var b = [],
          c;p(a, function (a) {
        function d(a) {
          var b, c;b = 0;for (c = a.length; b < c; b++) {
            var e = a[b],
                g = q.get(e[0]);g[e[1]].apply(g, e[2]);
          }
        }if (!m.get(a)) {
          m.set(a, !0);try {
            D(a) ? (c = ec(a), z.modules[a] = c, b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : A(a) ? b.push(q.invoke(a)) : I(a) ? b.push(q.invoke(a)) : ub(a, "module");
          } catch (e) {
            throw I(a) && (a = a[a.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ba("modulerr", a, e.stack || e.message || e);
          }
        }
      });return b;
    }function k(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === h) throw Ba("cdep", b + " <- " + l.join(" <- "));return a[b];
        }try {
          return l.unshift(b), a[b] = h, a[b] = c(b, e), a[b];
        } catch (g) {
          throw a[b] === h && delete a[b], g;
        } finally {
          l.shift();
        }
      }function e(a, c, g) {
        var f = [];a = hb.$$annotate(a, b, g);for (var h = 0, k = a.length; h < k; h++) {
          var l = a[h];if ("string" !== typeof l) throw Ba("itkn", l);f.push(c && c.hasOwnProperty(l) ? c[l] : d(l, g));
        }return f;
      }return { invoke: function invoke(a, b, c, d) {
          "string" === typeof c && (d = c, c = null);c = e(a, c, d);I(a) && (a = a[a.length - 1]);d = a;if (Ca || "function" !== typeof d) d = !1;else {
            var g = d.$$ngIsClass;Na(g) || (g = d.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d = g;
          }return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
        }, instantiate: function instantiate(a, b, c) {
          var d = I(a) ? a[a.length - 1] : a;a = e(a, b, c);a.unshift(null);return new (Function.prototype.bind.apply(d, a))();
        }, get: d,
        annotate: hb.$$annotate, has: function has(b) {
          return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
        } };
    }b = !0 === b;var h = {},
        l = [],
        m = new Ib(),
        n = { $provide: { provider: d(c), factory: d(f), service: d(function (a, b) {
          return f(a, ["$injector", function (a) {
            return a.instantiate(b);
          }]);
        }), value: d(function (a, b) {
          return f(a, ka(b), !1);
        }), constant: d(function (a, b) {
          Ia(a, "constant");n[a] = b;G[a] = b;
        }), decorator: function decorator(a, b) {
          var c = q.get(a + "Provider"),
              d = c.$get;c.$get = function () {
            var a = z.invoke(d, c);return z.invoke(b, null, { $delegate: a });
          };
        } } },
        q = n.$injector = k(n, function (a, b) {
      $.isString(b) && l.push(b);throw Ba("unpr", l.join(" <- "));
    }),
        G = {},
        L = k(G, function (a, b) {
      var c = q.get(a + "Provider", b);return z.invoke(c.$get, c, void 0, a);
    }),
        z = L;n.$injectorProvider = { $get: ka(L) };z.modules = q.modules = S();var v = g(a),
        z = L.get("$injector");z.strictDi = b;p(v, function (a) {
      a && z.invoke(a);
    });return z;
  }function pf() {
    var a = !0;this.disableAutoScrolling = function () {
      a = !1;
    };this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
      function e(a) {
        var b = null;Array.prototype.some.call(a, function (a) {
          if ("a" === za(a)) return b = a, !0;
        });return b;
      }function f(a) {
        if (a) {
          a.scrollIntoView();var c;c = g.yOffset;A(c) ? c = c() : Xb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Y(c) || (c = 0);c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
        } else b.scrollTo(0, 0);
      }function g(a) {
        a = D(a) ? a : Y(a) ? a.toString() : d.hash();var b;a ? (b = k.getElementById(a)) ? f(b) : (b = e(k.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
      }var k = b.document;a && c.$watch(function () {
        return d.hash();
      }, function (a, b) {
        a === b && "" === a || hg(function () {
          c.$evalAsync(g);
        });
      });return g;
    }];
  }function lb(a, b) {
    if (!a && !b) return "";if (!a) return b;if (!b) return a;I(a) && (a = a.join(" "));I(b) && (b = b.join(" "));return a + " " + b;
  }function qg(a) {
    D(a) && (a = a.split(" "));var b = S();p(a, function (a) {
      a.length && (b[a] = !0);
    });return b;
  }function Ka(a) {
    return E(a) ? a : {};
  }function rg(a, b, d, c) {
    function e(a) {
      try {
        a.apply(null, ya.call(arguments, 1));
      } finally {
        if (L--, 0 === L) for (; z.length;) {
          try {
            z.pop()();
          } catch (b) {
            d.error(b);
          }
        }
      }
    }function f() {
      y = null;k();
    }function g() {
      v = J();v = w(v) ? null : v;sa(v, K) && (v = K);s = K = v;
    }function k() {
      var a = s;g();if (Ta !== h.url() || a !== v) Ta = h.url(), s = v, p(H, function (a) {
        a(h.url(), v);
      });
    }var h = this,
        l = a.location,
        m = a.history,
        n = a.setTimeout,
        q = a.clearTimeout,
        G = {};h.isMock = !1;var L = 0,
        z = [];h.$$completeOutstandingRequest = e;h.$$incOutstandingRequestCount = function () {
      L++;
    };h.notifyWhenNoOutstandingRequests = function (a) {
      0 === L ? a() : z.push(a);
    };var v,
        s,
        Ta = l.href,
        ma = b.find("base"),
        y = null,
        J = c.history ? function () {
      try {
        return m.state;
      } catch (a) {}
    } : C;g();h.url = function (b, d, e) {
      w(e) && (e = null);l !== a.location && (l = a.location);m !== a.history && (m = a.history);if (b) {
        var f = s === e;if (Ta === b && (!c.history || f)) return h;var k = Ta && La(Ta) === La(b);Ta = b;s = e;!c.history || k && f ? (k || (y = b), d ? l.replace(b) : k ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (y = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g());y && (y = b);return h;
      }return y || l.href.replace(/%27/g, "'");
    };h.state = function () {
      return v;
    };var H = [],
        ta = !1,
        K = null;h.onUrlChange = function (b) {
      if (!ta) {
        if (c.history) B(a).on("popstate", f);B(a).on("hashchange", f);ta = !0;
      }H.push(b);return b;
    };h.$$applicationDestroyed = function () {
      B(a).off("hashchange popstate", f);
    };h.$$checkUrlChange = k;h.baseHref = function () {
      var a = ma.attr("href");return a ? a.replace(/^(https?:)?\/\/[^/]*/, "") : "";
    };h.defer = function (a, b) {
      var c;L++;c = n(function () {
        delete G[c];e(a);
      }, b || 0);G[c] = !0;return c;
    };h.defer.cancel = function (a) {
      return G[a] ? (delete G[a], q(a), e(C), !0) : !1;
    };
  }function wf() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
      return new rg(a, c, b, d);
    }];
  }function xf() {
    this.$get = function () {
      function a(a, c) {
        function e(a) {
          a !== n && (q ? q === a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
        }function f(a, b) {
          a !== b && (a && (a.p = b), b && (b.n = a));
        }if (a in b) throw M("$cacheFactory")("iid", a);var g = 0,
            k = P({}, c, { id: a }),
            h = S(),
            l = c && c.capacity || Number.MAX_VALUE,
            m = S(),
            n = null,
            q = null;return b[a] = { put: function put(a, b) {
            if (!w(b)) {
              if (l < Number.MAX_VALUE) {
                var c = m[a] || (m[a] = { key: a });e(c);
              }a in h || g++;h[a] = b;g > l && this.remove(q.key);return b;
            }
          }, get: function get(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;e(b);
            }return h[a];
          }, remove: function remove(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;b === n && (n = b.p);b === q && (q = b.n);f(b.n, b.p);delete m[a];
            }a in h && (delete h[a], g--);
          }, removeAll: function removeAll() {
            h = S();g = 0;m = S();n = q = null;
          }, destroy: function destroy() {
            m = k = h = null;delete b[a];
          }, info: function info() {
            return P({}, k, { size: g });
          } };
      }var b = {};a.info = function () {
        var a = {};p(b, function (b, e) {
          a[e] = b.info();
        });return a;
      };a.get = function (a) {
        return b[a];
      };return a;
    };
  }function Uf() {
    this.$get = ["$cacheFactory", function (a) {
      return a("templates");
    }];
  }
  function Yc(a, b) {
    function d(a, b, c) {
      var d = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,
          e = S();p(a, function (a, g) {
        if (a in n) e[g] = n[a];else {
          var f = a.match(d);if (!f) throw ba("iscp", b, g, a, c ? "controller bindings definition" : "isolate scope definition");e[g] = { mode: f[1][0], collection: "*" === f[2], optional: "?" === f[3], attrName: f[4] || g };f[4] && (n[a] = e[g]);
        }
      });return e;
    }function c(a) {
      var b = a.charAt(0);if (!b || b !== N(b)) throw ba("baddir", a);if (a !== a.trim()) throw ba("baddir", a);
    }function e(a) {
      var b = a.require || a.controller && a.name;
      !I(b) && E(b) && p(b, function (a, c) {
        var d = a.match(l);a.substring(d[0].length) || (b[c] = d[0] + c);
      });return b;
    }var f = {},
        g = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
        k = /(([\w-]+)(?::([^;]+))?;?)/,
        h = te("ngSrc,ngSrcset,src,srcset"),
        l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        m = /^(on[a-z]+|formaction)$/,
        n = S();this.directive = function ma(b, d) {
      ib(b, "name");Ia(b, "directive");D(b) ? (c(b), ib(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
        var d = [];p(f[b], function (g, f) {
          try {
            var h = a.invoke(g);A(h) ? h = { compile: ka(h) } : !h.compile && h.link && (h.compile = ka(h.link));h.priority = h.priority || 0;h.index = f;h.name = h.name || b;h.require = e(h);var k = h,
                l = h.restrict;if (l && (!D(l) || !/[EACM]/.test(l))) throw ba("badrestrict", l, b);k.restrict = l || "EA";h.$$moduleName = g.$$moduleName;d.push(h);
          } catch (m) {
            c(m);
          }
        });return d;
      }])), f[b].push(d)) : p(b, Vb(ma));return this;
    };this.component = function y(a, b) {
      function c(a) {
        function e(b) {
          return A(b) || I(b) ? function (c, d) {
            return a.invoke(b, this, { $element: c, $attrs: d });
          } : b;
        }var g = b.template || b.templateUrl ? b.template : "",
            f = { controller: d, controllerAs: sg(b.controller) || b.controllerAs || "$ctrl", template: e(g), templateUrl: e(b.templateUrl), transclude: b.transclude, scope: {}, bindToController: b.bindings || {}, restrict: "E", require: b.require };p(b, function (a, b) {
          "$" === b.charAt(0) && (f[b] = a);
        });return f;
      }if (!D(a)) return p(a, Vb(Ra(this, y))), this;var d = b.controller || function () {};p(b, function (a, b) {
        "$" === b.charAt(0) && (c[b] = a, A(d) && (d[b] = a));
      });c.$inject = ["$injector"];return this.directive(a, c);
    };this.aHrefSanitizationWhitelist = function (a) {
      return t(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
    };this.imgSrcSanitizationWhitelist = function (a) {
      return t(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
    };var q = !0;this.debugInfoEnabled = function (a) {
      return t(a) ? (q = a, this) : q;
    };var G = !1;this.preAssignBindingsEnabled = function (a) {
      return t(a) ? (G = a, this) : G;
    };var L = !1;this.strictComponentBindingsEnabled = function (a) {
      return t(a) ? (L = a, this) : L;
    };var z = 10;this.onChangesTtl = function (a) {
      return arguments.length ? (z = a, this) : z;
    };var v = !0;this.commentDirectivesEnabled = function (a) {
      return arguments.length ? (v = a, this) : v;
    };var s = !0;this.cssClassDirectivesEnabled = function (a) {
      return arguments.length ? (s = a, this) : s;
    };this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, e, n, F, R, x, W, r) {
      function O() {
        try {
          if (! --Fa) throw ga = void 0, ba("infchng", z);R.$apply(function () {
            for (var a = [], b = 0, c = ga.length; b < c; ++b) {
              try {
                ga[b]();
              } catch (d) {
                a.push(d);
              }
            }ga = void 0;if (a.length) throw a;
          });
        } finally {
          Fa++;
        }
      }function mc(a, b) {
        if (b) {
          var c = Object.keys(b),
              d,
              e,
              g;d = 0;for (e = c.length; d < e; d++) {
            g = c[d], this[g] = b[g];
          }
        } else this.$attr = {};this.$$element = a;
      }function Ua(a, b, c) {
        Ba.innerHTML = "<span " + b + ">";b = Ba.firstChild.attributes;var d = b[0];b.removeNamedItem(d.name);d.value = c;a.attributes.setNamedItem(d);
      }function na(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }function ca(a, b, c, d, e) {
        a instanceof B || (a = B(a));var g = Va(a, b, a, c, d, e);ca.$$addScopeClass(a);
        var f = null;return function (b, c, d) {
          if (!a) throw ba("multilink");ib(b, "scope");e && e.needsNewScope && (b = b.$parent.$new());d = d || {};var h = d.parentBoundTranscludeFn,
              k = d.transcludeControllers;d = d.futureParentElement;h && h.$$boundTransclude && (h = h.$$boundTransclude);f || (f = (d = d && d[0]) ? "foreignobject" !== za(d) && ha.call(d).match(/SVG/) ? "svg" : "html" : "html");d = "html" !== f ? B(ja(f, B("<div>").append(a).html())) : c ? Sa.clone.call(a) : a;if (k) for (var l in k) {
            d.data("$" + l + "Controller", k[l].instance);
          }ca.$$addScopeInfo(d, b);c && c(d, b);g && g(b, d, d, h);c || (a = g = null);return d;
        };
      }function Va(a, b, c, d, e, g) {
        function f(a, c, d, e) {
          var g, k, l, m, q, n, H;if (s) for (H = Array(c.length), m = 0; m < h.length; m += 3) {
            g = h[m], H[g] = c[g];
          } else H = c;m = 0;for (q = h.length; m < q;) {
            k = H[h[m++]], c = h[m++], g = h[m++], c ? (c.scope ? (l = a.$new(), ca.$$addScopeInfo(B(k), l)) : l = a, n = c.transcludeOnThisElement ? Ma(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? Ma(a, b) : null, c(g, l, k, d, n)) : g && g(a, k.childNodes, void 0, e);
          }
        }for (var h = [], k = I(a) || a instanceof B, l, m, q, n, s, H = 0; H < a.length; H++) {
          l = new mc();
          11 === Ca && Da(a, H, k);m = M(a[H], [], l, 0 === H ? d : void 0, e);(g = m.length ? Y(m, a[H], l, b, c, null, [], [], g) : null) && g.scope && ca.$$addScopeClass(l.$$element);l = g && g.terminal || !(q = a[H].childNodes) || !q.length ? null : Va(q, g ? (g.transcludeOnThisElement || !g.templateOnThisElement) && g.transclude : b);if (g || l) h.push(H, g, l), n = !0, s = s || g;g = null;
        }return n ? f : null;
      }function Da(a, b, c) {
        var d = a[b],
            e = d.parentNode,
            g;if (d.nodeType === Oa) for (;;) {
          g = e ? d.nextSibling : a[b + 1];if (!g || g.nodeType !== Oa) break;d.nodeValue += g.nodeValue;g.parentNode && g.parentNode.removeChild(g);
          c && g === a[b + 1] && a.splice(b + 1, 1);
        }
      }function Ma(a, b, c) {
        function d(e, g, f, h, k) {
          e || (e = a.$new(!1, k), e.$$transcluded = !0);return b(e, g, { parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: h });
        }var e = d.$$slots = S(),
            g;for (g in b.$$slots) {
          e[g] = b.$$slots[g] ? Ma(a, b.$$slots[g], c) : null;
        }return d;
      }function M(a, b, c, d, e) {
        var g = c.$attr,
            f;switch (a.nodeType) {case 1:
            f = za(a);T(b, Ea(f), "E", d, e);for (var h, l, m, q, n = a.attributes, s = 0, H = n && n.length; s < H; s++) {
              var J = !1,
                  G = !1;h = n[s];l = h.name;m = h.value;h = Ea(l);(q = Pa.test(h)) && (l = l.replace(od, "").substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              }));(h = h.match(Qa)) && $(h[1]) && (J = l, G = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));h = Ea(l.toLowerCase());g[h] = l;if (q || !c.hasOwnProperty(h)) c[h] = m, kd(a, h) && (c[h] = !0);xa(a, b, m, h, q);T(b, h, "A", d, e, J, G);
            }"input" === f && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete", "off");if (!La) break;g = a.className;E(g) && (g = g.animVal);if (D(g) && "" !== g) for (; a = k.exec(g);) {
              h = Ea(a[2]), T(b, h, "C", d, e) && (c[h] = Q(a[3])), g = g.substr(a.index + a[0].length);
            }break;case Oa:
            oa(b, a.nodeValue);break;case 8:
            if (!Ka) break;nc(a, b, c, d, e);}b.sort(ka);return b;
      }function nc(a, b, c, d, e) {
        try {
          var f = g.exec(a.nodeValue);if (f) {
            var h = Ea(f[1]);T(b, h, "M", d, e) && (c[h] = Q(f[2]));
          }
        } catch (k) {}
      }function pd(a, b, c) {
        var d = [],
            e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw ba("uterdir", b, c);1 === a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
          } while (0 < e);
        } else d.push(a);return B(d);
      }function U(a, b, c) {
        return function (d, e, g, f, h) {
          e = pd(e[0], b, c);return a(d, e, g, f, h);
        };
      }function V(a, b, c, d, e, g) {
        var f;return a ? ca(b, c, d, e, g) : function () {
          f || (f = ca(b, c, d, e, g), b = c = g = null);return f.apply(this, arguments);
        };
      }function Y(a, b, d, e, g, f, h, k, l) {
        function m(a, b, c, d) {
          if (a) {
            c && (a = U(a, c, d));a.require = x.require;a.directiveName = W;if (K === x || x.$$isolateScope) a = ua(a, { isolateScope: !0 });h.push(a);
          }if (b) {
            c && (b = U(b, c, d));b.require = x.require;b.directiveName = W;if (K === x || x.$$isolateScope) b = ua(b, { isolateScope: !0 });k.push(b);
          }
        }function q(a, e, g, f, l) {
          function m(a, b, c, d) {
            var e;
            cb(a) || (d = c, c = b, b = a, a = void 0);ta && (e = L);c || (c = ta ? fa.parent() : fa);if (d) {
              var g = l.$$slots[d];if (g) return g(a, b, e, c, O);if (w(g)) throw ba("noslot", d, Aa(fa));
            } else return l(a, b, e, c, O);
          }var n, x, F, y, R, L, z, fa;b === g ? (f = d, fa = d.$$element) : (fa = B(g), f = new mc(fa, d));R = e;K ? y = e.$new(!0) : s && (R = e.$parent);l && (z = m, z.$$boundTransclude = l, z.isSlotFilled = function (a) {
            return !!l.$$slots[a];
          });J && (L = da(fa, f, z, J, y, e, K));K && (ca.$$addScopeInfo(fa, y, !0, !(v && (v === K || v === K.$$originalDirective))), ca.$$addScopeClass(fa, !0), y.$$isolateBindings = K.$$isolateBindings, x = qa(e, f, y, y.$$isolateBindings, K), x.removeWatches && y.$on("$destroy", x.removeWatches));for (n in L) {
            x = J[n];F = L[n];var W = x.$$bindings.bindToController;if (G) {
              F.bindingInfo = W ? qa(R, f, F.instance, W, x) : {};var r = F();r !== F.instance && (F.instance = r, fa.data("$" + x.name + "Controller", r), F.bindingInfo.removeWatches && F.bindingInfo.removeWatches(), F.bindingInfo = qa(R, f, F.instance, W, x));
            } else F.instance = F(), fa.data("$" + x.name + "Controller", F.instance), F.bindingInfo = qa(R, f, F.instance, W, x);
          }p(J, function (a, b) {
            var c = a.require;a.bindToController && !I(c) && E(c) && P(L[b].instance, X(b, c, fa, L));
          });p(L, function (a) {
            var b = a.instance;if (A(b.$onChanges)) try {
              b.$onChanges(a.bindingInfo.initialChanges);
            } catch (d) {
              c(d);
            }if (A(b.$onInit)) try {
              b.$onInit();
            } catch (e) {
              c(e);
            }A(b.$doCheck) && (R.$watch(function () {
              b.$doCheck();
            }), b.$doCheck());A(b.$onDestroy) && R.$on("$destroy", function () {
              b.$onDestroy();
            });
          });n = 0;for (x = h.length; n < x; n++) {
            F = h[n], wa(F, F.isolateScope ? y : e, fa, f, F.require && X(F.directiveName, F.require, fa, L), z);
          }var O = e;K && (K.template || null === K.templateUrl) && (O = y);a && a(O, g.childNodes, void 0, l);for (n = k.length - 1; 0 <= n; n--) {
            F = k[n], wa(F, F.isolateScope ? y : e, fa, f, F.require && X(F.directiveName, F.require, fa, L), z);
          }p(L, function (a) {
            a = a.instance;A(a.$postLink) && a.$postLink();
          });
        }l = l || {};for (var n = -Number.MAX_VALUE, s = l.newScopeDirective, J = l.controllerDirectives, K = l.newIsolateScopeDirective, v = l.templateDirective, y = l.nonTlbTranscludeDirective, R = !1, L = !1, ta = l.hasElementTranscludeDirective, F = d.$$element = B(b), x, W, z, r = e, O, t = !1, Jb = !1, u, Da = 0, C = a.length; Da < C; Da++) {
          x = a[Da];var Ua = x.$$start,
              D = x.$$end;Ua && (F = pd(b, Ua, D));z = void 0;if (n > x.priority) break;if (u = x.scope) x.templateUrl || (E(u) ? (aa("new/isolated scope", K || s, x, F), K = x) : aa("new/isolated scope", K, x, F)), s = s || x;W = x.name;if (!t && (x.replace && (x.templateUrl || x.template) || x.transclude && !x.$$tlb)) {
            for (u = Da + 1; t = a[u++];) {
              if (t.transclude && !t.$$tlb || t.replace && (t.templateUrl || t.template)) {
                Jb = !0;break;
              }
            }t = !0;
          }!x.templateUrl && x.controller && (J = J || S(), aa("'" + W + "' controller", J[W], x, F), J[W] = x);if (u = x.transclude) if (R = !0, x.$$tlb || (aa("transclusion", y, x, F), y = x), "element" === u) ta = !0, n = x.priority, z = F, F = d.$$element = B(ca.$$createComment(W, d[W])), b = F[0], la(g, ya.call(z, 0), b), z[0].$$parentNode = z[0].parentNode, r = V(Jb, z, e, n, f && f.name, { nonTlbTranscludeDirective: y });else {
            var na = S();if (E(u)) {
              z = [];var Va = S(),
                  Ma = S();p(u, function (a, b) {
                var c = "?" === a.charAt(0);a = c ? a.substring(1) : a;Va[a] = b;na[b] = null;Ma[b] = c;
              });p(F.contents(), function (a) {
                var b = Va[Ea(za(a))];b ? (Ma[b] = !0, na[b] = na[b] || [], na[b].push(a)) : z.push(a);
              });p(Ma, function (a, b) {
                if (!a) throw ba("reqslot", b);
              });for (var N in na) {
                na[N] && (na[N] = V(Jb, na[N], e));
              }
            } else z = B(jc(b)).contents();F.empty();r = V(Jb, z, e, void 0, void 0, { needsNewScope: x.$$isolateScope || x.$$newScope });r.$$slots = na;
          }if (x.template) if (L = !0, aa("template", v, x, F), v = x, u = A(x.template) ? x.template(F, d) : x.template, u = Ia(u), x.replace) {
            f = x;z = gc.test(u) ? qd(ja(x.templateNamespace, Q(u))) : [];b = z[0];if (1 !== z.length || 1 !== b.nodeType) throw ba("tplrt", W, "");la(g, F, b);C = { $attr: {} };u = M(b, [], C);var nc = a.splice(Da + 1, a.length - (Da + 1));(K || s) && Z(u, K, s);a = a.concat(u).concat(nc);
            ea(d, C);C = a.length;
          } else F.html(u);if (x.templateUrl) L = !0, aa("template", v, x, F), v = x, x.replace && (f = x), q = ia(a.splice(Da, a.length - Da), F, d, g, R && r, h, k, { controllerDirectives: J, newScopeDirective: s !== x && s, newIsolateScopeDirective: K, templateDirective: v, nonTlbTranscludeDirective: y }), C = a.length;else if (x.compile) try {
            O = x.compile(F, d, r);var T = x.$$originalDirective || x;A(O) ? m(null, Ra(T, O), Ua, D) : O && m(Ra(T, O.pre), Ra(T, O.post), Ua, D);
          } catch ($) {
            c($, Aa(F));
          }x.terminal && (q.terminal = !0, n = Math.max(n, x.priority));
        }q.scope = s && !0 === s.scope;q.transcludeOnThisElement = R;q.templateOnThisElement = L;q.transclude = r;l.hasElementTranscludeDirective = ta;return q;
      }function X(a, b, c, d) {
        var e;if (D(b)) {
          var g = b.match(l);b = b.substring(g[0].length);var f = g[1] || g[3],
              g = "?" === g[2];"^^" === f ? c = c.parent() : e = (e = d && d[b]) && e.instance;if (!e) {
            var h = "$" + b + "Controller";e = f ? c.inheritedData(h) : c.data(h);
          }if (!e && !g) throw ba("ctreq", b, a);
        } else if (I(b)) for (e = [], f = 0, g = b.length; f < g; f++) {
          e[f] = X(a, b[f], c, d);
        } else E(b) && (e = {}, p(b, function (b, g) {
          e[g] = X(a, b, c, d);
        }));return e || null;
      }function da(a, b, c, d, e, g, f) {
        var h = S(),
            k;for (k in d) {
          var l = d[k],
              m = { $scope: l === f || l.$$isolateScope ? e : g, $element: a, $attrs: b, $transclude: c },
              n = l.controller;"@" === n && (n = b[l.name]);m = F(n, m, !0, l.controllerAs);h[l.name] = m;a.data("$" + l.name + "Controller", m.instance);
        }return h;
      }function Z(a, b, c) {
        for (var d = 0, e = a.length; d < e; d++) {
          a[d] = Yb(a[d], { $$isolateScope: b, $$newScope: c });
        }
      }function T(b, c, e, g, h, k, l) {
        if (c === h) return null;var m = null;if (f.hasOwnProperty(c)) {
          h = a.get(c + "Directive");for (var n = 0, q = h.length; n < q; n++) {
            if (c = h[n], (w(g) || g > c.priority) && -1 !== c.restrict.indexOf(e)) {
              k && (c = Yb(c, { $$start: k, $$end: l }));if (!c.$$bindings) {
                var s = m = c,
                    H = c.name,
                    J = { isolateScope: null, bindToController: null };E(s.scope) && (!0 === s.bindToController ? (J.bindToController = d(s.scope, H, !0), J.isolateScope = {}) : J.isolateScope = d(s.scope, H, !1));E(s.bindToController) && (J.bindToController = d(s.bindToController, H, !0));if (J.bindToController && !s.controller) throw ba("noctrl", H);m = m.$$bindings = J;E(m.isolateScope) && (c.$$isolateBindings = m.isolateScope);
              }b.push(c);
              m = c;
            }
          }
        }return m;
      }function $(b) {
        if (f.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++) {
          if (b = c[d], b.multiElement) return !0;
        }return !1;
      }function ea(a, b) {
        var c = b.$attr,
            d = a.$attr;p(a, function (d, e) {
          "$" !== e.charAt(0) && (b[e] && b[e] !== d && (d = d.length ? d + (("style" === e ? ";" : " ") + b[e]) : b[e]), a.$set(e, d, !0, c[e]));
        });p(b, function (b, e) {
          a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]));
        });
      }function ia(a, b, d, g, f, h, k, l) {
        var m = [],
            n,
            q,
            s = b[0],
            J = a.shift(),
            x = Yb(J, { templateUrl: null,
          transclude: null, replace: null, $$originalDirective: J }),
            G = A(J.templateUrl) ? J.templateUrl(b, d) : J.templateUrl,
            F = J.templateNamespace;b.empty();e(G).then(function (c) {
          var e, H;c = Ia(c);if (J.replace) {
            c = gc.test(c) ? qd(ja(F, Q(c))) : [];e = c[0];if (1 !== c.length || 1 !== e.nodeType) throw ba("tplrt", J.name, G);c = { $attr: {} };la(g, b, e);var K = M(e, [], c);E(J.scope) && Z(K, !0);a = K.concat(a);ea(d, c);
          } else e = s, b.html(c);a.unshift(x);n = Y(a, e, d, f, b, J, h, k, l);p(g, function (a, c) {
            a === e && (g[c] = b[0]);
          });for (q = Va(b[0].childNodes, f); m.length;) {
            c = m.shift();H = m.shift();var v = m.shift(),
                y = m.shift(),
                K = b[0];if (!c.$$destroyed) {
              if (H !== s) {
                var L = H.className;l.hasElementTranscludeDirective && J.replace || (K = jc(e));la(v, B(H), K);na(B(K), L);
              }H = n.transcludeOnThisElement ? Ma(c, n.transclude, y) : y;n(q, c, K, g, H);
            }
          }m = null;
        }).catch(function (a) {
          $b(a) && c(a);
        });return function (a, b, c, d, e) {
          a = e;b.$$destroyed || (m ? m.push(b, c, d, a) : (n.transcludeOnThisElement && (a = Ma(b, n.transclude, e)), n(q, b, c, d, a)));
        };
      }function ka(a, b) {
        var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }function aa(a, b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : "";
        }if (b) throw ba("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, Aa(d));
      }function oa(a, c) {
        var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
            a = a.parent();var b = !!a.length;b && ca.$$addBindingClass(a);return function (a, c) {
              var e = c.parent();b || ca.$$addBindingClass(e);ca.$$addBindingInfo(e, d.expressions);a.$watch(d, function (a) {
                c[0].nodeValue = a;
              });
            };
          } });
      }function ja(a, b) {
        a = N(a || "html");switch (a) {case "svg":case "math":
            var c = u.document.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
            return b;}
      }function va(a, b) {
        if ("srcdoc" === b) return x.HTML;var c = za(a);if ("src" === b || "ngSrc" === b) {
          if (-1 === ["img", "video", "audio", "source", "track"].indexOf(c)) return x.RESOURCE_URL;
        } else if ("xlinkHref" === b || "form" === c && "action" === b || "link" === c && "href" === b) return x.RESOURCE_URL;
      }function xa(a, c, d, e, g) {
        var f = va(a, e),
            k = h[e] || g,
            l = b(d, !g, f, k);if (l) {
          if ("multiple" === e && "select" === za(a)) throw ba("selmulti", Aa(a));if (m.test(e)) throw ba("nodomevents");c.push({ priority: 100, compile: function compile() {
              return { pre: function pre(a, c, g) {
                  c = g.$$observers || (g.$$observers = S());var h = g[e];h !== d && (l = h && b(h, !0, f, k), d = h);l && (g[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(l, function (a, b) {
                    "class" === e && a !== b ? g.$updateClass(a, b) : g.$set(e, a);
                  }));
                } };
            } });
        }
      }function la(a, b, c) {
        var d = b[0],
            e = b.length,
            g = d.parentNode,
            f,
            h;if (a) for (f = 0, h = a.length; f < h; f++) {
          if (a[f] === d) {
            a[f++] = c;h = f + e - 1;for (var k = a.length; f < k; f++, h++) {
              h < k ? a[f] = a[h] : delete a[f];
            }a.length -= e - 1;a.context === d && (a.context = c);break;
          }
        }g && g.replaceChild(c, d);a = u.document.createDocumentFragment();for (f = 0; f < e; f++) {
          a.appendChild(b[f]);
        }B.hasData(d) && (B.data(c, B.data(d)), B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for (f = 1; f < e; f++) {
          delete b[f];
        }b[0] = c;b.length = 1;
      }function ua(a, b) {
        return P(function () {
          return a.apply(null, arguments);
        }, a, b);
      }function wa(a, b, d, e, g, f) {
        try {
          a(b, d, e, g, f);
        } catch (h) {
          c(h, Aa(d));
        }
      }function pa(a, b) {
        if (L) throw ba("missingattr", a, b);
      }function qa(a, c, d, e, g) {
        function f(b, c, e) {
          A(d.$onChanges) && !ac(c, e) && (ga || (a.$$postDigest(O), ga = []), m || (m = {}, ga.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Kb(e, c));
        }function h() {
          d.$onChanges(m);m = void 0;
        }var k = [],
            l = {},
            m;p(e, function (e, h) {
          var m = e.attrName,
              q = e.optional,
              s,
              H,
              x,
              G;switch (e.mode) {case "@":
              q || ra.call(c, m) || (pa(m, g.name), d[h] = c[m] = void 0);q = c.$observe(m, function (a) {
                if (D(a) || Na(a)) f(h, a, d[h]), d[h] = a;
              });c.$$observers[m].$$scope = a;s = c[m];D(s) ? d[h] = b(s)(a) : Na(s) && (d[h] = s);l[h] = new Kb(oc, d[h]);k.push(q);break;case "=":
              if (!ra.call(c, m)) {
                if (q) break;pa(m, g.name);c[m] = void 0;
              }if (q && !c[m]) break;H = n(c[m]);G = H.literal ? sa : ac;x = H.assign || function () {
                s = d[h] = H(a);throw ba("nonassign", c[m], m, g.name);
              };s = d[h] = H(a);q = function q(b) {
                G(b, d[h]) || (G(b, s) ? x(a, b = d[h]) : d[h] = b);return s = b;
              };q.$stateful = !0;q = e.collection ? a.$watchCollection(c[m], q) : a.$watch(n(c[m], q), null, H.literal);k.push(q);break;case "<":
              if (!ra.call(c, m)) {
                if (q) break;pa(m, g.name);c[m] = void 0;
              }if (q && !c[m]) break;H = n(c[m]);var F = H.literal,
                  v = d[h] = H(a);l[h] = new Kb(oc, d[h]);q = a.$watch(H, function (a, b) {
                if (b === a) {
                  if (b === v || F && sa(b, v)) return;b = v;
                }f(h, a, b);d[h] = a;
              }, F);k.push(q);break;case "&":
              q || ra.call(c, m) || pa(m, g.name);H = c.hasOwnProperty(m) ? n(c[m]) : C;if (H === C && q) break;d[h] = function (b) {
                return H(a, b);
              };}
        });return { initialChanges: l, removeWatches: k.length && function () {
            for (var a = 0, b = k.length; a < b; ++a) {
              k[a]();
            }
          } };
      }var Ja = /^\w/,
          Ba = u.document.createElement("div"),
          Ka = v,
          La = s,
          Fa = z,
          ga;mc.prototype = { $normalize: Ea, $addClass: function $addClass(a) {
          a && 0 < a.length && W.addClass(this.$$element, a);
        }, $removeClass: function $removeClass(a) {
          a && 0 < a.length && W.removeClass(this.$$element, a);
        }, $updateClass: function $updateClass(a, b) {
          var c = rd(a, b);c && c.length && W.addClass(this.$$element, c);(c = rd(b, a)) && c.length && W.removeClass(this.$$element, c);
        }, $set: function $set(a, b, d, e) {
          var g = kd(this.$$element[0], a),
              f = sd[a],
              h = a;g ? (this.$$element.prop(a, b), e = g) : f && (this[f] = b, h = f);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Vc(a, "-"));g = za(this.$$element);if ("a" === g && ("href" === a || "xlinkHref" === a) || "img" === g && "src" === a) this[a] = b = r(b, "src" === a);else if ("img" === g && "srcset" === a && t(b)) {
            for (var g = "", f = Q(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(f) ? k : /(,)/, f = f.split(k), k = Math.floor(f.length / 2), l = 0; l < k; l++) {
              var m = 2 * l,
                  g = g + r(Q(f[m]), !0),
                  g = g + (" " + Q(f[m + 1]));
            }f = Q(f[2 * l]).split(/\s/);g += r(Q(f[0]), !0);2 === f.length && (g += " " + Q(f[1]));this[a] = b = g;
          }!1 !== d && (null === b || w(b) ? this.$$element.removeAttr(e) : Ja.test(e) ? this.$$element.attr(e, b) : Ua(this.$$element[0], e, b));(a = this.$$observers) && p(a[h], function (a) {
            try {
              a(b);
            } catch (d) {
              c(d);
            }
          });
        },
        $observe: function $observe(a, b) {
          var c = this,
              d = c.$$observers || (c.$$observers = S()),
              e = d[a] || (d[a] = []);e.push(b);R.$evalAsync(function () {
            e.$$inter || !c.hasOwnProperty(a) || w(c[a]) || b(c[a]);
          });return function () {
            db(e, b);
          };
        } };var Ga = b.startSymbol(),
          Ha = b.endSymbol(),
          Ia = "{{" === Ga && "}}" === Ha ? bb : function (a) {
        return a.replace(/\{\{/g, Ga).replace(/}}/g, Ha);
      },
          Pa = /^ngAttr[A-Z]/,
          Qa = /^(.+)Start$/;ca.$$addBindingInfo = q ? function (a, b) {
        var c = a.data("$binding") || [];I(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
      } : C;ca.$$addBindingClass = q ? function (a) {
        na(a, "ng-binding");
      } : C;ca.$$addScopeInfo = q ? function (a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : C;ca.$$addScopeClass = q ? function (a, b) {
        na(a, b ? "ng-isolate-scope" : "ng-scope");
      } : C;ca.$$createComment = function (a, b) {
        var c = "";q && (c = " " + (a || "") + ": ", b && (c += b + " "));return u.document.createComment(c);
      };return ca;
    }];
  }function Kb(a, b) {
    this.previousValue = a;this.currentValue = b;
  }function Ea(a) {
    return a.replace(od, "").replace(tg, jb);
  }function rd(a, b) {
    var d = "",
        c = a.split(/\s+/),
        e = b.split(/\s+/),
        f = 0;a: for (; f < c.length; f++) {
      for (var g = c[f], k = 0; k < e.length; k++) {
        if (g === e[k]) continue a;
      }d += (0 < d.length ? " " : "") + g;
    }return d;
  }function qd(a) {
    a = B(a);var b = a.length;if (1 >= b) return a;for (; b--;) {
      var d = a[b];(8 === d.nodeType || d.nodeType === Oa && "" === d.nodeValue.trim()) && ug.call(a, b, 1);
    }return a;
  }function sg(a, b) {
    if (b && D(b)) return b;if (D(a)) {
      var d = td.exec(a);if (d) return d[3];
    }
  }function yf() {
    var a = {},
        b = !1;this.has = function (b) {
      return a.hasOwnProperty(b);
    };this.register = function (b, c) {
      Ia(b, "controller");E(b) ? P(a, b) : a[b] = c;
    };this.allowGlobals = function () {
      b = !0;
    };this.$get = ["$injector", "$window", function (d, c) {
      function e(a, b, c, d) {
        if (!a || !E(a.$scope)) throw M("$controller")("noscp", d, b);a.$scope[b] = c;
      }return function (f, g, k, h) {
        var l, m, n;k = !0 === k;h && D(h) && (n = h);if (D(f)) {
          h = f.match(td);if (!h) throw ud("ctrlfmt", f);m = h[1];n = n || h[3];f = a.hasOwnProperty(m) ? a[m] : Xc(g.$scope, m, !0) || (b ? Xc(c, m, !0) : void 0);if (!f) throw ud("ctrlreg", m);ub(f, m, !0);
        }if (k) return k = (I(f) ? f[f.length - 1] : f).prototype, l = Object.create(k || null), n && e(g, n, l, m || f.name), P(function () {
          var a = d.invoke(f, l, g, m);a !== l && (E(a) || A(a)) && (l = a, n && e(g, n, l, m || f.name));return l;
        }, { instance: l, identifier: n });l = d.instantiate(f, g, m);n && e(g, n, l, m || f.name);return l;
      };
    }];
  }function zf() {
    this.$get = ["$window", function (a) {
      return B(a.document);
    }];
  }function Af() {
    this.$get = ["$document", "$rootScope", function (a, b) {
      function d() {
        e = c.hidden;
      }var c = a[0],
          e = c && c.hidden;a.on("visibilitychange", d);b.$on("$destroy", function () {
        a.off("visibilitychange", d);
      });return function () {
        return e;
      };
    }];
  }function Bf() {
    this.$get = ["$log", function (a) {
      return function (b, d) {
        a.error.apply(a, arguments);
      };
    }];
  }function pc(a) {
    return E(a) ? ea(a) ? a.toISOString() : fb(a) : a;
  }function Gf() {
    this.$get = function () {
      return function (a) {
        if (!a) return "";var b = [];Nc(a, function (a, c) {
          null === a || w(a) || A(a) || (I(a) ? p(a, function (a) {
            b.push(ia(c) + "=" + ia(pc(a)));
          }) : b.push(ia(c) + "=" + ia(pc(a))));
        });return b.join("&");
      };
    };
  }function Hf() {
    this.$get = function () {
      return function (a) {
        function b(a, e, f) {
          null === a || w(a) || (I(a) ? p(a, function (a, c) {
            b(a, e + "[" + (E(a) ? c : "") + "]");
          }) : E(a) && !ea(a) ? Nc(a, function (a, c) {
            b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
          }) : d.push(ia(e) + "=" + ia(pc(a))));
        }if (!a) return "";var d = [];b(a, "", !0);return d.join("&");
      };
    };
  }function qc(a, b) {
    if (D(a)) {
      var d = a.replace(vg, "").trim();if (d) {
        var c = b("Content-Type"),
            c = c && 0 === c.indexOf(vd),
            e;(e = c) || (e = (e = d.match(wg)) && xg[e[0]].test(d));if (e) try {
          a = Qc(d);
        } catch (f) {
          if (!c) return a;throw rc("baddata", a, f);
        }
      }
    }return a;
  }function wd(a) {
    var b = S(),
        d;D(a) ? p(a.split("\n"), function (a) {
      d = a.indexOf(":");var e = N(Q(a.substr(0, d)));a = Q(a.substr(d + 1));e && (b[e] = b[e] ? b[e] + ", " + a : a);
    }) : E(a) && p(a, function (a, d) {
      var f = N(d),
          g = Q(a);f && (b[f] = b[f] ? b[f] + ", " + g : g);
    });return b;
  }function xd(a) {
    var b;return function (d) {
      b || (b = wd(a));return d ? (d = b[N(d)], void 0 === d && (d = null), d) : b;
    };
  }function yd(a, b, d, c) {
    if (A(c)) return c(a, b, d);p(c, function (c) {
      a = c(a, b, d);
    });return a;
  }function Ff() {
    var a = this.defaults = { transformResponse: [qc], transformRequest: [function (a) {
        return E(a) && "[object File]" !== ha.call(a) && "[object Blob]" !== ha.call(a) && "[object FormData]" !== ha.call(a) ? fb(a) : a;
      }], headers: { common: { Accept: "application/json, text/plain, */*" },
        post: ja(sc), put: ja(sc), patch: ja(sc) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer", jsonpCallbackParam: "callback" },
        b = !1;this.useApplyAsync = function (a) {
      return t(a) ? (b = !!a, this) : b;
    };var d = this.interceptors = [];this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (c, e, f, g, k, h, l, m) {
      function n(b) {
        function d(a, b) {
          for (var c = 0, e = b.length; c < e;) {
            var g = b[c++],
                f = b[c++];a = a.then(g, f);
          }b.length = 0;return a;
        }
        function e(a, b) {
          var c,
              d = {};p(a, function (a, e) {
            A(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
          });return d;
        }function g(a) {
          var b = P({}, a);b.data = yd(a.data, a.headers, a.status, f.transformResponse);a = a.status;return 200 <= a && 300 > a ? b : h.reject(b);
        }if (!E(b)) throw M("$http")("badreq", b);if (!D(m.valueOf(b.url))) throw M("$http")("badreq", b.url);var f = P({ method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse, paramSerializer: a.paramSerializer, jsonpCallbackParam: a.jsonpCallbackParam }, b);f.headers = function (b) {
          var c = a.headers,
              d = P({}, b.headers),
              g,
              f,
              h,
              c = P({}, c.common, c[N(b.method)]);a: for (g in c) {
            f = N(g);for (h in d) {
              if (N(h) === f) continue a;
            }d[g] = c[g];
          }return e(d, ja(b));
        }(b);f.method = wb(f.method);f.paramSerializer = D(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;c.$$incOutstandingRequestCount();var k = [],
            n = [];b = h.resolve(f);p(v, function (a) {
          (a.request || a.requestError) && k.unshift(a.request, a.requestError);(a.response || a.responseError) && n.push(a.response, a.responseError);
        });b = d(b, k);b = b.then(function (b) {
          var c = b.headers,
              d = yd(b.data, xd(c), void 0, b.transformRequest);w(d) && p(c, function (a, b) {
            "content-type" === N(b) && delete c[b];
          });w(b.withCredentials) && !w(a.withCredentials) && (b.withCredentials = a.withCredentials);return q(b, d).then(g, g);
        });b = d(b, n);return b = b.finally(function () {
          c.$$completeOutstandingRequest(C);
        });
      }function q(c, d) {
        function g(a) {
          if (a) {
            var c = {};p(a, function (a, d) {
              c[d] = function (c) {
                function d() {
                  a(c);
                }b ? k.$applyAsync(d) : k.$$phase ? d() : k.$apply(d);
              };
            });return c;
          }
        }function l(a, c, d, e, g) {
          function f() {
            q(c, a, d, e, g);
          }R && (200 <= a && 300 > a ? R.put(O, [a, c, wd(d), e, g]) : R.remove(O));b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply());
        }function q(a, b, d, e, g) {
          b = -1 <= b ? b : 0;(200 <= b && 300 > b ? K.resolve : K.reject)({ data: a, status: b, headers: xd(d), config: c, statusText: e, xhrStatus: g });
        }function H(a) {
          q(a.data, a.status, ja(a.headers()), a.statusText, a.xhrStatus);
        }function v() {
          var a = n.pendingRequests.indexOf(c);-1 !== a && n.pendingRequests.splice(a, 1);
        }var K = h.defer(),
            F = K.promise,
            R,
            x,
            W = c.headers,
            r = "jsonp" === N(c.method),
            O = c.url;r ? O = m.getTrustedResourceUrl(O) : D(O) || (O = m.valueOf(O));O = G(O, c.paramSerializer(c.params));r && (O = L(O, c.jsonpCallbackParam));n.pendingRequests.push(c);F.then(v, v);!c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (R = E(c.cache) ? c.cache : E(a.cache) ? a.cache : z);R && (x = R.get(O), t(x) ? x && A(x.then) ? x.then(H, H) : I(x) ? q(x[1], x[0], ja(x[2]), x[3], x[4]) : q(x, 200, {}, "OK", "complete") : R.put(O, F));w(x) && ((x = zd(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (W[c.xsrfHeaderName || a.xsrfHeaderName] = x), e(c.method, O, d, l, W, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));return F;
      }function G(a, b) {
        0 < b.length && (a += (-1 === a.indexOf("?") ? "?" : "&") + b);return a;
      }function L(a, b) {
        if (/[&?][^=]+=JSON_CALLBACK/.test(a)) throw rc("badjsonp", a);if (new RegExp("[&?]" + b + "=").test(a)) throw rc("badjsonp", b, a);return a += (-1 === a.indexOf("?") ? "?" : "&") + b + "=JSON_CALLBACK";
      }var z = g("$http");a.paramSerializer = D(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;var v = [];p(d, function (a) {
        v.unshift(D(a) ? l.get(a) : l.invoke(a));
      });n.pendingRequests = [];(function (a) {
        p(arguments, function (a) {
          n[a] = function (b, c) {
            return n(P({}, c || {}, { method: a, url: b }));
          };
        });
      })("get", "delete", "head", "jsonp");(function (a) {
        p(arguments, function (a) {
          n[a] = function (b, c, d) {
            return n(P({}, d || {}, { method: a, url: b, data: c }));
          };
        });
      })("post", "put", "patch");n.defaults = a;return n;
    }];
  }function Jf() {
    this.$get = function () {
      return function () {
        return new u.XMLHttpRequest();
      };
    };
  }function If() {
    this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
      return yg(a, c, a.defer, b, d[0]);
    }];
  }function yg(a, b, d, c, e) {
    function f(a, b, d) {
      a = a.replace("JSON_CALLBACK", b);var f = e.createElement("script"),
          _m = null;f.type = "text/javascript";f.src = a;f.async = !0;_m = function m(a) {
        f.removeEventListener("load", _m);f.removeEventListener("error", _m);e.body.removeChild(f);f = null;var g = -1,
            G = "unknown";a && ("load" !== a.type || c.wasCalled(b) || (a = { type: "error" }), G = a.type, g = "error" === a.type ? 404 : 200);d && d(g, G);
      };f.addEventListener("load", _m);f.addEventListener("error", _m);e.body.appendChild(f);return _m;
    }return function (e, k, h, l, m, n, q, G, L, z) {
      function v() {
        ma && ma();y && y.abort();
      }function s(a, b, c, e, g, f) {
        t(H) && d.cancel(H);ma = y = null;a(b, c, e, g, f);
      }k = k || a.url();if ("jsonp" === N(e)) var r = c.createCallback(k),
          ma = f(k, r, function (a, b) {
        var d = 200 === a && c.getResponse(r);s(l, a, d, "", b, "complete");c.removeCallback(r);
      });else {
        var y = b(e, k);y.open(e, k, !0);p(m, function (a, b) {
          t(a) && y.setRequestHeader(b, a);
        });y.onload = function () {
          var a = y.statusText || "",
              b = "response" in y ? y.response : y.responseText,
              c = 1223 === y.status ? 204 : y.status;0 === c && (c = b ? 200 : "file" === ua(k).protocol ? 404 : 0);s(l, c, b, y.getAllResponseHeaders(), a, "complete");
        };y.onerror = function () {
          s(l, -1, null, null, "", "error");
        };y.onabort = function () {
          s(l, -1, null, null, "", "abort");
        };y.ontimeout = function () {
          s(l, -1, null, null, "", "timeout");
        };p(L, function (a, b) {
          y.addEventListener(b, a);
        });p(z, function (a, b) {
          y.upload.addEventListener(b, a);
        });q && (y.withCredentials = !0);if (G) try {
          y.responseType = G;
        } catch (J) {
          if ("json" !== G) throw J;
        }y.send(w(h) ? null : h);
      }if (0 < n) var H = d(v, n);else n && A(n.then) && n.then(v);
    };
  }function Df() {
    var a = "{{",
        b = "}}";this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    };this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    };this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
      function f(a) {
        return "\\\\\\" + a;
      }function g(c) {
        return c.replace(n, a).replace(q, b);
      }function k(a, b, c, d) {
        var e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);return e;
      }function h(f, h, q, n) {
        function s(a) {
          try {
            var b = a;a = q ? e.getTrusted(q, b) : e.valueOf(b);return n && !t(a) ? a : dc(a);
          } catch (d) {
            c(Fa.interr(f, d));
          }
        }if (!f.length || -1 === f.indexOf(a)) {
          var p;
          h || (h = g(f), p = ka(h), p.exp = f, p.expressions = [], p.$$watchDelegate = k);return p;
        }n = !!n;var r,
            y,
            J = 0,
            H = [],
            ta = [];p = f.length;for (var K = [], F = []; J < p;) {
          if (-1 !== (r = f.indexOf(a, J)) && -1 !== (y = f.indexOf(b, r + l))) J !== r && K.push(g(f.substring(J, r))), J = f.substring(r + l, y), H.push(J), ta.push(d(J, s)), J = y + m, F.push(K.length), K.push("");else {
            J !== p && K.push(g(f.substring(J)));break;
          }
        }q && 1 < K.length && Fa.throwNoconcat(f);if (!h || H.length) {
          var R = function R(a) {
            for (var b = 0, c = H.length; b < c; b++) {
              if (n && w(a[b])) return;K[F[b]] = a[b];
            }return K.join("");
          };
          return P(function (a) {
            var b = 0,
                d = H.length,
                e = Array(d);try {
              for (; b < d; b++) {
                e[b] = ta[b](a);
              }return R(e);
            } catch (g) {
              c(Fa.interr(f, g));
            }
          }, { exp: f, expressions: H, $$watchDelegate: function $$watchDelegate(a, b) {
              var c;return a.$watchGroup(ta, function (d, e) {
                var g = R(d);A(b) && b.call(this, g, d !== e ? c : g, a);c = g;
              });
            } });
        }
      }var l = a.length,
          m = b.length,
          n = new RegExp(a.replace(/./g, f), "g"),
          q = new RegExp(b.replace(/./g, f), "g");h.startSymbol = function () {
        return a;
      };h.endSymbol = function () {
        return b;
      };return h;
    }];
  }function Ef() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
      function f(f, h, l, m) {
        function n() {
          q ? f.apply(null, G) : f(v);
        }var q = 4 < arguments.length,
            G = q ? ya.call(arguments, 4) : [],
            L = b.setInterval,
            p = b.clearInterval,
            v = 0,
            s = t(m) && !m,
            r = (s ? c : d).defer(),
            ma = r.promise;l = t(l) ? l : 0;ma.$$intervalId = L(function () {
          s ? e.defer(n) : a.$evalAsync(n);r.notify(v++);0 < l && v >= l && (r.resolve(v), p(ma.$$intervalId), delete g[ma.$$intervalId]);s || a.$apply();
        }, h);g[ma.$$intervalId] = r;return ma;
      }var g = {};f.cancel = function (a) {
        return a && a.$$intervalId in g ? (g[a.$$intervalId].promise.$$state.pur = !0, g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
      };return f;
    }];
  }function tc(a) {
    a = a.split("/");for (var b = a.length; b--;) {
      a[b] = gb(a[b]);
    }return a.join("/");
  }function Ad(a, b) {
    var d = ua(a);b.$$protocol = d.protocol;b.$$host = d.hostname;b.$$port = Z(d.port) || zg[d.protocol] || null;
  }function Bd(a, b) {
    if (Ag.test(a)) throw mb("badpath", a);var d = "/" !== a.charAt(0);d && (a = "/" + a);var c = ua(a);b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);b.$$search = Tc(c.search);b.$$hash = decodeURIComponent(c.hash);b.$$path && "/" !== b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
  }function uc(a, b) {
    return a.slice(0, b.length) === b;
  }function va(a, b) {
    if (uc(b, a)) return b.substr(a.length);
  }function La(a) {
    var b = a.indexOf("#");return -1 === b ? a : a.substr(0, b);
  }function nb(a) {
    return a.replace(/(#.+)|#$/, "$1");
  }function vc(a, b, d) {
    this.$$html5 = !0;d = d || "";Ad(a, this);this.$$parse = function (a) {
      var d = va(b, a);if (!D(d)) throw mb("ipthprfx", a, b);Bd(d, this);this.$$path || (this.$$path = "/");this.$$compose();
    };this.$$compose = function () {
      var a = cc(this.$$search),
          d = this.$$hash ? "#" + gb(this.$$hash) : "";this.$$url = tc(this.$$path) + (a ? "?" + a : "") + d;this.$$absUrl = b + this.$$url.substr(1);this.$$urlUpdatedByLocation = !0;
    };this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;t(f = va(a, c)) ? (g = f, g = d && t(f = va(d, f)) ? b + (va("/", f) || f) : a + g) : t(f = va(b, c)) ? g = b + f : b === c + "/" && (g = b);g && this.$$parse(g);return !!g;
    };
  }function wc(a, b, d) {
    Ad(a, this);this.$$parse = function (c) {
      var e = va(a, c) || va(b, c),
          f;w(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", w(e) && (a = c, this.replace())) : (f = va(d, e), w(f) && (f = e));Bd(f, this);c = this.$$path;var e = a,
          g = /^\/[A-Z]:(\/.*)/;uc(f, e) && (f = f.replace(e, ""));g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);this.$$path = c;this.$$compose();
    };this.$$compose = function () {
      var b = cc(this.$$search),
          e = this.$$hash ? "#" + gb(this.$$hash) : "";this.$$url = tc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + (this.$$url ? d + this.$$url : "");this.$$urlUpdatedByLocation = !0;
    };this.$$parseLinkUrl = function (b, d) {
      return La(a) === La(b) ? (this.$$parse(b), !0) : !1;
    };
  }function Cd(a, b, d) {
    this.$$html5 = !0;wc.apply(this, arguments);this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;a === La(c) ? f = c : (g = va(b, c)) ? f = a + d + g : b === c + "/" && (f = b);f && this.$$parse(f);return !!f;
    };this.$$compose = function () {
      var b = cc(this.$$search),
          e = this.$$hash ? "#" + gb(this.$$hash) : "";this.$$url = tc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + d + this.$$url;this.$$urlUpdatedByLocation = !0;
    };
  }function Lb(a) {
    return function () {
      return this[a];
    };
  }
  function Dd(a, b) {
    return function (d) {
      if (w(d)) return this[a];this[a] = b(d);this.$$compose();return this;
    };
  }function Lf() {
    var a = "!",
        b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (b) {
      return t(b) ? (a = b, this) : a;
    };this.html5Mode = function (a) {
      if (Na(a)) return b.enabled = a, this;if (E(a)) {
        Na(a.enabled) && (b.enabled = a.enabled);Na(a.requireBase) && (b.requireBase = a.requireBase);if (Na(a.rewriteLinks) || D(a.rewriteLinks)) b.rewriteLinks = a.rewriteLinks;return this;
      }return b;
    };this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
      function k(a, b, d) {
        var e = l.url(),
            g = l.$$state;try {
          c.url(a, b, d), l.$$state = c.state();
        } catch (f) {
          throw l.url(e), l.$$state = g, f;
        }
      }function h(a, b) {
        d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
      }var l, m;m = c.baseHref();var n = c.url(),
          q;if (b.enabled) {
        if (!m && b.requireBase) throw mb("nobase");q = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");m = e.history ? vc : Cd;
      } else q = La(n), m = wc;var G = q.substr(0, La(q).lastIndexOf("/") + 1);l = new m(q, G, "#" + a);l.$$parseLinkUrl(n, n);l.$$state = c.state();var p = /^\s*(javascript|mailto):/i;f.on("click", function (a) {
        var e = b.rewriteLinks;if (e && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which && 2 !== a.button) {
          for (var h = B(a.target); "a" !== za(h[0]);) {
            if (h[0] === f[0] || !(h = h.parent())[0]) return;
          }if (!D(e) || !w(h.attr(e))) {
            var e = h.prop("href"),
                k = h.attr("href") || h.attr("xlink:href");E(e) && "[object SVGAnimatedString]" === e.toString() && (e = ua(e.animVal).href);p.test(e) || !e || h.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(e, k) || (a.preventDefault(), l.absUrl() !== c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
          }
        }
      });nb(l.absUrl()) !== nb(n) && c.url(l.absUrl(), !0);var z = !0;c.onUrlChange(function (a, b) {
        uc(a, G) ? (d.$evalAsync(function () {
          var c = l.absUrl(),
              e = l.$$state,
              g;a = nb(a);l.$$parse(a);l.$$state = b;g = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;l.absUrl() === a && (g ? (l.$$parse(c), l.$$state = e, k(c, !1, e)) : (z = !1, h(c, e)));
        }), d.$$phase || d.$digest()) : g.location.href = a;
      });d.$watch(function () {
        if (z || l.$$urlUpdatedByLocation) {
          l.$$urlUpdatedByLocation = !1;var a = nb(c.url()),
              b = nb(l.absUrl()),
              g = c.state(),
              f = l.$$replace,
              m = a !== b || l.$$html5 && e.history && g !== l.$$state;if (z || m) z = !1, d.$evalAsync(function () {
            var b = l.absUrl(),
                c = d.$broadcast("$locationChangeStart", b, a, l.$$state, g).defaultPrevented;l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = g) : (m && k(b, f, g === l.$$state ? null : l.$$state), h(a, g)));
          });
        }l.$$replace = !1;
      });return l;
    }];
  }function Mf() {
    var a = !0,
        b = this;this.debugEnabled = function (b) {
      return t(b) ? (a = b, this) : a;
    };this.$get = ["$window", function (d) {
      function c(a) {
        $b(a) && (a.stack && f ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
      }function e(a) {
        var b = d.console || {},
            e = b[a] || b.log || C;return function () {
          var a = [];p(arguments, function (b) {
            a.push(c(b));
          });return Function.prototype.apply.call(e, b, a);
        };
      }var f = Ca || /\bEdge\//.test(d.navigator && d.navigator.userAgent);return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
          var c = e("debug");return function () {
            a && c.apply(b, arguments);
          };
        }() };
    }];
  }function Bg(a) {
    return a + "";
  }function Cg(a, b) {
    return "undefined" !== typeof a ? a : b;
  }function Ed(a, b) {
    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
  }function Dg(a, b) {
    switch (a.type) {case r.MemberExpression:
        if (a.computed) return !1;break;case r.UnaryExpression:
        return 1;case r.BinaryExpression:
        return "+" !== a.operator ? 1 : !1;case r.CallExpression:
        return !1;}return void 0 === b ? Fd : b;
  }function V(a, b, d) {
    var c,
        e,
        f = a.isPure = Dg(a, d);switch (a.type) {case r.Program:
        c = !0;p(a.body, function (a) {
          V(a.expression, b, f);c = c && a.expression.constant;
        });a.constant = c;break;case r.Literal:
        a.constant = !0;a.toWatch = [];break;case r.UnaryExpression:
        V(a.argument, b, f);a.constant = a.argument.constant;a.toWatch = a.argument.toWatch;break;case r.BinaryExpression:
        V(a.left, b, f);V(a.right, b, f);a.constant = a.left.constant && a.right.constant;a.toWatch = a.left.toWatch.concat(a.right.toWatch);break;case r.LogicalExpression:
        V(a.left, b, f);V(a.right, b, f);a.constant = a.left.constant && a.right.constant;a.toWatch = a.constant ? [] : [a];break;case r.ConditionalExpression:
        V(a.test, b, f);V(a.alternate, b, f);V(a.consequent, b, f);a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;a.toWatch = a.constant ? [] : [a];break;case r.Identifier:
        a.constant = !1;a.toWatch = [a];break;case r.MemberExpression:
        V(a.object, b, f);a.computed && V(a.property, b, f);a.constant = a.object.constant && (!a.computed || a.property.constant);a.toWatch = a.constant ? [] : [a];break;case r.CallExpression:
        c = d = a.filter ? !b(a.callee.name).$stateful : !1;e = [];p(a.arguments, function (a) {
          V(a, b, f);c = c && a.constant;e.push.apply(e, a.toWatch);
        });a.constant = c;a.toWatch = d ? e : [a];break;case r.AssignmentExpression:
        V(a.left, b, f);V(a.right, b, f);a.constant = a.left.constant && a.right.constant;a.toWatch = [a];break;case r.ArrayExpression:
        c = !0;e = [];p(a.elements, function (a) {
          V(a, b, f);c = c && a.constant;e.push.apply(e, a.toWatch);
        });a.constant = c;a.toWatch = e;break;case r.ObjectExpression:
        c = !0;e = [];p(a.properties, function (a) {
          V(a.value, b, f);c = c && a.value.constant;e.push.apply(e, a.value.toWatch);a.computed && (V(a.key, b, !1), c = c && a.key.constant, e.push.apply(e, a.key.toWatch));
        });a.constant = c;a.toWatch = e;break;case r.ThisExpression:
        a.constant = !1;a.toWatch = [];break;case r.LocalsExpression:
        a.constant = !1, a.toWatch = [];}
  }function Gd(a) {
    if (1 === a.length) {
      a = a[0].expression;var b = a.toWatch;return 1 !== b.length ? b : b[0] !== a ? b : void 0;
    }
  }function Hd(a) {
    return a.type === r.Identifier || a.type === r.MemberExpression;
  }function Id(a) {
    if (1 === a.body.length && Hd(a.body[0].expression)) return { type: r.AssignmentExpression, left: a.body[0].expression, right: { type: r.NGValueParameter }, operator: "=" };
  }
  function Jd(a) {
    this.$filter = a;
  }function Kd(a) {
    this.$filter = a;
  }function xc(a, b, d) {
    this.ast = new r(a, d);this.astCompiler = d.csp ? new Kd(b) : new Jd(b);
  }function yc(a) {
    return A(a.valueOf) ? a.valueOf() : Eg.call(a);
  }function Nf() {
    var a = S(),
        b = { "true": !0, "false": !1, "null": null, undefined: void 0 },
        d,
        c;this.addLiteral = function (a, c) {
      b[a] = c;
    };this.setIdentifierFns = function (a, b) {
      d = a;c = b;return this;
    };this.$get = ["$filter", function (e) {
      function f(a, b, c) {
        return null == a || null == b ? a === b : "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a)) || (a = yc(a), "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a)) || c) ? a === b || a !== a && b !== b : !1;
      }function g(a, b, c, d, e) {
        var g = d.inputs,
            h;if (1 === g.length) {
          var k = f,
              g = g[0];return a.$watch(function (a) {
            var b = g(a);f(b, k, g.isPure) || (h = d(a, void 0, void 0, [b]), k = b && yc(b));return h;
          }, b, c, e);
        }for (var l = [], m = [], n = 0, p = g.length; n < p; n++) {
          l[n] = f, m[n] = null;
        }return a.$watch(function (a) {
          for (var b = !1, c = 0, e = g.length; c < e; c++) {
            var k = g[c](a);if (b || (b = !f(k, l[c], g[c].isPure))) m[c] = k, l[c] = k && yc(k);
          }b && (h = d(a, void 0, void 0, m));return h;
        }, b, c, e);
      }function k(a, b, c, d, e) {
        function f(a) {
          return d(a);
        }function h(a, c, d) {
          l = a;A(b) && b(a, c, d);t(a) && d.$$postDigest(function () {
            t(l) && k();
          });
        }var k, l;return k = d.inputs ? g(a, h, c, d, e) : a.$watch(f, h, c);
      }function h(a, b, c, d) {
        function e(a) {
          var b = !0;p(a, function (a) {
            t(a) || (b = !1);
          });return b;
        }var g, f;return g = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          f = a;A(b) && b(a, c, d);e(a) && d.$$postDigest(function () {
            e(f) && g();
          });
        }, c);
      }function l(a, b, c, d) {
        var e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);return e;
      }function m(a, b) {
        if (!b) return a;var c = a.$$watchDelegate,
            d = !1,
            e = c !== h && c !== k ? function (c, e, g, f) {
          g = d && f ? f[0] : a(c, e, g, f);return b(g, c, e);
        } : function (c, d, e, g) {
          e = a(c, d, e, g);c = b(e, c, d);return t(e) ? c : e;
        },
            d = !a.inputs;c && c !== g ? (e.$$watchDelegate = c, e.inputs = a.inputs) : b.$stateful || (e.$$watchDelegate = g, e.inputs = a.inputs ? a.inputs : [a]);e.inputs && (e.inputs = e.inputs.map(function (a) {
          return a.isPure === Fd ? function (b) {
            return a(b);
          } : a;
        }));return e;
      }var n = { csp: Ja().noUnsafeEval, literals: pa(b), isIdentifierStart: A(d) && d, isIdentifierContinue: A(c) && c };return function (b, c) {
        var d, f, p;switch (typeof b === "undefined" ? "undefined" : _typeof(b)) {case "string":
            return p = b = b.trim(), d = a[p], d || (":" === b.charAt(0) && ":" === b.charAt(1) && (f = !0, b = b.substring(2)), d = new zc(n), d = new xc(d, e, n).parse(b), d.constant ? d.$$watchDelegate = l : f ? d.$$watchDelegate = d.literal ? h : k : d.inputs && (d.$$watchDelegate = g), a[p] = d), m(d, c);case "function":
            return m(b, c);default:
            return m(C, c);}
      };
    }];
  }function Pf() {
    var a = !0;this.$get = ["$rootScope", "$exceptionHandler", function (b, d) {
      return Ld(function (a) {
        b.$evalAsync(a);
      }, d, a);
    }];this.errorOnUnhandledRejections = function (b) {
      return t(b) ? (a = b, this) : a;
    };
  }function Qf() {
    var a = !0;this.$get = ["$browser", "$exceptionHandler", function (b, d) {
      return Ld(function (a) {
        b.defer(a);
      }, d, a);
    }];this.errorOnUnhandledRejections = function (b) {
      return t(b) ? (a = b, this) : a;
    };
  }function Ld(a, b, d) {
    function c() {
      return new e();
    }function e() {
      var a = this.promise = new f();this.resolve = function (b) {
        h(a, b);
      };this.reject = function (b) {
        m(a, b);
      };this.notify = function (b) {
        q(a, b);
      };
    }function f() {
      this.$$state = { status: 0 };
    }function g() {
      for (; !t && u.length;) {
        var a = u.shift();if (!a.pur) {
          a.pur = !0;var c = a.value,
              c = "Possibly unhandled rejection: " + ("function" === typeof c ? c.toString().replace(/ \{[\s\S]*$/, "") : w(c) ? "undefined" : "string" !== typeof c ? De(c, void 0) : c);$b(a.value) ? b(a.value, c) : b(c);
        }
      }
    }function k(b) {
      !d || b.pending || 2 !== b.status || b.pur || (0 === t && 0 === u.length && a(g), u.push(b));!b.processScheduled && b.pending && (b.processScheduled = !0, ++t, a(function () {
        var c, e, f;f = b.pending;b.processScheduled = !1;b.pending = void 0;try {
          for (var k = 0, l = f.length; k < l; ++k) {
            b.pur = !0;e = f[k][0];c = f[k][b.status];try {
              A(c) ? h(e, c(b.value)) : 1 === b.status ? h(e, b.value) : m(e, b.value);
            } catch (n) {
              m(e, n);
            }
          }
        } finally {
          --t, d && 0 === t && a(g);
        }
      }));
    }function h(a, b) {
      a.$$state.status || (b === a ? n(a, s("qcycle", b)) : l(a, b));
    }function l(a, b) {
      function c(b) {
        f || (f = !0, l(a, b));
      }function d(b) {
        f || (f = !0, n(a, b));
      }function e(b) {
        q(a, b);
      }var g,
          f = !1;try {
        if (E(b) || A(b)) g = b.then;A(g) ? (a.$$state.status = -1, g.call(b, c, d, e)) : (a.$$state.value = b, a.$$state.status = 1, k(a.$$state));
      } catch (h) {
        d(h);
      }
    }function m(a, b) {
      a.$$state.status || n(a, b);
    }function n(a, b) {
      a.$$state.value = b;a.$$state.status = 2;k(a.$$state);
    }function q(c, d) {
      var e = c.$$state.pending;0 >= c.$$state.status && e && e.length && a(function () {
        for (var a, c, g = 0, f = e.length; g < f; g++) {
          c = e[g][0];a = e[g][3];try {
            q(c, A(a) ? a(d) : d);
          } catch (h) {
            b(h);
          }
        }
      });
    }function G(a) {
      var b = new f();m(b, a);return b;
    }function r(a, b, c) {
      var d = null;try {
        A(c) && (d = c());
      } catch (e) {
        return G(e);
      }return d && A(d.then) ? d.then(function () {
        return b(a);
      }, G) : b(a);
    }function z(a, b, c, d) {
      var e = new f();h(e, a);return e.then(b, c, d);
    }function v(a) {
      if (!A(a)) throw s("norslvr", a);var b = new f();a(function (a) {
        h(b, a);
      }, function (a) {
        m(b, a);
      });return b;
    }var s = M("$q", TypeError),
        t = 0,
        u = [];P(f.prototype, { then: function then(a, b, c) {
        if (w(a) && w(b) && w(c)) return this;var d = new f();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && k(this.$$state);return d;
      }, "catch": function _catch(a) {
        return this.then(null, a);
      }, "finally": function _finally(a, b) {
        return this.then(function (b) {
          return r(b, y, a);
        }, function (b) {
          return r(b, G, a);
        }, b);
      } });var y = z;v.prototype = f.prototype;v.defer = c;v.reject = G;v.when = z;v.resolve = y;v.all = function (a) {
      var b = new f(),
          c = 0,
          d = I(a) ? [] : {};p(a, function (a, e) {
        c++;z(a).then(function (a) {
          d[e] = a;--c || h(b, d);
        }, function (a) {
          m(b, a);
        });
      });0 === c && h(b, d);return b;
    };v.race = function (a) {
      var b = c();p(a, function (a) {
        z(a).then(b.resolve, b.reject);
      });return b.promise;
    };return v;
  }function Zf() {
    this.$get = ["$window", "$timeout", function (a, b) {
      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
          c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
          e = !!d,
          f = e ? function (a) {
        var b = d(a);return function () {
          c(b);
        };
      } : function (a) {
        var c = b(a, 16.66, !1);
        return function () {
          b.cancel(c);
        };
      };f.supported = e;return f;
    }];
  }function Of() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++sb;this.$$ChildScope = null;
      }b.prototype = a;return b;
    }var b = 10,
        d = M("$rootScope"),
        c = null,
        e = null;this.digestTtl = function (a) {
      arguments.length && (b = a);return b;
    };this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, k) {
      function h(a) {
        a.currentScope.$$destroyed = !0;
      }function l(a) {
        9 === Ca && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
      }function m() {
        this.$id = ++sb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;
      }function n(a) {
        if (s.$$phase) throw d("inprog", s.$$phase);s.$$phase = a;
      }function q(a, b) {
        do {
          a.$$watchersCount += b;
        } while (a = a.$parent);
      }function G(a, b, c) {
        do {
          a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
        } while (a = a.$parent);
      }function r() {}function z() {
        for (; y.length;) {
          try {
            y.shift()();
          } catch (a) {
            f(a);
          }
        }e = null;
      }function v() {
        null === e && (e = k.defer(function () {
          s.$apply(z);
        }));
      }m.prototype = { constructor: m, $new: function $new(b, c) {
          var d;c = c || this;b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());
          d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(b || c !== this) && d.$on("$destroy", h);return d;
        }, $watch: function $watch(a, b, d, e) {
          var f = g(a);if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);var h = this,
              k = h.$$watchers,
              l = { fn: b, last: r, get: f, exp: e || a, eq: !!d };c = null;A(b) || (l.fn = C);k || (k = h.$$watchers = [], k.$$digestWatchIndex = -1);k.unshift(l);k.$$digestWatchIndex++;q(this, 1);return function () {
            var a = db(k, l);0 <= a && (q(h, -1), a < k.$$digestWatchIndex && k.$$digestWatchIndex--);c = null;
          };
        }, $watchGroup: function $watchGroup(a, b) {
          function c() {
            h = !1;k ? (k = !1, b(e, e, f)) : b(e, d, f);
          }var d = Array(a.length),
              e = Array(a.length),
              g = [],
              f = this,
              h = !1,
              k = !0;if (!a.length) {
            var l = !0;f.$evalAsync(function () {
              l && b(e, e, f);
            });return function () {
              l = !1;
            };
          }if (1 === a.length) return this.$watch(a[0], function (a, c, g) {
            e[0] = a;d[0] = c;b(e, a === c ? e : d, g);
          });p(a, function (a, b) {
            var k = f.$watch(a, function (a, g) {
              e[b] = a;d[b] = g;h || (h = !0, f.$evalAsync(c));
            });g.push(k);
          });return function () {
            for (; g.length;) {
              g.shift()();
            }
          };
        },
        $watchCollection: function $watchCollection(a, b) {
          function c(a) {
            e = a;var b, d, g, h;if (!w(e)) {
              if (E(e)) {
                if (xa(e)) for (f !== n && (f = n, p = f.length = 0, l++), a = e.length, p !== a && (l++, f.length = p = a), b = 0; b < a; b++) {
                  h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                } else {
                  f !== q && (f = q = {}, p = 0, l++);a = 0;for (b in e) {
                    ra.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (p++, f[b] = g, l++));
                  }if (p > a) for (b in l++, f) {
                    ra.call(e, b) || (p--, delete f[b]);
                  }
                }
              } else f !== e && (f = e, l++);return l;
            }
          }c.$stateful = !0;var d = this,
              e,
              f,
              h,
              k = 1 < b.length,
              l = 0,
              m = g(a, c),
              n = [],
              q = {},
              s = !0,
              p = 0;return this.$watch(m, function () {
            s ? (s = !1, b(e, e, d)) : b(e, h, d);if (k) if (E(e)) {
              if (xa(e)) {
                h = Array(e.length);for (var a = 0; a < e.length; a++) {
                  h[a] = e[a];
                }
              } else for (a in h = {}, e) {
                ra.call(e, a) && (h[a] = e[a]);
              }
            } else h = e;
          });
        }, $digest: function $digest() {
          var a,
              g,
              h,
              l,
              m,
              q,
              p,
              G = b,
              y,
              v = [],
              w,
              B;n("$digest");k.$$checkUrlChange();this === s && null !== e && (k.defer.cancel(e), z());c = null;do {
            p = !1;y = this;for (q = 0; q < t.length; q++) {
              try {
                B = t[q], l = B.fn, l(B.scope, B.locals);
              } catch (C) {
                f(C);
              }c = null;
            }t.length = 0;a: do {
              if (q = y.$$watchers) for (q.$$digestWatchIndex = q.length; q.$$digestWatchIndex--;) {
                try {
                  if (a = q[q.$$digestWatchIndex]) if (m = a.get, (g = m(y)) !== (h = a.last) && !(a.eq ? sa(g, h) : T(g) && T(h))) p = !0, c = a, a.last = a.eq ? pa(g, null) : g, l = a.fn, l(g, h === r ? g : h, y), 5 > G && (w = 4 - G, v[w] || (v[w] = []), v[w].push({ msg: A(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: g, oldVal: h }));else if (a === c) {
                    p = !1;break a;
                  }
                } catch (E) {
                  f(E);
                }
              }if (!(q = y.$$watchersCount && y.$$childHead || y !== this && y.$$nextSibling)) for (; y !== this && !(q = y.$$nextSibling);) {
                y = y.$parent;
              }
            } while (y = q);if ((p || t.length) && !G--) throw s.$$phase = null, d("infdig", b, v);
          } while (p || t.length);for (s.$$phase = null; J < u.length;) {
            try {
              u[J++]();
            } catch (D) {
              f(D);
            }
          }u.length = J = 0;k.$$checkUrlChange();
        }, $destroy: function $destroy() {
          if (!this.$$destroyed) {
            var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;this === s && k.$$applicationDestroyed();q(this, -this.$$watchersCount);for (var b in this.$$listenerCount) {
              G(this, this.$$listenerCount[b], b);
            }a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = C;this.$on = this.$watch = this.$watchGroup = function () {
              return C;
            };this.$$listeners = {};this.$$nextSibling = null;l(this);
          }
        }, $eval: function $eval(a, b) {
          return g(a)(this, b);
        }, $evalAsync: function $evalAsync(a, b) {
          s.$$phase || t.length || k.defer(function () {
            t.length && s.$digest();
          });t.push({ scope: this, fn: g(a), locals: b });
        }, $$postDigest: function $$postDigest(a) {
          u.push(a);
        },
        $apply: function $apply(a) {
          try {
            n("$apply");try {
              return this.$eval(a);
            } finally {
              s.$$phase = null;
            }
          } catch (b) {
            f(b);
          } finally {
            try {
              s.$digest();
            } catch (c) {
              throw f(c), c;
            }
          }
        }, $applyAsync: function $applyAsync(a) {
          function b() {
            c.$eval(a);
          }var c = this;a && y.push(b);a = g(a);v();
        }, $on: function $on(a, b) {
          var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do {
            d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
          } while (d = d.$parent);var e = this;return function () {
            var d = c.indexOf(b);-1 !== d && (c[d] = null, G(e, 1, a));
          };
        }, $emit: function $emit(a, b) {
          var c = [],
              d,
              e = this,
              g = !1,
              h = { name: a, targetScope: e, stopPropagation: function stopPropagation() {
              g = !0;
            }, preventDefault: function preventDefault() {
              h.defaultPrevented = !0;
            }, defaultPrevented: !1 },
              k = eb([h], arguments, 1),
              l,
              m;do {
            d = e.$$listeners[a] || c;h.currentScope = e;l = 0;for (m = d.length; l < m; l++) {
              if (d[l]) try {
                d[l].apply(null, k);
              } catch (n) {
                f(n);
              } else d.splice(l, 1), l--, m--;
            }if (g) return h.currentScope = null, h;e = e.$parent;
          } while (e);h.currentScope = null;return h;
        }, $broadcast: function $broadcast(a, b) {
          var c = this,
              d = this,
              e = { name: a, targetScope: this, preventDefault: function preventDefault() {
              e.defaultPrevented = !0;
            }, defaultPrevented: !1 };if (!this.$$listenerCount[a]) return e;for (var g = eb([e], arguments, 1), h, k; c = d;) {
            e.currentScope = c;d = c.$$listeners[a] || [];h = 0;for (k = d.length; h < k; h++) {
              if (d[h]) try {
                d[h].apply(null, g);
              } catch (l) {
                f(l);
              } else d.splice(h, 1), h--, k--;
            }if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) {
              c = c.$parent;
            }
          }e.currentScope = null;return e;
        } };var s = new m(),
          t = s.$$asyncQueue = [],
          u = s.$$postDigestQueue = [],
          y = s.$$applyAsyncQueue = [],
          J = 0;return s;
    }];
  }function Ge() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (b) {
      return t(b) ? (a = b, this) : a;
    };this.imgSrcSanitizationWhitelist = function (a) {
      return t(a) ? (b = a, this) : b;
    };this.$get = function () {
      return function (d, c) {
        var e = c ? b : a,
            f;f = ua(d).href;return "" === f || f.match(e) ? d : "unsafe:" + f;
      };
    };
  }function Fg(a) {
    if ("self" === a) return a;if (D(a)) {
      if (-1 < a.indexOf("***")) throw wa("iwcard", a);a = Md(a).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*");return new RegExp("^" + a + "$");
    }if (ab(a)) return new RegExp("^" + a.source + "$");throw wa("imatcher");
  }function Nd(a) {
    var b = [];t(a) && p(a, function (a) {
      b.push(Fg(a));
    });return b;
  }function Sf() {
    this.SCE_CONTEXTS = oa;var a = ["self"],
        b = [];this.resourceUrlWhitelist = function (b) {
      arguments.length && (a = Nd(b));return a;
    };this.resourceUrlBlacklist = function (a) {
      arguments.length && (b = Nd(a));return b;
    };this.$get = ["$injector", function (d) {
      function c(a, b) {
        return "self" === a ? zd(b) : !!a.exec(b.href);
      }function e(a) {
        var b = function b(a) {
          this.$$unwrapTrustedValue = function () {
            return a;
          };
        };a && (b.prototype = new a());b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue();
        };b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString();
        };return b;
      }var f = function f(a) {
        throw wa("unsafe");
      };d.has("$sanitize") && (f = d.get("$sanitize"));var g = e(),
          k = {};k[oa.HTML] = e(g);k[oa.CSS] = e(g);k[oa.URL] = e(g);k[oa.JS] = e(g);k[oa.RESOURCE_URL] = e(k[oa.URL]);return { trustAs: function trustAs(a, b) {
          var c = k.hasOwnProperty(a) ? k[a] : null;if (!c) throw wa("icontext", a, b);if (null === b || w(b) || "" === b) return b;if ("string" !== typeof b) throw wa("itype", a);return new c(b);
        }, getTrusted: function getTrusted(d, e) {
          if (null === e || w(e) || "" === e) return e;var g = k.hasOwnProperty(d) ? k[d] : null;if (g && e instanceof g) return e.$$unwrapTrustedValue();if (d === oa.RESOURCE_URL) {
            var g = ua(e.toString()),
                n,
                q,
                p = !1;n = 0;for (q = a.length; n < q; n++) {
              if (c(a[n], g)) {
                p = !0;break;
              }
            }if (p) for (n = 0, q = b.length; n < q; n++) {
              if (c(b[n], g)) {
                p = !1;break;
              }
            }if (p) return e;throw wa("insecurl", e.toString());
          }if (d === oa.HTML) return f(e);throw wa("unsafe");
        }, valueOf: function valueOf(a) {
          return a instanceof g ? a.$$unwrapTrustedValue() : a;
        } };
    }];
  }function Rf() {
    var a = !0;this.enabled = function (b) {
      arguments.length && (a = !!b);return a;
    };this.$get = ["$parse", "$sceDelegate", function (b, d) {
      if (a && 8 > Ca) throw wa("iequirks");var c = ja(oa);c.isEnabled = function () {
        return a;
      };c.trustAs = d.trustAs;c.getTrusted = d.getTrusted;c.valueOf = d.valueOf;a || (c.trustAs = c.getTrusted = function (a, b) {
        return b;
      }, c.valueOf = bb);c.parseAs = function (a, d) {
        var e = b(d);return e.literal && e.constant ? e : b(d, function (b) {
          return c.getTrusted(a, b);
        });
      };var e = c.parseAs,
          f = c.getTrusted,
          g = c.trustAs;p(oa, function (a, b) {
        var d = N(b);c[("parse_as_" + d).replace(Ac, jb)] = function (b) {
          return e(a, b);
        };c[("get_trusted_" + d).replace(Ac, jb)] = function (b) {
          return f(a, b);
        };c[("trust_as_" + d).replace(Ac, jb)] = function (b) {
          return g(a, b);
        };
      });return c;
    }];
  }function Tf() {
    this.$get = ["$window", "$document", function (a, b) {
      var d = {},
          c = !((!a.nw || !a.nw.process) && a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState,
          e = Z((/android (\d+)/.exec(N((a.navigator || {}).userAgent)) || [])[1]),
          f = /Boxee/i.test((a.navigator || {}).userAgent),
          g = b[0] || {},
          k = g.body && g.body.style,
          h = !1,
          l = !1;k && (h = !!("transition" in k || "webkitTransition" in k), l = !!("animation" in k || "webkitAnimation" in k));return { history: !(!c || 4 > e || f), hasEvent: function hasEvent(a) {
          if ("input" === a && Ca) return !1;if (w(d[a])) {
            var b = g.createElement("div");d[a] = "on" + a in b;
          }return d[a];
        }, csp: Ja(), transitions: h, animations: l, android: e };
    }];
  }function Vf() {
    var a;this.httpOptions = function (b) {
      return b ? (a = b, this) : a;
    };this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function (b, d, c, e, f) {
      function g(k, h) {
        g.totalPendingRequests++;if (!D(k) || w(d.get(k))) k = f.getTrustedResourceUrl(k);var l = c.defaults && c.defaults.transformResponse;I(l) ? l = l.filter(function (a) {
          return a !== qc;
        }) : l === qc && (l = null);return c.get(k, P({ cache: d, transformResponse: l }, a)).finally(function () {
          g.totalPendingRequests--;
        }).then(function (a) {
          d.put(k, a.data);return a.data;
        }, function (a) {
          h || (a = Gg("tpload", k, a.status, a.statusText), b(a));return e.reject(a);
        });
      }g.totalPendingRequests = 0;return g;
    }];
  }function Wf() {
    this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
      return { findBindings: function findBindings(a, b, d) {
          a = a.getElementsByClassName("ng-binding");var g = [];p(a, function (a) {
            var c = $.element(a).data("$binding");c && p(c, function (c) {
              d ? new RegExp("(^|\\s)" + Md(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 !== c.indexOf(b) && g.push(a);
            });
          });return g;
        }, findModels: function findModels(a, b, d) {
          for (var g = ["ng-", "data-ng-", "ng\\:"], k = 0; k < g.length; ++k) {
            var h = a.querySelectorAll("[" + g[k] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
            if (h.length) return h;
          }
        }, getLocation: function getLocation() {
          return d.url();
        }, setLocation: function setLocation(b) {
          b !== d.url() && (d.url(b), a.$digest());
        }, whenStable: function whenStable(a) {
          b.notifyWhenNoOutstandingRequests(a);
        } };
    }];
  }function Xf() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
      function f(f, h, l) {
        A(f) || (l = h, h = f, f = C);var m = ya.call(arguments, 3),
            n = t(l) && !l,
            q = (n ? c : d).defer(),
            p = q.promise,
            r;r = b.defer(function () {
          try {
            q.resolve(f.apply(null, m));
          } catch (b) {
            q.reject(b), e(b);
          } finally {
            delete g[p.$$timeoutId];
          }n || a.$apply();
        }, h);p.$$timeoutId = r;g[r] = q;return p;
      }var g = {};f.cancel = function (a) {
        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].promise.$$state.pur = !0, g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
      };return f;
    }];
  }function ua(a) {
    Ca && (X.setAttribute("href", a), a = X.href);X.setAttribute("href", a);return { href: X.href, protocol: X.protocol ? X.protocol.replace(/:$/, "") : "", host: X.host, search: X.search ? X.search.replace(/^\?/, "") : "", hash: X.hash ? X.hash.replace(/^#/, "") : "", hostname: X.hostname,
      port: X.port, pathname: "/" === X.pathname.charAt(0) ? X.pathname : "/" + X.pathname };
  }function zd(a) {
    a = D(a) ? ua(a) : a;return a.protocol === Od.protocol && a.host === Od.host;
  }function Yf() {
    this.$get = ka(u);
  }function Pd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }var d = a[0] || {},
        c = {},
        e = "";return function () {
      var a, g, k, h, l;try {
        a = d.cookie || "";
      } catch (m) {
        a = "";
      }if (a !== e) for (e = a, a = e.split("; "), c = {}, k = 0; k < a.length; k++) {
        g = a[k], h = g.indexOf("="), 0 < h && (l = b(g.substring(0, h)), w(c[l]) && (c[l] = b(g.substring(h + 1))));
      }return c;
    };
  }function bg() {
    this.$get = Pd;
  }function ed(a) {
    function b(d, c) {
      if (E(d)) {
        var e = {};p(d, function (a, c) {
          e[c] = b(c, a);
        });return e;
      }return a.factory(d + "Filter", c);
    }this.register = b;this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + "Filter");
      };
    }];b("currency", Qd);b("date", Rd);b("filter", Hg);b("json", Ig);b("limitTo", Jg);b("lowercase", Kg);b("number", Sd);b("orderBy", Td);b("uppercase", Lg);
  }function Hg() {
    return function (a, b, d, c) {
      if (!xa(a)) {
        if (null == a) return a;throw M("filter")("notarray", a);
      }c = c || "$";var e;switch (Bc(b)) {case "function":
          break;case "boolean":case "null":case "number":case "string":
          e = !0;case "object":
          b = Mg(b, d, c, e);break;default:
          return a;}return Array.prototype.filter.call(a, b);
    };
  }function Mg(a, b, d, c) {
    var e = E(a) && d in a;!0 === b ? b = sa : A(b) || (b = function b(a, _b4) {
      if (w(a)) return !1;if (null === a || null === _b4) return a === _b4;if (E(_b4) || E(a) && !Zb(a)) return !1;a = N("" + a);_b4 = N("" + _b4);return -1 !== a.indexOf(_b4);
    });return function (f) {
      return e && !E(f) ? ga(f, a[d], b, d, !1) : ga(f, a, b, d, c);
    };
  }function ga(a, b, d, c, e, f) {
    var g = Bc(a),
        k = Bc(b);if ("string" === k && "!" === b.charAt(0)) return !ga(a, b.substring(1), d, c, e);if (I(a)) return a.some(function (a) {
      return ga(a, b, d, c, e);
    });switch (g) {case "object":
        var h;if (e) {
          for (h in a) {
            if (h.charAt && "$" !== h.charAt(0) && ga(a[h], b, d, c, !0)) return !0;
          }return f ? !1 : ga(a, b, d, c, !1);
        }if ("object" === k) {
          for (h in b) {
            if (f = b[h], !A(f) && !w(f) && (g = h === c, !ga(g ? a : a[h], f, d, c, g, g))) return !1;
          }return !0;
        }return d(a, b);case "function":
        return !1;default:
        return d(a, b);}
  }function Bc(a) {
    return null === a ? "null" : typeof a === "undefined" ? "undefined" : _typeof(a);
  }function Qd(a) {
    var b = a.NUMBER_FORMATS;return function (a, c, e) {
      w(c) && (c = b.CURRENCY_SYM);w(e) && (e = b.PATTERNS[1].maxFrac);return null == a ? a : Ud(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
    };
  }function Sd(a) {
    var b = a.NUMBER_FORMATS;return function (a, c) {
      return null == a ? a : Ud(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }function Ng(a) {
    var b = 0,
        d,
        c,
        e,
        f,
        g;-1 < (c = a.indexOf(Vd)) && (a = a.replace(Vd, ""));0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);for (e = 0; a.charAt(e) === Cc; e++) {}
    if (e === (g = a.length)) d = [0], c = 1;else {
      for (g--; a.charAt(g) === Cc;) {
        g--;
      }c -= e;d = [];for (f = 0; e <= g; e++, f++) {
        d[f] = +a.charAt(e);
      }
    }c > Wd && (d = d.splice(0, Wd - 1), b = c - 1, c = 1);return { d: d, e: b, i: c };
  }function Og(a, b, d, c) {
    var e = a.d,
        f = e.length - a.i;b = w(b) ? Math.min(Math.max(d, f), c) : +b;d = b + a.i;c = e[d];if (0 < d) {
      e.splice(Math.max(a.i, d));for (var g = d; g < e.length; g++) {
        e[g] = 0;
      }
    } else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) {
      e[g] = 0;
    }if (5 <= c) if (0 > d - 1) {
      for (c = 0; c > d; c--) {
        e.unshift(0), a.i++;
      }e.unshift(1);a.i++;
    } else e[d - 1]++;for (; f < Math.max(0, b); f++) {
      e.push(0);
    }if (b = e.reduceRight(function (a, b, c, d) {
      b += a;d[c] = b % 10;return Math.floor(b / 10);
    }, 0)) e.unshift(b), a.i++;
  }function Ud(a, b, d, c, e) {
    if (!D(a) && !Y(a) || isNaN(a)) return "";var f = !isFinite(a),
        g = !1,
        k = Math.abs(a) + "",
        h = "";if (f) h = "\u221E";else {
      g = Ng(k);Og(g, e, b.minFrac, b.maxFrac);h = g.d;k = g.i;e = g.e;f = [];for (g = h.reduce(function (a, b) {
        return a && !b;
      }, !0); 0 > k;) {
        h.unshift(0), k++;
      }0 < k ? f = h.splice(k, h.length) : (f = h, h = [0]);k = [];for (h.length >= b.lgSize && k.unshift(h.splice(-b.lgSize, h.length).join("")); h.length > b.gSize;) {
        k.unshift(h.splice(-b.gSize, h.length).join(""));
      }h.length && k.unshift(h.join(""));h = k.join(d);f.length && (h += c + f.join(""));e && (h += "e+" + e);
    }return 0 > a && !g ? b.negPre + h + b.negSuf : b.posPre + h + b.posSuf;
  }function Mb(a, b, d, c) {
    var e = "";if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");for (a = "" + a; a.length < b;) {
      a = Cc + a;
    }d && (a = a.substr(a.length - b));return e + a;
  }function da(a, b, d, c, e) {
    d = d || 0;return function (f) {
      f = f["get" + a]();if (0 < d || f > -d) f += d;0 === f && -12 === d && (f = 12);return Mb(f, b, c, e);
    };
  }function ob(a, b, d) {
    return function (c, e) {
      var f = c["get" + a](),
          g = wb((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);return e[g][f];
    };
  }function Xd(a) {
    var b = new Date(a, 0, 1).getDay();return new Date(a, 0, (4 >= b ? 5 : 12) - b);
  }function Yd(a) {
    return function (b) {
      var d = Xd(b.getFullYear());b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;b = 1 + Math.round(b / 6048E5);return Mb(b, a);
    };
  }function Dc(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
  }function Rd(a) {
    function b(a) {
      var b;if (b = a.match(d)) {
        a = new Date(0);var f = 0,
            g = 0,
            k = b[8] ? a.setUTCFullYear : a.setFullYear,
            h = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = Z(b[9] + b[10]), g = Z(b[9] + b[11]));k.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));f = Z(b[4] || 0) - f;g = Z(b[5] || 0) - g;k = Z(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));h.call(a, f, g, k, b);
      }return a;
    }var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, d, f) {
      var g = "",
          k = [],
          h,
          l;d = d || "mediumDate";d = a.DATETIME_FORMATS[d] || d;D(c) && (c = Pg.test(c) ? Z(c) : b(c));Y(c) && (c = new Date(c));if (!ea(c) || !isFinite(c.getTime())) return c;
      for (; d;) {
        (l = Qg.exec(d)) ? (k = eb(k, l, 1), d = k.pop()) : (k.push(d), d = null);
      }var m = c.getTimezoneOffset();f && (m = Rc(f, m), c = bc(c, f, !0));p(k, function (b) {
        h = Rg[b];g += h ? h(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });return g;
    };
  }function Ig() {
    return function (a, b) {
      w(b) && (b = 2);return fb(a, b);
    };
  }function Jg() {
    return function (a, b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : Z(b);if (T(b)) return a;Y(a) && (a = a.toString());if (!xa(a)) return a;d = !d || isNaN(d) ? 0 : Z(d);d = 0 > d ? Math.max(0, a.length + d) : d;return 0 <= b ? Ec(a, d, d + b) : 0 === d ? Ec(a, b, a.length) : Ec(a, Math.max(0, d + b), d);
    };
  }function Ec(a, b, d) {
    return D(a) ? a.slice(b, d) : ya.call(a, b, d);
  }function Td(a) {
    function b(b) {
      return b.map(function (b) {
        var c = 1,
            d = bb;if (A(b)) d = b;else if (D(b)) {
          if ("+" === b.charAt(0) || "-" === b.charAt(0)) c = "-" === b.charAt(0) ? -1 : 1, b = b.substring(1);if ("" !== b && (d = a(b), d.constant)) var e = d(),
              d = function d(a) {
            return a[e];
          };
        }return { get: d, descending: c };
      });
    }function d(a) {
      switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "number":case "boolean":case "string":
          return !0;default:
          return !1;}
    }
    function c(a, b) {
      var c = 0,
          d = a.type,
          h = b.type;if (d === h) {
        var h = a.value,
            l = b.value;"string" === d ? (h = h.toLowerCase(), l = l.toLowerCase()) : "object" === d && (E(h) && (h = a.index), E(l) && (l = b.index));h !== l && (c = h < l ? -1 : 1);
      } else c = d < h ? -1 : 1;return c;
    }return function (a, f, g, k) {
      if (null == a) return a;if (!xa(a)) throw M("orderBy")("notarray", a);I(f) || (f = [f]);0 === f.length && (f = ["+"]);var h = b(f),
          l = g ? -1 : 1,
          m = A(k) ? k : c;a = Array.prototype.map.call(a, function (a, b) {
        return { value: a, tieBreaker: { value: b, type: "number", index: b }, predicateValues: h.map(function (c) {
            var e = c.get(a);c = typeof e === "undefined" ? "undefined" : _typeof(e);if (null === e) c = "string", e = "null";else if ("object" === c) a: {
              if (A(e.valueOf) && (e = e.valueOf(), d(e))) break a;Zb(e) && (e = e.toString(), d(e));
            }return { value: e, type: c, index: b };
          }) };
      });a.sort(function (a, b) {
        for (var d = 0, e = h.length; d < e; d++) {
          var g = m(a.predicateValues[d], b.predicateValues[d]);if (g) return g * h[d].descending * l;
        }return (m(a.tieBreaker, b.tieBreaker) || c(a.tieBreaker, b.tieBreaker)) * l;
      });return a = a.map(function (a) {
        return a.value;
      });
    };
  }function Qa(a) {
    A(a) && (a = { link: a });a.restrict = a.restrict || "AC";
    return ka(a);
  }function Nb(a, b, d, c, e) {
    this.$$controls = [];this.$error = {};this.$$success = {};this.$pending = void 0;this.$name = e(b.name || b.ngForm || "")(d);this.$dirty = !1;this.$valid = this.$pristine = !0;this.$submitted = this.$invalid = !1;this.$$parentForm = Ob;this.$$element = a;this.$$animate = c;Zd(this);
  }function Zd(a) {
    a.$$classCache = {};a.$$classCache[$d] = !(a.$$classCache[pb] = a.$$element.hasClass(pb));
  }function ae(a) {
    function b(a, b, c) {
      c && !a.$$classCache[b] ? (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) : !c && a.$$classCache[b] && (a.$$animate.removeClass(a.$$element, b), a.$$classCache[b] = !1);
    }function d(a, c, d) {
      c = c ? "-" + Vc(c, "-") : "";b(a, pb + c, !0 === d);b(a, $d + c, !1 === d);
    }var c = a.set,
        e = a.unset;a.clazz.prototype.$setValidity = function (a, g, k) {
      w(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, k)) : (this.$pending && e(this.$pending, a, k), be(this.$pending) && (this.$pending = void 0));Na(g) ? g ? (e(this.$error, a, k), c(this.$$success, a, k)) : (c(this.$error, a, k), e(this.$$success, a, k)) : (e(this.$error, a, k), e(this.$$success, a, k));this.$pending ? (b(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, d(this, "", null)) : (b(this, "ng-pending", !1), this.$valid = be(this.$error), this.$invalid = !this.$valid, d(this, "", this.$valid));g = this.$pending && this.$pending[a] ? void 0 : this.$error[a] ? !1 : this.$$success[a] ? !0 : null;d(this, a, g);this.$$parentForm.$setValidity(a, g, this);
    };
  }function be(a) {
    if (a) for (var b in a) {
      if (a.hasOwnProperty(b)) return !1;
    }return !0;
  }function Fc(a) {
    a.$formatters.push(function (b) {
      return a.$isEmpty(b) ? b : b.toString();
    });
  }function Wa(a, b, d, c, e, f) {
    var g = N(b[0].type);if (!e.android) {
      var k = !1;b.on("compositionstart", function () {
        k = !0;
      });b.on("compositionend", function () {
        k = !1;l();
      });
    }var h,
        l = function l(a) {
      h && (f.defer.cancel(h), h = null);if (!k) {
        var e = b.val();a = a && a.type;"password" === g || d.ngTrim && "false" === d.ngTrim || (e = Q(e));(c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
      }
    };if (e.hasEvent("input")) b.on("input", l);else {
      var m = function m(a, b, c) {
        h || (h = f.defer(function () {
          h = null;b && b.value === c || l(a);
        }));
      };b.on("keydown", function (a) {
        var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });if (e.hasEvent("paste")) b.on("paste cut", m);
    }b.on("change", l);if (ce[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
      if (!h) {
        var b = this.validity,
            c = b.badInput,
            d = b.typeMismatch;h = f.defer(function () {
          h = null;b.badInput === c && b.typeMismatch === d || l(a);
        });
      }
    });c.$render = function () {
      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;b.val() !== a && b.val(a);
    };
  }function Pb(a, b) {
    return function (d, c) {
      var e, f;if (ea(d)) return d;
      if (D(d)) {
        '"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));if (Sg.test(d)) return new Date(d);a.lastIndex = 0;if (e = a.exec(d)) return e.shift(), f = c ? { yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, p(e, function (a, c) {
          c < b.length && (f[b[c]] = +a);
        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
      }return NaN;
    };
  }function qb(a, b, d, c) {
    return function (e, f, g, k, h, l, m) {
      function n(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }function q(a) {
        return t(a) && !ea(a) ? d(a) || void 0 : a;
      }Gc(e, f, g, k);Wa(e, f, g, k, h, l);var p = k && k.$options.getOption("timezone"),
          r;k.$$parserName = a;k.$parsers.push(function (a) {
        if (k.$isEmpty(a)) return null;if (b.test(a)) return a = d(a, r), p && (a = bc(a, p)), a;
      });k.$formatters.push(function (a) {
        if (a && !ea(a)) throw rb("datefmt", a);if (n(a)) return (r = a) && p && (r = bc(r, p, !0)), m("date")(a, c, p);r = null;return "";
      });if (t(g.min) || g.ngMin) {
        var z;k.$validators.min = function (a) {
          return !n(a) || w(z) || d(a) >= z;
        };g.$observe("min", function (a) {
          z = q(a);k.$validate();
        });
      }if (t(g.max) || g.ngMax) {
        var v;k.$validators.max = function (a) {
          return !n(a) || w(v) || d(a) <= v;
        };g.$observe("max", function (a) {
          v = q(a);k.$validate();
        });
      }
    };
  }function Gc(a, b, d, c) {
    (c.$$hasNativeValidators = E(b[0].validity)) && c.$parsers.push(function (a) {
      var c = b.prop("validity") || {};return c.badInput || c.typeMismatch ? void 0 : a;
    });
  }function de(a) {
    a.$$parserName = "number";a.$parsers.push(function (b) {
      if (a.$isEmpty(b)) return null;if (Tg.test(b)) return parseFloat(b);
    });
    a.$formatters.push(function (b) {
      if (!a.$isEmpty(b)) {
        if (!Y(b)) throw rb("numfmt", b);b = b.toString();
      }return b;
    });
  }function Xa(a) {
    t(a) && !Y(a) && (a = parseFloat(a));return T(a) ? void 0 : a;
  }function Hc(a) {
    var b = a.toString(),
        d = b.indexOf(".");return -1 === d ? -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1;
  }function ee(a, b, d) {
    a = Number(a);var c = (a | 0) !== a,
        e = (b | 0) !== b,
        f = (d | 0) !== d;if (c || e || f) {
      var g = c ? Hc(a) : 0,
          k = e ? Hc(b) : 0,
          h = f ? Hc(d) : 0,
          g = Math.max(g, k, h),
          g = Math.pow(10, g);a *= g;b *= g;d *= g;c && (a = Math.round(a));e && (b = Math.round(b));
      f && (d = Math.round(d));
    }return 0 === (a - b) % d;
  }function fe(a, b, d, c, e) {
    if (t(c)) {
      a = a(c);if (!a.constant) throw rb("constexpr", d, c);return a(b);
    }return e;
  }function Ic(a, b) {
    function d(a, b) {
      if (!a || !a.length) return [];if (!b || !b.length) return a;var c = [],
          d = 0;a: for (; d < a.length; d++) {
        for (var e = a[d], f = 0; f < b.length; f++) {
          if (e === b[f]) continue a;
        }c.push(e);
      }return c;
    }function c(a) {
      var b = a;I(a) ? b = a.map(c).join(" ") : E(a) && (b = Object.keys(a).filter(function (b) {
        return a[b];
      }).join(" "));return b;
    }function e(a) {
      var b = a;if (I(a)) b = a.map(e);else if (E(a)) {
        var c = !1,
            b = Object.keys(a).filter(function (b) {
          b = a[b];!c && w(b) && (c = !0);return b;
        });c && b.push(void 0);
      }return b;
    }a = "ngClass" + a;var f;return ["$parse", function (g) {
      return { restrict: "AC", link: function link(k, h, l) {
          function m(a, b) {
            var c = [];p(a, function (a) {
              if (0 < b || s[a]) s[a] = (s[a] || 0) + b, s[a] === +(0 < b) && c.push(a);
            });return c.join(" ");
          }function n(a) {
            if (a === b) {
              var c = w,
                  c = m(c && c.split(" "), 1);l.$addClass(c);
            } else c = w, c = m(c && c.split(" "), -1), l.$removeClass(c);u = a;
          }function q(a) {
            a = c(a);a !== w && r(a);
          }function r(a) {
            if (u === b) {
              var c = w && w.split(" "),
                  e = a && a.split(" "),
                  g = d(c, e),
                  c = d(e, c),
                  g = m(g, -1),
                  c = m(c, 1);l.$addClass(c);l.$removeClass(g);
            }w = a;
          }var t = l[a].trim(),
              z = ":" === t.charAt(0) && ":" === t.charAt(1),
              t = g(t, z ? e : c),
              v = z ? q : r,
              s = h.data("$classCounts"),
              u = !0,
              w;s || (s = S(), h.data("$classCounts", s));"ngClass" !== a && (f || (f = g("$index", function (a) {
            return a & 1;
          })), k.$watch(f, n));k.$watch(t, v, z);
        } };
    }];
  }function Qb(a, b, d, c, e, f, g, k, h) {
    this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = void 0;this.$validators = {};this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = void 0;this.$name = h(d.name || "", !1)(a);this.$$parentForm = Ob;this.$options = Rb;this.$$parsedNgModel = e(d.ngModel);this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;this.$$ngModelGet = this.$$parsedNgModel;this.$$ngModelSet = this.$$parsedNgModelAssign;this.$$pendingDebounce = null;this.$$parserValid = void 0;this.$$currentValidationRunId = 0;Object.defineProperty(this, "$$scope", { value: a });this.$$attr = d;this.$$element = c;this.$$animate = f;this.$$timeout = g;this.$$parse = e;this.$$q = k;this.$$exceptionHandler = b;Zd(this);Ug(this);
  }function Ug(a) {
    a.$$scope.$watch(function (b) {
      b = a.$$ngModelGet(b);if (b !== a.$modelValue && (a.$modelValue === a.$modelValue || b === b)) {
        a.$modelValue = a.$$rawModelValue = b;a.$$parserValid = void 0;for (var d = a.$formatters, c = d.length, e = b; c--;) {
          e = d[c](e);
        }a.$viewValue !== e && (a.$$updateEmptyClasses(e), a.$viewValue = a.$$lastCommittedViewValue = e, a.$render(), a.$$runValidators(a.$modelValue, a.$viewValue, C));
      }return b;
    });
  }function Jc(a) {
    this.$$options = a;
  }function ge(a, b) {
    p(b, function (b, c) {
      t(a[c]) || (a[c] = b);
    });
  }function Ga(a, b) {
    a.prop("selected", b);a.attr("selected", b);
  }var Lc = { objectMaxDepth: 5 },
      Vg = /^\/(.+)\/([a-z]*)$/,
      ra = Object.prototype.hasOwnProperty,
      N = function N(a) {
    return D(a) ? a.toLowerCase() : a;
  },
      wb = function wb(a) {
    return D(a) ? a.toUpperCase() : a;
  },
      Ca,
      B,
      la,
      ya = [].slice,
      ug = [].splice,
      Wg = [].push,
      ha = Object.prototype.toString,
      Oc = Object.getPrototypeOf,
      qa = M("ng"),
      $ = u.angular || (u.angular = {}),
      ec,
      sb = 0;Ca = u.document.documentMode;var T = Number.isNaN || function (a) {
    return a !== a;
  };C.$inject = [];bb.$inject = [];var I = Array.isArray,
      se = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
      Q = function Q(a) {
    return D(a) ? a.trim() : a;
  },
      Md = function Md(a) {
    return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  },
      Ja = function Ja() {
    if (!t(Ja.rules)) {
      var a = u.document.querySelector("[ng-csp]") || u.document.querySelector("[data-ng-csp]");
      if (a) {
        var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");Ja.rules = { noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"), noInlineStyle: !b || -1 !== b.indexOf("no-inline-style") };
      } else {
        a = Ja;try {
          new Function(""), b = !1;
        } catch (d) {
          b = !0;
        }a.rules = { noUnsafeEval: b, noInlineStyle: !1 };
      }
    }return Ja.rules;
  },
      tb = function tb() {
    if (t(tb.name_)) return tb.name_;var a,
        b,
        d = Ha.length,
        c,
        e;for (b = 0; b < d; ++b) {
      if (c = Ha[b], a = u.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
        e = a.getAttribute(c + "jq");break;
      }
    }return tb.name_ = e;
  },
      ue = /:/g,
      Ha = ["ng-", "data-ng-", "ng:", "x-ng-"],
      xe = function (a) {
    var b = a.currentScript;if (!b) return !0;if (!(b instanceof u.HTMLScriptElement || b instanceof u.SVGScriptElement)) return !1;b = b.attributes;return [b.getNamedItem("src"), b.getNamedItem("href"), b.getNamedItem("xlink:href")].every(function (b) {
      if (!b) return !0;if (!b.value) return !1;var c = a.createElement("a");c.href = b.value;if (a.location.origin === c.origin) return !0;switch (c.protocol) {case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":
          return !0;
        default:
          return !1;}
    });
  }(u.document),
      Ae = /[A-Z]/g,
      Wc = !1,
      Oa = 3,
      Fe = { full: "1.6.6", major: 1, minor: 6, dot: 6, codeName: "interdimensional-cable" };U.expando = "ng339";var kb = U.cache = {},
      gg = 1;U._data = function (a) {
    return this.cache[a[this.expando]] || {};
  };var cg = /-([a-z])/g,
      Xg = /^-ms-/,
      Bb = { mouseleave: "mouseout", mouseenter: "mouseover" },
      hc = M("jqLite"),
      fg = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      gc = /<|&#?\w+;/,
      dg = /<([\w:-]+)/,
      eg = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      aa = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };aa.optgroup = aa.option;aa.tbody = aa.tfoot = aa.colgroup = aa.caption = aa.thead;aa.th = aa.td;var lg = u.Node.prototype.contains || function (a) {
    return !!(this.compareDocumentPosition(a) & 16);
  },
      Sa = U.prototype = { ready: gd, toString: function toString() {
      var a = [];p(this, function (b) {
        a.push("" + b);
      });return "[" + a.join(", ") + "]";
    },
    eq: function eq(a) {
      return 0 <= a ? B(this[a]) : B(this[this.length + a]);
    }, length: 0, push: Wg, sort: [].sort, splice: [].splice },
      Hb = {};p("multiple selected checked disabled readOnly required open".split(" "), function (a) {
    Hb[N(a)] = a;
  });var ld = {};p("input select option textarea button form details".split(" "), function (a) {
    ld[a] = !0;
  });var sd = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern", ngStep: "step" };p({ data: lc, removeData: kc, hasData: function hasData(a) {
      for (var b in kb[a.ng339]) {
        return !0;
      }return !1;
    }, cleanData: function cleanData(a) {
      for (var b = 0, d = a.length; b < d; b++) {
        kc(a[b]);
      }
    } }, function (a, b) {
    U[b] = a;
  });p({ data: lc, inheritedData: Fb, scope: function scope(a) {
      return B.data(a, "$scope") || Fb(a.parentNode || a, ["$isolateScope", "$scope"]);
    }, isolateScope: function isolateScope(a) {
      return B.data(a, "$isolateScope") || B.data(a, "$isolateScopeNoTemplate");
    }, controller: id, injector: function injector(a) {
      return Fb(a, "$injector");
    }, removeAttr: function removeAttr(a, b) {
      a.removeAttribute(b);
    }, hasClass: Cb, css: function css(a, b, d) {
      b = yb(b.replace(Xg, "ms-"));if (t(d)) a.style[b] = d;else return a.style[b];
    }, attr: function attr(a, b, d) {
      var c = a.nodeType;if (c !== Oa && 2 !== c && 8 !== c && a.getAttribute) {
        var c = N(b),
            e = Hb[c];if (t(d)) null === d || !1 === d && e ? a.removeAttribute(b) : a.setAttribute(b, e ? c : d);else return a = a.getAttribute(b), e && null !== a && (a = c), null === a ? void 0 : a;
      }
    }, prop: function prop(a, b, d) {
      if (t(d)) a[b] = d;else return a[b];
    }, text: function () {
      function a(a, d) {
        if (w(d)) {
          var c = a.nodeType;return 1 === c || c === Oa ? a.textContent : "";
        }a.textContent = d;
      }a.$dv = "";return a;
    }(), val: function val(a, b) {
      if (w(b)) {
        if (a.multiple && "select" === za(a)) {
          var d = [];p(a.options, function (a) {
            a.selected && d.push(a.value || a.text);
          });return d;
        }return a.value;
      }a.value = b;
    }, html: function html(a, b) {
      if (w(b)) return a.innerHTML;zb(a, !0);a.innerHTML = b;
    }, empty: jd }, function (a, b) {
    U.prototype[b] = function (b, c) {
      var e,
          f,
          g = this.length;if (a !== jd && w(2 === a.length && a !== Cb && a !== id ? b : c)) {
        if (E(b)) {
          for (e = 0; e < g; e++) {
            if (a === lc) a(this[e], b);else for (f in b) {
              a(this[e], f, b[f]);
            }
          }return this;
        }e = a.$dv;g = w(e) ? Math.min(g, 1) : g;for (f = 0; f < g; f++) {
          var k = a(this[f], b, c);e = e ? e + k : k;
        }return e;
      }for (e = 0; e < g; e++) {
        a(this[e], b, c);
      }return this;
    };
  });p({ removeData: kc, on: function on(a, b, d, c) {
      if (t(c)) throw hc("onargs");if (fc(a)) {
        c = Ab(a, !0);var e = c.events,
            f = c.handle;f || (f = c.handle = ig(a, e));c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];for (var g = c.length, k = function k(b, c, g) {
          var k = e[b];k || (k = e[b] = [], k.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f));k.push(d);
        }; g--;) {
          b = c[g], Bb[b] ? (k(Bb[b], kg), k(b, void 0, !0)) : k(b);
        }
      }
    }, off: hd, one: function one(a, b, d) {
      a = B(a);a.on(b, function e() {
        a.off(b, d);a.off(b, e);
      });a.on(b, d);
    }, replaceWith: function replaceWith(a, b) {
      var d,
          c = a.parentNode;zb(a);p(new U(b), function (b) {
        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);d = b;
      });
    }, children: function children(a) {
      var b = [];p(a.childNodes, function (a) {
        1 === a.nodeType && b.push(a);
      });return b;
    }, contents: function contents(a) {
      return a.contentDocument || a.childNodes || [];
    }, append: function append(a, b) {
      var d = a.nodeType;if (1 === d || 11 === d) {
        b = new U(b);for (var d = 0, c = b.length; d < c; d++) {
          a.appendChild(b[d]);
        }
      }
    }, prepend: function prepend(a, b) {
      if (1 === a.nodeType) {
        var d = a.firstChild;p(new U(b), function (b) {
          a.insertBefore(b, d);
        });
      }
    },
    wrap: function wrap(a, b) {
      var d = B(b).eq(0).clone()[0],
          c = a.parentNode;c && c.replaceChild(d, a);d.appendChild(a);
    }, remove: Gb, detach: function detach(a) {
      Gb(a, !0);
    }, after: function after(a, b) {
      var d = a,
          c = a.parentNode;if (c) {
        b = new U(b);for (var e = 0, f = b.length; e < f; e++) {
          var g = b[e];c.insertBefore(g, d.nextSibling);d = g;
        }
      }
    }, addClass: Eb, removeClass: Db, toggleClass: function toggleClass(a, b, d) {
      b && p(b.split(" "), function (b) {
        var e = d;w(e) && (e = !Cb(a, b));(e ? Eb : Db)(a, b);
      });
    }, parent: function parent(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    }, next: function next(a) {
      return a.nextElementSibling;
    },
    find: function find(a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
    }, clone: jc, triggerHandler: function triggerHandler(a, b, d) {
      var c,
          e,
          f = b.type || b,
          g = Ab(a);if (g = (g = g && g.events) && g[f]) c = { preventDefault: function preventDefault() {
          this.defaultPrevented = !0;
        }, isDefaultPrevented: function isDefaultPrevented() {
          return !0 === this.defaultPrevented;
        }, stopImmediatePropagation: function stopImmediatePropagation() {
          this.immediatePropagationStopped = !0;
        }, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
          return !0 === this.immediatePropagationStopped;
        }, stopPropagation: C, type: f, target: a }, b.type && (c = P(c, b)), b = ja(g), e = d ? [c].concat(d) : [c], p(b, function (b) {
        c.isImmediatePropagationStopped() || b.apply(a, e);
      });
    } }, function (a, b) {
    U.prototype[b] = function (b, c, e) {
      for (var f, g = 0, k = this.length; g < k; g++) {
        w(f) ? (f = a(this[g], b, c, e), t(f) && (f = B(f))) : ic(f, a(this[g], b, c, e));
      }return t(f) ? f : this;
    };
  });U.prototype.bind = U.prototype.on;U.prototype.unbind = U.prototype.off;var Yg = Object.create(null);md.prototype = { _idx: function _idx(a) {
      if (a === this._lastKey) return this._lastIndex;this._lastKey = a;return this._lastIndex = this._keys.indexOf(a);
    }, _transformKey: function _transformKey(a) {
      return T(a) ? Yg : a;
    }, get: function get(a) {
      a = this._transformKey(a);a = this._idx(a);if (-1 !== a) return this._values[a];
    }, set: function set(a, b) {
      a = this._transformKey(a);var d = this._idx(a);-1 === d && (d = this._lastIndex = this._keys.length);this._keys[d] = a;this._values[d] = b;
    }, delete: function _delete(a) {
      a = this._transformKey(a);a = this._idx(a);if (-1 === a) return !1;this._keys.splice(a, 1);this._values.splice(a, 1);this._lastKey = NaN;this._lastIndex = -1;return !0;
    } };var Ib = md,
      ag = [function () {
    this.$get = [function () {
      return Ib;
    }];
  }],
      ng = /^([^(]+?)=>/,
      og = /^[^(]*\(\s*([^)]*)\)/m,
      Zg = /,/,
      $g = /^\s*(_?)(\S+?)\1\s*$/,
      mg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      Ba = M("$injector");hb.$$annotate = function (a, b, d) {
    var c;if ("function" === typeof a) {
      if (!(c = a.$inject)) {
        c = [];if (a.length) {
          if (b) throw D(d) && d || (d = a.name || pg(a)), Ba("strictdi", d);b = nd(a);p(b[1].split(Zg), function (a) {
            a.replace($g, function (a, b, d) {
              c.push(d);
            });
          });
        }a.$inject = c;
      }
    } else I(a) ? (b = a.length - 1, ub(a[b], "fn"), c = a.slice(0, b)) : ub(a, "fn", !0);return c;
  };var he = M("$animate"),
      sf = function sf() {
    this.$get = C;
  },
      tf = function tf() {
    var a = new Ib(),
        b = [];this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
      function e(a, b, c) {
        var d = !1;b && (b = D(b) ? b.split(" ") : I(b) ? b : [], p(b, function (b) {
          b && (d = !0, a[b] = c);
        }));return d;
      }function f() {
        p(b, function (b) {
          var c = a.get(b);if (c) {
            var d = qg(b.attr("class")),
                e = "",
                f = "";p(c, function (a, b) {
              a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
            });p(b, function (a) {
              e && Eb(a, e);f && Db(a, f);
            });a.delete(b);
          }
        });b.length = 0;
      }return { enabled: C, on: C, off: C, pin: C, push: function push(g, k, h, l) {
          l && l();h = h || {};h.from && g.css(h.from);h.to && g.css(h.to);if (h.addClass || h.removeClass) if (k = h.addClass, l = h.removeClass, h = a.get(g) || {}, k = e(h, k, !0), l = e(h, l, !1), k || l) a.set(g, h), b.push(g), 1 === b.length && c.$$postDigest(f);g = new d();g.complete();return g;
        } };
    }];
  },
      qf = ["$provide", function (a) {
    var b = this,
        d = null,
        c = null;this.$$registeredAnimations = Object.create(null);this.register = function (c, d) {
      if (c && "." !== c.charAt(0)) throw he("notcsel", c);var g = c + "-animation";b.$$registeredAnimations[c.substr(1)] = g;a.factory(g, d);
    };this.customFilter = function (a) {
      1 === arguments.length && (c = A(a) ? a : null);return c;
    };
    this.classNameFilter = function (a) {
      if (1 === arguments.length && (d = a instanceof RegExp ? a : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString())) throw d = null, he("nongcls", "ng-animate");return d;
    };this.$get = ["$$animateQueue", function (a) {
      function b(a, c, d) {
        if (d) {
          var e;a: {
            for (e = 0; e < d.length; e++) {
              var f = d[e];if (1 === f.nodeType) {
                e = f;break a;
              }
            }e = void 0;
          }!e || e.parentNode || e.previousElementSibling || (d = null);
        }d ? d.after(a) : c.prepend(a);
      }return { on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function cancel(a) {
          a.end && a.end();
        },
        enter: function enter(c, d, h, l) {
          d = d && B(d);h = h && B(h);d = d || h.parent();b(c, d, h);return a.push(c, "enter", Ka(l));
        }, move: function move(c, d, h, l) {
          d = d && B(d);h = h && B(h);d = d || h.parent();b(c, d, h);return a.push(c, "move", Ka(l));
        }, leave: function leave(b, c) {
          return a.push(b, "leave", Ka(c), function () {
            b.remove();
          });
        }, addClass: function addClass(b, c, d) {
          d = Ka(d);d.addClass = lb(d.addclass, c);return a.push(b, "addClass", d);
        }, removeClass: function removeClass(b, c, d) {
          d = Ka(d);d.removeClass = lb(d.removeClass, c);return a.push(b, "removeClass", d);
        }, setClass: function setClass(b, c, d, f) {
          f = Ka(f);
          f.addClass = lb(f.addClass, c);f.removeClass = lb(f.removeClass, d);return a.push(b, "setClass", f);
        }, animate: function animate(b, c, d, f, m) {
          m = Ka(m);m.from = m.from ? P(m.from, c) : c;m.to = m.to ? P(m.to, d) : d;m.tempClasses = lb(m.tempClasses, f || "ng-inline-animate");return a.push(b, "animate", m);
        } };
    }];
  }],
      vf = function vf() {
    this.$get = ["$$rAF", function (a) {
      function b(b) {
        d.push(b);1 < d.length || a(function () {
          for (var a = 0; a < d.length; a++) {
            d[a]();
          }d = [];
        });
      }var d = [];return function () {
        var a = !1;b(function () {
          a = !0;
        });return function (d) {
          a ? d() : b(d);
        };
      };
    }];
  },
      uf = function uf() {
    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (a, b, d, c, e) {
      function f(a) {
        this.setHost(a);var b = d();this._doneCallbacks = [];this._tick = function (a) {
          c() ? e(a, 0, !1) : b(a);
        };this._state = 0;
      }f.chain = function (a, b) {
        function c() {
          if (d === a.length) b(!0);else a[d](function (a) {
            !1 === a ? b(!1) : (d++, c());
          });
        }var d = 0;c();
      };f.all = function (a, b) {
        function c(f) {
          e = e && f;++d === a.length && b(e);
        }var d = 0,
            e = !0;p(a, function (a) {
          a.done(c);
        });
      };f.prototype = { setHost: function setHost(a) {
          this.host = a || {};
        }, done: function done(a) {
          2 === this._state ? a() : this._doneCallbacks.push(a);
        }, progress: C, getPromise: function getPromise() {
          if (!this.promise) {
            var b = this;this.promise = a(function (a, c) {
              b.done(function (b) {
                !1 === b ? c() : a();
              });
            });
          }return this.promise;
        }, then: function then(a, b) {
          return this.getPromise().then(a, b);
        }, "catch": function _catch(a) {
          return this.getPromise()["catch"](a);
        }, "finally": function _finally(a) {
          return this.getPromise()["finally"](a);
        }, pause: function pause() {
          this.host.pause && this.host.pause();
        }, resume: function resume() {
          this.host.resume && this.host.resume();
        }, end: function end() {
          this.host.end && this.host.end();this._resolve(!0);
        }, cancel: function cancel() {
          this.host.cancel && this.host.cancel();this._resolve(!1);
        }, complete: function complete(a) {
          var b = this;0 === b._state && (b._state = 1, b._tick(function () {
            b._resolve(a);
          }));
        }, _resolve: function _resolve(a) {
          2 !== this._state && (p(this._doneCallbacks, function (b) {
            b(a);
          }), this._doneCallbacks.length = 0, this._state = 2);
        } };return f;
    }];
  },
      rf = function rf() {
    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
      return function (b, e) {
        function f() {
          a(function () {
            g.addClass && (b.addClass(g.addClass), g.addClass = null);g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);g.to && (b.css(g.to), g.to = null);k || h.complete();k = !0;
          });return h;
        }var g = e || {};g.$$prepared || (g = pa(g));g.cleanupStyles && (g.from = g.to = null);g.from && (b.css(g.from), g.from = null);var k,
            h = new d();return { start: f, end: f };
      };
    }];
  },
      ba = M("$compile"),
      oc = new function () {}();Yc.$inject = ["$provide", "$$sanitizeUriProvider"];Kb.prototype.isFirstChange = function () {
    return this.previousValue === oc;
  };var od = /^((?:x|data)[:\-_])/i,
      tg = /[:\-_]+(.)/g,
      ud = M("$controller"),
      td = /^(\S+)(\s+as\s+([\w$]+))?$/,
      Cf = function Cf() {
    this.$get = ["$document", function (a) {
      return function (b) {
        b ? !b.nodeType && b instanceof B && (b = b[0]) : b = a[0].body;return b.offsetWidth + 1;
      };
    }];
  },
      vd = "application/json",
      sc = { "Content-Type": vd + ";charset=utf-8" },
      wg = /^\[|^\{(?!\{)/,
      xg = { "[": /]$/, "{": /}$/ },
      vg = /^\)]\}',?\n/,
      rc = M("$http"),
      Fa = $.$interpolateMinErr = M("$interpolate");Fa.throwNoconcat = function (a) {
    throw Fa("noconcat", a);
  };Fa.interr = function (a, b) {
    return Fa("interr", a, b.toString());
  };var Kf = function Kf() {
    this.$get = function () {
      function a(a) {
        var b = function b(a) {
          b.data = a;b.called = !0;
        };b.id = a;return b;
      }var b = $.callbacks,
          d = {};return { createCallback: function createCallback(c) {
          c = "_" + (b.$$counter++).toString(36);var e = "angular.callbacks." + c,
              f = a(c);d[e] = b[c] = f;return e;
        }, wasCalled: function wasCalled(a) {
          return d[a].called;
        }, getResponse: function getResponse(a) {
          return d[a].data;
        }, removeCallback: function removeCallback(a) {
          delete b[d[a].id];delete d[a];
        } };
    };
  },
      ah = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
      zg = { http: 80, https: 443, ftp: 21 },
      mb = M("$location"),
      Ag = /^\s*[\\/]{2,}/,
      bh = { $$absUrl: "", $$html5: !1, $$replace: !1, absUrl: Lb("$$absUrl"),
    url: function url(a) {
      if (w(a)) return this.$$url;var b = ah.exec(a);(b[1] || "" === a) && this.path(decodeURIComponent(b[1]));(b[2] || b[1] || "" === a) && this.search(b[3] || "");this.hash(b[5] || "");return this;
    }, protocol: Lb("$$protocol"), host: Lb("$$host"), port: Lb("$$port"), path: Dd("$$path", function (a) {
      a = null !== a ? a.toString() : "";return "/" === a.charAt(0) ? a : "/" + a;
    }), search: function search(a, b) {
      switch (arguments.length) {case 0:
          return this.$$search;case 1:
          if (D(a) || Y(a)) a = a.toString(), this.$$search = Tc(a);else if (E(a)) a = pa(a, {}), p(a, function (b, c) {
            null == b && delete a[c];
          }), this.$$search = a;else throw mb("isrcharg");break;default:
          w(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;}this.$$compose();return this;
    }, hash: Dd("$$hash", function (a) {
      return null !== a ? a.toString() : "";
    }), replace: function replace() {
      this.$$replace = !0;return this;
    } };p([Cd, wc, vc], function (a) {
    a.prototype = Object.create(bh);a.prototype.state = function (b) {
      if (!arguments.length) return this.$$state;if (a !== vc || !this.$$html5) throw mb("nostate");this.$$state = w(b) ? null : b;this.$$urlUpdatedByLocation = !0;return this;
    };
  });var Ya = M("$parse"),
      Eg = {}.constructor.prototype.valueOf,
      Sb = S();p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
    Sb[a] = !0;
  });var ch = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
      zc = function zc(a) {
    this.options = a;
  };zc.prototype = { constructor: zc, lex: function lex(a) {
      this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) {
        if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
          var b = a + this.peek(),
              d = b + this.peek(2),
              c = Sb[b],
              e = Sb[d];Sb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
        }
      }return this.tokens;
    }, is: function is(a, b) {
      return -1 !== b.indexOf(a);
    }, peek: function peek(a) {
      a = a || 1;return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    }, isNumber: function isNumber(a) {
      return "0" <= a && "9" >= a && "string" === typeof a;
    }, isWhitespace: function isWhitespace(a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\xA0" === a;
    }, isIdentifierStart: function isIdentifierStart(a) {
      return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
    }, isValidIdentifierStart: function isValidIdentifierStart(a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
    }, isIdentifierContinue: function isIdentifierContinue(a) {
      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
    }, isValidIdentifierContinue: function isValidIdentifierContinue(a, b) {
      return this.isValidIdentifierStart(a, b) || this.isNumber(a);
    }, codePointAt: function codePointAt(a) {
      return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
    }, peekMultichar: function peekMultichar() {
      var a = this.text.charAt(this.index),
          b = this.peek();if (!b) return a;var d = a.charCodeAt(0),
          c = b.charCodeAt(0);return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
    }, isExpOperator: function isExpOperator(a) {
      return "-" === a || "+" === a || this.isNumber(a);
    }, throwError: function throwError(a, b, d) {
      d = d || this.index;b = t(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;throw Ya("lexerr", a, b, this.text);
    }, readNumber: function readNumber() {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var d = N(this.text.charAt(this.index));if ("." === d || this.isNumber(d)) a += d;else {
          var c = this.peek();if ("e" === d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" === a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" !== a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
        }this.index++;
      }this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
    }, readIdent: function readIdent() {
      var a = this.index;for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
        var b = this.peekMultichar();if (!this.isIdentifierContinue(b)) break;this.index += b.length;
      }this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
    }, readString: function readString(a) {
      var b = this.index;this.index++;
      for (var d = "", c = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index),
            c = c + f;if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += ch[f] || f, e = !1;else if ("\\" === f) e = !0;else {
          if (f === a) {
            this.index++;this.tokens.push({ index: b, text: c, constant: !0, value: d });return;
          }d += f;
        }this.index++;
      }this.throwError("Unterminated quote", b);
    } };var r = function r(a, b) {
    this.lexer = a;this.options = b;
  };r.Program = "Program";r.ExpressionStatement = "ExpressionStatement";r.AssignmentExpression = "AssignmentExpression";r.ConditionalExpression = "ConditionalExpression";r.LogicalExpression = "LogicalExpression";r.BinaryExpression = "BinaryExpression";r.UnaryExpression = "UnaryExpression";r.CallExpression = "CallExpression";r.MemberExpression = "MemberExpression";r.Identifier = "Identifier";r.Literal = "Literal";r.ArrayExpression = "ArrayExpression";r.Property = "Property";r.ObjectExpression = "ObjectExpression";
  r.ThisExpression = "ThisExpression";r.LocalsExpression = "LocalsExpression";r.NGValueParameter = "NGValueParameter";r.prototype = { ast: function ast(a) {
      this.text = a;this.tokens = this.lexer.lex(a);a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);return a;
    }, program: function program() {
      for (var a = [];;) {
        if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return { type: r.Program, body: a };
      }
    }, expressionStatement: function expressionStatement() {
      return { type: r.ExpressionStatement,
        expression: this.filterChain() };
    }, filterChain: function filterChain() {
      for (var a = this.expression(); this.expect("|");) {
        a = this.filter(a);
      }return a;
    }, expression: function expression() {
      return this.assignment();
    }, assignment: function assignment() {
      var a = this.ternary();if (this.expect("=")) {
        if (!Hd(a)) throw Ya("lval");a = { type: r.AssignmentExpression, left: a, right: this.assignment(), operator: "=" };
      }return a;
    }, ternary: function ternary() {
      var a = this.logicalOR(),
          b,
          d;return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), { type: r.ConditionalExpression,
        test: a, alternate: b, consequent: d }) : a;
    }, logicalOR: function logicalOR() {
      for (var a = this.logicalAND(); this.expect("||");) {
        a = { type: r.LogicalExpression, operator: "||", left: a, right: this.logicalAND() };
      }return a;
    }, logicalAND: function logicalAND() {
      for (var a = this.equality(); this.expect("&&");) {
        a = { type: r.LogicalExpression, operator: "&&", left: a, right: this.equality() };
      }return a;
    }, equality: function equality() {
      for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) {
        a = { type: r.BinaryExpression, operator: b.text, left: a, right: this.relational() };
      }return a;
    }, relational: function relational() {
      for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) {
        a = { type: r.BinaryExpression, operator: b.text, left: a, right: this.additive() };
      }return a;
    }, additive: function additive() {
      for (var a = this.multiplicative(), b; b = this.expect("+", "-");) {
        a = { type: r.BinaryExpression, operator: b.text, left: a, right: this.multiplicative() };
      }return a;
    }, multiplicative: function multiplicative() {
      for (var a = this.unary(), b; b = this.expect("*", "/", "%");) {
        a = { type: r.BinaryExpression, operator: b.text, left: a, right: this.unary() };
      }return a;
    },
    unary: function unary() {
      var a;return (a = this.expect("+", "-", "!")) ? { type: r.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary() } : this.primary();
    }, primary: function primary() {
      var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = pa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = { type: r.Literal, value: this.options.literals[this.consume().text] } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var b; b = this.expect("(", "[", ".");) {
        "(" === b.text ? (a = { type: r.CallExpression, callee: a, arguments: this.parseArguments() }, this.consume(")")) : "[" === b.text ? (a = { type: r.MemberExpression, object: a, property: this.expression(), computed: !0 }, this.consume("]")) : "." === b.text ? a = { type: r.MemberExpression, object: a, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE");
      }return a;
    }, filter: function filter(a) {
      a = [a];for (var b = { type: r.CallExpression, callee: this.identifier(), arguments: a, filter: !0 }; this.expect(":");) {
        a.push(this.expression());
      }return b;
    }, parseArguments: function parseArguments() {
      var a = [];if (")" !== this.peekToken().text) {
        do {
          a.push(this.filterChain());
        } while (this.expect(","));
      }return a;
    }, identifier: function identifier() {
      var a = this.consume();a.identifier || this.throwError("is not a valid identifier", a);return { type: r.Identifier, name: a.text };
    }, constant: function constant() {
      return { type: r.Literal, value: this.consume().value };
    },
    arrayDeclaration: function arrayDeclaration() {
      var a = [];if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]")) break;a.push(this.expression());
        } while (this.expect(","));
      }this.consume("]");return { type: r.ArrayExpression, elements: a };
    }, object: function object() {
      var a = [],
          b;if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}")) break;b = { type: r.Property, kind: "init" };this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());a.push(b);
        } while (this.expect(","));
      }this.consume("}");return { type: r.ObjectExpression, properties: a };
    }, throwError: function throwError(a, b) {
      throw Ya("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    }, consume: function consume(a) {
      if (0 === this.tokens.length) throw Ya("ueoe", this.text);var b = this.expect(a);b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return b;
    }, peekToken: function peekToken() {
      if (0 === this.tokens.length) throw Ya("ueoe", this.text);return this.tokens[0];
    }, peek: function peek(a, b, d, c) {
      return this.peekAhead(0, a, b, d, c);
    }, peekAhead: function peekAhead(a, b, d, c, e) {
      if (this.tokens.length > a) {
        a = this.tokens[a];var f = a.text;if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
      }return !1;
    }, expect: function expect(a, b, d, c) {
      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
    }, selfReferential: { "this": { type: r.ThisExpression },
      $locals: { type: r.LocalsExpression } } };var Fd = 2;Jd.prototype = { compile: function compile(a) {
      var b = this;this.state = { nextId: 0, filters: {}, fn: { vars: [], body: [], own: {} }, assign: { vars: [], body: [], own: {} }, inputs: [] };V(a, b.$filter);var d = "",
          c;this.stage = "assign";if (c = Id(a)) this.state.computing = "assign", d = this.nextId(), this.recurse(c, d), this.return_(d), d = "fn.assign=" + this.generateFunction("assign", "s,v,l");c = Gd(a.body);b.stage = "inputs";p(c, function (a, c) {
        var d = "fn" + c;b.state[d] = { vars: [], body: [], own: {} };b.state.computing = d;
        var k = b.nextId();b.recurse(a, k);b.return_(k);b.state.inputs.push({ name: d, isPure: a.isPure });a.watchId = c;
      });this.state.computing = "fn";this.stage = "main";this.recurse(a);a = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + d + this.watchFns() + "return fn;";a = new Function("$filter", "getStringValue", "ifDefined", "plus", a)(this.$filter, Bg, Cg, Ed);this.state = this.stage = void 0;return a;
    }, USE: "use", STRICT: "strict", watchFns: function watchFns() {
      var a = [],
          b = this.state.inputs,
          d = this;p(b, function (b) {
        a.push("var " + b.name + "=" + d.generateFunction(b.name, "s"));b.isPure && a.push(b.name, ".isPure=" + JSON.stringify(b.isPure) + ";");
      });b.length && a.push("fn.inputs=[" + b.map(function (a) {
        return a.name;
      }).join(",") + "];");return a.join("");
    }, generateFunction: function generateFunction(a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
    }, filterPrefix: function filterPrefix() {
      var a = [],
          b = this;p(this.state.filters, function (d, c) {
        a.push(d + "=$filter(" + b.escape(c) + ")");
      });return a.length ? "var " + a.join(",") + ";" : "";
    }, varsPrefix: function varsPrefix(a) {
      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
    }, body: function body(a) {
      return this.state[a].body.join("");
    }, recurse: function recurse(a, b, d, c, e, f) {
      var g,
          k,
          h = this,
          l,
          m,
          n;c = c || C;if (!f && t(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));else switch (a.type) {case r.Program:
          p(a.body, function (b, c) {
            h.recurse(b.expression, void 0, void 0, function (a) {
              k = a;
            });c !== a.body.length - 1 ? h.current().body.push(k, ";") : h.return_(k);
          });break;case r.Literal:
          m = this.escape(a.value);
          this.assign(b, m);c(b || m);break;case r.UnaryExpression:
          this.recurse(a.argument, void 0, void 0, function (a) {
            k = a;
          });m = a.operator + "(" + this.ifDefined(k, 0) + ")";this.assign(b, m);c(m);break;case r.BinaryExpression:
          this.recurse(a.left, void 0, void 0, function (a) {
            g = a;
          });this.recurse(a.right, void 0, void 0, function (a) {
            k = a;
          });m = "+" === a.operator ? this.plus(g, k) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(k, 0) : "(" + g + ")" + a.operator + "(" + k + ")";this.assign(b, m);c(m);break;case r.LogicalExpression:
          b = b || this.nextId();
          h.recurse(a.left, b);h.if_("&&" === a.operator ? b : h.not(b), h.lazyRecurse(a.right, b));c(b);break;case r.ConditionalExpression:
          b = b || this.nextId();h.recurse(a.test, b);h.if_(b, h.lazyRecurse(a.alternate, b), h.lazyRecurse(a.consequent, b));c(b);break;case r.Identifier:
          b = b || this.nextId();d && (d.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", a.name)), function () {
            h.if_("inputs" === h.stage || "s", function () {
              e && 1 !== e && h.if_(h.isNull(h.nonComputedMember("s", a.name)), h.lazyAssign(h.nonComputedMember("s", a.name), "{}"));h.assign(b, h.nonComputedMember("s", a.name));
            });
          }, b && h.lazyAssign(b, h.nonComputedMember("l", a.name)));c(b);break;case r.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();b = b || this.nextId();h.recurse(a.object, g, void 0, function () {
            h.if_(h.notNull(g), function () {
              a.computed ? (k = h.nextId(), h.recurse(a.property, k), h.getStringValue(k), e && 1 !== e && h.if_(h.not(h.computedMember(g, k)), h.lazyAssign(h.computedMember(g, k), "{}")), m = h.computedMember(g, k), h.assign(b, m), d && (d.computed = !0, d.name = k)) : (e && 1 !== e && h.if_(h.isNull(h.nonComputedMember(g, a.property.name)), h.lazyAssign(h.nonComputedMember(g, a.property.name), "{}")), m = h.nonComputedMember(g, a.property.name), h.assign(b, m), d && (d.computed = !1, d.name = a.property.name));
            }, function () {
              h.assign(b, "undefined");
            });c(b);
          }, !!e);break;case r.CallExpression:
          b = b || this.nextId();a.filter ? (k = h.filter(a.callee.name), l = [], p(a.arguments, function (a) {
            var b = h.nextId();h.recurse(a, b);l.push(b);
          }), m = k + "(" + l.join(",") + ")", h.assign(b, m), c(b)) : (k = h.nextId(), g = {}, l = [], h.recurse(a.callee, k, g, function () {
            h.if_(h.notNull(k), function () {
              p(a.arguments, function (b) {
                h.recurse(b, a.constant ? void 0 : h.nextId(), void 0, function (a) {
                  l.push(a);
                });
              });m = g.name ? h.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")" : k + "(" + l.join(",") + ")";h.assign(b, m);
            }, function () {
              h.assign(b, "undefined");
            });c(b);
          }));break;case r.AssignmentExpression:
          k = this.nextId();g = {};this.recurse(a.left, void 0, g, function () {
            h.if_(h.notNull(g.context), function () {
              h.recurse(a.right, k);m = h.member(g.context, g.name, g.computed) + a.operator + k;h.assign(b, m);c(b || m);
            });
          }, 1);break;case r.ArrayExpression:
          l = [];p(a.elements, function (b) {
            h.recurse(b, a.constant ? void 0 : h.nextId(), void 0, function (a) {
              l.push(a);
            });
          });m = "[" + l.join(",") + "]";this.assign(b, m);c(b || m);break;case r.ObjectExpression:
          l = [];n = !1;p(a.properties, function (a) {
            a.computed && (n = !0);
          });n ? (b = b || this.nextId(), this.assign(b, "{}"), p(a.properties, function (a) {
            a.computed ? (g = h.nextId(), h.recurse(a.key, g)) : g = a.key.type === r.Identifier ? a.key.name : "" + a.key.value;k = h.nextId();h.recurse(a.value, k);h.assign(h.member(b, g, a.computed), k);
          })) : (p(a.properties, function (b) {
            h.recurse(b.value, a.constant ? void 0 : h.nextId(), void 0, function (a) {
              l.push(h.escape(b.key.type === r.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
            });
          }), m = "{" + l.join(",") + "}", this.assign(b, m));c(b || m);break;case r.ThisExpression:
          this.assign(b, "s");c(b || "s");break;case r.LocalsExpression:
          this.assign(b, "l");c(b || "l");break;
        case r.NGValueParameter:
          this.assign(b, "v"), c(b || "v");}
    }, getHasOwnProperty: function getHasOwnProperty(a, b) {
      var d = a + "." + b,
          c = this.current().own;c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));return c[d];
    }, assign: function assign(a, b) {
      if (a) return this.current().body.push(a, "=", b, ";"), a;
    }, filter: function filter(a) {
      this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));return this.state.filters[a];
    }, ifDefined: function ifDefined(a, b) {
      return "ifDefined(" + a + "," + this.escape(b) + ")";
    }, plus: function plus(a, b) {
      return "plus(" + a + "," + b + ")";
    }, return_: function return_(a) {
      this.current().body.push("return ", a, ";");
    }, if_: function if_(a, b, d) {
      if (!0 === a) b();else {
        var c = this.current().body;c.push("if(", a, "){");b();c.push("}");d && (c.push("else{"), d(), c.push("}"));
      }
    }, not: function not(a) {
      return "!(" + a + ")";
    }, isNull: function isNull(a) {
      return a + "==null";
    }, notNull: function notNull(a) {
      return a + "!=null";
    }, nonComputedMember: function nonComputedMember(a, b) {
      var d = /[^$_a-zA-Z0-9]/g;return (/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
      );
    }, computedMember: function computedMember(a, b) {
      return a + "[" + b + "]";
    }, member: function member(a, b, d) {
      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
    }, getStringValue: function getStringValue(a) {
      this.assign(a, "getStringValue(" + a + ")");
    }, lazyRecurse: function lazyRecurse(a, b, d, c, e, f) {
      var g = this;return function () {
        g.recurse(a, b, d, c, e, f);
      };
    }, lazyAssign: function lazyAssign(a, b) {
      var d = this;return function () {
        d.assign(a, b);
      };
    }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function stringEscapeFn(a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }, escape: function escape(a) {
      if (D(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";if (Y(a)) return a.toString();if (!0 === a) return "true";if (!1 === a) return "false";if (null === a) return "null";if ("undefined" === typeof a) return "undefined";throw Ya("esc");
    }, nextId: function nextId(a, b) {
      var d = "v" + this.state.nextId++;a || this.current().vars.push(d + (b ? "=" + b : ""));return d;
    }, current: function current() {
      return this.state[this.state.computing];
    } };Kd.prototype = { compile: function compile(a) {
      var b = this;V(a, b.$filter);var d, c;if (d = Id(a)) c = this.recurse(d);d = Gd(a.body);var e;d && (e = [], p(d, function (a, c) {
        var d = b.recurse(a);d.isPure = a.isPure;a.input = d;e.push(d);a.watchId = c;
      }));var f = [];p(a.body, function (a) {
        f.push(b.recurse(a.expression));
      });a = 0 === a.body.length ? C : 1 === a.body.length ? f[0] : function (a, b) {
        var c;p(f, function (d) {
          c = d(a, b);
        });return c;
      };c && (a.assign = function (a, b, d) {
        return c(a, d, b);
      });e && (a.inputs = e);return a;
    }, recurse: function recurse(a, b, d) {
      var c,
          e,
          f = this,
          g;if (a.input) return this.inputs(a.input, a.watchId);switch (a.type) {case r.Literal:
          return this.value(a.value, b);case r.UnaryExpression:
          return e = this.recurse(a.argument), this["unary" + a.operator](e, b);case r.BinaryExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case r.LogicalExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case r.ConditionalExpression:
          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);case r.Identifier:
          return f.identifier(a.name, b, d);case r.MemberExpression:
          return c = this.recurse(a.object, !1, !!d), a.computed || (e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d) : this.nonComputedMember(c, e, b, d);case r.CallExpression:
          return g = [], p(a.arguments, function (a) {
            g.push(f.recurse(a));
          }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
            for (var n = [], q = 0; q < g.length; ++q) {
              n.push(g[q](a, c, d, f));
            }a = e.apply(void 0, n, f);return b ? { context: void 0, name: void 0, value: a } : a;
          } : function (a, c, d, f) {
            var n = e(a, c, d, f),
                q;if (null != n.value) {
              q = [];for (var p = 0; p < g.length; ++p) {
                q.push(g[p](a, c, d, f));
              }q = n.value.apply(n.context, q);
            }return b ? { value: q } : q;
          };case r.AssignmentExpression:
          return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, f, g) {
            var n = c(a, d, f, g);a = e(a, d, f, g);n.context[n.name] = a;return b ? { value: a } : a;
          };case r.ArrayExpression:
          return g = [], p(a.elements, function (a) {
            g.push(f.recurse(a));
          }), function (a, c, d, e) {
            for (var f = [], q = 0; q < g.length; ++q) {
              f.push(g[q](a, c, d, e));
            }return b ? { value: f } : f;
          };case r.ObjectExpression:
          return g = [], p(a.properties, function (a) {
            a.computed ? g.push({ key: f.recurse(a.key), computed: !0, value: f.recurse(a.value) }) : g.push({ key: a.key.type === r.Identifier ? a.key.name : "" + a.key.value, computed: !1, value: f.recurse(a.value) });
          }), function (a, c, d, e) {
            for (var f = {}, q = 0; q < g.length; ++q) {
              g[q].computed ? f[g[q].key(a, c, d, e)] = g[q].value(a, c, d, e) : f[g[q].key] = g[q].value(a, c, d, e);
            }return b ? { value: f } : f;
          };case r.ThisExpression:
          return function (a) {
            return b ? { value: a } : a;
          };case r.LocalsExpression:
          return function (a, c) {
            return b ? { value: c } : c;
          };case r.NGValueParameter:
          return function (a, c, d) {
            return b ? { value: d } : d;
          };}
    }, "unary+": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);d = t(d) ? +d : 0;return b ? { value: d } : d;
      };
    }, "unary-": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);d = t(d) ? -d : -0;return b ? { value: d } : d;
      };
    }, "unary!": function unary(a, b) {
      return function (d, c, e, f) {
        d = !a(d, c, e, f);return b ? { value: d } : d;
      };
    }, "binary+": function binary(a, b, d) {
      return function (c, e, f, g) {
        var k = a(c, e, f, g);c = b(c, e, f, g);k = Ed(k, c);return d ? { value: k } : k;
      };
    }, "binary-": function binary(a, b, d) {
      return function (c, e, f, g) {
        var k = a(c, e, f, g);c = b(c, e, f, g);
        k = (t(k) ? k : 0) - (t(c) ? c : 0);return d ? { value: k } : k;
      };
    }, "binary*": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) * b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary/": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) / b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary%": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) % b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary===": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) === b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary!==": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) !== b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary==": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) == b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary!=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) != b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary<": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) < b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary>": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) > b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary<=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) <= b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary>=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) >= b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary&&": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) && b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary||": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) || b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "ternary?:": function ternary(a, b, d, c) {
      return function (e, f, g, k) {
        e = a(e, f, g, k) ? b(e, f, g, k) : d(e, f, g, k);return c ? { value: e } : e;
      };
    }, value: function value(a, b) {
      return function () {
        return b ? { context: void 0,
          name: void 0, value: a } : a;
      };
    }, identifier: function identifier(a, b, d) {
      return function (c, e, f, g) {
        c = e && a in e ? e : c;d && 1 !== d && c && null == c[a] && (c[a] = {});e = c ? c[a] : void 0;return b ? { context: c, name: a, value: e } : e;
      };
    }, computedMember: function computedMember(a, b, d, c) {
      return function (e, f, g, k) {
        var h = a(e, f, g, k),
            l,
            m;null != h && (l = b(e, f, g, k), l += "", c && 1 !== c && h && !h[l] && (h[l] = {}), m = h[l]);return d ? { context: h, name: l, value: m } : m;
      };
    }, nonComputedMember: function nonComputedMember(a, b, d, c) {
      return function (e, f, g, k) {
        e = a(e, f, g, k);c && 1 !== c && e && null == e[b] && (e[b] = {});f = null != e ? e[b] : void 0;
        return d ? { context: e, name: b, value: f } : f;
      };
    }, inputs: function inputs(a, b) {
      return function (d, c, e, f) {
        return f ? f[b] : a(d, c, e);
      };
    } };xc.prototype = { constructor: xc, parse: function parse(a) {
      a = this.ast.ast(a);var b = this.astCompiler.compile(a);b.literal = 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === r.Literal || a.body[0].expression.type === r.ArrayExpression || a.body[0].expression.type === r.ObjectExpression);b.constant = a.constant;return b;
    } };var wa = M("$sce"),
      oa = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl",
    JS: "js" },
      Ac = /_([a-z])/g,
      Gg = M("$compile"),
      X = u.document.createElement("a"),
      Od = ua(u.location.href);Pd.$inject = ["$document"];ed.$inject = ["$provide"];var Wd = 22,
      Vd = ".",
      Cc = "0";Qd.$inject = ["$locale"];Sd.$inject = ["$locale"];var Rg = { yyyy: da("FullYear", 4, 0, !1, !0), yy: da("FullYear", 2, 0, !0, !0), y: da("FullYear", 1, 0, !1, !0), MMMM: ob("Month"), MMM: ob("Month", !0), MM: da("Month", 2, 1), M: da("Month", 1, 1), LLLL: ob("Month", !1, !0), dd: da("Date", 2), d: da("Date", 1), HH: da("Hours", 2), H: da("Hours", 1), hh: da("Hours", 2, -12), h: da("Hours", 1, -12), mm: da("Minutes", 2), m: da("Minutes", 1), ss: da("Seconds", 2), s: da("Seconds", 1), sss: da("Milliseconds", 3), EEEE: ob("Day"), EEE: ob("Day", !0), a: function a(_a, b) {
      return 12 > _a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
    }, Z: function Z(a, b, d) {
      a = -1 * d;return a = (0 <= a ? "+" : "") + (Mb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Mb(Math.abs(a % 60), 2));
    }, ww: Yd(2), w: Yd(1), G: Dc, GG: Dc, GGG: Dc, GGGG: function GGGG(a, b) {
      return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
    } },
      Qg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
      Pg = /^-?\d+$/;Rd.$inject = ["$locale"];var Kg = ka(N),
      Lg = ka(wb);Td.$inject = ["$parse"];var He = ka({ restrict: "E", compile: function compile(a, b) {
      if (!b.href && !b.xlinkHref) return function (a, b) {
        if ("a" === b[0].nodeName.toLowerCase()) {
          var e = "[object SVGAnimatedString]" === ha.call(b.prop("href")) ? "xlink:href" : "href";b.on("click", function (a) {
            b.attr(e) || a.preventDefault();
          });
        }
      };
    } }),
      xb = {};p(Hb, function (a, b) {
    function d(a, d, e) {
      a.$watch(e[c], function (a) {
        e.$set(b, !!a);
      });
    }if ("multiple" !== a) {
      var c = Ea("ng-" + b),
          e = d;"checked" === a && (e = function e(a, b, _e) {
        _e.ngModel !== _e[c] && d(a, b, _e);
      });xb[c] = function () {
        return { restrict: "A", priority: 100, link: e };
      };
    }
  });p(sd, function (a, b) {
    xb[b] = function () {
      return { priority: 100, link: function link(a, c, e) {
          if ("ngPattern" === b && "/" === e.ngPattern.charAt(0) && (c = e.ngPattern.match(Vg))) {
            e.$set("ngPattern", new RegExp(c[1], c[2]));return;
          }a.$watch(e[b], function (a) {
            e.$set(b, a);
          });
        } };
    };
  });p(["src", "srcset", "href"], function (a) {
    var b = Ea("ng-" + a);xb[b] = function () {
      return { priority: 99, link: function link(d, c, e) {
          var f = a,
              g = a;"href" === a && "[object SVGAnimatedString]" === ha.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);e.$observe(b, function (b) {
            b ? (e.$set(g, b), Ca && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null);
          });
        } };
    };
  });var Ob = { $addControl: C, $$renameControl: function $$renameControl(a, b) {
      a.$name = b;
    }, $removeControl: C, $setValidity: C, $setDirty: C, $setPristine: C, $setSubmitted: C };Nb.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];Nb.prototype = { $rollbackViewValue: function $rollbackViewValue() {
      p(this.$$controls, function (a) {
        a.$rollbackViewValue();
      });
    }, $commitViewValue: function $commitViewValue() {
      p(this.$$controls, function (a) {
        a.$commitViewValue();
      });
    }, $addControl: function $addControl(a) {
      Ia(a.$name, "input");this.$$controls.push(a);a.$name && (this[a.$name] = a);a.$$parentForm = this;
    }, $$renameControl: function $$renameControl(a, b) {
      var d = a.$name;this[d] === a && delete this[d];this[b] = a;a.$name = b;
    }, $removeControl: function $removeControl(a) {
      a.$name && this[a.$name] === a && delete this[a.$name];p(this.$pending, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);p(this.$error, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);p(this.$$success, function (b, d) {
        this.$setValidity(d, null, a);
      }, this);db(this.$$controls, a);a.$$parentForm = Ob;
    }, $setDirty: function $setDirty() {
      this.$$animate.removeClass(this.$$element, Za);this.$$animate.addClass(this.$$element, Tb);this.$dirty = !0;this.$pristine = !1;this.$$parentForm.$setDirty();
    }, $setPristine: function $setPristine() {
      this.$$animate.setClass(this.$$element, Za, Tb + " ng-submitted");this.$dirty = !1;this.$pristine = !0;this.$submitted = !1;p(this.$$controls, function (a) {
        a.$setPristine();
      });
    }, $setUntouched: function $setUntouched() {
      p(this.$$controls, function (a) {
        a.$setUntouched();
      });
    }, $setSubmitted: function $setSubmitted() {
      this.$$animate.addClass(this.$$element, "ng-submitted");this.$submitted = !0;this.$$parentForm.$setSubmitted();
    } };ae({ clazz: Nb, set: function set(a, b, d) {
      var c = a[b];c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [d];
    }, unset: function unset(a, b, d) {
      var c = a[b];c && (db(c, d), 0 === c.length && delete a[b]);
    } });var ie = function ie(a) {
    return ["$timeout", "$parse", function (b, d) {
      function c(a) {
        return "" === a ? d('this[""]').assign : d(a).assign || C;
      }return { name: "form", restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Nb, compile: function compile(d, f) {
          d.addClass(Za).addClass(pb);var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, e, f) {
              var n = f[0];if (!("action" in e)) {
                var q = function q(b) {
                  a.$apply(function () {
                    n.$commitViewValue();n.$setSubmitted();
                  });b.preventDefault();
                };d[0].addEventListener("submit", q);d.on("$destroy", function () {
                  b(function () {
                    d[0].removeEventListener("submit", q);
                  }, 0, !1);
                });
              }(f[1] || n.$$parentForm).$addControl(n);var p = g ? c(n.$name) : C;g && (p(a, n), e.$observe(g, function (b) {
                n.$name !== b && (p(a, void 0), n.$$parentForm.$$renameControl(n, b), p = c(n.$name), p(a, n));
              }));d.on("$destroy", function () {
                n.$$parentForm.$removeControl(n);
                p(a, void 0);P(n, Ob);
              });
            } };
        } };
    }];
  },
      Ie = ie(),
      Ue = ie(!0),
      Sg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
      dh = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      eh = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
      Tg = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      je = /^(\d{4,})-(\d{2})-(\d{2})$/,
      ke = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Kc = /^(\d{4,})-W(\d\d)$/,
      le = /^(\d{4,})-(\d\d)$/,
      me = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      ce = S();p(["date", "datetime-local", "month", "time", "week"], function (a) {
    ce[a] = !0;
  });var ne = { text: function text(a, b, d, c, e, f) {
      Wa(a, b, d, c, e, f);Fc(c);
    }, date: qb("date", je, Pb(je, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": qb("datetimelocal", ke, Pb(ke, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: qb("time", me, Pb(me, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: qb("week", Kc, function (a, b) {
      if (ea(a)) return a;if (D(a)) {
        Kc.lastIndex = 0;var d = Kc.exec(a);if (d) {
          var c = +d[1],
              e = +d[2],
              f = d = 0,
              g = 0,
              k = 0,
              h = Xd(c),
              e = 7 * (e - 1);b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), k = b.getMilliseconds());return new Date(c, 0, h.getDate() + e, d, f, g, k);
        }
      }return NaN;
    }, "yyyy-Www"), month: qb("month", le, Pb(le, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, b, d, c, e, f) {
      Gc(a, b, d, c);de(c);Wa(a, b, d, c, e, f);var g, k;if (t(d.min) || d.ngMin) c.$validators.min = function (a) {
        return c.$isEmpty(a) || w(g) || a >= g;
      }, d.$observe("min", function (a) {
        g = Xa(a);c.$validate();
      });if (t(d.max) || d.ngMax) c.$validators.max = function (a) {
        return c.$isEmpty(a) || w(k) || a <= k;
      }, d.$observe("max", function (a) {
        k = Xa(a);c.$validate();
      });if (t(d.step) || d.ngStep) {
        var h;c.$validators.step = function (a, b) {
          return c.$isEmpty(b) || w(h) || ee(b, g || 0, h);
        };d.$observe("step", function (a) {
          h = Xa(a);c.$validate();
        });
      }
    }, url: function url(a, b, d, c, e, f) {
      Wa(a, b, d, c, e, f);Fc(c);c.$$parserName = "url";c.$validators.url = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || dh.test(d);
      };
    },
    email: function email(a, b, d, c, e, f) {
      Wa(a, b, d, c, e, f);Fc(c);c.$$parserName = "email";c.$validators.email = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || eh.test(d);
      };
    }, radio: function radio(a, b, d, c) {
      var e = !d.ngTrim || "false" !== Q(d.ngTrim);w(d.name) && b.attr("name", ++sb);b.on("click", function (a) {
        var g;b[0].checked && (g = d.value, e && (g = Q(g)), c.$setViewValue(g, a && a.type));
      });c.$render = function () {
        var a = d.value;e && (a = Q(a));b[0].checked = a === c.$viewValue;
      };d.$observe("value", c.$render);
    }, range: function range(a, b, d, c, e, f) {
      function g(a, c) {
        b.attr(a, d[a]);d.$observe(a, c);
      }function k(a) {
        n = Xa(a);T(c.$modelValue) || (m ? (a = b.val(), n > a && (a = n, b.val(a)), c.$setViewValue(a)) : c.$validate());
      }function h(a) {
        q = Xa(a);T(c.$modelValue) || (m ? (a = b.val(), q < a && (b.val(q), a = q < n ? n : q), c.$setViewValue(a)) : c.$validate());
      }function l(a) {
        p = Xa(a);T(c.$modelValue) || (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) : c.$validate());
      }Gc(a, b, d, c);de(c);Wa(a, b, d, c, e, f);var m = c.$$hasNativeValidators && "range" === b[0].type,
          n = m ? 0 : void 0,
          q = m ? 100 : void 0,
          p = m ? 1 : void 0,
          r = b[0].validity;a = t(d.min);
      e = t(d.max);f = t(d.step);var z = c.$render;c.$render = m && t(r.rangeUnderflow) && t(r.rangeOverflow) ? function () {
        z();c.$setViewValue(b.val());
      } : z;a && (c.$validators.min = m ? function () {
        return !0;
      } : function (a, b) {
        return c.$isEmpty(b) || w(n) || b >= n;
      }, g("min", k));e && (c.$validators.max = m ? function () {
        return !0;
      } : function (a, b) {
        return c.$isEmpty(b) || w(q) || b <= q;
      }, g("max", h));f && (c.$validators.step = m ? function () {
        return !r.stepMismatch;
      } : function (a, b) {
        return c.$isEmpty(b) || w(p) || ee(b, n || 0, p);
      }, g("step", l));
    }, checkbox: function checkbox(a, b, d, c, e, f, g, k) {
      var h = fe(k, a, "ngTrueValue", d.ngTrueValue, !0),
          l = fe(k, a, "ngFalseValue", d.ngFalseValue, !1);b.on("click", function (a) {
        c.$setViewValue(b[0].checked, a && a.type);
      });c.$render = function () {
        b[0].checked = c.$viewValue;
      };c.$isEmpty = function (a) {
        return !1 === a;
      };c.$formatters.push(function (a) {
        return sa(a, h);
      });c.$parsers.push(function (a) {
        return a ? h : l;
      });
    }, hidden: C, button: C, submit: C, reset: C, file: C },
      Zc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
    return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(e, f, g, k) {
          k[0] && (ne[N(g.type)] || ne.text)(e, f, g, k[0], b, a, d, c);
        } } };
  }],
      fh = /^(true|false|\d+)$/,
      mf = function mf() {
    function a(a, d, c) {
      var e = t(c) ? c : 9 === Ca ? "" : null;a.prop("value", e);d.$set("value", c);
    }return { restrict: "A", priority: 100, compile: function compile(b, d) {
        return fh.test(d.ngValue) ? function (b, d, f) {
          b = b.$eval(f.ngValue);a(d, f, b);
        } : function (b, d, f) {
          b.$watch(f.ngValue, function (b) {
            a(d, f, b);
          });
        };
      } };
  },
      Me = ["$compile", function (a) {
    return { restrict: "AC", compile: function compile(b) {
        a.$$addBindingClass(b);return function (b, c, e) {
          a.$$addBindingInfo(c, e.ngBind);c = c[0];b.$watch(e.ngBind, function (a) {
            c.textContent = dc(a);
          });
        };
      } };
  }],
      Oe = ["$interpolate", "$compile", function (a, b) {
    return { compile: function compile(d) {
        b.$$addBindingClass(d);return function (c, d, f) {
          c = a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d, c.expressions);d = d[0];f.$observe("ngBindTemplate", function (a) {
            d.textContent = w(a) ? "" : a;
          });
        };
      } };
  }],
      Ne = ["$sce", "$parse", "$compile", function (a, b, d) {
    return { restrict: "A", compile: function compile(c, e) {
        var f = b(e.ngBindHtml),
            g = b(e.ngBindHtml, function (b) {
          return a.valueOf(b);
        });
        d.$$addBindingClass(c);return function (b, c, e) {
          d.$$addBindingInfo(c, e.ngBindHtml);b.$watch(g, function () {
            var d = f(b);c.html(a.getTrustedHtml(d) || "");
          });
        };
      } };
  }],
      lf = ka({ restrict: "A", require: "ngModel", link: function link(a, b, d, c) {
      c.$viewChangeListeners.push(function () {
        a.$eval(d.ngChange);
      });
    } }),
      Pe = Ic("", !0),
      Re = Ic("Odd", 0),
      Qe = Ic("Even", 1),
      Se = Qa({ compile: function compile(a, b) {
      b.$set("ngCloak", void 0);a.removeClass("ng-cloak");
    } }),
      Te = [function () {
    return { restrict: "A", scope: !0, controller: "@", priority: 500 };
  }],
      dd = {},
      gh = { blur: !0, focus: !0 };
  p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var b = Ea("ng-" + a);dd[b] = ["$parse", "$rootScope", function (d, c) {
      return { restrict: "A", compile: function compile(e, f) {
          var g = d(f[b]);return function (b, d) {
            d.on(a, function (d) {
              var e = function e() {
                g(b, { $event: d });
              };gh[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
            });
          };
        } };
    }];
  });var We = ["$animate", "$compile", function (a, b) {
    return { multiElement: !0, transclude: "element", priority: 600,
      terminal: !0, restrict: "A", $$tlb: !0, link: function link(d, c, e, f, g) {
        var k, h, l;d.$watch(e.ngIf, function (d) {
          d ? h || g(function (d, f) {
            h = f;d[d.length++] = b.$$createComment("end ngIf", e.ngIf);k = { clone: d };a.enter(d, c.parent(), c);
          }) : (l && (l.remove(), l = null), h && (h.$destroy(), h = null), k && (l = vb(k.clone), a.leave(l).done(function (a) {
            !1 !== a && (l = null);
          }), k = null));
        });
      } };
  }],
      Xe = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
    return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: $.noop, compile: function compile(c, e) {
        var f = e.ngInclude || e.src,
            g = e.onload || "",
            k = e.autoscroll;return function (c, e, m, n, q) {
          var p = 0,
              r,
              z,
              v,
              s = function s() {
            z && (z.remove(), z = null);r && (r.$destroy(), r = null);v && (d.leave(v).done(function (a) {
              !1 !== a && (z = null);
            }), z = v, v = null);
          };c.$watch(f, function (f) {
            var m = function m(a) {
              !1 === a || !t(k) || k && !c.$eval(k) || b();
            },
                y = ++p;f ? (a(f, !0).then(function (a) {
              if (!c.$$destroyed && y === p) {
                var b = c.$new();n.template = a;a = q(b, function (a) {
                  s();d.enter(a, null, e).done(m);
                });r = b;v = a;r.$emit("$includeContentLoaded", f);c.$eval(g);
              }
            }, function () {
              c.$$destroyed || y !== p || (s(), c.$emit("$includeContentError", f));
            }), c.$emit("$includeContentRequested", f)) : (s(), n.template = null);
          });
        };
      } };
  }],
      of = ["$compile", function (a) {
    return { restrict: "ECA", priority: -400, require: "ngInclude", link: function link(b, d, c, e) {
        ha.call(d[0]).match(/SVG/) ? (d.empty(), a(fd(e.template, u.document).childNodes)(b, function (a) {
          d.append(a);
        }, { futureParentElement: d })) : (d.html(e.template), a(d.contents())(b));
      } };
  }],
      Ye = Qa({ priority: 450, compile: function compile() {
      return { pre: function pre(a, b, d) {
          a.$eval(d.ngInit);
        } };
    } }),
      kf = function kf() {
    return { restrict: "A",
      priority: 100, require: "ngModel", link: function link(a, b, d, c) {
        var e = d.ngList || ", ",
            f = "false" !== d.ngTrim,
            g = f ? Q(e) : e;c.$parsers.push(function (a) {
          if (!w(a)) {
            var b = [];a && p(a.split(g), function (a) {
              a && b.push(f ? Q(a) : a);
            });return b;
          }
        });c.$formatters.push(function (a) {
          if (I(a)) return a.join(e);
        });c.$isEmpty = function (a) {
          return !a || !a.length;
        };
      } };
  },
      pb = "ng-valid",
      $d = "ng-invalid",
      Za = "ng-pristine",
      Tb = "ng-dirty",
      rb = M("ngModel");Qb.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
  Qb.prototype = { $$initGetterSetters: function $$initGetterSetters() {
      if (this.$options.getOption("getterSetter")) {
        var a = this.$$parse(this.$$attr.ngModel + "()"),
            b = this.$$parse(this.$$attr.ngModel + "($$$p)");this.$$ngModelGet = function (b) {
          var c = this.$$parsedNgModel(b);A(c) && (c = a(b));return c;
        };this.$$ngModelSet = function (a, c) {
          A(this.$$parsedNgModel(a)) ? b(a, { $$$p: c }) : this.$$parsedNgModelAssign(a, c);
        };
      } else if (!this.$$parsedNgModel.assign) throw rb("nonassign", this.$$attr.ngModel, Aa(this.$$element));
    }, $render: C, $isEmpty: function $isEmpty(a) {
      return w(a) || "" === a || null === a || a !== a;
    }, $$updateEmptyClasses: function $$updateEmptyClasses(a) {
      this.$isEmpty(a) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"));
    }, $setPristine: function $setPristine() {
      this.$dirty = !1;this.$pristine = !0;this.$$animate.removeClass(this.$$element, Tb);this.$$animate.addClass(this.$$element, Za);
    }, $setDirty: function $setDirty() {
      this.$dirty = !0;this.$pristine = !1;this.$$animate.removeClass(this.$$element, Za);this.$$animate.addClass(this.$$element, Tb);this.$$parentForm.$setDirty();
    }, $setUntouched: function $setUntouched() {
      this.$touched = !1;this.$untouched = !0;this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched");
    }, $setTouched: function $setTouched() {
      this.$touched = !0;this.$untouched = !1;this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched");
    }, $rollbackViewValue: function $rollbackViewValue() {
      this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue = this.$$lastCommittedViewValue;this.$render();
    }, $validate: function $validate() {
      if (!T(this.$modelValue)) {
        var a = this.$$lastCommittedViewValue,
            b = this.$$rawModelValue,
            d = this.$valid,
            c = this.$modelValue,
            e = this.$options.getOption("allowInvalid"),
            f = this;this.$$runValidators(b, a, function (a) {
          e || d === a || (f.$modelValue = a ? b : void 0, f.$modelValue !== c && f.$$writeModelToScope());
        });
      }
    }, $$runValidators: function $$runValidators(a, b, d) {
      function c() {
        var c = !0;p(h.$validators, function (d, e) {
          var g = Boolean(d(a, b));c = c && g;f(e, g);
        });return c ? !0 : (p(h.$asyncValidators, function (a, b) {
          f(b, null);
        }), !1);
      }function e() {
        var c = [],
            d = !0;p(h.$asyncValidators, function (e, g) {
          var h = e(a, b);if (!h || !A(h.then)) throw rb("nopromise", h);f(g, void 0);c.push(h.then(function () {
            f(g, !0);
          }, function () {
            d = !1;f(g, !1);
          }));
        });c.length ? h.$$q.all(c).then(function () {
          g(d);
        }, C) : g(!0);
      }function f(a, b) {
        k === h.$$currentValidationRunId && h.$setValidity(a, b);
      }function g(a) {
        k === h.$$currentValidationRunId && d(a);
      }this.$$currentValidationRunId++;var k = this.$$currentValidationRunId,
          h = this;(function () {
        var a = h.$$parserName || "parse";if (w(h.$$parserValid)) f(a, null);else return h.$$parserValid || (p(h.$validators, function (a, b) {
          f(b, null);
        }), p(h.$asyncValidators, function (a, b) {
          f(b, null);
        })), f(a, h.$$parserValid), h.$$parserValid;return !0;
      })() ? c() ? e() : g(!1) : g(!1);
    }, $commitViewValue: function $commitViewValue() {
      var a = this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if (this.$$lastCommittedViewValue !== a || "" === a && this.$$hasNativeValidators) this.$$updateEmptyClasses(a), this.$$lastCommittedViewValue = a, this.$pristine && this.$setDirty(), this.$$parseAndValidate();
    }, $$parseAndValidate: function $$parseAndValidate() {
      var a = this.$$lastCommittedViewValue,
          b = this;if (this.$$parserValid = w(a) ? void 0 : !0) for (var d = 0; d < this.$parsers.length; d++) {
        if (a = this.$parsers[d](a), w(a)) {
          this.$$parserValid = !1;break;
        }
      }T(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));var c = this.$modelValue,
          e = this.$options.getOption("allowInvalid");this.$$rawModelValue = a;e && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope());this.$$runValidators(a, this.$$lastCommittedViewValue, function (d) {
        e || (b.$modelValue = d ? a : void 0, b.$modelValue !== c && b.$$writeModelToScope());
      });
    }, $$writeModelToScope: function $$writeModelToScope() {
      this.$$ngModelSet(this.$$scope, this.$modelValue);p(this.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (b) {
          this.$$exceptionHandler(b);
        }
      }, this);
    }, $setViewValue: function $setViewValue(a, b) {
      this.$viewValue = a;this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(b);
    }, $$debounceViewValueCommit: function $$debounceViewValueCommit(a) {
      var b = this.$options.getOption("debounce");Y(b[a]) ? b = b[a] : Y(b["default"]) && (b = b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d = this;0 < b ? this.$$pendingDebounce = this.$$timeout(function () {
        d.$commitViewValue();
      }, b) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function () {
        d.$commitViewValue();
      });
    }, $overrideModelOptions: function $overrideModelOptions(a) {
      this.$options = this.$options.createChild(a);
    } };ae({ clazz: Qb, set: function set(a, b) {
      a[b] = !0;
    }, unset: function unset(a, b) {
      delete a[b];
    } });var jf = ["$rootScope", function (a) {
    return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Qb, priority: 1, compile: function compile(b) {
        b.addClass(Za).addClass("ng-untouched").addClass(pb);return { pre: function pre(a, b, e, f) {
            var g = f[0];b = f[1] || g.$$parentForm;if (f = f[2]) g.$options = f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name", function (a) {
              g.$name !== a && g.$$parentForm.$$renameControl(g, a);
            });a.$on("$destroy", function () {
              g.$$parentForm.$removeControl(g);
            });
          }, post: function post(b, c, e, f) {
            function g() {
              k.$setTouched();
            }var k = f[0];if (k.$options.getOption("updateOn")) c.on(k.$options.getOption("updateOn"), function (a) {
              k.$$debounceViewValueCommit(a && a.type);
            });c.on("blur", function () {
              k.$touched || (a.$$phase ? b.$evalAsync(g) : b.$apply(g));
            });
          } };
      } };
  }],
      Rb,
      hh = /(\s+|^)default(\s+|$)/;Jc.prototype = { getOption: function getOption(a) {
      return this.$$options[a];
    }, createChild: function createChild(a) {
      var b = !1;a = P({}, a);p(a, function (d, c) {
        "$inherit" === d ? "*" === c ? b = !0 : (a[c] = this.$$options[c], "updateOn" === c && (a.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === c && (a.updateOnDefault = !1, a[c] = Q(d.replace(hh, function () {
          a.updateOnDefault = !0;return " ";
        })));
      }, this);b && (delete a["*"], ge(a, this.$$options));ge(a, Rb.$$options);return new Jc(a);
    } };Rb = new Jc({ updateOn: "", updateOnDefault: !0, debounce: 0, getterSetter: !1, allowInvalid: !1,
    timezone: null });var nf = function nf() {
    function a(a, d) {
      this.$$attrs = a;this.$$scope = d;
    }a.$inject = ["$attrs", "$scope"];a.prototype = { $onInit: function $onInit() {
        var a = this.parentCtrl ? this.parentCtrl.$options : Rb,
            d = this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options = a.createChild(d);
      } };return { restrict: "A", priority: 10, require: { parentCtrl: "?^^ngModelOptions" }, bindToController: !0, controller: a };
  },
      Ze = Qa({ terminal: !0, priority: 1E3 }),
      ih = M("ngOptions"),
      jh = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      gf = ["$compile", "$document", "$parse", function (a, b, d) {
    function c(a, b, c) {
      function e(a, b, c, d, f) {
        this.selectValue = a;this.viewValue = b;this.label = c;this.group = d;this.disabled = f;
      }function f(a) {
        var b;if (!p && xa(a)) b = a;else {
          b = [];for (var c in a) {
            a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
          }
        }return b;
      }var n = a.match(jh);if (!n) throw ih("iexp", a, Aa(b));var q = n[5] || n[7],
          p = n[6];a = / as /.test(n[0]) && n[1];var r = n[9];b = d(n[2] ? n[1] : q);var z = a && d(a) || b,
          t = r && d(r),
          s = r ? function (a, b) {
        return t(c, b);
      } : function (a) {
        return Pa(a);
      },
          w = function w(a, b) {
        return s(a, A(a, b));
      },
          u = d(n[2] || n[1]),
          y = d(n[3] || ""),
          J = d(n[4] || ""),
          H = d(n[8]),
          B = {},
          A = p ? function (a, b) {
        B[p] = b;B[q] = a;return B;
      } : function (a) {
        B[q] = a;return B;
      };return { trackBy: r, getTrackByValue: w, getWatchables: d(H, function (a) {
          var b = [];a = a || [];for (var d = f(a), e = d.length, g = 0; g < e; g++) {
            var k = a === d ? g : d[g],
                l = a[k],
                k = A(l, k),
                l = s(l, k);b.push(l);if (n[2] || n[1]) l = u(c, k), b.push(l);n[4] && (k = J(c, k), b.push(k));
          }return b;
        }), getOptions: function getOptions() {
          for (var a = [], b = {}, d = H(c) || [], g = f(d), k = g.length, n = 0; n < k; n++) {
            var q = d === g ? n : g[n],
                p = A(d[q], q),
                t = z(c, p),
                q = s(t, p),
                v = u(c, p),
                G = y(c, p),
                p = J(c, p),
                t = new e(q, t, v, G, p);a.push(t);b[q] = t;
          }return { items: a, selectValueMap: b, getOptionFromViewValue: function getOptionFromViewValue(a) {
              return b[w(a)];
            }, getViewValueFromOption: function getViewValueFromOption(a) {
              return r ? pa(a.viewValue) : a.viewValue;
            } };
        } };
    }var e = u.document.createElement("option"),
        f = u.document.createElement("optgroup");return { restrict: "A", terminal: !0, require: ["select", "ngModel"], link: { pre: function pre(a, b, c, d) {
          d[0].registerOption = C;
        }, post: function post(d, k, h, l) {
          function m(a) {
            var b = (a = s.getOptionFromViewValue(a)) && a.element;b && !b.selected && (b.selected = !0);return a;
          }function n(a, b) {
            a.element = b;b.disabled = a.disabled;a.label !== b.label && (b.label = a.label, b.textContent = a.label);b.value = a.selectValue;
          }var q = l[0],
              r = l[1],
              w = h.multiple;l = 0;for (var z = k.children(), v = z.length; l < v; l++) {
            if ("" === z[l].value) {
              q.hasEmptyOption = !0;q.emptyOption = z.eq(l);break;
            }
          }k.empty();l = !!q.emptyOption;B(e.cloneNode(!1)).val("?");var s,
              u = c(h.ngOptions, k, d),
              A = b[0].createDocumentFragment();q.generateUnknownOptionValue = function (a) {
            return "?";
          };w ? (q.writeValue = function (a) {
            if (s) {
              var b = a && a.map(m) || [];s.items.forEach(function (a) {
                a.element.selected && -1 === Array.prototype.indexOf.call(b, a) && (a.element.selected = !1);
              });
            }
          }, q.readValue = function () {
            var a = k.val() || [],
                b = [];p(a, function (a) {
              (a = s.selectValueMap[a]) && !a.disabled && b.push(s.getViewValueFromOption(a));
            });return b;
          }, u.trackBy && d.$watchCollection(function () {
            if (I(r.$viewValue)) return r.$viewValue.map(function (a) {
              return u.getTrackByValue(a);
            });
          }, function () {
            r.$render();
          })) : (q.writeValue = function (a) {
            if (s) {
              var b = k[0].options[k[0].selectedIndex],
                  c = s.getOptionFromViewValue(a);b && b.removeAttribute("selected");c ? (k[0].value !== c.selectValue && (q.removeUnknownOption(), k[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute("selected", "selected")) : q.selectUnknownOrEmptyOption(a);
            }
          }, q.readValue = function () {
            var a = s.selectValueMap[k.val()];return a && !a.disabled ? (q.unselectEmptyOption(), q.removeUnknownOption(), s.getViewValueFromOption(a)) : null;
          }, u.trackBy && d.$watch(function () {
            return u.getTrackByValue(r.$viewValue);
          }, function () {
            r.$render();
          }));
          l && (a(q.emptyOption)(d), k.prepend(q.emptyOption), 8 === q.emptyOption[0].nodeType ? (q.hasEmptyOption = !1, q.registerOption = function (a, b) {
            "" === b.val() && (q.hasEmptyOption = !0, q.emptyOption = b, q.emptyOption.removeClass("ng-scope"), r.$render(), b.on("$destroy", function () {
              var a = q.$isEmptyOptionSelected();q.hasEmptyOption = !1;q.emptyOption = void 0;a && r.$render();
            }));
          }) : q.emptyOption.removeClass("ng-scope"));d.$watchCollection(u.getWatchables, function () {
            var a = s && q.readValue();if (s) for (var b = s.items.length - 1; 0 <= b; b--) {
              var c = s.items[b];t(c.group) ? Gb(c.element.parentNode) : Gb(c.element);
            }s = u.getOptions();var d = {};s.items.forEach(function (a) {
              var b;if (t(a.group)) {
                b = d[a.group];b || (b = f.cloneNode(!1), A.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);var c = e.cloneNode(!1);b.appendChild(c);n(a, c);
              } else b = e.cloneNode(!1), A.appendChild(b), n(a, b);
            });k[0].appendChild(A);r.$render();r.$isEmpty(a) || (b = q.readValue(), (u.trackBy || w ? sa(a, b) : a === b) || (r.$setViewValue(b), r.$render()));
          });
        } } };
  }],
      $e = ["$locale", "$interpolate", "$log", function (a, b, d) {
    var c = /{}/g,
        e = /^when(Minus)?(.+)$/;return { link: function link(f, g, k) {
        function h(a) {
          g.text(a || "");
        }var l = k.count,
            m = k.$attr.when && g.attr(k.$attr.when),
            n = k.offset || 0,
            q = f.$eval(m) || {},
            r = {},
            t = b.startSymbol(),
            z = b.endSymbol(),
            v = t + l + "-" + n + z,
            s = $.noop,
            u;p(k, function (a, b) {
          var c = e.exec(b);c && (c = (c[1] ? "-" : "") + N(c[2]), q[c] = g.attr(k.$attr[b]));
        });p(q, function (a, d) {
          r[d] = b(a.replace(c, v));
        });f.$watch(l, function (b) {
          var c = parseFloat(b),
              e = T(c);e || c in q || (c = a.pluralCat(c - n));c === u || e && T(u) || (s(), e = r[c], w(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), s = C, h()) : s = f.$watch(e, h), u = c);
        });
      } };
  }],
      af = ["$parse", "$animate", "$compile", function (a, b, d) {
    var c = M("ngRepeat"),
        e = function e(a, b, c, d, _e2, m, n) {
      a[c] = d;_e2 && (a[_e2] = m);a.$index = b;a.$first = 0 === b;a.$last = b === n - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (b & 1));
    };return { restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(f, g) {
        var k = g.ngRepeat,
            h = d.$$createComment("end ngRepeat", k),
            l = k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
        if (!l) throw c("iexp", k);var m = l[1],
            n = l[2],
            q = l[3],
            r = l[4],
            l = m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if (!l) throw c("iidexp", m);var t = l[3] || l[1],
            z = l[2];if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) throw c("badident", q);var v,
            s,
            u,
            w,
            y = { $id: Pa };r ? v = a(r) : (u = function u(a, b) {
          return Pa(b);
        }, w = function w(a) {
          return a;
        });return function (a, d, f, g, l) {
          v && (s = function s(b, c, d) {
            z && (y[z] = b);y[t] = c;y.$index = d;return v(a, y);
          });var m = S();a.$watchCollection(n, function (f) {
            var g,
                n,
                r = d[0],
                v,
                y = S(),
                B,
                A,
                G,
                C,
                E,
                D,
                I;q && (a[q] = f);if (xa(f)) E = f, n = s || u;else for (I in n = s || w, E = [], f) {
              ra.call(f, I) && "$" !== I.charAt(0) && E.push(I);
            }B = E.length;I = Array(B);for (g = 0; g < B; g++) {
              if (A = f === E ? g : E[g], G = f[A], C = n(A, G, g), m[C]) D = m[C], delete m[C], y[C] = D, I[g] = D;else {
                if (y[C]) throw p(I, function (a) {
                  a && a.scope && (m[a.id] = a);
                }), c("dupes", k, C, G);I[g] = { id: C, scope: void 0, clone: void 0 };y[C] = !0;
              }
            }for (v in m) {
              D = m[v];C = vb(D.clone);b.leave(C);if (C[0].parentNode) for (g = 0, n = C.length; g < n; g++) {
                C[g].$$NG_REMOVED = !0;
              }D.scope.$destroy();
            }for (g = 0; g < B; g++) {
              if (A = f === E ? g : E[g], G = f[A], D = I[g], D.scope) {
                v = r;do {
                  v = v.nextSibling;
                } while (v && v.$$NG_REMOVED);D.clone[0] !== v && b.move(vb(D.clone), null, r);r = D.clone[D.clone.length - 1];e(D.scope, g, t, G, z, A, B);
              } else l(function (a, c) {
                D.scope = c;var d = h.cloneNode(!1);a[a.length++] = d;b.enter(a, null, r);r = d;D.clone = a;y[D.id] = D;e(D.scope, g, t, G, z, A, B);
              });
            }m = y;
          });
        };
      } };
  }],
      bf = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngShow, function (b) {
          a[b ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      Ve = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngHide, function (b) {
          a[b ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      cf = Qa(function (a, b, d) {
    a.$watch(d.ngStyle, function (a, d) {
      d && a !== d && p(d, function (a, c) {
        b.css(c, "");
      });a && b.css(a);
    }, !0);
  }),
      df = ["$animate", "$compile", function (a, b) {
    return { require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {};
      }], link: function link(d, c, e, f) {
        var g = [],
            k = [],
            h = [],
            l = [],
            m = function m(a, b) {
          return function (c) {
            !1 !== c && a.splice(b, 1);
          };
        };d.$watch(e.ngSwitch || e.on, function (c) {
          for (var d, e; h.length;) {
            a.cancel(h.pop());
          }d = 0;for (e = l.length; d < e; ++d) {
            var r = vb(k[d].clone);l[d].$destroy();(h[d] = a.leave(r)).done(m(h, d));
          }k.length = 0;l.length = 0;(g = f.cases["!" + c] || f.cases["?"]) && p(g, function (c) {
            c.transclude(function (d, e) {
              l.push(e);var f = c.element;d[d.length++] = b.$$createComment("end ngSwitchWhen");k.push({ clone: d });a.enter(d, f.parent(), f);
            });
          });
        });
      } };
  }],
      ef = Qa({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
      a = d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function (a, b, c) {
        return c[b - 1] !== a;
      });p(a, function (a) {
        c.cases["!" + a] = c.cases["!" + a] || [];c.cases["!" + a].push({ transclude: e, element: b });
      });
    } }),
      ff = Qa({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
      c.cases["?"] = c.cases["?"] || [];c.cases["?"].push({ transclude: e, element: b });
    } }),
      kh = M("ngTransclude"),
      hf = ["$compile", function (a) {
    return { restrict: "EAC", terminal: !0, compile: function compile(b) {
        var d = a(b.contents());b.empty();return function (a, b, f, g, k) {
          function h() {
            d(a, function (a) {
              b.append(a);
            });
          }if (!k) throw kh("orphan", Aa(b));f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = "");f = f.ngTransclude || f.ngTranscludeSlot;k(function (a, c) {
            var d;if (d = a.length) a: {
              d = 0;for (var f = a.length; d < f; d++) {
                var g = a[d];if (g.nodeType !== Oa || g.nodeValue.trim()) {
                  d = !0;break a;
                }
              }d = void 0;
            }d ? b.append(a) : (h(), c.$destroy());
          }, null, f);f && !k.isSlotFilled(f) && h();
        };
      } };
  }],
      Je = ["$templateCache", function (a) {
    return { restrict: "E", terminal: !0, compile: function compile(b, d) {
        "text/ng-template" === d.type && a.put(d.id, b[0].text);
      } };
  }],
      lh = { $setViewValue: C, $render: C },
      mh = ["$element", "$scope", function (a, b) {
    function d() {
      g || (g = !0, b.$$postDigest(function () {
        g = !1;e.ngModelCtrl.$render();
      }));
    }function c(a) {
      k || (k = !0, b.$$postDigest(function () {
        b.$$destroyed || (k = !1, e.ngModelCtrl.$setViewValue(e.readValue()), a && e.ngModelCtrl.$render());
      }));
    }var e = this,
        f = new Ib();e.selectValueMap = {};e.ngModelCtrl = lh;
    e.multiple = !1;e.unknownOption = B(u.document.createElement("option"));e.hasEmptyOption = !1;e.emptyOption = void 0;e.renderUnknownOption = function (b) {
      b = e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Ga(e.unknownOption, !0);a.val(b);
    };e.updateUnknownOption = function (b) {
      b = e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ga(e.unknownOption, !0);a.val(b);
    };e.generateUnknownOptionValue = function (a) {
      return "? " + Pa(a) + " ?";
    };e.removeUnknownOption = function () {
      e.unknownOption.parent() && e.unknownOption.remove();
    };e.selectEmptyOption = function () {
      e.emptyOption && (a.val(""), Ga(e.emptyOption, !0));
    };e.unselectEmptyOption = function () {
      e.hasEmptyOption && Ga(e.emptyOption, !1);
    };b.$on("$destroy", function () {
      e.renderUnknownOption = C;
    });e.readValue = function () {
      var b = a.val(),
          b = b in e.selectValueMap ? e.selectValueMap[b] : b;return e.hasOption(b) ? b : null;
    };e.writeValue = function (b) {
      var c = a[0].options[a[0].selectedIndex];c && Ga(B(c), !1);e.hasOption(b) ? (e.removeUnknownOption(), c = Pa(b), a.val(c in e.selectValueMap ? c : b), Ga(B(a[0].options[a[0].selectedIndex]), !0)) : e.selectUnknownOrEmptyOption(b);
    };e.addOption = function (a, b) {
      if (8 !== b[0].nodeType) {
        Ia(a, '"option value"');"" === a && (e.hasEmptyOption = !0, e.emptyOption = b);var c = f.get(a) || 0;f.set(a, c + 1);d();
      }
    };e.removeOption = function (a) {
      var b = f.get(a);b && (1 === b ? (f.delete(a), "" === a && (e.hasEmptyOption = !1, e.emptyOption = void 0)) : f.set(a, b - 1));
    };e.hasOption = function (a) {
      return !!f.get(a);
    };e.$hasEmptyOption = function () {
      return e.hasEmptyOption;
    };e.$isUnknownOptionSelected = function () {
      return a[0].options[0] === e.unknownOption[0];
    };e.$isEmptyOptionSelected = function () {
      return e.hasEmptyOption && a[0].options[a[0].selectedIndex] === e.emptyOption[0];
    };e.selectUnknownOrEmptyOption = function (a) {
      null == a && e.emptyOption ? (e.removeUnknownOption(), e.selectEmptyOption()) : e.unknownOption.parent().length ? e.updateUnknownOption(a) : e.renderUnknownOption(a);
    };var g = !1,
        k = !1;e.registerOption = function (a, b, f, g, k) {
      if (f.$attr.ngValue) {
        var p,
            r = NaN;f.$observe("value", function (a) {
          var d,
              f = b.prop("selected");t(r) && (e.removeOption(p), delete e.selectValueMap[r], d = !0);r = Pa(a);p = a;e.selectValueMap[r] = a;e.addOption(a, b);b.attr("value", r);d && f && c();
        });
      } else g ? f.$observe("value", function (a) {
        e.readValue();var d,
            f = b.prop("selected");t(p) && (e.removeOption(p), d = !0);p = a;e.addOption(a, b);d && f && c();
      }) : k ? a.$watch(k, function (a, d) {
        f.$set("value", a);var g = b.prop("selected");d !== a && e.removeOption(d);e.addOption(a, b);d && g && c();
      }) : e.addOption(f.value, b);f.$observe("disabled", function (a) {
        if ("true" === a || a && b.prop("selected")) e.multiple ? c(!0) : (e.ngModelCtrl.$setViewValue(null), e.ngModelCtrl.$render());
      });
      b.on("$destroy", function () {
        var a = e.readValue(),
            b = f.value;e.removeOption(b);d();(e.multiple && a && -1 !== a.indexOf(b) || a === b) && c(!0);
      });
    };
  }],
      Ke = function Ke() {
    return { restrict: "E", require: ["select", "?ngModel"], controller: mh, priority: 1, link: { pre: function pre(a, b, d, c) {
          var e = c[0],
              f = c[1];if (f) {
            if (e.ngModelCtrl = f, b.on("change", function () {
              e.removeUnknownOption();a.$apply(function () {
                f.$setViewValue(e.readValue());
              });
            }), d.multiple) {
              e.multiple = !0;e.readValue = function () {
                var a = [];p(b.find("option"), function (b) {
                  b.selected && !b.disabled && (b = b.value, a.push(b in e.selectValueMap ? e.selectValueMap[b] : b));
                });return a;
              };e.writeValue = function (a) {
                p(b.find("option"), function (b) {
                  var c = !!a && (-1 !== Array.prototype.indexOf.call(a, b.value) || -1 !== Array.prototype.indexOf.call(a, e.selectValueMap[b.value]));c !== b.selected && Ga(B(b), c);
                });
              };var g,
                  k = NaN;a.$watch(function () {
                k !== f.$viewValue || sa(g, f.$viewValue) || (g = ja(f.$viewValue), f.$render());k = f.$viewValue;
              });f.$isEmpty = function (a) {
                return !a || 0 === a.length;
              };
            }
          } else e.registerOption = C;
        }, post: function post(a, b, d, c) {
          var e = c[1];if (e) {
            var f = c[0];e.$render = function () {
              f.writeValue(e.$viewValue);
            };
          }
        } } };
  },
      Le = ["$interpolate", function (a) {
    return { restrict: "E", priority: 100, compile: function compile(b, d) {
        var c, e;t(d.ngValue) || (t(d.value) ? c = a(d.value, !0) : (e = a(b.text(), !0)) || d.$set("value", b.text()));return function (a, b, d) {
          var h = b.parent();(h = h.data("$selectController") || h.parent().data("$selectController")) && h.registerOption(a, b, d, c, e);
        };
      } };
  }],
      ad = function ad() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        c && (d.required = !0, c.$validators.required = function (a, b) {
          return !d.required || !c.$isEmpty(b);
        }, d.$observe("required", function () {
          c.$validate();
        }));
      } };
  },
      $c = function $c() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e,
              f = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
            D(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw M("ngPattern")("noregexp", f, a, Aa(b));e = a || void 0;c.$validate();
          });c.$validators.pattern = function (a, b) {
            return c.$isEmpty(b) || w(e) || e.test(b);
          };
        }
      } };
  },
      cd = function cd() {
    return { restrict: "A", require: "?ngModel",
      link: function link(a, b, d, c) {
        if (c) {
          var e = -1;d.$observe("maxlength", function (a) {
            a = Z(a);e = T(a) ? -1 : a;c.$validate();
          });c.$validators.maxlength = function (a, b) {
            return 0 > e || c.$isEmpty(b) || b.length <= e;
          };
        }
      } };
  },
      bd = function bd() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e = 0;d.$observe("minlength", function (a) {
            e = Z(a) || 0;c.$validate();
          });c.$validators.minlength = function (a, b) {
            return c.$isEmpty(b) || b.length >= e;
          };
        }
      } };
  };u.angular.bootstrap ? u.console && console.log("WARNING: Tried to load angular more than once.") : (Be(), Ee($), $.module("ngLocale", [], ["$provide", function (a) {
    function b(a) {
      a += "";var b = a.indexOf(".");return -1 == b ? 0 : a.length - b - 1;
    }a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        STANDALONEMONTH: "January February March April May June July August September October November December".split(" "), WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2,
          minFrac: 2, minInt: 1, negPre: "-\xA4", negSuf: "", posPre: "\xA4", posSuf: "" }] }, id: "en-us", localeID: "en_US", pluralCat: function pluralCat(a, c) {
        var e = a | 0,
            f = c;void 0 === f && (f = Math.min(b(a), 3));Math.pow(10, f);return 1 == e && 0 == f ? "one" : "other";
      } });
  }]), B(function () {
    we(u.document, Uc);
  }));
})(window);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
; /*
  AngularJS v1.6.6
  (c) 2010-2017 Google, Inc. http://angularjs.org
  License: MIT
  */
(function (J, d) {
  'use strict';
  function A(d) {
    k && d.get("$route");
  }function B(t, u, g) {
    return { restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function link(a, f, b, c, m) {
        function v() {
          l && (g.cancel(l), l = null);n && (n.$destroy(), n = null);p && (l = g.leave(p), l.done(function (a) {
            !1 !== a && (l = null);
          }), p = null);
        }function E() {
          var b = t.current && t.current.locals;if (d.isDefined(b && b.$template)) {
            var b = a.$new(),
                c = t.current;p = m(b, function (b) {
              g.enter(b, null, p || f).done(function (b) {
                !1 === b || !d.isDefined(w) || w && !a.$eval(w) || u();
              });
              v();
            });n = c.scope = b;n.$emit("$viewContentLoaded");n.$eval(k);
          } else v();
        }var n,
            p,
            l,
            w = b.autoscroll,
            k = b.onload || "";a.$on("$routeChangeSuccess", E);E();
      } };
  }function C(d, k, g) {
    return { restrict: "ECA", priority: -400, link: function link(a, f) {
        var b = g.current,
            c = b.locals;f.html(c.$template);var m = d(f.contents());if (b.controller) {
          c.$scope = a;var v = k(b.controller, c);b.controllerAs && (a[b.controllerAs] = v);f.data("$ngControllerController", v);f.children().data("$ngControllerController", v);
        }a[b.resolveAs || "$resolve"] = c;m(a);
      } };
  }var x,
      y,
      F,
      G,
      z = d.module("ngRoute", []).info({ angularVersion: "1.6.6" }).provider("$route", function () {
    function t(a, f) {
      return d.extend(Object.create(a), f);
    }function u(a, d) {
      var b = d.caseInsensitiveMatch,
          c = { originalPath: a, regexp: a },
          g = c.keys = [];a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function (a, b, d, c) {
        a = "?" === c || "*?" === c ? "?" : null;c = "*" === c || "*?" === c ? "*" : null;g.push({ name: d, optional: !!a });b = b || "";return "" + (a ? "" : b) + "(?:" + (a ? b : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "");
      }).replace(/([/$*])/g, "\\$1");c.regexp = new RegExp("^" + a + "$", b ? "i" : "");return c;
    }x = d.isArray;y = d.isObject;F = d.isDefined;G = d.noop;var g = {};this.when = function (a, f) {
      var b;b = void 0;if (x(f)) {
        b = b || [];for (var c = 0, m = f.length; c < m; c++) {
          b[c] = f[c];
        }
      } else if (y(f)) for (c in b = b || {}, f) {
        if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) b[c] = f[c];
      }b = b || f;d.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0);d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch);g[a] = d.extend(b, a && u(a, b));a && (c = "/" === a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/", g[c] = d.extend({ redirectTo: a }, u(c, b)));return this;
    };this.caseInsensitiveMatch = !1;this.otherwise = function (a) {
      "string" === typeof a && (a = { redirectTo: a });this.when(null, a);return this;
    };k = !0;this.eagerInstantiationEnabled = function (a) {
      return F(a) ? (k = a, this) : k;
    };this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", "$browser", function (a, f, b, c, m, k, u, n) {
      function p(e) {
        var h = q.current;(y = (s = C()) && h && s.$$route === h.$$route && d.equals(s.pathParams, h.pathParams) && !s.reloadOnSearch && !D) || !h && !s || a.$broadcast("$routeChangeStart", s, h).defaultPrevented && e && e.preventDefault();
      }function l() {
        var e = q.current,
            h = s;if (y) e.params = h.params, d.copy(e.params, b), a.$broadcast("$routeUpdate", e);else if (h || e) {
          D = !1;q.current = h;var H = c.resolve(h);n.$$incOutstandingRequestCount();H.then(w).then(z).then(function (c) {
            return c && H.then(A).then(function (c) {
              h === q.current && (h && (h.locals = c, d.copy(h.params, b)), a.$broadcast("$routeChangeSuccess", h, e));
            });
          }).catch(function (b) {
            h === q.current && a.$broadcast("$routeChangeError", h, e, b);
          }).finally(function () {
            n.$$completeOutstandingRequest(G);
          });
        }
      }function w(e) {
        var a = { route: e, hasRedirection: !1 };if (e) if (e.redirectTo) {
          if (d.isString(e.redirectTo)) a.path = x(e.redirectTo, e.params), a.search = e.params, a.hasRedirection = !0;else {
            var b = f.path(),
                g = f.search();e = e.redirectTo(e.pathParams, b, g);d.isDefined(e) && (a.url = e, a.hasRedirection = !0);
          }
        } else if (e.resolveRedirectTo) return c.resolve(m.invoke(e.resolveRedirectTo)).then(function (e) {
          d.isDefined(e) && (a.url = e, a.hasRedirection = !0);return a;
        });return a;
      }
      function z(a) {
        var b = !0;if (a.route !== q.current) b = !1;else if (a.hasRedirection) {
          var d = f.url(),
              c = a.url;c ? f.url(c).replace() : c = f.path(a.path).search(a.search).replace().url();c !== d && (b = !1);
        }return b;
      }function A(a) {
        if (a) {
          var b = d.extend({}, a.resolve);d.forEach(b, function (a, e) {
            b[e] = d.isString(a) ? m.get(a) : m.invoke(a, null, null, e);
          });a = B(a);d.isDefined(a) && (b.$template = a);return c.all(b);
        }
      }function B(a) {
        var b, c;d.isDefined(b = a.template) ? d.isFunction(b) && (b = b(a.params)) : d.isDefined(c = a.templateUrl) && (d.isFunction(c) && (c = c(a.params)), d.isDefined(c) && (a.loadedTemplateUrl = u.valueOf(c), b = k(c)));return b;
      }function C() {
        var a, b;d.forEach(g, function (c, g) {
          var r;if (r = !b) {
            var k = f.path();r = c.keys;var m = {};if (c.regexp) {
              if (k = c.regexp.exec(k)) {
                for (var l = 1, n = k.length; l < n; ++l) {
                  var p = r[l - 1],
                      q = k[l];p && q && (m[p.name] = q);
                }r = m;
              } else r = null;
            } else r = null;r = a = r;
          }r && (b = t(c, { params: d.extend({}, f.search(), a), pathParams: a }), b.$$route = c);
        });return b || g[null] && t(g[null], { params: {}, pathParams: {} });
      }function x(a, b) {
        var c = [];d.forEach((a || "").split(":"), function (a, d) {
          if (0 === d) c.push(a);else {
            var e = a.match(/(\w+)(?:[?*])?(.*)/),
                f = e[1];c.push(b[f]);c.push(e[2] || "");delete b[f];
          }
        });return c.join("");
      }var D = !1,
          s,
          y,
          q = { routes: g, reload: function reload() {
          D = !0;var b = { defaultPrevented: !1, preventDefault: function preventDefault() {
              this.defaultPrevented = !0;D = !1;
            } };a.$evalAsync(function () {
            p(b);b.defaultPrevented || l();
          });
        }, updateParams: function updateParams(a) {
          if (this.current && this.current.$$route) a = d.extend({}, this.current.params, a), f.path(x(this.current.$$route.originalPath, a)), f.search(a);else throw I("norout");
        } };a.$on("$locationChangeStart", p);a.$on("$locationChangeSuccess", l);return q;
    }];
  }).run(A),
      I = d.$$minErr("ngRoute"),
      k;A.$inject = ["$injector"];z.provider("$routeParams", function () {
    this.$get = function () {
      return {};
    };
  });z.directive("ngView", B);z.directive("ngView", C);B.$inject = ["$route", "$anchorScroll", "$animate"];C.$inject = ["$compile", "$controller", "$route"];
})(window, window.angular);
//# sourceMappingURL=angular-route.min.js.map
; /*!
  * Bootstrap v3.3.7 (http://getbootstrap.com)
  * Copyright 2011-2016 Twitter, Inc.
  * Licensed under the MIT license
  */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"),
        b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
      if (void 0 !== a.style[c]) return { end: b[c] };
    }return !1;
  }a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;a(this).one("bsTransitionEnd", function () {
      c = !0;
    });var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
      } });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }var e = a(this),
        f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a("#" === f ? [] : f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
      var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target).closest(".btn");b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
          g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }var c = function c(b, _c2) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c2, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {case 37:
          this.prev();break;case 39:
          this.next();break;default:
          return;}a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    if (!this.sliding) return this.slide("next");
  }, c.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
        k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
      }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };var e = function e(c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
  }function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }var d = function d(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
  }function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
    }));
  }function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
    var e = a(this);if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
      }return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
            g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);if (i.length) {
          var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";
  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }var c = function c(b, _c3) {
    this.options = _c3, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");var g = function g() {
        d.removeBackdrop(), b && b();
      };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;if (!a) {
      var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
    }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
  };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) {
      if (this.inState[a]) return !0;
    }return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
          f = this.tip(),
          g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
        var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
        d.css({ top: Math.round(a.top), left: Math.round(a.left) });
      } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
        j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
  }, c.prototype.fixTitle = function () {
    var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = window.SVGElement && c instanceof window.SVGElement,
        g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
        h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
        i = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, h, i, g);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do {
      a += ~~(1e6 * Math.random());
    } while (document.getElementById(a));return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
    });
  };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.init("popover", a, b);
  };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }var c = function c(b) {
    this.element = a(b);
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
          g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };var e = function e(c) {
    c.preventDefault(), b.call(a(this), "show");
  };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();if (null != c && "top" == this.affixed) return e < c && "top";if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
        b = this.$element.offset();return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }"bottom" == h && this.$element.offset({ top: g - b - f });
    }
  };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);;var app = angular.module('nlApp', ['ngRoute', 'app.controller.main', 'app.controller.registration', 'app.service']);

app.config(function ($routeProvider, $locationProvider) {

  // define routeProvider routes
  $routeProvider

  // Home Route    
  .when('/', {
    templateUrl: 'app/views/templates/home.html'
  })

  // Login Route
  .when('/login', {
    templateUrl: 'app/views/templates/login.html'
  }).when('/register', {
    templateUrl: 'app/views/templates/register.html',
    controller: 'RegistrationController'
  })

  // If no match then redirect to Home Route          
  .otherwise({
    redirectTo: '/'
  });

  // Required for no base (remove '#' from address bar)
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});angular.module('app.controller.main', ['app.service']).controller('MainController', ['MyService', function (MyService) {

  console.log('Main controller init');
}]);
;angular.module('app.controller.registration', ['app.service.user']).controller('RegistrationController', ['$scope', '$location', 'UserService', function ($scope, $location, UserService) {

  console.log('Registration Controller Init');

  // on controller load - clear form data
  $scope.formData = {};

  /**
   * Register new user
   */
  $scope.registerUser = function (formData) {
    UserService.registerUser(formData).then(function (resp) {
      $scope.formData.error = $scope.formData.success = false;
      if (resp.data.success) {
        // ON SUCCESS - display success mssg and redirect to home page
        $scope.formData.success = resp.data.message;
        $timeout(function () {
          return $location.path('/');
        }, 2000);
      } else {
        $scope.formData.error = resp.data.message;
      }
    }).catch(function (err) {
      $scope.formData.success = false;
      $scope.formData.error = 'There was an error registering your account';
    });
  };
}]);
;angular.module('app.service', []).service('MyService', ['$http', function ($http) {

  function saveAccount(accountData) {
    return $http.post('/api/account', accountData);
  }

  function getAccounts() {
    return $http.get('/api/account');
  }

  return {
    saveAccount: saveAccount,
    getAccounts: getAccounts
  };
}]);
;angular.module('app.service.user', []).service('UserService', ['$http', function ($http) {

  function registerUser(formData) {
    return $http.post('/api/user', formData);
  }

  return {
    registerUser: registerUser
  };
}]);
