if(! function(e, t) {
		"use strict";
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
			if(!e.document) throw new Error("jQuery requires a window with a document");
			return t(e)
		} : t(e)
	}("undefined" != typeof window ? window : this, function(e, t) {
		"use strict";

		function y(t) {
			return null != t && t === t.window
		}
		var n = [],
			r = e.document,
			i = Object.getPrototypeOf,
			o = n.slice,
			a = n.concat,
			s = n.push,
			u = n.indexOf,
			l = {},
			c = l.toString,
			f = l.hasOwnProperty,
			p = f.toString,
			d = p.call(Object),
			h = {},
			g = function(t) {
				return "function" == typeof t && "number" != typeof t.nodeType
			},
			v = {
				type: !0,
				src: !0,
				noModule: !0
			};

		function m(e, t, n) {
			var i, o = (t = t || r).createElement("script");
			if(o.text = e, n)
				for(i in v) n[i] && (o[i] = n[i]);
			t.head.appendChild(o).parentNode.removeChild(o)
		}

		function x(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
		}
		var w = function(e, t) {
				return new w.fn.init(e, t)
			},
			T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

		function C(e) {
			var t = !!e && "length" in e && e.length,
				n = x(e);
			return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
		}
		w.fn = w.prototype = {
			jquery: "3.3.1",
			constructor: w,
			length: 0,
			toArray: function() {
				return o.call(this)
			},
			get: function(e) {
				return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
			},
			pushStack: function(e) {
				var t = w.merge(this.constructor(), e);
				return t.prevObject = this, t
			},
			each: function(e) {
				return w.each(this, e)
			},
			map: function(e) {
				return this.pushStack(w.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function() {
				return this.pushStack(o.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(0 <= n && n < t ? [this[n]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor()
			},
			push: s,
			sort: n.sort,
			splice: n.splice
		}, w.extend = w.fn.extend = function() {
			var e, t, n, r, i, o, a = arguments[0] || {},
				s = 1,
				u = arguments.length,
				l = !1;
			for("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
				if(null != (e = arguments[s]))
					for(t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (o = i ? (i = !1, n && Array.isArray(n) ? n : []) : n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
			return a
		}, w.extend({
			expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e) {
				throw new Error(e)
			},
			noop: function() {},
			isPlainObject: function(e) {
				var t, n;
				return !(!e || "[object Object]" !== c.call(e) || (t = i(e)) && ("function" != typeof(n = f.call(t, "constructor") && t.constructor) || p.call(n) !== d))
			},
			isEmptyObject: function(e) {
				var t;
				for(t in e) return !1;
				return !0
			},
			globalEval: function(e) {
				m(e)
			},
			each: function(e, t) {
				var n, r = 0;
				if(C(e))
					for(n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
				else
					for(r in e)
						if(!1 === t.call(e[r], r, e[r])) break; return e
			},
			trim: function(e) {
				return null == e ? "" : (e + "").replace(T, "")
			},
			makeArray: function(e, t) {
				var n = t || [];
				return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
			},
			inArray: function(e, t, n) {
				return null == t ? -1 : u.call(t, e, n)
			},
			merge: function(e, t) {
				for(var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
				return e.length = i, e
			},
			grep: function(e, t, n) {
				for(var i = [], o = 0, a = e.length, s = !n; o < a; o++) !t(e[o], o) != s && i.push(e[o]);
				return i
			},
			map: function(e, t, n) {
				var r, i, o = 0,
					s = [];
				if(C(e))
					for(r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
				else
					for(o in e) null != (i = t(e[o], o, n)) && s.push(i);
				return a.apply([], s)
			},
			guid: 1,
			support: h
		}), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
			l["[object " + t + "]"] = t.toLowerCase()
		});
		var E = function(e) {
			function ee(e, t, n) {
				var r = "0x" + t - 65536;
				return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			}

			function re() {
				p()
			}
			var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
				w = e.document,
				T = 0,
				C = 0,
				E = ae(),
				k = ae(),
				S = ae(),
				D = function(e, t) {
					return e === t && (f = !0), 0
				},
				N = {}.hasOwnProperty,
				A = [],
				j = A.pop,
				q = A.push,
				L = A.push,
				H = A.slice,
				O = function(e, t) {
					for(var n = 0, r = e.length; n < r; n++)
						if(e[n] === t) return n;
					return -1
				},
				P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				M = "[\\x20\\t\\r\\n\\f]",
				R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
				I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
				W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
				$ = new RegExp(M + "+", "g"),
				B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
				F = new RegExp("^" + M + "*," + M + "*"),
				_ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
				z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
				X = new RegExp(W),
				U = new RegExp("^" + R + "$"),
				V = {
					ID: new RegExp("^#(" + R + ")"),
					CLASS: new RegExp("^\\.(" + R + ")"),
					TAG: new RegExp("^(" + R + "|[*])"),
					ATTR: new RegExp("^" + I),
					PSEUDO: new RegExp("^" + W),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + P + ")$", "i"),
					needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
				},
				G = /^(?:input|select|textarea|button)$/i,
				Y = /^h\d$/i,
				Q = /^[^{]+\{\s*\[native \w/,
				J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				K = /[+~]/,
				Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
				te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				ne = function(e, t) {
					return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
				},
				ie = me(function(e) {
					return !0 === e.disabled && ("form" in e || "label" in e)
				}, {
					dir: "parentNode",
					next: "legend"
				});
			try {
				L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
			} catch(e) {
				L = {
					apply: A.length ? function(e, t) {
						q.apply(e, H.call(t))
					} : function(e, t) {
						for(var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}

			function oe(e, t, r, i) {
				var o, s, l, c, f, h, v, m = t && t.ownerDocument,
					T = t ? t.nodeType : 9;
				if(r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
				if(!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
					if(11 !== T && (f = J.exec(e)))
						if(o = f[1]) {
							if(9 === T) {
								if(!(l = t.getElementById(o))) return r;
								if(l.id === o) return r.push(l), r
							} else if(m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
						} else {
							if(f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
							if((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
						}
					if(n.qsa && !S[e + " "] && (!y || !y.test(e))) {
						if(1 !== T) m = t, v = e;
						else if("object" !== t.nodeName.toLowerCase()) {
							for((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + ve(h[s]);
							v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
						}
						if(v) try {
							return L.apply(r, m.querySelectorAll(v)), r
						} catch(e) {} finally {
							c === b && t.removeAttribute("id")
						}
					}
				}
				return u(e.replace(B, "$1"), t, r, i)
			}

			function ae() {
				var e = [];
				return function t(n, i) {
					return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
				}
			}

			function se(e) {
				return e[b] = !0, e
			}

			function ue(e) {
				var t = d.createElement("fieldset");
				try {
					return !!e(t)
				} catch(e) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function le(e, t) {
				for(var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
			}

			function ce(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
				if(r) return r;
				if(n)
					for(; n = n.nextSibling;)
						if(n === t) return -1;
				return e ? 1 : -1
			}

			function fe(e) {
				return function(t) {
					return "input" === t.nodeName.toLowerCase() && t.type === e
				}
			}

			function pe(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return("input" === n || "button" === n) && t.type === e
				}
			}

			function de(e) {
				return function(t) {
					return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
				}
			}

			function he(e) {
				return se(function(t) {
					return t = +t, se(function(n, r) {
						for(var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}

			function ge(e) {
				return e && void 0 !== e.getElementsByTagName && e
			}
			for(t in n = oe.support = {}, o = oe.isXML = function(e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return !!t && "HTML" !== t.nodeName
				}, p = oe.setDocument = function(e) {
					var t, i, a = e ? e.ownerDocument || e : w;
					return a !== d && 9 === a.nodeType && a.documentElement && (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
						return e.className = "i", !e.getAttribute("className")
					}), n.getElementsByTagName = ue(function(e) {
						return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
					}), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
						return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
					}), n.getById ? (r.filter.ID = function(e) {
						var t = e.replace(Z, ee);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}, r.find.ID = function(e, t) {
						if(void 0 !== t.getElementById && g) {
							var n = t.getElementById(e);
							return n ? [n] : []
						}
					}) : (r.filter.ID = function(e) {
						var t = e.replace(Z, ee);
						return function(e) {
							var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
							return n && n.value === t
						}
					}, r.find.ID = function(e, t) {
						if(void 0 !== t.getElementById && g) {
							var n, r, i, o = t.getElementById(e);
							if(o) {
								if((n = o.getAttributeNode("id")) && n.value === e) return [o];
								for(i = t.getElementsByName(e), r = 0; o = i[r++];)
									if((n = o.getAttributeNode("id")) && n.value === e) return [o]
							}
							return []
						}
					}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
						return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
					} : function(e, t) {
						var n, r = [],
							i = 0,
							o = t.getElementsByTagName(e);
						if("*" !== e) return o;
						for(; n = o[i++];) 1 === n.nodeType && r.push(n);
						return r
					}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
						if(void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
					}, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
						h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
					}), ue(function(e) {
						e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var t = d.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
					})), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
						n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
					}), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
					} : function(e, t) {
						if(t)
							for(; t = t.parentNode;)
								if(t === e) return !0;
						return !1
					}, D = t ? function(e, t) {
						if(e === t) return f = !0, 0;
						var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
					} : function(e, t) {
						if(e === t) return f = !0, 0;
						var n, r = 0,
							i = e.parentNode,
							o = t.parentNode,
							a = [e],
							s = [t];
						if(!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
						if(i === o) return ce(e, t);
						for(n = e; n = n.parentNode;) a.unshift(n);
						for(n = t; n = n.parentNode;) s.unshift(n);
						for(; a[r] === s[r];) r++;
						return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
					}), d
				}, oe.matches = function(e, t) {
					return oe(e, null, null, t)
				}, oe.matchesSelector = function(e, t) {
					if((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
						var r = m.call(e, t);
						if(r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
					} catch(e) {}
					return 0 < oe(t, d, null, [e]).length
				}, oe.contains = function(e, t) {
					return(e.ownerDocument || e) !== d && p(e), x(e, t)
				}, oe.attr = function(e, t) {
					(e.ownerDocument || e) !== d && p(e);
					var i = r.attrHandle[t.toLowerCase()],
						o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
					return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
				}, oe.escape = function(e) {
					return(e + "").replace(te, ne)
				}, oe.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, oe.uniqueSort = function(e) {
					var t, r = [],
						i = 0,
						o = 0;
					if(f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
						for(; t = e[o++];) t === e[o] && (i = r.push(o));
						for(; i--;) e.splice(r[i], 1)
					}
					return c = null, e
				}, i = oe.getText = function(e) {
					var t, n = "",
						r = 0,
						o = e.nodeType;
					if(o) {
						if(1 === o || 9 === o || 11 === o) {
							if("string" == typeof e.textContent) return e.textContent;
							for(e = e.firstChild; e; e = e.nextSibling) n += i(e)
						} else if(3 === o || 4 === o) return e.nodeValue
					} else
						for(; t = e[r++];) n += i(t);
					return n
				}, (r = oe.selectors = {
					cacheLength: 50,
					createPseudo: se,
					match: V,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(e) {
							return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
						},
						PSEUDO: function(e) {
							var t, n = !e[6] && e[2];
							return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(Z, ee).toLowerCase();
							return "*" === e ? function() {
								return !0
							} : function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function(e) {
							var t = E[e + " "];
							return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
								return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function(e, t, n) {
							return function(r) {
								var i = oe.attr(r, e);
								return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace($, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
							}
						},
						CHILD: function(e, t, n, r, i) {
							var o = "nth" !== e.slice(0, 3),
								a = "last" !== e.slice(-4),
								s = "of-type" === t;
							return 1 === r && 0 === i ? function(e) {
								return !!e.parentNode
							} : function(t, n, u) {
								var l, c, f, p, d, h, g = o != a ? "nextSibling" : "previousSibling",
									y = t.parentNode,
									v = s && t.nodeName.toLowerCase(),
									m = !u && !s,
									x = !1;
								if(y) {
									if(o) {
										for(; g;) {
											for(p = t; p = p[g];)
												if(s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
											h = g = "only" === e && !h && "nextSibling"
										}
										return !0
									}
									if(h = [a ? y.firstChild : y.lastChild], a && m) {
										for(x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
											if(1 === p.nodeType && ++x && p === t) {
												c[e] = [T, d, x];
												break
											}
									} else if(m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
										for(;
											(p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
									return(x -= i) === r || x % r == 0 && 0 <= x / r
								}
							}
						},
						PSEUDO: function(e, t) {
							var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
							return i[b] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
								for(var r, o = i(e, t), a = o.length; a--;) e[r = O(e, o[a])] = !(n[r] = o[a])
							}) : function(e) {
								return i(e, 0, n)
							}) : i
						}
					},
					pseudos: {
						not: se(function(e) {
							var t = [],
								n = [],
								r = s(e.replace(B, "$1"));
							return r[b] ? se(function(e, t, n, i) {
								for(var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
							}) : function(e, i, o) {
								return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
							}
						}),
						has: se(function(e) {
							return function(t) {
								return 0 < oe(e, t).length
							}
						}),
						contains: se(function(e) {
							return e = e.replace(Z, ee),
								function(t) {
									return -1 < (t.textContent || t.innerText || i(t)).indexOf(e)
								}
						}),
						lang: se(function(e) {
							return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
								function(t) {
									var n;
									do {
										if(n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return(n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
									} while ((t = t.parentNode) && 1 === t.nodeType);
									return !1
								}
						}),
						target: function(t) {
							var n = e.location && e.location.hash;
							return n && n.slice(1) === t.id
						},
						root: function(e) {
							return e === h
						},
						focus: function(e) {
							return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: de(!1),
						disabled: de(!0),
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function(e) {
							for(e = e.firstChild; e; e = e.nextSibling)
								if(e.nodeType < 6) return !1;
							return !0
						},
						parent: function(e) {
							return !r.pseudos.empty(e)
						},
						header: function(e) {
							return Y.test(e.nodeName)
						},
						input: function(e) {
							return G.test(e.nodeName)
						},
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function(e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						first: he(function() {
							return [0]
						}),
						last: he(function(e, t) {
							return [t - 1]
						}),
						eq: he(function(e, t, n) {
							return [n < 0 ? n + t : n]
						}),
						even: he(function(e, t) {
							for(var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						odd: he(function(e, t) {
							for(var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						lt: he(function(e, t, n) {
							for(var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
							return e
						}),
						gt: he(function(e, t, n) {
							for(var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
							return e
						})
					}
				}).pseudos.nth = r.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) r.pseudos[t] = fe(t);
			for(t in {
					submit: !0,
					reset: !0
				}) r.pseudos[t] = pe(t);

			function ye() {}

			function ve(e) {
				for(var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
				return r
			}

			function me(e, t, n) {
				var r = t.dir,
					i = t.next,
					o = i || r,
					a = n && "parentNode" === o,
					s = C++;
				return t.first ? function(t, n, i) {
					for(; t = t[r];)
						if(1 === t.nodeType || a) return e(t, n, i);
					return !1
				} : function(t, n, u) {
					var l, c, f, p = [T, s];
					if(u) {
						for(; t = t[r];)
							if((1 === t.nodeType || a) && e(t, n, u)) return !0
					} else
						for(; t = t[r];)
							if(1 === t.nodeType || a)
								if(c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
								else {
									if((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
									if((c[o] = p)[2] = e(t, n, u)) return !0
								} return !1
				}
			}

			function xe(e) {
				return 1 < e.length ? function(t, n, r) {
					for(var i = e.length; i--;)
						if(!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function we(e, t, n, r, i) {
				for(var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
				return a
			}

			function Te(e, t, n, r, i, o) {
				return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function(o, a, s, u) {
					var l, c, f, p = [],
						d = [],
						h = a.length,
						g = o || function(e, t, n) {
							for(var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
							return n
						}(t || "*", s.nodeType ? [s] : s, []),
						y = !e || !o && t ? g : we(g, p, e, s, u),
						v = n ? i || (o ? e : h || r) ? [] : a : y;
					if(n && n(y, v, s, u), r)
						for(l = we(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
					if(o) {
						if(i || e) {
							if(i) {
								for(l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
								i(null, v = [], l, u)
							}
							for(c = v.length; c--;)(f = v[c]) && -1 < (l = i ? O(o, f) : p[c]) && (o[l] = !(a[l] = f))
						}
					} else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
				})
			}

			function Ce(e) {
				for(var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
						return e === t
					}, s, !0), f = me(function(e) {
						return -1 < O(t, e)
					}, s, !0), p = [function(e, n, r) {
						var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
						return t = null, i
					}]; u < o; u++)
					if(n = r.relative[e[u].type]) p = [me(xe(p), n)];
					else {
						if((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
							for(i = ++u; i < o && !r.relative[e[i].type]; i++);
							return Te(1 < u && xe(p), 1 < u && ve(e.slice(0, u - 1).concat({
								value: " " === e[u - 2].type ? "*" : ""
							})).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
						}
						p.push(n)
					}
				return xe(p)
			}

			function Ee(e, t) {
				var n = 0 < t.length,
					i = 0 < e.length,
					o = function(o, a, s, u, c) {
						var f, h, y, v = 0,
							m = "0",
							x = o && [],
							b = [],
							w = l,
							C = o || i && r.find.TAG("*", c),
							E = T += null == w ? 1 : Math.random() || .1,
							k = C.length;
						for(c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
							if(i && f) {
								for(h = 0, a || f.ownerDocument === d || (p(f), s = !g); y = e[h++];)
									if(y(f, a || d, s)) {
										u.push(f);
										break
									}
								c && (T = E)
							}
							n && ((f = !y && f) && v--, o && x.push(f))
						}
						if(v += m, n && m !== v) {
							for(h = 0; y = t[h++];) y(x, b, a, s);
							if(o) {
								if(0 < v)
									for(; m--;) x[m] || b[m] || (b[m] = j.call(u));
								b = we(b)
							}
							L.apply(u, b), c && !o && 0 < b.length && 1 < v + t.length && oe.uniqueSort(u)
						}
						return c && (T = E, l = w), x
					};
				return n ? se(o) : o
			}
			return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
				var n, i, o, a, s, u, l, c = k[e + " "];
				if(c) return t ? 0 : c.slice(0);
				for(s = e, u = [], l = r.preFilter; s;) {
					for(a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
							value: n,
							type: i[0].replace(B, " ")
						}), s = s.slice(n.length)), r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
						value: n,
						type: a,
						matches: i
					}), s = s.slice(n.length));
					if(!n) break
				}
				return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
			}, s = oe.compile = function(e, t) {
				var n, r = [],
					i = [],
					o = S[e + " "];
				if(!o) {
					for(n = (t = t || a(e)).length; n--;)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
					(o = S(e, Ee(i, r))).selector = e
				}
				return o
			}, u = oe.select = function(e, t, n, i) {
				var o, u, l, c, f, p = "function" == typeof e && e,
					d = !i && a(e = p.selector || e);
				if(n = n || [], 1 === d.length) {
					if(2 < (u = d[0] = d[0].slice(0)).length && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
						if(!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
						p && (t = t.parentNode), e = e.slice(u.shift().value.length)
					}
					for(o = V.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
						if((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
							if(u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
							break
						}
				}
				return(p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
			}, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) {
				return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
			}), ue(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || le("type|href|height|width", function(e, t, n) {
				if(!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), n.attributes && ue(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || le("value", function(e, t, n) {
				if(!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), ue(function(e) {
				return null == e.getAttribute("disabled")
			}) || le(P, function(e, t, n) {
				var r;
				if(!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}), oe
		}(e);
		w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;

		function k(e, t, n) {
			for(var r = [], i = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if(1 === e.nodeType) {
					if(i && w(e).is(n)) break;
					r.push(e)
				}
			return r
		}

		function S(e, t) {
			for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
		var D = w.expr.match.needsContext;

		function N(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}
		var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

		function j(e, t, n) {
			return g(t) ? w.grep(e, function(e, r) {
				return !!t.call(e, r, e) !== n
			}) : t.nodeType ? w.grep(e, function(e) {
				return e === t !== n
			}) : "string" != typeof t ? w.grep(e, function(e) {
				return -1 < u.call(t, e) !== n
			}) : w.filter(t, e, n)
		}
		w.filter = function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		}, w.fn.extend({
			find: function(e) {
				var t, n, r = this.length,
					i = this;
				if("string" != typeof e) return this.pushStack(w(e).filter(function() {
					for(t = 0; t < r; t++)
						if(w.contains(i[t], this)) return !0
				}));
				for(n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
				return 1 < r ? w.uniqueSort(n) : n
			},
			filter: function(e) {
				return this.pushStack(j(this, e || [], !1))
			},
			not: function(e) {
				return this.pushStack(j(this, e || [], !0))
			},
			is: function(e) {
				return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
			}
		});
		var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
		(w.fn.init = function(e, t, n) {
			var i, o;
			if(!e) return this;
			if(n = n || q, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
			if(!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if(i[1]) {
				if(t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
					for(i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
				return this
			}
			return(o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
		}).prototype = w.fn, q = w(r);
		var H = /^(?:parents|prev(?:Until|All))/,
			O = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};

		function P(e, t) {
			for(;
				(e = e[t]) && 1 !== e.nodeType;);
			return e
		}
		w.fn.extend({
			has: function(e) {
				var t = w(e, this),
					n = t.length;
				return this.filter(function() {
					for(var e = 0; e < n; e++)
						if(w.contains(this, t[e])) return !0
				})
			},
			closest: function(e, t) {
				var n, r = 0,
					i = this.length,
					o = [],
					a = "string" != typeof e && w(e);
				if(!D.test(e))
					for(; r < i; r++)
						for(n = this[r]; n && n !== t; n = n.parentNode)
							if(n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
								o.push(n);
								break
							}
				return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
			},
			index: function(e) {
				return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(e, t) {
				return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
			},
			addBack: function(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), w.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e) {
				return k(e, "parentNode")
			},
			parentsUntil: function(e, t, n) {
				return k(e, "parentNode", n)
			},
			next: function(e) {
				return P(e, "nextSibling")
			},
			prev: function(e) {
				return P(e, "previousSibling")
			},
			nextAll: function(e) {
				return k(e, "nextSibling")
			},
			prevAll: function(e) {
				return k(e, "previousSibling")
			},
			nextUntil: function(e, t, n) {
				return k(e, "nextSibling", n)
			},
			prevUntil: function(e, t, n) {
				return k(e, "previousSibling", n)
			},
			siblings: function(e) {
				return S((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return S(e.firstChild)
			},
			contents: function(e) {
				return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
			}
		}, function(e, t) {
			w.fn[e] = function(n, r) {
				var i = w.map(this, t, n);
				return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), 1 < this.length && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
			}
		});
		var M = /[^\x20\t\r\n\f]+/g;

		function I(e) {
			return e
		}

		function W(e) {
			throw e
		}

		function $(e, t, n, r) {
			var i;
			try {
				e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
			} catch(e) {
				n.apply(void 0, [e])
			}
		}
		w.Callbacks = function(e) {
			e = "string" == typeof e ? function(e) {
				var t = {};
				return w.each(e.match(M) || [], function(e, n) {
					t[n] = !0
				}), t
			}(e) : w.extend({}, e);

			function u() {
				for(i = i || e.once, r = t = !0; a.length; s = -1)
					for(n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
				e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
			}
			var t, n, r, i, o = [],
				a = [],
				s = -1,
				l = {
					add: function() {
						return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
							w.each(n, function(n, r) {
								g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
							})
						}(arguments), n && !t && u()), this
					},
					remove: function() {
						return w.each(arguments, function(e, t) {
							for(var n; - 1 < (n = w.inArray(t, o, n));) o.splice(n, 1), n <= s && s--
						}), this
					},
					has: function(e) {
						return e ? -1 < w.inArray(e, o) : 0 < o.length
					},
					empty: function() {
						return o = o && [], this
					},
					disable: function() {
						return i = a = [], o = n = "", this
					},
					disabled: function() {
						return !o
					},
					lock: function() {
						return i = a = [], n || t || (o = n = ""), this
					},
					locked: function() {
						return !!i
					},
					fireWith: function(e, n) {
						return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
					},
					fire: function() {
						return l.fireWith(this, arguments), this
					},
					fired: function() {
						return !!r
					}
				};
			return l
		}, w.extend({
			Deferred: function(t) {
				var n = [
						["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
						["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
						["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
					],
					r = "pending",
					i = {
						state: function() {
							return r
						},
						always: function() {
							return o.done(arguments).fail(arguments), this
						},
						catch: function(e) {
							return i.then(null, e)
						},
						pipe: function() {
							var e = arguments;
							return w.Deferred(function(t) {
								w.each(n, function(n, r) {
									var i = g(e[r[4]]) && e[r[4]];
									o[r[1]](function() {
										var e = i && i.apply(this, arguments);
										e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						then: function(t, r, i) {
							var o = 0;

							function a(t, n, r, i) {
								return function() {
									var s = this,
										u = arguments,
										l = function() {
											var e, l;
											if(!(t < o)) {
												if((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
												l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
											}
										},
										c = i ? l : function() {
											try {
												l()
											} catch(e) {
												w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), o <= t + 1 && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
											}
										};
									t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
								}
							}
							return w.Deferred(function(e) {
								n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
							}).promise()
						},
						promise: function(e) {
							return null != e ? w.extend(e, i) : i
						}
					},
					o = {};
				return w.each(n, function(e, t) {
					var a = t[2],
						s = t[5];
					i[t[1]] = a.add, s && a.add(function() {
						r = s
					}, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
						return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
					}, o[t[0] + "With"] = a.fireWith
				}), i.promise(o), t && t.call(o, o), o
			},
			when: function(e) {
				function s(e) {
					return function(n) {
						r[e] = this, i[e] = 1 < arguments.length ? o.call(arguments) : n, --t || a.resolveWith(r, i)
					}
				}
				var t = arguments.length,
					n = t,
					r = Array(n),
					i = o.call(arguments),
					a = w.Deferred();
				if(t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
				for(; n--;) $(i[n], s(n), a.reject);
				return a.promise()
			}
		});
		var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		w.Deferred.exceptionHook = function(t, n) {
			e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
		}, w.readyException = function(t) {
			e.setTimeout(function() {
				throw t
			})
		};
		var F = w.Deferred();

		function _() {
			r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
		}
		w.fn.ready = function(e) {
			return F.then(e).catch(function(e) {
				w.readyException(e)
			}), this
		}, w.extend({
			isReady: !1,
			readyWait: 1,
			ready: function(e) {
				(!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== e && 0 < --w.readyWait || F.resolveWith(r, [w]))
			}
		}), w.ready.then = F.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
		var z = function(e, t, n, r, i, o, a) {
				var s = 0,
					u = e.length,
					l = null == n;
				if("object" === x(n))
					for(s in i = !0, n) z(e, t, s, n[s], !0, o, a);
				else if(void 0 !== r && (i = !0, g(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
						return l.call(w(e), n)
					})), t))
					for(; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
				return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
			},
			X = /^-ms-/,
			U = /-([a-z])/g;

		function V(e, t) {
			return t.toUpperCase()
		}

		function G(e) {
			return e.replace(X, "ms-").replace(U, V)
		}

		function Y(e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		}

		function Q() {
			this.expando = w.expando + Q.uid++
		}
		Q.uid = 1, Q.prototype = {
			cache: function(e) {
				var t = e[this.expando];
				return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
					value: t,
					configurable: !0
				}))), t
			},
			set: function(e, t, n) {
				var r, i = this.cache(e);
				if("string" == typeof t) i[G(t)] = n;
				else
					for(r in t) i[G(r)] = t[r];
				return i
			},
			get: function(e, t) {
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
			},
			access: function(e, t, n) {
				return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function(e, t) {
				var n, r = e[this.expando];
				if(void 0 !== r) {
					if(void 0 !== t) {
						n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
						for(; n--;) delete r[t[n]]
					}
					void 0 !== t && !w.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
				}
			},
			hasData: function(e) {
				var t = e[this.expando];
				return void 0 !== t && !w.isEmptyObject(t)
			}
		};
		var J = new Q,
			K = new Q,
			Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			ee = /[A-Z]/g;

		function ne(e, t, n) {
			var r;
			if(void 0 === n && 1 === e.nodeType)
				if(r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
					try {
						n = function(e) {
							return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
						}(n)
					} catch(e) {}
					K.set(e, t, n)
				} else n = void 0;
			return n
		}
		w.extend({
			hasData: function(e) {
				return K.hasData(e) || J.hasData(e)
			},
			data: function(e, t, n) {
				return K.access(e, t, n)
			},
			removeData: function(e, t) {
				K.remove(e, t)
			},
			_data: function(e, t, n) {
				return J.access(e, t, n)
			},
			_removeData: function(e, t) {
				J.remove(e, t)
			}
		}), w.fn.extend({
			data: function(e, t) {
				var n, r, i, o = this[0],
					a = o && o.attributes;
				if(void 0 !== e) return "object" == typeof e ? this.each(function() {
					K.set(this, e)
				}) : z(this, function(t) {
					var n;
					if(o && void 0 === t) {
						if(void 0 !== (n = K.get(o, e))) return n;
						if(void 0 !== (n = ne(o, e))) return n
					} else this.each(function() {
						K.set(this, e, t)
					})
				}, null, t, 1 < arguments.length, null, !0);
				if(this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
					for(n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
					J.set(o, "hasDataAttrs", !0)
				}
				return i
			},
			removeData: function(e) {
				return this.each(function() {
					K.remove(this, e)
				})
			}
		}), w.extend({
			queue: function(e, t, n) {
				var r;
				if(e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
			},
			dequeue: function(e, t) {
				t = t || "fx";
				var n = w.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = w._queueHooks(e, t);
				"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
					w.dequeue(e, t)
				}, o)), !r && o && o.empty.fire()
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return J.get(e, n) || J.access(e, n, {
					empty: w.Callbacks("once memory").add(function() {
						J.remove(e, [t + "queue", n])
					})
				})
			}
		}), w.fn.extend({
			queue: function(e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
					var n = w.queue(this, e, t);
					w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					w.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(e, t) {
				function s() {
					--r || i.resolveWith(o, [o])
				}
				var n, r = 1,
					i = w.Deferred(),
					o = this,
					a = this.length;
				for("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
				return s(), i.promise(t)
			}
		});

		function se(e, t, n, r) {
			var i, o, a = {};
			for(o in t) a[o] = e.style[o], e.style[o] = t[o];
			for(o in i = n.apply(e, r || []), t) e.style[o] = a[o];
			return i
		}
		var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
			oe = ["Top", "Right", "Bottom", "Left"],
			ae = function(e, t) {
				return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
			};

		function ue(e, t, n, r) {
			var i, o, a = 20,
				s = r ? function() {
					return r.cur()
				} : function() {
					return w.css(e, t, "")
				},
				u = s(),
				l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
				c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
			if(c && c[3] !== l) {
				for(u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
				c *= 2, w.style(e, t, c + l), n = n || []
			}
			return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
		}
		var le = {};

		function ce(e) {
			var t, n = e.ownerDocument,
				r = e.nodeName,
				i = le[r];
			return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i)
		}

		function fe(e, t) {
			for(var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
			for(o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
			return e
		}
		w.fn.extend({
			show: function() {
				return fe(this, !0)
			},
			hide: function() {
				return fe(this)
			},
			toggle: function(e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
					ae(this) ? w(this).show() : w(this).hide()
				})
			}
		});
		var pe = /^(?:checkbox|radio)$/i,
			de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
			he = /^$|^module$|\/(?:java|ecma)script/i,
			ge = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};

		function ye(e, t) {
			var n;
			return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
		}

		function ve(e, t) {
			for(var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
		}
		ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
		var me = /<|&#?\w+;/;

		function xe(e, t, n, r, i) {
			for(var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
				if((o = e[d]) || 0 === o)
					if("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
					else if(me.test(o)) {
				for(a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
				w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
			} else p.push(t.createTextNode(o));
			for(f.textContent = "", d = 0; o = p[d++];)
				if(r && -1 < w.inArray(o, r)) i && i.push(o);
				else if(l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n)
				for(c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);
			return f
		}! function() {
			var e = r.createDocumentFragment().appendChild(r.createElement("div")),
				t = r.createElement("input");
			t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
		}();
		var be = r.documentElement,
			we = /^key/,
			Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			Ce = /^([^.]*)(?:\.(.+)|)/;

		function Ee() {
			return !0
		}

		function ke() {
			return !1
		}

		function Se() {
			try {
				return r.activeElement
			} catch(e) {}
		}

		function De(e, t, n, r, i, o) {
			var a, s;
			if("object" == typeof t) {
				for(s in "string" != typeof n && (r = r || n, n = void 0), t) De(e, s, n, r, t[s], o);
				return e
			}
			if(null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
			else if(!i) return e;
			return 1 === o && (a = i, (i = function(e) {
				return w().off(e), a.apply(this, arguments)
			}).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
				w.event.add(this, t, i, r, n)
			})
		}
		w.event = {
			global: {},
			add: function(e, t, n, r, i) {
				var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
				if(y)
					for(n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
							return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
						}), l = (t = (t || "").match(M) || [""]).length; l--;) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
						type: d,
						origType: g,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && w.expr.match.needsContext.test(i),
						namespace: h.join(".")
					}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
			},
			remove: function(e, t, n, r, i) {
				var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
				if(y && (u = y.events)) {
					for(l = (t = (t || "").match(M) || [""]).length; l--;)
						if(d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
							for(f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
							a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
						} else
							for(d in u) w.event.remove(e, d + t[l], n, r, !0);
					w.isEmptyObject(u) && J.remove(e, "handle events")
				}
			},
			dispatch: function(e) {
				var n, r, i, o, a, s, t = w.event.fix(e),
					u = new Array(arguments.length),
					l = (J.get(this, "events") || {})[t.type] || [],
					c = w.event.special[t.type] || {};
				for(u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
				if(t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
					for(s = w.event.handlers.call(this, t, l), n = 0;
						(o = s[n++]) && !t.isPropagationStopped();)
						for(t.currentTarget = o.elem, r = 0;
							(a = o.handlers[r++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
					return c.postDispatch && c.postDispatch.call(this, t), t.result
				}
			},
			handlers: function(e, t) {
				var n, r, i, o, a, s = [],
					u = t.delegateCount,
					l = e.target;
				if(u && l.nodeType && !("click" === e.type && 1 <= e.button))
					for(; l !== this; l = l.parentNode || this)
						if(1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
							for(o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < w(i, this).index(l) : w.find(i, this, null, [l]).length), a[i] && o.push(r);
							o.length && s.push({
								elem: l,
								handlers: o
							})
						}
				return l = this, u < t.length && s.push({
					elem: l,
					handlers: t.slice(u)
				}), s
			},
			addProp: function(e, t) {
				Object.defineProperty(w.Event.prototype, e, {
					enumerable: !0,
					configurable: !0,
					get: g(t) ? function() {
						if(this.originalEvent) return t(this.originalEvent)
					} : function() {
						if(this.originalEvent) return this.originalEvent[e]
					},
					set: function(t) {
						Object.defineProperty(this, e, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: t
						})
					}
				})
			},
			fix: function(e) {
				return e[w.expando] ? e : new w.Event(e)
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						if(this !== Se() && this.focus) return this.focus(), !1
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						if(this === Se() && this.blur) return this.blur(), !1
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						if("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
					},
					_default: function(e) {
						return N(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			}
		}, w.removeEvent = function(e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n)
		}, w.Event = function(e, t) {
			if(!(this instanceof w.Event)) return new w.Event(e, t);
			e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
		}, w.Event.prototype = {
			constructor: w.Event,
			isDefaultPrevented: ke,
			isPropagationStopped: ke,
			isImmediatePropagationStopped: ke,
			isSimulated: !1,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
			},
			stopImmediatePropagation: function() {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, w.each({
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
			which: function(e) {
				var t = e.button;
				return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
			}
		}, w.event.addProp), w.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, t) {
			w.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var n, i = e.relatedTarget,
						o = e.handleObj;
					return i && (i === this || w.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), w.fn.extend({
			on: function(e, t, n, r) {
				return De(this, e, t, n, r)
			},
			one: function(e, t, n, r) {
				return De(this, e, t, n, r, 1)
			},
			off: function(e, t, n) {
				var r, i;
				if(e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
					w.event.remove(this, e, n, t)
				});
				for(i in e) this.off(i, t, e[i]);
				return this
			}
		});
		var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
			Ae = /<script|<style|<link/i,
			je = /checked\s*(?:[^=]|=\s*.checked.)/i,
			qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

		function Le(e, t) {
			return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
		}

		function He(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function Oe(e) {
			return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
		}

		function Pe(e, t) {
			var n, r, i, o, a, s, u, l;
			if(1 === t.nodeType) {
				if(J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events))
					for(i in delete a.handle, a.events = {}, l)
						for(n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
				K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
			}
		}

		function Me(e, t) {
			var n = t.nodeName.toLowerCase();
			"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
		}

		function Re(e, t, n, r) {
			t = a.apply([], t);
			var i, o, s, u, l, c, f = 0,
				p = e.length,
				d = p - 1,
				y = t[0],
				v = g(y);
			if(v || 1 < p && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function(i) {
				var o = e.eq(i);
				v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
			});
			if(p && (o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
				for(u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
				if(u)
					for(c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
			}
			return e
		}

		function Ie(e, t, n) {
			for(var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
			return e
		}
		w.extend({
			htmlPrefilter: function(e) {
				return e.replace(Ne, "<$1></$2>")
			},
			clone: function(e, t, n) {
				var r, i, o, a, s = e.cloneNode(!0),
					u = w.contains(e.ownerDocument, e);
				if(!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
					for(a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
				if(t)
					if(n)
						for(o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
					else Pe(e, s);
				return 0 < (a = ye(s, "script")).length && ve(a, !u && ye(e, "script")), s
			},
			cleanData: function(e) {
				for(var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
					if(Y(n)) {
						if(t = n[J.expando]) {
							if(t.events)
								for(r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
							n[J.expando] = void 0
						}
						n[K.expando] && (n[K.expando] = void 0)
					}
			}
		}), w.fn.extend({
			detach: function(e) {
				return Ie(this, e, !0)
			},
			remove: function(e) {
				return Ie(this, e)
			},
			text: function(e) {
				return z(this, function(e) {
					return void 0 === e ? w.text(this) : this.empty().each(function() {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function() {
				return Re(this, arguments, function(e) {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
				})
			},
			prepend: function() {
				return Re(this, arguments, function(e) {
					if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = Le(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function() {
				return Re(this, arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function() {
				return Re(this, arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function() {
				for(var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
				return this
			},
			clone: function(e, t) {
				return e = null != e && e, t = null == t ? e : t, this.map(function() {
					return w.clone(this, e, t)
				})
			},
			html: function(e) {
				return z(this, function(e) {
					var t = this[0] || {},
						n = 0,
						r = this.length;
					if(void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = w.htmlPrefilter(e);
						try {
							for(; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
							t = 0
						} catch(e) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function() {
				var e = [];
				return Re(this, arguments, function(t) {
					var n = this.parentNode;
					w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
				}, e)
			}
		}), w.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			w.fn[e] = function(e) {
				for(var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
				return this.pushStack(r)
			}
		});
		var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
			$e = function(t) {
				var n = t.ownerDocument.defaultView;
				return n && n.opener || (n = e), n.getComputedStyle(t)
			},
			Be = new RegExp(oe.join("|"), "i");

		function Fe(e, t, n) {
			var r, i, o, a, s = e.style;
			return(n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
		}

		function _e(e, t) {
			return {
				get: function() {
					if(!e()) return(this.get = t).apply(this, arguments);
					delete this.get
				}
			}
		}! function() {
			function t() {
				if(c) {
					l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
					var t = e.getComputedStyle(c);
					i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
				}
			}

			function n(e) {
				return Math.round(parseFloat(e))
			}
			var i, o, a, s, u, l = r.createElement("div"),
				c = r.createElement("div");
			c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
				boxSizingReliable: function() {
					return t(), o
				},
				pixelBoxStyles: function() {
					return t(), s
				},
				pixelPosition: function() {
					return t(), i
				},
				reliableMarginLeft: function() {
					return t(), u
				},
				scrollboxSize: function() {
					return t(), a
				}
			}))
		}();
		var ze = /^(none|table(?!-c[ea]).+)/,
			Xe = /^--/,
			Ue = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Ve = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			Ge = ["Webkit", "Moz", "ms"],
			Ye = r.createElement("div").style;

		function Je(e) {
			var t = w.cssProps[e];
			return t = t || (w.cssProps[e] = function(e) {
				if(e in Ye) return e;
				for(var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;)
					if((e = Ge[n] + t) in Ye) return e
			}(e) || e)
		}

		function Ke(e, t, n) {
			var r = ie.exec(t);
			return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
		}

		function Ze(e, t, n, r, i, o) {
			var a = "width" === t ? 1 : 0,
				s = 0,
				u = 0;
			if(n === (r ? "border" : "content")) return 0;
			for(; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
			return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
		}

		function et(e, t, n) {
			var r = $e(e),
				i = Fe(e, t, r),
				o = "border-box" === w.css(e, "boxSizing", !1, r),
				a = o;
			if(We.test(i)) {
				if(!n) return i;
				i = "auto"
			}
			return a = a && (h.boxSizingReliable() || i === e.style[t]), "auto" !== i && (parseFloat(i) || "inline" !== w.css(e, "display", !1, r)) || (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
		}

		function tt(e, t, n, r, i) {
			return new tt.prototype.init(e, t, n, r, i)
		}
		w.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if(t) {
							var n = Fe(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {},
			style: function(e, t, n, r) {
				if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var i, o, a, s = G(t),
						u = Xe.test(t),
						l = e.style;
					if(u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
					"string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
				}
			},
			css: function(e, t, n, r) {
				var i, o, a, s = G(t);
				return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
			}
		}), w.each(["height", "width"], function(e, t) {
			w.cssHooks[t] = {
				get: function(e, n, r) {
					if(n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
						return et(e, t, r)
					})
				},
				set: function(e, n, r) {
					var i, o = $e(e),
						a = "border-box" === w.css(e, "boxSizing", !1, o),
						s = r && Ze(e, t, r, a, o);
					return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(0, n, s)
				}
			}
		}), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
			if(t) return(parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
				marginLeft: 0
			}, function() {
				return e.getBoundingClientRect().left
			})) + "px"
		}), w.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			w.cssHooks[e + t] = {
				expand: function(n) {
					for(var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
					return i
				}
			}, "margin" !== e && (w.cssHooks[e + t].set = Ke)
		}), w.fn.extend({
			css: function(e, t) {
				return z(this, function(e, t, n) {
					var r, i, o = {},
						a = 0;
					if(Array.isArray(t)) {
						for(r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
						return o
					}
					return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
				}, e, t, 1 < arguments.length)
			}
		}), ((w.Tween = tt).prototype = {
			constructor: tt,
			init: function(e, t, n, r, i, o) {
				this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var e = tt.propHooks[this.prop];
				return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
			},
			run: function(e) {
				var t, n = tt.propHooks[this.prop];
				return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
			}
		}).init.prototype = tt.prototype, (tt.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
				},
				set: function(e) {
					w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}).scrollTop = tt.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, w.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, w.fx = tt.prototype.init, w.fx.step = {};
		var nt, rt, it = /^(?:toggle|show|hide)$/,
			ot = /queueHooks$/;

		function at() {
			rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
		}

		function st() {
			return e.setTimeout(function() {
				nt = void 0
			}), nt = Date.now()
		}

		function ut(e, t) {
			var n, r = 0,
				i = {
					height: e
				};
			for(t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
			return t && (i.opacity = i.width = e), i
		}

		function lt(e, t, n) {
			for(var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
				if(r = i[o].call(n, t, e)) return r
		}

		function pt(e, t, n) {
			var r, i, o = 0,
				a = pt.prefilters.length,
				s = w.Deferred().always(function() {
					delete u.elem
				}),
				u = function() {
					if(i) return !1;
					for(var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
					return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
				},
				l = s.promise({
					elem: e,
					props: w.extend({}, t),
					opts: w.extend(!0, {
						specialEasing: {},
						easing: w.easing._default
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: nt || st(),
					duration: n.duration,
					tweens: [],
					createTween: function(t, n) {
						var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
						return l.tweens.push(r), r
					},
					stop: function(t) {
						var n = 0,
							r = t ? l.tweens.length : 0;
						if(i) return this;
						for(i = !0; n < r; n++) l.tweens[n].run(1);
						return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
					}
				}),
				c = l.props;
			for(function(e, t) {
					var n, r, i, o, a;
					for(n in e)
						if(i = t[r = G(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
							for(n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
						else t[r] = i
				}(c, l.opts.specialEasing); o < a; o++)
				if(r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
			return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
				elem: e,
				anim: l,
				queue: l.opts.queue
			})), l
		}
		w.Animation = w.extend(pt, {
				tweeners: {
					"*": [function(e, t) {
						var n = this.createTween(e, t);
						return ue(n.elem, e, ie.exec(t), n), n
					}]
				},
				tweener: function(e, t) {
					for(var n, r = 0, i = (e = g(e) ? (t = e, ["*"]) : e.match(M)).length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
				},
				prefilters: [function(e, t, n) {
					var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
						p = this,
						d = {},
						h = e.style,
						g = e.nodeType && ae(e),
						y = J.get(e, "fxshow");
					for(r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
							a.unqueued || s()
						}), a.unqueued++, p.always(function() {
							p.always(function() {
								a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
							})
						})), t)
						if(i = t[r], it.test(i)) {
							if(delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
								if("show" !== i || !y || void 0 === y[r]) continue;
								g = !0
							}
							d[r] = y && y[r] || w.style(e, r)
						}
					if((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
						for(r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
								h.display = l
							}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
								h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
							})), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
							display: l
						}), o && (y.hidden = !g), g && fe([e], !0), p.done(function() {
							for(r in g || fe([e]), J.remove(e, "fxshow"), d) w.style(e, r, d[r])
						})), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
				}],
				prefilter: function(e, t) {
					t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
				}
			}), w.speed = function(e, t, n) {
				var r = e && "object" == typeof e ? w.extend({}, e) : {
					complete: n || !n && t || g(e) && e,
					duration: e,
					easing: n && t || t && !g(t) && t
				};
				return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
					g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
				}, r
			}, w.fn.extend({
				fadeTo: function(e, t, n, r) {
					return this.filter(ae).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, r)
				},
				animate: function(e, t, n, r) {
					function a() {
						var t = pt(this, w.extend({}, e), o);
						(i || J.get(this, "finish")) && t.stop(!0)
					}
					var i = w.isEmptyObject(e),
						o = w.speed(t, n, r);
					return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
				},
				stop: function(e, t, n) {
					function r(e) {
						var t = e.stop;
						delete e.stop, t(n)
					}
					return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
						var t = !0,
							i = null != e && e + "queueHooks",
							o = w.timers,
							a = J.get(this);
						if(i) a[i] && a[i].stop && r(a[i]);
						else
							for(i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
						for(i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
						!t && n || w.dequeue(this, e)
					})
				},
				finish: function(e) {
					return !1 !== e && (e = e || "fx"), this.each(function() {
						var t, n = J.get(this),
							r = n[e + "queue"],
							i = n[e + "queueHooks"],
							o = w.timers,
							a = r ? r.length : 0;
						for(n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
						for(t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
						delete n.finish
					})
				}
			}), w.each(["toggle", "show", "hide"], function(e, t) {
				var n = w.fn[t];
				w.fn[t] = function(e, r, i) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
				}
			}), w.each({
				slideDown: ut("show"),
				slideUp: ut("hide"),
				slideToggle: ut("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function(e, t) {
				w.fn[e] = function(e, n, r) {
					return this.animate(t, e, n, r)
				}
			}), w.timers = [], w.fx.tick = function() {
				var e, t = 0,
					n = w.timers;
				for(nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
				n.length || w.fx.stop(), nt = void 0
			}, w.fx.timer = function(e) {
				w.timers.push(e), w.fx.start()
			}, w.fx.interval = 13, w.fx.start = function() {
				rt || (rt = !0, at())
			}, w.fx.stop = function() {
				rt = null
			}, w.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, w.fn.delay = function(t, n) {
				return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
					var i = e.setTimeout(n, t);
					r.stop = function() {
						e.clearTimeout(i)
					}
				})
			},
			function() {
				var e = r.createElement("input"),
					t = r.createElement("select").appendChild(r.createElement("option"));
				e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
			}();
		var dt, ht = w.expr.attrHandle;
		w.fn.extend({
			attr: function(e, t) {
				return z(this, w.attr, e, t, 1 < arguments.length)
			},
			removeAttr: function(e) {
				return this.each(function() {
					w.removeAttr(this, e)
				})
			}
		}), w.extend({
			attr: function(e, t, n) {
				var r, i, o = e.nodeType;
				if(3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						if(!h.radioValue && "radio" === t && N(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			},
			removeAttr: function(e, t) {
				var n, r = 0,
					i = t && t.match(M);
				if(i && 1 === e.nodeType)
					for(; n = i[r++];) e.removeAttribute(n)
			}
		}), dt = {
			set: function(e, t, n) {
				return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var n = ht[t] || w.find.attr;
			ht[t] = function(e, t, r) {
				var i, o, a = t.toLowerCase();
				return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
			}
		});
		var gt = /^(?:input|select|textarea|button)$/i,
			yt = /^(?:a|area)$/i;

		function vt(e) {
			return(e.match(M) || []).join(" ")
		}

		function mt(e) {
			return e.getAttribute && e.getAttribute("class") || ""
		}

		function xt(e) {
			return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
		}
		w.fn.extend({
			prop: function(e, t) {
				return z(this, w.prop, e, t, 1 < arguments.length)
			},
			removeProp: function(e) {
				return this.each(function() {
					delete this[w.propFix[e] || e]
				})
			}
		}), w.extend({
			prop: function(e, t, n) {
				var r, i, o = e.nodeType;
				if(3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						var t = w.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix: {
				for: "htmlFor",
				class: "className"
			}
		}), h.optSelected || (w.propHooks.selected = {
			get: function(e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			},
			set: function(e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			w.propFix[this.toLowerCase()] = this
		}), w.fn.extend({
			addClass: function(e) {
				var t, n, r, i, o, a, s, u = 0;
				if(g(e)) return this.each(function(t) {
					w(this).addClass(e.call(this, t, mt(this)))
				});
				if((t = xt(e)).length)
					for(; n = this[u++];)
						if(i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
							for(a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
							i !== (s = vt(r)) && n.setAttribute("class", s)
						}
				return this
			},
			removeClass: function(e) {
				var t, n, r, i, o, a, s, u = 0;
				if(g(e)) return this.each(function(t) {
					w(this).removeClass(e.call(this, t, mt(this)))
				});
				if(!arguments.length) return this.attr("class", "");
				if((t = xt(e)).length)
					for(; n = this[u++];)
						if(i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
							for(a = 0; o = t[a++];)
								for(; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
							i !== (s = vt(r)) && n.setAttribute("class", s)
						}
				return this
			},
			toggleClass: function(e, t) {
				var n = typeof e,
					r = "string" == n || Array.isArray(e);
				return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
					w(this).toggleClass(e.call(this, n, mt(this), t), t)
				}) : this.each(function() {
					var t, i, o, a;
					if(r)
						for(i = 0, o = w(this), a = xt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
					else void 0 !== e && "boolean" != n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
				})
			},
			hasClass: function(e) {
				var t, n, r = 0;
				for(t = " " + e + " "; n = this[r++];)
					if(1 === n.nodeType && -1 < (" " + vt(mt(n)) + " ").indexOf(t)) return !0;
				return !1
			}
		});
		var bt = /\r/g;
		w.fn.extend({
			val: function(e) {
				var t, n, r, i = this[0];
				return arguments.length ? (r = g(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
						return null == e ? "" : e + ""
					})), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				})) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
			}
		}), w.extend({
			valHooks: {
				option: {
					get: function(e) {
						var t = w.find.attr(e, "value");
						return null != t ? t : vt(w.text(e))
					}
				},
				select: {
					get: function(e) {
						var t, n, r, i = e.options,
							o = e.selectedIndex,
							a = "select-one" === e.type,
							s = a ? null : [],
							u = a ? o + 1 : i.length;
						for(r = o < 0 ? u : a ? o : 0; r < u; r++)
							if(((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
								if(t = w(n).val(), a) return t;
								s.push(t)
							}
						return s
					},
					set: function(e, t) {
						for(var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), o)) && (n = !0);
						return n || (e.selectedIndex = -1), o
					}
				}
			}
		}), w.each(["radio", "checkbox"], function() {
			w.valHooks[this] = {
				set: function(e, t) {
					if(Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
				}
			}, h.checkOn || (w.valHooks[this].get = function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		}), h.focusin = "onfocusin" in e;

		function Tt(e) {
			e.stopPropagation()
		}
		var wt = /^(?:focusinfocus|focusoutblur)$/;
		w.extend(w.event, {
			trigger: function(t, n, i, o) {
				var a, s, u, l, c, p, d, h, v = [i || r],
					m = f.call(t, "type") ? t.type : t,
					x = f.call(t, "namespace") ? t.namespace.split(".") : [];
				if(s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (-1 < m.indexOf(".") && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
					if(!o && !d.noBubble && !y(i)) {
						for(l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
						u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
					}
					for(a = 0;
						(s = v[a++]) && !t.isPropagationStopped();) h = s, t.type = 1 < a ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
					return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
				}
			},
			simulate: function(e, t, n) {
				var r = w.extend(new w.Event, n, {
					type: e,
					isSimulated: !0
				});
				w.event.trigger(r, null, t)
			}
		}), w.fn.extend({
			trigger: function(e, t) {
				return this.each(function() {
					w.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, t) {
				var n = this[0];
				if(n) return w.event.trigger(e, t, n, !0)
			}
		}), h.focusin || w.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			function n(e) {
				w.event.simulate(t, e.target, w.event.fix(e))
			}
			w.event.special[t] = {
				setup: function() {
					var r = this.ownerDocument || this,
						i = J.access(r, t);
					i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
				},
				teardown: function() {
					var r = this.ownerDocument || this,
						i = J.access(r, t) - 1;
					i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
				}
			}
		});
		var Ct = e.location,
			Et = Date.now(),
			kt = /\?/;
		w.parseXML = function(t) {
			var n;
			if(!t || "string" != typeof t) return null;
			try {
				n = (new e.DOMParser).parseFromString(t, "text/xml")
			} catch(e) {
				n = void 0
			}
			return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
		};
		var St = /\[\]$/,
			Dt = /\r?\n/g,
			Nt = /^(?:submit|button|image|reset|file)$/i,
			At = /^(?:input|select|textarea|keygen)/i;

		function jt(e, t, n, r) {
			var i;
			if(Array.isArray(t)) w.each(t, function(t, i) {
				n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
			});
			else if(n || "object" !== x(t)) r(e, t);
			else
				for(i in t) jt(e + "[" + i + "]", t[i], n, r)
		}
		w.param = function(e, t) {
			function i(e, t) {
				var n = g(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			}
			var n, r = [];
			if(Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
				i(this.name, this.value)
			});
			else
				for(n in e) jt(n, e[n], t, i);
			return r.join("&")
		}, w.fn.extend({
			serialize: function() {
				return w.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = w.prop(this, "elements");
					return e ? w.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
				}).map(function(e, t) {
					var n = w(this).val();
					return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(Dt, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Dt, "\r\n")
					}
				}).get()
			}
		});
		var qt = /%20/g,
			Lt = /#.*$/,
			Ht = /([?&])_=[^&]*/,
			Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Mt = /^(?:GET|HEAD)$/,
			Rt = /^\/\//,
			It = {},
			Wt = {},
			$t = "*/".concat("*"),
			Bt = r.createElement("a");

		function Ft(e) {
			return function(t, n) {
				"string" != typeof t && (n = t, t = "*");
				var r, i = 0,
					o = t.toLowerCase().match(M) || [];
				if(g(n))
					for(; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
			}
		}

		function _t(e, t, n, r) {
			var i = {},
				o = e === Wt;

			function a(s) {
				var u;
				return i[s] = !0, w.each(e[s] || [], function(e, s) {
					var l = s(t, n, r);
					return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
				}), u
			}
			return a(t.dataTypes[0]) || !i["*"] && a("*")
		}

		function zt(e, t) {
			var n, r, i = w.ajaxSettings.flatOptions || {};
			for(n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
			return r && w.extend(!0, e, r), e
		}
		Bt.href = Ct.href, w.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Ct.href,
				type: "GET",
				isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": $t,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": w.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
			},
			ajaxPrefilter: Ft(It),
			ajaxTransport: Ft(Wt),
			ajax: function(t, n) {
				"object" == typeof t && (n = t, t = void 0), n = n || {};
				var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
					g = h.context || h,
					y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
					v = w.Deferred(),
					m = w.Callbacks("once memory"),
					x = h.statusCode || {},
					b = {},
					T = {},
					C = "canceled",
					E = {
						readyState: 0,
						getResponseHeader: function(e) {
							var t;
							if(c) {
								if(!s)
									for(s = {}; t = Ot.exec(a);) s[t[1].toLowerCase()] = t[2];
								t = s[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function() {
							return c ? a : null
						},
						setRequestHeader: function(e, t) {
							return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
						},
						overrideMimeType: function(e) {
							return null == c && (h.mimeType = e), this
						},
						statusCode: function(e) {
							var t;
							if(e)
								if(c) E.always(e[E.status]);
								else
									for(t in e) x[t] = [x[t], e[t]];
							return this
						},
						abort: function(e) {
							var t = e || C;
							return i && i.abort(t), k(0, t), this
						}
					};
				if(v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
					l = r.createElement("a");
					try {
						l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
					} catch(e) {
						h.crossDomain = !0
					}
				}
				if(h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
				for(p in (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ +d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(p, h.headers[p]);
				if(h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
				if(C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
					if(E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
					h.async && 0 < h.timeout && (u = e.setTimeout(function() {
						E.abort("timeout")
					}, h.timeout));
					try {
						c = !1, i.send(b, k)
					} catch(e) {
						if(c) throw e;
						k(-1, e)
					}
				} else k(-1, "No Transport");

				function k(t, n, r, s) {
					var l, p, d, b, T, C = n;
					c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = 0 < t ? 4 : 0, l = 200 <= t && t < 300 || 304 === t, r && (b = function(e, t, n) {
						for(var r, i, o, a, s = e.contents, u = e.dataTypes;
							"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
						if(r)
							for(i in s)
								if(s[i] && s[i].test(r)) {
									u.unshift(i);
									break
								}
						if(u[0] in n) o = u[0];
						else {
							for(i in n) {
								if(!u[0] || e.converters[i + " " + u[0]]) {
									o = i;
									break
								}
								a = a || i
							}
							o = o || a
						}
						if(o) return o !== u[0] && u.unshift(o), n[o]
					}(h, E, r)), b = function(e, t, n, r) {
						var i, o, a, s, u, l = {},
							c = e.dataTypes.slice();
						if(c[1])
							for(a in e.converters) l[a.toLowerCase()] = e.converters[a];
						for(o = c.shift(); o;)
							if(e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
								if("*" === o) o = u;
								else if("*" !== u && u !== o) {
							if(!(a = l[u + " " + o] || l["* " + o]))
								for(i in l)
									if((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
										!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
										break
									}
							if(!0 !== a)
								if(a && e.throws) t = a(t);
								else try {
									t = a(t)
								} catch(e) {
									return {
										state: "parsererror",
										error: a ? e : "No conversion from " + u + " to " + o
									}
								}
						}
						return {
							state: "success",
							data: t
						}
					}(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
				}
				return E
			},
			getJSON: function(e, t, n) {
				return w.get(e, t, n, "json")
			},
			getScript: function(e, t) {
				return w.get(e, void 0, t, "script")
			}
		}), w.each(["get", "post"], function(e, t) {
			w[t] = function(e, n, r, i) {
				return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
					url: e,
					type: t,
					dataType: i,
					data: n,
					success: r
				}, w.isPlainObject(e) && e))
			}
		}), w._evalUrl = function(e) {
			return w.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				throws: !0
			})
		}, w.fn.extend({
			wrapAll: function(e) {
				var t;
				return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for(var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this
			},
			wrapInner: function(e) {
				return g(e) ? this.each(function(t) {
					w(this).wrapInner(e.call(this, t))
				}) : this.each(function() {
					var t = w(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function(e) {
				var t = g(e);
				return this.each(function(n) {
					w(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function(e) {
				return this.parent(e).not("body").each(function() {
					w(this).replaceWith(this.childNodes)
				}), this
			}
		}), w.expr.pseudos.hidden = function(e) {
			return !w.expr.pseudos.visible(e)
		}, w.expr.pseudos.visible = function(e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
		}, w.ajaxSettings.xhr = function() {
			try {
				return new e.XMLHttpRequest
			} catch(e) {}
		};
		var Vt = {
				0: 200,
				1223: 204
			},
			Gt = w.ajaxSettings.xhr();
		h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t) {
			var n, r;
			if(h.cors || Gt && !t.crossDomain) return {
				send: function(i, o) {
					var a, s = t.xhr();
					if(s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
						for(a in t.xhrFields) s[a] = t.xhrFields[a];
					for(a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
					n = function(e) {
						return function() {
							n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
								binary: s.response
							} : {
								text: s.responseText
							}, s.getAllResponseHeaders()))
						}
					}, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
						4 === s.readyState && e.setTimeout(function() {
							n && r()
						})
					}, n = n("abort");
					try {
						s.send(t.hasContent && t.data || null)
					} catch(e) {
						if(n) throw e
					}
				},
				abort: function() {
					n && n()
				}
			}
		}), w.ajaxPrefilter(function(e) {
			e.crossDomain && (e.contents.script = !1)
		}), w.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function(e) {
					return w.globalEval(e), e
				}
			}
		}), w.ajaxPrefilter("script", function(e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), w.ajaxTransport("script", function(e) {
			var t, n;
			if(e.crossDomain) return {
				send: function(i, o) {
					t = w("<script>").prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
					}), r.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		});
		var Yt = [],
			Qt = /(=)\?(?=&|$)|\?\?/;
		w.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = Yt.pop() || w.expando + "_" + Et++;
				return this[e] = !0, e
			}
		}), w.ajaxPrefilter("json jsonp", function(t, n, r) {
			var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
			if(s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
				return a || w.error(i + " was not called"), a[0]
			}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
				a = arguments
			}, r.always(function() {
				void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
			}), "script"
		}), h.createHTMLDocument = function() {
			var e = r.implementation.createHTMLDocument("").body;
			return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
		}(), w.parseHTML = function(e, t, n) {
			return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), a = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)));
			var i, o, a
		}, w.fn.load = function(e, t, n) {
			var r, i, o, a = this,
				s = e.indexOf(" ");
			return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && w.ajax({
				url: e,
				type: i || "GET",
				dataType: "html",
				data: t
			}).done(function(e) {
				o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
			}).always(n && function(e, t) {
				a.each(function() {
					n.apply(this, o || [e.responseText, t, e])
				})
			}), this
		}, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			w.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), w.expr.pseudos.animated = function(e) {
			return w.grep(w.timers, function(t) {
				return e === t.elem
			}).length
		}, w.offset = {
			setOffset: function(e, t, n) {
				var r, i, o, a, s, u, c = w.css(e, "position"),
					f = w(e),
					p = {};
				"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), i = ("absolute" === c || "fixed" === c) && -1 < (o + u).indexOf("auto") ? (a = (r = f.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
			}
		}, w.fn.extend({
			offset: function(e) {
				if(arguments.length) return void 0 === e ? this : this.each(function(t) {
					w.offset.setOffset(this, e, t)
				});
				var t, n, r = this[0];
				return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
					top: t.top + n.pageYOffset,
					left: t.left + n.pageXOffset
				}) : {
					top: 0,
					left: 0
				} : void 0
			},
			position: function() {
				if(this[0]) {
					var e, t, n, r = this[0],
						i = {
							top: 0,
							left: 0
						};
					if("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
					else {
						for(t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
						e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
					}
					return {
						top: t.top - i.top - w.css(r, "marginTop", !0),
						left: t.left - i.left - w.css(r, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for(var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
					return e || be
				})
			}
		}), w.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(e, t) {
			var n = "pageYOffset" === t;
			w.fn[e] = function(r) {
				return z(this, function(e, r, i) {
					var o;
					if(y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
					o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
				}, e, r, arguments.length)
			}
		}), w.each(["top", "left"], function(e, t) {
			w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
				if(n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
			})
		}), w.each({
			Height: "height",
			Width: "width"
		}, function(e, t) {
			w.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function(n, r) {
				w.fn[r] = function(i, o) {
					var a = arguments.length && (n || "boolean" != typeof i),
						s = n || (!0 === i || !0 === o ? "margin" : "border");
					return z(this, function(t, n, i) {
						var o;
						return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
					}, t, a ? i : void 0, a)
				}
			})
		}), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
			w.fn[t] = function(e, n) {
				return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), w.fn.extend({
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		}), w.fn.extend({
			bind: function(e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		}), w.proxy = function(e, t) {
			var n, r, i;
			if("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), (i = function() {
				return e.apply(t || this, r.concat(o.call(arguments)))
			}).guid = e.guid = e.guid || w.guid++, i
		}, w.holdReady = function(e) {
			e ? w.readyWait++ : w.ready(!0)
		}, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
			var t = w.type(e);
			return("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		}, "function" == typeof define && define.amd && define("jquery", [], function() {
			return w
		});
		var Jt = e.jQuery,
			Kt = e.$;
		return w.noConflict = function(t) {
			return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
		}, t || (e.jQuery = e.$ = w), w
	}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
var DateFormatter;
! function() {
	"use strict";
	var b = jQuery.fn.jquery.split(" ")[0].split(".");
	if(b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(),
function(a) {
	"use strict";
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
			d = this;
		a(this).one("bsTransitionEnd", function() {
			c = !0
		});
		return setTimeout(function() {
			c || a(d).trigger(a.support.transition.end)
		}, b), this
	}, a(function() {
		a.support.transition = function() {
			var a = document.createElement("bootstrap"),
				b = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd otransitionend",
					transition: "transitionend"
				};
			for(var c in b)
				if(void 0 !== a.style[c]) return {
					end: b[c]
				};
			return !1
		}(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function(b) {
				return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery),
function(a) {
	"use strict";

	function d(b) {
		a(b).on("click", c, this.close)
	}
	var c = '[data-dismiss="alert"]';
	d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove()
		}
		var e = a(this),
			f = e.attr("data-target");
		f || (f = (f = e.attr("href")) && f.replace(/.*(?=#[^\s]*$)/, ""));
		var g = a(f);
		b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
	};
	var e = a.fn.alert;
	a.fn.alert = function(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery),
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
		})
	}
	var c = function(b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
	};
	c.VERSION = "3.3.5", c.DEFAULTS = {
		loadingText: "loading..."
	}, c.prototype.setState = function(b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input") ? "val" : "html",
			f = d.data();
		b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
		}, this), 0)
	}, c.prototype.toggle = function() {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if(b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
		return a.fn.button = d, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
		var d = a(c.target);
		d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
	})
}(jQuery),
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
				g = "string" == typeof b ? b : f.slide;
			e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}
	var c = function(b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" != this.options.pause || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
	};
	c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, c.prototype.keydown = function(a) {
		if(!/input|textarea/i.test(a.target.tagName)) {
			switch(a.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			a.preventDefault()
		}
	}, c.prototype.cycle = function(b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, c.prototype.getItemIndex = function(a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
	}, c.prototype.getItemForDirection = function(a, b) {
		var c = this.getItemIndex(b);
		if(("prev" == a && 0 === c || "next" == a && c == this.$items.length - 1) && !this.options.wrap) return b;
		var f = (c + ("prev" == a ? -1 : 1)) % this.$items.length;
		return this.$items.eq(f)
	}, c.prototype.to = function(a) {
		var b = this,
			c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return a > this.$items.length - 1 || a < 0 ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
			b.to(a)
		}) : c == a ? this.pause().cycle() : this.slide(c < a ? "next" : "prev", this.$items.eq(a))
	}, c.prototype.pause = function(b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, c.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, c.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, c.prototype.slide = function(b, d) {
		var e = this.$element.find(".item.active"),
			f = d || this.getItemForDirection(b, e),
			g = this.interval,
			h = "next" == b ? "left" : "right",
			i = this;
		if(f.hasClass("active")) return this.sliding = !1;
		var j = f[0],
			k = a.Event("slide.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
		if(this.$element.trigger(k), !k.isDefaultPrevented()) {
			if(this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var l = a(this.$indicators.children()[this.getItemIndex(f)]);
				l && l.addClass("active")
			}
			var m = a.Event("slid.bs.carousel", {
				relatedTarget: j,
				direction: h
			});
			return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
					i.$element.trigger(m)
				}, 0)
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
		}
	};
	var d = a.fn.carousel;
	a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
		return a.fn.carousel = d, this
	};
	var e = function(c) {
		var d, e = a(this),
			f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
		if(f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
				h = e.attr("data-slide-to");
			h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
		}
	};
	a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
		a('[data-ride="carousel"]').each(function() {
			var c = a(this);
			b.call(c, c.data())
		})
	})
}(jQuery),
function(a) {
	"use strict";

	function b(b) {
		var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
		return a(d)
	}

	function c(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("bs.collapse"),
				f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
			!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
		})
	}
	var d = function(b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
		toggle: !0
	}, d.prototype.dimension = function() {
		return this.$element.hasClass("width") ? "width" : "height"
	}, d.prototype.show = function() {
		if(!this.transitioning && !this.$element.hasClass("in")) {
			var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if(!(e && e.length && ((b = e.data("bs.collapse")) && b.transitioning))) {
				var f = a.Event("show.bs.collapse");
				if(this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
					var g = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var h = function() {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if(!a.support.transition) return h.call(this);
					var i = a.camelCase(["scroll", g].join("-"));
					this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
				}
			}
		}
	}, d.prototype.hide = function() {
		if(!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if(this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var e = function() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
			}
		}
	}, d.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, d.prototype.getParent = function() {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
			var e = a(d);
			this.addAriaAndCollapsedClass(b(e), e)
		}, this)).end()
	}, d.prototype.addAriaAndCollapsedClass = function(a, b) {
		var c = a.hasClass("in");
		a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
	};
	var e = a.fn.collapse;
	a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
		return a.fn.collapse = e, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
		var e = a(this);
		e.attr("data-target") || d.preventDefault();
		var f = b(e),
			h = f.data("bs.collapse") ? "toggle" : e.data();
		c.call(f, h)
	})
}(jQuery),
function(a) {
	"use strict";

	function b(b) {
		var c = b.attr("data-target");
		c || (c = (c = b.attr("href")) && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}

	function c(c) {
		c && 3 === c.which || (a(".dropdown-backdrop").remove(), a(f).each(function() {
			var d = a(this),
				e = b(d),
				f = {
					relatedTarget: this
				};
			e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
		}))
	}

	function g(b) {
		a(b).on("click.bs.dropdown", this.toggle)
	}
	var f = '[data-toggle="dropdown"]';
	g.VERSION = "3.3.5", g.prototype.toggle = function(d) {
		var e = a(this);
		if(!e.is(".disabled, :disabled")) {
			var f = b(e),
				g = f.hasClass("open");
			if(c(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
				var h = {
					relatedTarget: this
				};
				if(f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
			}
			return !1
		}
	}, g.prototype.keydown = function(c) {
		if(/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
			var d = a(this);
			if(c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = b(d),
					g = e.hasClass("open");
				if(!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
				var i = e.find(".dropdown-menu li:not(.disabled):visible a");
				if(i.length) {
					var j = i.index(c.target);
					38 == c.which && 0 < j && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = function(b) {
		return this.each(function() {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
		})
	}, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
		return a.fn.dropdown = h, this
	}, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery),
function(a) {
	"use strict";

	function b(b, d) {
		return this.each(function() {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
		})
	}
	var c = function(b, c) {
		this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, c.prototype.toggle = function(a) {
		return this.isShown ? this.hide() : this.show(a)
	}, c.prototype.show = function(b) {
		var d = this,
			e = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
			d.$element.one("mouseup.dismiss.bs.modal", function(b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var e = a.support.transition && d.$element.hasClass("fade");
			d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
			var f = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			e ? d.$dialog.one("bsTransitionEnd", function() {
				d.$element.trigger("focus").trigger(f)
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
		}))
	}, c.prototype.hide = function(b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
	}, c.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	}, c.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, c.prototype.resize = function() {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
	}, c.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(), this.backdrop(function() {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
		})
	}, c.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, c.prototype.backdrop = function(b) {
		var d = this,
			e = this.$element.hasClass("fade") ? "fade" : "";
		if(this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;
			if(this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
		} else if(!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var g = function() {
				d.removeBackdrop(), b && b()
			};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
		} else b && b()
	}, c.prototype.handleUpdate = function() {
		this.adjustDialog()
	}, c.prototype.adjustDialog = function() {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
		})
	}, c.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, c.prototype.checkScrollbar = function() {
		var a = window.innerWidth;
		if(!a) {
			var b = document.documentElement.getBoundingClientRect();
			a = b.right - Math.abs(b.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
	}, c.prototype.setScrollbar = function() {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
	}, c.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	}, c.prototype.measureScrollbar = function() {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), b
	};
	var d = a.fn.modal;
	a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
		return a.fn.modal = d, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
		var d = a(this),
			e = d.attr("href"),
			f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			g = f.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(e) && e
			}, f.data(), d.data());
		d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
				d.is(":visible") && d.trigger("focus")
			})
		}), b.call(f, g, this)
	})
}(jQuery),
function(a) {
	"use strict";

	function c(a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
	}
	c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, c.prototype.init = function(b, c, d) {
		if(this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for(var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
					i = "hover" == g ? "mouseleave" : "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, c.prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.getOptions = function(b) {
		return(b = a.extend({}, this.getDefaults(), this.$element.data(), b)).delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, c.prototype.getDelegateOptions = function() {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function(a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, c.prototype.enter = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show())
	}, c.prototype.isInStateTrue = function() {
		for(var a in this.inState)
			if(this.inState[a]) return !0;
		return !1
	}, c.prototype.leave = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide)) : c.hide())
	}, c.prototype.show = function() {
		var b = a.Event("show.bs." + this.type);
		if(this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if(b.isDefaultPrevented() || !d) return;
			var e = this,
				f = this.tip(),
				g = this.getUID(this.type);
			this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
			var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
				i = /\s?auto?\s?/i,
				j = i.test(h);
			j && (h = h.replace(i, "") || "top"), f.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var k = this.getPosition(),
				l = f[0].offsetWidth,
				m = f[0].offsetHeight;
			if(j) {
				var n = h,
					o = this.getPosition(this.$viewport);
				h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
			}
			var p = this.getCalculatedOffset(h, k, l, m);
			this.applyPlacement(p, h);
			var q = function() {
				var a = e.hoverState;
				e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
			};
			a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
		}
	}, c.prototype.applyPlacement = function(b, c) {
		var d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
			using: function(a) {
				d.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0), d.addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left ? b.left += k.left : b.top += k.top;
		var l = /top|bottom/.test(c),
			m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
			n = l ? "offsetWidth" : "offsetHeight";
		d.offset(b), this.replaceArrow(m, d[0][n], l)
	}, c.prototype.replaceArrow = function(a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
	}, c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, c.prototype.hide = function(b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
		}
		var e = this,
			f = a(this.$tip),
			g = a.Event("hide.bs." + this.type);
		return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
	}, c.prototype.fixTitle = function() {
		var a = this.$element;
		!a.attr("title") && "string" == typeof a.attr("data-original-title") || a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, c.prototype.hasContent = function() {
		return this.getTitle()
	}, c.prototype.getPosition = function(b) {
		var c = (b = b || this.$element)[0],
			d = "BODY" == c.tagName,
			e = c.getBoundingClientRect();
		null == e.width && (e = a.extend({}, e, {
			width: e.right - e.left,
			height: e.bottom - e.top
		}));
		var f = d ? {
				top: 0,
				left: 0
			} : b.offset(),
			g = {
				scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
			},
			h = d ? {
				width: a(window).width(),
				height: a(window).height()
			} : null;
		return a.extend({}, e, g, h, f)
	}, c.prototype.getCalculatedOffset = function(a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
		var e = {
			top: 0,
			left: 0
		};
		if(!this.$viewport) return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
			g = this.getPosition(this.$viewport);
		if(/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
				i = b.top + f - g.scroll + d;
			h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
				k = b.left + f + c;
			j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
		}
		return e
	}, c.prototype.getTitle = function() {
		var b = this.$element,
			c = this.options;
		return b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, c.prototype.getUID = function(a) {
		for(; a += ~~(1e6 * Math.random()), document.getElementById(a););
		return a
	}, c.prototype.tip = function() {
		if(!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, c.prototype.enable = function() {
		this.enabled = !0
	}, c.prototype.disable = function() {
		this.enabled = !1
	}, c.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, c.prototype.toggle = function(b) {
		var c = this;
		b && ((c = a(b.currentTarget).data("bs." + this.type)) || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, c.prototype.destroy = function() {
		var a = this;
		clearTimeout(this.timeout), this.hide(function() {
			a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
		})
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = function(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof b && b;
			!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
		return a.fn.tooltip = d, this
	}
}(jQuery),
function(a) {
	"use strict";

	function c(a, b) {
		this.init("popover", a, b)
	}
	if(!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), ((c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)).constructor = c).prototype.getDefaults = function() {
		return c.DEFAULTS
	}, c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, c.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, c.prototype.getContent = function() {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var d = a.fn.popover;
	a.fn.popover = function(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof b && b;
			!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
		return a.fn.popover = d, this
	}
}(jQuery),
function(a) {
	"use strict";

	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
	}

	function c(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.3.5", b.DEFAULTS = {
		offset: 10
	}, b.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, b.prototype.refresh = function() {
		var b = this,
			c = "offset",
			d = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
			var b = a(this),
				e = b.data("target") || b.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[f[c]().top + d, e]
			] || null
		}).sort(function(a, b) {
			return a[0] - b[0]
		}).each(function() {
			b.offsets.push(this[0]), b.targets.push(this[1])
		})
	}, b.prototype.process = function() {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.getScrollHeight(),
			d = this.options.offset + c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if(this.scrollHeight != c && this.refresh(), d <= b) return g != (a = f[f.length - 1]) && this.activate(a);
		if(g && b < e[0]) return this.activeTarget = null, this.clear();
		for(a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function(b) {
		this.activeTarget = b, this.clear();
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function() {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = d, this
	}, a(window).on("load.bs.scrollspy.data-api", function() {
		a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery),
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
		})
	}

	function c(b) {
		this.element = a(b)
	}
	c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if(d || (d = (d = b.attr("href")) && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
				f = a.Event("hide.bs.tab", {
					relatedTarget: b[0]
				}),
				g = a.Event("show.bs.tab", {
					relatedTarget: e[0]
				});
			if(e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);
				this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
					e.trigger({
						type: "hidden.bs.tab",
						relatedTarget: b[0]
					}), b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e[0]
					})
				})
			}
		}
	}, c.prototype.activate = function(b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
		}
		var g = d.find("> .active"),
			h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
		g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
		return a.fn.tab = d, this
	};

	function e(c) {
		c.preventDefault(), b.call(a(this), "show")
	}
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery),
function(a) {
	"use strict";

	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof b && b;
			e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
		})
	}
	var c = function(b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
		offset: 0,
		target: window
	}, c.prototype.getState = function(a, b, c, d) {
		var e = this.$target.scrollTop(),
			f = this.$element.offset(),
			g = this.$target.height();
		if(null != c && "top" == this.affixed) return e < c && "top";
		if("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
		var h = null == this.affixed,
			i = h ? e : f.top;
		return null != c && e <= c ? "top" : null != d && a - d <= i + (h ? g : b) && "bottom"
	}, c.prototype.getPinnedOffset = function() {
		if(this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			b = this.$element.offset();
		return this.pinnedOffset = b.top - a
	}, c.prototype.checkPositionWithEventLoop = function() {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, c.prototype.checkPosition = function() {
		if(this.$element.is(":visible")) {
			var b = this.$element.height(),
				d = this.options.offset,
				e = d.top,
				f = d.bottom,
				g = Math.max(a(document).height(), a(document.body).height());
			"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
			var h = this.getState(g, b, e, f);
			if(this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");
				var i = "affix" + (h ? "-" + h : ""),
					j = a.Event(i + ".bs.affix");
				if(this.$element.trigger(j), j.isDefaultPrevented()) return;
				this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == h && this.$element.offset({
				top: g - b - f
			})
		}
	};
	var d = a.fn.affix;
	a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
		return a.fn.affix = d, this
	}, a(window).on("load", function() {
		a('[data-spy="affix"]').each(function() {
			var c = a(this),
				d = c.data();
			d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
		})
	})
}(jQuery),
function(define) {
	define(["jquery"], function($) {
		return toastId = 0, toastType_error = "error", toastType_info = "info", toastType_success = "success", toastType_warning = "warning", toastr = {
			clear: function($toastElement, clearOptions) {
				var options = getOptions();
				$container || getContainer(options);
				clearToast($toastElement, options, clearOptions) || function(options) {
					for(var toastsToClear = $container.children(), i = toastsToClear.length - 1; 0 <= i; i--) clearToast($(toastsToClear[i]), options)
				}(options)
			},
			remove: function($toastElement) {
				var options = getOptions();
				$container || getContainer(options);
				if($toastElement && 0 === $(":focus", $toastElement).length) return void removeToast($toastElement);
				$container.children().length && $container.remove()
			},
			error: function(message, title, optionsOverride) {
				return notify({
					type: toastType_error,
					iconClass: getOptions().iconClasses.error,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				})
			},
			getContainer: getContainer,
			info: function(message, title, optionsOverride) {
				return notify({
					type: toastType_info,
					iconClass: getOptions().iconClasses.info,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				})
			},
			options: {},
			subscribe: function(callback) {
				listener = callback
			},
			success: function(message, title, optionsOverride) {
				return notify({
					type: toastType_success,
					iconClass: getOptions().iconClasses.success,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				})
			},
			version: "2.1.4",
			warning: function(message, title, optionsOverride) {
				return notify({
					type: toastType_warning,
					iconClass: getOptions().iconClasses.warning,
					message: message,
					optionsOverride: optionsOverride,
					title: title
				})
			}
		};

		function getContainer(options, create) {
			return options = options || getOptions(), ($container = $("#" + options.containerId)).length || create && ($container = function(options) {
				return($container = $("<div/>").attr("id", options.containerId).addClass(options.positionClass)).appendTo($(options.target)), $container
			}(options)), $container
		}

		function clearToast($toastElement, options, clearOptions) {
			var force = !(!clearOptions || !clearOptions.force) && clearOptions.force;
			return !(!$toastElement || !force && 0 !== $(":focus", $toastElement).length) && ($toastElement[options.hideMethod]({
				duration: options.hideDuration,
				easing: options.hideEasing,
				complete: function() {
					removeToast($toastElement)
				}
			}), !0)
		}

		function publish(args) {
			listener && listener(args)
		}

		function notify(map) {
			var options = getOptions(),
				iconClass = map.iconClass || options.iconClass;
			if(void 0 !== map.optionsOverride && (options = $.extend(options, map.optionsOverride), iconClass = map.optionsOverride.iconClass || iconClass), ! function(options, map) {
					if(options.preventDuplicates) {
						if(map.message === previousToast) return !0;
						previousToast = map.message
					}
					return !1
				}(options, map)) {
				toastId++, $container = getContainer(options, !0);
				var intervalId = null,
					$toastElement = $("<div/>"),
					$titleElement = $("<div/>"),
					$messageElement = $("<div/>"),
					$progressElement = $("<div/>"),
					$closeElement = $(options.closeHtml),
					progressBar = {
						intervalId: null,
						hideEta: null,
						maxHideTime: null
					},
					response = {
						toastId: toastId,
						state: "visible",
						startTime: new Date,
						options: options,
						map: map
					};
				return map.iconClass && $toastElement.addClass(options.toastClass).addClass(iconClass),
					function() {
						if(map.title) {
							var suffix = map.title;
							options.escapeHtml && (suffix = escapeHtml(map.title)), $titleElement.append(suffix).addClass(options.titleClass), $toastElement.append($titleElement)
						}
					}(),
					function() {
						if(map.message) {
							var suffix = map.message;
							options.escapeHtml && (suffix = escapeHtml(map.message)), $messageElement.append(suffix).addClass(options.messageClass), $toastElement.append($messageElement)
						}
					}(), options.closeButton && ($closeElement.addClass(options.closeClass).attr("role", "button"), $toastElement.prepend($closeElement)), options.progressBar && ($progressElement.addClass(options.progressClass), $toastElement.prepend($progressElement)), options.rtl && $toastElement.addClass("rtl"), options.newestOnTop ? $container.prepend($toastElement) : $container.append($toastElement),
					function() {
						var ariaValue = "";
						switch(map.iconClass) {
							case "toast-success":
							case "toast-info":
								ariaValue = "polite";
								break;
							default:
								ariaValue = "assertive"
						}
						$toastElement.attr("aria-live", ariaValue)
					}(), $toastElement.hide(), $toastElement[options.showMethod]({
						duration: options.showDuration,
						easing: options.showEasing,
						complete: options.onShown
					}), 0 < options.timeOut && (intervalId = setTimeout(hideToast, options.timeOut), progressBar.maxHideTime = parseFloat(options.timeOut), progressBar.hideEta = (new Date).getTime() + progressBar.maxHideTime, options.progressBar && (progressBar.intervalId = setInterval(updateProgress, 10))),
					function() {
						options.closeOnHover && $toastElement.hover(stickAround, delayedHideToast);
						!options.onclick && options.tapToDismiss && $toastElement.click(hideToast);
						options.closeButton && $closeElement && $closeElement.click(function(event) {
							event.stopPropagation ? event.stopPropagation() : void 0 !== event.cancelBubble && !0 !== event.cancelBubble && (event.cancelBubble = !0), options.onCloseClick && options.onCloseClick(event), hideToast(!0)
						});
						options.onclick && $toastElement.click(function(event) {
							options.onclick(event), hideToast()
						})
					}(), publish(response), options.debug && console && console.log(response), $toastElement
			}

			function escapeHtml(source) {
				return null == source && (source = ""), source.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
			}

			function hideToast(override) {
				var method = override && !1 !== options.closeMethod ? options.closeMethod : options.hideMethod,
					duration = override && !1 !== options.closeDuration ? options.closeDuration : options.hideDuration,
					easing = override && !1 !== options.closeEasing ? options.closeEasing : options.hideEasing;
				if(!$(":focus", $toastElement).length || override) return clearTimeout(progressBar.intervalId), $toastElement[method]({
					duration: duration,
					easing: easing,
					complete: function() {
						removeToast($toastElement), clearTimeout(intervalId), options.onHidden && "hidden" !== response.state && options.onHidden(), response.state = "hidden", response.endTime = new Date, publish(response)
					}
				})
			}

			function delayedHideToast() {
				(0 < options.timeOut || 0 < options.extendedTimeOut) && (intervalId = setTimeout(hideToast, options.extendedTimeOut), progressBar.maxHideTime = parseFloat(options.extendedTimeOut), progressBar.hideEta = (new Date).getTime() + progressBar.maxHideTime)
			}

			function stickAround() {
				clearTimeout(intervalId), progressBar.hideEta = 0, $toastElement.stop(!0, !0)[options.showMethod]({
					duration: options.showDuration,
					easing: options.showEasing
				})
			}

			function updateProgress() {
				var percentage = (progressBar.hideEta - (new Date).getTime()) / progressBar.maxHideTime * 100;
				$progressElement.width(percentage + "%")
			}
		}

		function getOptions() {
			return $.extend({}, {
				tapToDismiss: !0,
				toastClass: "toast",
				containerId: "toast-container",
				debug: !1,
				showMethod: "fadeIn",
				showDuration: 300,
				showEasing: "swing",
				onShown: void 0,
				hideMethod: "fadeOut",
				hideDuration: 1e3,
				hideEasing: "swing",
				onHidden: void 0,
				closeMethod: !1,
				closeDuration: !1,
				closeEasing: !1,
				closeOnHover: !0,
				extendedTimeOut: 1e3,
				iconClasses: {
					error: "toast-error",
					info: "toast-info",
					success: "toast-success",
					warning: "toast-warning"
				},
				iconClass: "toast-info",
				positionClass: "toast-top-right",
				timeOut: 5e3,
				titleClass: "toast-title",
				messageClass: "toast-message",
				escapeHtml: !1,
				target: "body",
				closeHtml: '<button type="button">&times;</button>',
				closeClass: "toast-close-button",
				newestOnTop: !0,
				preventDuplicates: !1,
				progressBar: !1,
				progressClass: "toast-progress",
				rtl: !1
			}, toastr.options)
		}

		function removeToast($toastElement) {
			$container = $container || getContainer(), $toastElement.is(":visible") || ($toastElement.remove(), $toastElement = null, 0 === $container.children().length && ($container.remove(), previousToast = void 0))
		}
		var $container, listener, previousToast, toastId, toastType_error, toastType_info, toastType_success, toastType_warning, toastr
	})
}("function" == typeof define && define.amd ? define : function(deps, factory) {
	"undefined" != typeof module && module.exports ? module.exports = factory(require("jquery")) : window.toastr = factory(window.jQuery)
}),
function() {
	"use strict";
	var e, t, a, r, n;
	e = function(e, t) {
		return "string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase()
	}, t = function(e, a, r) {
		var n = r || "0",
			o = e.toString();
		return o.length < a ? t(n + o, a) : o
	}, a = function(e) {
		var t, r;
		for(e = e || {}, t = 1; t < arguments.length; t++)
			if(r = arguments[t])
				for(var n in r) r.hasOwnProperty(n) && ("object" == typeof r[n] ? a(e[n], r[n]) : e[n] = r[n]);
		return e
	}, r = function(e, t) {
		for(var a = 0; a < t.length; a++)
			if(t[a].toLowerCase() === e.toLowerCase()) return a;
		return -1
	}, n = {
		dateSettings: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			meridiem: ["AM", "PM"],
			ordinal: function(e) {
				var t = e % 10,
					a = {
						1: "st",
						2: "nd",
						3: "rd"
					};
				return 1 !== Math.floor(e % 100 / 10) && a[t] ? a[t] : "th"
			}
		},
		separators: /[ \-+\/\.T:@]/g,
		validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
		intParts: /[djwNzmnyYhHgGis]/g,
		tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		tzClip: /[^-+\dA-Z]/g
	}, (DateFormatter = function(e) {
		var t = this,
			r = a(n, e);
		t.dateSettings = r.dateSettings, t.separators = r.separators, t.validParts = r.validParts, t.intParts = r.intParts, t.tzParts = r.tzParts, t.tzClip = r.tzClip
	}).prototype = {
		constructor: DateFormatter,
		getMonth: function(e) {
			var t;
			return 0 === (t = r(e, this.dateSettings.monthsShort) + 1) && (t = r(e, this.dateSettings.months) + 1), t
		},
		parseDate: function(t, a) {
			var r, n, o, i, s, u, d, l, f, c, m = this,
				h = !1,
				g = !1,
				p = m.dateSettings,
				D = {
					date: null,
					year: null,
					month: null,
					day: null,
					hour: 0,
					min: 0,
					sec: 0
				};
			if(!t) return null;
			if(t instanceof Date) return t;
			if("U" === a) return(o = parseInt(t)) ? new Date(1e3 * o) : t;
			switch(typeof t) {
				case "number":
					return new Date(t);
				case "string":
					break;
				default:
					return null
			}
			if(!(r = a.match(m.validParts)) || 0 === r.length) throw new Error("Invalid date format definition.");
			for(n = t.replace(m.separators, "\0").split("\0"), o = 0; o < n.length; o++) switch(i = n[o], s = parseInt(i), r[o]) {
				case "y":
				case "Y":
					if(!s) return null;
					f = i.length, D.year = 2 === f ? parseInt((s < 70 ? "20" : "19") + i) : s, h = !0;
					break;
				case "m":
				case "n":
				case "M":
				case "F":
					if(isNaN(s)) {
						if(!(0 < (u = m.getMonth(i)))) return null;
						D.month = u
					} else {
						if(!(1 <= s && s <= 12)) return null;
						D.month = s
					}
					h = !0;
					break;
				case "d":
				case "j":
					if(!(1 <= s && s <= 31)) return null;
					D.day = s, h = !0;
					break;
				case "g":
				case "h":
					if(c = n[d = -1 < r.indexOf("a") ? r.indexOf("a") : -1 < r.indexOf("A") ? r.indexOf("A") : -1], -1 < d) l = e(c, p.meridiem[0]) ? 0 : e(c, p.meridiem[1]) ? 12 : -1, 1 <= s && s <= 12 && -1 < l ? D.hour = s + l - 1 : 0 <= s && s <= 23 && (D.hour = s);
					else {
						if(!(0 <= s && s <= 23)) return null;
						D.hour = s
					}
					g = !0;
					break;
				case "G":
				case "H":
					if(!(0 <= s && s <= 23)) return null;
					D.hour = s, g = !0;
					break;
				case "i":
					if(!(0 <= s && s <= 59)) return null;
					D.min = s, g = !0;
					break;
				case "s":
					if(!(0 <= s && s <= 59)) return null;
					D.sec = s, g = !0
			}
			if(!0 === h && D.year && D.month && D.day) D.date = new Date(D.year, D.month - 1, D.day, D.hour, D.min, D.sec, 0);
			else {
				if(!0 !== g) return null;
				D.date = new Date(0, 0, 0, D.hour, D.min, D.sec, 0)
			}
			return D.date
		},
		guessDate: function(e, t) {
			if("string" != typeof e) return e;
			var a, r, n, o, i, s, d = e.replace(this.separators, "\0").split("\0"),
				f = t.match(this.validParts),
				c = new Date,
				m = 0;
			if(!/^[djmn]/g.test(f[0])) return e;
			for(n = 0; n < d.length; n++) {
				if(m = 2, i = d[n], s = parseInt(i.substr(0, 2)), isNaN(s)) return null;
				switch(n) {
					case 0:
						"m" === f[0] || "n" === f[0] ? c.setMonth(s - 1) : c.setDate(s);
						break;
					case 1:
						"m" === f[0] || "n" === f[0] ? c.setDate(s) : c.setMonth(s - 1);
						break;
					case 2:
						if(r = c.getFullYear(), m = (a = i.length) < 4 ? a : 4, !(r = parseInt(a < 4 ? r.toString().substr(0, 4 - a) + i : i.substr(0, 4)))) return null;
						c.setFullYear(r);
						break;
					case 3:
						c.setHours(s);
						break;
					case 4:
						c.setMinutes(s);
						break;
					case 5:
						c.setSeconds(s)
				}
				0 < (o = i.substr(m)).length && d.splice(n + 1, 0, o)
			}
			return c
		},
		parseFormat: function(e, a) {
			function d(e, t) {
				return r[e] ? r[e]() : t
			}
			var r, n = this,
				s = n.dateSettings,
				u = /\\?(.?)/gi;
			return r = {
				d: function() {
					return t(r.j(), 2)
				},
				D: function() {
					return s.daysShort[r.w()]
				},
				j: function() {
					return a.getDate()
				},
				l: function() {
					return s.days[r.w()]
				},
				N: function() {
					return r.w() || 7
				},
				w: function() {
					return a.getDay()
				},
				z: function() {
					var e = new Date(r.Y(), r.n() - 1, r.j()),
						t = new Date(r.Y(), 0, 1);
					return Math.round((e - t) / 864e5)
				},
				W: function() {
					var e = new Date(r.Y(), r.n() - 1, r.j() - r.N() + 3),
						a = new Date(e.getFullYear(), 0, 4);
					return t(1 + Math.round((e - a) / 864e5 / 7), 2)
				},
				F: function() {
					return s.months[a.getMonth()]
				},
				m: function() {
					return t(r.n(), 2)
				},
				M: function() {
					return s.monthsShort[a.getMonth()]
				},
				n: function() {
					return a.getMonth() + 1
				},
				t: function() {
					return new Date(r.Y(), r.n(), 0).getDate()
				},
				L: function() {
					var e = r.Y();
					return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 1 : 0
				},
				o: function() {
					var e = r.n(),
						t = r.W();
					return r.Y() + (12 === e && t < 9 ? 1 : 1 === e && 9 < t ? -1 : 0)
				},
				Y: function() {
					return a.getFullYear()
				},
				y: function() {
					return r.Y().toString().slice(-2)
				},
				a: function() {
					return r.A().toLowerCase()
				},
				A: function() {
					var e = r.G() < 12 ? 0 : 1;
					return s.meridiem[e]
				},
				B: function() {
					var e = 3600 * a.getUTCHours(),
						r = 60 * a.getUTCMinutes(),
						n = a.getUTCSeconds();
					return t(Math.floor((e + r + n + 3600) / 86.4) % 1e3, 3)
				},
				g: function() {
					return r.G() % 12 || 12
				},
				G: function() {
					return a.getHours()
				},
				h: function() {
					return t(r.g(), 2)
				},
				H: function() {
					return t(r.G(), 2)
				},
				i: function() {
					return t(a.getMinutes(), 2)
				},
				s: function() {
					return t(a.getSeconds(), 2)
				},
				u: function() {
					return t(1e3 * a.getMilliseconds(), 6)
				},
				e: function() {
					return /\((.*)\)/.exec(String(a))[1] || "Coordinated Universal Time"
				},
				I: function() {
					return new Date(r.Y(), 0) - Date.UTC(r.Y(), 0) != new Date(r.Y(), 6) - Date.UTC(r.Y(), 6) ? 1 : 0
				},
				O: function() {
					var e = a.getTimezoneOffset(),
						r = Math.abs(e);
					return(0 < e ? "-" : "+") + t(100 * Math.floor(r / 60) + r % 60, 4)
				},
				P: function() {
					var e = r.O();
					return e.substr(0, 3) + ":" + e.substr(3, 2)
				},
				T: function() {
					return(String(a).match(n.tzParts) || [""]).pop().replace(n.tzClip, "") || "UTC"
				},
				Z: function() {
					return 60 * -a.getTimezoneOffset()
				},
				c: function() {
					return "Y-m-d\\TH:i:sP".replace(u, d)
				},
				r: function() {
					return "D, d M Y H:i:s O".replace(u, d)
				},
				U: function() {
					return a.getTime() / 1e3 || 0
				}
			}, d(e, e)
		},
		formatDate: function(e, t) {
			var a, r, n, o, i, s = this,
				u = "";
			if("string" == typeof e && !(e = s.parseDate(e, t))) return null;
			if(e instanceof Date) {
				for(n = t.length, a = 0; a < n; a++) "S" !== (i = t.charAt(a)) && "\\" !== i && (0 < a && "\\" === t.charAt(a - 1) ? u += i : (o = s.parseFormat(i, e), a !== n - 1 && s.intParts.test(i) && "S" === t.charAt(a + 1) && (r = parseInt(o) || 0, o += s.dateSettings.ordinal(r)), u += o));
				return u
			}
			return ""
		}
	}
}();
var datetimepickerFactory = function(e) {
	"use strict";

	function t(e, t, a) {
		this.date = e, this.desc = t, this.style = a
	}
	var a = {
			i18n: {
				ar: {
					months: ["ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ", "Ø´Ø¨Ø§Ø·", "Ø¢Ø°Ø§Ø±", "Ù†ÙŠØ³Ø§Ù†", "Ù…Ø§ÙŠÙˆ", "Ø­Ø²ÙŠØ±Ø§Ù†", "ØªÙ…ÙˆØ²", "Ø¢Ø¨", "Ø£ÙŠÙ„ÙˆÙ„", "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„", "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ", "ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„"],
					dayOfWeekShort: ["Ù†", "Ø«", "Ø¹", "Ø®", "Ø¬", "Ø³", "Ø­"],
					dayOfWeek: ["Ø§Ù„Ø£Ø­Ø¯", "Ø§Ù„Ø§Ø«Ù†ÙŠÙ†", "Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡", "Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡", "Ø§Ù„Ø®Ù…ÙŠØ³", "Ø§Ù„Ø¬Ù…Ø¹Ø©", "Ø§Ù„Ø³Ø¨Øª", "Ø§Ù„Ø£Ø­Ø¯"]
				},
				ro: {
					months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
					dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "SÃ¢"],
					dayOfWeek: ["DuminicÄƒ", "Luni", "MarÅ£i", "Miercuri", "Joi", "Vineri", "SÃ¢mbÄƒtÄƒ"]
				},
				id: {
					months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
					dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
					dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
				},
				is: {
					months: ["JanÃºar", "FebrÃºar", "Mars", "AprÃ­l", "MaÃ­", "JÃºnÃ­", "JÃºlÃ­", "ÃgÃºst", "September", "OktÃ³ber", "NÃ³vember", "Desember"],
					dayOfWeekShort: ["Sun", "MÃ¡n", "ÃriÃ°", "MiÃ°", "Fim", "FÃ¶s", "Lau"],
					dayOfWeek: ["Sunnudagur", "MÃ¡nudagur", "ÃriÃ°judagur", "MiÃ°vikudagur", "Fimmtudagur", "FÃ¶studagur", "Laugardagur"]
				},
				bg: {
					months: ["Ğ¯Ğ½ÑƒĞ°Ñ€Ğ¸", "Ğ¤ĞµĞ²Ñ€ÑƒĞ°Ñ€Ğ¸", "ĞœĞ°Ñ€Ñ‚", "ĞĞ¿Ñ€Ğ¸Ğ»", "ĞœĞ°Ğ¹", "Ğ®Ğ½Ğ¸", "Ğ®Ğ»Ğ¸", "ĞĞ²Ğ³ÑƒÑÑ‚", "Ğ¡ĞµĞ¿Ñ‚ĞµĞ¼Ğ²Ñ€Ğ¸", "ĞĞºÑ‚Ğ¾Ğ¼Ğ²Ñ€Ğ¸", "ĞĞ¾ĞµĞ¼Ğ²Ñ€Ğ¸", "Ğ”ĞµĞºĞµĞ¼Ğ²Ñ€Ğ¸"],
					dayOfWeekShort: ["ĞĞ´", "ĞŸĞ½", "Ğ’Ñ‚", "Ğ¡Ñ€", "Ğ§Ñ‚", "ĞŸÑ‚", "Ğ¡Ğ±"],
					dayOfWeek: ["ĞĞµĞ´ĞµĞ»Ñ", "ĞŸĞ¾Ğ½ĞµĞ´ĞµĞ»Ğ½Ğ¸Ğº", "Ğ’Ñ‚Ğ¾Ñ€Ğ½Ğ¸Ğº", "Ğ¡Ñ€ÑĞ´Ğ°", "Ğ§ĞµÑ‚Ğ²ÑŠÑ€Ñ‚ÑŠĞº", "ĞŸĞµÑ‚ÑŠĞº", "Ğ¡ÑŠĞ±Ğ¾Ñ‚Ğ°"]
				},
				fa: {
					months: ["ÙØ±ÙˆØ±Ø¯ÛŒÙ†", "Ø§Ø±Ø¯ÛŒØ¨Ù‡Ø´Øª", "Ø®Ø±Ø¯Ø§Ø¯", "ØªÛŒØ±", "Ù…Ø±Ø¯Ø§Ø¯", "Ø´Ù‡Ø±ÛŒÙˆØ±", "Ù…Ù‡Ø±", "Ø¢Ø¨Ø§Ù†", "Ø¢Ø°Ø±", "Ø¯ÛŒ", "Ø¨Ù‡Ù…Ù†", "Ø§Ø³ÙÙ†Ø¯"],
					dayOfWeekShort: ["ÛŒÚ©Ø´Ù†Ø¨Ù‡", "Ø¯ÙˆØ´Ù†Ø¨Ù‡", "Ø³Ù‡ Ø´Ù†Ø¨Ù‡", "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡", "Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡", "Ø¬Ù…Ø¹Ù‡", "Ø´Ù†Ø¨Ù‡"],
					dayOfWeek: ["ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡", "Ø¯ÙˆØ´Ù†Ø¨Ù‡", "Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡", "Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡", "Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡", "Ø¬Ù…Ø¹Ù‡", "Ø´Ù†Ø¨Ù‡", "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡"]
				},
				ru: {
					months: ["Ğ¯Ğ½Ğ²Ğ°Ñ€ÑŒ", "Ğ¤ĞµĞ²Ñ€Ğ°Ğ»ÑŒ", "ĞœĞ°Ñ€Ñ‚", "ĞĞ¿Ñ€ĞµĞ»ÑŒ", "ĞœĞ°Ğ¹", "Ğ˜ÑĞ½ÑŒ", "Ğ˜ÑĞ»ÑŒ", "ĞĞ²Ğ³ÑƒÑÑ‚", "Ğ¡ĞµĞ½Ñ‚ÑĞ±Ñ€ÑŒ", "ĞĞºÑ‚ÑĞ±Ñ€ÑŒ", "ĞĞ¾ÑĞ±Ñ€ÑŒ", "Ğ”ĞµĞºĞ°Ğ±Ñ€ÑŒ"],
					dayOfWeekShort: ["Ğ’Ñ", "ĞŸĞ½", "Ğ’Ñ‚", "Ğ¡Ñ€", "Ğ§Ñ‚", "ĞŸÑ‚", "Ğ¡Ğ±"],
					dayOfWeek: ["Ğ’Ğ¾ÑĞºÑ€ĞµÑĞµĞ½ÑŒĞµ", "ĞŸĞ¾Ğ½ĞµĞ´ĞµĞ»ÑŒĞ½Ğ¸Ğº", "Ğ’Ñ‚Ğ¾Ñ€Ğ½Ğ¸Ğº", "Ğ¡Ñ€ĞµĞ´Ğ°", "Ğ§ĞµÑ‚Ğ²ĞµÑ€Ğ³", "ĞŸÑÑ‚Ğ½Ğ¸Ñ†Ğ°", "Ğ¡ÑƒĞ±Ğ±Ğ¾Ñ‚Ğ°"]
				},
				uk: {
					months: ["Ğ¡Ñ–Ñ‡ĞµĞ½ÑŒ", "Ğ›ÑÑ‚Ğ¸Ğ¹", "Ğ‘ĞµÑ€ĞµĞ·ĞµĞ½ÑŒ", "ĞšĞ²Ñ–Ñ‚ĞµĞ½ÑŒ", "Ğ¢Ñ€Ğ°Ğ²ĞµĞ½ÑŒ", "Ğ§ĞµÑ€Ğ²ĞµĞ½ÑŒ", "Ğ›Ğ¸Ğ¿ĞµĞ½ÑŒ", "Ğ¡ĞµÑ€Ğ¿ĞµĞ½ÑŒ", "Ğ’ĞµÑ€ĞµÑĞµĞ½ÑŒ", "Ğ–Ğ¾Ğ²Ñ‚ĞµĞ½ÑŒ", "Ğ›Ğ¸ÑÑ‚Ğ¾Ğ¿Ğ°Ğ´", "Ğ“Ñ€ÑƒĞ´ĞµĞ½ÑŒ"],
					dayOfWeekShort: ["ĞĞ´Ğ»", "ĞŸĞ½Ğ´", "Ğ’Ñ‚Ñ€", "Ğ¡Ñ€Ğ´", "Ğ§Ñ‚Ğ²", "ĞŸÑ‚Ğ½", "Ğ¡Ğ±Ñ‚"],
					dayOfWeek: ["ĞĞµĞ´Ñ–Ğ»Ñ", "ĞŸĞ¾Ğ½ĞµĞ´Ñ–Ğ»Ğ¾Ğº", "Ğ’Ñ–Ğ²Ñ‚Ğ¾Ñ€Ğ¾Ğº", "Ğ¡ĞµÑ€ĞµĞ´Ğ°", "Ğ§ĞµÑ‚Ğ²ĞµÑ€", "ĞŸ'ÑÑ‚Ğ½Ğ¸Ñ†Ñ", "Ğ¡ÑƒĞ±Ğ¾Ñ‚Ğ°"]
				},
				en: {
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
				},
				el: {
					months: ["Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚", "Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚", "ÎœÎ¬ÏÏ„Î¹Î¿Ï‚", "Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚", "ÎœÎ¬Î¹Î¿Ï‚", "Î™Î¿ÏÎ½Î¹Î¿Ï‚", "Î™Î¿ÏÎ»Î¹Î¿Ï‚", "Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚", "Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚", "ÎŸÎºÏ„ÏÎ²ÏÎ¹Î¿Ï‚", "ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚", "Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚"],
					dayOfWeekShort: ["ÎšÏ…Ï", "Î”ÎµÏ…", "Î¤ÏÎ¹", "Î¤ÎµÏ„", "Î ÎµÎ¼", "Î Î±Ï", "Î£Î±Î²"],
					dayOfWeek: ["ÎšÏ…ÏÎ¹Î±ÎºÎ®", "Î”ÎµÏ…Ï„Î­ÏÎ±", "Î¤ÏÎ¯Ï„Î·", "Î¤ÎµÏ„Î¬ÏÏ„Î·", "Î Î­Î¼Ï€Ï„Î·", "Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®", "Î£Î¬Î²Î²Î±Ï„Î¿"]
				},
				de: {
					months: ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
					dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
					dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
				},
				nl: {
					months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
					dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
					dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
				},
				tr: {
					months: ["Ocak", "Åubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "EylÃ¼l", "Ekim", "Kasım", "Aralık"],
					dayOfWeekShort: ["Paz", "Pts", "Sal", "Ã‡ar", "Per", "Cum", "Cts"],
					dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Ã‡arşamba", "Perşembe", "Cuma", "Cumartesi"]
				},
				fr: {
					months: ["Janvier", "FÃ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "AoÃ»t", "Septembre", "Octobre", "Novembre", "DÃ©cembre"],
					dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
					dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
				},
				es: {
					months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
					dayOfWeekShort: ["Dom", "Lun", "Mar", "MiÃ©", "Jue", "Vie", "SÃ¡b"],
					dayOfWeek: ["Domingo", "Lunes", "Martes", "MiÃ©rcoles", "Jueves", "Viernes", "SÃ¡bado"]
				},
				th: {
					months: ["à¸¡à¸à¸£à¸²à¸„à¸¡", "à¸à¸¸à¸¡à¸ à¸²à¸à¸±à¸™à¸˜à¹Œ", "à¸¡à¸µà¸™à¸²à¸„à¸¡", "à¹€à¸¡à¸©à¸²à¸¢à¸™", "à¸à¸¤à¸©à¸ à¸²à¸„à¸¡", "à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™", "à¸à¸£à¸à¸à¸²à¸„à¸¡", "à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡", "à¸à¸±à¸™à¸¢à¸²à¸¢à¸™", "à¸•à¸¸à¸¥à¸²à¸„à¸¡", "à¸à¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™", "à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡"],
					dayOfWeekShort: ["à¸­à¸².", "à¸ˆ.", "à¸­.", "à¸.", "à¸à¸¤.", "à¸¨.", "à¸ª."],
					dayOfWeek: ["à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ", "à¸ˆà¸±à¸™à¸—à¸£à¹Œ", "à¸­à¸±à¸‡à¸„à¸²à¸£", "à¸à¸¸à¸˜", "à¸à¸¤à¸«à¸±à¸ª", "à¸¨à¸¸à¸à¸£à¹Œ", "à¹€à¸ªà¸²à¸£à¹Œ", "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ"]
				},
				pl: {
					months: ["styczeÅ„", "luty", "marzec", "kwiecieÅ„", "maj", "czerwiec", "lipiec", "sierpieÅ„", "wrzesieÅ„", "paÅºdziernik", "listopad", "grudzieÅ„"],
					dayOfWeekShort: ["nd", "pn", "wt", "Å›r", "cz", "pt", "sb"],
					dayOfWeek: ["niedziela", "poniedziaÅ‚ek", "wtorek", "Å›roda", "czwartek", "piÄ…tek", "sobota"]
				},
				pt: {
					months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
					dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
					dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "SÃ¡bado"]
				},
				ch: {
					months: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
					dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"]
				},
				se: {
					months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["SÃ¶n", "MÃ¥n", "Tis", "Ons", "Tor", "Fre", "LÃ¶r"]
				},
				km: {
					months: ["á˜á€ášá¶â€‹", "á€á»á˜áŸ’á—áŸˆ", "á˜á·á“á¶â€‹", "á˜áŸáŸá¶â€‹", "á§áŸá—á¶â€‹", "á˜á·áá»á“á¶â€‹", "á€á€áŸ’á€áŠá¶â€‹", "áŸá¸á á¶â€‹", "á€á‰áŸ’á‰á¶â€‹", "áá»á›á¶â€‹", "áœá·á…áŸ’á†á·á€á¶", "á’áŸ’á“á¼â€‹"],
					dayOfWeekShort: ["á¢á¶á‘á·â€‹", "á…áŸá“áŸ’á‘â€‹", "á¢á„áŸ’á‚á¶ášâ€‹", "á–á»á’â€‹", "á–áŸ’ášá â€‹â€‹", "áŸá»á€áŸ’ášâ€‹", "áŸáŸ…ášáŸ"],
					dayOfWeek: ["á¢á¶á‘á·ááŸ’á™â€‹", "á…áŸá“áŸ’á‘â€‹", "á¢á„áŸ’á‚á¶ášâ€‹", "á–á»á’â€‹", "á–áŸ’ášá áŸáŸ’á”áá·áŸâ€‹", "áŸá»á€áŸ’ášâ€‹", "áŸáŸ…ášáŸ"]
				},
				kr: {
					months: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
					dayOfWeekShort: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
					dayOfWeek: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
				},
				it: {
					months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
					dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
					dayOfWeek: ["Domenica", "LunedÃ¬", "MartedÃ¬", "MercoledÃ¬", "GiovedÃ¬", "VenerdÃ¬", "Sabato"]
				},
				da: {
					months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
					dayOfWeek: ["sÃ¸ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lÃ¸rdag"]
				},
				no: {
					months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
					dayOfWeekShort: ["SÃ¸n", "Man", "Tir", "Ons", "Tor", "Fre", "LÃ¸r"],
					dayOfWeek: ["SÃ¸ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "LÃ¸rdag"]
				},
				ja: {
					months: ["1æœˆ", "2æœˆ", "3æœˆ", "4æœˆ", "5æœˆ", "6æœˆ", "7æœˆ", "8æœˆ", "9æœˆ", "10æœˆ", "11æœˆ", "12æœˆ"],
					dayOfWeekShort: ["æ—¥", "æœˆ", "ç«", "æ°´", "æœ¨", "é‡‘", "åœŸ"],
					dayOfWeek: ["æ—¥æ›œ", "æœˆæ›œ", "ç«æ›œ", "æ°´æ›œ", "æœ¨æ›œ", "é‡‘æ›œ", "åœŸæ›œ"]
				},
				vi: {
					months: ["ThÃ¡ng 1", "ThÃ¡ng 2", "ThÃ¡ng 3", "ThÃ¡ng 4", "ThÃ¡ng 5", "ThÃ¡ng 6", "ThÃ¡ng 7", "ThÃ¡ng 8", "ThÃ¡ng 9", "ThÃ¡ng 10", "ThÃ¡ng 11", "ThÃ¡ng 12"],
					dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
					dayOfWeek: ["Chá»§ nháº­t", "Thá»© hai", "Thá»© ba", "Thá»© tÆ°", "Thá»© nÄƒm", "Thá»© sÃ¡u", "Thá»© báº£y"]
				},
				sl: {
					months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "ÄŒet", "Pet", "Sob"],
					dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "ÄŒetrtek", "Petek", "Sobota"]
				},
				cs: {
					months: ["Leden", "Ãšnor", "BÅ™ezen", "Duben", "KvÄ›ten", "ÄŒerven", "ÄŒervenec", "Srpen", "ZÃ¡Å™Ã­", "Å˜Ã­jen", "Listopad", "Prosinec"],
					dayOfWeekShort: ["Ne", "Po", "Ãšt", "St", "ÄŒt", "PÃ¡", "So"]
				},
				hu: {
					months: ["JanuÃ¡r", "FebruÃ¡r", "MÃ¡rcius", "Ãprilis", "MÃ¡jus", "JÃºnius", "JÃºlius", "Augusztus", "Szeptember", "OktÃ³ber", "November", "December"],
					dayOfWeekShort: ["Va", "HÃ©", "Ke", "Sze", "Cs", "PÃ©", "Szo"],
					dayOfWeek: ["vasÃ¡rnap", "hÃ©tfÅ‘", "kedd", "szerda", "csÃ¼tÃ¶rtÃ¶k", "pÃ©ntek", "szombat"]
				},
				az: {
					months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
					dayOfWeekShort: ["B", "Be", "Ã‡a", "Ã‡", "Ca", "C", "Å"],
					dayOfWeek: ["Bazar", "Bazar ertÉ™si", "Ã‡É™rşÉ™nbÉ™ axşamı", "Ã‡É™rşÉ™nbÉ™", "CÃ¼mÉ™ axşamı", "CÃ¼mÉ™", "ÅÉ™nbÉ™"]
				},
				bs: {
					months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
					dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "ÄŒet", "Pet", "Sub"],
					dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "ÄŒetvrtak", "Petak", "Subota"]
				},
				ca: {
					months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
					dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
					dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
				},
				"en-GB": {
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
				},
				et: {
					months: ["Jaanuar", "Veebruar", "MÃ¤rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
					dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
					dayOfWeek: ["PÃ¼hapÃ¤ev", "EsmaspÃ¤ev", "TeisipÃ¤ev", "KolmapÃ¤ev", "NeljapÃ¤ev", "Reede", "LaupÃ¤ev"]
				},
				eu: {
					months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
					dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
					dayOfWeek: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"]
				},
				fi: {
					months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "KesÃ¤kuu", "HeinÃ¤kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
					dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
					dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
				},
				gl: {
					months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
					dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
					dayOfWeek: ["Domingo", "Luns", "Martes", "MÃ©rcores", "Xoves", "Venres", "SÃ¡bado"]
				},
				hr: {
					months: ["SijeÄanj", "VeljaÄa", "OÅ¾ujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
					dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "ÄŒet", "Pet", "Sub"],
					dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "ÄŒetvrtak", "Petak", "Subota"]
				},
				ko: {
					months: ["1ì›”", "2ì›”", "3ì›”", "4ì›”", "5ì›”", "6ì›”", "7ì›”", "8ì›”", "9ì›”", "10ì›”", "11ì›”", "12ì›”"],
					dayOfWeekShort: ["ì¼", "ì›”", "í™”", "ìˆ˜", "ëª©", "ê¸ˆ", "í† "],
					dayOfWeek: ["ì¼ìš”ì¼", "ì›”ìš”ì¼", "í™”ìš”ì¼", "ìˆ˜ìš”ì¼", "ëª©ìš”ì¼", "ê¸ˆìš”ì¼", "í† ìš”ì¼"]
				},
				lt: {
					months: ["Sausio", "Vasario", "Kovo", "BalandÅ¾io", "GeguÅ¾Ä—s", "BirÅ¾elio", "Liepos", "RugpjÅ«Äio", "RugsÄ—jo", "Spalio", "LapkriÄio", "GruodÅ¾io"],
					dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Å eÅ¡"],
					dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "TreÄiadienis", "Ketvirtadienis", "Penktadienis", "Å eÅ¡tadienis"]
				},
				lv: {
					months: ["JanvÄris", "FebruÄris", "Marts", "AprÄ«lis ", "Maijs", "JÅ«nijs", "JÅ«lijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
					dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
					dayOfWeek: ["SvÄ“tdiena", "Pirmdiena", "Otrdiena", "TreÅ¡diena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
				},
				mk: {
					months: ["Ñ˜Ğ°Ğ½ÑƒĞ°Ñ€Ğ¸", "Ñ„ĞµĞ²Ñ€ÑƒĞ°Ñ€Ğ¸", "Ğ¼Ğ°Ñ€Ñ‚", "Ğ°Ğ¿Ñ€Ğ¸Ğ»", "Ğ¼Ğ°Ñ˜", "Ñ˜ÑƒĞ½Ğ¸", "Ñ˜ÑƒĞ»Ğ¸", "Ğ°Ğ²Ğ³ÑƒÑÑ‚", "ÑĞµĞ¿Ñ‚ĞµĞ¼Ğ²Ñ€Ğ¸", "Ğ¾ĞºÑ‚Ğ¾Ğ¼Ğ²Ñ€Ğ¸", "Ğ½Ğ¾ĞµĞ¼Ğ²Ñ€Ğ¸", "Ğ´ĞµĞºĞµĞ¼Ğ²Ñ€Ğ¸"],
					dayOfWeekShort: ["Ğ½ĞµĞ´", "Ğ¿Ğ¾Ğ½", "Ğ²Ñ‚Ğ¾", "ÑÑ€Ğµ", "Ñ‡ĞµÑ‚", "Ğ¿ĞµÑ‚", "ÑĞ°Ğ±"],
					dayOfWeek: ["ĞĞµĞ´ĞµĞ»Ğ°", "ĞŸĞ¾Ğ½ĞµĞ´ĞµĞ»Ğ½Ğ¸Ğº", "Ğ’Ñ‚Ğ¾Ñ€Ğ½Ğ¸Ğº", "Ğ¡Ñ€ĞµĞ´Ğ°", "Ğ§ĞµÑ‚Ğ²Ñ€Ñ‚Ğ¾Ğº", "ĞŸĞµÑ‚Ğ¾Ğº", "Ğ¡Ğ°Ğ±Ğ¾Ñ‚Ğ°"]
				},
				mn: {
					months: ["1-Ñ€ ÑĞ°Ñ€", "2-Ñ€ ÑĞ°Ñ€", "3-Ñ€ ÑĞ°Ñ€", "4-Ñ€ ÑĞ°Ñ€", "5-Ñ€ ÑĞ°Ñ€", "6-Ñ€ ÑĞ°Ñ€", "7-Ñ€ ÑĞ°Ñ€", "8-Ñ€ ÑĞ°Ñ€", "9-Ñ€ ÑĞ°Ñ€", "10-Ñ€ ÑĞ°Ñ€", "11-Ñ€ ÑĞ°Ñ€", "12-Ñ€ ÑĞ°Ñ€"],
					dayOfWeekShort: ["Ğ”Ğ°Ğ²", "ĞœÑĞ³", "Ğ›Ñ…Ğ°", "ĞŸÒ¯Ñ€", "Ğ‘ÑĞ½", "Ğ‘ÑĞ¼", "ĞÑĞ¼"],
					dayOfWeek: ["Ğ”Ğ°Ğ²Ğ°Ğ°", "ĞœÑĞ³Ğ¼Ğ°Ñ€", "Ğ›Ñ…Ğ°Ğ³Ğ²Ğ°", "ĞŸÒ¯Ñ€ÑĞ²", "Ğ‘Ğ°Ğ°ÑĞ°Ğ½", "Ğ‘ÑĞ¼Ğ±Ğ°", "ĞÑĞ¼"]
				},
				"pt-BR": {
					months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
					dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "SÃ¡b"],
					dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "SÃ¡bado"]
				},
				sk: {
					months: ["JanuÃ¡r", "FebruÃ¡r", "Marec", "AprÃ­l", "MÃ¡j", "JÃºn", "JÃºl", "August", "September", "OktÃ³ber", "November", "December"],
					dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Å t", "Pi", "So"],
					dayOfWeek: ["NedeÄ¾a", "Pondelok", "Utorok", "Streda", "Å tvrtok", "Piatok", "Sobota"]
				},
				sq: {
					months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "NÃ«ntor", "Dhjetor"],
					dayOfWeekShort: ["Die", "HÃ«n", "Mar", "MÃ«r", "Enj", "Pre", "Shtu"],
					dayOfWeek: ["E Diel", "E HÃ«nÃ«", "E MartÄ“", "E MÃ«rkurÃ«", "E Enjte", "E Premte", "E ShtunÃ«"]
				},
				"sr-YU": {
					months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
					dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "Äet", "Pet", "Sub"],
					dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "ÄŒetvrtak", "Petak", "Subota"]
				},
				sr: {
					months: ["Ñ˜Ğ°Ğ½ÑƒĞ°Ñ€", "Ñ„ĞµĞ±Ñ€ÑƒĞ°Ñ€", "Ğ¼Ğ°Ñ€Ñ‚", "Ğ°Ğ¿Ñ€Ğ¸Ğ»", "Ğ¼Ğ°Ñ˜", "Ñ˜ÑƒĞ½", "Ñ˜ÑƒĞ»", "Ğ°Ğ²Ğ³ÑƒÑÑ‚", "ÑĞµĞ¿Ñ‚ĞµĞ¼Ğ±Ğ°Ñ€", "Ğ¾ĞºÑ‚Ğ¾Ğ±Ğ°Ñ€", "Ğ½Ğ¾Ğ²ĞµĞ¼Ğ±Ğ°Ñ€", "Ğ´ĞµÑ†ĞµĞ¼Ğ±Ğ°Ñ€"],
					dayOfWeekShort: ["Ğ½ĞµĞ´", "Ğ¿Ğ¾Ğ½", "ÑƒÑ‚Ğ¾", "ÑÑ€Ğµ", "Ñ‡ĞµÑ‚", "Ğ¿ĞµÑ‚", "ÑÑƒĞ±"],
					dayOfWeek: ["ĞĞµĞ´ĞµÑ™Ğ°", "ĞŸĞ¾Ğ½ĞµĞ´ĞµÑ™Ğ°Ğº", "Ğ£Ñ‚Ğ¾Ñ€Ğ°Ğº", "Ğ¡Ñ€ĞµĞ´Ğ°", "Ğ§ĞµÑ‚Ğ²Ñ€Ñ‚Ğ°Ğº", "ĞŸĞµÑ‚Ğ°Ğº", "Ğ¡ÑƒĞ±Ğ¾Ñ‚Ğ°"]
				},
				sv: {
					months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
					dayOfWeekShort: ["SÃ¶n", "MÃ¥n", "Tis", "Ons", "Tor", "Fre", "LÃ¶r"],
					dayOfWeek: ["SÃ¶ndag", "MÃ¥ndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "LÃ¶rdag"]
				},
				"zh-TW": {
					months: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
					dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
					dayOfWeek: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
				},
				zh: {
					months: ["ä¸€æœˆ", "äºŒæœˆ", "ä¸‰æœˆ", "å››æœˆ", "äº”æœˆ", "å…­æœˆ", "ä¸ƒæœˆ", "å…«æœˆ", "ä¹æœˆ", "åæœˆ", "åä¸€æœˆ", "åäºŒæœˆ"],
					dayOfWeekShort: ["æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­"],
					dayOfWeek: ["æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­"]
				},
				ug: {
					months: ["1-Ø¦Ø§ÙŠ", "2-Ø¦Ø§ÙŠ", "3-Ø¦Ø§ÙŠ", "4-Ø¦Ø§ÙŠ", "5-Ø¦Ø§ÙŠ", "6-Ø¦Ø§ÙŠ", "7-Ø¦Ø§ÙŠ", "8-Ø¦Ø§ÙŠ", "9-Ø¦Ø§ÙŠ", "10-Ø¦Ø§ÙŠ", "11-Ø¦Ø§ÙŠ", "12-Ø¦Ø§ÙŠ"],
					dayOfWeek: ["ÙŠÛ•ÙƒØ´Û•Ù†Ø¨Û•", "Ø¯ÛˆØ´Û•Ù†Ø¨Û•", "Ø³Û•ÙŠØ´Û•Ù†Ø¨Û•", "Ú†Ø§Ø±Ø´Û•Ù†Ø¨Û•", "Ù¾Û•ÙŠØ´Û•Ù†Ø¨Û•", "Ø¬ÛˆÙ…Û•", "Ø´Û•Ù†Ø¨Û•"]
				},
				he: {
					months: ["×™× ×•××¨", "×¤×‘×¨×•××¨", "××¨×¥", "××¤×¨×™×œ", "×××™", "×™×•× ×™", "×™×•×œ×™", "××•×’×•×¡×˜", "×¡×¤×˜××‘×¨", "××•×§×˜×•×‘×¨", "× ×•×‘××‘×¨", "×“×¦××‘×¨"],
					dayOfWeekShort: ["×'", "×‘'", "×’'", "×“'", "×”'", "×•'", "×©×‘×ª"],
					dayOfWeek: ["×¨××©×•×Ÿ", "×©× ×™", "×©×œ×™×©×™", "×¨×‘×™×¢×™", "×—××™×©×™", "×©×™×©×™", "×©×‘×ª", "×¨××©×•×Ÿ"]
				},
				hy: {
					months: ["Õ€Õ¸Ö‚Õ¶Õ¾Õ¡Ö€", "Õ“Õ¥Õ¿Ö€Õ¾Õ¡Ö€", "Õ„Õ¡Ö€Õ¿", "Ô±ÕºÖ€Õ«Õ¬", "Õ„Õ¡ÕµÕ«Õ½", "Õ€Õ¸Ö‚Õ¶Õ«Õ½", "Õ€Õ¸Ö‚Õ¬Õ«Õ½", "Õ•Õ£Õ¸Õ½Õ¿Õ¸Õ½", "ÕÕ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€", "Õ€Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€", "Õ†Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€", "Ô´Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€"],
					dayOfWeekShort: ["Ô¿Õ«", "ÔµÖ€Õ¯", "ÔµÖ€Ö„", "Õ‰Õ¸Ö€", "Õ€Õ¶Õ£", "ÕˆÖ‚Ö€Õ¢", "Õ‡Õ¢Õ©"],
					dayOfWeek: ["Ô¿Õ«Ö€Õ¡Õ¯Õ«", "ÔµÖ€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«", "ÔµÖ€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«", "Õ‰Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«", "Õ€Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«", "ÕˆÖ‚Ö€Õ¢Õ¡Õ©", "Õ‡Õ¡Õ¢Õ¡Õ©"]
				},
				kg: {
					months: ["Ò®Ñ‡Ñ‚Ò¯Ğ½ Ğ°Ğ¹Ñ‹", "Ğ‘Ğ¸Ñ€Ğ´Ğ¸Ğ½ Ğ°Ğ¹Ñ‹", "Ğ–Ğ°Ğ»Ğ³Ğ°Ğ½ ĞšÑƒÑ€Ğ°Ğ½", "Ğ§Ñ‹Ğ½ ĞšÑƒÑ€Ğ°Ğ½", "Ğ‘ÑƒĞ³Ñƒ", "ĞšÑƒĞ»Ğ¶Ğ°", "Ğ¢ĞµĞºĞµ", "Ğ‘Ğ°Ñˆ ĞĞ¾Ğ½Ğ°", "ĞÑĞº ĞĞ¾Ğ½Ğ°", "Ğ¢Ğ¾Ğ³ÑƒĞ·Ğ´ÑƒĞ½ Ğ°Ğ¹Ñ‹", "Ğ–ĞµÑ‚Ğ¸Ğ½Ğ¸Ğ½ Ğ°Ğ¹Ñ‹", "Ğ‘ĞµÑˆÑ‚Ğ¸Ğ½ Ğ°Ğ¹Ñ‹"],
					dayOfWeekShort: ["Ğ–ĞµĞº", "Ğ”Ò¯Ğ¹", "Ğ¨ĞµĞ¹", "Ğ¨Ğ°Ñ€", "Ğ‘ĞµĞ¹", "Ğ–ÑƒĞ¼", "Ğ˜ÑˆĞµ"],
					dayOfWeek: ["Ğ–ĞµĞºÑˆĞµĞ¼Ğ±", "Ğ”Ò¯Ğ¹ÑˆÓ©Ğ¼Ğ±", "Ğ¨ĞµĞ¹ÑˆĞµĞ¼Ğ±", "Ğ¨Ğ°Ñ€ÑˆĞµĞ¼Ğ±", "Ğ‘ĞµĞ¹ÑˆĞµĞ¼Ğ±Ğ¸", "Ğ–ÑƒĞ¼Ğ°", "Ğ˜ÑˆĞµĞ½Ğ±"]
				},
				rm: {
					months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
					dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
					dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
				},
				ka: {
					months: ["áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜", "áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜", "áƒ›áƒáƒ áƒ¢áƒ˜", "áƒáƒáƒ áƒ˜áƒšáƒ˜", "áƒ›áƒáƒ˜áƒ¡áƒ˜", "áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜", "áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜", "áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ", "áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜", "áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜", "áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜", "áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜"],
					dayOfWeekShort: ["áƒ™áƒ•", "áƒáƒ áƒ¨", "áƒ¡áƒáƒ›áƒ¨", "áƒáƒ—áƒ®", "áƒ®áƒ£áƒ—", "áƒáƒáƒ ", "áƒ¨áƒáƒ‘"],
					dayOfWeek: ["áƒ™áƒ•áƒ˜áƒ áƒ", "áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜", "áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜", "áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜", "áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜", "áƒáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜", "áƒ¨áƒáƒ‘áƒáƒ—áƒ˜"]
				}
			},
			ownerDocument: document,
			contentWindow: window,
			value: "",
			rtl: !1,
			format: "Y/m/d H:i",
			formatTime: "H:i",
			formatDate: "Y/m/d",
			startDate: !1,
			step: 60,
			monthChangeSpinner: !0,
			closeOnDateSelect: !1,
			closeOnTimeSelect: !0,
			closeOnWithoutClick: !0,
			closeOnInputClick: !0,
			openOnFocus: !0,
			timepicker: !0,
			datepicker: !0,
			weeks: !1,
			defaultTime: !1,
			defaultDate: !1,
			minDate: !1,
			maxDate: !1,
			minTime: !1,
			maxTime: !1,
			minDateTime: !1,
			maxDateTime: !1,
			allowTimes: [],
			opened: !1,
			initTime: !0,
			inline: !1,
			theme: "",
			touchMovedThreshold: 5,
			onSelectDate: function() {},
			onSelectTime: function() {},
			onChangeMonth: function() {},
			onGetWeekOfYear: function() {},
			onChangeYear: function() {},
			onChangeDateTime: function() {},
			onShow: function() {},
			onClose: function() {},
			onGenerate: function() {},
			withoutCopyright: !0,
			inverseButton: !1,
			hours12: !1,
			next: "xdsoft_next",
			prev: "xdsoft_prev",
			dayOfWeekStart: 0,
			parentID: "body",
			timeHeightInTimePicker: 25,
			timepickerScrollbar: !0,
			todayButton: !0,
			prevButton: !0,
			nextButton: !0,
			defaultSelect: !0,
			scrollMonth: !0,
			scrollTime: !0,
			scrollInput: !0,
			lazyInit: !1,
			mask: !1,
			validateOnBlur: !0,
			allowBlank: !0,
			yearStart: 1950,
			yearEnd: 2050,
			monthStart: 0,
			monthEnd: 11,
			style: "",
			id: "",
			fixed: !1,
			roundTime: "round",
			className: "",
			weekends: [],
			highlightedDates: [],
			highlightedPeriods: [],
			allowDates: [],
			allowDateRe: null,
			disabledDates: [],
			disabledWeekDays: [],
			yearOffset: 0,
			beforeShowDay: null,
			enterLikeTab: !0,
			showApplyButton: !1
		},
		r = null,
		n = null,
		o = "en",
		i = {
			meridiem: ["AM", "PM"]
		},
		s = function() {
			var t = a.i18n[o],
				s = {
					days: t.dayOfWeek,
					daysShort: t.dayOfWeekShort,
					months: t.months,
					monthsShort: e.map(t.months, function(e) {
						return e.substring(0, 3)
					})
				};
			"function" == typeof DateFormatter && (r = n = new DateFormatter({
				dateSettings: e.extend({}, i, s)
			}))
		},
		u = {
			moment: {
				default_options: {
					format: "YYYY/MM/DD HH:mm",
					formatDate: "YYYY/MM/DD",
					formatTime: "HH:mm"
				},
				formatter: {
					parseDate: function(e, t) {
						if(l(t)) return n.parseDate(e, t);
						var a = moment(e, t);
						return !!a.isValid() && a.toDate()
					},
					formatDate: function(e, t) {
						return l(t) ? n.formatDate(e, t) : moment(e).format(t)
					},
					formatMask: function(e) {
						return e.replace(/Y{4}/g, "9999").replace(/Y{2}/g, "99").replace(/M{2}/g, "19").replace(/D{2}/g, "39").replace(/H{2}/g, "29").replace(/m{2}/g, "59").replace(/s{2}/g, "59")
					}
				}
			}
		};
	e.datetimepicker = {
		setLocale: function(e) {
			var t = a.i18n[e] ? e : "en";
			o !== t && (o = t, s())
		},
		setDateFormatter: function(t) {
			if("string" == typeof t && u.hasOwnProperty(t)) {
				var n = u[t];
				e.extend(a, n.default_options), r = n.formatter
			} else r = t
		}
	};
	var d = {
			RFC_2822: "D, d M Y H:i:s O",
			ATOM: "Y-m-dTH:i:sP",
			ISO_8601: "Y-m-dTH:i:sO",
			RFC_822: "D, d M y H:i:s O",
			RFC_850: "l, d-M-y H:i:s T",
			RFC_1036: "D, d M y H:i:s O",
			RFC_1123: "D, d M Y H:i:s O",
			RSS: "D, d M Y H:i:s O",
			W3C: "Y-m-dTH:i:sP"
		},
		l = function(e) {
			return -1 !== Object.values(d).indexOf(e)
		};
	e.extend(e.datetimepicker, d), s(), window.getComputedStyle || (window.getComputedStyle = function(e) {
		return this.el = e, this.getPropertyValue = function(t) {
			var a = /(-([a-z]))/g;
			return "float" === t && (t = "styleFloat"), a.test(t) && (t = t.replace(a, function(e, t, a) {
				return a.toUpperCase()
			})), e.currentStyle[t] || null
		}, this
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
		var a, r;
		for(a = t || 0, r = this.length; a < r; a += 1)
			if(this[a] === e) return a;
		return -1
	}), Date.prototype.countDaysInMonth = function() {
		return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
	}, e.fn.xdsoftScroller = function(t, a) {
		return this.each(function() {
			function d(e) {
				var t, a = {
					x: 0,
					y: 0
				};
				return "touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || "touchcancel" === e.type ? (t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], a.x = t.clientX, a.y = t.clientY) : "mousedown" !== e.type && "mouseup" !== e.type && "mousemove" !== e.type && "mouseover" !== e.type && "mouseout" !== e.type && "mouseenter" !== e.type && "mouseleave" !== e.type || (a.x = e.clientX, a.y = e.clientY), a
			}
			var r, n, o, i, s, u = e(this),
				l = 100,
				f = !1,
				c = 0,
				m = 0,
				h = 0,
				g = !1,
				p = 0,
				D = function() {};
			"hide" !== a ? (e(this).hasClass("xdsoft_scroller_box") || (r = u.children().eq(0), n = u[0].clientHeight, o = r[0].offsetHeight, i = e('<div class="xdsoft_scrollbar"></div>'), s = e('<div class="xdsoft_scroller"></div>'), i.append(s), u.addClass("xdsoft_scroller_box").append(i), D = function(e) {
				var t = d(e).y - c + p;
				t < 0 && (t = 0), t + s[0].offsetHeight > h && (t = h - s[0].offsetHeight), u.trigger("scroll_element.xdsoft_scroller", [l ? t / l : 0])
			}, s.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function(r) {
				n || u.trigger("resize_scroll.xdsoft_scroller", [a]), c = d(r).y, p = parseInt(s.css("margin-top"), 10), h = i[0].offsetHeight, "mousedown" === r.type || "touchstart" === r.type ? (t.ownerDocument && e(t.ownerDocument.body).addClass("xdsoft_noselect"), e([t.ownerDocument.body, t.contentWindow]).on("touchend mouseup.xdsoft_scroller", function a() {
					e([t.ownerDocument.body, t.contentWindow]).off("touchend mouseup.xdsoft_scroller", a).off("mousemove.xdsoft_scroller", D).removeClass("xdsoft_noselect")
				}), e(t.ownerDocument.body).on("mousemove.xdsoft_scroller", D)) : (g = !0, r.stopPropagation(), r.preventDefault())
			}).on("touchmove", function(e) {
				g && (e.preventDefault(), D(e))
			}).on("touchend touchcancel", function() {
				g = !1, p = 0
			}), u.on("scroll_element.xdsoft_scroller", function(e, t) {
				n || u.trigger("resize_scroll.xdsoft_scroller", [t, !0]), t = 1 < t ? 1 : t < 0 || isNaN(t) ? 0 : t, s.css("margin-top", l * t), setTimeout(function() {
					r.css("marginTop", -parseInt((r[0].offsetHeight - n) * t, 10))
				}, 10)
			}).on("resize_scroll.xdsoft_scroller", function(e, t, a) {
				var d, f;
				n = u[0].clientHeight, o = r[0].offsetHeight, f = (d = n / o) * i[0].offsetHeight, 1 < d ? s.hide() : (s.show(), s.css("height", parseInt(10 < f ? f : 10, 10)), l = i[0].offsetHeight - s[0].offsetHeight, !0 !== a && u.trigger("scroll_element.xdsoft_scroller", [t || Math.abs(parseInt(r.css("marginTop"), 10)) / (o - n)]))
			}), u.on("mousewheel", function(e) {
				var t = Math.abs(parseInt(r.css("marginTop"), 10));
				return(t -= 20 * e.deltaY) < 0 && (t = 0), u.trigger("scroll_element.xdsoft_scroller", [t / (o - n)]), e.stopPropagation(), !1
			}), u.on("touchstart", function(e) {
				f = d(e), m = Math.abs(parseInt(r.css("marginTop"), 10))
			}), u.on("touchmove", function(e) {
				if(f) {
					e.preventDefault();
					var t = d(e);
					u.trigger("scroll_element.xdsoft_scroller", [(m - (t.y - f.y)) / (o - n)])
				}
			}), u.on("touchend touchcancel", function() {
				f = !1, m = 0
			})), u.trigger("resize_scroll.xdsoft_scroller", [a])) : u.find(".xdsoft_scrollbar").hide()
		})
	}, e.fn.datetimepicker = function(n, i) {
		var s, u, d = this,
			h = 17,
			p = 13,
			D = 27,
			y = 37,
			b = 38,
			k = 39,
			x = 40,
			T = 9,
			S = 116,
			M = 65,
			w = 67,
			O = 86,
			W = 90,
			_ = 89,
			F = !1,
			C = e.isPlainObject(n) || !n ? e.extend(!0, {}, a, n) : e.extend(!0, {}, a),
			P = 0;
		return s = function(a) {
			function i() {
				var e, t = !1;
				return C.startDate ? t = A.strToDate(C.startDate) : (t = C.value || (a && a.val && a.val() ? a.val() : "")) ? (t = A.strToDateTime(t), C.yearOffset && (t = new Date(t.getFullYear() - C.yearOffset, t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()))) : C.defaultDate && (t = A.strToDateTime(C.defaultDate), C.defaultTime && (e = A.strtotime(C.defaultTime), t.setHours(e.getHours()), t.setMinutes(e.getMinutes()))), t && A.isValidDate(t) ? j.data("changed", !0) : t = "", t || 0
			}

			function s(t) {
				function n(e, t) {
					var a = e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
					return new RegExp(a).test(t)
				}

				function o(e, a) {
					if(!(e = "string" == typeof e || e instanceof String ? t.ownerDocument.getElementById(e) : e)) return !1;
					if(e.createTextRange) {
						var r = e.createTextRange();
						return r.collapse(!0), r.moveEnd("character", a), r.moveStart("character", a), r.select(), !0
					}
					return !!e.setSelectionRange && (e.setSelectionRange(a, a), !0)
				}
				t.mask && a.off("keydown.xdsoft"), !0 === t.mask && (r.formatMask ? t.mask = r.formatMask(t.format) : t.mask = t.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), "string" === e.type(t.mask) && (n(t.mask, a.val()) || (a.val(t.mask.replace(/[0-9]/g, "_")), o(a[0], 0)), a.on("paste.xdsoft", function(r) {
					var i = (r.clipboardData || r.originalEvent.clipboardData || window.clipboardData).getData("text"),
						s = this.value,
						u = this.selectionStart;
					return s = s.substr(0, u) + i + s.substr(u + i.length), u += i.length, n(t.mask, s) ? (this.value = s, o(this, u)) : "" === e.trim(s) ? this.value = t.mask.replace(/[0-9]/g, "_") : a.trigger("error_input.xdsoft"), r.preventDefault(), !1
				}), a.on("keydown.xdsoft", function(r) {
					var i, s = this.value,
						u = r.which,
						d = this.selectionStart,
						C = this.selectionEnd,
						P = d !== C;
					if(48 <= u && u <= 57 || 96 <= u && u <= 105 || 8 === u || 46 === u) {
						for(i = 8 === u || 46 === u ? "_" : String.fromCharCode(96 <= u && u <= 105 ? u - 48 : u), 8 === u && d && !P && --d;;) {
							var Y = t.mask.substr(d, 1),
								A = d < t.mask.length,
								H = 0 < d;
							if(!(/[^0-9_]/.test(Y) && A && H)) break;
							d += 8 !== u || P ? 1 : -1
						}
						if(P) {
							var j = C - d,
								J = t.mask.replace(/[0-9]/g, "_"),
								z = J.substr(d, j).substr(1);
							s = s.substr(0, d) + (i + z) + s.substr(d + j)
						} else s = s.substr(0, d) + i + s.substr(d + 1);
						if("" === e.trim(s)) s = J;
						else if(d === t.mask.length) return r.preventDefault(), !1;
						for(d += 8 === u ? 0 : 1;
							/[^0-9_]/.test(t.mask.substr(d, 1)) && d < t.mask.length && 0 < d;) d += 8 === u ? 0 : 1;
						n(t.mask, s) ? (this.value = s, o(this, d)) : "" === e.trim(s) ? this.value = t.mask.replace(/[0-9]/g, "_") : a.trigger("error_input.xdsoft")
					} else if(-1 !== [M, w, O, W, _].indexOf(u) && F || -1 !== [D, b, x, y, k, S, h, T, p].indexOf(u)) return !0;
					return r.preventDefault(), !1
				}))
			}
			var u, d, P, Y, A, H, j = e('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
				J = e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
				z = e('<div class="xdsoft_datepicker active"></div>'),
				I = e('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),
				N = e('<div class="xdsoft_calendar"></div>'),
				L = e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
				E = L.find(".xdsoft_time_box").eq(0),
				R = e('<div class="xdsoft_time_variant"></div>'),
				V = e('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
				B = e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
				G = e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
				U = !1,
				q = 0;
			C.id && j.attr("id", C.id), C.style && j.attr("style", C.style), C.weeks && j.addClass("xdsoft_showweeks"), C.rtl && j.addClass("xdsoft_rtl"), j.addClass("xdsoft_" + C.theme), j.addClass(C.className), I.find(".xdsoft_month span").after(B), I.find(".xdsoft_year span").after(G), I.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft", function(t) {
				var a, r, n = e(this).find(".xdsoft_select").eq(0),
					o = 0,
					i = 0,
					s = n.is(":visible");
				for(I.find(".xdsoft_select").hide(), A.currentTime && (o = A.currentTime[e(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()), n[s ? "hide" : "show"](), a = n.find("div.xdsoft_option"), r = 0; r < a.length && a.eq(r).data("value") !== o; r += 1) i += a[0].offsetHeight;
				return n.xdsoftScroller(C, i / (n.children()[0].offsetHeight - n[0].clientHeight)), t.stopPropagation(), !1
			});

			function X(e) {
				var t = e.originalEvent,
					a = t.touches ? t.touches[0] : t;
				this.touchStartPosition = this.touchStartPosition || a;
				var r = Math.abs(this.touchStartPosition.clientX - a.clientX),
					n = Math.abs(this.touchStartPosition.clientY - a.clientY);
				Math.sqrt(r * r + n * n) > C.touchMovedThreshold && (this.touchMoved = !0)
			}
			I.find(".xdsoft_select").xdsoftScroller(C).on("touchstart mousedown.xdsoft", function(e) {
				var t = e.originalEvent;
				this.touchMoved = !1, this.touchStartPosition = t.touches ? t.touches[0] : t, e.stopPropagation(), e.preventDefault()
			}).on("touchmove", ".xdsoft_option", X).on("touchend mousedown.xdsoft", ".xdsoft_option", function() {
				if(!this.touchMoved) {
					void 0 !== A.currentTime && null !== A.currentTime || (A.currentTime = A.now());
					var t = A.currentTime.getFullYear();
					A && A.currentTime && A.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](e(this).data("value")), e(this).parent().parent().hide(), j.trigger("xchange.xdsoft"), C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(j, A.currentTime, j.data("input")), t !== A.currentTime.getFullYear() && e.isFunction(C.onChangeYear) && C.onChangeYear.call(j, A.currentTime, j.data("input"))
				}
			}), j.getValue = function() {
				return A.getCurrentTime()
			}, j.setOptions = function(n) {
				var o = {};
				C = e.extend(!0, {}, C, n), n.allowTimes && e.isArray(n.allowTimes) && n.allowTimes.length && (C.allowTimes = e.extend(!0, [], n.allowTimes)), n.weekends && e.isArray(n.weekends) && n.weekends.length && (C.weekends = e.extend(!0, [], n.weekends)), n.allowDates && e.isArray(n.allowDates) && n.allowDates.length && (C.allowDates = e.extend(!0, [], n.allowDates)), n.allowDateRe && "[object String]" === Object.prototype.toString.call(n.allowDateRe) && (C.allowDateRe = new RegExp(n.allowDateRe)), n.highlightedDates && e.isArray(n.highlightedDates) && n.highlightedDates.length && (e.each(n.highlightedDates, function(a, n) {
					var i, s = e.map(n.split(","), e.trim),
						u = new t(r.parseDate(s[0], C.formatDate), s[1], s[2]),
						d = r.formatDate(u.date, C.formatDate);
					void 0 !== o[d] ? (i = o[d].desc) && i.length && u.desc && u.desc.length && (o[d].desc = i + "\n" + u.desc) : o[d] = u
				}), C.highlightedDates = e.extend(!0, [], o)), n.highlightedPeriods && e.isArray(n.highlightedPeriods) && n.highlightedPeriods.length && (o = e.extend(!0, [], C.highlightedDates), e.each(n.highlightedPeriods, function(a, n) {
					var i, s, u, d, l, f, c;
					if(e.isArray(n)) i = n[0], s = n[1], u = n[2], c = n[3];
					else {
						var m = e.map(n.split(","), e.trim);
						i = r.parseDate(m[0], C.formatDate), s = r.parseDate(m[1], C.formatDate), u = m[2], c = m[3]
					}
					for(; i <= s;) d = new t(i, u, c), l = r.formatDate(i, C.formatDate), i.setDate(i.getDate() + 1), void 0 !== o[l] ? (f = o[l].desc) && f.length && d.desc && d.desc.length && (o[l].desc = f + "\n" + d.desc) : o[l] = d
				}), C.highlightedDates = e.extend(!0, [], o)), n.disabledDates && e.isArray(n.disabledDates) && n.disabledDates.length && (C.disabledDates = e.extend(!0, [], n.disabledDates)), n.disabledWeekDays && e.isArray(n.disabledWeekDays) && n.disabledWeekDays.length && (C.disabledWeekDays = e.extend(!0, [], n.disabledWeekDays)), !C.open && !C.opened || C.inline || a.trigger("open.xdsoft"), C.inline && (U = !0, j.addClass("xdsoft_inline"), a.after(j).hide()), C.inverseButton && (C.next = "xdsoft_prev", C.prev = "xdsoft_next"), C.datepicker ? z.addClass("active") : z.removeClass("active"), C.timepicker ? L.addClass("active") : L.removeClass("active"), C.value && (A.setCurrentTime(C.value), a && a.val && a.val(A.str)), isNaN(C.dayOfWeekStart) ? C.dayOfWeekStart = 0 : C.dayOfWeekStart = parseInt(C.dayOfWeekStart, 10) % 7, C.timepickerScrollbar || E.xdsoftScroller(C, "hide"), C.minDate && /^[\+\-](.*)$/.test(C.minDate) && (C.minDate = r.formatDate(A.strToDateTime(C.minDate), C.formatDate)), C.maxDate && /^[\+\-](.*)$/.test(C.maxDate) && (C.maxDate = r.formatDate(A.strToDateTime(C.maxDate), C.formatDate)), C.minDateTime && /^\+(.*)$/.test(C.minDateTime) && (C.minDateTime = A.strToDateTime(C.minDateTime).dateFormat(C.formatDate)), C.maxDateTime && /^\+(.*)$/.test(C.maxDateTime) && (C.maxDateTime = A.strToDateTime(C.maxDateTime).dateFormat(C.formatDate)), V.toggle(C.showApplyButton), I.find(".xdsoft_today_button").css("visibility", C.todayButton ? "visible" : "hidden"), I.find("." + C.prev).css("visibility", C.prevButton ? "visible" : "hidden"), I.find("." + C.next).css("visibility", C.nextButton ? "visible" : "hidden"), s(C), C.validateOnBlur && a.off("blur.xdsoft").on("blur.xdsoft", function() {
					if(C.allowBlank && (!e.trim(e(this).val()).length || "string" == typeof C.mask && e.trim(e(this).val()) === C.mask.replace(/[0-9]/g, "_"))) e(this).val(null), j.data("xdsoft_datetime").empty();
					else {
						var t = r.parseDate(e(this).val(), C.format);
						if(t) e(this).val(r.formatDate(t, C.format));
						else {
							var a = +[e(this).val()[0], e(this).val()[1]].join(""),
								n = +[e(this).val()[2], e(this).val()[3]].join("");
							!C.datepicker && C.timepicker && 0 <= a && a < 24 && 0 <= n && n < 60 ? e(this).val([a, n].map(function(e) {
								return 9 < e ? e : "0" + e
							}).join(":")) : e(this).val(r.formatDate(A.now(), C.format))
						}
						j.data("xdsoft_datetime").setCurrentTime(e(this).val())
					}
					j.trigger("changedatetime.xdsoft"), j.trigger("close.xdsoft")
				}), C.dayOfWeekStartPrev = 0 === C.dayOfWeekStart ? 6 : C.dayOfWeekStart - 1, j.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
			}, j.data("options", C).on("touchstart mousedown.xdsoft", function(e) {
				return e.stopPropagation(), e.preventDefault(), G.hide(), B.hide(), !1
			}), E.append(R), E.xdsoftScroller(C), j.on("afterOpen.xdsoft", function() {
				E.xdsoftScroller(C)
			}), j.append(z).append(L), !0 !== C.withoutCopyright && j.append(J), z.append(I).append(N).append(V), e(C.parentID).append(j), A = new function() {
				var t = this;
				t.now = function(e) {
					var a, r, n = new Date;
					return !e && C.defaultDate && (a = t.strToDateTime(C.defaultDate), n.setFullYear(a.getFullYear()), n.setMonth(a.getMonth()), n.setDate(a.getDate())), n.setFullYear(n.getFullYear()), !e && C.defaultTime && (r = t.strtotime(C.defaultTime), n.setHours(r.getHours()), n.setMinutes(r.getMinutes()), n.setSeconds(r.getSeconds()), n.setMilliseconds(r.getMilliseconds())), n
				}, t.isValidDate = function(e) {
					return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
				}, t.setCurrentTime = function(e, a) {
					"string" == typeof e ? t.currentTime = t.strToDateTime(e) : t.isValidDate(e) ? t.currentTime = e : e || a || !C.allowBlank || C.inline ? t.currentTime = t.now() : t.currentTime = null, j.trigger("xchange.xdsoft")
				}, t.empty = function() {
					t.currentTime = null
				}, t.getCurrentTime = function() {
					return t.currentTime
				}, t.nextMonth = function() {
					void 0 !== t.currentTime && null !== t.currentTime || (t.currentTime = t.now());
					var a, r = t.currentTime.getMonth() + 1;
					return 12 === r && (t.currentTime.setFullYear(t.currentTime.getFullYear() + 1), r = 0), a = t.currentTime.getFullYear(), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), r + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(r), C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(j, A.currentTime, j.data("input")), a !== t.currentTime.getFullYear() && e.isFunction(C.onChangeYear) && C.onChangeYear.call(j, A.currentTime, j.data("input")), j.trigger("xchange.xdsoft"), r
				}, t.prevMonth = function() {
					void 0 !== t.currentTime && null !== t.currentTime || (t.currentTime = t.now());
					var a = t.currentTime.getMonth() - 1;
					return -1 === a && (t.currentTime.setFullYear(t.currentTime.getFullYear() - 1), a = 11), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), a + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(a), C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(j, A.currentTime, j.data("input")), j.trigger("xchange.xdsoft"), a
				}, t.getWeekOfYear = function(t) {
					if(C.onGetWeekOfYear && e.isFunction(C.onGetWeekOfYear)) {
						var a = C.onGetWeekOfYear.call(j, t);
						if(void 0 !== a) return a
					}
					var r = new Date(t.getFullYear(), 0, 1);
					return 4 !== r.getDay() && r.setMonth(0, 1 + (4 - r.getDay() + 7) % 7), Math.ceil(((t - r) / 864e5 + r.getDay() + 1) / 7)
				}, t.strToDateTime = function(e) {
					var a, n, o = [];
					return e && e instanceof Date && t.isValidDate(e) ? e : ((o = /^([+-]{1})(.*)$/.exec(e)) && (o[2] = r.parseDate(o[2], C.formatDate)), n = o && o[2] ? (a = o[2].getTime() - 6e4 * o[2].getTimezoneOffset(), new Date(t.now(!0).getTime() + parseInt(o[1] + "1", 10) * a)) : e ? r.parseDate(e, C.format) : t.now(), t.isValidDate(n) || (n = t.now()), n)
				}, t.strToDate = function(e) {
					if(e && e instanceof Date && t.isValidDate(e)) return e;
					var a = e ? r.parseDate(e, C.formatDate) : t.now(!0);
					return t.isValidDate(a) || (a = t.now(!0)), a
				}, t.strtotime = function(e) {
					if(e && e instanceof Date && t.isValidDate(e)) return e;
					var a = e ? r.parseDate(e, C.formatTime) : t.now(!0);
					return t.isValidDate(a) || (a = t.now(!0)), a
				}, t.str = function() {
					var e = C.format;
					return C.yearOffset && (e = (e = e.replace("Y", t.currentTime.getFullYear() + C.yearOffset)).replace("y", String(t.currentTime.getFullYear() + C.yearOffset).substring(2, 4))), r.formatDate(t.currentTime, e)
				}, t.currentTime = this.now()
			}, V.on("touchend click", function(e) {
				e.preventDefault(), j.data("changed", !0), A.setCurrentTime(i()), a.val(A.str()), j.trigger("close.xdsoft")
			}), I.find(".xdsoft_today_button").on("touchend mousedown.xdsoft", function() {
				j.data("changed", !0), A.setCurrentTime(0, !0), j.trigger("afterOpen.xdsoft")
			}).on("dblclick.xdsoft", function() {
				var e, t, r = A.getCurrentTime();
				r = new Date(r.getFullYear(), r.getMonth(), r.getDate()), e = A.strToDate(C.minDate), r < (e = new Date(e.getFullYear(), e.getMonth(), e.getDate())) || (t = A.strToDate(C.maxDate), r > (t = new Date(t.getFullYear(), t.getMonth(), t.getDate())) || (a.val(A.str()), a.trigger("change"), j.trigger("close.xdsoft")))
			}), I.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
				var t = e(this),
					a = 0,
					r = !1;
				! function e(n) {
					t.hasClass(C.next) ? A.nextMonth() : t.hasClass(C.prev) && A.prevMonth(), C.monthChangeSpinner && (r || (a = setTimeout(e, n || 100)))
				}(500), e([C.ownerDocument.body, C.contentWindow]).on("touchend mouseup.xdsoft", function t() {
					clearTimeout(a), r = !0, e([C.ownerDocument.body, C.contentWindow]).off("touchend mouseup.xdsoft", t)
				})
			}), L.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
				var t = e(this),
					a = 0,
					r = !1,
					n = 110;
				! function e(o) {
					var i = E[0].clientHeight,
						s = R[0].offsetHeight,
						u = Math.abs(parseInt(R.css("marginTop"), 10));
					t.hasClass(C.next) && s - i - C.timeHeightInTimePicker >= u ? R.css("marginTop", "-" + (u + C.timeHeightInTimePicker) + "px") : t.hasClass(C.prev) && 0 <= u - C.timeHeightInTimePicker && R.css("marginTop", "-" + (u - C.timeHeightInTimePicker) + "px"), E.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(R[0].style.marginTop, 10) / (s - i))]), n = 10 < n ? 10 : n - 10, r || (a = setTimeout(e, o || n))
				}(500), e([C.ownerDocument.body, C.contentWindow]).on("touchend mouseup.xdsoft", function t() {
					clearTimeout(a), r = !0, e([C.ownerDocument.body, C.contentWindow]).off("touchend mouseup.xdsoft", t)
				})
			}), u = 0, j.on("xchange.xdsoft", function(t) {
				clearTimeout(u), u = setTimeout(function() {
					void 0 !== A.currentTime && null !== A.currentTime || (A.currentTime = A.now());
					for(var t, i, s, u, d, l, f, c, m, h, g = "", p = new Date(A.currentTime.getFullYear(), A.currentTime.getMonth(), 1, 12, 0, 0), D = 0, v = A.now(), y = !1, b = !1, k = !1, x = !1, T = [], S = !0, M = ""; p.getDay() !== C.dayOfWeekStart;) p.setDate(p.getDate() - 1);
					for(g += "<table><thead><tr>", C.weeks && (g += "<th></th>"), t = 0; t < 7; t += 1) g += "<th>" + C.i18n[o].dayOfWeekShort[(t + C.dayOfWeekStart) % 7] + "</th>";
					var w;
					for(g += "</tr></thead>", g += "<tbody>", !1 !== C.maxDate && (y = A.strToDate(C.maxDate), y = new Date(y.getFullYear(), y.getMonth(), y.getDate(), 23, 59, 59, 999)), !1 !== C.minDate && (b = A.strToDate(C.minDate), b = new Date(b.getFullYear(), b.getMonth(), b.getDate())), !1 !== C.minDateTime && (k = A.strToDate(C.minDateTime), k = new Date(k.getFullYear(), k.getMonth(), k.getDate(), k.getHours(), k.getMinutes(), k.getSeconds())), !1 !== C.maxDateTime && (x = A.strToDate(C.maxDateTime), x = new Date(x.getFullYear(), x.getMonth(), x.getDate(), x.getHours(), x.getMinutes(), x.getSeconds())), !1 !== x && (w = 31 * (12 * x.getFullYear() + x.getMonth()) + x.getDate()); D < A.currentTime.countDaysInMonth() || p.getDay() !== C.dayOfWeekStart || A.currentTime.getMonth() === p.getMonth();) {
						T = [], D += 1, s = p.getDay(), u = p.getDate(), d = p.getFullYear(), l = p.getMonth(), f = A.getWeekOfYear(p), h = "", T.push("xdsoft_date"), c = C.beforeShowDay && e.isFunction(C.beforeShowDay.call) ? C.beforeShowDay.call(j, p) : null, C.allowDateRe && "[object RegExp]" === Object.prototype.toString.call(C.allowDateRe) && (C.allowDateRe.test(r.formatDate(p, C.formatDate)) || T.push("xdsoft_disabled")), C.allowDates && 0 < C.allowDates.length && -1 === C.allowDates.indexOf(r.formatDate(p, C.formatDate)) && T.push("xdsoft_disabled");
						var O = 31 * (12 * p.getFullYear() + p.getMonth()) + p.getDate();
						(!1 !== y && y < p || !1 !== k && p < k || !1 !== b && p < b || !1 !== x && w < O || c && !1 === c[0]) && T.push("xdsoft_disabled"), -1 !== C.disabledDates.indexOf(r.formatDate(p, C.formatDate)) && T.push("xdsoft_disabled"), -1 !== C.disabledWeekDays.indexOf(s) && T.push("xdsoft_disabled"), a.is("[disabled]") && T.push("xdsoft_disabled"), c && "" !== c[1] && T.push(c[1]), A.currentTime.getMonth() !== l && T.push("xdsoft_other_month"), (C.defaultSelect || j.data("changed")) && r.formatDate(A.currentTime, C.formatDate) === r.formatDate(p, C.formatDate) && T.push("xdsoft_current"), r.formatDate(v, C.formatDate) === r.formatDate(p, C.formatDate) && T.push("xdsoft_today"), 0 !== p.getDay() && 6 !== p.getDay() && -1 === C.weekends.indexOf(r.formatDate(p, C.formatDate)) || T.push("xdsoft_weekend"), void 0 !== C.highlightedDates[r.formatDate(p, C.formatDate)] && (i = C.highlightedDates[r.formatDate(p, C.formatDate)], T.push(void 0 === i.style ? "xdsoft_highlighted_default" : i.style), h = void 0 === i.desc ? "" : i.desc), C.beforeShowDay && e.isFunction(C.beforeShowDay) && T.push(C.beforeShowDay(p)), S && (g += "<tr>", S = !1, C.weeks && (g += "<th>" + f + "</th>")), g += '<td data-date="' + u + '" data-month="' + l + '" data-year="' + d + '" class="xdsoft_date xdsoft_day_of_week' + p.getDay() + " " + T.join(" ") + '" title="' + h + '"><div>' + u + "</div></td>", p.getDay() === C.dayOfWeekStartPrev && (g += "</tr>", S = !0), p.setDate(u + 1)
					}
					g += "</tbody></table>", N.html(g), I.find(".xdsoft_label span").eq(0).text(C.i18n[o].months[A.currentTime.getMonth()]), I.find(".xdsoft_label span").eq(1).text(A.currentTime.getFullYear() + C.yearOffset), l = M = "";
					var W = 0;
					!1 !== C.minTime && (F = A.strtotime(C.minTime), W = 60 * F.getHours() + F.getMinutes());
					var _ = 1440;
					if(!1 !== C.maxTime && (F = A.strtotime(C.maxTime), _ = 60 * F.getHours() + F.getMinutes()), !1 !== C.minDateTime && (F = A.strToDateTime(C.minDateTime), r.formatDate(A.currentTime, C.formatDate) === r.formatDate(F, C.formatDate) && (l = 60 * F.getHours() + F.getMinutes()) > W && (W = l)), !1 !== C.maxDateTime) {
						var F = A.strToDateTime(C.maxDateTime);
						r.formatDate(A.currentTime, C.formatDate) === r.formatDate(F, C.formatDate) && (l = 60 * F.getHours() + F.getMinutes()) < _ && (_ = l)
					}
					if(m = function(t, n) {
							var o, i = A.now(),
								s = C.allowTimes && e.isArray(C.allowTimes) && C.allowTimes.length;
							i.setHours(t), t = parseInt(i.getHours(), 10), i.setMinutes(n), n = parseInt(i.getMinutes(), 10), T = [];
							var u = 60 * t + n;
							(a.is("[disabled]") || _ <= u || u < W) && T.push("xdsoft_disabled"), (o = new Date(A.currentTime)).setHours(parseInt(A.currentTime.getHours(), 10)), s || o.setMinutes(Math[C.roundTime](A.currentTime.getMinutes() / C.step) * C.step), (C.initTime || C.defaultSelect || j.data("changed")) && o.getHours() === parseInt(t, 10) && (!s && 59 < C.step || o.getMinutes() === parseInt(n, 10)) && (C.defaultSelect || j.data("changed") ? T.push("xdsoft_current") : C.initTime && T.push("xdsoft_init_time")), parseInt(v.getHours(), 10) === parseInt(t, 10) && parseInt(v.getMinutes(), 10) === parseInt(n, 10) && T.push("xdsoft_today"), M += '<div class="xdsoft_time ' + T.join(" ") + '" data-hour="' + t + '" data-minute="' + n + '">' + r.formatDate(i, C.formatTime) + "</div>"
						}, C.allowTimes && e.isArray(C.allowTimes) && C.allowTimes.length)
						for(D = 0; D < C.allowTimes.length; D += 1) m(A.strtotime(C.allowTimes[D]).getHours(), l = A.strtotime(C.allowTimes[D]).getMinutes());
					else
						for(t = D = 0; D < (C.hours12 ? 12 : 24); D += 1)
							for(t = 0; t < 60; t += C.step) {
								var P = 60 * D + t;
								P < W || _ <= P || m((D < 10 ? "0" : "") + D, l = (t < 10 ? "0" : "") + t)
							}
					for(R.html(M), n = "", D = parseInt(C.yearStart, 10); D <= parseInt(C.yearEnd, 10); D += 1) n += '<div class="xdsoft_option ' + (A.currentTime.getFullYear() === D ? "xdsoft_current" : "") + '" data-value="' + D + '">' + (D + C.yearOffset) + "</div>";
					for(G.children().eq(0).html(n), D = parseInt(C.monthStart, 10), n = ""; D <= parseInt(C.monthEnd, 10); D += 1) n += '<div class="xdsoft_option ' + (A.currentTime.getMonth() === D ? "xdsoft_current" : "") + '" data-value="' + D + '">' + C.i18n[o].months[D] + "</div>";
					B.children().eq(0).html(n), e(j).trigger("generate.xdsoft")
				}, 10), t.stopPropagation()
			}).on("afterOpen.xdsoft", function() {
				var e, t, a, r;
				C.timepicker && (R.find(".xdsoft_current").length ? e = ".xdsoft_current" : R.find(".xdsoft_init_time").length && (e = ".xdsoft_init_time"), e ? (t = E[0].clientHeight, (a = R[0].offsetHeight) - t < (r = R.find(e).index() * C.timeHeightInTimePicker + 1) && (r = a - t), E.trigger("scroll_element.xdsoft_scroller", [parseInt(r, 10) / (a - t)])) : E.trigger("scroll_element.xdsoft_scroller", [0]))
			}), d = 0, N.on("touchend click.xdsoft", "td", function(t) {
				t.stopPropagation(), d += 1;
				var r = e(this),
					n = A.currentTime;
				if(null != n || (A.currentTime = A.now(), n = A.currentTime), r.hasClass("xdsoft_disabled")) return !1;
				n.setDate(1), n.setFullYear(r.data("year")), n.setMonth(r.data("month")), n.setDate(r.data("date")), j.trigger("select.xdsoft", [n]), a.val(A.str()), C.onSelectDate && e.isFunction(C.onSelectDate) && C.onSelectDate.call(j, A.currentTime, j.data("input"), t), j.data("changed", !0), j.trigger("xchange.xdsoft"), j.trigger("changedatetime.xdsoft"), (1 < d || !0 === C.closeOnDateSelect || !1 === C.closeOnDateSelect && !C.timepicker) && !C.inline && j.trigger("close.xdsoft"), setTimeout(function() {
					d = 0
				}, 200)
			}), R.on("touchstart", "div", function(e) {
				this.touchMoved = !1
			}).on("touchmove", "div", X).on("touchend click.xdsoft", "div", function(t) {
				if(!this.touchMoved) {
					t.stopPropagation();
					var a = e(this),
						r = A.currentTime;
					if(null != r || (A.currentTime = A.now(), r = A.currentTime), a.hasClass("xdsoft_disabled")) return !1;
					r.setHours(a.data("hour")), r.setMinutes(a.data("minute")), j.trigger("select.xdsoft", [r]), j.data("input").val(A.str()), C.onSelectTime && e.isFunction(C.onSelectTime) && C.onSelectTime.call(j, A.currentTime, j.data("input"), t), j.data("changed", !0), j.trigger("xchange.xdsoft"), j.trigger("changedatetime.xdsoft"), !0 !== C.inline && !0 === C.closeOnTimeSelect && j.trigger("close.xdsoft")
				}
			}), z.on("mousewheel.xdsoft", function(e) {
				return !C.scrollMonth || (e.deltaY < 0 ? A.nextMonth() : A.prevMonth(), !1)
			}), a.on("mousewheel.xdsoft", function(e) {
				return !C.scrollInput || (!C.datepicker && C.timepicker ? (0 <= (P = R.find(".xdsoft_current").length ? R.find(".xdsoft_current").eq(0).index() : 0) + e.deltaY && P + e.deltaY < R.children().length && (P += e.deltaY), R.children().eq(P).length && R.children().eq(P).trigger("mousedown"), !1) : C.datepicker && !C.timepicker ? (z.trigger(e, [e.deltaY, e.deltaX, e.deltaY]), a.val && a.val(A.str()), j.trigger("changedatetime.xdsoft"), !1) : void 0)
			}), j.on("changedatetime.xdsoft", function(t) {
				if(C.onChangeDateTime && e.isFunction(C.onChangeDateTime)) {
					var a = j.data("input");
					C.onChangeDateTime.call(j, A.currentTime, a, t), delete C.value, a.trigger("change")
				}
			}).on("generate.xdsoft", function() {
				C.onGenerate && e.isFunction(C.onGenerate) && C.onGenerate.call(j, A.currentTime, j.data("input")), U && (j.trigger("afterOpen.xdsoft"), U = !1)
			}).on("click.xdsoft", function(e) {
				e.stopPropagation()
			}), P = 0, H = function(e, t) {
				do {
					if(!(e = e.parentNode) || !1 === t(e)) break
				} while ("HTML" !== e.nodeName)
			}, Y = function() {
				var t, a, r, n, o, i, s, u, d, l, f, c, m;
				if(t = (u = j.data("input")).offset(), a = u[0], l = "top", r = t.top + a.offsetHeight - 1, n = t.left, o = "absolute", d = e(C.contentWindow).width(), c = e(C.contentWindow).height(), m = e(C.contentWindow).scrollTop(), C.ownerDocument.documentElement.clientWidth - t.left < z.parent().outerWidth(!0)) {
					var h = z.parent().outerWidth(!0) - a.offsetWidth;
					n -= h
				}
				"rtl" === u.parent().css("direction") && (n -= j.outerWidth() - u.outerWidth()), C.fixed ? (r -= m, n -= e(C.contentWindow).scrollLeft(), o = "fixed") : (s = !1, H(a, function(e) {
					return null !== e && ("fixed" === C.contentWindow.getComputedStyle(e).getPropertyValue("position") ? !(s = !0) : void 0)
				}), s ? (o = "fixed", r + j.outerHeight() > c + m ? (l = "bottom", r = c + m - t.top) : r -= m) : r + j[0].offsetHeight > c + m && (r = t.top - j[0].offsetHeight + 1), r < 0 && (r = 0), n + a.offsetWidth > d && (n = d - a.offsetWidth)), i = j[0], H(i, function(e) {
					if("relative" === C.contentWindow.getComputedStyle(e).getPropertyValue("position") && d >= e.offsetWidth) return n -= (d - e.offsetWidth) / 2, !1
				}), (f = {
					position: o,
					left: n,
					top: "",
					bottom: ""
				})[l] = r, j.css(f)
			}, j.on("open.xdsoft", function(t) {
				var a = !0;
				C.onShow && e.isFunction(C.onShow) && (a = C.onShow.call(j, A.currentTime, j.data("input"), t)), !1 !== a && (j.show(), Y(), e(C.contentWindow).off("resize.xdsoft", Y).on("resize.xdsoft", Y), C.closeOnWithoutClick && e([C.ownerDocument.body, C.contentWindow]).on("touchstart mousedown.xdsoft", function t() {
					j.trigger("close.xdsoft"), e([C.ownerDocument.body, C.contentWindow]).off("touchstart mousedown.xdsoft", t)
				}))
			}).on("close.xdsoft", function(t) {
				var a = !0;
				I.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(), C.onClose && e.isFunction(C.onClose) && (a = C.onClose.call(j, A.currentTime, j.data("input"), t)), !1 === a || C.opened || C.inline || j.hide(), t.stopPropagation()
			}).on("toggle.xdsoft", function() {
				j.is(":visible") ? j.trigger("close.xdsoft") : j.trigger("open.xdsoft")
			}).data("input", a), q = 0, j.data("xdsoft_datetime", A), j.setOptions(C), A.setCurrentTime(i()), a.data("xdsoft_datetimepicker", j).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function() {
				a.is(":disabled") || a.data("xdsoft_datetimepicker").is(":visible") && C.closeOnInputClick || C.openOnFocus && (clearTimeout(q), q = setTimeout(function() {
					a.is(":disabled") || (U = !0, A.setCurrentTime(i(), !0), C.mask && s(C), j.trigger("open.xdsoft"))
				}, 100))
			}).on("keydown.xdsoft", function(t) {
				var a, r = t.which;
				return -1 !== [p].indexOf(r) && C.enterLikeTab ? (a = e("input:visible,textarea:visible,button:visible,a:visible"), j.trigger("close.xdsoft"), a.eq(a.index(this) + 1).focus(), !1) : -1 !== [T].indexOf(r) ? (j.trigger("close.xdsoft"), !0) : void 0
			}).on("blur.xdsoft", function() {
				j.trigger("close.xdsoft")
			})
		}, u = function(t) {
			var a = t.data("xdsoft_datetimepicker");
			a && (a.data("xdsoft_datetime", null), a.remove(), t.data("xdsoft_datetimepicker", null).off(".xdsoft"), e(C.contentWindow).off("resize.xdsoft"), e([C.contentWindow, C.ownerDocument.body]).off("mousedown.xdsoft touchstart"), t.unmousewheel && t.unmousewheel())
		}, e(C.ownerDocument).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function(e) {
			e.keyCode === h && (F = !0)
		}).on("keyup.xdsoftctrl", function(e) {
			e.keyCode === h && (F = !1)
		}), this.each(function() {
			var t = e(this).data("xdsoft_datetimepicker");
			if(t) {
				if("string" === e.type(n)) switch(n) {
					case "show":
						e(this).select().focus(), t.trigger("open.xdsoft");
						break;
					case "hide":
						t.trigger("close.xdsoft");
						break;
					case "toggle":
						t.trigger("toggle.xdsoft");
						break;
					case "destroy":
						u(e(this));
						break;
					case "reset":
						this.value = this.defaultValue, this.value && t.data("xdsoft_datetime").isValidDate(r.parseDate(this.value, C.format)) || t.data("changed", !1), t.data("xdsoft_datetime").setCurrentTime(this.value);
						break;
					case "validate":
						t.data("input").trigger("blur.xdsoft");
						break;
					default:
						t[n] && e.isFunction(t[n]) && (d = t[n](i))
				} else t.setOptions(n);
				return 0
			}
			"string" !== e.type(n) && (!C.lazyInit || C.open || C.inline ? s(e(this)) : function(e) {
				e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function t() {
					e.is(":disabled") || e.data("xdsoft_datetimepicker") || (clearTimeout(P), P = setTimeout(function() {
						e.data("xdsoft_datetimepicker") || s(e), e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", t).trigger("open.xdsoft")
					}, 100))
				})
			}(e(this)))
		}), d
	}, e.fn.datetimepicker.defaults = a
};
! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "jquery-mousewheel"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(datetimepickerFactory),
function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
	function t(t) {
		var i = t || window.event,
			s = u.call(arguments, 1),
			d = 0,
			f = 0,
			c = 0,
			m = 0,
			h = 0,
			g = 0;
		if((t = e.event.fix(i)).type = "mousewheel", "detail" in i && (c = -1 * i.detail), "wheelDelta" in i && (c = i.wheelDelta), "wheelDeltaY" in i && (c = i.wheelDeltaY), "wheelDeltaX" in i && (f = -1 * i.wheelDeltaX), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (f = -1 * c, c = 0), d = 0 === c ? f : c, "deltaY" in i && (d = c = -1 * i.deltaY), "deltaX" in i && (f = i.deltaX, 0 === c && (d = -1 * f)), 0 !== c || 0 !== f) {
			if(1 === i.deltaMode) {
				var p = e.data(this, "mousewheel-line-height");
				d *= p, c *= p, f *= p
			} else if(2 === i.deltaMode) {
				var D = e.data(this, "mousewheel-page-height");
				d *= D, c *= D, f *= D
			}
			if(m = Math.max(Math.abs(c), Math.abs(f)), (!o || m < o) && (r(i, o = m) && (o /= 40)), r(i, m) && (d /= 40, f /= 40, c /= 40), d = Math[1 <= d ? "floor" : "ceil"](d / o), f = Math[1 <= f ? "floor" : "ceil"](f / o), c = Math[1 <= c ? "floor" : "ceil"](c / o), l.settings.normalizeOffset && this.getBoundingClientRect) {
				var v = this.getBoundingClientRect();
				h = t.clientX - v.left, g = t.clientY - v.top
			}
			return t.deltaX = f, t.deltaY = c, t.deltaFactor = o, t.offsetX = h, t.offsetY = g, t.deltaMode = 0, s.unshift(t, d, f, c), n && clearTimeout(n), n = setTimeout(a, 200), (e.event.dispatch || e.event.handle).apply(this, s)
		}
	}

	function a() {
		o = null
	}

	function r(e, t) {
		return l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
	}
	var n, o, i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		s = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		u = Array.prototype.slice;
	if(e.event.fixHooks)
		for(var d = i.length; d;) e.event.fixHooks[i[--d]] = e.event.mouseHooks;
	var l = e.event.special.mousewheel = {
		version: "3.1.12",
		setup: function() {
			if(this.addEventListener)
				for(var a = s.length; a;) this.addEventListener(s[--a], t, !1);
			else this.onmousewheel = t;
			e.data(this, "mousewheel-line-height", l.getLineHeight(this)), e.data(this, "mousewheel-page-height", l.getPageHeight(this))
		},
		teardown: function() {
			if(this.removeEventListener)
				for(var a = s.length; a;) this.removeEventListener(s[--a], t, !1);
			else this.onmousewheel = null;
			e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function(t) {
			var a = e(t),
				r = a["offsetParent" in e.fn ? "offsetParent" : "parent"]();
			return r.length || (r = e("body")), parseInt(r.css("fontSize"), 10) || parseInt(a.css("fontSize"), 10) || 16
		},
		getPageHeight: function(t) {
			return e(t).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	e.fn.extend({
		mousewheel: function(e) {
			return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
		},
		unmousewheel: function(e) {
			return this.unbind("mousewheel", e)
		}
	})
});
var $jscomp = {
	scope: {},
	findInternal: function(a, l, d) {
		a instanceof String && (a = String(a));
		for(var p = a.length, h = 0; h < p; h++) {
			var b = a[h];
			if(l.call(d, b, h, a)) return {
				i: h,
				v: b
			}
		}
		return {
			i: -1,
			v: void 0
		}
	}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, l, d) {
		if(d.get || d.set) throw new TypeError("ES3 does not support getters and setters.");
		a != Array.prototype && a != Object.prototype && (a[l] = d.value)
	}, $jscomp.getGlobal = function(a) {
		return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
	}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(a, l, d, p) {
		if(l) {
			for(d = $jscomp.global, a = a.split("."), p = 0; p < a.length - 1; p++) {
				var h = a[p];
				h in d || (d[h] = {}), d = d[h]
			}(l = l(p = d[a = a[a.length - 1]])) != p && null != l && $jscomp.defineProperty(d, a, {
				configurable: !0,
				writable: !0,
				value: l
			})
		}
	}, $jscomp.polyfill("Array.prototype.find", function(a) {
		return a || function(a, d) {
			return $jscomp.findInternal(this, a, d).v
		}
	}, "es6-impl", "es3"),
	function(a, l, d) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(l || d)
	}(function(a) {
		function l(b, e, f) {
			var c = {
				invalid: [],
				getCaret: function() {
					try {
						var a, r = 0,
							g = b.get(0),
							e = document.selection,
							f = g.selectionStart;
						return e && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((a = e.createRange()).moveStart("character", -c.val().length), r = a.text.length) : !f && "0" !== f || (r = f), r
					} catch(C) {}
				},
				setCaret: function(a) {
					try {
						if(b.is(":focus")) {
							var c, g = b.get(0);
							g.setSelectionRange ? g.setSelectionRange(a, a) : ((c = g.createTextRange()).collapse(!0), c.moveEnd("character", a), c.moveStart("character", a), c.select())
						}
					} catch(B) {}
				},
				events: function() {
					b.on("keydown.mask", function(a) {
						b.data("mask-keycode", a.keyCode || a.which), b.data("mask-previus-value", b.val()), b.data("mask-previus-caret-pos", c.getCaret()), c.maskDigitPosMapOld = c.maskDigitPosMap
					}).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function() {
						setTimeout(function() {
							b.keydown().keyup()
						}, 100)
					}).on("change.mask", function() {
						b.data("changed", !0)
					}).on("blur.mask", function() {
						d === c.val() || b.data("changed") || b.trigger("change"), b.data("changed", !1)
					}).on("blur.mask", function() {
						d = c.val()
					}).on("focus.mask", function(b) {
						!0 === f.selectOnFocus && a(b.target).select()
					}).on("focusout.mask", function() {
						f.clearIfNotMatch && !h.test(c.val()) && c.val("")
					})
				},
				getRegexMask: function() {
					for(var b, c, f, n, a = [], d = 0; d < e.length; d++)(b = m.translation[e.charAt(d)]) ? (c = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""), f = b.optional, (b = b.recursive) ? (a.push(e.charAt(d)), n = {
						digit: e.charAt(d),
						pattern: c
					}) : a.push(f || b ? c + "?" : c)) : a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
					return a = a.join(""), n && (a = a.replace(new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"), "($1)?").replace(new RegExp(n.digit, "g"), n.pattern)), new RegExp(a)
				},
				destroyEvents: function() {
					b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
				},
				val: function(a) {
					var c = b.is("input") ? "val" : "text";
					return c = 0 < arguments.length ? (b[c]() !== a && b[c](a), b) : b[c]()
				},
				calculateCaretPosition: function() {
					var a = b.data("mask-previus-value") || "",
						e = c.getMasked(),
						g = c.getCaret();
					if(a !== e) {
						var k, f = b.data("mask-previus-caret-pos") || 0,
							d = (e = e.length, a.length),
							m = a = 0,
							h = 0,
							l = 0;
						for(k = g; k < e && c.maskDigitPosMap[k]; k++) m++;
						for(k = g - 1; 0 <= k && c.maskDigitPosMap[k]; k--) a++;
						for(k = g - 1; 0 <= k; k--) c.maskDigitPosMap[k] && h++;
						for(k = f - 1; 0 <= k; k--) c.maskDigitPosMapOld[k] && l++;
						d < g ? g = 10 * e : g <= f && f !== d ? c.maskDigitPosMapOld[g] || (g = (f = g) - (l - h) - a, c.maskDigitPosMap[g] && (g = f)) : f < g && (g = g + (h - l) + m)
					}
					return g
				},
				behaviour: function(f) {
					f = f || window.event, c.invalid = [];
					var e = b.data("mask-keycode");
					if(-1 === a.inArray(e, m.byPassKeys)) {
						e = c.getMasked();
						var g = c.getCaret();
						return setTimeout(function() {
							c.setCaret(c.calculateCaretPosition())
						}, a.jMaskGlobals.keyStrokeCompensation), c.val(e), c.setCaret(g), c.callbacks(f)
					}
				},
				getMasked: function(a, b) {
					var v, z, A, g = [],
						d = void 0 === b ? c.val() : b + "",
						n = 0,
						h = e.length,
						q = 0,
						l = d.length,
						k = 1,
						r = "push",
						p = -1,
						t = 0,
						y = [];
					for(z = f.reverse ? (r = "unshift", k = -1, v = 0, n = h - 1, q = l - 1, function() {
							return -1 < n && -1 < q
						}) : (v = h - 1, function() {
							return n < h && q < l
						}); z();) {
						var x = e.charAt(n),
							w = d.charAt(q),
							u = m.translation[x];
						u ? (w.match(u.pattern) ? (g[r](w), u.recursive && (-1 === p ? p = n : n === v && n !== p && (n = p - k), v === p && (n -= k)), n += k) : w === A ? (t--, A = void 0) : u.optional ? (n += k, q -= k) : u.fallback ? (g[r](u.fallback), n += k, q -= k) : c.invalid.push({
							p: q,
							v: w,
							e: u.pattern
						}), q += k) : (a || g[r](x), w === x ? (y.push(q), q += k) : (A = x, y.push(q + t), t++), n += k)
					}
					return d = e.charAt(v), h !== l + 1 || m.translation[d] || g.push(d), g = g.join(""), c.mapMaskdigitPositions(g, y, l), g
				},
				mapMaskdigitPositions: function(a, b, e) {
					for(a = f.reverse ? a.length - e : 0, c.maskDigitPosMap = {}, e = 0; e < b.length; e++) c.maskDigitPosMap[b[e] + a] = 1
				},
				callbacks: function(a) {
					function q(a, b, c) {
						"function" == typeof f[a] && b && f[a].apply(this, c)
					}
					var h = c.val(),
						g = h !== d,
						m = [h, a, b, f];
					q("onChange", !0 == g, m), q("onKeyPress", !0 == g, m), q("onComplete", h.length === e.length, m), q("onInvalid", 0 < c.invalid.length, [h, a, b, c.invalid, f])
				}
			};
			b = a(b);
			var h, m = this,
				d = c.val();
			e = "function" == typeof e ? e(c.val(), void 0, b, f) : e, m.mask = e, m.options = f, m.remove = function() {
				var a = c.getCaret();
				return m.options.placeholder && b.removeAttr("placeholder"), b.data("mask-maxlength") && b.removeAttr("maxlength"), c.destroyEvents(), c.val(m.getCleanVal()), c.setCaret(a), b
			}, m.getCleanVal = function() {
				return c.getMasked(!0)
			}, m.getMaskedVal = function(a) {
				return c.getMasked(!1, a)
			}, m.init = function(d) {
				if(d = d || !1, f = f || {}, m.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch, m.byPassKeys = a.jMaskGlobals.byPassKeys, m.translation = a.extend({}, a.jMaskGlobals.translation, f.translation), m = a.extend(!0, {}, m, f), h = c.getRegexMask(), d) c.events(), c.val(c.getMasked());
				else {
					f.placeholder && b.attr("placeholder", f.placeholder), b.data("mask") && b.attr("autocomplete", "off");
					for(var l = !(d = 0); d < e.length; d++) {
						var g = m.translation[e.charAt(d)];
						if(g && g.recursive) {
							l = !1;
							break
						}
					}
					l && b.attr("maxlength", e.length).data("mask-maxlength", !0), c.destroyEvents(), c.events(), d = c.getCaret(), c.val(c.getMasked()), c.setCaret(d)
				}
			}, m.init(!b.is("input"))
		}
		a.maskWatchers = {};

		function d() {
			var b = a(this),
				e = {},
				f = b.attr("data-mask");
			if(b.attr("data-mask-reverse") && (e.reverse = !0), b.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0), "true" === b.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0), p(b, f, e)) return b.data("mask", new l(this, f, e))
		}
		var p = function(b, e, f) {
				f = f || {};
				var c = a(b).data("mask"),
					d = JSON.stringify;
				b = a(b).val() || a(b).text();
				try {
					return "function" == typeof e && (e = e(b)), "object" != typeof c || d(c.options) !== d(f) || c.mask !== e
				} catch(t) {}
			},
			h = function(a) {
				var d, b = document.createElement("div");
				return(d = (a = "on" + a) in b) || (b.setAttribute(a, "return;"), d = "function" == typeof b[a]), d
			};
		a.fn.mask = function(b, d) {
			d = d || {};

			function t() {
				if(p(this, b, d)) return a(this).data("mask", new l(this, b, d))
			}
			var e = this.selector,
				h = (c = a.jMaskGlobals).watchInterval,
				c = d.watchInputs || c.watchInputs;
			return a(this).each(t), e && "" !== e && c && (clearInterval(a.maskWatchers[e]), a.maskWatchers[e] = setInterval(function() {
				a(document).find(e).each(t)
			}, h)), this
		}, a.fn.masked = function(a) {
			return this.data("mask").getMaskedVal(a)
		}, a.fn.unmask = function() {
			return clearInterval(a.maskWatchers[this.selector]), delete a.maskWatchers[this.selector], this.each(function() {
				var b = a(this).data("mask");
				b && b.remove().removeData("mask")
			})
		}, a.fn.cleanVal = function() {
			return this.data("mask").getCleanVal()
		}, a.applyDataMask = function(b) {
			((b = b || a.jMaskGlobals.maskElements) instanceof a ? b : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d)
		}, h = {
			maskElements: "input,td,span,div",
			dataMaskAttr: "*[data-mask]",
			dataMask: !0,
			watchInterval: 300,
			watchInputs: !0,
			keyStrokeCompensation: 10,
			useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && h("input"),
			watchDataMask: !1,
			byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
			translation: {
				0: {
					pattern: /\d/
				},
				9: {
					pattern: /\d/,
					optional: !0
				},
				"#": {
					pattern: /\d/,
					recursive: !0
				},
				A: {
					pattern: /[a-zA-Z0-9]/
				},
				S: {
					pattern: /[a-zA-Z]/
				}
			}
		}, a.jMaskGlobals = a.jMaskGlobals || {}, (h = a.jMaskGlobals = a.extend(!0, {}, h, a.jMaskGlobals)).dataMask && a.applyDataMask(), setInterval(function() {
			a.jMaskGlobals.watchDataMask && a.applyDataMask()
		}, h.watchInterval)
	}, window.jQuery, window.Zepto),
	function(h) {
		"function" == typeof define && define.amd ? define(["jquery"], function(E) {
			return h(E, window, document)
		}) : "object" == typeof exports ? module.exports = function(E, H) {
			return E = E || window, H = H || ("undefined" != typeof window ? require("jquery") : require("jquery")(E)), h(H, E, E.document)
		} : h(jQuery, window, document)
	}(function(h, E, H, k) {
		function Z(a) {
			var b, c, d = {};
			h.each(a, function(e) {
				(b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && (c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && Z(a[e]))
			}), a._hungarianMap = d
		}

		function J(a, b, c) {
			var d;
			a._hungarianMap || Z(a), h.each(b, function(e) {
				(d = a._hungarianMap[e]) === k || !c && b[d] !== k || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c)) : b[d] = b[e])
			})
		}

		function Ca(a) {
			var b = n.defaults.oLanguage,
				c = b.sDecimal;
			if(c && Da(c), a) {
				var d = a.sZeroRecords;
				!a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && F(a, a, "sZeroRecords", "sEmptyTable"), !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && F(a, a, "sZeroRecords", "sLoadingRecords"), a.sInfoThousands && (a.sThousands = a.sInfoThousands), (a = a.sDecimal) && c !== a && Da(a)
			}
		}

		function eb(a) {
			if(A(a, "ordering", "bSort"), A(a, "orderMulti", "bSortMulti"), A(a, "orderClasses", "bSortClasses"), A(a, "orderCellsTop", "bSortCellsTop"), A(a, "order", "aaSorting"), A(a, "orderFixed", "aaSortingFixed"), A(a, "paging", "bPaginate"), A(a, "pagingType", "sPaginationType"), A(a, "pageLength", "iDisplayLength"), A(a, "searching", "bFilter"), "boolean" == typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : ""), "boolean" == typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : ""), a = a.aoSearchCols)
				for(var b = 0, c = a.length; b < c; b++) a[b] && J(n.models.oSearch, a[b])
		}

		function fb(a) {
			A(a, "orderable", "bSortable"), A(a, "orderData", "aDataSort"), A(a, "orderSequence", "asSorting"), A(a, "orderDataType", "sortDataType");
			var b = a.aDataSort;
			"number" != typeof b || h.isArray(b) || (a.aDataSort = [b])
		}

		function gb(a) {
			if(!n.__browser) {
				var b = {};
				n.__browser = b;
				var c = h("<div/>").css({
						position: "fixed",
						top: 0,
						left: -1 * h(E).scrollLeft(),
						height: 1,
						width: 1,
						overflow: "hidden"
					}).append(h("<div/>").css({
						position: "absolute",
						top: 1,
						left: 1,
						width: 100,
						overflow: "scroll"
					}).append(h("<div/>").css({
						width: "100%",
						height: 10
					}))).appendTo("body"),
					d = c.children(),
					e = d.children();
				b.barWidth = d[0].offsetWidth - d[0].clientWidth, b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth, b.bScrollbarLeft = 1 !== Math.round(e.offset().left), b.bBounding = !!c[0].getBoundingClientRect().width, c.remove()
			}
			h.extend(a.oBrowser, n.__browser), a.oScroll.iBarWidth = n.__browser.barWidth
		}

		function hb(a, b, c, d, e, f) {
			var g, j = !1;
			for(c !== k && (g = c, j = !0); d !== e;) a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
			return g
		}

		function Ea(a, b) {
			var c = n.defaults.column,
				d = a.aoColumns.length;
			c = h.extend({}, n.models.oColumn, c, {
				nTh: b || H.createElement("th"),
				sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
				aDataSort: c.aDataSort ? c.aDataSort : [d],
				mData: c.mData ? c.mData : d,
				idx: d
			});
			a.aoColumns.push(c), (c = a.aoPreSearchCols)[d] = h.extend({}, n.models.oSearch, c[d]), ka(a, d, h(b).data())
		}

		function ka(a, b, c) {
			b = a.aoColumns[b];
			var d = a.oClasses,
				e = h(b.nTh);
			if(!b.sWidthOrig) {
				b.sWidthOrig = e.attr("width") || null;
				var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
				f && (b.sWidthOrig = f[1])
			}
			c !== k && null !== c && (fb(c), J(n.defaults.column, c), c.mDataProp === k || c.mData || (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));
			var g = b.mData,
				j = S(g),
				i = b.mRender ? S(b.mRender) : null;
			c = function(a) {
				return "string" == typeof a && -1 !== a.indexOf("@")
			};
			b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter)), b._setter = null, b.fnGetData = function(a, b, c) {
				var d = j(a, b, k, c);
				return i && b ? i(d, b, a, c) : d
			}, b.fnSetData = function(a, b, c) {
				return N(g)(a, b, c)
			}, "number" != typeof g && (a._rowReadObject = !0), a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone)), a = -1 !== h.inArray("asc", b.asSorting), c = -1 !== h.inArray("desc", b.asSorting), b.bSortable && (a || c) ? a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI) : (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "")
		}

		function $(a) {
			if(!1 !== a.oFeatures.bAutoWidth) {
				var b = a.aoColumns;
				Fa(a);
				for(var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
			}
			"" === (b = a.oScroll).sY && "" === b.sX || la(a), r(a, null, "column-sizing", [a])
		}

		function aa(a, b) {
			var c = ma(a, "bVisible");
			return "number" == typeof c[b] ? c[b] : null
		}

		function ba(a, b) {
			var c = ma(a, "bVisible");
			return -1 !== (c = h.inArray(b, c)) ? c : null
		}

		function V(a) {
			var b = 0;
			return h.each(a.aoColumns, function(a, d) {
				d.bVisible && "none" !== h(d.nTh).css("display") && b++
			}), b
		}

		function ma(a, b) {
			var c = [];
			return h.map(a.aoColumns, function(a, e) {
				a[b] && c.push(e)
			}), c
		}

		function Ga(a) {
			var e, f, g, j, i, h, l, q, t, b = a.aoColumns,
				c = a.aoData,
				d = n.ext.type.detect;
			for(e = 0, f = b.length; e < f; e++)
				if(t = [], !(l = b[e]).sType && l._sManualType) l.sType = l._sManualType;
				else if(!l.sType) {
				for(g = 0, j = d.length; g < j; g++) {
					for(i = 0, h = c.length; i < h && (t[i] === k && (t[i] = B(a, i, e, "type")), (q = d[g](t[i], a)) || g === d.length - 1) && "html" !== q; i++);
					if(q) {
						l.sType = q;
						break
					}
				}
				l.sType || (l.sType = "string")
			}
		}

		function ib(a, b, c, d) {
			var e, f, g, j, i, m, l = a.aoColumns;
			if(b)
				for(e = b.length - 1; 0 <= e; e--) {
					var q = (m = b[e]).targets !== k ? m.targets : m.aTargets;
					for(h.isArray(q) || (q = [q]), f = 0, g = q.length; f < g; f++)
						if("number" == typeof q[f] && 0 <= q[f]) {
							for(; l.length <= q[f];) Ea(a);
							d(q[f], m)
						} else if("number" == typeof q[f] && q[f] < 0) d(l.length + q[f], m);
					else if("string" == typeof q[f])
						for(j = 0, i = l.length; j < i; j++) "_all" != q[f] && !h(l[j].nTh).hasClass(q[f]) || d(j, m)
				}
			if(c)
				for(e = 0, a = c.length; e < a; e++) d(e, c[e])
		}

		function O(a, b, c, d) {
			var e = a.aoData.length,
				f = h.extend(!0, {}, n.models.oRow, {
					src: c ? "dom" : "data",
					idx: e
				});
			f._aData = b, a.aoData.push(f);
			for(var g = a.aoColumns, j = 0, i = g.length; j < i; j++) g[j].sType = null;
			return a.aiDisplayMaster.push(e), (b = a.rowIdFn(b)) !== k && (a.aIds[b] = f), !c && a.oFeatures.bDeferRender || Ha(a, e, c, d), e
		}

		function na(a, b) {
			var c;
			return b instanceof h || (b = h(b)), b.map(function(b, e) {
				return c = Ia(a, e), O(a, c.data, e, c.cells)
			})
		}

		function B(a, b, c, d) {
			var e = a.iDraw,
				f = a.aoColumns[c],
				g = a.aoData[b]._aData,
				j = f.sDefaultContent,
				i = f.fnGetData(g, d, {
					settings: a,
					row: b,
					col: c
				});
			if(i === k) return a.iDrawError != e && null === j && (K(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j;
			if(i !== g && null !== i || null === j || d === k) {
				if("function" == typeof i) return i.call(g)
			} else i = j;
			return null === i && "display" == d ? "" : i
		}

		function jb(a, b, c, d) {
			a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
				settings: a,
				row: b,
				col: c
			})
		}

		function Ja(a) {
			return h.map(a.match(/(\\.|[^\.])+/g) || [""], function(a) {
				return a.replace(/\\\./g, ".")
			})
		}

		function S(a) {
			if(h.isPlainObject(a)) {
				var b = {};
				return h.each(a, function(a, c) {
						c && (b[a] = S(c))
					}),
					function(a, c, f, g) {
						var j = b[c] || b._;
						return j !== k ? j(a, c, f, g) : a
					}
			}
			if(null === a) return function(a) {
				return a
			};
			if("function" == typeof a) return function(b, c, f, g) {
				return a(b, c, f, g)
			};
			if("string" != typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function(b) {
				return b[a]
			};
			var c = function(a, b, f) {
				var g, j;
				if("" !== f)
					for(var i = 0, m = (j = Ja(f)).length; i < m; i++) {
						if(f = j[i].match(ca), g = j[i].match(W), f) {
							if(j[i] = j[i].replace(ca, ""), "" !== j[i] && (a = a[j[i]]), g = [], j.splice(0, i + 1), j = j.join("."), h.isArray(a))
								for(i = 0, m = a.length; i < m; i++) g.push(c(a[i], b, j));
							a = "" === (a = f[0].substring(1, f[0].length - 1)) ? g : g.join(a);
							break
						}
						if(g) j[i] = j[i].replace(W, ""), a = a[j[i]]();
						else {
							if(null === a || a[j[i]] === k) return k;
							a = a[j[i]]
						}
					}
				return a
			};
			return function(b, e) {
				return c(b, e, a)
			}
		}

		function N(a) {
			if(h.isPlainObject(a)) return N(a._);
			if(null === a) return function() {};
			if("function" == typeof a) return function(b, d, e) {
				a(b, "set", d, e)
			};
			if("string" != typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function(b, d) {
				b[a] = d
			};
			var b = function(a, d, e) {
				var f;
				f = (e = Ja(e))[e.length - 1];
				for(var g, j, i = 0, m = e.length - 1; i < m; i++) {
					if(g = e[i].match(ca), j = e[i].match(W), g) {
						if(e[i] = e[i].replace(ca, ""), a[e[i]] = [], (f = e.slice()).splice(0, i + 1), g = f.join("."), h.isArray(d))
							for(j = 0, m = d.length; j < m; j++) b(f = {}, d[j], g), a[e[i]].push(f);
						else a[e[i]] = d;
						return
					}
					j && (e[i] = e[i].replace(W, ""), a = a[e[i]](d)), null !== a[e[i]] && a[e[i]] !== k || (a[e[i]] = {}), a = a[e[i]]
				}
				f.match(W) ? a[f.replace(W, "")](d) : a[f.replace(ca, "")] = d
			};
			return function(c, d) {
				return b(c, d, a)
			}
		}

		function Ka(a) {
			return D(a.aoData, "_aData")
		}

		function oa(a) {
			a.aoData.length = 0, a.aiDisplayMaster.length = 0, a.aiDisplay.length = 0, a.aIds = {}
		}

		function pa(a, b, c) {
			for(var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e] --; - 1 != d && c === k && a.splice(d, 1)
		}

		function da(a, b, c, d) {
			var f, e = a.aoData[b],
				g = function(c, d) {
					for(; c.childNodes.length;) c.removeChild(c.firstChild);
					c.innerHTML = B(a, b, d, "display")
				};
			if("dom" !== c && (c && "auto" !== c || "dom" !== e.src)) {
				var j = e.anCells;
				if(j)
					if(d !== k) g(j[d], d);
					else
						for(c = 0, f = j.length; c < f; c++) g(j[c], c)
			} else e._aData = Ia(a, e, d, d === k ? k : e._aData).data;
			if(e._aSortData = null, e._aFilterData = null, g = a.aoColumns, d !== k) g[d].sType = null;
			else {
				for(c = 0, f = g.length; c < f; c++) g[c].sType = null;
				La(a, e)
			}
		}

		function Ia(a, b, c, d) {
			function t(a, b) {
				if("string" == typeof a) {
					var c = a.indexOf("@"); - 1 !== c && (c = a.substring(c + 1), N(a)(d, b.getAttribute(c)))
				}
			}

			function G(a) {
				c !== k && c !== i || (j = l[i], m = h.trim(a.innerHTML), j && j._bAttrSrc ? (N(j.mData._)(d, m), t(j.mData.sort, a), t(j.mData.type, a), t(j.mData.filter, a)) : q ? (j._setter || (j._setter = N(j.mData)), j._setter(d, m)) : d[i] = m), i++
			}
			var g, j, m, e = [],
				f = b.firstChild,
				i = 0,
				l = a.aoColumns,
				q = a._rowReadObject;
			d = d !== k ? d : q ? {} : [];
			if(f)
				for(; f;) "TD" != (g = f.nodeName.toUpperCase()) && "TH" != g || (G(f), e.push(f)), f = f.nextSibling;
			else
				for(f = 0, g = (e = b.anCells).length; f < g; f++) G(e[f]);
			return(b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && N(a.rowId)(d, b), {
				data: d,
				cells: e
			}
		}

		function Ha(a, b, c, d) {
			var j, i, m, l, q, e = a.aoData[b],
				f = e._aData,
				g = [];
			if(null === e.nTr) {
				for(j = c || H.createElement("tr"), e.nTr = j, e.anCells = g, j._DT_RowIndex = b, La(a, e), l = 0, q = a.aoColumns.length; l < q; l++) m = a.aoColumns[l], (i = c ? d[l] : H.createElement(m.sCellType))._DT_CellIndex = {
					row: b,
					column: l
				}, g.push(i), c && !m.mRender && m.mData === l || h.isPlainObject(m.mData) && m.mData._ === l + ".display" || (i.innerHTML = B(a, b, l, "display")), m.sClass && (i.className += " " + m.sClass), m.bVisible && !c ? j.appendChild(i) : !m.bVisible && c && i.parentNode.removeChild(i), m.fnCreatedCell && m.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l);
				r(a, "aoRowCreatedCallback", null, [j, f, b, g])
			}
			e.nTr.setAttribute("role", "row")
		}

		function La(a, b) {
			var c = b.nTr,
				d = b._aData;
			if(c) {
				var e = a.rowIdFn(d);
				e && (c.id = e), d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? qa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass)), d.DT_RowAttr && h(c).attr(d.DT_RowAttr), d.DT_RowData && h(c).data(d.DT_RowData)
			}
		}

		function kb(a) {
			var b, c, d, e, f, g = a.nTHead,
				j = a.nTFoot,
				i = 0 === h("th, td", g).length,
				m = a.oClasses,
				l = a.aoColumns;
			for(i && (e = h("<tr/>").appendTo(g)), b = 0, c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Ma(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Na(a, "header")(a, d, f, m);
			if(i && ea(a.aoHeader, g), h(g).find(">tr").attr("role", "row"), h(g).find(">tr>th, >tr>td").addClass(m.sHeaderTH), h(j).find(">tr>th, >tr>td").addClass(m.sFooterTH), null !== j)
				for(b = 0, c = (a = a.aoFooter[0]).length; b < c; b++)(f = l[b]).nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass)
		}

		function fa(a, b, c) {
			var d, e, f, m, g = [],
				j = [],
				i = a.aoColumns.length;
			if(b) {
				for(c === k && (c = !1), d = 0, e = b.length; d < e; d++) {
					for(g[d] = b[d].slice(), g[d].nTr = b[d].nTr, f = i - 1; 0 <= f; f--) a.aoColumns[f].bVisible || c || g[d].splice(f, 1);
					j.push([])
				}
				for(d = 0, e = g.length; d < e; d++) {
					if(a = g[d].nTr)
						for(; f = a.firstChild;) a.removeChild(f);
					for(f = 0, b = g[d].length; f < b; f++)
						if(m = i = 1, j[d][f] === k) {
							for(a.appendChild(g[d][f].cell), j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;) j[d + i][f] = 1, i++;
							for(; g[d][f + m] !== k && g[d][f].cell == g[d][f + m].cell;) {
								for(c = 0; c < i; c++) j[d + c][f + m] = 1;
								m++
							}
							h(g[d][f].cell).attr("rowspan", i).attr("colspan", m)
						}
				}
			}
		}

		function P(a) {
			var b = r(a, "aoPreDrawCallback", "preDraw", [a]);
			if(-1 !== h.inArray(!1, b)) C(a, !1);
			else {
				b = [];
				var c = 0,
					d = a.asStripeClasses,
					e = d.length,
					f = a.oLanguage,
					g = a.iInitDisplayStart,
					j = "ssp" == y(a),
					i = a.aiDisplay;
				a.bDrawing = !0, g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
				g = a._iDisplayStart;
				var m = a.fnDisplayEnd();
				if(a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);
				else if(j) {
					if(!a.bDestroying && !lb(a)) return
				} else a.iDraw++;
				if(0 !== i.length)
					for(f = j ? a.aoData.length : m, j = j ? 0 : g; j < f; j++) {
						var l = i[j],
							q = a.aoData[l];
						null === q.nTr && Ha(a, l);
						var t = q.nTr;
						if(0 !== e) {
							var G = d[c % e];
							q._sRowStripe != G && (h(t).removeClass(q._sRowStripe).addClass(G), q._sRowStripe = G)
						}
						r(a, "aoRowCallback", null, [t, q._aData, c, j, l]), b.push(t), c++
					} else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", {
						class: e ? d[0] : ""
					}).append(h("<td />", {
						valign: "top",
						colSpan: V(a),
						class: a.oClasses.sRowEmpty
					}).html(c))[0];
				r(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ka(a), g, m, i]), r(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ka(a), g, m, i]), (d = h(a.nTBody)).children().detach(), d.append(h(b)), r(a, "aoDrawCallback", "draw", [a]), a.bSorted = !1, a.bFiltered = !1, a.bDrawing = !1
			}
		}

		function T(a, b) {
			var c = a.oFeatures,
				d = c.bFilter;
			c.bSort && mb(a), d ? ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice(), !0 !== b && (a._iDisplayStart = 0), a._drawHold = b, P(a), a._drawHold = !1
		}

		function nb(a) {
			var b = a.oClasses,
				c = h(a.nTable),
				d = (c = h("<div/>").insertBefore(c), a.oFeatures),
				e = h("<div/>", {
					id: a.sTableId + "_wrapper",
					class: b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
				});
			a.nHolding = c[0], a.nTableWrapper = e[0], a.nTableReinsertBefore = a.nTable.nextSibling;
			for(var g, j, i, m, l, q, f = a.sDom.split(""), k = 0; k < f.length; k++) {
				if(g = null, "<" == (j = f[k])) {
					if(i = h("<div/>")[0], "'" == (m = f[k + 1]) || '"' == m) {
						for(l = "", q = 2; f[k + q] != m;) l += f[k + q], q++;
						"H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter), -1 != l.indexOf(".") ? (m = l.split("."), i.id = m[0].substr(1, m[0].length - 1), i.className = m[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l, k += q
					}
					e.append(i), e = h(i)
				} else if(">" == j) e = e.parent();
				else if("l" == j && d.bPaginate && d.bLengthChange) g = ob(a);
				else if("f" == j && d.bFilter) g = pb(a);
				else if("r" == j && d.bProcessing) g = qb(a);
				else if("t" == j) g = rb(a);
				else if("i" == j && d.bInfo) g = sb(a);
				else if("p" == j && d.bPaginate) g = tb(a);
				else if(0 !== n.ext.feature.length)
					for(q = 0, m = (i = n.ext.feature).length; q < m; q++)
						if(j == i[q].cFeature) {
							g = i[q].fnInit(a);
							break
						}
				g && ((i = a.aanFeatures)[j] || (i[j] = []), i[j].push(g), e.append(g))
			}
			c.replaceWith(e), a.nHolding = null
		}

		function ea(a, b) {
			var d, e, f, g, j, i, m, l, q, k, c = h(b).children("tr");
			for(a.splice(0, a.length), f = 0, i = c.length; f < i; f++) a.push([]);
			for(f = 0, i = c.length; f < i; f++)
				for(e = (d = c[f]).firstChild; e;) {
					if("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
						for(l = (l = 1 * e.getAttribute("colspan")) && 0 !== l && 1 !== l ? l : 1, q = (q = 1 * e.getAttribute("rowspan")) && 0 !== q && 1 !== q ? q : 1, g = 0, j = a[f]; j[g];) g++;
						for(m = g, k = 1 === l, j = 0; j < l; j++)
							for(g = 0; g < q; g++) a[f + g][m + j] = {
								cell: e,
								unique: k
							}, a[f + g].nTr = d
					}
					e = e.nextSibling
				}
		}

		function ra(a, b, c) {
			var d = [];
			c || (c = a.aoHeader, b && ea(c = [], b));
			b = 0;
			for(var e = c.length; b < e; b++)
				for(var f = 0, g = c[b].length; f < g; f++) !c[b][f].unique || d[f] && a.bSortCellsTop || (d[f] = c[b][f].cell);
			return d
		}

		function sa(a, b, c) {
			if(r(a, "aoServerParams", "serverParams", [b]), b && h.isArray(b)) {
				var d = {},
					e = /(.*?)\[\]$/;
				h.each(b, function(a, b) {
					var c = b.name.match(e);
					c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
				}), b = d
			}

			function i(b) {
				r(a, null, "xhr", [a, b, a.jqXHR]), c(b)
			}
			var f, g = a.ajax,
				j = a.oInstance;
			if(h.isPlainObject(g) && g.data) {
				var m = "function" == typeof(f = g.data) ? f(b, a) : f;
				b = "function" == typeof f && m ? m : h.extend(!0, b, m);
				delete g.data
			}
			m = {
				data: b,
				success: function(b) {
					var c = b.error || b.sError;
					c && K(a, 0, c), a.json = b, i(b)
				},
				dataType: "json",
				cache: !1,
				type: a.sServerMethod,
				error: function(b, c) {
					var d = r(a, null, "xhr", [a, null, a.jqXHR]); - 1 === h.inArray(!0, d) && ("parsererror" == c ? K(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && K(a, 0, "Ajax error", 7)), C(a, !1)
				}
			}, a.oAjaxData = b, r(a, null, "preXhr", [a, b]), a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function(a, b) {
				return {
					name: b,
					value: a
				}
			}), i, a) : a.sAjaxSource || "string" == typeof g ? a.jqXHR = h.ajax(h.extend(m, {
				url: g || a.sAjaxSource
			})) : "function" == typeof g ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(m, g)), g.data = f)
		}

		function lb(a) {
			return !a.bAjaxDataGet || (a.iDraw++, C(a, !0), sa(a, ub(a), function(b) {
				vb(a, b)
			}), !1)
		}

		function ub(a) {
			var g, i, m, l, b = a.aoColumns,
				c = b.length,
				d = a.oFeatures,
				e = a.oPreviousSearch,
				f = a.aoPreSearchCols,
				j = [],
				k = X(a);
			g = a._iDisplayStart, i = !1 !== d.bPaginate ? a._iDisplayLength : -1;

			function t(a, b) {
				j.push({
					name: a,
					value: b
				})
			}
			t("sEcho", a.iDraw), t("iColumns", c), t("sColumns", D(b, "sName").join(",")), t("iDisplayStart", g), t("iDisplayLength", i);
			var G = {
				draw: a.iDraw,
				columns: [],
				order: [],
				start: g,
				length: i,
				search: {
					value: e.sSearch,
					regex: e.bRegex
				}
			};
			for(g = 0; g < c; g++) m = b[g], l = f[g], i = "function" == typeof m.mData ? "function" : m.mData, G.columns.push({
				data: i,
				name: m.sName,
				searchable: m.bSearchable,
				orderable: m.bSortable,
				search: {
					value: l.sSearch,
					regex: l.bRegex
				}
			}), t("mDataProp_" + g, i), d.bFilter && (t("sSearch_" + g, l.sSearch), t("bRegex_" + g, l.bRegex), t("bSearchable_" + g, m.bSearchable)), d.bSort && t("bSortable_" + g, m.bSortable);
			return d.bFilter && (t("sSearch", e.sSearch), t("bRegex", e.bRegex)), d.bSort && (h.each(k, function(a, b) {
				G.order.push({
					column: b.col,
					dir: b.dir
				}), t("iSortCol_" + a, b.col), t("sSortDir_" + a, b.dir)
			}), t("iSortingCols", k.length)), null === (b = n.ext.legacy.ajax) ? a.sAjaxSource ? j : G : b ? j : G
		}

		function vb(a, b) {
			var c = ta(a, b),
				d = b.sEcho !== k ? b.sEcho : b.draw,
				e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
				f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;
			if(d) {
				if(1 * d < a.iDraw) return;
				a.iDraw = 1 * d
			}
			for(oa(a), a._iRecordsTotal = parseInt(e, 10), a._iRecordsDisplay = parseInt(f, 10), d = 0, e = c.length; d < e; d++) O(a, c[d]);
			a.aiDisplay = a.aiDisplayMaster.slice(), a.bAjaxDataGet = !1, P(a), a._bInitComplete || ua(a, b), a.bAjaxDataGet = !0, C(a, !1)
		}

		function ta(a, b) {
			var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;
			return "data" === c ? b.aaData || b[c] : "" !== c ? S(c)(b) : b
		}

		function pb(a) {
			var b = a.oClasses,
				c = a.sTableId,
				d = a.oLanguage,
				e = a.oPreviousSearch,
				f = a.aanFeatures,
				g = '<input type="search" class="' + b.sFilterInput + '"/>',
				j = (j = d.sSearch).match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
				i = (b = h("<div/>", {
					id: f.f ? null : c + "_filter",
					class: b.sFilter
				}).append(h("<label/>").append(j)), f = function() {
					var b = this.value ? this.value : "";
					b != e.sSearch && (ga(a, {
						sSearch: b,
						bRegex: e.bRegex,
						bSmart: e.bSmart,
						bCaseInsensitive: e.bCaseInsensitive
					}), a._iDisplayStart = 0, P(a))
				}, g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0, h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Oa(f, g) : f).on("keypress.DT", function(a) {
					if(13 == a.keyCode) return !1
				}).attr("aria-controls", c));
			return h(a.nTable).on("search.dt.DT", function(b, c) {
				if(a === c) try {
					i[0] !== H.activeElement && i.val(e.sSearch)
				} catch(d) {}
			}), b[0]
		}

		function ga(a, b, c) {
			function f(a) {
				d.sSearch = a.sSearch, d.bRegex = a.bRegex, d.bSmart = a.bSmart, d.bCaseInsensitive = a.bCaseInsensitive
			}
			var d = a.oPreviousSearch,
				e = a.aoPreSearchCols;
			if(Ga(a), "ssp" != y(a)) {
				for(wb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive), f(b), b = 0; b < e.length; b++) xb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
				yb(a)
			} else f(b);
			a.bFiltered = !0, r(a, null, "search", [a])
		}

		function yb(a) {
			for(var d, e, b = n.ext.search, c = a.aiDisplay, f = 0, g = b.length; f < g; f++) {
				for(var j = [], i = 0, m = c.length; i < m; i++) e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
				c.length = 0, h.merge(c, j)
			}
		}

		function xb(a, b, c, d, e, f) {
			if("" !== b) {
				var g = [],
					j = a.aiDisplay;
				for(d = Pa(b, d, e, f), e = 0; e < j.length; e++) b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]);
				a.aiDisplay = g
			}
		}

		function wb(a, b, c, d, e, f) {
			d = Pa(b, d, e, f), f = a.oPreviousSearch.sSearch;
			var j, g = a.aiDisplayMaster;
			e = [];
			if(0 !== n.ext.search.length && (c = !0), j = zb(a), b.length <= 0) a.aiDisplay = g.slice();
			else {
				for((j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) && (a.aiDisplay = g.slice()), b = a.aiDisplay, c = 0; c < b.length; c++) d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
				a.aiDisplay = e
			}
		}

		function Pa(a, b, c, d) {
			return a = b ? a : Qa(a), c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function(a) {
				if('"' === a.charAt(0)) {
					var b = a.match(/^"(.*)"$/);
					a = b ? b[1] : a
				}
				return a.replace('"', "")
			}).join(")(?=.*?") + ").*$"), RegExp(a, d ? "i" : "")
		}

		function zb(a) {
			var c, d, e, f, g, j, i, h, b = a.aoColumns,
				l = n.ext.type.search;
			for(c = !1, d = 0, f = a.aoData.length; d < f; d++)
				if(!(h = a.aoData[d])._aFilterData) {
					for(j = [], e = 0, g = b.length; e < g; e++)(c = b[e]).bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" != typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (va.innerHTML = i, i = Wb ? va.textContent : va.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
					h._aFilterData = j, h._sFilterRow = j.join("  "), c = !0
				}
			return c
		}

		function Ab(a) {
			return {
				search: a.sSearch,
				smart: a.bSmart,
				regex: a.bRegex,
				caseInsensitive: a.bCaseInsensitive
			}
		}

		function Bb(a) {
			return {
				sSearch: a.search,
				bSmart: a.smart,
				bRegex: a.regex,
				bCaseInsensitive: a.caseInsensitive
			}
		}

		function sb(a) {
			var b = a.sTableId,
				c = a.aanFeatures.i,
				d = h("<div/>", {
					class: a.oClasses.sInfo,
					id: c ? null : b + "_info"
				});
			return c || (a.aoDrawCallback.push({
				fn: Cb,
				sName: "information"
			}), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info")), d[0]
		}

		function Cb(a) {
			var b = a.aanFeatures.i;
			if(0 !== b.length) {
				var c = a.oLanguage,
					d = a._iDisplayStart + 1,
					e = a.fnDisplayEnd(),
					f = a.fnRecordsTotal(),
					g = a.fnRecordsDisplay(),
					j = g ? c.sInfo : c.sInfoEmpty;
				g !== f && (j += " " + c.sInfoFiltered), j = Db(a, j += c.sInfoPostFix), null !== (c = c.fnInfoCallback) && (j = c.call(a.oInstance, a, d, e, f, g, j)), h(b).html(j)
			}
		}

		function Db(a, b) {
			var c = a.fnFormatNumber,
				d = a._iDisplayStart + 1,
				e = a._iDisplayLength,
				f = a.fnRecordsDisplay(),
				g = -1 === e;
			return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
		}

		function ha(a) {
			var b, c, f, d = a.iInitDisplayStart,
				e = a.aoColumns;
			c = a.oFeatures;
			var g = a.bDeferLoading;
			if(a.bInitialised) {
				for(nb(a), kb(a), fa(a, a.aoHeader), fa(a, a.aoFooter), C(a, !0), c.bAutoWidth && Fa(a), b = 0, c = e.length; b < c; b++)(f = e[b]).sWidth && (f.nTh.style.width = v(f.sWidth));
				r(a, null, "preInit", [a]), T(a), "ssp" == (e = y(a)) && !g || ("ajax" == e ? sa(a, [], function(c) {
					var f = ta(a, c);
					for(b = 0; b < f.length; b++) O(a, f[b]);
					a.iInitDisplayStart = d, T(a), C(a, !1), ua(a, c)
				}) : (C(a, !1), ua(a)))
			} else setTimeout(function() {
				ha(a)
			}, 200)
		}

		function ua(a, b) {
			a._bInitComplete = !0, (b || a.oInit.aaData) && $(a), r(a, null, "plugin-init", [a, b]), r(a, "aoInitComplete", "init", [a, b])
		}

		function Ra(a, b) {
			var c = parseInt(b, 10);
			a._iDisplayLength = c, Sa(a), r(a, null, "length", [a, c])
		}

		function ob(a) {
			for(var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, f = (e = h.isArray(d[0])) ? d[0] : d, e = (d = e ? d[1] : d, h("<select/>", {
					name: c + "_length",
					"aria-controls": c,
					class: b.sLengthSelect
				})), g = 0, j = f.length; g < j; g++) e[0][g] = new Option("number" == typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], f[g]);
			var i = h("<div><label/></div>").addClass(b.sLength);
			return a.aanFeatures.l || (i[0].id = c + "_length"), i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)), h("select", i).val(a._iDisplayLength).on("change.DT", function() {
				Ra(a, h(this).val()), P(a)
			}), h(a.nTable).on("length.dt.DT", function(b, c, d) {
				a === c && h("select", i).val(d)
			}), i[0]
		}

		function tb(a) {
			function e(a) {
				P(a)
			}
			var b = a.sPaginationType,
				c = n.ext.pager[b],
				d = "function" == typeof c,
				f = (b = h("<div/>").addClass(a.oClasses.sPaging + b)[0], a.aanFeatures);
			return d || c.fnInit(a, b, e), f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
				fn: function(a) {
					if(d) {
						var k, b = a._iDisplayStart,
							i = a._iDisplayLength,
							h = a.fnRecordsDisplay(),
							l = (b = (l = -1 === i) ? 0 : Math.ceil(b / i), i = l ? 1 : Math.ceil(h / i), h = c(b, i), 0);
						for(k = f.p.length; l < k; l++) Na(a, "pageButton")(a, f.p[l], l, h, b, i)
					} else c.fnUpdate(a, e)
				},
				sName: "pagination"
			})), b
		}

		function Ta(a, b, c) {
			var d = a._iDisplayStart,
				e = a._iDisplayLength,
				f = a.fnRecordsDisplay();
			return 0 === f || -1 === e ? d = 0 : "number" == typeof b ? f < (d = b * e) && (d = 0) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0) < 0 && (d = 0) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, "Unknown paging action: " + b, 5), b = a._iDisplayStart !== d, a._iDisplayStart = d, b && (r(a, null, "page", [a]), c && P(a)), b
		}

		function qb(a) {
			return h("<div/>", {
				id: a.aanFeatures.r ? null : a.sTableId + "_processing",
				class: a.oClasses.sProcessing
			}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
		}

		function C(a, b) {
			a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none"), r(a, null, "processing", [a, b])
		}

		function rb(a) {
			(b = h(a.nTable)).attr("role", "grid");
			var c = a.oScroll;
			if("" === c.sX && "" === c.sY) return a.nTable;
			var d = c.sX,
				e = c.sY,
				f = a.oClasses,
				g = b.children("caption"),
				j = g.length ? g[0]._captionSide : null,
				i = h(b[0].cloneNode(!1)),
				m = h(b[0].cloneNode(!1)),
				l = b.children("tfoot");
			l.length || (l = null), i = h("<div/>", {
				class: f.sScrollWrapper
			}).append(h("<div/>", {
				class: f.sScrollHead
			}).css({
				overflow: "hidden",
				position: "relative",
				border: 0,
				width: d ? d ? v(d) : null : "100%"
			}).append(h("<div/>", {
				class: f.sScrollHeadInner
			}).css({
				"box-sizing": "content-box",
				width: c.sXInner || "100%"
			}).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", {
				class: f.sScrollBody
			}).css({
				position: "relative",
				overflow: "auto",
				width: d ? v(d) : null
			}).append(b)), l && i.append(h("<div/>", {
				class: f.sScrollFoot
			}).css({
				overflow: "hidden",
				border: 0,
				width: d ? d ? v(d) : null : "100%"
			}).append(h("<div/>", {
				class: f.sScrollFootInner
			}).append(m.removeAttr("id").css("margin-left", 0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
			var b, k = (b = i.children())[0],
				t = (f = b[1], l ? b[2] : null);
			return d && h(f).on("scroll.DT", function() {
				var a = this.scrollLeft;
				k.scrollLeft = a, l && (t.scrollLeft = a)
			}), h(f).css(e && c.bCollapse ? "max-height" : "height", e), a.nScrollHead = k, a.nScrollBody = f, a.nScrollFoot = t, a.aoDrawCallback.push({
				fn: la,
				sName: "scrolling"
			}), i[0]
		}

		function la(a) {
			function C(a) {
				(a = a.style).paddingTop = "0", a.paddingBottom = "0", a.borderTopWidth = "0", a.borderBottomWidth = "0", a.height = 0
			}
			var Q, L, R, w, B, c = (b = a.oScroll).sX,
				d = b.sXInner,
				e = b.sY,
				b = b.iBarWidth,
				f = h(a.nScrollHead),
				g = f[0].style,
				i = (j = f.children("div"))[0].style,
				m = j.children("table"),
				j = a.nScrollBody,
				l = h(j),
				q = j.style,
				t = h(a.nScrollFoot).children("div"),
				n = t.children("table"),
				o = h(a.nTHead),
				p = h(a.nTable),
				s = p[0],
				r = s.style,
				u = a.nTFoot ? h(a.nTFoot) : null,
				x = a.oBrowser,
				U = x.bScrollOversize,
				Xb = D(a.aoColumns, "nTh"),
				Ua = [],
				y = [],
				z = [],
				A = [];
			L = j.scrollHeight > j.clientHeight, a.scrollBarVis !== L && a.scrollBarVis !== k ? (a.scrollBarVis = L, $(a)) : (a.scrollBarVis = L, p.children("thead, tfoot").remove(), u && (R = u.clone().prependTo(p), Q = u.find("tr"), R = R.find("tr")), w = o.clone().prependTo(p), o = o.find("tr"), L = w.find("tr"), w.find("th, td").removeAttr("tabindex"), c || (q.width = "100%", f[0].style.width = "100%"), h.each(ra(a, w), function(b, c) {
				B = aa(a, b), c.style.width = a.aoColumns[B].sWidth
			}), u && I(function(a) {
				a.style.width = ""
			}, R), f = p.outerWidth(), "" === c ? (r.width = "100%", U && (p.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y")) && (r.width = v(p.outerWidth() - b)), f = p.outerWidth()) : "" !== d && (r.width = v(d), f = p.outerWidth()), I(C, L), I(function(a) {
				z.push(a.innerHTML), Ua.push(v(h(a).css("width")))
			}, L), I(function(a, b) {
				-1 !== h.inArray(a, Xb) && (a.style.width = Ua[b])
			}, o), h(L).height(0), u && (I(C, R), I(function(a) {
				A.push(a.innerHTML), y.push(v(h(a).css("width")))
			}, R), I(function(a, b) {
				a.style.width = y[b]
			}, Q), h(R).height(0)), I(function(a, b) {
				a.innerHTML = '<div class="dataTables_sizing">' + z[b] + "</div>", a.childNodes[0].style.height = "0", a.childNodes[0].style.overflow = "hidden", a.style.width = Ua[b]
			}, L), u && I(function(a, b) {
				a.innerHTML = '<div class="dataTables_sizing">' + A[b] + "</div>", a.childNodes[0].style.height = "0", a.childNodes[0].style.overflow = "hidden", a.style.width = y[b]
			}, R), p.outerWidth() < f ? (Q = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f, U && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y")) && (r.width = v(Q - b)), "" !== c && "" === d || K(a, 1, "Possible column misalignment", 6)) : Q = "100%", q.width = v(Q), g.width = v(Q), u && (a.nScrollFoot.style.width = v(Q)), !e && U && (q.height = v(s.offsetHeight + b)), c = p.outerWidth(), m[0].style.width = v(c), i.width = v(c), d = p.height() > j.clientHeight || "scroll" == l.css("overflow-y"), i[e = "padding" + (x.bScrollbarLeft ? "Left" : "Right")] = d ? b + "px" : "0px", u && (n[0].style.width = v(c), t[0].style.width = v(c), t[0].style[e] = d ? b + "px" : "0px"), p.children("colgroup").insertBefore(p.children("thead")), l.scroll(), !a.bSorted && !a.bFiltered || a._drawHold || (j.scrollTop = 0))
		}

		function I(a, b, c) {
			for(var g, j, d = 0, e = 0, f = b.length; e < f;) {
				for(g = b[e].firstChild, j = c ? c[e].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
				e++
			}
		}

		function Fa(a) {
			var n, o, b = a.nTable,
				c = a.aoColumns,
				e = (d = a.oScroll).sY,
				f = d.sX,
				g = d.sXInner,
				j = c.length,
				i = ma(a, "bVisible"),
				m = h("th", a.nTHead),
				l = b.getAttribute("width"),
				k = b.parentNode,
				t = !1,
				p = a.oBrowser,
				d = p.bScrollOversize;
			for((n = b.style.width) && -1 !== n.indexOf("%") && (l = n), n = 0; n < i.length; n++) null !== (o = c[i[n]]).sWidth && (o.sWidth = Eb(o.sWidthOrig, k), t = !0);
			if(d || !t && !f && !e && j == V(a) && j == m.length)
				for(n = 0; n < j; n++) null !== (i = aa(a, n)) && (c[i].sWidth = v(m.eq(n).width()));
			else {
				(j = h(b).clone().css("visibility", "hidden").removeAttr("id")).find("tbody tr").remove();
				var s = h("<tr/>").appendTo(j.find("tbody"));
				for(j.find("thead, tfoot").remove(), j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone()), j.find("tfoot th, tfoot td").css("width", ""), m = ra(a, j.find("thead")[0]), n = 0; n < i.length; n++) o = c[i[n]], m[n].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? v(o.sWidthOrig) : "", o.sWidthOrig && f && h(m[n]).append(h("<div/>").css({
					width: o.sWidthOrig,
					margin: 0,
					padding: 0,
					border: 0,
					height: 1
				}));
				if(a.aoData.length)
					for(n = 0; n < i.length; n++) o = c[t = i[n]], h(Fb(a, t)).clone(!1).append(o.sContentPadding).appendTo(s);
				for(h("[name]", j).removeAttr("name"), o = h("<div/>").css(f || e ? {
						position: "absolute",
						top: 0,
						left: 0,
						height: 1,
						right: 0,
						overflow: "hidden"
					} : {}).append(j).appendTo(k), f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l), n = e = 0; n < i.length; n++) g = (k = h(m[n])).outerWidth() - k.width(), e += k = p.bBounding ? Math.ceil(m[n].getBoundingClientRect().width) : k.outerWidth(), c[i[n]].sWidth = v(k - g);
				b.style.width = v(e), o.remove()
			}
			l && (b.style.width = v(l)), !l && !f || a._reszEvt || (b = function() {
				h(E).on("resize.DT-" + a.sInstance, Oa(function() {
					$(a)
				}))
			}, d ? setTimeout(b, 1e3) : b(), a._reszEvt = !0)
		}

		function Eb(a, b) {
			if(!a) return 0;
			var c = h("<div/>").css("width", v(a)).appendTo(b || H.body),
				d = c[0].offsetWidth;
			return c.remove(), d
		}

		function Fb(a, b) {
			var c = Gb(a, b);
			if(c < 0) return null;
			var d = a.aoData[c];
			return d.nTr ? d.anCells[b] : h("<td/>").html(B(a, c, b, "display"))[0]
		}

		function Gb(a, b) {
			for(var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++)(c = (c = (c = B(a, f, b, "display") + "").replace(Yb, "")).replace(/&nbsp;/g, " ")).length > d && (d = c.length, e = f);
			return e
		}

		function v(a) {
			return null === a ? "0px" : "number" == typeof a ? a < 0 ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
		}

		function X(a) {
			var b, c, f, g, j, i, d = [],
				e = a.aoColumns;
			b = a.aaSortingFixed, c = h.isPlainObject(b);
			var m = [];
			for(f = function(a) {
					a.length && !h.isArray(a[0]) ? m.push(a) : h.merge(m, a)
				}, h.isArray(b) && f(b), c && b.pre && f(b.pre), f(a.aaSorting), c && b.post && f(b.post), a = 0; a < m.length; a++)
				for(b = 0, c = (f = e[i = m[a][0]].aDataSort).length; b < c; b++) j = e[g = f[b]].sType || "string", m[a]._idx === k && (m[a]._idx = h.inArray(m[a][1], e[g].asSorting)), d.push({
					src: i,
					col: g,
					dir: m[a][1],
					index: m[a]._idx,
					type: j,
					formatter: n.ext.type.order[j + "-pre"]
				});
			return d
		}

		function mb(a) {
			var b, c, j, h, d = [],
				e = n.ext.type.order,
				f = a.aoData,
				g = 0,
				i = a.aiDisplayMaster;
			for(Ga(a), b = 0, c = (h = X(a)).length; b < c; b++)(j = h[b]).formatter && g++, Hb(a, j.col);
			if("ssp" != y(a) && 0 !== h.length) {
				for(b = 0, c = i.length; b < c; b++) d[i[b]] = b;
				g === h.length ? i.sort(function(a, b) {
					var c, e, g, j, i = h.length,
						k = f[a]._aSortData,
						n = f[b]._aSortData;
					for(g = 0; g < i; g++)
						if(0 !== (c = (c = k[(j = h[g]).col]) < (e = n[j.col]) ? -1 : e < c ? 1 : 0)) return "asc" === j.dir ? c : -c;
					return(c = d[a]) < (e = d[b]) ? -1 : e < c ? 1 : 0
				}) : i.sort(function(a, b) {
					var c, g, j, i, k = h.length,
						n = f[a]._aSortData,
						o = f[b]._aSortData;
					for(j = 0; j < k; j++)
						if(c = n[(i = h[j]).col], g = o[i.col], 0 !== (c = (i = e[i.type + "-" + i.dir] || e["string-" + i.dir])(c, g))) return c;
					return(c = d[a]) < (g = d[b]) ? -1 : g < c ? 1 : 0
				})
			}
			a.bSorted = !0
		}

		function Ib(a) {
			for(var b, c, d = a.aoColumns, e = X(a), f = (a = a.oLanguage.oAria, 0), g = d.length; f < g; f++) {
				var j = (c = d[f]).asSorting;
				b = c.sTitle.replace(/<.*?>/g, "");
				var i = c.nTh;
				i.removeAttribute("aria-sort"), c.bSortable && (b += "asc" === (c = 0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), j[e[0].index + 1] || j[0]) : j[0]) ? a.sSortAscending : a.sSortDescending), i.setAttribute("aria-label", b)
			}
		}

		function Va(a, b, c, d) {
			function g(a, b) {
				var c = a._idx;
				return c === k && (c = h.inArray(a[1], f)), c + 1 < f.length ? c + 1 : b ? null : 0
			}
			var e = a.aaSorting,
				f = a.aoColumns[b].asSorting;
			"number" == typeof e[0] && (e = a.aaSorting = [e]), c && a.oFeatures.bSortMulti ? -1 !== (c = h.inArray(b, D(e, "0"))) ? (null === (b = g(e[c], !0)) && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0), T(a), "function" == typeof d && d(a)
		}

		function Ma(a, b, c, d) {
			var e = a.aoColumns[c];
			Wa(b, {}, function(b) {
				!1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function() {
					Va(a, c, b.shiftKey, d), "ssp" !== y(a) && C(a, !1)
				}, 0)) : Va(a, c, b.shiftKey, d))
			})
		}

		function wa(a) {
			var f, g, b = a.aLastSort,
				c = a.oClasses.sSortColumn,
				d = X(a),
				e = a.oFeatures;
			if(e.bSort && e.bSortClasses) {
				for(e = 0, f = b.length; e < f; e++) g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (e < 2 ? e + 1 : 3));
				for(e = 0, f = d.length; e < f; e++) g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (e < 2 ? e + 1 : 3))
			}
			a.aLastSort = d
		}

		function Hb(a, b) {
			var e, c = a.aoColumns[b],
				d = n.ext.order[c.sSortDataType];
			d && (e = d.call(a.oInstance, a, b, ba(a, b)));
			for(var f, g = n.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++)(c = a.aoData[j])._aSortData || (c._aSortData = []), c._aSortData[b] && !d || (f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f)
		}

		function xa(a) {
			if(a.oFeatures.bStateSave && !a.bDestroying) {
				var b = {
					time: +new Date,
					start: a._iDisplayStart,
					length: a._iDisplayLength,
					order: h.extend(!0, [], a.aaSorting),
					search: Ab(a.oPreviousSearch),
					columns: h.map(a.aoColumns, function(b, d) {
						return {
							visible: b.bVisible,
							search: Ab(a.aoPreSearchCols[d])
						}
					})
				};
				r(a, "aoStateSaveParams", "stateSaveParams", [a, b]), a.oSavedState = b, a.fnStateSaveCallback.call(a.oInstance, a, b)
			}
		}

		function Jb(a, b, c) {
			var d, e, f = a.aoColumns;
			b = function(b) {
				if(b && b.time) {
					var g = r(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
					if(-1 === h.inArray(!1, g) && !(0 < (g = a.iStateDuration) && b.time < new Date - 1e3 * g || b.columns && f.length !== b.columns.length)) {
						if(a.oLoadedState = h.extend(!0, {}, b), b.start !== k && (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start), b.length !== k && (a._iDisplayLength = b.length), b.order !== k && (a.aaSorting = [], h.each(b.order, function(b, c) {
								a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c)
							})), b.search !== k && h.extend(a.oPreviousSearch, Bb(b.search)), b.columns)
							for(d = 0, e = b.columns.length; d < e; d++)(g = b.columns[d]).visible !== k && (f[d].bVisible = g.visible), g.search !== k && h.extend(a.aoPreSearchCols[d], Bb(g.search));
						r(a, "aoStateLoaded", "stateLoaded", [a, b])
					}
				}
				c()
			};
			if(a.oFeatures.bStateSave) {
				var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
				g !== k && b(g)
			} else c()
		}

		function ya(a) {
			var b = n.settings;
			return -1 !== (a = h.inArray(a, D(b, "nTable"))) ? b[a] : null
		}

		function K(a, b, c, d) {
			if(c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c, d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d), b) E.console && console.log && console.log(c);
			else if(b = (b = n.ext).sErrMode || b.errMode, a && r(a, null, "error", [a, d, c]), "alert" == b) alert(c);
			else {
				if("throw" == b) throw Error(c);
				"function" == typeof b && b(a, d, c)
			}
		}

		function F(a, b, c, d) {
			h.isArray(c) ? h.each(c, function(c, d) {
				h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d)
			}) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]))
		}

		function Xa(a, b, c) {
			var d, e;
			for(e in b) b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d);
			return a
		}

		function Wa(a, b, c) {
			h(a).on("click.DT", b, function(b) {
				h(a).blur(), c(b)
			}).on("keypress.DT", b, function(a) {
				13 === a.which && (a.preventDefault(), c(a))
			}).on("selectstart.DT", function() {
				return !1
			})
		}

		function z(a, b, c, d) {
			c && a[b].push({
				fn: c,
				sName: d
			})
		}

		function r(a, b, c, d) {
			var e = [];
			return b && (e = h.map(a[b].slice().reverse(), function(b) {
				return b.fn.apply(a.oInstance, d)
			})), null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result)), e
		}

		function Sa(a) {
			var b = a._iDisplayStart,
				c = a.fnDisplayEnd(),
				d = a._iDisplayLength;
			c <= b && (b = c - d), b -= b % d, (-1 === d || b < 0) && (b = 0), a._iDisplayStart = b
		}

		function Na(a, b) {
			var c = a.renderer,
				d = n.ext.renderer[b];
			return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" == typeof c && d[c] || d._
		}

		function y(a) {
			return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
		}

		function ia(a, b) {
			var c = [],
				d = (c = Kb.numbers_length, Math.floor(c / 2));
			return b <= c ? c = Y(0, b) : a <= d ? ((c = Y(0, c - 2)).push("ellipsis"), c.push(b - 1)) : (b - 1 - d <= a ? c = Y(b - (c - 2), b) : ((c = Y(a - d + 2, a + d - 1)).push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0)), c.DT_el = "span", c
		}

		function Da(a) {
			h.each({
				num: function(b) {
					return za(b, a)
				},
				"num-fmt": function(b) {
					return za(b, a, Ya)
				},
				"html-num": function(b) {
					return za(b, a, Aa)
				},
				"html-num-fmt": function(b) {
					return za(b, a, Aa, Ya)
				}
			}, function(b, c) {
				x.type.order[b + a + "-pre"] = c, b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html)
			})
		}

		function Lb(a) {
			return function() {
				var b = [ya(this[n.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
				return n.ext.internal[a].apply(this, b)
			}
		}

		function M(a) {
			return !a || !0 === a || "-" === a
		}

		function Nb(a) {
			var b = parseInt(a, 10);
			return !isNaN(b) && isFinite(a) ? b : null
		}

		function Ob(a, b) {
			return Za[b] || (Za[b] = RegExp(Qa(b), "g")), "string" == typeof a && "." !== b ? a.replace(/\./g, "").replace(Za[b], ".") : a
		}

		function $a(a, b, c) {
			var d = "string" == typeof a;
			return !!M(a) || (b && d && (a = Ob(a, b)), c && d && (a = a.replace(Ya, "")), !isNaN(parseFloat(a)) && isFinite(a))
		}

		function Pb(a, b, c) {
			return !!M(a) || ((M(a) || "string" == typeof a) && !!$a(a.replace(Aa, ""), b, c) || null)
		}

		function ja(a, b, c, d) {
			var e = [],
				f = 0,
				g = b.length;
			if(d !== k)
				for(; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
			else
				for(; f < g; f++) e.push(a[b[f]][c]);
			return e
		}

		function Y(a, b) {
			var d, c = [];
			b === k ? (b = 0, d = a) : (d = b, b = a);
			for(var e = b; e < d; e++) c.push(e);
			return c
		}

		function Qb(a) {
			for(var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
			return b
		}
		var x, s, o, u, n = function(a) {
				this.$ = function(a, b) {
					return this.api(!0).$(a, b)
				}, this._ = function(a, b) {
					return this.api(!0).rows(a, b).data()
				}, this.api = function(a) {
					return new s(a ? ya(this[x.iApiIndex]) : this)
				}, this.fnAddData = function(a, b) {
					var c = this.api(!0),
						d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
					return b !== k && !b || c.draw(), d.flatten().toArray()
				}, this.fnAdjustColumnSizing = function(a) {
					var b = this.api(!0).columns.adjust(),
						c = b.settings()[0],
						d = c.oScroll;
					a === k || a ? b.draw(!1) : "" === d.sX && "" === d.sY || la(c)
				}, this.fnClearTable = function(a) {
					var b = this.api(!0).clear();
					a !== k && !a || b.draw()
				}, this.fnClose = function(a) {
					this.api(!0).row(a).child.hide()
				}, this.fnDeleteRow = function(a, b, c) {
					var d = this.api(!0),
						e = (a = d.rows(a)).settings()[0],
						h = e.aoData[a[0][0]];
					return a.remove(), b && b.call(this, e, h), c !== k && !c || d.draw(), h
				}, this.fnDestroy = function(a) {
					this.api(!0).destroy(a)
				}, this.fnDraw = function(a) {
					this.api(!0).draw(a)
				}, this.fnFilter = function(a, b, c, d, e, h) {
					e = this.api(!0), null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h), e.draw()
				}, this.fnGetData = function(a, b) {
					var c = this.api(!0);
					if(a === k) return c.data().toArray();
					var d = a.nodeName ? a.nodeName.toLowerCase() : "";
					return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
				}, this.fnGetNodes = function(a) {
					var b = this.api(!0);
					return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray()
				}, this.fnGetPosition = function(a) {
					var b = this.api(!0),
						c = a.nodeName.toUpperCase();
					return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? [(a = b.cell(a).index()).row, a.columnVisible, a.column] : null
				}, this.fnIsOpen = function(a) {
					return this.api(!0).row(a).child.isShown()
				}, this.fnOpen = function(a, b, c) {
					return this.api(!0).row(a).child(b, c).show().child()[0]
				}, this.fnPageChange = function(a, b) {
					var c = this.api(!0).page(a);
					b !== k && !b || c.draw(!1)
				}, this.fnSetColumnVis = function(a, b, c) {
					a = this.api(!0).column(a).visible(b), c !== k && !c || a.columns.adjust().draw()
				}, this.fnSettings = function() {
					return ya(this[x.iApiIndex])
				}, this.fnSort = function(a) {
					this.api(!0).order(a).draw()
				}, this.fnSortListener = function(a, b, c) {
					this.api(!0).order.listener(a, b, c)
				}, this.fnUpdate = function(a, b, c, d, e) {
					var h = this.api(!0);
					return c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a), e !== k && !e || h.columns.adjust(), d !== k && !d || h.draw(), 0
				}, this.fnVersionCheck = x.fnVersionCheck;
				var b = this,
					c = a === k,
					d = this.length;
				for(var e in c && (a = {}), this.oApi = this.internal = x.internal, n.ext.internal) e && (this[e] = Lb(e));
				return this.each(function() {
					var i, e = {},
						g = 1 < d ? Xa(e, a, !0) : a,
						j = 0,
						m = (e = this.getAttribute("id"), !1),
						l = n.defaults,
						q = h(this);
					if("table" != this.nodeName.toLowerCase()) K(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
					else {
						eb(l), fb(l.column), J(l, l, !0), J(l.column, l.column, !0), J(l, h.extend(g, q.data()));
						var t = n.settings;
						j = 0;
						for(i = t.length; j < i; j++) {
							var o = t[j];
							if(o.nTable == this || o.nTHead && o.nTHead.parentNode == this || o.nTFoot && o.nTFoot.parentNode == this) {
								var s = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve;
								if(c || s) return o.oInstance;
								if(g.bDestroy !== k ? g.bDestroy : l.bDestroy) {
									o.oInstance.fnDestroy();
									break
								}
								return void K(o, 0, "Cannot reinitialise DataTable", 3)
							}
							if(o.sTableId == this.id) {
								t.splice(j, 1);
								break
							}
						}
						null !== e && "" !== e || (this.id = e = "DataTables_Table_" + n.ext._unique++);
						var p = h.extend(!0, {}, n.models.oSettings, {
							sDestroyWidth: q[0].style.width,
							sInstance: e,
							sTableId: e
						});
						p.nTable = this, p.oApi = b.internal, p.oInit = g, t.push(p), p.oInstance = 1 === b.length ? b : q.dataTable(), eb(g), Ca(g.oLanguage), g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]), g = Xa(h.extend(!0, {}, l), g), F(p.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")), F(p, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
							["oSearch", "oPreviousSearch"],
							["aoSearchCols", "aoPreSearchCols"],
							["iDisplayLength", "_iDisplayLength"]
						]), F(p.oScroll, g, [
							["sScrollX", "sX"],
							["sScrollXInner", "sXInner"],
							["sScrollY", "sY"],
							["bScrollCollapse", "bCollapse"]
						]), F(p.oLanguage, g, "fnInfoCallback"), z(p, "aoDrawCallback", g.fnDrawCallback, "user"), z(p, "aoServerParams", g.fnServerParams, "user"), z(p, "aoStateSaveParams", g.fnStateSaveParams, "user"), z(p, "aoStateLoadParams", g.fnStateLoadParams, "user"), z(p, "aoStateLoaded", g.fnStateLoaded, "user"), z(p, "aoRowCallback", g.fnRowCallback, "user"), z(p, "aoRowCreatedCallback", g.fnCreatedRow, "user"), z(p, "aoHeaderCallback", g.fnHeaderCallback, "user"), z(p, "aoFooterCallback", g.fnFooterCallback, "user"), z(p, "aoInitComplete", g.fnInitComplete, "user"), z(p, "aoPreDrawCallback", g.fnPreDrawCallback, "user"), p.rowIdFn = S(g.rowId), gb(p);
						var u = p.oClasses;
						h.extend(u, n.ext.classes, g.oClasses), q.addClass(u.sTable), p.iInitDisplayStart === k && (p.iInitDisplayStart = g.iDisplayStart, p._iDisplayStart = g.iDisplayStart), null !== g.iDeferLoading && (p.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), p._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, p._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
						var v = p.oLanguage;
						h.extend(!0, v, g.oLanguage), v.sUrl && (h.ajax({
							dataType: "json",
							url: v.sUrl,
							success: function(a) {
								Ca(a), J(l.oLanguage, a), h.extend(!0, v, a), ha(p)
							},
							error: function() {
								ha(p)
							}
						}), m = !0), null === g.asStripeClasses && (p.asStripeClasses = [u.sStripeOdd, u.sStripeEven]);
						e = p.asStripeClasses;
						var x = q.children("tbody").find("tr").eq(0);
						if(-1 !== h.inArray(!0, h.map(e, function(a) {
								return x.hasClass(a)
							})) && (h("tbody tr", this).removeClass(e.join(" ")), p.asDestroyStripes = e.slice()), e = [], 0 !== (t = this.getElementsByTagName("thead")).length && (ea(p.aoHeader, t[0]), e = ra(p)), null === g.aoColumns)
							for(t = [], j = 0, i = e.length; j < i; j++) t.push(null);
						else t = g.aoColumns;
						for(j = 0, i = t.length; j < i; j++) Ea(p, e ? e[j] : null);
						if(ib(p, g.aoColumnDefs, t, function(a, b) {
								ka(p, a, b)
							}), x.length) {
							function w(a, b) {
								return null !== a.getAttribute("data-" + b) ? b : null
							}
							h(x[0]).children("th, td").each(function(a, b) {
								var c = p.aoColumns[a];
								if(c.mData === a) {
									var d = w(b, "sort") || w(b, "order"),
										e = w(b, "filter") || w(b, "search");
									null === d && null === e || (c.mData = {
										_: a + ".display",
										sort: null !== d ? a + ".@data-" + d : k,
										type: null !== d ? a + ".@data-" + d : k,
										filter: null !== e ? a + ".@data-" + e : k
									}, ka(p, a))
								}
							})
						}
						var U = p.oFeatures;
						e = function() {
							if(g.aaSorting === k) {
								var a = p.aaSorting;
								for(j = 0, i = a.length; j < i; j++) a[j][1] = p.aoColumns[j].asSorting[0]
							}
							wa(p), U.bSort && z(p, "aoDrawCallback", function() {
								if(p.bSorted) {
									var a = X(p),
										b = {};
									h.each(a, function(a, c) {
										b[c.src] = c.dir
									}), r(p, null, "order", [p, a, b]), Ib(p)
								}
							}), z(p, "aoDrawCallback", function() {
								(p.bSorted || "ssp" === y(p) || U.bDeferRender) && wa(p)
							}, "sc");
							a = q.children("caption").each(function() {
								this._captionSide = h(this).css("caption-side")
							});
							var b = q.children("thead");
							if(0 === b.length && (b = h("<thead/>").appendTo(q)), p.nTHead = b[0], 0 === (b = q.children("tbody")).length && (b = h("<tbody/>").appendTo(q)), p.nTBody = b[0], 0 === (b = q.children("tfoot")).length && 0 < a.length && ("" !== p.oScroll.sX || "" !== p.oScroll.sY) && (b = h("<tfoot/>").appendTo(q)), 0 === b.length || 0 === b.children().length ? q.addClass(u.sNoFooter) : 0 < b.length && (p.nTFoot = b[0], ea(p.aoFooter, p.nTFoot)), g.aaData)
								for(j = 0; j < g.aaData.length; j++) O(p, g.aaData[j]);
							else !p.bDeferLoading && "dom" != y(p) || na(p, h(p.nTBody).children("tr"));
							p.aiDisplay = p.aiDisplayMaster.slice(), !(p.bInitialised = !0) === m && ha(p)
						};
						g.bStateSave ? (U.bStateSave = !0, z(p, "aoDrawCallback", xa, "state_save"), Jb(p, g, e)) : e()
					}
				}), b = null, this
			},
			Za = {},
			Mb = /[\r\n]/g,
			Aa = /<.*?>/g,
			Zb = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
			$b = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
			Ya = /[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfkÉƒÎ]/gi,
			D = function(a, b, c) {
				var d = [],
					e = 0,
					f = a.length;
				if(c !== k)
					for(; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
				else
					for(; e < f; e++) a[e] && d.push(a[e][b]);
				return d
			},
			qa = function(a) {
				var b;
				a: {
					if(!(a.length < 2))
						for(var c = (b = a.slice().sort())[0], d = 1, e = b.length; d < e; d++) {
							if(b[d] === c) {
								b = !1;
								break a
							}
							c = b[d]
						}
					b = !0
				}
				if(b) return a.slice();
				b = [];
				e = a.length;
				var f, g = 0;
				d = 0;
				a: for(; d < e; d++) {
					for(c = a[d], f = 0; f < g; f++)
						if(b[f] === c) continue a;
					b.push(c), g++
				}
				return b
			};
		n.util = {
			throttle: function(a, b) {
				var d, e, c = b !== k ? b : 200;
				return function() {
					var b = this,
						g = +new Date,
						j = arguments;
					d && g < d + c ? (clearTimeout(e), e = setTimeout(function() {
						d = k, a.apply(b, j)
					}, c)) : (d = g, a.apply(b, j))
				}
			},
			escapeRegex: function(a) {
				return a.replace($b, "\\$1")
			}
		};
		var A = function(a, b, c) {
				a[b] !== k && (a[c] = a[b])
			},
			ca = /\[.*?\]$/,
			W = /\(\)$/,
			Qa = n.util.escapeRegex,
			va = h("<div>")[0],
			Wb = va.textContent !== k,
			Yb = /<.*?>/g,
			Oa = n.util.throttle,
			Rb = [],
			w = Array.prototype;
		s = function(a, b) {
			if(!(this instanceof s)) return new s(a, b);

			function d(a) {
				(a = function(a) {
					var b, c, d = n.settings,
						e = h.map(d, function(a) {
							return a.nTable
						});
					return a ? a.nTable && a.oApi ? [a] : a.nodeName && "table" === a.nodeName.toLowerCase() ? -1 !== (b = h.inArray(a, e)) ? [d[b]] : null : a && "function" == typeof a.settings ? a.settings().toArray() : ("string" == typeof a ? c = h(a) : a instanceof h && (c = a), c ? c.map(function() {
						return -1 !== (b = h.inArray(this, e)) ? d[b] : null
					}).toArray() : void 0) : []
				}(a)) && (c = c.concat(a))
			}
			var c = [];
			if(h.isArray(a))
				for(var e = 0, f = a.length; e < f; e++) d(a[e]);
			else d(a);
			this.context = qa(c), b && h.merge(this, b), this.selector = {
				rows: null,
				cols: null,
				opts: null
			}, s.extend(this, this, Rb)
		}, n.Api = s, h.extend(s.prototype, {
			any: function() {
				return 0 !== this.count()
			},
			concat: w.concat,
			context: [],
			count: function() {
				return this.flatten().length
			},
			each: function(a) {
				for(var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
				return this
			},
			eq: function(a) {
				var b = this.context;
				return b.length > a ? new s(b[a], this[a]) : null
			},
			filter: function(a) {
				var b = [];
				if(w.filter) b = w.filter.call(this, a, this);
				else
					for(var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
				return new s(this.context, b)
			},
			flatten: function() {
				var a = [];
				return new s(this.context, a.concat.apply(a, this.toArray()))
			},
			join: w.join,
			indexOf: w.indexOf || function(a, b) {
				for(var c = b || 0, d = this.length; c < d; c++)
					if(this[c] === a) return c;
				return -1
			},
			iterator: function(a, b, c, d) {
				var f, g, j, h, m, n, o, e = [],
					l = this.context,
					u = this.selector;
				for("string" == typeof a && (d = c, c = b, b = a, a = !1), g = 0, j = l.length; g < j; g++) {
					var r = new s(l[g]);
					if("table" === b)(f = c.call(r, l[g], g)) !== k && e.push(f);
					else if("columns" === b || "rows" === b)(f = c.call(r, l[g], this[g], g)) !== k && e.push(f);
					else if("column" === b || "column-rows" === b || "row" === b || "cell" === b)
						for(o = this[g], "column-rows" === b && (n = Ba(l[g], u.opts)), h = 0, m = o.length; h < m; h++) f = o[h], (f = "cell" === b ? c.call(r, l[g], f.row, f.column, g, h) : c.call(r, l[g], f, g, h, n)) !== k && e.push(f)
				}
				return e.length || d ? ((b = (a = new s(l, a ? e.concat.apply([], e) : e)).selector).rows = u.rows, b.cols = u.cols, b.opts = u.opts, a) : this
			},
			lastIndexOf: w.lastIndexOf || function(a, b) {
				return this.indexOf.apply(this.toArray.reverse(), arguments)
			},
			length: 0,
			map: function(a) {
				var b = [];
				if(w.map) b = w.map.call(this, a, this);
				else
					for(var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
				return new s(this.context, b)
			},
			pluck: function(a) {
				return this.map(function(b) {
					return b[a]
				})
			},
			pop: w.pop,
			push: w.push,
			reduce: w.reduce || function(a, b) {
				return hb(this, a, b, 0, this.length, 1)
			},
			reduceRight: w.reduceRight || function(a, b) {
				return hb(this, a, b, this.length - 1, -1, -1)
			},
			reverse: w.reverse,
			selector: null,
			shift: w.shift,
			slice: function() {
				return new s(this.context, this)
			},
			sort: w.sort,
			splice: w.splice,
			toArray: function() {
				return w.slice.call(this)
			},
			to$: function() {
				return h(this)
			},
			toJQuery: function() {
				return h(this)
			},
			unique: function() {
				return new s(this.context, qa(this))
			},
			unshift: w.unshift
		}), s.extend = function(a, b, c) {
			if(c.length && b && (b instanceof s || b.__dt_wrapper)) {
				function g(a, b, c) {
					return function() {
						var d = b.apply(a, arguments);
						return s.extend(d, d, c.methodExt), d
					}
				}
				var d, e, f;
				for(d = 0, e = c.length; d < e; d++) b[(f = c[d]).name] = "function" == typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, s.extend(a, b[f.name], f.propExt)
			}
		}, s.register = o = function(a, b) {
			if(h.isArray(a))
				for(var c = 0, d = a.length; c < d; c++) s.register(a[c], b);
			else {
				var g, j, e = a.split("."),
					f = Rb;
				for(c = 0, d = e.length; c < d; c++) {
					var i;
					g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
					a: {
						i = 0;
						for(var m = f.length; i < m; i++)
							if(f[i].name === g) {
								i = f[i];
								break a
							}
						i = null
					}
					i || (i = {
						name: g,
						val: {},
						methodExt: [],
						propExt: []
					}, f.push(i)), c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt
				}
			}
		}, s.registerPlural = u = function(a, b, c) {
			s.register(a, c), s.register(b, function() {
				var a = c.apply(this, arguments);
				return a === this ? this : a instanceof s ? a.length ? h.isArray(a[0]) ? new s(a.context, a[0]) : a[0] : k : a
			})
		}, o("tables()", function(a) {
			var b;
			if(a) {
				b = s;
				var c = this.context;
				if("number" == typeof a) a = [c[a]];
				else {
					var d = h.map(c, function(a) {
						return a.nTable
					});
					a = h(d).filter(a).map(function() {
						var a = h.inArray(this, d);
						return c[a]
					}).toArray()
				}
				b = new b(a)
			} else b = this;
			return b
		}), o("table()", function(a) {
			var b = (a = this.tables(a)).context;
			return b.length ? new s(b[0]) : a
		}), u("tables().nodes()", "table().node()", function() {
			return this.iterator("table", function(a) {
				return a.nTable
			}, 1)
		}), u("tables().body()", "table().body()", function() {
			return this.iterator("table", function(a) {
				return a.nTBody
			}, 1)
		}), u("tables().header()", "table().header()", function() {
			return this.iterator("table", function(a) {
				return a.nTHead
			}, 1)
		}), u("tables().footer()", "table().footer()", function() {
			return this.iterator("table", function(a) {
				return a.nTFoot
			}, 1)
		}), u("tables().containers()", "table().container()", function() {
			return this.iterator("table", function(a) {
				return a.nTableWrapper
			}, 1)
		}), o("draw()", function(a) {
			return this.iterator("table", function(b) {
				"page" === a ? P(b) : ("string" == typeof a && (a = "full-hold" !== a), T(b, !1 === a))
			})
		}), o("page()", function(a) {
			return a === k ? this.page.info().page : this.iterator("table", function(b) {
				Ta(b, a)
			})
		}), o("page.info()", function() {
			if(0 === this.context.length) return k;
			var a = this.context[0],
				b = a._iDisplayStart,
				c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
				d = a.fnRecordsDisplay(),
				e = -1 === c;
			return {
				page: e ? 0 : Math.floor(b / c),
				pages: e ? 1 : Math.ceil(d / c),
				start: b,
				end: a.fnDisplayEnd(),
				length: c,
				recordsTotal: a.fnRecordsTotal(),
				recordsDisplay: d,
				serverSide: "ssp" === y(a)
			}
		}), o("page.len()", function(a) {
			return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function(b) {
				Ra(b, a)
			})
		});

		function Sb(a, b, c) {
			if(c) {
				var d = new s(a);
				d.one("draw", function() {
					c(d.ajax.json())
				})
			}
			if("ssp" == y(a)) T(a, b);
			else {
				C(a, !0);
				var e = a.jqXHR;
				e && 4 !== e.readyState && e.abort(), sa(a, [], function(c) {
					oa(a);
					for(var d = 0, e = (c = ta(a, c)).length; d < e; d++) O(a, c[d]);
					T(a, b), C(a, !1)
				})
			}
		}
		o("ajax.json()", function() {
			var a = this.context;
			if(0 < a.length) return a[0].json
		}), o("ajax.params()", function() {
			var a = this.context;
			if(0 < a.length) return a[0].oAjaxData
		}), o("ajax.reload()", function(a, b) {
			return this.iterator("table", function(c) {
				Sb(c, !1 === b, a)
			})
		}), o("ajax.url()", function(a) {
			var b = this.context;
			return a === k ? 0 === b.length ? k : (b = b[0]).ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource : this.iterator("table", function(b) {
				h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
			})
		}), o("ajax.url().load()", function(a, b) {
			return this.iterator("table", function(c) {
				Sb(c, !1 === b, a)
			})
		});

		function ab(a, b, c, d, e) {
			var g, j, i, m, l, n, f = [];
			for(i = typeof b, b && "string" !== i && "function" !== i && b.length !== k || (b = [b]), i = 0, m = b.length; i < m; i++)
				for(l = 0, n = (j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") : [b[i]]).length; l < n; l++)(g = c("string" == typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g));
			if((a = x.selector[a]).length)
				for(i = 0, m = a.length; i < m; i++) f = a[i](d, e, f);
			return qa(f)
		}

		function bb(a) {
			return(a = a || {}).filter && a.search === k && (a.search = a.filter), h.extend({
				search: "none",
				order: "current",
				page: "all"
			}, a)
		}

		function cb(a) {
			for(var b = 0, c = a.length; b < c; b++)
				if(0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
			return a.length = 0, a
		}
		var Ba = function(a, b) {
			var c, d, e, f = [],
				g = a.aiDisplay;
			e = a.aiDisplayMaster;
			var j = b.search;
			if(c = b.order, d = b.page, "ssp" == y(a)) return "removed" === j ? [] : Y(0, e.length);
			if("current" == d)
				for(c = a._iDisplayStart, d = a.fnDisplayEnd(); c < d; c++) f.push(g[c]);
			else if("current" == c || "applied" == c) {
				if("none" == j) f = e.slice();
				else if("applied" == j) f = g.slice();
				else if("removed" == j) {
					var i = {};
					for(c = 0, d = g.length; c < d; c++) i[g[c]] = null;
					f = h.map(e, function(a) {
						return i.hasOwnProperty(a) ? null : a
					})
				}
			} else if("index" == c || "original" == c)
				for(c = 0, d = a.aoData.length; c < d; c++) "none" == j ? f.push(c) : (-1 === (e = h.inArray(c, g)) && "removed" == j || 0 <= e && "applied" == j) && f.push(c);
			return f
		};
		o("rows()", function(a, b) {
			a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
			b = bb(b);
			var c = this.iterator("table", function(c) {
				var f, e = b;
				return ab("row", a, function(a) {
					var b = Nb(a),
						i = c.aoData;
					if(null !== b && !e) return [b];
					if(f = f || Ba(c, e), null !== b && -1 !== h.inArray(b, f)) return [b];
					if(null === a || a === k || "" === a) return f;
					if("function" == typeof a) return h.map(f, function(b) {
						var c = i[b];
						return a(b, c._aData, c.nTr) ? b : null
					});
					if(a.nodeName) {
						b = a._DT_RowIndex;
						var m = a._DT_CellIndex;
						return b !== k ? i[b] && i[b].nTr === a ? [b] : [] : m ? i[m.row] && i[m.row].nTr === a ? [m.row] : [] : (b = h(a).closest("*[data-dt-row]")).length ? [b.data("dt-row")] : []
					}
					return "string" == typeof a && "#" === a.charAt(0) && (b = c.aIds[a.replace(/^#/, "")]) !== k ? [b.idx] : (b = Qb(ja(c.aoData, f, "nTr")), h(b).filter(a).map(function() {
						return this._DT_RowIndex
					}).toArray())
				}, c, e)
			}, 1);
			return c.selector.rows = a, c.selector.opts = b, c
		}), o("rows().nodes()", function() {
			return this.iterator("row", function(a, b) {
				return a.aoData[b].nTr || k
			}, 1)
		}), o("rows().data()", function() {
			return this.iterator(!0, "rows", function(a, b) {
				return ja(a.aoData, b, "_aData")
			}, 1)
		}), u("rows().cache()", "row().cache()", function(a) {
			return this.iterator("row", function(b, c) {
				var d = b.aoData[c];
				return "search" === a ? d._aFilterData : d._aSortData
			}, 1)
		}), u("rows().invalidate()", "row().invalidate()", function(a) {
			return this.iterator("row", function(b, c) {
				da(b, c, a)
			})
		}), u("rows().indexes()", "row().index()", function() {
			return this.iterator("row", function(a, b) {
				return b
			}, 1)
		}), u("rows().ids()", "row().id()", function(a) {
			for(var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
				for(var f = 0, g = this[d].length; f < g; f++) {
					var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
					b.push((!0 === a ? "#" : "") + h)
				}
			return new s(c, b)
		}), u("rows().remove()", "row().remove()", function() {
			var a = this;
			return this.iterator("row", function(b, c, d) {
				var g, h, i, m, l, e = b.aoData,
					f = e[c];
				for(e.splice(c, 1), g = 0, h = e.length; g < h; g++)
					if(l = (i = e[g]).anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l)
						for(i = 0, m = l.length; i < m; i++) l[i]._DT_CellIndex.row = g;
				pa(b.aiDisplayMaster, c), pa(b.aiDisplay, c), pa(a[d], c, !1), 0 < b._iRecordsDisplay && b._iRecordsDisplay--, Sa(b), (c = b.rowIdFn(f._aData)) !== k && delete b.aIds[c]
			}), this.iterator("table", function(a) {
				for(var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c
			}), this
		}), o("rows.add()", function(a) {
			var b = this.iterator("table", function(b) {
					var c, f, g, h = [];
					for(f = 0, g = a.length; f < g; f++)(c = a[f]).nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(na(b, c)[0]) : h.push(O(b, c));
					return h
				}, 1),
				c = this.rows(-1);
			return c.pop(), h.merge(c, b), c
		}), o("row()", function(a, b) {
			return cb(this.rows(a, b))
		}), o("row().data()", function(a) {
			var b = this.context;
			if(a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
			var c = b[0].aoData[this[0]];
			return c._aData = a, h.isArray(a) && c.nTr.id && N(b[0].rowId)(a, c.nTr.id), da(b[0], this[0], "data"), this
		}), o("row().node()", function() {
			var a = this.context;
			return a.length && this.length && a[0].aoData[this[0]].nTr || null
		}), o("row.add()", function(a) {
			a instanceof h && a.length && (a = a[0]);
			var b = this.iterator("table", function(b) {
				return a.nodeName && "TR" === a.nodeName.toUpperCase() ? na(b, a)[0] : O(b, a)
			});
			return this.row(b[0])
		});

		function db(a, b) {
			var c = a.context;
			c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details && (c._details.remove(), c._detailsShow = k, c._details = k)
		}

		function Tb(a, b) {
			var c = a.context;
			if(c.length && a.length) {
				var d = c[0].aoData[a[0]];
				if(d._details) {
					(d._detailsShow = b) ? d._details.insertAfter(d.nTr): d._details.detach();
					var e = c[0],
						f = new s(e),
						g = e.aoData;
					f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"), 0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function(a, b) {
						e === b && f.rows({
							page: "current"
						}).eq(0).each(function(a) {
							(a = g[a])._detailsShow && a._details.insertAfter(a.nTr)
						})
					}), f.on("column-visibility.dt.DT_details", function(a, b) {
						if(e === b)
							for(var c, d = V(b), f = 0, h = g.length; f < h; f++)(c = g[f])._details && c._details.children("td[colspan]").attr("colspan", d)
					}), f.on("destroy.dt.DT_details", function(a, b) {
						if(e === b)
							for(var c = 0, d = g.length; c < d; c++) g[c]._details && db(f, c)
					}))
				}
			}
		}
		o("row().child()", function(a, b) {
			var c = this.context;
			if(a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;
			if(!0 === a) this.child.show();
			else if(!1 === a) db(this);
			else if(c.length && this.length) {
				var d = c[0],
					e = (c = c[0].aoData[this[0]], []),
					f = function(a, b) {
						if(h.isArray(a) || a instanceof h)
							for(var c = 0, k = a.length; c < k; c++) f(a[c], b);
						else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = V(d), e.push(c[0]))
					};
				f(a, b), c._details && c._details.detach(), c._details = h(e), c._detailsShow && c._details.insertAfter(c.nTr)
			}
			return this
		}), o(["row().child.show()", "row().child().show()"], function() {
			return Tb(this, !0), this
		}), o(["row().child.hide()", "row().child().hide()"], function() {
			return Tb(this, !1), this
		}), o(["row().child.remove()", "row().child().remove()"], function() {
			return db(this), this
		}), o("row().child.isShown()", function() {
			var a = this.context;
			return a.length && this.length && a[0].aoData[this[0]]._detailsShow || !1
		});

		function Ub(a, b, c, d, e) {
			c = [], d = 0;
			for(var f = e.length; d < f; d++) c.push(B(a, e[d], b));
			return c
		}
		var bc = /^([^:]+):(name|visIdx|visible)$/;
		o("columns()", function(a, b) {
			a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
			b = bb(b);
			var c = this.iterator("table", function(c) {
				var e = a,
					f = b,
					g = c.aoColumns,
					j = D(g, "sName"),
					i = D(g, "nTh");
				return ab("column", e, function(a) {
					var b = Nb(a);
					if("" === a) return Y(g.length);
					if(null !== b) return [0 <= b ? b : g.length + b];
					if("function" == typeof a) {
						var e = Ba(c, f);
						return h.map(g, function(b, f) {
							return a(f, Ub(c, f, 0, 0, e), i[f]) ? f : null
						})
					}
					var k = "string" == typeof a ? a.match(bc) : "";
					if(k) switch(k[2]) {
						case "visIdx":
						case "visible":
							if((b = parseInt(k[1], 10)) < 0) {
								var n = h.map(g, function(a, b) {
									return a.bVisible ? b : null
								});
								return [n[n.length + b]]
							}
							return [aa(c, b)];
						case "name":
							return h.map(j, function(a, b) {
								return a === k[1] ? b : null
							});
						default:
							return []
					}
					return a.nodeName && a._DT_CellIndex ? [a._DT_CellIndex.column] : (b = h(i).filter(a).map(function() {
						return h.inArray(this, i)
					}).toArray()).length || !a.nodeName ? b : (b = h(a).closest("*[data-dt-column]")).length ? [b.data("dt-column")] : []
				}, c, f)
			}, 1);
			return c.selector.cols = a, c.selector.opts = b, c
		}), u("columns().header()", "column().header()", function() {
			return this.iterator("column", function(a, b) {
				return a.aoColumns[b].nTh
			}, 1)
		}), u("columns().footer()", "column().footer()", function() {
			return this.iterator("column", function(a, b) {
				return a.aoColumns[b].nTf
			}, 1)
		}), u("columns().data()", "column().data()", function() {
			return this.iterator("column-rows", Ub, 1)
		}), u("columns().dataSrc()", "column().dataSrc()", function() {
			return this.iterator("column", function(a, b) {
				return a.aoColumns[b].mData
			}, 1)
		}), u("columns().cache()", "column().cache()", function(a) {
			return this.iterator("column-rows", function(b, c, d, e, f) {
				return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
			}, 1)
		}), u("columns().nodes()", "column().nodes()", function() {
			return this.iterator("column-rows", function(a, b, c, d, e) {
				return ja(a.aoData, e, "anCells", b)
			}, 1)
		}), u("columns().visible()", "column().visible()", function(a, b) {
			var c = this.iterator("column", function(b, c) {
				if(a === k) return b.aoColumns[c].bVisible;
				var i, m, l, f = b.aoColumns,
					g = f[c],
					j = b.aoData;
				if(a !== k && g.bVisible !== a) {
					if(a) {
						var n = h.inArray(!0, D(f, "bVisible"), c + 1);
						for(i = 0, m = j.length; i < m; i++) l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[n] || null)
					} else h(D(b.aoData, "anCells", c)).detach();
					g.bVisible = a, fa(b, b.aoHeader), fa(b, b.aoFooter), b.aiDisplay.length || h(b.nTBody).find("td[colspan]").attr("colspan", V(b)), xa(b)
				}
			});
			return a !== k && (this.iterator("column", function(c, e) {
				r(c, null, "column-visibility", [c, e, a, b])
			}), b !== k && !b || this.columns.adjust()), c
		}), u("columns().indexes()", "column().index()", function(a) {
			return this.iterator("column", function(b, c) {
				return "visible" === a ? ba(b, c) : c
			}, 1)
		}), o("columns.adjust()", function() {
			return this.iterator("table", function(a) {
				$(a)
			}, 1)
		}), o("column.index()", function(a, b) {
			if(0 !== this.context.length) {
				var c = this.context[0];
				if("fromVisible" === a || "toData" === a) return aa(c, b);
				if("fromData" === a || "toVisible" === a) return ba(c, b)
			}
		}), o("column()", function(a, b) {
			return cb(this.columns(a, b))
		}), o("cells()", function(a, b, c) {
			if(h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null)), h.isPlainObject(b) && (c = b, b = null), null === b || b === k) return this.iterator("table", function(b) {
				var l, n, o, u, s, r, v, d = a,
					e = bb(c),
					f = b.aoData,
					g = Ba(b, e),
					j = Qb(ja(f, g, "anCells")),
					i = h([].concat.apply([], j)),
					m = b.aoColumns.length;
				return ab("cell", d, function(a) {
					var c = "function" == typeof a;
					if(null === a || a === k || c) {
						for(n = [], o = 0, u = g.length; o < u; o++)
							for(l = g[o], s = 0; s < m; s++) r = {
								row: l,
								column: s
							}, c ? (v = f[l], a(r, B(b, l, s), v.anCells ? v.anCells[s] : null) && n.push(r)) : n.push(r);
						return n
					}
					return h.isPlainObject(a) ? a.column !== k && a.row !== k && -1 !== h.inArray(a.row, g) ? [a] : [] : (c = i.filter(a).map(function(a, b) {
						return {
							row: b._DT_CellIndex.row,
							column: b._DT_CellIndex.column
						}
					}).toArray()).length || !a.nodeName ? c : (v = h(a).closest("*[data-dt-row]")).length ? [{
						row: v.data("dt-row"),
						column: v.data("dt-column")
					}] : []
				}, b, e)
			});
			var f, g, j, i, m, d = this.columns(b),
				e = this.rows(a);
			this.iterator("table", function(a, b) {
				for(f = [], g = 0, j = e[b].length; g < j; g++)
					for(i = 0, m = d[b].length; i < m; i++) f.push({
						row: e[b][g],
						column: d[b][i]
					})
			}, 1);
			var l = this.cells(f, c);
			return h.extend(l.selector, {
				cols: b,
				rows: a,
				opts: c
			}), l
		}), u("cells().nodes()", "cell().node()", function() {
			return this.iterator("cell", function(a, b, c) {
				return(a = a.aoData[b]) && a.anCells ? a.anCells[c] : k
			}, 1)
		}), o("cells().data()", function() {
			return this.iterator("cell", function(a, b, c) {
				return B(a, b, c)
			}, 1)
		}), u("cells().cache()", "cell().cache()", function(a) {
			return a = "search" === a ? "_aFilterData" : "_aSortData", this.iterator("cell", function(b, c, d) {
				return b.aoData[c][a][d]
			}, 1)
		}), u("cells().render()", "cell().render()", function(a) {
			return this.iterator("cell", function(b, c, d) {
				return B(b, c, d, a)
			}, 1)
		}), u("cells().indexes()", "cell().index()", function() {
			return this.iterator("cell", function(a, b, c) {
				return {
					row: b,
					column: c,
					columnVisible: ba(a, c)
				}
			}, 1)
		}), u("cells().invalidate()", "cell().invalidate()", function(a) {
			return this.iterator("cell", function(b, c, d) {
				da(b, c, a, d)
			})
		}), o("cell()", function(a, b, c) {
			return cb(this.cells(a, b, c))
		}), o("cell().data()", function(a) {
			var b = this.context,
				c = this[0];
			return a === k ? b.length && c.length ? B(b[0], c[0].row, c[0].column) : k : (jb(b[0], c[0].row, c[0].column, a), da(b[0], c[0].row, "data", c[0].column), this)
		}), o("order()", function(a, b) {
			var c = this.context;
			return a === k ? 0 !== c.length ? c[0].aaSorting : k : ("number" == typeof a ? a = [
				[a, b]
			] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments)), this.iterator("table", function(b) {
				b.aaSorting = a.slice()
			}))
		}), o("order.listener()", function(a, b, c) {
			return this.iterator("table", function(d) {
				Ma(d, a, b, c)
			})
		}), o("order.fixed()", function(a) {
			if(a) return this.iterator("table", function(b) {
				b.aaSortingFixed = h.extend(!0, {}, a)
			});
			var b = (b = this.context).length ? b[0].aaSortingFixed : k;
			return h.isArray(b) ? {
				pre: b
			} : b
		}), o(["columns().order()", "column().order()"], function(a) {
			var b = this;
			return this.iterator("table", function(c, d) {
				var e = [];
				h.each(b[d], function(b, c) {
					e.push([c, a])
				}), c.aaSorting = e
			})
		}), o("search()", function(a, b, c, d) {
			var e = this.context;
			return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function(e) {
				e.oFeatures.bFilter && ga(e, h.extend({}, e.oPreviousSearch, {
					sSearch: a + "",
					bRegex: null !== b && b,
					bSmart: null === c || c,
					bCaseInsensitive: null === d || d
				}), 1)
			})
		}), u("columns().search()", "column().search()", function(a, b, c, d) {
			return this.iterator("column", function(e, f) {
				var g = e.aoPreSearchCols;
				if(a === k) return g[f].sSearch;
				e.oFeatures.bFilter && (h.extend(g[f], {
					sSearch: a + "",
					bRegex: null !== b && b,
					bSmart: null === c || c,
					bCaseInsensitive: null === d || d
				}), ga(e, e.oPreviousSearch, 1))
			})
		}), o("state()", function() {
			return this.context.length ? this.context[0].oSavedState : null
		}), o("state.clear()", function() {
			return this.iterator("table", function(a) {
				a.fnStateSaveCallback.call(a.oInstance, a, {})
			})
		}), o("state.loaded()", function() {
			return this.context.length ? this.context[0].oLoadedState : null
		}), o("state.save()", function() {
			return this.iterator("table", function(a) {
				xa(a)
			})
		}), n.versionCheck = n.fnVersionCheck = function(a) {
			for(var c, d, b = n.version.split("."), e = 0, f = (a = a.split(".")).length; e < f; e++)
				if((c = parseInt(b[e], 10) || 0) !== (d = parseInt(a[e], 10) || 0)) return d < c;
			return !0
		}, n.isDataTable = n.fnIsDataTable = function(a) {
			var b = h(a).get(0),
				c = !1;
			return a instanceof n.Api || (h.each(n.settings, function(a, e) {
				var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
					g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null;
				e.nTable !== b && f !== b && g !== b || (c = !0)
			}), c)
		}, n.tables = n.fnTables = function(a) {
			var b = !1;
			h.isPlainObject(a) && (b = a.api, a = a.visible);
			var c = h.map(n.settings, function(b) {
				if(!a || a && h(b.nTable).is(":visible")) return b.nTable
			});
			return b ? new s(c) : c
		}, n.camelToHungarian = J, o("$()", function(a, b) {
			var c = this.rows(b).nodes();
			c = h(c);
			return h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
		}), h.each(["on", "one", "off"], function(a, b) {
			o(b + "()", function() {
				var a = Array.prototype.slice.call(arguments);
				a[0] = h.map(a[0].split(/\s/), function(a) {
					return a.match(/\.dt\b/) ? a : a + ".dt"
				}).join(" ");
				var d = h(this.tables().nodes());
				return d[b].apply(d, a), this
			})
		}), o("clear()", function() {
			return this.iterator("table", function(a) {
				oa(a)
			})
		}), o("settings()", function() {
			return new s(this.context, this.context)
		}), o("init()", function() {
			var a = this.context;
			return a.length ? a[0].oInit : null
		}), o("data()", function() {
			return this.iterator("table", function(a) {
				return D(a.aoData, "_aData")
			}).flatten()
		}), o("destroy()", function(a) {
			return a = a || !1, this.iterator("table", function(b) {
				var o, c = b.nTableWrapper.parentNode,
					d = b.oClasses,
					e = b.nTable,
					f = b.nTBody,
					g = b.nTHead,
					j = b.nTFoot,
					i = h(e),
					k = (f = h(f), h(b.nTableWrapper)),
					l = h.map(b.aoData, function(a) {
						return a.nTr
					});
				b.bDestroying = !0, r(b, "aoDestroyCallback", "destroy", [b]), a || new s(b).columns().visible(!0), k.off(".DT").find(":not(tbody *)").off(".DT"), h(E).off(".DT-" + b.sInstance), e != g.parentNode && (i.children("thead").detach(), i.append(g)), j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j)), b.aaSorting = [], b.aaSortingFixed = [], wa(b), h(l).removeClass(b.asStripeClasses.join(" ")), h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone), f.children().detach(), f.append(l), i[g = a ? "remove" : "detach"](), k[g](), !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable), (o = b.asDestroyStripes.length) && f.children().each(function(a) {
					h(this).addClass(b.asDestroyStripes[a % o])
				})), -1 !== (c = h.inArray(b, n.settings)) && n.settings.splice(c, 1)
			})
		}), h.each(["column", "row", "cell"], function(a, b) {
			o(b + "s().every()", function(a) {
				var d = this.selector.opts,
					e = this;
				return this.iterator(b, function(f, g, h, i, m) {
					a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, m)
				})
			})
		}), o("i18n()", function(a, b, c) {
			var d = this.context[0];
			return(a = S(a)(d.oLanguage)) === k && (a = b), c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._), a.replace("%d", c)
		}), n.version = "1.10.18", n.settings = [], n.models = {}, n.models.oSearch = {
			bCaseInsensitive: !0,
			sSearch: "",
			bRegex: !1,
			bSmart: !0
		}, n.models.oRow = {
			nTr: null,
			anCells: null,
			_aData: [],
			_aSortData: null,
			_aFilterData: null,
			_sFilterRow: null,
			_sRowStripe: "",
			src: null,
			idx: -1
		}, n.models.oColumn = {
			idx: null,
			aDataSort: null,
			asSorting: null,
			bSearchable: null,
			bSortable: null,
			bVisible: null,
			_sManualType: null,
			_bAttrSrc: !1,
			fnCreatedCell: null,
			fnGetData: null,
			fnSetData: null,
			mData: null,
			mRender: null,
			nTh: null,
			nTf: null,
			sClass: null,
			sContentPadding: null,
			sDefaultContent: null,
			sName: null,
			sSortDataType: "std",
			sSortingClass: null,
			sSortingClassJUI: null,
			sTitle: null,
			sType: null,
			sWidth: null,
			sWidthOrig: null
		}, n.defaults = {
			aaData: null,
			aaSorting: [
				[0, "asc"]
			],
			aaSortingFixed: [],
			ajax: null,
			aLengthMenu: [10, 25, 50, 100],
			aoColumns: null,
			aoColumnDefs: null,
			aoSearchCols: [],
			asStripeClasses: null,
			bAutoWidth: !0,
			bDeferRender: !1,
			bDestroy: !1,
			bFilter: !0,
			bInfo: !0,
			bLengthChange: !0,
			bPaginate: !0,
			bProcessing: !1,
			bRetrieve: !1,
			bScrollCollapse: !1,
			bServerSide: !1,
			bSort: !0,
			bSortMulti: !0,
			bSortCellsTop: !1,
			bSortClasses: !0,
			bStateSave: !1,
			fnCreatedRow: null,
			fnDrawCallback: null,
			fnFooterCallback: null,
			fnFormatNumber: function(a) {
				return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
			},
			fnHeaderCallback: null,
			fnInfoCallback: null,
			fnInitComplete: null,
			fnPreDrawCallback: null,
			fnRowCallback: null,
			fnServerData: null,
			fnServerParams: null,
			fnStateLoadCallback: function(a) {
				try {
					return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
				} catch(b) {}
			},
			fnStateLoadParams: null,
			fnStateLoaded: null,
			fnStateSaveCallback: function(a, b) {
				try {
					(-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
				} catch(c) {}
			},
			fnStateSaveParams: null,
			iStateDuration: 7200,
			iDeferLoading: null,
			iDisplayLength: 10,
			iDisplayStart: 0,
			iTabIndex: 0,
			oClasses: {},
			oLanguage: {
				oAria: {
					sSortAscending: ": activate to sort column ascending",
					sSortDescending: ": activate to sort column descending"
				},
				oPaginate: {
					sFirst: "First",
					sLast: "Last",
					sNext: "Next",
					sPrevious: "Previous"
				},
				sEmptyTable: "No data available in table",
				sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
				sInfoEmpty: "Showing 0 to 0 of 0 entries",
				sInfoFiltered: "(filtered from _MAX_ total entries)",
				sInfoPostFix: "",
				sDecimal: "",
				sThousands: ",",
				sLengthMenu: "Show _MENU_ entries",
				sLoadingRecords: "Loading...",
				sProcessing: "Processing...",
				sSearch: "Search:",
				sSearchPlaceholder: "",
				sUrl: "",
				sZeroRecords: "No matching records found"
			},
			oSearch: h.extend({}, n.models.oSearch),
			sAjaxDataProp: "data",
			sAjaxSource: null,
			sDom: "lfrtip",
			searchDelay: null,
			sPaginationType: "simple_numbers",
			sScrollX: "",
			sScrollXInner: "",
			sScrollY: "",
			sServerMethod: "GET",
			renderer: null,
			rowId: "DT_RowId"
		}, Z(n.defaults), n.defaults.column = {
			aDataSort: null,
			iDataSort: -1,
			asSorting: ["asc", "desc"],
			bSearchable: !0,
			bSortable: !0,
			bVisible: !0,
			fnCreatedCell: null,
			mData: null,
			mRender: null,
			sCellType: "td",
			sClass: "",
			sContentPadding: "",
			sDefaultContent: null,
			sName: "",
			sSortDataType: "std",
			sTitle: null,
			sType: null,
			sWidth: null
		}, Z(n.defaults.column), n.models.oSettings = {
			oFeatures: {
				bAutoWidth: null,
				bDeferRender: null,
				bFilter: null,
				bInfo: null,
				bLengthChange: null,
				bPaginate: null,
				bProcessing: null,
				bServerSide: null,
				bSort: null,
				bSortMulti: null,
				bSortClasses: null,
				bStateSave: null
			},
			oScroll: {
				bCollapse: null,
				iBarWidth: 0,
				sX: null,
				sXInner: null,
				sY: null
			},
			oLanguage: {
				fnInfoCallback: null
			},
			oBrowser: {
				bScrollOversize: !1,
				bScrollbarLeft: !1,
				bBounding: !1,
				barWidth: 0
			},
			ajax: null,
			aanFeatures: [],
			aoData: [],
			aiDisplay: [],
			aiDisplayMaster: [],
			aIds: {},
			aoColumns: [],
			aoHeader: [],
			aoFooter: [],
			oPreviousSearch: {},
			aoPreSearchCols: [],
			aaSorting: null,
			aaSortingFixed: [],
			asStripeClasses: null,
			asDestroyStripes: [],
			sDestroyWidth: 0,
			aoRowCallback: [],
			aoHeaderCallback: [],
			aoFooterCallback: [],
			aoDrawCallback: [],
			aoRowCreatedCallback: [],
			aoPreDrawCallback: [],
			aoInitComplete: [],
			aoStateSaveParams: [],
			aoStateLoadParams: [],
			aoStateLoaded: [],
			sTableId: "",
			nTable: null,
			nTHead: null,
			nTFoot: null,
			nTBody: null,
			nTableWrapper: null,
			bDeferLoading: !1,
			bInitialised: !1,
			aoOpenRows: [],
			sDom: null,
			searchDelay: null,
			sPaginationType: "two_button",
			iStateDuration: 0,
			aoStateSave: [],
			aoStateLoad: [],
			oSavedState: null,
			oLoadedState: null,
			sAjaxSource: null,
			sAjaxDataProp: null,
			bAjaxDataGet: !0,
			jqXHR: null,
			json: k,
			oAjaxData: k,
			fnServerData: null,
			aoServerParams: [],
			sServerMethod: null,
			fnFormatNumber: null,
			aLengthMenu: null,
			iDraw: 0,
			bDrawing: !1,
			iDrawError: -1,
			_iDisplayLength: 10,
			_iDisplayStart: 0,
			_iRecordsTotal: 0,
			_iRecordsDisplay: 0,
			oClasses: {},
			bFiltered: !1,
			bSorted: !1,
			bSortCellsTop: null,
			oInit: null,
			aoDestroyCallback: [],
			fnRecordsTotal: function() {
				return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
			},
			fnRecordsDisplay: function() {
				return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
			},
			fnDisplayEnd: function() {
				var a = this._iDisplayLength,
					b = this._iDisplayStart,
					c = b + a,
					d = this.aiDisplay.length,
					e = this.oFeatures,
					f = e.bPaginate;
				return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || d < c || -1 === a ? d : c
			},
			oInstance: null,
			sInstance: null,
			iTabIndex: 0,
			nScrollHead: null,
			nScrollFoot: null,
			aLastSort: [],
			oPlugins: {},
			rowIdFn: null,
			rowId: null
		}, n.ext = x = {
			buttons: {},
			classes: {},
			build: "dt/dt-1.10.18",
			errMode: "alert",
			feature: [],
			search: [],
			selector: {
				cell: [],
				column: [],
				row: []
			},
			internal: {},
			legacy: {
				ajax: null
			},
			pager: {},
			renderer: {
				pageButton: {},
				header: {}
			},
			order: {},
			type: {
				detect: [],
				search: {},
				order: {}
			},
			_unique: 0,
			fnVersionCheck: n.fnVersionCheck,
			iApiIndex: 0,
			oJUIClasses: {},
			sVersion: n.version
		}, h.extend(x, {
			afnFiltering: x.search,
			aTypes: x.type.detect,
			ofnSearch: x.type.search,
			oSort: x.type.order,
			afnSortData: x.order,
			aoFeatures: x.feature,
			oApi: x.internal,
			oStdClasses: x.classes,
			oPagination: x.pager
		}), h.extend(n.ext.classes, {
			sTable: "dataTable",
			sNoFooter: "no-footer",
			sPageButton: "paginate_button",
			sPageButtonActive: "current",
			sPageButtonDisabled: "disabled",
			sStripeOdd: "odd",
			sStripeEven: "even",
			sRowEmpty: "dataTables_empty",
			sWrapper: "dataTables_wrapper",
			sFilter: "dataTables_filter",
			sInfo: "dataTables_info",
			sPaging: "dataTables_paginate paging_",
			sLength: "dataTables_length",
			sProcessing: "dataTables_processing",
			sSortAsc: "sorting_asc",
			sSortDesc: "sorting_desc",
			sSortable: "sorting",
			sSortableAsc: "sorting_asc_disabled",
			sSortableDesc: "sorting_desc_disabled",
			sSortableNone: "sorting_disabled",
			sSortColumn: "sorting_",
			sFilterInput: "",
			sLengthSelect: "",
			sScrollWrapper: "dataTables_scroll",
			sScrollHead: "dataTables_scrollHead",
			sScrollHeadInner: "dataTables_scrollHeadInner",
			sScrollBody: "dataTables_scrollBody",
			sScrollFoot: "dataTables_scrollFoot",
			sScrollFootInner: "dataTables_scrollFootInner",
			sHeaderTH: "",
			sFooterTH: "",
			sSortJUIAsc: "",
			sSortJUIDesc: "",
			sSortJUI: "",
			sSortJUIAscAllowed: "",
			sSortJUIDescAllowed: "",
			sSortJUIWrapper: "",
			sSortIcon: "",
			sJUIHeader: "",
			sJUIFooter: ""
		});
		var Kb = n.ext.pager;
		h.extend(Kb, {
			simple: function() {
				return ["previous", "next"]
			},
			full: function() {
				return ["first", "previous", "next", "last"]
			},
			numbers: function(a, b) {
				return [ia(a, b)]
			},
			simple_numbers: function(a, b) {
				return ["previous", ia(a, b), "next"]
			},
			full_numbers: function(a, b) {
				return ["first", "previous", ia(a, b), "next", "last"]
			},
			first_last_numbers: function(a, b) {
				return ["first", ia(a, b), "last"]
			},
			_numbers: ia,
			numbers_length: 7
		}), h.extend(!0, n.ext.renderer, {
			pageButton: {
				_: function(a, b, c, d, e, f) {
					var m, l, s, g = a.oClasses,
						j = a.oLanguage.oPaginate,
						i = a.oLanguage.oAria.paginate || {},
						n = 0,
						o = function(b, d) {
							function v(b) {
								Ta(a, b.data.action, !0)
							}
							var k, s, u, r;
							for(k = 0, s = d.length; k < s; k++)
								if(r = d[k], h.isArray(r)) u = h("<" + (r.DT_el || "div") + "/>").appendTo(b), o(u, r);
								else {
									switch(m = null, l = "", r) {
										case "ellipsis":
											b.append('<span class="ellipsis">&#x2026;</span>');
											break;
										case "first":
											m = j.sFirst, l = r + (0 < e ? "" : " " + g.sPageButtonDisabled);
											break;
										case "previous":
											m = j.sPrevious, l = r + (0 < e ? "" : " " + g.sPageButtonDisabled);
											break;
										case "next":
											m = j.sNext, l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
											break;
										case "last":
											m = j.sLast, l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
											break;
										default:
											m = r + 1, l = e === r ? g.sPageButtonActive : ""
									}
									null !== m && (Wa(u = h("<a>", {
										class: g.sPageButton + " " + l,
										"aria-controls": a.sTableId,
										"aria-label": i[r],
										"data-dt-idx": n,
										tabindex: a.iTabIndex,
										id: 0 === c && "string" == typeof r ? a.sTableId + "_" + r : null
									}).html(m).appendTo(b), {
										action: r
									}, v), n++)
								}
						};
					try {
						s = h(b).find(H.activeElement).data("dt-idx")
					} catch(u) {}
					o(h(b).empty(), d), s !== k && h(b).find("[data-dt-idx=" + s + "]").focus()
				}
			}
		}), h.extend(n.ext.type.detect, [function(a, b) {
			var c = b.oLanguage.sDecimal;
			return $a(a, c) ? "num" + c : null
		}, function(a) {
			if(a && !(a instanceof Date) && !Zb.test(a)) return null;
			var b = Date.parse(a);
			return null !== b && !isNaN(b) || M(a) ? "date" : null
		}, function(a, b) {
			var c = b.oLanguage.sDecimal;
			return $a(a, c, !0) ? "num-fmt" + c : null
		}, function(a, b) {
			var c = b.oLanguage.sDecimal;
			return Pb(a, c) ? "html-num" + c : null
		}, function(a, b) {
			var c = b.oLanguage.sDecimal;
			return Pb(a, c, !0) ? "html-num-fmt" + c : null
		}, function(a) {
			return M(a) || "string" == typeof a && -1 !== a.indexOf("<") ? "html" : null
		}]), h.extend(n.ext.type.search, {
			html: function(a) {
				return M(a) ? a : "string" == typeof a ? a.replace(Mb, " ").replace(Aa, "") : ""
			},
			string: function(a) {
				return M(a) ? a : "string" == typeof a ? a.replace(Mb, " ") : a
			}
		});
		var za = function(a, b, c, d) {
			return 0 === a || a && "-" !== a ? (b && (a = Ob(a, b)), a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, ""))), 1 * a) : -1 / 0
		};
		h.extend(x.type.order, {
			"date-pre": function(a) {
				return a = Date.parse(a), isNaN(a) ? -1 / 0 : a
			},
			"html-pre": function(a) {
				return M(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
			},
			"string-pre": function(a) {
				return M(a) ? "" : "string" == typeof a ? a.toLowerCase() : a.toString ? a.toString() : ""
			},
			"string-asc": function(a, b) {
				return a < b ? -1 : b < a ? 1 : 0
			},
			"string-desc": function(a, b) {
				return a < b ? 1 : b < a ? -1 : 0
			}
		}), Da(""), h.extend(!0, n.ext.renderer, {
			header: {
				_: function(a, b, c, d) {
					h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
						a === f && (e = c.idx, b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass("asc" == h[e] ? d.sSortAsc : "desc" == h[e] ? d.sSortDesc : c.sSortingClass))
					})
				},
				jqueryui: function(a, b, c, d) {
					h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b), h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
						a === f && (e = c.idx, b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == h[e] ? d.sSortAsc : "desc" == h[e] ? d.sSortDesc : c.sSortingClass), b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass("asc" == h[e] ? d.sSortJUIAsc : "desc" == h[e] ? d.sSortJUIDesc : c.sSortingClassJUI))
					})
				}
			}
		});

		function Vb(a) {
			return "string" == typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a
		}
		return n.render = {
			number: function(a, b, c, d, e) {
				return {
					display: function(f) {
						if("number" != typeof f && "string" != typeof f) return f;
						var g = f < 0 ? "-" : "",
							h = parseFloat(f);
						return isNaN(h) ? Vb(f) : (h = h.toFixed(c), f = Math.abs(h), h = parseInt(f, 10), f = c ? b + (f - h).toFixed(c).substring(2) : "", g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || ""))
					}
				}
			},
			text: function() {
				return {
					display: Vb
				}
			}
		}, h.extend(n.ext.internal, {
			_fnExternApiFunc: Lb,
			_fnBuildAjax: sa,
			_fnAjaxUpdate: lb,
			_fnAjaxParameters: ub,
			_fnAjaxUpdateDraw: vb,
			_fnAjaxDataSrc: ta,
			_fnAddColumn: Ea,
			_fnColumnOptions: ka,
			_fnAdjustColumnSizing: $,
			_fnVisibleToColumnIndex: aa,
			_fnColumnIndexToVisible: ba,
			_fnVisbleColumns: V,
			_fnGetColumns: ma,
			_fnColumnTypes: Ga,
			_fnApplyColumnDefs: ib,
			_fnHungarianMap: Z,
			_fnCamelToHungarian: J,
			_fnLanguageCompat: Ca,
			_fnBrowserDetect: gb,
			_fnAddData: O,
			_fnAddTr: na,
			_fnNodeToDataIndex: function(a, b) {
				return b._DT_RowIndex !== k ? b._DT_RowIndex : null
			},
			_fnNodeToColumnIndex: function(a, b, c) {
				return h.inArray(c, a.aoData[b].anCells)
			},
			_fnGetCellData: B,
			_fnSetCellData: jb,
			_fnSplitObjNotation: Ja,
			_fnGetObjectDataFn: S,
			_fnSetObjectDataFn: N,
			_fnGetDataMaster: Ka,
			_fnClearTable: oa,
			_fnDeleteIndex: pa,
			_fnInvalidate: da,
			_fnGetRowElements: Ia,
			_fnCreateTr: Ha,
			_fnBuildHead: kb,
			_fnDrawHead: fa,
			_fnDraw: P,
			_fnReDraw: T,
			_fnAddOptionsHtml: nb,
			_fnDetectHeader: ea,
			_fnGetUniqueThs: ra,
			_fnFeatureHtmlFilter: pb,
			_fnFilterComplete: ga,
			_fnFilterCustom: yb,
			_fnFilterColumn: xb,
			_fnFilter: wb,
			_fnFilterCreateSearch: Pa,
			_fnEscapeRegex: Qa,
			_fnFilterData: zb,
			_fnFeatureHtmlInfo: sb,
			_fnUpdateInfo: Cb,
			_fnInfoMacros: Db,
			_fnInitialise: ha,
			_fnInitComplete: ua,
			_fnLengthChange: Ra,
			_fnFeatureHtmlLength: ob,
			_fnFeatureHtmlPaginate: tb,
			_fnPageChange: Ta,
			_fnFeatureHtmlProcessing: qb,
			_fnProcessingDisplay: C,
			_fnFeatureHtmlTable: rb,
			_fnScrollDraw: la,
			_fnApplyToChildren: I,
			_fnCalculateColumnWidths: Fa,
			_fnThrottle: Oa,
			_fnConvertToWidth: Eb,
			_fnGetWidestNode: Fb,
			_fnGetMaxLenString: Gb,
			_fnStringToCss: v,
			_fnSortFlatten: X,
			_fnSort: mb,
			_fnSortAria: Ib,
			_fnSortListener: Va,
			_fnSortAttachListener: Ma,
			_fnSortingClasses: wa,
			_fnSortData: Hb,
			_fnSaveState: xa,
			_fnLoadState: Jb,
			_fnSettingsFromNode: ya,
			_fnLog: K,
			_fnMap: F,
			_fnBindAction: Wa,
			_fnCallbackReg: z,
			_fnCallbackFire: r,
			_fnLengthOverflow: Sa,
			_fnRenderer: Na,
			_fnDataSource: y,
			_fnRowAttributes: La,
			_fnExtend: Xa,
			_fnCalculateEnd: function() {}
		}), ((h.fn.dataTable = n).$ = h).fn.dataTableSettings = n.settings, h.fn.dataTableExt = n.ext, h.fn.DataTable = function(a) {
			return h(this).dataTable(a).api()
		}, h.each(n, function(a, b) {
			h.fn.DataTable[a] = b
		}), h.fn.dataTable
	}),
	function(factory) {
		"function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function($) {
			return factory($, window, document)
		}) : "object" == typeof exports ? module.exports = function(root, $) {
			return root = root || window, $ && $.fn.dataTable || ($ = require("datatables.net")(root, $).$), factory($, root, root.document)
		} : factory(jQuery, window, document)
	}(function($, window, document, undefined) {
		"use strict";
		var DataTable = $.fn.dataTable,
			Responsive = function(settings, opts) {
				if(!DataTable.versionCheck || !DataTable.versionCheck("1.10.3")) throw "DataTables Responsive requires DataTables 1.10.3 or newer";
				this.s = {
					dt: new DataTable.Api(settings),
					columns: [],
					current: []
				}, this.s.dt.settings()[0].responsive || (opts && "string" == typeof opts.details ? opts.details = {
					type: opts.details
				} : opts && !1 === opts.details ? opts.details = {
					type: !1
				} : opts && !0 === opts.details && (opts.details = {
					type: "inline"
				}), this.c = $.extend(!0, {}, Responsive.defaults, DataTable.defaults.responsive, opts), (settings.responsive = this)._constructor())
			};
		$.extend(Responsive.prototype, {
			_constructor: function() {
				var that = this,
					dt = this.s.dt,
					dtPrivateSettings = dt.settings()[0],
					oldWindowWidth = $(window).width();
				dt.settings()[0]._responsive = this, $(window).on("resize.dtr orientationchange.dtr", DataTable.util.throttle(function() {
					var width = $(window).width();
					width !== oldWindowWidth && (that._resize(), oldWindowWidth = width)
				})), dtPrivateSettings.oApi._fnCallbackReg(dtPrivateSettings, "aoRowCreatedCallback", function(tr, data, idx) {
					-1 !== $.inArray(!1, that.s.current) && $("td, th", tr).each(function(i) {
						var idx = dt.column.index("toData", i);
						!1 === that.s.current[idx] && $(this).css("display", "none")
					})
				}), dt.on("destroy.dtr", function() {
					dt.off(".dtr"), $(dt.table().body()).off(".dtr"), $(window).off("resize.dtr orientationchange.dtr"), $.each(that.s.current, function(i, val) {
						!1 === val && that._setColumnVis(i, !0)
					})
				}), this.c.breakpoints.sort(function(a, b) {
					return a.width < b.width ? 1 : a.width > b.width ? -1 : 0
				}), this._classLogic(), this._resizeAuto();
				var details = this.c.details;
				!1 !== details.type && (that._detailsInit(), dt.on("column-visibility.dtr", function(e, ctx, col, vis) {
					that._classLogic(), that._resizeAuto(), that._resize()
				}), dt.on("draw.dtr", function() {
					that._redrawChildren()
				}), $(dt.table().node()).addClass("dtr-" + details.type)), dt.on("column-reorder.dtr", function(e, settings, details) {
					that._classLogic(), that._resizeAuto(), that._resize()
				}), dt.on("column-sizing.dtr", function() {
					that._resizeAuto(), that._resize()
				}), dt.on("init.dtr", function(e, settings, details) {
					that._resizeAuto(), that._resize(), $.inArray(!1, that.s.current) && dt.columns.adjust()
				}), this._resize()
			},
			_columnsVisiblity: function(breakpoint) {
				var i, ien, dt = this.s.dt,
					columns = this.s.columns,
					order = columns.map(function(col, idx) {
						return {
							columnIdx: idx,
							priority: col.priority
						}
					}).sort(function(a, b) {
						return a.priority !== b.priority ? a.priority - b.priority : a.columnIdx - b.columnIdx
					}),
					display = $.map(columns, function(col) {
						return(!col.auto || null !== col.minWidth) && (!0 === col.auto ? "-" : -1 !== $.inArray(breakpoint, col.includeIn))
					}),
					requiredWidth = 0;
				for(i = 0, ien = display.length; i < ien; i++) !0 === display[i] && (requiredWidth += columns[i].minWidth);
				var scrolling = dt.settings()[0].oScroll,
					bar = scrolling.sY || scrolling.sX ? scrolling.iBarWidth : 0,
					usedWidth = dt.table().container().offsetWidth - bar - requiredWidth;
				for(i = 0, ien = display.length; i < ien; i++) columns[i].control && (usedWidth -= columns[i].minWidth);
				var empty = !1;
				for(i = 0, ien = order.length; i < ien; i++) {
					var colIdx = order[i].columnIdx;
					"-" === display[colIdx] && !columns[colIdx].control && columns[colIdx].minWidth && (empty || usedWidth - columns[colIdx].minWidth < 0 ? (empty = !0, display[colIdx] = !1) : display[colIdx] = !0, usedWidth -= columns[colIdx].minWidth)
				}
				var showControl = !1;
				for(i = 0, ien = columns.length; i < ien; i++)
					if(!columns[i].control && !columns[i].never && !display[i]) {
						showControl = !0;
						break
					}
				for(i = 0, ien = columns.length; i < ien; i++) columns[i].control && (display[i] = showControl);
				return -1 === $.inArray(!0, display) && (display[0] = !0), display
			},
			_classLogic: function() {
				function add(colIdx, name) {
					var includeIn = columns[colIdx].includeIn; - 1 === $.inArray(name, includeIn) && includeIn.push(name)
				}

				function column(colIdx, name, operator, matched) {
					var size, i, ien;
					if(operator) {
						if("max-" === operator)
							for(size = that._find(name).width, i = 0, ien = breakpoints.length; i < ien; i++) breakpoints[i].width <= size && add(colIdx, breakpoints[i].name);
						else if("min-" === operator)
							for(size = that._find(name).width, i = 0, ien = breakpoints.length; i < ien; i++) breakpoints[i].width >= size && add(colIdx, breakpoints[i].name);
						else if("not-" === operator)
							for(i = 0, ien = breakpoints.length; i < ien; i++) - 1 === breakpoints[i].name.indexOf(matched) && add(colIdx, breakpoints[i].name)
					} else columns[colIdx].includeIn.push(name)
				}
				var that = this,
					breakpoints = this.c.breakpoints,
					dt = this.s.dt,
					columns = dt.columns().eq(0).map(function(i) {
						var column = this.column(i),
							className = column.header().className,
							priority = dt.settings()[0].aoColumns[i].responsivePriority;
						if(priority === undefined) {
							var dataPriority = $(column.header()).data("priority");
							priority = dataPriority !== undefined ? 1 * dataPriority : 1e4
						}
						return {
							className: className,
							includeIn: [],
							auto: !1,
							control: !1,
							never: !!className.match(/\bnever\b/),
							priority: priority
						}
					});
				columns.each(function(col, i) {
					for(var classNames = col.className.split(" "), hasClass = !1, k = 0, ken = classNames.length; k < ken; k++) {
						var className = $.trim(classNames[k]);
						if("all" === className) return hasClass = !0, void(col.includeIn = $.map(breakpoints, function(a) {
							return a.name
						}));
						if("none" === className || col.never) return void(hasClass = !0);
						if("control" === className) return hasClass = !0, void(col.control = !0);
						$.each(breakpoints, function(j, breakpoint) {
							var brokenPoint = breakpoint.name.split("-"),
								re = new RegExp("(min\\-|max\\-|not\\-)?(" + brokenPoint[0] + ")(\\-[_a-zA-Z0-9])?"),
								match = className.match(re);
							match && (hasClass = !0, match[2] === brokenPoint[0] && match[3] === "-" + brokenPoint[1] ? column(i, breakpoint.name, match[1], match[2] + match[3]) : match[2] !== brokenPoint[0] || match[3] || column(i, breakpoint.name, match[1], match[2]))
						})
					}
					hasClass || (col.auto = !0)
				}), this.s.columns = columns
			},
			_detailsDisplay: function(row, update) {
				var that = this,
					dt = this.s.dt,
					details = this.c.details;
				if(details && !1 !== details.type) {
					var res = details.display(row, update, function() {
						return details.renderer(dt, row[0], that._detailsObj(row[0]))
					});
					!0 !== res && !1 !== res || $(dt.table().node()).triggerHandler("responsive-display.dt", [dt, row, res, update])
				}
			},
			_detailsInit: function() {
				var that = this,
					dt = this.s.dt,
					details = this.c.details;
				"inline" === details.type && (details.target = "td:first-child, th:first-child"), dt.on("draw.dtr", function() {
					that._tabIndexes()
				}), that._tabIndexes(), $(dt.table().body()).on("keyup.dtr", "td, th", function(e) {
					13 === e.keyCode && $(this).data("dtr-keyboard") && $(this).click()
				});
				var target = details.target,
					selector = "string" == typeof target ? target : "td, th";
				$(dt.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", selector, function(e) {
					if($(dt.table().node()).hasClass("collapsed") && dt.row($(this).closest("tr")).length) {
						if("number" == typeof target) {
							var targetIdx = target < 0 ? dt.columns().eq(0).length + target : target;
							if(dt.cell(this).index().column !== targetIdx) return
						}
						var row = dt.row($(this).closest("tr"));
						"click" === e.type ? that._detailsDisplay(row, !1) : "mousedown" === e.type ? $(this).css("outline", "none") : "mouseup" === e.type && $(this).blur().css("outline", "")
					}
				})
			},
			_detailsObj: function(rowIdx) {
				var that = this,
					dt = this.s.dt;
				return $.map(this.s.columns, function(col, i) {
					if(!col.never && !col.control) return {
						title: dt.settings()[0].aoColumns[i].sTitle,
						data: dt.cell(rowIdx, i).render(that.c.orthogonal),
						hidden: dt.column(i).visible() && !that.s.current[i],
						columnIndex: i,
						rowIndex: rowIdx
					}
				})
			},
			_find: function(name) {
				for(var breakpoints = this.c.breakpoints, i = 0, ien = breakpoints.length; i < ien; i++)
					if(breakpoints[i].name === name) return breakpoints[i]
			},
			_redrawChildren: function() {
				var that = this,
					dt = this.s.dt;
				dt.rows({
					page: "current"
				}).iterator("row", function(settings, idx) {
					dt.row(idx);
					that._detailsDisplay(dt.row(idx), !0)
				})
			},
			_resize: function() {
				var i, ien, that = this,
					dt = this.s.dt,
					width = $(window).width(),
					breakpoints = this.c.breakpoints,
					breakpoint = breakpoints[0].name,
					columns = this.s.columns,
					oldVis = this.s.current.slice();
				for(i = breakpoints.length - 1; 0 <= i; i--)
					if(width <= breakpoints[i].width) {
						breakpoint = breakpoints[i].name;
						break
					}
				var columnsVis = this._columnsVisiblity(breakpoint);
				this.s.current = columnsVis;
				var collapsedClass = !1;
				for(i = 0, ien = columns.length; i < ien; i++)
					if(!1 === columnsVis[i] && !columns[i].never && !columns[i].control) {
						collapsedClass = !0;
						break
					}
				$(dt.table().node()).toggleClass("collapsed", collapsedClass);
				var changed = !1;
				dt.columns().eq(0).each(function(colIdx, i) {
					columnsVis[i] !== oldVis[i] && (changed = !0, that._setColumnVis(colIdx, columnsVis[i]))
				}), changed && (this._redrawChildren(), $(dt.table().node()).trigger("responsive-resize.dt", [dt, this.s.current]))
			},
			_resizeAuto: function() {
				var dt = this.s.dt,
					columns = this.s.columns;
				if(this.c.auto && -1 !== $.inArray(!0, $.map(columns, function(c) {
						return c.auto
					}))) {
					dt.table().node().offsetWidth, dt.columns;
					var clonedTable = dt.table().node().cloneNode(!1),
						clonedHeader = $(dt.table().header().cloneNode(!1)).appendTo(clonedTable),
						clonedBody = $(dt.table().body()).clone(!1, !1).empty().appendTo(clonedTable),
						headerCells = dt.columns().header().filter(function(idx) {
							return dt.column(idx).visible()
						}).to$().clone(!1).css("display", "table-cell");
					$(clonedBody).append($(dt.rows({
						page: "current"
					}).nodes()).clone(!1)).find("th, td").css("display", "");
					var footer = dt.table().footer();
					if(footer) {
						var clonedFooter = $(footer.cloneNode(!1)).appendTo(clonedTable),
							footerCells = dt.columns().footer().filter(function(idx) {
								return dt.column(idx).visible()
							}).to$().clone(!1).css("display", "table-cell");
						$("<tr/>").append(footerCells).appendTo(clonedFooter)
					}
					$("<tr/>").append(headerCells).appendTo(clonedHeader), "inline" === this.c.details.type && $(clonedTable).addClass("dtr-inline collapsed"), $(clonedTable).find("[name]").removeAttr("name");
					var inserted = $("<div/>").css({
						width: 1,
						height: 1,
						overflow: "hidden"
					}).append(clonedTable);
					inserted.insertBefore(dt.table().node()), headerCells.each(function(i) {
						var idx = dt.column.index("fromVisible", i);
						columns[idx].minWidth = this.offsetWidth || 0
					}), inserted.remove()
				}
			},
			_setColumnVis: function(col, showHide) {
				var dt = this.s.dt,
					display = showHide ? "" : "none";
				$(dt.column(col).header()).css("display", display), $(dt.column(col).footer()).css("display", display), dt.column(col).nodes().to$().css("display", display)
			},
			_tabIndexes: function() {
				var dt = this.s.dt,
					cells = dt.cells({
						page: "current"
					}).nodes().to$(),
					ctx = dt.settings()[0],
					target = this.c.details.target;
				cells.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"), $("number" == typeof target ? ":eq(" + target + ")" : target, dt.rows({
					page: "current"
				}).nodes()).attr("tabIndex", ctx.iTabIndex).data("dtr-keyboard", 1)
			}
		}), Responsive.breakpoints = [{
			name: "desktop",
			width: 1 / 0
		}, {
			name: "tablet-l",
			width: 1024
		}, {
			name: "tablet-p",
			width: 768
		}, {
			name: "mobile-l",
			width: 480
		}, {
			name: "mobile-p",
			width: 320
		}], Responsive.display = {
			childRow: function(row, update, render) {
				return update ? $(row.node()).hasClass("parent") ? (row.child(render(), "child").show(), !0) : void 0 : row.child.isShown() ? (row.child(!1), $(row.node()).removeClass("parent"), !1) : (row.child(render(), "child").show(), $(row.node()).addClass("parent"), !0)
			},
			childRowImmediate: function(row, update, render) {
				return !update && row.child.isShown() || !row.responsive.hasHidden() ? (row.child(!1), $(row.node()).removeClass("parent"), !1) : (row.child(render(), "child").show(), $(row.node()).addClass("parent"), !0)
			},
			modal: function(options) {
				return function(row, update, render) {
					if(update) $("div.dtr-modal-content").empty().append(render());
					else {
						var close = function() {
								modal.remove(), $(document).off("keypress.dtr")
							},
							modal = $('<div class="dtr-modal"/>').append($('<div class="dtr-modal-display"/>').append($('<div class="dtr-modal-content"/>').append(render())).append($('<div class="dtr-modal-close">&times;</div>').click(function() {
								close()
							}))).append($('<div class="dtr-modal-background"/>').click(function() {
								close()
							})).appendTo("body");
						$(document).on("keyup.dtr", function(e) {
							27 === e.keyCode && (e.stopPropagation(), close())
						})
					}
					options && options.header && $("div.dtr-modal-content").prepend("<h2>" + options.header(row) + "</h2>")
				}
			}
		}, Responsive.renderer = {
			listHidden: function() {
				return function(api, rowIdx, columns) {
					var data = $.map(columns, function(col) {
						return col.hidden ? '<li data-dtr-index="' + col.columnIndex + '" data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '"><span class="dtr-title">' + col.title + '</span> <span class="dtr-data">' + col.data + "</span></li>" : ""
					}).join("");
					return !!data && $('<ul data-dtr-index="' + rowIdx + '"/>').append(data)
				}
			},
			tableAll: function(options) {
				return options = $.extend({
						tableClass: ""
					}, options),
					function(api, rowIdx, columns) {
						var data = $.map(columns, function(col) {
							return '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '"><td>' + col.title + ":</td> <td>" + col.data + "</td></tr>"
						}).join("");
						return $('<table class="' + options.tableClass + '" width="100%"/>').append(data)
					}
			}
		}, Responsive.defaults = {
			breakpoints: Responsive.breakpoints,
			auto: !0,
			details: {
				display: Responsive.display.childRow,
				renderer: Responsive.renderer.listHidden(),
				target: 0,
				type: "inline"
			},
			orthogonal: "display"
		};
		var Api = $.fn.dataTable.Api;
		return Api.register("responsive()", function() {
			return this
		}), Api.register("responsive.index()", function(li) {
			return {
				column: (li = $(li)).data("dtr-index"),
				row: li.parent().data("dtr-index")
			}
		}), Api.register("responsive.rebuild()", function() {
			return this.iterator("table", function(ctx) {
				ctx._responsive && ctx._responsive._classLogic()
			})
		}), Api.register("responsive.recalc()", function() {
			return this.iterator("table", function(ctx) {
				ctx._responsive && (ctx._responsive._resizeAuto(), ctx._responsive._resize())
			})
		}), Api.register("responsive.hasHidden()", function() {
			var ctx = this.context[0];
			return !!ctx._responsive && -1 !== $.inArray(!1, ctx._responsive.s.current)
		}), Responsive.version = "2.1.0", $.fn.dataTable.Responsive = Responsive, $.fn.DataTable.Responsive = Responsive, $(document).on("preInit.dt.dtr", function(e, settings, json) {
			if("dt" === e.namespace && ($(settings.nTable).hasClass("responsive") || $(settings.nTable).hasClass("dt-responsive") || settings.oInit.responsive || DataTable.defaults.responsive)) {
				var init = settings.oInit.responsive;
				!1 !== init && new Responsive(settings, $.isPlainObject(init) ? init : {})
			}
		}), Responsive
	});
var card = function(modules) {
	var installedModules = {};

	function __webpack_require__(moduleId) {
		if(installedModules[moduleId]) return installedModules[moduleId].exports;
		var module = installedModules[moduleId] = {
			exports: {},
			id: moduleId,
			loaded: !1
		};
		return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports
	}
	return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "", __webpack_require__(0)
}([function(module, exports, __webpack_require__) {
	var $, Card, slice = [].slice;
	Card = __webpack_require__(1), ($ = __webpack_require__(11)).card = {}, $.card.fn = {}, $.fn.card = function(opts) {
		return $.card.fn.construct.apply(this, opts)
	}, $.fn.extend({
		card: function() {
			var args, option;
			return option = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [], this.each(function() {
				var $this, data;
				if((data = ($this = $(this)).data("card")) || ($.each(option, function(key, value) {
						if(value instanceof jQuery) return option[key] = value[0]
					}), option.form = this, $this.data("card", data = new Card(option))), "string" == typeof option) return data[option].apply(data, args)
			})
		}
	})
}, function(module, exports, __webpack_require__) {
	(function(global) {
		var Card, QJ, extend;
		__webpack_require__(2), QJ = __webpack_require__(6), __webpack_require__(7), extend = __webpack_require__(8), Card = function() {
			var bindVal;

			function Card(opts) {
				var fn, me, toInitialize;
				this.maskCardNumber = (fn = this.maskCardNumber, me = this, function() {
					return fn.apply(me, arguments)
				}), this.options = extend(!0, this.defaults, opts), this.options.form ? (this.$el = QJ(this.options.form), this.options.container ? (this.$container = QJ(this.options.container), (toInitialize = QJ.isDOMElement(this.$container) ? this.$container : this.$container[0]).getAttribute(this.initializedDataAttr) || (toInitialize.setAttribute(this.initializedDataAttr, !0), this.render(), this.attachHandlers(), this.handleInitialPlaceholders())) : console.log("Please provide a container")) : console.log("Please provide a form")
			}
			return Card.prototype.initializedDataAttr = "data-jp-card-initialized", Card.prototype.cardTemplate = '<div class="jp-card-container"><div class="jp-card"><div class="jp-card-front"><div class="jp-card-logo jp-card-elo"><div class="e">e</div><div class="l">l</div><div class="o">o</div></div><div class="jp-card-logo jp-card-visa">Visa</div><div class="jp-card-logo jp-card-visaelectron">Visa<div class="elec">Electron</div></div><div class="jp-card-logo jp-card-mastercard">Mastercard</div><div class="jp-card-logo jp-card-maestro">Maestro</div><div class="jp-card-logo jp-card-amex"></div><div class="jp-card-logo jp-card-discover">discover</div><div class="jp-card-logo jp-card-dinersclub"></div><div class="jp-card-logo jp-card-dankort"><div class="dk"><div class="d"></div><div class="k"></div></div></div><div class="jp-card-logo jp-card-jcb"><div class="j">J</div><div class="c">C</div><div class="b">B</div></div><div class="jp-card-lower"><div class="jp-card-shiny"></div><div class="jp-card-cvc jp-card-display">{{cvc}}</div><div class="jp-card-number jp-card-display">{{number}}</div><div class="jp-card-name jp-card-display">{{name}}</div><div class="jp-card-expiry jp-card-display" data-before="{{monthYear}}" data-after="{{validDate}}">{{expiry}}</div></div></div><div class="jp-card-back"><div class="jp-card-bar"></div><div class="jp-card-cvc jp-card-display">{{cvc}}</div><div class="jp-card-shiny"></div></div></div></div>', Card.prototype.template = function(tpl, data) {
				return tpl.replace(/\{\{(.*?)\}\}/g, function(match, key, str) {
					return data[key]
				})
			}, Card.prototype.cardTypes = ["jp-card-amex", "jp-card-dankort", "jp-card-dinersclub", "jp-card-discover", "jp-card-jcb", "jp-card-laser", "jp-card-maestro", "jp-card-mastercard", "jp-card-unionpay", "jp-card-visa", "jp-card-visaelectron", "jp-card-elo"], Card.prototype.defaults = {
				formatting: !0,
				formSelectors: {
					numberInput: 'input[name="number"]',
					expiryInput: 'input[name="expiry"]',
					cvcInput: 'input[name="cvc"]',
					nameInput: 'input[name="name"]'
				},
				cardSelectors: {
					cardContainer: ".jp-card-container",
					card: ".jp-card",
					numberDisplay: ".jp-card-number",
					expiryDisplay: ".jp-card-expiry",
					cvcDisplay: ".jp-card-cvc",
					nameDisplay: ".jp-card-name"
				},
				messages: {
					validDate: "valid\nthru",
					monthYear: "ay/yıl"
				},
				placeholders: {
					number: "&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;",
					cvc: "&bull;&bull;&bull;",
					expiry: "&bull;&bull;/&bull;&bull;",
					name: "AD SOYAD"
				},
				masks: {
					cardNumber: !1
				},
				classes: {
					valid: "jp-card-valid",
					invalid: "jp-card-invalid"
				},
				debug: !1
			}, Card.prototype.render = function() {
				var $cardContainer, baseWidth, name, obj, ref, ref1, selector, ua;
				for(name in QJ.append(this.$container, this.template(this.cardTemplate, extend({}, this.options.messages, this.options.placeholders))), ref = this.options.cardSelectors) selector = ref[name], this["$" + name] = QJ.find(this.$container, selector);
				for(name in ref1 = this.options.formSelectors) selector = ref1[name], selector = this.options[name] ? this.options[name] : selector, !(obj = QJ.find(this.$el, selector)).length && this.options.debug && console.error("Card can't find a " + name + " in your form."), this["$" + name] = obj;
				if(this.options.formatting && (Payment.formatCardNumber(this.$numberInput), Payment.formatCardCVC(this.$cvcInput), Payment.formatCardExpiry(this.$expiryInput)), this.options.width && ($cardContainer = QJ(this.options.cardSelectors.cardContainer)[0], baseWidth = parseInt($cardContainer.clientWidth || window.getComputedStyle($cardContainer).width), $cardContainer.style.transform = "scale(" + this.options.width / baseWidth + ")"), ("undefined" != typeof navigator && null !== navigator ? navigator.userAgent : void 0) && -1 !== (ua = navigator.userAgent.toLowerCase()).indexOf("safari") && -1 === ua.indexOf("chrome") && QJ.addClass(this.$card, "jp-card-safari"), /MSIE 10\./i.test(navigator.userAgent) && QJ.addClass(this.$card, "jp-card-ie-10"), /rv:11.0/i.test(navigator.userAgent)) return QJ.addClass(this.$card, "jp-card-ie-11")
			}, Card.prototype.attachHandlers = function() {
				var expiryFilters, numberInputFilters;
				return numberInputFilters = [this.validToggler("cardNumber")], this.options.masks.cardNumber && numberInputFilters.push(this.maskCardNumber), bindVal(this.$numberInput, this.$numberDisplay, {
					fill: !1,
					filters: numberInputFilters
				}), QJ.on(this.$numberInput, "payment.cardType", this.handle("setCardType")), (expiryFilters = [function(val) {
					return val.replace(/(\s+)/g, "")
				}]).push(this.validToggler("cardExpiry")), bindVal(this.$expiryInput, this.$expiryDisplay, {
					join: function(text) {
						return 2 === text[0].length || text[1] ? "/" : ""
					},
					filters: expiryFilters
				}), bindVal(this.$cvcInput, this.$cvcDisplay, {
					filters: this.validToggler("cardCVC")
				}), QJ.on(this.$cvcInput, "focus", this.handle("flipCard")), QJ.on(this.$cvcInput, "blur", this.handle("unflipCard")), bindVal(this.$nameInput, this.$nameDisplay, {
					fill: !1,
					filters: this.validToggler("cardHolderName"),
					join: " "
				})
			}, Card.prototype.handleInitialPlaceholders = function() {
				var el, name, ref, results;
				for(name in results = [], ref = this.options.formSelectors) ref[name], el = this["$" + name], QJ.val(el) ? (QJ.trigger(el, "paste"), results.push(setTimeout(function() {
					return QJ.trigger(el, "keyup")
				}))) : results.push(void 0);
				return results
			}, Card.prototype.handle = function(fn) {
				return _this = this,
					function(e) {
						var args;
						return(args = Array.prototype.slice.call(arguments)).unshift(e.target), _this.handlers[fn].apply(_this, args)
					};
				var _this
			}, Card.prototype.validToggler = function(validatorName) {
				var isValid, _this;
				return "cardExpiry" === validatorName ? isValid = function(val) {
						var objVal;
						return objVal = Payment.fns.cardExpiryVal(val), Payment.fns.validateCardExpiry(objVal.month, objVal.year)
					} : "cardCVC" === validatorName ? (_this = this, isValid = function(val) {
						return Payment.fns.validateCardCVC(val, _this.cardType)
					}) : "cardNumber" === validatorName ? isValid = function(val) {
						return Payment.fns.validateCardNumber(val)
					} : "cardHolderName" === validatorName && (isValid = function(val) {
						return "" !== val
					}),
					function(_this) {
						return function(val, $in, $out) {
							var result;
							return result = isValid(val), _this.toggleValidClass($in, result), _this.toggleValidClass($out, result), val
						}
					}(this)
			}, Card.prototype.toggleValidClass = function(el, test) {
				return QJ.toggleClass(el, this.options.classes.valid, test), QJ.toggleClass(el, this.options.classes.invalid, !test)
			}, Card.prototype.maskCardNumber = function(val, el, out) {
				var mask, numbers;
				return mask = this.options.masks.cardNumber, 3 <= (numbers = val.split(" ")).length ? (numbers.forEach(function(item, idx) {
					if(idx !== numbers.length - 1) return numbers[idx] = numbers[idx].replace(/\d/g, mask)
				}), numbers.join(" ")) : val.replace(/\d/g, mask)
			}, Card.prototype.handlers = {
				setCardType: function($el, e) {
					var cardType;
					if(cardType = e.data, !QJ.hasClass(this.$card, cardType)) return QJ.removeClass(this.$card, "jp-card-unknown"), QJ.removeClass(this.$card, this.cardTypes.join(" ")), QJ.addClass(this.$card, "jp-card-" + cardType), QJ.toggleClass(this.$card, "jp-card-identified", "unknown" !== cardType), this.cardType = cardType
				},
				flipCard: function() {
					return QJ.addClass(this.$card, "jp-card-flipped")
				},
				unflipCard: function() {
					return QJ.removeClass(this.$card, "jp-card-flipped")
				}
			}, bindVal = function(el, out, opts) {
				var joiner, o, outDefaults;
				return null == opts && (opts = {}), opts.fill = opts.fill || !1, opts.filters = opts.filters || [], opts.filters instanceof Array || (opts.filters = [opts.filters]), opts.join = opts.join || "", "function" != typeof opts.join && (joiner = opts.join, opts.join = function() {
					return joiner
				}), outDefaults = function() {
					var j, len, results;
					for(results = [], j = 0, len = out.length; j < len; j++) o = out[j], results.push(o.textContent);
					return results
				}(), QJ.on(el, "focus", function() {
					return QJ.addClass(out, "jp-card-focused")
				}), QJ.on(el, "blur", function() {
					return QJ.removeClass(out, "jp-card-focused")
				}), QJ.on(el, "keyup change paste", function(e) {
					var elem, i, j, join, k, len, len1, outEl, outVal, ref, results, val;
					for(val = function() {
							var j, len, results;
							for(results = [], j = 0, len = el.length; j < len; j++) elem = el[j], results.push(QJ.val(elem));
							return results
						}(), join = opts.join(val), (val = val.join(join)) === join && (val = ""), j = 0, len = (ref = opts.filters).length; j < len; j++) val = (0, ref[j])(val, el, out);
					for(results = [], i = k = 0, len1 = out.length; k < len1; i = ++k) outEl = out[i], outVal = opts.fill ? val + outDefaults[i].substring(val.length) : val || outDefaults[i], results.push(outEl.textContent = outVal);
					return results
				}), el
			}, Card
		}(), module.exports = Card, global.Card = Card
	}).call(exports, function() {
		return this
	}())
}, function(module, exports, __webpack_require__) {
	var content = __webpack_require__(3);
	"string" == typeof content && (content = [
		[module.id, content, ""]
	]);
	__webpack_require__(5)(content, {});
	content.locals && (module.exports = content.locals)
}, function(module, exports, __webpack_require__) {
	(module.exports = __webpack_require__(4)()).push([module.id, '.jp-card.jp-card-safari.jp-card-identified .jp-card-front:before, .jp-card.jp-card-safari.jp-card-identified .jp-card-back:before {\n  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%); }\n\n.jp-card.jp-card-ie-10.jp-card-flipped, .jp-card.jp-card-ie-11.jp-card-flipped {\n  -webkit-transform: 0deg;\n  -moz-transform: 0deg;\n  -ms-transform: 0deg;\n  -o-transform: 0deg;\n  transform: 0deg; }\n  .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-front, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-front {\n    -webkit-transform: rotateY(0deg);\n    -moz-transform: rotateY(0deg);\n    -ms-transform: rotateY(0deg);\n    -o-transform: rotateY(0deg);\n    transform: rotateY(0deg); }\n  .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back {\n    -webkit-transform: rotateY(0deg);\n    -moz-transform: rotateY(0deg);\n    -ms-transform: rotateY(0deg);\n    -o-transform: rotateY(0deg);\n    transform: rotateY(0deg); }\n    .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back:after, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back:after {\n      left: 18%; }\n    .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-cvc, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-cvc {\n      -webkit-transform: rotateY(180deg);\n      -moz-transform: rotateY(180deg);\n      -ms-transform: rotateY(180deg);\n      -o-transform: rotateY(180deg);\n      transform: rotateY(180deg);\n      left: 5%; }\n    .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-shiny, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-shiny {\n      left: 84%; }\n      .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-shiny:after, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-shiny:after {\n        left: -480%;\n        -webkit-transform: rotateY(180deg);\n        -moz-transform: rotateY(180deg);\n        -ms-transform: rotateY(180deg);\n        -o-transform: rotateY(180deg);\n        transform: rotateY(180deg); }\n\n.jp-card.jp-card-ie-10.jp-card-amex .jp-card-back, .jp-card.jp-card-ie-11.jp-card-amex .jp-card-back {\n  display: none; }\n\n.jp-card-logo {\n  height: 36px;\n  width: 60px;\n  font-style: italic; }\n  .jp-card-logo, .jp-card-logo:before, .jp-card-logo:after {\n    box-sizing: border-box; }\n\n.jp-card-logo.jp-card-amex {\n  text-transform: uppercase;\n  font-size: 4px;\n  font-weight: bold;\n  color: white;\n  background-image: repeating-radial-gradient(circle at center, #FFF 1px, #999 2px);\n  background-image: repeating-radial-gradient(circle at center, #FFF 1px, #999 2px);\n  border: 1px solid #EEE; }\n  .jp-card-logo.jp-card-amex:before, .jp-card-logo.jp-card-amex:after {\n    width: 28px;\n    display: block;\n    position: absolute;\n    left: 16px; }\n  .jp-card-logo.jp-card-amex:before {\n    height: 28px;\n    content: "american";\n    top: 3px;\n    text-align: left;\n    padding-left: 2px;\n    padding-top: 11px;\n    background: #267AC3; }\n  .jp-card-logo.jp-card-amex:after {\n    content: "express";\n    bottom: 11px;\n    text-align: right;\n    padding-right: 2px; }\n\n.jp-card.jp-card-amex.jp-card-flipped {\n  -webkit-transform: none;\n  -moz-transform: none;\n  -ms-transform: none;\n  -o-transform: none;\n  transform: none; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front:before, .jp-card.jp-card-amex.jp-card-identified .jp-card-back:before {\n  background-color: #108168; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front .jp-card-logo.jp-card-amex {\n  opacity: 1; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front .jp-card-cvc {\n  visibility: visible; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front:after {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-discover {\n  background: #FF6600;\n  color: #111;\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 10px;\n  text-align: center;\n  overflow: hidden;\n  z-index: 1;\n  padding-top: 9px;\n  letter-spacing: .03em;\n  border: 1px solid #EEE; }\n  .jp-card-logo.jp-card-discover:before, .jp-card-logo.jp-card-discover:after {\n    content: " ";\n    display: block;\n    position: absolute; }\n  .jp-card-logo.jp-card-discover:before {\n    background: white;\n    width: 200px;\n    height: 200px;\n    border-radius: 200px;\n    bottom: -5%;\n    right: -80%;\n    z-index: -1; }\n  .jp-card-logo.jp-card-discover:after {\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    top: 10px;\n    left: 27px;\n    background-color: #FF6600;\n    background-image: -webkit-radial-gradient(#FF6600, #fff);\n    background-image: radial-gradient(  #FF6600, #fff);\n    content: "network";\n    font-size: 4px;\n    line-height: 24px;\n    text-indent: -7px; }\n\n.jp-card .jp-card-front .jp-card-logo.jp-card-discover {\n  right: 12%;\n  top: 18%; }\n\n.jp-card.jp-card-discover.jp-card-identified .jp-card-front:before, .jp-card.jp-card-discover.jp-card-identified .jp-card-back:before {\n  background-color: #86B8CF; }\n\n.jp-card.jp-card-discover.jp-card-identified .jp-card-logo.jp-card-discover {\n  opacity: 1; }\n\n.jp-card.jp-card-discover.jp-card-identified .jp-card-front:after {\n  -webkit-transition: 400ms;\n  -moz-transition: 400ms;\n  transition: 400ms;\n  content: " ";\n  display: block;\n  background-color: #FF6600;\n  background-image: -webkit-linear-gradient(#FF6600, #ffa366, #FF6600);\n  background-image: linear-gradient(#FF6600, #ffa366, #FF6600);\n  height: 50px;\n  width: 50px;\n  border-radius: 25px;\n  position: absolute;\n  left: 100%;\n  top: 15%;\n  margin-left: -25px;\n  box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.5); }\n\n.jp-card-logo.jp-card-visa {\n  text-transform: uppercase;\n  color: white;\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 18px;\n  margin-top: 5px; }\n  .jp-card-logo.jp-card-visa:before, .jp-card-logo.jp-card-visa:after {\n    content: " ";\n    display: block;\n    width: 100%;\n    height: 25%; }\n  .jp-card-logo.jp-card-visa:before {\n    position: absolute;\n    left: -4px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 12px 6px 0;\n    border-color: transparent #ffffff transparent transparent; }\n\n.jp-card.jp-card-visa.jp-card-identified .jp-card-front:before, .jp-card.jp-card-visa.jp-card-identified .jp-card-back:before {\n  background-color: #191278; }\n\n.jp-card.jp-card-visa.jp-card-identified .jp-card-logo.jp-card-visa {\n  opacity: 1;\n  box-shadow: none; }\n\n.jp-card-logo.jp-card-visaelectron {\n  background: white;\n  text-transform: uppercase;\n  color: #1A1876;\n  text-align: center;\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px; }\n  .jp-card-logo.jp-card-visaelectron:before, .jp-card-logo.jp-card-visaelectron:after {\n    content: " ";\n    display: block;\n    width: 100%;\n    height: 25%; }\n  .jp-card-logo.jp-card-visaelectron:before {\n    background: #1A1876; }\n  .jp-card-logo.jp-card-visaelectron:after {\n    background: #E79800; }\n  .jp-card-logo.jp-card-visaelectron .elec {\n    float: right;\n    font-family: arial;\n    font-size: 9px;\n    margin-right: 1px;\n    margin-top: -5px;\n    text-transform: none; }\n\n.jp-card.jp-card-visaelectron.jp-card-identified .jp-card-front:before, .jp-card.jp-card-visaelectron.jp-card-identified .jp-card-back:before {\n  background-color: #191278; }\n\n.jp-card.jp-card-visaelectron.jp-card-identified .jp-card-logo.jp-card-visaelectron {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-mastercard {\n  color: white;\n  font-style: normal;\n  text-transform: lowercase;\n  font-weight: bold;\n  text-align: center;\n  font-size: 9px;\n  line-height: 84px;\n  z-index: 1;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.6); }\n  .jp-card-logo.jp-card-mastercard:before, .jp-card-logo.jp-card-mastercard:after {\n    content: " ";\n    display: block;\n    width: 36px;\n    top: 0;\n    position: absolute;\n    height: 36px;\n    border-radius: 18px; }\n  .jp-card-logo.jp-card-mastercard:before {\n    left: 0;\n    background: #EB001B;\n    z-index: -1;\n    opacity: 0.9; }\n  .jp-card-logo.jp-card-mastercard:after {\n    right: 0;\n    background: #FF5F00;\n    z-index: -2; }\n\n.jp-card.jp-card-mastercard.jp-card-identified .jp-card-front .jp-card-logo.jp-card-mastercard, .jp-card.jp-card-mastercard.jp-card-identified .jp-card-back .jp-card-logo.jp-card-mastercard {\n  box-shadow: none; }\n\n.jp-card.jp-card-mastercard.jp-card-identified .jp-card-front:before, .jp-card.jp-card-mastercard.jp-card-identified .jp-card-back:before {\n  background-color: #0061A8; }\n\n.jp-card.jp-card-mastercard.jp-card-identified .jp-card-logo.jp-card-mastercard {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-maestro {\n  color: white;\n  font-style: normal;\n  text-transform: lowercase;\n  font-weight: bold;\n  text-align: center;\n  font-size: 14px;\n  line-height: 84px;\n  z-index: 1;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.6); }\n  .jp-card-logo.jp-card-maestro:before, .jp-card-logo.jp-card-maestro:after {\n    content: " ";\n    display: block;\n    width: 36px;\n    top: 0;\n    position: absolute;\n    height: 36px;\n    border-radius: 18px; }\n  .jp-card-logo.jp-card-maestro:before {\n    left: 0;\n    background: #EB001B;\n    z-index: -2; }\n  .jp-card-logo.jp-card-maestro:after {\n    right: 0;\n    background: #00A2E5;\n    z-index: -1;\n    opacity: 0.8; }\n\n.jp-card.jp-card-maestro.jp-card-identified .jp-card-front .jp-card-logo.jp-card-maestro, .jp-card.jp-card-maestro.jp-card-identified .jp-card-back .jp-card-logo.jp-card-maestro {\n  box-shadow: none; }\n\n.jp-card.jp-card-maestro.jp-card-identified .jp-card-front:before, .jp-card.jp-card-maestro.jp-card-identified .jp-card-back:before {\n  background-color: #0B2C5F; }\n\n.jp-card.jp-card-maestro.jp-card-identified .jp-card-logo.jp-card-maestro {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-dankort {\n  width: 60px;\n  height: 36px;\n  padding: 3px;\n  border-radius: 8px;\n  border: #000000 1px solid;\n  background-color: #FFFFFF; }\n  .jp-card-logo.jp-card-dankort .dk {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: hidden; }\n    .jp-card-logo.jp-card-dankort .dk:before {\n      background-color: #ED1C24;\n      content: \'\';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      display: block;\n      border-radius: 6px; }\n    .jp-card-logo.jp-card-dankort .dk:after {\n      content: \'\';\n      position: absolute;\n      top: 50%;\n      margin-top: -7.7px;\n      right: 0;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 7px 7px 10px 0;\n      border-color: transparent #ED1C24 transparent transparent;\n      z-index: 1; }\n  .jp-card-logo.jp-card-dankort .d, .jp-card-logo.jp-card-dankort .k {\n    position: absolute;\n    top: 50%;\n    width: 50%;\n    display: block;\n    height: 15.4px;\n    margin-top: -7.7px;\n    background: white; }\n  .jp-card-logo.jp-card-dankort .d {\n    left: 0;\n    border-radius: 0 8px 10px 0; }\n    .jp-card-logo.jp-card-dankort .d:before {\n      content: \'\';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      background: #ED1C24;\n      border-radius: 2px 4px 6px 0px;\n      height: 5px;\n      width: 7px;\n      margin: -3px 0 0 -4px; }\n  .jp-card-logo.jp-card-dankort .k {\n    right: 0; }\n    .jp-card-logo.jp-card-dankort .k:before, .jp-card-logo.jp-card-dankort .k:after {\n      content: \'\';\n      position: absolute;\n      right: 50%;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      margin-right: -1px; }\n    .jp-card-logo.jp-card-dankort .k:before {\n      top: 0;\n      border-width: 8px 5px 0 0;\n      border-color: #ED1C24 transparent transparent transparent; }\n    .jp-card-logo.jp-card-dankort .k:after {\n      bottom: 0;\n      border-width: 0 5px 8px 0;\n      border-color: transparent transparent #ED1C24 transparent; }\n\n.jp-card.jp-card-dankort.jp-card-identified .jp-card-front:before, .jp-card.jp-card-dankort.jp-card-identified .jp-card-back:before {\n  background-color: #0055C7; }\n\n.jp-card.jp-card-dankort.jp-card-identified .jp-card-logo.jp-card-dankort {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-elo {\n  height: 50px;\n  width: 50px;\n  border-radius: 100%;\n  background: black;\n  color: white;\n  text-align: center;\n  text-transform: lowercase;\n  font-size: 21px;\n  font-style: normal;\n  letter-spacing: 1px;\n  font-weight: bold;\n  padding-top: 13px; }\n  .jp-card-logo.jp-card-elo .e, .jp-card-logo.jp-card-elo .l, .jp-card-logo.jp-card-elo .o {\n    display: inline-block;\n    position: relative; }\n  .jp-card-logo.jp-card-elo .e {\n    -webkit-transform: rotate(-15deg);\n    -moz-transform: rotate(-15deg);\n    -ms-transform: rotate(-15deg);\n    -o-transform: rotate(-15deg);\n    transform: rotate(-15deg); }\n  .jp-card-logo.jp-card-elo .o {\n    position: relative;\n    display: inline-block;\n    width: 12px;\n    height: 12px;\n    right: 0;\n    top: 7px;\n    border-radius: 100%;\n    background-image: -webkit-linear-gradient( yellow 50%, red 50%);\n    background-image: linear-gradient( yellow 50%, red 50%);\n    -webkit-transform: rotate(40deg);\n    -moz-transform: rotate(40deg);\n    -ms-transform: rotate(40deg);\n    -o-transform: rotate(40deg);\n    transform: rotate(40deg);\n    text-indent: -9999px; }\n    .jp-card-logo.jp-card-elo .o:before {\n      content: "";\n      position: absolute;\n      width: 49%;\n      height: 49%;\n      background: black;\n      border-radius: 100%;\n      text-indent: -99999px;\n      top: 25%;\n      left: 25%; }\n\n.jp-card.jp-card-elo.jp-card-identified .jp-card-front:before, .jp-card.jp-card-elo.jp-card-identified .jp-card-back:before {\n  background-color: #6F6969; }\n\n.jp-card.jp-card-elo.jp-card-identified .jp-card-logo.jp-card-elo {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-jcb {\n  border-radius: 5px 0px 5px 0px;\n  -moz-border-radius: 5px 0px 5px 0px;\n  -webkit-border-radius: 5px 0px 5px 0px;\n  background-color: white;\n  font-style: normal;\n  color: white;\n  width: 50px;\n  padding: 2px 0 0 2px; }\n  .jp-card-logo.jp-card-jcb > div {\n    width: 15px;\n    margin-right: 1px;\n    display: inline-block;\n    text-align: center;\n    text-shadow: 1px 1px rgba(0, 0, 0, 0.6);\n    border-radius: 5px 0px 5px 0px;\n    -moz-border-radius: 5px 0px 5px 0px;\n    -webkit-border-radius: 5px 0px 5px 0px; }\n    .jp-card-logo.jp-card-jcb > div:before, .jp-card-logo.jp-card-jcb > div:after {\n      content: " ";\n      display: block;\n      height: 8px; }\n    .jp-card-logo.jp-card-jcb > div.j {\n      background-color: #000063;\n      background-image: -webkit-linear-gradient(left, #000063, #008cff);\n      background-image: linear-gradient(to right,#000063, #008cff); }\n    .jp-card-logo.jp-card-jcb > div.c {\n      background-color: #630000;\n      background-image: -webkit-linear-gradient(left, #630000, #ff008d);\n      background-image: linear-gradient(to right,#630000, #ff008d); }\n    .jp-card-logo.jp-card-jcb > div.b {\n      background-color: #006300;\n      background-image: -webkit-linear-gradient(left, #006300, #00ff00);\n      background-image: linear-gradient(to right,#006300, #00ff00); }\n\n.jp-card.jp-card-jcb.jp-card-identified .jp-card-front:before, .jp-card.jp-card-jcb.jp-card-identified .jp-card-back:before {\n  background-color: #CB8000; }\n\n.jp-card.jp-card-jcb.jp-card-identified .jp-card-logo.jp-card-jcb {\n  opacity: 1;\n  box-shadow: none; }\n\n.jp-card-logo.jp-card-dinersclub {\n  font-family: serif;\n  height: 40px;\n  width: 100px;\n  color: white;\n  font-size: 17px;\n  font-style: normal;\n  letter-spacing: 1px; }\n  .jp-card-logo.jp-card-dinersclub::before, .jp-card-logo.jp-card-dinersclub::after {\n    display: block;\n    position: relative; }\n  .jp-card-logo.jp-card-dinersclub::before {\n    content: \'Diners Club\'; }\n  .jp-card-logo.jp-card-dinersclub::after {\n    content: \'International\';\n    text-transform: uppercase;\n    font-size: 0.6em; }\n\n.jp-card.jp-card-dinersclub .jp-card-front .jp-card-logo {\n  box-shadow: none !important; }\n\n.jp-card.jp-card-dinersclub.jp-card-identified .jp-card-front:before, .jp-card.jp-card-dinersclub.jp-card-identified .jp-card-back:before {\n  background-color: #999; }\n\n.jp-card.jp-card-dinersclub.jp-card-identified .jp-card-logo.jp-card-dinersclub {\n  opacity: 1; }\n\n.jp-card-container {\n  -webkit-perspective: 1000px;\n  -moz-perspective: 1000px;\n  perspective: 1000px;\n  width: 350px;\n  max-width: 100%;\n  height: 200px;\n  margin: auto;\n  z-index: 1;\n  position: relative; }\n\n.jp-card {\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  line-height: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-width: 315px;\n  border-radius: 10px;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transition: all 400ms linear;\n  -moz-transition: all 400ms linear;\n  transition: all 400ms linear; }\n  .jp-card > *, .jp-card > *:before, .jp-card > *:after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    font-family: inherit; }\n  .jp-card.jp-card-flipped {\n    -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n    -ms-transform: rotateY(180deg);\n    -o-transform: rotateY(180deg);\n    transform: rotateY(180deg); }\n  .jp-card .jp-card-front, .jp-card .jp-card-back {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transform-style: preserve-3d;\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    -o-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-transition: all 400ms linear;\n    -moz-transition: all 400ms linear;\n    transition: all 400ms linear;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    border-radius: 10px;\n    background: #DDD; }\n    .jp-card .jp-card-front:before, .jp-card .jp-card-back:before {\n      content: " ";\n      display: block;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      border-radius: 10px;\n      -webkit-transition: all 400ms ease;\n      -moz-transition: all 400ms ease;\n      transition: all 400ms ease; }\n    .jp-card .jp-card-front:after, .jp-card .jp-card-back:after {\n      content: " ";\n      display: block; }\n    .jp-card .jp-card-front .jp-card-display, .jp-card .jp-card-back .jp-card-display {\n      color: white;\n      font-weight: normal;\n      opacity: 0.5;\n      -webkit-transition: opacity 400ms linear;\n      -moz-transition: opacity 400ms linear;\n      transition: opacity 400ms linear; }\n      .jp-card .jp-card-front .jp-card-display.jp-card-focused, .jp-card .jp-card-back .jp-card-display.jp-card-focused {\n        opacity: 1;\n        font-weight: 700; }\n    .jp-card .jp-card-front .jp-card-cvc, .jp-card .jp-card-back .jp-card-cvc {\n      font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;\n      font-size: 14px; }\n    .jp-card .jp-card-front .jp-card-shiny, .jp-card .jp-card-back .jp-card-shiny {\n      width: 50px;\n      height: 35px;\n      border-radius: 5px;\n      background: #CCC;\n      position: relative; }\n      .jp-card .jp-card-front .jp-card-shiny:before, .jp-card .jp-card-back .jp-card-shiny:before {\n        content: " ";\n        display: block;\n        width: 70%;\n        height: 60%;\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n        background: #d9d9d9;\n        position: absolute;\n        top: 20%; }\n  .jp-card .jp-card-front .jp-card-logo {\n    position: absolute;\n    opacity: 0;\n    right: 5%;\n    top: 8%;\n    -webkit-transition: 400ms;\n    -moz-transition: 400ms;\n    transition: 400ms; }\n  .jp-card .jp-card-front .jp-card-lower {\n    width: 80%;\n    position: absolute;\n    left: 10%;\n    bottom: 30px; }\n    @media only screen and (max-width: 480px) {\n      .jp-card .jp-card-front .jp-card-lower {\n        width: 90%;\n        left: 5%; } }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-cvc {\n      visibility: hidden;\n      float: right;\n      position: relative;\n      bottom: 5px; }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-number {\n      font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;\n      font-size: 24px;\n      clear: both;\n      margin-bottom: 30px; }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-expiry {\n      font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;\n      letter-spacing: 0em;\n      position: relative;\n      float: right;\n      width: 25%; }\n      .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:before, .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:after {\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        font-weight: bold;\n        font-size: 7px;\n        white-space: pre;\n        display: block;\n        opacity: .5; }\n      .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:before {\n        content: attr(data-before);\n        margin-bottom: 2px;\n        font-size: 7px;\n        text-transform: uppercase; }\n      .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:after {\n        position: absolute;\n        content: attr(data-after);\n        text-align: right;\n        right: 100%;\n        margin-right: 5px;\n        margin-top: 2px;\n        bottom: 0; }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-name {\n      text-transform: uppercase;\n      font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;\n      font-size: 20px;\n      max-height: 45px;\n      position: absolute;\n      bottom: 0;\n      width: 190px;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: horizontal;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .jp-card .jp-card-back {\n    -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n    -ms-transform: rotateY(180deg);\n    -o-transform: rotateY(180deg);\n    transform: rotateY(180deg); }\n    .jp-card .jp-card-back .jp-card-bar {\n      background-color: #444;\n      background-image: -webkit-linear-gradient(#444, #333);\n      background-image: linear-gradient(#444, #333);\n      width: 100%;\n      height: 20%;\n      position: absolute;\n      top: 10%; }\n    .jp-card .jp-card-back:after {\n      content: " ";\n      display: block;\n      background-color: #FFF;\n      background-image: -webkit-linear-gradient(#FFF, #FFF);\n      background-image: linear-gradient(#FFF, #FFF);\n      width: 80%;\n      height: 16%;\n      position: absolute;\n      top: 40%;\n      left: 2%; }\n    .jp-card .jp-card-back .jp-card-cvc {\n      position: absolute;\n      top: 40%;\n      left: 85%;\n      -webkit-transition-delay: 600ms;\n      -moz-transition-delay: 600ms;\n      transition-delay: 600ms; }\n    .jp-card .jp-card-back .jp-card-shiny {\n      position: absolute;\n      top: 66%;\n      left: 2%; }\n      .jp-card .jp-card-back .jp-card-shiny:after {\n        content: "This card has been issued by Jesse Pollak and is licensed for anyone to use anywhere for free. It comes with no warranty. For support issues, please visit: github.com/jessepollak/card.";\n        position: absolute;\n        left: 120%;\n        top: 5%;\n        color: white;\n        font-size: 7px;\n        width: 230px;\n        opacity: .5; }\n  .jp-card.jp-card-identified {\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); }\n    .jp-card.jp-card-identified .jp-card-front, .jp-card.jp-card-identified .jp-card-back {\n      background-color: #000;\n      background-color: rgba(0, 0, 0, 0.5); }\n      .jp-card.jp-card-identified .jp-card-front:before, .jp-card.jp-card-identified .jp-card-back:before {\n        -webkit-transition: all 400ms ease;\n        -moz-transition: all 400ms ease;\n        transition: all 400ms ease;\n        background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n        background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n        opacity: 1; }\n      .jp-card.jp-card-identified .jp-card-front .jp-card-logo, .jp-card.jp-card-identified .jp-card-back .jp-card-logo {\n        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3); }\n    .jp-card.jp-card-identified.no-radial-gradient .jp-card-front:before, .jp-card.jp-card-identified.no-radial-gradient .jp-card-back:before {\n      background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n      background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%); }\n', ""])
}, function(module, exports) {
	module.exports = function() {
		var list = [];
		return list.toString = function() {
			for(var result = [], i = 0; i < this.length; i++) {
				var item = this[i];
				item[2] ? result.push("@media " + item[2] + "{" + item[1] + "}") : result.push(item[1])
			}
			return result.join("")
		}, list.i = function(modules, mediaQuery) {
			"string" == typeof modules && (modules = [
				[null, modules, ""]
			]);
			for(var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
				var id = this[i][0];
				"number" == typeof id && (alreadyImportedModules[id] = !0)
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				"number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), list.push(item))
			}
		}, list
	}
}, function(module, exports, __webpack_require__) {
	function memoize(fn) {
		var memo;
		return function() {
			return void 0 === memo && (memo = fn.apply(this, arguments)), memo
		}
	}
	var stylesInDom = {},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
		}),
		getHeadElement = memoize(function() {
			return document.head || document.getElementsByTagName("head")[0]
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i],
				domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
				for(; j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options))
			} else {
				var parts = [];
				for(j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
				stylesInDom[item.id] = {
					id: item.id,
					refs: 1,
					parts: parts
				}
			}
		}
	}

	function listToStyles(list) {
		for(var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
			var item = list[i],
				id = item[0],
				part = {
					css: item[1],
					media: item[2],
					sourceMap: item[3]
				};
			newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
				id: id,
				parts: [part]
			})
		}
		return styles
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement(),
			lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling) : head.appendChild(styleElement) : head.insertBefore(styleElement, head.firstChild), styleElementsInsertedAtTop.push(styleElement);
		else {
			if("bottom" !== options.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
			head.appendChild(styleElement)
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		0 <= idx && styleElementsInsertedAtTop.splice(idx, 1)
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		return styleElement.type = "text/css", insertStyleElement(options, styleElement), styleElement
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;
		if(options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement = singletonElement || createStyleElement(options), update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0)
		} else remove = obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (styleElement = function(options) {
			var linkElement = document.createElement("link");
			return linkElement.rel = "stylesheet", insertStyleElement(options, linkElement), linkElement
		}(options), update = function(linkElement, obj) {
			var css = obj.css,
				sourceMap = obj.sourceMap;
			sourceMap && (css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
			var blob = new Blob([css], {
					type: "text/css"
				}),
				oldSrc = linkElement.href;
			linkElement.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc)
		}.bind(null, styleElement), function() {
			removeStyleElement(styleElement), styleElement.href && URL.revokeObjectURL(styleElement.href)
		}) : (styleElement = createStyleElement(options), update = function(styleElement, obj) {
			var css = obj.css,
				media = obj.media;
			media && styleElement.setAttribute("media", media);
			if(styleElement.styleSheet) styleElement.styleSheet.cssText = css;
			else {
				for(; styleElement.firstChild;) styleElement.removeChild(styleElement.firstChild);
				styleElement.appendChild(document.createTextNode(css))
			}
		}.bind(null, styleElement), function() {
			removeStyleElement(styleElement)
		});
		return update(obj),
			function(newObj) {
				if(newObj) {
					if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
					update(obj = newObj)
				} else remove()
			}
	}
	module.exports = function(list, options) {
		void 0 === (options = options || {}).singleton && (options.singleton = isOldIE()), void 0 === options.insertAt && (options.insertAt = "bottom");
		var styles = listToStyles(list);
		return addStylesToDom(styles, options),
			function(newList) {
				for(var mayRemove = [], i = 0; i < styles.length; i++) {
					var item = styles[i];
					(domStyle = stylesInDom[item.id]).refs--, mayRemove.push(domStyle)
				}
				newList && addStylesToDom(listToStyles(newList), options);
				for(i = 0; i < mayRemove.length; i++) {
					var domStyle;
					if(0 === (domStyle = mayRemove[i]).refs) {
						for(var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
						delete stylesInDom[domStyle.id]
					}
				}
			}
	};
	var textStore, replaceText = (textStore = [], function(index, replacement) {
		return textStore[index] = replacement, textStore.filter(Boolean).join("\n")
	});

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
		if(styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css);
		else {
			var cssNode = document.createTextNode(css),
				childNodes = styleElement.childNodes;
			childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode)
		}
	}
}, function(module, exports) {
	(function() {
		var QJ, rreturn, rtrim;
		(QJ = function(selector) {
			return QJ.isDOMElement(selector) ? selector : document.querySelectorAll(selector)
		}).isDOMElement = function(el) {
			return el && null != el.nodeName
		}, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, QJ.trim = function(text) {
			return null === text ? "" : (text + "").replace(rtrim, "")
		}, rreturn = /\r/g, QJ.val = function(el, val) {
			var ret;
			return 1 < arguments.length ? el.value = val : "string" == typeof(ret = el.value) ? ret.replace(rreturn, "") : null === ret ? "" : ret
		}, QJ.preventDefault = function(eventObject) {
			if("function" != typeof eventObject.preventDefault) return eventObject.returnValue = !1;
			eventObject.preventDefault()
		}, QJ.normalizeEvent = function(e) {
			var original;
			return null == (e = {
				which: null != (original = e).which ? original.which : void 0,
				target: original.target || original.srcElement,
				preventDefault: function() {
					return QJ.preventDefault(original)
				},
				originalEvent: original,
				data: original.data || original.detail
			}).which && (e.which = null != original.charCode ? original.charCode : original.keyCode), e
		}, QJ.on = function(element, eventName, callback) {
			var el, i, j, len, len1, multEventName, originalCallback, ref;
			if(element.length)
				for(i = 0, len = element.length; i < len; i++) el = element[i], QJ.on(el, eventName, callback);
			else {
				if(!eventName.match(" ")) return originalCallback = callback, callback = function(e) {
					return e = QJ.normalizeEvent(e), originalCallback(e)
				}, element.addEventListener ? element.addEventListener(eventName, callback, !1) : element.attachEvent ? (eventName = "on" + eventName, element.attachEvent(eventName, callback)) : void(element["on" + eventName] = callback);
				for(j = 0, len1 = (ref = eventName.split(" ")).length; j < len1; j++) multEventName = ref[j], QJ.on(element, multEventName, callback)
			}
		}, QJ.addClass = function(el, className) {
			var e;
			return el.length ? function() {
				var i, len, results;
				for(results = [], i = 0, len = el.length; i < len; i++) e = el[i], results.push(QJ.addClass(e, className));
				return results
			}() : el.classList ? el.classList.add(className) : el.className += " " + className
		}, QJ.hasClass = function(el, className) {
			var e, hasClass, i, len;
			if(el.length) {
				for(hasClass = !0, i = 0, len = el.length; i < len; i++) e = el[i], hasClass = hasClass && QJ.hasClass(e, className);
				return hasClass
			}
			return el.classList ? el.classList.contains(className) : new RegExp("(^| )" + className + "( |$)", "gi").test(el.className)
		}, QJ.removeClass = function(el, className) {
			var cls, e, i, len, ref, results;
			if(el.length) return function() {
				var i, len, results;
				for(results = [], i = 0, len = el.length; i < len; i++) e = el[i], results.push(QJ.removeClass(e, className));
				return results
			}();
			if(el.classList) {
				for(results = [], i = 0, len = (ref = className.split(" ")).length; i < len; i++) cls = ref[i], results.push(el.classList.remove(cls));
				return results
			}
			return el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ")
		}, QJ.toggleClass = function(el, className, bool) {
			var e;
			return el.length ? function() {
				var i, len, results;
				for(results = [], i = 0, len = el.length; i < len; i++) e = el[i], results.push(QJ.toggleClass(e, className, bool));
				return results
			}() : bool ? QJ.hasClass(el, className) ? void 0 : QJ.addClass(el, className) : QJ.removeClass(el, className)
		}, QJ.append = function(el, toAppend) {
			var e;
			return el.length ? function() {
				var i, len, results;
				for(results = [], i = 0, len = el.length; i < len; i++) e = el[i], results.push(QJ.append(e, toAppend));
				return results
			}() : el.insertAdjacentHTML("beforeend", toAppend)
		}, QJ.find = function(el, selector) {
			return(el instanceof NodeList || el instanceof Array) && (el = el[0]), el.querySelectorAll(selector)
		}, QJ.trigger = function(el, name, data) {
			var ev;
			try {
				ev = new CustomEvent(name, {
					detail: data
				})
			} catch(error) {
				(ev = document.createEvent("CustomEvent")).initCustomEvent ? ev.initCustomEvent(name, !0, !0, data) : ev.initEvent(name, !0, !0, data)
			}
			return el.dispatchEvent(ev)
		}, module.exports = QJ
	}).call(this)
}, function(module, exports, __webpack_require__) {
	(function(global) {
		(function() {
			var Payment, QJ, cardFromNumber, cardFromType, cards, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlash, formatMonthExpiry, hasTextSelected, luhnCheck, reFormatCardNumber, restrictCVC, restrictCardNumber, restrictCombinedExpiry, restrictExpiry, restrictMonthExpiry, restrictNumeric, restrictYearExpiry, setCardType, indexOf = [].indexOf || function(item) {
				for(var i = 0, l = this.length; i < l; i++)
					if(i in this && this[i] === item) return i;
				return -1
			};
			QJ = __webpack_require__(6), cards = [{
				type: "amex",
				pattern: /^3[47]/,
				format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
				length: [15],
				cvcLength: [4],
				luhn: !0
			}, {
				type: "dankort",
				pattern: /^5019/,
				format: defaultFormat = /(\d{1,4})/g,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "hipercard",
				pattern: /^(384100|384140|384160|606282|637095|637568|60(?!11))/,
				format: defaultFormat,
				length: [14, 15, 16, 17, 18, 19],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "dinersclub",
				pattern: /^(36|38|30[0-5])/,
				format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
				length: [14],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "discover",
				pattern: /^(6011|65|64[4-9]|622)/,
				format: defaultFormat,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "jcb",
				pattern: /^35/,
				format: defaultFormat,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "laser",
				pattern: /^(6706|6771|6709)/,
				format: defaultFormat,
				length: [16, 17, 18, 19],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "maestro",
				pattern: /^(5018|5020|5038|6304|6703|6708|6759|676[1-3])/,
				format: defaultFormat,
				length: [12, 13, 14, 15, 16, 17, 18, 19],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "mastercard",
				pattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
				format: defaultFormat,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "unionpay",
				pattern: /^62/,
				format: defaultFormat,
				length: [16, 17, 18, 19],
				cvcLength: [3],
				luhn: !1
			}, {
				type: "visaelectron",
				pattern: /^4(026|17500|405|508|844|91[37])/,
				format: defaultFormat,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "elo",
				pattern: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/,
				format: defaultFormat,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "visa",
				pattern: /^4/,
				format: defaultFormat,
				length: [13, 16],
				cvcLength: [3],
				luhn: !0
			}], cardFromNumber = function(num) {
				var card, j, len;
				for(num = (num + "").replace(/\D/g, ""), j = 0, len = cards.length; j < len; j++)
					if((card = cards[j]).pattern.test(num)) return card
			}, cardFromType = function(type) {
				var card, j, len;
				for(j = 0, len = cards.length; j < len; j++)
					if((card = cards[j]).type === type) return card
			}, luhnCheck = function(num) {
				var digit, digits, j, len, odd, sum;
				for(odd = !0, j = sum = 0, len = (digits = (num + "").split("").reverse()).length; j < len; j++) digit = digits[j], digit = parseInt(digit, 10), (odd = !odd) && (digit *= 2), 9 < digit && (digit -= 9), sum += digit;
				return sum % 10 == 0
			}, hasTextSelected = function(target) {
				var ref;
				try {
					if(null != target.selectionStart && target.selectionStart !== target.selectionEnd) return !0;
					if(null != ("undefined" != typeof document && null !== document && null != (ref = document.selection) ? ref.createRange : void 0) && document.selection.createRange().text) return !0
				} catch(error) {
					error
				}
				return !1
			}, reFormatCardNumber = function(e) {
				return setTimeout(function() {
					var target, value;
					return target = e.target, value = QJ.val(target), value = Payment.fns.formatCardNumber(value), QJ.val(target, value), QJ.trigger(target, "change")
				})
			}, formatCardNumber = function(maxLength) {
				return function(e) {
					var card, digit, i, j, len, length, target, upperLength, upperLengths, value;
					if(digit = String.fromCharCode(e.which), /^\d+$/.test(digit)) {
						for(target = e.target, value = QJ.val(target), card = cardFromNumber(value + digit), length = (value.replace(/\D/g, "") + digit).length, upperLengths = [16], card && (upperLengths = card.length), maxLength && (upperLengths = upperLengths.filter(function(x) {
								return x <= maxLength
							})), i = j = 0, len = upperLengths.length; j < len; i = ++j)
							if(!((upperLength = upperLengths[i]) <= length && upperLengths[i + 1]) && upperLength <= length) return;
						if(!hasTextSelected(target)) return(card && "amex" === card.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/).test(value) ? (e.preventDefault(), QJ.val(target, value + " " + digit), QJ.trigger(target, "change")) : void 0
					}
				}
			}, formatBackCardNumber = function(e) {
				var target, value;
				if(target = e.target, value = QJ.val(target), !e.meta && 8 === e.which && !hasTextSelected(target)) return /\d\s$/.test(value) ? (e.preventDefault(), QJ.val(target, value.replace(/\d\s$/, "")), QJ.trigger(target, "change")) : /\s\d?$/.test(value) ? (e.preventDefault(), QJ.val(target, value.replace(/\s\d?$/, "")), QJ.trigger(target, "change")) : void 0
			}, formatExpiry = function(e) {
				var digit, target, val;
				if(digit = String.fromCharCode(e.which), /^\d+$/.test(digit)) return target = e.target, val = QJ.val(target) + digit, /^\d$/.test(val) && "0" !== val && "1" !== val ? (e.preventDefault(), QJ.val(target, "0" + val + " / "), QJ.trigger(target, "change")) : /^\d\d$/.test(val) ? (e.preventDefault(), QJ.val(target, val + " / "), QJ.trigger(target, "change")) : void 0
			}, formatMonthExpiry = function(e) {
				var digit, target, val;
				if(digit = String.fromCharCode(e.which), /^\d+$/.test(digit)) return target = e.target, val = QJ.val(target) + digit, /^\d$/.test(val) && "0" !== val && "1" !== val ? (e.preventDefault(), QJ.val(target, "0" + val), QJ.trigger(target, "change")) : /^\d\d$/.test(val) ? (e.preventDefault(), QJ.val(target, "" + val), QJ.trigger(target, "change")) : void 0
			}, formatForwardExpiry = function(e) {
				var digit, target, val;
				if(digit = String.fromCharCode(e.which), /^\d+$/.test(digit)) return target = e.target, val = QJ.val(target), /^\d\d$/.test(val) ? (QJ.val(target, val + " / "), QJ.trigger(target, "change")) : void 0
			}, formatForwardSlash = function(e) {
				var target, val;
				if("/" === String.fromCharCode(e.which)) return target = e.target, val = QJ.val(target), /^\d$/.test(val) && "0" !== val ? (QJ.val(target, "0" + val + " / "), QJ.trigger(target, "change")) : void 0
			}, formatBackExpiry = function(e) {
				var target, value;
				if(!e.metaKey && (target = e.target, value = QJ.val(target), 8 === e.which && !hasTextSelected(target))) return /\d(\s|\/)+$/.test(value) ? (e.preventDefault(), QJ.val(target, value.replace(/\d(\s|\/)*$/, "")), QJ.trigger(target, "change")) : /\s\/\s?\d?$/.test(value) ? (e.preventDefault(), QJ.val(target, value.replace(/\s\/\s?\d?$/, "")), QJ.trigger(target, "change")) : void 0
			}, restrictNumeric = function(e) {
				var input;
				return !(!e.metaKey && !e.ctrlKey) || (32 === e.which ? e.preventDefault() : 0 === e.which || (e.which < 33 || (input = String.fromCharCode(e.which), /[\d\s]/.test(input) ? void 0 : e.preventDefault())))
			}, restrictCardNumber = function(maxLength) {
				return function(e) {
					var card, digit, length, target, value;
					if(target = e.target, digit = String.fromCharCode(e.which), /^\d+$/.test(digit) && !hasTextSelected(target)) return value = (QJ.val(target) + digit).replace(/\D/g, ""), length = 16, (card = cardFromNumber(value)) && (length = card.length[card.length.length - 1]), maxLength && (length = Math.min(length, maxLength)), value.length <= length ? void 0 : e.preventDefault()
				}
			}, restrictExpiry = function(e, length) {
				var digit, target;
				if(target = e.target, digit = String.fromCharCode(e.which), /^\d+$/.test(digit) && !hasTextSelected(target)) return(QJ.val(target) + digit).replace(/\D/g, "").length > length ? e.preventDefault() : void 0
			}, restrictCombinedExpiry = function(e) {
				return restrictExpiry(e, 6)
			}, restrictMonthExpiry = function(e) {
				return restrictExpiry(e, 2)
			}, restrictYearExpiry = function(e) {
				return restrictExpiry(e, 4)
			}, restrictCVC = function(e) {
				var digit, target;
				if(target = e.target, digit = String.fromCharCode(e.which), /^\d+$/.test(digit) && !hasTextSelected(target)) return(QJ.val(target) + digit).length <= 4 ? void 0 : e.preventDefault()
			}, setCardType = function(e) {
				var allTypes, card, cardType, target, val;
				if(target = e.target, val = QJ.val(target), cardType = Payment.fns.cardType(val) || "unknown", !QJ.hasClass(target, cardType)) return allTypes = function() {
					var j, len, results;
					for(results = [], j = 0, len = cards.length; j < len; j++) card = cards[j], results.push(card.type);
					return results
				}(), QJ.removeClass(target, "unknown"), QJ.removeClass(target, allTypes.join(" ")), QJ.addClass(target, cardType), QJ.toggleClass(target, "identified", "unknown" !== cardType), QJ.trigger(target, "payment.cardType", cardType)
			}, Payment = function() {
				function Payment() {}
				return Payment.fns = {
					cardExpiryVal: function(value) {
						var month, ref, year;
						return month = (ref = (value = value.replace(/\s/g, "")).split("/", 2))[0], 2 === (null != (year = ref[1]) ? year.length : void 0) && /^\d+$/.test(year) && (year = (new Date).getFullYear().toString().slice(0, 2) + year), {
							month: month = parseInt(month, 10),
							year: year = parseInt(year, 10)
						}
					},
					validateCardNumber: function(num) {
						var card, ref;
						return num = (num + "").replace(/\s+|-/g, ""), !!/^\d+$/.test(num) && (!!(card = cardFromNumber(num)) && (ref = num.length, 0 <= indexOf.call(card.length, ref) && (!1 === card.luhn || luhnCheck(num))))
					},
					validateCardExpiry: function(month, year) {
						var currentTime, expiry, ref, ref1;
						return "object" == typeof month && "month" in month ? (month = (ref = month).month, year = ref.year) : "string" == typeof month && 0 <= indexOf.call(month, "/") && (month = (ref1 = Payment.fns.cardExpiryVal(month)).month, year = ref1.year), !(!month || !year) && (month = QJ.trim(month), year = QJ.trim(year), !!/^\d+$/.test(month) && (!!/^\d+$/.test(year) && (!!((month = parseInt(month, 10)) && month <= 12) && (2 === year.length && (year = (new Date).getFullYear().toString().slice(0, 2) + year), expiry = new Date(year, month), currentTime = new Date, expiry.setMonth(expiry.getMonth() - 1), expiry.setMonth(expiry.getMonth() + 1, 1), currentTime < expiry))))
					},
					validateCardCVC: function(cvc, type) {
						var ref, ref1;
						return cvc = QJ.trim(cvc), !!/^\d+$/.test(cvc) && (type && cardFromType(type) ? (ref = cvc.length, 0 <= indexOf.call(null != (ref1 = cardFromType(type)) ? ref1.cvcLength : void 0, ref)) : 3 <= cvc.length && cvc.length <= 4)
					},
					cardType: function(num) {
						var ref;
						return num && (null != (ref = cardFromNumber(num)) ? ref.type : void 0) || null
					},
					formatCardNumber: function(num) {
						var card, groups, ref, upperLength;
						return(card = cardFromNumber(num)) ? (upperLength = card.length[card.length.length - 1], num = (num = num.replace(/\D/g, "")).slice(0, upperLength), card.format.global ? null != (ref = num.match(card.format)) ? ref.join(" ") : void 0 : null != (groups = card.format.exec(num)) ? (groups.shift(), (groups = groups.filter(function(n) {
							return n
						})).join(" ")) : void 0) : num
					}
				}, Payment.restrictNumeric = function(el) {
					return QJ.on(el, "keypress", restrictNumeric)
				}, Payment.cardExpiryVal = function(el) {
					return Payment.fns.cardExpiryVal(QJ.val(el))
				}, Payment.formatCardCVC = function(el) {
					return Payment.restrictNumeric(el), QJ.on(el, "keypress", restrictCVC), el
				}, Payment.formatCardExpiry = function(el) {
					var month, year;
					return Payment.restrictNumeric(el), el.length && 2 === el.length ? (month = el[0], year = el[1], this.formatCardExpiryMultiple(month, year)) : (QJ.on(el, "keypress", restrictCombinedExpiry), QJ.on(el, "keypress", formatExpiry), QJ.on(el, "keypress", formatForwardSlash), QJ.on(el, "keypress", formatForwardExpiry), QJ.on(el, "keydown", formatBackExpiry)), el
				}, Payment.formatCardExpiryMultiple = function(month, year) {
					return QJ.on(month, "keypress", restrictMonthExpiry), QJ.on(month, "keypress", formatMonthExpiry), QJ.on(year, "keypress", restrictYearExpiry)
				}, Payment.formatCardNumber = function(el, maxLength) {
					return Payment.restrictNumeric(el), QJ.on(el, "keypress", restrictCardNumber(maxLength)), QJ.on(el, "keypress", formatCardNumber(maxLength)), QJ.on(el, "keydown", formatBackCardNumber), QJ.on(el, "keyup blur", setCardType), QJ.on(el, "paste", reFormatCardNumber), QJ.on(el, "input", reFormatCardNumber), el
				}, Payment.getCardArray = function() {
					return cards
				}, Payment.setCardArray = function(cardArray) {
					return cards = cardArray, !0
				}, Payment.addToCardArray = function(cardObject) {
					return cards.push(cardObject)
				}, Payment.removeFromCardArray = function(type) {
					var key;
					for(key in cards) cards[key].type === type && cards.splice(key, 1);
					return !0
				}, Payment
			}(), module.exports = Payment, global.Payment = Payment
		}).call(this)
	}).call(exports, function() {
		return this
	}())
}, function(module, exports, __webpack_require__) {
	"use strict";
	module.exports = __webpack_require__(9)
}, function(module, exports, __webpack_require__) {
	"use strict";

	function extend(argument_0, argument_1) {
		var options, name, src, copy, copyIsArray, clone, target = argument_0 || {},
			i = 1,
			length = arguments.length,
			deep = !1;
		for("boolean" == typeof target && (deep = target, target = argument_1 || {}, i = 2), "object" == typeof target || is.fn(target) || (target = {}); i < length; i++)
			if(null != (options = arguments[i]))
				for(name in "string" == typeof options && (options = options.split("")), options) src = target[name], target !== (copy = options[name]) && (deep && copy && (is.hash(copy) || (copyIsArray = is.array(copy))) ? (clone = copyIsArray ? (copyIsArray = !1, src && is.array(src) ? src : []) : src && is.hash(src) ? src : {}, target[name] = extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
		return target
	}
	var is = __webpack_require__(10);
	extend.version = "1.1.3", module.exports = extend
}, function(module, exports) {
	"use strict";
	var symbolValueOf, objProto = Object.prototype,
		owns = objProto.hasOwnProperty,
		toStr = objProto.toString;
	"function" == typeof Symbol && (symbolValueOf = Symbol.prototype.valueOf);

	function isActualNaN(value) {
		return value != value
	}
	var NON_HOST_TYPES = {
			boolean: 1,
			number: 1,
			string: 1,
			undefined: 1
		},
		base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/,
		hexRegex = /^[A-Fa-f0-9]+$/,
		is = {};
	is.a = is.type = function(value, type) {
		return typeof value === type
	}, is.defined = function(value) {
		return void 0 !== value
	}, is.empty = function(value) {
		var key, type = toStr.call(value);
		if("[object Array]" === type || "[object Arguments]" === type || "[object String]" === type) return 0 === value.length;
		if("[object Object]" !== type) return !value;
		for(key in value)
			if(owns.call(value, key)) return !1;
		return !0
	}, is.equal = function(value, other) {
		if(value === other) return !0;
		var key, type = toStr.call(value);
		if(type !== toStr.call(other)) return !1;
		if("[object Object]" === type) {
			for(key in value)
				if(!(is.equal(value[key], other[key]) && key in other)) return !1;
			for(key in other)
				if(!(is.equal(value[key], other[key]) && key in value)) return !1;
			return !0
		}
		if("[object Array]" !== type) return "[object Function]" === type ? value.prototype === other.prototype : "[object Date]" === type && value.getTime() === other.getTime();
		if((key = value.length) !== other.length) return !1;
		for(; key--;)
			if(!is.equal(value[key], other[key])) return !1;
		return !0
	}, is.hosted = function(value, host) {
		var type = typeof host[value];
		return "object" == type ? !!host[value] : !NON_HOST_TYPES[type]
	}, is.instance = is.instanceof = function(value, constructor) {
		return value instanceof constructor
	}, is.nil = is.null = function(value) {
		return null === value
	}, is.undef = is.undefined = function(value) {
		return void 0 === value
	}, is.args = is.arguments = function(value) {
		var isStandardArguments = "[object Arguments]" === toStr.call(value),
			isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
		return isStandardArguments || isOldArguments
	}, is.array = Array.isArray || function(value) {
		return "[object Array]" === toStr.call(value)
	}, is.args.empty = function(value) {
		return is.args(value) && 0 === value.length
	}, is.array.empty = function(value) {
		return is.array(value) && 0 === value.length
	}, is.arraylike = function(value) {
		return !!value && !is.bool(value) && owns.call(value, "length") && isFinite(value.length) && is.number(value.length) && 0 <= value.length
	}, is.bool = is.boolean = function(value) {
		return "[object Boolean]" === toStr.call(value)
	}, is.false = function(value) {
		return is.bool(value) && !1 === Boolean(Number(value))
	}, is.true = function(value) {
		return is.bool(value) && !0 === Boolean(Number(value))
	}, is.date = function(value) {
		return "[object Date]" === toStr.call(value)
	}, is.date.valid = function(value) {
		return is.date(value) && !isNaN(Number(value))
	}, is.element = function(value) {
		return void 0 !== value && "undefined" != typeof HTMLElement && value instanceof HTMLElement && 1 === value.nodeType
	}, is.error = function(value) {
		return "[object Error]" === toStr.call(value)
	}, is.fn = is.function = function(value) {
		if("undefined" != typeof window && value === window.alert) return !0;
		var str = toStr.call(value);
		return "[object Function]" === str || "[object GeneratorFunction]" === str || "[object AsyncFunction]" === str
	}, is.number = function(value) {
		return "[object Number]" === toStr.call(value)
	}, is.infinite = function(value) {
		return value === 1 / 0 || value === -1 / 0
	}, is.decimal = function(value) {
		return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 != 0
	}, is.divisibleBy = function(value, n) {
		var isDividendInfinite = is.infinite(value),
			isDivisorInfinite = is.infinite(n),
			isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && 0 !== n;
		return isDividendInfinite || isDivisorInfinite || isNonZeroNumber && value % n == 0
	}, is.integer = is.int = function(value) {
		return is.number(value) && !isActualNaN(value) && value % 1 == 0
	}, is.maximum = function(value, others) {
		if(isActualNaN(value)) throw new TypeError("NaN is not a valid value");
		if(!is.arraylike(others)) throw new TypeError("second argument must be array-like");
		for(var len = others.length; 0 <= --len;)
			if(value < others[len]) return !1;
		return !0
	}, is.minimum = function(value, others) {
		if(isActualNaN(value)) throw new TypeError("NaN is not a valid value");
		if(!is.arraylike(others)) throw new TypeError("second argument must be array-like");
		for(var len = others.length; 0 <= --len;)
			if(value > others[len]) return !1;
		return !0
	}, is.nan = function(value) {
		return !is.number(value) || value != value
	}, is.even = function(value) {
		return is.infinite(value) || is.number(value) && value == value && value % 2 == 0
	}, is.odd = function(value) {
		return is.infinite(value) || is.number(value) && value == value && value % 2 != 0
	}, is.ge = function(value, other) {
		if(isActualNaN(value) || isActualNaN(other)) throw new TypeError("NaN is not a valid value");
		return !is.infinite(value) && !is.infinite(other) && other <= value
	}, is.gt = function(value, other) {
		if(isActualNaN(value) || isActualNaN(other)) throw new TypeError("NaN is not a valid value");
		return !is.infinite(value) && !is.infinite(other) && other < value
	}, is.le = function(value, other) {
		if(isActualNaN(value) || isActualNaN(other)) throw new TypeError("NaN is not a valid value");
		return !is.infinite(value) && !is.infinite(other) && value <= other
	}, is.lt = function(value, other) {
		if(isActualNaN(value) || isActualNaN(other)) throw new TypeError("NaN is not a valid value");
		return !is.infinite(value) && !is.infinite(other) && value < other
	}, is.within = function(value, start, finish) {
		if(isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) throw new TypeError("NaN is not a valid value");
		if(!is.number(value) || !is.number(start) || !is.number(finish)) throw new TypeError("all arguments must be numbers");
		return is.infinite(value) || is.infinite(start) || is.infinite(finish) || start <= value && value <= finish
	}, is.object = function(value) {
		return "[object Object]" === toStr.call(value)
	}, is.primitive = function(value) {
		return !value || !("object" == typeof value || is.object(value) || is.fn(value) || is.array(value))
	}, is.hash = function(value) {
		return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval
	}, is.regexp = function(value) {
		return "[object RegExp]" === toStr.call(value)
	}, is.string = function(value) {
		return "[object String]" === toStr.call(value)
	}, is.base64 = function(value) {
		return is.string(value) && (!value.length || base64Regex.test(value))
	}, is.hex = function(value) {
		return is.string(value) && (!value.length || hexRegex.test(value))
	}, is.symbol = function(value) {
		return "function" == typeof Symbol && "[object Symbol]" === toStr.call(value) && "symbol" == typeof symbolValueOf.call(value)
	}, module.exports = is
}, function(module, exports) {
	module.exports = jQuery
}]);

function readURL(input) {
		if(input.files && input.files[0]) {
			var reader = new FileReader;
			reader.onload = function(e) {
				$("#wizardPicturePreview").attr("src", e.target.result).fadeIn("slow")
			}, reader.readAsDataURL(input.files[0])
		}
	}! function(factory) {
		"function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == typeof module && module.exports ? module.exports = factory(require("jquery")) : factory(jQuery)
	}(function($) {
		$.extend($.fn, {
			validate: function(options) {
				if(this.length) {
					var validator = $.data(this[0], "validator");
					return validator || (this.attr("novalidate", "novalidate"), validator = new $.validator(options, this[0]), $.data(this[0], "validator", validator), validator.settings.onsubmit && (this.on("click.validate", ":submit", function(event) {
						validator.settings.submitHandler && (validator.submitButton = event.target), $(this).hasClass("cancel") && (validator.cancelSubmit = !0), void 0 !== $(this).attr("formnovalidate") && (validator.cancelSubmit = !0)
					}), this.on("submit.validate", function(event) {
						function handle() {
							var hidden, result;
							return !validator.settings.submitHandler || (validator.submitButton && (hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm)), result = validator.settings.submitHandler.call(validator, validator.currentForm, event), validator.submitButton && hidden.remove(), void 0 !== result && result)
						}
						return validator.settings.debug && event.preventDefault(), validator.cancelSubmit ? (validator.cancelSubmit = !1, handle()) : validator.form() ? validator.pendingRequest ? !(validator.formSubmitted = !0) : handle() : (validator.focusInvalid(), !1)
					})), validator)
				}
				options && options.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
			},
			valid: function() {
				var valid, validator, errorList;
				return $(this[0]).is("form") ? valid = this.validate().form() : (errorList = [], valid = !0, validator = $(this[0].form).validate(), this.each(function() {
					(valid = validator.element(this) && valid) || (errorList = errorList.concat(validator.errorList))
				}), validator.errorList = errorList), valid
			},
			rules: function(command, argument) {
				var settings, staticRules, existingRules, data, param, filtered, element = this[0];
				if(null != element && null != element.form) {
					if(command) switch(staticRules = (settings = $.data(element.form, "validator").settings).rules, existingRules = $.validator.staticRules(element), command) {
						case "add":
							$.extend(existingRules, $.validator.normalizeRule(argument)), delete existingRules.messages, staticRules[element.name] = existingRules, argument.messages && (settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages));
							break;
						case "remove":
							return argument ? (filtered = {}, $.each(argument.split(/\s/), function(index, method) {
								filtered[method] = existingRules[method], delete existingRules[method], "required" === method && $(element).removeAttr("aria-required")
							}), filtered) : (delete staticRules[element.name], existingRules)
					}
					return(data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element)).required && (param = data.required, delete data.required, data = $.extend({
						required: param
					}, data), $(element).attr("aria-required", "true")), data.remote && (param = data.remote, delete data.remote, data = $.extend(data, {
						remote: param
					})), data
				}
			}
		}), $.extend($.expr.pseudos || $.expr[":"], {
			blank: function(a) {
				return !$.trim("" + $(a).val())
			},
			filled: function(a) {
				var val = $(a).val();
				return null !== val && !!$.trim("" + val)
			},
			unchecked: function(a) {
				return !$(a).prop("checked")
			}
		}), $.validator = function(options, form) {
			this.settings = $.extend(!0, {}, $.validator.defaults, options), this.currentForm = form, this.init()
		}, $.validator.format = function(source, params) {
			return 1 === arguments.length ? function() {
				var args = $.makeArray(arguments);
				return args.unshift(source), $.validator.format.apply(this, args)
			} : (void 0 === params || (2 < arguments.length && params.constructor !== Array && (params = $.makeArray(arguments).slice(1)), params.constructor !== Array && (params = [params]), $.each(params, function(i, n) {
				source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
					return n
				})
			})), source)
		}, $.extend($.validator, {
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
				errorContainer: $([]),
				errorLabelContainer: $([]),
				onsubmit: !0,
				ignore: ":hidden",
				ignoreTitle: !1,
				onfocusin: function(element) {
					this.lastActive = element, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(element)))
				},
				onfocusout: function(element) {
					this.checkable(element) || !(element.name in this.submitted) && this.optional(element) || this.element(element)
				},
				onkeyup: function(element, event) {
					9 === event.which && "" === this.elementValue(element) || -1 !== $.inArray(event.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (element.name in this.submitted || element.name in this.invalid) && this.element(element)
				},
				onclick: function(element) {
					element.name in this.submitted ? this.element(element) : element.parentNode.name in this.submitted && this.element(element.parentNode)
				},
				highlight: function(element, errorClass, validClass) {
					"radio" === element.type ? this.findByName(element.name).addClass(errorClass).removeClass(validClass) : $(element).addClass(errorClass).removeClass(validClass)
				},
				unhighlight: function(element, errorClass, validClass) {
					"radio" === element.type ? this.findByName(element.name).removeClass(errorClass).addClass(validClass) : $(element).removeClass(errorClass).addClass(validClass)
				}
			},
			setDefaults: function(settings) {
				$.extend($.validator.defaults, settings)
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
				maxlength: $.validator.format("Please enter no more than {0} characters."),
				minlength: $.validator.format("Please enter at least {0} characters."),
				rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
				range: $.validator.format("Please enter a value between {0} and {1}."),
				max: $.validator.format("Please enter a value less than or equal to {0}."),
				min: $.validator.format("Please enter a value greater than or equal to {0}."),
				step: $.validator.format("Please enter a multiple of {0}.")
			},
			autoCreateRanges: !1,
			prototype: {
				init: function() {
					this.labelContainer = $(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm), this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
					var rules, groups = this.groups = {};

					function delegate(event) {
						!this.form && this.hasAttribute("contenteditable") && (this.form = $(this).closest("form")[0]);
						var validator = $.data(this.form, "validator"),
							eventType = "on" + event.type.replace(/^validate/, ""),
							settings = validator.settings;
						settings[eventType] && !$(this).is(settings.ignore) && settings[eventType].call(validator, this, event)
					}
					$.each(this.settings.groups, function(key, value) {
						"string" == typeof value && (value = value.split(/\s/)), $.each(value, function(index, name) {
							groups[name] = key
						})
					}), rules = this.settings.rules, $.each(rules, function(key, value) {
						rules[key] = $.validator.normalizeRule(value)
					}), $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate).on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate), this.settings.invalidHandler && $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
				},
				form: function() {
					return this.checkForm(), $.extend(this.submitted, this.errorMap), this.invalid = $.extend({}, this.errorMap), this.valid() || $(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
				},
				checkForm: function() {
					this.prepareForm();
					for(var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) this.check(elements[i]);
					return this.valid()
				},
				element: function(element) {
					var rs, group, cleanElement = this.clean(element),
						checkElement = this.validationTargetFor(cleanElement),
						v = this,
						result = !0;
					return void 0 === checkElement ? delete this.invalid[cleanElement.name] : (this.prepareElement(checkElement), this.currentElements = $(checkElement), (group = this.groups[checkElement.name]) && $.each(this.groups, function(name, testgroup) {
						testgroup === group && name !== checkElement.name && (cleanElement = v.validationTargetFor(v.clean(v.findByName(name)))) && cleanElement.name in v.invalid && (v.currentElements.push(cleanElement), result = v.check(cleanElement) && result)
					}), rs = !1 !== this.check(checkElement), result = result && rs, this.invalid[checkElement.name] = !rs, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), $(element).attr("aria-invalid", !rs)), result
				},
				showErrors: function(errors) {
					if(errors) {
						var validator = this;
						$.extend(this.errorMap, errors), this.errorList = $.map(this.errorMap, function(message, name) {
							return {
								message: message,
								element: validator.findByName(name)[0]
							}
						}), this.successList = $.grep(this.successList, function(element) {
							return !(element.name in errors)
						})
					}
					this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
				},
				resetForm: function() {
					$.fn.resetForm && $(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
					var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
					this.resetElements(elements)
				},
				resetElements: function(elements) {
					var i;
					if(this.settings.unhighlight)
						for(i = 0; elements[i]; i++) this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, ""), this.findByName(elements[i].name).removeClass(this.settings.validClass);
					else elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
				},
				numberOfInvalids: function() {
					return this.objectLength(this.invalid)
				},
				objectLength: function(obj) {
					var i, count = 0;
					for(i in obj) obj[i] && count++;
					return count
				},
				hideErrors: function() {
					this.hideThese(this.toHide)
				},
				hideThese: function(errors) {
					errors.not(this.containers).text(""), this.addWrapper(errors).hide()
				},
				valid: function() {
					return 0 === this.size()
				},
				size: function() {
					return this.errorList.length
				},
				focusInvalid: function() {
					if(this.settings.focusInvalid) try {
						$(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
					} catch(e) {}
				},
				findLastActive: function() {
					var lastActive = this.lastActive;
					return lastActive && 1 === $.grep(this.errorList, function(n) {
						return n.element.name === lastActive.name
					}).length && lastActive
				},
				elements: function() {
					var validator = this,
						rulesCache = {};
					return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
						var name = this.name || $(this).attr("name");
						return !name && validator.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = $(this).closest("form")[0]), !(name in rulesCache || !validator.objectLength($(this).rules())) && (rulesCache[name] = !0)
					})
				},
				clean: function(selector) {
					return $(selector)[0]
				},
				errors: function() {
					var errorClass = this.settings.errorClass.split(" ").join(".");
					return $(this.settings.errorElement + "." + errorClass, this.errorContext)
				},
				resetInternals: function() {
					this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = $([]), this.toHide = $([])
				},
				reset: function() {
					this.resetInternals(), this.currentElements = $([])
				},
				prepareForm: function() {
					this.reset(), this.toHide = this.errors().add(this.containers)
				},
				prepareElement: function(element) {
					this.reset(), this.toHide = this.errorsFor(element)
				},
				elementValue: function(element) {
					var val, idx, $element = $(element),
						type = element.type;
					return "radio" === type || "checkbox" === type ? this.findByName(element.name).filter(":checked").val() : "number" === type && void 0 !== element.validity ? element.validity.badInput ? "NaN" : $element.val() : (val = element.hasAttribute("contenteditable") ? $element.text() : $element.val(), "file" === type ? "C:\\fakepath\\" === val.substr(0, 12) ? val.substr(12) : 0 <= (idx = val.lastIndexOf("/")) ? val.substr(idx + 1) : 0 <= (idx = val.lastIndexOf("\\")) ? val.substr(idx + 1) : val : "string" == typeof val ? val.replace(/\r/g, "") : val)
				},
				check: function(element) {
					element = this.validationTargetFor(this.clean(element));
					var result, method, rule, rules = $(element).rules(),
						rulesCount = $.map(rules, function(n, i) {
							return i
						}).length,
						dependencyMismatch = !1,
						val = this.elementValue(element);
					if("function" == typeof rules.normalizer) {
						if("string" != typeof(val = rules.normalizer.call(element, val))) throw new TypeError("The normalizer should return a string value.");
						delete rules.normalizer
					}
					for(method in rules) {
						rule = {
							method: method,
							parameters: rules[method]
						};
						try {
							if("dependency-mismatch" === (result = $.validator.methods[method].call(this, val, element, rule.parameters)) && 1 === rulesCount) {
								dependencyMismatch = !0;
								continue
							}
							if(dependencyMismatch = !1, "pending" === result) return void(this.toHide = this.toHide.not(this.errorsFor(element)));
							if(!result) return this.formatAndAdd(element, rule), !1
						} catch(e) {
							throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method."), e
						}
					}
					if(!dependencyMismatch) return this.objectLength(rules) && this.successList.push(element), !0
				},
				customDataMessage: function(element, method) {
					return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg")
				},
				customMessage: function(name, method) {
					var m = this.settings.messages[name];
					return m && (m.constructor === String ? m : m[method])
				},
				findDefined: function() {
					for(var i = 0; i < arguments.length; i++)
						if(void 0 !== arguments[i]) return arguments[i]
				},
				defaultMessage: function(element, rule) {
					"string" == typeof rule && (rule = {
						method: rule
					});
					var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method), !this.settings.ignoreTitle && element.title || void 0, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
						theregex = /\$?\{(\d+)\}/g;
					return "function" == typeof message ? message = message.call(this, rule.parameters, element) : theregex.test(message) && (message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters)), message
				},
				formatAndAdd: function(element, rule) {
					var message = this.defaultMessage(element, rule);
					this.errorList.push({
						message: message,
						element: element,
						method: rule.method
					}), this.errorMap[element.name] = message, this.submitted[element.name] = message
				},
				addWrapper: function(toToggle) {
					return this.settings.wrapper && (toToggle = toToggle.add(toToggle.parent(this.settings.wrapper))), toToggle
				},
				defaultShowErrors: function() {
					var i, elements, error;
					for(i = 0; this.errorList[i]; i++) error = this.errorList[i], this.settings.highlight && this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass), this.showLabel(error.element, error.message);
					if(this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
						for(i = 0; this.successList[i]; i++) this.showLabel(this.successList[i]);
					if(this.settings.unhighlight)
						for(i = 0, elements = this.validElements(); elements[i]; i++) this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
					this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
				},
				validElements: function() {
					return this.currentElements.not(this.invalidElements())
				},
				invalidElements: function() {
					return $(this.errorList).map(function() {
						return this.element
					})
				},
				showLabel: function(element, message) {
					var place, group, errorID, v, error = this.errorsFor(element),
						elementID = this.idOrName(element),
						describedBy = $(element).attr("aria-describedby");
					error.length ? (error.removeClass(this.settings.validClass).addClass(this.settings.errorClass), error.html(message)) : (place = error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || ""), this.settings.wrapper && (place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(place) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, place, $(element)) : place.insertAfter(element), error.is("label") ? error.attr("for", elementID) : 0 === error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length && (errorID = error.attr("id"), describedBy ? describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b")) || (describedBy += " " + errorID) : describedBy = errorID, $(element).attr("aria-describedby", describedBy), (group = this.groups[element.name]) && (v = this, $.each(v.groups, function(name, testgroup) {
						testgroup === group && $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"))
					})))), !message && this.settings.success && (error.text(""), "string" == typeof this.settings.success ? error.addClass(this.settings.success) : this.settings.success(error, element)), this.toShow = this.toShow.add(error)
				},
				errorsFor: function(element) {
					var name = this.escapeCssMeta(this.idOrName(element)),
						describer = $(element).attr("aria-describedby"),
						selector = "label[for='" + name + "'], label[for='" + name + "'] *";
					return describer && (selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #")), this.errors().filter(selector)
				},
				escapeCssMeta: function(string) {
					return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
				},
				idOrName: function(element) {
					return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name)
				},
				validationTargetFor: function(element) {
					return this.checkable(element) && (element = this.findByName(element.name)), $(element).not(this.settings.ignore)[0]
				},
				checkable: function(element) {
					return /radio|checkbox/i.test(element.type)
				},
				findByName: function(name) {
					return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']")
				},
				getLength: function(value, element) {
					switch(element.nodeName.toLowerCase()) {
						case "select":
							return $("option:selected", element).length;
						case "input":
							if(this.checkable(element)) return this.findByName(element.name).filter(":checked").length
					}
					return value.length
				},
				depend: function(param, element) {
					return !this.dependTypes[typeof param] || this.dependTypes[typeof param](param, element)
				},
				dependTypes: {
					boolean: function(param) {
						return param
					},
					string: function(param, element) {
						return !!$(param, element.form).length
					},
					function: function(param, element) {
						return param(element)
					}
				},
				optional: function(element) {
					var val = this.elementValue(element);
					return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch"
				},
				startRequest: function(element) {
					this.pending[element.name] || (this.pendingRequest++, $(element).addClass(this.settings.pendingClass), this.pending[element.name] = !0)
				},
				stopRequest: function(element, valid) {
					this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[element.name], $(element).removeClass(this.settings.pendingClass), valid && 0 === this.pendingRequest && this.formSubmitted && this.form() ? ($(this.currentForm).submit(), this.formSubmitted = !1) : !valid && 0 === this.pendingRequest && this.formSubmitted && ($(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
				},
				previousValue: function(element, method) {
					return method = "string" == typeof method && method || "remote", $.data(element, "previousValue") || $.data(element, "previousValue", {
						old: null,
						valid: !0,
						message: this.defaultMessage(element, {
							method: method
						})
					})
				},
				destroy: function() {
					this.resetForm(), $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
				}
			},
			classRuleSettings: {
				required: {
					required: !0
				},
				email: {
					email: !0
				},
				url: {
					url: !0
				},
				date: {
					date: !0
				},
				dateISO: {
					dateISO: !0
				},
				number: {
					number: !0
				},
				digits: {
					digits: !0
				},
				creditcard: {
					creditcard: !0
				}
			},
			addClassRules: function(className, rules) {
				className.constructor === String ? this.classRuleSettings[className] = rules : $.extend(this.classRuleSettings, className)
			},
			classRules: function(element) {
				var rules = {},
					classes = $(element).attr("class");
				return classes && $.each(classes.split(" "), function() {
					this in $.validator.classRuleSettings && $.extend(rules, $.validator.classRuleSettings[this])
				}), rules
			},
			normalizeAttributeRule: function(rules, type, method, value) {
				/min|max|step/.test(method) && (null === type || /number|range|text/.test(type)) && (value = Number(value), isNaN(value) && (value = void 0)), value || 0 === value ? rules[method] = value : type === method && "range" !== type && (rules[method] = !0)
			},
			attributeRules: function(element) {
				var method, value, rules = {},
					$element = $(element),
					type = element.getAttribute("type");
				for(method in $.validator.methods) value = "required" === method ? ("" === (value = element.getAttribute(method)) && (value = !0), !!value) : $element.attr(method), this.normalizeAttributeRule(rules, type, method, value);
				return rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength) && delete rules.maxlength, rules
			},
			dataRules: function(element) {
				var method, value, rules = {},
					$element = $(element),
					type = element.getAttribute("type");
				for(method in $.validator.methods) value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()), this.normalizeAttributeRule(rules, type, method, value);
				return rules
			},
			staticRules: function(element) {
				var rules = {},
					validator = $.data(element.form, "validator");
				return validator.settings.rules && (rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {}), rules
			},
			normalizeRules: function(rules, element) {
				return $.each(rules, function(prop, val) {
					if(!1 !== val) {
						if(val.param || val.depends) {
							var keepRule = !0;
							switch(typeof val.depends) {
								case "string":
									keepRule = !!$(val.depends, element.form).length;
									break;
								case "function":
									keepRule = val.depends.call(element, element)
							}
							keepRule ? rules[prop] = void 0 === val.param || val.param : ($.data(element.form, "validator").resetElements($(element)), delete rules[prop])
						}
					} else delete rules[prop]
				}), $.each(rules, function(rule, parameter) {
					rules[rule] = $.isFunction(parameter) && "normalizer" !== rule ? parameter(element) : parameter
				}), $.each(["minlength", "maxlength"], function() {
					rules[this] && (rules[this] = Number(rules[this]))
				}), $.each(["rangelength", "range"], function() {
					var parts;
					rules[this] && ($.isArray(rules[this]) ? rules[this] = [Number(rules[this][0]), Number(rules[this][1])] : "string" == typeof rules[this] && (parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/), rules[this] = [Number(parts[0]), Number(parts[1])]))
				}), $.validator.autoCreateRanges && (null != rules.min && null != rules.max && (rules.range = [rules.min, rules.max], delete rules.min, delete rules.max), null != rules.minlength && null != rules.maxlength && (rules.rangelength = [rules.minlength, rules.maxlength], delete rules.minlength, delete rules.maxlength)), rules
			},
			normalizeRule: function(data) {
				if("string" == typeof data) {
					var transformed = {};
					$.each(data.split(/\s/), function() {
						transformed[this] = !0
					}), data = transformed
				}
				return data
			},
			addMethod: function(name, method, message) {
				$.validator.methods[name] = method, $.validator.messages[name] = void 0 !== message ? message : $.validator.messages[name], method.length < 3 && $.validator.addClassRules(name, $.validator.normalizeRule(name))
			},
			methods: {
				required: function(value, element, param) {
					if(!this.depend(param, element)) return "dependency-mismatch";
					if("select" !== element.nodeName.toLowerCase()) return this.checkable(element) ? 0 < this.getLength(value, element) : 0 < value.length;
					var val = $(element).val();
					return val && 0 < val.length
				},
				email: function(value, element) {
					return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
				},
				url: function(value, element) {
					return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value)
				},
				date: function(value, element) {
					return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString())
				},
				dateISO: function(value, element) {
					return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
				},
				number: function(value, element) {
					return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
				},
				digits: function(value, element) {
					return this.optional(element) || /^\d+$/.test(value)
				},
				minlength: function(value, element, param) {
					var length = $.isArray(value) ? value.length : this.getLength(value, element);
					return this.optional(element) || param <= length
				},
				maxlength: function(value, element, param) {
					var length = $.isArray(value) ? value.length : this.getLength(value, element);
					return this.optional(element) || length <= param
				},
				rangelength: function(value, element, param) {
					var length = $.isArray(value) ? value.length : this.getLength(value, element);
					return this.optional(element) || length >= param[0] && length <= param[1]
				},
				min: function(value, element, param) {
					return this.optional(element) || param <= value
				},
				max: function(value, element, param) {
					return this.optional(element) || value <= param
				},
				range: function(value, element, param) {
					return this.optional(element) || value >= param[0] && value <= param[1]
				},
				step: function(value, element, param) {
					function decimalPlaces(num) {
						var match = ("" + num).match(/(?:\.(\d+))?$/);
						return match && match[1] ? match[1].length : 0
					}

					function toInt(num) {
						return Math.round(num * Math.pow(10, decimals))
					}
					var decimals, type = $(element).attr("type"),
						errorMessage = "Step attribute on input type " + type + " is not supported.",
						re = new RegExp("\\b" + type + "\\b"),
						valid = !0;
					if(type && !re.test(["text", "number", "range"].join())) throw new Error(errorMessage);
					return decimals = decimalPlaces(param), (decimalPlaces(value) > decimals || toInt(value) % toInt(param) != 0) && (valid = !1), this.optional(element) || valid
				},
				equalTo: function(value, element, param) {
					var target = $(param);
					return this.settings.onfocusout && target.not(".validate-equalTo-blur").length && target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
						$(element).valid()
					}), value === target.val()
				},
				remote: function(value, element, param, method) {
					if(this.optional(element)) return "dependency-mismatch";
					method = "string" == typeof method && method || "remote";
					var validator, data, optionDataString, previous = this.previousValue(element, method);
					return this.settings.messages[element.name] || (this.settings.messages[element.name] = {}), previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method], this.settings.messages[element.name][method] = previous.message, param = "string" == typeof param && {
						url: param
					} || param, optionDataString = $.param($.extend({
						data: value
					}, param.data)), previous.old === optionDataString ? previous.valid : (previous.old = optionDataString, (validator = this).startRequest(element), (data = {})[element.name] = value, $.ajax($.extend(!0, {
						mode: "abort",
						port: "validate" + element.name,
						dataType: "json",
						data: data,
						context: validator.currentForm,
						success: function(response) {
							var errors, message, submitted, valid = !0 === response || "true" === response;
							validator.settings.messages[element.name][method] = previous.originalMessage, valid ? (submitted = validator.formSubmitted, validator.resetInternals(), validator.toHide = validator.errorsFor(element), validator.formSubmitted = submitted, validator.successList.push(element), validator.invalid[element.name] = !1, validator.showErrors()) : (errors = {}, message = response || validator.defaultMessage(element, {
								method: method,
								parameters: value
							}), errors[element.name] = previous.message = message, validator.invalid[element.name] = !0, validator.showErrors(errors)), previous.valid = valid, validator.stopRequest(element, valid)
						}
					}, param)), "pending")
				}
			}
		});
		var ajax, pendingRequests = {};
		return $.ajaxPrefilter ? $.ajaxPrefilter(function(settings, _, xhr) {
			var port = settings.port;
			"abort" === settings.mode && (pendingRequests[port] && pendingRequests[port].abort(), pendingRequests[port] = xhr)
		}) : (ajax = $.ajax, $.ajax = function(settings) {
			var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
				port = ("port" in settings ? settings : $.ajaxSettings).port;
			return "abort" === mode ? (pendingRequests[port] && pendingRequests[port].abort(), pendingRequests[port] = ajax.apply(this, arguments), pendingRequests[port]) : ajax.apply(this, arguments)
		}), $
	}),
	function($) {
		function bootstrapWizardCreate(element, options) {
			element = $(element);
			var obj = this,
				baseItemSelector = 'li:has([data-toggle="tab"])',
				$settings = $.extend({}, $.fn.bootstrapWizard.defaults, options),
				$activeTab = null,
				$navigation = null;

			function innerTabClick(e) {
				var clickedIndex = $navigation.find(baseItemSelector).index($(e.currentTarget).parent(baseItemSelector));
				if($settings.onTabClick && "function" == typeof $settings.onTabClick && !1 === $settings.onTabClick($activeTab, $navigation, obj.currentIndex(), clickedIndex)) return !1
			}

			function innerTabShown(e) {
				$element = $(e.target).parent();
				var nextTab = $navigation.find(baseItemSelector).index($element);
				return !$element.hasClass("disabled") && ((!$settings.onTabChange || "function" != typeof $settings.onTabChange || !1 !== $settings.onTabChange($activeTab, $navigation, obj.currentIndex(), nextTab)) && ($activeTab = $element, void obj.fixNavigationButtons()))
			}
			this.rebindClick = function(selector, fn) {
				selector.unbind("click", fn).bind("click", fn)
			}, this.fixNavigationButtons = function() {
				if($activeTab.length || ($navigation.find("a:first").tab("show"), $activeTab = $navigation.find(baseItemSelector + ":first")), $($settings.previousSelector, element).toggleClass("disabled", obj.firstIndex() >= obj.currentIndex()), $($settings.nextSelector, element).toggleClass("disabled", obj.currentIndex() >= obj.navigationLength()), obj.rebindClick($($settings.nextSelector, element), obj.next), obj.rebindClick($($settings.previousSelector, element), obj.previous), obj.rebindClick($($settings.lastSelector, element), obj.last), obj.rebindClick($($settings.firstSelector, element), obj.first), $settings.onTabShow && "function" == typeof $settings.onTabShow && !1 === $settings.onTabShow($activeTab, $navigation, obj.currentIndex())) return !1
			}, this.next = function(e) {
				return !element.hasClass("last") && ((!$settings.onNext || "function" != typeof $settings.onNext || !1 !== $settings.onNext($activeTab, $navigation, obj.nextIndex())) && ($index = obj.nextIndex(), void($index > obj.navigationLength() || $navigation.find(baseItemSelector + ":eq(" + $index + ") a").tab("show"))))
			}, this.previous = function(e) {
				return !element.hasClass("first") && ((!$settings.onPrevious || "function" != typeof $settings.onPrevious || !1 !== $settings.onPrevious($activeTab, $navigation, obj.previousIndex())) && ($index = obj.previousIndex(), void($index < 0 || $navigation.find(baseItemSelector + ":eq(" + $index + ") a").tab("show"))))
			}, this.first = function(e) {
				return(!$settings.onFirst || "function" != typeof $settings.onFirst || !1 !== $settings.onFirst($activeTab, $navigation, obj.firstIndex())) && (!element.hasClass("disabled") && void $navigation.find(baseItemSelector + ":eq(0) a").tab("show"))
			}, this.last = function(e) {
				return(!$settings.onLast || "function" != typeof $settings.onLast || !1 !== $settings.onLast($activeTab, $navigation, obj.lastIndex())) && (!element.hasClass("disabled") && void $navigation.find(baseItemSelector + ":eq(" + obj.navigationLength() + ") a").tab("show"))
			}, this.currentIndex = function() {
				return $navigation.find(baseItemSelector).index($activeTab)
			}, this.firstIndex = function() {
				return 0
			}, this.lastIndex = function() {
				return obj.navigationLength()
			}, this.getIndex = function(e) {
				return $navigation.find(baseItemSelector).index(e)
			}, this.nextIndex = function() {
				return $navigation.find(baseItemSelector).index($activeTab) + 1
			}, this.previousIndex = function() {
				return $navigation.find(baseItemSelector).index($activeTab) - 1
			}, this.navigationLength = function() {
				return $navigation.find(baseItemSelector).length - 1
			}, this.activeTab = function() {
				return $activeTab
			}, this.nextTab = function() {
				return $navigation.find(baseItemSelector + ":eq(" + (obj.currentIndex() + 1) + ")").length ? $navigation.find(baseItemSelector + ":eq(" + (obj.currentIndex() + 1) + ")") : null
			}, this.previousTab = function() {
				return obj.currentIndex() <= 0 ? null : $navigation.find(baseItemSelector + ":eq(" + parseInt(obj.currentIndex() - 1) + ")")
			}, this.show = function(index) {
				return isNaN(index) ? element.find(baseItemSelector + " a[href=#" + index + "]").tab("show") : element.find(baseItemSelector + ":eq(" + index + ") a").tab("show")
			}, this.disable = function(index) {
				$navigation.find(baseItemSelector + ":eq(" + index + ")").addClass("disabled")
			}, this.enable = function(index) {
				$navigation.find(baseItemSelector + ":eq(" + index + ")").removeClass("disabled")
			}, this.hide = function(index) {
				$navigation.find(baseItemSelector + ":eq(" + index + ")").hide()
			}, this.display = function(index) {
				$navigation.find(baseItemSelector + ":eq(" + index + ")").show()
			}, this.remove = function(args) {
				var $index = args[0],
					$removeTabPane = void 0 !== args[1] && args[1],
					$item = $navigation.find(baseItemSelector + ":eq(" + $index + ")");
				if($removeTabPane) {
					var $href = $item.find("a").attr("href");
					$($href).remove()
				}
				$item.remove()
			}, this.resetWizard = function() {
				$('a[data-toggle="tab"]', $navigation).off("click", innerTabClick), $('a[data-toggle="tab"]', $navigation).off("shown shown.bs.tab", innerTabShown), $navigation = element.find("ul:first", element), $activeTab = $navigation.find(baseItemSelector + ".active", element), $('a[data-toggle="tab"]', $navigation).on("click", innerTabClick), $('a[data-toggle="tab"]', $navigation).on("shown shown.bs.tab", innerTabShown), obj.fixNavigationButtons()
			}, $navigation = element.find("ul:first", element), $activeTab = $navigation.find(baseItemSelector + ".active", element), $navigation.hasClass($settings.tabClass) || $navigation.addClass($settings.tabClass), $settings.onInit && "function" == typeof $settings.onInit && $settings.onInit($activeTab, $navigation, 0), $settings.onShow && "function" == typeof $settings.onShow && $settings.onShow($activeTab, $navigation, obj.nextIndex()), $('a[data-toggle="tab"]', $navigation).on("click", innerTabClick), $('a[data-toggle="tab"]', $navigation).on("shown shown.bs.tab", innerTabShown)
		}
		$.fn.bootstrapWizard = function(options) {
			if("string" != typeof options) return this.each(function(index) {
				var element = $(this);
				if(!element.data("bootstrapWizard")) {
					var wizard = new bootstrapWizardCreate(element, options);
					element.data("bootstrapWizard", wizard), wizard.fixNavigationButtons()
				}
			});
			var args = Array.prototype.slice.call(arguments, 1);
			return 1 === args.length && args.toString(), this.data("bootstrapWizard")[options](args)
		}, $.fn.bootstrapWizard.defaults = {
			tabClass: "nav nav-pills",
			nextSelector: ".wizard li.next",
			previousSelector: ".wizard li.previous",
			firstSelector: ".wizard li.first",
			lastSelector: ".wizard li.last",
			onShow: null,
			onInit: null,
			onNext: null,
			onPrevious: null,
			onLast: null,
			onFirst: null,
			onTabChange: null,
			onTabClick: null,
			onTabShow: null
		}
	}(jQuery), transparent = !(searchVisible = 0), $(document).ready(function() {
		var currentPageCode = $("#current-page-code").val(),
			wizard = $(".wizard-card").bootstrapWizard({
				tabClass: "nav nav-pills",
				nextSelector: ".btn-next",
				previousSelector: ".btn-previous",
				onNext: void 0 !== window[currentPageCode] ? window[currentPageCode].onNext : "",
				onInit: function(tab, navigation, index) {
					var $total = navigation.find("li").length;
					$width = 100 / $total, navigation.find("li").css("width", $width + "%")
				},
				onTabClick: function(tab, navigation, index, clickedIndex) {
					return clickedIndex <= index || (wizard.bootstrapWizard("next"), !1)
				},
				onTabShow: void 0 !== window[currentPageCode] ? window[currentPageCode].onTabShow : ""
			});
		$("#wizard-picture").change(function() {
			readURL(this)
		}), $('[data-toggle="wizard-radio"]').click(function() {
			(wizard = $(this).closest(".wizard-card")).find('[data-toggle="wizard-radio"]').removeClass("active"), $(this).addClass("active"), $(wizard).find('[type="radio"]').removeAttr("checked"), $(this).find('[type="radio"]').attr("checked", "true")
		}), $('[data-toggle="wizard-checkbox"]').click(function() {
			$(this).hasClass("active") ? ($(this).removeClass("active"), $(this).find('[type="checkbox"]').removeAttr("checked")) : ($(this).addClass("active"), $(this).find('[type="checkbox"]').attr("checked", "true"))
		}), $(".set-full-height").css("height", "auto")
	}),
	function(root, factory) {
		"function" == typeof define && define.amd ? define("priorityNav", factory(root)) : "object" == typeof exports ? module.exports = factory(root) : root.priorityNav = factory(root)
	}(window || this, function(root) {
		"use strict";

		function forEach(collection, callback, scope) {
			if("[object Object]" === Object.prototype.toString.call(collection))
				for(var prop in collection) Object.prototype.hasOwnProperty.call(collection, prop) && callback.call(scope, collection[prop], prop, collection);
			else
				for(var i = 0, len = collection.length; i < len; i++) callback.call(scope, collection[i], i, collection)
		}
		var mainNavWrapper, totalWidth, restWidth, mainNav, navDropdown, navDropdownToggle, toggleWrapper, priorityNav = {},
			breaks = [],
			supports = !!document.querySelector && !!root.addEventListener,
			settings = {},
			count = 0,
			viewportWidth = 0,
			defaults = {
				initClass: "js-priorityNav",
				mainNavWrapper: "nav",
				mainNav: "ul",
				navDropdown: "nav__dropdown",
				navDropdownToggle: "nav__dropdown-toggle",
				navDropdownLabel: "more",
				navDropdownBreakpointLabel: "menu",
				breakPoint: 500,
				throttleDelay: 50,
				offsetPixels: 0,
				count: !0,
				moved: function() {},
				movedBack: function() {}
			};

		function toggleClass(el, className) {
			if(el.classList) el.classList.toggle(className);
			else {
				var classes = el.className.split(" "),
					existingIndex = classes.indexOf(className);
				0 <= existingIndex ? classes.splice(existingIndex, 1) : classes.push(className), el.className = classes.join(" ")
			}
		}

		function calculateWidths(_this) {
			var element, styles, padding, doc, w, docEl, width, height;
			element = _this, styles = window.getComputedStyle(element), padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight), totalWidth = element.clientWidth - padding, _this.querySelector(navDropdown).parentNode === _this && _this.querySelector(navDropdown).offsetWidth, restWidth = getChildrenWidth(_this) + settings.offsetPixels, viewportWidth = (doc = document, w = window, docEl = doc.compatMode && "CSS1Compat" === doc.compatMode ? doc.documentElement : doc.body, width = docEl.clientWidth, height = docEl.clientHeight, w.innerWidth && width > w.innerWidth && (width = w.innerWidth, height = w.innerHeight), {
				width: width,
				height: height
			}).width
		}
		priorityNav.doesItFit = function(_this, settings) {
			var func, wait, immediate, timeout, delay = 0 === _this.getAttribute("instance") ? delay : settings.throttleDelay;
			func = function() {
					var identifier = _this.getAttribute("instance");
					for(calculateWidths(_this); totalWidth <= restWidth && 0 < _this.querySelector(mainNav).children.length || viewportWidth < settings.breakPoint && 0 < _this.querySelector(mainNav).children.length;) priorityNav.toDropdown(_this, identifier), calculateWidths(_this), viewportWidth < settings.breakPoint && updateLabel(_this, identifier, settings.navDropdownBreakpointLabel);
					for(; totalWidth >= breaks[identifier][breaks[identifier].length - 1] && viewportWidth > settings.breakPoint;) priorityNav.toMenu(_this, identifier), viewportWidth > settings.breakPoint && updateLabel(_this, identifier, settings.navDropdownLabel);
					breaks[identifier].length < 1 && (_this.querySelector(navDropdown).classList.remove("show"), updateLabel(_this, identifier, settings.navDropdownLabel)), _this.querySelector(mainNav).children.length < 1 && updateLabel(_this, identifier, settings.navDropdownBreakpointLabel), showToggle(_this, identifier)
				}, wait = delay,
				function() {
					var context = this,
						args = arguments,
						callNow = immediate && !timeout;
					clearTimeout(timeout), timeout = setTimeout(function() {
						timeout = null, immediate || func.apply(context, args)
					}, wait), callNow && func.apply(context, args)
				}()
		};

		function updateCount(_this, identifier) {
			_this.querySelector(navDropdownToggle).setAttribute("priorityNav-count", breaks[identifier].length)
		}
		var showToggle = function(_this, identifier) {
				breaks[identifier].length < 1 ? (_this.querySelector(navDropdownToggle).classList.add("priority-nav-is-hidden"), _this.querySelector(navDropdownToggle).classList.remove("priority-nav-is-visible"), _this.classList.remove("priority-nav-has-dropdown")) : (_this.querySelector(navDropdownToggle).classList.add("priority-nav-is-visible"), _this.querySelector(navDropdownToggle).classList.remove("priority-nav-is-hidden"), _this.classList.add("priority-nav-has-dropdown"))
			},
			updateLabel = function(_this, identifier, label) {
				_this.querySelector(navDropdownToggle).innerHTML = label
			};
		priorityNav.toDropdown = function(_this, identifier) {
			_this.querySelector(navDropdown).firstChild && 0 < _this.querySelector(mainNav).children.length ? _this.querySelector(navDropdown).insertBefore(_this.querySelector(mainNav).lastElementChild, _this.querySelector(navDropdown).firstChild) : 0 < _this.querySelector(mainNav).children.length && _this.querySelector(navDropdown).appendChild(_this.querySelector(mainNav).lastElementChild), breaks[identifier].push(restWidth), showToggle(_this, identifier), 0 < _this.querySelector(mainNav).children.length && settings.count && updateCount(_this, identifier), settings.moved()
		}, priorityNav.toMenu = function(_this, identifier) {
			0 < _this.querySelector(navDropdown).children.length && _this.querySelector(mainNav).appendChild(_this.querySelector(navDropdown).firstElementChild), breaks[identifier].pop(), showToggle(_this, identifier), 0 < _this.querySelector(mainNav).children.length && settings.count && updateCount(_this, identifier), settings.movedBack()
		};

		function listeners(_this, settings) {
			window.attachEvent ? window.attachEvent("onresize", function() {
				priorityNav.doesItFit && priorityNav.doesItFit(_this, settings)
			}) : window.addEventListener && window.addEventListener("resize", function() {
				priorityNav.doesItFit && priorityNav.doesItFit(_this, settings)
			}, !0), _this.querySelector(navDropdownToggle).addEventListener("click", function() {
				toggleClass(_this.querySelector(navDropdown), "show"), toggleClass(this, "is-open"), toggleClass(_this, "is-open")
			}), document.addEventListener("click", function(event) {
				! function(elem, selector) {
					for(var firstChar = selector.charAt(0); elem && elem !== document; elem = elem.parentNode)
						if("." === firstChar) {
							if(elem.classList.contains(selector.substr(1))) return elem
						} else if("#" === firstChar) {
						if(elem.id === selector.substr(1)) return elem
					} else if("[" === firstChar && elem.hasAttribute(selector.substr(1, selector.length - 2))) return elem;
					return !1
				}(event.target, settings.navDropdown) && event.target !== _this.querySelector(navDropdownToggle) && (_this.querySelector(navDropdown).classList.remove("show"), _this.querySelector(navDropdownToggle).classList.remove("is-open"), _this.classList.remove("is-open"))
			}), document.onkeydown = function(evt) {
				27 === (evt = evt || window.event).keyCode && void 0 !== navDropdown.classList && (void 0 !== navDropdown.classList.remove() && navDropdown.classList.remove("show"), void 0 !== navDropdownToggle.classList.remove() && navDropdownToggle.classList.remove("is-open"), void 0 !== mainNavWrapper.classList.remove() && mainNavWrapper.classList.remove("is-open"))
			}
		}
		var getChildrenWidth = function(e) {
			for(var children = e.childNodes, sum = 0, i = 0; i < children.length; i++) 3 !== children[i].nodeType && (isNaN(children[i].offsetWidth) || (sum += children[i].offsetWidth));
			return sum
		};
		return Element.prototype.remove = function() {
			this.parentElement.removeChild(this)
		}, NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
			for(var i = 0, len = this.length; i < len; i++) this[i] && this[i].parentElement && this[i].parentElement.removeChild(this[i])
		}, priorityNav.destroy = function() {
			settings && (document.documentElement.classList.remove(settings.initClass), toggleWrapper.remove(), settings = null, delete priorityNav.init, delete priorityNav.doesItFit)
		}, supports && "undefined" != typeof Node && (Node.prototype.insertAfter = function(n, r) {
			this.insertBefore(n, r.nextSibling)
		}), priorityNav.init = function(options) {
			if(supports || "undefined" != typeof Node) {
				settings = function(defaults, options) {
					var extended = {};
					return forEach(defaults, function(value, prop) {
						extended[prop] = defaults[prop]
					}), forEach(options, function(value, prop) {
						extended[prop] = options[prop]
					}), extended
				}(defaults, options || {});
				var elements = document.querySelectorAll(settings.mainNavWrapper);
				forEach(elements, function(_this) {
					breaks[count] = [], _this.setAttribute("instance", count++), (mainNavWrapper = _this) ? (mainNav = settings.mainNav, _this.querySelector(mainNav) ? (function(_this, settings) {
						toggleWrapper = document.createElement("span"), navDropdown = document.createElement("ul"), (navDropdownToggle = document.createElement("button")).innerHTML = settings.navDropdownLabel, _this.insertAfter(toggleWrapper, _this.querySelector(mainNav)), toggleWrapper.appendChild(navDropdown), toggleWrapper.appendChild(navDropdownToggle), navDropdown.classList.add(settings.navDropdown), navDropdown.classList.add("priority-nav__dropdown"), navDropdownToggle.classList.add(settings.navDropdownToggle), navDropdownToggle.classList.add("priority-nav__dropdown-toggle"), toggleWrapper.classList.add(settings.navDropdown + "-wrapper"), toggleWrapper.classList.add("priority-nav__wrapper"), _this.classList.add("priority-nav")
					}(_this, settings), navDropdown = "." + settings.navDropdown, _this.querySelector(navDropdown) ? (navDropdownToggle = "." + settings.navDropdownToggle, _this.querySelector(navDropdownToggle) ? (listeners(_this, settings), priorityNav.doesItFit(_this, settings)) : console.warn("couldn't find the specified navDropdownToggle element")) : console.warn("couldn't find the specified navDropdown element")) : console.warn("couldn't find the specified mainNav element")) : console.warn("couldn't find the specified mainNavWrapper element")
				}), document.documentElement.classList.add(settings.initClass)
			} else console.warn("This browser doesn't support priorityNav")
		}, priorityNav
	}),
	function(global, factory) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : global.Sweetalert2 = factory()
	}(this, function() {
		"use strict";
		var defaultParams = {
				title: "",
				titleText: "",
				text: "",
				html: "",
				type: null,
				customClass: "",
				target: "body",
				animation: !0,
				allowOutsideClick: !0,
				allowEscapeKey: !0,
				allowEnterKey: !0,
				showConfirmButton: !0,
				showCancelButton: !1,
				preConfirm: null,
				confirmButtonText: "OK",
				confirmButtonColor: "#3085d6",
				confirmButtonClass: null,
				cancelButtonText: "Cancel",
				cancelButtonColor: "#aaa",
				cancelButtonClass: null,
				buttonsStyling: !0,
				reverseButtons: !1,
				focusCancel: !1,
				showCloseButton: !1,
				showLoaderOnConfirm: !1,
				imageUrl: null,
				imageWidth: null,
				imageHeight: null,
				imageClass: null,
				timer: null,
				width: 500,
				padding: 20,
				background: "#fff",
				input: null,
				inputPlaceholder: "",
				inputValue: "",
				inputOptions: {},
				inputAutoTrim: !0,
				inputClass: null,
				inputAttributes: {},
				inputValidator: null,
				progressSteps: [],
				currentProgressStep: null,
				progressStepsDistance: "40px",
				onOpen: null,
				onClose: null
			},
			prefix = function(items) {
				var result = {};
				for(var i in items) result[items[i]] = "swal2-" + items[i];
				return result
			},
			swalClasses = prefix(["container", "shown", "iosfix", "modal", "overlay", "fade", "show", "hide", "noanimation", "close", "title", "content", "spacer", "confirm", "cancel", "icon", "image", "input", "file", "range", "select", "radio", "checkbox", "textarea", "inputerror", "validationerror", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled"]),
			iconTypes = prefix(["success", "warning", "info", "question", "error"]),
			colorLuminance = function(hex, lum) {
				(hex = String(hex).replace(/[^0-9a-f]/gi, "")).length < 6 && (hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]), lum = lum || 0;
				for(var rgb = "#", i = 0; i < 3; i++) {
					var c = parseInt(hex.substr(2 * i, 2), 16);
					rgb += ("00" + (c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16))).substr(c.length)
				}
				return rgb
			},
			states = {
				previousWindowKeyDown: null,
				previousActiveElement: null,
				previousBodyPadding: null
			},
			sweetHTML = ('\n <div  role="dialog" aria-labelledby="modalTitleId" aria-describedby="modalContentId" class="' + swalClasses.modal + '" tabIndex="-1" >\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + " " + iconTypes.error + '">\n     <span class="x-mark"><span class="line left"></span><span class="line right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + " " + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + " " + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + " " + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + " " + iconTypes.success + '">\n     <span class="line tip"></span> <span class="line long"></span>\n     <div class="placeholder"></div> <div class="fix"></div>\n   </div>\n   <img class="' + swalClasses.image + '">\n   <h2 class="' + swalClasses.title + '" id="modalTitleId"></h2>\n   <div id="modalContentId" class="' + swalClasses.content + '"></div>\n   <input class="' + swalClasses.input + '">\n   <input type="file" class="' + swalClasses.file + '">\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range">\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox">\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '"></div>\n   <hr class="' + swalClasses.spacer + '">\n   <button type="button" role="button" tabIndex="0" class="' + swalClasses.confirm + '">OK</button>\n   <button type="button" role="button" tabIndex="0" class="' + swalClasses.cancel + '">Cancel</button>\n   <span class="' + swalClasses.close + '">&times;</span>\n </div>\n').replace(/(^|\n)\s*/g, ""),
			getContainer = function() {
				return document.body.querySelector("." + swalClasses.container)
			},
			getModal = function() {
				return getContainer() ? getContainer().querySelector("." + swalClasses.modal) : null
			},
			elementByClass = function(className) {
				return getContainer() ? getContainer().querySelector("." + className) : null
			},
			getTitle = function() {
				return elementByClass(swalClasses.title)
			},
			getContent = function() {
				return elementByClass(swalClasses.content)
			},
			getImage = function() {
				return elementByClass(swalClasses.image)
			},
			getSpacer = function() {
				return elementByClass(swalClasses.spacer)
			},
			getProgressSteps = function() {
				return elementByClass(swalClasses.progresssteps)
			},
			getValidationError = function() {
				return elementByClass(swalClasses.validationerror)
			},
			getConfirmButton = function() {
				return elementByClass(swalClasses.confirm)
			},
			getCancelButton = function() {
				return elementByClass(swalClasses.cancel)
			},
			getCloseButton = function() {
				return elementByClass(swalClasses.close)
			},
			getFocusableElements = function(focusCancel) {
				var buttons = [getConfirmButton(), getCancelButton()];
				return focusCancel && buttons.reverse(), buttons.concat(Array.prototype.slice.call(getModal().querySelectorAll("button:not([class^=swal2-]), input:not([type=hidden]), textarea, select")))
			},
			hasClass = function(elem, className) {
				return !!elem.classList && elem.classList.contains(className)
			},
			focusInput = function(input) {
				if(input.focus(), "file" !== input.type) {
					var val = input.value;
					input.value = "", input.value = val
				}
			},
			addClass = function(elem, className) {
				elem && className && className.split(/\s+/).filter(Boolean).forEach(function(className) {
					elem.classList.add(className)
				})
			},
			removeClass = function(elem, className) {
				elem && className && className.split(/\s+/).filter(Boolean).forEach(function(className) {
					elem.classList.remove(className)
				})
			},
			getChildByClass = function(elem, className) {
				for(var i = 0; i < elem.childNodes.length; i++)
					if(hasClass(elem.childNodes[i], className)) return elem.childNodes[i]
			},
			show = function(elem, display) {
				display = display || "block", elem.style.opacity = "", elem.style.display = display
			},
			hide = function(elem) {
				elem.style.opacity = "", elem.style.display = "none"
			},
			isVisible = function(elem) {
				return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length
			},
			fireClick = function(node) {
				if(!isVisible(node)) return !1;
				if("function" == typeof MouseEvent) {
					var mevt = new MouseEvent("click", {
						view: window,
						bubbles: !1,
						cancelable: !0
					});
					node.dispatchEvent(mevt)
				} else if(document.createEvent) {
					var evt = document.createEvent("MouseEvents");
					evt.initEvent("click", !1, !1), node.dispatchEvent(evt)
				} else document.createEventObject ? node.fireEvent("onclick") : "function" == typeof node.onclick && node.onclick()
			},
			animationEndEvent = function() {
				var testEl = document.createElement("div"),
					transEndEventNames = {
						WebkitAnimation: "webkitAnimationEnd",
						OAnimation: "oAnimationEnd oanimationend",
						msAnimation: "MSAnimationEnd",
						animation: "animationend"
					};
				for(var i in transEndEventNames)
					if(transEndEventNames.hasOwnProperty(i) && void 0 !== testEl.style[i]) return transEndEventNames[i];
				return !1
			}(),
			_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
				return typeof obj
			} : function(obj) {
				return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
			},
			_extends = Object.assign || function(target) {
				for(var i = 1; i < arguments.length; i++) {
					var source = arguments[i];
					for(var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
				}
				return target
			},
			modalParams = _extends({}, defaultParams),
			queue = [],
			swal2Observer = void 0,
			setParameters = function(params) {
				var modal = getModal() || function(params) {
					if("undefined" != typeof document) {
						var container = document.createElement("div");
						container.className = swalClasses.container, container.innerHTML = sweetHTML;
						var targetElement = document.querySelector(params.target);
						targetElement || (console.warn("SweetAlert2: Can't find the target \"" + params.target + '"'), targetElement = document.body), targetElement.appendChild(container);
						var modal = getModal(),
							input = getChildByClass(modal, swalClasses.input),
							file = getChildByClass(modal, swalClasses.file),
							range = modal.querySelector("." + swalClasses.range + " input"),
							rangeOutput = modal.querySelector("." + swalClasses.range + " output"),
							select = getChildByClass(modal, swalClasses.select),
							checkbox = modal.querySelector("." + swalClasses.checkbox + " input"),
							textarea = getChildByClass(modal, swalClasses.textarea);
						return input.oninput = function() {
							sweetAlert.resetValidationError()
						}, input.onkeydown = function(event) {
							setTimeout(function() {
								13 === event.keyCode && params.allowEnterKey && (event.stopPropagation(), sweetAlert.clickConfirm())
							}, 0)
						}, file.onchange = function() {
							sweetAlert.resetValidationError()
						}, range.oninput = function() {
							sweetAlert.resetValidationError(), rangeOutput.value = range.value
						}, range.onchange = function() {
							sweetAlert.resetValidationError(), range.previousSibling.value = range.value
						}, select.onchange = function() {
							sweetAlert.resetValidationError()
						}, checkbox.onchange = function() {
							sweetAlert.resetValidationError()
						}, textarea.oninput = function() {
							sweetAlert.resetValidationError()
						}, modal
					}
					console.error("SweetAlert2 requires document to initialize")
				}(params);
				for(var param in params) defaultParams.hasOwnProperty(param) || "extraParams" === param || console.warn('SweetAlert2: Unknown parameter "' + param + '"');
				modal.style.width = "number" == typeof params.width ? params.width + "px" : params.width, modal.style.padding = params.padding + "px", modal.style.background = params.background;
				var title = getTitle(),
					content = getContent(),
					confirmButton = getConfirmButton(),
					cancelButton = getCancelButton(),
					closeButton = getCloseButton();
				if(params.titleText ? title.innerText = params.titleText : title.innerHTML = params.title.split("\n").join("<br>"), params.text || params.html) {
					if("object" === _typeof(params.html))
						if(content.innerHTML = "", 0 in params.html)
							for(var i = 0; i in params.html; i++) content.appendChild(params.html[i].cloneNode(!0));
						else content.appendChild(params.html.cloneNode(!0));
					else params.html ? content.innerHTML = params.html : params.text && (content.textContent = params.text);
					show(content)
				} else hide(content);
				params.showCloseButton ? show(closeButton) : hide(closeButton), modal.className = swalClasses.modal, params.customClass && addClass(modal, params.customClass);
				var progressStepsContainer = getProgressSteps(),
					currentProgressStep = parseInt(null === params.currentProgressStep ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
				params.progressSteps.length ? (show(progressStepsContainer), function(elem) {
					for(; elem.firstChild;) elem.removeChild(elem.firstChild)
				}(progressStepsContainer), currentProgressStep >= params.progressSteps.length && console.warn("SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), params.progressSteps.forEach(function(step, index) {
					var circle = document.createElement("li");
					if(addClass(circle, swalClasses.progresscircle), circle.innerHTML = step, index === currentProgressStep && addClass(circle, swalClasses.activeprogressstep), progressStepsContainer.appendChild(circle), index !== params.progressSteps.length - 1) {
						var line = document.createElement("li");
						addClass(line, swalClasses.progressline), line.style.width = params.progressStepsDistance, progressStepsContainer.appendChild(line)
					}
				})) : hide(progressStepsContainer);
				for(var icons = getModal().querySelectorAll("." + swalClasses.icon), _i = 0; _i < icons.length; _i++) hide(icons[_i]);
				if(params.type) {
					var validType = !1;
					for(var iconType in iconTypes)
						if(params.type === iconType) {
							validType = !0;
							break
						}
					if(!validType) return console.error("SweetAlert2: Unknown alert type: " + params.type), !1;
					var icon = modal.querySelector("." + swalClasses.icon + "." + iconTypes[params.type]);
					switch(show(icon), params.type) {
						case "success":
							addClass(icon, "animate"), addClass(icon.querySelector(".tip"), "animate-success-tip"), addClass(icon.querySelector(".long"), "animate-success-long");
							break;
						case "error":
							addClass(icon, "animate-error-icon"), addClass(icon.querySelector(".x-mark"), "animate-x-mark");
							break;
						case "warning":
							addClass(icon, "pulse-warning")
					}
				}
				var elem, property, image = getImage();
				params.imageUrl ? (image.setAttribute("src", params.imageUrl), show(image), params.imageWidth ? image.setAttribute("width", params.imageWidth) : image.removeAttribute("width"), params.imageHeight ? image.setAttribute("height", params.imageHeight) : image.removeAttribute("height"), image.className = swalClasses.image, params.imageClass && addClass(image, params.imageClass)) : hide(image), params.showCancelButton ? cancelButton.style.display = "inline-block" : hide(cancelButton), params.showConfirmButton ? (property = "display", (elem = confirmButton).style.removeProperty ? elem.style.removeProperty(property) : elem.style.removeAttribute(property)) : hide(confirmButton);
				var spacer = getSpacer();
				params.showConfirmButton || params.showCancelButton ? show(spacer) : hide(spacer), confirmButton.innerHTML = params.confirmButtonText, cancelButton.innerHTML = params.cancelButtonText, params.buttonsStyling && (confirmButton.style.backgroundColor = params.confirmButtonColor, cancelButton.style.backgroundColor = params.cancelButtonColor), confirmButton.className = swalClasses.confirm, addClass(confirmButton, params.confirmButtonClass), cancelButton.className = swalClasses.cancel, addClass(cancelButton, params.cancelButtonClass), params.buttonsStyling ? (addClass(confirmButton, swalClasses.styled), addClass(cancelButton, swalClasses.styled)) : (removeClass(confirmButton, swalClasses.styled), removeClass(cancelButton, swalClasses.styled), confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = "", cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = ""), !0 === params.animation ? removeClass(modal, swalClasses.noanimation) : addClass(modal, swalClasses.noanimation)
			},
			fixScrollbar = function() {
				null === states.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (states.previousBodyPadding = document.body.style.paddingRight, document.body.style.paddingRight = function() {
					if("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
					var scrollDiv = document.createElement("div");
					scrollDiv.style.width = "50px", scrollDiv.style.height = "50px", scrollDiv.style.overflow = "scroll", document.body.appendChild(scrollDiv);
					var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
					return document.body.removeChild(scrollDiv), scrollbarWidth
				}() + "px")
			},
			iOSfix = function() {
				if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !hasClass(document.body, swalClasses.iosfix)) {
					var offset = document.body.scrollTop;
					document.body.style.top = -1 * offset + "px", addClass(document.body, swalClasses.iosfix)
				}
			},
			sweetAlert = function sweetAlert() {
				for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				if(void 0 === args[0]) return console.error("SweetAlert2 expects at least 1 attribute!"), !1;
				var params = _extends({}, modalParams);
				switch(_typeof(args[0])) {
					case "string":
						params.title = args[0], params.html = args[1], params.type = args[2];
						break;
					case "object":
						_extends(params, args[0]), params.extraParams = args[0].extraParams, "email" === params.input && null === params.inputValidator && (params.inputValidator = function(email) {
							return new Promise(function(resolve, reject) {
								/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email) ? resolve() : reject("Invalid email address")
							})
						}), "url" === params.input && null === params.inputValidator && (params.inputValidator = function(url) {
							return new Promise(function(resolve, reject) {
								/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(url) ? resolve() : reject("Invalid URL")
							})
						});
						break;
					default:
						return console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0])), !1
				}
				setParameters(params);
				var container = getContainer(),
					modal = getModal();
				return new Promise(function(resolve, reject) {
					params.timer && (modal.timeout = setTimeout(function() {
						sweetAlert.closeModal(params.onClose), reject("timer")
					}, params.timer));
					var getInput = function(inputType) {
						if(!(inputType = inputType || params.input)) return null;
						switch(inputType) {
							case "select":
							case "textarea":
							case "file":
								return getChildByClass(modal, swalClasses[inputType]);
							case "checkbox":
								return modal.querySelector("." + swalClasses.checkbox + " input");
							case "radio":
								return modal.querySelector("." + swalClasses.radio + " input:checked") || modal.querySelector("." + swalClasses.radio + " input:first-child");
							case "range":
								return modal.querySelector("." + swalClasses.range + " input");
							default:
								return getChildByClass(modal, swalClasses.input)
						}
					};
					params.input && setTimeout(function() {
						var input = getInput();
						input && focusInput(input)
					}, 0);
					for(var confirm = function(value) {
							params.showLoaderOnConfirm && sweetAlert.showLoading(), params.preConfirm ? params.preConfirm(value, params.extraParams).then(function(preConfirmValue) {
								sweetAlert.closeModal(params.onClose), resolve(preConfirmValue || value)
							}, function(error) {
								sweetAlert.hideLoading(), error && sweetAlert.showValidationError(error)
							}) : (sweetAlert.closeModal(params.onClose), resolve(value))
						}, onButtonEvent = function(event) {
							var e = event || window.event,
								target = e.target || e.srcElement,
								confirmButton = getConfirmButton(),
								cancelButton = getCancelButton(),
								targetedConfirm = confirmButton === target || confirmButton.contains(target),
								targetedCancel = cancelButton === target || cancelButton.contains(target);
							switch(e.type) {
								case "mouseover":
								case "mouseup":
									params.buttonsStyling && (targetedConfirm ? confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -.1) : targetedCancel && (cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -.1)));
									break;
								case "mouseout":
									params.buttonsStyling && (targetedConfirm ? confirmButton.style.backgroundColor = params.confirmButtonColor : targetedCancel && (cancelButton.style.backgroundColor = params.cancelButtonColor));
									break;
								case "mousedown":
									params.buttonsStyling && (targetedConfirm ? confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -.2) : targetedCancel && (cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -.2)));
									break;
								case "click":
									if(targetedConfirm && sweetAlert.isVisible())
										if(sweetAlert.disableButtons(), params.input) {
											var inputValue = function() {
												var input = getInput();
												if(!input) return null;
												switch(params.input) {
													case "checkbox":
														return input.checked ? 1 : 0;
													case "radio":
														return input.checked ? input.value : null;
													case "file":
														return input.files.length ? input.files[0] : null;
													default:
														return params.inputAutoTrim ? input.value.trim() : input.value
												}
											}();
											params.inputValidator ? (sweetAlert.disableInput(), params.inputValidator(inputValue, params.extraParams).then(function() {
												sweetAlert.enableButtons(), sweetAlert.enableInput(), confirm(inputValue)
											}, function(error) {
												sweetAlert.enableButtons(), sweetAlert.enableInput(), error && sweetAlert.showValidationError(error)
											})) : confirm(inputValue)
										} else confirm(!0);
									else targetedCancel && sweetAlert.isVisible() && (sweetAlert.disableButtons(), sweetAlert.closeModal(params.onClose), reject("cancel"))
							}
						}, buttons = modal.querySelectorAll("button"), i = 0; i < buttons.length; i++) buttons[i].onclick = onButtonEvent, buttons[i].onmouseover = onButtonEvent, buttons[i].onmouseout = onButtonEvent, buttons[i].onmousedown = onButtonEvent;
					getCloseButton().onclick = function() {
						sweetAlert.closeModal(params.onClose), reject("close")
					}, container.onclick = function(e) {
						e.target === container && params.allowOutsideClick && (sweetAlert.closeModal(params.onClose), reject("overlay"))
					};
					var confirmButton = getConfirmButton(),
						cancelButton = getCancelButton();
					params.reverseButtons ? confirmButton.parentNode.insertBefore(cancelButton, confirmButton) : confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
					var func, wait, timeout, setFocus = function(index, increment) {
						for(var focusableElements = getFocusableElements(params.focusCancel), _i2 = 0; _i2 < focusableElements.length; _i2++) {
							(index += increment) === focusableElements.length ? index = 0 : -1 === index && (index = focusableElements.length - 1);
							var el = focusableElements[index];
							if(isVisible(el)) return el.focus()
						}
					};
					states.previousWindowKeyDown = window.onkeydown, window.onkeydown = function(event) {
						var e = event || window.event,
							keyCode = e.keyCode || e.which;
						if(-1 !== [9, 13, 32, 27].indexOf(keyCode)) {
							for(var targetElement = e.target || e.srcElement, focusableElements = getFocusableElements(params.focusCancel), btnIndex = -1, _i3 = 0; _i3 < focusableElements.length; _i3++)
								if(targetElement === focusableElements[_i3]) {
									btnIndex = _i3;
									break
								}
							9 === keyCode ? (e.shiftKey ? setFocus(btnIndex, -1) : setFocus(btnIndex, 1), e.stopPropagation(), e.preventDefault()) : 13 === keyCode || 32 === keyCode ? -1 === btnIndex && params.allowEnterKey && (params.focusCancel ? fireClick(cancelButton) : fireClick(confirmButton)) : 27 === keyCode && !0 === params.allowEscapeKey && (sweetAlert.closeModal(params.onClose), reject("esc"))
						}
					}, params.buttonsStyling && (confirmButton.style.borderLeftColor = params.confirmButtonColor, confirmButton.style.borderRightColor = params.confirmButtonColor), sweetAlert.showLoading = sweetAlert.enableLoading = function() {
						show(getSpacer()), show(confirmButton, "inline-block"), addClass(confirmButton, swalClasses.loading), addClass(modal, swalClasses.loading), confirmButton.disabled = !0, cancelButton.disabled = !0
					}, sweetAlert.hideLoading = sweetAlert.disableLoading = function() {
						params.showConfirmButton || (hide(confirmButton), params.showCancelButton || hide(getSpacer())), removeClass(confirmButton, swalClasses.loading), removeClass(modal, swalClasses.loading), confirmButton.disabled = !1, cancelButton.disabled = !1
					}, sweetAlert.getTitle = function() {
						return getTitle()
					}, sweetAlert.getContent = function() {
						return getContent()
					}, sweetAlert.getInput = function() {
						return getInput()
					}, sweetAlert.getImage = function() {
						return getImage()
					}, sweetAlert.getConfirmButton = function() {
						return getConfirmButton()
					}, sweetAlert.getCancelButton = function() {
						return getCancelButton()
					}, sweetAlert.enableButtons = function() {
						confirmButton.disabled = !1, cancelButton.disabled = !1
					}, sweetAlert.disableButtons = function() {
						confirmButton.disabled = !0, cancelButton.disabled = !0
					}, sweetAlert.enableConfirmButton = function() {
						confirmButton.disabled = !1
					}, sweetAlert.disableConfirmButton = function() {
						confirmButton.disabled = !0
					}, sweetAlert.enableInput = function() {
						var input = getInput();
						if(!input) return !1;
						if("radio" === input.type)
							for(var radios = input.parentNode.parentNode.querySelectorAll("input"), _i4 = 0; _i4 < radios.length; _i4++) radios[_i4].disabled = !1;
						else input.disabled = !1
					}, sweetAlert.disableInput = function() {
						var input = getInput();
						if(!input) return !1;
						if(input && "radio" === input.type)
							for(var radios = input.parentNode.parentNode.querySelectorAll("input"), _i5 = 0; _i5 < radios.length; _i5++) radios[_i5].disabled = !0;
						else input.disabled = !0
					}, sweetAlert.recalculateHeight = (func = function() {
						var modal = getModal();
						if(modal) {
							var prevState = modal.style.display;
							modal.style.minHeight = "", show(modal), modal.style.minHeight = modal.scrollHeight + 1 + "px", modal.style.display = prevState
						}
					}, wait = 50, timeout = void 0, function() {
						clearTimeout(timeout), timeout = setTimeout(function() {
							timeout = null, func()
						}, wait)
					}), sweetAlert.showValidationError = function(error) {
						var validationError = getValidationError();
						validationError.innerHTML = error, show(validationError);
						var input = getInput();
						input && (focusInput(input), addClass(input, swalClasses.inputerror))
					}, sweetAlert.resetValidationError = function() {
						var validationError = getValidationError();
						hide(validationError), sweetAlert.recalculateHeight();
						var input = getInput();
						input && removeClass(input, swalClasses.inputerror)
					}, sweetAlert.getProgressSteps = function() {
						return params.progressSteps
					}, sweetAlert.setProgressSteps = function(progressSteps) {
						params.progressSteps = progressSteps, setParameters(params)
					}, sweetAlert.showProgressSteps = function() {
						show(getProgressSteps())
					}, sweetAlert.hideProgressSteps = function() {
						hide(getProgressSteps())
					}, sweetAlert.enableButtons(), sweetAlert.hideLoading(), sweetAlert.resetValidationError();
					for(var inputTypes = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], input = void 0, _i6 = 0; _i6 < inputTypes.length; _i6++) {
						var inputClass = swalClasses[inputTypes[_i6]],
							inputContainer = getChildByClass(modal, inputClass);
						if(input = getInput(inputTypes[_i6])) {
							for(var j in input.attributes)
								if(input.attributes.hasOwnProperty(j)) {
									var attrName = input.attributes[j].name;
									"type" !== attrName && "value" !== attrName && input.removeAttribute(attrName)
								}
							for(var attr in params.inputAttributes) input.setAttribute(attr, params.inputAttributes[attr])
						}
						inputContainer.className = inputClass, params.inputClass && addClass(inputContainer, params.inputClass), hide(inputContainer)
					}
					var populateInputOptions = void 0;
					switch(params.input) {
						case "text":
						case "email":
						case "password":
						case "number":
						case "tel":
						case "url":
							(input = getChildByClass(modal, swalClasses.input)).value = params.inputValue, input.placeholder = params.inputPlaceholder, input.type = params.input, show(input);
							break;
						case "file":
							(input = getChildByClass(modal, swalClasses.file)).placeholder = params.inputPlaceholder, input.type = params.input, show(input);
							break;
						case "range":
							var range = getChildByClass(modal, swalClasses.range),
								rangeInput = range.querySelector("input"),
								rangeOutput = range.querySelector("output");
							rangeInput.value = params.inputValue, rangeInput.type = params.input, rangeOutput.value = params.inputValue, show(range);
							break;
						case "select":
							var select = getChildByClass(modal, swalClasses.select);
							if(select.innerHTML = "", params.inputPlaceholder) {
								var placeholder = document.createElement("option");
								placeholder.innerHTML = params.inputPlaceholder, placeholder.value = "", placeholder.disabled = !0, placeholder.selected = !0, select.appendChild(placeholder)
							}
							populateInputOptions = function(inputOptions) {
								for(var optionValue in inputOptions) {
									var option = document.createElement("option");
									option.value = optionValue, option.innerHTML = inputOptions[optionValue], params.inputValue === optionValue && (option.selected = !0), select.appendChild(option)
								}
								show(select), select.focus()
							};
							break;
						case "radio":
							var radio = getChildByClass(modal, swalClasses.radio);
							radio.innerHTML = "", populateInputOptions = function(inputOptions) {
								for(var radioValue in inputOptions) {
									var radioInput = document.createElement("input"),
										radioLabel = document.createElement("label"),
										radioLabelSpan = document.createElement("span");
									radioInput.type = "radio", radioInput.name = swalClasses.radio, radioInput.value = radioValue, params.inputValue === radioValue && (radioInput.checked = !0), radioLabelSpan.innerHTML = inputOptions[radioValue], radioLabel.appendChild(radioInput), radioLabel.appendChild(radioLabelSpan), radioLabel.for = radioInput.id, radio.appendChild(radioLabel)
								}
								show(radio);
								var radios = radio.querySelectorAll("input");
								radios.length && radios[0].focus()
							};
							break;
						case "checkbox":
							var checkbox = getChildByClass(modal, swalClasses.checkbox),
								checkboxInput = getInput("checkbox");
							checkboxInput.type = "checkbox", checkboxInput.value = 1, checkboxInput.id = swalClasses.checkbox, checkboxInput.checked = Boolean(params.inputValue);
							var label = checkbox.getElementsByTagName("span");
							label.length && checkbox.removeChild(label[0]), (label = document.createElement("span")).innerHTML = params.inputPlaceholder, checkbox.appendChild(label), show(checkbox);
							break;
						case "textarea":
							var textarea = getChildByClass(modal, swalClasses.textarea);
							textarea.value = params.inputValue, textarea.placeholder = params.inputPlaceholder, show(textarea);
							break;
						case null:
							break;
						default:
							console.error('SweetAlert2: Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"')
					}
					"select" !== params.input && "radio" !== params.input || (params.inputOptions instanceof Promise ? (sweetAlert.showLoading(), params.inputOptions.then(function(inputOptions) {
							sweetAlert.hideLoading(), populateInputOptions(inputOptions)
						})) : "object" === _typeof(params.inputOptions) ? populateInputOptions(params.inputOptions) : console.error("SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got " + _typeof(params.inputOptions))),
						function(animation, onComplete) {
							var container = getContainer(),
								modal = getModal();
							animation ? (addClass(modal, swalClasses.show), addClass(container, swalClasses.fade), removeClass(modal, swalClasses.hide)) : removeClass(modal, swalClasses.fade), show(modal), container.style.overflowY = "hidden", animationEndEvent && !hasClass(modal, swalClasses.noanimation) ? modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
								modal.removeEventListener(animationEndEvent, swalCloseEventFinished), container.style.overflowY = "auto"
							}) : container.style.overflowY = "auto", addClass(document.documentElement, swalClasses.shown), addClass(document.body, swalClasses.shown), addClass(container, swalClasses.shown), fixScrollbar(), iOSfix(), states.previousActiveElement = document.activeElement, null !== onComplete && "function" == typeof onComplete && setTimeout(function() {
								onComplete(modal)
							})
						}(params.animation, params.onOpen), params.allowEnterKey ? setFocus(-1, 1) : document.activeElement && document.activeElement.blur(), getContainer().scrollTop = 0, "undefined" == typeof MutationObserver || swal2Observer || (swal2Observer = new MutationObserver(sweetAlert.recalculateHeight)).observe(modal, {
							childList: !0,
							characterData: !0,
							subtree: !0
						})
				})
			};
		return sweetAlert.isVisible = function() {
			return !!getModal()
		}, sweetAlert.queue = function(steps) {
			queue = steps;
			var resetQueue = function() {
					queue = [], document.body.removeAttribute("data-swal2-queue-step")
				},
				queueResult = [];
			return new Promise(function(resolve, reject) {
				! function step(i, callback) {
					i < queue.length ? (document.body.setAttribute("data-swal2-queue-step", i), sweetAlert(queue[i]).then(function(result) {
						queueResult.push(result), step(i + 1, callback)
					}, function(dismiss) {
						resetQueue(), reject(dismiss)
					})) : (resetQueue(), resolve(queueResult))
				}(0)
			})
		}, sweetAlert.getQueueStep = function() {
			return document.body.getAttribute("data-swal2-queue-step")
		}, sweetAlert.insertQueueStep = function(step, index) {
			return index && index < queue.length ? queue.splice(index, 0, step) : queue.push(step)
		}, sweetAlert.deleteQueueStep = function(index) {
			void 0 !== queue[index] && queue.splice(index, 1)
		}, sweetAlert.close = sweetAlert.closeModal = function(onComplete) {
			var container = getContainer(),
				modal = getModal();
			if(modal) {
				removeClass(modal, swalClasses.show), addClass(modal, swalClasses.hide), clearTimeout(modal.timeout),
					function() {
						if(window.onkeydown = states.previousWindowKeyDown, states.previousActiveElement && states.previousActiveElement.focus) {
							var x = window.scrollX,
								y = window.scrollY;
							states.previousActiveElement.focus(), x && y && window.scrollTo(x, y)
						}
					}();
				var removeModalAndResetState = function() {
					container.parentNode.removeChild(container), removeClass(document.documentElement, swalClasses.shown), removeClass(document.body, swalClasses.shown), null !== states.previousBodyPadding && (document.body.style.paddingRight = states.previousBodyPadding, states.previousBodyPadding = null),
						function() {
							if(hasClass(document.body, swalClasses.iosfix)) {
								var offset = parseInt(document.body.style.top, 10);
								removeClass(document.body, swalClasses.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * offset
							}
						}()
				};
				animationEndEvent && !hasClass(modal, swalClasses.noanimation) ? modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
					modal.removeEventListener(animationEndEvent, swalCloseEventFinished), hasClass(modal, swalClasses.hide) && removeModalAndResetState()
				}) : removeModalAndResetState(), null !== onComplete && "function" == typeof onComplete && setTimeout(function() {
					onComplete(modal)
				})
			}
		}, sweetAlert.clickConfirm = function() {
			return getConfirmButton().click()
		}, sweetAlert.clickCancel = function() {
			return getCancelButton().click()
		}, sweetAlert.setDefaults = function(userParams) {
			if(!userParams || "object" !== (void 0 === userParams ? "undefined" : _typeof(userParams))) return console.error("SweetAlert2: the argument for setDefaults() is required and has to be a object");
			for(var param in userParams) defaultParams.hasOwnProperty(param) || "extraParams" === param || (console.warn('SweetAlert2: Unknown parameter "' + param + '"'), delete userParams[param]);
			_extends(modalParams, userParams)
		}, sweetAlert.resetDefaults = function() {
			modalParams = _extends({}, defaultParams)
		}, sweetAlert.noop = function() {}, sweetAlert.version = "6.4.4", sweetAlert.default = sweetAlert
	}), window.Sweetalert2 && (window.sweetAlert = window.swal = window.Sweetalert2),
	function(factory) {
		var registeredInModuleLoader;
		if("function" == typeof define && define.amd && (define(factory), registeredInModuleLoader = !0), "object" == typeof exports && (module.exports = factory(), registeredInModuleLoader = !0), !registeredInModuleLoader) {
			var OldCookies = window.Cookies,
				api = window.Cookies = factory();
			api.noConflict = function() {
				return window.Cookies = OldCookies, api
			}
		}
	}(function() {
		function extend() {
			for(var i = 0, result = {}; i < arguments.length; i++) {
				var attributes = arguments[i];
				for(var key in attributes) result[key] = attributes[key]
			}
			return result
		}

		function decode(s) {
			return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
		}
		return function init(converter) {
			function api() {}

			function set(key, value, attributes) {
				if("undefined" != typeof document) {
					"number" == typeof(attributes = extend({
						path: "/"
					}, api.defaults, attributes)).expires && (attributes.expires = new Date(1 * new Date + 864e5 * attributes.expires)), attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
					try {
						var result = JSON.stringify(value);
						/^[\{\[]/.test(result) && (value = result)
					} catch(e) {}
					value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
					var stringifiedAttributes = "";
					for(var attributeName in attributes) attributes[attributeName] && (stringifiedAttributes += "; " + attributeName, !0 !== attributes[attributeName] && (stringifiedAttributes += "=" + attributes[attributeName].split(";")[0]));
					return document.cookie = key + "=" + value + stringifiedAttributes
				}
			}

			function get(key, json) {
				if("undefined" != typeof document) {
					for(var jar = {}, cookies = document.cookie ? document.cookie.split("; ") : [], i = 0; i < cookies.length; i++) {
						var parts = cookies[i].split("="),
							cookie = parts.slice(1).join("=");
						json || '"' !== cookie.charAt(0) || (cookie = cookie.slice(1, -1));
						try {
							var name = decode(parts[0]);
							if(cookie = (converter.read || converter)(cookie, name) || decode(cookie), json) try {
								cookie = JSON.parse(cookie)
							} catch(e) {}
							if(jar[name] = cookie, key === name) break
						} catch(e) {}
					}
					return key ? jar[key] : jar
				}
			}
			return api.set = set, api.get = function(key) {
				return get(key, !1)
			}, api.getJSON = function(key) {
				return get(key, !0)
			}, api.remove = function(key, attributes) {
				set(key, "", extend(attributes, {
					expires: -1
				}))
			}, api.defaults = {}, api.withConverter = init, api
		}(function() {})
	});
card = function(modules) {
	var installedModules = {};

	function __webpack_require__(moduleId) {
		if(installedModules[moduleId]) return installedModules[moduleId].exports;
		var module = installedModules[moduleId] = {
			exports: {},
			id: moduleId,
			loaded: !1
		};
		return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports
	}
	return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "", __webpack_require__(0)
}([function(module, exports, __webpack_require__) {
	(function(global) {
		var Card, QJ, extend;
		__webpack_require__(1), QJ = __webpack_require__(5), __webpack_require__(6), extend = __webpack_require__(7), Card = function() {
			var bindVal;

			function Card(opts) {
				var fn, me, toInitialize;
				this.maskCardNumber = (fn = this.maskCardNumber, me = this, function() {
					return fn.apply(me, arguments)
				}), this.options = extend(!0, this.defaults, opts), this.options.form ? (this.$el = QJ(this.options.form), this.options.container ? (this.$container = QJ(this.options.container), (toInitialize = QJ.isDOMElement(this.$container) ? this.$container : this.$container[0]).getAttribute(this.initializedDataAttr) || (toInitialize.setAttribute(this.initializedDataAttr, !0), this.render(), this.attachHandlers(), this.handleInitialPlaceholders())) : console.log("Please provide a container")) : console.log("Please provide a form")
			}
			return Card.prototype.initializedDataAttr = "data-jp-card-initialized", Card.prototype.cardTemplate = '<div class="jp-card-container"><div class="jp-card"><div class="jp-card-front"><div class="jp-card-logo jp-card-elo"><div class="e">e</div><div class="l">l</div><div class="o">o</div></div><div class="jp-card-logo jp-card-visa">Visa</div><div class="jp-card-logo jp-card-visaelectron">Visa<div class="elec">Electron</div></div><div class="jp-card-logo jp-card-mastercard">Mastercard</div><div class="jp-card-logo jp-card-maestro">Maestro</div><div class="jp-card-logo jp-card-amex"></div><div class="jp-card-logo jp-card-discover">discover</div><div class="jp-card-logo jp-card-dinersclub"></div><div class="jp-card-logo jp-card-dankort"><div class="dk"><div class="d"></div><div class="k"></div></div></div><div class="jp-card-logo jp-card-jcb"><div class="j">J</div><div class="c">C</div><div class="b">B</div></div><div class="jp-card-lower"><div class="jp-card-shiny"></div><div class="jp-card-cvc jp-card-display">{{cvc}}</div><div class="jp-card-number jp-card-display">{{number}}</div><div class="jp-card-name jp-card-display">{{name}}</div><div class="jp-card-expiry jp-card-display" data-before="{{monthYear}}" data-after="{{validDate}}">{{expiry}}</div></div></div><div class="jp-card-back"><div class="jp-card-bar"></div><div class="jp-card-cvc jp-card-display">{{cvc}}</div><div class="jp-card-shiny"></div></div></div></div>', Card.prototype.template = function(tpl, data) {
				return tpl.replace(/\{\{(.*?)\}\}/g, function(match, key, str) {
					return data[key]
				})
			}, Card.prototype.cardTypes = ["jp-card-amex", "jp-card-dankort", "jp-card-dinersclub", "jp-card-discover", "jp-card-jcb", "jp-card-laser", "jp-card-maestro", "jp-card-mastercard", "jp-card-unionpay", "jp-card-visa", "jp-card-visaelectron", "jp-card-elo"], Card.prototype.defaults = {
				formatting: !0,
				formSelectors: {
					numberInput: 'input[name="number"]',
					expiryInput: 'input[name="expiry"]',
					cvcInput: 'input[name="cvc"]',
					nameInput: 'input[name="name"]'
				},
				cardSelectors: {
					cardContainer: ".jp-card-container",
					card: ".jp-card",
					numberDisplay: ".jp-card-number",
					expiryDisplay: ".jp-card-expiry",
					cvcDisplay: ".jp-card-cvc",
					nameDisplay: ".jp-card-name"
				},
				messages: {
					validDate: "valid\nthru",
					monthYear: "month/year"
				},
				placeholders: {
					number: "&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;",
					cvc: "&bull;&bull;&bull;",
					expiry: "&bull;&bull;/&bull;&bull;",
					name: "Full Name"
				},
				masks: {
					cardNumber: !1
				},
				classes: {
					valid: "jp-card-valid",
					invalid: "jp-card-invalid"
				},
				debug: !1
			}, Card.prototype.render = function() {
				var $cardContainer, baseWidth, name, obj, ref, ref1, selector, ua;
				for(name in QJ.append(this.$container, this.template(this.cardTemplate, extend({}, this.options.messages, this.options.placeholders))), ref = this.options.cardSelectors) selector = ref[name], this["$" + name] = QJ.find(this.$container, selector);
				for(name in ref1 = this.options.formSelectors) selector = ref1[name], selector = this.options[name] ? this.options[name] : selector, !(obj = QJ.find(this.$el, selector)).length && this.options.debug && console.error("Card can't find a " + name + " in your form."), this["$" + name] = obj;
				if(this.options.formatting && (Payment.formatCardNumber(this.$numberInput), Payment.formatCardCVC(this.$cvcInput), Payment.formatCardExpiry(this.$expiryInput)), this.options.width && ($cardContainer = QJ(this.options.cardSelectors.cardContainer)[0], baseWidth = parseInt($cardContainer.clientWidth || window.getComputedStyle($cardContainer).width), $cardContainer.style.transform = "scale(" + this.options.width / baseWidth + ")"), ("undefined" != typeof navigator && null !== navigator ? navigator.userAgent : void 0) && -1 !== (ua = navigator.userAgent.toLowerCase()).indexOf("safari") && -1 === ua.indexOf("chrome") && QJ.addClass(this.$card, "jp-card-safari"), /MSIE 10\./i.test(navigator.userAgent) && QJ.addClass(this.$card, "jp-card-ie-10"), /rv:11.0/i.test(navigator.userAgent)) return QJ.addClass(this.$card, "jp-card-ie-11")
			}, Card.prototype.attachHandlers = function() {
				var expiryFilters, numberInputFilters;
				return numberInputFilters = [this.validToggler("cardNumber")], this.options.masks.cardNumber && numberInputFilters.push(this.maskCardNumber), bindVal(this.$numberInput, this.$numberDisplay, {
					fill: !1,
					filters: numberInputFilters
				}), QJ.on(this.$numberInput, "payment.cardType", this.handle("setCardType")), (expiryFilters = [function(val) {
					return val.replace(/(\s+)/g, "")
				}]).push(this.validToggler("cardExpiry")), bindVal(this.$expiryInput, this.$expiryDisplay, {
					join: function(text) {
						return 2 === text[0].length || text[1] ? "/" : ""
					},
					filters: expiryFilters
				}), bindVal(this.$cvcInput, this.$cvcDisplay, {
					filters: this.validToggler("cardCVC")
				}), QJ.on(this.$cvcInput, "focus", this.handle("flipCard")), QJ.on(this.$cvcInput, "blur", this.handle("unflipCard")), bindVal(this.$nameInput, this.$nameDisplay, {
					fill: !1,
					filters: this.validToggler("cardHolderName"),
					join: " "
				})
			}, Card.prototype.handleInitialPlaceholders = function() {
				var el, name, ref, results;
				for(name in results = [], ref = this.options.formSelectors) ref[name], el = this["$" + name], QJ.val(el) ? (QJ.trigger(el, "paste"), results.push(setTimeout(function() {
					return QJ.trigger(el, "keyup")
				}))) : results.push(void 0);
				return results
			}, Card.prototype.handle = function(fn) {
				return _this = this,
					function(e) {
						var args;
						return(args = Array.prototype.slice.call(arguments)).unshift(e.target), _this.handlers[fn].apply(_this, args)
					};
				var _this
			}, Card.prototype.validToggler = function(validatorName) {
				var isValid, _this;
				return "cardExpiry" === validatorName ? isValid = function(val) {
						var objVal;
						return objVal = Payment.fns.cardExpiryVal(val), Payment.fns.validateCardExpiry(objVal.month, objVal.year)
					} : "cardCVC" === validatorName ? (_this = this, isValid = function(val) {
						return Payment.fns.validateCardCVC(val, _this.cardType)
					}) : "cardNumber" === validatorName ? isValid = function(val) {
						return Payment.fns.validateCardNumber(val)
					} : "cardHolderName" === validatorName && (isValid = function(val) {
						return "" !== val
					}),
					function(_this) {
						return function(val, $in, $out) {
							var result;
							return result = isValid(val), _this.toggleValidClass($in, result), _this.toggleValidClass($out, result), val
						}
					}(this)
			}, Card.prototype.toggleValidClass = function(el, test) {
				return QJ.toggleClass(el, this.options.classes.valid, test), QJ.toggleClass(el, this.options.classes.invalid, !test)
			}, Card.prototype.maskCardNumber = function(val, el, out) {
				var mask, numbers;
				return mask = this.options.masks.cardNumber, 3 <= (numbers = val.split(" ")).length ? (numbers.forEach(function(item, idx) {
					if(idx !== numbers.length - 1) return numbers[idx] = numbers[idx].replace(/\d/g, mask)
				}), numbers.join(" ")) : val.replace(/\d/g, mask)
			}, Card.prototype.handlers = {
				setCardType: function($el, e) {
					var cardType;
					if(cardType = e.data, !QJ.hasClass(this.$card, cardType)) return QJ.removeClass(this.$card, "jp-card-unknown"), QJ.removeClass(this.$card, this.cardTypes.join(" ")), QJ.addClass(this.$card, "jp-card-" + cardType), QJ.toggleClass(this.$card, "jp-card-identified", "unknown" !== cardType), this.cardType = cardType
				},
				flipCard: function() {
					return QJ.addClass(this.$card, "jp-card-flipped")
				},
				unflipCard: function() {
					return QJ.removeClass(this.$card, "jp-card-flipped")
				}
			}, bindVal = function(el, out, opts) {
				var joiner, o, outDefaults;
				return null == opts && (opts = {}), opts.fill = opts.fill || !1, opts.filters = opts.filters || [], opts.filters instanceof Array || (opts.filters = [opts.filters]), opts.join = opts.join || "", "function" != typeof opts.join && (joiner = opts.join, opts.join = function() {
					return joiner
				}), outDefaults = function() {
					var j, len, results;
					for(results = [], j = 0, len = out.length; j < len; j++) o = out[j], results.push(o.textContent);
					return results
				}(), QJ.on(el, "focus", function() {
					return QJ.addClass(out, "jp-card-focused")
				}), QJ.on(el, "blur", function() {
					return QJ.removeClass(out, "jp-card-focused")
				}), QJ.on(el, "keyup change paste", function(e) {
					var elem, i, j, join, k, len, len1, outEl, outVal, ref, results, val;
					for(val = function() {
							var j, len, results;
							for(results = [], j = 0, len = el.length; j < len; j++) elem = el[j], results.push(QJ.val(elem));
							return results
						}(), join = opts.join(val), (val = val.join(join)) === join && (val = ""), j = 0, len = (ref = opts.filters).length; j < len; j++) val = (0, ref[j])(val, el, out);
					for(results = [], i = k = 0, len1 = out.length; k < len1; i = ++k) outEl = out[i], outVal = opts.fill ? val + outDefaults[i].substring(val.length) : val || outDefaults[i], results.push(outEl.textContent = outVal);
					return results
				}), el
			}, Card
		}(), module.exports = Card, global.Card = Card
	}).call(exports, function() {
		return this
	}())
}, function(module, exports, __webpack_require__) {
	var content = __webpack_require__(2);
	"string" == typeof content && (content = [
		[module.id, content, ""]
	]);
	__webpack_require__(4)(content, {});
	content.locals && (module.exports = content.locals)
}, function(module, exports, __webpack_require__) {
	(module.exports = __webpack_require__(3)()).push([module.id, '.jp-card.jp-card-safari.jp-card-identified .jp-card-front:before, .jp-card.jp-card-safari.jp-card-identified .jp-card-back:before {\n  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n  background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%); }\n\n.jp-card.jp-card-ie-10.jp-card-flipped, .jp-card.jp-card-ie-11.jp-card-flipped {\n  -webkit-transform: 0deg;\n  -moz-transform: 0deg;\n  -ms-transform: 0deg;\n  -o-transform: 0deg;\n  transform: 0deg; }\n  .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-front, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-front {\n    -webkit-transform: rotateY(0deg);\n    -moz-transform: rotateY(0deg);\n    -ms-transform: rotateY(0deg);\n    -o-transform: rotateY(0deg);\n    transform: rotateY(0deg); }\n  .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back {\n    -webkit-transform: rotateY(0deg);\n    -moz-transform: rotateY(0deg);\n    -ms-transform: rotateY(0deg);\n    -o-transform: rotateY(0deg);\n    transform: rotateY(0deg); }\n    .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back:after, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back:after {\n      left: 18%; }\n    .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-cvc, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-cvc {\n      -webkit-transform: rotateY(180deg);\n      -moz-transform: rotateY(180deg);\n      -ms-transform: rotateY(180deg);\n      -o-transform: rotateY(180deg);\n      transform: rotateY(180deg);\n      left: 5%; }\n    .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-shiny, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-shiny {\n      left: 84%; }\n      .jp-card.jp-card-ie-10.jp-card-flipped .jp-card-back .jp-card-shiny:after, .jp-card.jp-card-ie-11.jp-card-flipped .jp-card-back .jp-card-shiny:after {\n        left: -480%;\n        -webkit-transform: rotateY(180deg);\n        -moz-transform: rotateY(180deg);\n        -ms-transform: rotateY(180deg);\n        -o-transform: rotateY(180deg);\n        transform: rotateY(180deg); }\n\n.jp-card.jp-card-ie-10.jp-card-amex .jp-card-back, .jp-card.jp-card-ie-11.jp-card-amex .jp-card-back {\n  display: none; }\n\n.jp-card-logo {\n  height: 36px;\n  width: 60px;\n  font-style: italic; }\n  .jp-card-logo, .jp-card-logo:before, .jp-card-logo:after {\n    box-sizing: border-box; }\n\n.jp-card-logo.jp-card-amex {\n  text-transform: uppercase;\n  font-size: 4px;\n  font-weight: bold;\n  color: white;\n  background-image: repeating-radial-gradient(circle at center, #FFF 1px, #999 2px);\n  background-image: repeating-radial-gradient(circle at center, #FFF 1px, #999 2px);\n  border: 1px solid #EEE; }\n  .jp-card-logo.jp-card-amex:before, .jp-card-logo.jp-card-amex:after {\n    width: 28px;\n    display: block;\n    position: absolute;\n    left: 16px; }\n  .jp-card-logo.jp-card-amex:before {\n    height: 28px;\n    content: "american";\n    top: 3px;\n    text-align: left;\n    padding-left: 2px;\n    padding-top: 11px;\n    background: #267AC3; }\n  .jp-card-logo.jp-card-amex:after {\n    content: "express";\n    bottom: 11px;\n    text-align: right;\n    padding-right: 2px; }\n\n.jp-card.jp-card-amex.jp-card-flipped {\n  -webkit-transform: none;\n  -moz-transform: none;\n  -ms-transform: none;\n  -o-transform: none;\n  transform: none; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front:before, .jp-card.jp-card-amex.jp-card-identified .jp-card-back:before {\n  background-color: #108168; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front .jp-card-logo.jp-card-amex {\n  opacity: 1; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front .jp-card-cvc {\n  visibility: visible; }\n\n.jp-card.jp-card-amex.jp-card-identified .jp-card-front:after {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-discover {\n  background: #FF6600;\n  color: #111;\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 10px;\n  text-align: center;\n  overflow: hidden;\n  z-index: 1;\n  padding-top: 9px;\n  letter-spacing: .03em;\n  border: 1px solid #EEE; }\n  .jp-card-logo.jp-card-discover:before, .jp-card-logo.jp-card-discover:after {\n    content: " ";\n    display: block;\n    position: absolute; }\n  .jp-card-logo.jp-card-discover:before {\n    background: white;\n    width: 200px;\n    height: 200px;\n    border-radius: 200px;\n    bottom: -5%;\n    right: -80%;\n    z-index: -1; }\n  .jp-card-logo.jp-card-discover:after {\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    top: 10px;\n    left: 27px;\n    background-color: #FF6600;\n    background-image: -webkit-radial-gradient(#FF6600, #fff);\n    background-image: radial-gradient(  #FF6600, #fff);\n    content: "network";\n    font-size: 4px;\n    line-height: 24px;\n    text-indent: -7px; }\n\n.jp-card .jp-card-front .jp-card-logo.jp-card-discover {\n  right: 12%;\n  top: 18%; }\n\n.jp-card.jp-card-discover.jp-card-identified .jp-card-front:before, .jp-card.jp-card-discover.jp-card-identified .jp-card-back:before {\n  background-color: #86B8CF; }\n\n.jp-card.jp-card-discover.jp-card-identified .jp-card-logo.jp-card-discover {\n  opacity: 1; }\n\n.jp-card.jp-card-discover.jp-card-identified .jp-card-front:after {\n  -webkit-transition: 400ms;\n  -moz-transition: 400ms;\n  transition: 400ms;\n  content: " ";\n  display: block;\n  background-color: #FF6600;\n  background-image: -webkit-linear-gradient(#FF6600, #ffa366, #FF6600);\n  background-image: linear-gradient(#FF6600, #ffa366, #FF6600);\n  height: 50px;\n  width: 50px;\n  border-radius: 25px;\n  position: absolute;\n  left: 100%;\n  top: 15%;\n  margin-left: -25px;\n  box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.5); }\n\n.jp-card-logo.jp-card-visa {\n  text-transform: uppercase;\n  color: white;\n  text-align: center;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 18px;\n  margin-top: 5px; }\n  .jp-card-logo.jp-card-visa:before, .jp-card-logo.jp-card-visa:after {\n    content: " ";\n    display: block;\n    width: 100%;\n    height: 25%; }\n  .jp-card-logo.jp-card-visa:before {\n    position: absolute;\n    left: -4px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 12px 6px 0;\n    border-color: transparent #ffffff transparent transparent; }\n\n.jp-card.jp-card-visa.jp-card-identified .jp-card-front:before, .jp-card.jp-card-visa.jp-card-identified .jp-card-back:before {\n  background-color: #191278; }\n\n.jp-card.jp-card-visa.jp-card-identified .jp-card-logo.jp-card-visa {\n  opacity: 1;\n  box-shadow: none; }\n\n.jp-card-logo.jp-card-visaelectron {\n  background: white;\n  text-transform: uppercase;\n  color: #1A1876;\n  text-align: center;\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px; }\n  .jp-card-logo.jp-card-visaelectron:before, .jp-card-logo.jp-card-visaelectron:after {\n    content: " ";\n    display: block;\n    width: 100%;\n    height: 25%; }\n  .jp-card-logo.jp-card-visaelectron:before {\n    background: #1A1876; }\n  .jp-card-logo.jp-card-visaelectron:after {\n    background: #E79800; }\n  .jp-card-logo.jp-card-visaelectron .elec {\n    float: right;\n    font-family: arial;\n    font-size: 9px;\n    margin-right: 1px;\n    margin-top: -5px;\n    text-transform: none; }\n\n.jp-card.jp-card-visaelectron.jp-card-identified .jp-card-front:before, .jp-card.jp-card-visaelectron.jp-card-identified .jp-card-back:before {\n  background-color: #191278; }\n\n.jp-card.jp-card-visaelectron.jp-card-identified .jp-card-logo.jp-card-visaelectron {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-mastercard {\n  color: white;\n  font-style: normal;\n  text-transform: lowercase;\n  font-weight: bold;\n  text-align: center;\n  font-size: 9px;\n  line-height: 84px;\n  z-index: 1;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.6); }\n  .jp-card-logo.jp-card-mastercard:before, .jp-card-logo.jp-card-mastercard:after {\n    content: " ";\n    display: block;\n    width: 36px;\n    top: 0;\n    position: absolute;\n    height: 36px;\n    border-radius: 18px; }\n  .jp-card-logo.jp-card-mastercard:before {\n    left: 0;\n    background: #EB001B;\n    z-index: -1;\n    opacity: 0.9; }\n  .jp-card-logo.jp-card-mastercard:after {\n    right: 0;\n    background: #FF5F00;\n    z-index: -2; }\n\n.jp-card.jp-card-mastercard.jp-card-identified .jp-card-front .jp-card-logo.jp-card-mastercard, .jp-card.jp-card-mastercard.jp-card-identified .jp-card-back .jp-card-logo.jp-card-mastercard {\n  box-shadow: none; }\n\n.jp-card.jp-card-mastercard.jp-card-identified .jp-card-front:before, .jp-card.jp-card-mastercard.jp-card-identified .jp-card-back:before {\n  background-color: #0061A8; }\n\n.jp-card.jp-card-mastercard.jp-card-identified .jp-card-logo.jp-card-mastercard {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-maestro {\n  color: white;\n  font-style: normal;\n  text-transform: lowercase;\n  font-weight: bold;\n  text-align: center;\n  font-size: 14px;\n  line-height: 84px;\n  z-index: 1;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.6); }\n  .jp-card-logo.jp-card-maestro:before, .jp-card-logo.jp-card-maestro:after {\n    content: " ";\n    display: block;\n    width: 36px;\n    top: 0;\n    position: absolute;\n    height: 36px;\n    border-radius: 18px; }\n  .jp-card-logo.jp-card-maestro:before {\n    left: 0;\n    background: #EB001B;\n    z-index: -2; }\n  .jp-card-logo.jp-card-maestro:after {\n    right: 0;\n    background: #00A2E5;\n    z-index: -1;\n    opacity: 0.8; }\n\n.jp-card.jp-card-maestro.jp-card-identified .jp-card-front .jp-card-logo.jp-card-maestro, .jp-card.jp-card-maestro.jp-card-identified .jp-card-back .jp-card-logo.jp-card-maestro {\n  box-shadow: none; }\n\n.jp-card.jp-card-maestro.jp-card-identified .jp-card-front:before, .jp-card.jp-card-maestro.jp-card-identified .jp-card-back:before {\n  background-color: #0B2C5F; }\n\n.jp-card.jp-card-maestro.jp-card-identified .jp-card-logo.jp-card-maestro {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-dankort {\n  width: 60px;\n  height: 36px;\n  padding: 3px;\n  border-radius: 8px;\n  border: #000000 1px solid;\n  background-color: #FFFFFF; }\n  .jp-card-logo.jp-card-dankort .dk {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: hidden; }\n    .jp-card-logo.jp-card-dankort .dk:before {\n      background-color: #ED1C24;\n      content: \'\';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      display: block;\n      border-radius: 6px; }\n    .jp-card-logo.jp-card-dankort .dk:after {\n      content: \'\';\n      position: absolute;\n      top: 50%;\n      margin-top: -7.7px;\n      right: 0;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 7px 7px 10px 0;\n      border-color: transparent #ED1C24 transparent transparent;\n      z-index: 1; }\n  .jp-card-logo.jp-card-dankort .d, .jp-card-logo.jp-card-dankort .k {\n    position: absolute;\n    top: 50%;\n    width: 50%;\n    display: block;\n    height: 15.4px;\n    margin-top: -7.7px;\n    background: white; }\n  .jp-card-logo.jp-card-dankort .d {\n    left: 0;\n    border-radius: 0 8px 10px 0; }\n    .jp-card-logo.jp-card-dankort .d:before {\n      content: \'\';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      background: #ED1C24;\n      border-radius: 2px 4px 6px 0px;\n      height: 5px;\n      width: 7px;\n      margin: -3px 0 0 -4px; }\n  .jp-card-logo.jp-card-dankort .k {\n    right: 0; }\n    .jp-card-logo.jp-card-dankort .k:before, .jp-card-logo.jp-card-dankort .k:after {\n      content: \'\';\n      position: absolute;\n      right: 50%;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      margin-right: -1px; }\n    .jp-card-logo.jp-card-dankort .k:before {\n      top: 0;\n      border-width: 8px 5px 0 0;\n      border-color: #ED1C24 transparent transparent transparent; }\n    .jp-card-logo.jp-card-dankort .k:after {\n      bottom: 0;\n      border-width: 0 5px 8px 0;\n      border-color: transparent transparent #ED1C24 transparent; }\n\n.jp-card.jp-card-dankort.jp-card-identified .jp-card-front:before, .jp-card.jp-card-dankort.jp-card-identified .jp-card-back:before {\n  background-color: #0055C7; }\n\n.jp-card.jp-card-dankort.jp-card-identified .jp-card-logo.jp-card-dankort {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-elo {\n  height: 50px;\n  width: 50px;\n  border-radius: 100%;\n  background: black;\n  color: white;\n  text-align: center;\n  text-transform: lowercase;\n  font-size: 21px;\n  font-style: normal;\n  letter-spacing: 1px;\n  font-weight: bold;\n  padding-top: 13px; }\n  .jp-card-logo.jp-card-elo .e, .jp-card-logo.jp-card-elo .l, .jp-card-logo.jp-card-elo .o {\n    display: inline-block;\n    position: relative; }\n  .jp-card-logo.jp-card-elo .e {\n    -webkit-transform: rotate(-15deg);\n    -moz-transform: rotate(-15deg);\n    -ms-transform: rotate(-15deg);\n    -o-transform: rotate(-15deg);\n    transform: rotate(-15deg); }\n  .jp-card-logo.jp-card-elo .o {\n    position: relative;\n    display: inline-block;\n    width: 12px;\n    height: 12px;\n    right: 0;\n    top: 7px;\n    border-radius: 100%;\n    background-image: -webkit-linear-gradient( yellow 50%, red 50%);\n    background-image: linear-gradient( yellow 50%, red 50%);\n    -webkit-transform: rotate(40deg);\n    -moz-transform: rotate(40deg);\n    -ms-transform: rotate(40deg);\n    -o-transform: rotate(40deg);\n    transform: rotate(40deg);\n    text-indent: -9999px; }\n    .jp-card-logo.jp-card-elo .o:before {\n      content: "";\n      position: absolute;\n      width: 49%;\n      height: 49%;\n      background: black;\n      border-radius: 100%;\n      text-indent: -99999px;\n      top: 25%;\n      left: 25%; }\n\n.jp-card.jp-card-elo.jp-card-identified .jp-card-front:before, .jp-card.jp-card-elo.jp-card-identified .jp-card-back:before {\n  background-color: #6F6969; }\n\n.jp-card.jp-card-elo.jp-card-identified .jp-card-logo.jp-card-elo {\n  opacity: 1; }\n\n.jp-card-logo.jp-card-jcb {\n  border-radius: 5px 0px 5px 0px;\n  -moz-border-radius: 5px 0px 5px 0px;\n  -webkit-border-radius: 5px 0px 5px 0px;\n  background-color: white;\n  font-style: normal;\n  color: white;\n  width: 50px;\n  padding: 2px 0 0 2px; }\n  .jp-card-logo.jp-card-jcb > div {\n    width: 15px;\n    margin-right: 1px;\n    display: inline-block;\n    text-align: center;\n    text-shadow: 1px 1px rgba(0, 0, 0, 0.6);\n    border-radius: 5px 0px 5px 0px;\n    -moz-border-radius: 5px 0px 5px 0px;\n    -webkit-border-radius: 5px 0px 5px 0px; }\n    .jp-card-logo.jp-card-jcb > div:before, .jp-card-logo.jp-card-jcb > div:after {\n      content: " ";\n      display: block;\n      height: 8px; }\n    .jp-card-logo.jp-card-jcb > div.j {\n      background-color: #000063;\n      background-image: -webkit-linear-gradient(left, #000063, #008cff);\n      background-image: linear-gradient(to right,#000063, #008cff); }\n    .jp-card-logo.jp-card-jcb > div.c {\n      background-color: #630000;\n      background-image: -webkit-linear-gradient(left, #630000, #ff008d);\n      background-image: linear-gradient(to right,#630000, #ff008d); }\n    .jp-card-logo.jp-card-jcb > div.b {\n      background-color: #006300;\n      background-image: -webkit-linear-gradient(left, #006300, #00ff00);\n      background-image: linear-gradient(to right,#006300, #00ff00); }\n\n.jp-card.jp-card-jcb.jp-card-identified .jp-card-front:before, .jp-card.jp-card-jcb.jp-card-identified .jp-card-back:before {\n  background-color: #CB8000; }\n\n.jp-card.jp-card-jcb.jp-card-identified .jp-card-logo.jp-card-jcb {\n  opacity: 1;\n  box-shadow: none; }\n\n.jp-card-logo.jp-card-dinersclub {\n  font-family: serif;\n  height: 40px;\n  width: 100px;\n  color: white;\n  font-size: 17px;\n  font-style: normal;\n  letter-spacing: 1px; }\n  .jp-card-logo.jp-card-dinersclub::before, .jp-card-logo.jp-card-dinersclub::after {\n    display: block;\n    position: relative; }\n  .jp-card-logo.jp-card-dinersclub::before {\n    content: \'Diners Club\'; }\n  .jp-card-logo.jp-card-dinersclub::after {\n    content: \'International\';\n    text-transform: uppercase;\n    font-size: 0.6em; }\n\n.jp-card.jp-card-dinersclub .jp-card-front .jp-card-logo {\n  box-shadow: none !important; }\n\n.jp-card.jp-card-dinersclub.jp-card-identified .jp-card-front:before, .jp-card.jp-card-dinersclub.jp-card-identified .jp-card-back:before {\n  background-color: #999; }\n\n.jp-card.jp-card-dinersclub.jp-card-identified .jp-card-logo.jp-card-dinersclub {\n  opacity: 1; }\n\n.jp-card-container {\n  -webkit-perspective: 1000px;\n  -moz-perspective: 1000px;\n  perspective: 1000px;\n  width: 350px;\n  max-width: 100%;\n  height: 200px;\n  margin: auto;\n  z-index: 1;\n  position: relative; }\n\n.jp-card {\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  line-height: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-width: 315px;\n  border-radius: 10px;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transition: all 400ms linear;\n  -moz-transition: all 400ms linear;\n  transition: all 400ms linear; }\n  .jp-card > *, .jp-card > *:before, .jp-card > *:after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    font-family: inherit; }\n  .jp-card.jp-card-flipped {\n    -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n    -ms-transform: rotateY(180deg);\n    -o-transform: rotateY(180deg);\n    transform: rotateY(180deg); }\n  .jp-card .jp-card-front, .jp-card .jp-card-back {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transform-style: preserve-3d;\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    -o-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-transition: all 400ms linear;\n    -moz-transition: all 400ms linear;\n    transition: all 400ms linear;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    border-radius: 10px;\n    background: #DDD; }\n    .jp-card .jp-card-front:before, .jp-card .jp-card-back:before {\n      content: " ";\n      display: block;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      border-radius: 10px;\n      -webkit-transition: all 400ms ease;\n      -moz-transition: all 400ms ease;\n      transition: all 400ms ease; }\n    .jp-card .jp-card-front:after, .jp-card .jp-card-back:after {\n      content: " ";\n      display: block; }\n    .jp-card .jp-card-front .jp-card-display, .jp-card .jp-card-back .jp-card-display {\n      color: white;\n      font-weight: normal;\n      opacity: 0.5;\n      -webkit-transition: opacity 400ms linear;\n      -moz-transition: opacity 400ms linear;\n      transition: opacity 400ms linear; }\n      .jp-card .jp-card-front .jp-card-display.jp-card-focused, .jp-card .jp-card-back .jp-card-display.jp-card-focused {\n        opacity: 1;\n        font-weight: 700; }\n    .jp-card .jp-card-front .jp-card-cvc, .jp-card .jp-card-back .jp-card-cvc {\n      font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;\n      font-size: 14px; }\n    .jp-card .jp-card-front .jp-card-shiny, .jp-card .jp-card-back .jp-card-shiny {\n      width: 50px;\n      height: 35px;\n      border-radius: 5px;\n      background: #CCC;\n      position: relative; }\n      .jp-card .jp-card-front .jp-card-shiny:before, .jp-card .jp-card-back .jp-card-shiny:before {\n        content: " ";\n        display: block;\n        width: 70%;\n        height: 60%;\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n        background: #d9d9d9;\n        position: absolute;\n        top: 20%; }\n  .jp-card .jp-card-front .jp-card-logo {\n    position: absolute;\n    opacity: 0;\n    right: 5%;\n    top: 8%;\n    -webkit-transition: 400ms;\n    -moz-transition: 400ms;\n    transition: 400ms; }\n  .jp-card .jp-card-front .jp-card-lower {\n    width: 80%;\n    position: absolute;\n    left: 10%;\n    bottom: 30px; }\n    @media only screen and (max-width: 480px) {\n      .jp-card .jp-card-front .jp-card-lower {\n        width: 90%;\n        left: 5%; } }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-cvc {\n      visibility: hidden;\n      float: right;\n      position: relative;\n      bottom: 5px; }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-number {\n      font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;\n      font-size: 24px;\n      clear: both;\n      margin-bottom: 30px; }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-expiry {\n      font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;\n      letter-spacing: 0em;\n      position: relative;\n      float: right;\n      width: 25%; }\n      .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:before, .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:after {\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        font-weight: bold;\n        font-size: 7px;\n        white-space: pre;\n        display: block;\n        opacity: .5; }\n      .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:before {\n        content: attr(data-before);\n        margin-bottom: 2px;\n        font-size: 7px;\n        text-transform: uppercase; }\n      .jp-card .jp-card-front .jp-card-lower .jp-card-expiry:after {\n        position: absolute;\n        content: attr(data-after);\n        text-align: right;\n        right: 100%;\n        margin-right: 5px;\n        margin-top: 2px;\n        bottom: 0; }\n    .jp-card .jp-card-front .jp-card-lower .jp-card-name {\n      text-transform: uppercase;\n      font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;\n      font-size: 20px;\n      max-height: 45px;\n      position: absolute;\n      bottom: 0;\n      width: 190px;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: horizontal;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .jp-card .jp-card-back {\n    -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n    -ms-transform: rotateY(180deg);\n    -o-transform: rotateY(180deg);\n    transform: rotateY(180deg); }\n    .jp-card .jp-card-back .jp-card-bar {\n      background-color: #444;\n      background-image: -webkit-linear-gradient(#444, #333);\n      background-image: linear-gradient(#444, #333);\n      width: 100%;\n      height: 20%;\n      position: absolute;\n      top: 10%; }\n    .jp-card .jp-card-back:after {\n      content: " ";\n      display: block;\n      background-color: #FFF;\n      background-image: -webkit-linear-gradient(#FFF, #FFF);\n      background-image: linear-gradient(#FFF, #FFF);\n      width: 80%;\n      height: 16%;\n      position: absolute;\n      top: 40%;\n      left: 2%; }\n    .jp-card .jp-card-back .jp-card-cvc {\n      position: absolute;\n      top: 40%;\n      left: 85%;\n      -webkit-transition-delay: 600ms;\n      -moz-transition-delay: 600ms;\n      transition-delay: 600ms; }\n    .jp-card .jp-card-back .jp-card-shiny {\n      position: absolute;\n      top: 66%;\n      left: 2%; }\n      .jp-card .jp-card-back .jp-card-shiny:after {\n        content: "This card has been issued by Jesse Pollak and is licensed for anyone to use anywhere for free. It comes with no warranty. For support issues, please visit: github.com/jessepollak/card.";\n        position: absolute;\n        left: 120%;\n        top: 5%;\n        color: white;\n        font-size: 7px;\n        width: 230px;\n        opacity: .5; }\n  .jp-card.jp-card-identified {\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); }\n    .jp-card.jp-card-identified .jp-card-front, .jp-card.jp-card-identified .jp-card-back {\n      background-color: #000;\n      background-color: rgba(0, 0, 0, 0.5); }\n      .jp-card.jp-card-identified .jp-card-front:before, .jp-card.jp-card-identified .jp-card-back:before {\n        -webkit-transition: all 400ms ease;\n        -moz-transition: all 400ms ease;\n        transition: all 400ms ease;\n        background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n        background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 90% 20%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n        opacity: 1; }\n      .jp-card.jp-card-identified .jp-card-front .jp-card-logo, .jp-card.jp-card-identified .jp-card-back .jp-card-logo {\n        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3); }\n    .jp-card.jp-card-identified.no-radial-gradient .jp-card-front:before, .jp-card.jp-card-identified.no-radial-gradient .jp-card-back:before {\n      background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);\n      background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.05) 1px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.03) 4px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), repeating-linear-gradient(210deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), linear-gradient(-25deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%); }\n', ""])
}, function(module, exports) {
	module.exports = function() {
		var list = [];
		return list.toString = function() {
			for(var result = [], i = 0; i < this.length; i++) {
				var item = this[i];
				item[2] ? result.push("@media " + item[2] + "{" + item[1] + "}") : result.push(item[1])
			}
			return result.join("")
		}, list.i = function(modules, mediaQuery) {
			"string" == typeof modules && (modules = [
				[null, modules, ""]
			]);
			for(var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
				var id = this[i][0];
				"number" == typeof id && (alreadyImportedModules[id] = !0)
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				"number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), list.push(item))
			}
		}, list
	}
}, function(module, exports, __webpack_require__) {
	function memoize(fn) {
		var memo;
		return function() {
			return void 0 === memo && (memo = fn.apply(this, arguments)), memo
		}
	}
	var stylesInDom = {},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
		}),
		getHeadElement = memoize(function() {
			return document.head || document.getElementsByTagName("head")[0]
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i],
				domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
				for(; j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options))
			} else {
				var parts = [];
				for(j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
				stylesInDom[item.id] = {
					id: item.id,
					refs: 1,
					parts: parts
				}
			}
		}
	}

	function listToStyles(list) {
		for(var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
			var item = list[i],
				id = item[0],
				part = {
					css: item[1],
					media: item[2],
					sourceMap: item[3]
				};
			newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
				id: id,
				parts: [part]
			})
		}
		return styles
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement(),
			lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling) : head.appendChild(styleElement) : head.insertBefore(styleElement, head.firstChild), styleElementsInsertedAtTop.push(styleElement);
		else {
			if("bottom" !== options.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
			head.appendChild(styleElement)
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		0 <= idx && styleElementsInsertedAtTop.splice(idx, 1)
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		return styleElement.type = "text/css", insertStyleElement(options, styleElement), styleElement
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;
		if(options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement = singletonElement || createStyleElement(options), update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0)
		} else remove = obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (styleElement = function(options) {
			var linkElement = document.createElement("link");
			return linkElement.rel = "stylesheet", insertStyleElement(options, linkElement), linkElement
		}(options), update = function(linkElement, obj) {
			var css = obj.css,
				sourceMap = obj.sourceMap;
			sourceMap && (css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
			var blob = new Blob([css], {
					type: "text/css"
				}),
				oldSrc = linkElement.href;
			linkElement.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc)
		}.bind(null, styleElement), function() {
			removeStyleElement(styleElement), styleElement.href && URL.revokeObjectURL(styleElement.href)
		}) : (styleElement = createStyleElement(options), update = function(styleElement, obj) {
			var css = obj.css,
				media = obj.media;
			media && styleElement.setAttribute("media", media);
			if(styleElement.styleSheet) styleElement.styleSheet.cssText = css;
			else {
				for(; styleElement.firstChild;) styleElement.removeChild(styleElement.firstChild);
				styleElement.appendChild(document.createTextNode(css))
			}
		}.bind(null, styleElement), function() {
			removeStyleElement(styleElement)
		});
		return update(obj),
			function(newObj) {
				if(newObj) {
					if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
					update(obj = newObj)
				} else remove()
			}
	}
	module.exports = function(list, options) {
		void 0 === (options = options || {}).singleton && (options.singleton = isOldIE()), void 0 === options.insertAt && (options.insertAt = "bottom");
		var styles = listToStyles(list);
		return addStylesToDom(styles, options),
			function(newList) {
				for(var mayRemove = [], i = 0; i < styles.length; i++) {
					var item = styles[i];
					(domStyle = stylesInDom[item.id]).refs--, mayRemove.push(domStyle)
				}
				newList && addStylesToDom(listToStyles(newList), options);
				for(i = 0; i < mayRemove.length; i++) {
					var domStyle;
					if(0 === (domStyle = mayRemove[i]).refs) {
						for(var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
						delete stylesInDom[domStyle.id]
					}
				}
			}
	};
	var textStore, replaceText = (textStore = [], function(index, replacement) {
		return textStore[index] = replacement, textStore.filter(Boolean).join("\n")
	});

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
		if(styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css);
		else {
			var cssNode = document.createTextNode(css),
				childNodes = styleElement.childNodes;
			childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode)
		}
	}
}, function(module, exports) {
	(function() {
		var QJ, rreturn, rtrim;
		(QJ = function(selector) {
			return QJ.isDOMElement(selector) ? selector : document.querySelectorAll(selector)
		}).isDOMElement = function(el) {
			return el && null != el.nodeName
		}, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, QJ.trim = function(text) {
			return null === text ? "" : (text + "").replace(rtrim, "")
		}, rreturn = /\r/g, QJ.val = function(el, val) {
			var ret;
			return 1 < arguments.length ? el.value = val : "string" == typeof(ret = el.value) ? ret.replace(rreturn, "") : null === ret ? "" : ret
		}, QJ.preventDefault = function(eventObject) {
			if("function" != typeof eventObject.preventDefault) return eventObject.returnValue = !1;
			eventObject.preventDefault()
		}, QJ.normalizeEvent = function(e) {
			var original;
			return null == (e = {
				which: null != (original = e).which ? original.which : void 0,
				target: original.target || original.srcElement,
				preventDefault: function() {
					return QJ.preventDefault(original)
				},
				originalEvent: original,
				data: original.data || original.detail
			}).which && (e.which = null != original.charCode ? original.charCode : original.keyCode), e
		}, QJ.on = function(element, eventName, callback) {
			var el, i, j, len, len1, multEventName, originalCallback, ref;
			if(element.length)
				for(i = 0, len = element.length; i < len; i++) el = element[i], QJ.on(el, eventName, callback);
			else {
				if(!eventName.match(" ")) return originalCallback = callback, callback = function(e) {
					return e = QJ.normalizeEvent(e), originalCallback(e)
				}, element.addEventListener ? element.addEventListener(eventName, callback, !1) : element.attachEvent ? (eventName = "on" + eventName, element.attachEvent(eventName, callback)) : void(element["on" + eventName] = callback);
				for(j = 0, len1 = (ref = eventName.split(" ")).length; j < len1; j++) multEventName = ref[j], QJ.on(element, multEventName, callback)
			}
		}, QJ.addClass = function(el, className) {
			var e;
			return el.length ? function() {
				var i, len, results;
				for(results = [], i = 0, len = el.length; i < len; i++) e = el[i], results.push(QJ.addClass(e, className));
				return results
			}() : el.classList ? el.classList.add(className) : el.className += " " + className
		}, QJ.hasClass = function(el, className) {
			var e, hasClass, i, len;
			if(el.length) {
				for(hasClass = !0, i = 0, len = el.length; i < len; i++) e = el[i], hasClass = hasClass && QJ.hasClass(e, className);
				return hasClass
			}
			return el.classList ? el.classList.contains(className) : new RegExp("(^| )" + className + "( |$)", "gi").test(el.className)
		}, QJ.removeClass = function(el, className) {
			var cls, e, i, len, ref, results;
			if(el.length) return function() {
				var i, len, results;
				for(results = [], i = 0, len = el.length; i < len; i++) e = el[i], results.push(QJ.removeClass(e, className));
				return results
			}();
			if(el.classList) {
				for(results = [], i = 0, len = (ref = className.split(" ")).length; i < len; i++) cls = ref[i], results.push(el.classList.remove(cls));
				return results
			}
			return el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ")
		}, QJ.toggleClass = function(el, className, bool) {
			var e;
			return el.length ? function() {
				var i, len, results;
				for(results = [], i = 0, len = el.length; i < len; i++) e = el[i], results.push(QJ.toggleClass(e, className, bool));
				return results
			}() : bool ? QJ.hasClass(el, className) ? void 0 : QJ.addClass(el, className) : QJ.removeClass(el, className)
		}, QJ.append = function(el, toAppend) {
			var e;
			return el.length ? function() {
				var i, len, results;
				for(results = [], i = 0, len = el.length; i < len; i++) e = el[i], results.push(QJ.append(e, toAppend));
				return results
			}() : el.insertAdjacentHTML("beforeend", toAppend)
		}, QJ.find = function(el, selector) {
			return(el instanceof NodeList || el instanceof Array) && (el = el[0]), el.querySelectorAll(selector)
		}, QJ.trigger = function(el, name, data) {
			var ev;
			try {
				ev = new CustomEvent(name, {
					detail: data
				})
			} catch(error) {
				(ev = document.createEvent("CustomEvent")).initCustomEvent ? ev.initCustomEvent(name, !0, !0, data) : ev.initEvent(name, !0, !0, data)
			}
			return el.dispatchEvent(ev)
		}, module.exports = QJ
	}).call(this)
}, function(module, exports, __webpack_require__) {
	(function(global) {
		(function() {
			var Payment, QJ, cardFromNumber, cardFromType, cards, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlash, formatMonthExpiry, hasTextSelected, luhnCheck, reFormatCardNumber, restrictCVC, restrictCardNumber, restrictCombinedExpiry, restrictExpiry, restrictMonthExpiry, restrictNumeric, restrictYearExpiry, setCardType, indexOf = [].indexOf || function(item) {
				for(var i = 0, l = this.length; i < l; i++)
					if(i in this && this[i] === item) return i;
				return -1
			};
			QJ = __webpack_require__(5), cards = [{
				type: "amex",
				pattern: /^3[47]/,
				format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
				length: [15],
				cvcLength: [4],
				luhn: !0
			}, {
				type: "dankort",
				pattern: /^5019/,
				format: defaultFormat = /(\d{1,4})/g,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "hipercard",
				pattern: /^(384100|384140|384160|606282|637095|637568|60(?!11))/,
				format: defaultFormat,
				length: [14, 15, 16, 17, 18, 19],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "dinersclub",
				pattern: /^(36|38|30[0-5])/,
				format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
				length: [14],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "discover",
				pattern: /^(6011|65|64[4-9]|622)/,
				format: defaultFormat,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "jcb",
				pattern: /^35/,
				format: defaultFormat,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "laser",
				pattern: /^(6706|6771|6709)/,
				format: defaultFormat,
				length: [16, 17, 18, 19],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "maestro",
				pattern: /^(5018|5020|5038|6304|6703|6708|6759|676[1-3])/,
				format: defaultFormat,
				length: [12, 13, 14, 15, 16, 17, 18, 19],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "mastercard",
				pattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
				format: defaultFormat,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "unionpay",
				pattern: /^62/,
				format: defaultFormat,
				length: [16, 17, 18, 19],
				cvcLength: [3],
				luhn: !1
			}, {
				type: "visaelectron",
				pattern: /^4(026|17500|405|508|844|91[37])/,
				format: defaultFormat,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "elo",
				pattern: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/,
				format: defaultFormat,
				length: [16],
				cvcLength: [3],
				luhn: !0
			}, {
				type: "visa",
				pattern: /^4/,
				format: defaultFormat,
				length: [13, 16],
				cvcLength: [3],
				luhn: !0
			}], cardFromNumber = function(num) {
				var card, j, len;
				for(num = (num + "").replace(/\D/g, ""), j = 0, len = cards.length; j < len; j++)
					if((card = cards[j]).pattern.test(num)) return card
			}, cardFromType = function(type) {
				var card, j, len;
				for(j = 0, len = cards.length; j < len; j++)
					if((card = cards[j]).type === type) return card
			}, luhnCheck = function(num) {
				var digit, digits, j, len, odd, sum;
				for(odd = !0, j = sum = 0, len = (digits = (num + "").split("").reverse()).length; j < len; j++) digit = digits[j], digit = parseInt(digit, 10), (odd = !odd) && (digit *= 2), 9 < digit && (digit -= 9), sum += digit;
				return sum % 10 == 0
			}, hasTextSelected = function(target) {
				var ref;
				try {
					if(null != target.selectionStart && target.selectionStart !== target.selectionEnd) return !0;
					if(null != ("undefined" != typeof document && null !== document && null != (ref = document.selection) ? ref.createRange : void 0) && document.selection.createRange().text) return !0
				} catch(error) {
					error
				}
				return !1
			}, reFormatCardNumber = function(e) {
				return setTimeout(function() {
					var target, value;
					return target = e.target, value = QJ.val(target), value = Payment.fns.formatCardNumber(value), QJ.val(target, value), QJ.trigger(target, "change")
				})
			}, formatCardNumber = function(maxLength) {
				return function(e) {
					var card, digit, i, j, len, length, target, upperLength, upperLengths, value;
					if(digit = String.fromCharCode(e.which), /^\d+$/.test(digit)) {
						for(target = e.target, value = QJ.val(target), card = cardFromNumber(value + digit), length = (value.replace(/\D/g, "") + digit).length, upperLengths = [16], card && (upperLengths = card.length), maxLength && (upperLengths = upperLengths.filter(function(x) {
								return x <= maxLength
							})), i = j = 0, len = upperLengths.length; j < len; i = ++j)
							if(!((upperLength = upperLengths[i]) <= length && upperLengths[i + 1]) && upperLength <= length) return;
						if(!hasTextSelected(target)) return(card && "amex" === card.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/).test(value) ? (e.preventDefault(), QJ.val(target, value + " " + digit), QJ.trigger(target, "change")) : void 0
					}
				}
			}, formatBackCardNumber = function(e) {
				var target, value;
				if(target = e.target, value = QJ.val(target), !e.meta && 8 === e.which && !hasTextSelected(target)) return /\d\s$/.test(value) ? (e.preventDefault(), QJ.val(target, value.replace(/\d\s$/, "")), QJ.trigger(target, "change")) : /\s\d?$/.test(value) ? (e.preventDefault(), QJ.val(target, value.replace(/\s\d?$/, "")), QJ.trigger(target, "change")) : void 0
			}, formatExpiry = function(e) {
				var digit, target, val;
				if(digit = String.fromCharCode(e.which), /^\d+$/.test(digit)) return target = e.target, val = QJ.val(target) + digit, /^\d$/.test(val) && "0" !== val && "1" !== val ? (e.preventDefault(), QJ.val(target, "0" + val + " / "), QJ.trigger(target, "change")) : /^\d\d$/.test(val) ? (e.preventDefault(), QJ.val(target, val + " / "), QJ.trigger(target, "change")) : void 0
			}, formatMonthExpiry = function(e) {
				var digit, target, val;
				if(digit = String.fromCharCode(e.which), /^\d+$/.test(digit)) return target = e.target, val = QJ.val(target) + digit, /^\d$/.test(val) && "0" !== val && "1" !== val ? (e.preventDefault(), QJ.val(target, "0" + val), QJ.trigger(target, "change")) : /^\d\d$/.test(val) ? (e.preventDefault(), QJ.val(target, "" + val), QJ.trigger(target, "change")) : void 0
			}, formatForwardExpiry = function(e) {
				var digit, target, val;
				if(digit = String.fromCharCode(e.which), /^\d+$/.test(digit)) return target = e.target, val = QJ.val(target), /^\d\d$/.test(val) ? (QJ.val(target, val + " / "), QJ.trigger(target, "change")) : void 0
			}, formatForwardSlash = function(e) {
				var target, val;
				if("/" === String.fromCharCode(e.which)) return target = e.target, val = QJ.val(target), /^\d$/.test(val) && "0" !== val ? (QJ.val(target, "0" + val + " / "), QJ.trigger(target, "change")) : void 0
			}, formatBackExpiry = function(e) {
				var target, value;
				if(!e.metaKey && (target = e.target, value = QJ.val(target), 8 === e.which && !hasTextSelected(target))) return /\d(\s|\/)+$/.test(value) ? (e.preventDefault(), QJ.val(target, value.replace(/\d(\s|\/)*$/, "")), QJ.trigger(target, "change")) : /\s\/\s?\d?$/.test(value) ? (e.preventDefault(), QJ.val(target, value.replace(/\s\/\s?\d?$/, "")), QJ.trigger(target, "change")) : void 0
			}, restrictNumeric = function(e) {
				var input;
				return !(!e.metaKey && !e.ctrlKey) || (32 === e.which ? e.preventDefault() : 0 === e.which || (e.which < 33 || (input = String.fromCharCode(e.which), /[\d\s]/.test(input) ? void 0 : e.preventDefault())))
			}, restrictCardNumber = function(maxLength) {
				return function(e) {
					var card, digit, length, target, value;
					if(target = e.target, digit = String.fromCharCode(e.which), /^\d+$/.test(digit) && !hasTextSelected(target)) return value = (QJ.val(target) + digit).replace(/\D/g, ""), length = 16, (card = cardFromNumber(value)) && (length = card.length[card.length.length - 1]), maxLength && (length = Math.min(length, maxLength)), value.length <= length ? void 0 : e.preventDefault()
				}
			}, restrictExpiry = function(e, length) {
				var digit, target;
				if(target = e.target, digit = String.fromCharCode(e.which), /^\d+$/.test(digit) && !hasTextSelected(target)) return(QJ.val(target) + digit).replace(/\D/g, "").length > length ? e.preventDefault() : void 0
			}, restrictCombinedExpiry = function(e) {
				return restrictExpiry(e, 6)
			}, restrictMonthExpiry = function(e) {
				return restrictExpiry(e, 2)
			}, restrictYearExpiry = function(e) {
				return restrictExpiry(e, 4)
			}, restrictCVC = function(e) {
				var digit, target;
				if(target = e.target, digit = String.fromCharCode(e.which), /^\d+$/.test(digit) && !hasTextSelected(target)) return(QJ.val(target) + digit).length <= 4 ? void 0 : e.preventDefault()
			}, setCardType = function(e) {
				var allTypes, card, cardType, target, val;
				if(target = e.target, val = QJ.val(target), cardType = Payment.fns.cardType(val) || "unknown", !QJ.hasClass(target, cardType)) return allTypes = function() {
					var j, len, results;
					for(results = [], j = 0, len = cards.length; j < len; j++) card = cards[j], results.push(card.type);
					return results
				}(), QJ.removeClass(target, "unknown"), QJ.removeClass(target, allTypes.join(" ")), QJ.addClass(target, cardType), QJ.toggleClass(target, "identified", "unknown" !== cardType), QJ.trigger(target, "payment.cardType", cardType)
			}, Payment = function() {
				function Payment() {}
				return Payment.fns = {
					cardExpiryVal: function(value) {
						var month, ref, year;
						return month = (ref = (value = value.replace(/\s/g, "")).split("/", 2))[0], 2 === (null != (year = ref[1]) ? year.length : void 0) && /^\d+$/.test(year) && (year = (new Date).getFullYear().toString().slice(0, 2) + year), {
							month: month = parseInt(month, 10),
							year: year = parseInt(year, 10)
						}
					},
					validateCardNumber: function(num) {
						var card, ref;
						return num = (num + "").replace(/\s+|-/g, ""), !!/^\d+$/.test(num) && (!!(card = cardFromNumber(num)) && (ref = num.length, 0 <= indexOf.call(card.length, ref) && (!1 === card.luhn || luhnCheck(num))))
					},
					validateCardExpiry: function(month, year) {
						var currentTime, expiry, ref, ref1;
						return "object" == typeof month && "month" in month ? (month = (ref = month).month, year = ref.year) : "string" == typeof month && 0 <= indexOf.call(month, "/") && (month = (ref1 = Payment.fns.cardExpiryVal(month)).month, year = ref1.year), !(!month || !year) && (month = QJ.trim(month), year = QJ.trim(year), !!/^\d+$/.test(month) && (!!/^\d+$/.test(year) && (!!((month = parseInt(month, 10)) && month <= 12) && (2 === year.length && (year = (new Date).getFullYear().toString().slice(0, 2) + year), expiry = new Date(year, month), currentTime = new Date, expiry.setMonth(expiry.getMonth() - 1), expiry.setMonth(expiry.getMonth() + 1, 1), currentTime < expiry))))
					},
					validateCardCVC: function(cvc, type) {
						var ref, ref1;
						return cvc = QJ.trim(cvc), !!/^\d+$/.test(cvc) && (type && cardFromType(type) ? (ref = cvc.length, 0 <= indexOf.call(null != (ref1 = cardFromType(type)) ? ref1.cvcLength : void 0, ref)) : 3 <= cvc.length && cvc.length <= 4)
					},
					cardType: function(num) {
						var ref;
						return num && (null != (ref = cardFromNumber(num)) ? ref.type : void 0) || null
					},
					formatCardNumber: function(num) {
						var card, groups, ref, upperLength;
						return(card = cardFromNumber(num)) ? (upperLength = card.length[card.length.length - 1], num = (num = num.replace(/\D/g, "")).slice(0, upperLength), card.format.global ? null != (ref = num.match(card.format)) ? ref.join(" ") : void 0 : null != (groups = card.format.exec(num)) ? (groups.shift(), (groups = groups.filter(function(n) {
							return n
						})).join(" ")) : void 0) : num
					}
				}, Payment.restrictNumeric = function(el) {
					return QJ.on(el, "keypress", restrictNumeric)
				}, Payment.cardExpiryVal = function(el) {
					return Payment.fns.cardExpiryVal(QJ.val(el))
				}, Payment.formatCardCVC = function(el) {
					return Payment.restrictNumeric(el), QJ.on(el, "keypress", restrictCVC), el
				}, Payment.formatCardExpiry = function(el) {
					var month, year;
					return Payment.restrictNumeric(el), el.length && 2 === el.length ? (month = el[0], year = el[1], this.formatCardExpiryMultiple(month, year)) : (QJ.on(el, "keypress", restrictCombinedExpiry), QJ.on(el, "keypress", formatExpiry), QJ.on(el, "keypress", formatForwardSlash), QJ.on(el, "keypress", formatForwardExpiry), QJ.on(el, "keydown", formatBackExpiry)), el
				}, Payment.formatCardExpiryMultiple = function(month, year) {
					return QJ.on(month, "keypress", restrictMonthExpiry), QJ.on(month, "keypress", formatMonthExpiry), QJ.on(year, "keypress", restrictYearExpiry)
				}, Payment.formatCardNumber = function(el, maxLength) {
					return Payment.restrictNumeric(el), QJ.on(el, "keypress", restrictCardNumber(maxLength)), QJ.on(el, "keypress", formatCardNumber(maxLength)), QJ.on(el, "keydown", formatBackCardNumber), QJ.on(el, "keyup blur", setCardType), QJ.on(el, "paste", reFormatCardNumber), QJ.on(el, "input", reFormatCardNumber), el
				}, Payment.getCardArray = function() {
					return cards
				}, Payment.setCardArray = function(cardArray) {
					return cards = cardArray, !0
				}, Payment.addToCardArray = function(cardObject) {
					return cards.push(cardObject)
				}, Payment.removeFromCardArray = function(type) {
					var key;
					for(key in cards) cards[key].type === type && cards.splice(key, 1);
					return !0
				}, Payment
			}(), module.exports = Payment, global.Payment = Payment
		}).call(this)
	}).call(exports, function() {
		return this
	}())
}, function(module, exports, __webpack_require__) {
	"use strict";
	module.exports = __webpack_require__(8)
}, function(module, exports, __webpack_require__) {
	"use strict";

	function extend(argument_0, argument_1) {
		var options, name, src, copy, copyIsArray, clone, target = argument_0 || {},
			i = 1,
			length = arguments.length,
			deep = !1;
		for("boolean" == typeof target && (deep = target, target = argument_1 || {}, i = 2), "object" == typeof target || is.fn(target) || (target = {}); i < length; i++)
			if(null != (options = arguments[i]))
				for(name in "string" == typeof options && (options = options.split("")), options) src = target[name], target !== (copy = options[name]) && (deep && copy && (is.hash(copy) || (copyIsArray = is.array(copy))) ? (clone = copyIsArray ? (copyIsArray = !1, src && is.array(src) ? src : []) : src && is.hash(src) ? src : {}, target[name] = extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
		return target
	}
	var is = __webpack_require__(9);
	extend.version = "1.1.3", module.exports = extend
}, function(module, exports) {
	"use strict";
	var symbolValueOf, objProto = Object.prototype,
		owns = objProto.hasOwnProperty,
		toStr = objProto.toString;
	"function" == typeof Symbol && (symbolValueOf = Symbol.prototype.valueOf);

	function isActualNaN(value) {
		return value != value
	}
	var NON_HOST_TYPES = {
			boolean: 1,
			number: 1,
			string: 1,
			undefined: 1
		},
		base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/,
		hexRegex = /^[A-Fa-f0-9]+$/,
		is = {};
	is.a = is.type = function(value, type) {
		return typeof value === type
	}, is.defined = function(value) {
		return void 0 !== value
	}, is.empty = function(value) {
		var key, type = toStr.call(value);
		if("[object Array]" === type || "[object Arguments]" === type || "[object String]" === type) return 0 === value.length;
		if("[object Object]" !== type) return !value;
		for(key in value)
			if(owns.call(value, key)) return !1;
		return !0
	}, is.equal = function(value, other) {
		if(value === other) return !0;
		var key, type = toStr.call(value);
		if(type !== toStr.call(other)) return !1;
		if("[object Object]" === type) {
			for(key in value)
				if(!(is.equal(value[key], other[key]) && key in other)) return !1;
			for(key in other)
				if(!(is.equal(value[key], other[key]) && key in value)) return !1;
			return !0
		}
		if("[object Array]" !== type) return "[object Function]" === type ? value.prototype === other.prototype : "[object Date]" === type && value.getTime() === other.getTime();
		if((key = value.length) !== other.length) return !1;
		for(; key--;)
			if(!is.equal(value[key], other[key])) return !1;
		return !0
	}, is.hosted = function(value, host) {
		var type = typeof host[value];
		return "object" == type ? !!host[value] : !NON_HOST_TYPES[type]
	}, is.instance = is.instanceof = function(value, constructor) {
		return value instanceof constructor
	}, is.nil = is.null = function(value) {
		return null === value
	}, is.undef = is.undefined = function(value) {
		return void 0 === value
	}, is.args = is.arguments = function(value) {
		var isStandardArguments = "[object Arguments]" === toStr.call(value),
			isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
		return isStandardArguments || isOldArguments
	}, is.array = Array.isArray || function(value) {
		return "[object Array]" === toStr.call(value)
	}, is.args.empty = function(value) {
		return is.args(value) && 0 === value.length
	}, is.array.empty = function(value) {
		return is.array(value) && 0 === value.length
	}, is.arraylike = function(value) {
		return !!value && !is.bool(value) && owns.call(value, "length") && isFinite(value.length) && is.number(value.length) && 0 <= value.length
	}, is.bool = is.boolean = function(value) {
		return "[object Boolean]" === toStr.call(value)
	}, is.false = function(value) {
		return is.bool(value) && !1 === Boolean(Number(value))
	}, is.true = function(value) {
		return is.bool(value) && !0 === Boolean(Number(value))
	}, is.date = function(value) {
		return "[object Date]" === toStr.call(value)
	}, is.date.valid = function(value) {
		return is.date(value) && !isNaN(Number(value))
	}, is.element = function(value) {
		return void 0 !== value && "undefined" != typeof HTMLElement && value instanceof HTMLElement && 1 === value.nodeType
	}, is.error = function(value) {
		return "[object Error]" === toStr.call(value)
	}, is.fn = is.function = function(value) {
		if("undefined" != typeof window && value === window.alert) return !0;
		var str = toStr.call(value);
		return "[object Function]" === str || "[object GeneratorFunction]" === str || "[object AsyncFunction]" === str
	}, is.number = function(value) {
		return "[object Number]" === toStr.call(value)
	}, is.infinite = function(value) {
		return value === 1 / 0 || value === -1 / 0
	}, is.decimal = function(value) {
		return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 != 0
	}, is.divisibleBy = function(value, n) {
		var isDividendInfinite = is.infinite(value),
			isDivisorInfinite = is.infinite(n),
			isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && 0 !== n;
		return isDividendInfinite || isDivisorInfinite || isNonZeroNumber && value % n == 0
	}, is.integer = is.int = function(value) {
		return is.number(value) && !isActualNaN(value) && value % 1 == 0
	}, is.maximum = function(value, others) {
		if(isActualNaN(value)) throw new TypeError("NaN is not a valid value");
		if(!is.arraylike(others)) throw new TypeError("second argument must be array-like");
		for(var len = others.length; 0 <= --len;)
			if(value < others[len]) return !1;
		return !0
	}, is.minimum = function(value, others) {
		if(isActualNaN(value)) throw new TypeError("NaN is not a valid value");
		if(!is.arraylike(others)) throw new TypeError("second argument must be array-like");
		for(var len = others.length; 0 <= --len;)
			if(value > others[len]) return !1;
		return !0
	}, is.nan = function(value) {
		return !is.number(value) || value != value
	}, is.even = function(value) {
		return is.infinite(value) || is.number(value) && value == value && value % 2 == 0
	}, is.odd = function(value) {
		return is.infinite(value) || is.number(value) && value == value && value % 2 != 0
	}, is.ge = function(value, other) {
		if(isActualNaN(value) || isActualNaN(other)) throw new TypeError("NaN is not a valid value");
		return !is.infinite(value) && !is.infinite(other) && other <= value
	}, is.gt = function(value, other) {
		if(isActualNaN(value) || isActualNaN(other)) throw new TypeError("NaN is not a valid value");
		return !is.infinite(value) && !is.infinite(other) && other < value
	}, is.le = function(value, other) {
		if(isActualNaN(value) || isActualNaN(other)) throw new TypeError("NaN is not a valid value");
		return !is.infinite(value) && !is.infinite(other) && value <= other
	}, is.lt = function(value, other) {
		if(isActualNaN(value) || isActualNaN(other)) throw new TypeError("NaN is not a valid value");
		return !is.infinite(value) && !is.infinite(other) && value < other
	}, is.within = function(value, start, finish) {
		if(isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) throw new TypeError("NaN is not a valid value");
		if(!is.number(value) || !is.number(start) || !is.number(finish)) throw new TypeError("all arguments must be numbers");
		return is.infinite(value) || is.infinite(start) || is.infinite(finish) || start <= value && value <= finish
	}, is.object = function(value) {
		return "[object Object]" === toStr.call(value)
	}, is.primitive = function(value) {
		return !value || !("object" == typeof value || is.object(value) || is.fn(value) || is.array(value))
	}, is.hash = function(value) {
		return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval
	}, is.regexp = function(value) {
		return "[object RegExp]" === toStr.call(value)
	}, is.string = function(value) {
		return "[object String]" === toStr.call(value)
	}, is.base64 = function(value) {
		return is.string(value) && (!value.length || base64Regex.test(value))
	}, is.hex = function(value) {
		return is.string(value) && (!value.length || hexRegex.test(value))
	}, is.symbol = function(value) {
		return "function" == typeof Symbol && "[object Symbol]" === toStr.call(value) && "symbol" == typeof symbolValueOf.call(value)
	}, module.exports = is
}]);
var hgs = {
		recaptchaKey: "",
		maintenance: 1 === parseInt($("#maintenance_hgs").val()),
		documentReady: function() {
			$("#hgsQueryNo").validate({
				rules: {
					hgs_query_no: {
						required: !0,
						minlength: 6,
						maxlength: 15
					},
					non_user_email: {
					}
				},
				messages: {
					hgs_query_no: {
						required: "Bu alan boş bırakılamaz.",
						minlength: "Geçerli bir değer giriniz.",
						maxlength: "Geçerli bir değer giriniz."
					},
					non_user_email: {
						email: "Geçerli bir telefon girilmelidir."
					}
				}
			}), $("#hgsQueryLabel").validate({
				ignore: ".ignore",
				rules: {
					selected_label: "required"
				},
				messages: {
					selected_label: ""
				}
			}), $("#hgsQueryAmount").validate({
				ignore: ".ignore",
				rules: {
					selected_label: "required"
				},
				messages: {
					selected_label: ""
				}
			}), $("#bank-transfer-form").validate({
				ignore: ".ignore",
				rules: {
					email: {
						required: !0,
						email: !0
					},
					bank_id: "required"
				},
				messages: {
					email: {
						required: "Telefon girilmelidir.",
						email: "Geçerli bir e-posta adresi girilmelidir."
					},
					bank_id: "Banka seçilmelidir."
				}
			}), $("body").delegate(".hgs-query-label-table tbody tr", "click", function() {
				var ticketNumber, plateNumber, message = $(".hgs-query-ticket-message");
				if(message.hide(), $(this).hasClass("disabled-item")) return $("#hgs-query-container .nav-pills li:first-child a").trigger("click"), toastr.info("Bu sorgulamaya ait HGS Ã¼rÃ¼nÃ¼ bulunmamaktadır. Bir yanlışlık olduğunu dÃ¼şÃ¼nÃ¼yorsanız Ptt şubesine başvurabilirsiniz."), !1;
				$("#selected_label-error").css("display", "none"), $.each($(".hgs-query-label-table tbody tr"), function() {
					$(this).removeClass("selected-label")
				}), $(this).addClass("selected-label"), $("#hgsQueryLabel input[name=selected_label], .hgs_id").val($(this).data("id")), $(".post_payment_data").attr("data-hgsid", $(this).data("id")), plateNumber = $(this).hasClass("child") ? (ticketNumber = $(this).prev().find("td.hgs-ticket-list-number").html(), $(this).prev().find(".hgs-ticket-list-plate").html()) : (ticketNumber = $(".hgs-query-label-table .selected-label td.hgs-ticket-list-number").html(), $(".hgs-query-label-table .selected-label .hgs-ticket-list-plate").html()), message.html(ticketNumber + " etiket numaralı, " + plateNumber + " plakalı aracın bakiye yÃ¼kleme işlemi için devam edeceksiniz."), message.show()
			}), $(".hgs-query-no").keypress(function(e) {
				13 == e.keyCode && ($("#wizard-query-btn").trigger("click"), e.preventDefault())
			}), $(".hgs-query-email").keypress(function(event) {
				13 == event.keyCode && ($(".start-bank-transfer-btn").click(), event.preventDefault())
			})
		},
		payment: function() {
			var form = $("#payment-form"),
				postPaymentData = ($("#panel-do-payment-btn"), $(".post_payment_data")),
				hgsid = postPaymentData.data("hgsid"),
				price = postPaymentData.data("price"),
				commission = postPaymentData.data("commission"),
				contract = $("#hgs-credit-card-contract"),
				contractValid = !0;
			0 < contract.length && (contract.prop("checked") ? contract.parents(".panel-contract-container").find(".contract-not-checked-msg").hide() : contract.parents(".panel-contract-container").find(".contract-not-checked-msg").show(), contractValid = contract.prop("checked")), form.valid() && contractValid && (app.creditCardValidation(form.find("input[name=showNumber]").val()) ? ($("body").css({
				"pointer-events": "none"
			}), toastr.options = {
				closeButton: !1,
				showDuration: 0,
				hideDuration: 0,
				timeOut: 0,
				tapToDismiss: !1,
				progressBar: !1,
				newestOnTop: !0,
				closeOnHover: !0
			}, $.ajax({
				url: "/hgs/hgs/payment_confirm/" + $(".hgs-query-token").val() + "/" + hgsid + "/" + price + "/" + commission + "/credit_card",
				type: "GET",
				dataType: "json",
				success: function(resp) {
					resp.success ? toastr.warning('<p class="toast-message-content">' + resp.data.confirm + '</p><div class="button-group"><button type="button" class="btn btn-danger" onclick="app.clearToastr();">Ä°PTAL <img src="/v2/assets/images/form-invalid.png" /></button><button type="button" class="btn btn-success" onclick="hgs.paymentConfirm();">ONAY <img src="/v2/assets/images/form-valid.png" /></button></div>') : toastr.error(resp.err_msg)
				},
				error: function() {
					toastr.error("Sistemde geçici bir sorun oluştu. LÃ¼tfen tekrar deneyin.")
				},
				complete: function() {
					$("body").css({
						"pointer-events": "all"
					}), setTimeout(function() {
						toastr.options = {
							closeButton: !0,
							showDuration: 0,
							hideDuration: 0,
							timeOut: 4e3,
							tapToDismiss: !1,
							progressBar: !0,
							closeOnHover: !0
						}
					}, 500)
				}
			})) : toastr.error("Kredi kartı numarası geçersiz!"))
		},
		paymentConfirm: function() {
			var form = $("form[name='payment-form']"),
				cardNumber = form.find("input[name=showNumber]").val().replace(/[^a-zA-Z0-9]/g, ""),
				expiry = form.find("input[name=showExpiry]").val().replace("/ ", "/ 20"),
				requestID = "hgs-web-" + (new Date).getTime().toString(),
				cardHolder = form.find("input[name=holder]").val(),
				securityCode = form.find("input[name=cvc]").val(),
				email = form.find("input[name=email]"),
				nonUserEmail = form.find("input[name='non_user_email']");
			$("body").css({
				"pointer-events": "none"
			}), $(".toast").css({
				"pointer-events": "none"
			}), "" === email.val() && void 0 !== nonUserEmail.val() && "" !== nonUserEmail.val() && (email.val(nonUserEmail.val()), $("#non_user_email").remove(), $("<input>").attr({
				type: "hidden",
				id: "non_user_email",
				name: "non_user_email",
				value: nonUserEmail.val()
			}).prependTo(form)), $("<input>").attr({
				type: "hidden",
				id: "card_number",
				name: "card_number",
				value: cardNumber
			}).prependTo(form), $("<input>").attr({
				type: "hidden",
				id: "card_expiry",
				name: "card_expiry",
				value: expiry
			}).prependTo(form), $("<input>").attr({
				type: "hidden",
				id: "card_holder",
				name: "card_holder",
				value: cardHolder
			}).prependTo(form), $("<input>").attr({
				type: "hidden",
				id: "card_ccv",
				name: "card_ccv",
				value: securityCode
			}).prependTo(form), $("<input>").attr({
				type: "hidden",
				id: "api[request_id]",
				name: "api[request_id]",
				value: requestID
			}).prependTo(form), form.submit()
		},
		cardCheckboxes: function(that) {
			$.each($(".hgs-query-amounts-label"), function() {
				$(this).find(".card-checkboxes").removeClass("selected_label")
			}), that.addClass("selected_label"), $("#hgsQueryAmount input[name=selected_label], .hgs-products").val(that.data("id")), 0 < $(".card-checkboxes.selected_label").length && $("#selected_label-error").hide()
		},
		amountsLabel: function(that) {
			var price = parseFloat(that.data("price")),
				commission = parseFloat(that.data("commission")),
				total = parseFloat(price) + parseFloat(commission),
				postPaymentData = $(".post_payment_data");
			postPaymentData.attr("data-price", that.data("price")), postPaymentData.attr("data-commission", that.data("commission")), $(".hgs-query-amounts-label span").css("color", "#fff"), that.css("color", "#fab62e"), $("#hgsyukleme").html(price + " TL"), $("#hizmetbedeli").html(commission + " TL"), $("#tbedel").html(total + " TL"), $("#tbedel").attr("data-amount", total)
		},
		setProcessType: function(that) {
			var thisID = parseInt(that.data("id")),
				placeholder = "",
				queryNo = $(".hgs-query-no");
			$(".hgs-query-process-type").removeClass("btn-fill"), that.addClass("btn-fill"), $(".change-hgs-query-process-name").html($(".hgs-query-process-type.btn-fill").text()), 0 === thisID ? placeholder = "Plaka Numarası" : 1 === thisID ? placeholder = "T.C. Kimlik Numarası" : 3 === thisID ? placeholder = "Pasaport Numarası" : 2 === thisID ? placeholder = "Vergi Numarası" : 4 === thisID && (placeholder = "HGS Ürün Numarası"), queryNo.val(""), queryNo.removeClass("error"), queryNo.parent().find("label").hide(), queryNo.attr("placeholder", placeholder)
		},
		maskPlateNo: function(text) {
			return void 0 !== text && "string" == typeof text && null !== text || (text = ""), "****" + text.toString().substr(4)
		},
		onTabShow: function(tab, navigation, index) {
			var $total = navigation.find("li").length,
				confirmBtn = $(".wizard-confirm-btn"),
				$wizard = navigation.closest(".wizard-card"),
				move_distance = 100 / $total;
			move_distance = move_distance * index + move_distance / 2, $wizard.find($(".progress-bar")).css({
				width: move_distance + "%"
			}), $.each($wizard.find($(".wizard-card .nav-pills li")), function() {
				$(this).data("index") > index ? $(this).find("a .icon-circle").removeClass("checked") : $(this).find("a .icon-circle").addClass("checked")
			}), $wizard.find($(".wizard-card .nav-pills li.active a .icon-circle")).addClass("checked"), confirmBtn.show();
			var paymentMessage = $(".hgs-query-payment-message");
			if(0 === index) confirmBtn.attr("id", "wizard-query-btn").html('SORGULA <img src="/v2/assets/images/buttons/right-arrow.png" />').attr("data-index", "0");
			else if(1 === index) confirmBtn.attr("id", "wizard-label-btn").html('Ä°LERÄ° <img src="/v2/assets/images/buttons/right-arrow.png" />').attr("data-index", "1");
			else if(2 === index) confirmBtn.attr("id", "wizard-amount-btn").html('Ä°LERÄ° <img src="/v2/assets/images/buttons/right-arrow.png" />').attr("data-index", "2");
			else if(3 === index) {
				confirmBtn.hide();
				var total = parseFloat($("#tbedel").attr("data-amount")).toFixed(2);
				paymentMessage.html('Ödeme işlemini onayladığınızda, <span class="text-warning">' + total + " TL</span> kartınızdan tahsis edilecektir.")
			}
			0 === index ? $(".btn-previous").hide() : $(".btn-previous").show()
		},
		onNext: function(tab, navigation, index) {
			var loading, container, currentIndex = index - 1,
				form = $(".wizard-card form[data-tab=" + currentIndex + "]");
			if(0 == currentIndex) {
				if(hgs.maintenance) return toastr.info("Åu anda sistemlerimizde bakım çalışması yapılmaktadır. LÃ¼tfen daha sonra tekrar deneyin."), !1;
				loading = $(".hgs-query-label-loading"), container = $(".hgs-query-label-container");
				var activeClass, amount, reqType, table = $(".hgs-query-label-table").DataTable(),
					tableElem = $(".hgs-query-label-table"),
					query = $(".hgs-query-no").val().replace(/[^a-zA-Z0-9]/g, ""),
					tc_warning = ($(".btn-fill.hgs-query-process-type").text(), ""),
					user_id = parseInt($("#get_user_id").val()),
					totalActiveCount = 0;
				$("#hgsQueryLabel input[name=selected_label]").val(""), $.each($(".hgs-query-process-type"), function() {
					$(this).hasClass("btn-fill") && (reqType = $(this).data("id"))
				}), tc_warning = 0 < user_id ? "pttavm.com'a Ã¼ye olurken girdiğiniz T.C. Kimlik No yada Pasaport No ile sorguladığınız HGS Ã¼rÃ¼nÃ¼nÃ¼n bağlı olduğu T.C. Kimlik No / Pasaport No uyuşmamaktadır." : "Bakiye gÃ¶rÃ¼ntÃ¼leyebilmek için sorguladığınız Ã¼rÃ¼n ile ilişkili T.C. Kimlik No yada Pasaport No'ya sahip hesabınızla giriş yapmalısınız.", form.valid() && (loading.show(), $("body").css({
					"pointer-events": "none"
				}), container.hide(), $.ajax({
					url: "/hgs/hgs/lookup/" + query + "/" + reqType + "/" + user_id,
					dataType: "json",
					headers: {
						"X-Epa-Request-Id": "web.v2." + Math.floor(Date.now() / 1e3),
						"X-Epa-Service": "epttavm",
						"X-Epa-Timestamp": TIMESTAMP,
						"X-Epa-Hash": HASH
					},
					success: function(data) {
						if(200 == data.code) {
							if(table.rows().remove().draw(), $.each(data.products, function(k, v) {
									"Aktif" === v.productStatus ? (activeClass = "", totalActiveCount += 1) : activeClass = "disabled-item", amount = "xx" === v.saleAmount ? '<i class="ti-alert hgs-query-amount-info" data-toggle="tooltip" data-placement="top" title="' + tc_warning + '"></i>' : v.saleAmount + " TL", "Aktif" === v.productStatus && table.row.add(['<div class="hgs-query-ticket-checkbox" data-id="' + v.productNo + '" data-class="' + activeClass + '"></div>', hgs.maskPlateNo(v.productNo), v.plateNumber, v.vehicleClass ? v.vehicleClass + ". Sınıf" : "-", amount])
								}), totalActiveCount < 1) return $("ul.nav-pills li[data-index=0]").find("a").trigger("click"), toastr.error("Sorguladığınız bilgilere ait PTT'den alınmış aktif bir Ã¼rÃ¼n bulunmamaktadır."), !1;
							app.responsiveDatatable("jq-responsive-dataTable", function() {
								$.each(tableElem.find("tbody").find("tr"), function() {
									if(!$(this).hasClass("disabled-item")) return $(this).trigger("click"), !1
								})
							}), $.each($(".hgs-query-ticket-checkbox"), function() {
								$(this).parents("tr").attr("data-id", $(this).data("id")), $(this).parents("tr").attr("class", $(this).data("class"))
							}), container.show(), $('[data-toggle="tooltip"]').tooltip()
						} else 700 == data.code && ($("ul.nav-pills li[data-index=0]").find("a").trigger("click"), toastr.error(data.products))
					},
					error: function() {
						$("ul.nav-pills li[data-index=0]").find("a").trigger("click"), toastr.error("Etiket listesi alınamadı.")
					},
					complete: function() {
						loading.hide(), $("body").css({
							"pointer-events": "all"
						})
					}
				}))
			} else if(1 == currentIndex) {
				loading = $(".hgs-select-amount-loading"), container = $(".hgs-payment-type-select");
				var amountsContainer = $(".hgs-show-field-after-payment-type-select");
				if(form.valid()) {
					loading.show(), $("body").css({
						"pointer-events": "none"
					}), container.hide();
					var li = "",
						ul = $(".hgs-payment-type-select > ul");
					amountsContainer.hide(), $("#hgsyukleme, #hizmetbedeli, #tbedel").html("0 TL"), $("#hgsQueryAmount input[name=selected_label]").val(""), $.ajax({
						type: "GET",
						url: "/hgs/hgs/product/get-payment-types",
						dataType: "json",
						headers: {
							"X-Epa-Request-Id": "web.v2." + Math.floor(Date.now() / 1e3),
							"X-Epa-Service": "epttavm",
							"X-Epa-Timestamp": TIMESTAMP,
							"X-Epa-Hash": HASH
						},
						success: function(response) {
							return response.success ? response.data.payment_types.length < 1 ? (toastr.error("Åu anda işleminize devam edilemiyor. LÃ¼tfen daha sonra tekrar deneyin."), $("ul.nav-pills li[data-index=1]").find("a").trigger("click"), !1) : ($.each(response.data.payment_types, function(k, v) {
								li += "<li onclick=\"hgs.paymentTypeSelect('" + v + '\')" data-type="' + v + '">', li += "credit_card" === v ? '<i class="ti-credit-card"></i> KREDÄ° KARTI' : "bank_transfer" === v ? '<i class="ti-exchange-vertical"></i> HAVALE/EFT' : v, li += "</li>"
							}), ul.html(li), 1 === ul.find("li").length && ul.find("li").trigger("click"), void container.show()) : (response.err_msg ? toastr.error(response.err_msg) : toastr.error("Ä°şlem tamamlandı, lÃ¼tfen tekrar deneyin."), $("ul.nav-pills li[data-index=1]").find("a").trigger("click"), !1)
						},
						error: function() {
							$("ul.nav-pills li[data-index=1]").find("a").trigger("click"), toastr.error("Ä°şlem tamamlanamadı, lÃ¼tfen tekrar deneyin.")
						},
						complete: function() {
							loading.hide(), $("body").css({
								"pointer-events": "all"
							})
						}
					})
				} else toastr.error("Etiket seçmeniz gerekmektedir!")
			} else if(2 == currentIndex) {
				var creditCardContainer = $(".hgs-query-credit-card-container"),
					bankTransferContainer = $(".hgs-query-bank-transfer-container"),
					notSelectedContainer = $(".hgs-query-not-selected-container");
				if(form.valid()) "credit_card" === hgs.paymentType ? (bankTransferContainer.hide(), notSelectedContainer.hide(), creditCardContainer.show()) : "bank_transfer" === hgs.paymentType ? (creditCardContainer.hide(), notSelectedContainer.hide(), bankTransferContainer.show()) : (creditCardContainer.hide(), bankTransferContainer.hide(), notSelectedContainer.show());
				else {
					var validPaymentType = !1;
					$.each($(".hgs-payment-type-select ul li"), function() {
						$(this).hasClass("selected") && (validPaymentType = !0)
					}), validPaymentType ? toastr.error("YÃ¼kleme miktarı seçmeniz gerekmektedir!") : toastr.error("Ödeme tipi seçmeniz gerekmektedir!")
				}
			}
			return form.valid()
		},
		paymentType: "",
		banks: [],
		products: [],
		setBankID: function(that) {
			var bankID = $("#bank-transfer-form #bank_id");
			that.val() ? bankID.val(that.val()) : bankID.val(""), app.clearToastr()
		},
		paymentTypeSelect: function(type) {
			var loading = $(".hgs-select-amount-loading"),
				amountsContainer = $(".hgs-show-field-after-payment-type-select"),
				userID = $("#get_user_id").val(),
				productsContainer = $(".hgs-query-amounts-label-container"),
				productHtml = "",
				hgsBankTransferList = $(".hgs-bank-transfer-list"),
				paymentTypeSelectWarning = $(".hgs-payment-type-select-warnings");
			$(".hgs-payment-type-select > ul li[data-type=" + type + "]").hasClass("selected") || (amountsContainer.hide(), $("#hgsyukleme, #hizmetbedeli, #tbedel").html("0 TL"), $("#hgsQueryAmount input[name=selected_label]").val(""), loading.addClass("hgs-selected-type-loading"), loading.show(), $.each($(".hgs-payment-type-select > ul li"), function() {
				$(this).removeClass("selected")
			}), $(".hgs-payment-type-select > ul li[data-type=" + type + "]").addClass("selected"), $.ajax({
				type: "get",
				data: {
					type: type,
					user_id: userID
				},
				url: "/hgs/hgs/product/calculate-commission",
				dataType: "json",
				headers: {
					"X-Epa-Request-Id": "web.v2." + Math.floor(Date.now() / 1e3),
					"X-Epa-Service": "epttavm",
					"X-Epa-Timestamp": TIMESTAMP,
					"X-Epa-Hash": HASH
				},
				success: function(response) {
					return response.success ? ("bank_transfer" === (hgs.paymentType = type) ? (hgs.banks = response.data.banks, hgs.products = response.data.products, paymentTypeSelectWarning.show()) : (hgs.banks = [], hgs.products = response.data, paymentTypeSelectWarning.hide()), hgs.products.length < 1 ? (toastr.error("Åuanda işleme devam edilemiyor, lÃ¼tfen daha sonra tekrar deneyin."), amountsContainer.hide(), $.each($(".hgs-payment-type-select > ul li"), function() {
						$(this).removeClass("selected")
					}), hgs.paymentType = "", !1) : (hgsBankTransferList.html('<option value="">Seçiniz</option>'), 0 < hgs.banks.length && $.each(hgs.banks, function(k, v) {
						hgsBankTransferList.append('<option value="' + v.id + '">' + v.name + " - " + v.iban + "</option>")
					}), $.each(hgs.products, function(k, v) {
						productHtml += '<div class="hgs-query-amounts-label" onclick="hgs.amountsLabel($(this));" data-commission="' + v.commission + '" data-price="' + v.price + '">', productHtml += '<div class="choice" data-toggle="wizard-checkbox"><input type="checkbox" name="" />', productHtml += '<div class="card card-checkboxes" onclick="hgs.cardCheckboxes($(this));" data-id="' + v.id + '"><span>' + v.price + " TL</span></div>", productHtml += "</div></div>"
					}), productsContainer.html(productHtml), void amountsContainer.show())) : (response.err_msg ? toastr.error(response.err_msg) : toastr.error("Åu anda işleminize devam edilemiyor. LÃ¼tfen daha sonra tekrar deneyin."), amountsContainer.hide(), $.each($(".hgs-payment-type-select > ul li"), function() {
						$(this).removeClass("selected")
					}), hgs.paymentType = "", !1)
				},
				error: function() {
					amountsContainer.hide(), $.each($(".hgs-payment-type-select > ul li"), function() {
						$(this).removeClass("selected")
					}), hgs.paymentType = ""
				},
				complete: function() {
					loading.hide(), loading.removeClass("hgs-selected-type-loading")
				}
			}))
		},
		startBankTransfer: function() {
			var form = $("#bank-transfer-form"),
				postPaymentData = $(".post_payment_data"),
				hgsid = postPaymentData.data("hgsid"),
				price = postPaymentData.data("price"),
				commission = postPaymentData.data("commission"),
				captchaWhiteList = $.parseJSON($("#hgs-captcha-white-list").val()),
				userIp = $("#get-ip-via").val(),
				isRequiredCaptcha = !captchaWhiteList.includes(userIp);
			hgs.recaptchaKey = grecaptcha.getResponse(window.hgsRecaptcha);
			var captchaMsg = $(".recaptcha-callback-not-valid-msg");
			"" !== hgs.recaptchaKey && captchaMsg.hide();
			var contract = $("#bank-transfer-contract"),
				contractValid = !0;
			0 < contract.length && (contract.prop("checked") ? contract.parents(".panel-contract-container").find(".contract-not-checked-msg").hide() : contract.parents(".panel-contract-container").find(".contract-not-checked-msg").show(), contractValid = contract.prop("checked")), form.valid() && contractValid && ("" !== hgs.recaptchaKey && isRequiredCaptcha || !isRequiredCaptcha) ? ($("body").css({
				"pointer-events": "none"
			}), toastr.options = {
				closeButton: !1,
				showDuration: 0,
				hideDuration: 0,
				timeOut: 0,
				tapToDismiss: !1,
				progressBar: !1,
				newestOnTop: !0,
				closeOnHover: !0
			}, $.ajax({
				url: "/hgs/hgs/payment_confirm/" + $(".hgs-query-token").val() + "/" + hgsid + "/" + price + "/" + commission + "/bank_transfer",
				type: "GET",
				dataType: "json",
				data: {
					"g-recaptcha-response": hgs.recaptchaKey
				},
				success: function(resp) {
					$(".toast").remove(), resp.success ? toastr.warning('<p class="toast-message-content">' + resp.data.confirm + '</p><div class="button-group"><button type="button" class="btn btn-danger" onclick="app.clearToastr();">Ä°PTAL <img src="/v2/assets/images/form-invalid.png" /></button><button type="button" class="btn btn-success" onclick="hgs.bankTransferConfirm($(this));">ONAY <img src="/v2/assets/images/form-valid.png" /></button></div>') : toastr.error(resp.err_msg)
				},
				error: function() {
					toastr.error("Sistemde geçici bir sorun oluştu. LÃ¼tfen tekrar deneyin.")
				},
				complete: function() {
					$("body").css({
						"pointer-events": "all"
					}), setTimeout(function() {
						toastr.options = {
							closeButton: !0,
							showDuration: 0,
							hideDuration: 0,
							timeOut: 4e3,
							tapToDismiss: !1,
							progressBar: !0,
							closeOnHover: !0
						}
					}, 500), grecaptcha.reset(window.hgsRecaptcha)
				}
			})) : !hgs.recaptchaKey && isRequiredCaptcha && captchaMsg.show()
		},
		bankTransferConfirm: function(that) {
			var form = $("#bank-transfer-form"),
				requestID = "hgs-web-" + (new Date).getTime().toString();
			$("body").css({
				"pointer-events": "none"
			}), $(".toast-message-content").css({
				"pointer-events": "none"
			}), that.attr("disabled", "disabled"), $("#bank-transfer-api-request-id").remove(), $("<input>").attr({
				type: "hidden",
				id: "bank-transfer-api-request-id",
				name: "api[request_id]",
				value: requestID
			}).prependTo(form), form.submit()
		},
		removeAllSpaces: function(input) {
			input.val(input.val().replace(/ /g, ""))
		}
	},
	km = {
		recaptchaKey: "",
		maintenance: 1 === parseInt($("#maintenance_km").val()),
		documentReady: function() {
			$(".km-query-form").validate({
				rules: {
					kmQueryNo: "required",
					kmQueryEmail: {
						required: !1,
						email: !0
					},
					invoiceNo: {
						tcOrTax: !0
					}
				},
				messages: {
					kmQueryNo: "Bu alan boş bırakılamaz.",
					kmQueryEmail: {
						email: "Geçerli bir e-posta adresi giriniz."
					},
					invoiceNo: "Girdiğiniz değer geçerli değil."
				}
			}), $("#km-query-no, #km-query-email").keypress(function(e) {
				13 == e.keyCode && ($("#wizard-query-btn").trigger("click"), e.preventDefault())
			})
		},
		setProcessType: function(that) {
			var thisID = parseInt(that.data("id")),
				placeholder = "";
			$(".km-query-process-type").removeClass("btn-fill"), that.addClass("btn-fill"), 0 === thisID ? placeholder = "Plaka Numarası" : 1 === thisID && (placeholder = "Saşi Numarası"), $("#km-query-no").attr("placeholder", placeholder)
		},
		setInvoiceType: function(that) {
			var thisID = parseInt(that.data("id")),
				placeholder = "";
			$(".invoice-type").removeClass("btn-fill"), that.addClass("btn-fill"), 0 === thisID ? placeholder = "T.C. Kimlik No" : 1 === thisID && (placeholder = "Vergi No"), $("#invoice-no").attr("placeholder", placeholder)
		},
		paymentConfirm: function() {
			app.clearToastr();
			var form = $("#kmMuayeneForm");
			void 0 !== kmMuayeneIframeLoadedCount && (kmMuayeneIframeLoadedCount = 0), $(".km-ready-to-payment").val(1), $(".nav.nav-pills li[data-index=2] a").trigger("click"), $("#wizard-label-btn").trigger("click");
			var cardNumber = form.find("input[name=showNumber]").val().replace(/[^a-zA-Z0-9]/g, ""),
				cardExpiry = form.find("input[name=showExpiry]").val().replace("/ ", "/ 20"),
				cardHolder = form.find("input[name=holder]").val(),
				cardCcv = form.find("input[name=cvc]").val();
			form.find("input[name=card_number]").val(cardNumber), form.find("input[name=card_expiry]").val(cardExpiry), form.find("input[name=card_holder]").val(cardHolder), form.find("input[name=card_ccv]").val(cardCcv), form.find("input[name=g-recaptcha-response]").val(km.recaptchaKey), form.find("input[name=invoice_type]").length && form.find("input[name=invoice]").length && (form.find("input[name=invoice_type]").val($(".invoice-type.btn-fill").data("value").trim()), form.find("input[name=invoice]").val($("#invoice-no").val().trim())), form.submit(), grecaptcha.reset(window.kmRecaptcha), $("#kmMuayeneIframe").attr("onload", "km.iframeLoaded()").hide(), $(".km-query-loading-message").show(), $("body").css({
				"pointer-events": "none"
			}), $(".hgs-km-sorgulama-result-success, .hgs-km-sorgulama-result-fail, .km-query-result-container").hide()
		},
		paymentListener: function(msg) {
			try {
				var json = JSON.parse(msg.data);
				json.app && "HGS.KmMuayene" == json.app && (json.success ? km.paymentResultSuccess(json.data) : km.paymentResultFail(json.data))
			} catch(e) {}
		},
		paymentResult: function() {
			$("#kmMuayeneIframe").removeAttr("onload").hide(), $(".km-query-loading-message").hide(), $("body").css({
				"pointer-events": "all"
			})
		},
		paymentResultFail: function(message) {
			km.paymentResult(), $(".hgs-km-sorgulama-result-success").hide(), $(".hgs-km-sorgulama-result-fail").html('<span class="text-danger">' + message + "</span>"), $(".hgs-km-sorgulama-result-fail").show(), $(".km-query-result-container").show()
		},
		paymentResultSuccess: function(data) {
			var block;
			km.paymentResult();
			var blockContainer = $(".hgs-km-sorgulama-result-success");
			$(".hgs-km-sorgulama-result-fail").hide(), void 0 !== data.download_url && data.download_url && $(".km-query-download-btn").attr("href", data.download_url).show(), blockContainer.empty().append('<h4>Sorgulamanız başarı ile sonuçlanmıştır.</h4><span style="float: left; width: 100%; margin-top: 7px; font-size: 13px; font-weight: 300;">Sorguladığınız araca ait sonuçlar aşağıdadır.</span><div class="text-center"><img src="/v2/assets/images/panel/eye-icon.png" style="margin-top: 10px; height: 14px; margin-bottom:10px;" /></div><div class="hgs-km-sorgulama-result-success-field"></div>'), $.each(data.items, function(k, v) {
				$(".hgs-km-sorgulama-result-success-field").append('<div class="hgs-km-sorgulama-result-list list-' + k + '"></div>'), block = $(".list-" + k), 0 !== k && block.append('<div class="km-result-table-divider"></div>'), block.append('<table class="table panel-result-table km-query-result-table"><thead><tr><th>ARAÃ‡ TÄ°PÄ°</th><th>SÄ°STEM TARÄ°HÄ°</th><th>PLAKA</th><th>KÄ°LOMETRE</th></tr></thead><tbody><tr><td>' + v.arac_tipi + "</td><td>" + v.sistem_tarihi + "</td><td>" + v.plaka + "</td><td>" + v.km + "</td></tr></tbody>"), block.append('<table class="table no-margin panel-result-table km-query-result-table"><thead><tr><th>ÅASÄ° BELGE NO</th><th>MOTOR NO</th><th>MODEL</th><th>RENK</th></tr></thead><tbody><tr><td>' + v.sasi_belge_no + "</td><td>" + v.motor_no + "</td><td>" + v.model + "</td><td>" + v.renk + "</td></tr></tbody>")
			}), blockContainer.show(), $(".km-query-result-container").show(), "development" !== $("#app_env").val() && km.sendGaData(data.id, 6)
		},
		sendGaData: function(id, total) {
			gtag("event", "conversion", {
				send_to: "AW-852040690/1O1ACLWxtJMBEPK3pJYD",
				value: total,
				currency: "TRY",
				transaction_id: id
			})
		},
		iframeLoaded: function() {
			$(".km-query-loading-message").hide(), $("#kmMuayeneIframe").show(), $("body").css({
				"pointer-events": "all"
			})
		},
		payment: function() {
			km.recaptchaKey = grecaptcha.getResponse(window.kmRecaptcha);
			var captchaMsg = $(".recaptcha-callback-not-valid-msg");
			"" !== km.recaptchaKey && captchaMsg.hide(), "" !== km.recaptchaKey ? $(".nav.nav-pills li[data-index=2] a").trigger("click") : km.recaptchaKey || captchaMsg.show()
		},
		onTabShow: function(tab, navigation, index) {
			var $total = navigation.find("li").length,
				confirmBtn = $(".wizard-confirm-btn"),
				$wizard = navigation.closest(".wizard-card"),
				move_distance = 100 / $total;
			move_distance = move_distance * index + move_distance / 2, $wizard.find($(".progress-bar")).css({
				width: move_distance + "%"
			}), $.each($wizard.find($(".wizard-card .nav-pills li")), function() {
				$(this).data("index") > index ? $(this).find("a .icon-circle").removeClass("checked") : $(this).find("a .icon-circle").addClass("checked")
			}), $wizard.find($(".wizard-card .nav-pills li.active a .icon-circle")).addClass("checked"), confirmBtn.show(), $(".km-query-download-btn").hide(), 0 === index ? confirmBtn.attr("id", "wizard-query-btn").attr("data-index", "0") : 1 === index ? confirmBtn.hide() : 2 === index ? ($(".km-ready-to-payment").val(0), confirmBtn.hide()) : 3 === index && confirmBtn.hide(), 0 === index ? $(".btn-previous").hide() : $(".btn-previous").show(), 1 !== index && $("input[name=km-payment-confirm]").val("0")
		},
		onNext: function(tab, navigation, index) {
			var currentIndex = index - 1,
				form = $(".wizard-card form[data-tab=" + currentIndex + "]"),
				processType = $(".km-query-process-type.btn-fill").data("value"),
				value = $("#km-query-no").val();
			if(0 == currentIndex) {
				if(km.maintenance) return toastr.info("Åu anda sistemlerimizde bakım çalışması yapılmaktadır. LÃ¼tfen daha sonra tekrar deneyin."), !1;
				if("chassis" === processType && 17 !== value.length) return toastr.error("Åasi No 17 karakterden oluşmalıdır."), !1;
				var kmPaymentForm = $("#kmMuayeneForm");
				kmPaymentForm.find("input[name=query_text]").val($("input[name=kmQueryNo]").val()), kmPaymentForm.find("input[name=query_type]").val(processType), kmPaymentForm.find("input[name=email]").val($("#km-query-email").val())
			} else if(1 == currentIndex) {
				var contract = $("#hgs-contract"),
					contractValid = !0;
				if(0 < contract.length && (contract.prop("checked") ? contract.parents(".panel-contract-container").find(".contract-not-checked-msg").hide() : contract.parents(".panel-contract-container").find(".contract-not-checked-msg").show(), contractValid = contract.prop("checked")), form.valid() && contractValid) {
					var cardNumber = form.find("input[name=showNumber]").val();
					return app.creditCardValidation(cardNumber.replace(/[^a-zA-Z0-9]/g, "")) ? (1 !== parseInt($(".km-ready-to-payment").val()) && (toastr.options = {
						closeButton: !1,
						showDuration: 0,
						hideDuration: 0,
						timeOut: 0,
						tapToDismiss: !1,
						progressBar: !1,
						newestOnTop: !0,
						closeOnHover: !0
					}, toastr.warning('<p class="toast-message-content"><b>' + cardNumber + '</b> numaralı kartınız ile <b style="text-transform: uppercase;">' + $("#km-query-no").val() + "</b> " + $(".km-query-process-type.btn-fill").html().toLowerCase() + 'lu aracınız için KM sorgulama işlemini onaylıyor musunuz? Bu hizmetin bedeli 6 TL\'dir.</p><div class="button-group"><button type="button" class="btn btn-danger" onclick="app.clearToastr();">Ä°PTAL <img src="/v2/assets/images/form-invalid.png" /></button><button type="button" class="btn btn-success" onclick="km.paymentConfirm();">ONAY <img src="/v2/assets/images/form-valid.png" /></button></div>'), setTimeout(function() {
						toastr.options = {
							closeButton: !0,
							showDuration: 0,
							hideDuration: 0,
							timeOut: 4e3,
							tapToDismiss: !1,
							progressBar: !0,
							closeOnHover: !0
						}
					}, 500)), 1 === parseInt($(".km-ready-to-payment").val())) : (toastr.error("Kredi kartı numarası geçersiz."), !1)
				}
			}
			return form.valid() && contractValid
		}
	};
window.addEventListener ? window.addEventListener("message", km.paymentListener, !1) : window.attachEvent("onmessage", km.paymentListener);
var damage = {
	recaptchaKey: "",
	recaptchaKeyPart: "",
	damagePrice: parseFloat($("#damage-price").val()).toFixed(2),
	changingPartsPrice: parseFloat($("#changing-parts-price").val()).toFixed(2),
	last_parts_change_order: "",
	maintenance: 1 === parseInt($("#maintenance_hasar").val()),
	documentReady: function() {
		$(".damage-query-form").validate({
			rules: {
				query: "required",
				email: {
					required: !0,
					email: !0
				},
				name_surname: {
					required: !0,
					withoutNumbers: !0,
					nameSurname: !0
				},
				tc_no: {
					required: !0,
					tckimlik: !0,
					minlength: 11,
					maxlength: 11
				},
				firm_name: "required",
				tax_no: {
					required: !0,
					number: !0
				},
				tax_office: "required",
				invoiceNo: {
					tcOrTax: !0
				}
			},
			messages: {
				query: "Bu alan boş bırakılamaz",
				email: {
					required: "E-posta adresi boş bırakılamaz.",
					email: "Geçerli bir email adresi giriniz."
				},
				name_surname: {
					required: "Ad-soyad girin.",
					withoutNumbers: "Geçersiz ad-soyad!",
					nameSurname: "Geçersiz ad-soyad!"
				},
				tc_no: {
					required: "T.C. Kimlik no boş bırakılamaz.",
					tckimlik: "Geçerli bir T.C. Kimlik no giriniz.",
					minlength: "Eksik T.C. Kimlik no girdiniz.",
					maxlength: "Fazla T.C. Kimlik no girdiniz."
				},
				firm_name: "Firma adı boş bırakılamaz.",
				tax_no: {
					required: "Vergi numarası boş bırakılamaz.",
					number: "Geçerli bir vergi numarası giriniz."
				},
				tax_office: "Vergi dairesi boş bırakılamaz.",
				invoiceNo: "Girdiğiniz değer geçerli değil."
			}
		}), $("#damage-query-no, #damage-query-email").keypress(function(e) {
			13 == e.keyCode && ($("#wizard-query-btn").trigger("click"), e.preventDefault())
		})
	},
	setProcessType: function(that) {
		var thisID = that.data("id"),
			placeholder = "";
		$(".damage-query-process-type").removeClass("btn-fill"), that.addClass("btn-fill"), 0 == thisID ? placeholder = "Plaka Numarası" : 1 == thisID && (placeholder = "Saşi Numarası"), $("#damage-query-no").attr("placeholder", placeholder)
	},
	setInvoiceType: function(that) {
		var thisID = parseInt(that.data("id")),
			placeholder = "";
		$(".invoice-type").removeClass("btn-fill"), that.addClass("btn-fill"), 0 === thisID ? placeholder = "T.C. Kimlik No" : 1 === thisID && (placeholder = "Vergi No"), $("#invoice-no").attr("placeholder", placeholder)
	},
	setQueryType: function(that) {
		$(".damage-query-type").removeClass("btn-fill"), that.addClass("btn-fill"), $("#damageQueryPageTitle").html(that.html())
	},
	payment: function() {
		damage.recaptchaKey = grecaptcha.getResponse(window.damageRecaptcha);
		var captchaMsg = $(".recaptcha-callback-not-valid-msg");
		"" !== damage.recaptchaKey && captchaMsg.hide(), console.log(damage.recaptchaKey), "" !== damage.recaptchaKey ? $(".nav.nav-pills li[data-index=2] a").trigger("click") : damage.recaptchaKey || captchaMsg.show()
	},
	paymentConfirm: function() {
		var form = $("#damageForm");
		app.clearToastr(), $(".damage-ready-to-payment").val(1), $(".nav.nav-pills li[data-index=2] a").trigger("click");
		var cardNumber = form.find("input[name=showNumber]").val().replace(/[^a-zA-Z0-9]/g, ""),
			cardExpiry = form.find("input[name=showExpiry]").val(),
			cardHolder = form.find("input[name=holder]").val(),
			cardCcv = form.find("input[name=cvc]").val();
		form.find("input[name=card_number]").val(cardNumber), form.find("input[name=card_expiry]").val(cardExpiry), form.find("input[name=card_holder]").val(cardHolder), form.find("input[name=card_ccv]").val(cardCcv), form.find("input[name=g-recaptcha-response]").val(damage.recaptchaKey), form.find(".crash_data_id").remove(), damage.paymentForm()
	},
	paymentForm: function() {
		var paymentModalFrame = $("#damageIframe");
		$("input[name=damage-payment-confirm]").val("1");
		var form = $("#damageForm");
		$.each(form.find("input"), function() {
			"query" === $(this).attr("name") ? $(this).val($(this).val().replace(/\s/g, "")) : $(this).val($(this).val().trim())
		}), form.find("input[name=invoice_type]").length && form.find("input[name=invoice]").length && (form.find("input[name=invoice_type]").val($(".invoice-type.btn-fill").data("value").trim()), form.find("input[name=invoice]").val($("#invoice-no").val().trim())), form.submit(), grecaptcha.reset(window.damageRecaptcha), grecaptcha.reset(window.damageRecaptchaPart), paymentModalFrame.attr("onload", "damage.iframeLoaded()").hide(), $(".damage-sorgulama-loading").show(), $("body").css({
			"pointer-events": "none"
		}), $(".hgs-damage-sorgulama-result-success, .hgs-damage-sorgulama-result-fail, .changing-part-container").hide()
	},
	paymentListener: function(msg) {
		try {
			var json = JSON.parse(msg.data);
			console.log("json", json), console.log("json stringify", JSON.stringify(json)), json.app && "PTT.Tramer" === json.app && (console.log("Hasar Sorgulama - Debug Response", json, JSON.stringify(json)), json.success ? damage.paymentResultSuccess(json.data) : damage.paymentResultFail(json.message))
		} catch(e) {}
	},
	paymentResult: function() {
		$("#damageIframe").removeAttr("onload").hide(), $(".damage-sorgulama-loading").hide(), $("body").css({
			"pointer-events": "all"
		})
	},
	paymentResultFail: function(message) {
		var msg;
		console.log("Debug Fail", message), msg = void 0 !== message && null != message && void 0 !== message && message ? message : "Bir sorun oluştu. LÃ¼tfen tekrar deneyiniz.", damage.paymentResult();
		var failContainer = $(".hgs-damage-sorgulama-result-fail");
		$(".hgs-damage-sorgulama-result-success").hide(), failContainer.html("<h4> " + $(".damage-query-type.btn-fill").html() + ' SONUCU</h4><div class="hgs-damage-query-result-error-field"><span class="heavy-record heavy-record-danger">' + msg + "</span></div>"), failContainer.show()
	},
	paymentResultSuccess: function(data) {
		console.log("Debug Success", data), damage.paymentResult();
		var form = $("#damageForm"),
			blockContainer = $(".hgs-damage-sorgulama-result-success");
		$(".hgs-damage-sorgulama-result-fail").hide();
		var damageQueryType = form.find("input[name=query_type]").val();
		"damage" === damageQueryType || "detailed" === damageQueryType ? (blockContainer.empty().append("<h4> " + $(".damage-query-type.btn-fill").html() + " SONUCU</h4>"), blockContainer.append('<div class="hgs-damage-query-result-success-field"></div>')) : "partsChange" === damageQueryType && (0 < $(".parts-change-remove-field").length && $(".parts-change-remove-field").remove(), blockContainer.append('<div class="parts-change-hr parts-change-remove-field"></div><h4 class="parts-change-remove-field" style="margin-top: 30px">' + damage.last_parts_change_order + " SIRA NO'LU HASAR DEÄÄ°ÅEN PARÃ‡A SORGULAMA SONUCU</h4>"), blockContainer.append('<div class="hgs-damage-query-result-success-field hgs-damage-query-result-success-field-for-parts-change parts-change-remove-field"></div>'));
		var changingPartContainer = $(".changing-part-container"),
			changingPartSelect = $(".changing-part-select"),
			option = "";
		if("damage" === damageQueryType) changingPartContainer.hide(), 0 < parseInt(data.DamageCount) || data.Image && null !== data.Image ? void 0 !== data.Image ? ($(".hgs-damage-query-result-success-field").append('<span class="heavy-record"></span><div class="damage-result-image-container"><img class="img-responsive" src="' + data.Image + '"></div>'), data.HasHeavyDamage ? $(".heavy-record").removeClass("heavy-record-success").addClass("heavy-record-danger").html("Aracın ağır hasar kaydı bulunmaktadır.") : $(".heavy-record").removeClass("heavy-record-danger").addClass("heavy-record-success").html("Aracın ağır hasar kaydı bulunmamaktadır."), void 0 !== data.Message && data.Message ? $(".hgs-damage-query-result-success-field").append('<div class="alert alert-warning no-margin">' + data.Message + "</div>") : data.DamageCount < 1 && $(".hgs-damage-query-result-success-field").append('<div class="alert alert-warning no-margin">Kayıtlarımızda araca ait hasar bulunamamıştır.</div>'), void 0 !== data.DamageDateKeys && data.DamageDateKeys && (data.DamageDateKeys = data.DamageDateKeys.filter(function(x) {
			return x.Value && x.OrderId && x.OrderId.toString() !== damage.last_parts_change_order.toString()
		}), 0 < data.DamageDateKeys.length && (option = '<option value="">HASAR SIRA NO SEÃ‡Ä°NÄ°Z</option>', $.each(data.DamageDateKeys, function(k, v) {
			option += '<option value="' + v.Value + '">' + v.OrderId + " NO'LU HASAR</option>"
		}), changingPartSelect.html(option), changingPartSelect.val(""), changingPartContainer.show()))) : $(".hgs-damage-query-result-success-field").append((data.Message, data.Message)) : void 0 !== data.Message && data.Message ? $(".hgs-damage-query-result-success-field").append('<div class="alert alert-warning no-margin">' + data.Message + "</div>") : $(".hgs-damage-query-result-success-field").append('<div class="alert alert-warning no-margin">Aracın hasar kaydı bulunmamaktadır.</div>');
		else if("detailed" === damageQueryType) changingPartContainer.hide(), void 0 !== data.Image && data.Image && $(".hgs-damage-query-result-success-field").append('<span class="heavy-record"></span><div class="damage-result-image-container"><img class="img-responsive" src="' + data.Image + '"></div>'), void 0 !== data.Message && data.Message && $(".hgs-damage-query-result-success-field").append('<div class="alert alert-warning no-margin">' + data.Message + "</div>"), void 0 !== data.Image && data.Image || void 0 !== data.Message && data.Message || $(".hgs-damage-query-result-success-field").append('<span class="alert alert-warning no-margin">Araç detay sorgulama sonucu bulunamadı.</span>');
		else if("partsChange" === damageQueryType) {
			changingPartContainer.show();
			var resultSuccessForPartsChange = $(".hgs-damage-query-result-success-field-for-parts-change");
			void 0 !== data.Image && data.Image && resultSuccessForPartsChange.append('<span class="heavy-record"></span><div class="damage-result-image-container"><img class="img-responsive" src="' + data.Image + '"></div>'), void 0 !== data.Message && data.Message && resultSuccessForPartsChange.append('<div class="alert alert-warning no-margin">' + data.Message + "</div>"), void 0 !== data.Image && data.Image || void 0 !== data.Message && data.Message || resultSuccessForPartsChange.append('<span class="alert alert-warning no-margin">Değişen parça sorgulama sonucu bulunamadı.</span>')
		}
		blockContainer.show(), "development" !== $("#app_env").val() && damage.sendGaData(data.TransactionId, damage.damagePrice, damageQueryType)
	},
	sendGaData: function(id, total, type) {
		"damage" === type || "detailed" === type ? gtag("event", "conversion", {
			send_to: "AW-852040690/Ky-uCMq33KABEPK3pJYD",
			value: total,
			currency: "TRY",
			transaction_id: id
		}) : gtag("event", "conversion", {
			send_to: "AW-852040690/goAcCNmb6KABEPK3pJYD",
			value: total,
			currency: "TRY",
			transaction_id: id
		})
	},
	changingPart: function() {
		if($(".changing-part-container").find(".changing-part-select").val()) {
			damage.recaptchaKeyPart = grecaptcha.getResponse(window.damageRecaptchaPart);
			var captchaMsg = $(".recaptcha-callback-not-valid-msg-part");
			"" !== damage.recaptchaKeyPart && captchaMsg.hide(), console.log(damage.recaptchaKeyPart), "" !== damage.recaptchaKeyPart ? ($("body").css({
				"pointer-events": "none"
			}), damage.changingPartQuery()) : damage.recaptchaKeyPart || captchaMsg.show()
		} else toastr.error("Hasar seçimi yapılmadı.")
	},
	changingPartQuery: function() {
		var cardNumber = $("#damageForm input[name=showNumber]").val();
		toastr.options = {
			closeButton: !1,
			showDuration: 0,
			hideDuration: 0,
			timeOut: 0,
			tapToDismiss: !1,
			progressBar: !1,
			newestOnTop: !0,
			closeOnHover: !0
		};
		var partsChangeOrder = $(".changing-part-select option:selected").html();
		damage.last_parts_change_order = partsChangeOrder, toastr.warning('<p class="toast-message-content"><b class="text-warning">' + cardNumber + '</b> numaralı kartınız ile gÃ¶rselde yer alan hasarlar arasından <b class="text-warning">' + partsChangeOrder + "</b> sıra no'lu hasarda değişen parçaları sorguluyorsunuz. Bu işlemin Ã¼creti " + damage.changingPartsPrice + ' TL\'dir. Devak etmek istiyor musunuz?</p><div class="button-group"><button type="button" class="btn btn-danger" onclick="app.clearToastr();">Ä°PTAL <img src="/v2/assets/images/form-invalid.png" /></button><button type="button" class="btn btn-success" onclick="damage.changingPartConfirm();">ONAY <img src="/v2/assets/images/form-valid.png" /></button></div>'), setTimeout(function() {
			toastr.options = {
				closeButton: !0,
				showDuration: 0,
				hideDuration: 0,
				timeOut: 4e3,
				tapToDismiss: !1,
				progressBar: !0,
				closeOnHover: !0
			}
		}, 500), $(".changing-part-btn").html("DEÄÄ°ÅEN PARÃ‡A SORGULA"), $("body").css({
			"pointer-events": "all"
		})
	},
	changingPartConfirm: function() {
		app.clearToastr();
		var form = $("#damageForm");
		form.find("input[name=query_type]").val("partsChange");
		var cardNumber = form.find("input[name=showNumber]").val().replace(/[^a-zA-Z0-9]/g, ""),
			cardExpiry = form.find("input[name=showExpiry]").val(),
			cardHolder = form.find("input[name=holder]").val(),
			cardCcv = form.find("input[name=cvc]").val();
		form.find("input[name=card_number]").val(cardNumber), form.find("input[name=card_expiry]").val(cardExpiry), form.find("input[name=card_holder]").val(cardHolder), form.find("input[name=card_ccv]").val(cardCcv), form.find("input[name=g-recaptcha-response]").val(damage.recaptchaKeyPart), form.find(".crash_data_id").remove(), $("<input>").attr({
			type: "hidden",
			class: "crash_data_id",
			name: "crashDateId",
			value: $(".changing-part-select").val()
		}).prependTo(form), damage.paymentForm()
	},
	iframeLoaded: function() {
		$(".damage-sorgulama-loading").hide(), $("#damageIframe").show(), $("body").css({
			"pointer-events": "all"
		})
	},
	onTabShow: function(tab, navigation, index) {
		var $total = navigation.find("li").length,
			confirmBtn = $(".wizard-confirm-btn"),
			$wizard = navigation.closest(".wizard-card"),
			move_distance = 100 / $total;
		move_distance = move_distance * index + move_distance / 2, $wizard.find($(".progress-bar")).css({
			width: move_distance + "%"
		}), $.each($wizard.find($(".wizard-card .nav-pills li")), function() {
			$(this).data("index") > index ? $(this).find("a .icon-circle").removeClass("checked") : $(this).find("a .icon-circle").addClass("checked")
		}), $wizard.find($(".wizard-card .nav-pills li.active a .icon-circle")).addClass("checked"), confirmBtn.show(), 0 === index ? confirmBtn.attr("id", "wizard-query-btn").attr("data-index", "0") : 1 === index ? confirmBtn.hide() : 2 === index ? ($(".damage-ready-to-payment").val(0), confirmBtn.hide()) : 3 === index && confirmBtn.hide(), 0 === index ? $(".btn-previous").hide() : $(".btn-previous").show(), 1 !== index && $("input[name=damage-payment-confirm]").val("0")
	},
	onNext: function(tab, navigation, index) {
		var currentIndex = index - 1,
			processType = $(".damage-query-process-type.btn-fill").data("value"),
			value = $("#damage-query-no").val(),
			form = $(".wizard-card form[data-tab=" + currentIndex + "]");
		if(0 == currentIndex) {
			if(damage.maintenance) return toastr.info("Åu anda sistemlerimizde bakım çalışması yapılmaktadır. LÃ¼tfen daha sonra tekrar deneyin."), !1;
			if("C" === processType && 17 !== value.length) return toastr.error("Åasi No 17 karakterden oluşmalıdır."), !1;
			var damagePaymentForm = $("#damageForm");
			damagePaymentForm.find("input[name=query]").val($(".damage-query-form input[name=query]").val()), damagePaymentForm.find("input[name=email]").val($(".damage-query-form input[name=email]").val()), damagePaymentForm.find("input[name=type]").val($(".damage-query-process-type.btn-fill").data("value")), damagePaymentForm.find("input[name=query_type]").val($(".damage-query-type.btn-fill").data("value")), damagePaymentForm.find("#nameSurname").attr("name", ""), damagePaymentForm.find("#tcNo").attr("name", ""), damagePaymentForm.find("#firmName").attr("name", ""), damagePaymentForm.find("#taxNo").attr("name", ""), damagePaymentForm.find("#taxOffice").attr("name", "")
		} else if(1 == currentIndex) {
			app.clearToastr(), form.find("input[name=query_type]").val($(".damage-query-type.btn-fill").attr("data-value"));
			var contract = $("#hgs-contract"),
				contractValid = !0;
			if(0 < contract.length && (contract.prop("checked") ? contract.parents(".panel-contract-container").find(".contract-not-checked-msg").hide() : contract.parents(".panel-contract-container").find(".contract-not-checked-msg").show(), contractValid = contract.prop("checked")), form.valid() && contractValid) {
				var cardNumber = form.find("input[name=showNumber]").val();
				return app.creditCardValidation(cardNumber.replace(/[^a-zA-Z0-9]/g, "")) ? (1 !== parseInt($(".damage-ready-to-payment").val()) && (toastr.options = {
					closeButton: !1,
					showDuration: 0,
					hideDuration: 0,
					timeOut: 0,
					tapToDismiss: !1,
					progressBar: !1,
					newestOnTop: !0,
					closeOnHover: !0
				}, toastr.warning('<p class="toast-message-content"><b>' + cardNumber + '</b> numaralı kartınız ile <b style="text-transform: uppercase;">' + $("#damage-query-no").val() + "</b> " + $(".btn-fill.damage-query-process-type").html().toLowerCase() + "lu aracınız için " + $(".damage-query-type.btn-fill").html().toLowerCase() + " işlemini onaylıyor musunuz? Bu hizmetin bedeli " + damage.damagePrice + ' TL\'dir.</p><div class="button-group"><button type="button" class="btn btn-danger" onclick="app.clearToastr();">Ä°PTAL <img src="/v2/assets/images/form-invalid.png" /></button><button type="button" class="btn btn-success" onclick="damage.paymentConfirm();">ONAY <img src="/v2/assets/images/form-valid.png" /></button></div>'), setTimeout(function() {
					toastr.options = {
						closeButton: !0,
						showDuration: 0,
						hideDuration: 0,
						timeOut: 4e3,
						tapToDismiss: !1,
						progressBar: !0,
						closeOnHover: !0
					}
				}, 500)), 1 === parseInt($(".damage-ready-to-payment").val())) : (toastr.error("Kredi kartı numarası geçersiz."), !1)
			}
		}
		return form.valid() && contractValid
	}
};
window.addEventListener ? window.addEventListener("message", damage.paymentListener, !1) : window.attachEvent("onmessage", damage.paymentListener);
var mtv = {
	recaptchaKey: "",
	maintenance: 1 === parseInt($("#maintenance_mtv").val()),
	documentReady: function() {
		$("#mtv-query-form").validate({
			rules: {
				plate_number: "required",
				year: "required",
				email: {
					email: !0,
					required: !1
				}
			},
			messages: {
				plate_number: "Plaka no girilmelidir.",
				year: "Vergi yılı seçilmedidir.",
				email: {
					email: "Geçersiz e-posta adresi girdiniz."
				}
			}
		}), $("#mtv-query-list-form").validate({
			ignore: ".ignore",
			rules: {
				list: "required"
			},
			messages: {
				list: ""
			}
		}), $(".mtv-plate-number").keypress(function(e) {
			13 == e.keyCode && ($("#wizard-query-btn").trigger("click"), e.preventDefault())
		}), $(".mtv-email-and-submit input[name=email]").change(function() {
			var email = $("#mtv-payment-form").find("input[name=email]");
			mtv.validEmail(email) ? email.parents(".form-group").removeClass("has-error") : email.parents(".form-group").addClass("has-error")
		})
	},
	selectAmount: function(btn) {
		var confirmInput = $(".mtv-confirm-input-value");
		btn.hasClass("selected") ? (btn.removeClass("selected"), btn.html('SEÃ‡ <img src="/v2/assets/images/tabs/payment.png" />')) : (btn.addClass("selected"), btn.html("SEÃ‡Ä°LÄ°"), btn.find(".mtv-tax-data-checkbox input").prop("checked", !0)), 0 < $(".select-mtv-amount-btn.selected").length ? confirmInput.val("1") : confirmInput.val(""), mtv.selectedFieldCalc()
	},
	selectedFieldCalc: function() {
		var extraTotal = 0,
			totalField = $(".mtv-selected-bill-extra-total-amount-field strong"),
			ids = [];
		$.each($(".select-mtv-amount-btn.selected"), function() {
			ids.push($(this).data("id")), extraTotal += parseFloat($(this).data("total"))
		}), extraTotal = parseFloat(extraTotal).toFixed(2), $(".mtv-ready-for-pay-amount strong").html(extraTotal + " TL");
		var paymentForm = $("#mtv-payment-form");
		$(".mtv-selected-bills-list-item-input").remove(), $(".mtv-query-id-input").remove(), $.each(ids, function(k, v) {
			$("<input>").attr({
				type: "hidden",
				class: "mtv-selected-bills-list-item-input",
				name: "ids[]",
				value: v
			}).prependTo(paymentForm)
		}), $("<input>").attr({
			type: "hidden",
			class: "mtv-query-id-input",
			name: "query_id",
			value: $(".mtv-query-id").val()
		}).prependTo(paymentForm), extraTotal <= 0 ? (totalField.html("0 TL"), totalField.attr("data-total", "0"), $(".bills-mtv-payment-container").attr("style", "display: none !important")) : (totalField.html(extraTotal + " TL"), totalField.attr("data-total", extraTotal))
	},
	validEmail: function(email) {
		return !(email.val() && !isValidEmailAddress(email.val())) && (!!(!email.val() || email.val() && isValidEmailAddress(email.val())) || void 0)
	},
	paymentListener: function(msg) {
		try {
			var json = JSON.parse(msg.data);
			json.app && "PTT.MtvOdeme" == json.app && (json.success ? mtv.paymentResultSuccess(json) : mtv.paymentResultFail(json))
		} catch(e) {}
	},
	paymentResultSuccess: function(data) {
		var message, fail = $(".mtv-payment-result-fail"),
			success = $(".mtv-payment-result-success"),
			paymentPage = $(".mtv-payment-request-success"),
			requestError = $(".mtv-payment-request-error");
		$(".mtv-payment-completed").val("1"), $("#mtv-payment-form").trigger("reset"), message = void 0 !== data && null != data.message && void 0 !== data.message ? data.message : "MTV Ã¶demeniz başarıyla gerçekleştirildi.", fail.hide(), paymentPage.hide(), requestError.hide(), success.find("h5").html(message), success.show(), $(".mtv-plate-number").val(""), $(".mtv-tax-period").val((new Date).getFullYear()), "development" !== $("#app_env").val() && mtv.sendGaData($(".mtv-query-id").val().toString(), $(".mtv-selected-bill-extra-total-amount-field strong").data("total").toString())
	},
	paymentResultFail: function() {
		var message, fail = $(".mtv-payment-result-fail"),
			success = $(".mtv-payment-result-success"),
			paymentPage = $(".mtv-payment-request-success"),
			requestError = $(".mtv-payment-request-error");
		message = "undefined" != typeof data && null != data.message && void 0 !== data.message ? data.message : "Bir sorun oluştu. LÃ¼tfen tekrar deneyiniz.", success.hide(), paymentPage.hide(), requestError.hide(), fail.find("h5").html(message), fail.show()
	},
	sendGaData: function(id, total) {
		try {
			_gaq.push(["_set", "currencyCode", "TRY"]);
			var pageTracker = _gat._getTracker("UA-35753049-1");
			pageTracker._trackPageview(), pageTracker._addTrans(id, "HGS (Web Desktop)", total, "0", "0", "", "", "TR"), pageTracker._addItem(id, "MTV", "MTV", "e-Tahsilat", total, "1"), pageTracker._trackTrans(), gtag("event", "conversion", {
				send_to: "AW-852040690/9JsjCIKyqJMBEPK3pJYD",
				value: total,
				currency: "TRY",
				transaction_id: id
			})
		} catch(err) {}
	},
	onTabShow: function(tab, navigation, index) {
		var $total = navigation.find("li").length,
			confirmBtn = $(".wizard-confirm-btn"),
			$wizard = navigation.closest(".wizard-card"),
			move_distance = 100 / $total;
		move_distance = move_distance * index + move_distance / 2, $wizard.find($(".progress-bar")).css({
			width: move_distance + "%"
		}), $.each($wizard.find($(".wizard-card .nav-pills li")), function() {
			$(this).data("index") > index ? $(this).find("a .icon-circle").removeClass("checked") : $(this).find("a .icon-circle").addClass("checked")
		}), $wizard.find($(".wizard-card .nav-pills li.active a .icon-circle")).addClass("checked"), confirmBtn.show();
		var paymentMessage = $(".mtv-payment-message");
		if(0 === index) confirmBtn.attr("id", "wizard-query-btn").attr("data-index", "0"), !0 === $(".mtv-query-input").data("executed") ? confirmBtn.html('YENÄ° SORGU <img src="/v2/assets/images/buttons/right-arrow.png" />') : confirmBtn.html('SORGULA <img src="/v2/assets/images/buttons/right-arrow.png" />');
		else if(1 === index) confirmBtn.attr("id", "wizard-label-btn").html('Ä°LERÄ° <img src="/v2/assets/images/buttons/right-arrow.png" />').attr("data-index", "1");
		else if(2 === index) {
			confirmBtn.hide();
			var total = parseFloat($(".mtv-selected-bill-extra-total-amount-field strong").attr("data-total")).toFixed(2);
			paymentMessage.html('Ödeme işlemini onayladığınızda, <span class="text-warning">' + total + " TL</span> kartınızdan tahsis edilecektir.")
		} else 3 === index && confirmBtn.hide();
		0 === index ? $(".btn-previous").hide() : $(".btn-previous").show(), 1 === parseInt($(".mtv-payment-completed").val()) && location.reload()
	},
	onNext: function(tab, navigation, index) {
		var currentIndex = index - 1,
			form = $(".wizard-card form[data-tab=" + currentIndex + "]");
		if(0 == currentIndex) {
			if(mtv.maintenance) return toastr.info("Değerli kullanıcılarımız, Sizlere daha iyi hizmet sunabilmek adına; Motorlu Taşıtlar Vergisi (MTV) ve Trafik Cezası Ödeme hizmetlerimizde bir gÃ¼ncelleme gerçekleştiriyoruz. Anlayışınız için teşekkÃ¼r ederiz."), !1;
			mtv.recaptchaKey = grecaptcha.getResponse(window.mtvRecaptcha);
			var captchaMsg = $(".recaptcha-callback-not-valid-msg");
			if("" !== mtv.recaptchaKey && captchaMsg.hide(), form.valid() && "" !== mtv.recaptchaKey) {
				var that = $(".mtv-query-input");
				if(!0 === that.data("executed")) return window.location.hash = "", location.reload(), !1;
				var vehicle, successContainer = $(".bills-mtv-success-container"),
					vehicleContainer = $(".bills-mtv-vehicle-container"),
					errorContainer = $(".bills-mtv-check-error"),
					loadingContainer = $(".bills-mtv-check-loading"),
					dataContainer = $(".mtv-result-list-container"),
					dataNotFoundContainer = $(".mtv-tax-data-not-found"),
					tbody = $(".mtv-tax-data"),
					tr = "",
					vehicleInfo = $(".mtv-vehicle-info"),
					vehicleList = "",
					paymentForm = $("#mtv-payment-form"),
					expiredClass = "",
					currentDate = new Date,
					dueDate = "",
					dateParts = "";
				$.each(paymentForm.find(".form-group"), function() {
					$(this).find(".input-error").remove(), $(this).removeClass("has-error")
				}), $("body").css({
					"pointer-events": "none"
				}), $(".bills-mtv-payment-container, .bills-mtv-success-container, .bills-mtv-vehicle-container").attr("style", "display:none !important"), loadingContainer.attr("style", "display:inline-block !important"), $.ajax({
					type: "POST",
					data: {
						year: $(".mtv-tax-period").val(),
						plate: $(".mtv-plate-number").val().replace(/ /g, ""),
						token: $("input#csrf_token").val(),
						"g-recaptcha-response": mtv.recaptchaKey
					},
					url: "/mtv-sorgula",
					success: function(response) {
						if(response.success) {
							errorContainer.removeAttr("style"), successContainer.attr("style", "display:inline-block !important"), vehicleContainer.attr("style", "display:inline-block !important"), $(".mtv-selected-bill-extra-total-amount-field strong").attr("data-total", "0").html("0 TL"), $(".mtv-query-id").val(response.queryId);
							var owner, tckno, vkno, tax_period, accrual_receipt_no, count = 0;
							if(0 < response.data.length ? (tr = '<tr><td><table class="table result-middle-table">', $.each(response.data, function(k, v) {
									dateParts = v.due_date.split("/"), dueDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]), expiredClass = dueDate < currentDate ? " expired-item" : "", 0 === count && (tr += "<tr>"), tr += '<td data-id="' + v.id + '" class="mtv-tax-data-item"><table class="table mtv-result-inside-table"><tr><td class="mtv-period"><strong>Yıl</strong><span class="mtv-selected-year">' + v.year + '</span></td></tr><tr><td><strong>Taksit</strong><span class="mtv-selected-installment">' + v.period + '</span></td></tr><tr><td class="mtv-due-date' + expiredClass + '"><strong>Son Ödeme Tarihi</strong><span>' + v.due_date + '</span></td></tr><tr><td class="mtv-amount-detail"><strong>Taksit Tutarı</strong><span>' + parseFloat(v.installment_amount).toFixed(2) + " TL</span></td></tr><tr><td><strong>Gecikme Zammı</strong><span>" + parseFloat(v.delay_increment).toFixed(2) + ' TL</span></td></tr><tr><td class="mtv-total-amount"><strong>Toplam Taksit Tutarı</strong><span class="mtv-selected-total-amount" data-total="' + parseFloat(v.total_amount).toFixed(2) + '">' + parseFloat(v.total_amount).toFixed(2) + ' TL</span></td></tr><tr><td><button type="button" class="btn btn-warning select-mtv-amount-btn" data-total="' + parseFloat(v.total_amount).toFixed(2) + '" data-id="' + v.id + '" onclick="mtv.selectAmount($(this));">SEÃ‡ <img src="/v2/assets/images/tabs/payment.png" /></button></td></tr></table></td>', 2 === ++count && (tr += "</tr>", count = 0)
								}), tr += "</table></td></tr>", tbody.html(tr), dataContainer.show(), 1 === tbody.find(".mtv-tax-data-item").length && tbody.find(".mtv-tax-data-item .select-mtv-amount-btn").trigger("click"), dataNotFoundContainer.hide(), vehicleContainer.attr("style", "display:inline-block !important"), successContainer.removeClass("col-lg-12").addClass("col-lg-8")) : ($(".mtv-request-year").html($(".mtv-tax-period").val()), dataContainer.hide(), dataNotFoundContainer.show(), vehicleContainer.attr("style", "display:none !important"), successContainer.removeClass("col-lg-8").addClass("col-lg-12")), vehicleList = "", void 0 !== response.vehicle) void 0 !== (vehicle = response.vehicle).owner && (owner = "<tr><td><strong>Araç Sahibi</strong><br />" + vehicle.owner + "</td></tr>"), tckno = void 0 !== vehicle.tckno ? "<tr><td><strong>T.C. Kimlik No</strong><br />" + vehicle.tckno + "</td></tr>" : "", vkno = void 0 !== vehicle.vkno ? "<tr><td><strong>Vergi Kimlik No</strong><br />" + vehicle.vkno + "</td></tr>" : "", tax_period = void 0 !== vehicle.tax_period ? "<tr><td><strong>Vergi DÃ¶nemi</strong><br />" + vehicle.tax_period + "</td></tr>" : "", accrual_receipt_no = void 0 !== vehicle.accrual_receipt_no ? "<tr><td><strong>Tahakkuk No</strong><br />" + vehicle.accrual_receipt_no + "</td></tr>" : "", vehicleList += owner, vehicleList += tckno, vehicleList += vkno, vehicleList += tax_period, vehicleList += accrual_receipt_no;
							vehicleInfo.html(vehicleList), mtv.selectedFieldCalc()
						} else errorContainer.html('<span class="text-danger">' + response.err_msg + "</span>"), errorContainer.attr("style", "display:block !important")
					},
					error: function(err, exception) {
						var err_msg = app.errorHandlerFunc(err, exception);
						errorContainer.attr("style", "display:inline-block !important").html('<span class="text-danger">' + err_msg + "</span>"), vehicleContainer.removeAttr("style"), successContainer.removeAttr("style")
					},
					complete: function() {
						that.data("executed", !0), form.find("input[type=text], select").attr("disabled", "disabled"), $("body").css({
							"pointer-events": "all"
						}), loadingContainer.removeAttr("style")
					}
				})
			} else mtv.recaptchaKey || captchaMsg.show()
		} else if(1 == currentIndex)
			if(form.valid()) {
				var paymentContainer = $(".bills-mtv-payment-container");
				mtv.selectedFieldCalc(), paymentContainer.attr("style", "display:inline-block !important")
			} else 0 < $(".mtv-tax-data tr table tr td").length && toastr.error("LÃ¼tfen Ã¶demek istediğiniz MTV taksitini seçin.");
		else if(2 == currentIndex && form.valid()) {
			var cardNumber = form.find("input[name=showNumber]").val(),
				showExpiry = form.find("input[name=showExpiry]").val(),
				payRequestLoading = $(".mtv-payment-request-loading"),
				payRequestError = $(".mtv-payment-request-error"),
				payRequestSuccess = $(".mtv-payment-request-success"),
				payResultSuccess = $(".mtv-payment-result-success"),
				payResultFail = $(".mtv-payment-result-fail"),
				paymentModalFrame = $("#mtv-payment-modal-iframe");
			if(!app.creditCardValidation(cardNumber.replace(/[^a-zA-Z0-9]/g, ""))) return toastr.error("Kredi kartı numarası geçersiz!"), !1;
			form.find("input[name=email]").val($("#mtv-query-email").val()), form.find("input[name=number]").val(cardNumber.replace(/[^a-zA-Z0-9]/g, "")), form.find("input[name=expiry]").val(showExpiry.replace(" / ", "/20")), $("body").css({
				"pointer-events": "none"
			}), payRequestLoading.show(), payRequestSuccess.hide(), payResultSuccess.hide(), payResultFail.hide(), payRequestError.hide();
			var errMsg = "";
			$.ajax({
				type: "POST",
				data: form.serialize(),
				url: "/mtv-pay",
				success: function(response) {
					response.success ? (payRequestError.hide(), paymentModalFrame.attr("src", "/mtv_init"), payRequestSuccess.show()) : (response.message && void 0 !== response.message && "" !== response.message ? errMsg = response.message : response.err_msg && void 0 !== response.err_msg && "" !== response.err_msg && (errMsg = response.err_msg), payRequestSuccess.hide(), payRequestError.html('<span class="text-danger">' + errMsg + "</span>").show())
				},
				complete: function() {
					payRequestLoading.hide(), payResultSuccess.hide(), payResultFail.hide(), $("body").css({
						"pointer-events": "all"
					})
				}
			})
		}
		return 0 != currentIndex && form.valid() || 0 == currentIndex && form.valid() && "" !== mtv.recaptchaKey
	},
	payment: function() {
		$(".wizard-confirm-btn").trigger("click")
	}
};
window.addEventListener ? window.addEventListener("message", mtv.paymentListener, !1) : window.attachEvent("onmessage", mtv.paymentListener);
var traffic = {
	recaptchaKey: "",
	recaptchaDeclaredKey: "",
	maintenance: 1 === parseInt($("#maintenance_trafik").val()),
	documentReady: function() {
		$("#tp-query-form").validate({
			ignore: ".ignore",
			rules: {
				showPlateNo: "required",
				query: {
					minlength: 10,
					maxlength: 11,
					required: !0
				},
				email: {
					email: !0,
					required: !1
				}
			},
			messages: {
				showPlateNo: "Plaka no girilmelidir.",
				query: {
					required: "Bu alan doldurulmalıdır.",
					minlength: "Eksik karakter girişi yaptınız.",
					maxlength: "Fazla karakter girişi yaptınız."
				},
				email: {
					required: "E-posta adresi girilmelidir.",
					email: "Girilen e-posta adresi geçersiz."
				}
			}
		}), $("#tp-declared-pay-query-form").validate({
			rules: {
				showTcNo: "required",
				showNameSurname: {
					required: !0,
					nameSurname: !0,
					withoutNumbers: !0
				},
				showTaxNo: "required",
				showTitle: "required",
				showPlateNumber: "required",
				serial_number: "required",
				must_number: "required",
				address: "required",
				date_of_issue: "required",
				date_of_notification: "required",
				showMonetaryAmount: "required"
			},
			messages: {
				showTcNo: "T.C. Kimlik no girin.",
				showNameSurname: {
					required: "Ad-soyad girin.",
					withoutNumbers: "Geçersiz ad-soyad!",
					nameSurname: "Geçersiz ad-soyad!"
				},
				showTaxNo: "Vergi numarası girin.",
				showTitle: "Unvan girin.",
				showPlateNumber: "Plaka no girin.",
				serial_number: "Seri no girin.",
				must_number: "Sıra no girin.",
				address: "Adres girin.",
				date_of_issue: "Tarih seçin.",
				date_of_notification: "Tarih seçin.",
				showMonetaryAmount: "Ceza tutarı girin."
			},
			errorPlacement: function(error, element) {
				if("serial_number" === element.attr("name") || "must_number" === element.attr("name")) error.appendTo("#serial_must_number_msg");
				else {
					var placement = $(element).data("error");
					placement ? $(placement).append(error) : error.insertAfter(element)
				}
			}
		}), $(".tp-plate-number, .tp-query-field").keypress(function(e) {
			13 == e.keyCode && ($("#wizard-query-btn").trigger("click"), e.preventDefault())
		}), $(".tp-query-btn").click(function() {}), $(".tp-email-and-submit input[name=email]").change(function() {
			var email = $("#tp-payment-form").find("input[name=email]");
			traffic.validEmail(email) ? email.parents(".form-group").removeClass("has-error") : email.parents(".form-group").addClass("has-error")
		});
		var currentewDate = new Date,
			currentDate = currentewDate.getFullYear() + "/" + (currentewDate.getMonth() + 1) + "/" + currentewDate.getDate();
		$(".tp-date-fields").datetimepicker({
			format: "d-m-Y",
			timepicker: !1,
			maxDate: currentDate
		}), $("body").delegate(".declared-pay-btn", "click", function() {
			var normalListScreen = $(".bills-tp-success-container"),
				tpDeclaredQueryScreen = $(".tp_declared_pay_query_field"),
				tpDeclaredListScreen = $(".tp-declared-pay-result-screen"),
				type = $("#tp-query-form").find("input[name=taxpayer_type]").val(),
				that = $(this);
			$(".traffic-result-total-message").hide(), normalListScreen.attr("style", "display: none !important"), tpDeclaredListScreen.attr("style", "display: none !important"), tpDeclaredQueryScreen.attr("style", "display:block !important"), $.each($(".tp_list_the_data.tp_data_for_normal").find("tr .select-tp-amount-btn.selected"), function() {
				$(this).trigger("click")
			}), $(".declared_pay_query_for_" + type + "_person").show(), that.removeClass("declared-pay-btn"), that.removeClass("tp-edit-declared-btn"), that.addClass("normal_flow_list_btn"), that.html("NORMAL ÖDE"), $(".wizard-confirm-btn").html('SORGULA <img src="/v2/assets/images/buttons/right-arrow.png" />'), $(".tp_list_the_data tbody tr .select-tp-amount-btn.selected").trigger("click"), $(".bills-tp-check-error").hide(), $(".declared_pay_info_message").hide(), traffic.selectedFieldCalc()
		}), $("body").delegate(".normal_flow_list_btn", "click", function() {
			var totalMessage = $(".traffic-result-total-message");
			"" !== totalMessage.html() && totalMessage.show();
			var normalListScreen = $(".bills-tp-success-container"),
				tpDeclaredQueryScreen = $(".tp_declared_pay_query_field"),
				tpDeclaredListScreen = $(".tp-declared-pay-result-screen"),
				that = $(this);
			tpDeclaredQueryScreen.attr("style", "display:none !important"), tpDeclaredListScreen.attr("style", "display:none !important"), normalListScreen.attr("style", "display: block !important"), that.removeClass("normal_flow_list_btn"), that.removeClass("tp-edit-declared-btn"), that.addClass("declared-pay-btn"), that.html("BEYANLI ÖDE"), $(".wizard-confirm-btn").html('Ä°LERÄ° <img src="/v2/assets/images/buttons/right-arrow.png" />'), $(".tp_list_the_data tbody tr .select-tp-amount-btn.selected").trigger("click"), $(".bills-tp-check-error").hide(), $(".declared_pay_info_message").show(), traffic.selectedFieldCalc()
		}), $("body").delegate(".tp-edit-declared-btn", "click", function() {
			var normalListScreen = $(".bills-tp-success-container"),
				tpDeclaredQueryScreen = $(".tp_declared_pay_query_field"),
				tpDeclaredListScreen = $(".tp-declared-pay-result-screen"),
				that = $(this);
			tpDeclaredListScreen.attr("style", "display:none !important"), normalListScreen.attr("style", "display: none !important"), tpDeclaredQueryScreen.attr("style", "display:block !important"), that.removeClass("declared-pay-btn"), that.removeClass("tp-edit-declared-btn"), that.addClass("normal_flow_list_btn"), that.html("NORMAL ÖDE"), $(".wizard-confirm-btn").html('Ä°LERÄ° <img src="/v2/assets/images/buttons/right-arrow.png" />'), traffic.selectedFieldCalc()
		}), $(".tp-monetary-amount").mask("000.000.000.000.000,00", {
			reverse: !0
		}), $(".tp_taxpayer_type li:first-child").trigger("click")
	},
	selectedFieldCalc: function() {
		var extraTotal = 0,
			totalField = $(".tp-selected-bill-extra-total-amount-field strong"),
			ids = [];
		$.each($(".tp_list_the_data:visible tbody tr .select-tp-amount-btn.selected"), function() {
			ids.push($(this).data("id")), extraTotal += parseFloat($(this).parents("table").find(".tp-selected-total-amount").data("total"))
		}), extraTotal = parseFloat(extraTotal).toFixed(2), $(".tp-ready-for-pay-amount strong").html(extraTotal + " TL");
		var paymentForm = $("#tp-payment-form");
		$(".tp-selected-bills-list-item-input").remove(), $(".tp-query-id-input").remove(), $.each(ids, function(k, v) {
			$("<input>").attr({
				type: "hidden",
				class: "tp-selected-bills-list-item-input",
				name: "ids[]",
				value: v
			}).prependTo(paymentForm)
		}), $("<input>").attr({
			type: "hidden",
			class: "tp-query-id-input",
			name: "query_id",
			value: $(".tp-query-id").val()
		}).prependTo(paymentForm), extraTotal <= 0 ? (totalField.html("0 TL"), totalField.attr("data-total", "0"), $(".bills-tp-payment-container").attr("style", "display: none !important")) : (totalField.html(extraTotal + " TL"), totalField.attr("data-total", extraTotal))
	},
	validEmail: function(email) {
		return !(email.val() && !isValidEmailAddress(email.val())) && (!!(!email.val() || email.val() && isValidEmailAddress(email.val())) || void 0)
	},
	paymentListener: function(msg) {
		try {
			var json = JSON.parse(msg.data);
			json.app && "PTT.TrafikCezasiOdeme" == json.app && (json.success ? traffic.paymentResultSuccess(json) : traffic.paymentResultFail(json))
		} catch(e) {}
	},
	paymentResultSuccess: function(data) {
		var message, fail = $(".tp-payment-result-fail"),
			success = $(".tp-payment-result-success"),
			paymentPage = $(".tp-payment-request-success"),
			requestError = $(".tp-payment-request-error");
		$(".tp-payment-completed").val("1"), $("#tp-payment-form").trigger("reset"), message = void 0 !== data && null != data.message && void 0 !== data.message ? data.message : "Trafik Cezası Ã¶demeniz başarıyla gerçekleştirildi.", fail.hide(), paymentPage.hide(), requestError.hide(), success.find("h5").html(message), success.show(), $(".tp-plate-number").val(""), $(".tp-query-field").val(""), "development" !== $("#app_env").val() && traffic.sendGaData($(".tp-query-id").val().toString(), $(".tp-selected-bill-extra-total-amount-field strong").data("total").toString())
	},
	paymentResultFail: function(data) {
		var message, fail = $(".tp-payment-result-fail"),
			success = $(".tp-payment-result-success"),
			paymentPage = $(".tp-payment-request-success"),
			requestError = $(".tp-payment-request-error");
		message = void 0 !== data && null != data.message && void 0 !== data.message ? data.message : "Bir sorun oluştu. LÃ¼tfen tekrar deneyiniz.", success.hide(), paymentPage.hide(), requestError.hide(), fail.find("h5").html(message), fail.show()
	},
	sendGaData: function(id, total) {
		try {
			_gaq.push(["_set", "currencyCode", "TRY"]);
			var pageTracker = _gat._getTracker("UA-35753049-1");
			pageTracker._trackPageview(), pageTracker._addTrans(id, "HGS (Web Desktop)", total, "0", "0", "", "", "TR"), pageTracker._addItem(id, "Trafik Para Cezası", "Trafik Para Cezası", "e-Tahsilat", total, "1"), pageTracker._trackTrans(), gtag("event", "conversion", {
				send_to: "AW-852040690/WMSuCJKhqJMBEPK3pJYD",
				value: total,
				currency: "TRY",
				transaction_id: id
			})
		} catch(err) {}
	},
	setVehicle: function(vehicle) {
		var owner, vehicleInfo = $(".tp-vehicle-info"),
			vehicleList = "",
			vehicleContainer = $(".bills-tp-vehicle-container");
		vehicle ? (owner = "", void 0 !== vehicle.owner && "" != vehicle.owner && vehicle.owner && (owner = "<tr><td><span><strong>Araç Sahibi: </strong>" + vehicle.owner + "</span></td></tr>"), vehicleList += owner, vehicleList += void 0 !== vehicle.tckno && "" != vehicle.tckno && vehicle.tckno ? "<tr><td><span><strong>T.C. Kimlik No: </strong>" + vehicle.tckno + "</span></td></tr>" : "", vehicleList += void 0 !== vehicle.vkno && "" != vehicle.vkno && vehicle.vkno ? "<tr><td><span><strong>Vergi Kimlik No: </strong>" + vehicle.vkno + "</span></td></tr>" : "", vehicleList += void 0 !== vehicle.tax_administration_name && "" != vehicle.tax_administration_name && vehicle.tax_administration_name ? "<tr><td><span><strong>Vergi Dairesi Adı: </strong>" + vehicle.tax_administration_name + "</span></td></tr>" : "", vehicleList += void 0 !== vehicle.tax_administration_code && "" != vehicle.tax_administration_code && vehicle.tax_administration_code ? "<tr><td><span><strong>Vergi Dairesi Kodu: </strong>" + vehicle.tax_administration_code + "</span></td></tr>" : "", void 0 !== vehicle.tax_administration_code && "" != vehicle.tax_administration_code && vehicle.tax_administration_code && $("#tp-declared-pay-query-form input[name=tax_administration_code]").val(vehicle.tax_administration_code), vehicleContainer.attr("style", "display: inline-block !important")) : vehicleContainer.attr("style", "display: none !important");
		vehicleInfo.html(vehicleList)
	},
	setTaxpayerType: function(that) {
		var changeTitle, changePlaceholder, normalQuery = $(".tp_normal_flow_query"),
			type = that.data("type"),
			typeTitle = that.html(),
			normalQueryTitle = normalQuery.find(".tp_flow_block_title"),
			changeField = $(".tp_change_by_selection"),
			selectedTaxpayerType = $(".selected_taxpayer_type"),
			text = that.html(),
			queryName = "";
		selectedTaxpayerType.find("b").html(text), normalQueryTitle.find("b").html(typeTitle), that.parent().find("li").removeClass("btn-fill"), that.addClass("btn-fill"), $("input[name=taxpayer_type]").val(type), "real" === type ? (changeTitle = "T.C. KÄ°MLÄ°K NO", changePlaceholder = "Örn: 01234567890", queryName = "T.C. Kimlik numarasını") : "juridical" === type && (changeTitle = "VERGÄ° KÄ°MLÄ°K NO", changePlaceholder = "Örn: 0123456789", queryName = "Vergi Kimlik numarasını"), changeField.find(".tp_normal_flow_table_title").html(changeTitle), changeField.find(".tp_normal_flow_form_title input").attr("placeholder", changePlaceholder), changeField.find(".tp_normal_flow_form_title input").val(""), $(".tp-heading-query-name").html(queryName), normalQuery.show()
	},
	monetaryAmountBlur: function(input) {
		parseInt(input.val()) <= 0 && input.val(""), input.parent().find("input[name=monetary_amount]").val(input.val().replace(".", ""))
	},
	onTabShow: function(tab, navigation, index) {
		var $total = navigation.find("li").length,
			confirmBtn = $(".wizard-confirm-btn"),
			declaredBtn = $(".declared-pay-btn"),
			extraBtn = $(".tp-wizard-extra-btn"),
			$wizard = navigation.closest(".wizard-card"),
			move_distance = 100 / $total;
		(move_distance = move_distance * index + move_distance / 2, $wizard.find($(".progress-bar")).css({
			width: move_distance + "%"
		}), $.each($wizard.find($(".wizard-card .nav-pills li")), function() {
			$(this).data("index") > index ? $(this).find("a .icon-circle").removeClass("checked") : $(this).find("a .icon-circle").addClass("checked")
		}), $wizard.find($(".wizard-card .nav-pills li.active a .icon-circle")).addClass("checked"), confirmBtn.show(), declaredBtn.hide(), extraBtn.hide(), 0 === index) ? (confirmBtn.attr("id", "wizard-query-btn").attr("data-index", "0"), !0 === $(".tp-query-input").data("executed") ? confirmBtn.html('YENÄ° SORGU <img src="/v2/assets/images/buttons/right-arrow.png" />') : confirmBtn.html('SORGULA <img src="/v2/assets/images/buttons/right-arrow.png" />')) : 1 === index ? (declaredBtn.show(), extraBtn.show(), confirmBtn.attr("id", "wizard-label-btn").html('Ä°LERÄ° <img src="/v2/assets/images/buttons/right-arrow.png" />').attr("data-index", "1")) : 2 === index ? confirmBtn.hide() : 3 === index && confirmBtn.hide();
		0 === index ? $(".btn-previous").hide() : $(".btn-previous").show(), 1 === parseInt($(".tp-payment-completed").val()) && location.reload()
	},
	selectAmount: function(that) {
		var confirmInput = $(".tp-confirm-input-value");
		that.hasClass("selected") ? (that.removeClass("selected"), that.html('SEÃ‡ <img src="/v2/assets/images/tabs/payment.png" />')) : (that.addClass("selected"), that.html("SEÃ‡Ä°LÄ°")), 0 < $(".tp_list_the_data tbody tr .select-tp-amount-btn.selected").length ? confirmInput.val("1") : confirmInput.val(""), traffic.selectedFieldCalc()
	},
	payment: function() {
		var form = $("#tp-payment-form");
		if(form.valid()) {
			toastr.options = {
				closeButton: !1,
				showDuration: 0,
				hideDuration: 0,
				timeOut: 0,
				tapToDismiss: !1,
				progressBar: !1,
				newestOnTop: !0,
				closeOnHover: !0
			};
			var cardNumber = form.find("input[name=showNumber]").val();
			toastr.warning('<p class="toast-message-content"><b class="text-warning">' + cardNumber + '</b> numaralı kartınız ile <b style="text-transform: uppercase;" class="text-warning">' + $("#tp_normal_flow_plate_number").val() + "</b>  plakalı aracın <b>Trafik Cezası</b> Ã¶demesini yapmak için <b>" + $(".tp-selected-bill-extra-total-amount-field strong").html() + '</b> kartınızdan tahsil edilecektir. Onaylıyor musunuz?</p><div class="button-group"><button type="button" class="btn btn-danger" onclick="app.clearToastr();">Ä°PTAL <img src="/v2/assets/images/form-invalid.png" /></button><button type="button" class="btn btn-success" onclick="traffic.paymentConfirm();">ONAY <img src="/v2/assets/images/form-valid.png" /></button></div>'), setTimeout(function() {
				toastr.options = {
					closeButton: !0,
					showDuration: 0,
					hideDuration: 0,
					timeOut: 4e3,
					tapToDismiss: !1,
					progressBar: !0,
					closeOnHover: !0
				}
			}, 500)
		}
	},
	paymentConfirm: function() {
		app.clearToastr(), $(".wizard-confirm-btn").trigger("click")
	},
	onNext: function(tab, navigation, index) {
		var discount, delay_increment, currentIndex = index - 1,
			form = $(".wizard-card form[data-tab=" + currentIndex + "]"),
			loadingContainer = $(".bills-tp-check-loading"),
			vehicleContainer = $(".bills-tp-vehicle-container"),
			installment_amount = "";
		if(0 == currentIndex) {
			if(traffic.maintenance) return toastr.info("Değerli kullanıcılarımız, Sizlere daha iyi hizmet sunabilmek adına; Motorlu Taşıtlar Vergisi (MTV) ve Trafik Cezası Ödeme hizmetlerimizde bir gÃ¼ncelleme gerçekleştiriyoruz. Anlayışınız için teşekkÃ¼r ederiz."), !1;
			traffic.recaptchaKey = grecaptcha.getResponse(window.trafikCezasiRecaptcha);
			var captchaMsg = $(".recaptcha-callback-not-valid-msg");
			if("" !== traffic.recaptchaKey && captchaMsg.hide(), form.valid() && "" !== traffic.recaptchaKey) {
				var that = $(".tp-query-input");
				if(!0 === that.data("executed")) return window.location.hash = "", location.reload(), !1;
				var successContainer = $(".bills-tp-success-container"),
					errorContainer = $(".bills-tp-check-error"),
					dataContainer = $(".tp_list_the_data.tp_data_for_normal"),
					dataNotFoundContainer = $(".tp-tax-data-not-found"),
					tbody = $(".tp_list_the_data.tp_data_for_normal tbody"),
					tr = "",
					paymentForm = $("#tp-payment-form"),
					extraBtn = $(".tp-wizard-extra-btn"),
					tpQueryList = $("#tp-query-list");
				$.each(paymentForm.find(".form-group"), function() {
					$(this).find(".input-error").remove(), $(this).removeClass("has-error")
				}), $("body").css({
					"pointer-events": "none"
				}), $(".bills-tp-payment-container, .bills-tp-success-container, .bills-tp-vehicle-container").attr("style", "display:none !important"), loadingContainer.attr("style", "display:inline-block !important"), form.find("input[name=plate]").val(form.find("input[name=showPlateNo]").val().replace(/ /g, ""));
				var totalMessage = $(".traffic-result-total-message");
				totalMessage.hide(), $.ajax({
					type: "POST",
					data: form.serialize(),
					url: "/trafik-cezasi-sorgula",
					success: function(response) {
						if(response.success) {
							errorContainer.removeAttr("style"), successContainer.attr("style", "display:inline-block !important"), $(".tp-selected-bill-extra-total-amount-field strong").attr("data-total", "0").html("0 TL"), $(".tp-query-id").val(response.queryId);
							var count = 0;
							0 < response.data.length ? (tr = '<tr><td><table class="table result-middle-table">', $.each(response.data, function(k, v) {
								discount = v.discount && "undefined" !== v.discount && "" != v.discount ? parseFloat(v.discount).toFixed(2) : parseFloat(0).toFixed(2), delay_increment = v.delay_increment && "undefined" !== v.delay_increment && "" != v.delay_increment ? parseFloat(v.delay_increment).toFixed(2) : parseFloat(0).toFixed(2), installment_amount = v.installment_amount && "undefined" !== v.installment_amount && "" != v.installment_amount ? parseFloat(v.installment_amount).toFixed(2) : parseFloat(0).toFixed(2), 0 === count && (tr += "<tr>"), tr += '<td data-id="' + v.id + '" class="tp-data-list-item"><table class="table mtv-result-inside-table"><tr><td><strong>DÃ¼zenlenme Tarihi</strong><span>' + v.date_of_issue + "</span></td></tr><tr><td><strong>Tebliğ Tarihi</strong><span>" + v.date_of_notification + "</span></td></tr><tr><td><strong>Taksit Tutarı</strong><span>" + installment_amount + ' TL</span></td></tr><tr><td><strong>Gecikme Zammı</strong><span class="delay_increment" data-price="' + delay_increment + '">' + delay_increment + ' TL</span></td></tr><tr><td><strong>Ä°ndirim</strong><span data-price="' + discount + '">' + discount + ' TL</span></td></tr><tr><td><strong>Toplam Taksit Tutarı</strong><span class="tp-selected-total-amount" data-total="' + parseFloat(v.total_installment_amount).toFixed(2) + '">' + parseFloat(v.total_installment_amount).toFixed(2) + ' TL</span></td></tr><tr><td><button type="button" class="btn btn-warning select-tp-amount-btn" data-id="' + v.id + '" onclick="traffic.selectAmount($(this));">SEÃ‡ <img src="/v2/assets/images/tabs/payment.png" /></button></td></tr></table></td>', 2 === ++count && (tr += "</tr>", count = 0)
							}), tr += "</table></td></tr>", totalMessage.html('Sorgulama sonucunda <span class="text-warning">' + response.data.length + "</span> adet trafik cezası bulundu."), totalMessage.show(), tbody.html(tr), dataContainer.show(), 1 === tbody.find(".tp-data-list-item").length && tbody.find(".tp-data-list-item .select-tp-amount-btn").trigger("click"), dataNotFoundContainer.hide()) : (dataContainer.hide(), dataNotFoundContainer.show()), $("#tp-declared-pay-query-form").find("input[name=plate_number]").val($("#tp_normal_flow_plate_number").val()), extraBtn.show(), $(".declared_pay_info_message").show(), tpQueryList.find(".col-md-8").removeClass("tp-long-field"), traffic.setVehicle(response.vehicle)
						} else errorContainer.html('<span class="text-danger">' + response.err_msg + "</span>"), errorContainer.attr("style", "display:inline-block !important"), $(".declared_pay_info_message").hide(), extraBtn.hide(), tpQueryList.find(".col-md-8").addClass("tp-long-field")
					},
					error: function(err, exception) {
						var err_msg = app.errorHandlerFunc(err, exception);
						errorContainer.attr("style", "display:inline-block !important").html('<span class="text-danger">' + err_msg + "</span>"), successContainer.removeAttr("style"), extraBtn.hide()
					},
					complete: function() {
						that.data("executed", !0), form.find("input[type=text], select").attr("disabled", "disabled"), $("body").css({
							"pointer-events": "all"
						}), loadingContainer.removeAttr("style"), $(".tp_tckno_field, .tp_unchangeable_vkn").val($("#tp_normal_flow_query_text").val().replace(/ /g, "")), $(".tp_unchangeable_plate_number").val($("#tp_normal_flow_plate_number").val().replace(/ /g, ""))
					}
				})
			} else traffic.recaptchaKey || captchaMsg.show()
		} else {
			if(1 == currentIndex) {
				var extraDataForPerson = "",
					taxpayerType = $("input[name=taxpayer_type]").val(),
					tckno = $(".tp_tckno_field").val(),
					nameSurname = $(".tp_name_surname_field").val(),
					vkno = $(".tp_vkno_field").val(),
					title = $(".tp_title_field").val(),
					declaredPayForm = $("#tp-declared-pay-query-form"),
					listData = $(".tp_list_the_data.tp_data_for_declared"),
					liItem = "",
					declaredResultScreen = $(".tp-declared-pay-result-screen"),
					declaredQueryScreen = $(".tp_declared_pay_query_field");
				if("real" === taxpayerType ? extraDataForPerson = "&tckno=" + tckno + "&name_surname=" + nameSurname : "juridical" === taxpayerType && (extraDataForPerson = "&vkno=" + vkno + "&title=" + title), 0 < $(".tp_declared_pay_query_field:visible").length) {
					traffic.recaptchaDeclaredKey = grecaptcha.getResponse(window.trafikCezasiBeyanliRecaptcha);
					captchaMsg = $(".recaptcha-callback-not-valid-msg");
					return "" !== traffic.recaptchaDeclaredKey && captchaMsg.hide(), declaredPayForm.valid() && "" !== traffic.recaptchaDeclaredKey ? ($("body").css({
						"pointer-events": "none"
					}), loadingContainer.attr("style", "display:inline-block !important"), declaredQueryScreen.attr("style", "display: none !important"), vehicleContainer.attr("style", "display: none !important"), $.ajax({
						type: "POST",
						data: declaredPayForm.serialize() + extraDataForPerson,
						url: "/trafik-cezasi-beyanli",
						success: function(response) {
							if(response.success) {
								$(".tp-query-id").val(response.queryId);
								var count = 0;
								0 < response.data.length ? (liItem = '<tr><td><table class="table result-middle-table">', $.each(response.data, function(k, v) {
									discount = v.discount && "undefined" !== v.discount && "" != v.discount ? parseFloat(v.discount).toFixed(2) : parseFloat(0).toFixed(2), delay_increment = v.delay_increment && "undefined" !== v.delay_increment && "" != v.delay_increment ? parseFloat(v.delay_increment).toFixed(2) : parseFloat(0).toFixed(2), installment_amount = v.installment_amount && "undefined" !== v.installment_amount && "" != v.installment_amount ? parseFloat(v.installment_amount).toFixed(2) : parseFloat(0).toFixed(2), 0 === count && (liItem += "<tr>"), liItem += '<td data-id="' + v.id + '" class="tp-data-list-item"><table class="table mtv-result-inside-table"><tr><td><strong>DÃ¼zenlenme Tarihi</strong><span>' + v.date_of_issue + "</span></td></tr><tr><td><strong>Tebliğ Tarihi</strong><span>" + v.date_of_notification + "</span></td></tr><tr><td><strong>Taksit Tutarı</strong><span>" + installment_amount + ' TL</span></td></tr><tr><td><strong>Gecikme Zammı</strong><span class="delay_increment" data-price="' + delay_increment + '">' + delay_increment + ' TL</span></td></tr><tr><td><strong>Ä°ndirim</strong><span data-price="' + discount + '">' + discount + ' TL</span></td></tr><tr><td><strong>Toplam Taksit Tutarı</strong><span class="tp-selected-total-amount" data-total="' + parseFloat(v.total_installment_amount).toFixed(2) + '">' + parseFloat(v.total_installment_amount).toFixed(2) + ' TL</span></td></tr><tr><td><button type="button" class="btn btn-warning select-tp-amount-btn" data-id="' + v.id + '" onclick="traffic.selectAmount($(this));">SEÃ‡ <img src="/v2/assets/images/tabs/payment.png" /></button></td></tr></table></td>', 2 === ++count && (liItem += "</tr>", count = 0)
								}), liItem += "</table></td></tr>", listData.find("tbody").html(liItem), $(".tp-tax-data-not-found").hide(), listData.show(), 1 === listData.find("tbody").find(".tp-data-list-item").length && listData.find("tbody").find(".tp-data-list-item .select-tp-amount-btn").trigger("click")) : (listData.hide(), $(".tp-tax-data-not-found").show()), traffic.setVehicle(response.vehicle), declaredQueryScreen.attr("style", "display: none !important"), declaredResultScreen.attr("style", "display: block !important");
								var btn = $(".normal_flow_list_btn");
								$(".wizard-confirm-btn").html('Ä°LERÄ° <img src="/v2/assets/images/buttons/right-arrow.png" />'), btn.html("GÃœNCELLE"), btn.addClass("tp-edit-declared-btn"), btn.removeClass("normal_flow_list_btn"), traffic.selectedFieldCalc()
							} else declaredQueryScreen.attr("style", "display: block !important"), toastr.error(response.err_msg), $(".wizard-confirm-btn").html('SORGULA <img src="/v2/assets/images/buttons/right-arrow.png" />')
						},
						error: function(err, exception) {
							var err_msg = app.errorHandlerFunc(err, exception);
							toastr.error(err_msg), declaredQueryScreen.attr("style", "display: block !important")
						},
						complete: function() {
							vehicleContainer.attr("style", "display:block !important"), loadingContainer.removeAttr("style"), $("body").css({
								"pointer-events": "all"
							})
						}
					})) : traffic.recaptchaDeclaredKey || captchaMsg.show(), !1
				}
				return !($(".tp_list_the_data:visible tbody tr .select-tp-amount-btn.selected").length <= 0) || ($(".tp_list_the_data:visible tbody tr .select-tp-amount-btn").length <= 0 && $(".declared-pay-btn").is(":visible") ? toastr.info("Trafik cezası bulunamadı. Beyanlı Ã¶deme yapabilirsiniz.") : 0 < $(".tp_list_the_data:visible tbody tr .select-tp-amount-btn").length ? toastr.error("Ödemek istediğiniz trafik cezasını seçiniz.") : $(".declared-pay-btn").is(":visible") ? toastr.info("Ödenecek trafik cezası bulunmamaktadır.") : toastr.error($(".bills-tp-check-error .text-danger").html()), !1)
			}
			if(2 == currentIndex && form.valid()) {
				var cardNumber = form.find("input[name=showNumber]").val(),
					showExpiry = form.find("input[name=showExpiry]").val(),
					payRequestLoading = $(".tp-payment-request-loading"),
					payRequestError = $(".tp-payment-request-error"),
					payRequestSuccess = $(".tp-payment-request-success"),
					payResultError = $(".tp-payment-result-fail"),
					payResultSuccess = $(".tp-payment-result-success"),
					paymentModalFrame = $("#tp-payment-modal-iframe");
				if(!app.creditCardValidation(cardNumber.replace(/[^a-zA-Z0-9]/g, ""))) return toastr.error("Kredi kartı numarası geçersiz."), !1;
				form.find("input[name=number]").val(cardNumber.replace(/[^a-zA-Z0-9]/g, "")), form.find("input[name=expiry]").val(showExpiry.replace(" / ", "/20")), form.find("input[name=email]").val($("#tp-query-email").val()), $("body").css({
					"pointer-events": "none"
				}), payRequestLoading.show(), payRequestSuccess.hide(), payRequestError.hide(), payResultError.hide(), payResultSuccess.hide();
				var errMsg = "";
				$.ajax({
					type: "POST",
					data: form.serialize(),
					url: "/trafik-cezasi-pay",
					success: function(response) {
						response.success ? (payRequestError.hide(), paymentModalFrame.attr("src", "/trafik_cezasi_init"), payRequestSuccess.show()) : (response.message && void 0 !== response.message && "" !== response.message ? errMsg = response.message : response.err_msg && void 0 !== response.err_msg && "" !== response.err_msg && (errMsg = response.err_msg), payRequestSuccess.hide(), payRequestError.html('<span class="text-danger">' + errMsg + "</span>").show())
					},
					error: function(err, exception) {
						var err_msg = app.errorHandlerFunc(err, exception);
						payRequestSuccess.hide(), payRequestError.html('<span class="text-danger">' + err_msg + "</span>").show()
					},
					complete: function() {
						payRequestLoading.hide(), $("body").css({
							"pointer-events": "all"
						})
					}
				})
			}
		}
		return 0 != currentIndex && form.valid() && $(".tp_declared_pay_query_field:visible").length < 1 || 0 != currentIndex && form.valid() && 0 < $(".tp_declared_pay_query_field:visible").length && "" !== traffic.recaptchaDeclaredKey || 0 == currentIndex && form.valid() && "" !== traffic.recaptchaKey
	}
};
window.addEventListener ? window.addEventListener("message", traffic.paymentListener, !1) : window.attachEvent("onmessage", traffic.paymentListener);
var index = {
		documentReady: function() {
			var inputContainer = $(".index-input-container");
			inputContainer.find(".remember-me-field").find("input[type=checkbox]").attr("id", "rememberMe-index"), inputContainer.find(".remember-me-field").find("label").attr("for", "rememberMe-index")
		}
	},
	app = {
		documentReady: function() {
			$(".dropdown-toggle").dropdown(), $('a[data-toggle="tooltip"]').tooltip({
				animated: "fade",
				placement: "top",
				html: !0
			}), $("body").tooltip({
				selector: "[data-toggle=tooltip]"
			}), $(".payment-form").validate({
				ignore: ".ignore",
				rules: {
					holder: {
						required: !0,
						withoutNumbers: !0,
						nameSurname: !0
					},
					showNumber: {
						required: !0,
						cardNumber: !0
					},
					showExpiry: {
						required: !0,
						minlength: 7,
						expiry: !0
					},
					cvc: {
						required: !0,
						minlength: 3,
						number: !0
					}
				},
				messages: {
					holder: {
						required: "Ad-soyad girin.",
						withoutNumbers: "Geçersiz ad-soyad!",
						nameSurname: "Geçersiz ad-soyad!"
					},
					showNumber: {
						required: "Kart numarası girin.",
						cardNumber: "Geçersiz kart numarası!"
					},
					showExpiry: {
						required: "Tarih girin.",
						minlength: "Eksik veri!",
						expiry: "Tarih geçersiz!"
					},
					cvc: {
						required: "Kod girin.",
						minlength: "Eksik veri!",
						number: "Kod geçersiz!"
					}
				}
			}), window.card = $(".payment-form").card({
				container: ".card-wrapper",
				formSelectors: {
					numberInput: "input[name=showNumber]",
					expiryInput: "input[name=showExpiry]",
					nameInput: "input[name=holder]"
				}
			}), $("#register-form").validate({
				ignore: ".ignore",
				rules: {
					name: {
						required: !0,
						minlength: 2,
						withoutNumbers: !0
					},
					surname: {
						required: !0,
						minlength: 2,
						withoutNumbers: !0
					},
					tckno: {
						required: !0,
						tckimlik: !0,
						minlength: 11,
						maxlength: 11
					},
					email: {
						required: !0,
						email: !0
					},
					pass: {
						required: !0
					},
					registerContract: {
						required: !0
					},
					hiddenRecaptcha: {
						required: function() {
							return "" == grecaptcha.getResponse()
						}
					}
				},
				messages: {
					name: {
						required: "Ad girin.",
						withoutNumbers: "Geçersiz ad!",
						nameSurname: "Geçersiz ad!"
					},
					surname: {
						required: "Soyad girin.",
						withoutNumbers: "Geçersiz soyad!",
						nameSurname: "Geçersiz soyad!"
					},
					tckno: {
						required: "T.C Kimlik no giriniz",
						tckimlik: "Geçersiz T.C. Kimlik no girdiniz.",
						minlength: "Eksik T.C. Kimlik no girdiniz.",
						maxlength: "Fazla T.C. Kimlik no girdiniz."
					},
					email: {
						required: "E-posta adresinizi giriniz.",
						email: "Geçersiz e-posta adresi girdiniz."
					},
					pass: "Åifre belirleyiniz.",
					registerContract: "Kabul etmeniz gerekmektedir",
					hiddenRecaptcha: "Doğrulama kodunu işaretleyiniz."
				},
				submitHandler: function(form) {
					form.submit()
				},
				errorPlacement: function(error, element) {
					"registerContract" === element.attr("name") ? error.appendTo("#registerContractError") : error.insertAfter(element)
				}
			}), $("#hgs-index .login-form").validate({
				rules: {
					email: {
						required: !0,
						email: !0
					},
					password: {
						required: !0
					}
				},
				messages: {
					email: {
						required: "LÃ¼tfen e-posta adresinizi girini.",
						email: "LÃ¼tfen geçerli bir e-posta adresi girin."
					},
					password: "LÃ¼tfen şifrenizi girin."
				}
			}), $("#login-modal .login-form").validate({
				rules: {
					email: {
						required: !0,
						email: !0
					},
					password: {
						required: !0
					}
				},
				messages: {
					email: {
						required: "LÃ¼tfen e-posta adresinizi girin.",
						email: "LÃ¼tfen geçerli bir e-posta adresi girin."
					},
					password: "LÃ¼tfen şifrenizi girin."
				}
			}), $("#hgs-index .forgotPwd").validate({
				ignore: ".ignore",
				rules: {
					passemail: {
						required: !0,
						email: !0
					}
				},
				messages: {
					passemail: {
						required: "E-posta adresi giriniz.",
						email: "Geçerli bir e-posta adresi giriniz."
					}
				}
			}), $("#login-modal .forgotPwd").validate({
				ignore: ".ignore",
				rules: {
					passemail: {
						required: !0,
						email: !0
					}
				},
				messages: {
					passemail: {
						required: "E-posta adresi giriniz.",
						email: "Geçerli bir e-posta adresi giriniz."
					}
				}
			}), $("#login-modal .forgotEmail").validate({
				ignore: ".ignore",
				rules: {
					identityNo: {
						required: !0,
						tckimlik: !0,
						minlength: 11,
						maxlength: 11
					}
				},
				messages: {
					identityNo: {
						required: "T.C Kimlik no giriniz",
						tckimlik: "Geçersiz T.C. Kimlik no girdiniz.",
						minlength: "Eksik T.C. Kimlik no girdiniz.",
						maxlength: "Fazla T.C. Kimlik no girdiniz."
					}
				}
			}), $("#hgs-index .forgotEmail").validate({
				ignore: ".ignore",
				rules: {
					identityNo: {
						required: !0,
						tckimlik: !0,
						minlength: 11,
						maxlength: 11
					}
				},
				messages: {
					identityNo: {
						required: "T.C Kimlik no giriniz",
						tckimlik: "Geçersiz T.C. Kimlik no girdiniz.",
						minlength: "Eksik T.C. Kimlik no girdiniz.",
						maxlength: "Fazla T.C. Kimlik no girdiniz."
					}
				}
			});
			var commentForm = $("#commentForm");
			0 < commentForm.length && commentForm.validate({
				rules: {
					iletisim_ad: {
						required: !0,
						minlength: 2
					},
					iletisim_soyad: {
						required: !0,
						minlength: 2
					},
					iletisim_email: {
						required: !0,
						email: !0
					},
					iletisim_tel: "required",
					iletisim_msg: {
						required: !0,
						minlength: 15
					}
				},
				messages: {
					iletisim_ad: {
						required: "Adınızı giriniz.",
						minlength: "Geçerli bir ad giriniz."
					},
					iletisim_soyad: {
						required: "Soyadınızı giriniz.",
						minlength: "Geçerli bir soyad giriniz."
					},
					iletisim_email: {
						required: "E-posta adresinizi giriniz.",
						email: "Geçerli bir e-posta adresi giriniz."
					},
					iletisim_tel: "Telefon numaranızı giriniz.",
					iletisim_msg: {
						required: "Mesajınızı giriniz",
						minlength: "Mesajınız en az 15 karakterden oluşmalıdır."
					}
				}
			});
			priorityNav.init({
				mainNavWrapper: ".nav-wrapper",
				mainNav: ".nav-ul",
				navDropdownLabel: "Menü",
				navDropdownBreakpointLabel: "Menü",
				navDropdownClassName: "nav__dropdown",
				navDropdownToggleClassName: "nav__dropdown-toggle"
			});
			jQuery.datetimepicker.setLocale("tr");
			var navContainer = $(".nav__dropdown-wrapper");
			navContainer.find("ul").find("li").length < 1 ? navContainer.hide() : navContainer.show(), $.each($("input[type=checkbox]"), function() {
				$(this).prop("checked") ? $(this).val("1") : $(this).val("0")
			}), $("body").delegate("input[type=checkbox]", "change", function() {
				$(this).prop("checked") ? $(this).val("1") : $(this).val("0")
			}), $(".hgs-login-password-input").keypress(function(e) {
				13 === (e.keyCode || e.which) && (e.preventDefault(), $(this).parents("form").find(".login-btn").trigger("click"))
			}), $(".hgs-learn-email-address").keypress(function(e) {
				13 === (e.keyCode || e.which) && (e.preventDefault(), $(this).parents("form").find(".forgot-email-send-button").trigger("click"))
			}), $(".hgs-refresh-email-address-input").keypress(function(e) {
				13 === (e.keyCode || e.which) && (e.preventDefault(), $(this).parents("form").find(".hgs-query-send-password-btn").trigger("click"))
			});
			var imageContainer = $(".image-container");
			$(".modal").on("show.bs.modal", function() {
				imageContainer.addClass("opened-info-modal")
			}).on("hide.bs.modal", function() {
				imageContainer.removeClass("opened-info-modal")
			}), $(".hgs-register-tckimlik").mask("99999999999"), $(".navbar-header").removeAttr("style"), jQuery.validator.addMethod("tckimlik", function(value, element) {
				return this.optional(element) || app.checkValidation("tckn", "tckimlik", value)
			}, jQuery.validator.format("Girilen T.C. kimlik no geçersiz.")), jQuery.validator.addMethod("withoutNumbers", function(value, element) {
				return this.optional(element) || app.textWithoutNumbers(value)
			}, jQuery.validator.format("Girilen isim geçersiz.")), jQuery.validator.addMethod("cardNumber", function(value, element) {
				return this.optional(element) || app.creditCardValidation(value)
			}, jQuery.validator.format("Kart numarası geçersiz.")), jQuery.validator.addMethod("nameSurname", function(value, element) {
				return this.optional(element) || app.nameSurnameValidation(value)
			}, jQuery.validator.format("Girilen isim geçersiz.")), jQuery.validator.addMethod("expiry", function(value, element) {
				return this.optional(element) || app.expiryValidation(value)
			}, jQuery.validator.format("Kartın son kullanma tarihi geçersiz.")), jQuery.validator.addMethod("email", function(value, element) {
				return this.optional(element) || app.checkValidEmail(value)
			}, jQuery.validator.format("E-posta adresi geçersiz.")), jQuery.validator.addMethod("tcOrTax", function(value, element) {
				var returnVal = !1;
				return value ? "tc" === $(".invoice-type.btn-fill").data("value") ? app.checkValidation("tckn", "tckimlik", value) && (returnVal = !0) : 10 === value.length && (returnVal = !0) : returnVal = !0, this.optional(element) || returnVal
			}, "Girdiğiniz değer geçerli değil."), 1 != parseInt(Cookies.get("isReadCookieWarning")) && $(".cookie-warning").show();
			var importantInformations = $(".important-informations");
			importantInformations.on("click", function() {
				importantInformations.find("ul").show()
			}), $(document).on("click", function(e) {
				0 === $(e.target).closest(".important-informations").length && importantInformations.find("ul").hide()
			});
			var privacyPolicyModal = $("#privacy-policy-footer-modal");
			$("#aydinlatma-metni-modal").on("show.bs.modal", function() {
				privacyPolicyModal.modal("hide")
			}).on("hidden.bs.modal", function() {
				privacyPolicyModal.modal("show")
			}), $("#acik-riza-metni-modal").on("show.bs.modal", function() {
				privacyPolicyModal.modal("hide")
			}).on("hidden.bs.modal", function() {
				privacyPolicyModal.modal("show")
			});
			var userInfoModal = $("#user-info-modal");
			userInfoModal.on("show.bs.modal", function() {
				userInfoModal.find(".ticket-field").length || app.getTicketList()
			}), $("#past-payments-modal").on("hidden.bs.modal", function() {
				userInfoModal.modal("show")
			}), $("#transitional-movements-modal").on("hidden.bs.modal", function() {
				userInfoModal.modal("show")
			});
			var currentNewDate = new Date,
				currentDate = currentNewDate.getFullYear() + "/" + (currentNewDate.getMonth() + 1) + "/" + currentNewDate.getDate();
			$(".past-payments-date-fields, .transitional-movements-date-fields").datetimepicker({
				format: "Y-m-d",
				timepicker: !1,
				maxDate: currentDate
			}), app.navResizeCheck()
		},
		domContentLoaded: function() {
			setTimeout(function() {
				window.dispatchEvent(new Event("resize"))
			}, 300), $("input[name=showExpiry]").mask("99 / 99")
		},
		getTicketList: function() {
			var ticketList = $(".ticket-list"),
				loading = $(".ticket-list-loading"),
				errorContainer = $(".ticket-list-error-container"),
				html = "",
				assetsUrl = $("#assets-url").val(),
				liClass = "",
				balanceField = "-",
				pastPaymentPassiveButtonAttr = "",
				pastPaymentPassiveClass = "";
			ticketList.hide(), loading.show(), $.ajax({
				method: "post",
				url: "/api/favtag",
				success: function(response) {
					if(!response.success) return errorContainer.html(response.err_msg || "Etiket listesi yÃ¼klenemedi. LÃ¼tfen daha sonra tekrar deneyin.").show(), loading.hide(), ticketList.hide(), !1;
					html = "<ul>", 1 === response.data.length && (liClass = "full-size"), $.each(response.data, function(k, v) {
						balanceField = v.balance && "***" !== v.balance ? v.balance + "â‚º" : "***", html += '<li class="' + liClass + '"><div class="ticket-name-surname">' + (v.nickname || "-") + '</div><div class="ticket-number">' + (v.ticket_number || "-") + '</div><div class="ticket-place-number">' + (v.plate_number || "-") + '</div><div class="ticket-balance">' + ("***" === balanceField ? "<span>Bakiye:</span>" : "") + balanceField + "</div>", pastPaymentPassiveClass = "***" === balanceField ? (pastPaymentPassiveButtonAttr = 'data-toggle="tooltip" data-title="pttavm.com\'a Ã¼ye olurken girdiğiniz T.C. Kimlik No yada Pasaport No ile sorguladığınız HGS Ã¼rÃ¼nÃ¼nÃ¼n bağlı olduğu T.C. Kimlik No / Pasaport No uyuşmamaktadır."', "passive-hgs-button") : pastPaymentPassiveButtonAttr = "", html += '<div class="ticket-buttons"><button type="button" class="btn btn-warning ' + pastPaymentPassiveClass + '"  ' + pastPaymentPassiveButtonAttr + "onclick=\"app.pastPayments('" + v.ticket_number + "', '" + v.plate_number + "', '" + balanceField + '\')"><img src="' + assetsUrl + 'images/ticket-back-arrow.png" />GEÃ‡MÄ°Å YÃœKLEMELERÄ°M</button>', html += "</li>"
					}), html += "</ul>", ticketList.html(html).show(), loading.hide(), errorContainer.hide()
				},
				error: function() {
					ticketList.hide(), loading.hide(), errorContainer.html("Etiket listesi yÃ¼klenemedi. LÃ¼tfen daha sonra tekrar deneyin.").show()
				}
			})
		},
		checkValidation: function(param, type, value) {
			if("tckimlik" === type && 11 !== value.length) return !1;
			var isValid, values = {};
			return values["params[" + param + "]"] = value, values.type = type, $.ajax({
				method: "POST",
				url: "/ajax/tc_kimlik_validation.php",
				async: !1,
				data: values
			}).done(function(data) {
				isValid = "Ok" == data.status
			}).fail(function() {
				isValid = !1
			}), isValid
		},
		navResizeCheck: function() {
			var ul = $(".nav__dropdown"),
				logged = parseInt($("input[name=logged]").val()),
				navContainer = $(".nav__dropdown-wrapper");
			$(window).width() < 480 && (ul.find(".operation_links").remove(), 1 === logged ? (ul.append('<li class="operation_links"><a id="btn-user hgs-query-user-info" data-toggle="modal" data-target="#user-info-modal" onclick="app.userInfo();">Hesap Bilgileri</a></li>'), ul.append('<li class="operation_links"><a href="/logout.php">Ã‡ıkış Yap</a></li>')) : ul.append('<li class="operation_links"><a href="#" data-toggle="modal" data-target="#register-modal">Ãœye Ol</a></li><li class="operation_links"><a href="#" data-toggle="modal" data-target="#login-modal">Giriş Yap</a></li>')), navContainer.find("ul").find("li").length < 1 ? navContainer.hide() : navContainer.show()
		},
		responsiveDatatable: function(className, func) {
			$.each($("." + className), function(k, v) {
				$(this).DataTable({
					responsive: !0,
					destroy: !0,
					columnDefs: [{
						className: "details-control",
						targets: [0]
					}, {
						className: "hgs-ticket-list-number",
						targets: [1]
					}, {
						className: "hgs-ticket-list-plate",
						targets: [2]
					}],
					language: {
						url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Turkish.json"
					},
					bPaginate: !1,
					bSort: !1,
					searching: !1,
					drawCallback: function(settings) {
						"function" == typeof func && func()
					},
					select: {
						style: "single",
						info: !1,
						selector: "td:not(.status)"
					}
				})
			})
		},
		creditCardValidation: function(value) {
			if(/[^0-9-\s]+/.test(value)) return !1;
			for(var nCheck = 0, nDigit = 0, bEven = !1, n = (value = value.replace(/\D/g, "")).length - 1; 0 <= n; n--) {
				var cDigit = value.charAt(n);
				nDigit = parseInt(cDigit, 10);
				bEven && 9 < (nDigit *= 2) && (nDigit -= 9), nCheck += nDigit, bEven = !bEven
			}
			return nCheck % 10 == 0
		},
		register: function() {
			var form = $("#register-form"),
				loader = $(".hgs-query-register-loading"),
				success = $(".hgs-query-register-success");
			if(form.valid()) {
				form.addClass("disabled_register_form"), loader.show(), $.each($(".register-form-error"), function() {
					$(this).hide()
				}), $.each($(".register-form-error-input"), function() {
					$(this).removeClass("error")
				});
				$.ajax({
					type: "POST",
					dataType: "json",
					data: form.serialize(),
					url: "https://www.pttavm.com/base/hgsapi/newhgsmember",
					success: function(data) {
						data.success ? (form.hide(), $(".register-verified-email").html(form.find("input[name=email]").val()), success.show(), $("#register-btn").hide(), $("#register-modal-close-btn").removeClass("pull-left"), $("#register-modal").off("hidden.bs.modal").on("hidden.bs.modal", function(e) {
							location.reload()
						})) : toastr.error(data.message || "Bir sorun oluştu, lÃ¼tfen tekrar deneyin.")
					},
					error: function(err, exception) {
						toastr.error(app.errorHandlerFunc(err, exception))
					},
					complete: function() {
						form.removeClass("disabled_register_form"), loader.hide()
					}
				})
			}
		},
		login: function(that) {
			var form = that.parents("form"),
				title = $("#hgs-index .wizard-header"),
				btn3 = $(".login-btn"),
				info = $(".index-info"),
				loader = $(".login-page-loader");
			form.valid() && (form.addClass("disabled-content"), title.addClass("disabled-content"), btn3.addClass("disabled-content"), info.addClass("disabled-content"), loader.show(), $("body").css({
				"pointer-events": "none"
			}), $.ajax({
				type: "GET",
				data: form.serialize(),
				url: "/api/login",
				dataType: "json",
				success: function(data) {
					data.success ? (toastr.success(data.message), location.reload()) : void 0 !== data.redirect_url && "" !== data.redirect_url ? (window.location.href = data.redirect_url, toastr.info(data.message)) : toastr.error(data.message)
				},
				error: function(err, exception) {
					var err_msg = app.errorHandlerFunc(err, exception);
					toastr.error(err_msg)
				},
				complete: function() {
					$("body").css({
						"pointer-events": "all"
					}), form.removeClass("disabled-content"), title.removeClass("disabled-content"), btn3.removeClass("disabled-content"), info.removeClass("disabled-content"), loader.hide()
				}
			}))
		},
		forgotPassword: function(that) {
			var form = that.parents("form"),
				title = $("#hgs-index .wizard-header"),
				info = $(".index-info"),
				btn = $("#hgs-index .hgs-query-back-login-btn"),
				btn2 = $("#hgs-index .hgs-query-send-password-btn"),
				loader = $(".login-page-loader"),
				emailBtn = "";
			form.valid() && (loader.show(), form.addClass("disabled-content"), title.addClass("disabled-content"), info.addClass("disabled-content"), btn.addClass("disabled-content"), btn2.addClass("disabled-content"), $("body").css({
				"pointer-events": "none"
			}), $.ajax({
				url: "/api/forgotpwd",
				type: "GET",
				dataType: "json",
				data: form.serialize(),
				success: function(data) {
					if($("body").css({
							"pointer-events": "auto"
						}), !data.success) return void 0 !== data.email_found && 0 === data.email_found ? swal({
						title: "Bilgi",
						html: "Bu e-posta adresi ile kayıtlı bir hesap bulunmamaktadır. Mail adresinizi hatırlamıyorsanız, mail adreslerinizi T.C. kimlik numaranız yardımıyla Ã¶ğrenmek ister misiniz?",
						type: "info",
						showCancelButton: !0,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Evet",
						cancelButtonText: "Hayır"
					}).then(function() {
						emailBtn = $("#login-modal").is(":visible") ? $("#login-modal").find(".hgs-query-next-login-btn") : $("#hgs-index").find(".hgs-query-next-login-btn"), app.showEmailListByTcNo($(emailBtn))
					}) : toastr.error(data.message), !1;
					toastr.success(data.message)
				},
				complete: function() {
					$("body").css({
						"pointer-events": "auto"
					}), loader.hide(), form.removeClass("disabled-content"), title.removeClass("disabled-content"), info.removeClass("disabled-content"), btn.removeClass("disabled-content"), btn2.removeClass("disabled-content")
				}
			}))
		},
		showForgetPassword: function(that) {
			that.parents(".login-container").find(".forgot-email-list-container").hide(), that.parents(".login-container").hasClass("modal-body") && $("#login-modal h5.modal-title").html("Åifremi Unuttum"), that.parents(".login-container ").find(".login-form").hide(), that.parents(".login-container ").find(".password-forget-container").show(), that.parents(".login-container ").find(".hgs-query-send-password-btn").show(), that.parents(".login-container ").find(".hgs-query-back-login-btn").show(), that.parents(".login-container ").find(".login-btn").hide(), that.parents(".login-container ").find(".password-forget-container-email-list").hide()
		},
		hideForgetPassword: function(that) {
			that.parents(".login-container").find(".forgot-email-list-container").hide(), that.parents(".login-container").hasClass("modal-body") && $("#login-modal h5.modal-title").html("Giriş Yap"), that.parents(".login-container ").find(".login-form").show(), that.parents(".login-container ").find(".password-forget-container").hide(), that.parents(".login-container ").find(".hgs-query-send-password-btn").hide(), that.parents(".login-container ").find(".hgs-query-back-login-btn").hide(), that.parents(".login-container ").find(".login-btn").show(), that.parents(".login-container ").find(".password-forget-container-email-list").hide()
		},
		showEmailListByTcNo: function(that) {
			that.parents(".login-container ").find(".password-forget-container").hide(), that.parents(".login-container ").find(".password-forget-container-email-list").show(), that.parents(".login-container ").find(".forgot-email-send-button").show()
		},
		forgotEmailAddress: function(that) {
			var buttonHtml = that.html(),
				form = that.parents("form"),
				ulContainer = that.parents(".login-container").find(".forgot-email-list-container"),
				ul = ulContainer.find(".forgot-email-list"),
				li = "";
			form.valid() && (that.html("LÄ°STELENÄ°YOR...").css({
				opacity: "0.8"
			}), $("body").css({
				"pointer-events": "none"
			}), $.ajax({
				url: "/api/forgotemail",
				type: "GET",
				dataType: "json",
				data: form.serialize(),
				success: function(response) {
					if(!response.success) return toastr.error(response.err_msg), ulContainer.hide(), !1;
					void 0 !== response.data.emails && 0 < response.data.emails.length ? ($.each(response.data.emails, function(k, v) {
						li += "<div>" + v + "</div>"
					}), ul.html(li), ulContainer.show(), $(".forgot-email-send-button").hide(), toastr.success("Girilen T.C. kimlik numarası ile kayıtlı e-posta adresleri listelendi.")) : (toastr.error("Girilen T.C. kimlik numarası ile kayıtlı e-posta adresi mevcut değildir."), ulContainer.hide())
				},
				error: function() {
					toastr.error("Bir sorun oluştu, lÃ¼tfen tekrar deneyin."), ulContainer.hide()
				},
				complete: function() {
					that.html(buttonHtml).css({
						opacity: "1"
					}), $("body").css({
						"pointer-events": "all"
					})
				}
			}))
		},
		forgotEmailTcKeyup: function() {
			$(".forgot-email-send-button").show()
		},
		userInfo: function() {
			var loader = $(".hgs-query-info-loader");
			$.ajax({
				url: "/api/commission&user=" + $("#get_user_id").val(),
				type: "POST",
				dataType: "json",
				beforeSend: function() {
					loader.show()
				},
				success: function(obj) {
					var price = obj.price,
						minus = obj.minus;
					price < 100 && $("#user-info-modal .user-info-container ").find(".hgs-query-user-info-shopping").show(), $("#user-info-modal .user-info-container .history-price").html(price + "â‚º"), $("#user-info-modal .user-info-container .free-shopping-price").html(minus + "â‚º")
				},
				complete: function() {
					loader.hide()
				}
			})
		},
		errorHandlerFunc: function(jqXHR, exception) {
			return 0 === jqXHR.status ? "HGS sistemine bağlanılamadı. LÃ¼tfen tekrar deneyiniz" : 404 == jqXHR.status ? "Sayfa bulunamadı" : 500 == jqXHR.status ? "HGS sistemine bağlanılamadı. Kısa bir sÃ¼re sonra tekrar deneyiniz" : "parsererror" === exception ? "Veri işlenemedi. LÃ¼tfen tekrar deneyiniz." : "timeout" === exception ? "HGS sistemine bağlanılamadı. LÃ¼tfen tekrar deneyiniz" : "abort" !== exception && "Bir hata oluştu. LÃ¼tfen tekrar deneyiniz. "
		},
		continueWithoutRegister: function(that) {
			var form = that.parents(".login-form"),
				title = $("#hgs-index .wizard-header"),
				btn2 = $(".index-continue-without-register-btn"),
				btn3 = $(".login-btn"),
				info = $(".index-info");
			form.addClass("disabled-content"), title.addClass("disabled-content"), btn2.addClass("disabled-content"), btn3.addClass("disabled-content"), info.addClass("disabled-content"), $("body").css({
				"pointer-events": "none"
			}), $.ajax({
				url: "/api/notmember",
				type: "POST",
				dataType: "json",
				data: "control=1",
				success: function(result) {
					location.reload()
				}
			})
		},
		sendComment: function(that) {
			var form = $("#commentForm"),
				modal = $("#comment-modal");
			form.valid() && (that.html("GÃ¶nderiliyor"), that.css({
				opacity: "0.7"
			}), $("body").css({
				"pointer-events": "none"
			}), $.ajax({
				url: "/api/contactsend",
				type: "POST",
				dataType: "json",
				data: form.serialize(),
				success: function(response) {
					if(!response.success) return toastr.error(response.message), !1;
					form.trigger("reset"), modal.modal("hide"), toastr.success("Geri bildiriminiz için teşekkÃ¼r ederiz.")
				},
				error: function(err, exception) {
					var err_msg = app.errorHandlerFunc(err, exception);
					toastr.error(err_msg)
				},
				complete: function() {
					that.html("GÃ¶nder"), that.css({
						opacity: "1"
					}), $("body").css({
						"pointer-events": "all"
					})
				}
			}))
		},
		textWithoutNumbers: function(text) {
			return /^[a-zA-ZÃ Ã¡Ã¢Ã¤Ã£Ã¥Ä…ÄÄ‡Ä™Ã¨Ã©ÃªÃ«Ä—Ä¯Ã¬Ã­Ã®Ã¯Å‚Å„Ã²Ã³Ã´Ã¶ÃµÃ¸Ã¹ÃºÃ»Ã¼Å³Å«Ã¿Ã½Å¼ÅºÃ±çÄÅ¡Å¾Ã€ÃÃ‚Ã„ÃƒÃ…Ä„Ä†ÄŒÄ–Ä˜ÃˆÃ‰ÃŠÃ‹ÃŒÃÃÃÄ®ÅÅƒÃ’Ã“Ã”ÖÃ•Ã˜Ã™ÃšÃ›ÃœÅ²ÅªÅ¸ÃÅ»Å¹Ã‘ÃŸÃ‡Å’Ã†ÄŒÅ Å½âˆ‚Ã°ğışÄ°ÄÅ ,.'-]+$/u.test(text)
		},
		nameSurnameValidation: function(nameSurname) {
			var arr = $.trim(nameSurname).split(/ +/),
				returnVariable = !0;
			return arr.length < 2 && (returnVariable = !1), $.each(arr, function(k, v) {
				if(v.length < 2) return returnVariable = !1
			}), returnVariable
		},
		expiryValidation: function(expiry) {
			var arr = expiry.replace(/ /g, "").split("/"),
				d = new Date,
				month = d.getMonth(),
				year = d.getFullYear(),
				nowDate = new Date(year, month, 1),
				yearPrefix = year.toString().slice(0, 2),
				date = new Date(yearPrefix + arr[1], arr[0] - 1, 1);
			return !(arr[0] < 1 || 12 < arr[0]) && (2 === arr[0].length && 2 === arr[1].length && nowDate <= date)
		},
		setHoverImage: function(that, image) {
			that.find("img").attr("src", image)
		},
		clearToastr: function() {
			toastr.clear(), $("#toast-container").remove()
		},
		checkValidEmail: function(emailAddress) {
			return /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(emailAddress)
		},
		hideModal: function() {
			$(".modal").modal("hide")
		},
		closeCookieWarning: function() {
			var container = $(".cookie-warning");
			Cookies.set("isReadCookieWarning", 1), container.fadeOut(250)
		},
		checkContractChecked: function(input) {
			var msg = input.parents(".panel-contract-container").find(".contract-not-checked-msg");
			input.prop("checked") ? msg.hide() : msg.show()
		},
		pastPayments: function(ticketNumber, plateNumber, balance) {
			if("***" === balance) return !1;
			var userInfoModal = $("#user-info-modal"),
				pastPaymentsModal = $("#past-payments-modal"),
				modalBody = pastPaymentsModal.find(".modal-body");
			userInfoModal.modal("hide"), pastPaymentsModal.modal("show"), pastPaymentsModal.find("#past-payments-ticket-number").val(ticketNumber), modalBody.find(".past-payments-data").html("").hide(), modalBody.find(".past-payments-error-container").html("").hide(), modalBody.find(".past-payments-loading").hide(), $(".past-payment-ticket-number span").html(ticketNumber), $(".past-payment-plate-number span").html(plateNumber), $(".past-payment-balance span").html(balance)
		},
		transitionalMovements: function(ticketNumber, plateNumber, balance) {
			var userInfoModal = $("#user-info-modal"),
				transitionalMovementsModal = $("#transitional-movements-modal"),
				modalBody = transitionalMovementsModal.find(".modal-body");
			userInfoModal.modal("hide"), transitionalMovementsModal.modal("show"), transitionalMovementsModal.find("#transitional-movements-ticket-number").val(ticketNumber), modalBody.find(".transitional-movements-data").html("").hide(), modalBody.find(".transitional-movements-error-container").html("").hide(), modalBody.find(".transitional-movements-loading").hide(), $(".transitional-movements-ticket-number span").html(ticketNumber), $(".transitional-movements-plate-number span").html(plateNumber), $(".transitional-movements-balance span").html(balance + "â‚º")
		},
		getPastPayments: function() {
			var modalBody = $("#past-payments-modal").find(".modal-body"),
				ticketNumber = modalBody.find("#past-payments-ticket-number").val(),
				loading = modalBody.find(".past-payments-loading"),
				pastPaymentsContainer = $(".past-payments-data"),
				errorContainer = $(".past-payments-error-container"),
				html = "",
				startDate = $(".past-payment-start-date input"),
				endDate = $(".past-payment-end-date input"),
				date = new Date,
				dateSelect = $(".select-past-payments-date-container select");
			if(!dateSelect.val()) return toastr.error("LÃ¼tfen tarih seçimi yapın."), !1;
			var currentNewDate = new Date,
				currentDate = currentNewDate.getFullYear() + "-" + (currentNewDate.getMonth() + 1 < 10 ? "0" : "") + (currentNewDate.getMonth() + 1) + "-" + currentNewDate.getDate(),
				data = {
					user_id: $("#get_user_id").val(),
					ticket_number: ticketNumber,
					start_date: "",
					end_date: ""
				};
			switch(data.end_date = currentDate, dateSelect.val()) {
				case "today":
					data.start_date = currentDate;
					break;
				case "week":
					(date = new Date).setDate(date.getDate() - 7), data.start_date = date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1) + "-" + date.getDate();
					break;
				case "month":
					(date = new Date).setDate(date.getDate() - 30), data.start_date = date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1) + "-" + date.getDate();
					break;
				case "last_3_month":
					(date = new Date).setDate(date.getDate() - 90), data.start_date = date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1) + "-" + date.getDate();
					break;
				case "year":
					(date = new Date).setDate(date.getDate() - 365), data.start_date = date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1) + "-" + date.getDate();
					break;
				case "date":
					data.start_date = startDate.val(), data.end_date = endDate.val()
			}
			data.start_date = data.start_date + " 00:00:00", data.end_date = data.end_date + " 23:59:59", $("body").css({
				pointerEvents: "none"
			}), loading.show(), pastPaymentsContainer.hide(), errorContainer.hide(), $.ajax({
				method: "post",
				url: "/api/mylastload",
				data: data,
				success: function(response) {
					if(!response.success) return errorContainer.html(response.err_msg || "Etiket listesi yÃ¼klenemedi. LÃ¼tfen daha sonra tekrar deneyin.").show(), loading.hide(), pastPaymentsContainer.hide(), !1;
					html = "<ul>", response.data.length ? $.each(response.data, function(k, v) {
						html += '<li><div class="past-payments-amount">' + v.amount + 'â‚º</div><div class="past-payments-date">' + v.date + '</div><div class="past-payments-name-surname">' + v.name_surname + '</div><div class="past-payments-payment-type">Ödeme Tipi: <span>' + ("credit_card" === v.payment_type ? "Kredi Kartı" : "Havale/EFT") + "</span></div>", html += "</li>"
					}) : (console.log("heree"), html += '<li class="past-payments-not-found">Kayıt bulunamadı.</li>'), html += "</ul>", pastPaymentsContainer.html(html).show(), loading.hide(), errorContainer.hide()
				},
				error: function() {
					pastPaymentsContainer.hide(), loading.hide(), errorContainer.html("Etiket listesi yÃ¼klenemedi. LÃ¼tfen daha sonra tekrar deneyin.").show()
				},
				complete: function() {
					$("body").css({
						pointerEvents: "all"
					})
				}
			})
		},
		getTransitionalMovements: function() {
			var modalBody = $("#transitional-movements-modal").find(".modal-body"),
				ticketNumber = modalBody.find("#transitional-movements-ticket-number").val(),
				loading = modalBody.find(".transitional-movements-loading"),
				transitionalMovementsContainer = $(".transitional-movements-data"),
				errorContainer = $(".transitional-movements-error-container"),
				html = "",
				startDate = $(".transitional-movements-start-date input"),
				endDate = $(".transitional-movements-end-date input"),
				date = new Date,
				dateSelect = $(".select-transitional-movements-date-container select");
			if(!dateSelect.val()) return toastr.error("LÃ¼tfen tarih seçimi yapın."), !1;
			var currentNewDate = new Date,
				currentDate = currentNewDate.getFullYear() + "-" + (currentNewDate.getMonth() + 1 < 10 ? "0" : "") + (currentNewDate.getMonth() + 1) + "-" + currentNewDate.getDate(),
				data = {
					user_id: $("#get_user_id").val(),
					ticket_number: ticketNumber,
					start_date: "",
					end_date: ""
				};
			switch(data.end_date = currentDate, dateSelect.val()) {
				case "today":
					data.start_date = currentDate;
					break;
				case "week":
					(date = new Date).setDate(date.getDate() - 7), data.start_date = date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1) + "-" + date.getDate();
					break;
				case "month":
					(date = new Date).setDate(date.getDate() - 30), data.start_date = date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1) + "-" + date.getDate();
					break;
				case "last_3_month":
					(date = new Date).setDate(date.getDate() - 90), data.start_date = date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1) + "-" + date.getDate();
					break;
				case "year":
					(date = new Date).setDate(date.getDate() - 365), data.start_date = date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1) + "-" + date.getDate();
					break;
				case "date":
					data.start_date = startDate.val(), data.end_date = endDate.val()
			}
			data.start_date = data.start_date + " 00:00:00", data.end_date = data.end_date + " 23:59:59", $("body").css({
				pointerEvents: "none"
			}), loading.show(), transitionalMovementsContainer.hide(), errorContainer.hide(), $.ajax({
				method: "get",
				url: "/gecisler_response.json",
				data: data,
				success: function(response) {
					if(!response.success) return errorContainer.html(response.err_msg || "Etiket listesi yÃ¼klenemedi. LÃ¼tfen daha sonra tekrar deneyin.").show(), loading.hide(), transitionalMovementsContainer.hide(), !1;
					html = "<ul>", $.each(response.data, function(k, v) {
						html += '<li><div class="transitional-movements-road">' + v.road + '</div><div class="transitional-movements-amount">' + v.amount + 'â‚º</div><div class="transition-movements-location transition-movements-entry-location"><img src="' + $("#assets-url").val() + 'images/ticket-in.png" /><div class="transitional-movements-content"><h5>' + v.entry_location.location + '</h5><span class="transitional-movements-strip">' + v.entry_location.strip + '</span><span class="transitional-movements-date">' + v.entry_location.date + '</span></div></div><div class="transition-movements-location transition-movements-exit-location"><img src="' + $("#assets-url").val() + 'images/ticket-out.png" /><div class="transitional-movements-content"><h5>' + v.exit_location.location + '</h5><span class="transitional-movements-strip">' + v.exit_location.strip + '</span><span class="transitional-movements-date">' + v.exit_location.date + "</span></div></div>", html += "</li>"
					}), html += "</ul>", transitionalMovementsContainer.html(html).show(), loading.hide(), errorContainer.hide()
				},
				error: function() {
					transitionalMovementsContainer.hide(), loading.hide(), errorContainer.html("Etiket listesi yÃ¼klenemedi. LÃ¼tfen daha sonra tekrar deneyin.").show()
				},
				complete: function() {
					$("body").css({
						pointerEvents: "all"
					})
				}
			})
		},
		changePastPaymentsDate: function(that) {
			var dateContainer = $(".select-past-payments-date");
			"date" === that.val() ? dateContainer.show() : dateContainer.hide()
		},
		changeTransitionalMovementsDate: function(that) {
			var dateContainer = $(".select-transitional-movements-date");
			"date" === that.val() ? dateContainer.show() : dateContainer.hide()
		}
	};

function recaptchaCallback(response) {
	$("#hiddenRecaptcha-error").hide()
}
var kmMuayeneIframeLoadedCount = 0,
	kmMuayeneIframe = $("#kmMuayeneIframe");

function recaptchaCallbackFunction() {
	$(".recaptcha-callback-not-valid-msg").hide()
}
kmMuayeneIframe.on("load", function() {
	0 < kmMuayeneIframeLoadedCount ? kmMuayeneIframe.css({
		background: "#fff"
	}) : kmMuayeneIframe.css({
		background: "#3a3a3a"
	}), kmMuayeneIframeLoadedCount++
});