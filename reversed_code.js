if (typeof window !== "undefined") {
    (function () {
      var mathModule = Math;
      var EventValueArray,
        o,
        BackspaceCount,
        WheelDataPointCounter,
        KeyDownCount,
        NotTouchCount,
        DataPoint_Mouse_TimeDifference_Threshold500,
        DataPoint_Mouse_AngleVector_500,
        DataPoint_Mouse_VectorDiff_Threshold500,
        DataPoint_Touch_TimeDifference_500,
        DataPoint_Touch_AngleVector,
        DataPoint_Touch_VectorDiff,
        DataPoint_Mouse_TimeDiff_MouseDownUp,
        DataPoint_Mouse_TimeDiff_KeyDownUp_1000,
        DataPoint_Key_KeysSameTimeDiff_1000,
        DataPoint_Key_TimeDiff_SpecialKey_DownUp,
        DataPoint_Key_TimeDiff_SpecialKey_UpDown,
        DataPoint_Key_TimeDiff_SpecialKey_Down,
        DataPoint_Key_TimeDiff_SpecialKey_Up,
        OrientationDataPoint,
        DataPoint_Mouse_Click_TimeDiff,
        DataPoint_Key_TimmeDiff_ClickDown,
        DataPoint_Mouse_VectorAngle,
        DataPoint_Mouse_VectorAngle_500,
        DataPoint_Mouse_Deviation,
        DataPoint_Touch_TimeDiff_StartEndCancel,
        DataPoint_Touch_Sequential_TimeDiff,
        DataPoint_KeyTimeDiff_LetterLetter,
        DataPoint_KeyTimeDiff_LetterDigit,
        DataPoint_KeyTimeDiff_DigitInvalid,
        DataPoint_KeyTimeDiff_DoubleInvalid,
        DataPoint_Universal,
        DataPointMouseVectorDiffDeviation,
        DataPointMouseVectorDiffMedian,
        DataPoint_mouse_VectorDiff_Deviation,
        DataPoint_mouse_VectorDiff_Median,
        DataPoint_mouse_VectorDiff_Rounded,
        DataPoint_mouse_TimeDiff_Rounded,
        DataPoint_mouse_ChangeSpeed,
        DataPoint_Mouse_VectorDiff,
        DataPoint_Mouse_TimeDiff,
        Sn,
        f = "Backspace",
        _ = "Delete",
        str_input = "Space",
        t = "Enter",
        r = "Tab",
        BackspaceKeys = ["Backspace", "Delete", "8", "46"],
        IsSpecialEditingKeyArr = BackspaceKeys.concat([
          str_input,
          t,
          r,
          "32",
          "13",
          "10",
        ]),
        Tn = "DOMContentLoaded",
        jn = "complete",
        An = "interactive",
        Bn = "MSIE",
        On = "iframe",
        Ln = "style",
        str_div = "div",
        str_TypeError = "TypeError",
        str_audio = "audio",
        str_video = "video",
        Wn = "[native code]",
        Gn = "Reflect",
        str_prototype = "prototype",
        Qn = "arguments",
        Vn = "caller",
        Yn = "toString",
        str_prompt = "prompt",
        Jn = "px",
        f = "query",
        $n = "getOwnPropertyNames",
        str_getPrototypeOf = "getPrototypeOf",
        str_setPrototypeOf = "setPrototypeOf",
        str_getOwnPropertyDescriptor = "getOwnPropertyDescriptor",
        tt = str_getOwnPropertyDescriptor + "s",
        str_runtime = "runtime",
        et = "speechSynthesis",
        str_notification = "Notification",
        str_Permissions = "Permissions",
        ut = "Function",
        str_Navigator = "Navigator",
        CastleVersion = "2.4.1",
        ZeroConstant = 0,
        VoidConstant = void ZeroConstant,
        NullConstant = null,
        ObjectType = Object,
        ft = 255,
        Const15 = 15,
        st = "undefined",
        vt = 1535e6,
        ht = function () {},
        dt = [],
        lt = 6,
        gt = function (n) {
          return IsVarNotVoidOrNull(n) && "" !== n;
        },
        IsVoid = function (n) {
          return n !== VoidConstant;
        },
        IsVarNotVoidOrNull = function (n) {
          return IsVoid(n) && n !== NullConstant;
        },
        validation = function (n) {
          return n || VoidConstant;
        },
        GetBoolean = function (n) {
          return n ? 1 : 0;
        },
        IsSubstr = function (n, t) {
          return -1 < n.indexOf(t);
        },
        hasOwnPropertySafe = function (n, t) {
          return (
            !!(IsVarNotVoidOrNull(n) && "hasOwnProperty" in n) &&
            n.hasOwnProperty(t)
          );
        },
        safeGet = function (n, t) {
          return t in n && n[t];
        },
        GetOwnPropretyNames = function (n) {
          return ObjectType["getOwnPropertyNames"](n);
        },
        GetPrototypeOf = function (n) {
          return ObjectType[str_getPrototypeOf](n);
        },
        GetOwnPropertyDescriptor = function (n, t) {
          return ObjectType[str_getOwnPropertyDescriptor](n, t);
        },
        GetTypeName = function (n) {
          return n.constructor.name;
        },
        kt =
          ObjectType.assign ||
          function (n, t) {
            for (var r in t) hasOwnPropertySafe(t, r) && (n[r] = t[r]);
            return n;
          },
        GetNavigator = function (n) {
          return n.navigator;
        },
        GetDocument = function (n) {
          return n.document;
        },
        GetScreen = function (n) {
          return n.screen;
        },
        xt = function (n) {
          return n.location;
        },
        GetDocumentElement = function (n) {
          return GetDocument(n).documentElement;
        },
        Rt = function (n) {
          return GetDocument(n).body;
        },
        St = function (n, t, r) {
          return n.setAttribute(t, r);
        },
        It = function (n, t) {
          if (n.getAttribute) return n.getAttribute(t);
        },
        Tt = function (n, t) {
          n && n.appendChild(t);
        },
        CreateDocumentElement = function (n, t) {
          return GetDocument(n).createElement(t);
        },
        jt = function (n) {
          n && n.parentNode && n.parentNode.removeChild(n);
        },
        SetPropertyImportant = function (n, t, r) {
          n.style.setProperty(t, r, "important");
        },
        SetElementInvisible = function (n) {
          SetPropertyImportant(n, "visibility", "hidden"),
            SetPropertyImportant(n, "display", "block");
        },
        JsonStringify = function (n) {
          return JSON.stringify(n);
        },
        JsonParse = function (n) {
          return JSON.parse(n);
        },
        IsVarNumerical = function (n) {
          return !isNaN(n - parseFloat(n));
        },
        IsInteger = function (n) {
          var t = Number.isInteger;
          return IsVarNotVoidOrNull(t)
            ? t(n)
            : "number" == typeof n && isFinite(n) && mathModule["floor"](n) === n;
        },
        IsValueArray = function (n) {
          return "[object Array]" === ObjectType.prototype.toString.call(n);
        },
        IsFunction = function (n) {
          return "function" == typeof n;
        },
        Pt = function (n) {
          return "string" == typeof n;
        },
        ArraySearch = function (n, t) {
          var r = n instanceof Object ? n : new Object(n),
            e = isFinite(r.length) ? mathModule["floor"](r.length) : 0,
            c = 0;
          if (t === VoidConstant) {
            do if (c in r && r[c] === VoidConstant) return c;
            while (++c < e);
          } else {
            do if (r[c] === t) return c;
            while (++c < e);
          }
          return -1;
        },
        FilterArray = function (n, t) {
          for (var r = [], e = 0, c = n; e < c.length; e++) {
            var i = c[e];
            t(i) && r.push(i);
          }
          return r;
        },
        ApplyTransformationToArray = function (n, t) {
          for (var r = [], e = 0, c = n; e < c.length; e++) {
            var i = c[e];
            r.push(t(i));
          }
          return r;
        },
        forEachCallback = function (n, t) {
          for (var r = 0, e = n; r < e.length; r++) t(e[r]);
        },
        getObjectValues = function (FieldStorage) {
          if ("values" in ObjectType) return ObjectType.values(FieldStorage);
          var t,
            r = [];
          for (t in FieldStorage)
            hasOwnPropertySafe(FieldStorage, t) && r.push(FieldStorage[t]);
          return r;
        },
        GetKeys = function (n) {
          if ("keys" in ObjectType) return ObjectType.keys(n);
          var t,
            r = [];
          for (t in n) hasOwnPropertySafe(n, t) && r.push(t);
          return r;
        },
        Yt = function (n, t, r) {
          for (var e = r, c = 0, i = 0, u = n; i < u.length; i++)
            (e = t(e, u[i], c)), c++;
          return e;
        },
        initializeArrayWithValue = function (n, t) {
          for (var r = Array(n), e = r.length - 1; 0 <= e; e--) r[e] = t;
          return r;
        },
        Jt = function (n) {
          return n ? [].concat(n) : [];
        },
        $t = function (n) {
          if (ObjectType(n) !== n) return {};
          for (var t in n) gt(n[t]) || delete n[t];
          return n;
        },
        ArraySearchExists = function (n, t) {
          return !!n && 0 <= ArraySearch(n, t);
        },
        SearchLinearExists = function (n, t) {
          for (var r = 0; r < n.length; r++) if (n[r] === t) return !0;
          return !1;
        },
        string_addEventListener = "addEventListener",
        string_AttachEvent = "attachEvent",
        tr = "detachEvent",
        rr = "removeEventListener",
        string_on = "on",
        RegisterNewListener = function (n, listenerType, listenerFunc) {
          addEventListenerExists(n)
            ? n[string_addEventListener](listenerType, listenerFunc, !0)
            : attachEventExists(n) &&
              n[string_AttachEvent](
                "".concat(string_on).concat(listenerType),
                listenerFunc
              );
        },
        ir = function (n, t, r) {
          addEventListenerExists(n)
            ? n[rr](t, r, !0)
            : attachEventExists(n) && n[tr]("".concat(string_on).concat(t), r);
        },
        addEventListenerExists = function (n) {
          return !!n[string_addEventListener];
        },
        attachEventExists = function (n) {
          return !!n[string_AttachEvent];
        },
        roundToDecimalPlaces = function (n, t) {
          var r;
          return (
            void 0 === t && (t = 2),
            IsVarNotVoidOrNull(n) && isFinite(n)
              ? ((r = mathModule["pow"](10, t)), mathModule["round"](n * r) / r)
              : NullConstant
          );
        },
        MathDiv = function (n, t) {
          return t !== ZeroConstant ? n / t : NullConstant;
        },
        RandWithMax = function (n) {
          return (mathModule["random"]() * n) | ZeroConstant;
        },
        MathAbsDiff = function (n, t) {
          return mathModule["abs"](n - t);
        },
        GetSign = function (n) {
          return ZeroConstant < n ? 1 : n < ZeroConstant ? -1 : ZeroConstant;
        },
        T = function (n) {
          var e = "".concat(JsonStringify(n));
          return (
            "0000000" +
            (
              Yt(
                e.split(""),
                function (n, t, r) {
                  return (mathModule["imul"](31, n) + e.charCodeAt(r)) | 0;
                },
                2166136261
              ) >>> 0
            ).toString(16)
          ).substr(-8);
        },
        newDate = function () {
          return new Date();
        },
        GetCurrentDate =
          Date.now ||
          function () {
            return newDate().getTime();
          },
        _ = function (n) {
          return new Date(n, 1, 1, 0, 0, 1).toUTCString();
        },
        xorHexStrings = function (n, t) {
          for (var r = [], e = 0, c = 0, i = n.split(""); c < i.length; c++) {
            var u = i[c],
              u = parseInt(u, 16) ^ parseInt(t.charAt(e), 16);
            r.push(u.toString(16)), (e = (e + 1) % t.length);
          }
          return r.join("");
        },
        stringToHex = function (n) {
          for (var t = "", r = 0; r < n.length; r++)
            t += ByteToHex(n.charCodeAt(r));
          return t;
        },
        stringToHexNibbles = function (n) {
          for (var t = "", r = 0; r < n.length; r++)
            t += (15 & n.charCodeAt(r)).toString(16);
          return t;
        },
        ByteToHex = function (n) {
          return ("0" + (n & ft).toString(16)).slice(-2);
        },
        getLowerTwoBitsAsBinaryString = function (n) {
          return ("0" + (3 & n).toString(2)).slice(-2);
        },
        getLowerNibbleAsHex = function (n) {
          return (n & Const15).toString(16);
        },
        /**
         * Converts an integer to a fixed-size big-endian hexadecimal string.
         *
         * @param {number} n - The integer to convert.
         * @param {number} t - The number of bytes to represent (output length will be 2 * t characters).
         * @returns {string} - The hexadecimal string representation of `n`, left-padded with zeros to length `2 * t`.
         */
        intToFixedSizeHexBE = function (n, t) {
          for (
            var r = mathModule["min"](mathModule["pow"](2, 8 * t) - 1, n),
              e = "",
              c = 2 * t;
            0 < r;
  
          )
            (e = ByteToHex(r) + e), (r >>>= 8);
          if (c) for (; e.length < c; ) e = "0" + e;
          return e;
        },
        decodeHexStrToStr = function (n) {
          var t = n.match(/.{2}/g),
            r = "";
          if (t)
            for (var e = 0, c = t; e < c.length; e++) {
              var i = c[e];
              r += String.fromCharCode(parseInt(i, 16) & ft);
            }
          return r;
        },
        bytesToHexString = function (n) {
          for (var t = "", r = 0, e = n; r < e.length; r++) {
            var c = e[r];
            t += ByteToHex(c);
          }
          return t;
        },
        CvtBoolArrayToBinaryNum = function (n, t) {
          for (
            var r = 0,
              e = t && n.length > t ? n.slice(0, t) : n,
              c = e.length,
              i = c - 1;
            0 <= i;
            i--
          )
            r |= (e[i] ? 1 : 0) << (c - i - 1);
          return t && c < t && (r <<= t - c), r;
        },
        Er = 4294967296,
        Dr = "0-9a-f",
        Cr = function (n) {
          return intToFixedSizeHexBE(n() * Er, 4);
        },
        GenerateUUID = function (n) {
          var t, r;
          if (n.crypto) {
            if (n.crypto.subtle && n.crypto.randomUUID)
              return n.crypto.randomUUID().replace(/-/g, "");
            n.crypto.getRandomValues &&
              ((t = n),
              (r = new Uint32Array(4)),
              t.crypto.getRandomValues(r),
              (t = ApplyTransformationToArray(r, function (n) {
                return intToFixedSizeHexBE(n, 4);
              })
                .join("")
                .split("")));
          }
          return (
            t ||
              ((r = (function (n) {
                for (
                  var e,
                    t = 0,
                    r = 0,
                    c = 0,
                    i = 1,
                    u =
                      ((e = 4022871197),
                      function (n) {
                        n = n.toString();
                        for (var t = 0; t < n.length; t++) {
                          var r = 0.02519603282416938 * (e += n.charCodeAt(t));
                          (e = (r = (r - (e = r >>> 0)) * e) >>> 0),
                            (e += (r -= e) * Er);
                        }
                        return 2.3283064365386963e-10 * (e >>> 0);
                      }),
                    t = u(" "),
                    r = u(" "),
                    c = u(" "),
                    a = 0;
                  a < n.length;
                  a++
                )
                  (t -= u(n[a])) < 0 && (t += 1),
                    (r -= u(n[a])) < 0 && (r += 1),
                    (c -= u(n[a])) < 0 && (c += 1);
                return (
                  null,
                  function () {
                    var n = 2091639 * t + 2.3283064365386963e-10 * i;
                    return (t = r), (r = c), (c = n - (i = 0 | n));
                  }
                );
              })([
                mathModule["random"](),
                GetCurrentDate(),
                mathModule["random"](),
                mathModule["random"](),
              ])),
              (t = (Cr(r) + Cr(r) + Cr(r) + Cr(r)).split(""))),
            (t[12] = "4"),
            (t[16] = getLowerNibbleAsHex((3 & parseInt(t[16], 16)) | 8)),
            t.join("")
          );
        },
        utf8Encode = function (n, t) {
          for (
            var r, e, c = 0, i = [], u = 0;
            u < n.length &&
            ((r = []),
            (e = n.charCodeAt(u)) < 128
              ? r.push(e)
              : e < 2048
              ? r.push(192 | (e >> 6), 128 | (63 & e))
              : e < 55296 || 57344 <= e
              ? r.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (63 & e))
              : ((e = 65536 + (((1023 & e) << 10) | (1023 & n.charCodeAt(++u)))),
                r.push(
                  240 | (e >> 18),
                  128 | ((e >> 12) & 63),
                  128 | ((e >> 6) & 63),
                  128 | (63 & e)
                )),
            !t || c + r.length <= t);
            u++
          )
            (c += r.length), i.push.apply(i, r);
          return i;
        },
        ToLower = function (n) {
          return n.toLowerCase();
        },
        ToUpper = function (n) {
          return n.toUpperCase();
        },
        StrLen = function (n) {
          return n.length;
        },
        CapitalizeFirstLetter = function (n) {
          return ToUpper(n.charAt(0)) + n.slice(1);
        },
        ConcatWithCapitalization = function (n, t) {
          return n + CapitalizeFirstLetter(t);
        },
        Tr = function () {
          return (
            String.fromCharCode(26 * mathModule["random"]() + 97) +
            mathModule["random"]().toString(36).slice(-7)
          );
        },
        jr = function (r, e, c) {
          var i = VoidConstant,
            u = NullConstant;
          return function () {
            for (var n = [], t = 0; t < arguments.length; t++)
              n[t] = arguments[t];
            return (
              u != NullConstant && clearTimeout(u),
              c
                ? (i = r.apply(NullConstant, n))
                : (u = setTimeout(function () {
                    if (((u = NullConstant), !c))
                      return (i = r.apply(NullConstant, n));
                  }, e)),
              i
            );
          };
        },
        str_device = "device",
        str_deviceMemory = "deviceMemory",
        str_Platform = "platform",
        str_Vendor = "vendor",
        userAgent = "userAgent",
        str_appVersion = "appVersion",
        str_productSub = "productSub",
        str_language = "language",
        hardwareConcurrency = "hardwareConcurrency",
        str_mimeTypes = "mimeTypes",
        str_javaEnabled = "javaEnabled",
        str_cookieEnabled = "cookieEnabled",
        str_credentials = "credentials",
        str_plugins = "plugins",
        str_buildID = "buildID",
        str_colorDepth = "colorDepth",
        str_pixelDepth = "pixelDepth",
        str_eval = "eval",
        str_oscpu = "oscpu",
        str_documentMode = "documentMode",
        str_chrome = "chrome",
        str_brave = "brave",
        str_opera = "opera",
        str_opr = "opr",
        str_resolvedOptions = "resolvedOptions",
        str_timezone = "timeZone",
        str_locale = "locale",
        str_keyboard = "keyboard",
        str_msSaveBlob = "msSaveBlob",
        str_indexedDB = "indexedDB",
        str_openDatabase = "openDatabase",
        str_performance = "performance",
        str_memory = "memory",
        str_jsHeapSizeLimit = "jsHeapSizeLimit",
        str_webkitTemporaryStorage = "webkitTemporaryStorage",
        str_webkitRequestFileSystem = "webkitRequestFileSystem",
        str_MozAppearance = "MozAppearance",
        GetPlatfor = function (n) {
          return GetNavigator(n)[str_Platform];
        },
        GetVendor = function (n) {
          return GetNavigator(n)[str_Vendor];
        },
        GetUserAgent = function (n) {
          return GetNavigator(n)[userAgent];
        },
        GetLanguage = function (n) {
          var t = GetNavigator(n);
          return (
            t[str_language] ||
            t[ConcatWithCapitalization("user", str_language)] ||
            t[ConcatWithCapitalization("browser", str_language)] ||
            t[ConcatWithCapitalization("system", str_language)]
          );
        },
        GetScreenWidth = function (n) {
          return validation(GetScreen(n).width);
        },
        GetSccreenHeight = function (n) {
          return validation(GetScreen(n).height);
        },
        GetHardwareConcurrency = function (n) {
          return validation(GetNavigator(n)[hardwareConcurrency]);
        },
        GetDeviceMemory = function (n) {
          return validation(GetNavigator(n)[str_deviceMemory]);
        },
        GetMimeTypes = function (n) {
          return GetNavigator(n)[str_mimeTypes];
        },
        GetVisualViewport = function (n) {
          return validation(n.visualViewport);
        },
        GetPlugins = function (n) {
          return GetNavigator(n)[str_plugins];
        },
        GetPermissions = function (n) {
          return GetNavigator(n)[ToLower(str_Permissions)];
        },
        GetServiceWorker = function (n) {
          return GetNavigator(n)["serviceWorker"];
        },
        je = function (n) {
          return n[str_indexedDB];
        },
        GetPerformance = function (n) {
          return n[str_performance];
        },
        GetUserLocale = function (n) {
          try {
            return Intl.DateTimeFormat()[str_resolvedOptions]();
          } catch (t) {}
        },
        GetUserLocale2 = function (n) {
          var t = GetUserLocale();
          if (t) return t[str_locale];
        },
        GetNavigatorLanguages = function (n) {
          return GetNavigator(n)[str_language + "s"] || [];
        },
        GetChrome = function (n) {
          return safeGet(n, str_chrome);
        },
        EVENT_KEYUP = 0,
        EVENT_KEYDOWN = 1,
        EVENT_CLICK = 2,
        EVENT_MOUSEUP = 3,
        EVENT_MOUSEDOWN = 4,
        EVENT_TOUCHEND = 5,
        EVENT_TOUCHSTART = 6,
        EVENT_TOUCHCANCEL = 7,
        EVENT_MMOUSEMOVE = 8,
        EVENT_TOUCHMOVE = 9,
        EVENT_DEVICEMMOTION = 10,
        EventTypeArray =
          "keyup,keydown,click,mouseup,mousedown,touchend,touchstart,touchcancel,mousemove,touchmove,devicemotion,wheel".split(
            ","
          ),
        EVENT_KEY_EVENT = (EventTypeArray[EVENT_DEVICEMMOTION], 0),
        EVENT_MOUSE_EVENT = 1,
        EVENT_TOUCH_EVENT = 2,
        EVENT_ORIENTATION_EVENT = 3,
        EVENT_WHEEL_EVENT = 4,
        EVENT_UNK_DICTIONARY = [
          { t: EVENT_KEY_EVENT }, // keyup
          { t: EVENT_KEY_EVENT }, // keydown
          { t: EVENT_MOUSE_EVENT, i: !0 }, // click
          { t: EVENT_MOUSE_EVENT, i: !0 }, // mouseup
          { t: EVENT_MOUSE_EVENT, i: !0 }, // mousedown
          { t: EVENT_TOUCH_EVENT, i: !0 }, // touchend
          { t: EVENT_TOUCH_EVENT, i: !0 }, // touchstart
          {
            t: EVENT_TOUCH_EVENT,
            i: !0,
          }, // touchcancel
          { u: !0, t: EVENT_MOUSE_EVENT }, //mousemove
          { u: !0, t: EVENT_TOUCH_EVENT }, // devicemotion
          { t: EVENT_ORIENTATION_EVENT }, //wheel
          { t: EVENT_WHEEL_EVENT },
        ],
        cc = 512,
        ic = 8192,
        TIME_DIFF_THRESHOLD = 500,
        CONST_200 = 200,
        ONE_THOUSAND = 1000,
        ONE_THOUSAND_ = 1000,
        GetEventCounter = function (n) {
          return EventValueArray[n];
        },
        IsTouchValue = function () {
          return (
            0 < GetEventCounter(EVENT_TOUCHEND) ||
            0 < GetEventCounter(EVENT_TOUCHSTART) ||
            0 < GetEventCounter(EVENT_TOUCHCANCEL)
          );
        },
        CircularBufferUpdate = function (dataPoint, eventData) {
          3 === dataPoint.o && (dataPoint._[2] = dataPoint._[1]),
            (dataPoint._[1] = dataPoint._[0]),
            (dataPoint._[0] = eventData);
        },
        ConstructDataPointCounter = function (n, t, r, e, c) {
          return (
            void 0 === c && (c = 1),
            { v: n, h: r, l: e, g: t, _: Array(c), o: c, p: ZeroConstant }
          );
        },
        UpdateDataPoint_Count = function (dataPoint, exInfo) {
          var r;
          (dataPoint.h && !dataPoint.h(dataPoint, exInfo)) ||
            (dataPoint.g && ArraySearch(dataPoint.g, exInfo.H) < ZeroConstant) ||
            (CircularBufferUpdate(dataPoint, exInfo),
            dataPoint.l && !dataPoint.l(dataPoint)) ||
            ((r = dataPoint.v) && !r.apply(NullConstant, dataPoint._)) ||
            dataPoint.p++;
        },
        AllFalse = function (n, t, r) {
          return !n || !t || !r;
        },
        EuclidianDistance = function (n, t) {
          if (0 !== n || 0 !== t)
            return mathModule["sqrt"](
              mathModule["pow"](n, 2) + mathModule["pow"](t, 2)
            );
        },
        EventDateDifference = function (n, t) {
          return MathAbsDiff(n.D, t.D);
        },
        GetVectorDistance = function (n, t) {
          var r, e;
          if (
            n.C !== NullConstant &&
            n.k !== NullConstant &&
            t.C !== NullConstant &&
            t.k !== NullConstant
          )
            return (r = n.C - t.C), (e = n.k - t.k), EuclidianDistance(r, e);
        },
        GetVectorAngle = function (n, t, r) {
          if (!AllFalse(n, t, r)) {
            var e = r.C - t.C,
              c = r.k - t.k,
              i = n.C - t.C,
              u = n.k - t.k,
              a = e * i + c * u,
              e = EuclidianDistance(e, c),
              c = EuclidianDistance(i, u);
            if (e && c && 2 < e && 2 < c) {
              i = roundToDecimalPlaces(a / (e * c), 10);
              if (IsVarNotVoidOrNull(i))
                return (180 * mathModule["acos"](i)) / Math.PI;
            }
          }
        },
        GetDeviationBetweenTwoPoints = function (n, t, r) {
          var e, c, i, u, a;
          if (
            !AllFalse(n, t, r) &&
            n.C !== NullConstant &&
            n.k !== NullConstant &&
            n.q !== NullConstant &&
            t.C !== NullConstant &&
            t.k !== NullConstant &&
            t.q !== NullConstant
          )
            return (
              (a = r.C - t.C),
              (e = r.k - t.k),
              (c = n.C - t.C),
              (i = n.k - t.k),
              (u = MathAbsDiff(a * i, c * e)),
              (a = EuclidianDistance(a - c, e - i)) ? u / a : 0
            );
        },
        GetVectorAngleRelativeToX = function (n, t) {
          var r, e;
          if (n && t && n.D - t.D != 0 && GetVectorDistance(n, t))
            return (
              (r = t.C - n.C),
              (e = t.k - n.k),
              (180 * mathModule["atan2"](e, r)) / Math.PI + 180
            );
        },
        GetVectorDistanceHelper = function (n, t) {
          if (n && t) return GetVectorDistance(n, t);
        },
        WeightedCoordSum = function (n, t) {
          if (
            n &&
            t &&
            n.C !== NullConstant &&
            n.k !== NullConstant &&
            n.q !== NullConstant &&
            t.C !== NullConstant &&
            t.k !== NullConstant &&
            t.q !== NullConstant
          )
            return (
              mathModule["abs"](10 * n.C) +
              mathModule["abs"](10 * n.k) +
              mathModule["abs"](10 * n.q)
            );
        },
        GetEventTimeDifference = function (n, t) {
          if (n && t) return EventDateDifference(n, t);
        },
        GetDateDiffIfKeysTheSame = function (n, t) {
          return n && t && n.F === t.F ? EventDateDifference(n, t) : void 0;
        },
        KeyEventTimeDiff = function (event, event2) {
          return event && event2 && event.F !== event2.F
            ? EventDateDifference(event, event2)
            : void 0;
        },
        IsKeyBackspace = function (n) {
          return ArraySearch(BackspaceKeys, n.F) >= ZeroConstant;
        },
        AreNumbersSameSign = function (n, t) {
          return n !== t && GetSign(n) - GetSign(t) === ZeroConstant;
        },
        AreWheelCoordsInvalid = function (n, t) {
          return (
            !n ||
            !t ||
            n.C === NullConstant ||
            n.k === NullConstant ||
            t.C === NullConstant ||
            t.k === NullConstant ||
            AreNumbersSameSign(n.C, t.C) ||
            AreNumbersSameSign(n.k, t.k) ||
            AreNumbersSameSign(n.q, t.q)
          );
        },
        CHAR_LETTER = 0,
        CHAR_DIGIT = 1,
        CHAR_INVALID = 2,
        UNK_CONST_0 = 0,
        UNK_CONST_1 = 1,
        MOUSE_EVENT_CATEGORY = 2,
        UNK_CONST_3 = 3,
        UnkArrSet = function (n, t) {
          return (o[n] = t);
        },
        EventArrLookup = function (n) {
          return o[n];
        },
        IsTouchEvent = function (n) {
          return n.R === ZeroConstant || (1 == n.R && n.H === EVENT_TOUCHSTART);
        },
        NotTouchEvent = function (n) {
          return !IsTouchEvent(n);
        },
        AreKeyDownEvents = function (n) {
          return !!n._[1] && !!n.g && n._[0].H === n.g[1] && n._[1].H === n.g[0];
        },
        SequentialTouchStartDetector = function (n) {
          return (
            !!n._[1] &&
            n._[1].H === EVENT_TOUCHSTART &&
            n._[0].H != EVENT_TOUCHSTART
          );
        },
        Wc = function (n) {
          return (
            !!n._[1] &&
            n._[0].H === EVENT_TOUCHSTART &&
            n._[1].H != EVENT_TOUCHSTART
          );
        },
        IsEventLetterDigitCombo = function (n) {
          return !!n._[1] && n._[1].S == CHAR_LETTER && n._[0].S == CHAR_DIGIT;
        },
        IsEventDigitInvalidCobo = function (n) {
          return !!n._[1] && n._[1].S == CHAR_DIGIT && n._[0].S == CHAR_INVALID;
        },
        IsEventDoubleInvalid = function (n) {
          return !!n._[1] && n._[1].S == CHAR_INVALID && n._[0].S == CHAR_INVALID;
        },
        IsEventDoubleLetter = function (n) {
          return !!n._[1] && n._[1].S == CHAR_LETTER && n._[0].S == CHAR_LETTER;
        },
        ONE_HALF = 0.5,
        InterpolatingArrayIndexer = function (n, t) {
          var r;
          return n.length
            ? ((r = IsVarNotVoidOrNull(t) ? t : 0.5),
              (r = (n.length - 1) * r),
              IsInteger(r)
                ? n[r]
                : (r = mathModule["floor"](r)) + 1 <= n.length
                ? (n[r] + n[r + 1]) / 2
                : n[r])
            : NullConstant;
        },
        SortedArrInsert = function (n, t) {
          n.push(t);
          for (var r = n.length - 1, e = n[r]; 0 < r && e < n[r - 1]; )
            (n[r] = n[r - 1]), --r;
          n[r] = e;
        },
        $c = function (n) {
          return { I: [], T: IsVarNotVoidOrNull(n) ? n : CONST_200 };
        },
        MedianAbsoluteDeviationCalculator = function (n) {
          if (n.I.length < 2) return NullConstant;
          var t = InterpolatingArrayIndexerObjectHelper(n, ONE_HALF);
          if (t == NullConstant) return NullConstant;
          for (var r = [], e = 0, c = n.I; e < c.length; e++) {
            var i = c[e];
            SortedArrInsert(r, MathAbsDiff(i, t));
          }
          return InterpolatingArrayIndexer(r, ONE_HALF);
        },
        InterpolatingArrayIndexerObjectHelper = function (n, t) {
          return InterpolatingArrayIndexer(n.I, t);
        },
        RemoveRandomElement = function (n, t) {
          var r,
            e,
            c = n.I;
          c.length >= n.T &&
            ((e = RandWithMax((r = c).length - 2) + 1), void r.splice(e, 1)),
            SortedArrInsert(c, t);
        },
        ConstructDataPointType2 = function (n, t) {
          var r = {
            j: NullConstant,
            A: $c(t),
            p: ZeroConstant,
            B: ZeroConstant,
            O: ZeroConstant,
            L: VoidConstant,
            M: VoidConstant,
          };
          return n && (r.N = $c(t)), r;
        },
        UpdateDataPointSub = function (dataPointSub, diffData) {
          var r, e;
          dataPointSub.p++,
            (dataPointSub.B += diffData),
            RemoveRandomElement(dataPointSub.A, diffData),
            IsVarNotVoidOrNull(dataPointSub.j)
              ? ((r = MathAbsDiff(diffData, dataPointSub.j)),
                (dataPointSub.O += r),
                dataPointSub.N &&
                  ((e = dataPointSub.j + diffData),
                  RemoveRandomElement(
                    dataPointSub.N,
                    e == ZeroConstant
                      ? ZeroConstant
                      : r / dataPointSub.j + diffData
                  )),
                diffData > dataPointSub.M && (dataPointSub.M = diffData),
                diffData < dataPointSub.L && (dataPointSub.L = diffData))
              : (dataPointSub.L = dataPointSub.M = diffData),
            (dataPointSub.j = diffData);
        },
        ConstructDataPointType1 = function (
          differenceFunction,
          thresholdConditionFunction,
          eventTypeArray,
          ExtraCondition,
          eventExtraData,
          i,
          u,
          a
        ) {
          return (
            void 0 === i && (i = 2),
            {
              v: differenceFunction,
              h: ExtraCondition,
              l: eventExtraData,
              g: eventTypeArray,
              _: Array(i),
              P: thresholdConditionFunction,
              W: 0,
              o: i,
              G: ConstructDataPointType2(u, a),
            }
          );
        },
        UpdateDataPoint = function (dataPoint, eventData) {
          var r;
          (dataPoint.g && ArraySearch(dataPoint.g, eventData.H) < ZeroConstant) || // event types verification
            (dataPoint.h && !dataPoint.h(eventData)) || // extraCondition
            (dataPoint.P && !dataPoint.W && (dataPoint.W = 1),
            CircularBufferUpdate(dataPoint, eventData),
            dataPoint.l && !dataPoint.l(dataPoint)) || // extraEventData
            (dataPoint.P && dataPoint.P.apply(NullConstant, dataPoint._) // thresholdConditionFunction
              ? (dataPoint.W++, void 0)
              : ((data = dataPoint.v.apply(NullConstant, dataPoint._)),
                IsVarNumerical(data) && UpdateDataPointSub(dataPoint.G, data)));
        },
        DataPointSubConstructor = function (n) {
          (n._ = Array(n.o)),
            (n.G = ConstructDataPointType2(!!n.G.N, n.G.A.T)),
            (n.W = 0);
        },
        str_input = function (r) {
          return function (n, t) {
            if (n && t) return n.D - t.D > r;
          };
        },
        TimeDiffExceedsMax500 = str_input(TIME_DIFF_THRESHOLD),
        TimeDiffExceeds1000 = str_input(1e3),
        GetIsSpecialEditorKeyCritera = function (n, t) {
          var r;
          if (n && t)
            return (
              ArraySearch(IsSpecialEditingKeyArr, n.F) >= ZeroConstant ||
              ArraySearch(IsSpecialEditingKeyArr, t.F) > ZeroConstant ||
              !!((r = EventArrLookup(UNK_CONST_1)) && r.D > t.D) ||
              void 0
            );
        },
        /*
        n.O/n.p-1
        */
        divNegativeDivisor = function (n) {
          return 1 < n.p
            ? roundToDecimalPlaces(MathDiv(n.O, n.p - 1))
            : NullConstant;
        },
        /*
        n.B / n.p
        */
        divAndRoundDataPoint = function (n) {
          return roundToDecimalPlaces(MathDiv(n.B, n.p));
        },
        GetDataMedianRounded = function (n) {
          return roundToDecimalPlaces(InterpolatingArrayIndexerObjectHelper(n.A)); // get midpoint
        },
        GetDataMidpointRounded2 = function (n) {
          return (
            n.N &&
            roundToDecimalPlaces(InterpolatingArrayIndexerObjectHelper(n.N))
          );
        },
        GetDataAbsoluteDeviation = function (n) {
          return roundToDecimalPlaces(MedianAbsoluteDeviationCalculator(n.A));
        },
        GetMedianAbsoluteDeviationCalculator2 = function (n) {
          return (
            n.N && roundToDecimalPlaces(MedianAbsoluteDeviationCalculator(n.N))
          );
        },
        GetRoundedDataPointValue = function (n) {
          return roundToDecimalPlaces(n.B);
        },
        UpdateSomeMouseEvents = function (n) {
          var t, r, e;
          (n.U ||
            !(e = EventArrLookup(MOUSE_EVENT_CATEGORY)) ||
            n.D - e.D > TIME_DIFF_THRESHOLD) &&
            (UpdateDataPoint(DataPoint_Mouse_Deviation, n),
            (e = GetDataAbsoluteDeviation(DataPoint_Mouse_VectorDiff.G)),
            IsVarNumerical(e) && UpdateDataPointSub(DataPointMouseVectorDiffDeviation, e),
            (t = GetDataMedianRounded(DataPoint_Mouse_VectorDiff.G)),
            IsVarNumerical(t) && UpdateDataPointSub(DataPointMouseVectorDiffMedian, t),
            (r = GetMedianAbsoluteDeviationCalculator2(
              DataPoint_Mouse_VectorDiff.G
            )),
            IsVarNumerical(r) &&
              UpdateDataPointSub(DataPoint_mouse_VectorDiff_Deviation, e),
            (r = GetDataMidpointRounded2(DataPoint_Mouse_VectorDiff.G)),
            IsVarNumerical(r) &&
              UpdateDataPointSub(DataPoint_mouse_VectorDiff_Median, t),
            (e = GetRoundedDataPointValue(DataPoint_Mouse_VectorDiff.G)),
            IsVarNumerical(e) &&
              UpdateDataPointSub(DataPoint_mouse_VectorDiff_Rounded, e),
            (r = GetRoundedDataPointValue(DataPoint_Mouse_TimeDiff.G)),
            IsVarNumerical(r) &&
              UpdateDataPointSub(DataPoint_mouse_TimeDiff_Rounded, r),
            IsVarNumerical(e) &&
              IsVarNumerical(r) &&
              0 < r &&
              UpdateDataPointSub(DataPoint_mouse_ChangeSpeed, e / r),
            DataPointSubConstructor(DataPoint_Mouse_VectorDiff),
            DataPointSubConstructor(DataPoint_Mouse_TimeDiff));
        },
        hi = /[a-zA-Z]/,
        di = /\d/,
        str_touches = "touches",
        str_rotationRate = "rotationRate",
        SerializeMouseEventInfo = function (exInfo, t) {
          var r, e;
          t && ((r = t.clientX), (e = t.clientY)),
            (exInfo.C = IsVarNotVoidOrNull(r) ? r : NullConstant),
            (exInfo.k = IsVarNotVoidOrNull(r) ? e : NullConstant);
        },
        yi = ht,
        Hi = function (n, t, r) {
          return r[t].t === EVENT_ORIENTATION_EVENT ? n : GetDocument(n);
        },
        DataEventListener = function (n, event, eventTypes, e, c) {
          var i = e,
            u = c,
            a = (function (event, date, r) {
              var EventType = ArraySearch(EventTypeArray, event && event.type),
                ExInfo = { eventType: EventType, D: date };
              switch (EVENT_UNK_DICTIONARY[EventType].t) {
                case EVENT_MOUSE_EVENT:
                  // exInfo.C = X
                  // exInfo.k = Y
                  // exInfo.F = button
                  SerializeMouseEventInfo(ExInfo, event),
                    (ExInfo.F = event.button);
                  break;
                case EVENT_KEY_EVENT:
                  // ExInfo.V = event.keyCode || event.which
                  // ExInfo.Y = event.code
                  // ExInfo.F = ExInfo.Y || ExInfo.V (final keycode)
                  // ExInfo.Z = event.key again
                  //ExInfo.S = Character type
                  (ExInfo.V = IsVarNotVoidOrNull(event.keyCode)
                    ? event.keyCode
                    : event.which),
                    (ExInfo.Y = event.code),
                    (ExInfo.F = IsVarNotVoidOrNull(ExInfo.Y)
                      ? ExInfo.Y
                      : IsVarNotVoidOrNull(ExInfo.V)
                      ? ExInfo.V + ""
                      : NullConstant),
                    (ExInfo.Z = IsVarNotVoidOrNull(event.key)
                      ? event.key
                      : IsVarNotVoidOrNull(ExInfo.V)
                      ? String.fromCharCode(ExInfo.V)
                      : NullConstant),
                    (ExInfo.S =
                      ((data = ExInfo.Z), // i = event Key
                      !IsVarNotVoidOrNull(data) || 1 < data.length // event key is valid
                        ? CHAR_INVALID
                        : hi.test(data)
                        ? CHAR_LETTER
                        : di.test(data)
                        ? CHAR_DIGIT
                        : CHAR_INVALID));
                  break;
                case EVENT_WHEEL_EVENT:
                  // ExInfo.C = event.deltaX
                  // ExInfo.k = event.deltaY
                  // ExInfo.q = deltaZ
                  (ExInfo.C = event.deltaX),
                    (ExInfo.k = event.deltaY),
                    (ExInfo.q = event.deltaZ);
                  break;
                case EVENT_TOUCH_EVENT:
                  // exInfo.C = X
                  // exInfo.k = Y
                  // exInfo.R = touchCount
                  var data = event[str_touches];
                  IsVarNotVoidOrNull(data) &&
                    (SerializeMouseEventInfo(ExInfo, data[0]),
                    (ExInfo.R = data.length));
                  break;
                case EVENT_ORIENTATION_EVENT:
                  //exInfo.C = alpha
                  //exinfo.k = beta
                  //exInfo.q = gamma
                  data = event[str_rotationRate];
                  data
                    ? ((ExInfo.C = data.alpha),
                      (ExInfo.k = data.beta),
                      (ExInfo.q = data.gamma))
                    : (ExInfo.C = ExInfo.k = ExInfo.q = NullConstant);
              }
              r && r.pEv(ExInfo, event);
              EventType = EventArrLookup(UNK_CONST_3);
              return (
                EventType &&
                  EventType.H != ExInfo.eventType &&
                  (EventType.U = !0),
                ExInfo
              );
            })(event, GetCurrentDate(), u),
            o = a,
            f = i,
            i = u,
            _ = o.eventType;
          if (IsVarNumerical(_)) {
            var s = f[_],
              u = EventArrLookup(UNK_CONST_3);
            switch ((UpdateDataPoint(DataPoint_Universal, o), s.t)) {
              case EVENT_KEY_EVENT:
                IsVarNotVoidOrNull(o.F) // key
                  ? (UpdateDataPoint(DataPoint_Mouse_TimeDiff_KeyDownUp_1000, o),
                    UpdateDataPoint(DataPoint_Key_KeysSameTimeDiff_1000, o),
                    UpdateDataPoint(DataPoint_Key_TimmeDiff_ClickDown, o),
                    UpdateDataPoint(DataPoint_Key_TimeDiff_SpecialKey_DownUp, o),
                    UpdateDataPoint(DataPoint_Key_TimeDiff_SpecialKey_Down, o),
                    UpdateDataPoint(DataPoint_Key_TimeDiff_SpecialKey_Up, o),
                    UpdateDataPoint(DataPoint_Key_TimeDiff_SpecialKey_UpDown, o),
                    UpdateDataPoint(DataPoint_KeyTimeDiff_LetterLetter, o),
                    UpdateDataPoint(DataPoint_KeyTimeDiff_LetterDigit, o),
                    UpdateDataPoint(DataPoint_KeyTimeDiff_DigitInvalid, o),
                    UpdateDataPoint(DataPoint_KeyTimeDiff_DoubleInvalid, o),
                    UpdateDataPoint_Count(BackspaceCount, o))
                  : UpdateDataPoint_Count(KeyDownCount, o);
                break;
              case EVENT_ORIENTATION_EVENT:
                UpdateDataPoint(OrientationDataPoint, o);
                break;
              case EVENT_WHEEL_EVENT:
                UpdateDataPoint_Count(WheelDataPointCounter, o);
                break;
              case EVENT_TOUCH_EVENT:
                s.u
                  ? (UpdateDataPoint(DataPoint_Touch_TimeDifference_500, o),
                    UpdateDataPoint(DataPoint_Touch_AngleVector, o),
                    UpdateDataPoint(DataPoint_Touch_VectorDiff, o))
                  : (UpdateDataPoint(DataPoint_Touch_TimeDiff_StartEndCancel, o),
                    UpdateDataPoint(DataPoint_Touch_Sequential_TimeDiff, o),
                    UpdateDataPoint_Count(NotTouchCount, o));
                break;
              case EVENT_MOUSE_EVENT:
                s.u &&
                  (UpdateDataPoint(
                    DataPoint_Mouse_TimeDifference_Threshold500,
                    o
                  ),
                  UpdateDataPoint(DataPoint_Mouse_AngleVector_500, o),
                  UpdateDataPoint(DataPoint_Mouse_VectorDiff_Threshold500, o),
                  UpdateDataPoint(DataPoint_Mouse_VectorAngle, o),
                  UpdateDataPoint(DataPoint_Mouse_VectorAngle_500, o),
                  UpdateSomeMouseEvents(o),
                  UpdateDataPoint(DataPoint_Mouse_VectorDiff, o),
                  UpdateDataPoint(DataPoint_Mouse_TimeDiff, o)),
                  f[_].i &&
                    (UpdateDataPoint(DataPoint_Mouse_TimeDiff_MouseDownUp, o),
                    UpdateDataPoint(DataPoint_Mouse_Click_TimeDiff, o),
                    UpdateDataPoint(DataPoint_Key_TimmeDiff_ClickDown, o));
            }
            i && i.rEv(o),
              s.t != EVENT_KEY_EVENT && UnkArrSet(UNK_CONST_1, o),
              u &&
                IsVarNumerical(u.H) &&
                u.U &&
                (i = f[u.H]).t == EVENT_MOUSE_EVENT &&
                i.u &&
                UpdateSomeMouseEvents(u),
              s.t == EVENT_MOUSE_EVENT &&
                s.u &&
                (UnkArrSet(MOUSE_EVENT_CATEGORY, o),
                EventArrLookup(UNK_CONST_0) ||
                  (UnkArrSet(UNK_CONST_0, o),
                  UpdateDataPoint(DataPoint_Mouse_Deviation, o))),
              UnkArrSet(UNK_CONST_3, o);
          }
          var v,
            h,
            i = a;
          yi(),
            (u = n),
            (a = eventTypes),
            (h = (v = e)[(i = i.H)]),
            void (
              EventValueArray[i]++ >= (h.u ? ic : cc) && ir(Hi(u, i, v), a[i], Sn)
            );
        },
        wi = "granted",
        bi = ["accelerometer", "gyroscope", "magnetometer"],
        Ei = !1,
        Di = 300,
        Ci = 10,
        t = 8,
        ki = t - 1,
        qi = mathModule["pow"](2, ki),
        xi = mathModule["pow"](2, t) - 1,
        Fi = (xi - qi) / (13 - ki),
        scaleAndCapValue = function (n) {
          return n < qi
            ? n
            : mathModule["min"](
                xi,
                mathModule["floor"](
                  (mathModule["log"](n) * Math.LOG2E - ki) * Fi + qi
                )
              );
        },
        /**
         * Derives a modified key and performs XOR operation on the data.
         * @param {string} key - Original key in hex string format.
         * @param {number} keySlice - Number of characters to slice from the key.
         * @param {string} rotateKey - Rotation value in hex string format.
         * @param {string} data - Data to be processed in hex string format.
         * @returns {string} - The result of the XOR operation.
         */
        deriveKeyAndXor = function (key, keySlice, rotateKey, data) {
          // Slice the key to the specified length
          let c = key.slice(0, keySlice).split("");
  
          // Parse the rotateKey from hex to integer
          const rotation = parseInt(rotateKey, 16);
  
          // Get the length of the sliced key
          const length = c.length;
  
          // Rotate the sliced key by the specified amount
          c.unshift(...c.splice(rotation % length, length));
  
          // Join the rotated key into a string
          const modifiedKey = c.join("");
  
          // Perform the XOR operation using lr (assuming lr is defined elsewhere)
          return lr(data, modifiedKey);
        },
        Ii = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        B64UrlEncode = function (n, t) {
          var r = (function (n, t) {
            if (n.btoa) return n.btoa(t);
            for (
              var r, e, c = String(t), i = 0, u = Ii, a = "";
              c.charAt(0 | i) || ((u = "="), i % 1);
              a += u.charAt(63 & (r >> (8 - (i % 1) * 8)))
            ) {
              if (((e = c.charCodeAt((i += 3 / 4))), ft < e)) return NullConstant;
              r = (r << 8) | e;
            }
            return a;
          })(n, t);
          return null == r
            ? null
            : r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        },
        r = 4,
        str_input = 3,
        t =
          ((CustomFloat.prototype.e = function (n) {
            var t = (function (n) {
                var t = 2,
                  r = ZeroConstant,
                  e = ZeroConstant;
                if (0 === n)
                  return { s: ZeroConstant, m: ZeroConstant, e: ZeroConstant };
                for (n < ZeroConstant && ((r = 1), (n = -n)); t <= n; )
                  (n /= t), e++;
                for (; n < 1; ) (n *= t), e--;
                return { s: r, m: n, e: e };
              })(n),
              r = ((r = t.e), (e = (1 << this.exp) - 1), mathModule["min"](r, e)),
              e = (function (n, t) {
                var r = n - mathModule["floor"](n),
                  e = ZeroConstant;
                if (0 < r)
                  for (var c = 1, i = r; !(0 === i || t < c); ) {
                    i *= 2;
                    var u = mathModule["floor"](i);
                    (e |= u << (t - c)), (i -= u), c++;
                  }
                return e;
              })(t.m, this.man);
            return (r << this.man) | e;
          }),
          (CustomFloat.prototype.d = function (n) {
            var t = (n >> this.man) & this.a,
              r = n & this.b,
              e = this.man;
            return (r / mathModule["pow"](2, e) + 1) * mathModule["pow"](2, t);
          }),
          CustomFloat);
      function CustomFloat(n, t) {
        (this.exp = n),
          (this.man = t),
          (this.a = (1 << n) - 1),
          (this.b = (1 << t) - 1);
      }
      var MaxRecursionLimit,
        p,
        Bi,
        Oi,
        Li,
        Mi,
        Ni,
        zi,
        Pi,
        Wi,
        Gi,
        Ui,
        Qi = new t(r, str_input), // CustomFloat
        Vi = new t(r - 2, str_input + 1), // CustomFloat2
        maxUint16 = mathModule["pow"](2, 16),
        encodeTimestampToHex = function (n) {
          var t = mathModule["floor"](n / 1e3 - vt),
            t = mathModule["max"](mathModule["min"](t, 268435455), 0);
          return bytesToHexString([t >> 24, t >> 16, t >> 8, t]);
        },
        xorAndAppendKey = function (n, t) {
          return xorHexStrings(n.slice(1), t) + t;
        },
        Hash32 = function (n, t) {
          for (
            var r,
              e = 3 & n.length,
              c = n.length - e,
              i = t,
              u = 3432918353,
              a = 461845907,
              o = 0,
              f = 0;
            o < c;
  
          )
            (f =
              (255 & n.charCodeAt(o)) |
              ((255 & n.charCodeAt(++o)) << 8) |
              ((255 & n.charCodeAt(++o)) << 16) |
              ((255 & n.charCodeAt(++o)) << 24)),
              ++o,
              (i =
                (65535 &
                  (r =
                    (5 *
                      (65535 &
                        (i =
                          ((i ^= f =
                            ((65535 &
                              (f =
                                ((f =
                                  ((65535 & f) * u +
                                    ((((f >>> 16) * u) & 65535) << 16)) &
                                  4294967295) <<
                                  15) |
                                (f >>> 17))) *
                              a +
                              ((((f >>> 16) * a) & 65535) << 16)) &
                            4294967295) <<
                            13) |
                          (i >>> 19))) +
                      (((5 * (i >>> 16)) & 65535) << 16)) &
                    4294967295)) +
                27492 +
                ((((r >>> 16) + 58964) & 65535) << 16));
          switch (((f = 0), e)) {
            case 3:
              f ^= (255 & n.charCodeAt(o + 2)) << 16;
            case 2:
              f ^= (255 & n.charCodeAt(o + 1)) << 8;
            case 1:
              i ^= f =
                ((65535 &
                  (f =
                    ((f =
                      ((65535 & (f ^= 255 & n.charCodeAt(o))) * u +
                        ((((f >>> 16) * u) & 65535) << 16)) &
                      4294967295) <<
                      15) |
                    (f >>> 17))) *
                  a +
                  ((((f >>> 16) * a) & 65535) << 16)) &
                4294967295;
          }
          return (
            (i =
              (2246822507 * (65535 & (i = (i ^= n.length) ^ (i >>> 16))) +
                (((2246822507 * (i >>> 16)) & 65535) << 16)) &
              4294967295),
            ((i =
              (3266489909 * (65535 & (i ^= i >>> 13)) +
                (((3266489909 * (i >>> 16)) & 65535) << 16)) &
              4294967295) ^
              (i >>> 16)) >>>
              0
          );
        },
        str_bluetooth = "bluetooth",
        CONST_ONE__ = 1,
        str_castle = "Castle",
        cid_cookie = "__cid",
        ctst_cookie = "__ctst",
        xArray = Array(1024).join("x"),
        r = "Castle: ",
        cu = r + "missing or wrong publishableKey",
        iu = r + "missing user or event data",
        uu = r + "missing configuration",
        au = _(1970),
        ou = 500,
        fu = 100,
        strGoogleInc = "Google Inc.",
        strAppleComputer = "Apple Computer, Inc.",
        vu = {
          J: !1,
          $: !0,
          CastleMonitorURL: "//m.castle.io/v1/monitor",
          X: 1e3,
          CastleCookieData: { tn: "__cuid", rn: 3456e4 },
          en: !0,
          PK: undefined,
        },
        GetCastleData = function () {
          return vu;
        },
        hu = function (n) {
          var t = GetCastleData();
          t.cn && t.cn(n);
        },
        RunAndCatch = function (n) {
          try {
            return n();
          } catch (t) {
            hu(t);
          }
        },
        du = "Yxskaftbud, ge vår WC-zonmö IQ-hjälp. ",
        lu = "canvas",
        gu = "13pt bogus-font-xxx",
        pu = "16pt Arial",
        yu = "rgba(102, 204, 0, 0.6123456789)",
        Hu = "evenodd",
        mu = "2d",
        wu = "webgl",
        bu = "experimental-",
        Eu = "WEBGL_debug_renderer_info",
        Du = "alphabetic",
        Cu = "multiply",
        ku = "getImageData",
        CONST_2PI = 2 * Math.PI,
        xu = [
          ["#f0f", 50, 50],
          ["#0ff", 100, 50],
          ["#f70", 75, 100],
        ],
        Fu = function (n) {
          return !!(n && n.getContext && n.toDataURL);
        },
        ContentToHash = function (n) {
          var t = n.toDataURL();
          if (t) return Hash32(t).toString(16);
        },
        SetFillStyle = function (n, t) {
          n.fillStyle = t;
        },
        Iu = function (n, t, r, e, c) {
          n.fillRect(t, r, e, c);
        },
        FillTextHelper = function (n, t, r, e) {
          n.fillText(t, r, e);
        },
        SetFont = function (n, t) {
          n.font = t;
        },
        SetDimensions = function (n, t, r) {
          (n.width = t), (n.height = r);
        },
        DrawCircle = function (n, t, r, e, c) {
          n.arc(75, 75, 75, 0, CONST_2PI, !0);
        },
        FillThing = function (n, t) {
          t ? n.fill(t) : n.fill();
        },
        Lu = 8,
        Mu = 255,
        Nu = {
          willReadFrequently: !0,
          desynchronized: !0,
        },
        zu = function () {
          return RandWithMax(256);
        },
        str_systemXDPI = "systemXDPI",
        str_logicalXDPI = "logicalXDPI",
        str_devicePixelRatio = "devicePixelRatio",
        NegativeErrorLength = (function () {
          var n = [].constructor;
          try {
            (-1).toFixed(-1);
          } catch (t) {
            return StrLen(t.message) + StrLen((n + "").split(n.name).join(""));
          }
        })(),
        IsChromium_BasedOnNegativeError = 80 == NegativeErrorLength,
        NegativeError_Firefox = 58 == NegativeErrorLength,
        NegativeError_Unk = 77 == NegativeErrorLength,
        str_accentColorInitial = "accent-color: initial",
        str_appearanceInitial = "appearance: initial",
        $u = "background-color: ActiveText",
        Ku = "border-end-end-radius: initial",
        callSelenium = "callSelenium",
        str_canShare = "canShare",
        ta = "(prefers-color-scheme: light)",
        str_ContactsManager = "ContactsManager",
        str_ContentIndex = "ContentIndex",
        ca = "denied",
        domAutomation = "domAutomation",
        str_downlinkMax = "downlinkMax",
        str_driver = "driver",
        str_evaluate = "evaluate",
        str_getVideoPlaybackQuality = "getVideoPlaybackQuality",
        _a = "HeadlessChrome",
        str_getHighEntropyValues = "getHighEntropyValues",
        str_webdriver = "webdriver",
        str_nightmare = "nightmare",
        str_pdfViewerEnabled = "pdfViewerEnabled",
        str_input = "callPhantom",
        t = "_phantom",
        r = "__phantomas",
        la = "rgb",
        str_script_fn = "script_fn",
        str_script_func = "script_func",
        Str_seleniu = "selenium",
        Str_Selenium_IDE_Recorder = "Selenium_IDE_Recorder",
        Str_Sequentumm = "Sequentum",
        str_share = "share",
        str_swiftShader = "SwiftShader",
        str_unwrapped = "unwrapped",
        str_Trace = "Trace",
        str_CanvasBlocker = "CanvasBlocker",
        strChameleon = "Chameleon",
        str_DuckDuckGo = "DuckDuckGo",
        str_PrivacyBadger = "Privacy Badger",
        str_PrivacyPossum = "Privacy Possum",
        str_NoScript = "NoScript",
        str_JShelter = "JShelter",
        str_Puppeteer = "puppeteer-extra",
        str_hasAttribute = "hasAttribute",
        str_attributes = "attributes",
        DoesHTMLElementHaveAttr = function (n, t) {
          return n[str_hasAttribute]
            ? n[str_hasAttribute](t)
            : !(!n[str_attributes][t] || !n[str_attributes][t].specified);
        },
        phantomArray = ["callPhantom", "_phantom", "__phantomas"],
        IsAnyValueTrue = function (n) {
          return -1 < ArraySearch(n, !0);
        },
        GetNavigatorWebDriver = function (n) {
          return GetNavigator(n)[str_webdriver];
        },
        str_maxTouchPoints = "maxTouchPoints",
        str_TouchEvent = "TouchEvent",
        str_touchstart = "touchstart",
        str_input = "input",
        str_videoinput = str_video + str_input,
        str_audioinput = str_audio + str_input,
        CONST_GENERAL_AUDIO = 0,
        CONST_AUDIO_INPUT = 1,
        CONST_VIDEO_INPUT = 2,
        str_enumerateDevices = "enumerateDevices",
        str_mediaDevices = "mediaDevices",
        str_Firefox = "Firefox",
        str_Firefox = "Android",
        GetMediaDevicesWithCallback = function (n, c) {
          var t,
            r,
            e = GetNavigator(n),
            i = [];
          try {
            var u = GetUserAgent(n),
              a = IsSubstr(u, str_Firefox) && IsSubstr(u, str_Firefox),
              o = e[str_mediaDevices];
            o && o[str_enumerateDevices] && !a
              ? ((i = [!1, !1, !1]),
                (t = function (n) {
                  if (n)
                    for (var t = 0, r = n; t < r.length; t++) {
                      var e = r[t].kind;
                      (e !== str_audioinput && e !== str_audio) ||
                        (i[CONST_GENERAL_AUDIO] = !0),
                        e === str_audioinput && (i[CONST_AUDIO_INPUT] = !0),
                        (e !== str_videoinput && e !== str_video) ||
                          (i[CONST_VIDEO_INPUT] = !0);
                    }
                  c(i);
                }),
                void ((r = o[str_enumerateDevices]()) && r.then
                  ? r.then(t, function () {
                      return c(i);
                    })
                  : c(i)))
              : c(i);
          } catch (f) {
            c(i);
          }
        },
        str_getTimezoneOffset = "getTimezoneOffset",
        str_probably = "probably",
        str_maybe = "maybe",
        str_canPlayType = "canPlayType",
        checkMediaPlayability = function (n, t) {
          switch (n[str_canPlayType](t.replace("'", '"'))) {
            case str_probably:
              return 2;
            case str_maybe:
              return 1;
            case "":
              return 0;
            default:
              return 3;
          }
        },
        checkAudioPlayability = function (n, t) {
          return checkMediaPlayability(n, "".concat(str_audio, "/").concat(t));
        },
        checkVideoPlayability = function (n, t) {
          return checkMediaPlayability(n, "".concat(str_video, "/").concat(t));
        },
        t = "ogg",
        r = "wav",
        str_input = "vorbis",
        verPatch = "codecs",
        uo = "".concat(t, "; ").concat(verPatch, '="').concat(str_input, '"'),
        ao = "mpeg",
        oo = "".concat(r, "; ").concat(verPatch, "=1"),
        fo = "x-m4a",
        _o = "aac",
        str_input = "theora",
        r = "avc1.42E01E",
        so = "vp8, vorbis",
        verMinor = "mp4",
        verMajor = "webm",
        oggCodec = 'ogg; codecs="theora"',
        mp4Codec = 'mp4; codecs="avc1.42E01E"',
        webmCodec = 'webm; codecs="vp8, vorbis"',
        KeepIncrementingTillOverflow = function () {
          MaxRecursionLimit++, KeepIncrementingTillOverflow();
        },
        Ho = function () {
          MaxRecursionLimit = 0;
          try {
            KeepIncrementingTillOverflow();
          } catch (n) {
            return {
              un: MaxRecursionLimit,
              an: n.message,
              on: n.name,
              fn: n.stack ? n.stack.toString().length : ZeroConstant,
            };
          }
          return { un: ZeroConstant, an: "", on: "", fn: ZeroConstant };
        },
        mo = function () {
          try {
            return (void 0).b, "";
          } catch (n) {
            return n.message;
          }
        },
        isToSourceSupported = function () {
          try {
            throw "";
          } catch (n) {
            try {
              return n.toSource(), !0;
            } catch (t) {}
          }
          return !1;
        },
        str_MaximumCallStackSizeExceeded = "Maximum call stack size exceeded",
        str_MaximumCallStackSizeExceeded2 = "".concat(
          str_MaximumCallStackSizeExceeded,
          "."
        ),
        str_TooMuchRecursion = "too much recursion",
        Co = "Cannot read property 'b' of undefined",
        ko = "(void 0) is undefined",
        qo = "undefined is not an object (evaluating '(void 0).b')",
        xo = "Cannot read properties of undefined (reading 'b')",
        Str_Error = "Error",
        Str_InternalError = "Internal".concat(Str_Error),
        Str_RangeError = "Range".concat(Str_Error),
        Io = 1,
        DATATYPE_UNK = 2,
        B2H = 3,
        SERIALIZED_BYTE_ARRAY = 4,
        B2H_WITH_CHECKS = 5,
        B2H_ROUNDED = 6,
        JUST_APPEND = 7,
        SerializeByteArrayToHexString = function (n) {
          var t = utf8Encode(n, ft);
          return ByteToHex(t.length) + bytesToHexString(t);
        },
        SerializeStringWithLengthToHex = function (n, t) {
          var r = utf8Encode(n, t),
            e = (function (n) {
              for (var t = 0; 0 != n; ) (n >>= 8), t++;
              return t;
            })(r.length);
          return lt < e
            ? ByteToHex(ZeroConstant)
            : ByteToHex(e) +
                intToFixedSizeHexBE(r.length, e) +
                bytesToHexString(r);
        },
        appendFieldToHexString = function (n, type, val) {
          var e = ByteToHex(((31 & n) << 3) | (7 & type));
          switch (type) {
            case B2H_ROUNDED:
              e += ByteToHex(mathModule["round"](10 * val));
              break;
            case B2H:
              e += ByteToHex(val);
              break;
            case B2H_WITH_CHECKS:
              e +=
                val <= 127
                  ? ByteToHex(val)
                  : intToFixedSizeHexBE((1 << 15) | (32767 & val), 2);
              break;
            case SERIALIZED_BYTE_ARRAY:
              e += SerializeByteArrayToHexString(val);
              break;
            case DATATYPE_UNK:
            case Io:
              break;
            case JUST_APPEND:
              e += val;
          }
          return e;
        },
        FP_PlatformEnum = 0,
        FP_VendorEnum = 1,
        FP_Language = 2,
        FP_DeviceMemory = 3,
        FP_ScreenDims = 4,
        FP_ScreenDepth = 5,
        FP_HardwareConcurrency = 6,
        FP_ScreenPixelRatio = 7,
        FP_TimezoneVsDst = 8,
        FP_MimeTypesHash = 9,
        FP_PluginsHash = 10,
        FP_BrowserFeaturesBitfield = 11,
        FP_UserAgent = 12,
        FP_FontRenderHash = 13,
        FP_MediaInputAvailableBitfield = 14,
        FP_DoNotTrackPreference = 15,
        FP_JavaEnabled = 16,
        FP_ProductSubEnum = 17,
        FP_CircleRenderHash = 18,
        FP_GraphicsCard = 19,
        FP_EpochLocaleStr = 20,
        FP_WebDriverDetectionFlags = 21,
        FP_Eval_ToString_Length = 22,
        FP_NavigatorBuildID = 23,
        FP_MaxRecursionLimit = 24,
        FP_MaxRecursionLimitErrorMessageEnum = 25,
        FP_MaxRecursionLimitErrorNameEnum = 26,
        FP_RecursionStackTraceStrLen = 27,
        FP_TouchMetricData = 28,
        FP_UndefinedCallErrEnum = 29, // "Cannot read property 'b' of undefined", "(void 0) is undefined", "undefined is not an object (evaluating '(void 0).b')", "Cannot read properties of undefined (reading 'b')"
        FP_NavigatorPropertiesHash = 30,
        FP_CodecPlayabilityBitfield = 31,
        FP_ConstantOne = 0,
        FP2_TimeZone = 1,
        FP2_LanguageArray = 2,
        FP2_PrivacyBlockerString = 5,
        FP2_ExpectedPropertyStringsFoundCount = 6,
        FP2_CastleDataBitField = 10,
        FP2_BraveDetector2 = 11,
        FP2_NegativeErrorLength = 12,
        FP2_HtmlFeatureCheck = 13,
        FP2_IsPlatformEmpty = 14,
        FP2_NotificationPermission = 15,
        FP2_JSCheckForWorkerDifferences = 16,
        FP2_ChromeFeatureSet = 17,
        FP2_DeviceLogicExpected = 18,
        FP2_AdBlockerHash = 19,
        FP2_ListenerInputBoxTypeBitField = 20,
        FP2_ClassPropertiesCount = 21,
        FP2_UserLocale2 = 22,
        SetCookieHelper = function (n, cookie_name, cookie_val, e) {
          try {
            var c = n.localStorage;
            c || e(),
              c.setItem(cookie_name, cookie_val),
              c.getItem(cookie_name) !== cookie_val &&
                (c.removeItem(cookie_name), e());
          } catch (i) {
            e();
          }
        },
        CastleDataCopy = {
          throttling: !1,
          avoidCookies: !1,
          localStorage: !1,
          ctstCookieGenerated: !1,
        },
        Nf =
          "height:100vh;width:100vw;position:absolute;left:-10000px;visibility:hidden;",
        zf = "".concat(ut, ".").concat(Yn),
        Pf = "".concat(str_Permissions, ".").concat(f),
        Wf = function (n) {
          return new Proxy(n, {});
        },
        AllHTMLPropertyStrings = {},
        str_ObjectToStringIncompatibleProxy =
          "object toString|toString incompatible proxy",
        y = function (n) {
          return "failed " + n;
        },
        Qf =
          ((Li = {}),
          {
            vn: function () {
              return Li;
            },
            hn: function (n, t) {
              var r,
                e,
                c = IsValueArray(t);
              return Li[n]
                ? c
                  ? (Li[n] =
                      ((e = t),
                      (r = Li[n]) || e ? (e ? (r ? r.concat(e) : e) : r) : []))
                  : Li[n].push(t)
                : (Li[n] = c ? t : [t]);
            },
          }),
        Vf = Qf.hn,
        Yf = Tr(),
        m = function (n) {
          var t = n.dn,
            r = n.ln,
            e = n.gn;
          try {
            throw ((p = t()), Error());
          } catch (c) {
            return GetTypeName(c) != str_TypeError || (!!r && r(c));
          } finally {
            e && e();
          }
        },
        Zf = function (n) {
          var t = {};
          return (
            (t["function ".concat(n, "() { ").concat(Wn, " }")] = !0),
            (t["function get ".concat(n, "() { ").concat(Wn, " }")] = !0),
            (t["function () { ".concat(Wn, " }")] = !0),
            (t[
              "function "
                .concat(n, "() {")
                .concat("\n", "    ")
                .concat(Wn)
                .concat("\n", "}")
            ] = !0),
            (t[
              "function get "
                .concat(n, "() {")
                .concat("\n", "    ")
                .concat(Wn)
                .concat("\n", "}")
            ] = !0),
            (t[
              "function () {".concat("\n", "    ").concat(Wn).concat("\n", "}")
            ] = !0),
            t
          );
        },
        Jf = function (n, t, r) {
          return 0 === (r = void 0 === r ? 1 : r)
            ? t.test(n.message)
            : t.test(n.stack.split("\n")[1]);
        },
        t = "at ".concat(ut, "\\.").concat(Yn, " "),
        $f = new RegExp(t),
        str_input = "at Object\\.".concat(Yn),
        Kf = new RegExp(str_input),
        verMinor = "Symbol.hasInstance",
        r = "at (".concat(ut, "\\.)?\\[").concat(verMinor, "\\]"),
        Xf = new RegExp(r),
        verMajor = "Proxy",
        verPatch = "at (".concat(verMajor, "\\.)?\\[").concat(verMinor, "\\]"),
        n_ = new RegExp(verPatch),
        so = "strict mode",
        t_ = new RegExp(so),
        r_ = "illegal error",
        e_ = "undefined properties",
        c_ = "call interface error",
        i_ = "apply interface error",
        u_ = "new instance error",
        a_ = "class extends error",
        o_ = "null conversion error",
        f_ = Yn,
        __ = '"prototype" in function',
        s_ = "descriptor",
        v_ = "own property",
        h_ = "descriptor keys",
        d_ = "own property names",
        l_ = "own keys names",
        g_ = "object toString error",
        p_ = "at incompatible proxy error",
        y_ = "at toString incompatible proxy error",
        H_ = "at too much recursion error",
        m_ = "at too much recursion __proto__ error",
        w_ = "at chain cycle error",
        b_ = "at chain cycle __proto__ error",
        E_ = "at reflect set proto",
        D_ = "at reflect set proto proxy",
        C_ = "at instanceof check error",
        k_ = "at define properties",
        q_ = "descriptor.value undefined",
        x_ = "prototype test execution",
        F_ = /\s(.+)\]/,
        R_ = /get\s/,
        S_ = /^(screen|navigator)$/i,
        I_ = "constructor",
        T_ = "length,name",
        j_ = function (n, apFn, t, r, e) {
          var c,
            i,
            u,
            a,
            o,
            f,
            _,
            s,
            v = n.self,
            h = Gn in v;
          return IsFunction(apFn)
            ? ((c = apFn.name.replace(R_, "")),
              (i = null == r ? void 0 : r.name),
              (u = GetPrototypeOf(apFn)),
              ((s = {})[y(r_)] =
                !!r &&
                m({
                  dn: function () {
                    return r.prototype[c];
                  },
                })),
              (s[y(e_)] =
                !!r &&
                S_.test(i) &&
                !!(
                  GetOwnPropertyDescriptor(v[ToLower(i)], c) ||
                  (h && v[Gn][str_getOwnPropertyDescriptor](v[ToLower(i)], c))
                )),
              (s[y(c_)] = m({
                dn: function () {
                  (p = new apFn()), apFn.call(t);
                },
              })),
              (s[y(i_)] = m({
                dn: function () {
                  (p = new apFn()), apFn.apply(t);
                },
              })),
              (s[y(u_)] = m({
                dn: function () {
                  return new apFn();
                },
              })),
              (s[y(o_)] = m({
                dn: function () {
                  return ObjectType[str_setPrototypeOf](
                    apFn,
                    NullConstant
                  ).toString();
                },
                gn: function () {
                  return ObjectType[str_setPrototypeOf](apFn, u);
                },
              })),
              (s[y(f_)] =
                !Zf(c)[n[ut][str_prototype].toString.call(apFn)] ||
                !Zf(Yn)[n[ut][str_prototype].toString.call(apFn.toString)]),
              (s[y(__)] = str_prototype in apFn),
              (s[y(s_)] = !!(
                GetOwnPropertyDescriptor(apFn, Qn) ||
                n[Gn][str_getOwnPropertyDescriptor](apFn, Qn) ||
                GetOwnPropertyDescriptor(apFn, Vn) ||
                n[Gn][str_getOwnPropertyDescriptor](apFn, Vn) ||
                GetOwnPropertyDescriptor(apFn, str_prototype) ||
                n[Gn][str_getOwnPropertyDescriptor](apFn, str_prototype) ||
                GetOwnPropertyDescriptor(apFn, Yn) ||
                n[Gn][str_getOwnPropertyDescriptor](apFn, Yn)
              )),
              (s[y(v_)] = !!(
                hasOwnPropertySafe(apFn, Qn) ||
                hasOwnPropertySafe(apFn, Vn) ||
                hasOwnPropertySafe(apFn, str_prototype) ||
                hasOwnPropertySafe(apFn, Yn)
              )),
              (s[y(h_)] = GetKeys(ObjectType[tt](apFn)).sort().toString() != T_),
              (s[y(d_)] = GetOwnPropretyNames(apFn).sort().toString() != T_),
              (s[y(l_)] = h && v[Gn].ownKeys(apFn).sort().toString() != T_),
              (s[y(g_)] =
                m({
                  dn: function () {
                    return ObjectType.create(apFn).toString();
                  },
                  ln: function (n) {
                    return IsChromium_BasedOnNegativeError && !Jf(n, $f);
                  },
                }) ||
                m({
                  dn: function () {
                    return ObjectType.create(Wf(apFn)).toString();
                  },
                  ln: function (n) {
                    return IsChromium_BasedOnNegativeError && !Jf(n, Kf);
                  },
                })),
              (s[y(p_)] = m({
                dn: function () {
                  (p = apFn.arguments), (p = apFn.caller);
                },
                ln: function (n) {
                  return NegativeError_Firefox && !Jf(n, t_, 0);
                },
              })),
              (s[y(y_)] = m({
                dn: function () {
                  (p = apFn.toString.arguments), (p = apFn.toString.caller);
                },
                ln: function (n) {
                  return NegativeError_Firefox && !Jf(n, t_, 0);
                },
              })),
              (s[y(H_)] = m({
                dn: function () {
                  return ObjectType[str_setPrototypeOf](
                    apFn,
                    ObjectType.create(apFn)
                  ).toString();
                },
                gn: function () {
                  return ObjectType[str_setPrototypeOf](apFn, u);
                },
              })),
              (_ = s),
              (c == Yn || e[zf] || e[Pf]) &&
                ((a = Wf(apFn)),
                (o = Wf(apFn)),
                (f = Wf(apFn)),
                (_ = kt(
                  _,
                  (((i = {})[y(m_)] = !m({
                    dn: function () {
                      (apFn.__proto__ = proxy), apFn++;
                    },
                    gn: function () {
                      return ObjectType[str_setPrototypeOf](apFn, u);
                    },
                  })),
                  (i[y(w_)] = !m({
                    dn: function () {
                      return ObjectType[str_setPrototypeOf](
                        a,
                        ObjectType.create(a)
                      ).toString();
                    },
                    gn: function () {
                      return ObjectType[str_setPrototypeOf](a, u);
                    },
                  })),
                  (i[y(b_)] = !m({
                    dn: function () {
                      (o.__proto__ = o), o++;
                    },
                    gn: function () {
                      return ObjectType[str_setPrototypeOf](o, u);
                    },
                  })),
                  (i[y(E_)] =
                    h &&
                    m({
                      dn: function () {
                        throw (
                          ((p = v[Gn][str_setPrototypeOf](
                            apFn,
                            ObjectType.create(apFn)
                          )),
                          (p = Yf in apFn),
                          new TypeError())
                        );
                      },
                      gn: function () {
                        return ObjectType[str_setPrototypeOf](apFn, u);
                      },
                    })),
                  (i[y(D_)] =
                    h &&
                    !m({
                      dn: function () {
                        v[Gn][str_setPrototypeOf](f, ObjectType.create(f)),
                          (p = Yf in f);
                      },
                      gn: function () {
                        return ObjectType[str_setPrototypeOf](f, u);
                      },
                    })),
                  (i[y(C_)] =
                    IsChromium_BasedOnNegativeError &&
                    (m({
                      dn: function () {
                        p = apFn instanceof apFn;
                      },
                      ln: function (n) {
                        return !Jf(n, Xf);
                      },
                    }) ||
                      m({
                        dn: function () {
                          var n = Wf(apFn);
                          p = n instanceof n;
                        },
                        ln: function (n) {
                          return !Jf(n, n_);
                        },
                      }))),
                  (i[y(k_)] =
                    IsChromium_BasedOnNegativeError &&
                    h &&
                    (function () {
                      try {
                        return (
                          ObjectType.defineProperty(apFn, "", {
                            configurable: !0,
                          }).toString(),
                          (p = void v[Gn].deleteProperty(apFn, "")),
                          !1
                        );
                      } catch (n) {
                        return !0;
                      }
                    })()),
                  i)
                ))),
              (s = FilterArray(GetKeys(_), function (n) {
                return _[n];
              })),
              { acc: p, count: s.length, list: s })
            : { count: 0, list: [] };
        },
        A_ = function (_) {
          var s = {};
          return {
            pn: function () {
              return s;
            },
            yn: function (n, t) {
              var u,
                a = t ? t.Hn : undefined,
                o = t ? t.mn : undefined;
              try {
                if (typeof (u = n()) == st || !u) return;
              } catch (f) {
                return;
              }
              var r,
                e,
                c = u.prototype || u,
                c =
                  ((c = GetOwnPropretyNames(c).concat(GetKeys(c))),
                  (r = { boolean: {}, number: {}, string: {} }),
                  (e = []),
                  FilterArray(c, function (n) {
                    var t = typeof n;
                    return t in r
                      ? !hasOwnPropertySafe(r[t], n) && (r[t][n] = !0)
                      : !ArraySearchExists(e, n) && (e.push(n), 1);
                  }));
              forEachCallback(c.sort(), function (n) {
                if (
                  !(
                    n == I_ ||
                    (a && !ArraySearchExists(a, n)) ||
                    ArraySearchExists(o, n)
                  )
                ) {
                  var t = ""
                    .concat(
                      u.name ||
                        (F_.test(u)
                          ? null == (t = F_.exec(u))
                            ? void 0
                            : t[1]
                          : VoidConstant),
                      "."
                    )
                    .concat(n);
                  try {
                    var r = u.prototype || u,
                      e = void 0;
                    try {
                      var c,
                        apFn = r[n];
                      if (IsFunction(apFn))
                        return (
                          (e = j_(_, r[n], r, NullConstant, s)).count &&
                          (Vf(t, e.list), (s[t] = e.list))
                        );
                      if ("name" != n && "length" != n && n[0] !== ToUpper(n[0]))
                        return (c = [y(q_)]), Vf(t, c), (s[t] = c);
                    } catch (f) {}
                    var i = GetOwnPropertyDescriptor(r, n).get;
                    (e = j_(_, i, r, u, s)).count &&
                      (Vf(t, e.list), (s[t] = e.list));
                  } catch (f) {
                    return hu(f), Vf(t, (c = x_)), (s[t] = [c]);
                  }
                }
              });
            },
          };
        },
        B_ = function (n) {
          var t = A_(n),
            r = t.yn,
            r =
              (r(
                function () {
                  return Function;
                },
                { Hn: ["toString"], mn: ["caller", "arguments"] }
              ),
              r(function () {
                return AnalyserNode;
              }),
              r(
                function () {
                  return AudioBuffer;
                },
                { Hn: ["copyFromChannel", "getChannelData"] }
              ),
              r(
                function () {
                  return BiquadFilterNode;
                },
                { Hn: ["getFrequencyResponse"] }
              ),
              r(
                function () {
                  return CanvasRenderingContext2D;
                },
                {
                  Hn: [
                    "getImageData",
                    "getLineDash",
                    "isPointInPath",
                    "isPointInStroke",
                    "measureText",
                    "quadraticCurveTo",
                    "fillText",
                    "strokeText",
                    "font",
                  ],
                }
              ),
              r(
                function () {
                  return CSSStyleDeclaration;
                },
                { Hn: ["setProperty"] }
              ),
              r(
                function () {
                  return CSS2Properties;
                },
                { Hn: ["setProperty"] }
              ),
              r(
                function () {
                  return Date;
                },
                {
                  Hn: [
                    "getDate",
                    "getDay",
                    "getFullYear",
                    "getHours",
                    "getMinutes",
                    "getMonth",
                    "getTime",
                    "getTimezoneOffset",
                    "setDate",
                    "setFullYear",
                    "setHours",
                    "setMilliseconds",
                    "setMonth",
                    "setSeconds",
                    "setTime",
                    "toDateString",
                    "toJSON",
                    "toLocaleDateString",
                    "toLocaleString",
                    "toLocaleTimeString",
                    "toString",
                    "toTimeString",
                    "valueOf",
                  ],
                }
              ),
              r(
                function () {
                  return GPU;
                },
                { Hn: ["requestAdapter"] }
              ),
              r(
                function () {
                  return GPUAdapter;
                },
                { Hn: ["requestAdapterInfo"] }
              ),
              r(
                function () {
                  return Intl.DateTimeFormat;
                },
                {
                  Hn: [
                    "format",
                    "formatRange",
                    "formatToParts",
                    "resolvedOptions",
                  ],
                }
              ),
              r(
                function () {
                  return Document;
                },
                {
                  Hn: [
                    "createElement",
                    "createElementNS",
                    "getElementById",
                    "getElementsByClassName",
                    "getElementsByName",
                    "getElementsByTagName",
                    "getElementsByTagNameNS",
                    "referrer",
                    "write",
                    "writeln",
                  ],
                  mn: ["onreadystatechange", "onmouseenter", "onmouseleave"],
                }
              ),
              r(function () {
                return DOMRect;
              }),
              r(function () {
                return DOMRectReadOnly;
              }),
              r(
                function () {
                  return Element;
                },
                {
                  Hn: [
                    "append",
                    "appendChild",
                    "getBoundingClientRect",
                    "getClientRects",
                    "insertAdjacentElement",
                    "insertAdjacentHTML",
                    "insertAdjacentText",
                    "insertBefore",
                    "prepend",
                    "replaceChild",
                    "replaceWith",
                    "setAttribute",
                  ],
                }
              ),
              r(
                function () {
                  return FontFace;
                },
                { Hn: ["family", "load", "status"] }
              ),
              r(function () {
                return HTMLCanvasElement;
              }),
              r(
                function () {
                  return HTMLElement;
                },
                {
                  Hn: [
                    "clientHeight",
                    "clientWidth",
                    "offsetHeight",
                    "offsetWidth",
                    "scrollHeight",
                    "scrollWidth",
                  ],
                  mn: ["onmouseenter", "onmouseleave"],
                }
              ),
              r(
                function () {
                  return HTMLIFrameElement;
                },
                { Hn: ["contentDocument", "contentWindow"] }
              ),
              r(
                function () {
                  return IntersectionObserverEntry;
                },
                { Hn: ["boundingClientRect", "intersectionRect", "rootBounds"] }
              ),
              r(
                function () {
                  return Math;
                },
                {
                  Hn: [
                    "acos",
                    "acosh",
                    "asinh",
                    "atan",
                    "atan2",
                    "atanh",
                    "cbrt",
                    "cos",
                    "cosh",
                    "exp",
                    "expm1",
                    "log",
                    "log10",
                    "log1p",
                    "sin",
                    "sinh",
                    "sqrt",
                    "tan",
                    "tanh",
                  ],
                }
              ),
              r(
                function () {
                  return MediaDevices;
                },
                { Hn: ["enumerateDevices", "getDisplayMedia", "getUserMedia"] }
              ),
              r(
                function () {
                  return Navigator;
                },
                {
                  Hn: [
                    "appCodeName",
                    "appName",
                    "appVersion",
                    "buildID",
                    "connection",
                    "deviceMemory",
                    "getBattery",
                    "getGamepads",
                    "getVRDisplays",
                    "hardwareConcurrency",
                    "language",
                    "languages",
                    "maxTouchPoints",
                    "mimeTypes",
                    "oscpu",
                    "platform",
                    "plugins",
                    "product",
                    "productSub",
                    "sendBeacon",
                    "serviceWorker",
                    "storage",
                    "userAgent",
                    "vendor",
                    "vendorSub",
                    "webdriver",
                    "gpu",
                  ],
                }
              ),
              r(
                function () {
                  return Node;
                },
                { Hn: ["appendChild", "insertBefore", "replaceChild"] }
              ),
              r(
                function () {
                  return OffscreenCanvas;
                },
                { Hn: ["convertToBlob", "getContext"] }
              ),
              r(
                function () {
                  return OffscreenCanvasRenderingContext2D;
                },
                {
                  Hn: [
                    "getImageData",
                    "getLineDash",
                    "isPointInPath",
                    "isPointInStroke",
                    "measureText",
                    "quadraticCurveTo",
                    "font",
                  ],
                }
              ),
              r(
                function () {
                  return Permissions;
                },
                { Hn: ["query"] }
              ),
              r(
                function () {
                  return Range;
                },
                { Hn: ["getBoundingClientRect", "getClientRects"] }
              ),
              r(
                function () {
                  return Intl.RelativeTimeFormat;
                },
                { Hn: ["resolvedOptions"] }
              ),
              r(function () {
                return Screen;
              }),
              r(
                function () {
                  return n[et];
                },
                { Hn: ["getVoices"] }
              ),
              r(
                function () {
                  return String;
                },
                { Hn: ["fromCodePoint"] }
              ),
              r(
                function () {
                  return StorageManager;
                },
                { Hn: ["estimate"] }
              ),
              r(function () {
                return SVGRect;
              }),
              r(
                function () {
                  return SVGRectElement;
                },
                { Hn: ["getBBox"] }
              ),
              r(
                function () {
                  return SVGTextContentElement;
                },
                {
                  Hn: [
                    "getExtentOfChar",
                    "getSubStringLength",
                    "getComputedTextLength",
                  ],
                }
              ),
              r(function () {
                return TextMetrics;
              }),
              r(
                function () {
                  return WebGLRenderingContext;
                },
                { Hn: ["bufferData", "getParameter", "readPixels"] }
              ),
              r(
                function () {
                  return WebGL2RenderingContext;
                },
                { Hn: ["bufferData", "getParameter", "readPixels"] }
              ),
              t.pn());
          return { wn: t, bn: r };
        },
        O_ = function (n) {
          try {
            var t, r, e, c, i, u, a;
            return IsChromium_BasedOnNegativeError
              ? ((t = "<"
                  .concat(str_div, "><")
                  .concat(On, "></")
                  .concat(On, "></")
                  .concat(str_div, ">")),
                (r = CreateDocumentElement(n, str_div)),
                St(r, "id", Tr()),
                St(r, Ln, Nf),
                (r.innerHTML = t),
                Tt(Rt(n), r),
                (e = Jt(r.childNodes)[0]),
                (c = Jt(e.childNodes)[0]) && (i = (c || {}).contentWindow)
                  ? (((u = CreateDocumentElement(i, str_div)).innerHTML = t),
                    Tt(Rt(i), u),
                    (a = Jt(u.childNodes)[0]),
                    Jt(a.childNodes)[0].contentWindow)
                  : NullConstant)
              : n;
          } catch (o) {
            return hu(o), n;
          }
        },
        L_ = function (n) {
          var t = n.self,
            r = { En: t };
          try {
            var e = t.length,
              c = new DocumentFragment(),
              i = CreateDocumentElement(n, str_div),
              u = Tr(),
              a =
                (St(i, "id", u),
                Tt(c, i),
                (i.innerHTML = "<"
                  .concat(str_div, " ")
                  .concat(Ln, '="')
                  .concat(Nf, '"><')
                  .concat(On, "></")
                  .concat(On, "></")
                  .concat(str_div, ">")),
                Tt(Rt(n), c),
                t[e]);
            return {
              En: O_(a) || t,
              Dn: i,
            };
          } catch (o) {
            return hu(o), r;
          }
        },
        M_ = function () {
          return Bi;
        },
        N_ = "getVoices",
        str_CSS = "CSS",
        CSS_Supports = function (n, t) {
          return n[str_CSS] && n[str_CSS].supports(t);
        },
        CheckNotificationPermission = function (t, callback) {
          return GetPermissions(t)
            .query({ name: str_notification.toLowerCase() + "s" })
            .then(function (n) {
              callback(n.state == str_prompt && G_(t));
            })
            ["catch"](function () {
              return callback(!1);
            });
        },
        G_ = function (n) {
          return str_notification in n && n[str_notification].permission === ca;
        },
        IsPlatformEmptyChecks = function (t, callback) {
          return RunAndCatch(function () {
            var n = t[str_getHighEntropyValues]();
            return (
              n.then(
                function (n) {
                  return callback("" === n[str_Platform]);
                },
                function () {
                  return callback(!1);
                }
              ),
              n
            );
          });
        },
        str_HTMLVideoElement = "HTMLVideoElement",
        str_NetworkInformation = "NetworkInformation",
        NavigatorPropertyStrings = ApplyTransformationToArray(
          [
            str_appVersion,
            str_deviceMemory,
            "doNotTrack",
            hardwareConcurrency,
            str_language,
            str_language + "s",
            str_oscpu,
            str_Platform,
            userAgent,
            str_Vendor,
            str_plugins,
            str_mimeTypes,
            str_maxTouchPoints,
          ],
          function (n) {
            return str_Navigator + "." + n;
          }
        ),
        ScreenPropertyStrings = ApplyTransformationToArray(
          [
            "width",
            "height",
            "availWidth",
            "availHeight",
            "colorDepth",
            "pixelDepth",
          ],
          function (n) {
            return "Screen" + "." + n;
          }
        ),
        DatePropertyStrings = [
          "Date" + "." + str_getTimezoneOffset,
          "Intl.RelativeTimeFormat" + "." + str_resolvedOptions,
          "Intl.DateTimeFormat" + "." + str_resolvedOptions,
        ],
        f = ["String" + "." + "fromCodePoint"],
        FontFacePropertyStrings = ApplyTransformationToArray(
          ["load", "family", "status"],
          function (n) {
            return "FontFace" + "." + n;
          }
        )
          .concat(f)
          .concat([
            "CSSStyleDeclaration" + "." + "setProperty",
            "CSS2Properties" + "." + "setProperty",
          ]),
        t = ApplyTransformationToArray(["toDataURL", "getContext"], function (n) {
          return "HTMLCanvasElement" + "." + n;
        }),
        CanvasElementStrings = t.concat([]),
        GetTextMetricsStrings =
          (forEachCallback(
            ["getParameter", "getExtension", "getSupportedExtensions"],
            function (n) {
              CanvasElementStrings.push("WebGLRenderingContext" + "." + n),
                CanvasElementStrings.push("WebGL2RenderingContext" + "." + n);
            }
          ),
          ApplyTransformationToArray(
            [
              "actualBoundingBoxAscent",
              "actualBoundingBoxDescent",
              "actualBoundingBoxLeft",
              "actualBoundingBoxRight",
              "fontBoundingBoxAscent",
              "fontBoundingBoxDescent",
              "width",
            ],
            function (n) {
              return "TextMetrics" + "." + n;
            }
          )),
        CanvasRenderingContext2DStrings = ApplyTransformationToArray(
          ["fillText", "font", "getImageData", "strokeText"],
          function (n) {
            return "CanvasRenderingContext2D" + "." + n;
          }
        )
          .concat(GetTextMetricsStrings)
          .concat(t)
          .concat(f),
        GetAudioBufferStrings = ApplyTransformationToArray(
          ["getChannelData", "copyFromChannel"],
          function (n) {
            return "AudioBuffer" + "." + n;
          }
        ),
        CheckChromeExtensionRuntimeExists = function (n) {
          if (!(GetChrome(n) && str_runtime in n[str_chrome])) return !1;
          try {
            var t = n[str_chrome][str_runtime];
            return (
              str_prototype in t.sendMessage ||
                str_prototype in t.connect ||
                (new t.sendMessage(), new t.connect()),
              !0
            );
          } catch (r) {
            return GetTypeName(r) != str_TypeError;
          }
        },
        str_flat = "flat",
        str_reportingObserver = "ReportingObserver",
        M = function (n, t) {
          return Mi[n + "." + t];
        },
        N = function (n, t) {
          return (
            Mi[(e = n + "." + t)] &&
            ((r = JsonParse(JsonStringify(Mi[e]))),
            (e = [y(r_), y(e_), y(c_), y(i_), y(u_)]),
            (e = ApplyTransformationToArray(e, function (n) {
              return ArraySearch(r, n);
            })),
            (e = Math.max.apply(NullConstant, e) + 1),
            NegativeError_Unk || r.splice(e, 0, y(a_)),
            r)
          );
          var r, e;
        },
        i1 = "c767712b",
        u1 = function (n) {
          void (n.Cn = !0), n.kn && n.kn();
        },
        a1 = function (n) {
          n.qn && n.qn();
        },
        o1 = function (n) {
          n.xn && n.xn();
        },
        CallbackThenCallOtherCallback = function (c, callback, t, i) {
          (c.Fn = c.Fn + 1),
            callback.apply(
              NullConstant,
              t.concat([
                function (n) {
                  var t,
                    r = i,
                    e = n;
                  ((t = c).Fn = t.Fn - 1),
                    r && r(e),
                    void (
                      t.Rn &&
                      (t.Fn === ZeroConstant
                        ? ((t.Cn ? o1 : u1)(t), a1(t))
                        : t.Cn && o1(t))
                    );
                },
              ])
            );
        },
        _1 = !1,
        s1 = [],
        v1 = function (n) {
          if (!_1) {
            _1 = !0;
            for (var t = 0, r = s1[t++], e = GetDocument(n); r; )
              r.call(e), (r = s1[t++]);
            void s1.splice(0, s1.length);
          }
        },
        onmessage = function (e) {
          var a = "WEBGL",
            r = "UNMASKED";
          try {
            var t = navigator,
              n = {
                ua: t.userAgent,
                p: t.platform,
                dm: t.deviceMemory,
                hc: t.hardwareConcurrency,
                l: t.language,
                ls: t.languages,
              };
            try {
              var g = new OffscreenCanvas(256, 256).getContext("webgl");
              if (g) {
                var s = g.getExtension(a + "_debug_renderer_info");
                s &&
                  ((n.v = g.getParameter(s[r + "_VENDOR_" + a])),
                  (n.r = g.getParameter(s[r + "_RENDERER_" + a])));
              }
            } catch (e) {}
            postMessage(n);
          } catch (e) {
            postMessage({ e: e });
          }
        },
        h1 = "application/javascript",
        d1 =
          'onmessage=function(e){var a="WEBGL",r="UNMASKED";try{var t=navigator,n={ua:t.userAgent,p:t.platform,dm:t.deviceMemory,hc:t.hardwareConcurrency,l:t.language,ls:t.languages};try{var g=new OffscreenCanvas(256,256).getContext("webgl");if(g){var s=g.getExtension(a+"_debug_renderer_info");s&&(n.v=g.getParameter(s[r+"_VENDOR_"+a]),n.r=g.getParameter(s[r+"_RENDERER_"+a]))}}catch(e){}postMessage(n)}catch(e){postMessage({e:e})}};',
        CallJS_TestNavigatorValues = function (n, t) {
          var r;
          try {
            var e,
              c = new Blob([d1], { type: h1 }),
              i = URL.createObjectURL(c);
            (e = new Worker(i)).postMessage(""),
              (e.onmessage = function (n) {
                clearTimeout(r), t(n.data);
              }),
              (r = setTimeout(function () {
                e.terminate(), t(null);
              }, n));
          } catch (u) {
            hu(u), e && e.terminate(), t(null);
          }
        },
        g1 = "BlobURLs are not yet supported",
        p1 = 1024 * 1024,
        y1 = function (n, t) {
          return t === n[str_eval].toString().length;
        },
        H1 = "createObjectStore",
        m1 = "deleteDatabase",
        w1 = function (i, u) {
          var a = GenerateUUID(i);
          try {
            je(i).open(a, 1).onupgradeneeded = function (n) {
              var t =
                n.target && n.target.result ? n.target.result : VoidConstant;
              try {
                t[H1](ctst_cookie, { autoIncrement: !0 }).put(new Blob()), u(!1);
              } catch (c) {
                var r,
                  e = c;
                return (
                  c instanceof Error && (e = c.message || c),
                  Pt(e) ? ((r = new RegExp(g1).test(e)), u(r)) : u(!1)
                );
              } finally {
                t.close(), je(i)[m1](a);
              }
            };
          } catch (n) {
            return u(!1);
          }
        },
        b1 = "queryUsageAndQuota",
        E1 = function (n, callback) {
          try {
            if (
              (f = GetVendor((o = n))) !== VoidConstant &&
              IsSubstr(f, strAppleComputer) &&
              y1(o, 37)
            )
              void (
                GetNavigator((a = n))[str_maxTouchPoints] !== VoidConstant
                  ? w1
                  : function (n, t) {
                      var r = n[str_openDatabase],
                        e = n.localStorage;
                      try {
                        r(NullConstant, NullConstant, NullConstant, NullConstant);
                      } catch (c) {
                        return t(!0);
                      }
                      try {
                        e.setItem(ctst_cookie, "1"), e.removeItem(ctst_cookie);
                      } catch (c) {
                        return t(!0);
                      }
                      return t(!1);
                    }
              )(a, callback);
            else if (
              (u = GetVendor((i = n))) !== VoidConstant &&
              IsSubstr(u, strGoogleInc) &&
              y1(i, 33)
            )
              void (
                n.Promise !== VoidConstant &&
                  n.Promise.allSettled !== VoidConstant
                  ? function (c, i) {
                      GetNavigator(c)[str_webkitTemporaryStorage][b1](
                        function (n, t) {
                          var r = mathModule["round"](t / p1),
                            e =
                              2 *
                              mathModule["round"](
                                (GetPerformance((e = c)) !== VoidConstant &&
                                GetPerformance(e)[str_memory] !== VoidConstant &&
                                GetPerformance(e)[str_memory][
                                  str_jsHeapSizeLimit
                                ] !== VoidConstant
                                  ? GetPerformance(e)[str_memory][
                                      str_jsHeapSizeLimit
                                    ]
                                  : 1073741824) / p1
                              );
                          i(r < e);
                        },
                        function (n) {
                          throw n;
                        }
                      );
                    }
                  : function (n, t) {
                      (0, n[str_webkitRequestFileSystem])(
                        0,
                        1,
                        function () {
                          t(!1);
                        },
                        function () {
                          t(!0);
                        }
                      );
                    }
              )(n, callback);
            else if (
              (c = GetDocumentElement((e = n))) &&
              c[Ln] &&
              c[Ln][str_MozAppearance] !== VoidConstant &&
              y1(e, 37)
            )
              void callback(GetServiceWorker(n) === VoidConstant);
            else {
              if (
                GetNavigator((r = n))[str_msSaveBlob] === VoidConstant ||
                !y1(r, 39)
              )
                return callback(!1);
              void callback(je(n) === VoidConstant);
            }
          } catch (_) {
            hu(_), callback(!1);
          }
          var r, e, c, i, u, a, o, f;
        },
        D1 = "^\\s*([a-z-]*)(.*)$",
        C1 = "([.:#][\\w-]+|\\[.+?\\])",
        k1 = '^\\[([\\w-]+)([~|^$*]?=("([^"]*)"|([\\w-]+)))?(\\s+[is])?\\]$',
        q1 = function (n, t) {
          try {
            for (
              var r = [
                  ["#Box-Banner-ads", ".SectionAds", ".ad-left-image"],
                  ["#ads-preload", ".banner-bottom", ".midroll-marker"],
                  ["#atwAdFrame", ".adbox_content", ".sponsori"],
                  ["#adblock_message", ".AdblockMessage", ".adblockInfo"],
                  ["#saycookie", "#cookie-icon", ".cookie-check"],
                  ["#AC_ad", ".ADBox", ".ADFooter"],
                  [".Zi_ad_a_H"],
                  ["#AD720x90", "#ADS_1", ".ads-pub"],
                  ['aside[data-portal-id="leaderboard"]'],
                  ["#BottomAd", ".ad-single-h2", ".my_ads"],
                  [".sp_ad_box_top", ".amp_ad", "#mgid_iframe1"],
                  ["#Ad2", ".ad21", ".adprice"],
                  ["#button_share", ".popup-social", ".soc_like"],
                  ["#Publicidade", ".Publicidade", ".publicidad-bg"],
                  ["#ramblerCounter", "#top100counter", ".plugin-daily_count"],
                  [".splash-banner", "#reklam", ".reklam_a"],
                  ["#ea_intext_div", "td#freenet_table_ads", ".lapni-pop-over"],
                  [".channel--ad", "#adspot-bottom", "a-ad"],
                  ["#Ad_windows", "#ad_full", ".floatAd"],
                  [".AvisoCookies", ".adblock-cookies", ".adp-popup"],
                  ["#promo-box", ".reklama-bottom", ".reklama-right"],
                  [".ads-mobiel", "#reclamediv", ".reclame"],
                  ["#Ad_Win2day", "#adcontentoben", "#ad_oben"],
                  [".pubblicita", ".ads-dx", "#pubblicita"],
                  [".baneriai", ".reklamos_nuorodos", ".reklamos_tarpas"],
                  ["#cxense-recs-in-article", ".embed-responsive-trendmd"],
                  [".article-share"],
                  ["#FooterboardMobile", "#newsLetterAsset", ".footer-rss"],
                  [".util-bar-module-firefly-visible"],
                  [".fc-root", "#ad-blocker-popup", "#adblock-wrapper"],
                  ["#Share1", ".sharePost", ".ShareThis"],
                  [".adsbox", "DIV.agores300", "TABLE.advright"],
                  [".ad__main", ".adblokk", ".cikk_reklam"],
                  ["#stickyCookieBar", "#BarCookiesContainer", ".m-cookies-info"],
                  ['A[href^="/framework/resources/forms/ads.aspx"]'],
                  [
                    "ins[data-aiinad-inv]",
                    'ins[class^="MediaIndex_AD_"]',
                    'div[id^="targetpushAd_"]',
                  ],
                  ["#b_ad", "#b_ad2", ".LeftAds"],
                  [".an-advert-banner", ".an-sponsored"],
                  ["#a-d-s", ".a-d-v", ".ad-offers"],
                  ["#adv", ".ad-240x400", ".ads600x200"],
                  ["#ads", ".ad_foot", ".banner_h"],
                  ["#share-modal", ".Share", ".shareButton"],
                ],
                e = Yt(
                  r,
                  function (n, t) {
                    return n.concat(t);
                  },
                  []
                ),
                c = n,
                i = e,
                u = CreateDocumentElement(c, str_div),
                a = (SetElementInvisible(u), new Array(i.length)),
                o = 0;
              o < i.length;
              ++o
            ) {
              (v = c),
                (h = i[o]),
                void 0,
                (l = (d = (function (n) {
                  for (
                    var t,
                      r = new RegExp(D1, "i").exec(n),
                      e = r[1] || undefined,
                      c = new RegExp(C1, "gi");
                    ;
  
                  ) {
                    var i = c.exec(r[2]);
                    if (!i) break;
                    var u = i[0];
                    switch (u[0]) {
                      case ".":
                        return [e, "class", u.slice(1)];
                      case "#":
                        return [e, "id", u.slice(1)];
                      case "[":
                        var a = new RegExp(k1).exec(u);
                        if (a)
                          return [
                            e,
                            a[1],
                            null != (t = null != (t = a[4]) ? t : a[5]) ? t : "",
                          ];
                    }
                  }
                  return [e, undefined, undefined];
                })(h))[0]),
                (g = d[1]),
                (p = d[2]),
                (y = CreateDocumentElement(v, null != l ? l : str_div)),
                g && p && St(y, g, p);
              var f = y,
                _ = CreateDocumentElement(c, str_div);
              SetElementInvisible(_), Tt(_, f), Tt(u, f), (a[o] = f);
            }
            Tt(Rt(c), u);
            var s = {};
            setTimeout(function () {
              try {
                for (var n = 0; n < i.length; ++n)
                  a[n].offsetParent || (s[i[n]] = !0);
              } finally {
                jt(u);
              }
              void t(
                (function (e, n) {
                  for (var t, c = 0; c < e.length; c++)
                    (function (n) {
                      for (var t = 0, r = e[c]; t < r.length; t++)
                        if (n[r[t]]) return !0;
                      return !1;
                    })(n) && (t = t || []).push(c);
                  return t;
                })(r, s)
              );
            }, 0);
          } catch (H) {
            hu(H), t(undefined);
          }
          var v, h, d, l, g, p, y;
        },
        inputTypes = { email: !1, hidden: !1, password: !1, tel: !1, text: !1 },
        str_onautofillstart = "onautofillstart",
        str_insertReplacementText = "insertReplacementText",
        RegisterFPListener = function (n, listenerType, callback) {
          RegisterNewListener(GetDocument(n), listenerType, function (r) {
            return RunAndCatch(function () {
              var n,
                t = callback;
              (n = r).target &&
                n.target.value &&
                n.target.type &&
                n.target.type in inputTypes &&
                ((str_insertReplacementText !== n.inputType &&
                  "data" in n &&
                  str_onautofillstart !== n.animationName) ||
                  ((inputTypes[n.target.type] = !0), t(inputTypes)));
            });
          });
        },
        I1 = 500,
        FieldStorage1 = {},
        FieldStorage2 = {},
        z = 0,
        A1 = 1,
        B1 = {
          Fn: ZeroConstant,
          Rn: !1,
          Cn: !1,
          kn: void 0,
          xn: void 0,
          qn: void 0,
          Sn: 300,
        },
        Return3rdArgument = function (n, t, r, e) {
          return zi && zi(n, t, r, e), r;
        },
        ApplyTransformationNone = function (n) {
          return ApplyTransformationToArray(n, function (n) {
            return !!n;
          });
        },
        ProcessField1 = function (n, t, r) {
          IsVarNotVoidOrNull(r) &&
            (FieldStorage1[n] = appendFieldToHexString(n, t, r)),
            t != JUST_APPEND && Return3rdArgument(z, n, r);
        },
        ProcessFieldNoValue = function (n, t) {
          t && (FieldStorage1[n] = appendFieldToHexString(n, DATATYPE_UNK)),
            Return3rdArgument(z, n, t);
        },
        ProcessField3AndPutInStorage2 = function (n, t, r) {
          t
            ? (FieldStorage2[n] = appendFieldToHexString(n, DATATYPE_UNK))
            : r && !1 === t && (FieldStorage2[n] = appendFieldToHexString(n, Io)),
            Return3rdArgument(A1, n, t);
        },
        HashAndSetField = function (n, t, r) {
          var e, c;
          void 0 === r && (r = z),
            t.length > ZeroConstant &&
              ((e = Hash32(t.sort().join(""))),
              (c = ByteToHex(t.length) + intToFixedSizeHexBE(e, 4)),
              (c = appendFieldToHexString(n, JUST_APPEND, c)),
              r === z
                ? (FieldStorage1[n] = c)
                : r === A1 && (FieldStorage2[n] = c)),
            Return3rdArgument(r, n, t, e);
        },
        SetFieldStorage3 = function (n, t) {
          IsVarNotVoidOrNull(t) &&
            ((FieldStorage1[n] =
              25.5 < t
                ? appendFieldToHexString(
                    n,
                    B2H_WITH_CHECKS,
                    mathModule["round"](t)
                  )
                : appendFieldToHexString(n, B2H_ROUNDED, t)),
            Return3rdArgument(z, n, t));
        },
        SetFieldStorageEnum = function (fieldId, t, unkarray) {
          var e;
          Return3rdArgument(z, fieldId, t),
            IsVarNotVoidOrNull(t) &&
              ((e = ArraySearch(unkarray, t)),
              (FieldStorage1[fieldId] =
                ZeroConstant <= e
                  ? appendFieldToHexString(fieldId, B2H, e)
                  : appendFieldToHexString(fieldId, SERIALIZED_BYTE_ARRAY, t)));
        },
        ValuesToHexString = function (n, t) {
          var r = 32767 & n,
            e = 65535 & t;
          return r == e
            ? intToFixedSizeHexBE(32768 | r, 2)
            : intToFixedSizeHexBE(r, 2) + intToFixedSizeHexBE(e, 2);
        },
        ConvertBinaryArrayToHex = function (n) {
          var t = ApplyTransformationToArray(n, function (n) {
              return GetBoolean(n);
            }),
            r = CvtBoolArrayToBinaryNum(t, VoidConstant);
          return (
            ByteToHex(n.length) +
            intToFixedSizeHexBE(r, mathModule["ceil"](t.length / 8))
          );
        },
        str_MacIntel = "MacIntel",
        Str_Win32 = "Win32",
        Str_iPhone = "iPhone",
        Str_LinuxArmv81 = "Linux armv8l",
        strEnUS = "enUS",
        strEsEs = "esES",
        StrFrFr = "frFR",
        StrPtB4 = "ptBR",
        strEnGB = "enGB",
        StrDeDE = "deDE",
        StrRuRU = "ruRU",
        removeDashFromLanguage = function (n) {
          return n.slice(2) + "-" + n.slice(2, 2);
        },
        e2 = "20181001000000",
        productSubEnumm = ["20030107", "20100101"],
        AppendFieldToStorage_ = function (n, t, r) {
          IsVarNotVoidOrNull(r) &&
            (FieldStorage2[n] = appendFieldToHexString(n, t, r)),
            t != JUST_APPEND && Return3rdArgument(A1, n, r);
        },
        u2 =
          ((str_input = 2),
          (r = CastleVersion.split(".")),
          (verMajor = parseInt(r[0], 10) - 1),
          (verMinor = parseInt(r[1], 10)),
          (verPatch = parseInt(r[2], 10)),
          intToFixedSizeHexBE(
            (str_input << 13) |
              ((3 & verMajor) << 11) |
              ((31 & verMinor) << 6) |
              (63 & verPatch),
            2
          )),
        a2 = 0,
        o2 = 4,
        HexFF = ByteToHex(ft),
        CONST_4 = 4,
        /**
         * Packs the lower 3 bits of 'n' and the lower 5 bits of 't' into a single byte,
         * then returns the byte as a two-character hexadecimal string.
         *
         * @param {number} n - The first number (only the lower 3 bits are used).
         * @param {number} t - The second number (only the lower 5 bits are used).
         * @returns {string} - A two-character hexadecimal string representing the combined byte.
         */
        packBitsToHexByte = function (n, t) {
          return ByteToHex(((7 & n) << 5) | (31 & t));
        },
        timeDiff_LetterLetter_Meidan = 0,
        binaryConvertedNum = 0,
        realGenerateToken = function (window, uuid, unkhexstr, publicKey) {
          var c,
            storage1Values = getObjectValues(FieldStorage1),
            storage2Values = getObjectValues(FieldStorage2),
            a =
              ((a = [
                0 < DataPoint_Mouse_TimeDiff_KeyDownUp_1000.G.p,
                IsTouchValue(),
                0 < GetEventCounter(EVENT_CLICK),
                0 < KeyDownCount.p,
                GetEventCounter(EVENT_DEVICEMMOTION) > Ci &&
                  (null != (a = divNegativeDivisor(OrientationDataPoint.G))
                    ? a
                    : ZeroConstant) > Ci,
                0 < BackspaceCount.p,
                0 < NotTouchCount.p,
                !!(a = EventArrLookup(UNK_CONST_0)) &&
                  a.C === ZeroConstant &&
                  a.k === ZeroConstant,
              ]),
              (data2 = IsTouchValue()
                ? DataPoint_Mouse_TimeDifference_Threshold500
                : DataPoint_Touch_TimeDifference_500),
              (timeDiff_LetterLetter_Meidan = GetDataMedianRounded(
                DataPoint_KeyTimeDiff_LetterLetter.G
              )),
              (data = GetDataAbsoluteDeviation(
                DataPoint_KeyTimeDiff_LetterLetter.G
              )),
              (c = [
                divNegativeDivisor(DataPoint_Mouse_AngleVector_500.G),  // index 0
                divNegativeDivisor(DataPoint_Touch_AngleVector.G),  // index 1
                divAndRoundDataPoint(DataPoint_Key_KeysSameTimeDiff_1000.G),  // index 2
                divAndRoundDataPoint(DataPoint_Key_TimeDiff_SpecialKey_Up.G),  // index 3
                divAndRoundDataPoint(DataPoint_Mouse_TimeDiff_MouseDownUp.G),  // index 4
                divNegativeDivisor(data2.G),  // index 5
                GetDataMedianRounded(DataPoint_Mouse_Click_TimeDiff.G),  // index 6
                GetDataAbsoluteDeviation(DataPoint_Mouse_Click_TimeDiff.G),  // index 7
                GetDataMedianRounded(DataPoint_Mouse_TimeDiff_MouseDownUp.G),  // index 8
                GetDataAbsoluteDeviation(DataPoint_Mouse_TimeDiff_MouseDownUp.G),  // index 9
                GetDataMedianRounded(DataPoint_Key_TimmeDiff_ClickDown.G),  // index 10
                GetDataAbsoluteDeviation(DataPoint_Key_TimmeDiff_ClickDown.G),  // index 11
                GetDataMedianRounded(DataPoint_Key_TimeDiff_SpecialKey_Down.G),  // index 12
                GetDataAbsoluteDeviation(DataPoint_Key_TimeDiff_SpecialKey_Down.G),  // index 13
                GetDataMedianRounded(DataPoint_Key_TimeDiff_SpecialKey_Up.G),  // index 14
                GetDataAbsoluteDeviation(DataPoint_Key_TimeDiff_SpecialKey_Up.G),  // index 15
                GetDataMedianRounded(DataPoint_Key_TimeDiff_SpecialKey_DownUp.G),  // index 16
                GetDataAbsoluteDeviation(DataPoint_Key_TimeDiff_SpecialKey_DownUp.G),  // index 17
                GetDataMedianRounded(DataPoint_Key_TimeDiff_SpecialKey_UpDown.G),  // index 18
                GetDataAbsoluteDeviation(DataPoint_Key_TimeDiff_SpecialKey_UpDown.G),  // index 19
                GetDataMedianRounded(DataPoint_Mouse_VectorAngle.G),  // index 20
                GetDataAbsoluteDeviation(DataPoint_Mouse_VectorAngle.G),  // index 21
                GetDataMedianRounded(DataPoint_Mouse_VectorAngle_500.G),  // index 22
                GetDataAbsoluteDeviation(DataPoint_Mouse_VectorAngle_500.G),  // index 23
                GetDataMedianRounded(DataPoint_Mouse_Deviation.G),  // index 24
                GetDataAbsoluteDeviation(DataPoint_Mouse_Deviation.G),  // index 25
                roundToDecimalPlaces(DataPoint_Mouse_Deviation.G.L),  // index 26
                roundToDecimalPlaces(DataPoint_Mouse_Deviation.M),  // index 27
                GetDataMedianRounded(DataPoint_Touch_Sequential_TimeDiff.G),  // index 28
                GetDataAbsoluteDeviation(DataPoint_Touch_Sequential_TimeDiff.G),  // index 29
                GetDataMedianRounded(DataPoint_Touch_TimeDiff_StartEndCancel.G),  // index 30
                GetDataAbsoluteDeviation(DataPoint_Touch_TimeDiff_StartEndCancel.G),  // index 31
                MathAbsDiff(GetDataMedianRounded(DataPoint_KeyTimeDiff_LetterDigit.G), timeDiff_LetterLetter_Meidan),  // index 32
                MathAbsDiff(GetDataAbsoluteDeviation(DataPoint_KeyTimeDiff_LetterDigit.G), data),  // index 33
                MathAbsDiff(GetDataMedianRounded(DataPoint_KeyTimeDiff_DigitInvalid.G), timeDiff_LetterLetter_Meidan),  // index 34
                MathAbsDiff(GetDataAbsoluteDeviation(DataPoint_KeyTimeDiff_DigitInvalid.G), data),  // index 35
                MathAbsDiff(GetDataMedianRounded(DataPoint_KeyTimeDiff_DoubleInvalid.G), timeDiff_LetterLetter_Meidan),  // index 36
                MathAbsDiff(GetDataAbsoluteDeviation(DataPoint_KeyTimeDiff_DoubleInvalid.G), data),  // index 37
                GetDataMedianRounded(DataPointMouseVectorDiffMedian),  // index 38
                GetDataAbsoluteDeviation(DataPointMouseVectorDiffDeviation),  // index 39
                GetDataMedianRounded(DataPoint_mouse_VectorDiff_Median),  // index 40
                GetDataAbsoluteDeviation(DataPoint_mouse_VectorDiff_Deviation),  // index 41
                GetDataMidpointRounded2(DataPoint_Mouse_VectorDiff_Threshold500.G),  // index 42
                GetMedianAbsoluteDeviationCalculator2(DataPoint_Mouse_VectorDiff_Threshold500.G),  // index 43
                GetDataMedianRounded(DataPoint_mouse_TimeDiff_Rounded),  // index 44
                GetDataAbsoluteDeviation(DataPoint_mouse_TimeDiff_Rounded),  // index 45
                GetDataMedianRounded(DataPoint_mouse_VectorDiff_Rounded),  // index 46
                GetDataAbsoluteDeviation(DataPoint_mouse_VectorDiff_Rounded),  // index 47
                GetDataMedianRounded(DataPoint_mouse_ChangeSpeed),  // index 48
                GetDataAbsoluteDeviation(DataPoint_mouse_ChangeSpeed),  // index 49
                GetRoundedDataPointValue(DataPoint_Mouse_VectorDiff_Threshold500.G),  // index 50
                GetDataMedianRounded(DataPoint_Universal.G),  // index 51
                GetDataAbsoluteDeviation(DataPoint_Universal.G)  // index 52              
                ]),
              (data2 = [
                scaleAndCapValue(GetEventCounter(EVENT_MMOUSEMOVE)),
                scaleAndCapValue(GetEventCounter(EVENT_KEYUP)),
                scaleAndCapValue(GetEventCounter(EVENT_CLICK)),
                scaleAndCapValue(GetEventCounter(EVENT_TOUCHSTART)),
                scaleAndCapValue(GetEventCounter(EVENT_KEYDOWN)),
                scaleAndCapValue(GetEventCounter(EVENT_TOUCHMOVE)),
                scaleAndCapValue(
                  MathAbsDiff(
                    GetEventCounter(EVENT_MOUSEDOWN),
                    GetEventCounter(EVENT_MOUSEUP)
                  )
                ),
                scaleAndCapValue(
                  1 < DataPoint_mouse_VectorDiff_Rounded.p
                    ? DataPoint_mouse_VectorDiff_Rounded.p - 1
                    : ZeroConstant
                ),
                scaleAndCapValue(WheelDataPointCounter.p),
              ]),
              (binaryConvertedNum = CvtBoolArrayToBinaryNum(a, 12)),
              [
                ByteToHex(
                  (data = (CONST_4 << 12) | (4095 & binaryConvertedNum)) >> 8
                ) + ByteToHex(data),
                (function () {
                  for (
                    var n, t = "", valueIndex = 0, dataPointValues = c;
                    valueIndex < dataPointValues.length;
                    valueIndex++
                  )
                    t += ByteToHex(
                      IsVarNumerical((n = dataPointValues[valueIndex]))
                        ? (n = mathModule["max"](n, 0)) <= 15
                          ? 64 | Vi.e(n + 1)
                          : 128 | Qi.e(mathModule["min"](n, maxUint16) - 14)
                        : 0
                    );
                  return t;
                })(),
                bytesToHexString(data2),
              ]),
            randomHex = ByteToHex(RandWithMax(256)),
            data = GetCurrentDate(),
            data2 =
              ((data2 = encodeTimestampToHex(data)),
              (data = parseInt(data.toString().slice(-3), 10)),
              (data = intToFixedSizeHexBE(data, 2)),
              (s = getLowerNibbleAsHex(RandWithMax(Const15))),
              xorAndAppendKey(data2, s) + xorAndAppendKey(data, s)),
            data = packBitsToHexByte(a2, storage1Values.length),
            s = packBitsToHexByte(o2, storage2Values.length),
            data =
              data +
              storage1Values.join("") +
              s +
              storage2Values.join("") +
              a.join("") +
              HexFF,
            storage1Values = deriveKeyAndXor(data2, 4, data2.charAt(3), data),
            s = deriveKeyAndXor(uuid, 8, uuid.charAt(9), data2 + storage1Values),
            storage2Values = unkhexstr + publicKey + u2 + uuid + s,
            a = ByteToHex(storage2Values.length),
            data = xorHexStrings(storage2Values + a, randomHex),
            data2 = decodeHexStrToStr(randomHex + data);
          return B64UrlEncode(window, data2) || "";
        },
        h2 = function (n, t, r, e) {
          var c = GetDocument(n);
          try {
            c.cookie = ""
              .concat(t, "=")
              .concat(r, ";path=/;")
              .concat(e)
              .concat("SameSite=Lax");
          } catch (i) {}
        },
        d2 = _(1970),
        l2 = function (n, t, r) {
          for (
            var e = 0, c = xt(n).hostname, i = c.split("."), u = 1 === i.length;
            e < i.length - 1 || u;
  
          )
            (c = i.slice(-1 - ++e).join(".")),
              h2(n, t, "", "expires=".concat(r || d2, ";domain=").concat(c, ";")),
              (u = !1);
        },
        g2 = ByteToHex(9),
        p2 = {},
        y2 = !1,
        H2 = !1,
        m2 = [],
        w2 = function (n, t, r, e) {
          SetCookieHelper(n, t, r, e || ht);
        },
        b2 = function (n, t, r) {
          var e,
            c = Pi,
            c = c ? "domain=".concat(c, ";") : "",
            i = GetCastleData(),
            i = "expires="
              .concat(
                ((i = i.CastleCookieData.rn),
                (e = new Date()).setSeconds(e.getSeconds() + i),
                e.toUTCString()),
                ";"
              )
              .concat(c);
          h2(n, t, r, i);
        },
        E2 = function (n) {
          if (!GetCastleData().PK) throw cu;
          if (y2) {
            H2 = !0;
            for (var t = m2.length, r = GetCID().Tn, e = 0; e < t; e++)
              (m2[e][1]._value = r), m2[e][0](r);
          }
        },
        GetCID = function () {
          return p2[cid_cookie];
        },
        SetCID = function (n) {
          p2[cid_cookie] = n;
        },
        k2 = function (window, uuid) {
          // g2 = "09"
          var r = {
            jn: uuid,
            Tn: GetCastleData().PK
              ? realGenerateToken(
                  window,
                  uuid,
                  g2,
                  stringToHex(GetCastleData().PK.slice(3))
                )
              : "",
          };
          return SetCID(r), r;
        },
        q2 = function (n) {
          var t = GetCID();
          if (t) return k2(n, t.jn);
        },
        x2 = function (r, e) {
          return (
            (r.then = function (n, t) {
              return n(e), r;
            }),
            r
          );
        },
        F2 = "POST",
        R2 = "withCredentials",
        S2 = 4,
        I2 = function (n, t, r) {
          if (
            (r.An && (clearTimeout(r.An), (r.An = VoidConstant)),
            r.Bn === VoidConstant)
          )
            for (var e = n.length, c = 0; c < e; c++) n[c](t);
          r.Bn = t;
        },
        T2 = function (n, t) {
          n.send(t);
        },
        j2 = jr(T2, 300),
        A2 = function (n, t, r, e, c, i) {
          var u,
            a,
            o = (function () {
              try {
                var n;
                if (typeof XMLHttpRequest != st)
                  return (n = new XMLHttpRequest()), R2 in n ? n : void 0;
              } catch (t) {}
            })(),
            f = {};
          return o && o.setRequestHeader
            ? (o.open(F2, t, !0),
              (u = { Bn: VoidConstant, An: VoidConstant }),
              (a = []),
              o.setRequestHeader("Content-Type", "application/json"),
              o.setRequestHeader("X-Castle-Publishable-Api-Key", r),
              (f.then = function (n, t) {
                return u.Bn !== VoidConstant ? n(u.Bn) : a.push(n), f;
              }),
              (o.onreadystatechange = function () {
                var n;
                o.readyState === S2 &&
                  ((n = o.status), I2(a, 200 <= n && n < 400, u));
              }),
              e(function (n) {
                (u.An = setTimeout(function () {
                  I2(a, NullConstant, u), o.abort();
                }, i)),
                  c(o, JsonStringify(n));
              }),
              f)
            : x2(f, !1);
        },
        B2 = "Castle: ",
        O2 = function (n, t) {
          var r;
          hasOwnPropertySafe(n, "console") &&
            ((r = n.console), hasOwnPropertySafe(r, "warn")) &&
            r.warn(B2 + t);
        },
        L2 = 0,
        M2 = 1,
        N2 = 2,
        z2 = 4,
        P2 = 5,
        W2 = 3,
        G2 = function (n) {
          return Pt(n) ? n : JsonStringify(n);
        },
        U2 = function (n, t, r, e, c, i) {
          return (
            Q2(t, r, e, c, c, i) +
            intToFixedSizeHexBE(n.length, W2) +
            stringToHex(n)
          );
        },
        Q2 = function (n, t, r, e, c, i) {
          for (
            var u = [],
              a = i
                ? SerializeStringWithLengthToHex
                : SerializeByteArrayToHexString,
              o = ZeroConstant;
            o < r.length;
            o++
          ) {
            var f = r[o],
              _ = ArraySearch(e, f) >= ZeroConstant,
              s = ArraySearch(c, f) >= ZeroConstant,
              v = hasOwnPropertySafe(t, f) && gt(t[f]);
            if (v || _) {
              var h = void 0;
              if (_) {
                _ = v ? t[f] : s ? {} : VoidConstant;
                if (_ === VoidConstant) continue;
                var d = $t(_),
                  v = GetKeys(d).slice(ZeroConstant, ft);
                h = ByteToHex(v.length);
                for (var l = 0, g = v; l < g.length; l++)
                  var p = g[l],
                    h =
                      (h += SerializeByteArrayToHexString(G2(p))) +
                      SerializeByteArrayToHexString(G2(d[p]));
              } else h = a(G2(t[f]));
              u.push(ByteToHex(o) + h);
            }
          }
          return ByteToHex(n) + ByteToHex(u.length) + u.join("");
        },
        V2 = "id",
        Y2 = "email",
        Z2 = "phone",
        J2 = "registered_at",
        $2 = "traits",
        K2 = "signature",
        X2 = "address",
        n0 = "name",
        t0 = function (n) {
          return Q2(L2, n, [V2, Y2, Z2, J2, $2, K2, n0, X2], [$2, X2], dt, !1);
        },
        r0 = "jwt",
        e0 = function (n) {
          return Q2(z2, n, [r0], dt, dt, !0);
        },
        c0 = 3,
        i0 = function (n, t, r, e) {
          var c = ByteToHex(RandWithMax(256)),
            i = GetCurrentDate(),
            i =
              ((i = encodeTimestampToHex(i)),
              (u = getLowerNibbleAsHex(RandWithMax(Const15))),
              xorAndAppendKey(i, u)),
            u = ByteToHex(e.length),
            a = t.slice(3),
            u = r + u + e.join(""),
            o = ByteToHex(u.length & ft),
            u = deriveKeyAndXor(i, 4, i.charAt(3), u + o),
            o = deriveKeyAndXor(
              stringToHexNibbles(a),
              8,
              stringToHexNibbles(a[9]),
              i + u
            ),
            a = ByteToHex((15 & c0) << 4),
            i = xorHexStrings(a + o, c),
            u = decodeHexStrToStr(c + i);
          return B64UrlEncode(n, u) || "";
        },
        u0 = "url",
        a0 = "name",
        o0 = "referrer",
        f0 = "name",
        _0 = "values",
        s0 = 0,
        v0 = 300,
        h0 = "name",
        d0 = "properties",
        l0 = function (n) {
          return n.userJwt ? e0({ jwt: n.userJwt }) : t0(n.user);
        },
        g0 = function (n, t) {
          return U2(n, P2, t, [h0, d0], [d0], !1);
        },
        p0 = {},
        y0 = function (n) {
          var c = p0[n],
            i = {};
          if (c.On)
            i.then = function (t) {
              return (
                setTimeout(function () {
                  y0(n).then(function (n) {
                    t(n);
                  });
                }, ou),
                i
              );
            };
          else {
            if (c.Ln) return x2(i, c.Mn);
            (c.On = !0), (c.Ln = !1), (c.Mn = undefined);
            var u = GetCastleData();
            i.then = function (t) {
              var r, e;
              return (
                A2(
                  0,
                  u.CastleMonitorURL,
                  u.PK,
                  ((r = n),
                  (e = u.PK),
                  function (n) {
                    var t = p0[r],
                      t =
                        ((t.Nn = t._.splice(0, fu)),
                        ApplyTransformationToArray(t.Nn, function (n) {
                          return g0(n.Tn, n.zn);
                        }));
                    n({ data: i0(Wi, e, r, t) });
                  }),
                  T2,
                  u.X
                ).then(function (n) {
                  (c.On = !1), (c.Ln = !0), (c.Mn = n), t(n);
                }),
                i
              );
            };
          }
          return i;
        },
        H0 = function (c, t, a) {
          var n,
            r,
            i = GetCastleData();
          if (i.PK)
            return IsVarNotVoidOrNull((n = a)) &&
              (IsVarNotVoidOrNull(n.user) || IsVarNotVoidOrNull(n.userJwt)) &&
              IsVarNotVoidOrNull(n.name)
              ? i.en
                ? (((r = {}).then = function (u, n) {
                    return (
                      t.then(function (n) {
                        var r,
                          e,
                          c,
                          i,
                          t = { Pn: l0(a), zn: a, Tn: n };
                        p0[t.Pn] ||
                          (p0[t.Pn] = {
                            _: [],
                            Nn: [],
                            Wn: 0,
                          }),
                          p0[t.Pn]._.push({ zn: t.zn, Tn: t.Tn }),
                          (e = p0[(r = t.Pn)]),
                          0 ==
                            (c =
                              (t = p0[r]).Wn && 0 < (t = t.Wn - GetCurrentDate())
                                ? t
                                : 0) && (e.Wn = GetCurrentDate() + ou),
                          (i = {
                            then: function (n) {
                              var t = function (t) {
                                y0(r).then(function (n) {
                                  e.Nn.pop(),
                                    0 === e.Nn.length &&
                                      ((e.Ln = !1),
                                      (e.Mn = undefined),
                                      (e.On = !1)),
                                    t(n);
                                });
                              };
                              return (
                                0 == c
                                  ? t(n)
                                  : setTimeout(function () {
                                      t(n);
                                    }, c),
                                i
                              );
                            },
                          }).then(function (n) {
                            return u(n);
                          });
                      }),
                      r
                    );
                  }),
                  r)
                : A2(
                    0,
                    i.CastleMonitorURL,
                    i.PK,
                    function (e) {
                      t.then(function (n) {
                        var t = i.PK,
                          r = n,
                          r = i0(c, t, l0((t = a)), [g0(r, t)]);
                        e({ data: r });
                      });
                    },
                    T2,
                    i.X
                  )
              : (i.$ && O2(c, iu), x2({}, !1));
          throw cu;
        },
        m0 = "data-castle-value",
        w0 = "data-castle-name",
        b0 = "name",
        E0 = "name",
        D0 = "castle_request_token",
        C0 = function () {
          if (Gi) return Gi;
          throw uu;
        },
        k0 = !0,
        q0 = VoidConstant,
        x0 = function (n) {
          var m,
            g,
            p,
            y,
            t,
            s,
            v,
            r = n || {};
          if (
            ((Ui = hasOwnPropertySafe(r, "window") ? r.window : Ui) ||
              (typeof window != st && (Ui = window)),
            !Ui)
          )
            throw uu;
          if (
            (hasOwnPropertySafe(r, "storageNamespace") &&
              void ((e = r.storageNamespace) && (vu.CastleCookieData.tn = e)),
            hasOwnPropertySafe(r, "storage") &&
              void (
                (e = r.storage) &&
                (e.name && (vu.CastleCookieData.tn = e.name),
                IsInteger(e.expireIn)) &&
                (vu.CastleCookieData.rn = e.expireIn)
              ),
            hasOwnPropertySafe(r, "avoidCookies") &&
              ((e = !!r.avoidCookies), void (vu.J = e)),
            hasOwnPropertySafe(r, "cookieDomain") &&
              void ((e = r.cookieDomain) && /\S+\.\S{2,}$/.test(e) && (Pi = e)),
            GetCastleData().J ||
              void (Pi =
                Pi ||
                (function (n) {
                  for (
                    var t = 0,
                      r = GetDocument(n),
                      e = xt(n).hostname,
                      c = "".concat(ctst_cookie).concat(GetCurrentDate()),
                      i = e.split(".");
                    t < i.length - 1 &&
                    ((e = i.slice(-1 - ++t).join(".")),
                    h2(n, c, c, "domain=".concat(e, ";")),
                    !IsSubstr(r.cookie, "".concat(c, "=").concat(c)));
  
                  );
                  return l2(n, c), e;
                })(Ui)),
            hasOwnPropertySafe(r, "eFn") && ((e = r.eFn), void (vu.cn = e)),
            hasOwnPropertySafe(r, "pk"))
          ) {
            var e = r.pk;
            if (!gt(e) || 35 !== e.length || "pk_" !== e.slice(0, 3)) throw cu;
            (vu.PK = e), E2();
          }
          if (
            (hasOwnPropertySafe(r, "apiUrl") &&
              void ((e = r.apiUrl) && (vu.CastleMonitorURL = e)),
            hasOwnPropertySafe(r, "timeout") &&
              ((e = r.timeout), void (IsVarNumerical(e) && (vu.X = e))),
            hasOwnPropertySafe(r, "verbose") &&
              ((e = !!r.verbose), void (vu.$ = e)),
            hasOwnPropertySafe(r, "throttling") &&
              ((e = r.throttling), void (IsVarNotVoidOrNull(e) && (vu.en = e))),
            k0)
          ) {
            if (!GetCastleData().PK) throw cu;
            (r = m = Ui),
              (e = GetCastleData()),
              (CastleDataCopy.throttling = e.en),
              (CastleDataCopy.avoidCookies = e.J),
              (CastleDataCopy.localStorage = !!(e = r).localStorage),
              SetCookieHelper(e, ctst_cookie, xArray, function () {
                CastleDataCopy.localStorage &&
                  (CastleDataCopy.ctstCookieGenerated = !0);
              }),
              void void (function (n, t) {
                try {
                  var r = n.localStorage;
                  if (r) return r.removeItem(t);
                } catch (e) {}
              })(e, ctst_cookie),
              void (Gi = v =
                {
                  createRequestToken: function () {
                    var r = {
                      then: function (n, t) {
                        return (
                          H2 &&
                            !r._value &&
                            (q2(s),
                            (r._value = (function () {
                              var n;
                              if (y2)
                                return (
                                  (n = s), (GetCID() || k2(n, GenerateUUID(n))).Tn
                                );
                            })())),
                          r._value ? n(r._value) : void m2.push([n, r]),
                          r
                        );
                      },
                    };
                    return r;
                  },
                  page: function (n) {
                    var i,
                      u,
                      a,
                      o = s,
                      t = v.createRequestToken(),
                      f = n,
                      _ = GetCastleData();
                    if (_.PK)
                      return IsVarNotVoidOrNull(f) &&
                        (IsVarNotVoidOrNull(f.user) ||
                          IsVarNotVoidOrNull(f.userJwt))
                        ? ((i = hasOwnPropertySafe(f, u0) ? f[u0] : xt(o).href),
                          (u = hasOwnPropertySafe(f, a0)
                            ? f[a0]
                            : GetDocument(o).title || i),
                          (a = hasOwnPropertySafe(f, o0)
                            ? f[o0]
                            : GetDocument(o).referrer),
                          A2(
                            0,
                            _.CastleMonitorURL,
                            _.PK,
                            function (c) {
                              t.then(function (n) {
                                var t = _.PK,
                                  r = n,
                                  e = {
                                    user: f.user,
                                    userJwt: f.userJwt,
                                    name: u,
                                    url: i,
                                    referrer: a,
                                  },
                                  t = i0(
                                    o,
                                    t,
                                    e.userJwt
                                      ? e0({ jwt: e.userJwt })
                                      : t0(e.user),
                                    [U2(r, M2, e, [a0, u0, o0], dt, !1)]
                                  );
                                c({ data: t });
                              });
                            },
                            j2,
                            _.X
                          ))
                        : (_.$ && O2(o, iu), x2({}, !1));
                    throw cu;
                  },
                  form: function (n) {
                    var t,
                      c = s,
                      r = v.createRequestToken(),
                      i = n,
                      e = {},
                      u = GetCastleData();
                    if (u.PK)
                      return IsVarNotVoidOrNull(i) &&
                        (IsVarNotVoidOrNull(i.user) ||
                          IsVarNotVoidOrNull(i.userJwt)) &&
                        IsVarNotVoidOrNull(i.name)
                        ? (t = GetCurrentDate()) - s0 < v0
                          ? x2(e, !1)
                          : ((s0 = t),
                            A2(
                              0,
                              u.CastleMonitorURL,
                              u.PK,
                              function (e) {
                                r.then(function (n) {
                                  var t = u.PK,
                                    r = n,
                                    r = i0(
                                      c,
                                      t,
                                      (t = i).userJwt
                                        ? e0({ jwt: t.userJwt })
                                        : t0(t.user),
                                      [U2(r, N2, t, [f0, _0], [_0], !1)]
                                    );
                                  e({ data: r });
                                });
                              },
                              T2,
                              u.X
                            ))
                        : (u.$ && O2(c, iu), x2(e, !1));
                    throw cu;
                  },
                  custom: function (n) {
                    return H0(s, v.createRequestToken(), n);
                  },
                  injectTokenOnSubmit: function (t, r) {
                    t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
                    var e = t.target || t.srcElement;
                    v.createRequestToken().then(function (n) {
                      St(
                        (function (n, t) {
                          for (var r = 0, e = t.childNodes; r < e.length; r++) {
                            var c = e[r];
                            if (It(c, E0) === D0) return c;
                          }
                          var i = CreateDocumentElement(n, "input");
                          return (
                            St(i, "type", "hidden"), St(i, E0, D0), Tt(t, i), i
                          );
                        })(s, e),
                        "value",
                        n
                      ),
                        r ? r(t) : e.submit();
                    });
                  },
                  formEventOnSubmit: function (n, t, r, e) {
                    if (!n.preventDefault) return !e || (e(n, null), void 0);
                    n.preventDefault();
                    var c = n.target || n.srcElement,
                      i = kt(
                        Pt(t) ? { userJwt: t } : { user: t || {} },
                        (function (n) {
                          for (
                            var t = new FormData(n),
                              r = {},
                              e = 0,
                              c = n.querySelectorAll("[".concat(m0, "]"));
                            e < c.length;
                            e++
                          ) {
                            var i = c[e],
                              u = It(i, m0),
                              i = It(i, b0);
                            t.has(i) && (r[u] = "" + t.get(i));
                          }
                          return { name: It(n, w0), values: r };
                        })(c)
                      );
                    v.form(i).then(function (t) {
                      r && r.injectToken
                        ? v.injectTokenOnSubmit(n, function (n) {
                            return e ? e(n, t) : c.submit();
                          })
                        : e
                        ? e(n, t)
                        : c.submit();
                    });
                  },
                }),
              void (Wi = s = m),
              void (o = initializeArrayWithValue(4, NullConstant)),
              (DataPoint_Mouse_TimeDifference_Threshold500 =
                ConstructDataPointType1(
                  GetEventTimeDifference,
                  TimeDiffExceedsMax500
                )),
              (DataPoint_Mouse_AngleVector_500 = ConstructDataPointType1(
                GetVectorAngleRelativeToX,
                TimeDiffExceedsMax500
              )),
              (DataPoint_Touch_TimeDifference_500 = ConstructDataPointType1(
                GetEventTimeDifference,
                TimeDiffExceedsMax500
              )),
              (DataPoint_Touch_AngleVector = ConstructDataPointType1(
                GetVectorAngleRelativeToX,
                TimeDiffExceedsMax500
              )),
              (DataPoint_Touch_VectorDiff = ConstructDataPointType1(
                GetVectorDistanceHelper,
                TimeDiffExceedsMax500
              )),
              (DataPoint_Mouse_VectorDiff_Threshold500 = ConstructDataPointType1(
                GetVectorDistanceHelper,
                TimeDiffExceedsMax500,
                NullConstant,
                NullConstant,
                NullConstant,
                2,
                !0,
                ONE_THOUSAND
              )),
              (DataPointMouseVectorDiffDeviation = ConstructDataPointType2(!1, ONE_THOUSAND)),
              (DataPointMouseVectorDiffMedian = ConstructDataPointType2(!1, ONE_THOUSAND)),
              (DataPoint_mouse_VectorDiff_Deviation = ConstructDataPointType2(
                !1,
                ONE_THOUSAND
              )),
              (DataPoint_mouse_VectorDiff_Median = ConstructDataPointType2(
                !1,
                ONE_THOUSAND
              )),
              (DataPoint_mouse_VectorDiff_Rounded = ConstructDataPointType2(
                !1,
                ONE_THOUSAND
              )),
              (DataPoint_mouse_TimeDiff_Rounded = ConstructDataPointType2(
                !1,
                ONE_THOUSAND
              )),
              (DataPoint_mouse_ChangeSpeed = ConstructDataPointType2(
                !1,
                ONE_THOUSAND
              )),
              (DataPoint_Mouse_VectorDiff = ConstructDataPointType1(
                GetVectorDistanceHelper,
                NullConstant,
                NullConstant,
                NullConstant,
                NullConstant,
                2,
                !0,
                ONE_THOUSAND
              )),
              (DataPoint_Mouse_TimeDiff = ConstructDataPointType1(
                GetEventTimeDifference,
                NullConstant,
                NullConstant,
                NullConstant,
                NullConstant,
                2,
                !0,
                ONE_THOUSAND
              )),
              (DataPoint_Mouse_TimeDiff_MouseDownUp = ConstructDataPointType1(
                GetEventTimeDifference,
                NullConstant,
                [EVENT_MOUSEDOWN, EVENT_MOUSEUP],
                NullConstant,
                AreKeyDownEvents
              )),
              (DataPoint_Mouse_TimeDiff_KeyDownUp_1000 = ConstructDataPointType1(
                KeyEventTimeDiff,
                TimeDiffExceeds1000,
                [EVENT_KEYDOWN, EVENT_KEYUP],
                NullConstant,
                AreKeyDownEvents
              )),
              (DataPoint_Key_KeysSameTimeDiff_1000 = ConstructDataPointType1(
                GetDateDiffIfKeysTheSame,
                TimeDiffExceeds1000,
                [EVENT_KEYDOWN, EVENT_KEYUP],
                NullConstant,
                AreKeyDownEvents
              )),
              (DataPoint_Key_TimeDiff_SpecialKey_Down = ConstructDataPointType1(
                GetEventTimeDifference,
                GetIsSpecialEditorKeyCritera,
                [EVENT_KEYDOWN]
              )),
              (DataPoint_Key_TimeDiff_SpecialKey_Up = ConstructDataPointType1(
                GetEventTimeDifference,
                GetIsSpecialEditorKeyCritera,
                [EVENT_KEYUP]
              )),
              (DataPoint_Key_TimeDiff_SpecialKey_DownUp = ConstructDataPointType1(
                GetEventTimeDifference,
                GetIsSpecialEditorKeyCritera,
                [EVENT_KEYDOWN, EVENT_KEYUP],
                NullConstant,
                AreKeyDownEvents
              )),
              (DataPoint_Key_TimeDiff_SpecialKey_UpDown = ConstructDataPointType1(
                GetEventTimeDifference,
                GetIsSpecialEditorKeyCritera,
                [EVENT_KEYUP, EVENT_KEYDOWN],
                NullConstant,
                AreKeyDownEvents
              )),
              (DataPoint_Touch_TimeDiff_StartEndCancel = ConstructDataPointType1(
                GetEventTimeDifference,
                NullConstant,
                [EVENT_TOUCHSTART, EVENT_TOUCHEND, EVENT_TOUCHCANCEL],
                IsTouchEvent,
                Wc
              )),
              (DataPoint_Touch_Sequential_TimeDiff = ConstructDataPointType1(
                GetEventTimeDifference,
                NullConstant,
                [EVENT_TOUCHSTART, EVENT_TOUCHEND, EVENT_TOUCHCANCEL],
                IsTouchEvent,
                SequentialTouchStartDetector
              )),
              (OrientationDataPoint = ConstructDataPointType1(WeightedCoordSum)),
              (DataPoint_Mouse_Click_TimeDiff = ConstructDataPointType1(
                GetEventTimeDifference,
                NullConstant,
                [EVENT_CLICK]
              )),
              (DataPoint_Mouse_VectorAngle = ConstructDataPointType1(
                GetVectorAngle,
                NullConstant,
                NullConstant,
                NullConstant,
                NullConstant,
                3,
                !1,
                ONE_THOUSAND
              )),
              (DataPoint_Mouse_VectorAngle_500 = ConstructDataPointType1(
                GetVectorAngle,
                TimeDiffExceedsMax500,
                NullConstant,
                NullConstant,
                NullConstant,
                3,
                !1,
                ONE_THOUSAND
              )),
              (DataPoint_Mouse_Deviation = ConstructDataPointType1(
                GetDeviationBetweenTwoPoints,
                NullConstant,
                NullConstant,
                NullConstant,
                NullConstant,
                3,
                !1,
                ONE_THOUSAND
              )),
              (DataPoint_Key_TimmeDiff_ClickDown = ConstructDataPointType1(
                GetEventTimeDifference,
                NullConstant,
                [EVENT_CLICK, EVENT_KEYDOWN],
                NullConstant,
                AreKeyDownEvents
              )),
              (DataPoint_KeyTimeDiff_LetterLetter = ConstructDataPointType1(
                KeyEventTimeDiff,
                NullConstant,
                [EVENT_KEYDOWN],
                NullConstant,
                IsEventDoubleLetter
              )),
              (DataPoint_KeyTimeDiff_LetterDigit = ConstructDataPointType1(
                KeyEventTimeDiff,
                NullConstant,
                [EVENT_KEYDOWN],
                NullConstant,
                IsEventLetterDigitCombo
              )),
              (DataPoint_KeyTimeDiff_DigitInvalid = ConstructDataPointType1(
                KeyEventTimeDiff,
                NullConstant,
                [EVENT_KEYDOWN],
                NullConstant,
                IsEventDigitInvalidCobo
              )),
              (DataPoint_KeyTimeDiff_DoubleInvalid = ConstructDataPointType1(
                KeyEventTimeDiff,
                NullConstant,
                [EVENT_KEYDOWN],
                NullConstant,
                IsEventDoubleInvalid
              )),
              void (DataPoint_Universal = ConstructDataPointType1(
                GetEventTimeDifference,
                NullConstant,
                NullConstant,
                NullConstant,
                NullConstant,
                2,
                !0,
                ONE_THOUSAND_
              )),
              (BackspaceCount = ConstructDataPointCounter(IsKeyBackspace, [
                EVENT_KEYDOWN,
              ])),
              (WheelDataPointCounter = ConstructDataPointCounter(
                AreWheelCoordsInvalid
              )),
              (NotTouchCount = ConstructDataPointCounter(
                NullConstant,
                [EVENT_TOUCHSTART],
                NotTouchEvent
              )),
              (KeyDownCount = ConstructDataPointCounter(NullConstant)),
              void void (EventValueArray = initializeArrayWithValue(
                EventTypeArray.length,
                0
              )),
              (g = m),
              (p = function () {
                var n,
                  t,
                  r,
                  e,
                  c,
                  i,
                  u,
                  a,
                  o = (t = m),
                  EventTypeArrayCpy2 = EventTypeArray,
                  _ = EVENT_UNK_DICTIONARY,
                  s = void 0;
                void (yi = jr(ht, Di, void 0));
                for (
                  var v = o,
                    h = (Sn = function (n) {
                      return DataEventListener(o, n, EventTypeArrayCpy2, _, s);
                    }),
                    EventTypeArrayCpy = EventTypeArrayCpy2,
                    l = _,
                    g = GetPermissions(v),
                    p = EventTypeArrayCpy.length - 1;
                  0 <= p;
                  p--
                ) {
                  var y = Hi(v, p, l);
                  if (p === EVENT_DEVICEMMOTION && g && g.query)
                    for (var H = bi.length - 1; 0 <= H; H--)
                      (function (n, r, e, c) {
                        n.query({ name: bi[H] })
                          .then(function (n) {
                            var t = n.state;
                            Ei ||
                              (t === wi &&
                                ((Ei = !0), RegisterNewListener(r, e, c)));
                          })
                          ["catch"](ht);
                      })(g, y, EventTypeArrayCpy[p], h);
                  else RegisterNewListener(y, EventTypeArrayCpy[p], h);
                }
                (r = GetCastleData()),
                  (u = t),
                  (a = r.CastleCookieData.tn),
                  ((n = r =
                    (function (n, t) {
                      try {
                        var r = n.localStorage;
                        return r ? r.getItem(t) : NullConstant;
                      } catch (e) {
                        return NullConstant;
                      }
                    })(u, a) ||
                    (function (n) {
                      var t = GetDocument(u);
                      try {
                        return (t.cookie.match("(^|; )".concat(n, "=([^;]*)")) ||
                          0)[2];
                      } catch (r) {
                        return null;
                      }
                    })(a)) &&
                    new RegExp(
                      "^["
                        .concat(Dr, "]{8}[")
                        .concat(Dr, "]{4}[0-5][")
                        .concat(Dr, "]{3}[89ab][")
                        .concat(Dr, "]{3}[")
                        .concat(Dr, "]{12}$")
                    ).test(n)) ||
                    (r = GenerateUUID(t)),
                  (t = k2((n = t), r)),
                  (r = GetCastleData()).J
                    ? h2(n, r.CastleCookieData.tn, "", "expires=".concat(au, ";"))
                    : l2(n, r.CastleCookieData.tn),
                  (e = n),
                  SetCID((c = t)),
                  void ((i = GetCastleData()).J
                    ? w2(e, i.CastleCookieData.tn, c.jn, function () {
                        return b2(e, i.nn.tn, c.jn);
                      })
                    : (b2(e, i.CastleCookieData.tn, c.jn),
                      w2(e, i.CastleCookieData.tn, c.jn))),
                  void (y2 = !0),
                  E2();
              }),
              (y = function () {
                return q2(m);
              }),
              (zi = void 0),
              (n = function () {
                (B1.kn = p), (B1.xn = y);
                var n,
                  i,
                  t,
                  r,
                  e,
                  c,
                  u,
                  data,
                  data2,
                  f,
                  _,
                  s,
                  v = g,
                  h =
                    (RegisterFPListener(
                      (data = v),
                      "animationstart",
                      (data2 = function (n) {
                        var t = ApplyTransformationNone(getObjectValues(n));
                        AppendFieldToStorage_(
                          FP2_ListenerInputBoxTypeBitField,
                          JUST_APPEND,
                          ConvertBinaryArrayToHex(t)
                        ),
                          Return3rdArgument(
                            A1,
                            FP2_ListenerInputBoxTypeBitField,
                            t
                          );
                      })
                    ),
                    void RegisterFPListener(data, "input", data2),
                    SetFieldStorageEnum(FP_PlatformEnum, GetPlatfor(v), [
                      str_MacIntel,
                      Str_Win32,
                      Str_iPhone,
                      Str_LinuxArmv81,
                    ]),
                    SetFieldStorageEnum(FP_VendorEnum, GetVendor(v), [
                      strGoogleInc,
                      strAppleComputer,
                    ]),
                    SetFieldStorageEnum(FP_Language, GetLanguage(v), [
                      removeDashFromLanguage(strEnUS),
                      removeDashFromLanguage(strEsEs),
                      removeDashFromLanguage(StrFrFr),
                      removeDashFromLanguage(StrPtB4),
                      removeDashFromLanguage(strEnGB),
                      removeDashFromLanguage(StrDeDE),
                      removeDashFromLanguage(StrRuRU),
                      ToLower(removeDashFromLanguage(strEnUS)),
                      ToLower(removeDashFromLanguage(strEnGB)),
                    ]),
                    SetFieldStorage3(FP_DeviceMemory, GetDeviceMemory(v)),
                    (data = FP_ScreenDims),
                    (t = GetScreenWidth((data2 = v))),
                    (r = validation(GetScreen(data2).availWidth)),
                    (e = GetSccreenHeight(data2)),
                    (d = validation(GetScreen(data2).availHeight)),
                    (c = ValuesToHexString(t, r)),
                    (u = ValuesToHexString(e, d)),
                    ProcessField1(data, JUST_APPEND, c + u),
                    void Return3rdArgument(z, data, [t, e, r, d]),
                    ProcessField1(
                      FP_ScreenDepth,
                      B2H_WITH_CHECKS,
                      ((c = GetScreen(v)),
                      IsVarNotVoidOrNull(c[str_colorDepth])
                        ? c[str_colorDepth]
                        : c[str_pixelDepth])
                    ),
                    ProcessField1(
                      FP_HardwareConcurrency,
                      B2H_WITH_CHECKS,
                      GetHardwareConcurrency(v)
                    ),
                    SetFieldStorage3(
                      FP_ScreenPixelRatio,
                      ((u = GetScreen((data2 = v))),
                      IsVarNotVoidOrNull(u[str_systemXDPI]) &&
                      IsVarNotVoidOrNull(u[str_logicalXDPI]) &&
                      u[str_systemXDPI] > u[str_logicalXDPI]
                        ? MathDiv(u[str_systemXDPI], u[str_logicalXDPI])
                        : IsVarNotVoidOrNull(data2[str_devicePixelRatio])
                        ? data2[str_devicePixelRatio]
                        : 1)
                    ),
                    (data = FP_TimezoneVsDst),
                    (t = newDate()[str_getTimezoneOffset]()),
                    (e = newDate()).setDate(1),
                    e.setMonth(0),
                    (r = e[str_getTimezoneOffset]()),
                    e.setMonth(6),
                    (r = MathAbsDiff(r, e[str_getTimezoneOffset]())),
                    (e = ByteToHex(t / 15) + ByteToHex(r / 15)),
                    ProcessField1(data, JUST_APPEND, e),
                    void Return3rdArgument(z, data, [t, r]),
                    HashAndSetField(
                      FP_MimeTypesHash,
                      RunAndCatch(function () {
                        return ApplyTransformationToArray(
                          GetMimeTypes(v),
                          function (n) {
                            return n && n.type;
                          }
                        );
                      })
                    ),
                    HashAndSetField(
                      FP_PluginsHash,
                      RunAndCatch(function () {
                        return ApplyTransformationToArray(
                          GetPlugins(v),
                          function (n) {
                            return n.name + n.description + n.length + n.filename;
                          }
                        );
                      })
                    ),
                    (data2 = v),
                    (data = FP_BrowserFeaturesBitfield),
                    (d = [
                      isToSourceSupported(),
                      GetDocument(data2)[str_documentMode],
                      safeGet((d = data2), str_opr) || safeGet(d, str_opera),
                      GetNavigator(data2)[str_oscpu],
                      GetNavigatorWebDriver(data2),
                      GetChrome(data2),
                      GetServiceWorker(data2),
                      GetPermissions(data2),
                      GetNavigator(data2)["storage"],
                      GetNavigator(data2)[str_bluetooth],
                      GetNavigator(data2)[str_credentials],
                      GetNavigator(data2)[str_cookieEnabled],
                    ]),
                    ProcessField1(data, JUST_APPEND, ConvertBinaryArrayToHex(d)),
                    void Return3rdArgument(z, data, ApplyTransformationNone(d)),
                    (data2 = FP_WebDriverDetectionFlags),
                    (u = [
                      !!(data = v)["__".concat(str_nightmare)],
                      IsAnyValueTrue([
                        phantomArray[0] in (c = data),
                        phantomArray[1] in c,
                        phantomArray[2] in c,
                      ]),
                      ((e = GetDocument((u = c = data))),
                      (c = GetDocumentElement(c)),
                      IsAnyValueTrue([
                        str_webdriver in u,
                        "_".concat(Str_Selenium_IDE_Recorder) in u,
                        callSelenium in u,
                        "_".concat(Str_seleniu) in u,
                        "__".concat(str_webdriver, "_").concat(str_script_fn) in
                          e,
                        "__".concat(str_driver, "_").concat(str_evaluate) in e,
                        "__".concat(str_webdriver, "_").concat(str_evaluate) in e,
                        "__".concat(Str_seleniu, "_").concat(str_evaluate) in e,
                        "__fx".concat(str_driver, "_").concat(str_evaluate) in e,
                        "__".concat(str_driver, "_").concat(str_unwrapped) in e,
                        "__".concat(str_webdriver, "_").concat(str_unwrapped) in
                          e,
                        "__".concat(Str_seleniu, "_").concat(str_unwrapped) in e,
                        "__fx".concat(str_driver, "_").concat(str_unwrapped) in e,
                        "__".concat(str_webdriver, "_").concat(str_script_fn) in
                          e,
                        "__".concat(str_webdriver, "_").concat(str_script_func) in
                          e,
                        DoesHTMLElementHaveAttr(c, Str_seleniu),
                        DoesHTMLElementHaveAttr(c, str_webdriver),
                        DoesHTMLElementHaveAttr(c, str_driver),
                      ])),
                      !!data.external &&
                        IsFunction(data.external.toString) &&
                        IsSubstr(data.external.toString(), Str_Sequentumm),
                      !!data.spawn,
                      !(!data[domAutomation] && !data["".concat(domAutomation, "Controller")]),
                      !!data.emit,
                      !!data.Buffer,
                    ]),
                    ProcessField1(data2, JUST_APPEND, ConvertBinaryArrayToHex(u)),
                    void Return3rdArgument(z, data2, ApplyTransformationNone(u)),
                    (data = FP_UserAgent),
                    (data2 = GetUserAgent(v)),
                    void (
                      IsVarNotVoidOrNull(data2) &&
                      (ProcessField1(
                        data,
                        JUST_APPEND,
                        SerializeStringWithLengthToHex(data2, 512)
                      ),
                      Return3rdArgument(z, data, data2))
                    ),
                    RunAndCatch(function () {
                      var r = v,
                        u = CreateDocumentElement(r, lu),
                        a = Fu(u) ? u.getContext(mu) : VoidConstant;
                      if (a)
                        return {
                          Gn: RunAndCatch(function () {
                            return (
                              (t = a),
                              SetDimensions((n = u), 500, 100),
                              (r = du + String.fromCharCode(55357, 56836)),
                              (t.textBaseline = Du),
                              SetFillStyle(t, "#f60"),
                              Iu(t, 125, 1, 62, 20),
                              SetFillStyle(t, "#069"),
                              SetFont(t, gu),
                              FillTextHelper(t, r, 2, 20),
                              SetFillStyle(t, yu),
                              SetFont(t, pu),
                              FillTextHelper(t, r, 4, 22),
                              ContentToHash(n)
                            );
                            var n, t, r;
                          }),
                          Un: RunAndCatch(function () {
                            var n = u,
                              t = a;
                            SetDimensions(n, 400, 200),
                              (t.globalCompositeOperation = Cu);
                            for (var r = 0, e = xu; r < e.length; r++) {
                              var c = e[r],
                                i = c[0];
                              c[1],
                                c[2],
                                SetFillStyle(t, i),
                                void t.beginPath(),
                                DrawCircle(t),
                                void t.closePath(),
                                FillThing(t, VoidConstant);
                            }
                            return (
                              SetFillStyle(t, "#70f"),
                              DrawCircle(t),
                              DrawCircle(t),
                              FillThing(t, Hu),
                              ContentToHash(n)
                            );
                          }),
                          Qn: RunAndCatch(function () {
                            return (t =
                              (n =
                                (n = CreateDocumentElement(r, lu)).getContext(
                                  wu
                                ) || n.getContext(bu + wu)) && n.getExtension(Eu))
                              ? n.getParameter(t.UNMASKED_RENDERER_WEBGL)
                              : VoidConstant;
                            var n, t;
                          }),
                        };
                    })),
                  d =
                    (h &&
                      (ProcessField1(
                        FP_FontRenderHash,
                        SERIALIZED_BYTE_ARRAY,
                        h.Gn
                      ), // Font Render Hash
                      ProcessField1(
                        FP_CircleRenderHash,
                        SERIALIZED_BYTE_ARRAY,
                        h.Un
                      ), // Circle Render Hash
                      ProcessField1(
                        FP_GraphicsCard,
                        SERIALIZED_BYTE_ARRAY,
                        h.Qn
                      )),
                    ProcessFieldNoValue(
                      FP_DoNotTrackPreference,
                      ((t = GetNavigator((data = v))),
                      "doNotTrack" in t
                        ? t["doNotTrack"]
                        : "doNotTrack" in data
                        ? data["doNotTrack"]
                        : ConcatWithCapitalization("ms", "doNotTrack") in t
                        ? t[ConcatWithCapitalization("ms", "doNotTrack")]
                        : void 0)
                    ),
                    ProcessFieldNoValue(
                      FP_JavaEnabled,
                      RunAndCatch(function () {
                        return (
                          (n = GetNavigator(v)),
                          IsFunction(n[str_javaEnabled]) && n[str_javaEnabled]()
                            ? 1
                            : VoidConstant
                        );
                        var n;
                      })
                    ),
                    SetFieldStorageEnum(
                      FP_ProductSubEnum,
                      GetNavigator(v)[str_productSub],
                      productSubEnumm
                    ),
                    ProcessField1(
                      FP_EpochLocaleStr,
                      SERIALIZED_BYTE_ARRAY,
                      ((r = newDate()).setTime(0), r.toLocaleString())
                    ),
                    ProcessField1(
                      FP_Eval_ToString_Length,
                      B2H_WITH_CHECKS,
                      (data2 = v)[str_eval]
                        ? data2[str_eval].toString().length
                        : ZeroConstant
                    ),
                    SetFieldStorageEnum(
                      FP_NavigatorBuildID,
                      GetNavigator(v)[str_buildID],
                      [e2]
                    ),
                    Ho()),
                  l =
                    (ProcessField1(FP_MaxRecursionLimit, B2H_WITH_CHECKS, d.un),
                    SetFieldStorageEnum(
                      FP_MaxRecursionLimitErrorMessageEnum,
                      d.an,
                      [
                        str_MaximumCallStackSizeExceeded,
                        str_MaximumCallStackSizeExceeded2,
                        str_TooMuchRecursion,
                      ]
                    ),
                    SetFieldStorageEnum(FP_MaxRecursionLimitErrorNameEnum, d.on, [
                      Str_InternalError,
                      Str_RangeError,
                      Str_Error,
                    ]),
                    ProcessField1(
                      FP_RecursionStackTraceStrLen,
                      B2H_WITH_CHECKS,
                      d.fn
                    ), // stack trace str length
                    (data = FP_TouchMetricData),
                    (e = (function (n) {
                      var t,
                        r,
                        e = GetNavigator(n),
                        c = GetDocument(n),
                        i = 0;
                      IsVarNotVoidOrNull(e[str_maxTouchPoints])
                        ? (i = e[str_maxTouchPoints])
                        : ((r = e["ms".concat(str_maxTouchPoints)]),
                          IsVarNotVoidOrNull(e[r]) && (i = e[r]));
                      try {
                        c.createEvent(str_TouchEvent), (t = !0);
                      } catch (u) {
                        t = !1;
                      }
                      return {
                        maxTouchPoints: i,
                        supportsTouchEvents: t,
                        onTouchStartExists: "on".concat(str_touchstart) in n,
                      };
                    })(v)),
                    (c = parseInt(
                      ""
                        .concat(GetBoolean(e.supportsTouchEvents))
                        .concat(GetBoolean(e.onTouchStartExists)),
                      2
                    )),
                    (e = ByteToHex(((63 & e.maxTouchPoints) << 2) | c)),
                    ProcessField1(data, JUST_APPEND, e),
                    void Return3rdArgument(z, data, c),
                    SetFieldStorageEnum(FP_UndefinedCallErrEnum, mo(), [
                      "Cannot read property 'b' of undefined",
                      "(void 0) is undefined",
                      "undefined is not an object (evaluating '(void 0).b')",
                      "Cannot read properties of undefined (reading 'b')",
                    ]),
                    HashAndSetField(
                      FP_NavigatorPropertiesHash,
                      (function (n) {
                        var t = [];
                        if (
                          !(
                            hasOwnPropertySafe(
                              ObjectType,
                              "getOwnPropertyNames"
                            ) &&
                            hasOwnPropertySafe(ObjectType, str_getPrototypeOf) &&
                            hasOwnPropertySafe(
                              ObjectType,
                              str_getOwnPropertyDescriptor
                            )
                          )
                        )
                          return t;
                        var r = GetNavigator(n),
                          e = r;
                        do
                          for (
                            var c = 0, i = GetOwnPropretyNames(e);
                            c < i.length;
                            c++
                          ) {
                            var u = i[c];
                            t.push(u);
                          }
                        while ((e = GetPrototypeOf(e)));
                        for (var a, o = [], f = 0, _ = t; f < _.length; f++) {
                          var u = _[f],
                            s = GetOwnPropertyDescriptor(GetPrototypeOf(r), u);
                          IsVarNotVoidOrNull(s)
                            ? IsVoid(s.value)
                              ? (a = s.value.toString())
                              : IsVoid(s.get) && (a = s.get.toString())
                            : (a = ""),
                            o.push("".concat(u, "~~~").concat(a));
                        }
                        return o;
                      })(v)
                    ),
                    (data2 = FP_CodecPlayabilityBitfield),
                    void (
                      (data = (function (n) {
                        try {
                          return (
                            (r = CreateDocumentElement(n, str_video)),
                            [
                              checkVideoPlayability(r, webmCodec),
                              checkVideoPlayability(r, mp4Codec),
                              checkVideoPlayability(r, oggCodec),
                            ].concat(
                              ((t = CreateDocumentElement(n, str_audio)),
                              [
                                checkAudioPlayability(t, _o),
                                checkAudioPlayability(t, fo),
                                checkAudioPlayability(t, oo),
                                checkAudioPlayability(t, ao),
                                checkAudioPlayability(t, uo),
                              ])
                            )
                          );
                        } catch (e) {
                          return [];
                        }
                        var t, r;
                      })(v)) &&
                      data.length &&
                      ((u = intToFixedSizeHexBE(
                        parseInt(
                          ApplyTransformationToArray(
                            data,
                            getLowerTwoBitsAsBinaryString
                          ).join(""),
                          2
                        ),
                        2
                      )),
                      ProcessField1(FP_CodecPlayabilityBitfield, JUST_APPEND, u),
                      Return3rdArgument(z, data2, data))
                    ),
                    CallbackThenCallOtherCallback(
                      B1,
                      GetMediaDevicesWithCallback,
                      [v],
                      function (n) {
                        var t, r;
                        (t = FP_MediaInputAvailableBitfield),
                          void (
                            (n = n).length &&
                            ((r = [
                              n[CONST_VIDEO_INPUT],
                              n[CONST_AUDIO_INPUT],
                              n[CONST_GENERAL_AUDIO],
                            ]),
                            ProcessField1(
                              t,
                              JUST_APPEND,
                              ConvertBinaryArrayToHex(r)
                            ),
                            Return3rdArgument(z, t, ApplyTransformationNone(r)))
                          );
                      }
                    ),
                    AppendFieldToStorage_(FP_ConstantOne, B2H, CONST_ONE__),
                    AppendFieldToStorage_(
                      FP2_TimeZone,
                      SERIALIZED_BYTE_ARRAY,
                      (function () {
                        var n = GetUserLocale();
                        if (n) return n[str_timezone];
                      })()
                    ),
                    AppendFieldToStorage_(
                      FP2_LanguageArray,
                      SERIALIZED_BYTE_ARRAY,
                      ((t = GetNavigatorLanguages(v)),
                      (r = GetUserLocale2()),
                      (d = (function (n) {
                        if (IsValueArray(n) && n.length) return n.join(",");
                      })(t)),
                      r &&
                        (d
                          ? ArraySearchExists(t, r) || (d = d + "," + r)
                          : (d = r)),
                      d)
                    ),
                    AppendFieldToStorage_(
                      FP2_UserLocale2,
                      SERIALIZED_BYTE_ARRAY,
                      GetUserLocale2()
                    ),
                    (data2 = FP2_CastleDataBitField),
                    (e = getObjectValues(CastleDataCopy)),
                    AppendFieldToStorage_(
                      data2,
                      JUST_APPEND,
                      ConvertBinaryArrayToHex(e)
                    ),
                    void Return3rdArgument(A1, data2, e),
                    !(!(c = GetPermissions(v)) || !c.query) &&
                      CallbackThenCallOtherCallback(
                        B1,
                        CheckNotificationPermission,
                        [v],
                        function (n) {
                          ProcessField3AndPutInStorage2(
                            FP2_NotificationPermission,
                            n
                          );
                        }
                      ),
                    ProcessField3AndPutInStorage2(
                      FP2_BraveDetector2,
                      ((u = GetNavigator(v)),
                      (t = CapitalizeFirstLetter(str_brave)),
                      (r = "is".concat(t)),
                      safeGet(u, str_brave) &&
                        GetTypeName(GetPrototypeOf(u[str_brave])) == t &&
                        u[str_brave][r].toString() ==
                          "function ".concat(r, "() { ").concat(Wn, " }"))
                    ),
                    void ((d = GetNavigator(v).userAgentData)
                      ? "" === d[str_Platform]
                        ? ProcessField3AndPutInStorage2(FP2_IsPlatformEmpty, !0)
                        : str_getHighEntropyValues in d &&
                          CallbackThenCallOtherCallback(
                            B1,
                            IsPlatformEmptyChecks,
                            [d],
                            function (n) {
                              ProcessField3AndPutInStorage2(
                                FP2_IsPlatformEmpty,
                                n
                              );
                            }
                          )
                      : ProcessField3AndPutInStorage2(FP2_IsPlatformEmpty, !1)),
                    AppendFieldToStorage_(
                      FP2_NegativeErrorLength,
                      B2H_WITH_CHECKS,
                      NegativeErrorLength
                    ),
                    (data = FP2_ChromeFeatureSet),
                    (i = n = v),
                    (e =
                      (IsChromium_BasedOnNegativeError &&
                        RunAndCatch(function () {
                          return (
                            (t =
                              str_getVideoPlaybackQuality in
                              (n = i)[str_HTMLVideoElement].prototype),
                            (r = CSS_Supports(n, str_appearanceInitial)),
                            (e = str_ContentIndex in n),
                            (c = str_ContactsManager in n),
                            {
                              Jn: r && !e,
                              $n: t && !c,
                              Kn: !(
                                n[str_NetworkInformation] &&
                                str_downlinkMax in
                                  (n[str_NetworkInformation].prototype || {})
                              ),
                            }
                          );
                          var n, t, r, e, c;
                        })) ||
                      {}),
                    (t = [
                      ((c = -50),
                      SearchLinearExists(GetKeys((t = n)).slice(c), str_chrome) &&
                        SearchLinearExists(
                          GetOwnPropretyNames(t).slice(c),
                          str_chrome
                        )),
                      CheckChromeExtensionRuntimeExists(n),
                      e.Jn,
                      e.$n,
                      e.Kn,
                      ((t = n),
                      (c = new RegExp(_a)).test(GetUserAgent(t)) ||
                        c.test(GetNavigator(t)[str_appVersion])),
                      G_(n),
                      RunAndCatch(function () {
                        return !!n.matchMedia && n.matchMedia(ta).matches;
                      }),
                      ((e = GetNavigator(n)),
                      str_pdfViewerEnabled in e &&
                        !1 === e[str_pdfViewerEnabled]),
                      (validation((t = n).innerWidth) === GetScreenWidth(t) &&
                        validation(t.outerHeight) === GetSccreenHeight(t)) ||
                        (GetVisualViewport(t) &&
                          GetVisualViewport(t).width === GetScreenWidth(t) &&
                          GetVisualViewport(t).height === GetSccreenHeight(t)),
                      ((e = GetNavigator((c = n))),
                      IsChromium_BasedOnNegativeError &&
                        CSS_Supports(c, str_accentColorInitial) &&
                        (!(str_share in e) || !(str_canShare in e))),
                      RunAndCatch(function () {
                        return CSS_Supports(n, Ku);
                      }),
                      GetNavigatorWebDriver(n) == VoidConstant,
                    ]),
                    AppendFieldToStorage_(
                      data,
                      JUST_APPEND,
                      ConvertBinaryArrayToHex(t)
                    ),
                    void Return3rdArgument(A1, data, ApplyTransformationNone(t)),
                    (u = data2 = v),
                    IsChromium_BasedOnNegativeError &&
                      str_flat in Array.prototype &&
                      !safeGet(u, str_reportingObserver) &&
                      GetNavigator(data2)[str_keyboard] === NullConstant);
                l &&
                  AppendFieldToStorage_(
                    FP2_PrivacyBlockerString,
                    SERIALIZED_BYTE_ARRAY,
                    str_brave
                  ),
                  RunAndCatch(function () {
                    var n;
                    (n = v)[et] && n[et][N_]();
                  }),
                  RunAndCatch(function () {
                    var n;
                    (n = B_(v).bn), (Mi = JsonParse(JsonStringify(n)));
                  }),
                  (_ = function (n) {
                    try {
                      var t;
                      (f = L_(v) || {}),
                        (_ = f.En),
                        (f = f.Dn),
                        (Oi = _),
                        (Bi = f),
                        void void RunAndCatch(function () {
                          var c = B_(Oi).wn.pn();
                          AllHTMLPropertyStrings = Yt(
                            GetKeys(c),
                            function (n, t, r) {
                              var e;
                              return (
                                (n[t] =
                                  (e = c[t]) &&
                                  FilterArray(e, function (n) {
                                    return !new RegExp(
                                      str_ObjectToStringIncompatibleProxy
                                    ).test(n);
                                  }).length),
                                n
                              );
                            },
                            {}
                          );
                        }),
                        (a = Qf.vn()),
                        (o = Yt(
                          GetKeys(a),
                          function (n, t) {
                            return n + a[t].length;
                          },
                          0
                        ));
                      AppendFieldToStorage_(
                        FP2_ExpectedPropertyStringsFoundCount,
                        B2H_WITH_CHECKS,
                        { data: a, total: o }.total
                      ),
                        (e = FP2_ClassPropertiesCount),
                        (c = ApplyTransformationToArray(
                          [
                            NavigatorPropertyStrings,
                            ScreenPropertyStrings,
                            DatePropertyStrings,
                            FontFacePropertyStrings,
                            CanvasElementStrings,
                            CanvasRenderingContext2DStrings,
                            GetTextMetricsStrings,
                            GetAudioBufferStrings,
                          ],
                          function (n) {
                            return FilterArray(n, function (n) {
                              return AllHTMLPropertyStrings[n];
                            }).length;
                          }
                        )),
                        (i = ApplyTransformationToArray(
                          c,
                          getLowerNibbleAsHex
                        ).join("")),
                        (u = appendFieldToHexString(e, JUST_APPEND, i)),
                        (FieldStorage2[e] = u),
                        void Return3rdArgument(A1, e, c, i),
                        l ||
                          ((t = RunAndCatch(function () {
                            var n = GetKeys(Mi).length,
                              t = {
                                Xn: {
                                  nt: ["0b637a33", "37e2f32e", "318390d1"],
                                  tt: ["0b637a33", "37e2f32e", "318390d1"],
                                  rt: ["0b637a33", "081d6d1b", "c767712b"],
                                },
                                et: {
                                  nt: ["ca9d9c2f"],
                                  tt: ["ca9d9c2f"],
                                  ct: ["77dea834"],
                                  it: ["77dea834"],
                                  ut: ["77dea834"],
                                  ot: ["77dea834", "c767712b"],
                                  ft: ["77dea834", "c767712b"],
                                },
                                _t: {
                                  nt: ["98ec858e", "dbbaf31f"],
                                  tt: ["98ec858e", "dbbaf31f"],
                                  st: ["98ec858e", "dbbaf31f"],
                                  ut: [
                                    "98ec858e",
                                    "a2971888",
                                    "dbbaf31f",
                                    "c767712b",
                                  ],
                                  ot: [
                                    "9f1c3dfe",
                                    "a2971888",
                                    "dbbaf31f",
                                    "c767712b",
                                  ],
                                  ft: [
                                    "98ec858e",
                                    "a2971888",
                                    "dbbaf31f",
                                    "c767712b",
                                  ],
                                },
                                vt: {
                                  st: ["77dea834"],
                                  ht: ["77dea834"],
                                  dt: ["77dea834"],
                                  lt: ["77dea834"],
                                  gt: ["77dea834"],
                                  yt: ["77dea834"],
                                  Ht: ["77dea834"],
                                  wt: ["77dea834"],
                                  bt: ["77dea834"],
                                },
                                Et: {
                                  ft: ["fd00bf5d", "8ee7df22", "c767712b"],
                                  ot: ["fd00bf5d", "8ee7df22", "c767712b"],
                                  ut: ["fd00bf5d", "8ee7df22", "c767712b"],
                                  Dt: ["fd00bf5d", "8ee7df22", "c767712b"],
                                  Ct: ["fd00bf5d", "8ee7df22", "c767712b"],
                                  kt: ["fd00bf5d", "8ee7df22", "c767712b"],
                                  qt: ["fd00bf5d", "8ee7df22", "c767712b"],
                                  xt: ["fd00bf5d", "8ee7df22", "c767712b"],
                                  Ft: ["fd00bf5d", "8ee7df22", "c767712b"],
                                  Rt: ["dfd41ab4"],
                                  St: ["dfd41ab4"],
                                  It: ["dfd41ab4"],
                                  Tt: ["dfd41ab4"],
                                  jt: ["dfd41ab4"],
                                  At: ["dfd41ab4"],
                                  Bt: ["dfd41ab4"],
                                },
                                Ot: { ut: ["0cb0c682"], ft: ["0cb0c682"] },
                                Lt: {
                                  Rt: ["452924d5"],
                                  jt: ["452924d5"],
                                  At: ["452924d5"],
                                },
                                Mt: {
                                  nt: [
                                    "0007ab4e",
                                    "0b637a33",
                                    "866fa7e7",
                                    "318390d1",
                                  ],
                                  tt: [
                                    "0007ab4e",
                                    "0b637a33",
                                    "866fa7e7",
                                    "318390d1",
                                  ],
                                  st: [
                                    "0007ab4e",
                                    "0b637a33",
                                    "866fa7e7",
                                    "318390d1",
                                  ],
                                  ht: [
                                    "0007ab4e",
                                    "0b637a33",
                                    "866fa7e7",
                                    "318390d1",
                                  ],
                                  dt: [
                                    "0007ab4e",
                                    "0b637a33",
                                    "866fa7e7",
                                    "318390d1",
                                  ],
                                  gt: [
                                    "0007ab4e",
                                    "0b637a33",
                                    "866fa7e7",
                                    "318390d1",
                                  ],
                                  yt: [
                                    "0007ab4e",
                                    "0b637a33",
                                    "866fa7e7",
                                    "318390d1",
                                  ],
                                  Ht: [
                                    "0007ab4e",
                                    "0b637a33",
                                    "866fa7e7",
                                    "318390d1",
                                  ],
                                  wt: [
                                    "0007ab4e",
                                    "0b637a33",
                                    "866fa7e7",
                                    "318390d1",
                                  ],
                                  bt: [
                                    "0007ab4e",
                                    "0b637a33",
                                    "866fa7e7",
                                    "318390d1",
                                  ],
                                  Rt: ["dfd41ab4"],
                                },
                                Nt: {
                                  nt: ["55e9b959"],
                                  tt: ["55e9b959", "50a281b5"],
                                  ct: ["55e9b959"],
                                  it: ["55e9b959"],
                                  st: ["55e9b959"],
                                  ht: ["55e9b959"],
                                  dt: ["55e9b959"],
                                  lt: ["55e9b959"],
                                  gt: ["55e9b959"],
                                  yt: ["55e9b959"],
                                  Ht: ["55e9b959"],
                                  wt: ["55e9b959"],
                                  bt: ["55e9b959"],
                                  rt: ["55e9b959", "c767712b"],
                                  ft: ["55e9b959", "c767712b"],
                                  ot: ["55e9b959", "c767712b"],
                                  ut: ["55e9b959"],
                                  Rt: [
                                    "efbd4cf9",
                                    "a63491fb",
                                    "b011fd1c",
                                    "194ecf17",
                                    "55e9b959",
                                  ],
                                },
                              },
                              r = {
                                zt: T(M("HTMLIFrameElement", "contentDocument")),
                                Pt: T(M("HTMLIFrameElement", "contentWindow")),
                                Wt: T(M("Document", "createElement")),
                                Gt: T(M("Document", "getElementById")),
                                Ut: T(M("Element", "append")),
                                Qt: T(M("Element", "insertAdjacentElement")),
                                Vt: T(M("Element", "insertAdjacentHTML")),
                                Yt: T(M("Element", "insertAdjacentText")),
                                Zt: T(M("Element", "prepend")),
                                Jt: T(M("Element", "replaceWith")),
                                $t: T(M("Node", "appendChild")),
                                Kt: T(M("Node", "insertBefore")),
                                Xt: T(M("Node", "replaceChild")),
                                nr: T(M("HTMLCanvasElement", "getContext")),
                                tr: T(M("HTMLCanvasElement", "toDataURL")),
                                rr: T(M("HTMLCanvasElement", "toBlob")),
                                er: T(
                                  M("CanvasRenderingContext2D", "getImageData")
                                ),
                                cr: T(M("AnalyserNode", "getByteFrequencyData")),
                                ir: T(M("AnalyserNode", "getByteTimeDomainData")),
                                ur: T(M("AnalyserNode", "getFloatFrequencyData")),
                                ar: T(
                                  M("AnalyserNode", "getFloatTimeDomainData")
                                ),
                                _r: T(M("AudioBuffer", "copyFromChannel")),
                                sr: T(M("AudioBuffer", "getChannelData")),
                                vr: T(M("Navigator", "hardwareConcurrency")),
                                hr: T(M("Screen", "availHeight")),
                                dr: T(M("Screen", "availLeft")),
                                lr: T(M("Screen", "availTop")),
                                gr: T(M("Screen", "availWidth")),
                                pr: T(M("Screen", "colorDepth")),
                                yr: T(M("Screen", "pixelDepth")),
                              },
                              e = {
                                zt: T(N("HTMLIFrameElement", "contentDocument")),
                                Pt: T(N("HTMLIFrameElement", "contentWindow")),
                                Wt: T(N("Document", "createElement")),
                                Gt: T(N("Document", "getElementById")),
                                Ut: T(N("Element", "append")),
                                Qt: T(N("Element", "insertAdjacentElement")),
                                Vt: T(N("Element", "insertAdjacentHTML")),
                                Yt: T(N("Element", "insertAdjacentText")),
                                Zt: T(N("Element", "prepend")),
                                Jt: T(N("Element", "replaceWith")),
                                $t: T(N("Node", "appendChild")),
                                Kt: T(N("Node", "insertBefore")),
                                Xt: T(N("Node", "replaceChild")),
                                nr: T(N("HTMLCanvasElement", "getContext")),
                                tr: T(N("HTMLCanvasElement", "toDataURL")),
                                rr: T(N("HTMLCanvasElement", "toBlob")),
                                er: T(
                                  N("CanvasRenderingContext2D", "getImageData")
                                ),
                                cr: T(N("AnalyserNode", "getByteFrequencyData")),
                                ir: T(N("AnalyserNode", "getByteTimeDomainData")),
                                ur: T(N("AnalyserNode", "getFloatFrequencyData")),
                                ar: T(
                                  N("AnalyserNode", "getFloatTimeDomainData")
                                ),
                                _r: T(N("AudioBuffer", "copyFromChannel")),
                                sr: T(N("AudioBuffer", "getChannelData")),
                                vr: T(N("Navigator", "hardwareConcurrency")),
                                hr: T(N("Screen", "availHeight")),
                                dr: T(N("Screen", "availLeft")),
                                lr: T(N("Screen", "availTop")),
                                gr: T(N("Screen", "availWidth")),
                                pr: T(N("Screen", "colorDepth")),
                                yr: T(N("Screen", "pixelDepth")),
                              },
                              c = t.Xn,
                              i = t.et,
                              u = t._t,
                              a = t.vt,
                              o = t.Et,
                              f = t.Ot,
                              _ = t.Lt,
                              s = t.Mt,
                              t = t.Nt;
                            if (n)
                              return SearchLinearExists(i.nt, e.zt) &&
                                SearchLinearExists(i.tt, e.Pt) &&
                                SearchLinearExists(i.ct, e.Wt) &&
                                SearchLinearExists(i.it, e.Gt) &&
                                SearchLinearExists(i.ft, e.tr) &&
                                SearchLinearExists(i.ot, e.rr) &&
                                SearchLinearExists(i.ut, e.er)
                                ? str_Trace
                                : 3 <= n &&
                                  SearchLinearExists(u.nt, r.zt) &&
                                  SearchLinearExists(u.tt, r.Pt) &&
                                  SearchLinearExists(u.st, r.Ut) &&
                                  SearchLinearExists(u.ft, r.tr) &&
                                  SearchLinearExists(u.ot, r.rr) &&
                                  SearchLinearExists(u.ut, r.er)
                                ? str_CanvasBlocker
                                : SearchLinearExists(a.st, e.Ut) &&
                                  SearchLinearExists(a.ht, e.Qt) &&
                                  SearchLinearExists(a.dt, e.Vt) &&
                                  SearchLinearExists(a.lt, e.Yt) &&
                                  SearchLinearExists(a.gt, e.Zt) &&
                                  SearchLinearExists(a.yt, e.Jt) &&
                                  SearchLinearExists(a.Ht, e.$t) &&
                                  SearchLinearExists(a.wt, e.Kt) &&
                                  SearchLinearExists(a.bt, e.Xt)
                                ? strChameleon
                                : 7 <= n &&
                                  SearchLinearExists(o.ft, r.tr) &&
                                  SearchLinearExists(o.ot, r.rr) &&
                                  SearchLinearExists(o.ut, r.er) &&
                                  SearchLinearExists(o.Dt, r.cr) &&
                                  SearchLinearExists(o.Ct, r.ir) &&
                                  SearchLinearExists(o.kt, r.ur) &&
                                  SearchLinearExists(o.qt, r.ar) &&
                                  SearchLinearExists(o.xt, r._r) &&
                                  SearchLinearExists(o.Ft, r.sr) &&
                                  SearchLinearExists(o.Rt, r.vr) &&
                                  SearchLinearExists(o.St, r.hr) &&
                                  SearchLinearExists(o.It, r.dr) &&
                                  SearchLinearExists(o.Tt, r.lr) &&
                                  SearchLinearExists(o.jt, r.gr) &&
                                  SearchLinearExists(o.At, r.pr) &&
                                  SearchLinearExists(o.Bt, r.yr)
                                ? str_DuckDuckGo
                                : 2 <= n &&
                                  SearchLinearExists(f.ut, e.er) &&
                                  SearchLinearExists(f.ft, e.tr)
                                ? str_PrivacyBadger
                                : 3 <= n &&
                                  SearchLinearExists(_.Rt, r.vr) &&
                                  SearchLinearExists(_.jt, r.gr) &&
                                  SearchLinearExists(_.At, r.pr)
                                ? str_PrivacyPossum
                                : 2 <= n &&
                                  SearchLinearExists(c.nt, r.zt) &&
                                  SearchLinearExists(c.tt, r.zt) &&
                                  SearchLinearExists(c.rt, r.nr) &&
                                  r.vr == i1
                                ? str_NoScript
                                : 14 <= n &&
                                  SearchLinearExists(s.nt, r.zt) &&
                                  SearchLinearExists(s.tt, r.zt) &&
                                  SearchLinearExists(s.st, r.Ut) &&
                                  SearchLinearExists(s.ht, r.Qt) &&
                                  SearchLinearExists(s.dt, r.Vt) &&
                                  SearchLinearExists(s.gt, r.Zt) &&
                                  SearchLinearExists(s.yt, r.Jt) &&
                                  SearchLinearExists(s.Ht, r.$t) &&
                                  SearchLinearExists(s.wt, r.Kt) &&
                                  SearchLinearExists(s.bt, r.Xt) &&
                                  SearchLinearExists(s.Rt, r.vr)
                                ? str_JShelter
                                : 15 <= n &&
                                  SearchLinearExists(t.nt, r.zt) &&
                                  SearchLinearExists(t.tt, r.Pt) &&
                                  SearchLinearExists(t.ct, r.Wt) &&
                                  SearchLinearExists(t.it, r.Gt) &&
                                  SearchLinearExists(t.st, r.Ut) &&
                                  SearchLinearExists(t.ht, r.Qt) &&
                                  SearchLinearExists(t.dt, r.Vt) &&
                                  SearchLinearExists(t.lt, r.Yt) &&
                                  SearchLinearExists(t.gt, r.Zt) &&
                                  SearchLinearExists(t.yt, r.Jt) &&
                                  SearchLinearExists(t.Ht, r.$t) &&
                                  SearchLinearExists(t.wt, r.Kt) &&
                                  SearchLinearExists(t.nt, r.zt) &&
                                  SearchLinearExists(t.bt, r.Xt) &&
                                  SearchLinearExists(t.rt, r.nr) &&
                                  SearchLinearExists(t.ft, r.tr) &&
                                  SearchLinearExists(t.ot, r.rr) &&
                                  SearchLinearExists(t.ut, r.er) &&
                                  SearchLinearExists(t.Rt, r.vr)
                                ? str_Puppeteer
                                : void 0;
                          })),
                          AppendFieldToStorage_(
                            FP2_PrivacyBlockerString,
                            SERIALIZED_BYTE_ARRAY,
                            t
                          ));
                      var r = [
                        RunAndCatch(function () {
                          var n = CreateDocumentElement(v, lu);
                          if (Fu(n)) {
                            (t = e = Lu),
                              (r = (n = n).getContext(mu, 0 ? {} : Nu)),
                              (n.width = e),
                              (n.height = t);
                            var t,
                              r,
                              e = r,
                              c = (function (n) {
                                for (var t = [], r = 0; r < Lu; r++)
                                  for (var e = 0; e < Lu; e++) {
                                    var c = ""
                                      .concat(zu(), ", ")
                                      .concat(zu(), ", ")
                                      .concat(zu(), ", ")
                                      .concat(Mu);
                                    SetFillStyle(n, "rgba(".concat(c, ")")),
                                      Iu(n, r, e, 1, 1),
                                      t.push(c);
                                  }
                                return t;
                              })(e),
                              i = (function (n) {
                                for (var t = [], r = 0; r < Lu; r++)
                                  for (var e = 0; e < Lu; e++) {
                                    var c = (n[ku](r, e, 1, 1) || {}).data,
                                      i = c[0],
                                      u = c[1],
                                      a = c[2],
                                      c = c[3],
                                      i = ""
                                        .concat(i, ", ")
                                        .concat(u, ", ")
                                        .concat(a, ", ")
                                        .concat(c);
                                    t.push(i);
                                  }
                                return t;
                              })(e);
                            void e.clearRect(0, 0, Lu, Lu);
                            for (var u = 0; u < c.length; u++)
                              if (c[u] != i[u]) return !0;
                          }
                          return !1;
                        }),
                        RunAndCatch(function () {
                          var n = GetScreen(v),
                            t = !(
                              n.width - n.availWidth || n.height - n.availHeight
                            );
                          if (800 < n.width && t) return !0;
                        }),
                        RunAndCatch(function () {
                          var n = v,
                            t = n[str_devicePixelRatio],
                            t = !n.matchMedia(
                              "(resolution:".concat(t, "dp").concat(Jn, ")")
                            ).matches;
                          if (!NegativeError_Unk && t) return !0;
                        }),
                        RunAndCatch(function () {
                          var n = v,
                            t = n[str_devicePixelRatio],
                            r = GetScreen(n);
                          if (
                            !(
                              (NegativeError_Firefox && 1 != t) ||
                              n.matchMedia(
                                "("
                                  .concat(str_device, "-width:")
                                  .concat(r.width)
                                  .concat(Jn, ") and (")
                                  .concat(str_device, "-height:")
                                  .concat(r.height)
                                  .concat(Jn, ")")
                              ).matches
                            )
                          )
                            return !0;
                        }),
                        RunAndCatch(function () {
                          return (
                            (n = GetPlugins(v)),
                            (t = GetMimeTypes(v)),
                            (r = !1),
                            forEachCallback(n, function (n) {
                              try {
                                "MimeType" ==
                                  ObjectType[str_getPrototypeOf](n[0]).constructor
                                    .name || (r = !0);
                              } catch (t) {
                                r = !0;
                              }
                            }),
                            (c = FilterArray(
                              GetOwnPropretyNames(t),
                              function (n) {
                                return isNaN(+n);
                              }
                            )),
                            (e = ApplyTransformationToArray(n, function (n) {
                              for (
                                var t = getObjectValues(n), r = [], e = 0, c = t;
                                e < c.length;
                                e++
                              ) {
                                var i = c[e];
                                IsValueArray(t[i])
                                  ? forEachCallback(t[i], function (n) {
                                      r.push(n);
                                    })
                                  : r.push(t[i]);
                              }
                              return r;
                            })),
                            (e = ApplyTransformationToArray(e, function (n) {
                              return n && n.type;
                            })),
                            forEachCallback(e, function (n) {
                              if (!ArraySearchExists(c, n)) {
                                for (var t = c, r = n, e = 0; e < t.length; )
                                  t[e] === r ? t.splice(e, 1) : e++;
                                t;
                              }
                            }),
                            forEachCallback(n, function (n) {
                              var t = ApplyTransformationToArray(
                                getObjectValues(n),
                                function (n) {
                                  return n && n.type;
                                }
                              );
                              forEachCallback(t, function (n) {
                                ArraySearchExists(c, n) || (r = !0);
                              });
                            }),
                            r
                          );
                          var n, t, r, c, e;
                        }),
                        (function (n) {
                          try {
                            var t = CreateDocumentElement(n, On);
                            return (
                              (t.srcdoc = GenerateUUID(n)), !!t.contentWindow
                            );
                          } catch (r) {
                            return !0;
                          }
                        })(v),
                        RunAndCatch(function () {
                          var n = v,
                            t = M_();
                          if (!IsChromium_BasedOnNegativeError) return !1;
                          var r,
                            e = t;
                          try {
                            return (
                              t ||
                                ((e = CreateDocumentElement(n, str_div)),
                                Tt(Rt(n), e)),
                              !!e &&
                                (St(e, Ln, $u), !!n.getComputedStyle) &&
                                n.getComputedStyle(e).backgroundColor ===
                                  ""
                                    .concat(la, "(255, ")
                                    .concat(ZeroConstant, ", ")
                                    .concat(ZeroConstant, ")")
                            );
                          } finally {
                            t ||
                              ((e = e), void ((r = Rt(n)) && r.removeChild(e)));
                          }
                        }),
                        !!AllHTMLPropertyStrings[
                          str_Navigator + "." + str_webdriver
                        ],
                        !!AllHTMLPropertyStrings[zf],
                      ];
                      AppendFieldToStorage_(
                        FP2_HtmlFeatureCheck,
                        JUST_APPEND,
                        ConvertBinaryArrayToHex(r)
                      ),
                        Return3rdArgument(
                          A1,
                          FP2_HtmlFeatureCheck,
                          ApplyTransformationNone(r)
                        ),
                        CallbackThenCallOtherCallback(B1, q1, [v], function (n) {
                          n && HashAndSetField(FP2_AdBlockerHash, n, A1);
                        });
                    } finally {
                      void jt(M_());
                    }
                    var e, c, i, u, a, o, f, _;
                  }),
                  (s = GetDocument((f = v))),
                  (Ni = function (n) {
                    var t = attachEventExists(f) ? n || f.event : n;
                    ((t && "readystatechange" !== t.type) ||
                      s.readyState === jn) &&
                      (addEventListenerExists(f) && ir(s, Tn, Ni),
                      ir(s, "readystatechange", Ni),
                      ir(f, "load", Ni),
                      v1(f));
                  }),
                  addEventListenerExists(f) && RegisterNewListener(s, Tn, Ni),
                  RegisterNewListener(s, "readystatechange", Ni),
                  RegisterNewListener(f, "load", Ni),
                  (s.readyState === jn ||
                    (s.readyState === An && !IsSubstr(GetUserAgent(f), Bn))) &&
                    v1(f),
                  void (_1
                    ? setTimeout(function () {
                        _.call(s);
                      }, 1)
                    : s1.push(_)),
                  CallbackThenCallOtherCallback(
                    B1,
                    CallJS_TestNavigatorValues,
                    [I1],
                    function (n) {
                      var t, r, e;
                      n &&
                        ((t = [
                          ((r = n),
                          (e = h && h.Qn),
                          !!(r && r.v && e) && r.r !== e),
                          ((r = n),
                          (e = GetNavigatorLanguages(v)),
                          !!(r && r.ls && e) &&
                            JsonStringify(r.ls) !== JsonStringify(e)),
                          ((r = n),
                          (e = GetLanguage(v)),
                          !!(r && r.l && e) && r.l !== e),
                          ((r = n),
                          (e = GetDeviceMemory(v)),
                          !!(r && r.dm && e) && r.dm !== e),
                          ((r = n),
                          (e = GetHardwareConcurrency(v)),
                          !!(r && r.hc && e) && r.hc !== e),
                          ((r = n),
                          (e = GetPlatfor(v)),
                          !!(r && r.p && e) && r.p !== e),
                          ((r = n),
                          (e = GetUserAgent(v)),
                          !!(r && r.ua && e) && r.ua !== e),
                          !!(r = n) && new RegExp(str_swiftShader).test(r.r),
                          !!(e = n) && new RegExp(_a).test(e.ua),
                        ]),
                        AppendFieldToStorage_(
                          FP2_JSCheckForWorkerDifferences,
                          JUST_APPEND,
                          ConvertBinaryArrayToHex(t)
                        ),
                        Return3rdArgument(
                          A1,
                          FP2_JSCheckForWorkerDifferences,
                          ApplyTransformationNone(t)
                        ));
                    }
                  ),
                  CallbackThenCallOtherCallback(B1, E1, [v], function (n) {
                    ProcessField3AndPutInStorage2(FP2_DeviceLogicExpected, n, !0),
                      Return3rdArgument(A1, FP2_DeviceLogicExpected, n);
                  });
              }),
              void void (
                (t = B1).Rn ||
                (n(),
                (t.Rn = !0),
                t.Fn === ZeroConstant || t.Sn === ZeroConstant
                  ? (u1(t), a1(t))
                  : setTimeout(function () {
                      t.Cn || u1(t);
                    }, t.Sn))
              ),
              void (k0 = !1);
          }
          return q0;
        },
        so = function (n, t) {
          return C0().injectTokenOnSubmit(n, t);
        },
        t = function (n, t, r, e) {
          return C0().formEventOnSubmit(n, t, r, e);
        },
        f = function () {
          return C0().createRequestToken();
        },
        r = function (n) {
          return C0().page(n);
        },
        str_input = function (n) {
          return C0().form(n);
        },
        verMajor = function (n) {
          return C0().custom(n);
        },
        verMinor = function () {
          return CastleVersion;
        },
        q0 = {
          configure: x0,
          createRequestToken: f,
          injectTokenOnSubmit: so,
          formEventOnSubmit: t,
          page: r,
          form: str_input,
          custom: verMajor,
          getVersion: verMinor,
        },
        F0 = window;
      F0[str_castle] = {
        configure: function (n) {
          return x0(kt(n, { window: F0 })), F0[str_castle];
        },
        page: r,
        form: str_input,
        custom: verMajor,
        createRequestToken: f,
        getVersion: verMinor,
        injectTokenOnSubmit: so,
        formEventOnSubmit: t,
      };
    })();
  }
  