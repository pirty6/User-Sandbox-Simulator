/*! For license information please see main.907d861d.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          o = n(853);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          h = {},
          p = {};
        function g(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new g(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new g(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new g(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new g(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new g(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new g(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, n, r) {
          var o = m.hasOwnProperty(t) ? m[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(h, e) &&
                      (f.test(e) ? (p[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
                ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
                : ((t = o.attributeName),
                  (r = o.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (o = o.type) || (4 === o && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, b);
            m[t] = new g(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, b);
              m[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, b);
            m[t] = new g(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new g(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          B = Symbol.for("react.profiler"),
          z = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          E = Symbol.for("react.suspense"),
          P = Symbol.for("react.suspense_list"),
          j = Symbol.for("react.memo"),
          T = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var R = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var F = Symbol.iterator;
        function D(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (F && e[F]) || e["@@iterator"])
              ? e
              : null;
        }
        var I,
          O = Object.assign;
        function q(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var L = !1;
        function A(e, t) {
          if (!e || L) return "";
          L = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var o = c.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var s = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (L = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? q(e) : "";
        }
        function M(e) {
          switch (e.tag) {
            case 5:
              return q(e.type);
            case 16:
              return q("Lazy");
            case 13:
              return q("Suspense");
            case 19:
              return q("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = A(e.type, !1));
            case 11:
              return (e = A(e.type.render, !1));
            case 1:
              return (e = A(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case x:
              return "Portal";
            case B:
              return "Profiler";
            case _:
              return "StrictMode";
            case E:
              return "Suspense";
            case P:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case z:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case j:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case T:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function U(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return O({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Q(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = U(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && y(e, "checked", t, !1);
        }
        function Y(e, t) {
          J(e, t);
          var n = U(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, U(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + U(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return O({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: U(n) };
        }
        function ae(e, t) {
          var n = U(t.value),
            r = U(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var he = {
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
          pe = ["Webkit", "ms", "Moz", "O"];
        function ge(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
                "number" !== typeof t ||
                0 === t ||
                (he.hasOwnProperty(e) && he[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = ge(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(he).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (he[t] = he[e]);
          });
        });
        var ve = O(
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
          },
        );
        function be(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Se = null,
          _e = null;
        function Be(e) {
          if ((e = wo(e))) {
            if ("function" !== typeof xe) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = xo(t)), xe(e.stateNode, e.type, t));
          }
        }
        function ze(e) {
          Se ? (_e ? _e.push(e) : (_e = [e])) : (Se = e);
        }
        function Ce() {
          if (Se) {
            var e = Se,
              t = _e;
            if (((_e = Se = null), Be(e), t))
              for (e = 0; e < t.length; e++) Be(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function Ee() {}
        var Pe = !1;
        function je(e, t, n) {
          if (Pe) return e(t, n);
          Pe = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (Pe = !1), (null !== Se || null !== _e) && (Ee(), Ce());
          }
        }
        function Te(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xo(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Re = !1;
        if (u)
          try {
            var Fe = {};
            Object.defineProperty(Fe, "passive", {
              get: function () {
                Re = !0;
              },
            }),
              window.addEventListener("test", Fe, Fe),
              window.removeEventListener("test", Fe, Fe);
          } catch (ue) {
            Re = !1;
          }
        function De(e, t, n, r, o, a, i, l, s) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Ie = !1,
          Oe = null,
          qe = !1,
          Le = null,
          Ae = {
            onError: function (e) {
              (Ie = !0), (Oe = e);
            },
          };
        function Me(e, t, n, r, o, a, i, l, s) {
          (Ie = !1), (Oe = null), De.apply(Ae, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ue(e) {
          if (He(e) !== e) throw Error(a(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return Ue(o), e;
                    if (i === r) return Ue(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = o.unstable_scheduleCallback,
          Xe = o.unstable_cancelCallback,
          Ge = o.unstable_shouldYield,
          Qe = o.unstable_requestPaint,
          Je = o.unstable_now,
          Ye = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? (r = dt(l)) : 0 !== (a &= i) && (r = dt(a));
          } else 0 !== (i = n & ~o) ? (r = dt(i)) : 0 !== a && (r = dt(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function ht(e, t) {
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
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function gt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function bt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var yt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          xt,
          St,
          _t,
          Bt,
          zt = !1,
          Ct = [],
          Nt = null,
          Et = null,
          Pt = null,
          jt = new Map(),
          Tt = new Map(),
          Rt = [],
          Ft =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function Dt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              Et = null;
              break;
            case "mouseover":
            case "mouseout":
              Pt = null;
              break;
            case "pointerover":
            case "pointerout":
              jt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Tt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Ot(e) {
          var t = yo(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Bt(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function qt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Lt(e, t, n) {
          qt(e) && n.delete(t);
        }
        function At() {
          (zt = !1),
            null !== Nt && qt(Nt) && (Nt = null),
            null !== Et && qt(Et) && (Et = null),
            null !== Pt && qt(Pt) && (Pt = null),
            jt.forEach(Lt),
            Tt.forEach(Lt);
        }
        function Mt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            zt ||
              ((zt = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, At)));
        }
        function Ht(e) {
          function t(t) {
            return Mt(t, e);
          }
          if (0 < Ct.length) {
            Mt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Mt(Nt, e),
              null !== Et && Mt(Et, e),
              null !== Pt && Mt(Pt, e),
              jt.forEach(t),
              Tt.forEach(t),
              n = 0;
            n < Rt.length;
            n++
          )
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
            Ot(n), null === n.blockedOn && Rt.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Ut = !0;
        function Vt(e, t, n, r) {
          var o = yt,
            a = Wt.transition;
          Wt.transition = null;
          try {
            (yt = 1), Kt(e, t, n, r);
          } finally {
            (yt = o), (Wt.transition = a);
          }
        }
        function $t(e, t, n, r) {
          var o = yt,
            a = Wt.transition;
          Wt.transition = null;
          try {
            (yt = 4), Kt(e, t, n, r);
          } finally {
            (yt = o), (Wt.transition = a);
          }
        }
        function Kt(e, t, n, r) {
          if (Ut) {
            var o = Gt(e, t, n, r);
            if (null === o) Ur(e, t, r, Xt, n), Dt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Nt = It(Nt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Et = It(Et, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Pt = It(Pt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return jt.set(a, It(jt.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      Tt.set(a, It(Tt.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Dt(e, r), 4 & t && -1 < Ft.indexOf(e))) {
              for (; null !== o; ) {
                var a = wo(o);
                if (
                  (null !== a && kt(a),
                  null === (a = Gt(e, t, n, r)) && Ur(e, t, r, Xt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Ur(e, t, r, null, n);
          }
        }
        var Xt = null;
        function Gt(e, t, n, r) {
          if (((Xt = null), null !== (e = yo((e = ke(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Qt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ye()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Yt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Yt,
            r = n.length,
            o = "value" in Jt ? Jt.value : Jt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Zt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            O(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          sn,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = on(cn),
          dn = O({}, cn, { view: 0, detail: 0 }),
          fn = on(dn),
          hn = O({}, dn, {
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
            getModifierState: Bn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((an = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = an = 0),
                    (sn = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          pn = on(hn),
          gn = on(O({}, hn, { dataTransfer: 0 })),
          mn = on(O({}, dn, { relatedTarget: 0 })),
          vn = on(
            O({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          bn = O({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yn = on(bn),
          wn = on(O({}, cn, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Bn() {
          return _n;
        }
        var zn = O({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? xn[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Bn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          Cn = on(zn),
          Nn = on(
            O({}, hn, {
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
          ),
          En = on(
            O({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Bn,
            }),
          ),
          Pn = on(
            O({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          jn = O({}, hn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tn = on(jn),
          Rn = [9, 13, 27, 32],
          Fn = u && "CompositionEvent" in window,
          Dn = null;
        u && "documentMode" in document && (Dn = document.documentMode);
        var In = u && "TextEvent" in window && !Dn,
          On = u && (!Fn || (Dn && 8 < Dn && 11 >= Dn)),
          qn = String.fromCharCode(32),
          Ln = !1;
        function An(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Rn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Mn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
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
        function Un(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          ze(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          Kn = null;
        function Xn(e) {
          qr(e, 0);
        }
        function Gn(e) {
          if (K(ko(e))) return e;
        }
        function Qn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (u) {
          var Yn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Yn = Zn;
          } else Yn = !1;
          Jn = Yn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (Kn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Kn)) {
            var t = [];
            Vn(t, Kn, e, ke(e)), je(Xn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Kn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Kn);
        }
        function ar(e, t) {
          if ("click" === e) return Gn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !lr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && hr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = ur(n, a));
                var i = ur(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var gr = u && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          vr = null,
          br = null,
          yr = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          yr ||
            null == mr ||
            mr !== X(r) ||
            ("selectionStart" in (r = mr) && hr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (br && sr(br, r)) ||
              ((br = r),
              0 < (r = $r(vr, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          _r = {};
        function Br(e) {
          if (Sr[e]) return Sr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (Sr[e] = n[t]);
          return e;
        }
        u &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var zr = Br("animationend"),
          Cr = Br("animationiteration"),
          Nr = Br("animationstart"),
          Er = Br("transitionend"),
          Pr = new Map(),
          jr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Tr(e, t) {
          Pr.set(e, t), s(t, [e]);
        }
        for (var Rr = 0; Rr < jr.length; Rr++) {
          var Fr = jr[Rr];
          Tr(Fr.toLowerCase(), "on" + (Fr[0].toUpperCase() + Fr.slice(1)));
        }
        Tr(zr, "onAnimationEnd"),
          Tr(Cr, "onAnimationIteration"),
          Tr(Nr, "onAnimationStart"),
          Tr("dblclick", "onDoubleClick"),
          Tr("focusin", "onFocus"),
          Tr("focusout", "onBlur"),
          Tr(Er, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var Dr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Ir = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Dr),
          );
        function Or(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, s, c) {
              if ((Me.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(a(198));
                var u = Oe;
                (Ie = !1), (Oe = null), qe || ((qe = !0), (Le = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function qr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), s !== a && o.isPropagationStopped()))
                    break e;
                  Or(o, l, c), (a = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (c = l.currentTarget),
                    (l = l.listener),
                    s !== a && o.isPropagationStopped())
                  )
                    break e;
                  Or(o, l, c), (a = s);
                }
            }
          }
          if (qe) throw ((e = Le), (qe = !1), (Le = null), e);
        }
        function Lr(e, t) {
          var n = t[mo];
          void 0 === n && (n = t[mo] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Ar(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Mr = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Mr]) {
            (e[Mr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ir.has(t) || Ar(t, !1, e), Ar(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Mr] || ((t[Mr] = !0), Ar("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Qt(t)) {
            case 1:
              var o = Vt;
              break;
            case 4:
              o = $t;
              break;
            default:
              o = Kt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Re ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
                ? e.addEventListener(t, n, { passive: o })
                : e.addEventListener(t, n, !1);
        }
        function Ur(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === o ||
                        (8 === s.nodeType && s.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = yo(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          je(function () {
            var r = a,
              o = ke(n),
              i = [];
            e: {
              var l = Pr.get(e);
              if (void 0 !== l) {
                var s = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Cn;
                    break;
                  case "focusin":
                    (c = "focus"), (s = mn);
                    break;
                  case "focusout":
                    (c = "blur"), (s = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = gn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = En;
                    break;
                  case zr:
                  case Cr:
                  case Nr:
                    s = vn;
                    break;
                  case Er:
                    s = Pn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Tn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = yn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Nn;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== l ? l + "Capture" : null) : l;
                u = [];
                for (var h, p = r; null !== p; ) {
                  var g = (h = p).stateNode;
                  if (
                    (5 === h.tag &&
                      null !== g &&
                      ((h = g),
                      null !== f &&
                        null != (g = Te(p, f)) &&
                        u.push(Vr(p, g, h))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < u.length &&
                  ((l = new s(l, c, null, n, o)),
                  i.push({ event: l, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!yo(c) && !c[go])) &&
                  (s || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  s
                    ? ((s = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? yo(c)
                          : null) &&
                        (c !== (d = He(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((u = pn),
                  (g = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Nn),
                    (g = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == s ? l : ko(s)),
                  (h = null == c ? l : ko(c)),
                  ((l = new u(g, p + "leave", s, n, o)).target = d),
                  (l.relatedTarget = h),
                  (g = null),
                  yo(o) === r &&
                    (((u = new u(f, p + "enter", c, n, o)).target = h),
                    (u.relatedTarget = d),
                    (g = u)),
                  (d = g),
                  s && c)
                )
                  e: {
                    for (f = c, p = 0, h = u = s; h; h = Kr(h)) p++;
                    for (h = 0, g = f; g; g = Kr(g)) h++;
                    for (; 0 < p - h; ) (u = Kr(u)), p--;
                    for (; 0 < h - p; ) (f = Kr(f)), h--;
                    for (; p--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = Kr(u)), (f = Kr(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== s && Xr(i, l, s, u, !1),
                  null !== c && null !== d && Xr(i, d, c, u, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? ko(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var m = Qn;
              else if (Un(l))
                if (Jn) m = ir;
                else {
                  m = or;
                  var v = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = ar);
              switch (
                (m && (m = m(e, r))
                  ? Vn(i, m, n, o)
                  : (v && v(e, l, r),
                    "focusout" === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (v = r ? ko(r) : window),
                e)
              ) {
                case "focusin":
                  (Un(v) || "true" === v.contentEditable) &&
                    ((mr = v), (vr = r), (br = null));
                  break;
                case "focusout":
                  br = vr = mr = null;
                  break;
                case "mousedown":
                  yr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (yr = !1), wr(i, n, o);
                  break;
                case "selectionchange":
                  if (gr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, o);
              }
              var b;
              if (Fn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Hn
                  ? An(e, n) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (y = "onCompositionStart");
              y &&
                (On &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Hn && (b = en())
                    : ((Yt = "value" in (Jt = o) ? Jt.value : Jt.textContent),
                      (Hn = !0))),
                0 < (v = $r(r, y)).length &&
                  ((y = new wn(y, e, null, n, o)),
                  i.push({ event: y, listeners: v }),
                  b ? (y.data = b) : null !== (b = Mn(n)) && (y.data = b))),
                (b = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Mn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Ln = !0), qn);
                        case "textInput":
                          return (e = t.data) === qn && Ln ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!Fn && An(e, t))
                          ? ((e = en()), (Zt = Yt = Jt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return On && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = b));
            }
            qr(i, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Te(e, n)) && r.unshift(Vr(e, a, o)),
              null != (a = Te(e, t)) && r.push(Vr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              c = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== c &&
              ((l = c),
              o
                ? null != (s = Te(n, a)) && i.unshift(Vr(n, s, l))
                : o || (null != (s = Te(n, a)) && i.push(Vr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Gr = /\r\n?/g,
          Qr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Qr, "");
        }
        function Yr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(a(425));
        }
        function Zr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" === typeof setTimeout ? setTimeout : void 0,
          oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ao = "function" === typeof Promise ? Promise : void 0,
          io =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ao
                ? function (e) {
                    return ao.resolve(null).then(e).catch(lo);
                  }
                : ro;
        function lo(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function so(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Ht(t);
        }
        function co(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function uo(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          ho = "__reactFiber$" + fo,
          po = "__reactProps$" + fo,
          go = "__reactContainer$" + fo,
          mo = "__reactEvents$" + fo,
          vo = "__reactListeners$" + fo,
          bo = "__reactHandles$" + fo;
        function yo(e) {
          var t = e[ho];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[go] || n[ho])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = uo(e); null !== e; ) {
                  if ((n = e[ho])) return n;
                  e = uo(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[ho] || e[go]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ko(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function xo(e) {
          return e[po] || null;
        }
        var So = [],
          _o = -1;
        function Bo(e) {
          return { current: e };
        }
        function zo(e) {
          0 > _o || ((e.current = So[_o]), (So[_o] = null), _o--);
        }
        function Co(e, t) {
          _o++, (So[_o] = e.current), (e.current = t);
        }
        var No = {},
          Eo = Bo(No),
          Po = Bo(!1),
          jo = No;
        function To(e, t) {
          var n = e.type.contextTypes;
          if (!n) return No;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Ro(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Fo() {
          zo(Po), zo(Eo);
        }
        function Do(e, t, n) {
          if (Eo.current !== No) throw Error(a(168));
          Co(Eo, t), Co(Po, n);
        }
        function Io(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, W(e) || "Unknown", o));
          return O({}, n, r);
        }
        function Oo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              No),
            (jo = Eo.current),
            Co(Eo, e),
            Co(Po, Po.current),
            !0
          );
        }
        function qo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Io(e, t, jo)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              zo(Po),
              zo(Eo),
              Co(Eo, e))
            : zo(Po),
            Co(Po, n);
        }
        var Lo = null,
          Ao = !1,
          Mo = !1;
        function Ho(e) {
          null === Lo ? (Lo = [e]) : Lo.push(e);
        }
        function Wo() {
          if (!Mo && null !== Lo) {
            Mo = !0;
            var e = 0,
              t = yt;
            try {
              var n = Lo;
              for (yt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Lo = null), (Ao = !1);
            } catch (o) {
              throw (null !== Lo && (Lo = Lo.slice(e + 1)), Ke(Ze, Wo), o);
            } finally {
              (yt = t), (Mo = !1);
            }
          }
          return null;
        }
        var Uo = [],
          Vo = 0,
          $o = null,
          Ko = 0,
          Xo = [],
          Go = 0,
          Qo = null,
          Jo = 1,
          Yo = "";
        function Zo(e, t) {
          (Uo[Vo++] = Ko), (Uo[Vo++] = $o), ($o = e), (Ko = t);
        }
        function ea(e, t, n) {
          (Xo[Go++] = Jo), (Xo[Go++] = Yo), (Xo[Go++] = Qo), (Qo = e);
          var r = Jo;
          e = Yo;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Jo = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Yo = a + e);
          } else (Jo = (1 << a) | (n << o) | r), (Yo = e);
        }
        function ta(e) {
          null !== e.return && (Zo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === $o; )
            ($o = Uo[--Vo]), (Uo[Vo] = null), (Ko = Uo[--Vo]), (Uo[Vo] = null);
          for (; e === Qo; )
            (Qo = Xo[--Go]),
              (Xo[Go] = null),
              (Yo = Xo[--Go]),
              (Xo[Go] = null),
              (Jo = Xo[--Go]),
              (Xo[Go] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function la(e, t) {
          var n = Tc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function sa(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ra = e), (oa = co(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Qo ? { id: Jo, overflow: Yo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Tc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ca(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ua(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!sa(e, t)) {
                if (ca(e)) throw Error(a(418));
                t = co(n.nextSibling);
                var r = ra;
                t && sa(e, t)
                  ? la(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (ca(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function da(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ra = e;
        }
        function fa(e) {
          if (e !== ra) return !1;
          if (!aa) return da(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (ca(e)) throw (ha(), Error(a(418)));
            for (; t; ) la(e, t), (t = co(t.nextSibling));
          }
          if ((da(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oa = co(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? co(e.stateNode.nextSibling) : null;
          return !0;
        }
        function ha() {
          for (var e = oa; e; ) e = co(e.nextSibling);
        }
        function pa() {
          (oa = ra = null), (aa = !1);
        }
        function ga(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ma = w.ReactCurrentBatchConfig;
        function va(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = O({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ba = Bo(null),
          ya = null,
          wa = null,
          ka = null;
        function xa() {
          ka = wa = ya = null;
        }
        function Sa(e) {
          var t = ba.current;
          zo(ba), (e._currentValue = t);
        }
        function _a(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ba(e, t) {
          (ya = e),
            (ka = wa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function za(e) {
          var t = e._currentValue;
          if (ka !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wa)
            ) {
              if (null === ya) throw Error(a(308));
              (wa = e), (ya.dependencies = { lanes: 0, firstContext: e });
            } else wa = wa.next = e;
          return t;
        }
        var Ca = null;
        function Na(e) {
          null === Ca ? (Ca = [e]) : Ca.push(e);
        }
        function Ea(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), Na(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Pa(e, r)
          );
        }
        function Pa(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var ja = !1;
        function Ta(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ra(e, t) {
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
        function Fa(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Da(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Es))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Pa(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Na(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Pa(e, n)
          );
        }
        function Ia(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        function Oa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function qa(e, t, n, r) {
          var o = e.updateQueue;
          ja = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var s = l,
              c = s.next;
            (s.next = null), null === i ? (a = c) : (i.next = c), (i = s);
            var u = e.alternate;
            null !== u &&
              (l = (u = u.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (u.firstBaseUpdate = c) : (l.next = c),
              (u.lastBaseUpdate = s));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, u = c = s = null, l = a; ; ) {
              var f = l.lane,
                h = l.eventTime;
              if ((r & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: h,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    g = l;
                  switch (((f = t), (h = n), g.tag)) {
                    case 1:
                      if ("function" === typeof (p = g.payload)) {
                        d = p.call(h, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (p = g.payload)
                              ? p.call(h, d, f)
                              : p) ||
                        void 0 === f
                      )
                        break e;
                      d = O({}, d, f);
                      break e;
                    case 2:
                      ja = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = o.effects) ? (o.effects = [l]) : f.push(l));
              } else
                (h = {
                  eventTime: h,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === u ? ((c = u = h), (s = d)) : (u = u.next = h),
                  (i |= f);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === u && (s = d),
              (o.baseState = s),
              (o.firstBaseUpdate = c),
              (o.lastBaseUpdate = u),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Os |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function La(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Aa = new r.Component().refs;
        function Ma(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : O({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ha = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              o = nc(e),
              a = Fa(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Da(e, a, o)) && (rc(t, e, o, r), Ia(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              o = nc(e),
              a = Fa(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Da(e, a, o)) && (rc(t, e, o, r), Ia(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tc(),
              r = nc(e),
              o = Fa(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Da(e, o, r)) && (rc(t, e, r, n), Ia(t, e, r));
          },
        };
        function Wa(e, t, n, r, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(o, a);
        }
        function Ua(e, t, n) {
          var r = !1,
            o = No,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = za(a))
              : ((o = Ro(t) ? jo : Eo.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? To(e, o)
                  : No)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ha),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function Va(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ha.enqueueReplaceState(t, t.state, null);
        }
        function $a(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Aa), Ta(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (o.context = za(a))
            : ((a = Ro(t) ? jo : Eo.current), (o.context = To(e, a))),
            (o.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (Ma(e, t, a, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Ha.enqueueReplaceState(o, o.state, null),
              qa(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Ka(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Aa && (t = o.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Xa(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function Ga(e) {
          return (0, e._init)(e._payload);
        }
        function Qa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Fc(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = qc(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var a = n.type;
            return a === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === a ||
                    ("object" === typeof a &&
                      null !== a &&
                      a.$$typeof === T &&
                      Ga(a) === t.type))
                ? (((r = o(t, n.props)).ref = Ka(e, t, n)), (r.return = e), r)
                : (((r = Dc(n.type, n.key, n.props, null, e.mode, r)).ref = Ka(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Lc(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Ic(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = qc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Dc(t.type, t.key, t.props, null, e.mode, n)).ref = Ka(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Lc(t, e.mode, n)).return = e), t;
                case T:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || D(t))
                return ((t = Ic(t, e.mode, n, null)).return = e), t;
              Xa(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === o ? c(e, t, n, r) : null;
                case x:
                  return n.key === o ? u(e, t, n, r) : null;
                case T:
                  return h(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || D(n)) return null !== o ? null : d(e, t, n, r, null);
              Xa(e, n);
            }
            return null;
          }
          function p(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  );
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o,
                  );
                case T:
                  return p(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || D(r))
                return d(t, (e = e.get(n) || null), r, o, null);
              Xa(t, r);
            }
            return null;
          }
          function g(o, a, l, s) {
            for (
              var c = null, u = null, d = a, g = (a = 0), m = null;
              null !== d && g < l.length;
              g++
            ) {
              d.index > g ? ((m = d), (d = null)) : (m = d.sibling);
              var v = h(o, d, l[g], s);
              if (null === v) {
                null === d && (d = m);
                break;
              }
              e && d && null === v.alternate && t(o, d),
                (a = i(v, a, g)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v),
                (d = m);
            }
            if (g === l.length) return n(o, d), aa && Zo(o, g), c;
            if (null === d) {
              for (; g < l.length; g++)
                null !== (d = f(o, l[g], s)) &&
                  ((a = i(d, a, g)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return aa && Zo(o, g), c;
            }
            for (d = r(o, d); g < l.length; g++)
              null !== (m = p(d, o, g, l[g], s)) &&
                (e &&
                  null !== m.alternate &&
                  d.delete(null === m.key ? g : m.key),
                (a = i(m, a, g)),
                null === u ? (c = m) : (u.sibling = m),
                (u = m));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, g),
              c
            );
          }
          function m(o, l, s, c) {
            var u = D(s);
            if ("function" !== typeof u) throw Error(a(150));
            if (null == (s = u.call(s))) throw Error(a(151));
            for (
              var d = (u = null), g = l, m = (l = 0), v = null, b = s.next();
              null !== g && !b.done;
              m++, b = s.next()
            ) {
              g.index > m ? ((v = g), (g = null)) : (v = g.sibling);
              var y = h(o, g, b.value, c);
              if (null === y) {
                null === g && (g = v);
                break;
              }
              e && g && null === y.alternate && t(o, g),
                (l = i(y, l, m)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y),
                (g = v);
            }
            if (b.done) return n(o, g), aa && Zo(o, m), u;
            if (null === g) {
              for (; !b.done; m++, b = s.next())
                null !== (b = f(o, b.value, c)) &&
                  ((l = i(b, l, m)),
                  null === d ? (u = b) : (d.sibling = b),
                  (d = b));
              return aa && Zo(o, m), u;
            }
            for (g = r(o, g); !b.done; m++, b = s.next())
              null !== (b = p(g, o, m, b.value, c)) &&
                (e &&
                  null !== b.alternate &&
                  g.delete(null === b.key ? m : b.key),
                (l = i(b, l, m)),
                null === d ? (u = b) : (d.sibling = b),
                (d = b));
            return (
              e &&
                g.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, m),
              u
            );
          }
          return function e(r, a, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (var c = i.key, u = a; null !== u; ) {
                      if (u.key === c) {
                        if ((c = i.type) === S) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((a = o(u, i.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === T &&
                            Ga(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((a = o(u, i.props)).ref = Ka(r, u, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    i.type === S
                      ? (((a = Ic(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = a))
                      : (((s = Dc(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s,
                        )).ref = Ka(r, a, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case x:
                  e: {
                    for (u = i.key; null !== a; ) {
                      if (a.key === u) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Lc(i, r.mode, s)).return = r), (r = a);
                  }
                  return l(r);
                case T:
                  return e(r, a, (u = i._init)(i._payload), s);
              }
              if (te(i)) return g(r, a, i, s);
              if (D(i)) return m(r, a, i, s);
              Xa(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = qc(i, r.mode, s)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var Ja = Qa(!0),
          Ya = Qa(!1),
          Za = {},
          ei = Bo(Za),
          ti = Bo(Za),
          ni = Bo(Za);
        function ri(e) {
          if (e === Za) throw Error(a(174));
          return e;
        }
        function oi(e, t) {
          switch ((Co(ni, t), Co(ti, e), Co(ei, Za), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          zo(ei), Co(ei, t);
        }
        function ai() {
          zo(ei), zo(ti), zo(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = se(t, e.type);
          t !== n && (Co(ti, e), Co(ei, n));
        }
        function li(e) {
          ti.current === e && (zo(ei), zo(ti));
        }
        var si = Bo(0);
        function ci(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ui = [];
        function di() {
          for (var e = 0; e < ui.length; e++)
            ui[e]._workInProgressVersionPrimary = null;
          ui.length = 0;
        }
        var fi = w.ReactCurrentDispatcher,
          hi = w.ReactCurrentBatchConfig,
          pi = 0,
          gi = null,
          mi = null,
          vi = null,
          bi = !1,
          yi = !1,
          wi = 0,
          ki = 0;
        function xi() {
          throw Error(a(321));
        }
        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function _i(e, t, n, r, o, i) {
          if (
            ((pi = i),
            (gi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fi.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, o)),
            yi)
          ) {
            i = 0;
            do {
              if (((yi = !1), (wi = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (vi = mi = null),
                (t.updateQueue = null),
                (fi.current = cl),
                (e = n(r, o));
            } while (yi);
          }
          if (
            ((fi.current = il),
            (t = null !== mi && null !== mi.next),
            (pi = 0),
            (vi = mi = gi = null),
            (bi = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Bi() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function zi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vi ? (gi.memoizedState = vi = e) : (vi = vi.next = e), vi
          );
        }
        function Ci() {
          if (null === mi) {
            var e = gi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === vi ? gi.memoizedState : vi.next;
          if (null !== t) (vi = t), (mi = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === vi ? (gi.memoizedState = vi = e) : (vi = vi.next = e);
          }
          return vi;
        }
        function Ni(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ei(e) {
          var t = Ci(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = mi,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var s = (l = null),
              c = null,
              u = i;
            do {
              var d = u.lane;
              if ((pi & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((s = c = f), (l = r)) : (c = c.next = f),
                  (gi.lanes |= d),
                  (Os |= d);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === c ? (l = r) : (c.next = s),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (gi.lanes |= i), (Os |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Pi(e) {
          var t = Ci(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function ji() {}
        function Ti(e, t) {
          var n = gi,
            r = Ci(),
            o = t(),
            i = !lr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (wl = !0)),
            (r = r.queue),
            Ui(Di.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== vi && 1 & vi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Li(9, Fi.bind(null, n, r, o, t), void 0, null),
              null === Ps)
            )
              throw Error(a(349));
            0 !== (30 & pi) || Ri(n, t, o);
          }
          return o;
        }
        function Ri(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = gi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (gi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function Fi(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ii(t) && Oi(e);
        }
        function Di(e, t, n) {
          return n(function () {
            Ii(t) && Oi(e);
          });
        }
        function Ii(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Oi(e) {
          var t = Pa(e, 1);
          null !== t && rc(t, e, 1, -1);
        }
        function qi(e) {
          var t = zi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ni,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, gi, e)),
            [t.memoizedState, e]
          );
        }
        function Li(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = gi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (gi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function Ai() {
          return Ci().memoizedState;
        }
        function Mi(e, t, n, r) {
          var o = zi();
          (gi.flags |= e),
            (o.memoizedState = Li(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Hi(e, t, n, r) {
          var o = Ci();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((a = i.destroy), null !== r && Si(r, i.deps)))
              return void (o.memoizedState = Li(t, n, a, r));
          }
          (gi.flags |= e), (o.memoizedState = Li(1 | t, n, a, r));
        }
        function Wi(e, t) {
          return Mi(8390656, 8, e, t);
        }
        function Ui(e, t) {
          return Hi(2048, 8, e, t);
        }
        function Vi(e, t) {
          return Hi(4, 2, e, t);
        }
        function $i(e, t) {
          return Hi(4, 4, e, t);
        }
        function Ki(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Xi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Hi(4, 4, Ki.bind(null, t, e), n)
          );
        }
        function Gi() {}
        function Qi(e, t) {
          var n = Ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ji(e, t) {
          var n = Ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Yi(e, t, n) {
          return 0 === (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = gt()), (gi.lanes |= n), (Os |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = yt;
          (yt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = hi.transition;
          hi.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = n), (hi.transition = r);
          }
        }
        function el() {
          return Ci().memoizedState;
        }
        function tl(e, t, n) {
          var r = nc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            ol(t, n);
          else if (null !== (n = Ea(e, t, n, r))) {
            rc(n, e, r, tc()), al(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = nc(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) ol(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((o.next = o), Na(t))
                      : ((o.next = s.next), (s.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (c) {}
            null !== (n = Ea(e, t, o, r)) &&
              (rc(n, e, r, (o = tc())), al(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === gi || (null !== t && t === gi);
        }
        function ol(e, t) {
          yi = bi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function al(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        var il = {
            readContext: za,
            useCallback: xi,
            useContext: xi,
            useEffect: xi,
            useImperativeHandle: xi,
            useInsertionEffect: xi,
            useLayoutEffect: xi,
            useMemo: xi,
            useReducer: xi,
            useRef: xi,
            useState: xi,
            useDebugValue: xi,
            useDeferredValue: xi,
            useTransition: xi,
            useMutableSource: xi,
            useSyncExternalStore: xi,
            useId: xi,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: za,
            useCallback: function (e, t) {
              return (zi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: za,
            useEffect: Wi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Mi(4194308, 4, Ki.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Mi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Mi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = zi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = zi();
              return (
                (t = void 0 !== n ? n(t) : t),
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
                (e = e.dispatch = tl.bind(null, gi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (zi().memoizedState = e);
            },
            useState: qi,
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return (zi().memoizedState = e);
            },
            useTransition: function () {
              var e = qi(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (zi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = gi,
                o = zi();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Ps)) throw Error(a(349));
                0 !== (30 & pi) || Ri(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Wi(Di.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Li(9, Fi.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = zi(),
                t = Ps.identifierPrefix;
              if (aa) {
                var n = Yo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Jo & ~(1 << (32 - it(Jo) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ki++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: za,
            useCallback: Qi,
            useContext: za,
            useEffect: Ui,
            useImperativeHandle: Xi,
            useInsertionEffect: Vi,
            useLayoutEffect: $i,
            useMemo: Ji,
            useReducer: Ei,
            useRef: Ai,
            useState: function () {
              return Ei(Ni);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return Yi(Ci(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ei(Ni)[0], Ci().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: Ti,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          cl = {
            readContext: za,
            useCallback: Qi,
            useContext: za,
            useEffect: Ui,
            useImperativeHandle: Xi,
            useInsertionEffect: Vi,
            useLayoutEffect: $i,
            useMemo: Ji,
            useReducer: Pi,
            useRef: Ai,
            useState: function () {
              return Pi(Ni);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              var t = Ci();
              return null === mi
                ? (t.memoizedState = e)
                : Yi(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(Ni)[0], Ci().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: Ti,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function ul(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += M(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var hl = "function" === typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = Fa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vs || ((Vs = !0), ($s = r)), fl(0, t);
            }),
            n
          );
        }
        function gl(e, t, n) {
          (n = Fa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === Ks ? (Ks = new Set([this])) : Ks.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new hl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = zc.bind(null, e, t, n)), t.then(e, e));
        }
        function vl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function bl(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Fa(-1, 1)).tag = 2), Da(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var yl = w.ReactCurrentOwner,
          wl = !1;
        function kl(e, t, n, r) {
          t.child = null === e ? Ya(t, null, n, r) : Ja(t, e.child, n, r);
        }
        function xl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Ba(t, o),
            (r = _i(e, t, n, r, a, o)),
            (n = Bi()),
            null === e || wl
              ? (aa && n && ta(t), (t.flags |= 1), kl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Vl(e, t, o))
          );
        }
        function Sl(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Rc(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Dc(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), _l(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Vl(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Fc(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function _l(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (sr(a, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), Vl(e, t, o);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return Cl(e, t, n, r, o);
        }
        function Bl(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Co(Fs, Rs),
                (Rs |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Co(Fs, Rs),
                  (Rs |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Co(Fs, Rs),
                (Rs |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Co(Fs, Rs),
              (Rs |= r);
          return kl(e, t, o, n), t.child;
        }
        function zl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cl(e, t, n, r, o) {
          var a = Ro(n) ? jo : Eo.current;
          return (
            (a = To(t, a)),
            Ba(t, o),
            (n = _i(e, t, n, r, a, o)),
            (r = Bi()),
            null === e || wl
              ? (aa && r && ta(t), (t.flags |= 1), kl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Vl(e, t, o))
          );
        }
        function Nl(e, t, n, r, o) {
          if (Ro(n)) {
            var a = !0;
            Oo(t);
          } else a = !1;
          if ((Ba(t, o), null === t.stateNode))
            Ul(e, t), Ua(t, n, r), $a(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = za(c))
              : (c = To(t, (c = Ro(n) ? jo : Eo.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== c) && Va(t, i, r, c)),
              (ja = !1);
            var f = t.memoizedState;
            (i.state = f),
              qa(t, r, i, o),
              (s = t.memoizedState),
              l !== r || f !== s || Po.current || ja
                ? ("function" === typeof u &&
                    (Ma(t, n, u, r), (s = t.memoizedState)),
                  (l = ja || Wa(t, n, l, r, f, s, c))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = c),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Ra(e, t),
              (l = t.memoizedProps),
              (c = t.type === t.elementType ? l : va(t.type, l)),
              (i.props = c),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = za(s))
                : (s = To(t, (s = Ro(n) ? jo : Eo.current)));
            var h = n.getDerivedStateFromProps;
            (u =
              "function" === typeof h ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== d || f !== s) && Va(t, i, r, s)),
              (ja = !1),
              (f = t.memoizedState),
              (i.state = f),
              qa(t, r, i, o);
            var p = t.memoizedState;
            l !== d || f !== p || Po.current || ja
              ? ("function" === typeof h &&
                  (Ma(t, n, h, r), (p = t.memoizedState)),
                (c = ja || Wa(t, n, c, r, f, p, s) || !1)
                  ? (u ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, p, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (i.props = r),
                (i.state = p),
                (i.context = s),
                (r = c))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return El(e, t, n, r, a, o);
        }
        function El(e, t, n, r, o, a) {
          zl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && qo(t, n, !1), Vl(e, t, a);
          (r = t.stateNode), (yl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Ja(t, e.child, null, a)),
                (t.child = Ja(t, null, l, a)))
              : kl(e, t, l, a),
            (t.memoizedState = r.state),
            o && qo(t, n, !0),
            t.child
          );
        }
        function Pl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Do(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Do(0, t.context, !1),
            oi(e, t.containerInfo);
        }
        function jl(e, t, n, r, o) {
          return pa(), ga(o), (t.flags |= 256), kl(e, t, n, r), t.child;
        }
        var Tl,
          Rl,
          Fl,
          Dl,
          Il = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ol(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function ql(e, t, n) {
          var r,
            o = t.pendingProps,
            i = si.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Co(si, 1 & i),
            null === e)
          )
            return (
              ua(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((s = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Oc(s, o, 0, null)),
                      (e = Ic(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Ol(n)),
                      (t.memoizedState = Il),
                      e)
                    : Ll(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Al(e, t, l, (r = dl(Error(a(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (o = t.mode),
                      (r = Oc(
                        { mode: "visible", children: r.children },
                        o,
                        0,
                        null,
                      )),
                      ((i = Ic(i, o, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      0 !== (1 & t.mode) && Ja(t, e.child, null, l),
                      (t.child.memoizedState = Ol(l)),
                      (t.memoizedState = Il),
                      i);
              if (0 === (1 & t.mode)) return Al(e, t, l, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Al(e, t, l, (r = dl((i = Error(a(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), wl || s)) {
                if (null !== (r = Ps)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
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
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), Pa(e, o), rc(r, e, o, -1));
                }
                return mc(), Al(e, t, l, (r = dl(Error(a(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Nc.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = co(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Xo[Go++] = Jo),
                    (Xo[Go++] = Yo),
                    (Xo[Go++] = Qo),
                    (Jo = e.id),
                    (Yo = e.overflow),
                    (Qo = t)),
                  (t = Ll(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, o, r, i, n);
          if (l) {
            (l = o.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var c = { mode: "hidden", children: o.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = c),
                  (t.deletions = null))
                : ((o = Fc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Fc(r, l))
                : ((l = Ic(l, s, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Ol(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Il),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = Fc(l, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Ll(e, t) {
          return (
            ((t = Oc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Al(e, t, n, r) {
          return (
            null !== r && ga(r),
            Ja(t, e.child, null, n),
            ((e = Ll(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ml(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), _a(e.return, t, n);
        }
        function Hl(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Wl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((kl(e, t, r.children, n), 0 !== (2 & (r = si.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ml(e, n, t);
                else if (19 === e.tag) Ml(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Co(si, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ci(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Hl(t, !1, o, n, a);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ci(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Hl(t, !0, n, null, a);
                break;
              case "together":
                Hl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ul(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Os |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Fc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Fc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $l(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Kl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xl(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
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
              return Kl(t), null;
            case 1:
            case 17:
              return Ro(t.type) && Fo(), Kl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                zo(Po),
                zo(Eo),
                di(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ia && (lc(ia), (ia = null)))),
                Rl(e, t),
                Kl(t),
                null
              );
            case 5:
              li(t);
              var o = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Fl(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Kl(t), null;
                }
                if (((e = ri(ei.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[ho] = t), (r[po] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Lr("cancel", r), Lr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Lr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Dr.length; o++) Lr(Dr[o], r);
                      break;
                    case "source":
                      Lr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Lr("error", r), Lr("load", r);
                      break;
                    case "details":
                      Lr("toggle", r);
                      break;
                    case "input":
                      Q(r, i), Lr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Lr("invalid", r);
                      break;
                    case "textarea":
                      oe(r, i), Lr("invalid", r);
                  }
                  for (var s in (be(n, i), (o = null), i))
                    if (i.hasOwnProperty(s)) {
                      var c = i[s];
                      "children" === s
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Yr(r.textContent, c, e),
                            (o = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Yr(r.textContent, c, e),
                            (o = ["children", "" + c]))
                        : l.hasOwnProperty(s) &&
                          null != c &&
                          "onScroll" === s &&
                          Lr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      $(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                          ? (e = s.createElement(n, { is: r.is }))
                          : ((e = s.createElement(n)),
                            "select" === n &&
                              ((s = e),
                              r.multiple
                                ? (s.multiple = !0)
                                : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[ho] = t),
                    (e[po] = r),
                    Tl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = ye(n, r)), n)) {
                      case "dialog":
                        Lr("cancel", e), Lr("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Lr("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < Dr.length; o++) Lr(Dr[o], e);
                        o = r;
                        break;
                      case "source":
                        Lr("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Lr("error", e), Lr("load", e), (o = r);
                        break;
                      case "details":
                        Lr("toggle", e), (o = r);
                        break;
                      case "input":
                        Q(e, r), (o = G(e, r)), Lr("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = O({}, r, { value: void 0 })),
                          Lr("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Lr("invalid", e);
                    }
                    for (i in (be(n, o), (c = o)))
                      if (c.hasOwnProperty(i)) {
                        var u = c[i];
                        "style" === i
                          ? me(e, u)
                          : "dangerouslySetInnerHTML" === i
                            ? null != (u = u ? u.__html : void 0) && de(e, u)
                            : "children" === i
                              ? "string" === typeof u
                                ? ("textarea" !== n || "" !== u) && fe(e, u)
                                : "number" === typeof u && fe(e, "" + u)
                              : "suppressContentEditableWarning" !== i &&
                                "suppressHydrationWarning" !== i &&
                                "autoFocus" !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != u &&
                                    "onScroll" === i &&
                                    Lr("scroll", e)
                                  : null != u && y(e, i, u, s));
                      }
                    switch (n) {
                      case "input":
                        $(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        $(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + U(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Kl(t), null;
            case 6:
              if (e && null != t.stateNode) Dl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = ri(ni.current)), ri(ei.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[ho] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[ho] = t),
                    (t.stateNode = r);
              }
              return Kl(t), null;
            case 13:
              if (
                (zo(si),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  aa &&
                  null !== oa &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  ha(), pa(), (t.flags |= 98560), (i = !1);
                else if (((i = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[ho] = t;
                  } else
                    pa(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Kl(t), (i = !1);
                } else null !== ia && (lc(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & si.current)
                        ? 0 === Ds && (Ds = 3)
                        : mc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Kl(t),
                  null);
            case 4:
              return (
                ai(),
                Rl(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                Kl(t),
                null
              );
            case 10:
              return Sa(t.type._context), Kl(t), null;
            case 19:
              if ((zo(si), null === (i = t.memoizedState))) return Kl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) $l(i, !1);
                else {
                  if (0 !== Ds || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ci(e))) {
                        for (
                          t.flags |= 128,
                            $l(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Co(si, (1 & si.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Je() > Ws &&
                    ((t.flags |= 128),
                    (r = !0),
                    $l(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ci(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $l(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !aa)
                    )
                      return Kl(t), null;
                  } else
                    2 * Je() - i.renderingStartTime > Ws &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $l(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = si.current),
                  Co(si, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Kl(t), null);
            case 22:
            case 23:
              return (
                fc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Rs) &&
                    (Kl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Kl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Gl(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                Ro(t.type) && Fo(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                zo(Po),
                zo(Eo),
                di(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (zo(si),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                pa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return zo(si), null;
            case 4:
              return ai(), null;
            case 10:
              return Sa(t.type._context), null;
            case 22:
            case 23:
              return fc(), null;
            default:
              return null;
          }
        }
        (Tl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Rl = function () {}),
          (Fl = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ri(ei.current);
              var a,
                i = null;
              switch (n) {
                case "input":
                  (o = G(e, o)), (r = G(e, r)), (i = []);
                  break;
                case "select":
                  (o = O({}, o, { value: void 0 })),
                    (r = O({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (u in (be(n, r), (n = null), o))
                if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && null != o[u])
                  if ("style" === u) {
                    var s = o[u];
                    for (a in s)
                      s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (l.hasOwnProperty(u)
                        ? i || (i = [])
                        : (i = i || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((s = null != o ? o[u] : void 0),
                  r.hasOwnProperty(u) && c !== s && (null != c || null != s))
                )
                  if ("style" === u)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (c && c.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in c)
                        c.hasOwnProperty(a) &&
                          s[a] !== c[a] &&
                          (n || (n = {}), (n[a] = c[a]));
                    } else n || (i || (i = []), i.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (i = i || []).push(u, c))
                      : "children" === u
                        ? ("string" !== typeof c && "number" !== typeof c) ||
                          (i = i || []).push(u, "" + c)
                        : "suppressContentEditableWarning" !== u &&
                          "suppressHydrationWarning" !== u &&
                          (l.hasOwnProperty(u)
                            ? (null != c && "onScroll" === u && Lr("scroll", e),
                              i || s === c || (i = []))
                            : (i = i || []).push(u, c));
              }
              n && (i = i || []).push("style", n);
              var u = i;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Dl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ql = !1,
          Jl = !1,
          Yl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Bc(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Bc(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && ts(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function os(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
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
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[ho],
              delete t[po],
              delete t[mo],
              delete t[vo],
              delete t[bo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function hs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Jl || es(n, t);
            case 6:
              var r = ds,
                o = fs;
              (ds = null),
                hs(e, t, n),
                (fs = o),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? so(e.parentNode, n)
                      : 1 === e.nodeType && so(e, n),
                    Ht(e))
                  : so(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (o = fs),
                (ds = n.stateNode.containerInfo),
                (fs = !0),
                hs(e, t, n),
                (ds = r),
                (fs = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Jl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      ts(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              hs(e, t, n);
              break;
            case 1:
              if (
                !Jl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Bc(n, t, l);
                }
              hs(e, t, n);
              break;
            case 21:
              hs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Jl = (r = Jl) || null !== n.memoizedState),
                  hs(e, t, n),
                  (Jl = r))
                : hs(e, t, n);
              break;
            default:
              hs(e, t, n);
          }
        }
        function gs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Yl()),
              t.forEach(function (t) {
                var r = Ec.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(a(160));
                ps(i, l, o), (ds = null), (fs = !1);
                var c = o.alternate;
                null !== c && (c.return = null), (o.return = null);
              } catch (u) {
                Bc(o, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), bs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), os(3, e);
                } catch (m) {
                  Bc(e, e.return, m);
                }
                try {
                  rs(5, e, e.return);
                } catch (m) {
                  Bc(e, e.return, m);
                }
              }
              break;
            case 1:
              ms(t, e), bs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                bs(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  fe(o, "");
                } catch (m) {
                  Bc(e, e.return, m);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      J(o, i),
                      ye(s, l);
                    var u = ye(s, i);
                    for (l = 0; l < c.length; l += 2) {
                      var d = c[l],
                        f = c[l + 1];
                      "style" === d
                        ? me(o, f)
                        : "dangerouslySetInnerHTML" === d
                          ? de(o, f)
                          : "children" === d
                            ? fe(o, f)
                            : y(o, d, f, u);
                    }
                    switch (s) {
                      case "input":
                        Y(o, i);
                        break;
                      case "textarea":
                        ae(o, i);
                        break;
                      case "select":
                        var h = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var p = i.value;
                        null != p
                          ? ne(o, !!i.multiple, p, !1)
                          : h !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[po] = i;
                  } catch (m) {
                    Bc(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), bs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (m) {
                  Bc(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                bs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (m) {
                  Bc(e, e.return, m);
                }
              break;
            case 4:
            default:
              ms(t, e), bs(e);
              break;
            case 13:
              ms(t, e),
                bs(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Hs = Je())),
                4 & r && gs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Jl = (u = Jl) || d), ms(t, e), (Jl = u))
                  : ms(t, e),
                bs(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Zl = e, d = e.child; null !== d; ) {
                    for (f = Zl = d; null !== Zl; ) {
                      switch (((p = (h = Zl).child), h.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, h, h.return);
                          break;
                        case 1:
                          es(h, h.return);
                          var g = h.stateNode;
                          if ("function" === typeof g.componentWillUnmount) {
                            (r = h), (n = h.return);
                            try {
                              (t = r),
                                (g.props = t.memoizedProps),
                                (g.state = t.memoizedState),
                                g.componentWillUnmount();
                            } catch (m) {
                              Bc(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          es(h, h.return);
                          break;
                        case 22:
                          if (null !== h.memoizedState) {
                            xs(f);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = h), (Zl = p)) : xs(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (o = f.stateNode),
                          u
                            ? "function" === typeof (i = o.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (s.style.display = ge("display", l)));
                      } catch (m) {
                        Bc(e, e.return, m);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (m) {
                        Bc(e, e.return, m);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), bs(e), 4 & r && gs(e);
            case 21:
          }
        }
        function bs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (fe(o, ""), (r.flags &= -33)),
                    us(e, ss(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  cs(e, ss(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              Bc(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Zl = e), ws(e, t, n);
        }
        function ws(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var o = Zl,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Ql;
              if (!i) {
                var l = o.alternate,
                  s = (null !== l && null !== l.memoizedState) || Jl;
                l = Ql;
                var c = Jl;
                if (((Ql = i), (Jl = s) && !c))
                  for (Zl = o; null !== Zl; )
                    (s = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Ss(o)
                        : null !== s
                          ? ((s.return = i), (Zl = s))
                          : Ss(o);
                for (; null !== a; ) (Zl = a), ws(a, t, n), (a = a.sibling);
                (Zl = o), (Ql = l), (Jl = c);
              }
              ks(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), (Zl = a))
                : ks(e);
          }
        }
        function ks(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jl || os(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Jl)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : va(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && La(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        La(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ht(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Jl || (512 & t.flags && as(t));
              } catch (h) {
                Bc(t, t.return, h);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function xs(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    os(4, t);
                  } catch (s) {
                    Bc(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Bc(t, o, s);
                    }
                  }
                  var a = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Bc(t, a, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Bc(t, i, s);
                  }
              }
            } catch (s) {
              Bc(t, t.return, s);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var _s,
          Bs = Math.ceil,
          zs = w.ReactCurrentDispatcher,
          Cs = w.ReactCurrentOwner,
          Ns = w.ReactCurrentBatchConfig,
          Es = 0,
          Ps = null,
          js = null,
          Ts = 0,
          Rs = 0,
          Fs = Bo(0),
          Ds = 0,
          Is = null,
          Os = 0,
          qs = 0,
          Ls = 0,
          As = null,
          Ms = null,
          Hs = 0,
          Ws = 1 / 0,
          Us = null,
          Vs = !1,
          $s = null,
          Ks = null,
          Xs = !1,
          Gs = null,
          Qs = 0,
          Js = 0,
          Ys = null,
          Zs = -1,
          ec = 0;
        function tc() {
          return 0 !== (6 & Es) ? Je() : -1 !== Zs ? Zs : (Zs = Je());
        }
        function nc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Es) && 0 !== Ts
              ? Ts & -Ts
              : null !== ma.transition
                ? (0 === ec && (ec = gt()), ec)
                : 0 !== (e = yt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Qt(e.type));
        }
        function rc(e, t, n, r) {
          if (50 < Js) throw ((Js = 0), (Ys = null), Error(a(185)));
          vt(e, n, r),
            (0 !== (2 & Es) && e === Ps) ||
              (e === Ps && (0 === (2 & Es) && (qs |= n), 4 === Ds && sc(e, Ts)),
              oc(e, r),
              1 === n &&
                0 === Es &&
                0 === (1 & t.mode) &&
                ((Ws = Je() + 500), Ao && Wo()));
        }
        function oc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                l = 1 << i,
                s = o[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (o[i] = ht(l, t))
                : s <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = ft(e, e === Ps ? Ts : 0);
          if (0 === r)
            null !== n && Xe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ao = !0), Ho(e);
                  })(cc.bind(null, e))
                : Ho(cc.bind(null, e)),
                io(function () {
                  0 === (6 & Es) && Wo();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Pc(n, ac.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ac(e, t) {
          if (((Zs = -1), (ec = 0), 0 !== (6 & Es))) throw Error(a(327));
          var n = e.callbackNode;
          if (Sc() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ps ? Ts : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vc(e, r);
          else {
            t = r;
            var o = Es;
            Es |= 2;
            var i = gc();
            for (
              (Ps === e && Ts === t) ||
              ((Us = null), (Ws = Je() + 500), hc(e, t));
              ;

            )
              try {
                yc();
                break;
              } catch (s) {
                pc(e, s);
              }
            xa(),
              (zs.current = i),
              (Es = o),
              null !== js ? (t = 0) : ((Ps = null), (Ts = 0), (t = Ds));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = pt(e)) && ((r = o), (t = ic(e, o))),
              1 === t)
            )
              throw ((n = Is), hc(e, 0), sc(e, r), oc(e, Je()), n);
            if (6 === t) sc(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!lr(a(), o)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = vc(e, r)) &&
                    0 !== (i = pt(e)) &&
                    ((r = i), (t = ic(e, i))),
                  1 === t))
              )
                throw ((n = Is), hc(e, 0), sc(e, r), oc(e, Je()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  xc(e, Ms, Us);
                  break;
                case 3:
                  if (
                    (sc(e, r),
                    (130023424 & r) === r && 10 < (t = Hs + 500 - Je()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      tc(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(xc.bind(null, e, Ms, Us), t);
                    break;
                  }
                  xc(e, Ms, Us);
                  break;
                case 4:
                  if ((sc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
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
                                    : 1960 * Bs(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(xc.bind(null, e, Ms, Us), r);
                    break;
                  }
                  xc(e, Ms, Us);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return oc(e, Je()), e.callbackNode === n ? ac.bind(null, e) : null;
        }
        function ic(e, t) {
          var n = As;
          return (
            e.current.memoizedState.isDehydrated && (hc(e, t).flags |= 256),
            2 !== (e = vc(e, t)) && ((t = Ms), (Ms = n), null !== t && lc(t)),
            e
          );
        }
        function lc(e) {
          null === Ms ? (Ms = e) : Ms.push.apply(Ms, e);
        }
        function sc(e, t) {
          for (
            t &= ~Ls,
              t &= ~qs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function cc(e) {
          if (0 !== (6 & Es)) throw Error(a(327));
          Sc();
          var t = ft(e, 0);
          if (0 === (1 & t)) return oc(e, Je()), null;
          var n = vc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = ic(e, r)));
          }
          if (1 === n) throw ((n = Is), hc(e, 0), sc(e, t), oc(e, Je()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xc(e, Ms, Us),
            oc(e, Je()),
            null
          );
        }
        function uc(e, t) {
          var n = Es;
          Es |= 1;
          try {
            return e(t);
          } finally {
            0 === (Es = n) && ((Ws = Je() + 500), Ao && Wo());
          }
        }
        function dc(e) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & Es) && Sc();
          var t = Es;
          Es |= 1;
          var n = Ns.transition,
            r = yt;
          try {
            if (((Ns.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = r), (Ns.transition = n), 0 === (6 & (Es = t)) && Wo();
          }
        }
        function fc() {
          (Rs = Fs.current), zo(Fs);
        }
        function hc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== js))
            for (n = js.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Fo();
                  break;
                case 3:
                  ai(), zo(Po), zo(Eo), di();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  zo(si);
                  break;
                case 10:
                  Sa(r.type._context);
                  break;
                case 22:
                case 23:
                  fc();
              }
              n = n.return;
            }
          if (
            ((Ps = e),
            (js = e = Fc(e.current, null)),
            (Ts = Rs = t),
            (Ds = 0),
            (Is = null),
            (Ls = qs = Os = 0),
            (Ms = As = null),
            null !== Ca)
          ) {
            for (t = 0; t < Ca.length; t++)
              if (null !== (r = (n = Ca[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            Ca = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = js;
            try {
              if ((xa(), (fi.current = il), bi)) {
                for (var r = gi.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                bi = !1;
              }
              if (
                ((pi = 0),
                (vi = mi = gi = null),
                (yi = !1),
                (wi = 0),
                (Cs.current = null),
                null === n || null === n.return)
              ) {
                (Ds = 1), (Is = t), (js = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  c = t;
                if (
                  ((t = Ts),
                  (s.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var h = d.alternate;
                    h
                      ? ((d.updateQueue = h.updateQueue),
                        (d.memoizedState = h.memoizedState),
                        (d.lanes = h.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = vl(l);
                  if (null !== p) {
                    (p.flags &= -257),
                      bl(p, l, s, 0, t),
                      1 & p.mode && ml(i, u, t),
                      (c = u);
                    var g = (t = p).updateQueue;
                    if (null === g) {
                      var m = new Set();
                      m.add(c), (t.updateQueue = m);
                    } else g.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(i, u, t), mc();
                    break e;
                  }
                  c = Error(a(426));
                } else if (aa && 1 & s.mode) {
                  var v = vl(l);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      bl(v, l, s, 0, t),
                      ga(ul(c, s));
                    break e;
                  }
                }
                (i = c = ul(c, s)),
                  4 !== Ds && (Ds = 2),
                  null === As ? (As = [i]) : As.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Oa(i, pl(0, c, t));
                      break e;
                    case 1:
                      s = c;
                      var b = i.type,
                        y = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof b.getDerivedStateFromError ||
                          (null !== y &&
                            "function" === typeof y.componentDidCatch &&
                            (null === Ks || !Ks.has(y))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Oa(i, gl(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              kc(n);
            } catch (w) {
              (t = w), js === n && null !== n && (js = n = n.return);
              continue;
            }
            break;
          }
        }
        function gc() {
          var e = zs.current;
          return (zs.current = il), null === e ? il : e;
        }
        function mc() {
          (0 !== Ds && 3 !== Ds && 2 !== Ds) || (Ds = 4),
            null === Ps ||
              (0 === (268435455 & Os) && 0 === (268435455 & qs)) ||
              sc(Ps, Ts);
        }
        function vc(e, t) {
          var n = Es;
          Es |= 2;
          var r = gc();
          for ((Ps === e && Ts === t) || ((Us = null), hc(e, t)); ; )
            try {
              bc();
              break;
            } catch (o) {
              pc(e, o);
            }
          if ((xa(), (Es = n), (zs.current = r), null !== js))
            throw Error(a(261));
          return (Ps = null), (Ts = 0), Ds;
        }
        function bc() {
          for (; null !== js; ) wc(js);
        }
        function yc() {
          for (; null !== js && !Ge(); ) wc(js);
        }
        function wc(e) {
          var t = _s(e.alternate, e, Rs);
          (e.memoizedProps = e.pendingProps),
            null === t ? kc(e) : (js = t),
            (Cs.current = null);
        }
        function kc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Xl(n, t, Rs))) return void (js = n);
            } else {
              if (null !== (n = Gl(n, t)))
                return (n.flags &= 32767), void (js = n);
              if (null === e) return (Ds = 6), void (js = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (js = t);
            js = t = e;
          } while (null !== t);
          0 === Ds && (Ds = 5);
        }
        function xc(e, t, n) {
          var r = yt,
            o = Ns.transition;
          try {
            (Ns.transition = null),
              (yt = 1),
              (function (e, t, n, r) {
                do {
                  Sc();
                } while (null !== Gs);
                if (0 !== (6 & Es)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
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
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === Ps && ((js = Ps = null), (Ts = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Xs ||
                    ((Xs = !0),
                    Pc(tt, function () {
                      return Sc(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ns.transition), (Ns.transition = null);
                  var l = yt;
                  yt = 1;
                  var s = Es;
                  (Es |= 4),
                    (Cs.current = null),
                    (function (e, t) {
                      if (((eo = Ut), hr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                h = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  f !== n ||
                                    (0 !== o && 3 !== f.nodeType) ||
                                    (s = l + o),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (c = l + r),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (p = f.firstChild);

                                )
                                  (h = f), (f = p);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (h === n && ++u === o && (s = l),
                                    h === i && ++d === r && (c = l),
                                    null !== (p = f.nextSibling))
                                  )
                                    break;
                                  h = (f = h).parentNode;
                                }
                                f = p;
                              }
                              n =
                                -1 === s || -1 === c
                                  ? null
                                  : { start: s, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Ut = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var g = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== g) {
                                      var m = g.memoizedProps,
                                        v = g.memoizedState,
                                        b = t.stateNode,
                                        y = b.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : va(t.type, m),
                                          v,
                                        );
                                      b.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (k) {
                              Bc(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (g = ns), (ns = !1);
                    })(e, n),
                    vs(n, e),
                    pr(to),
                    (Ut = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    ys(n, e, o),
                    Qe(),
                    (Es = s),
                    (yt = l),
                    (Ns.transition = i);
                } else e.current = n;
                if (
                  (Xs && ((Xs = !1), (Gs = e), (Qs = o)),
                  (i = e.pendingLanes),
                  0 === i && (Ks = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  oc(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if (Vs) throw ((Vs = !1), (e = $s), ($s = null), e);
                0 !== (1 & Qs) && 0 !== e.tag && Sc(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Ys
                      ? Js++
                      : ((Js = 0), (Ys = e))
                    : (Js = 0),
                  Wo();
              })(e, t, n, r);
          } finally {
            (Ns.transition = o), (yt = r);
          }
          return null;
        }
        function Sc() {
          if (null !== Gs) {
            var e = wt(Qs),
              t = Ns.transition,
              n = yt;
            try {
              if (((Ns.transition = null), (yt = 16 > e ? 16 : e), null === Gs))
                var r = !1;
              else {
                if (((e = Gs), (Gs = null), (Qs = 0), 0 !== (6 & Es)))
                  throw Error(a(331));
                var o = Es;
                for (Es |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child;
                  if (0 !== (16 & Zl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var c = 0; c < s.length; c++) {
                        var u = s[c];
                        for (Zl = u; null !== Zl; ) {
                          var d = Zl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zl = f);
                          else
                            for (; null !== Zl; ) {
                              var h = (d = Zl).sibling,
                                p = d.return;
                              if ((is(d), d === u)) {
                                Zl = null;
                                break;
                              }
                              if (null !== h) {
                                (h.return = p), (Zl = h);
                                break;
                              }
                              Zl = p;
                            }
                        }
                      }
                      var g = i.alternate;
                      if (null !== g) {
                        var m = g.child;
                        if (null !== m) {
                          g.child = null;
                          do {
                            var v = m.sibling;
                            (m.sibling = null), (m = v);
                          } while (null !== m);
                        }
                      }
                      Zl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (i = Zl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var b = i.sibling;
                      if (null !== b) {
                        (b.return = i.return), (Zl = b);
                        break e;
                      }
                      Zl = i.return;
                    }
                }
                var y = e.current;
                for (Zl = y; null !== Zl; ) {
                  var w = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Zl = w);
                  else
                    e: for (l = y; null !== Zl; ) {
                      if (0 !== (2048 & (s = Zl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              os(9, s);
                          }
                        } catch (x) {
                          Bc(s, s.return, x);
                        }
                      if (s === l) {
                        Zl = null;
                        break e;
                      }
                      var k = s.sibling;
                      if (null !== k) {
                        (k.return = s.return), (Zl = k);
                        break e;
                      }
                      Zl = s.return;
                    }
                }
                if (
                  ((Es = o),
                  Wo(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (yt = n), (Ns.transition = t);
            }
          }
          return !1;
        }
        function _c(e, t, n) {
          (e = Da(e, (t = pl(0, (t = ul(n, t)), 1)), 1)),
            (t = tc()),
            null !== e && (vt(e, 1, t), oc(e, t));
        }
        function Bc(e, t, n) {
          if (3 === e.tag) _c(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _c(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ks || !Ks.has(r)))
                ) {
                  (t = Da(t, (e = gl(t, (e = ul(n, e)), 1)), 1)),
                    (e = tc()),
                    null !== t && (vt(t, 1, e), oc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function zc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ps === e &&
              (Ts & n) === n &&
              (4 === Ds ||
              (3 === Ds && (130023424 & Ts) === Ts && 500 > Je() - Hs)
                ? hc(e, 0)
                : (Ls |= n)),
            oc(e, t);
        }
        function Cc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = tc();
          null !== (e = Pa(e, t)) && (vt(e, t, n), oc(e, n));
        }
        function Nc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cc(e, n);
        }
        function Ec(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Cc(e, n);
        }
        function Pc(e, t) {
          return Ke(e, t);
        }
        function jc(e, t, n, r) {
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
        function Tc(e, t, n, r) {
          return new jc(e, t, n, r);
        }
        function Rc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Fc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Tc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Dc(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Rc(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Ic(n.children, o, i, t);
              case _:
                (l = 8), (o |= 8);
                break;
              case B:
                return (
                  ((e = Tc(12, n, t, 2 | o)).elementType = B), (e.lanes = i), e
                );
              case E:
                return (
                  ((e = Tc(13, n, t, o)).elementType = E), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Tc(19, n, t, o)).elementType = P), (e.lanes = i), e
                );
              case R:
                return Oc(n, o, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case z:
                      l = 10;
                      break e;
                    case C:
                      l = 9;
                      break e;
                    case N:
                      l = 11;
                      break e;
                    case j:
                      l = 14;
                      break e;
                    case T:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Tc(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Ic(e, t, n, r) {
          return ((e = Tc(7, e, r, t)).lanes = n), e;
        }
        function Oc(e, t, n, r) {
          return (
            ((e = Tc(22, e, r, t)).elementType = R),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function qc(e, t, n) {
          return ((e = Tc(6, e, null, t)).lanes = n), e;
        }
        function Lc(e, t, n) {
          return (
            ((t = Tc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ac(e, t, n, r, o) {
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
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Mc(e, t, n, r, o, a, i, l, s) {
          return (
            (e = new Ac(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Tc(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ta(a),
            e
          );
        }
        function Hc(e) {
          if (!e) return No;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ro(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ro(n)) return Io(e, n, t);
          }
          return t;
        }
        function Wc(e, t, n, r, o, a, i, l, s) {
          return (
            ((e = Mc(n, r, !0, e, 0, a, 0, l, s)).context = Hc(null)),
            (n = e.current),
            ((a = Fa((r = tc()), (o = nc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Da(n, a, o),
            (e.current.lanes = o),
            vt(e, o, r),
            oc(e, r),
            e
          );
        }
        function Uc(e, t, n, r) {
          var o = t.current,
            a = tc(),
            i = nc(o);
          return (
            (n = Hc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fa(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Da(o, t, i)) && (rc(e, o, i, a), Ia(e, o, i)),
            i
          );
        }
        function Vc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function $c(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Kc(e, t) {
          $c(e, t), (e = e.alternate) && $c(e, t);
        }
        _s = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Po.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Pl(t), pa();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Ro(t.type) && Oo(t);
                        break;
                      case 4:
                        oi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        Co(ba, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Co(si, 1 & si.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? ql(e, t, n)
                              : (Co(si, 1 & si.current),
                                null !== (e = Vl(e, t, n)) ? e.sibling : null);
                        Co(si, 1 & si.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          Co(si, si.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Bl(e, t, n);
                    }
                    return Vl(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), aa && 0 !== (1048576 & t.flags) && ea(t, Ko, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Ul(e, t), (e = t.pendingProps);
              var o = To(t, Eo.current);
              Ba(t, n), (o = _i(null, t, r, e, o, n));
              var i = Bi();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ro(r) ? ((i = !0), Oo(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    Ta(t),
                    (o.updater = Ha),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    $a(t, r, e, n),
                    (t = El(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    aa && i && ta(t),
                    kl(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Ul(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Rc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === j) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = va(r, e)),
                  o)
                ) {
                  case 0:
                    t = Cl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Nl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, va(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Cl(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Nl(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 3:
              e: {
                if ((Pl(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  Ra(e, t),
                  qa(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = jl(e, t, r, n, (o = ul(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = jl(e, t, r, n, (o = ul(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = co(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = Ya(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pa(), r === o)) {
                    t = Vl(e, t, n);
                    break e;
                  }
                  kl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && ua(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                no(r, o)
                  ? (l = null)
                  : null !== i && no(r, i) && (t.flags |= 32),
                zl(e, t),
                kl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ua(t), null;
            case 13:
              return ql(e, t, n);
            case 4:
              return (
                oi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ja(t, null, r, n)) : kl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                xl(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 7:
              return kl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return kl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  Co(ba, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === o.children && !Po.current) {
                      t = Vl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === i.tag) {
                              (c = Fa(-1, n & -n)).tag = 2;
                              var u = i.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (i.lanes |= n),
                              null !== (c = i.alternate) && (c.lanes |= n),
                              _a(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          _a(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                kl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ba(t, n),
                (r = r((o = za(o)))),
                (t.flags |= 1),
                kl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = va((r = t.type), t.pendingProps)),
                Sl(e, t, r, (o = va(r.type, o)), n)
              );
            case 15:
              return _l(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : va(r, o)),
                Ul(e, t),
                (t.tag = 1),
                Ro(r) ? ((e = !0), Oo(t)) : (e = !1),
                Ba(t, n),
                Ua(t, r, o),
                $a(t, r, o, n),
                El(null, t, r, !0, e, n)
              );
            case 19:
              return Wl(e, t, n);
            case 22:
              return Bl(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Xc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gc(e) {
          this._internalRoot = e;
        }
        function Qc(e) {
          this._internalRoot = e;
        }
        function Jc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Yc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zc() {}
        function eu(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" === typeof o) {
              var l = o;
              o = function () {
                var e = Vc(i);
                l.call(e);
              };
            }
            Uc(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Vc(i);
                    a.call(e);
                  };
                }
                var i = Wc(t, r, e, 0, null, !1, 0, "", Zc);
                return (
                  (e._reactRootContainer = i),
                  (e[go] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  dc(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Vc(s);
                  l.call(e);
                };
              }
              var s = Mc(e, 0, !1, null, 0, !1, 0, "", Zc);
              return (
                (e._reactRootContainer = s),
                (e[go] = s.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                dc(function () {
                  Uc(t, s, n, r);
                }),
                s
              );
            })(n, t, e, o, r);
          return Vc(i);
        }
        (Qc.prototype.render = Gc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Uc(e, t, null, null);
          }),
          (Qc.prototype.unmount = Gc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                dc(function () {
                  Uc(null, e, null, null);
                }),
                  (t[go] = null);
              }
            }),
          (Qc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Rt.length && 0 !== t && t < Rt[n].priority;
                n++
              );
              Rt.splice(n, 0, e), 0 === n && Ot(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (bt(t, 1 | n),
                    oc(t, Je()),
                    0 === (6 & Es) && ((Ws = Je() + 500), Wo()));
                }
                break;
              case 13:
                dc(function () {
                  var t = Pa(e, 1);
                  if (null !== t) {
                    var n = tc();
                    rc(t, e, 1, n);
                  }
                }),
                  Kc(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = Pa(e, 134217728);
              if (null !== t) rc(t, e, 134217728, tc());
              Kc(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = nc(e),
                n = Pa(e, t);
              if (null !== n) rc(n, e, t, tc());
              Kc(e, t);
            }
          }),
          (_t = function () {
            return yt;
          }),
          (Bt = function (e, t) {
            var n = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Y(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = xo(r);
                      if (!o) throw Error(a(90));
                      K(r), Y(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = uc),
          (Ee = dc);
        var tu = {
            usingClientEntryPoint: !1,
            Events: [wo, ko, xo, ze, Ce, uc],
          },
          nu = {
            findFiberByHostInstance: yo,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          ru = {
            bundleType: nu.bundleType,
            version: nu.version,
            rendererPackageName: nu.rendererPackageName,
            rendererConfig: nu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ve(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ou.isDisabled && ou.supportsFiber)
            try {
              (ot = ou.inject(ru)), (at = ou);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Jc(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Jc(e)) throw Error(a(299));
            var n = !1,
              r = "",
              o = Xc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Mc(e, 1, !1, null, 0, n, 0, r, o)),
              (e[go] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Gc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return dc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Yc(t)) throw Error(a(200));
            return eu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Jc(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = "",
              l = Xc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Wc(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
              (e[go] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Qc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Yc(t)) throw Error(a(200));
            return eu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Yc(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (dc(function () {
                eu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[go] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Yc(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return eu(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      82: (e, t) => {
        var n = 60103,
          r = 60106,
          o = 60107,
          a = 60108,
          i = 60114,
          l = 60109,
          s = 60110,
          c = 60112,
          u = 60113,
          d = 60120,
          f = 60115,
          h = 60116,
          p = 60121,
          g = 60122,
          m = 60117,
          v = 60129,
          b = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var y = Symbol.for;
          (n = y("react.element")),
            (r = y("react.portal")),
            (o = y("react.fragment")),
            (a = y("react.strict_mode")),
            (i = y("react.profiler")),
            (l = y("react.provider")),
            (s = y("react.context")),
            (c = y("react.forward_ref")),
            (u = y("react.suspense")),
            (d = y("react.suspense_list")),
            (f = y("react.memo")),
            (h = y("react.lazy")),
            (p = y("react.block")),
            (g = y("react.server.block")),
            (m = y("react.fundamental")),
            (v = y("react.debug_trace_mode")),
            (b = y("react.legacy_hidden"));
        }
        function w(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                switch ((e = e.type)) {
                  case o:
                  case i:
                  case a:
                  case u:
                  case d:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case c:
                      case h:
                      case f:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case r:
                return t;
            }
          }
        }
      },
      86: (e, t, n) => {
        n(82);
      },
      153: (e, t, n) => {
        var r = n(43),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            a = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: c,
            ref: u,
            props: a,
            _owner: l.current,
          };
        }
        (t.Fragment = a), (t.jsx = c), (t.jsxs = c);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          m = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || p);
        }
        function b() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || p);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = v.prototype);
        var w = (y.prototype = new b());
        (w.constructor = y), g(w, v.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          S = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function B(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              x.call(t, o) && !_.hasOwnProperty(o) && (a[o] = t[o]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            a.children = c;
          }
          if (e && e.defaultProps)
            for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: S.current,
          };
        }
        function z(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function E(e, t, o, a, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === a ? "." + N(s, 0) : a),
              k(i)
                ? ((o = ""),
                  null != e && (o = e.replace(C, "$&/") + "/"),
                  E(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (z(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(C, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (a = "" === a ? "." : a + ":"), k(e)))
            for (var c = 0; c < e.length; c++) {
              var u = a + N((l = e[c]), c);
              s += E(l, t, o, u, i);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (h && e[h]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(l = e.next()).done; )
              s += E((l = l.value), t, o, (u = a + N(l, c++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return s;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            E(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var T = { current: null },
          R = { transition: null },
          F = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: R,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!z(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = y),
          (t.StrictMode = a),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = g({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = S.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                x.call(t, c) &&
                  !_.hasOwnProperty(c) &&
                  (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = r;
            else if (1 < c) {
              s = Array(c);
              for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
              o.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = B),
          (t.createFactory = function (e) {
            var t = B.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = z),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = R.transition;
            R.transition = {};
            try {
              e();
            } finally {
              R.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React.",
            );
          }),
          (t.useCallback = function (e, t) {
            return T.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return T.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return T.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return T.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return T.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (t.useState = function (e) {
            return T.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return T.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return T.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                c = l + 1,
                u = e[c];
              if (0 > a(s, n))
                c < o && 0 > a(u, s)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(c < o && 0 > a(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          h = 3,
          p = !1,
          g = !1,
          m = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) o(u);
            else {
              if (!(t.startTime <= e)) break;
              o(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function k(e) {
          if (((m = !1), w(e), !g))
            if (null !== r(c)) (g = !0), R(x);
            else {
              var t = r(u);
              null !== t && F(k, t.startTime - e);
            }
        }
        function x(e, n) {
          (g = !1), m && ((m = !1), b(z), (z = -1)), (p = !0);
          var a = h;
          try {
            for (
              w(n), f = r(c);
              null !== f && (!(f.expirationTime > n) || (e && !E()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (h = f.priorityLevel);
                var l = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (f.callback = l)
                    : f === r(c) && o(c),
                  w(n);
              } else o(c);
              f = r(c);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(u);
              null !== d && F(k, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (h = a), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          _ = !1,
          B = null,
          z = -1,
          C = 5,
          N = -1;
        function E() {
          return !(t.unstable_now() - N < C);
        }
        function P() {
          if (null !== B) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = B(!0, e);
            } finally {
              n ? S() : ((_ = !1), (B = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof y)
          S = function () {
            y(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var j = new MessageChannel(),
            T = j.port2;
          (j.port1.onmessage = P),
            (S = function () {
              T.postMessage(null);
            });
        } else
          S = function () {
            v(P, 0);
          };
        function R(e) {
          (B = e), _ || ((_ = !0), S());
        }
        function F(e, n) {
          z = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            g || p || ((g = !0), R(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (m ? (b(z), (z = -1)) : (m = !0), F(k, a - i)))
                : ((e.sortIndex = l), n(c, e), g || p || ((g = !0), R(x))),
              e
            );
          }),
          (t.unstable_shouldYield = E),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ("object" === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && "function" === typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & o && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(a, i), a;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".ed3810f9.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "my-app:";
      n.l = (r, o, a, i) => {
        if (e[r]) e[r].push(o);
        else {
          var l, s;
          if (void 0 !== a)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + a
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + a),
            (l.src = r)),
            (e[r] = [o]);
          var f = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(h);
              var o = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                o && o.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            h = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: l }),
              12e4,
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/User-Sandbox-Simulator/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var a = new Promise((n, r) => (o = e[t] = [n, r]));
            r.push((o[2] = a));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = a),
                    (l.request = i),
                    o[1](l);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      };
      var t = (t, r) => {
          var o,
            a,
            i = r[0],
            l = r[1],
            s = r[2],
            c = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in l) n.o(l, o) && (n.m[o] = l[o]);
            if (s) s(n);
          }
          for (t && t(r); c < i.length; c++)
            (a = i[c]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkmy_app = self.webpackChunkmy_app || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      var e = {};
      n.r(e),
        n.d(e, {
          APIConnectionError: () => bi,
          APIConnectionTimeoutError: () => yi,
          APIError: () => mi,
          APIUserAbortError: () => vi,
          AuthenticationError: () => ki,
          BadRequestError: () => wi,
          ConflictError: () => _i,
          InternalServerError: () => Ci,
          NotFoundError: () => Si,
          OpenAIError: () => gi,
          PermissionDeniedError: () => xi,
          RateLimitError: () => zi,
          UnprocessableEntityError: () => Bi,
        });
      var t = n(43),
        r = n.t(t, 2),
        o = n(391);
      const a = Symbol.for("fui.slotRenderFunction"),
        i = Symbol.for("fui.slotElementType");
      function l(e) {
        return Boolean(
          null === e || void 0 === e ? void 0 : e.hasOwnProperty(i),
        );
      }
      n(86);
      function s(e, t) {
        return function (n, r, o, a, s) {
          return l(r)
            ? t(
                (function (e, t) {
                  return { ...t, [i]: e };
                })(n, r),
                null,
                o,
                a,
                s,
              )
            : l(n)
              ? t(n, r, o, a, s)
              : e(n, r, o, a, s);
        };
      }
      function c(e) {
        const { as: t, [i]: n, [a]: r, ...o } = e,
          l = o,
          s = "string" === typeof n && null !== t && void 0 !== t ? t : n;
        return (
          "string" !== typeof s && t && (l.as = t),
          { elementType: s, props: l, renderFunction: r }
        );
      }
      var u = n(579);
      const d = n.t(u, 2),
        f = s(d.jsx, (e, n, r) => {
          const { elementType: o, renderFunction: a, props: i } = c(e),
            l = { ...i, ...n };
          return a
            ? d.jsx(t.Fragment, { children: a(o, l) }, r)
            : d.jsx(o, l, r);
        }),
        h = s(d.jsxs, (e, n, r) => {
          const { elementType: o, renderFunction: a, props: i } = c(e),
            l = { ...i, ...n };
          return a
            ? d.jsx(
                t.Fragment,
                {
                  children: a(o, {
                    ...l,
                    children: d.jsxs(
                      t.Fragment,
                      { children: l.children },
                      void 0,
                    ),
                  }),
                },
                r,
              )
            : d.jsxs(o, l, r);
        });
      function p(e) {
        0;
      }
      function g() {
        return (
          "undefined" !== typeof window &&
          !(!window.document || !window.document.createElement)
        );
      }
      const m = t.createContext("ltr"),
        v = (e) => {
          let { children: n, dir: r } = e;
          return t.createElement(m.Provider, { value: r }, n);
        };
      function b() {
        return t.useContext(m);
      }
      const y = t.createContext(void 0),
        w = {
          targetDocument: "object" === typeof document ? document : void 0,
          dir: "ltr",
        },
        k = y.Provider;
      function x() {
        var e;
        return null !== (e = t.useContext(y)) && void 0 !== e ? e : w;
      }
      const S = t.createContext(void 0),
        _ = S.Provider,
        B = t.createContext(void 0),
        z = B.Provider;
      const C = t.createContext(void 0),
        N = () => {},
        E = C.Provider,
        P = (e) => {
          var n, r;
          return null !==
            (r =
              null === (n = t.useContext(C)) || void 0 === n ? void 0 : n[e]) &&
            void 0 !== r
            ? r
            : N;
        },
        j = t.createContext(void 0),
        T = j.Provider;
      const R = t.createContext(void 0),
        F = R.Provider;
      function D() {
        var e;
        return null !== (e = t.useContext(R)) && void 0 !== e ? e : {};
      }
      const I = t.createContext(void 0),
        O = I.Provider;
      const q = "undefined" === typeof window ? n.g : window,
        L = "@griffel/";
      function A(e, t) {
        return (
          q[Symbol.for(L + e)] || (q[Symbol.for(L + e)] = t),
          q[Symbol.for(L + e)]
        );
      }
      const M = A("DEFINITION_LOOKUP_TABLE", {}),
        H = "data-make-styles-bucket",
        W = "f",
        U = 7,
        V = "___",
        $ = V.length + U,
        K = 0,
        X = 1,
        G = {
          all: 1,
          animation: 1,
          animationRange: 1,
          background: 1,
          backgroundPosition: 1,
          border: 1,
          borderBlock: 1,
          borderBlockEnd: 1,
          borderBlockStart: 1,
          borderBottom: 1,
          borderColor: 1,
          borderImage: 1,
          borderInline: 1,
          borderInlineEnd: 1,
          borderInlineStart: 1,
          borderLeft: 1,
          borderRadius: 1,
          borderRight: 1,
          borderStyle: 1,
          borderTop: 1,
          borderWidth: 1,
          caret: 1,
          columns: 1,
          columnRule: 1,
          containIntrinsicSize: 1,
          container: 1,
          flex: 1,
          flexFlow: 1,
          font: 1,
          gap: 1,
          grid: 1,
          gridArea: 1,
          gridColumn: 1,
          gridRow: 1,
          gridTemplate: 1,
          inset: 1,
          insetBlock: 1,
          insetInline: 1,
          lineClamp: 1,
          listStyle: 1,
          margin: 1,
          marginBlock: 1,
          marginInline: 1,
          mask: 1,
          maskBorder: 1,
          motion: 1,
          offset: 1,
          outline: 1,
          overflow: 1,
          overscrollBehavior: 1,
          padding: 1,
          paddingBlock: 1,
          paddingInline: 1,
          placeItems: 1,
          placeContent: 1,
          placeSelf: 1,
          scrollMargin: 1,
          scrollMarginBlock: 1,
          scrollMarginInline: 1,
          scrollPadding: 1,
          scrollPaddingBlock: 1,
          scrollPaddingInline: 1,
          scrollSnapMargin: 1,
          scrollTimeline: 1,
          textDecoration: 1,
          textEmphasis: 1,
          transition: 1,
          viewTimeline: 1,
        };
      function Q(e, t, n) {
        const r = [];
        if (((n[H] = t), e)) for (const o in n) e.setAttribute(o, n[o]);
        return {
          elementAttributes: n,
          insertRule: function (t) {
            return (null === e || void 0 === e ? void 0 : e.sheet)
              ? e.sheet.insertRule(t, e.sheet.cssRules.length)
              : r.push(t);
          },
          element: e,
          bucketName: t,
          cssRules: () =>
            (null === e || void 0 === e ? void 0 : e.sheet)
              ? Array.from(e.sheet.cssRules).map((e) => e.cssText)
              : r,
        };
      }
      const J = [
        "r",
        "d",
        "l",
        "v",
        "w",
        "f",
        "i",
        "h",
        "a",
        "s",
        "k",
        "t",
        "m",
        "c",
      ].reduce((e, t, n) => ((e[t] = n), e), {});
      function Y(e, t, n, r) {
        let o =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        const a = "m" === e,
          i = a ? e + o.m : e;
        if (!r.stylesheets[i]) {
          const l = t && t.createElement("style"),
            s = Q(l, e, {
              ...r.styleElementAttributes,
              ...(a && { media: o.m }),
            });
          (r.stylesheets[i] = s),
            t &&
              l &&
              t.head.insertBefore(
                l,
                (function (e, t, n, r, o) {
                  const a = J[n];
                  let i = (e) => a - J[e.getAttribute(H)],
                    l = e.head.querySelectorAll("[".concat(H, "]"));
                  if ("m" === n && o) {
                    const t = e.head.querySelectorAll(
                      "[".concat(H, '="').concat(n, '"]'),
                    );
                    t.length &&
                      ((l = t),
                      (i = (e) => r.compareMediaQueries(o.m, e.media)));
                  }
                  const s = l.length;
                  let c = s - 1;
                  for (; c >= 0; ) {
                    const e = l.item(c);
                    if (i(e) > 0) return e.nextSibling;
                    c--;
                  }
                  if (s > 0) return l.item(0);
                  return t ? t.nextSibling : null;
                })(t, n, e, r, o),
              );
        }
        return r.stylesheets[i];
      }
      ":(".concat(
        [
          "-moz-placeholder",
          "-moz-focus-inner",
          "-moz-focusring",
          "-ms-input-placeholder",
          "-moz-read-write",
          "-moz-read-only",
        ].join("|"),
        ")",
      );
      function Z(e, t) {
        try {
          e.insertRule(t);
        } catch (n) {
          0;
        }
      }
      let ee = 0;
      const te = (e, t) => (e < t ? -1 : e > t ? 1 : 0);
      function ne() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "undefined" === typeof document
                ? void 0
                : document,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
            unstable_filterCSSRule: n,
            insertionPoint: r,
            styleElementAttributes: o,
            compareMediaQueries: a = te,
          } = t,
          i = {
            insertionCache: {},
            stylesheets: {},
            styleElementAttributes: Object.freeze(o),
            compareMediaQueries: a,
            id: "d".concat(ee++),
            insertCSSRules(t) {
              for (const a in t) {
                const l = t[a];
                for (let t = 0, s = l.length; t < s; t++) {
                  const [s, c] = ((o = l[t]), Array.isArray(o) ? o : [o]),
                    u = Y(a, e, r || null, i, c);
                  i.insertionCache[s] ||
                    ((i.insertionCache[s] = a), n ? n(s) && Z(u, s) : Z(u, s));
                }
              }
              var o;
            },
          };
        return i;
      }
      const re = t.createContext(ne());
      function oe() {
        return t.useContext(re);
      }
      function ae(e, t) {
        var n;
        const r = e;
        var o;
        return Boolean(
          (null === r ||
          void 0 === r ||
          null === (n = r.ownerDocument) ||
          void 0 === n
            ? void 0
            : n.defaultView) &&
            r instanceof
              r.ownerDocument.defaultView[
                null !==
                  (o =
                    null === t || void 0 === t ? void 0 : t.constructorName) &&
                void 0 !== o
                  ? o
                  : "HTMLElement"
              ],
        );
      }
      var ie = "undefined" !== typeof WeakRef,
        le = class {
          constructor(e) {
            ie && "object" === typeof e
              ? (this._weakRef = new WeakRef(e))
              : (this._instance = e);
          }
          deref() {
            var e, t;
            let n;
            return (
              this._weakRef
                ? ((n = null == (e = this._weakRef) ? void 0 : e.deref()),
                  n || delete this._weakRef)
                : ((n = this._instance),
                  (null == (t = null == n ? void 0 : n.isDisposed)
                    ? void 0
                    : t.call(n)) && delete this._instance),
              n
            );
          }
        },
        se = "keyborg:focusin";
      var ce = !1;
      var ue = 0,
        de = class {
          constructor(e, t) {
            (this._isNavigatingWithKeyboard_DO_NOT_USE = !1),
              (this._onFocusIn = (e) => {
                if (this._isMouseUsedTimer) return;
                if (this.isNavigatingWithKeyboard) return;
                const t = e.detail;
                t.relatedTarget &&
                  (t.isFocusedProgrammatically ||
                    void 0 === t.isFocusedProgrammatically ||
                    (this.isNavigatingWithKeyboard = !0));
              }),
              (this._onMouseDown = (e) => {
                if (
                  0 === e.buttons ||
                  (0 === e.clientX &&
                    0 === e.clientY &&
                    0 === e.screenX &&
                    0 === e.screenY)
                )
                  return;
                const t = this._win;
                t &&
                  (this._isMouseUsedTimer &&
                    t.clearTimeout(this._isMouseUsedTimer),
                  (this._isMouseUsedTimer = t.setTimeout(() => {
                    delete this._isMouseUsedTimer;
                  }, 1e3))),
                  (this.isNavigatingWithKeyboard = !1);
              }),
              (this._onKeyDown = (e) => {
                this.isNavigatingWithKeyboard
                  ? this._shouldDismissKeyboardNavigation(e) &&
                    this._scheduleDismiss()
                  : this._shouldTriggerKeyboardNavigation(e) &&
                    (this.isNavigatingWithKeyboard = !0);
              }),
              (this.id = "c" + ++ue),
              (this._win = e);
            const n = e.document;
            if (t) {
              const e = t.triggerKeys,
                n = t.dismissKeys;
              (null == e ? void 0 : e.length) &&
                (this._triggerKeys = new Set(e)),
                (null == n ? void 0 : n.length) &&
                  (this._dismissKeys = new Set(n));
            }
            n.addEventListener(se, this._onFocusIn, !0),
              n.addEventListener("mousedown", this._onMouseDown, !0),
              e.addEventListener("keydown", this._onKeyDown, !0),
              (function (e) {
                const t = e;
                ce ||
                  (ce = (function (e) {
                    const t = e.HTMLElement,
                      n = t.prototype.focus;
                    let r = !1;
                    return (
                      (t.prototype.focus = function () {
                        r = !0;
                      }),
                      e.document.createElement("button").focus(),
                      (t.prototype.focus = n),
                      r
                    );
                  })(t));
                const n = t.HTMLElement.prototype.focus;
                if (n.__keyborgNativeFocus) return;
                t.HTMLElement.prototype.focus = s;
                const r = new Set(),
                  o = (e) => {
                    const t = e.target;
                    if (!t) return;
                    const n = new CustomEvent("keyborg:focusout", {
                      cancelable: !0,
                      bubbles: !0,
                      composed: !0,
                      detail: { originalEvent: e },
                    });
                    t.dispatchEvent(n);
                  },
                  a = (e) => {
                    const t = e.target;
                    if (!t) return;
                    let n = e.composedPath()[0];
                    const l = new Set();
                    for (; n; )
                      n.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                        ? (l.add(n), (n = n.host))
                        : (n = n.parentNode);
                    for (const i of r) {
                      const e = i.deref();
                      (e && l.has(e)) ||
                        (r.delete(i),
                        e &&
                          (e.removeEventListener("focusin", a, !0),
                          e.removeEventListener("focusout", o, !0)));
                    }
                    i(t, e.relatedTarget || void 0);
                  },
                  i = (e, t, n) => {
                    var i;
                    const s = e.shadowRoot;
                    if (s) {
                      for (const e of r) if (e.deref() === s) return;
                      return (
                        s.addEventListener("focusin", a, !0),
                        s.addEventListener("focusout", o, !0),
                        void r.add(new le(s))
                      );
                    }
                    const c = { relatedTarget: t, originalEvent: n },
                      u = new CustomEvent(se, {
                        cancelable: !0,
                        bubbles: !0,
                        composed: !0,
                        detail: c,
                      });
                    (u.details = c),
                      (ce || l.lastFocusedProgrammatically) &&
                        ((c.isFocusedProgrammatically =
                          e ===
                          (null == (i = l.lastFocusedProgrammatically)
                            ? void 0
                            : i.deref())),
                        (l.lastFocusedProgrammatically = void 0)),
                      e.dispatchEvent(u);
                  },
                  l = (t.__keyborgData = {
                    focusInHandler: a,
                    focusOutHandler: o,
                    shadowTargets: r,
                  });
                function s() {
                  const e = t.__keyborgData;
                  return (
                    e && (e.lastFocusedProgrammatically = new le(this)),
                    n.apply(this, arguments)
                  );
                }
                t.document.addEventListener(
                  "focusin",
                  t.__keyborgData.focusInHandler,
                  !0,
                ),
                  t.document.addEventListener(
                    "focusout",
                    t.__keyborgData.focusOutHandler,
                    !0,
                  );
                let c = t.document.activeElement;
                for (; c && c.shadowRoot; )
                  i(c), (c = c.shadowRoot.activeElement);
                s.__keyborgNativeFocus = n;
              })(e);
          }
          get isNavigatingWithKeyboard() {
            return this._isNavigatingWithKeyboard_DO_NOT_USE;
          }
          set isNavigatingWithKeyboard(e) {
            this._isNavigatingWithKeyboard_DO_NOT_USE !== e &&
              ((this._isNavigatingWithKeyboard_DO_NOT_USE = e), this.update());
          }
          dispose() {
            const e = this._win;
            if (e) {
              this._isMouseUsedTimer &&
                (e.clearTimeout(this._isMouseUsedTimer),
                (this._isMouseUsedTimer = void 0)),
                this._dismissTimer &&
                  (e.clearTimeout(this._dismissTimer),
                  (this._dismissTimer = void 0)),
                (function (e) {
                  const t = e,
                    n = t.HTMLElement.prototype,
                    r = n.focus.__keyborgNativeFocus,
                    o = t.__keyborgData;
                  if (o) {
                    t.document.removeEventListener(
                      "focusin",
                      o.focusInHandler,
                      !0,
                    ),
                      t.document.removeEventListener(
                        "focusout",
                        o.focusOutHandler,
                        !0,
                      );
                    for (const e of o.shadowTargets) {
                      const t = e.deref();
                      t &&
                        (t.removeEventListener("focusin", o.focusInHandler, !0),
                        t.removeEventListener(
                          "focusout",
                          o.focusOutHandler,
                          !0,
                        ));
                    }
                    o.shadowTargets.clear(), delete t.__keyborgData;
                  }
                  r && (n.focus = r);
                })(e);
              const t = e.document;
              t.removeEventListener(se, this._onFocusIn, !0),
                t.removeEventListener("mousedown", this._onMouseDown, !0),
                e.removeEventListener("keydown", this._onKeyDown, !0),
                delete this._win;
            }
          }
          isDisposed() {
            return !!this._win;
          }
          update() {
            var e, t;
            const n =
              null == (t = null == (e = this._win) ? void 0 : e.__keyborg)
                ? void 0
                : t.refs;
            if (n)
              for (const r of Object.keys(n))
                fe.update(n[r], this.isNavigatingWithKeyboard);
          }
          _shouldTriggerKeyboardNavigation(e) {
            var t;
            if ("Tab" === e.key) return !0;
            const n =
                null == (t = this._win) ? void 0 : t.document.activeElement,
              r = !this._triggerKeys || this._triggerKeys.has(e.keyCode),
              o =
                n &&
                ("INPUT" === n.tagName ||
                  "TEXTAREA" === n.tagName ||
                  n.isContentEditable);
            return r && !o;
          }
          _shouldDismissKeyboardNavigation(e) {
            var t;
            return null == (t = this._dismissKeys) ? void 0 : t.has(e.keyCode);
          }
          _scheduleDismiss() {
            const e = this._win;
            if (e) {
              this._dismissTimer &&
                (e.clearTimeout(this._dismissTimer),
                (this._dismissTimer = void 0));
              const t = e.document.activeElement;
              this._dismissTimer = e.setTimeout(() => {
                this._dismissTimer = void 0;
                const n = e.document.activeElement;
                t && n && t === n && (this.isNavigatingWithKeyboard = !1);
              }, 500);
            }
          }
        },
        fe = class e {
          constructor(e, t) {
            (this._cb = []), (this._id = "k" + ++ue), (this._win = e);
            const n = e.__keyborg;
            n
              ? ((this._core = n.core), (n.refs[this._id] = this))
              : ((this._core = new de(e, t)),
                (e.__keyborg = {
                  core: this._core,
                  refs: { [this._id]: this },
                }));
          }
          static create(t, n) {
            return new e(t, n);
          }
          static dispose(e) {
            e.dispose();
          }
          static update(e, t) {
            e._cb.forEach((e) => e(t));
          }
          dispose() {
            var e;
            const t = null == (e = this._win) ? void 0 : e.__keyborg;
            (null == t ? void 0 : t.refs[this._id]) &&
              (delete t.refs[this._id],
              0 === Object.keys(t.refs).length &&
                (t.core.dispose(), delete this._win.__keyborg)),
              (this._cb = []),
              delete this._core,
              delete this._win;
          }
          isNavigatingWithKeyboard() {
            var e;
            return !!(null == (e = this._core)
              ? void 0
              : e.isNavigatingWithKeyboard);
          }
          subscribe(e) {
            this._cb.push(e);
          }
          unsubscribe(e) {
            const t = this._cb.indexOf(e);
            t >= 0 && this._cb.splice(t, 1);
          }
          setVal(e) {
            this._core && (this._core.isNavigatingWithKeyboard = e);
          }
        };
      ":global([".concat("data-keyboard-nav", "])");
      const he = "data-fui-focus-visible";
      function pe(e, t) {
        if (ge(e)) return () => {};
        const n = { current: void 0 },
          r = ((o = t), fe.create(o, a));
        var o, a;
        function i(e) {
          r.isNavigatingWithKeyboard() &&
            ae(e) &&
            ((n.current = e), e.setAttribute(he, ""));
        }
        function l() {
          n.current && (n.current.removeAttribute(he), (n.current = void 0));
        }
        r.subscribe((e) => {
          e || l();
        });
        const s = (e) => {
            l();
            i(e.composedPath()[0]);
          },
          c = (t) => {
            (!t.relatedTarget ||
              (ae(t.relatedTarget) && !e.contains(t.relatedTarget))) &&
              l();
          };
        return (
          e.addEventListener(se, s),
          e.addEventListener("focusout", c),
          (e.focusVisible = !0),
          e.contains(t.document.activeElement) && i(t.document.activeElement),
          () => {
            var t;
            l(),
              e.removeEventListener(se, s),
              e.removeEventListener("focusout", c),
              delete e.focusVisible,
              (t = r),
              fe.dispose(t);
          }
        );
      }
      function ge(e) {
        return (
          !!e &&
          (!!e.focusVisible ||
            ge(null === e || void 0 === e ? void 0 : e.parentElement))
        );
      }
      function me() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const n = x(),
          r = t.useRef(null);
        var o;
        const a =
          null !== (o = e.targetDocument) && void 0 !== o
            ? o
            : n.targetDocument;
        return (
          t.useEffect(() => {
            if (
              (null === a || void 0 === a ? void 0 : a.defaultView) &&
              r.current
            )
              return pe(r.current, a.defaultView);
          }, [r, a]),
          r
        );
      }
      function ve(e, n) {
        const { defaultProps: r, elementType: o } = n,
          l = (function (e) {
            if (
              "string" === typeof e ||
              "number" === typeof e ||
              Array.isArray(e) ||
              t.isValidElement(e)
            )
              return { children: e };
            0;
            return e;
          })(e),
          s = { ...r, ...l, [i]: o };
        return (
          l &&
            "function" === typeof l.children &&
            ((s[a] = l.children),
            (s.children = null === r || void 0 === r ? void 0 : r.children)),
          s
        );
      }
      function be(e, t) {
        if (null !== e && (void 0 !== e || t.renderByDefault)) return ve(e, t);
      }
      const ye = function () {
          const e = {};
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          for (const o of n) {
            const t = Array.isArray(o) ? o : Object.keys(o);
            for (const n of t) e[n] = 1;
          }
          return e;
        },
        we = ye([
          "onAuxClick",
          "onAnimationEnd",
          "onAnimationStart",
          "onCopy",
          "onCut",
          "onPaste",
          "onCompositionEnd",
          "onCompositionStart",
          "onCompositionUpdate",
          "onFocus",
          "onFocusCapture",
          "onBlur",
          "onBlurCapture",
          "onChange",
          "onInput",
          "onSubmit",
          "onLoad",
          "onError",
          "onKeyDown",
          "onKeyDownCapture",
          "onKeyPress",
          "onKeyUp",
          "onAbort",
          "onCanPlay",
          "onCanPlayThrough",
          "onDurationChange",
          "onEmptied",
          "onEncrypted",
          "onEnded",
          "onLoadedData",
          "onLoadedMetadata",
          "onLoadStart",
          "onPause",
          "onPlay",
          "onPlaying",
          "onProgress",
          "onRateChange",
          "onSeeked",
          "onSeeking",
          "onStalled",
          "onSuspend",
          "onTimeUpdate",
          "onVolumeChange",
          "onWaiting",
          "onClick",
          "onClickCapture",
          "onContextMenu",
          "onDoubleClick",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragExit",
          "onDragLeave",
          "onDragOver",
          "onDragStart",
          "onDrop",
          "onMouseDown",
          "onMouseDownCapture",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onMouseUpCapture",
          "onSelect",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "onScroll",
          "onWheel",
          "onPointerCancel",
          "onPointerDown",
          "onPointerEnter",
          "onPointerLeave",
          "onPointerMove",
          "onPointerOut",
          "onPointerOver",
          "onPointerUp",
          "onGotPointerCapture",
          "onLostPointerCapture",
        ]),
        ke = ye([
          "accessKey",
          "children",
          "className",
          "contentEditable",
          "dir",
          "draggable",
          "hidden",
          "htmlFor",
          "id",
          "lang",
          "ref",
          "role",
          "style",
          "tabIndex",
          "title",
          "translate",
          "spellCheck",
          "name",
        ]),
        xe = ye(["itemID", "itemProp", "itemRef", "itemScope", "itemType"]),
        Se = ye(ke, we, xe),
        _e = ye(Se, ["form"]),
        Be = ye(Se, ["height", "loop", "muted", "preload", "src", "width"]),
        ze = ye(Be, ["poster"]),
        Ce = ye(Se, ["start"]),
        Ne = ye(Se, ["value"]),
        Ee = ye(Se, [
          "download",
          "href",
          "hrefLang",
          "media",
          "rel",
          "target",
          "type",
        ]),
        Pe = ye(Se, ["dateTime"]),
        je = ye(Se, [
          "autoFocus",
          "disabled",
          "form",
          "formAction",
          "formEncType",
          "formMethod",
          "formNoValidate",
          "formTarget",
          "type",
          "value",
        ]);
      const Te = {
        label: _e,
        audio: Be,
        video: ze,
        ol: Ce,
        li: Ne,
        a: Ee,
        button: je,
        input: ye(je, [
          "accept",
          "alt",
          "autoCapitalize",
          "autoComplete",
          "checked",
          "dirname",
          "form",
          "height",
          "inputMode",
          "list",
          "max",
          "maxLength",
          "min",
          "multiple",
          "pattern",
          "placeholder",
          "readOnly",
          "required",
          "src",
          "step",
          "size",
          "type",
          "value",
          "width",
        ]),
        textarea: ye(je, [
          "autoCapitalize",
          "cols",
          "dirname",
          "form",
          "maxLength",
          "placeholder",
          "readOnly",
          "required",
          "rows",
          "wrap",
        ]),
        select: ye(je, ["form", "multiple", "required"]),
        option: ye(Se, ["selected", "value"]),
        table: ye(Se, ["cellPadding", "cellSpacing"]),
        tr: Se,
        th: ye(Se, ["colSpan", "rowSpan", "scope"]),
        td: ye(Se, ["colSpan", "headers", "rowSpan", "scope"]),
        colGroup: ye(Se, ["span"]),
        col: ye(Se, ["span"]),
        fieldset: ye(Se, ["disabled", "form"]),
        form: ye(Se, [
          "acceptCharset",
          "action",
          "encType",
          "encType",
          "method",
          "noValidate",
          "target",
        ]),
        iframe: ye(Se, [
          "allow",
          "allowFullScreen",
          "allowPaymentRequest",
          "allowTransparency",
          "csp",
          "height",
          "importance",
          "referrerPolicy",
          "sandbox",
          "src",
          "srcDoc",
          "width",
        ]),
        img: ye(Se, [
          "alt",
          "crossOrigin",
          "height",
          "src",
          "srcSet",
          "useMap",
          "width",
        ]),
        time: Pe,
        dialog: ye(Se, ["open", "onCancel", "onClose"]),
      };
      function Re(e, t, n) {
        const r = (e && Te[e]) || Se;
        return (
          (r.as = 1),
          (function (e, t, n) {
            const r = Array.isArray(t),
              o = {},
              a = Object.keys(e);
            for (const i of a)
              !(
                (!r && t[i]) ||
                (r && t.indexOf(i) >= 0) ||
                0 === i.indexOf("data-") ||
                0 === i.indexOf("aria-")
              ) ||
                (n &&
                  -1 !==
                    (null === n || void 0 === n ? void 0 : n.indexOf(i))) ||
                (o[i] = e[i]);
            return o;
          })(t, r, n)
        );
      }
      const Fe = (e, t, n) => {
        var r;
        return Re(null !== (r = t.as) && void 0 !== r ? r : e, t, n);
      };
      function De() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        const o = t.useCallback(
          (e) => {
            o.current = e;
            for (const t of n)
              "function" === typeof t ? t(e) : t && (t.current = e);
          },
          [...n],
        );
        return o;
      }
      const Ie = g() ? t.useLayoutEffect : t.useEffect,
        Oe = { current: 0 },
        qe = t.createContext(void 0);
      function Le() {
        var e;
        return null !== (e = t.useContext(qe)) && void 0 !== e ? e : Oe;
      }
      const Ae = t.createContext(void 0);
      Ae.Provider;
      function Me() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "fui-",
          n = arguments.length > 1 ? arguments[1] : void 0;
        const o = Le(),
          a = t.useContext(Ae) || "",
          i = r.useId;
        if (i) {
          const r = i(),
            o = t.useMemo(() => r.replace(/:/g, ""), [r]);
          return n || "".concat(a).concat(e).concat(o);
        }
        return t.useMemo(
          () => n || "".concat(a).concat(e).concat(++o.current),
          [a, e, n, o],
        );
      }
      const He = () => {
        const e = {};
        return function (t, n) {
          void 0 === e[t.id] && (t.insertCSSRules(n), (e[t.id] = !0));
        };
      };
      function We(e) {
        for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
          (t =
            1540483477 *
              (65535 &
                (t =
                  (255 & e.charCodeAt(r)) |
                  ((255 & e.charCodeAt(++r)) << 8) |
                  ((255 & e.charCodeAt(++r)) << 16) |
                  ((255 & e.charCodeAt(++r)) << 24))) +
            ((59797 * (t >>> 16)) << 16)),
            (n =
              (1540483477 * (65535 & (t ^= t >>> 24)) +
                ((59797 * (t >>> 16)) << 16)) ^
              (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
        switch (o) {
          case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
          case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
          case 1:
            n =
              1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
              ((59797 * (n >>> 16)) << 16);
        }
        return (
          ((n =
            1540483477 * (65535 & (n ^= n >>> 13)) +
            ((59797 * (n >>> 16)) << 16)) ^
            (n >>> 15)) >>>
          0
        ).toString(36);
      }
      function Ue(e) {
        const t = e.length;
        if (t === U) return e;
        for (let n = t; n < U; n++) e += "0";
        return e;
      }
      function Ve(e, t) {
        return V + Ue(We(e + t));
      }
      function $e(e, t) {
        let n = "";
        for (const r in e) {
          const o = e[r];
          if (o) {
            const e = Array.isArray(o);
            n += "rtl" === t ? (e ? o[1] : o) + " " : (e ? o[0] : o) + " ";
          }
        }
        return n.slice(0, -1);
      }
      function Ke(e, t) {
        const n = {};
        for (const r in e) {
          const o = $e(e[r], t);
          if ("" === o) {
            n[r] = "";
            continue;
          }
          const a = Ve(o, t),
            i = a + " " + o;
          (M[a] = [e[r], t]), (n[r] = i);
        }
        return n;
      }
      function Xe(e, t) {
        const n = (
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : He
        )();
        let r = null,
          o = null;
        return function (a) {
          const { dir: i, renderer: l } = a,
            s = "ltr" === i;
          return (
            s ? null === r && (r = Ke(e, i)) : null === o && (o = Ke(e, i)),
            n(l, t),
            s ? r : o
          );
        };
      }
      const Ge = {};
      function Qe() {
        let e = null,
          t = "",
          n = "";
        const r = new Array(arguments.length);
        for (let c = 0; c < arguments.length; c++) {
          const e = arguments[c];
          if ("string" === typeof e && "" !== e) {
            const o = e.indexOf(V);
            if (-1 === o) t += e + " ";
            else {
              const a = e.substr(o, $);
              o > 0 && (t += e.slice(0, o)), (n += a), (r[c] = a);
            }
            0;
          }
        }
        if ("" === n) return t.slice(0, -1);
        const o = Ge[n];
        if (void 0 !== o) return t + o;
        const a = [];
        for (let c = 0; c < arguments.length; c++) {
          const t = r[c];
          if (t) {
            const n = M[t];
            n && (a.push(n[K]), (e = n[X]));
          }
        }
        const i = Object.assign.apply(Object, [{}].concat(a));
        let l = $e(i, e);
        const s = Ve(l, e, r);
        return (l = s + " " + l), (Ge[n] = l), (M[s] = [i, e]), t + l;
      }
      const Je = "fui-FluentProvider",
        Ye = Xe(
          {
            root: {
              sj55zd: "f19n0e5",
              De3pzq: "fxugw4r",
              fsow6f: ["f1o700av", "fes3tcz"],
              Bahqtrf: "fk6fouc",
              Be2twd7: "fkhj508",
              Bhrd7zp: "figsok6",
              Bg96gwp: "f1i3iumi",
            },
          },
          {
            d: [
              ".f19n0e5{color:var(--colorNeutralForeground1);}",
              ".fxugw4r{background-color:var(--colorNeutralBackground1);}",
              ".f1o700av{text-align:left;}",
              ".fes3tcz{text-align:right;}",
              ".fk6fouc{font-family:var(--fontFamilyBase);}",
              ".fkhj508{font-size:var(--fontSizeBase300);}",
              ".figsok6{font-weight:var(--fontWeightRegular);}",
              ".f1i3iumi{line-height:var(--lineHeightBase300);}",
            ],
          },
        ),
        Ze = r.useInsertionEffect ? r.useInsertionEffect : Ie,
        et = (e) => {
          const { targetDocument: n, theme: r, rendererAttributes: o } = e,
            a = t.useRef(),
            i = Me(Je),
            l = o,
            s = t.useMemo(
              () =>
                (function (e, t) {
                  if (t) {
                    const n = Object.keys(t).reduce(
                      (e, n) =>
                        "".concat(e, "--").concat(n, ": ").concat(t[n], "; "),
                      "",
                    );
                    return "".concat(e, " { ").concat(n, " }");
                  }
                  return "".concat(e, " {}");
                })(".".concat(i), r),
              [r, i],
            );
          return (
            (function (e, n) {
              t.useState(() => {
                if (!e) return;
                const t = e.getElementById(n);
                t && e.head.append(t);
              });
            })(n, i),
            Ze(() => {
              const e =
                null === n || void 0 === n ? void 0 : n.getElementById(i);
              return (
                e
                  ? (a.current = e)
                  : ((a.current = ((e, t) => {
                      if (!e) return;
                      const n = e.createElement("style");
                      return (
                        Object.keys(t).forEach((e) => {
                          n.setAttribute(e, t[e]);
                        }),
                        e.head.appendChild(n),
                        n
                      );
                    })(n, { ...l, id: i })),
                    a.current &&
                      ((e, t) => {
                        const n = e.sheet;
                        n &&
                          (n.cssRules.length > 0 && n.deleteRule(0),
                          n.insertRule(t, 0));
                      })(a.current, s)),
                () => {
                  var e;
                  null === (e = a.current) || void 0 === e || e.remove();
                }
              );
            }, [i, n, s, l]),
            { styleTagId: i, rule: s }
          );
        };
      const tt = {},
        nt = (e, n) => {
          const r = x(),
            o = t.useContext(S),
            a = D(),
            i = t.useContext(C) || tt,
            {
              applyStylesToPortals: l = !0,
              customStyleHooks_unstable: s,
              dir: c = r.dir,
              targetDocument: u = r.targetDocument,
              theme: d,
              overrides_unstable: f = {},
            } = e,
            h = rt(o, d),
            p = rt(a, f),
            g = rt(i, s),
            m = oe();
          var v;
          const { styleTagId: b, rule: y } = et({
            theme: h,
            targetDocument: u,
            rendererAttributes:
              null !== (v = m.styleElementAttributes) && void 0 !== v ? v : {},
          });
          return {
            applyStylesToPortals: l,
            customStyleHooks_unstable: g,
            dir: c,
            targetDocument: u,
            theme: h,
            overrides_unstable: p,
            themeClassName: b,
            components: { root: "div" },
            root: ve(
              Fe("div", {
                ...e,
                dir: c,
                ref: De(n, me({ targetDocument: u })),
              }),
              { elementType: "div" },
            ),
            serverStyleProps: {
              cssRule: y,
              attributes: { ...m.styleElementAttributes, id: b },
            },
          };
        };
      function rt(e, t) {
        return e && t ? { ...e, ...t } : e || t;
      }
      const ot = t.forwardRef((e, n) => {
        const r = nt(e, n);
        ((e) => {
          const t = oe(),
            n = Ye({ dir: e.dir, renderer: t });
          e.root.className = Qe(Je, e.themeClassName, n.root, e.root.className);
        })(r);
        const o = (function (e) {
          const {
              applyStylesToPortals: n,
              customStyleHooks_unstable: r,
              dir: o,
              root: a,
              targetDocument: i,
              theme: l,
              themeClassName: s,
              overrides_unstable: c,
            } = e,
            u = t.useMemo(() => ({ dir: o, targetDocument: i }), [o, i]),
            [d] = t.useState(() => ({})),
            f = t.useMemo(() => ({ textDirection: o }), [o]);
          return {
            customStyleHooks_unstable: r,
            overrides_unstable: c,
            provider: u,
            textDirection: o,
            iconDirection: f,
            tooltip: d,
            theme: l,
            themeClassName: n ? a.className : s,
          };
        })(r);
        return ((e, t) => (
          p(),
          f(k, {
            value: t.provider,
            children: f(_, {
              value: t.theme,
              children: f(z, {
                value: t.themeClassName,
                children: f(E, {
                  value: t.customStyleHooks_unstable,
                  children: f(T, {
                    value: t.tooltip,
                    children: f(v, {
                      dir: t.textDirection,
                      children: f(O, {
                        value: t.iconDirection,
                        children: f(F, {
                          value: t.overrides_unstable,
                          children: h(e.root, {
                            children: [
                              g()
                                ? null
                                : f("style", {
                                    dangerouslySetInnerHTML: {
                                      __html: e.serverStyleProps.cssRule,
                                    },
                                    ...e.serverStyleProps.attributes,
                                  }),
                              e.root.children,
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          })
        ))(r, o);
      });
      ot.displayName = "FluentProvider";
      const at = "#050505",
        it = "#0a0a0a",
        lt = "#0f0f0f",
        st = "#141414",
        ct = "#1a1a1a",
        ut = "#1f1f1f",
        dt = "#242424",
        ft = "#292929",
        ht = "#2e2e2e",
        pt = "#333333",
        gt = "#383838",
        mt = "#3d3d3d",
        vt = "#424242",
        bt = "#525252",
        yt = "#575757",
        wt = "#5c5c5c",
        kt = "#666666",
        xt = "#6b6b6b",
        St = "#707070",
        _t = "#757575",
        Bt = "#999999",
        zt = "#adadad",
        Ct = "#b3b3b3",
        Nt = "#bdbdbd",
        Et = "#d6d6d6",
        Pt = "rgba(255, 255, 255, 0.05)",
        jt = "rgba(255, 255, 255, 0.1)",
        Tt = "rgba(255, 255, 255, 0.2)",
        Rt = "rgba(255, 255, 255, 0.4)",
        Ft = "rgba(255, 255, 255, 0.6)",
        Dt = "rgba(0, 0, 0, 0.1)",
        It = "rgba(0, 0, 0, 0.2)",
        Ot = "rgba(0, 0, 0, 0.3)",
        qt = "rgba(0, 0, 0, 0.5)",
        Lt = "rgba(26, 26, 26, 0.5)",
        At = "rgba(31, 31, 31, 0.7)",
        Mt = "rgba(36, 36, 36, 0.5)",
        Ht = "rgba(36, 36, 36, 0.8)",
        Wt = "#ffffff",
        Ut = "#000000",
        Vt = {
          shade50: "#200205",
          shade40: "#3b0509",
          shade30: "#6e0811",
          shade20: "#960b18",
          shade10: "#b10e1c",
          primary: "#c50f1f",
          tint10: "#cc2635",
          tint20: "#d33f4c",
          tint30: "#dc626d",
          tint40: "#eeacb2",
          tint50: "#f6d1d5",
          tint60: "#fdf3f4",
        },
        $t = {
          shade50: "#031403",
          shade40: "#052505",
          shade30: "#094509",
          shade20: "#0c5e0c",
          shade10: "#0e700e",
          primary: "#107c10",
          tint10: "#218c21",
          tint20: "#359b35",
          tint30: "#54b054",
          tint40: "#9fd89f",
          tint50: "#c9eac9",
          tint60: "#f1faf1",
        },
        Kt = {
          red: {
            shade50: "#210809",
            shade40: "#3f1011",
            shade30: "#751d1f",
            shade20: "#9f282b",
            shade10: "#bc2f32",
            primary: "#d13438",
            tint10: "#d7494c",
            tint20: "#dc5e62",
            tint30: "#e37d80",
            tint40: "#f1bbbc",
            tint50: "#f8dadb",
            tint60: "#fdf6f6",
          },
          green: $t,
          darkOrange: {
            shade50: "#230900",
            shade40: "#411200",
            shade30: "#7a2101",
            shade20: "#a62d01",
            shade10: "#c43501",
            primary: "#da3b01",
            tint10: "#de501c",
            tint20: "#e36537",
            tint30: "#e9835e",
            tint40: "#f4bfab",
            tint50: "#f9dcd1",
            tint60: "#fdf6f3",
          },
          yellow: {
            shade50: "#282400",
            shade40: "#4c4400",
            shade30: "#817400",
            shade20: "#c0ad00",
            shade10: "#e4cc00",
            primary: "#fde300",
            tint10: "#fde61e",
            tint20: "#fdea3d",
            tint30: "#feee66",
            tint40: "#fef7b2",
            tint50: "#fffad6",
            tint60: "#fffef5",
          },
          berry: {
            shade50: "#1f091d",
            shade40: "#3a1136",
            shade30: "#6d2064",
            shade20: "#932b88",
            shade10: "#af33a1",
            primary: "#c239b3",
            tint10: "#c94cbc",
            tint20: "#d161c4",
            tint30: "#da7ed0",
            tint40: "#edbbe7",
            tint50: "#f5daf2",
            tint60: "#fdf5fc",
          },
          lightGreen: {
            shade50: "#031a02",
            shade40: "#063004",
            shade30: "#0b5a08",
            shade20: "#0e7a0b",
            shade10: "#11910d",
            primary: "#13a10e",
            tint10: "#27ac22",
            tint20: "#3db838",
            tint30: "#5ec75a",
            tint40: "#a7e3a5",
            tint50: "#cef0cd",
            tint60: "#f2fbf2",
          },
          marigold: {
            shade50: "#251a00",
            shade40: "#463100",
            shade30: "#835b00",
            shade20: "#b27c00",
            shade10: "#d39300",
            primary: "#eaa300",
            tint10: "#edad1c",
            tint20: "#efb839",
            tint30: "#f2c661",
            tint40: "#f9e2ae",
            tint50: "#fcefd3",
            tint60: "#fefbf4",
          },
        },
        Xt = {
          darkRed: {
            shade50: "#130204",
            shade40: "#230308",
            shade30: "#420610",
            shade20: "#590815",
            shade10: "#690a19",
            primary: "#750b1c",
            tint10: "#861b2c",
            tint20: "#962f3f",
            tint30: "#ac4f5e",
            tint40: "#d69ca5",
            tint50: "#e9c7cd",
            tint60: "#f9f0f2",
          },
          cranberry: Vt,
          pumpkin: {
            shade50: "#200d03",
            shade40: "#3d1805",
            shade30: "#712d09",
            shade20: "#9a3d0c",
            shade10: "#b6480e",
            primary: "#ca5010",
            tint10: "#d06228",
            tint20: "#d77440",
            tint30: "#df8e64",
            tint40: "#efc4ad",
            tint50: "#f7dfd2",
            tint60: "#fdf7f4",
          },
          peach: {
            shade50: "#291600",
            shade40: "#4d2a00",
            shade30: "#8f4e00",
            shade20: "#c26a00",
            shade10: "#e67e00",
            primary: "#ff8c00",
            tint10: "#ff9a1f",
            tint20: "#ffa83d",
            tint30: "#ffba66",
            tint40: "#ffddb3",
            tint50: "#ffedd6",
            tint60: "#fffaf5",
          },
          gold: {
            shade50: "#1f1900",
            shade40: "#3a2f00",
            shade30: "#6c5700",
            shade20: "#937700",
            shade10: "#ae8c00",
            primary: "#c19c00",
            tint10: "#c8a718",
            tint20: "#d0b232",
            tint30: "#dac157",
            tint40: "#ecdfa5",
            tint50: "#f5eece",
            tint60: "#fdfbf2",
          },
          brass: {
            shade50: "#181202",
            shade40: "#2e2103",
            shade30: "#553e06",
            shade20: "#745408",
            shade10: "#89640a",
            primary: "#986f0b",
            tint10: "#a47d1e",
            tint20: "#b18c34",
            tint30: "#c1a256",
            tint40: "#e0cea2",
            tint50: "#efe4cb",
            tint60: "#fbf8f2",
          },
          brown: {
            shade50: "#170e07",
            shade40: "#2b1a0e",
            shade30: "#50301a",
            shade20: "#6c4123",
            shade10: "#804d29",
            primary: "#8e562e",
            tint10: "#9c663f",
            tint20: "#a97652",
            tint30: "#bb8f6f",
            tint40: "#ddc3b0",
            tint50: "#edded3",
            tint60: "#faf7f4",
          },
          forest: {
            shade50: "#0c1501",
            shade40: "#162702",
            shade30: "#294903",
            shade20: "#376304",
            shade10: "#427505",
            primary: "#498205",
            tint10: "#599116",
            tint20: "#6ba02b",
            tint30: "#85b44c",
            tint40: "#bdd99b",
            tint50: "#dbebc7",
            tint60: "#f6faf0",
          },
          seafoam: {
            shade50: "#002111",
            shade40: "#003d20",
            shade30: "#00723b",
            shade20: "#009b51",
            shade10: "#00b85f",
            primary: "#00cc6a",
            tint10: "#19d279",
            tint20: "#34d889",
            tint30: "#5ae0a0",
            tint40: "#a8f0cd",
            tint50: "#cff7e4",
            tint60: "#f3fdf8",
          },
          darkGreen: {
            shade50: "#021102",
            shade40: "#032003",
            shade30: "#063b06",
            shade20: "#085108",
            shade10: "#0a5f0a",
            primary: "#0b6a0b",
            tint10: "#1a7c1a",
            tint20: "#2d8e2d",
            tint30: "#4da64d",
            tint40: "#9ad29a",
            tint50: "#c6e7c6",
            tint60: "#f0f9f0",
          },
          lightTeal: {
            shade50: "#001d1f",
            shade40: "#00373a",
            shade30: "#00666d",
            shade20: "#008b94",
            shade10: "#00a5af",
            primary: "#00b7c3",
            tint10: "#18bfca",
            tint20: "#32c8d1",
            tint30: "#58d3db",
            tint40: "#a6e9ed",
            tint50: "#cef3f5",
            tint60: "#f2fcfd",
          },
          teal: {
            shade50: "#001516",
            shade40: "#012728",
            shade30: "#02494c",
            shade20: "#026467",
            shade10: "#037679",
            primary: "#038387",
            tint10: "#159195",
            tint20: "#2aa0a4",
            tint30: "#4cb4b7",
            tint40: "#9bd9db",
            tint50: "#c7ebec",
            tint60: "#f0fafa",
          },
          steel: {
            shade50: "#000f12",
            shade40: "#001b22",
            shade30: "#00333f",
            shade20: "#004555",
            shade10: "#005265",
            primary: "#005b70",
            tint10: "#0f6c81",
            tint20: "#237d92",
            tint30: "#4496a9",
            tint40: "#94c8d4",
            tint50: "#c3e1e8",
            tint60: "#eff7f9",
          },
          blue: {
            shade50: "#001322",
            shade40: "#002440",
            shade30: "#004377",
            shade20: "#005ba1",
            shade10: "#006cbf",
            primary: "#0078d4",
            tint10: "#1a86d9",
            tint20: "#3595de",
            tint30: "#5caae5",
            tint40: "#a9d3f2",
            tint50: "#d0e7f8",
            tint60: "#f3f9fd",
          },
          royalBlue: {
            shade50: "#000c16",
            shade40: "#00172a",
            shade30: "#002c4e",
            shade20: "#003b6a",
            shade10: "#00467e",
            primary: "#004e8c",
            tint10: "#125e9a",
            tint20: "#286fa8",
            tint30: "#4a89ba",
            tint40: "#9abfdc",
            tint50: "#c7dced",
            tint60: "#f0f6fa",
          },
          cornflower: {
            shade50: "#0d1126",
            shade40: "#182047",
            shade30: "#2c3c85",
            shade20: "#3c51b4",
            shade10: "#4760d5",
            primary: "#4f6bed",
            tint10: "#637cef",
            tint20: "#778df1",
            tint30: "#93a4f4",
            tint40: "#c8d1fa",
            tint50: "#e1e6fc",
            tint60: "#f7f9fe",
          },
          navy: {
            shade50: "#00061d",
            shade40: "#000c36",
            shade30: "#001665",
            shade20: "#001e89",
            shade10: "#0023a2",
            primary: "#0027b4",
            tint10: "#173bbd",
            tint20: "#3050c6",
            tint30: "#546fd2",
            tint40: "#a3b2e8",
            tint50: "#ccd5f3",
            tint60: "#f2f4fc",
          },
          lavender: {
            shade50: "#120f25",
            shade40: "#221d46",
            shade30: "#3f3682",
            shade20: "#5649b0",
            shade10: "#6656d1",
            primary: "#7160e8",
            tint10: "#8172eb",
            tint20: "#9184ee",
            tint30: "#a79cf1",
            tint40: "#d2ccf8",
            tint50: "#e7e4fb",
            tint60: "#f9f8fe",
          },
          purple: {
            shade50: "#0f0717",
            shade40: "#1c0e2b",
            shade30: "#341a51",
            shade20: "#46236e",
            shade10: "#532982",
            primary: "#5c2e91",
            tint10: "#6b3f9e",
            tint20: "#7c52ab",
            tint30: "#9470bd",
            tint40: "#c6b1de",
            tint50: "#e0d3ed",
            tint60: "#f7f4fb",
          },
          grape: {
            shade50: "#160418",
            shade40: "#29072e",
            shade30: "#4c0d55",
            shade20: "#671174",
            shade10: "#7a1589",
            primary: "#881798",
            tint10: "#952aa4",
            tint20: "#a33fb1",
            tint30: "#b55fc1",
            tint40: "#d9a7e0",
            tint50: "#eaceef",
            tint60: "#faf2fb",
          },
          lilac: {
            shade50: "#1c0b1f",
            shade40: "#35153a",
            shade30: "#63276d",
            shade20: "#863593",
            shade10: "#9f3faf",
            primary: "#b146c2",
            tint10: "#ba58c9",
            tint20: "#c36bd1",
            tint30: "#cf87da",
            tint40: "#e6bfed",
            tint50: "#f2dcf5",
            tint60: "#fcf6fd",
          },
          pink: {
            shade50: "#24091b",
            shade40: "#441232",
            shade30: "#80215d",
            shade20: "#ad2d7e",
            shade10: "#cd3595",
            primary: "#e43ba6",
            tint10: "#e750b0",
            tint20: "#ea66ba",
            tint30: "#ef85c8",
            tint40: "#f7c0e3",
            tint50: "#fbddf0",
            tint60: "#fef6fb",
          },
          magenta: {
            shade50: "#1f0013",
            shade40: "#390024",
            shade30: "#6b0043",
            shade20: "#91005a",
            shade10: "#ac006b",
            primary: "#bf0077",
            tint10: "#c71885",
            tint20: "#ce3293",
            tint30: "#d957a8",
            tint40: "#eca5d1",
            tint50: "#f5cee6",
            tint60: "#fcf2f9",
          },
          plum: {
            shade50: "#13000c",
            shade40: "#240017",
            shade30: "#43002b",
            shade20: "#5a003b",
            shade10: "#6b0045",
            primary: "#77004d",
            tint10: "#87105d",
            tint20: "#98246f",
            tint30: "#ad4589",
            tint40: "#d696c0",
            tint50: "#e9c4dc",
            tint60: "#faf0f6",
          },
          beige: {
            shade50: "#141313",
            shade40: "#252323",
            shade30: "#444241",
            shade20: "#5d5958",
            shade10: "#6e6968",
            primary: "#7a7574",
            tint10: "#8a8584",
            tint20: "#9a9594",
            tint30: "#afabaa",
            tint40: "#d7d4d4",
            tint50: "#eae8e8",
            tint60: "#faf9f9",
          },
          mink: {
            shade50: "#0f0e0e",
            shade40: "#1c1b1a",
            shade30: "#343231",
            shade20: "#474443",
            shade10: "#54514f",
            primary: "#5d5a58",
            tint10: "#706d6b",
            tint20: "#84817e",
            tint30: "#9e9b99",
            tint40: "#cecccb",
            tint50: "#e5e4e3",
            tint60: "#f8f8f8",
          },
          platinum: {
            shade50: "#111314",
            shade40: "#1f2426",
            shade30: "#3b4447",
            shade20: "#505c60",
            shade10: "#5f6d71",
            primary: "#69797e",
            tint10: "#79898d",
            tint20: "#89989d",
            tint30: "#a0adb2",
            tint40: "#cdd6d8",
            tint50: "#e4e9ea",
            tint60: "#f8f9fa",
          },
          anchor: {
            shade50: "#090a0b",
            shade40: "#111315",
            shade30: "#202427",
            shade20: "#2b3135",
            shade10: "#333a3f",
            primary: "#394146",
            tint10: "#4d565c",
            tint20: "#626c72",
            tint30: "#808a90",
            tint40: "#bcc3c7",
            tint50: "#dbdfe1",
            tint60: "#f6f7f8",
          },
        },
        Gt = {
          cranberry: Vt,
          green: $t,
          orange: {
            shade50: "#271002",
            shade40: "#4a1e04",
            shade30: "#8a3707",
            shade20: "#bc4b09",
            shade10: "#de590b",
            primary: "#f7630c",
            tint10: "#f87528",
            tint20: "#f98845",
            tint30: "#faa06b",
            tint40: "#fdcfb4",
            tint50: "#fee5d7",
            tint60: "#fff9f5",
          },
        },
        Qt = { success: "green", warning: "orange", danger: "cranberry" },
        Jt = [
          "red",
          "green",
          "darkOrange",
          "yellow",
          "berry",
          "lightGreen",
          "marigold",
        ].reduce((e, t) => {
          const n = t.slice(0, 1).toUpperCase() + t.slice(1),
            r = {
              ["colorPalette".concat(n, "Background1")]: Kt[t].shade40,
              ["colorPalette".concat(n, "Background2")]: Kt[t].shade30,
              ["colorPalette".concat(n, "Background3")]: Kt[t].primary,
              ["colorPalette".concat(n, "Foreground1")]: Kt[t].tint30,
              ["colorPalette".concat(n, "Foreground2")]: Kt[t].tint40,
              ["colorPalette".concat(n, "Foreground3")]: Kt[t].tint20,
              ["colorPalette".concat(n, "BorderActive")]: Kt[t].tint30,
              ["colorPalette".concat(n, "Border1")]: Kt[t].primary,
              ["colorPalette".concat(n, "Border2")]: Kt[t].tint20,
            };
          return Object.assign(e, r);
        }, {});
      (Jt.colorPaletteRedForeground3 = Kt.red.tint30),
        (Jt.colorPaletteRedBorder2 = Kt.red.tint30),
        (Jt.colorPaletteGreenForeground3 = Kt.green.tint40),
        (Jt.colorPaletteGreenBorder2 = Kt.green.tint40),
        (Jt.colorPaletteDarkOrangeForeground3 = Kt.darkOrange.tint30),
        (Jt.colorPaletteDarkOrangeBorder2 = Kt.darkOrange.tint30),
        (Jt.colorPaletteRedForegroundInverted = Kt.red.primary),
        (Jt.colorPaletteGreenForegroundInverted = Kt.green.primary),
        (Jt.colorPaletteYellowForegroundInverted = Kt.yellow.shade30);
      const Yt = [
        "darkRed",
        "cranberry",
        "pumpkin",
        "peach",
        "gold",
        "brass",
        "brown",
        "forest",
        "seafoam",
        "darkGreen",
        "lightTeal",
        "teal",
        "steel",
        "blue",
        "royalBlue",
        "cornflower",
        "navy",
        "lavender",
        "purple",
        "grape",
        "lilac",
        "pink",
        "magenta",
        "plum",
        "beige",
        "mink",
        "platinum",
        "anchor",
      ].reduce((e, t) => {
        const n = t.slice(0, 1).toUpperCase() + t.slice(1),
          r = {
            ["colorPalette".concat(n, "Background2")]: Xt[t].shade30,
            ["colorPalette".concat(n, "Foreground2")]: Xt[t].tint40,
            ["colorPalette".concat(n, "BorderActive")]: Xt[t].tint30,
          };
        return Object.assign(e, r);
      }, {});
      (Yt.colorPaletteDarkRedBackground2 = Xt.darkRed.shade20),
        (Yt.colorPalettePlumBackground2 = Xt.plum.shade20);
      const Zt = { ...Jt, ...Yt },
        en = Object.entries(Qt).reduce((e, t) => {
          let [n, r] = t;
          const o = n.slice(0, 1).toUpperCase() + n.slice(1),
            a = {
              ["colorStatus".concat(o, "Background1")]: Gt[r].shade40,
              ["colorStatus".concat(o, "Background2")]: Gt[r].shade30,
              ["colorStatus".concat(o, "Background3")]: Gt[r].primary,
              ["colorStatus".concat(o, "Foreground1")]: Gt[r].tint30,
              ["colorStatus".concat(o, "Foreground2")]: Gt[r].tint40,
              ["colorStatus".concat(o, "Foreground3")]: Gt[r].tint20,
              ["colorStatus".concat(o, "BorderActive")]: Gt[r].tint30,
              ["colorStatus".concat(o, "ForegroundInverted")]: Gt[r].shade10,
              ["colorStatus".concat(o, "Border1")]: Gt[r].primary,
              ["colorStatus".concat(o, "Border2")]: Gt[r].tint20,
            };
          return Object.assign(e, a);
        }, {});
      (en.colorStatusDangerBackground3Hover = Gt[Qt.danger].shade10),
        (en.colorStatusDangerBackground3Pressed = Gt[Qt.danger].shade20),
        (en.colorStatusDangerForeground3 = Gt[Qt.danger].tint40),
        (en.colorStatusDangerBorder2 = Gt[Qt.danger].tint30),
        (en.colorStatusSuccessForeground3 = Gt[Qt.success].tint40),
        (en.colorStatusSuccessBorder2 = Gt[Qt.success].tint40),
        (en.colorStatusWarningForegroundInverted = Gt[Qt.warning].shade20);
      const tn = {
          borderRadiusNone: "0",
          borderRadiusSmall: "2px",
          borderRadiusMedium: "4px",
          borderRadiusLarge: "6px",
          borderRadiusXLarge: "8px",
          borderRadiusCircular: "10000px",
        },
        nn = {
          fontSizeBase100: "10px",
          fontSizeBase200: "12px",
          fontSizeBase300: "14px",
          fontSizeBase400: "16px",
          fontSizeBase500: "20px",
          fontSizeBase600: "24px",
          fontSizeHero700: "28px",
          fontSizeHero800: "32px",
          fontSizeHero900: "40px",
          fontSizeHero1000: "68px",
        },
        rn = {
          lineHeightBase100: "14px",
          lineHeightBase200: "16px",
          lineHeightBase300: "20px",
          lineHeightBase400: "22px",
          lineHeightBase500: "28px",
          lineHeightBase600: "32px",
          lineHeightHero700: "36px",
          lineHeightHero800: "40px",
          lineHeightHero900: "52px",
          lineHeightHero1000: "92px",
        },
        on = {
          fontWeightRegular: 400,
          fontWeightMedium: 500,
          fontWeightSemibold: 600,
          fontWeightBold: 700,
        },
        an = {
          fontFamilyBase:
            "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
          fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
          fontFamilyNumeric:
            "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
        },
        ln = {
          strokeWidthThin: "1px",
          strokeWidthThick: "2px",
          strokeWidthThicker: "3px",
          strokeWidthThickest: "4px",
        };
      function sn(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return {
          ["shadow2".concat(n)]: "0 0 2px ".concat(e, ", 0 1px 2px ").concat(t),
          ["shadow4".concat(n)]: "0 0 2px ".concat(e, ", 0 2px 4px ").concat(t),
          ["shadow8".concat(n)]: "0 0 2px ".concat(e, ", 0 4px 8px ").concat(t),
          ["shadow16".concat(n)]: "0 0 2px "
            .concat(e, ", 0 8px 16px ")
            .concat(t),
          ["shadow28".concat(n)]: "0 0 8px "
            .concat(e, ", 0 14px 28px ")
            .concat(t),
          ["shadow64".concat(n)]: "0 0 8px "
            .concat(e, ", 0 32px 64px ")
            .concat(t),
        };
      }
      const cn = {
          durationUltraFast: "50ms",
          durationFaster: "100ms",
          durationFast: "150ms",
          durationNormal: "200ms",
          durationGentle: "250ms",
          durationSlow: "300ms",
          durationSlower: "400ms",
          durationUltraSlow: "500ms",
        },
        un = {
          curveAccelerateMax: "cubic-bezier(0.9,0.1,1,0.2)",
          curveAccelerateMid: "cubic-bezier(1,0,1,1)",
          curveAccelerateMin: "cubic-bezier(0.8,0,0.78,1)",
          curveDecelerateMax: "cubic-bezier(0.1,0.9,0.2,1)",
          curveDecelerateMid: "cubic-bezier(0,0,0,1)",
          curveDecelerateMin: "cubic-bezier(0.33,0,0.1,1)",
          curveEasyEaseMax: "cubic-bezier(0.8,0,0.2,1)",
          curveEasyEase: "cubic-bezier(0.33,0,0.67,1)",
          curveLinear: "cubic-bezier(0,0,1,1)",
        },
        dn = "0",
        fn = "2px",
        hn = "4px",
        pn = "6px",
        gn = "8px",
        mn = "10px",
        vn = "12px",
        bn = "16px",
        yn = "20px",
        wn = "24px",
        kn = "32px",
        xn = {
          spacingHorizontalNone: dn,
          spacingHorizontalXXS: fn,
          spacingHorizontalXS: hn,
          spacingHorizontalSNudge: pn,
          spacingHorizontalS: gn,
          spacingHorizontalMNudge: mn,
          spacingHorizontalM: vn,
          spacingHorizontalL: bn,
          spacingHorizontalXL: yn,
          spacingHorizontalXXL: wn,
          spacingHorizontalXXXL: kn,
        },
        Sn = {
          spacingVerticalNone: dn,
          spacingVerticalXXS: fn,
          spacingVerticalXS: hn,
          spacingVerticalSNudge: pn,
          spacingVerticalS: gn,
          spacingVerticalMNudge: mn,
          spacingVerticalM: vn,
          spacingVerticalL: bn,
          spacingVerticalXL: yn,
          spacingVerticalXXL: wn,
          spacingVerticalXXXL: kn,
        },
        _n = ((e) => {
          const t = ((e) => ({
            colorNeutralForeground1: Wt,
            colorNeutralForeground1Hover: Wt,
            colorNeutralForeground1Pressed: Wt,
            colorNeutralForeground1Selected: Wt,
            colorNeutralForeground2: Et,
            colorNeutralForeground2Hover: Wt,
            colorNeutralForeground2Pressed: Wt,
            colorNeutralForeground2Selected: Wt,
            colorNeutralForeground2BrandHover: e[100],
            colorNeutralForeground2BrandPressed: e[90],
            colorNeutralForeground2BrandSelected: e[100],
            colorNeutralForeground3: zt,
            colorNeutralForeground3Hover: Et,
            colorNeutralForeground3Pressed: Et,
            colorNeutralForeground3Selected: Et,
            colorNeutralForeground3BrandHover: e[100],
            colorNeutralForeground3BrandPressed: e[90],
            colorNeutralForeground3BrandSelected: e[100],
            colorNeutralForeground4: Bt,
            colorNeutralForegroundDisabled: wt,
            colorNeutralForegroundInvertedDisabled: Rt,
            colorBrandForegroundLink: e[100],
            colorBrandForegroundLinkHover: e[110],
            colorBrandForegroundLinkPressed: e[90],
            colorBrandForegroundLinkSelected: e[100],
            colorNeutralForeground2Link: Et,
            colorNeutralForeground2LinkHover: Wt,
            colorNeutralForeground2LinkPressed: Wt,
            colorNeutralForeground2LinkSelected: Wt,
            colorCompoundBrandForeground1: e[100],
            colorCompoundBrandForeground1Hover: e[110],
            colorCompoundBrandForeground1Pressed: e[90],
            colorBrandForeground1: e[100],
            colorBrandForeground2: e[110],
            colorBrandForeground2Hover: e[130],
            colorBrandForeground2Pressed: e[160],
            colorNeutralForeground1Static: dt,
            colorNeutralForegroundStaticInverted: Wt,
            colorNeutralForegroundInverted: dt,
            colorNeutralForegroundInvertedHover: dt,
            colorNeutralForegroundInvertedPressed: dt,
            colorNeutralForegroundInvertedSelected: dt,
            colorNeutralForegroundInverted2: dt,
            colorNeutralForegroundOnBrand: Wt,
            colorNeutralForegroundInvertedLink: Wt,
            colorNeutralForegroundInvertedLinkHover: Wt,
            colorNeutralForegroundInvertedLinkPressed: Wt,
            colorNeutralForegroundInvertedLinkSelected: Wt,
            colorBrandForegroundInverted: e[80],
            colorBrandForegroundInvertedHover: e[70],
            colorBrandForegroundInvertedPressed: e[60],
            colorBrandForegroundOnLight: e[80],
            colorBrandForegroundOnLightHover: e[70],
            colorBrandForegroundOnLightPressed: e[50],
            colorBrandForegroundOnLightSelected: e[60],
            colorNeutralBackground1: ft,
            colorNeutralBackground1Hover: mt,
            colorNeutralBackground1Pressed: ut,
            colorNeutralBackground1Selected: gt,
            colorNeutralBackground2: ut,
            colorNeutralBackground2Hover: pt,
            colorNeutralBackground2Pressed: st,
            colorNeutralBackground2Selected: ht,
            colorNeutralBackground3: st,
            colorNeutralBackground3Hover: ft,
            colorNeutralBackground3Pressed: it,
            colorNeutralBackground3Selected: dt,
            colorNeutralBackground4: it,
            colorNeutralBackground4Hover: ut,
            colorNeutralBackground4Pressed: Ut,
            colorNeutralBackground4Selected: ct,
            colorNeutralBackground5: Ut,
            colorNeutralBackground5Hover: st,
            colorNeutralBackground5Pressed: at,
            colorNeutralBackground5Selected: lt,
            colorNeutralBackground6: pt,
            colorNeutralBackgroundInverted: Wt,
            colorNeutralBackgroundStatic: mt,
            colorNeutralBackgroundAlpha: Lt,
            colorNeutralBackgroundAlpha2: At,
            colorSubtleBackground: "transparent",
            colorSubtleBackgroundHover: gt,
            colorSubtleBackgroundPressed: ht,
            colorSubtleBackgroundSelected: pt,
            colorSubtleBackgroundLightAlphaHover: Ht,
            colorSubtleBackgroundLightAlphaPressed: Mt,
            colorSubtleBackgroundLightAlphaSelected: "transparent",
            colorSubtleBackgroundInverted: "transparent",
            colorSubtleBackgroundInvertedHover: Dt,
            colorSubtleBackgroundInvertedPressed: Ot,
            colorSubtleBackgroundInvertedSelected: It,
            colorTransparentBackground: "transparent",
            colorTransparentBackgroundHover: "transparent",
            colorTransparentBackgroundPressed: "transparent",
            colorTransparentBackgroundSelected: "transparent",
            colorNeutralBackgroundDisabled: st,
            colorNeutralBackgroundInvertedDisabled: jt,
            colorNeutralStencil1: yt,
            colorNeutralStencil2: pt,
            colorNeutralStencil1Alpha: jt,
            colorNeutralStencil2Alpha: Pt,
            colorBackgroundOverlay: qt,
            colorScrollbarOverlay: Ft,
            colorBrandBackground: e[70],
            colorBrandBackgroundHover: e[80],
            colorBrandBackgroundPressed: e[40],
            colorBrandBackgroundSelected: e[60],
            colorCompoundBrandBackground: e[100],
            colorCompoundBrandBackgroundHover: e[110],
            colorCompoundBrandBackgroundPressed: e[90],
            colorBrandBackgroundStatic: e[80],
            colorBrandBackground2: e[20],
            colorBrandBackground2Hover: e[40],
            colorBrandBackground2Pressed: e[10],
            colorBrandBackground3Static: e[60],
            colorBrandBackground4Static: e[40],
            colorBrandBackgroundInverted: Wt,
            colorBrandBackgroundInvertedHover: e[160],
            colorBrandBackgroundInvertedPressed: e[140],
            colorBrandBackgroundInvertedSelected: e[150],
            colorNeutralCardBackground: pt,
            colorNeutralCardBackgroundHover: mt,
            colorNeutralCardBackgroundPressed: ht,
            colorNeutralCardBackgroundSelected: gt,
            colorNeutralCardBackgroundDisabled: st,
            colorNeutralStrokeAccessible: zt,
            colorNeutralStrokeAccessibleHover: Nt,
            colorNeutralStrokeAccessiblePressed: Ct,
            colorNeutralStrokeAccessibleSelected: e[100],
            colorNeutralStroke1: kt,
            colorNeutralStroke1Hover: _t,
            colorNeutralStroke1Pressed: xt,
            colorNeutralStroke1Selected: St,
            colorNeutralStroke2: bt,
            colorNeutralStroke3: mt,
            colorNeutralStrokeSubtle: it,
            colorNeutralStrokeOnBrand: ft,
            colorNeutralStrokeOnBrand2: Wt,
            colorNeutralStrokeOnBrand2Hover: Wt,
            colorNeutralStrokeOnBrand2Pressed: Wt,
            colorNeutralStrokeOnBrand2Selected: Wt,
            colorBrandStroke1: e[100],
            colorBrandStroke2: e[50],
            colorBrandStroke2Hover: e[50],
            colorBrandStroke2Pressed: e[30],
            colorBrandStroke2Contrast: e[50],
            colorCompoundBrandStroke: e[100],
            colorCompoundBrandStrokeHover: e[110],
            colorCompoundBrandStrokePressed: e[90],
            colorNeutralStrokeDisabled: vt,
            colorNeutralStrokeInvertedDisabled: Rt,
            colorTransparentStroke: "transparent",
            colorTransparentStrokeInteractive: "transparent",
            colorTransparentStrokeDisabled: "transparent",
            colorNeutralStrokeAlpha: jt,
            colorNeutralStrokeAlpha2: Tt,
            colorStrokeFocus1: Ut,
            colorStrokeFocus2: Wt,
            colorNeutralShadowAmbient: "rgba(0,0,0,0.24)",
            colorNeutralShadowKey: "rgba(0,0,0,0.28)",
            colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.12)",
            colorNeutralShadowKeyLighter: "rgba(0,0,0,0.14)",
            colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.40)",
            colorNeutralShadowKeyDarker: "rgba(0,0,0,0.48)",
            colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
            colorBrandShadowKey: "rgba(0,0,0,0.25)",
          }))(e);
          return {
            ...tn,
            ...nn,
            ...rn,
            ...an,
            ...on,
            ...ln,
            ...xn,
            ...Sn,
            ...cn,
            ...un,
            ...t,
            ...Zt,
            ...en,
            ...sn(t.colorNeutralShadowAmbient, t.colorNeutralShadowKey),
            ...sn(t.colorBrandShadowAmbient, t.colorBrandShadowKey, "Brand"),
          };
        })({
          10: "#061724",
          20: "#082338",
          30: "#0a2e4a",
          40: "#0c3b5e",
          50: "#0e4775",
          60: "#0f548c",
          70: "#115ea3",
          80: "#0f6cbd",
          90: "#2886de",
          100: "#479ef5",
          110: "#62abf5",
          120: "#77b7f7",
          130: "#96c6fa",
          140: "#b4d6fa",
          150: "#cfe4fa",
          160: "#ebf3fc",
        }),
        Bn = "Enter",
        zn = " ",
        Cn = (e) => {
          const n = t.useRef(() => {
            throw new Error("Cannot call an event handler while rendering");
          });
          return (
            Ie(() => {
              n.current = e;
            }, [e]),
            t.useCallback(
              function () {
                return (0, n.current)(...arguments);
              },
              [n],
            )
          );
        };
      function Nn(e, t) {
        const {
            disabled: n,
            disabledFocusable: r = !1,
            "aria-disabled": o,
            onClick: a,
            onKeyDown: i,
            onKeyUp: l,
            ...s
          } = null !== t && void 0 !== t ? t : {},
          c = "string" === typeof o ? "true" === o : o,
          u = n || r || c,
          d = Cn((e) => {
            u
              ? (e.preventDefault(), e.stopPropagation())
              : null === a || void 0 === a || a(e);
          }),
          f = Cn((e) => {
            if ((null === i || void 0 === i || i(e), e.isDefaultPrevented()))
              return;
            const t = e.key;
            if (u && (t === Bn || t === zn))
              return e.preventDefault(), void e.stopPropagation();
            t !== zn
              ? t === Bn && (e.preventDefault(), e.currentTarget.click())
              : e.preventDefault();
          }),
          h = Cn((e) => {
            if ((null === l || void 0 === l || l(e), e.isDefaultPrevented()))
              return;
            const t = e.key;
            if (u && (t === Bn || t === zn))
              return e.preventDefault(), void e.stopPropagation();
            t === zn && (e.preventDefault(), e.currentTarget.click());
          });
        if ("button" === e || void 0 === e)
          return {
            ...s,
            disabled: n && !r,
            "aria-disabled": !!r || c,
            onClick: r ? void 0 : d,
            onKeyUp: r ? void 0 : l,
            onKeyDown: r ? void 0 : i,
          };
        {
          const t = {
            role: "button",
            tabIndex: n && !r ? void 0 : 0,
            ...s,
            onClick: d,
            onKeyUp: h,
            onKeyDown: f,
            "aria-disabled": n || r || c,
          };
          return "a" === e && u && (t.href = void 0), t;
        }
      }
      const En = t.createContext(void 0),
        Pn = {},
        jn =
          (En.Provider,
          (e, n) => {
            const { size: r } = (() => {
                var e;
                return null !== (e = t.useContext(En)) && void 0 !== e ? e : Pn;
              })(),
              {
                appearance: o = "secondary",
                as: a = "button",
                disabled: i = !1,
                disabledFocusable: l = !1,
                icon: s,
                iconPosition: c = "before",
                shape: u = "rounded",
                size: d = null !== r && void 0 !== r ? r : "medium",
              } = e,
              f = be(s, { elementType: "span" });
            return {
              appearance: o,
              disabled: i,
              disabledFocusable: l,
              iconPosition: c,
              shape: u,
              size: d,
              iconOnly: Boolean(
                (null === f || void 0 === f ? void 0 : f.children) &&
                  !e.children,
              ),
              components: { root: "button", icon: "span" },
              root: ve(Fe(a, Nn(e.as, e)), {
                elementType: "button",
                defaultProps: { ref: n, type: "button" },
              }),
              icon: f,
            };
          }),
        Tn = "var(--colorNeutralBackground6)",
        Rn = "var(--colorNeutralBackgroundInverted)",
        Fn = "var(--colorBrandBackground)",
        Dn = "var(--colorCompoundBrandBackgroundHover)",
        In = "var(--colorBrandBackgroundInverted)",
        On = "var(--strokeWidthThin)";
      const qn = r.useInsertionEffect ? r.useInsertionEffect : void 0,
        Ln = () => {
          const e = {};
          return function (t, n) {
            qn &&
            "undefined" !== typeof window &&
            window.document &&
            window.document.createElement
              ? qn(() => {
                  t.insertCSSRules(n);
                }, [t, n])
              : void 0 === e[t.id] && (t.insertCSSRules(n), (e[t.id] = !0));
          };
        };
      function An(e, t, n) {
        const r = (function (e, t, n) {
          const r = (
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : He
          )();
          return function (o) {
            const { dir: a, renderer: i } = o,
              l = "ltr" === a ? e : t || e;
            return r(i, Array.isArray(n) ? { r: n } : n), l;
          };
        })(e, t, n, Ln);
        return function () {
          const e = b(),
            t = oe();
          return r({ dir: e, renderer: t });
        };
      }
      function Mn(e, t) {
        const n = Xe(e, t, Ln);
        return function () {
          const e = b(),
            t = oe();
          return n({ dir: e, renderer: t });
        };
      }
      const Hn = "fui-Button",
        Wn = "fui-Button__icon",
        Un =
          ("calc(".concat(On, " + 0.25px)"),
          An("r1alrhcs", null, {
            r: [
              ".r1alrhcs{align-items:center;box-sizing:border-box;display:inline-flex;justify-content:center;text-decoration-line:none;vertical-align:middle;margin:0;overflow:hidden;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);font-family:var(--fontFamilyBase);outline-style:none;padding:5px var(--spacingHorizontalM);min-width:96px;border-radius:var(--borderRadiusMedium);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);transition-duration:var(--durationFaster);transition-property:background,border,color;transition-timing-function:var(--curveEasyEase);}",
              ".r1alrhcs:hover{background-color:var(--colorNeutralBackground1Hover);border-color:var(--colorNeutralStroke1Hover);color:var(--colorNeutralForeground1Hover);cursor:pointer;}",
              ".r1alrhcs:hover:active{background-color:var(--colorNeutralBackground1Pressed);border-color:var(--colorNeutralStroke1Pressed);color:var(--colorNeutralForeground1Pressed);outline-style:none;}",
              ".r1alrhcs[data-fui-focus-visible]{border-color:var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);border-width:1px;outline:var(--strokeWidthThick) solid var(--colorTransparentStroke);box-shadow:0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;z-index:1;}",
            ],
            s: [
              "@media screen and (prefers-reduced-motion: reduce){.r1alrhcs{transition-duration:0.01ms;}}",
              "@media (forced-colors: active){.r1alrhcs:focus{border-color:ButtonText;}.r1alrhcs:hover{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}.r1alrhcs:hover:active{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}}",
              "@supports (-moz-appearance:button){.r1alrhcs[data-fui-focus-visible]{box-shadow:0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}",
            ],
          })),
        Vn = An("rywnvv2", null, [
          ".rywnvv2{align-items:center;display:inline-flex;justify-content:center;font-size:20px;height:20px;width:20px;--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}",
        ]),
        $n = Mn(
          {
            outline: {
              De3pzq: "f1c21dwh",
              Jwef8y: "fjxutwb",
              iro3zm: "fwiml72",
            },
            primary: {
              De3pzq: "ffp7eso",
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              sj55zd: "f1phragk",
              Jwef8y: "f15wkkf3",
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              Bi91k9c: "f1rq72xc",
              iro3zm: "fnp9lpt",
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
              B2d53fq: "f1d6v5y2",
              Bsw6fvg: "f1rirnrt",
              Bjwas2f: "f1uu00uk",
              Bn1d65q: ["fkvaka8", "f9a0qzu"],
              Bxeuatn: "f1ux7til",
              n51gp8: ["f9a0qzu", "fkvaka8"],
              Bbusuzp: "f1lkg8j3",
              ycbfsm: "fkc42ay",
              Bqrx1nm: "fq7113v",
              pgvf35: "ff1wgvm",
              Bh7lczh: ["fiob0tu", "f1x4h75k"],
              dpv3f4: "f1j6scgf",
              Bpnjhaq: ["f1x4h75k", "fiob0tu"],
              ze5xyy: "f4xjyn1",
              g2kj27: "fbgcvur",
              Bf756sw: "f1ks1yx8",
              Bow2dr7: ["f1o6qegi", "fmxjhhp"],
              Bvhedfk: "fcnxywj",
              Gye4lf: ["fmxjhhp", "f1o6qegi"],
              pc6evw: "f9ddjv3",
            },
            secondary: {},
            subtle: {
              De3pzq: "fhovq9v",
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              sj55zd: "fkfq4zb",
              Jwef8y: "f1t94bn6",
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              Bi91k9c: "fnwyq0v",
              Bk3fhr4: "ft1hn21",
              Bmfj8id: "fuxngvv",
              Bbdnnc7: "fy5bs14",
              iro3zm: "fsv2rcd",
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
              B2d53fq: "f1omzyqd",
              em6i61: "f1dfjoow",
              vm6p8p: "f1j98vj9",
              x3br3k: "fj8yq94",
              ze5xyy: "f4xjyn1",
              Bx3q9su: "f1et0tmh",
              pc6evw: "f9ddjv3",
              xd2cci: "f1wi8ngl",
            },
            transparent: {
              De3pzq: "f1c21dwh",
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              sj55zd: "fkfq4zb",
              Jwef8y: "fjxutwb",
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              Bi91k9c: "f139oj5f",
              Bk3fhr4: "ft1hn21",
              Bmfj8id: "fuxngvv",
              iro3zm: "fwiml72",
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
              B2d53fq: "f1fg1p5m",
              em6i61: "f1dfjoow",
              vm6p8p: "f1j98vj9",
              Bqrx1nm: "f1tme0vf",
              ze5xyy: "f4xjyn1",
              g2kj27: "f18onu3q",
              pc6evw: "f9ddjv3",
            },
            circular: {
              Bbmb7ep: ["f8fbkgy", "f1nfllo7"],
              Beyfa6y: ["f1nfllo7", "f8fbkgy"],
              B7oj6ja: ["f1djnp8u", "f1s8kh49"],
              Btl43ni: ["f1s8kh49", "f1djnp8u"],
            },
            rounded: {},
            square: {
              Bbmb7ep: ["fzi6hpg", "fyowgf4"],
              Beyfa6y: ["fyowgf4", "fzi6hpg"],
              B7oj6ja: ["f3fg2lr", "f13av6d4"],
              Btl43ni: ["f13av6d4", "f3fg2lr"],
            },
            small: {
              Bf4jedk: "fh7ncta",
              z8tnut: "f1khb0e9",
              z189sj: ["f1vdfbxk", "f1f5gg8d"],
              Byoj8tv: "f1jnq6q7",
              uwmqm3: ["f1f5gg8d", "f1vdfbxk"],
              Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
              Beyfa6y: ["f16jpd5f", "f1aa9q02"],
              B7oj6ja: ["f1jar5jt", "fyu767a"],
              Btl43ni: ["fyu767a", "f1jar5jt"],
              Be2twd7: "fy9rknc",
              Bhrd7zp: "figsok6",
              Bg96gwp: "fwrc4pm",
            },
            smallWithIcon: { Byoj8tv: "f1brlhvm", z8tnut: "f1sl3k7w" },
            medium: {},
            large: {
              Bf4jedk: "f14es27b",
              z8tnut: "fp9bwmr",
              z189sj: ["fjodcmx", "fhx4nu"],
              Byoj8tv: "f150uoa4",
              uwmqm3: ["fhx4nu", "fjodcmx"],
              Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
              Beyfa6y: ["f16jpd5f", "f1aa9q02"],
              B7oj6ja: ["f1jar5jt", "fyu767a"],
              Btl43ni: ["fyu767a", "f1jar5jt"],
              Be2twd7: "fod5ikn",
              Bhrd7zp: "fl43uef",
              Bg96gwp: "faaz57k",
            },
            largeWithIcon: { Byoj8tv: "fy7v416", z8tnut: "f1a1bwwz" },
          },
          {
            d: [
              ".f1c21dwh{background-color:var(--colorTransparentBackground);}",
              ".ffp7eso{background-color:var(--colorBrandBackground);}",
              ".f1p3nwhy{border-top-color:transparent;}",
              ".f11589ue{border-right-color:transparent;}",
              ".f1pdflbu{border-left-color:transparent;}",
              ".f1q5o8ev{border-bottom-color:transparent;}",
              ".f1phragk{color:var(--colorNeutralForegroundOnBrand);}",
              ".fhovq9v{background-color:var(--colorSubtleBackground);}",
              ".fkfq4zb{color:var(--colorNeutralForeground2);}",
              ".f8fbkgy{border-bottom-right-radius:var(--borderRadiusCircular);}",
              ".f1nfllo7{border-bottom-left-radius:var(--borderRadiusCircular);}",
              ".f1djnp8u{border-top-right-radius:var(--borderRadiusCircular);}",
              ".f1s8kh49{border-top-left-radius:var(--borderRadiusCircular);}",
              ".fzi6hpg{border-bottom-right-radius:var(--borderRadiusNone);}",
              ".fyowgf4{border-bottom-left-radius:var(--borderRadiusNone);}",
              ".f3fg2lr{border-top-right-radius:var(--borderRadiusNone);}",
              ".f13av6d4{border-top-left-radius:var(--borderRadiusNone);}",
              ".fh7ncta{min-width:64px;}",
              ".f1khb0e9{padding-top:3px;}",
              ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}",
              ".f1f5gg8d{padding-left:var(--spacingHorizontalS);}",
              ".f1jnq6q7{padding-bottom:3px;}",
              ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}",
              ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}",
              ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}",
              ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}",
              ".fy9rknc{font-size:var(--fontSizeBase200);}",
              ".figsok6{font-weight:var(--fontWeightRegular);}",
              ".fwrc4pm{line-height:var(--lineHeightBase200);}",
              ".f1brlhvm{padding-bottom:1px;}",
              ".f1sl3k7w{padding-top:1px;}",
              ".f14es27b{min-width:96px;}",
              ".fp9bwmr{padding-top:8px;}",
              ".fjodcmx{padding-right:var(--spacingHorizontalL);}",
              ".fhx4nu{padding-left:var(--spacingHorizontalL);}",
              ".f150uoa4{padding-bottom:8px;}",
              ".fod5ikn{font-size:var(--fontSizeBase400);}",
              ".fl43uef{font-weight:var(--fontWeightSemibold);}",
              ".faaz57k{line-height:var(--lineHeightBase400);}",
              ".fy7v416{padding-bottom:7px;}",
              ".f1a1bwwz{padding-top:7px;}",
            ],
            h: [
              ".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}",
              ".fwiml72:hover:active{background-color:var(--colorTransparentBackgroundPressed);}",
              ".f15wkkf3:hover{background-color:var(--colorBrandBackgroundHover);}",
              ".f1s2uweq:hover{border-top-color:transparent;}",
              ".fr80ssc:hover{border-right-color:transparent;}",
              ".fecsdlb:hover{border-left-color:transparent;}",
              ".f1ukrpxl:hover{border-bottom-color:transparent;}",
              ".f1rq72xc:hover{color:var(--colorNeutralForegroundOnBrand);}",
              ".fnp9lpt:hover:active{background-color:var(--colorBrandBackgroundPressed);}",
              ".f1h0usnq:hover:active{border-top-color:transparent;}",
              ".fs4ktlq:hover:active{border-right-color:transparent;}",
              ".fx2bmrt:hover:active{border-left-color:transparent;}",
              ".f16h9ulv:hover:active{border-bottom-color:transparent;}",
              ".f1d6v5y2:hover:active{color:var(--colorNeutralForegroundOnBrand);}",
              ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}",
              ".fnwyq0v:hover{color:var(--colorNeutralForeground2Hover);}",
              ".ft1hn21:hover .fui-Icon-filled{display:inline;}",
              ".fuxngvv:hover .fui-Icon-regular{display:none;}",
              ".fy5bs14:hover .fui-Button__icon{color:var(--colorNeutralForeground2BrandHover);}",
              ".fsv2rcd:hover:active{background-color:var(--colorSubtleBackgroundPressed);}",
              ".f1omzyqd:hover:active{color:var(--colorNeutralForeground2Pressed);}",
              ".f1dfjoow:hover:active .fui-Icon-filled{display:inline;}",
              ".f1j98vj9:hover:active .fui-Icon-regular{display:none;}",
              ".fj8yq94:hover:active .fui-Button__icon{color:var(--colorNeutralForeground2BrandPressed);}",
              ".f139oj5f:hover{color:var(--colorNeutralForeground2BrandHover);}",
              ".f1fg1p5m:hover:active{color:var(--colorNeutralForeground2BrandPressed);}",
            ],
            m: [
              [
                "@media (forced-colors: active){.f1rirnrt{background-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1uu00uk{border-top-color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f9a0qzu{border-left-color:HighlightText;}.fkvaka8{border-right-color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1ux7til{border-bottom-color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1lkg8j3{color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fkc42ay{forced-color-adjust:none;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fq7113v:hover{background-color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.ff1wgvm:hover{border-top-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1x4h75k:hover{border-left-color:Highlight;}.fiob0tu:hover{border-right-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1j6scgf:hover{border-bottom-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f4xjyn1:hover{color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fbgcvur:hover:active{background-color:HighlightText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1ks1yx8:hover:active{border-top-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1o6qegi:hover:active{border-right-color:Highlight;}.fmxjhhp:hover:active{border-left-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fcnxywj:hover:active{border-bottom-color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f9ddjv3:hover:active{color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1et0tmh:hover .fui-Button__icon{color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1wi8ngl:hover:active .fui-Button__icon{color:Highlight;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1tme0vf:hover{background-color:var(--colorTransparentBackground);}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f18onu3q:hover:active{background-color:var(--colorTransparentBackground);}}",
                { m: "(forced-colors: active)" },
              ],
            ],
          },
        ),
        Kn = Mn(
          {
            base: {
              De3pzq: "f1bg9a2p",
              g2u3we: "f1jj8ep1",
              h3c5rm: ["f15xbau", "fy0fskl"],
              B9xav0g: "f4ikngz",
              zhjwy3: ["fy0fskl", "f15xbau"],
              sj55zd: "f1s2aq7o",
              Bceei9c: "fdrzuqr",
              Bfinmwp: "f15x8b5r",
              Jwef8y: "f1falr9n",
              Bgoe8wy: "f12mpcsy",
              Bwzppfd: ["f1gwvigk", "f18rmfxp"],
              oetu4i: "f1jnshp0",
              gg5e9n: ["f18rmfxp", "f1gwvigk"],
              Bi91k9c: "fvgxktp",
              eoavqd: "fphbwmw",
              Bk3fhr4: "f19vpps7",
              Bmfj8id: "fv5swzo",
              Bbdnnc7: "f1al02dq",
              iro3zm: "f1t6o4dc",
              b661bw: "f10ztigi",
              Bk6r4ia: ["f1ft5sdu", "f1gzf82w"],
              B9zn80p: "f12zbtn2",
              Bpld233: ["f1gzf82w", "f1ft5sdu"],
              B2d53fq: "fcvwxyo",
              c3iz72: "f8w4c43",
              em6i61: "f1ol4fw6",
              vm6p8p: "f1q1lw4e",
              x3br3k: "f1dwjv2g",
            },
            highContrast: {
              Bsw6fvg: "f4lkoma",
              Bjwas2f: "fg455y9",
              Bn1d65q: ["f1rvyvqg", "f14g86mu"],
              Bxeuatn: "f1cwzwz",
              n51gp8: ["f14g86mu", "f1rvyvqg"],
              Bbusuzp: "f1dcs8yz",
              G867l3: "fjwq6ea",
              gdbnj: ["f1lr3nhc", "f1mbxvi6"],
              mxns5l: "fn5gmvv",
              o3nasb: ["f1mbxvi6", "f1lr3nhc"],
              Bqrx1nm: "f1vmkb5g",
              pgvf35: "f53ppgq",
              Bh7lczh: ["f1663y11", "f80fkiy"],
              dpv3f4: "f18v5270",
              Bpnjhaq: ["f80fkiy", "f1663y11"],
              ze5xyy: "f1kc2mi9",
              g2kj27: "f1y0svfh",
              Bf756sw: "fihuait",
              Bow2dr7: ["fnxhupq", "fyd6l6x"],
              Bvhedfk: "fx507ft",
              Gye4lf: ["fyd6l6x", "fnxhupq"],
              pc6evw: "fb3rf2x",
            },
            outline: {
              De3pzq: "f1c21dwh",
              Jwef8y: "f9ql6rf",
              iro3zm: "f3h1zc4",
            },
            primary: {
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
            },
            secondary: {},
            subtle: {
              De3pzq: "f1c21dwh",
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              Jwef8y: "f9ql6rf",
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              iro3zm: "f3h1zc4",
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
            },
            transparent: {
              De3pzq: "f1c21dwh",
              g2u3we: "f1p3nwhy",
              h3c5rm: ["f11589ue", "f1pdflbu"],
              B9xav0g: "f1q5o8ev",
              zhjwy3: ["f1pdflbu", "f11589ue"],
              Jwef8y: "f9ql6rf",
              Bgoe8wy: "f1s2uweq",
              Bwzppfd: ["fr80ssc", "fecsdlb"],
              oetu4i: "f1ukrpxl",
              gg5e9n: ["fecsdlb", "fr80ssc"],
              iro3zm: "f3h1zc4",
              b661bw: "f1h0usnq",
              Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
              B9zn80p: "f16h9ulv",
              Bpld233: ["fx2bmrt", "fs4ktlq"],
            },
          },
          {
            d: [
              ".f1bg9a2p{background-color:var(--colorNeutralBackgroundDisabled);}",
              ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}",
              ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}",
              ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}",
              ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}",
              ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}",
              ".fdrzuqr{cursor:not-allowed;}",
              ".f15x8b5r .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}",
              ".f1c21dwh{background-color:var(--colorTransparentBackground);}",
              ".f1p3nwhy{border-top-color:transparent;}",
              ".f11589ue{border-right-color:transparent;}",
              ".f1pdflbu{border-left-color:transparent;}",
              ".f1q5o8ev{border-bottom-color:transparent;}",
            ],
            h: [
              ".f1falr9n:hover{background-color:var(--colorNeutralBackgroundDisabled);}",
              ".f12mpcsy:hover{border-top-color:var(--colorNeutralStrokeDisabled);}",
              ".f1gwvigk:hover{border-right-color:var(--colorNeutralStrokeDisabled);}",
              ".f18rmfxp:hover{border-left-color:var(--colorNeutralStrokeDisabled);}",
              ".f1jnshp0:hover{border-bottom-color:var(--colorNeutralStrokeDisabled);}",
              ".fvgxktp:hover{color:var(--colorNeutralForegroundDisabled);}",
              ".fphbwmw:hover{cursor:not-allowed;}",
              ".f19vpps7:hover .fui-Icon-filled{display:none;}",
              ".fv5swzo:hover .fui-Icon-regular{display:inline;}",
              ".f1al02dq:hover .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}",
              ".f1t6o4dc:hover:active{background-color:var(--colorNeutralBackgroundDisabled);}",
              ".f10ztigi:hover:active{border-top-color:var(--colorNeutralStrokeDisabled);}",
              ".f1ft5sdu:hover:active{border-right-color:var(--colorNeutralStrokeDisabled);}",
              ".f1gzf82w:hover:active{border-left-color:var(--colorNeutralStrokeDisabled);}",
              ".f12zbtn2:hover:active{border-bottom-color:var(--colorNeutralStrokeDisabled);}",
              ".fcvwxyo:hover:active{color:var(--colorNeutralForegroundDisabled);}",
              ".f8w4c43:hover:active{cursor:not-allowed;}",
              ".f1ol4fw6:hover:active .fui-Icon-filled{display:none;}",
              ".f1q1lw4e:hover:active .fui-Icon-regular{display:inline;}",
              ".f1dwjv2g:hover:active .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}",
              ".f9ql6rf:hover{background-color:var(--colorTransparentBackground);}",
              ".f3h1zc4:hover:active{background-color:var(--colorTransparentBackground);}",
              ".f1s2uweq:hover{border-top-color:transparent;}",
              ".fr80ssc:hover{border-right-color:transparent;}",
              ".fecsdlb:hover{border-left-color:transparent;}",
              ".f1ukrpxl:hover{border-bottom-color:transparent;}",
              ".f1h0usnq:hover:active{border-top-color:transparent;}",
              ".fs4ktlq:hover:active{border-right-color:transparent;}",
              ".fx2bmrt:hover:active{border-left-color:transparent;}",
              ".f16h9ulv:hover:active{border-bottom-color:transparent;}",
            ],
            m: [
              [
                "@media (forced-colors: active){.f4lkoma{background-color:ButtonFace;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fjwq6ea:focus{border-top-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1lr3nhc:focus{border-right-color:GrayText;}.f1mbxvi6:focus{border-left-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fn5gmvv:focus{border-bottom-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1vmkb5g:hover{background-color:ButtonFace;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f53ppgq:hover{border-top-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1663y11:hover{border-right-color:GrayText;}.f80fkiy:hover{border-left-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f18v5270:hover{border-bottom-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1kc2mi9:hover{color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1y0svfh:hover:active{background-color:ButtonFace;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fihuait:hover:active{border-top-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fnxhupq:hover:active{border-right-color:GrayText;}.fyd6l6x:hover:active{border-left-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fx507ft:hover:active{border-bottom-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.fb3rf2x:hover:active{color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
            ],
          },
        ),
        Xn = Mn(
          {
            circular: {
              kdpuga: ["fanj13w", "f1gou5sz"],
              Bw81rd7: ["f1gou5sz", "fanj13w"],
              B6xbmo0: ["fulf6x3", "foeb2x"],
              dm238s: ["foeb2x", "fulf6x3"],
            },
            rounded: {},
            square: {
              kdpuga: ["f1ndz5i7", "f1co4qro"],
              Bw81rd7: ["f1co4qro", "f1ndz5i7"],
              B6xbmo0: ["f146y5a9", "f1k2ftg"],
              dm238s: ["f1k2ftg", "f146y5a9"],
            },
            primary: {
              B8q5s1w: "f17t0x8g",
              Bci5o5g: ["f194v5ow", "fk7jm04"],
              n8qw10: "f1qgg65p",
              Bdrgwmp: ["fk7jm04", "f194v5ow"],
              j6ew2k: ["fhgccpy", "fjo7pq6"],
              he4mth: "f32wu9k",
              Byr4aka: "fu5nqqq",
              lks7q5: ["f13prjl2", "f1nl83rv"],
              Bnan3qt: "f1czftr5",
              k1dn9: ["f1nl83rv", "f13prjl2"],
              Boium3a: ["f12k37oa", "fdnykm2"],
              tm8e47: "fr96u23",
            },
            small: {
              kdpuga: ["fg3gtdo", "fwii5mg"],
              Bw81rd7: ["fwii5mg", "fg3gtdo"],
              B6xbmo0: ["f1palphq", "f12nxie7"],
              dm238s: ["f12nxie7", "f1palphq"],
            },
            medium: {},
            large: {
              kdpuga: ["ft3lys4", "f1la4x2g"],
              Bw81rd7: ["f1la4x2g", "ft3lys4"],
              B6xbmo0: ["f156y0zm", "fakimq4"],
              dm238s: ["fakimq4", "f156y0zm"],
            },
          },
          {
            d: [
              ".fanj13w[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusCircular);}",
              ".f1gou5sz[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusCircular);}",
              ".fulf6x3[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusCircular);}",
              ".foeb2x[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusCircular);}",
              ".f1ndz5i7[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusNone);}",
              ".f1co4qro[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusNone);}",
              ".f146y5a9[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusNone);}",
              ".f1k2ftg[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusNone);}",
              ".f17t0x8g[data-fui-focus-visible]{border-top-color:var(--colorStrokeFocus2);}",
              ".f194v5ow[data-fui-focus-visible]{border-right-color:var(--colorStrokeFocus2);}",
              ".fk7jm04[data-fui-focus-visible]{border-left-color:var(--colorStrokeFocus2);}",
              ".f1qgg65p[data-fui-focus-visible]{border-bottom-color:var(--colorStrokeFocus2);}",
              ".fhgccpy[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}",
              ".fjo7pq6[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}",
              ".f32wu9k[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;}",
              ".fu5nqqq[data-fui-focus-visible]:hover{border-top-color:var(--colorStrokeFocus2);}",
              ".f13prjl2[data-fui-focus-visible]:hover{border-right-color:var(--colorStrokeFocus2);}",
              ".f1nl83rv[data-fui-focus-visible]:hover{border-left-color:var(--colorStrokeFocus2);}",
              ".f1czftr5[data-fui-focus-visible]:hover{border-bottom-color:var(--colorStrokeFocus2);}",
              ".fg3gtdo[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusSmall);}",
              ".fwii5mg[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusSmall);}",
              ".f1palphq[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusSmall);}",
              ".f12nxie7[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusSmall);}",
              ".ft3lys4[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusLarge);}",
              ".f1la4x2g[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusLarge);}",
              ".f156y0zm[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusLarge);}",
              ".fakimq4[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusLarge);}",
            ],
            t: [
              "@supports (-moz-appearance:button){.f12k37oa[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}.fdnykm2[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}}",
              "@supports (-moz-appearance:button){.fr96u23[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}",
            ],
          },
        ),
        Gn = Mn(
          {
            small: {
              z8tnut: "f1sl3k7w",
              z189sj: ["f136y8j8", "f10xn8zz"],
              Byoj8tv: "f1brlhvm",
              uwmqm3: ["f10xn8zz", "f136y8j8"],
              Bf4jedk: "f17fgpbq",
              B2u0y6b: "f1jt17bm",
            },
            medium: {
              z8tnut: "f1sbtcvk",
              z189sj: ["fwiuce9", "f15vdbe4"],
              Byoj8tv: "fdghr9",
              uwmqm3: ["f15vdbe4", "fwiuce9"],
              Bf4jedk: "fwbmr0d",
              B2u0y6b: "f44c6la",
            },
            large: {
              z8tnut: "f1a1bwwz",
              z189sj: ["f18k1jr3", "f1rtp3s9"],
              Byoj8tv: "fy7v416",
              uwmqm3: ["f1rtp3s9", "f18k1jr3"],
              Bf4jedk: "f12clzc2",
              B2u0y6b: "fjy1crr",
            },
          },
          {
            d: [
              ".f1sl3k7w{padding-top:1px;}",
              ".f136y8j8{padding-right:1px;}",
              ".f10xn8zz{padding-left:1px;}",
              ".f1brlhvm{padding-bottom:1px;}",
              ".f17fgpbq{min-width:24px;}",
              ".f1jt17bm{max-width:24px;}",
              ".f1sbtcvk{padding-top:5px;}",
              ".fwiuce9{padding-right:5px;}",
              ".f15vdbe4{padding-left:5px;}",
              ".fdghr9{padding-bottom:5px;}",
              ".fwbmr0d{min-width:32px;}",
              ".f44c6la{max-width:32px;}",
              ".f1a1bwwz{padding-top:7px;}",
              ".f18k1jr3{padding-right:7px;}",
              ".f1rtp3s9{padding-left:7px;}",
              ".fy7v416{padding-bottom:7px;}",
              ".f12clzc2{min-width:40px;}",
              ".fjy1crr{max-width:40px;}",
            ],
          },
        ),
        Qn = Mn(
          {
            small: {
              Be2twd7: "fe5j1ua",
              Bqenvij: "fjamq6b",
              a9b677: "f64fuq3",
              Bqrlyyl: "fbaiahx",
            },
            medium: {},
            large: {
              Be2twd7: "f1rt2boy",
              Bqenvij: "frvgh55",
              a9b677: "fq4mcun",
              Bqrlyyl: "f1exjqw5",
            },
            before: { t21cq0: ["f1nizpg2", "f1a695kz"] },
            after: { Frg6f3: ["f1a695kz", "f1nizpg2"] },
          },
          {
            d: [
              ".fe5j1ua{font-size:20px;}",
              ".fjamq6b{height:20px;}",
              ".f64fuq3{width:20px;}",
              ".fbaiahx{--fui-Button__icon--spacing:var(--spacingHorizontalXS);}",
              ".f1rt2boy{font-size:24px;}",
              ".frvgh55{height:24px;}",
              ".fq4mcun{width:24px;}",
              ".f1exjqw5{--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}",
              ".f1nizpg2{margin-right:var(--fui-Button__icon--spacing);}",
              ".f1a695kz{margin-left:var(--fui-Button__icon--spacing);}",
            ],
          },
        ),
        Jn = t.forwardRef((e, t) => {
          const n = jn(e, t);
          return (
            ((e) => {
              const t = Un(),
                n = Vn(),
                r = $n(),
                o = Kn(),
                a = Xn(),
                i = Gn(),
                l = Qn(),
                {
                  appearance: s,
                  disabled: c,
                  disabledFocusable: u,
                  icon: d,
                  iconOnly: f,
                  iconPosition: h,
                  shape: p,
                  size: g,
                } = e;
              (e.root.className = Qe(
                Hn,
                t,
                s && r[s],
                r[g],
                d && "small" === g && r.smallWithIcon,
                d && "large" === g && r.largeWithIcon,
                r[p],
                (c || u) && o.base,
                (c || u) && o.highContrast,
                s && (c || u) && o[s],
                "primary" === s && a.primary,
                a[g],
                a[p],
                f && i[g],
                e.root.className,
              )),
                e.icon &&
                  (e.icon.className = Qe(
                    Wn,
                    n,
                    !!e.root.children && l[h],
                    l[g],
                    e.icon.className,
                  ));
            })(n),
            P("useButtonStyles_unstable")(n),
            ((e) => {
              p();
              const { iconOnly: t, iconPosition: n } = e;
              return h(e.root, {
                children: [
                  "after" !== n && e.icon && f(e.icon, {}),
                  !t && e.root.children,
                  "after" === n && e.icon && f(e.icon, {}),
                ],
              });
            })(n)
          );
        });
      function Yn(e) {
        return e.reduce(function (e, t) {
          var n = t[0],
            r = t[1];
          return (e[n] = r), (e[r] = n), e;
        }, {});
      }
      function Zn(e) {
        return "number" === typeof e;
      }
      function er(e, t) {
        return -1 !== e.indexOf(t);
      }
      function tr(e, t, n, r) {
        return (
          t +
          ((o = n),
          0 === parseFloat(o) ? o : "-" === o[0] ? o.slice(1) : "-" + o) +
          r
        );
        var o;
      }
      function nr(e) {
        return e
          .replace(/ +/g, " ")
          .split(" ")
          .map(function (e) {
            return e.trim();
          })
          .filter(Boolean)
          .reduce(
            function (e, t) {
              var n = e.list,
                r = e.state,
                o = (t.match(/\(/g) || []).length,
                a = (t.match(/\)/g) || []).length;
              return (
                r.parensDepth > 0
                  ? (n[n.length - 1] = n[n.length - 1] + " " + t)
                  : n.push(t),
                (r.parensDepth += o - a),
                { list: n, state: r }
              );
            },
            { list: [], state: { parensDepth: 0 } },
          ).list;
      }
      function rr(e) {
        var t = nr(e);
        if (t.length <= 3 || t.length > 4) return e;
        var n = t[0],
          r = t[1],
          o = t[2];
        return [n, t[3], o, r].join(" ");
      }
      Jn.displayName = "Button";
      var or = {
        padding: function (e) {
          var t = e.value;
          return Zn(t) ? t : rr(t);
        },
        textShadow: function (e) {
          var t = (function (e) {
            for (var t = [], n = 0, r = 0, o = !1; r < e.length; )
              o || "," !== e[r]
                ? "(" === e[r]
                  ? ((o = !0), r++)
                  : ")" === e[r]
                    ? ((o = !1), r++)
                    : r++
                : (t.push(e.substring(n, r).trim()), (n = ++r));
            return n != r && t.push(e.substring(n, r + 1)), t;
          })(e.value).map(function (e) {
            return e.replace(/(^|\s)(-*)([.|\d]+)/, function (e, t, n, r) {
              return "0" === r ? e : "" + t + ("" === n ? "-" : "") + r;
            });
          });
          return t.join(",");
        },
        borderColor: function (e) {
          return rr(e.value);
        },
        borderRadius: function (e) {
          var t = e.value;
          if (Zn(t)) return t;
          if (er(t, "/")) {
            var n = t.split("/"),
              r = n[0],
              o = n[1];
            return (
              or.borderRadius({ value: r.trim() }) +
              " / " +
              or.borderRadius({ value: o.trim() })
            );
          }
          var a = nr(t);
          switch (a.length) {
            case 2:
              return a.reverse().join(" ");
            case 4:
              var i = a[0],
                l = a[1],
                s = a[2];
              return [l, i, a[3], s].join(" ");
            default:
              return t;
          }
        },
        background: function (e) {
          var t = e.value,
            n = e.valuesToConvert,
            r = e.isRtl,
            o = e.bgImgDirectionRegex,
            a = e.bgPosDirectionRegex;
          if (Zn(t)) return t;
          var i = t
            .replace(
              /(url\(.*?\))|(rgba?\(.*?\))|(hsl\(.*?\))|(#[a-fA-F0-9]+)|((^| )(\D)+( |$))/g,
              "",
            )
            .trim();
          return (
            (t = t.replace(
              i,
              or.backgroundPosition({
                value: i,
                valuesToConvert: n,
                isRtl: r,
                bgPosDirectionRegex: a,
              }),
            )),
            or.backgroundImage({
              value: t,
              valuesToConvert: n,
              bgImgDirectionRegex: o,
            })
          );
        },
        backgroundImage: function (e) {
          var t = e.value,
            n = e.valuesToConvert,
            r = e.bgImgDirectionRegex;
          return er(t, "url(") || er(t, "linear-gradient(")
            ? t.replace(r, function (e, t, r) {
                return e.replace(r, n[r]);
              })
            : t;
        },
        backgroundPosition: function (e) {
          var t = e.value,
            n = e.valuesToConvert,
            r = e.isRtl,
            o = e.bgPosDirectionRegex;
          return t
            .replace(r ? /^((-|\d|\.)+%)/ : null, function (e, t) {
              return (function (e) {
                var t = e.indexOf(".");
                if (-1 === t) e = 100 - parseFloat(e) + "%";
                else {
                  var n = e.length - t - 2;
                  e = (e = 100 - parseFloat(e)).toFixed(n) + "%";
                }
                return e;
              })(t);
            })
            .replace(o, function (e) {
              return n[e];
            });
        },
        backgroundPositionX: function (e) {
          var t = e.value,
            n = e.valuesToConvert,
            r = e.isRtl,
            o = e.bgPosDirectionRegex;
          return Zn(t)
            ? t
            : or.backgroundPosition({
                value: t,
                valuesToConvert: n,
                isRtl: r,
                bgPosDirectionRegex: o,
              });
        },
        transition: function (e) {
          var t = e.value,
            n = e.propertiesToConvert;
          return t
            .split(/,\s*/g)
            .map(function (e) {
              var t = e.split(" ");
              return (t[0] = n[t[0]] || t[0]), t.join(" ");
            })
            .join(", ");
        },
        transitionProperty: function (e) {
          var t = e.value,
            n = e.propertiesToConvert;
          return t
            .split(/,\s*/g)
            .map(function (e) {
              return n[e] || e;
            })
            .join(", ");
        },
        transform: function (e) {
          var t = e.value,
            n = "[^\\u0020-\\u007e]",
            r =
              "(?:(?:(?:\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
            o =
              "((?:-?(?:[0-9]*\\.[0-9]+|[0-9]+)(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|" +
              n +
              "|" +
              r +
              ")(?:[_a-z0-9-]|" +
              n +
              "|" +
              r +
              ")*)?)|(?:inherit|auto))",
            a = new RegExp("(translateX\\s*\\(\\s*)" + o + "(\\s*\\))", "gi"),
            i = new RegExp(
              "(translate\\s*\\(\\s*)" +
                o +
                "((?:\\s*,\\s*" +
                o +
                "){0,1}\\s*\\))",
              "gi",
            ),
            l = new RegExp(
              "(translate3d\\s*\\(\\s*)" +
                o +
                "((?:\\s*,\\s*" +
                o +
                "){0,2}\\s*\\))",
              "gi",
            ),
            s = new RegExp("(rotate[ZY]?\\s*\\(\\s*)" + o + "(\\s*\\))", "gi");
          return t.replace(a, tr).replace(i, tr).replace(l, tr).replace(s, tr);
        },
      };
      (or.objectPosition = or.backgroundPosition),
        (or.margin = or.padding),
        (or.borderWidth = or.padding),
        (or.boxShadow = or.textShadow),
        (or.webkitBoxShadow = or.boxShadow),
        (or.mozBoxShadow = or.boxShadow),
        (or.WebkitBoxShadow = or.boxShadow),
        (or.MozBoxShadow = or.boxShadow),
        (or.borderStyle = or.borderColor),
        (or.webkitTransform = or.transform),
        (or.mozTransform = or.transform),
        (or.WebkitTransform = or.transform),
        (or.MozTransform = or.transform),
        (or.transformOrigin = or.backgroundPosition),
        (or.webkitTransformOrigin = or.transformOrigin),
        (or.mozTransformOrigin = or.transformOrigin),
        (or.WebkitTransformOrigin = or.transformOrigin),
        (or.MozTransformOrigin = or.transformOrigin),
        (or.webkitTransition = or.transition),
        (or.mozTransition = or.transition),
        (or.WebkitTransition = or.transition),
        (or.MozTransition = or.transition),
        (or.webkitTransitionProperty = or.transitionProperty),
        (or.mozTransitionProperty = or.transitionProperty),
        (or.WebkitTransitionProperty = or.transitionProperty),
        (or.MozTransitionProperty = or.transitionProperty),
        (or["text-shadow"] = or.textShadow),
        (or["border-color"] = or.borderColor),
        (or["border-radius"] = or.borderRadius),
        (or["background-image"] = or.backgroundImage),
        (or["background-position"] = or.backgroundPosition),
        (or["background-position-x"] = or.backgroundPositionX),
        (or["object-position"] = or.objectPosition),
        (or["border-width"] = or.padding),
        (or["box-shadow"] = or.textShadow),
        (or["-webkit-box-shadow"] = or.textShadow),
        (or["-moz-box-shadow"] = or.textShadow),
        (or["border-style"] = or.borderColor),
        (or["-webkit-transform"] = or.transform),
        (or["-moz-transform"] = or.transform),
        (or["transform-origin"] = or.transformOrigin),
        (or["-webkit-transform-origin"] = or.transformOrigin),
        (or["-moz-transform-origin"] = or.transformOrigin),
        (or["-webkit-transition"] = or.transition),
        (or["-moz-transition"] = or.transition),
        (or["transition-property"] = or.transitionProperty),
        (or["-webkit-transition-property"] = or.transitionProperty),
        (or["-moz-transition-property"] = or.transitionProperty);
      var ar = Yn([
          ["paddingLeft", "paddingRight"],
          ["marginLeft", "marginRight"],
          ["left", "right"],
          ["borderLeft", "borderRight"],
          ["borderLeftColor", "borderRightColor"],
          ["borderLeftStyle", "borderRightStyle"],
          ["borderLeftWidth", "borderRightWidth"],
          ["borderTopLeftRadius", "borderTopRightRadius"],
          ["borderBottomLeftRadius", "borderBottomRightRadius"],
          ["padding-left", "padding-right"],
          ["margin-left", "margin-right"],
          ["border-left", "border-right"],
          ["border-left-color", "border-right-color"],
          ["border-left-style", "border-right-style"],
          ["border-left-width", "border-right-width"],
          ["border-top-left-radius", "border-top-right-radius"],
          ["border-bottom-left-radius", "border-bottom-right-radius"],
        ]),
        ir = ["content"],
        lr = Yn([
          ["ltr", "rtl"],
          ["left", "right"],
          ["w-resize", "e-resize"],
          ["sw-resize", "se-resize"],
          ["nw-resize", "ne-resize"],
        ]),
        sr = new RegExp("(^|\\W|_)((ltr)|(rtl)|(left)|(right))(\\W|_|$)", "g"),
        cr = new RegExp("(left)|(right)");
      function ur(e) {
        return Object.keys(e).reduce(
          function (t, n) {
            var r = e[n];
            if (("string" === typeof r && (r = r.trim()), er(ir, n)))
              return (t[n] = r), t;
            var o = dr(n, r),
              a = o.key,
              i = o.value;
            return (t[a] = i), t;
          },
          Array.isArray(e) ? [] : {},
        );
      }
      function dr(e, t) {
        var n,
          r = /\/\*\s?@noflip\s?\*\//.test(t),
          o = r ? e : ar[(n = e)] || n,
          a = r
            ? t
            : (function (e, t) {
                if (
                  !(function (e) {
                    return (
                      !("boolean" === typeof e) &&
                      ((t = e), !(null === t || "undefined" === typeof t))
                    );
                    var t;
                  })(t)
                )
                  return t;
                if (((n = t), n && "object" === typeof n)) return ur(t);
                var n;
                var r,
                  o = Zn(t),
                  a = (function (e) {
                    return "function" === typeof e;
                  })(t),
                  i = o || a ? t : t.replace(/ !important.*?$/, ""),
                  l = !o && i.length !== t.length,
                  s = or[e];
                r = s
                  ? s({
                      value: i,
                      valuesToConvert: lr,
                      propertiesToConvert: ar,
                      isRtl: !0,
                      bgImgDirectionRegex: sr,
                      bgPosDirectionRegex: cr,
                    })
                  : lr[i] || i;
                if (l) return r + " !important";
                return r;
              })(o, t);
        return { key: o, value: a };
      }
      const fr = /[A-Z]/g,
        hr = /^ms-/,
        pr = {};
      function gr(e) {
        return "-" + e.toLowerCase();
      }
      function mr(e) {
        if (Object.prototype.hasOwnProperty.call(pr, e)) return pr[e];
        if ("--" === e.substr(0, 2)) return e;
        const t = e.replace(fr, gr);
        return (pr[e] = hr.test(t) ? "-" + t : t);
      }
      function vr(e) {
        return "&" === e.charAt(0) ? e.slice(1) : e;
      }
      var br = "-moz-",
        yr = "-webkit-",
        wr = "comm",
        kr = "rule",
        xr = "decl",
        Sr = "@import",
        _r = "@keyframes",
        Br = "@layer",
        zr = Math.abs,
        Cr = String.fromCharCode,
        Nr = Object.assign;
      function Er(e) {
        return e.trim();
      }
      function Pr(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function jr(e, t, n) {
        return e.replace(t, n);
      }
      function Tr(e, t, n) {
        return e.indexOf(t, n);
      }
      function Rr(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function Fr(e, t, n) {
        return e.slice(t, n);
      }
      function Dr(e) {
        return e.length;
      }
      function Ir(e) {
        return e.length;
      }
      function Or(e, t) {
        return t.push(e), e;
      }
      function qr(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n;
      }
      function Lr(e, t, n, r) {
        switch (e.type) {
          case Br:
            if (e.children.length) break;
          case Sr:
          case xr:
            return (e.return = e.return || e.value);
          case wr:
            return "";
          case _r:
            return (e.return = e.value + "{" + qr(e.children, r) + "}");
          case kr:
            if (!Dr((e.value = e.props.join(",")))) return "";
        }
        return Dr((n = qr(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      var Ar = 1,
        Mr = 1,
        Hr = 0,
        Wr = 0,
        Ur = 0,
        Vr = "";
      function $r(e, t, n, r, o, a, i, l) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: a,
          line: Ar,
          column: Mr,
          length: i,
          return: "",
          siblings: l,
        };
      }
      function Kr(e, t) {
        return Nr(
          $r("", null, null, "", null, null, 0, e.siblings),
          e,
          { length: -e.length },
          t,
        );
      }
      function Xr() {
        return (
          (Ur = Wr > 0 ? Rr(Vr, --Wr) : 0),
          Mr--,
          10 === Ur && ((Mr = 1), Ar--),
          Ur
        );
      }
      function Gr() {
        return (
          (Ur = Wr < Hr ? Rr(Vr, Wr++) : 0),
          Mr++,
          10 === Ur && ((Mr = 1), Ar++),
          Ur
        );
      }
      function Qr() {
        return Rr(Vr, Wr);
      }
      function Jr() {
        return Wr;
      }
      function Yr(e, t) {
        return Fr(Vr, e, t);
      }
      function Zr(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function eo(e) {
        return (Ar = Mr = 1), (Hr = Dr((Vr = e))), (Wr = 0), [];
      }
      function to(e) {
        return (Vr = ""), e;
      }
      function no(e) {
        return Er(Yr(Wr - 1, io(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function ro(e) {
        return to(
          (function (e) {
            for (; Gr(); )
              switch (Zr(Ur)) {
                case 0:
                  Or(so(Wr - 1), e);
                  break;
                case 2:
                  Or(no(Ur), e);
                  break;
                default:
                  Or(Cr(Ur), e);
              }
            return e;
          })(eo(e)),
        );
      }
      function oo(e) {
        for (; (Ur = Qr()) && Ur < 33; ) Gr();
        return Zr(e) > 2 || Zr(Ur) > 3 ? "" : " ";
      }
      function ao(e, t) {
        for (
          ;
          --t &&
          Gr() &&
          !(
            Ur < 48 ||
            Ur > 102 ||
            (Ur > 57 && Ur < 65) ||
            (Ur > 70 && Ur < 97)
          );

        );
        return Yr(e, Jr() + (t < 6 && 32 == Qr() && 32 == Gr()));
      }
      function io(e) {
        for (; Gr(); )
          switch (Ur) {
            case e:
              return Wr;
            case 34:
            case 39:
              34 !== e && 39 !== e && io(Ur);
              break;
            case 40:
              41 === e && io(e);
              break;
            case 92:
              Gr();
          }
        return Wr;
      }
      function lo(e, t) {
        for (; Gr() && e + Ur !== 57 && (e + Ur !== 84 || 47 !== Qr()); );
        return "/*" + Yr(t, Wr - 1) + "*" + Cr(47 === e ? e : Gr());
      }
      function so(e) {
        for (; !Zr(Qr()); ) Gr();
        return Yr(e, Wr);
      }
      function co(e) {
        return to(uo("", null, null, null, [""], (e = eo(e)), 0, [0], e));
      }
      function uo(e, t, n, r, o, a, i, l, s) {
        for (
          var c = 0,
            u = 0,
            d = i,
            f = 0,
            h = 0,
            p = 0,
            g = 1,
            m = 1,
            v = 1,
            b = 0,
            y = "",
            w = o,
            k = a,
            x = r,
            S = y;
          m;

        )
          switch (((p = b), (b = Gr()))) {
            case 40:
              if (108 != p && 58 == Rr(S, d - 1)) {
                -1 !=
                  Tr(
                    (S += jr(no(b), "&", "&\f")),
                    "&\f",
                    zr(c ? l[c - 1] : 0),
                  ) && (v = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              S += no(b);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              S += oo(p);
              break;
            case 92:
              S += ao(Jr() - 1, 7);
              continue;
            case 47:
              switch (Qr()) {
                case 42:
                case 47:
                  Or(ho(lo(Gr(), Jr()), t, n, s), s);
                  break;
                default:
                  S += "/";
              }
              break;
            case 123 * g:
              l[c++] = Dr(S) * v;
            case 125 * g:
            case 59:
            case 0:
              switch (b) {
                case 0:
                case 125:
                  m = 0;
                case 59 + u:
                  -1 == v && (S = jr(S, /\f/g, "")),
                    h > 0 &&
                      Dr(S) - d &&
                      Or(
                        h > 32
                          ? po(S + ";", r, n, d - 1, s)
                          : po(jr(S, " ", "") + ";", r, n, d - 2, s),
                        s,
                      );
                  break;
                case 59:
                  S += ";";
                default:
                  if (
                    (Or(
                      (x = fo(
                        S,
                        t,
                        n,
                        c,
                        u,
                        o,
                        l,
                        y,
                        (w = []),
                        (k = []),
                        d,
                        a,
                      )),
                      a,
                    ),
                    123 === b)
                  )
                    if (0 === u) uo(S, t, x, x, w, a, d, l, k);
                    else
                      switch (99 === f && 110 === Rr(S, 3) ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          uo(
                            e,
                            x,
                            x,
                            r &&
                              Or(
                                fo(e, x, x, 0, 0, o, l, y, o, (w = []), d, k),
                                k,
                              ),
                            o,
                            k,
                            d,
                            l,
                            r ? w : k,
                          );
                          break;
                        default:
                          uo(S, x, x, x, [""], k, 0, l, k);
                      }
              }
              (c = u = h = 0), (g = v = 1), (y = S = ""), (d = i);
              break;
            case 58:
              (d = 1 + Dr(S)), (h = p);
            default:
              if (g < 1)
                if (123 == b) --g;
                else if (125 == b && 0 == g++ && 125 == Xr()) continue;
              switch (((S += Cr(b)), b * g)) {
                case 38:
                  v = u > 0 ? 1 : ((S += "\f"), -1);
                  break;
                case 44:
                  (l[c++] = (Dr(S) - 1) * v), (v = 1);
                  break;
                case 64:
                  45 === Qr() && (S += no(Gr())),
                    (f = Qr()),
                    (u = d = Dr((y = S += so(Jr())))),
                    b++;
                  break;
                case 45:
                  45 === p && 2 == Dr(S) && (g = 0);
              }
          }
        return a;
      }
      function fo(e, t, n, r, o, a, i, l, s, c, u, d) {
        for (
          var f = o - 1, h = 0 === o ? a : [""], p = Ir(h), g = 0, m = 0, v = 0;
          g < r;
          ++g
        )
          for (
            var b = 0, y = Fr(e, f + 1, (f = zr((m = i[g])))), w = e;
            b < p;
            ++b
          )
            (w = Er(m > 0 ? h[b] + " " + y : jr(y, /&\f/g, h[b]))) &&
              (s[v++] = w);
        return $r(e, t, n, 0 === o ? kr : l, s, c, u, d);
      }
      function ho(e, t, n, r) {
        return $r(e, t, n, wr, Cr(Ur), Fr(e, 2, -2), 0, r);
      }
      function po(e, t, n, r, o) {
        return $r(e, t, n, xr, Fr(e, 0, r), Fr(e, r + 1, -1), r, o);
      }
      function go(e) {
        var t = Ir(e);
        return function (n, r, o, a) {
          for (var i = "", l = 0; l < t; l++) i += e[l](n, r, o, a) || "";
          return i;
        };
      }
      function mo(e) {
        return function (t) {
          t.root || ((t = t.return) && e(t));
        };
      }
      const vo = (e) => {
        if (e.type === kr) {
          if ("string" === typeof e.props) return void 0;
          e.props = e.props.map((e) =>
            -1 === e.indexOf(":global(")
              ? e
              : ro(e)
                  .reduce((e, t, n, r) => {
                    if ("" === t) return e;
                    if (":" === t && "global" === r[n + 1]) {
                      const t = r[n + 2].slice(1, -1) + " ";
                      return e.unshift(t), (r[n + 1] = ""), (r[n + 2] = ""), e;
                    }
                    return e.push(t), e;
                  }, [])
                  .join(""),
          );
        }
      };
      function bo(e, t, n) {
        switch (
          (function (e, t) {
            return 45 ^ Rr(e, 0)
              ? (((((((t << 2) ^ Rr(e, 0)) << 2) ^ Rr(e, 1)) << 2) ^
                  Rr(e, 2)) <<
                  2) ^
                  Rr(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return yr + "print-" + e + e;
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
            return yr + e + e;
          case 4215:
            if (102 === Rr(e, 9)) return yr + e + e;
            if (116 === Rr(e, t + 1)) return yr + e + e;
            break;
          case 4789:
            return br + e + e;
          case 5349:
          case 4246:
          case 6968:
            return yr + e + br + e + e;
          case 6187:
            if (!Pr(e, /grab/))
              return (
                jr(
                  jr(
                    jr(e, /(zoom-|grab)/, yr + "$1"),
                    /(image-set)/,
                    yr + "$1",
                  ),
                  e,
                  "",
                ) + e
              );
          case 5495:
          case 3959:
            return jr(e, /(image-set\([^]*)/, yr + "$1$`$1");
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return jr(e, /(.+)-inline(.+)/, yr + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (Dr(e) - 1 - t > 6)
              switch (Rr(e, t + 1)) {
                case 102:
                  if (108 === Rr(e, t + 3))
                    return (
                      jr(
                        e,
                        /(.+:)(.+)-([^]+)/,
                        "$1" +
                          yr +
                          "$2-$3$1" +
                          br +
                          (108 == Rr(e, t + 3) ? "$3" : "$2-$3"),
                      ) + e
                    );
                case 115:
                  return ~Tr(e, "stretch")
                    ? bo(jr(e, "stretch", "fill-available"), t) + e
                    : e;
              }
        }
        return e;
      }
      function yo(e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case xr:
              return void (e.return = bo(e.value, e.length));
            case kr:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })(e.props, function (t) {
                  switch (Pr(t, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                      return qr(
                        [
                          Kr(e, {
                            props: [jr(t, /:(read-\w+)/, ":" + br + "$1")],
                          }),
                        ],
                        r,
                      );
                    case "::placeholder":
                      return qr(
                        [
                          Kr(e, {
                            props: [jr(t, /:(plac\w+)/, ":" + yr + "input-$1")],
                          }),
                          Kr(e, {
                            props: [jr(t, /:(plac\w+)/, ":" + br + "$1")],
                          }),
                        ],
                        r,
                      );
                  }
                  return "";
                });
          }
      }
      const wo = (e) => {
        (function (e) {
          switch (e.type) {
            case "@container":
            case "@media":
            case "@supports":
            case Br:
              return !0;
          }
          return !1;
        })(e) &&
          Array.isArray(e.children) &&
          e.children.sort((e, t) => (e.props[0] > t.props[0] ? 1 : -1));
      };
      function ko() {}
      const xo = /,( *[^ &])/g;
      function So(e, t, n) {
        let r = t;
        return (
          n.length > 0 &&
            (r = n.reduceRight((e, t) => {
              return ""
                .concat(((n = t), "&" + vr(n.replace(xo, ",&$1"))), " { ")
                .concat(e, " }");
              var n;
            }, t)),
          "".concat(e, "{").concat(r, "}")
        );
      }
      function _o(e) {
        const {
          className: t,
          media: n,
          layer: r,
          selectors: o,
          support: a,
          property: i,
          rtlClassName: l,
          rtlProperty: s,
          rtlValue: c,
          value: u,
          container: d,
        } = e;
        let f = So(
          ".".concat(t),
          Array.isArray(u)
            ? "".concat(
                u.map((e) => "".concat(mr(i), ": ").concat(e)).join(";"),
                ";",
              )
            : "".concat(mr(i), ": ").concat(u, ";"),
          o,
        );
        if (s && l) {
          f += So(
            ".".concat(l),
            Array.isArray(c)
              ? "".concat(
                  c.map((e) => "".concat(mr(s), ": ").concat(e)).join(";"),
                  ";",
                )
              : "".concat(mr(s), ": ").concat(c, ";"),
            o,
          );
        }
        return (
          n && (f = "@media ".concat(n, " { ").concat(f, " }")),
          r && (f = "@layer ".concat(r, " { ").concat(f, " }")),
          a && (f = "@supports ".concat(a, " { ").concat(f, " }")),
          d && (f = "@container ".concat(d, " { ").concat(f, " }")),
          (function (e, t) {
            const n = [];
            return (
              qr(co(e), go([vo, t ? wo : ko, yo, Lr, mo((e) => n.push(e))])), n
            );
          })(f, !0)
        );
      }
      function Bo(e) {
        let t = "";
        for (const n in e) {
          const r = e[n];
          ("string" !== typeof r && "number" !== typeof r) ||
            (t += mr(n) + ":" + r + ";");
        }
        return t;
      }
      function zo(e) {
        let t = "";
        for (const n in e) t += "".concat(n, "{").concat(Bo(e[n]), "}");
        return t;
      }
      function Co(e, t) {
        const n = "@keyframes ".concat(e, " {").concat(t, "}"),
          r = [];
        return qr(co(n), go([Lr, yo, mo((e) => r.push(e))])), r;
      }
      function No(e, t) {
        return 0 === e.length ? t : "".concat(e, " and ").concat(t);
      }
      function Eo(e) {
        return "@media" === e.substr(0, 6);
      }
      function Po(e) {
        return "@layer" === e.substr(0, 6);
      }
      const jo = /^(:|\[|>|&)/;
      function To(e) {
        return jo.test(e);
      }
      function Ro(e) {
        return "@supports" === e.substr(0, 9);
      }
      function Fo(e) {
        return "@container" === e.substring(0, 10);
      }
      const Do = {
        "us-w": "w",
        "us-v": "i",
        nk: "l",
        si: "v",
        cu: "f",
        ve: "h",
        ti: "a",
      };
      function Io(e, t, n, r, o) {
        if (n) return "m";
        if (t || r) return "t";
        if (o) return "c";
        if (e.length > 0) {
          const t = e[0].trim();
          if (58 === t.charCodeAt(0))
            return Do[t.slice(4, 8)] || Do[t.slice(3, 5)] || "d";
        }
        return "d";
      }
      function Oo(e) {
        let {
          container: t,
          media: n,
          layer: r,
          property: o,
          selector: a,
          support: i,
          value: l,
        } = e;
        const s = We(a + t + n + r + i + o + l.trim());
        return W + s;
      }
      function qo(e, t, n, r, o) {
        const a = We(e + t + n + r + o),
          i = a.charCodeAt(0);
        return i >= 48 && i <= 57
          ? String.fromCharCode(i + 17) + a.slice(1)
          : a;
      }
      function Lo(e) {
        return e.replace(/>\s+/g, ">");
      }
      function Ao() {
        0;
      }
      function Mo(e, t) {
        const n = JSON.stringify(t, null, 2),
          r = [
            "@griffel/react: A rule was not resolved to CSS properly. Please check your `makeStyles` or `makeResetStyles` calls for following:",
            " ".repeat(2) + "makeStyles({",
            " ".repeat(4) + "[slot]: {",
            " ".repeat(6) +
              '"'.concat(e, '": ').concat(
                n
                  .split("\n")
                  .map((e, t) => " ".repeat(0 === t ? 0 : 6) + e)
                  .join("\n"),
              ),
            " ".repeat(4) + "}",
            " ".repeat(2) + "})",
            "",
          ];
        -1 === e.indexOf("&")
          ? (r.push(
              "It looks that you're are using a nested selector, but it is missing an ampersand placeholder where the generated class name should be injected.",
            ),
            r.push(
              'Try to update a property to include it i.e "'
                .concat(e, '" => "&')
                .concat(e, '".'),
            ))
          : (r.push(""),
            r.push(
              "If it's not obvious what triggers a problem, please report an issue at https://github.com/microsoft/griffel/issues",
            )),
          Ao(r.join("\n"));
      }
      function Ho(e, t) {
        Ao(
          [
            '@griffel/react: You are using unsupported shorthand CSS property "'.concat(
              e,
              '". ',
            ) +
              'Please check your "makeStyles" calls, there *should not* be following:',
            " ".repeat(2) + "makeStyles({",
            " ".repeat(4) + "[slot]: { ".concat(e, ': "').concat(t, '" }'),
            " ".repeat(2) + "})",
            "",
            "Learn why CSS shorthands are not supported: https://aka.ms/griffel-css-shorthands",
          ].join("\n"),
        );
      }
      function Wo(e, t, n, r) {
        e[t] = r ? [n, r] : n;
      }
      function Uo(e, t) {
        return t ? [e, t] : e;
      }
      function Vo(e, t, n, r, o) {
        var a;
        let i;
        "m" === t && o && (i = { m: o }),
          (null !== (a = e[t]) && void 0 !== a) || (e[t] = []),
          n && e[t].push(Uo(n, i)),
          r && e[t].push(Uo(r, i));
      }
      function $o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
          o =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          a =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
          i =
            arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
          l =
            arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {},
          s = arguments.length > 8 ? arguments[8] : void 0;
        for (const u in e) {
          if (G.hasOwnProperty(u)) {
            Ho(u, e[u]);
            continue;
          }
          const d = e[u];
          if (null != d)
            if ("string" === typeof d || "number" === typeof d) {
              const e = Lo(t.join("")),
                c = qo(e, a, n, o, u),
                f = Oo({
                  container: a,
                  media: n,
                  layer: r,
                  value: d.toString(),
                  support: o,
                  selector: e,
                  property: u,
                }),
                h = (s && { key: u, value: s }) || dr(u, d),
                p = h.key !== u || h.value !== d,
                g = p
                  ? Oo({
                      container: a,
                      value: h.value.toString(),
                      property: h.key,
                      selector: e,
                      media: n,
                      layer: r,
                      support: o,
                    })
                  : void 0,
                m = p
                  ? { rtlClassName: g, rtlProperty: h.key, rtlValue: h.value }
                  : void 0,
                v = Io(t, r, n, o, a),
                [b, y] = _o({
                  className: f,
                  media: n,
                  layer: r,
                  selectors: t,
                  property: u,
                  support: o,
                  container: a,
                  value: d,
                  ...m,
                });
              Wo(i, c, f, g), Vo(l, v, b, y, n);
            } else if ("animationName" === u) {
              const e = Array.isArray(d) ? d : [d],
                s = [],
                c = [];
              for (const t of e) {
                const e = zo(t),
                  r = zo(ur(t)),
                  o = W + We(e);
                let a;
                const i = Co(o, e);
                let u = [];
                e === r ? (a = o) : ((a = W + We(r)), (u = Co(a, r)));
                for (let t = 0; t < i.length; t++) Vo(l, "k", i[t], u[t], n);
                s.push(o), c.push(a);
              }
              $o(
                { animationName: s.join(", ") },
                t,
                n,
                r,
                o,
                a,
                i,
                l,
                c.join(", "),
              );
            } else if (Array.isArray(d)) {
              if (0 === d.length) {
                0;
                continue;
              }
              const e = Lo(t.join("")),
                s = qo(e, a, n, o, u),
                c = Oo({
                  container: a,
                  media: n,
                  layer: r,
                  value: d
                    .map((e) =>
                      (null !== e && void 0 !== e ? e : "").toString(),
                    )
                    .join(";"),
                  support: o,
                  selector: e,
                  property: u,
                }),
                f = d.map((e) => dr(u, e));
              if (!!f.some((e) => e.key !== f[0].key)) {
                0;
                continue;
              }
              const h = f[0].key !== u || f.some((e, t) => e.value !== d[t]),
                p = h
                  ? Oo({
                      container: a,
                      value: f
                        .map((e) => {
                          var t;
                          return (
                            null !==
                              (t =
                                null === e || void 0 === e
                                  ? void 0
                                  : e.value) && void 0 !== t
                              ? t
                              : ""
                          ).toString();
                        })
                        .join(";"),
                      property: f[0].key,
                      selector: e,
                      layer: r,
                      media: n,
                      support: o,
                    })
                  : void 0,
                g = h
                  ? {
                      rtlClassName: p,
                      rtlProperty: f[0].key,
                      rtlValue: f.map((e) => e.value),
                    }
                  : void 0,
                m = Io(t, r, n, o, a),
                [v, b] = _o({
                  className: c,
                  media: n,
                  layer: r,
                  selectors: t,
                  property: u,
                  support: o,
                  container: a,
                  value: d,
                  ...g,
                });
              Wo(i, s, c, p), Vo(l, m, v, b, n);
            } else if (
              null != (c = d) &&
              "object" === typeof c &&
              !1 === Array.isArray(c)
            )
              if (To(u)) $o(d, t.concat(vr(u)), n, r, o, a, i, l);
              else if (Eo(u)) {
                const e = No(n, u.slice(6).trim());
                $o(d, t, e, r, o, a, i, l);
              } else if (Po(u)) {
                const e = (r ? "".concat(r, ".") : "") + u.slice(6).trim();
                $o(d, t, n, e, o, a, i, l);
              } else if (Ro(u)) {
                const e = No(o, u.slice(9).trim());
                $o(d, t, n, r, e, a, i, l);
              } else if (Fo(u)) {
                const e = u.slice(10).trim();
                $o(d, t, n, r, o, e, i, l);
              } else Mo(u, d);
        }
        var c;
        return [i, l];
      }
      function Ko(e) {
        const t = (
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : He
        )();
        let n = null,
          r = null,
          o = null,
          a = null;
        return function (i) {
          const { dir: l, renderer: s } = i;
          null === n &&
            ([n, r] = (function (e) {
              const t = {},
                n = {};
              for (const r in e) {
                const o = e[r],
                  [a, i] = $o(o);
                (t[r] = a),
                  Object.keys(i).forEach((e) => {
                    n[e] = (n[e] || []).concat(i[e]);
                  });
              }
              return [t, n];
            })(e));
          const c = "ltr" === l;
          return (
            c ? null === o && (o = Ke(n, l)) : null === a && (a = Ke(n, l)),
            t(s, r),
            c ? o : a
          );
        };
      }
      function Xo(e) {
        const t = Ko(e, Ln);
        return function () {
          const e = b(),
            n = oe();
          return t({ dir: e, renderer: n });
        };
      }
      const Go = Xo({
          root: {
            height: "100%",
            width: "100%",
            backgroundColor: Rn,
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
          },
        }),
        Qo = t.memo((e) => {
          const t = Go();
          return (0, u.jsx)("div", { className: t.root });
        }),
        Jo = Xo({
          root: {
            boxSizing: "border-box",
            paddingTop: "24px",
            paddingBottom: "24px",
            paddingLeft: "48px",
            paddingRight: "48px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            height: "100%",
          },
        }),
        Yo = t.memo((e) => {
          const t = Jo(),
            n = { backgroundColor: e.backgroundColor ? e.backgroundColor : Fn };
          return (0, u.jsx)("div", {
            className: t.root,
            style: n,
            children: e.children,
          });
        }),
        Zo = ["Top", "Right", "Bottom", "Left"];
      function ea(e, t) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o];
        const [a, i = a, l = a, s = i] = r,
          c = [a, i, l, s],
          u = {};
        for (let d = 0; d < c.length; d += 1)
          if (c[d] || 0 === c[d]) {
            u[e + Zo[d] + t] = c[d];
          }
        return u;
      }
      function ta() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return ea("border", "Width", ...t);
      }
      function na() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return ea("border", "Style", ...t);
      }
      function ra() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return ea("border", "Color", ...t);
      }
      const oa = [
        "none",
        "hidden",
        "dotted",
        "dashed",
        "solid",
        "double",
        "groove",
        "ridge",
        "inset",
        "outset",
      ];
      function aa(e) {
        return oa.includes(e);
      }
      const ia = (e) => "number" === typeof e && !Number.isNaN(e),
        la = (e) => "auto" === e,
        sa = ["content", "fit-content", "max-content", "min-content"],
        ca = (e) =>
          sa.some((t) => e === t) ||
          ((e) => "string" === typeof e && /(\d+(\w+|%))/.test(e))(e);
      const ua = /var\(.*\)/gi;
      const da = /^[a-zA-Z0-9\-_\\#;]+$/,
        fa =
          /^-moz-initial$|^auto$|^initial$|^inherit$|^revert$|^unset$|^span \d+$|^\d.*/;
      function ha(e) {
        return (
          void 0 !== e && "string" === typeof e && da.test(e) && !fa.test(e)
        );
      }
      const pa = ["-moz-initial", "inherit", "initial", "revert", "unset"];
      const ga = ["dashed", "dotted", "double", "solid", "wavy"];
      const ma = {
          border: function () {
            return aa(arguments.length <= 0 ? void 0 : arguments[0])
              ? {
                  ...na(arguments.length <= 0 ? void 0 : arguments[0]),
                  ...((arguments.length <= 1 ? void 0 : arguments[1]) &&
                    ta(arguments.length <= 1 ? void 0 : arguments[1])),
                  ...((arguments.length <= 2 ? void 0 : arguments[2]) &&
                    ra(arguments.length <= 2 ? void 0 : arguments[2])),
                }
              : {
                  ...ta(arguments.length <= 0 ? void 0 : arguments[0]),
                  ...((arguments.length <= 1 ? void 0 : arguments[1]) &&
                    na(arguments.length <= 1 ? void 0 : arguments[1])),
                  ...((arguments.length <= 2 ? void 0 : arguments[2]) &&
                    ra(arguments.length <= 2 ? void 0 : arguments[2])),
                };
          },
          borderLeft: function () {
            return aa(arguments.length <= 0 ? void 0 : arguments[0])
              ? {
                  borderLeftStyle:
                    arguments.length <= 0 ? void 0 : arguments[0],
                  ...((arguments.length <= 1 ? void 0 : arguments[1]) && {
                    borderLeftWidth:
                      arguments.length <= 1 ? void 0 : arguments[1],
                  }),
                  ...((arguments.length <= 2 ? void 0 : arguments[2]) && {
                    borderLeftColor:
                      arguments.length <= 2 ? void 0 : arguments[2],
                  }),
                }
              : {
                  borderLeftWidth:
                    arguments.length <= 0 ? void 0 : arguments[0],
                  ...((arguments.length <= 1 ? void 0 : arguments[1]) && {
                    borderLeftStyle:
                      arguments.length <= 1 ? void 0 : arguments[1],
                  }),
                  ...((arguments.length <= 2 ? void 0 : arguments[2]) && {
                    borderLeftColor:
                      arguments.length <= 2 ? void 0 : arguments[2],
                  }),
                };
          },
          borderBottom: function () {
            return aa(arguments.length <= 0 ? void 0 : arguments[0])
              ? {
                  borderBottomStyle:
                    arguments.length <= 0 ? void 0 : arguments[0],
                  ...((arguments.length <= 1 ? void 0 : arguments[1]) && {
                    borderBottomWidth:
                      arguments.length <= 1 ? void 0 : arguments[1],
                  }),
                  ...((arguments.length <= 2 ? void 0 : arguments[2]) && {
                    borderBottomColor:
                      arguments.length <= 2 ? void 0 : arguments[2],
                  }),
                }
              : {
                  borderBottomWidth:
                    arguments.length <= 0 ? void 0 : arguments[0],
                  ...((arguments.length <= 1 ? void 0 : arguments[1]) && {
                    borderBottomStyle:
                      arguments.length <= 1 ? void 0 : arguments[1],
                  }),
                  ...((arguments.length <= 2 ? void 0 : arguments[2]) && {
                    borderBottomColor:
                      arguments.length <= 2 ? void 0 : arguments[2],
                  }),
                };
          },
          borderRight: function () {
            return aa(arguments.length <= 0 ? void 0 : arguments[0])
              ? {
                  borderRightStyle:
                    arguments.length <= 0 ? void 0 : arguments[0],
                  ...((arguments.length <= 1 ? void 0 : arguments[1]) && {
                    borderRightWidth:
                      arguments.length <= 1 ? void 0 : arguments[1],
                  }),
                  ...((arguments.length <= 2 ? void 0 : arguments[2]) && {
                    borderRightColor:
                      arguments.length <= 2 ? void 0 : arguments[2],
                  }),
                }
              : {
                  borderRightWidth:
                    arguments.length <= 0 ? void 0 : arguments[0],
                  ...((arguments.length <= 1 ? void 0 : arguments[1]) && {
                    borderRightStyle:
                      arguments.length <= 1 ? void 0 : arguments[1],
                  }),
                  ...((arguments.length <= 2 ? void 0 : arguments[2]) && {
                    borderRightColor:
                      arguments.length <= 2 ? void 0 : arguments[2],
                  }),
                };
          },
          borderTop: function () {
            return aa(arguments.length <= 0 ? void 0 : arguments[0])
              ? {
                  borderTopStyle: arguments.length <= 0 ? void 0 : arguments[0],
                  ...((arguments.length <= 1 ? void 0 : arguments[1]) && {
                    borderTopWidth:
                      arguments.length <= 1 ? void 0 : arguments[1],
                  }),
                  ...((arguments.length <= 2 ? void 0 : arguments[2]) && {
                    borderTopColor:
                      arguments.length <= 2 ? void 0 : arguments[2],
                  }),
                }
              : {
                  borderTopWidth: arguments.length <= 0 ? void 0 : arguments[0],
                  ...((arguments.length <= 1 ? void 0 : arguments[1]) && {
                    borderTopStyle:
                      arguments.length <= 1 ? void 0 : arguments[1],
                  }),
                  ...((arguments.length <= 2 ? void 0 : arguments[2]) && {
                    borderTopColor:
                      arguments.length <= 2 ? void 0 : arguments[2],
                  }),
                };
          },
          borderColor: ra,
          borderStyle: na,
          borderRadius: function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e;
            return {
              borderBottomRightRadius:
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : e,
              borderBottomLeftRadius:
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : t,
              borderTopRightRadius: t,
              borderTopLeftRadius: e,
            };
          },
          borderWidth: ta,
          flex: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            const r = 1 === t.length,
              o = 2 === t.length,
              a = 3 === t.length;
            if (r) {
              const [e] = t;
              if ("initial" === e)
                return { flexGrow: 0, flexShrink: 1, flexBasis: "auto" };
              if (la(e))
                return { flexGrow: 1, flexShrink: 1, flexBasis: "auto" };
              if (((e) => "none" === e)(e))
                return { flexGrow: 0, flexShrink: 0, flexBasis: "auto" };
              if (ia(e)) return { flexGrow: e, flexShrink: 1, flexBasis: 0 };
              if (ca(e)) return { flexGrow: 1, flexShrink: 1, flexBasis: e };
            }
            if (o) {
              const [e, n] = t;
              if (ia(n)) return { flexGrow: e, flexShrink: n, flexBasis: 0 };
              if (ca(n)) return { flexGrow: e, flexShrink: 1, flexBasis: n };
            }
            if (a) {
              const [e, n, r] = t;
              if (ia(e) && ia(n) && (la(r) || ca(r)))
                return { flexGrow: e, flexShrink: n, flexBasis: r };
            }
            return {};
          },
          gap: function (e) {
            return {
              columnGap: e,
              rowGap:
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e,
            };
          },
          gridArea: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            if (
              t.some(
                (e) =>
                  !(function (e) {
                    return (
                      void 0 === e ||
                      "number" === typeof e ||
                      ("string" === typeof e && !ua.test(e))
                    );
                  })(e),
              )
            )
              return {};
            const r = void 0 !== t[0] ? t[0] : "auto",
              o = void 0 !== t[1] ? t[1] : ha(r) ? r : "auto";
            return {
              gridRowStart: r,
              gridColumnStart: o,
              gridRowEnd: void 0 !== t[2] ? t[2] : ha(r) ? r : "auto",
              gridColumnEnd: void 0 !== t[3] ? t[3] : ha(o) ? o : "auto",
            };
          },
          margin: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return ea("margin", "", ...t);
          },
          marginBlock: function (e) {
            return {
              marginBlockStart: e,
              marginBlockEnd:
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e,
            };
          },
          marginInline: function (e) {
            return {
              marginInlineStart: e,
              marginInlineEnd:
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e,
            };
          },
          padding: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return ea("padding", "", ...t);
          },
          paddingBlock: function (e) {
            return {
              paddingBlockStart: e,
              paddingBlockEnd:
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e,
            };
          },
          paddingInline: function (e) {
            return {
              paddingInlineStart: e,
              paddingInlineEnd:
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e,
            };
          },
          overflow: function (e) {
            return {
              overflowX: e,
              overflowY:
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e,
            };
          },
          inset: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            const [r, o = r, a = r, i = o] = t;
            return { top: r, right: o, bottom: a, left: i };
          },
          outline: function (e, t, n) {
            return {
              outlineWidth: e,
              ...(t && { outlineStyle: t }),
              ...(n && { outlineColor: n }),
            };
          },
          transition: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (function (e) {
              return 1 === e.length && pa.includes(e[0]);
            })(t)
              ? {
                  transitionDelay: t[0],
                  transitionDuration: t[0],
                  transitionProperty: t[0],
                  transitionTimingFunction: t[0],
                }
              : (function (e) {
                  if (1 === e.length && Array.isArray(e[0])) return e[0];
                  return [e];
                })(t).reduce((e, t, n) => {
                  let [r, o = "0s", a = "0s", i = "ease"] = t;
                  return (
                    0 === n
                      ? ((e.transitionProperty = r),
                        (e.transitionDuration = o),
                        (e.transitionDelay = a),
                        (e.transitionTimingFunction = i))
                      : ((e.transitionProperty += ", ".concat(r)),
                        (e.transitionDuration += ", ".concat(o)),
                        (e.transitionDelay += ", ".concat(a)),
                        (e.transitionTimingFunction += ", ".concat(i))),
                    e
                  );
                }, {});
          },
          textDecoration: function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            if (0 === n.length)
              return (function (e) {
                return ga.includes(e);
              })(e)
                ? { textDecorationStyle: e }
                : { textDecorationLine: e };
            const [o, a, i] = n;
            return {
              textDecorationLine: e,
              ...(o && { textDecorationStyle: o }),
              ...(a && { textDecorationColor: a }),
              ...(i && { textDecorationThickness: i }),
            };
          },
        },
        va = "fui-Label",
        ba = "fui-Label__required",
        ya = Mn(
          {
            root: { Bahqtrf: "fk6fouc", sj55zd: "f19n0e5" },
            disabled: { sj55zd: "f1s2aq7o", Bbusuzp: "f1dcs8yz" },
            required: { sj55zd: "f1whyuy6", uwmqm3: ["fruq291", "f7x41pl"] },
            small: { Be2twd7: "fy9rknc", Bg96gwp: "fwrc4pm" },
            medium: { Be2twd7: "fkhj508", Bg96gwp: "f1i3iumi" },
            large: {
              Be2twd7: "fod5ikn",
              Bg96gwp: "faaz57k",
              Bhrd7zp: "fl43uef",
            },
            semibold: { Bhrd7zp: "fl43uef" },
          },
          {
            d: [
              ".fk6fouc{font-family:var(--fontFamilyBase);}",
              ".f19n0e5{color:var(--colorNeutralForeground1);}",
              ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}",
              ".f1whyuy6{color:var(--colorPaletteRedForeground3);}",
              ".fruq291{padding-left:var(--spacingHorizontalXS);}",
              ".f7x41pl{padding-right:var(--spacingHorizontalXS);}",
              ".fy9rknc{font-size:var(--fontSizeBase200);}",
              ".fwrc4pm{line-height:var(--lineHeightBase200);}",
              ".fkhj508{font-size:var(--fontSizeBase300);}",
              ".f1i3iumi{line-height:var(--lineHeightBase300);}",
              ".fod5ikn{font-size:var(--fontSizeBase400);}",
              ".faaz57k{line-height:var(--lineHeightBase400);}",
              ".fl43uef{font-weight:var(--fontWeightSemibold);}",
            ],
            m: [
              [
                "@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
            ],
          },
        ),
        wa = t.forwardRef((e, t) => {
          const n = ((e, t) => {
            const {
              disabled: n = !1,
              required: r = !1,
              weight: o = "regular",
              size: a = "medium",
            } = e;
            return {
              disabled: n,
              required: be(!0 === r ? "*" : r || void 0, {
                defaultProps: { "aria-hidden": "true" },
                elementType: "span",
              }),
              weight: o,
              size: a,
              components: { root: "label", required: "span" },
              root: ve(Fe("label", { ref: t, ...e }), { elementType: "label" }),
            };
          })(e, t);
          return (
            ((e) => {
              const t = ya();
              (e.root.className = Qe(
                va,
                t.root,
                e.disabled && t.disabled,
                t[e.size],
                "semibold" === e.weight && t.semibold,
                e.root.className,
              )),
                e.required &&
                  (e.required.className = Qe(
                    ba,
                    t.required,
                    e.disabled && t.disabled,
                    e.required.className,
                  ));
            })(n),
            P("useLabelStyles_unstable")(n),
            ((e) => (
              p(),
              h(e.root, {
                children: [e.root.children, e.required && f(e.required, {})],
              })
            ))(n)
          );
        });
      wa.displayName = "Label";
      const ka = t.createContext(void 0);
      ka.Provider;
      function xa(e, n) {
        return (function (e, t, n) {
          if (!e) return t;
          t = { ...t };
          const {
            generatedControlId: r,
            hintId: o,
            labelFor: a,
            labelId: i,
            required: l,
            validationMessageId: s,
            validationState: c,
          } = e;
          var u, d, f, h, p, g, m, v, b, y;
          r && ((null !== (d = (u = t).id) && void 0 !== d) || (u.id = r));
          !i ||
            ((null === n || void 0 === n ? void 0 : n.supportsLabelFor) &&
              a === t.id) ||
            (null !== (p = (f = t)[(h = "aria-labelledby")]) && void 0 !== p) ||
            (f[h] = i);
          (s || o) &&
            (t["aria-describedby"] = [
              s,
              o,
              null === t || void 0 === t ? void 0 : t["aria-describedby"],
            ]
              .filter(Boolean)
              .join(" "));
          "error" === c &&
            ((null !== (v = (g = t)[(m = "aria-invalid")]) && void 0 !== v) ||
              (g[m] = !0));
          if (l) {
            var w, k, x, S, _;
            if (null === n || void 0 === n ? void 0 : n.supportsRequired)
              (null !== (k = (w = t).required) && void 0 !== k) ||
                (w.required = !0);
            else
              (null !== (_ = (x = t)[(S = "aria-required")]) && void 0 !== _) ||
                (x[S] = !0);
          }
          (null === n || void 0 === n ? void 0 : n.supportsSize) &&
            ((null !== (y = (b = t).size) && void 0 !== y) ||
              (b.size = e.size));
          return t;
        })(t.useContext(ka), e, n);
      }
      const Sa = (e) => {
          const [n] = t.useState(() => void 0 !== e);
          return n;
        },
        _a = (e, n) => {
          e = xa(e, {
            supportsLabelFor: !0,
            supportsRequired: !0,
            supportsSize: !0,
          });
          const r = D();
          var o;
          const {
            size: a = "medium",
            appearance: i = null !== (o = r.inputDefaultAppearance) &&
            void 0 !== o
              ? o
              : "outline",
            onChange: l,
          } = e;
          const [s, c] = ((e) => {
              const [n, r] = t.useState(() =>
                  void 0 === e.defaultState
                    ? e.initialState
                    : "function" === typeof e.defaultState
                      ? e.defaultState()
                      : e.defaultState,
                ),
                o = t.useRef(e.state);
              t.useEffect(() => {
                o.current = e.state;
              }, [e.state]);
              const a = t.useCallback((e) => {
                (function (e) {
                  return "function" === typeof e;
                })(e) && e(o.current);
              }, []);
              return Sa(e.state) ? [e.state, a] : [n, r];
            })({
              state: e.value,
              defaultState: e.defaultValue,
              initialState: void 0,
            }),
            u = ((e) => {
              let { primarySlotTagName: t, props: n, excludedPropNames: r } = e;
              return {
                root: { style: n.style, className: n.className },
                primary: Re(t, n, [...(r || []), "style", "className"]),
              };
            })({
              props: e,
              primarySlotTagName: "input",
              excludedPropNames: ["size", "onChange", "value", "defaultValue"],
            }),
            d = {
              size: a,
              appearance: i,
              components: {
                root: "span",
                input: "input",
                contentBefore: "span",
                contentAfter: "span",
              },
              input: ve(e.input, {
                defaultProps: { type: "text", ref: n, ...u.primary },
                elementType: "input",
              }),
              contentAfter: be(e.contentAfter, { elementType: "span" }),
              contentBefore: be(e.contentBefore, { elementType: "span" }),
              root: ve(e.root, { defaultProps: u.root, elementType: "span" }),
            };
          return (
            (d.input.value = s),
            (d.input.onChange = Cn((e) => {
              const t = e.target.value;
              null === l || void 0 === l || l(e, { value: t }), c(t);
            })),
            d
          );
        },
        Ba = "fui-Input",
        za = "fui-Input__input",
        Ca = "fui-Input__contentBefore",
        Na = "fui-Input__contentAfter",
        Ea = An("r1jtohuq", "rl1z2p5", {
          r: [
            ".r1jtohuq{display:inline-flex;align-items:center;flex-wrap:nowrap;gap:var(--spacingHorizontalXXS);border-radius:var(--borderRadiusMedium);position:relative;box-sizing:border-box;min-height:32px;padding:0 var(--spacingHorizontalMNudge);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);background-color:var(--colorNeutralBackground1);border:1px solid var(--colorNeutralStroke1);border-bottom-color:var(--colorNeutralStrokeAccessible);}",
            '.r1jtohuq::after{box-sizing:border-box;content:"";position:absolute;left:-1px;bottom:-1px;right:-1px;height:max(2px, var(--borderRadiusMedium));border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-bottom:2px solid var(--colorCompoundBrandStroke);clip-path:inset(calc(100% - 2px) 0 0 0);transform:scaleX(0);transition-property:transform;transition-duration:var(--durationUltraFast);transition-delay:var(--curveAccelerateMid);}',
            ".r1jtohuq:focus-within::after{transform:scaleX(1);transition-property:transform;transition-duration:var(--durationNormal);transition-delay:var(--curveDecelerateMid);}",
            ".r1jtohuq:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}",
            ".r1jtohuq:focus-within{outline:2px solid transparent;}",
            ".rl1z2p5{display:inline-flex;align-items:center;flex-wrap:nowrap;gap:var(--spacingHorizontalXXS);border-radius:var(--borderRadiusMedium);position:relative;box-sizing:border-box;min-height:32px;padding:0 var(--spacingHorizontalMNudge);font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);background-color:var(--colorNeutralBackground1);border:1px solid var(--colorNeutralStroke1);border-bottom-color:var(--colorNeutralStrokeAccessible);}",
            '.rl1z2p5::after{box-sizing:border-box;content:"";position:absolute;right:-1px;bottom:-1px;left:-1px;height:max(2px, var(--borderRadiusMedium));border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-bottom:2px solid var(--colorCompoundBrandStroke);clip-path:inset(calc(100% - 2px) 0 0 0);transform:scaleX(0);transition-property:transform;transition-duration:var(--durationUltraFast);transition-delay:var(--curveAccelerateMid);}',
            ".rl1z2p5:focus-within::after{transform:scaleX(1);transition-property:transform;transition-duration:var(--durationNormal);transition-delay:var(--curveDecelerateMid);}",
            ".rl1z2p5:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}",
            ".rl1z2p5:focus-within{outline:2px solid transparent;}",
          ],
          s: [
            "@media screen and (prefers-reduced-motion: reduce){.r1jtohuq::after{transition-duration:0.01ms;transition-delay:0.01ms;}}",
            "@media screen and (prefers-reduced-motion: reduce){.r1jtohuq:focus-within::after{transition-duration:0.01ms;transition-delay:0.01ms;}}",
            "@media screen and (prefers-reduced-motion: reduce){.rl1z2p5::after{transition-duration:0.01ms;transition-delay:0.01ms;}}",
            "@media screen and (prefers-reduced-motion: reduce){.rl1z2p5:focus-within::after{transition-duration:0.01ms;transition-delay:0.01ms;}}",
          ],
        }),
        Pa = Mn(
          {
            small: {
              sshi5w: "f1pha7fy",
              uwmqm3: ["fk8j09s", "fdw0yi8"],
              z189sj: ["fdw0yi8", "fk8j09s"],
              Bahqtrf: "fk6fouc",
              Be2twd7: "fy9rknc",
              Bhrd7zp: "figsok6",
              Bg96gwp: "fwrc4pm",
            },
            medium: {},
            large: {
              sshi5w: "f1w5jphr",
              uwmqm3: ["f1uw59to", "fw5db7e"],
              z189sj: ["fw5db7e", "f1uw59to"],
              Bahqtrf: "fk6fouc",
              Be2twd7: "fod5ikn",
              Bhrd7zp: "figsok6",
              Bg96gwp: "faaz57k",
              i8kkvl: "f1rjii52",
              Belr9w4: "f1r7g2jn",
            },
            outline: {},
            outlineInteractive: {
              Bgoe8wy: "fvcxoqz",
              Bwzppfd: ["f1ub3y4t", "f1m52nbi"],
              oetu4i: "f1l4zc64",
              gg5e9n: ["f1m52nbi", "f1ub3y4t"],
              Drbcw7: "f8vnjqi",
              udz0bu: ["fz1etlk", "f1hc16gm"],
              Be8ivqh: "f1klwx88",
              ofdepl: ["f1hc16gm", "fz1etlk"],
            },
            underline: {
              De3pzq: "f1c21dwh",
              Bbmb7ep: ["f1krrbdw", "f1deotkl"],
              Beyfa6y: ["f1deotkl", "f1krrbdw"],
              B7oj6ja: ["f10ostut", "f1ozlkrg"],
              Btl43ni: ["f1ozlkrg", "f10ostut"],
              icvyot: "f1ern45e",
              vrafjx: ["f1n71otn", "f1deefiw"],
              wvpqe5: ["f1deefiw", "f1n71otn"],
              Eqx8gd: ["f1n6gb5g", "f15yvnhg"],
              B1piin3: ["f15yvnhg", "f1n6gb5g"],
            },
            underlineInteractive: {
              oetu4i: "f1l4zc64",
              Be8ivqh: "f1klwx88",
              B3778ie: ["f1nf3wye", "feulmo5"],
              d9w3h3: ["feulmo5", "f1nf3wye"],
              Bl18szs: ["f18vqdqu", "f53nyzz"],
              B4j8arr: ["f53nyzz", "f18vqdqu"],
            },
            filled: {
              g2u3we: "fghlq4f",
              h3c5rm: ["f1gn591s", "fjscplz"],
              B9xav0g: "fb073pr",
              zhjwy3: ["fjscplz", "f1gn591s"],
            },
            filledInteractive: {
              q7v0qe: "ftmjh5b",
              kmh5ft: ["f17blpuu", "fsrcdbj"],
              nagaa4: "f1tpwn32",
              B1yhkcb: ["fsrcdbj", "f17blpuu"],
            },
            invalid: {
              tvckwq: "fs4k3qj",
              gk2u95: ["fcee079", "fmyw78r"],
              hhx65j: "f1fgmyf4",
              Bxowmz0: ["fmyw78r", "fcee079"],
            },
            "filled-darker": { De3pzq: "f16xq7d1" },
            "filled-lighter": { De3pzq: "fxugw4r" },
            "filled-darker-shadow": { De3pzq: "f16xq7d1", E5pizo: "fyed02w" },
            "filled-lighter-shadow": { De3pzq: "fxugw4r", E5pizo: "fyed02w" },
            disabled: {
              Bceei9c: "fdrzuqr",
              De3pzq: "f1c21dwh",
              g2u3we: "f1jj8ep1",
              h3c5rm: ["f15xbau", "fy0fskl"],
              B9xav0g: "f4ikngz",
              zhjwy3: ["fy0fskl", "f15xbau"],
              Bjwas2f: "fg455y9",
              Bn1d65q: ["f1rvyvqg", "f14g86mu"],
              Bxeuatn: "f1cwzwz",
              n51gp8: ["f14g86mu", "f1rvyvqg"],
              Bsft5z2: "fhr9occ",
              Bduesf4: "f99w1ws",
            },
          },
          {
            d: [
              ".f1pha7fy{min-height:24px;}",
              ".fk8j09s{padding-left:var(--spacingHorizontalSNudge);}",
              ".fdw0yi8{padding-right:var(--spacingHorizontalSNudge);}",
              ".fk6fouc{font-family:var(--fontFamilyBase);}",
              ".fy9rknc{font-size:var(--fontSizeBase200);}",
              ".figsok6{font-weight:var(--fontWeightRegular);}",
              ".fwrc4pm{line-height:var(--lineHeightBase200);}",
              ".f1w5jphr{min-height:40px;}",
              ".f1uw59to{padding-left:var(--spacingHorizontalM);}",
              ".fw5db7e{padding-right:var(--spacingHorizontalM);}",
              ".fod5ikn{font-size:var(--fontSizeBase400);}",
              ".faaz57k{line-height:var(--lineHeightBase400);}",
              ".f1rjii52{column-gap:var(--spacingHorizontalSNudge);}",
              ".f1r7g2jn{row-gap:var(--spacingHorizontalSNudge);}",
              ".f1c21dwh{background-color:var(--colorTransparentBackground);}",
              ".f1krrbdw{border-bottom-right-radius:0;}",
              ".f1deotkl{border-bottom-left-radius:0;}",
              ".f10ostut{border-top-right-radius:0;}",
              ".f1ozlkrg{border-top-left-radius:0;}",
              ".f1ern45e{border-top-style:none;}",
              ".f1n71otn{border-right-style:none;}",
              ".f1deefiw{border-left-style:none;}",
              ".f1n6gb5g::after{left:0;}",
              ".f15yvnhg::after{right:0;}",
              ".f1nf3wye::after{border-bottom-right-radius:0;}",
              ".feulmo5::after{border-bottom-left-radius:0;}",
              ".f18vqdqu::after{border-top-right-radius:0;}",
              ".f53nyzz::after{border-top-left-radius:0;}",
              ".fghlq4f{border-top-color:var(--colorTransparentStroke);}",
              ".f1gn591s{border-right-color:var(--colorTransparentStroke);}",
              ".fjscplz{border-left-color:var(--colorTransparentStroke);}",
              ".fb073pr{border-bottom-color:var(--colorTransparentStroke);}",
              ".fs4k3qj:not(:focus-within),.fs4k3qj:hover:not(:focus-within){border-top-color:var(--colorPaletteRedBorder2);}",
              ".fcee079:not(:focus-within),.fcee079:hover:not(:focus-within){border-right-color:var(--colorPaletteRedBorder2);}",
              ".fmyw78r:not(:focus-within),.fmyw78r:hover:not(:focus-within){border-left-color:var(--colorPaletteRedBorder2);}",
              ".f1fgmyf4:not(:focus-within),.f1fgmyf4:hover:not(:focus-within){border-bottom-color:var(--colorPaletteRedBorder2);}",
              ".f16xq7d1{background-color:var(--colorNeutralBackground3);}",
              ".fxugw4r{background-color:var(--colorNeutralBackground1);}",
              ".fyed02w{box-shadow:var(--shadow2);}",
              ".fdrzuqr{cursor:not-allowed;}",
              ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}",
              ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}",
              ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}",
              ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}",
              ".fhr9occ::after{content:unset;}",
            ],
            h: [
              ".fvcxoqz:hover{border-top-color:var(--colorNeutralStroke1Hover);}",
              ".f1ub3y4t:hover{border-right-color:var(--colorNeutralStroke1Hover);}",
              ".f1m52nbi:hover{border-left-color:var(--colorNeutralStroke1Hover);}",
              ".f1l4zc64:hover{border-bottom-color:var(--colorNeutralStrokeAccessibleHover);}",
              ".ftmjh5b:hover,.ftmjh5b:focus-within{border-top-color:var(--colorTransparentStrokeInteractive);}",
              ".f17blpuu:hover,.f17blpuu:focus-within{border-right-color:var(--colorTransparentStrokeInteractive);}",
              ".fsrcdbj:hover,.fsrcdbj:focus-within{border-left-color:var(--colorTransparentStrokeInteractive);}",
              ".f1tpwn32:hover,.f1tpwn32:focus-within{border-bottom-color:var(--colorTransparentStrokeInteractive);}",
            ],
            a: [
              ".f8vnjqi:active,.f8vnjqi:focus-within{border-top-color:var(--colorNeutralStroke1Pressed);}",
              ".fz1etlk:active,.fz1etlk:focus-within{border-right-color:var(--colorNeutralStroke1Pressed);}",
              ".f1hc16gm:active,.f1hc16gm:focus-within{border-left-color:var(--colorNeutralStroke1Pressed);}",
              ".f1klwx88:active,.f1klwx88:focus-within{border-bottom-color:var(--colorNeutralStrokeAccessiblePressed);}",
            ],
            m: [
              [
                "@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
              [
                "@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}",
                { m: "(forced-colors: active)" },
              ],
            ],
            w: [".f99w1ws:focus-within{outline-style:none;}"],
          },
        ),
        ja = An("rvp2gzh", null, [
          ".rvp2gzh{box-sizing:border-box;flex-grow:1;min-width:0;border-style:none;padding:0 var(--spacingHorizontalXXS);color:var(--colorNeutralForeground1);background-color:transparent;outline-style:none;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;}",
          ".rvp2gzh::-webkit-input-placeholder{color:var(--colorNeutralForeground4);opacity:1;}",
          ".rvp2gzh::-moz-placeholder{color:var(--colorNeutralForeground4);opacity:1;}",
          ".rvp2gzh:-ms-input-placeholder{color:var(--colorNeutralForeground4);opacity:1;}",
          ".rvp2gzh::placeholder{color:var(--colorNeutralForeground4);opacity:1;}",
        ]),
        Ta = Mn(
          {
            large: {
              uwmqm3: ["fk8j09s", "fdw0yi8"],
              z189sj: ["fdw0yi8", "fk8j09s"],
            },
            disabled: {
              sj55zd: "f1s2aq7o",
              De3pzq: "f1c21dwh",
              Bceei9c: "fdrzuqr",
              yvdlaj: "fahhnxm",
            },
          },
          {
            d: [
              ".fk8j09s{padding-left:var(--spacingHorizontalSNudge);}",
              ".fdw0yi8{padding-right:var(--spacingHorizontalSNudge);}",
              ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}",
              ".f1c21dwh{background-color:var(--colorTransparentBackground);}",
              ".fdrzuqr{cursor:not-allowed;}",
              ".fahhnxm::-webkit-input-placeholder{color:var(--colorNeutralForegroundDisabled);}",
              ".fahhnxm::-moz-placeholder{color:var(--colorNeutralForegroundDisabled);}",
            ],
          },
        ),
        Ra = An("r1572tok", null, [
          ".r1572tok{box-sizing:border-box;color:var(--colorNeutralForeground3);display:flex;}",
          ".r1572tok>svg{font-size:20px;}",
        ]),
        Fa = Mn(
          {
            disabled: { sj55zd: "f1s2aq7o" },
            small: { kwki1k: "f3u2cy0" },
            medium: {},
            large: { kwki1k: "fa420co" },
          },
          {
            d: [
              ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}",
              ".f3u2cy0>svg{font-size:16px;}",
              ".fa420co>svg{font-size:24px;}",
            ],
          },
        ),
        Da = t.forwardRef((e, t) => {
          const n = _a(e, t);
          return (
            ((e) => {
              const { size: t, appearance: n } = e,
                r = e.input.disabled,
                o = "true" === "".concat(e.input["aria-invalid"]),
                a = n.startsWith("filled"),
                i = Pa(),
                l = Ta(),
                s = Fa();
              (e.root.className = Qe(
                Ba,
                Ea(),
                i[t],
                i[n],
                !r && "outline" === n && i.outlineInteractive,
                !r && "underline" === n && i.underlineInteractive,
                !r && a && i.filledInteractive,
                a && i.filled,
                !r && o && i.invalid,
                r && i.disabled,
                e.root.className,
              )),
                (e.input.className = Qe(
                  za,
                  ja(),
                  "large" === t && l.large,
                  r && l.disabled,
                  e.input.className,
                ));
              const c = [Ra(), r && s.disabled, s[t]];
              e.contentBefore &&
                (e.contentBefore.className = Qe(
                  Ca,
                  ...c,
                  e.contentBefore.className,
                )),
                e.contentAfter &&
                  (e.contentAfter.className = Qe(
                    Na,
                    ...c,
                    e.contentAfter.className,
                  ));
            })(n),
            P("useInputStyles_unstable")(n),
            ((e) => (
              p(),
              h(e.root, {
                children: [
                  e.contentBefore && f(e.contentBefore, {}),
                  f(e.input, {}),
                  e.contentAfter && f(e.contentAfter, {}),
                ],
              })
            ))(n)
          );
        });
      Da.displayName = "Input";
      const Ia = Xo({
          root: {
            display: "flex",
            flexDirection: "column",
            ...ma.gap("2px"),
            maxWidth: "400px",
            marginTop: "8px",
          },
        }),
        Oa = t.memo((e) => {
          const t = Ia(),
            n = Me(e.id);
          return (0, u.jsxs)("div", {
            className: "".concat(t.root, " row-form"),
            children: [
              e.label
                ? (0, u.jsx)(wa, { htmlFor: n, children: e.label })
                : null,
              (0, u.jsx)(Da, {
                id: n,
                appearance: "filled-lighter",
                placeholder: e.placeholderText,
                size: e.size,
                value: e.value,
                onChange: e.onChange,
              }),
            ],
          });
        }),
        qa = Xo({
          root: { boxSizing: "border-box", display: "flex", flexGrow: 1 },
          label: { flexGrow: 1, width: 0 },
          buttons: {
            display: "flex",
            justifyContent: "space-evenly",
            flexGrow: 1,
          },
          button: {
            boxSizing: "border-box",
            height: "48px",
            width: "48px",
            minWidth: "48px",
            backgroundColor: Dn,
          },
        }),
        La = t.memo((e) => {
          const t = qa();
          return (0, u.jsxs)("div", {
            className: t.root,
            children: [
              (0, u.jsx)("div", {
                className: t.label,
                children: (0, u.jsx)(wa, { size: "large", children: e.label }),
              }),
              (0, u.jsxs)("div", {
                className: t.buttons,
                children: [
                  (0, u.jsx)(Jn, {
                    shape: "circular",
                    className: "".concat(t.button),
                  }),
                  (0, u.jsx)(Jn, {
                    shape: "circular",
                    className: "".concat(t.button),
                  }),
                  (0, u.jsx)(Jn, {
                    shape: "circular",
                    className: "".concat(t.button),
                  }),
                  (0, u.jsx)(Jn, {
                    shape: "circular",
                    className: "".concat(t.button),
                  }),
                  (0, u.jsx)(Jn, {
                    shape: "circular",
                    className: "".concat(t.button),
                  }),
                ],
              }),
            ],
          });
        });
      function Aa(e) {
        return (0, u.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          ...e,
          children: (0, u.jsxs)("g", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            children: [
              (0, u.jsx)("path", {
                d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
              }),
              (0, u.jsx)("circle", {
                cx: 8.5,
                cy: 8.5,
                r: 0.5,
                fill: "currentColor",
              }),
              (0, u.jsx)("circle", {
                cx: 15.5,
                cy: 8.5,
                r: 0.5,
                fill: "currentColor",
              }),
              (0, u.jsx)("circle", {
                cx: 15.5,
                cy: 15.5,
                r: 0.5,
                fill: "currentColor",
              }),
              (0, u.jsx)("circle", {
                cx: 8.5,
                cy: 15.5,
                r: 0.5,
                fill: "currentColor",
              }),
            ],
          }),
        });
      }
      const Ma = t.memo((e) =>
          (0, u.jsx)(Jn, {
            appearance: "secondary",
            icon: (0, u.jsx)(Aa, { color: In, height: "24px", width: "24px" }),
            size: "large",
          }),
        ),
        Ha = Xo({
          root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          },
          firstForm: { display: "flex" },
          column: { flexGrow: 2 },
          button: {
            width: 0,
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          },
        }),
        Wa = t.memo((e) => {
          const n = Ha(),
            r = t.useCallback(
              (t, n) => {
                const r = { ...e.data, [n]: t.target.value };
                e.updateData({ basicData: r });
              },
              [e],
            );
          return (0, u.jsxs)("div", {
            className: n.root,
            children: [
              (0, u.jsx)("div", {
                children: (0, u.jsx)(Yo, {
                  children: (0, u.jsxs)("div", {
                    className: n.firstForm,
                    children: [
                      (0, u.jsxs)("div", {
                        className: n.column,
                        children: [
                          (0, u.jsx)(Oa, {
                            id: "name",
                            label: "Name",
                            value: e.data.name,
                            onChange: (e) => r(e, "name"),
                          }),
                          (0, u.jsx)(Oa, {
                            id: "age",
                            label: "Age",
                            value: e.data.age,
                            onChange: (e) => r(e, "age"),
                          }),
                          (0, u.jsx)(Oa, {
                            id: "gender",
                            label: "Gender",
                            value: e.data.gender,
                            onChange: (e) => r(e, "gender"),
                          }),
                          (0, u.jsx)(Oa, {
                            id: "occupation",
                            label: "Occupation",
                            value: e.data.occupation,
                            onChange: (e) => r(e, "occupation"),
                          }),
                          (0, u.jsx)(Oa, {
                            id: "countryResidence",
                            label: "Country of Residence",
                            value: e.data.countryResidence,
                            onChange: (e) => r(e, "countryResidence"),
                          }),
                        ],
                      }),
                      (0, u.jsx)("div", {
                        className: n.button,
                        children: (0, u.jsx)(Ma, {}),
                      }),
                    ],
                  }),
                }),
              }),
              (0, u.jsx)("div", {
                children: (0, u.jsxs)(Yo, {
                  children: [
                    (0, u.jsx)(Oa, {
                      id: "countryOrigin",
                      label: "Country of Origin",
                      value: e.data.countryOrigin,
                      onChange: (e) => r(e, "countryOrigin"),
                    }),
                    (0, u.jsx)(Oa, {
                      id: "income",
                      label: "Annual Household Income",
                      value: e.data.income,
                      onChange: (e) => r(e, "income"),
                    }),
                    (0, u.jsx)(Oa, {
                      id: "householdSize",
                      label: "Household Size",
                      value: e.data.householdSize,
                      onChange: (e) => r(e, "householdSize"),
                    }),
                  ],
                }),
              }),
            ],
          });
        }),
        Ua = "fui-Text",
        Va = Mn(
          {
            root: {
              Bahqtrf: "fk6fouc",
              Be2twd7: "fkhj508",
              Bg96gwp: "f1i3iumi",
              Bhrd7zp: "figsok6",
              fsow6f: "fpgzoln",
              mc9l5x: "f1w7gpdv",
              Huce71: "f6juhto",
              B68tc82: "f1mtd64y",
              Bmxbyg5: "f1y7q3j9",
              ygn44y: "f2jf649",
            },
            nowrap: {
              Huce71: "fz5stix",
              B68tc82: "f1p9o1ba",
              Bmxbyg5: "f1sil6mw",
            },
            truncate: { ygn44y: "f1cmbuwj" },
            block: { mc9l5x: "ftgm304" },
            italic: { B80ckks: "f1j4dglz" },
            underline: { w71qe1: "f13mvf36" },
            strikethrough: { w71qe1: "fv5q2k7" },
            strikethroughUnderline: { w71qe1: "f1drk4o6" },
            base100: { Be2twd7: "f13mqy1h", Bg96gwp: "fcpl73t" },
            base200: { Be2twd7: "fy9rknc", Bg96gwp: "fwrc4pm" },
            base400: { Be2twd7: "fod5ikn", Bg96gwp: "faaz57k" },
            base500: { Be2twd7: "f1pp30po", Bg96gwp: "f106mvju" },
            base600: { Be2twd7: "f1x0m3f5", Bg96gwp: "fb86gi6" },
            hero700: { Be2twd7: "fojgt09", Bg96gwp: "fcen8rp" },
            hero800: { Be2twd7: "fccw675", Bg96gwp: "f1ebx5kk" },
            hero900: { Be2twd7: "f15afnhw", Bg96gwp: "fr3w3wp" },
            hero1000: { Be2twd7: "fpyltcb", Bg96gwp: "f1ivgwrt" },
            monospace: { Bahqtrf: "f1fedwem" },
            numeric: { Bahqtrf: "f1uq0ln5" },
            weightMedium: { Bhrd7zp: "fdj6btp" },
            weightSemibold: { Bhrd7zp: "fl43uef" },
            weightBold: { Bhrd7zp: "flh3ekv" },
            alignCenter: { fsow6f: "f17mccla" },
            alignEnd: { fsow6f: "f12ymhq5" },
            alignJustify: { fsow6f: "f1j59e10" },
          },
          {
            d: [
              ".fk6fouc{font-family:var(--fontFamilyBase);}",
              ".fkhj508{font-size:var(--fontSizeBase300);}",
              ".f1i3iumi{line-height:var(--lineHeightBase300);}",
              ".figsok6{font-weight:var(--fontWeightRegular);}",
              ".fpgzoln{text-align:start;}",
              ".f1w7gpdv{display:inline;}",
              ".f6juhto{white-space:normal;}",
              ".f1mtd64y{overflow-x:visible;}",
              ".f1y7q3j9{overflow-y:visible;}",
              ".f2jf649{text-overflow:clip;}",
              ".fz5stix{white-space:nowrap;}",
              ".f1p9o1ba{overflow-x:hidden;}",
              ".f1sil6mw{overflow-y:hidden;}",
              ".f1cmbuwj{text-overflow:ellipsis;}",
              ".ftgm304{display:block;}",
              ".f1j4dglz{font-style:italic;}",
              ".f13mvf36{text-decoration-line:underline;}",
              ".fv5q2k7{text-decoration-line:line-through;}",
              ".f1drk4o6{text-decoration-line:line-through underline;}",
              ".f13mqy1h{font-size:var(--fontSizeBase100);}",
              ".fcpl73t{line-height:var(--lineHeightBase100);}",
              ".fy9rknc{font-size:var(--fontSizeBase200);}",
              ".fwrc4pm{line-height:var(--lineHeightBase200);}",
              ".fod5ikn{font-size:var(--fontSizeBase400);}",
              ".faaz57k{line-height:var(--lineHeightBase400);}",
              ".f1pp30po{font-size:var(--fontSizeBase500);}",
              ".f106mvju{line-height:var(--lineHeightBase500);}",
              ".f1x0m3f5{font-size:var(--fontSizeBase600);}",
              ".fb86gi6{line-height:var(--lineHeightBase600);}",
              ".fojgt09{font-size:var(--fontSizeHero700);}",
              ".fcen8rp{line-height:var(--lineHeightHero700);}",
              ".fccw675{font-size:var(--fontSizeHero800);}",
              ".f1ebx5kk{line-height:var(--lineHeightHero800);}",
              ".f15afnhw{font-size:var(--fontSizeHero900);}",
              ".fr3w3wp{line-height:var(--lineHeightHero900);}",
              ".fpyltcb{font-size:var(--fontSizeHero1000);}",
              ".f1ivgwrt{line-height:var(--lineHeightHero1000);}",
              ".f1fedwem{font-family:var(--fontFamilyMonospace);}",
              ".f1uq0ln5{font-family:var(--fontFamilyNumeric);}",
              ".fdj6btp{font-weight:var(--fontWeightMedium);}",
              ".fl43uef{font-weight:var(--fontWeightSemibold);}",
              ".flh3ekv{font-weight:var(--fontWeightBold);}",
              ".f17mccla{text-align:center;}",
              ".f12ymhq5{text-align:end;}",
              ".f1j59e10{text-align:justify;}",
            ],
          },
        );
      function $a(e) {
        const { useStyles: n, className: r, displayName: o } = e,
          a = t.forwardRef((e, t) => {
            const o = n(),
              a = ((e, t) => {
                const {
                  wrap: n,
                  truncate: r,
                  block: o,
                  italic: a,
                  underline: i,
                  strikethrough: l,
                  size: s,
                  font: c,
                  weight: u,
                  align: d,
                } = e;
                return {
                  align: null !== d && void 0 !== d ? d : "start",
                  block: null !== o && void 0 !== o && o,
                  font: null !== c && void 0 !== c ? c : "base",
                  italic: null !== a && void 0 !== a && a,
                  size: null !== s && void 0 !== s ? s : 300,
                  strikethrough: null !== l && void 0 !== l && l,
                  truncate: null !== r && void 0 !== r && r,
                  underline: null !== i && void 0 !== i && i,
                  weight: null !== u && void 0 !== u ? u : "regular",
                  wrap: null === n || void 0 === n || n,
                  components: { root: "span" },
                  root: ve(Fe("span", { ref: t, ...e }), {
                    elementType: "span",
                  }),
                };
              })(e, t);
            return (
              ((e) => {
                const t = Va();
                e.root.className = Qe(
                  Ua,
                  t.root,
                  !1 === e.wrap && t.nowrap,
                  e.truncate && t.truncate,
                  e.block && t.block,
                  e.italic && t.italic,
                  e.underline && t.underline,
                  e.strikethrough && t.strikethrough,
                  e.underline && e.strikethrough && t.strikethroughUnderline,
                  100 === e.size && t.base100,
                  200 === e.size && t.base200,
                  400 === e.size && t.base400,
                  500 === e.size && t.base500,
                  600 === e.size && t.base600,
                  700 === e.size && t.hero700,
                  800 === e.size && t.hero800,
                  900 === e.size && t.hero900,
                  1e3 === e.size && t.hero1000,
                  "monospace" === e.font && t.monospace,
                  "numeric" === e.font && t.numeric,
                  "medium" === e.weight && t.weightMedium,
                  "semibold" === e.weight && t.weightSemibold,
                  "bold" === e.weight && t.weightBold,
                  "center" === e.align && t.alignCenter,
                  "end" === e.align && t.alignEnd,
                  "justify" === e.align && t.alignJustify,
                  e.root.className,
                );
              })(a),
              (a.root.className = Qe(r, a.root.className, o.root, e.className)),
              ((e) => (p(), f(e.root, {})))(a)
            );
          });
        return (a.displayName = o), a;
      }
      const Ka = $a({
          useStyles: Mn(
            {
              root: {
                Bahqtrf: "fk6fouc",
                Be2twd7: "f1x0m3f5",
                Bhrd7zp: "fl43uef",
                Bg96gwp: "fb86gi6",
              },
            },
            {
              d: [
                ".fk6fouc{font-family:var(--fontFamilyBase);}",
                ".f1x0m3f5{font-size:var(--fontSizeBase600);}",
                ".fl43uef{font-weight:var(--fontWeightSemibold);}",
                ".fb86gi6{line-height:var(--lineHeightBase600);}",
              ],
            },
          ),
          className: "fui-Title3",
          displayName: "Title3",
        }),
        Xa = [
          "US Census (ACS)",
          "World Bank Open",
          "DSDR Project",
          "UN Stats Division",
        ],
        Ga = Xo({
          header: { display: "flex", justifyContent: "space-between" },
          content: {
            boxSizing: "border-box",
            paddingTop: "48px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          },
        }),
        Qa = t.memo((e) => {
          const n = Ga(),
            r = t.useCallback(
              (e) =>
                (0, u.jsx)("div", {
                  className: n.content,
                  children: e.map((e, t) => (0, u.jsx)(La, { label: e }, t)),
                }),
              [n],
            );
          return (0, u.jsxs)(Yo, {
            children: [
              (0, u.jsxs)("div", {
                className: n.header,
                children: [
                  (0, u.jsx)(Ka, { children: "Reliance on Demographic Data" }),
                  (0, u.jsx)(Ma, {}),
                ],
              }),
              r(Xa),
            ],
          });
        }),
        Ja = t.memo((e) => {
          const n = t.useCallback(
            (t, n) => {
              const r = { ...e.data, [n]: t.target.value };
              e.updateData({ questionData: r });
            },
            [e],
          );
          return (0, u.jsxs)(Yo, {
            children: [
              (0, u.jsx)(Ka, { children: "Questions for the User" }),
              (0, u.jsxs)("div", {
                children: [
                  (0, u.jsx)(Oa, {
                    id: "question1",
                    label: "Question 1",
                    placeholderText:
                      "What was the first thing you were drawn to and why?",
                    value: e.data.question1,
                    onChange: (e) => n(e, "question1"),
                  }),
                  (0, u.jsx)(Oa, {
                    id: "question2",
                    label: "Question 2",
                    placeholderText:
                      "What would you be most interested in clicking on?",
                    value: e.data.question2,
                    onChange: (e) => n(e, "question2"),
                  }),
                  (0, u.jsx)(Oa, {
                    id: "question3",
                    label: "Question 3",
                    placeholderText:
                      "What item would you consider purchasing (if any)?",
                    value: e.data.question3,
                    onChange: (e) => n(e, "question3"),
                  }),
                  (0, u.jsx)(Oa, {
                    id: "question4",
                    label: "Question 4",
                    placeholderText:
                      "Which site are you most comfortable navigating?",
                    value: e.data.question4,
                    onChange: (e) => n(e, "question4"),
                  }),
                ],
              }),
            ],
          });
        }),
        Ya = t.memo((e) =>
          (0, u.jsxs)(Yo, {
            children: [
              (0, u.jsx)(Ka, { children: "Sites to Analyze" }),
              (0, u.jsx)(Oa, {
                id: "upload1",
                placeholderText: "Upload JPG, PNG, PDF",
                size: "large",
              }),
              (0, u.jsx)(Oa, {
                id: "upload2",
                placeholderText: "Upload JPG, PNG, PDF",
                size: "large",
              }),
              (0, u.jsx)(Oa, {
                id: "upload3",
                placeholderText: "Upload JPG, PNG, PDF",
                size: "large",
              }),
            ],
          }),
        ),
        Za = "4.28.4";
      let ei,
        ti,
        ni,
        ri,
        oi,
        ai,
        ii,
        li,
        si,
        ci = !1,
        ui = null,
        di = null,
        fi = null,
        hi = null;
      class pi {
        constructor(e) {
          this.body = e;
        }
        get [Symbol.toStringTag]() {
          return "MultipartBody";
        }
      }
      ei ||
        (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { auto: !1 };
          if (ci)
            throw new Error(
              "you must `import 'openai/shims/".concat(
                e.kind,
                "'` before importing anything else from openai",
              ),
            );
          if (ei)
            throw new Error(
              "can't `import 'openai/shims/"
                .concat(e.kind, "'` after `import 'openai/shims/")
                .concat(ei, "'`"),
            );
          (ci = t.auto),
            (ei = e.kind),
            (ti = e.fetch),
            (ui = e.Request),
            (di = e.Response),
            (fi = e.Headers),
            (ni = e.FormData),
            (hi = e.Blob),
            (ri = e.File),
            (oi = e.ReadableStream),
            (ai = e.getMultipartRequestOptions),
            (ii = e.getDefaultAgent),
            (li = e.fileFromPath),
            (si = e.isFsReadStream);
        })(
          (function () {
            let { manuallyImported: e } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const t = e
              ? "You may need to use polyfills"
              : "Add one of these imports before your first `import \u2026 from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n";
            let n, r, o, a;
            try {
              (n = fetch), (r = Request), (o = Response), (a = Headers);
            } catch (i) {
              throw new Error(
                "this environment is missing the following Web Fetch API type: "
                  .concat(i.message, ". ")
                  .concat(t),
              );
            }
            return {
              kind: "web",
              fetch: n,
              Request: r,
              Response: o,
              Headers: a,
              FormData:
                "undefined" !== typeof FormData
                  ? FormData
                  : class {
                      constructor() {
                        throw new Error(
                          "file uploads aren't supported in this environment yet as 'FormData' is undefined. ".concat(
                            t,
                          ),
                        );
                      }
                    },
              Blob:
                "undefined" !== typeof Blob
                  ? Blob
                  : class {
                      constructor() {
                        throw new Error(
                          "file uploads aren't supported in this environment yet as 'Blob' is undefined. ".concat(
                            t,
                          ),
                        );
                      }
                    },
              File:
                "undefined" !== typeof File
                  ? File
                  : class {
                      constructor() {
                        throw new Error(
                          "file uploads aren't supported in this environment yet as 'File' is undefined. ".concat(
                            t,
                          ),
                        );
                      }
                    },
              ReadableStream:
                "undefined" !== typeof ReadableStream
                  ? ReadableStream
                  : class {
                      constructor() {
                        throw new Error(
                          "streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ".concat(
                            t,
                          ),
                        );
                      }
                    },
              getMultipartRequestOptions: async (e, t) => ({
                ...t,
                body: new pi(e),
              }),
              getDefaultAgent: (e) => {},
              fileFromPath: () => {
                throw new Error(
                  "The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads",
                );
              },
              isFsReadStream: (e) => !1,
            };
          })(),
          { auto: !0 },
        );
      class gi extends Error {}
      class mi extends gi {
        constructor(e, t, n, r) {
          super("".concat(mi.makeMessage(e, t, n))),
            (this.status = e),
            (this.headers = r);
          const o = t;
          (this.error = o),
            (this.code = null === o || void 0 === o ? void 0 : o.code),
            (this.param = null === o || void 0 === o ? void 0 : o.param),
            (this.type = null === o || void 0 === o ? void 0 : o.type);
        }
        static makeMessage(e, t, n) {
          const r =
            null !== t && void 0 !== t && t.message
              ? "string" === typeof t.message
                ? t.message
                : JSON.stringify(t.message)
              : t
                ? JSON.stringify(t)
                : n;
          return e && r
            ? "".concat(e, " ").concat(r)
            : e
              ? "".concat(e, " status code (no body)")
              : r || "(no status code or body)";
        }
        static generate(e, t, n, r) {
          if (!e) return new bi({ cause: cl(t) });
          const o = null === t || void 0 === t ? void 0 : t.error;
          return 400 === e
            ? new wi(e, o, n, r)
            : 401 === e
              ? new ki(e, o, n, r)
              : 403 === e
                ? new xi(e, o, n, r)
                : 404 === e
                  ? new Si(e, o, n, r)
                  : 409 === e
                    ? new _i(e, o, n, r)
                    : 422 === e
                      ? new Bi(e, o, n, r)
                      : 429 === e
                        ? new zi(e, o, n, r)
                        : e >= 500
                          ? new Ci(e, o, n, r)
                          : new mi(e, o, n, r);
        }
      }
      class vi extends mi {
        constructor() {
          let { message: e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(void 0, void 0, e || "Request was aborted.", void 0),
            (this.status = void 0);
        }
      }
      class bi extends mi {
        constructor(e) {
          let { message: t, cause: n } = e;
          super(void 0, void 0, t || "Connection error.", void 0),
            (this.status = void 0),
            n && (this.cause = n);
        }
      }
      class yi extends bi {
        constructor() {
          let { message: e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super({
            message: null !== e && void 0 !== e ? e : "Request timed out.",
          });
        }
      }
      class wi extends mi {
        constructor() {
          super(...arguments), (this.status = 400);
        }
      }
      class ki extends mi {
        constructor() {
          super(...arguments), (this.status = 401);
        }
      }
      class xi extends mi {
        constructor() {
          super(...arguments), (this.status = 403);
        }
      }
      class Si extends mi {
        constructor() {
          super(...arguments), (this.status = 404);
        }
      }
      class _i extends mi {
        constructor() {
          super(...arguments), (this.status = 409);
        }
      }
      class Bi extends mi {
        constructor() {
          super(...arguments), (this.status = 422);
        }
      }
      class zi extends mi {
        constructor() {
          super(...arguments), (this.status = 429);
        }
      }
      class Ci extends mi {}
      class Ni {
        constructor(e, t) {
          (this.iterator = e), (this.controller = t);
        }
        static fromSSEResponse(e, t) {
          let n = !1;
          const r = new Ei();
          return new Ni(async function* () {
            if (n)
              throw new Error(
                "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
              );
            n = !0;
            let o = !1;
            try {
              for await (const n of (async function* () {
                if (!e.body)
                  throw (
                    (t.abort(),
                    new gi("Attempted to iterate over a response with no body"))
                  );
                const n = new Pi(),
                  o = ji(e.body);
                for await (const e of o)
                  for (const t of n.decode(e)) {
                    const e = r.decode(t);
                    e && (yield e);
                  }
                for (const e of n.flush()) {
                  const t = r.decode(e);
                  t && (yield t);
                }
              })())
                if (!o)
                  if (n.data.startsWith("[DONE]")) o = !0;
                  else if (null === n.event) {
                    let e;
                    try {
                      e = JSON.parse(n.data);
                    } catch (a) {
                      throw (
                        (console.error(
                          "Could not parse message into JSON:",
                          n.data,
                        ),
                        console.error("From chunk:", n.raw),
                        a)
                      );
                    }
                    if (e && e.error)
                      throw new mi(void 0, e.error, void 0, void 0);
                    yield e;
                  }
              o = !0;
            } catch (a) {
              if (a instanceof Error && "AbortError" === a.name) return;
              throw a;
            } finally {
              o || t.abort();
            }
          }, t);
        }
        static fromReadableStream(e, t) {
          let n = !1;
          return new Ni(async function* () {
            if (n)
              throw new Error(
                "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
              );
            n = !0;
            let r = !1;
            try {
              for await (const t of (async function* () {
                const t = new Pi(),
                  n = ji(e);
                for await (const e of n) for (const n of t.decode(e)) yield n;
                for (const e of t.flush()) yield e;
              })())
                r || (t && (yield JSON.parse(t)));
              r = !0;
            } catch (o) {
              if (o instanceof Error && "AbortError" === o.name) return;
              throw o;
            } finally {
              r || t.abort();
            }
          }, t);
        }
        [Symbol.asyncIterator]() {
          return this.iterator();
        }
        tee() {
          const e = [],
            t = [],
            n = this.iterator(),
            r = (r) => ({
              next: () => {
                if (0 === r.length) {
                  const r = n.next();
                  e.push(r), t.push(r);
                }
                return r.shift();
              },
            });
          return [
            new Ni(() => r(e), this.controller),
            new Ni(() => r(t), this.controller),
          ];
        }
        toReadableStream() {
          const e = this;
          let t;
          const n = new TextEncoder();
          return new oi({
            async start() {
              t = e[Symbol.asyncIterator]();
            },
            async pull(e) {
              try {
                const { value: r, done: o } = await t.next();
                if (o) return e.close();
                const a = n.encode(JSON.stringify(r) + "\n");
                e.enqueue(a);
              } catch (r) {
                e.error(r);
              }
            },
            async cancel() {
              var e, n;
              await (null === (e = (n = t).return) || void 0 === e
                ? void 0
                : e.call(n));
            },
          });
        }
      }
      class Ei {
        constructor() {
          (this.event = null), (this.data = []), (this.chunks = []);
        }
        decode(e) {
          if ((e.endsWith("\r") && (e = e.substring(0, e.length - 1)), !e)) {
            if (!this.event && !this.data.length) return null;
            const e = {
              event: this.event,
              data: this.data.join("\n"),
              raw: this.chunks,
            };
            return (this.event = null), (this.data = []), (this.chunks = []), e;
          }
          if ((this.chunks.push(e), e.startsWith(":"))) return null;
          let [t, n, r] = (function (e, t) {
            const n = e.indexOf(t);
            if (-1 !== n)
              return [e.substring(0, n), t, e.substring(n + t.length)];
            return [e, "", ""];
          })(e, ":");
          return (
            r.startsWith(" ") && (r = r.substring(1)),
            "event" === t
              ? (this.event = r)
              : "data" === t && this.data.push(r),
            null
          );
        }
      }
      class Pi {
        constructor() {
          (this.buffer = []), (this.trailingCR = !1);
        }
        decode(e) {
          let t = this.decodeText(e);
          if (
            (this.trailingCR && ((t = "\r" + t), (this.trailingCR = !1)),
            t.endsWith("\r") && ((this.trailingCR = !0), (t = t.slice(0, -1))),
            !t)
          )
            return [];
          const n = Pi.NEWLINE_CHARS.has(t[t.length - 1] || "");
          let r = t.split(Pi.NEWLINE_REGEXP);
          return 1 !== r.length || n
            ? (this.buffer.length > 0 &&
                ((r = [this.buffer.join("") + r[0], ...r.slice(1)]),
                (this.buffer = [])),
              n || (this.buffer = [r.pop() || ""]),
              r)
            : (this.buffer.push(r[0]), []);
        }
        decodeText(e) {
          if (null == e) return "";
          if ("string" === typeof e) return e;
          if ("undefined" !== typeof Buffer) {
            if (e instanceof Buffer) return e.toString();
            if (e instanceof Uint8Array) return Buffer.from(e).toString();
            throw new gi(
              "Unexpected: received non-Uint8Array (".concat(
                e.constructor.name,
                ') stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.',
              ),
            );
          }
          if ("undefined" !== typeof TextDecoder) {
            var t;
            if (e instanceof Uint8Array || e instanceof ArrayBuffer)
              return (
                (null !== (t = this.textDecoder) && void 0 !== t) ||
                  (this.textDecoder = new TextDecoder("utf8")),
                this.textDecoder.decode(e)
              );
            throw new gi(
              "Unexpected: received non-Uint8Array/ArrayBuffer (".concat(
                e.constructor.name,
                ") in a web platform. Please report this error.",
              ),
            );
          }
          throw new gi(
            "Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.",
          );
        }
        flush() {
          if (!this.buffer.length && !this.trailingCR) return [];
          const e = [this.buffer.join("")];
          return (this.buffer = []), (this.trailingCR = !1), e;
        }
      }
      function ji(e) {
        if (e[Symbol.asyncIterator]) return e;
        const t = e.getReader();
        return {
          async next() {
            try {
              const e = await t.read();
              return null !== e && void 0 !== e && e.done && t.releaseLock(), e;
            } catch (e) {
              throw (t.releaseLock(), e);
            }
          },
          async return() {
            const e = t.cancel();
            return t.releaseLock(), await e, { done: !0, value: void 0 };
          },
          [Symbol.asyncIterator]() {
            return this;
          },
        };
      }
      (Pi.NEWLINE_CHARS = new Set([
        "\n",
        "\r",
        "\v",
        "\f",
        "\x1c",
        "\x1d",
        "\x1e",
        "\x85",
        "\u2028",
        "\u2029",
      ])),
        (Pi.NEWLINE_REGEXP =
          /\r\n|[\n\r\x0b\x0c\x1c\x1d\x1e\x85\u2028\u2029]/g);
      const Ti = (e) =>
          null != e &&
          "object" === typeof e &&
          "string" === typeof e.url &&
          "function" === typeof e.blob,
        Ri = (e) =>
          null != e &&
          "object" === typeof e &&
          "number" === typeof e.size &&
          "string" === typeof e.type &&
          "function" === typeof e.text &&
          "function" === typeof e.slice &&
          "function" === typeof e.arrayBuffer,
        Fi = (e) =>
          ((e) =>
            null != e &&
            "object" === typeof e &&
            "string" === typeof e.name &&
            "number" === typeof e.lastModified &&
            Ri(e))(e) ||
          Ti(e) ||
          si(e);
      async function Di(e, t) {
        var n;
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (((e = await e), Ti(e))) {
          var o;
          const n = await e.blob();
          return (
            t ||
              (t =
                null !== (o = new URL(e.url).pathname.split(/[\\/]/).pop()) &&
                void 0 !== o
                  ? o
                  : "unknown_file"),
            new ri([n], t, r)
          );
        }
        const a = await (async function (e) {
          let t = [];
          if (
            "string" === typeof e ||
            ArrayBuffer.isView(e) ||
            e instanceof ArrayBuffer
          )
            t.push(e);
          else if (Ri(e)) t.push(await e.arrayBuffer());
          else {
            var n;
            if (!Oi(e))
              throw new Error(
                "Unexpected data type: "
                  .concat(typeof e, "; constructor: ")
                  .concat(
                    null === e ||
                      void 0 === e ||
                      null === (n = e.constructor) ||
                      void 0 === n
                      ? void 0
                      : n.name,
                    "; props: ",
                  )
                  .concat(
                    (function (e) {
                      const t = Object.getOwnPropertyNames(e);
                      return "[".concat(
                        t.map((e) => '"'.concat(e, '"')).join(", "),
                        "]",
                      );
                    })(e),
                  ),
              );
            for await (const n of e) t.push(n);
          }
          return t;
        })(e);
        if (
          (t ||
            (t =
              null !==
                (n = (function (e) {
                  var t;
                  return (
                    Ii(e.name) ||
                    Ii(e.filename) ||
                    (null === (t = Ii(e.path)) || void 0 === t
                      ? void 0
                      : t.split(/[\\/]/).pop())
                  );
                })(e)) && void 0 !== n
                ? n
                : "unknown_file"),
          !r.type)
        ) {
          var i;
          const e = null === (i = a[0]) || void 0 === i ? void 0 : i.type;
          "string" === typeof e && (r = { ...r, type: e });
        }
        return new ri(a, t, r);
      }
      const Ii = (e) =>
          "string" === typeof e
            ? e
            : "undefined" !== typeof Buffer && e instanceof Buffer
              ? String(e)
              : void 0,
        Oi = (e) =>
          null != e &&
          "object" === typeof e &&
          "function" === typeof e[Symbol.asyncIterator],
        qi = (e) =>
          e &&
          "object" === typeof e &&
          e.body &&
          "MultipartBody" === e[Symbol.toStringTag],
        Li = async (e) => {
          const t = await Ai(e.body);
          return ai(t, e);
        },
        Ai = async (e) => {
          const t = new ni();
          return (
            await Promise.all(
              Object.entries(e || {}).map((e) => {
                let [n, r] = e;
                return Mi(t, n, r);
              }),
            ),
            t
          );
        },
        Mi = async (e, t, n) => {
          if (void 0 !== n) {
            if (null == n)
              throw new TypeError(
                'Received null for "'.concat(
                  t,
                  "\"; to pass null in FormData, you must use the string 'null'",
                ),
              );
            if (
              "string" === typeof n ||
              "number" === typeof n ||
              "boolean" === typeof n
            )
              e.append(t, String(n));
            else if (Fi(n)) {
              const r = await Di(n);
              e.append(t, r);
            } else if (Array.isArray(n))
              await Promise.all(n.map((n) => Mi(e, t + "[]", n)));
            else {
              if ("object" !== typeof n)
                throw new TypeError(
                  "Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ".concat(
                    n,
                    " instead",
                  ),
                );
              await Promise.all(
                Object.entries(n).map((n) => {
                  let [r, o] = n;
                  return Mi(e, "".concat(t, "[").concat(r, "]"), o);
                }),
              );
            }
          }
        };
      var Hi,
        Wi = function (e, t, n, r, o) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !o)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" === typeof t ? e !== t || !o : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return "a" === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
        },
        Ui = function (e, t, n, r) {
          if ("a" === n && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" === typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        };
      async function Vi(e) {
        const { response: t } = e;
        if (e.options.stream)
          return (
            pl("response", t.status, t.url, t.headers, t.body),
            e.options.__streamClass
              ? e.options.__streamClass.fromSSEResponse(t, e.controller)
              : Ni.fromSSEResponse(t, e.controller)
          );
        if (204 === t.status) return null;
        if (e.options.__binaryResponse) return t;
        const n = t.headers.get("content-type");
        if (
          (null === n || void 0 === n
            ? void 0
            : n.includes("application/json")) ||
          (null === n || void 0 === n
            ? void 0
            : n.includes("application/vnd.api+json"))
        ) {
          const e = await t.json();
          return pl("response", t.status, t.url, t.headers, e), e;
        }
        const r = await t.text();
        return pl("response", t.status, t.url, t.headers, r), r;
      }
      class $i extends Promise {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vi;
          super((e) => {
            e(null);
          }),
            (this.responsePromise = e),
            (this.parseResponse = t);
        }
        _thenUnwrap(e) {
          return new $i(this.responsePromise, async (t) =>
            e(await this.parseResponse(t)),
          );
        }
        asResponse() {
          return this.responsePromise.then((e) => e.response);
        }
        async withResponse() {
          const [e, t] = await Promise.all([this.parse(), this.asResponse()]);
          return { data: e, response: t };
        }
        parse() {
          return (
            this.parsedPromise ||
              (this.parsedPromise = this.responsePromise.then(
                this.parseResponse,
              )),
            this.parsedPromise
          );
        }
        then(e, t) {
          return this.parse().then(e, t);
        }
        catch(e) {
          return this.parse().catch(e);
        }
        finally(e) {
          return this.parse().finally(e);
        }
      }
      class Ki {
        constructor(e) {
          let {
            baseURL: t,
            maxRetries: n = 2,
            timeout: r = 6e5,
            httpAgent: o,
            fetch: a,
          } = e;
          (this.baseURL = t),
            (this.maxRetries = sl("maxRetries", n)),
            (this.timeout = sl("timeout", r)),
            (this.httpAgent = o),
            (this.fetch = null !== a && void 0 !== a ? a : ti);
        }
        authHeaders(e) {
          return {};
        }
        defaultHeaders(e) {
          return {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": this.getUserAgent(),
            ...rl(),
            ...this.authHeaders(e),
          };
        }
        validateHeaders(e, t) {}
        defaultIdempotencyKey() {
          return "stainless-node-retry-".concat(gl());
        }
        get(e, t) {
          return this.methodRequest("get", e, t);
        }
        post(e, t) {
          return this.methodRequest("post", e, t);
        }
        patch(e, t) {
          return this.methodRequest("patch", e, t);
        }
        put(e, t) {
          return this.methodRequest("put", e, t);
        }
        delete(e, t) {
          return this.methodRequest("delete", e, t);
        }
        methodRequest(e, t, n) {
          return this.request(
            Promise.resolve(n).then((n) => ({ method: e, path: t, ...n })),
          );
        }
        getAPIList(e, t, n) {
          return this.requestAPIList(t, { method: "get", path: e, ...n });
        }
        calculateContentLength(e) {
          if ("string" === typeof e) {
            if ("undefined" !== typeof Buffer)
              return Buffer.byteLength(e, "utf8").toString();
            if ("undefined" !== typeof TextEncoder) {
              return new TextEncoder().encode(e).length.toString();
            }
          }
          return null;
        }
        buildRequest(e) {
          var t, n, r, o, a, i;
          const { method: l, path: s, query: c, headers: u = {} } = e,
            d = qi(e.body)
              ? e.body.body
              : e.body
                ? JSON.stringify(e.body, null, 2)
                : null,
            f = this.calculateContentLength(d),
            h = this.buildURL(s, c);
          "timeout" in e && sl("timeout", e.timeout);
          const p = null !== (t = e.timeout) && void 0 !== t ? t : this.timeout,
            g =
              null !==
                (n =
                  null !== (r = e.httpAgent) && void 0 !== r
                    ? r
                    : this.httpAgent) && void 0 !== n
                ? n
                : ii(h),
            m = p + 1e3;
          "number" ===
            typeof (null === g ||
            void 0 === g ||
            null === (o = g.options) ||
            void 0 === o
              ? void 0
              : o.timeout) &&
            m > (null !== (a = g.options.timeout) && void 0 !== a ? a : 0) &&
            (g.options.timeout = m),
            this.idempotencyHeader &&
              "get" !== l &&
              (e.idempotencyKey ||
                (e.idempotencyKey = this.defaultIdempotencyKey()),
              (u[this.idempotencyHeader] = e.idempotencyKey));
          return {
            req: {
              method: l,
              ...(d && { body: d }),
              headers: this.buildHeaders({
                options: e,
                headers: u,
                contentLength: f,
              }),
              ...(g && { agent: g }),
              signal: null !== (i = e.signal) && void 0 !== i ? i : null,
            },
            url: h,
            timeout: p,
          };
        }
        buildHeaders(e) {
          let { options: t, headers: n, contentLength: r } = e;
          const o = {};
          r && (o["content-length"] = r);
          return (
            hl(o, this.defaultHeaders(t)),
            hl(o, n),
            qi(t.body) && "node" !== ei && delete o["content-type"],
            this.validateHeaders(o, n),
            o
          );
        }
        async prepareOptions(e) {}
        async prepareRequest(e, t) {
          let { url: n, options: r } = t;
        }
        parseHeaders(e) {
          return e
            ? Symbol.iterator in e
              ? Object.fromEntries(Array.from(e).map((e) => [...e]))
              : { ...e }
            : {};
        }
        makeStatusError(e, t, n, r) {
          return mi.generate(e, t, n, r);
        }
        request(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return new $i(this.makeRequest(e, t));
        }
        async makeRequest(e, t) {
          var n;
          const r = await e;
          var o;
          null == t &&
            (t =
              null !== (o = r.maxRetries) && void 0 !== o
                ? o
                : this.maxRetries);
          await this.prepareOptions(r);
          const { req: a, url: i, timeout: l } = this.buildRequest(r);
          if (
            (await this.prepareRequest(a, { url: i, options: r }),
            pl("request", i, r, a.headers),
            null !== (n = r.signal) && void 0 !== n && n.aborted)
          )
            throw new vi();
          const s = new AbortController(),
            c = await this.fetchWithTimeout(i, a, l, s).catch(cl);
          if (c instanceof Error) {
            var u;
            if (null !== (u = r.signal) && void 0 !== u && u.aborted)
              throw new vi();
            if (t) return this.retryRequest(r, t);
            if ("AbortError" === c.name) throw new yi();
            throw new bi({ cause: c });
          }
          const d = Qi(c.headers);
          if (!c.ok) {
            if (t && this.shouldRetry(c)) {
              const e = "retrying, ".concat(t, " attempts remaining");
              return (
                pl("response (error; ".concat(e, ")"), c.status, i, d),
                this.retryRequest(r, t, d)
              );
            }
            const e = await c.text().catch((e) => cl(e).message),
              n = ol(e),
              o = n ? void 0 : e;
            pl(
              "response (error; ".concat(
                t ? "(error; no more retries left)" : "(error; not retryable)",
                ")",
              ),
              c.status,
              i,
              d,
              o,
            );
            throw this.makeStatusError(c.status, n, o, d);
          }
          return { response: c, options: r, controller: s };
        }
        requestAPIList(e, t) {
          const n = this.makeRequest(t, null);
          return new Gi(this, n, e);
        }
        buildURL(e, t) {
          const n = il(e)
              ? new URL(e)
              : new URL(
                  this.baseURL +
                    (this.baseURL.endsWith("/") && e.startsWith("/")
                      ? e.slice(1)
                      : e),
                ),
            r = this.defaultQuery();
          return (
            dl(r) || (t = { ...r, ...t }),
            "object" === typeof t &&
              t &&
              !Array.isArray(t) &&
              (n.search = this.stringifyQuery(t)),
            n.toString()
          );
        }
        stringifyQuery(e) {
          return Object.entries(e)
            .filter((e) => {
              let [t, n] = e;
              return "undefined" !== typeof n;
            })
            .map((e) => {
              let [t, n] = e;
              if (
                "string" === typeof n ||
                "number" === typeof n ||
                "boolean" === typeof n
              )
                return ""
                  .concat(encodeURIComponent(t), "=")
                  .concat(encodeURIComponent(n));
              if (null === n) return "".concat(encodeURIComponent(t), "=");
              throw new gi(
                "Cannot stringify type ".concat(
                  typeof n,
                  "; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.",
                ),
              );
            })
            .join("&");
        }
        async fetchWithTimeout(e, t, n, r) {
          const { signal: o, ...a } = t || {};
          o && o.addEventListener("abort", () => r.abort());
          const i = setTimeout(() => r.abort(), n);
          return this.getRequestClient()
            .fetch.call(void 0, e, { signal: r.signal, ...a })
            .finally(() => {
              clearTimeout(i);
            });
        }
        getRequestClient() {
          return { fetch: this.fetch };
        }
        shouldRetry(e) {
          const t = e.headers.get("x-should-retry");
          return (
            "true" === t ||
            ("false" !== t &&
              (408 === e.status ||
                409 === e.status ||
                429 === e.status ||
                e.status >= 500))
          );
        }
        async retryRequest(e, t, n) {
          let r;
          const o = null === n || void 0 === n ? void 0 : n["retry-after-ms"];
          if (o) {
            const e = parseFloat(o);
            Number.isNaN(e) || (r = e);
          }
          const a = null === n || void 0 === n ? void 0 : n["retry-after"];
          if (a && !r) {
            const e = parseFloat(a);
            r = Number.isNaN(e) ? Date.parse(a) - Date.now() : 1e3 * e;
          }
          if (!(r && 0 <= r && r < 6e4)) {
            var i;
            const n =
              null !== (i = e.maxRetries) && void 0 !== i ? i : this.maxRetries;
            r = this.calculateDefaultRetryTimeoutMillis(t, n);
          }
          return await ll(r), this.makeRequest(e, t - 1);
        }
        calculateDefaultRetryTimeoutMillis(e, t) {
          const n = t - e;
          return (
            Math.min(0.5 * Math.pow(2, n), 8) * (1 - 0.25 * Math.random()) * 1e3
          );
        }
        getUserAgent() {
          return "".concat(this.constructor.name, "/JS ").concat(Za);
        }
      }
      class Xi {
        constructor(e, t, n, r) {
          Hi.set(this, void 0),
            Wi(this, Hi, e, "f"),
            (this.options = r),
            (this.response = t),
            (this.body = n);
        }
        hasNextPage() {
          return (
            !!this.getPaginatedItems().length && null != this.nextPageInfo()
          );
        }
        async getNextPage() {
          const e = this.nextPageInfo();
          if (!e)
            throw new gi(
              "No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.",
            );
          const t = { ...this.options };
          if ("params" in e && "object" === typeof t.query)
            t.query = { ...t.query, ...e.params };
          else if ("url" in e) {
            const n = [
              ...Object.entries(t.query || {}),
              ...e.url.searchParams.entries(),
            ];
            for (const [t, r] of n) e.url.searchParams.set(t, r);
            (t.query = void 0), (t.path = e.url.toString());
          }
          return await Ui(this, Hi, "f").requestAPIList(this.constructor, t);
        }
        async *iterPages() {
          let e = this;
          for (yield e; e.hasNextPage(); ) (e = await e.getNextPage()), yield e;
        }
        async *[((Hi = new WeakMap()), Symbol.asyncIterator)]() {
          for await (const e of this.iterPages())
            for (const t of e.getPaginatedItems()) yield t;
        }
      }
      class Gi extends $i {
        constructor(e, t, n) {
          super(t, async (t) => new n(e, t.response, await Vi(t), t.options));
        }
        async *[Symbol.asyncIterator]() {
          const e = await this;
          for await (const t of e) yield t;
        }
      }
      const Qi = (e) =>
          new Proxy(Object.fromEntries(e.entries()), {
            get(e, t) {
              const n = t.toString();
              return e[n.toLowerCase()] || e[n];
            },
          }),
        Ji = {
          method: !0,
          path: !0,
          query: !0,
          body: !0,
          headers: !0,
          maxRetries: !0,
          stream: !0,
          timeout: !0,
          httpAgent: !0,
          signal: !0,
          idempotencyKey: !0,
          __binaryResponse: !0,
          __streamClass: !0,
        },
        Yi = (e) =>
          "object" === typeof e &&
          null !== e &&
          !dl(e) &&
          Object.keys(e).every((e) => fl(Ji, e)),
        Zi = () => {
          if ("undefined" !== typeof Deno && null != Deno.build)
            return {
              "X-Stainless-Lang": "js",
              "X-Stainless-Package-Version": Za,
              "X-Stainless-OS": tl(Deno.build.os),
              "X-Stainless-Arch": el(Deno.build.arch),
              "X-Stainless-Runtime": "deno",
              "X-Stainless-Runtime-Version": Deno.version,
            };
          if ("undefined" !== typeof EdgeRuntime)
            return {
              "X-Stainless-Lang": "js",
              "X-Stainless-Package-Version": Za,
              "X-Stainless-OS": "Unknown",
              "X-Stainless-Arch": "other:".concat(EdgeRuntime),
              "X-Stainless-Runtime": "edge",
              "X-Stainless-Runtime-Version": process.version,
            };
          if (
            "[object process]" ===
            Object.prototype.toString.call(
              "undefined" !== typeof process ? process : 0,
            )
          )
            return {
              "X-Stainless-Lang": "js",
              "X-Stainless-Package-Version": Za,
              "X-Stainless-OS": tl(process.platform),
              "X-Stainless-Arch": el(process.arch),
              "X-Stainless-Runtime": "node",
              "X-Stainless-Runtime-Version": process.version,
            };
          const e = (function () {
            if ("undefined" === typeof navigator || !navigator) return null;
            const e = [
              { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
              { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
              {
                key: "ie",
                pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/,
              },
              {
                key: "chrome",
                pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/,
              },
              {
                key: "firefox",
                pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/,
              },
              {
                key: "safari",
                pattern:
                  /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/,
              },
            ];
            for (const { key: t, pattern: n } of e) {
              const e = n.exec(navigator.userAgent);
              if (e) {
                const n = e[1] || 0,
                  r = e[2] || 0,
                  o = e[3] || 0;
                return {
                  browser: t,
                  version: "".concat(n, ".").concat(r, ".").concat(o),
                };
              }
            }
            return null;
          })();
          return e
            ? {
                "X-Stainless-Lang": "js",
                "X-Stainless-Package-Version": Za,
                "X-Stainless-OS": "Unknown",
                "X-Stainless-Arch": "unknown",
                "X-Stainless-Runtime": "browser:".concat(e.browser),
                "X-Stainless-Runtime-Version": e.version,
              }
            : {
                "X-Stainless-Lang": "js",
                "X-Stainless-Package-Version": Za,
                "X-Stainless-OS": "Unknown",
                "X-Stainless-Arch": "unknown",
                "X-Stainless-Runtime": "unknown",
                "X-Stainless-Runtime-Version": "unknown",
              };
        };
      const el = (e) =>
          "x32" === e
            ? "x32"
            : "x86_64" === e || "x64" === e
              ? "x64"
              : "arm" === e
                ? "arm"
                : "aarch64" === e || "arm64" === e
                  ? "arm64"
                  : e
                    ? "other:".concat(e)
                    : "unknown",
        tl = (e) =>
          (e = e.toLowerCase()).includes("ios")
            ? "iOS"
            : "android" === e
              ? "Android"
              : "darwin" === e
                ? "MacOS"
                : "win32" === e
                  ? "Windows"
                  : "freebsd" === e
                    ? "FreeBSD"
                    : "openbsd" === e
                      ? "OpenBSD"
                      : "linux" === e
                        ? "Linux"
                        : e
                          ? "Other:".concat(e)
                          : "Unknown";
      let nl;
      const rl = () => {
          var e;
          return null !== (e = nl) && void 0 !== e ? e : (nl = Zi());
        },
        ol = (e) => {
          try {
            return JSON.parse(e);
          } catch (t) {
            return;
          }
        },
        al = new RegExp("^(?:[a-z]+:)?//", "i"),
        il = (e) => al.test(e),
        ll = (e) => new Promise((t) => setTimeout(t, e)),
        sl = (e, t) => {
          if ("number" !== typeof t || !Number.isInteger(t))
            throw new gi("".concat(e, " must be an integer"));
          if (t < 0) throw new gi("".concat(e, " must be a positive integer"));
          return t;
        },
        cl = (e) => (e instanceof Error ? e : new Error(e)),
        ul = (e) => {
          var t, n, r, o;
          return "undefined" !== typeof process
            ? null !==
                (t =
                  null ===
                    (n = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "/User-Sandbox-Simulator",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                    }) ||
                  void 0 === n ||
                  null === (n = n[e]) ||
                  void 0 === n
                    ? void 0
                    : n.trim()) && void 0 !== t
              ? t
              : void 0
            : "undefined" !== typeof Deno
              ? null === (r = Deno.env) ||
                void 0 === r ||
                null === (o = r.get) ||
                void 0 === o ||
                null === (o = o.call(r, e)) ||
                void 0 === o
                ? void 0
                : o.trim()
              : void 0;
        };
      function dl(e) {
        if (!e) return !0;
        for (const t in e) return !1;
        return !0;
      }
      function fl(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function hl(e, t) {
        for (const n in t) {
          if (!fl(t, n)) continue;
          const r = n.toLowerCase();
          if (!r) continue;
          const o = t[n];
          null === o ? delete e[r] : void 0 !== o && (e[r] = o);
        }
      }
      function pl(e) {
        if (
          "undefined" !== typeof process &&
          "true" ===
            {
              NODE_ENV: "production",
              PUBLIC_URL: "/User-Sandbox-Simulator",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.DEBUG
        ) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          console.log("OpenAI:DEBUG:".concat(e), ...n);
        }
      }
      const gl = () =>
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
          const t = (16 * Math.random()) | 0;
          return ("x" === e ? t : (3 & t) | 8).toString(16);
        });
      class ml extends Xi {
        constructor(e, t, n, r) {
          super(e, t, n, r),
            (this.data = n.data || []),
            (this.object = n.object);
        }
        getPaginatedItems() {
          var e;
          return null !== (e = this.data) && void 0 !== e ? e : [];
        }
        nextPageParams() {
          return null;
        }
        nextPageInfo() {
          return null;
        }
      }
      class vl extends Xi {
        constructor(e, t, n, r) {
          super(e, t, n, r), (this.data = n.data || []);
        }
        getPaginatedItems() {
          var e;
          return null !== (e = this.data) && void 0 !== e ? e : [];
        }
        nextPageParams() {
          const e = this.nextPageInfo();
          if (!e) return null;
          if ("params" in e) return e.params;
          const t = Object.fromEntries(e.url.searchParams);
          return Object.keys(t).length ? t : null;
        }
        nextPageInfo() {
          var e;
          const t = this.getPaginatedItems();
          if (!t.length) return null;
          const n =
            null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.id;
          return n ? { params: { after: n } } : null;
        }
      }
      class bl {
        constructor(e) {
          this._client = e;
        }
      }
      class yl extends bl {
        create(e, t) {
          var n;
          return this._client.post("/completions", {
            body: e,
            ...t,
            stream: null !== (n = e.stream) && void 0 !== n && n,
          });
        }
      }
      yl || (yl = {});
      class wl extends bl {
        create(e, t) {
          var n;
          return this._client.post("/chat/completions", {
            body: e,
            ...t,
            stream: null !== (n = e.stream) && void 0 !== n && n,
          });
        }
      }
      wl || (wl = {});
      class kl extends bl {
        constructor() {
          super(...arguments), (this.completions = new wl(this._client));
        }
      }
      !(function (e) {
        e.Completions = wl;
      })(kl || (kl = {}));
      class xl extends bl {
        create(e, t) {
          return this._client.post("/embeddings", { body: e, ...t });
        }
      }
      xl || (xl = {});
      class Sl extends bl {
        create(e, t) {
          return this._client.post("/files", Li({ body: e, ...t }));
        }
        retrieve(e, t) {
          return this._client.get("/files/".concat(e), t);
        }
        list() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return Yi(e)
            ? this.list({}, e)
            : this._client.getAPIList("/files", _l, { query: e, ...t });
        }
        del(e, t) {
          return this._client.delete("/files/".concat(e), t);
        }
        content(e, t) {
          return this._client.get("/files/".concat(e, "/content"), {
            ...t,
            __binaryResponse: !0,
          });
        }
        retrieveContent(e, t) {
          return this._client.get("/files/".concat(e, "/content"), {
            ...t,
            headers: {
              Accept: "application/json",
              ...(null === t || void 0 === t ? void 0 : t.headers),
            },
          });
        }
        async waitForProcessing(e) {
          let { pollInterval: t = 5e3, maxWait: n = 18e5 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = new Set(["processed", "error", "deleted"]),
            o = Date.now();
          let a = await this.retrieve(e);
          for (; !a.status || !r.has(a.status); )
            if ((await ll(t), (a = await this.retrieve(e)), Date.now() - o > n))
              throw new yi({
                message: "Giving up on waiting for file "
                  .concat(e, " to finish processing after ")
                  .concat(n, " milliseconds."),
              });
          return a;
        }
      }
      class _l extends ml {}
      !(function (e) {
        e.FileObjectsPage = _l;
      })(Sl || (Sl = {}));
      class Bl extends bl {
        createVariation(e, t) {
          return this._client.post("/images/variations", Li({ body: e, ...t }));
        }
        edit(e, t) {
          return this._client.post("/images/edits", Li({ body: e, ...t }));
        }
        generate(e, t) {
          return this._client.post("/images/generations", { body: e, ...t });
        }
      }
      Bl || (Bl = {});
      class zl extends bl {
        create(e, t) {
          return this._client.post("/audio/speech", {
            body: e,
            ...t,
            __binaryResponse: !0,
          });
        }
      }
      zl || (zl = {});
      class Cl extends bl {
        create(e, t) {
          return this._client.post(
            "/audio/transcriptions",
            Li({ body: e, ...t }),
          );
        }
      }
      Cl || (Cl = {});
      class Nl extends bl {
        create(e, t) {
          return this._client.post(
            "/audio/translations",
            Li({ body: e, ...t }),
          );
        }
      }
      Nl || (Nl = {});
      class El extends bl {
        constructor() {
          super(...arguments),
            (this.transcriptions = new Cl(this._client)),
            (this.translations = new Nl(this._client)),
            (this.speech = new zl(this._client));
        }
      }
      !(function (e) {
        (e.Transcriptions = Cl), (e.Translations = Nl), (e.Speech = zl);
      })(El || (El = {}));
      class Pl extends bl {
        create(e, t) {
          return this._client.post("/moderations", { body: e, ...t });
        }
      }
      Pl || (Pl = {});
      class jl extends bl {
        retrieve(e, t) {
          return this._client.get("/models/".concat(e), t);
        }
        list(e) {
          return this._client.getAPIList("/models", Tl, e);
        }
        del(e, t) {
          return this._client.delete("/models/".concat(e), t);
        }
      }
      class Tl extends ml {}
      !(function (e) {
        e.ModelsPage = Tl;
      })(jl || (jl = {}));
      class Rl extends bl {
        create(e, t) {
          return this._client.post("/fine_tuning/jobs", { body: e, ...t });
        }
        retrieve(e, t) {
          return this._client.get("/fine_tuning/jobs/".concat(e), t);
        }
        list() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return Yi(e)
            ? this.list({}, e)
            : this._client.getAPIList("/fine_tuning/jobs", Fl, {
                query: e,
                ...t,
              });
        }
        cancel(e, t) {
          return this._client.post(
            "/fine_tuning/jobs/".concat(e, "/cancel"),
            t,
          );
        }
        listEvents(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          return Yi(t)
            ? this.listEvents(e, {}, t)
            : this._client.getAPIList(
                "/fine_tuning/jobs/".concat(e, "/events"),
                Dl,
                { query: t, ...n },
              );
        }
      }
      class Fl extends vl {}
      class Dl extends vl {}
      !(function (e) {
        (e.FineTuningJobsPage = Fl), (e.FineTuningJobEventsPage = Dl);
      })(Rl || (Rl = {}));
      class Il extends bl {
        constructor() {
          super(...arguments), (this.jobs = new Rl(this._client));
        }
      }
      !(function (e) {
        (e.Jobs = Rl),
          (e.FineTuningJobsPage = Fl),
          (e.FineTuningJobEventsPage = Dl);
      })(Il || (Il = {}));
      class Ol extends bl {
        create(e, t, n) {
          return this._client.post("/assistants/".concat(e, "/files"), {
            body: t,
            ...n,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === n || void 0 === n ? void 0 : n.headers),
            },
          });
        }
        retrieve(e, t, n) {
          return this._client.get(
            "/assistants/".concat(e, "/files/").concat(t),
            {
              ...n,
              headers: {
                "OpenAI-Beta": "assistants=v1",
                ...(null === n || void 0 === n ? void 0 : n.headers),
              },
            },
          );
        }
        list(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          return Yi(t)
            ? this.list(e, {}, t)
            : this._client.getAPIList("/assistants/".concat(e, "/files"), ql, {
                query: t,
                ...n,
                headers: {
                  "OpenAI-Beta": "assistants=v1",
                  ...(null === n || void 0 === n ? void 0 : n.headers),
                },
              });
        }
        del(e, t, n) {
          return this._client.delete(
            "/assistants/".concat(e, "/files/").concat(t),
            {
              ...n,
              headers: {
                "OpenAI-Beta": "assistants=v1",
                ...(null === n || void 0 === n ? void 0 : n.headers),
              },
            },
          );
        }
      }
      class ql extends vl {}
      !(function (e) {
        e.AssistantFilesPage = ql;
      })(Ol || (Ol = {}));
      class Ll extends bl {
        constructor() {
          super(...arguments), (this.files = new Ol(this._client));
        }
        create(e, t) {
          return this._client.post("/assistants", {
            body: e,
            ...t,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === t || void 0 === t ? void 0 : t.headers),
            },
          });
        }
        retrieve(e, t) {
          return this._client.get("/assistants/".concat(e), {
            ...t,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === t || void 0 === t ? void 0 : t.headers),
            },
          });
        }
        update(e, t, n) {
          return this._client.post("/assistants/".concat(e), {
            body: t,
            ...n,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === n || void 0 === n ? void 0 : n.headers),
            },
          });
        }
        list() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return Yi(e)
            ? this.list({}, e)
            : this._client.getAPIList("/assistants", Al, {
                query: e,
                ...t,
                headers: {
                  "OpenAI-Beta": "assistants=v1",
                  ...(null === t || void 0 === t ? void 0 : t.headers),
                },
              });
        }
        del(e, t) {
          return this._client.delete("/assistants/".concat(e), {
            ...t,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === t || void 0 === t ? void 0 : t.headers),
            },
          });
        }
      }
      class Al extends vl {}
      function Ml(e) {
        return "function" === typeof e.parse;
      }
      !(function (e) {
        (e.AssistantsPage = Al), (e.Files = Ol), (e.AssistantFilesPage = ql);
      })(Ll || (Ll = {}));
      const Hl = (e) =>
          "assistant" === (null === e || void 0 === e ? void 0 : e.role),
        Wl = (e) =>
          "function" === (null === e || void 0 === e ? void 0 : e.role),
        Ul = (e) => "tool" === (null === e || void 0 === e ? void 0 : e.role);
      var Vl,
        $l,
        Kl,
        Xl,
        Gl,
        Ql,
        Jl,
        Yl,
        Zl,
        es,
        ts,
        ns,
        rs,
        os,
        as,
        is,
        ls,
        ss,
        cs,
        us,
        ds = function (e, t, n, r, o) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !o)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" === typeof t ? e !== t || !o : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return "a" === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
        },
        fs = function (e, t, n, r) {
          if ("a" === n && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" === typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        };
      const hs = 10;
      class ps {
        constructor() {
          Vl.add(this),
            (this.controller = new AbortController()),
            $l.set(this, void 0),
            Kl.set(this, () => {}),
            Xl.set(this, () => {}),
            Gl.set(this, void 0),
            Ql.set(this, () => {}),
            Jl.set(this, () => {}),
            Yl.set(this, {}),
            (this._chatCompletions = []),
            (this.messages = []),
            Zl.set(this, !1),
            es.set(this, !1),
            ts.set(this, !1),
            ns.set(this, !1),
            ss.set(this, (e) => {
              if (
                (ds(this, es, !0, "f"),
                e instanceof Error && "AbortError" === e.name && (e = new vi()),
                e instanceof vi)
              )
                return ds(this, ts, !0, "f"), this._emit("abort", e);
              if (e instanceof gi) return this._emit("error", e);
              if (e instanceof Error) {
                const t = new gi(e.message);
                return (t.cause = e), this._emit("error", t);
              }
              return this._emit("error", new gi(String(e)));
            }),
            ds(
              this,
              $l,
              new Promise((e, t) => {
                ds(this, Kl, e, "f"), ds(this, Xl, t, "f");
              }),
              "f",
            ),
            ds(
              this,
              Gl,
              new Promise((e, t) => {
                ds(this, Ql, e, "f"), ds(this, Jl, t, "f");
              }),
              "f",
            ),
            fs(this, $l, "f").catch(() => {}),
            fs(this, Gl, "f").catch(() => {});
        }
        _run(e) {
          setTimeout(() => {
            e().then(
              () => {
                this._emitFinal(), this._emit("end");
              },
              fs(this, ss, "f"),
            );
          }, 0);
        }
        _addChatCompletion(e) {
          var t;
          this._chatCompletions.push(e), this._emit("chatCompletion", e);
          const n =
            null === (t = e.choices[0]) || void 0 === t ? void 0 : t.message;
          return n && this._addMessage(n), e;
        }
        _addMessage(e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (("content" in e || (e.content = null), this.messages.push(e), t))
            if ((this._emit("message", e), (Wl(e) || Ul(e)) && e.content))
              this._emit("functionCallResult", e.content);
            else if (Hl(e) && e.function_call)
              this._emit("functionCall", e.function_call);
            else if (Hl(e) && e.tool_calls)
              for (const n of e.tool_calls)
                "function" === n.type && this._emit("functionCall", n.function);
        }
        _connected() {
          this.ended || (fs(this, Kl, "f").call(this), this._emit("connect"));
        }
        get ended() {
          return fs(this, Zl, "f");
        }
        get errored() {
          return fs(this, es, "f");
        }
        get aborted() {
          return fs(this, ts, "f");
        }
        abort() {
          this.controller.abort();
        }
        on(e, t) {
          return (
            (fs(this, Yl, "f")[e] || (fs(this, Yl, "f")[e] = [])).push({
              listener: t,
            }),
            this
          );
        }
        off(e, t) {
          const n = fs(this, Yl, "f")[e];
          if (!n) return this;
          const r = n.findIndex((e) => e.listener === t);
          return r >= 0 && n.splice(r, 1), this;
        }
        once(e, t) {
          return (
            (fs(this, Yl, "f")[e] || (fs(this, Yl, "f")[e] = [])).push({
              listener: t,
              once: !0,
            }),
            this
          );
        }
        emitted(e) {
          return new Promise((t, n) => {
            ds(this, ns, !0, "f"),
              "error" !== e && this.once("error", n),
              this.once(e, t);
          });
        }
        async done() {
          ds(this, ns, !0, "f"), await fs(this, Gl, "f");
        }
        async finalChatCompletion() {
          await this.done();
          const e = this._chatCompletions[this._chatCompletions.length - 1];
          if (!e)
            throw new gi("stream ended without producing a ChatCompletion");
          return e;
        }
        async finalContent() {
          return await this.done(), fs(this, Vl, "m", rs).call(this);
        }
        async finalMessage() {
          return await this.done(), fs(this, Vl, "m", os).call(this);
        }
        async finalFunctionCall() {
          return await this.done(), fs(this, Vl, "m", as).call(this);
        }
        async finalFunctionCallResult() {
          return await this.done(), fs(this, Vl, "m", is).call(this);
        }
        async totalUsage() {
          return await this.done(), fs(this, Vl, "m", ls).call(this);
        }
        allChatCompletions() {
          return [...this._chatCompletions];
        }
        _emit(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          if (fs(this, Zl, "f")) return;
          "end" === e && (ds(this, Zl, !0, "f"), fs(this, Ql, "f").call(this));
          const o = fs(this, Yl, "f")[e];
          if (
            (o &&
              ((fs(this, Yl, "f")[e] = o.filter((e) => !e.once)),
              o.forEach((e) => {
                let { listener: t } = e;
                return t(...n);
              })),
            "abort" === e)
          ) {
            const e = n[0];
            return (
              fs(this, ns, "f") ||
                (null !== o && void 0 !== o && o.length) ||
                Promise.reject(e),
              fs(this, Xl, "f").call(this, e),
              fs(this, Jl, "f").call(this, e),
              void this._emit("end")
            );
          }
          if ("error" === e) {
            const e = n[0];
            fs(this, ns, "f") ||
              (null !== o && void 0 !== o && o.length) ||
              Promise.reject(e),
              fs(this, Xl, "f").call(this, e),
              fs(this, Jl, "f").call(this, e),
              this._emit("end");
          }
        }
        _emitFinal() {
          const e = this._chatCompletions[this._chatCompletions.length - 1];
          e && this._emit("finalChatCompletion", e);
          const t = fs(this, Vl, "m", os).call(this);
          t && this._emit("finalMessage", t);
          const n = fs(this, Vl, "m", rs).call(this);
          n && this._emit("finalContent", n);
          const r = fs(this, Vl, "m", as).call(this);
          r && this._emit("finalFunctionCall", r);
          const o = fs(this, Vl, "m", is).call(this);
          null != o && this._emit("finalFunctionCallResult", o),
            this._chatCompletions.some((e) => e.usage) &&
              this._emit("totalUsage", fs(this, Vl, "m", ls).call(this));
        }
        async _createChatCompletion(e, t, n) {
          const r = null === n || void 0 === n ? void 0 : n.signal;
          r &&
            (r.aborted && this.controller.abort(),
            r.addEventListener("abort", () => this.controller.abort())),
            fs(this, Vl, "m", cs).call(this, t);
          const o = await e.create(
            { ...t, stream: !1 },
            { ...n, signal: this.controller.signal },
          );
          return this._connected(), this._addChatCompletion(o);
        }
        async _runChatCompletion(e, t, n) {
          for (const r of t.messages) this._addMessage(r, !1);
          return await this._createChatCompletion(e, t, n);
        }
        async _runFunctions(e, t, n) {
          const r = "function",
            { function_call: o = "auto", stream: a, ...i } = t,
            l =
              "string" !== typeof o &&
              (null === o || void 0 === o ? void 0 : o.name),
            { maxChatCompletions: s = hs } = n || {},
            c = {};
          for (const h of t.functions) c[h.name || h.function.name] = h;
          const u = t.functions.map((e) => ({
            name: e.name || e.function.name,
            parameters: e.parameters,
            description: e.description,
          }));
          for (const h of t.messages) this._addMessage(h, !1);
          for (let h = 0; h < s; ++h) {
            var d;
            const t =
              null ===
                (d = (
                  await this._createChatCompletion(
                    e,
                    {
                      ...i,
                      function_call: o,
                      functions: u,
                      messages: [...this.messages],
                    },
                    n,
                  )
                ).choices[0]) || void 0 === d
                ? void 0
                : d.message;
            if (!t) throw new gi("missing message in ChatCompletion response");
            if (!t.function_call) return;
            const { name: a, arguments: s } = t.function_call,
              h = c[a];
            if (!h) {
              const e = "Invalid function_call: "
                .concat(JSON.stringify(a), ". Available options are: ")
                .concat(
                  u.map((e) => JSON.stringify(e.name)).join(", "),
                  ". Please try again",
                );
              this._addMessage({ role: r, name: a, content: e });
              continue;
            }
            if (l && l !== a) {
              const e = "Invalid function_call: "
                .concat(JSON.stringify(a), ". ")
                .concat(JSON.stringify(l), " requested. Please try again");
              this._addMessage({ role: r, name: a, content: e });
              continue;
            }
            let p;
            try {
              p = Ml(h) ? await h.parse(s) : s;
            } catch (f) {
              this._addMessage({
                role: r,
                name: a,
                content: f instanceof Error ? f.message : String(f),
              });
              continue;
            }
            const g = await h.function(p, this),
              m = fs(this, Vl, "m", us).call(this, g);
            if ((this._addMessage({ role: r, name: a, content: m }), l)) return;
          }
        }
        async _runTools(e, t, n) {
          var r;
          const o = "tool",
            { tool_choice: a = "auto", stream: i, ...l } = t,
            s =
              "string" !== typeof a &&
              (null === a ||
              void 0 === a ||
              null === (r = a.function) ||
              void 0 === r
                ? void 0
                : r.name),
            { maxChatCompletions: c = hs } = n || {},
            u = {};
          for (const p of t.tools)
            "function" === p.type &&
              (u[p.function.name || p.function.function.name] = p.function);
          const d =
            "tools" in t
              ? t.tools.map((e) =>
                  "function" === e.type
                    ? {
                        type: "function",
                        function: {
                          name: e.function.name || e.function.function.name,
                          parameters: e.function.parameters,
                          description: e.function.description,
                        },
                      }
                    : e,
                )
              : void 0;
          for (const p of t.messages) this._addMessage(p, !1);
          for (let p = 0; p < c; ++p) {
            var f;
            const t =
              null ===
                (f = (
                  await this._createChatCompletion(
                    e,
                    {
                      ...l,
                      tool_choice: a,
                      tools: d,
                      messages: [...this.messages],
                    },
                    n,
                  )
                ).choices[0]) || void 0 === f
                ? void 0
                : f.message;
            if (!t) throw new gi("missing message in ChatCompletion response");
            if (!t.tool_calls) return;
            for (const e of t.tool_calls) {
              if ("function" !== e.type) continue;
              const t = e.id,
                { name: n, arguments: r } = e.function,
                a = u[n];
              if (!a) {
                const e = "Invalid tool_call: "
                  .concat(JSON.stringify(n), ". Available options are: ")
                  .concat(
                    d.map((e) => JSON.stringify(e.function.name)).join(", "),
                    ". Please try again",
                  );
                this._addMessage({ role: o, tool_call_id: t, content: e });
                continue;
              }
              if (s && s !== n) {
                const e = "Invalid tool_call: "
                  .concat(JSON.stringify(n), ". ")
                  .concat(JSON.stringify(s), " requested. Please try again");
                this._addMessage({ role: o, tool_call_id: t, content: e });
                continue;
              }
              let i;
              try {
                i = Ml(a) ? await a.parse(r) : r;
              } catch (h) {
                const e = h instanceof Error ? h.message : String(h);
                this._addMessage({ role: o, tool_call_id: t, content: e });
                continue;
              }
              const l = await a.function(i, this),
                c = fs(this, Vl, "m", us).call(this, l);
              if (
                (this._addMessage({ role: o, tool_call_id: t, content: c }), s)
              )
                return;
            }
          }
        }
      }
      ($l = new WeakMap()),
        (Kl = new WeakMap()),
        (Xl = new WeakMap()),
        (Gl = new WeakMap()),
        (Ql = new WeakMap()),
        (Jl = new WeakMap()),
        (Yl = new WeakMap()),
        (Zl = new WeakMap()),
        (es = new WeakMap()),
        (ts = new WeakMap()),
        (ns = new WeakMap()),
        (ss = new WeakMap()),
        (Vl = new WeakSet()),
        (rs = function () {
          var e;
          return null !== (e = fs(this, Vl, "m", os).call(this).content) &&
            void 0 !== e
            ? e
            : null;
        }),
        (os = function () {
          let e = this.messages.length;
          for (; e-- > 0; ) {
            const n = this.messages[e];
            var t;
            if (Hl(n))
              return {
                ...n,
                content: null !== (t = n.content) && void 0 !== t ? t : null,
              };
          }
          throw new gi(
            "stream ended without producing a ChatCompletionMessage with role=assistant",
          );
        }),
        (as = function () {
          for (let n = this.messages.length - 1; n >= 0; n--) {
            var e;
            const r = this.messages[n];
            if (Hl(r) && null !== r && void 0 !== r && r.function_call)
              return r.function_call;
            var t;
            if (
              Hl(r) &&
              null !== r &&
              void 0 !== r &&
              null !== (e = r.tool_calls) &&
              void 0 !== e &&
              e.length
            )
              return null === (t = r.tool_calls.at(-1)) || void 0 === t
                ? void 0
                : t.function;
          }
        }),
        (is = function () {
          for (let e = this.messages.length - 1; e >= 0; e--) {
            const t = this.messages[e];
            if (Wl(t) && null != t.content) return t.content;
            if (
              Ul(t) &&
              null != t.content &&
              this.messages.some((e) => {
                var n;
                return (
                  "assistant" === e.role &&
                  (null === (n = e.tool_calls) || void 0 === n
                    ? void 0
                    : n.some(
                        (e) => "function" === e.type && e.id === t.tool_call_id,
                      ))
                );
              })
            )
              return t.content;
          }
        }),
        (ls = function () {
          const e = { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 };
          for (const { usage: t } of this._chatCompletions)
            t &&
              ((e.completion_tokens += t.completion_tokens),
              (e.prompt_tokens += t.prompt_tokens),
              (e.total_tokens += t.total_tokens));
          return e;
        }),
        (cs = function (e) {
          if (null != e.n && e.n > 1)
            throw new gi(
              "ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.",
            );
        }),
        (us = function (e) {
          return "string" === typeof e
            ? e
            : void 0 === e
              ? "undefined"
              : JSON.stringify(e);
        });
      class gs extends ps {
        static runFunctions(e, t, n) {
          const r = new gs(),
            o = {
              ...n,
              headers: {
                ...(null === n || void 0 === n ? void 0 : n.headers),
                "X-Stainless-Helper-Method": "runFunctions",
              },
            };
          return r._run(() => r._runFunctions(e, t, o)), r;
        }
        static runTools(e, t, n) {
          const r = new gs(),
            o = {
              ...n,
              headers: {
                ...(null === n || void 0 === n ? void 0 : n.headers),
                "X-Stainless-Helper-Method": "runTools",
              },
            };
          return r._run(() => r._runTools(e, t, o)), r;
        }
        _addMessage(e) {
          super._addMessage(e),
            Hl(e) && e.content && this._emit("content", e.content);
        }
      }
      var ms,
        vs,
        bs,
        ys,
        ws,
        ks,
        xs,
        Ss = function (e, t, n, r) {
          if ("a" === n && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" === typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        },
        _s = function (e, t, n, r, o) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !o)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" === typeof t ? e !== t || !o : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return "a" === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
        };
      class Bs extends ps {
        constructor() {
          super(...arguments), ms.add(this), vs.set(this, void 0);
        }
        get currentChatCompletionSnapshot() {
          return Ss(this, vs, "f");
        }
        static fromReadableStream(e) {
          const t = new Bs();
          return t._run(() => t._fromReadableStream(e)), t;
        }
        static createChatCompletion(e, t, n) {
          const r = new Bs();
          return (
            r._run(() =>
              r._runChatCompletion(
                e,
                { ...t, stream: !0 },
                {
                  ...n,
                  headers: {
                    ...(null === n || void 0 === n ? void 0 : n.headers),
                    "X-Stainless-Helper-Method": "stream",
                  },
                },
              ),
            ),
            r
          );
        }
        async _createChatCompletion(e, t, n) {
          var r;
          const o = null === n || void 0 === n ? void 0 : n.signal;
          o &&
            (o.aborted && this.controller.abort(),
            o.addEventListener("abort", () => this.controller.abort())),
            Ss(this, ms, "m", bs).call(this);
          const a = await e.create(
            { ...t, stream: !0 },
            { ...n, signal: this.controller.signal },
          );
          this._connected();
          for await (const i of a) Ss(this, ms, "m", ys).call(this, i);
          if (null !== (r = a.controller.signal) && void 0 !== r && r.aborted)
            throw new vi();
          return this._addChatCompletion(Ss(this, ms, "m", ws).call(this));
        }
        async _fromReadableStream(e, t) {
          var n;
          const r = null === t || void 0 === t ? void 0 : t.signal;
          r &&
            (r.aborted && this.controller.abort(),
            r.addEventListener("abort", () => this.controller.abort())),
            Ss(this, ms, "m", bs).call(this),
            this._connected();
          const o = Ni.fromReadableStream(e, this.controller);
          let a;
          for await (const i of o)
            a &&
              a !== i.id &&
              this._addChatCompletion(Ss(this, ms, "m", ws).call(this)),
              Ss(this, ms, "m", ys).call(this, i),
              (a = i.id);
          if (null !== (n = o.controller.signal) && void 0 !== n && n.aborted)
            throw new vi();
          return this._addChatCompletion(Ss(this, ms, "m", ws).call(this));
        }
        [((vs = new WeakMap()),
        (ms = new WeakSet()),
        (bs = function () {
          this.ended || _s(this, vs, void 0, "f");
        }),
        (ys = function (e) {
          var t, n;
          if (this.ended) return;
          const r = Ss(this, ms, "m", ks).call(this, e);
          this._emit("chunk", e, r);
          const o =
              null === (t = e.choices[0]) ||
              void 0 === t ||
              null === (t = t.delta) ||
              void 0 === t
                ? void 0
                : t.content,
            a =
              null === (n = r.choices[0]) || void 0 === n ? void 0 : n.message;
          null != o &&
            "assistant" === (null === a || void 0 === a ? void 0 : a.role) &&
            null !== a &&
            void 0 !== a &&
            a.content &&
            this._emit("content", o, a.content);
        }),
        (ws = function () {
          if (this.ended)
            throw new gi("stream has ended, this shouldn't happen");
          const e = Ss(this, vs, "f");
          if (!e) throw new gi("request ended without sending any chunks");
          return (
            _s(this, vs, void 0, "f"),
            (function (e) {
              const {
                id: t,
                choices: n,
                created: r,
                model: o,
                system_fingerprint: a,
                ...i
              } = e;
              return {
                ...i,
                id: t,
                choices: n.map((t) => {
                  let {
                    message: n,
                    finish_reason: r,
                    index: o,
                    logprobs: a,
                    ...i
                  } = t;
                  if (!r)
                    throw new gi("missing finish_reason for choice ".concat(o));
                  const {
                      content: l = null,
                      function_call: s,
                      tool_calls: c,
                      ...u
                    } = n,
                    d = n.role;
                  if (!d) throw new gi("missing role for choice ".concat(o));
                  if (s) {
                    const { arguments: e, name: t } = s;
                    if (null == e)
                      throw new gi(
                        "missing function_call.arguments for choice ".concat(o),
                      );
                    if (!t)
                      throw new gi(
                        "missing function_call.name for choice ".concat(o),
                      );
                    return {
                      ...i,
                      message: {
                        content: l,
                        function_call: { arguments: e, name: t },
                        role: d,
                      },
                      finish_reason: r,
                      index: o,
                      logprobs: a,
                    };
                  }
                  return c
                    ? {
                        ...i,
                        index: o,
                        finish_reason: r,
                        logprobs: a,
                        message: {
                          ...u,
                          role: d,
                          content: l,
                          tool_calls: c.map((t, n) => {
                            const { function: r, type: a, id: i, ...l } = t,
                              { arguments: s, name: c, ...u } = r || {};
                            if (null == i)
                              throw new gi(
                                "missing choices["
                                  .concat(o, "].tool_calls[")
                                  .concat(n, "].id\n")
                                  .concat(zs(e)),
                              );
                            if (null == a)
                              throw new gi(
                                "missing choices["
                                  .concat(o, "].tool_calls[")
                                  .concat(n, "].type\n")
                                  .concat(zs(e)),
                              );
                            if (null == c)
                              throw new gi(
                                "missing choices["
                                  .concat(o, "].tool_calls[")
                                  .concat(n, "].function.name\n")
                                  .concat(zs(e)),
                              );
                            if (null == s)
                              throw new gi(
                                "missing choices["
                                  .concat(o, "].tool_calls[")
                                  .concat(n, "].function.arguments\n")
                                  .concat(zs(e)),
                              );
                            return {
                              ...l,
                              id: i,
                              type: a,
                              function: { ...u, name: c, arguments: s },
                            };
                          }),
                        },
                      }
                    : {
                        ...i,
                        message: { ...u, content: l, role: d },
                        finish_reason: r,
                        index: o,
                        logprobs: a,
                      };
                }),
                created: r,
                model: o,
                object: "chat.completion",
                ...(a ? { system_fingerprint: a } : {}),
              };
            })(e)
          );
        }),
        (ks = function (e) {
          var t, n, r;
          let o = Ss(this, vs, "f");
          const { choices: a, ...i } = e;
          o
            ? Object.assign(o, i)
            : (o = _s(this, vs, { ...i, choices: [] }, "f"));
          for (const {
            delta: d,
            finish_reason: f,
            index: h,
            logprobs: p = null,
            ...g
          } of e.choices) {
            let e = o.choices[h];
            if (
              (e ||
                (e = o.choices[h] =
                  {
                    finish_reason: f,
                    index: h,
                    message: {},
                    logprobs: p,
                    ...g,
                  }),
              p)
            )
              if (e.logprobs) {
                const { content: n, ...r } = p;
                var l;
                if ((Object.assign(e.logprobs, r), n))
                  (null !== (l = (t = e.logprobs).content) && void 0 !== l) ||
                    (t.content = []),
                    e.logprobs.content.push(...n);
              } else e.logprobs = Object.assign({}, p);
            if ((f && (e.finish_reason = f), Object.assign(e, g), !d)) continue;
            const {
              content: a,
              function_call: i,
              role: m,
              tool_calls: v,
              ...b
            } = d;
            var s;
            if (
              (Object.assign(e.message, b),
              a && (e.message.content = (e.message.content || "") + a),
              m && (e.message.role = m),
              i)
            )
              if (e.message.function_call) {
                if (
                  (i.name && (e.message.function_call.name = i.name),
                  i.arguments)
                )
                  (null !== (s = (n = e.message.function_call).arguments) &&
                    void 0 !== s) ||
                    (n.arguments = ""),
                    (e.message.function_call.arguments += i.arguments);
              } else e.message.function_call = i;
            if (v) {
              e.message.tool_calls || (e.message.tool_calls = []);
              for (const { index: t, id: n, type: o, function: a, ...i } of v) {
                var c, u;
                const l =
                  null !== (c = (r = e.message.tool_calls)[t]) && void 0 !== c
                    ? c
                    : (r[t] = {});
                Object.assign(l, i),
                  n && (l.id = n),
                  o && (l.type = o),
                  a &&
                    ((null !== (u = l.function) && void 0 !== u) ||
                      (l.function = { arguments: "" })),
                  null !== a &&
                    void 0 !== a &&
                    a.name &&
                    (l.function.name = a.name),
                  null !== a &&
                    void 0 !== a &&
                    a.arguments &&
                    (l.function.arguments += a.arguments);
              }
            }
          }
          return o;
        }),
        Symbol.asyncIterator)]() {
          const e = [],
            t = [];
          let n = !1;
          return (
            this.on("chunk", (n) => {
              const r = t.shift();
              r ? r(n) : e.push(n);
            }),
            this.on("end", () => {
              n = !0;
              for (const e of t) e(void 0);
              t.length = 0;
            }),
            {
              next: async () => {
                if (!e.length)
                  return n
                    ? { value: void 0, done: !0 }
                    : new Promise((e) => t.push(e)).then((e) =>
                        e
                          ? { value: e, done: !1 }
                          : { value: void 0, done: !0 },
                      );
                return { value: e.shift(), done: !1 };
              },
            }
          );
        }
        toReadableStream() {
          return new Ni(
            this[Symbol.asyncIterator].bind(this),
            this.controller,
          ).toReadableStream();
        }
      }
      function zs(e) {
        return JSON.stringify(e);
      }
      class Cs extends Bs {
        static fromReadableStream(e) {
          const t = new Cs();
          return t._run(() => t._fromReadableStream(e)), t;
        }
        static runFunctions(e, t, n) {
          const r = new Cs(),
            o = {
              ...n,
              headers: {
                ...(null === n || void 0 === n ? void 0 : n.headers),
                "X-Stainless-Helper-Method": "runFunctions",
              },
            };
          return r._run(() => r._runFunctions(e, t, o)), r;
        }
        static runTools(e, t, n) {
          const r = new Cs(),
            o = {
              ...n,
              headers: {
                ...(null === n || void 0 === n ? void 0 : n.headers),
                "X-Stainless-Helper-Method": "runTools",
              },
            };
          return r._run(() => r._runTools(e, t, o)), r;
        }
      }
      class Ns extends bl {
        runFunctions(e, t) {
          return e.stream
            ? Cs.runFunctions(this._client.chat.completions, e, t)
            : gs.runFunctions(this._client.chat.completions, e, t);
        }
        runTools(e, t) {
          return e.stream
            ? Cs.runTools(this._client.chat.completions, e, t)
            : gs.runTools(this._client.chat.completions, e, t);
        }
        stream(e, t) {
          return Bs.createChatCompletion(this._client.chat.completions, e, t);
        }
      }
      class Es extends bl {
        constructor() {
          super(...arguments), (this.completions = new Ns(this._client));
        }
      }
      !(function (e) {
        e.Completions = Ns;
      })(Es || (Es = {}));
      class Ps extends bl {
        retrieve(e, t, n, r) {
          return this._client.get(
            "/threads/".concat(e, "/messages/").concat(t, "/files/").concat(n),
            {
              ...r,
              headers: {
                "OpenAI-Beta": "assistants=v1",
                ...(null === r || void 0 === r ? void 0 : r.headers),
              },
            },
          );
        }
        list(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          return Yi(n)
            ? this.list(e, t, {}, n)
            : this._client.getAPIList(
                "/threads/".concat(e, "/messages/").concat(t, "/files"),
                js,
                {
                  query: n,
                  ...r,
                  headers: {
                    "OpenAI-Beta": "assistants=v1",
                    ...(null === r || void 0 === r ? void 0 : r.headers),
                  },
                },
              );
        }
      }
      class js extends vl {}
      !(function (e) {
        e.MessageFilesPage = js;
      })(Ps || (Ps = {}));
      class Ts extends bl {
        constructor() {
          super(...arguments), (this.files = new Ps(this._client));
        }
        create(e, t, n) {
          return this._client.post("/threads/".concat(e, "/messages"), {
            body: t,
            ...n,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === n || void 0 === n ? void 0 : n.headers),
            },
          });
        }
        retrieve(e, t, n) {
          return this._client.get(
            "/threads/".concat(e, "/messages/").concat(t),
            {
              ...n,
              headers: {
                "OpenAI-Beta": "assistants=v1",
                ...(null === n || void 0 === n ? void 0 : n.headers),
              },
            },
          );
        }
        update(e, t, n, r) {
          return this._client.post(
            "/threads/".concat(e, "/messages/").concat(t),
            {
              body: n,
              ...r,
              headers: {
                "OpenAI-Beta": "assistants=v1",
                ...(null === r || void 0 === r ? void 0 : r.headers),
              },
            },
          );
        }
        list(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          return Yi(t)
            ? this.list(e, {}, t)
            : this._client.getAPIList("/threads/".concat(e, "/messages"), Rs, {
                query: t,
                ...n,
                headers: {
                  "OpenAI-Beta": "assistants=v1",
                  ...(null === n || void 0 === n ? void 0 : n.headers),
                },
              });
        }
      }
      class Rs extends vl {}
      !(function (e) {
        (e.ThreadMessagesPage = Rs), (e.Files = Ps), (e.MessageFilesPage = js);
      })(Ts || (Ts = {}));
      class Fs extends bl {
        retrieve(e, t, n, r) {
          return this._client.get(
            "/threads/".concat(e, "/runs/").concat(t, "/steps/").concat(n),
            {
              ...r,
              headers: {
                "OpenAI-Beta": "assistants=v1",
                ...(null === r || void 0 === r ? void 0 : r.headers),
              },
            },
          );
        }
        list(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          return Yi(n)
            ? this.list(e, t, {}, n)
            : this._client.getAPIList(
                "/threads/".concat(e, "/runs/").concat(t, "/steps"),
                Ds,
                {
                  query: n,
                  ...r,
                  headers: {
                    "OpenAI-Beta": "assistants=v1",
                    ...(null === r || void 0 === r ? void 0 : r.headers),
                  },
                },
              );
        }
      }
      class Ds extends vl {}
      !(function (e) {
        e.RunStepsPage = Ds;
      })(Fs || (Fs = {}));
      class Is extends bl {
        constructor() {
          super(...arguments), (this.steps = new Fs(this._client));
        }
        create(e, t, n) {
          return this._client.post("/threads/".concat(e, "/runs"), {
            body: t,
            ...n,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === n || void 0 === n ? void 0 : n.headers),
            },
          });
        }
        retrieve(e, t, n) {
          return this._client.get("/threads/".concat(e, "/runs/").concat(t), {
            ...n,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === n || void 0 === n ? void 0 : n.headers),
            },
          });
        }
        update(e, t, n, r) {
          return this._client.post("/threads/".concat(e, "/runs/").concat(t), {
            body: n,
            ...r,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === r || void 0 === r ? void 0 : r.headers),
            },
          });
        }
        list(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          return Yi(t)
            ? this.list(e, {}, t)
            : this._client.getAPIList("/threads/".concat(e, "/runs"), Os, {
                query: t,
                ...n,
                headers: {
                  "OpenAI-Beta": "assistants=v1",
                  ...(null === n || void 0 === n ? void 0 : n.headers),
                },
              });
        }
        cancel(e, t, n) {
          return this._client.post(
            "/threads/".concat(e, "/runs/").concat(t, "/cancel"),
            {
              ...n,
              headers: {
                "OpenAI-Beta": "assistants=v1",
                ...(null === n || void 0 === n ? void 0 : n.headers),
              },
            },
          );
        }
        submitToolOutputs(e, t, n, r) {
          return this._client.post(
            "/threads/".concat(e, "/runs/").concat(t, "/submit_tool_outputs"),
            {
              body: n,
              ...r,
              headers: {
                "OpenAI-Beta": "assistants=v1",
                ...(null === r || void 0 === r ? void 0 : r.headers),
              },
            },
          );
        }
      }
      class Os extends vl {}
      !(function (e) {
        (e.RunsPage = Os), (e.Steps = Fs), (e.RunStepsPage = Ds);
      })(Is || (Is = {}));
      class qs extends bl {
        constructor() {
          super(...arguments),
            (this.runs = new Is(this._client)),
            (this.messages = new Ts(this._client));
        }
        create() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return Yi(e)
            ? this.create({}, e)
            : this._client.post("/threads", {
                body: e,
                ...t,
                headers: {
                  "OpenAI-Beta": "assistants=v1",
                  ...(null === t || void 0 === t ? void 0 : t.headers),
                },
              });
        }
        retrieve(e, t) {
          return this._client.get("/threads/".concat(e), {
            ...t,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === t || void 0 === t ? void 0 : t.headers),
            },
          });
        }
        update(e, t, n) {
          return this._client.post("/threads/".concat(e), {
            body: t,
            ...n,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === n || void 0 === n ? void 0 : n.headers),
            },
          });
        }
        del(e, t) {
          return this._client.delete("/threads/".concat(e), {
            ...t,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === t || void 0 === t ? void 0 : t.headers),
            },
          });
        }
        createAndRun(e, t) {
          return this._client.post("/threads/runs", {
            body: e,
            ...t,
            headers: {
              "OpenAI-Beta": "assistants=v1",
              ...(null === t || void 0 === t ? void 0 : t.headers),
            },
          });
        }
      }
      !(function (e) {
        (e.Runs = Is),
          (e.RunsPage = Os),
          (e.Messages = Ts),
          (e.ThreadMessagesPage = Rs);
      })(qs || (qs = {}));
      class Ls extends bl {
        constructor() {
          super(...arguments),
            (this.chat = new Es(this._client)),
            (this.assistants = new Ll(this._client)),
            (this.threads = new qs(this._client));
        }
      }
      !(function (e) {
        (e.Chat = Es),
          (e.Assistants = Ll),
          (e.AssistantsPage = Al),
          (e.Threads = qs);
      })(Ls || (Ls = {}));
      class As extends Ki {
        constructor() {
          var e, t;
          let {
            baseURL: n = ul("OPENAI_BASE_URL"),
            apiKey: r = ul("OPENAI_API_KEY"),
            organization: o = null !== (e = ul("OPENAI_ORG_ID")) && void 0 !== e
              ? e
              : null,
            ...a
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          if (void 0 === r)
            throw new gi(
              "The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).",
            );
          const i = {
            apiKey: r,
            organization: o,
            ...a,
            baseURL: n || "https://api.openai.com/v1",
          };
          if (
            !i.dangerouslyAllowBrowser &&
            "undefined" !== typeof window &&
            "undefined" !== typeof window.document &&
            "undefined" !== typeof navigator
          )
            throw new gi(
              "It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew OpenAI({ apiKey, dangerouslyAllowBrowser: true });\n\nhttps://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety\n",
            );
          super({
            baseURL: i.baseURL,
            timeout: null !== (t = i.timeout) && void 0 !== t ? t : 6e5,
            httpAgent: i.httpAgent,
            maxRetries: i.maxRetries,
            fetch: i.fetch,
          }),
            (this.completions = new yl(this)),
            (this.chat = new kl(this)),
            (this.embeddings = new xl(this)),
            (this.files = new Sl(this)),
            (this.images = new Bl(this)),
            (this.audio = new El(this)),
            (this.moderations = new Pl(this)),
            (this.models = new jl(this)),
            (this.fineTuning = new Il(this)),
            (this.beta = new Ls(this)),
            (this._options = i),
            (this.apiKey = r),
            (this.organization = o);
        }
        defaultQuery() {
          return this._options.defaultQuery;
        }
        defaultHeaders(e) {
          return {
            ...super.defaultHeaders(e),
            "OpenAI-Organization": this.organization,
            ...this._options.defaultHeaders,
          };
        }
        authHeaders(e) {
          return { Authorization: "Bearer ".concat(this.apiKey) };
        }
      }
      (xs = As),
        (As.OpenAI = xs),
        (As.OpenAIError = gi),
        (As.APIError = mi),
        (As.APIConnectionError = bi),
        (As.APIConnectionTimeoutError = yi),
        (As.APIUserAbortError = vi),
        (As.NotFoundError = Si),
        (As.ConflictError = _i),
        (As.RateLimitError = zi),
        (As.BadRequestError = wi),
        (As.AuthenticationError = ki),
        (As.InternalServerError = Ci),
        (As.PermissionDeniedError = xi),
        (As.UnprocessableEntityError = Bi);
      const {
        OpenAIError: Ms,
        APIError: Hs,
        APIConnectionError: Ws,
        APIConnectionTimeoutError: Us,
        APIUserAbortError: Vs,
        NotFoundError: $s,
        ConflictError: Ks,
        RateLimitError: Xs,
        BadRequestError: Gs,
        AuthenticationError: Qs,
        InternalServerError: Js,
        PermissionDeniedError: Ys,
        UnprocessableEntityError: Zs,
      } = e;
      !(function (e) {
        (e.toFile = Di),
          (e.fileFromPath = li),
          (e.Page = ml),
          (e.CursorPage = vl),
          (e.Completions = yl),
          (e.Chat = kl),
          (e.Embeddings = xl),
          (e.Files = Sl),
          (e.FileObjectsPage = _l),
          (e.Images = Bl),
          (e.Audio = El),
          (e.Moderations = Pl),
          (e.Models = jl),
          (e.ModelsPage = Tl),
          (e.FineTuning = Il),
          (e.Beta = Ls);
      })(As || (As = {}));
      const ec = "gpt-3.5-turbo",
        tc = new As({ apiKey: "", dangerouslyAllowBrowser: !0 });
      const nc = $a({
          useStyles: Mn(
            {
              root: {
                Bahqtrf: "fk6fouc",
                Be2twd7: "fkhj508",
                Bhrd7zp: "figsok6",
                Bg96gwp: "f1i3iumi",
              },
            },
            {
              d: [
                ".fk6fouc{font-family:var(--fontFamilyBase);}",
                ".fkhj508{font-size:var(--fontSizeBase300);}",
                ".figsok6{font-weight:var(--fontWeightRegular);}",
                ".f1i3iumi{line-height:var(--lineHeightBase300);}",
              ],
            },
          ),
          className: "fui-Body1",
          displayName: "Body1",
        }),
        rc = Xo({ root: { paddingTop: "24px", paddingBottom: "24px" } }),
        oc = t.memo((e) => {
          const n = rc(),
            r = t.useCallback(
              () => e.content.map((e) => (0, u.jsx)(nc, { children: e })),
              [e.content],
            );
          return (0, u.jsx)("div", {
            className: n.root,
            children: (0, u.jsx)(Yo, {
              backgroundColor: Tn,
              children: (0, u.jsxs)("div", {
                children: [
                  e.title
                    ? (0, u.jsx)(Ka, { children: e.title })
                    : (0, u.jsx)("div", {}),
                  r(),
                ],
              }),
            }),
          });
        });
      function ac(e) {
        const t = (function (e) {
            const {
                name: t,
                age: n,
                gender: r,
                occupation: o,
                countryResidence: a,
              } = e,
              i =
                t.length > 0 ? "Create a character profile for ".concat(t) : "",
              l = n.length > 0 ? "a ".concat(n, " year old") : "",
              s = r.length > 0 ? "user of ".concat(r, " gender") : "",
              c = o.length > 0 ? "who works as a ".concat(o, ",") : "",
              u = a.length > 0 ? "who lives in ".concat(a, ".") : "";
            return ""
              .concat(i, " ")
              .concat(l, " ")
              .concat(s, " ")
              .concat(c, " ")
              .concat(u)
              .trim();
          })(e.basicData),
          n = (function (e) {
            const { countryOrigin: t, income: n, householdSize: r } = e,
              o = t.length > 0 ? "They are from ".concat(t) : "",
              a =
                n.length > 0
                  ? "their annual household income is currently ".concat(n)
                  : "",
              i =
                r.length > 0
                  ? "they live with ".concat(Number(r) - 1, " more people")
                  : "";
            return "".concat(o, " ").concat(a, " ").concat(i).trim();
          })(e.basicData);
        var r;
        return [
          "".concat(t, " ").concat(n).trim(),
          (function (e) {
            const t = "Imagine you are "
                .concat(e, ". What is ")
                .concat(e, " thinking about right now?"),
              n = "What did ".concat(e, " dream about last night?"),
              r = "What is ".concat(e, " greatest hope in life?"),
              o = "What are the contents of ".concat(e, " trash right now?");
            return "".concat(t, " ").concat(n, " ").concat(r, " ").concat(o);
          })(e.basicData.name),
          ((r = e.questionData), Object.values(r).join(" ").trim()),
        ].filter((e) => e.length > 0);
      }
      const ic = function () {
          const [e, n] = t.useState({
              profilePicture: "",
              basicData: {
                name: "",
                age: "",
                gender: "",
                occupation: "",
                countryResidence: "",
                countryOrigin: "",
                income: "",
                householdSize: "",
              },
              questionData: {
                question1: "",
                question2: "",
                question3: "",
                question4: "",
              },
            }),
            [r, o] = t.useState([]),
            a = t.useCallback(() => {
              if (0 === e.basicData.name.length)
                return void alert("At least a name is needed");
              const t = ac(e);
              console.log(t),
                (async function (e) {
                  const t = {
                    messages: e.map((e) => ({ role: "system", content: e })),
                    model: ec,
                  };
                  return await tc.chat.completions.create(t);
                })(t).then((e) => {
                  if ("choices" in e) {
                    const t = e.choices,
                      n = [];
                    t.forEach((e) => {
                      const t = e.message.content;
                      t && n.push(t);
                    }),
                      o(n);
                  } else console.log(e);
                });
            }, [e, o]),
            i = t.useCallback(
              (t) => {
                n({ ...e, ...t });
              },
              [e],
            );
          return (0, u.jsx)(ot, {
            theme: _n,
            className: "container",
            children: (0, u.jsxs)("div", {
              className: "content",
              children: [
                (0, u.jsxs)("div", {
                  className: "row",
                  style: { height: "50vh" },
                  children: [
                    (0, u.jsx)("div", {
                      className: "column",
                      children: (0, u.jsx)(Qo, {
                        profilePicture: e.profilePicture,
                      }),
                    }),
                    (0, u.jsx)("div", {
                      className: "column",
                      children: (0, u.jsx)(Wa, {
                        updateData: i,
                        data: e.basicData,
                      }),
                    }),
                    (0, u.jsx)("div", {
                      className: "column",
                      children: (0, u.jsx)(Qa, {}),
                    }),
                  ],
                }),
                (0, u.jsxs)("div", {
                  className: "row",
                  style: { height: "25vh" },
                  children: [
                    (0, u.jsx)("div", {
                      className: "column",
                      children: (0, u.jsx)(Ja, {
                        updateData: i,
                        data: e.questionData,
                      }),
                    }),
                    (0, u.jsx)("div", {
                      className: "column",
                      children: (0, u.jsx)(Ya, {}),
                    }),
                  ],
                }),
                (0, u.jsx)("div", {
                  className: "submit",
                  children: (0, u.jsx)(Jn, {
                    size: "large",
                    appearance: "primary",
                    onClick: a,
                    children: "Submit",
                  }),
                }),
                (0, u.jsx)("div", {
                  children:
                    r.length > 0
                      ? (0, u.jsx)(oc, {
                          title: "Character Profile",
                          content: r,
                        })
                      : null,
                }),
              ],
            }),
          });
        },
        lc = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(453)
              .then(n.bind(n, 453))
              .then((t) => {
                let {
                  getCLS: n,
                  getFID: r,
                  getFCP: o,
                  getLCP: a,
                  getTTFB: i,
                } = t;
                n(e), r(e), o(e), a(e), i(e);
              });
        };
      o
        .createRoot(document.getElementById("root"))
        .render((0, u.jsx)(t.StrictMode, { children: (0, u.jsx)(ic, {}) })),
        lc();
    })();
})();
//# sourceMappingURL=main.907d861d.js.map
