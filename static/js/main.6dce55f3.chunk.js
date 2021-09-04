(this.webpackJsonpfast_wallet_web = this.webpackJsonpfast_wallet_web || []).push([
    [0], {
        28: function(e, t) {
            function a(e) {
                var t, a = Math.abs(Number(e));
                if (a >= 1e9) {
                    var n = Math.floor((a - 1e9 * Math.floor(a / 1e9)) / 1e7);
                    t = Math.floor(a / 1e9) + "." + (n > 9 ? n : "0" + n) + "B"
                } else if (a >= 1e6) {
                    var c = Math.floor((a - 1e6 * Math.floor(a / 1e6)) / 1e4);
                    t = Math.floor(a / 1e6) + "." + (c > 9 ? "".concat(c) : "0".concat(c)) + "M"
                } else a >= 1e3 && (t = Math.floor(a / 1e3) + "K");
                return t
            }
            e.exports = {
                formatAmount: function(e) {
                    var t = (e += "").replace(/[^\d.]/g, "").split("."),
                        a = t[0],
                        n = t[1],
                        c = t.length > 1 ? "." + n.slice(0, 8) : "";
                    a || (a = "0");
                    for (var i = /(\d+)(\d{3})/; i.test(a);) a = a.replace(i, "$1,$2");
                    return (a + c).replace(/^0+(?!\.|$)/, "").replace(/^\./, "")
                },
                formatShortAmount: function(e) {
                    var t = (e += "").replace(/[^\d.]/g, "").split("."),
                        n = t[0],
                        c = t[1],
                        i = t.length > 1 ? "." + c.slice(0, 8) : "";
                    if (n || (n = "0"), n.length > 6) return a(n);
                    for (var s = /(\d+)(\d{3})/; s.test(n);) n = n.replace(s, "$1,$2");
                    return (n + i).replace(/^0+(?!\.|$)/, "").replace(/^\./, "")
                },
                formatAmountInput: function(e) {
                    var t = (e += "").replace(/[^\d.]/g, "").split("."),
                        a = t[0],
                        n = t[1];
                    return a || (a = "0"), (a + (t.length > 1 ? "." + n.slice(0, 8) : "")).replace(/^0+(?!\.|$)/, "").replace(/^\./, "")
                },
                formatMoney: function(e) {
                    var t = (e += "").replace(/[^\d.]/g, "").split("."),
                        a = t[0],
                        n = t[1],
                        c = t.length > 1 ? "." + n.slice(0, 6) : "";
                    a || (a = "0");
                    for (var i = /(\d+)(\d{3})/; i.test(a);) a = a.replace(i, "$1,$2");
                    return (a + c).replace(/^0+(?!\.|$)/, "").replace(/^\./, "")
                },
                formatShortMoney: function(e) {
                    var t = (e += "").replace(/[^\d.]/g, "").split("."),
                        n = t[0],
                        c = t[1],
                        i = t.length > 1 ? "." + c.slice(0, 2) : "";
                    if (n || (n = "0"), n.length > 6) return a(n);
                    for (var s = /(\d+)(\d{3})/; s.test(n);) n = n.replace(s, "$1,$2");
                    return (n + i).replace(/^0+(?!\.|$)/, "").replace(/^\./, "")
                },
                deleteText: function(e) {
                    var t = (e += "").replace(/[^\d.]/g, "");
                    return t
                },
                formatTotal: function(e) {
                    var t = (e += "").replace(/[^\d.]/g, "").split("."),
                        a = t[0],
                        n = t[1],
                        c = t.length > 1 ? "." + n.slice(0, 2) : "";
                    a || (a = "0");
                    for (var i = /(\d+)(\d{3})/; i.test(a);) a = a.replace(i, "$1,$2");
                    return (a + c).replace(/^0+(?!\.|$)/, "").replace(/^\./, "")
                },
                formatTime: function(e) {
                    var t = new Date(e);
                    return t.getFullYear() + "-" + ("0" + (t.getMonth() + 1)).slice(-2) + "-" + ("0" + t.getDate()).slice(-2) + " " + ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2)
                },
                formatStakingTime: function(e) {
                    var t = new Date(e);
                    return t.getFullYear() + "-" + ("0" + (t.getMonth() + 1)).slice(-2) + "-" + ("0" + t.getDate()).slice(-2)
                },
                formatDate: function(e) {
                    var t = new Date(e);
                    return ("0" + t.getDate()).slice(-2) + "-" + ("0" + (t.getMonth() + 1)).slice(-2) + "-" + t.getFullYear()
                },
                formatAddress: function(e) {
                    return e ? e.length > 20 ? e.slice(0, 10) + "..." + e.slice(e.length - 10) : e : null
                },
                formatRoundAmount: function(e) {
                    return Math.round(parseFloat(e) * Math.pow(10, 8)) / Math.pow(10, 8)
                },
                formatUSD: function(e) {
                    var t = (e += "").replace(/[^\d.]/g, "").split("."),
                        a = t[0],
                        n = t[1],
                        c = t.length > 1 ? "." + n.slice(0, 2) : "";
                    a || (a = "0");
                    for (var i = /(\d+)(\d{3})/; i.test(a);) a = a.replace(i, "$1,$2");
                    return (a + c).replace(/^0+(?!\.|$)/, "").replace(/^\./, "")
                }
            }
        },
        541: function(e, t) {},
        543: function(e, t) {},
        553: function(e, t) {},
        555: function(e, t) {},
        57: function(e, t) {
            e.exports = {
                checkEmpty: function(e) {
                    return !e.length
                },
                checkEmail: function(e) {
                    return !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)
                },
                checkLength: function(e, t) {
                    return !(e.length >= t)
                }
            }
        },
        581: function(e, t) {},
        583: function(e, t) {},
        584: function(e, t) {},
        589: function(e, t) {},
        591: function(e, t) {},
        597: function(e, t) {},
        599: function(e, t) {},
        618: function(e, t) {},
        630: function(e, t) {},
        633: function(e, t) {},
        664: function(e, t, a) {},
        665: function(e, t, a) {},
        666: function(e, t, a) {},
        667: function(e, t, a) {},
        668: function(e, t, a) {},
        694: function(e, t, a) {},
        698: function(e, t, a) {},
        699: function(e, t, a) {},
        704: function(e, t, a) {},
        705: function(e, t, a) {},
        707: function(e, t, a) {},
        709: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                c = a.n(n),
                i = a(48),
                s = a.n(i),
                r = a(54),
                l = a(47),
                o = a(16),
                d = a(822),
                u = a(761),
                j = a(762),
                b = a(763),
                O = a(505),
                h = a(766),
                m = a(815),
                f = a(765),
                x = a(716),
                p = a(767),
                g = a(768),
                E = a(769),
                v = a(764),
                y = a(22),
                S = "FETCH_USER",
                _ = "GET_AIRDROP",
                A = "GET_STAKING_REFERRAL_REWARDS",
                N = "GET_GIFT_REWARDS",
                T = "CHECK_GA_STATUS",
                C = "FETCH_DEVICE",
                I = "FETCH_LOGIN_ACTIVITY",
                R = "SET_INFO_VERIFICATION",
                k = "SET_LOCAL_IMAGE",
                w = "FETCH_FUND_LIST",
                P = "GET_DATA_FOR_COIN_CHART",
                D = "FETCH_TRANSACTION_HISTORY",
                L = "FETCH_SWAP_HISTORY",
                W = "FETCH_WITHDRAW_HISTORY",
                M = "FETCH_DEPOSIT_HISTORY",
                F = "FETCH_SWAP_PRODUCT_LIST",
                U = "/fund-service/transaction/list",
                H = "/user-service/user/ga",
                G = a(353),
                Y = a.n(G),
                B = a(28),
                z = a(274),
                V = a(152),
                K = a(1),
                q = function() {
                    var e, t, a, n = navigator.userAgent,
                        c = navigator.appName,
                        i = "" + parseFloat(navigator.appVersion); - 1 !== (t = n.indexOf("Opera")) ? (c = "Opera", i = n.substring(t + 6), -1 !== (t = n.indexOf("Version")) && (i = n.substring(t + 8))) : -1 !== (t = n.indexOf("MSIE")) ? (c = "Microsoft Internet Explorer", i = n.substring(t + 5)) : -1 !== (t = n.indexOf("Chrome")) ? (c = "Chrome", i = n.substring(t + 7)) : -1 !== (t = n.indexOf("Safari")) ? (c = "Safari", i = n.substring(t + 7), -1 !== (t = n.indexOf("Version")) && (i = n.substring(t + 8))) : -1 !== (t = n.indexOf("Firefox")) ? (c = "Firefox", i = n.substring(t + 8)) : (e = n.lastIndexOf(" ") + 1) < (t = n.lastIndexOf("/")) && (c = n.substring(e, t), i = n.substring(t + 1), c.toLowerCase() === c.toUpperCase() && (c = navigator.appName)), -1 !== (a = i.indexOf(";")) && (i = i.substring(0, a)), -1 !== (a = i.indexOf(" ")) && (i = i.substring(0, a));
                    var s = "Unknown OS";
                    return -1 !== navigator.appVersion.indexOf("Win") && (s = "Windows"), -1 !== navigator.appVersion.indexOf("Mac") && (s = "MacOS"), -1 !== navigator.appVersion.indexOf("X11") && (s = "UNIX"), -1 !== navigator.appVersion.indexOf("Linux") && (s = "Linux"), c + " V" + i + " (" + s + ")"
                },
                $ = "beta.fastwallet.io" === window.location.hostname,
                X = "fastwallet.io" === window.location.hostname,
                Q = "fastwallet.spdev.co" === window.location.hostname,
                Z = "/images",
                J = X || $ ? "https://api.fastwallet.io" : "https://fastwalletapi.spdev.co",
                ee = "CBt3gpbqeMdWPNG1",
                te = "uU5tEUmAgvBWArsv",
                ae = "AhBcmvr1EkMdPnL5",
                ne = "XjBWmk6sBBUYdbb6smww1TMyLSC0YrEq8vCpcTSG1xcT7RDCpZyfDZzLedqNSaA8",
                ce = "http://localhost:3005";
            Q && (ce = "https://cpu.spdev.co"), $ && (ce = "https://beta.cashpickup.net"), X && (ce = "https://cashpickup.net");

            function ie(e) {
                if (e) {
                    var t = e.type,
                        a = e.network,
                        n = e.txId;
                    if (n) {
                        if ("EXTERNAL" === t) {
                            var c = null;
                            return "TRC20" !== a && "TRX" !== a || (c = "https://tronscan.org/#/transaction/".concat(n)), "ERC20" !== a && "ETH" !== a || (c = "https://etherscan.io/tx/".concat(n)), "EOS" === a && (c = "https://bloks.io/transaction/".concat(n)), "BTC" === a && (c = "https://www.blockchain.com/btc/tx/".concat(n)), Object(K.jsx)("a", {
                                href: c,
                                target: "_blank",
                                rel: "noreferrer",
                                children: Object(B.formatAddress)(e.txId)
                            })
                        }
                        return Object(B.formatAddress)(n)
                    }
                    return null
                }
                return null
            }
            var se = function(e, t) {
                    "error" === e ? Object(z.b)(Object(K.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignContent: "center"
                        },
                        children: [Object(K.jsx)("div", {
                            style: {
                                color: "#fe644e"
                            },
                            children: Object(K.jsx)(V.a, {
                                name: "x",
                                size: "large"
                            })
                        }), Object(K.jsx)("div", {
                            children: t
                        })]
                    })) : Object(z.b)(Object(K.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignContent: "center"
                        },
                        children: [Object(K.jsx)("div", {
                            style: {
                                color: "#03a89d"
                            },
                            children: Object(K.jsx)(V.a, {
                                name: "checkmark",
                                size: "large"
                            })
                        }), Object(K.jsx)("div", {
                            children: Object(K.jsxs)("label", {
                                className: "title",
                                children: [t, "."]
                            })
                        })]
                    }))
                },
                re = function() {
                    return null != localStorage.getItem(ee)
                },
                le = function() {
                    localStorage.removeItem(ee), localStorage.removeItem(ae), window.location.reload()
                },
                oe = function() {
                    var e = localStorage.getItem(ee);
                    return e ? je(e, ee) : null
                },
                de = function() {
                    var e = localStorage.getItem(te);
                    return e ? je(e, te) : null
                },
                ue = function(e, t) {
                    return Y.a.AES.encrypt(e, t).toString()
                },
                je = function(e, t) {
                    return Y.a.AES.decrypt(e, t).toString(Y.a.enc.Utf8)
                },
                be = {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                };

            function Oe(e, t, a) {
                xe("GET", e, void 0, t, a)
            }

            function he(e, t, a, n) {
                xe("POST", e, t, a, n)
            }

            function me(e, t, a, n) {
                xe("PUT", e, t, a, n)
            }

            function fe(e, t, a, n) {
                xe("DELETE", e, t, a, n)
            }

            function xe(e, t, a, n, c) {
                var i = J + t;
                a = JSON.stringify(a);
                var s = be;
                s.Authorization = "bearer " + oe();
                var r = null;
                r = void 0 === a ? fetch(i, {
                    method: e,
                    headers: s
                }) : fetch(i, {
                    method: e,
                    headers: s,
                    body: a
                }), pe(r, n, c)
            }
            var pe = function(e, t, a) {
                    e.then((function(e) {
                        200 === e.status ? t && e.json().then((function(e) {
                            var n;
                            e.success ? t(e.data) : a ? a(e.error) : (n = e.error, alert(n.code + (n.msg ? ": " + n.msg : "")))
                        })) : 403 === e.status ? ge(a, "Forbidden") : 401 === e.status ? (window.localStorage.removeItem("SHOW_ADS"), le()) : 500 === e.status ? ge(null, "Internal server error") : 502 === e.status ? ge(null, "Service unavailable") : 526 === e.status ? ge(null, "Please connect to VPN") : (a("Undefined"), console.log("Undefined"))
                    }))
                },
                ge = function(e, t) {
                    e ? e(t) : Ee(t)
                },
                Ee = function(e) {
                    alert("ERR: " + e)
                },
                ve = function() {
                    return function(e) {
                        re() && Oe("/user-service/user/profile", (function(t) {
                            e({
                                type: S,
                                payload: t
                            })
                        }))
                    }
                },
                ye = function() {
                    return function(e) {
                        re() && Oe("/user-service/user/security", (function(t) {
                            e({
                                type: T,
                                payload: t.gaEnable
                            })
                        }), (function(e) {
                            return console.error(e)
                        }))
                    }
                },
                Se = function() {
                    return function(e) {
                        he("/user-service/login-activity", {
                            page: 1,
                            pageSize: 5
                        }, (function(t) {
                            return e({
                                type: I,
                                payload: t
                            })
                        }), (function(e) {
                            return console.error(e)
                        }))
                    }
                },
                _e = a(492),
                Ae = a.n(_e),
                Ne = a(481),
                Te = a.n(Ne),
                Ce = a(485),
                Ie = a.n(Ce),
                Re = a(486),
                ke = a.n(Re),
                we = a(489),
                Pe = a.n(we),
                De = a(487),
                Le = a.n(De),
                We = a(490),
                Me = a.n(We),
                Fe = a(491),
                Ue = a.n(Fe),
                He = a(488),
                Ge = a.n(He);
            var Ye = function() {
                    var e = Object(y.useSelector)((function(e) {
                            return e
                        })),
                        t = e.setting,
                        a = e.user,
                        i = t.library,
                        s = Object(l.k)(),
                        S = c.a.useState(null),
                        _ = Object(o.a)(S, 2),
                        A = _[0],
                        N = _[1],
                        T = a.information,
                        C = Object(y.useDispatch)(),
                        I = Object(n.useState)(!1),
                        R = Object(o.a)(I, 2),
                        k = R[0],
                        w = R[1],
                        P = Object(n.useState)(!1),
                        D = Object(o.a)(P, 2),
                        L = D[0],
                        W = D[1],
                        M = Object(n.useState)(null),
                        F = Object(o.a)(M, 2),
                        U = F[0],
                        H = F[1];
                    Object(n.useEffect)((function() {
                        var e = function() {
                            W((function(e) {
                                return !e && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) || !(e && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) && e
                            }))
                        };
                        return window.addEventListener("scroll", e),
                            function() {
                                return window.removeEventListener("scroll", e)
                            }
                    }), []);
                    var G = function() {
                        N(null)
                    };
                    Object(n.useEffect)((function() {
                        C(ve())
                    }), [C]);
                    var Y = [{
                            name: "Assets",
                            icon: Object(K.jsx)(Te.a, {}),
                            link: "/assets",
                            isLogin: !0,
                            translate: "yes"
                        }],
                        B = [{
                            name: "Claim Airdrop",
                            icon: Object(K.jsx)(Me.a, {}),
                            link: "#presale"
                        }, {
                            name: "1GUSD = 1USD",
                            icon: Object(K.jsx)(Ue.a, {}),
                            link: "/"
                        }];
                    return Object(K.jsxs)(K.Fragment, {
                        children: [Object(K.jsxs)("header", {
                            className: (L ? "on-scroll" : "") + " App-header",
                            children: [Object(K.jsx)(u.a, {
                                className: "pt-10 pb-10",
                                children: Object(K.jsxs)(j.a, {
                                    container: !0,
                                    alignItems: "center",
                                    children: [Object(K.jsx)(j.a, {
                                        item: !0,
                                        lg: 4,
                                        md: 4,
                                        xs: 6,
                                        className: "d-flex-cs blue-color",
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: function() {
                                            return s.push("/")
                                        },
                                        children: Object(K.jsx)("img", {
                                            src: "/logo-Fast1.png",
                                            style: {
                                                height: 40
                                            }
                                        })
                                    }), Object(K.jsx)(j.a, {
                                        item: !0,
                                        md: 4,
                                        lg: 4,
                                        children: Object(K.jsxs)(j.a, {
                                            container: !0,
                                            justify: "space-between",
                                            className: "hide-mobile",
                                            children: [re() ? Object(K.jsx)(j.a, {
                                                item: !0,
                                                children: Object(K.jsx)(r.Link, {
                                                    to: "#",
                                                    onClick: function() {
                                                        return s.push("/assets")
                                                    },
                                                    children: i.ASSETS
                                                })
                                            }) : Object(K.jsx)(j.a, {
                                                item: !0,
                                                children: Object(K.jsx)(r.Link, {
                                                    to: "#presale",
                                                    onClick: function() {
                                                        return s.push("#presale")
                                                    },
                                                    children: "LISTING PRICE: 1 GUSD = 1 USD"
                                                })
                                            })]
                                        })
                                    }), Object(K.jsx)(j.a, {
                                        item: !0,
                                        xs: 6,
                                        md: 4,
                                        lg: 4,
                                        children: Object(K.jsxs)(j.a, {
                                            container: !0,
                                            justify: "flex-end",
                                            alignItems: "center",
                                            children: [Object(K.jsx)(j.a, {
                                                item: !0,
                                                children: re() && Object(K.jsx)(b.a, {
                                                    onClick: function(e) {
                                                        N(e.currentTarget)
                                                    },
                                                    children: Object(K.jsx)(v.a, {
                                                        fontSize: "large"
                                                    })
                                                })
                                            }), Object(K.jsx)(j.a, {
                                                item: !0,
                                                className: "show-mobile",
                                                children: Object(K.jsx)(b.a, {
                                                    onClick: function() {
                                                        return w(!0)
                                                    },
                                                    children: Object(K.jsx)(Ae.a, {
                                                        fontSize: "large"
                                                    })
                                                })
                                            
                                            })]
                                        })
                                    })]
                                })
                            }), Object(K.jsxs)(O.a, {
                                id: "simple-menu",
                                keepMounted: !0,
                                onClose: G,
                                open: Boolean(A),
                                anchorEl: A,
                                style: {
                                    top: 50
                                },
                                children: [Object(K.jsx)(h.a, {
                                    children: T && T.email
                                }), Object(K.jsx)(h.a, {
                                    onClick: function() {
                                        s.push("/my-profile"), G()
                                    },
                                    children: i.MY_PROFILE
                                }), Object(K.jsx)(h.a, {
                                    onClick: function() {
                                        s.push("/my-affiliate"), G()
                                    },
                                    children: i.MY_AFFILIATE
                                }), Object(K.jsx)(h.a, {
                                    onClick: le,
                                    children: i.LOGOUT
                                })]
                            }), Object(K.jsx)(O.a, {
                                keepMounted: !0,
                                onClose: function() {
                                    return H(null)
                                },
                                open: Boolean(U),
                                anchorEl: U,
                                style: {
                                    top: 50
                                },
                                children: Object(K.jsx)(h.a, {
                                    onClick: function() {
                                        s.push("/login?return=".concat(ne)), H(null)
                                    },
                                    children: "Cash Pickup"
                                })
                            })]
                        }), Object(K.jsxs)(m.a, {
                            open: k,
                            anchor: "right",
                            onClose: function() {
                                return w(!1)
                            },
                            children: [Object(K.jsx)(f.a, {
                                style: {
                                    width: 250
                                },
                                children: Y.map((function(e, t) {
                                    return (e.isLogin && re() || !e.isLogin) && Object(K.jsxs)(x.a, {
                                        button: !0,
                                        onClick: function() {
                                            s.push(e.link), w(!1)
                                        },
                                        style: e.style,
                                        children: [Object(K.jsx)(p.a, {
                                            children: e.icon
                                        }), Object(K.jsx)(g.a, {
                                            primary: Object(K.jsx)("span", {
                                                translate: e.translate,
                                                children: e.name
                                            })
                                        })]
                                    }, t)
                                }))
                            }), !re() && Object(K.jsxs)(K.Fragment, {
                                children: [Object(K.jsx)(E.a, {}), Object(K.jsx)(f.a, {
                                    children: B.map((function(e, t) {
                                        return Object(K.jsxs)(x.a, {
                                            button: !0,
                                            onClick: function() {
                                                s.push(e.link), w(!1)
                                            },
                                            style: e.style,
                                            children: [Object(K.jsx)(p.a, {
                                                children: e.icon
                                            }), Object(K.jsx)(g.a, {
                                                primary: e.name
                                            })]
                                        }, t)
                                    }))
                                })]
                            })]
                        })]
                    })
                },
                Be = a(715),
                ze = a(259),
                Ve = [{
                    img: "/images/image_1.png",
                    title: "Bank-level custody and security",
                    sub: ["Simple steps to open a new account", "Finance expertise in your pocket", "Digital system upgrade", "Low-cost online wealth management"]
                }, {
                    img: "/images/image_2.png",
                    title: "Big performance differences",
                    sub: ["Top Advance Technology", "Card and Wallet encryption", "24/7 anti- fraud monitoring", "24/7 real- time assistance"]
                }, {
                    img: "/images/image_3.png",
                    title: "Technology Application",
                    sub: ["Mobile digital e-wallet client", "Worldwide payment/ collection", "Expenditure analysis", "Budgeting tools"]
                }];
            var Ke = function() {
                return Object(K.jsx)(u.a, {
                    id: "description",
                    children: Object(K.jsx)(j.a, {
                        container: !0,
                        spacing: 2,
                        children: Ve.map((function(e, t) {
                            return Object(K.jsx)(j.a, {
                                item: !0,
                                xs: 12,
                                md: 4,
                                children: Object(K.jsxs)(Be.a, {
                                    style: {
                                        height: "100%"
                                    },
                                    children: [Object(K.jsx)("img", {
                                        src: e.img,
                                        className: "hvr-float"
                                    }), Object(K.jsx)(ze.a, {
                                        variant: "h5",
                                        className: "mt-10 mb-20",
                                        children: e.title
                                    }), Object(K.jsx)("ul", {
                                        style: {
                                            listStyleType: "disc"
                                        },
                                        children: e.sub.map((function(e, t) {
                                            return Object(K.jsx)("li", {
                                                children: e
                                            }, t)
                                        }))
                                    })]
                                })
                            }, t)
                        }))
                    })
                })
            };
            a(664);
            var qe = function() {
                    return Object(K.jsx)("div", {
                        children: Object(K.jsxs)("div", {
                            className: "information-header information",
                            children: [Object(K.jsx)("div", {
                                className: "inner-header flex",
                                children: Object(K.jsx)(u.a, {
                                    children: Object(K.jsxs)(j.a, {
                                        container: !0,
                                        justify: "space-between",
                                        alignItems: "center",
                                        children: [Object(K.jsxs)(j.a, {
                                            item: !0,
                                            sm: 12,
                                            md: 6,
                                            style: {
                                                position: "relative"
                                            },
                                            children: [Object(K.jsx)("div", {
                                                translate: "no",
                                                children: Object(K.jsx)(ze.a, {
                                                    variant: "h4",
                                                    className: "mb-20",
                                                    children: "GUSD Stablecoins"
                                                })
                                            }), Object(K.jsx)(ze.a, {
                                                variant: "body1",
                                                className: "mb-50",
                                                children: "Bridging Value from the Real World to the Digital Economy, transform real-world assets, such as fiat currencies, equities, commodities, precious metals and real-estate into fungible (or non-fungible) blockchain-based tokens that are faster, cheaper, transparent and borderless."
                                            }), Object(K.jsxs)(j.a, {
                                                container: !0,
                                                justify: "space-between",
                                                children: [Object(K.jsxs)(j.a, {
                                                    item: !0,
                                                    xs: 4,
                                                    md: 3,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: [Object(K.jsx)("img", {
                                                        className: "hvr-float-shadow mb-10",
                                                        style: {
                                                            height: 50,
                                                            width: 50,
                                                            objectFit: "contain"
                                                        },
                                                        src: "/images/secured-icon.png"
                                                    }), Object(K.jsx)(ze.a, {
                                                        children: "PROPRIETARY"
                                                    })]
                                                }), Object(K.jsxs)(j.a, {
                                                    item: !0,
                                                    xs: 4,
                                                    md: 3,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: [Object(K.jsx)("img", {
                                                        className: "hvr-float-shadow mb-10",
                                                        style: {
                                                            height: 50,
                                                            width: 50,
                                                            objectFit: "contain"
                                                        },
                                                        src: "/images/profit-icon.png"
                                                    }), Object(K.jsx)(ze.a, {
                                                        children: "LOWEST PRICES"
                                                    })]
                                                }), Object(K.jsxs)(j.a, {
                                                    item: !0,
                                                    xs: 4,
                                                    md: 3,
                                                    style: {
                                                        textAlign: "center"
                                                    },
                                                    children: [Object(K.jsx)("img", {
                                                        className: "hvr-float-shadow mb-10",
                                                        style: {
                                                            height: 50,
                                                            width: 50,
                                                            objectFit: "contain"
                                                        },
                                                        src: "/images/fast-icon.png"
                                                    }), Object(K.jsx)(ze.a, {
                                                        children: "US-REGULATED"
                                                    })]
                                                })]
                                            })]
                                        }), Object(K.jsx)(j.a, {
                                            item: !0,
                                            sm: 12,
                                            md: 6,
                                            style: {
                                                textAlign: "right"
                                            },
                                            className: "hide-mobile",
                                            children: Object(K.jsx)("img", {
                                                src: "/images/secured-icon-1.png",
                                                className: "banner-img hvr-float-shadow"
                                            })
                                        })]
                                    })
                                })
                            }), Object(K.jsx)("div", {
                                children: Object(K.jsxs)("svg", {
                                    className: "waves",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                                    viewBox: "0 24 150 28",
                                    preserveAspectRatio: "none",
                                    shapeRendering: "auto",
                                    children: [Object(K.jsx)("defs", {
                                        children: Object(K.jsx)("path", {
                                            id: "gentle-wave",
                                            d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                        })
                                    }), Object(K.jsxs)("g", {
                                        className: "parallax",
                                        children: [Object(K.jsx)("use", {
                                            xlinkHref: "#gentle-wave",
                                            x: "48",
                                            y: "0",
                                            fill: "rgba(255,255,255,0.7"
                                        }), Object(K.jsx)("use", {
                                            xlinkHref: "#gentle-wave",
                                            x: "48",
                                            y: "3",
                                            fill: "rgba(255,255,255,0.5)"
                                        }), Object(K.jsx)("use", {
                                            xlinkHref: "#gentle-wave",
                                            x: "48",
                                            y: "5",
                                            fill: "rgba(255,255,255,0.3)"
                                        }), Object(K.jsx)("use", {
                                            xlinkHref: "#gentle-wave",
                                            x: "48",
                                            y: "7",
                                            fill: "#fff"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                },
                $e = (a(665), [{
                    title: "Crypto Currency Deposits",
                    content: "Users can deposit cryptocurrencies. The monthly interest is calculated based on the amount of cryptocurrency in their accounts.",
                    image: "Crypto"
                }, {
                    title: "P2P Mortgage",
                    content: "Users can obtain loans through their digital currency deposits; it is beneficial to enterprises and individuals in the cryptocurrency ecosystem, such as exchanges, project parties, digital investment institutions and etc. They will obtain the liquidity they need and thereby enhance their asset management capabilities.",
                    image: "P2P"
                }, {
                    title: "Crypto Currency Trading",
                    content: "Cryptocurrency acquisition services support all kinds of settlements between parties and provide direct interpersonal transactions. Institutions or individuals from different countries can buy, sell and exchange other digital currencies or fiat currencies (such as the US dollar).",
                    image: "trading"
                }, {
                    title: "Cross-border Payment Transfer",
                    content: "Blockchain technology is used to transfer capital. The fee of digital currency payment is the lowest and the transaction is carried out in real-time.",
                    image: "Cross"
                }, {
                    title: "Forex Investment Trading",
                    content: "Users directly enter the interbank foreign exchange market, process orders and trade them on the market without any intermediaries. It enhances the asset security and further reduces transaction cost and increase trading efficiency.",
                    image: "Forex"
                }, {
                    title: "Crypto Currency Exchange",
                    content: "The world's first tokenized stock transaction platform allows all investors to invest in cryptocurrency and enjoy easier and safer digital asset appreciation. 4 major cryptocurrencies are now accepted: Bitcoin, Ethereum, Tether, Litecoin.",
                    image: "exchange"
                }]);
            var Xe = function() {
                    return Object(K.jsx)("div", {
                        id: "d34dcf",
                        children: Object(K.jsx)(u.a, {
                            children: Object(K.jsx)(j.a, {
                                container: !0,
                                children: $e.map((function(e, t) {
                                    return Object(K.jsx)(j.a, {
                                        item: !0,
                                        className: "p-5",
                                        xs: 12,
                                        sm: 6,
                                        md: 4,
                                        children: Object(K.jsxs)(Be.a, {
                                            children: [Object(K.jsx)(d.a, {
                                                src: "".concat(Z, "/").concat(e.image, ".png"),
                                                style: {
                                                    height: 50,
                                                    width: 50,
                                                    margin: "auto",
                                                    marginBottom: 30
                                                },
                                                className: "hvr-float-shadow"
                                            }), Object(K.jsx)(ze.a, {
                                                variant: "h5",
                                                style: {
                                                    textAlign: "center",
                                                    marginBottom: 20
                                                },
                                                children: e.title
                                            }), Object(K.jsx)("p", {
                                                children: e.content
                                            })]
                                        })
                                    }, t)
                                }))
                            })
                        })
                    })
                },
                Qe = a(770);
            var Ze = function() {
                    return Object(K.jsx)("div", {
                        className: "footer",
                        children: Object(K.jsx)(u.a, {
                            children: Object(K.jsxs)(j.a, {
                                container: !0,
                                justify: "space-between",

                            })
                        })
                    })
                },
                Je = a(771),
                et = [{
                    image: "forbes-logo.png",
                    url: "https://www.forbes.com/sites/peterjreilly/2021/05/10/the-dubious-anonymity-of-virtual-currency-transactions/?sh=417d639169bf",
                    className: "forbes"
                }, {
                    image: "hdu2921d4.svg",
                    url: "https://www.coindesk.com/its-2031-this-is-the-world-that-crypto-created",
                    className: "coindesk"
                }, {
                    image: "bloomberg-light.png",
                    url: "https://www.bloomberg.com/opinion/articles/2021-06-09/crypto-finally-has-a-reason-to-exist-decentralized-finance",
                    className: "bloomberg"
                }];
            var tt = function() {
                    return Object(K.jsxs)(u.a, {
                        id: "media",
                        className: "pt-50 pb-50 text-center",
                        children: [Object(K.jsx)(ze.a, {
                            variant: "h3",
                            className: "mb-10 color-white",
                            children: "Media"
                        }), Object(K.jsx)(Je.a, {}), Object(K.jsx)(j.a, {
                            container: !0,
                            spacing: 2,
                            className: "mb-10 ",
                            children: et.map((function(e, t) {
                                return Object(K.jsx)(j.a, {
                                    item: !0,
                                    xs: 4,
                                    children: Object(K.jsx)("a", {
                                        href: e.url,
                                        target: "_blank",
                                        children: Object(K.jsx)("div", {
                                            className: "hvr-float media-logo " + e.className,
                                            children: Object(K.jsx)("img", {
                                                src: "".concat(Z, "/").concat(e.image)
                                            })
                                        })
                                    })
                                }, t)
                            }))
                        })]
                    })
                },
                at = [{
                    coin: "BTC",
                    apy: "7.5",
                    market: 1e6,
                    price: .35,
                    change: 2.2,
                    fullName: "Bitcoin",
                    link: "https://coinmarketcap.com/currencies/bitcoin/"
                }, {
                    coin: "ETH",
                    apy: "7.5",
                    market: 1e6,
                    price: .35,
                    change: 2.2,
                    fullName: "Ethereum",
                    link: "https://coinmarketcap.com/currencies/ethereum/"
                }, {
                    coin: "CPU",
                    apy: "7.5",
                    market: 1e6,
                    price: .35,
                    change: 2.2,
                    fullName: "Cash Pickup Token",
                    link: "https://tronscan.org/#/token20/TUymA9PTCWbnAhdFxEHAwQA892p4PbZNPC"
                }, {
                    coin: "USDT",
                    apy: "7.5",
                    market: 1e6,
                    price: .35,
                    change: 2.2,
                    fullName: "Tether",
                    link: "https://coinmarketcap.com/currencies/tether/"
                }, {
                    coin: "TRX",
                    apy: "7.5",
                    market: 1e6,
                    price: .35,
                    change: 2.2,
                    fullName: "Tron",
                    link: "https://coinmarketcap.com/currencies/tron/"
                }];
            var nt = function() {
                return Object(K.jsx)(u.a, {
                    className: "mt-100 mb-100",
                    children: Object(K.jsxs)("div", {
                        style: {
                            padding: "30px 20px"
                        },
                        children: [Object(K.jsx)(ze.a, {
                            style: {
                                textAlign: "center",
                                marginBottom: 50
                            },
                            variant: "h3",
                            children: "Supported assets"
                        }), Object(K.jsx)(j.a, {
                            container: !0,
                            style: {
                                textAlign: "center"
                            },
                            justify: "space-evenly",
                            children: at.map((function(e, t) {
                                return Object(K.jsx)(j.a, {
                                    item: !0,
                                    children: Object(K.jsx)("a", {
                                        href: e.link,
                                        target: "_blank",
                                        children: Object(K.jsx)("img", {
                                            src: "".concat(Z, "/coins/").concat(e.coin, ".png"),
                                            style: {
                                                width: 74,
                                                height: 74
                                            }
                                        })
                                    })
                                }, t)
                            }))
                        })]
                    })
                })
            };
            var ct = function() {
                    return Object(K.jsxs)(K.Fragment, {
                        children: [Object(K.jsx)(qe, {}), Object(K.jsxs)("div", {
                            className: "homepage",
                            children: [Object(K.jsx)(Ke, {}), Object(K.jsx)(nt, {}), Object(K.jsx)(Xe, {}), Object(K.jsx)(tt, {}), Object(K.jsx)(Ze, {})]
                        })]
                    })
                },
                it = (a(666), a(667), a(817)),
                st = a(469),
                rt = a(774),
                lt = a(775),
                ot = a(778),
                dt = a(57),
                ut = (a(668), a(776)),
                jt = a(777),
                bt = a(339),
                Ot = a.n(bt);
            var ht = function(e) {
                var t = e.open,
                    a = e._handleComplete;
                return Object(K.jsx)(m.a, {
                    anchor: "left",
                    open: t,
                    className: "custom-modal-vk",
                    children: Object(K.jsxs)("div", {
                        style: {
                            backgroundColor: "#fff",
                            padding: 20
                        },
                        children: [Object(K.jsx)(ze.a, {
                            variant: "h6",
                            children: "Enter Google Authenticator Code"
                        }), Object(K.jsx)(E.a, {
                            className: "mt-10"
                        }), Object(K.jsx)(Ot.a, {
                            className: "pin-input",
                            length: 6,
                            type: "numeric",
                            inputMode: "number",
                            style: {
                                padding: "20px 0"
                            },
                            onComplete: function(e) {
                                a(e)
                            },
                            autoSelect: !0,
                            regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/,
                            focus: !0
                        })]
                    })
                })
            };
            var mt = function(e) {
                var t = e.open,
                    a = e._handleComplete;
                return Object(K.jsx)(m.a, {
                    anchor: "left",
                    open: t,
                    className: "custom-modal-vk",
                    children: Object(K.jsxs)("div", {
                        style: {
                            backgroundColor: "#fff",
                            padding: 20
                        },
                        children: [Object(K.jsx)(ze.a, {
                            variant: "h6",
                            children: "Enter email OTP code"
                        }), Object(K.jsx)(E.a, {
                            className: "mt-10"
                        }), Object(K.jsx)(Ot.a, {
                            className: "pin-input",
                            length: 6,
                            type: "numeric",
                            inputMode: "number",
                            style: {
                                padding: "20px 0"
                            },
                            onComplete: function(e) {
                                a(e)
                            },
                            autoSelect: !0,
                            regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/,
                            focus: !0
                        })]
                    })
                })
            };
            var ft = function() {
                    var e = Object(y.useSelector)((function(e) {
                            return e
                        })).setting.library,
                        t = Object(n.useState)(""),
                        a = Object(o.a)(t, 2),
                        c = a[0],
                        i = a[1],
                        s = Object(n.useState)(""),
                        j = Object(o.a)(s, 2),
                        O = j[0],
                        h = j[1],
                        m = Object(n.useState)(!1),
                        f = Object(o.a)(m, 2),
                        x = f[0],
                        p = f[1],
                        g = Object(n.useState)(null),
                        E = Object(o.a)(g, 2),
                        v = E[0],
                        S = E[1],
                        _ = Object(n.useState)(!1),
                        A = Object(o.a)(_, 2),
                        N = A[0],
                        T = A[1],
                        C = Object(n.useState)(""),
                        I = Object(o.a)(C, 2),
                        R = I[0],
                        k = I[1],
                        w = Object(n.useState)(""),
                        P = Object(o.a)(w, 2),
                        D = P[0],
                        L = P[1],
                        W = Object(n.useState)(!1),
                        M = Object(o.a)(W, 2),
                        F = M[0],
                        U = M[1],
                        H = Object(n.useState)(!1),
                        G = Object(o.a)(H, 2),
                        Y = G[0],
                        B = G[1],
                        z = Object(l.k)(),
                        V = new URLSearchParams(Object(l.l)().search);
                    Object(n.useEffect)((function() {
                        re() && z.push("/")
                    }), [z]);
                    var $ = function(t) {
                        if (t && t.preventDefault(), S(null), Object(dt.checkEmpty)(c) || Object(dt.checkEmpty)(O)) S(e.PLEASE_ENTER_EMAIL_AND_PASSWORD);
                        else {
                            var a = de();
                            a || (a = function(e) {
                                for (var t = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = a.length, c = 0; c < e; c++) t += a.charAt(Math.floor(Math.random() * n));
                                return t
                            }(64), n = a, localStorage.setItem(te, ue(n, te))), p(!0), he("/user-service/user/login", {
                                email: c,
                                password: O,
                                device: q(),
                                gaCode: D,
                                emailOtp: R,
                                secret: a
                            }, (function(e) {
                                var t;
                                t = e.accessToken, localStorage.setItem(ee, ue(t, ee)), "swap" === V.get("return") ? window.location.replace("/swap") : V.get("return") === ne ? window.location.reload() : window.location.replace("/assets")
                            }), (function(t) {
                                var a = t.code;
                                p(!1), "EMAIL_OTP_REQUIRED" === a ? (T(!0), U(!1)) : "GACODE_REQUIRED" === a ? (U(!0), T(!1)) : se("error", e[a])
                            }))
                        }
                        var n
                    };
                    return Object(n.useEffect)((function() {
                        (D || R) && $()
                    }), [D, R]), Object(K.jsxs)("div", {
                        className: "login",
                        children: [Object(K.jsxs)(u.a, {
                            maxWidth: "sm",
                            className: "login-form",
                            children: [Object(K.jsxs)("div", {
                                children: [Object(K.jsx)(d.a, {
                                    src: "/images/logo.png"
                                }), Object(K.jsx)(ze.a, {
                                    variant: "h4",
                                    children: e.LOGIN.toUpperCase()
                                })]
                            }), Object(K.jsx)("form", {
                                onSubmit: $,
                                autoComplete: "off",
                                noValidate: !0,
                                children: Object(K.jsxs)("div", {
                                    children: [Object(K.jsx)(it.a, {
                                        required: !0,
                                        id: "username",
                                        name: "username",
                                        label: "Email",
                                        fullWidth: !0,
                                        placeholder: e.PLEASE_ENTER_EMAIL,
                                        variant: "outlined",
                                        autoComplete: "on",
                                        className: "mb-20",
                                        onChange: function(e) {
                                            return i(e.target.value)
                                        }
                                    }), Object(K.jsxs)("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        children: [Object(K.jsx)(it.a, {
                                            required: !0,
                                            id: "password",
                                            name: "password",
                                            label: e.PASSWORD,
                                            fullWidth: !0,
                                            placeholder: e.PLEASE_ENTER_PASSWORD,
                                            variant: "outlined",
                                            autoComplete: "on",
                                            className: "mb-20",
                                            type: Y ? "input" : "password",
                                            onChange: function(e) {
                                                return h(e.target.value)
                                            }
                                        }), Object(K.jsx)(st.a, {
                                            "aria-label": "toggle password visibility",
                                            onClick: function() {
                                                return B(!Y)
                                            },
                                            className: "eye-icon",
                                            children: Y ? Object(K.jsx)(ut.a, {}) : Object(K.jsx)(jt.a, {})
                                        })]
                                    }), Object(K.jsx)("div", {
                                        className: "d-flex-ee",
                                        children: Object(K.jsx)(r.Link, {
                                            to: "forgot-password",
                                            children: e.FORGOT_PASSWORD
                                        })
                                    }), Object(K.jsx)(rt.a, {
                                        error: v,
                                        className: "mt-20 mb-20",
                                        children: Object(K.jsxs)(lt.a, {
                                            children: [v, "\xa0"]
                                        })
                                    }), Object(K.jsx)("div", {
                                        children: Object(K.jsx)(b.a, {
                                            fullWidth: !0,
                                            className: "submit-btn mt-30",
                                            type: "submit",
                                            disabled: x,
                                            children: x ? Object(K.jsx)(ot.a, {
                                                color: "primary",
                                                stye: {
                                                    display: "flex"
                                                }
                                            }) : Object(K.jsx)("div", {
                                                children: e.LOGIN
                                            })
                                        })
                                    })]
                                })
                            }), Object(K.jsx)("div", {
                                className: "login-footer",
                                children: Object(K.jsx)(r.Link, {
                                    to: "register",
                                    children: e.CREATE_NEW_ACCOUNT
                                })
                            })]
                        }), Object(K.jsx)(ht, {
                            open: F,
                            _handleComplete: function(e) {
                                L(e)
                            }
                        }), Object(K.jsx)(mt, {
                            open: N,
                            _handleComplete: function(e) {
                                return k(e)
                            }
                        })]
                    })
                },
                xt = (a(669), a(812));
            var pt = function() {
                var e = Object(l.m)().id,
                    t = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    a = Object(n.useState)(!1),
                    c = Object(o.a)(a, 2),
                    i = c[0],
                    s = c[1],
                    j = Object(n.useState)(!1),
                    O = Object(o.a)(j, 2),
                    h = O[0],
                    m = O[1],
                    f = Object(n.useState)(""),
                    x = Object(o.a)(f, 2),
                    p = x[0],
                    g = x[1],
                    E = Object(n.useState)(""),
                    v = Object(o.a)(E, 2),
                    S = v[0],
                    _ = v[1],
                    A = Object(n.useState)(e || ""),
                    N = Object(o.a)(A, 2),
                    T = N[0],
                    C = N[1],
                    I = Object(l.k)(),
                    R = Object(n.useState)(!0),
                    k = Object(o.a)(R, 2),
                    w = k[0],
                    P = k[1],
                    D = Object(n.useState)(null),
                    L = Object(o.a)(D, 2),
                    W = L[0],
                    M = L[1];
                return Object(n.useEffect)((function() {
                    re() && I.push("/")
                }), [I]), Object(K.jsx)("div", {
                    className: "login",
                    children: Object(K.jsxs)(u.a, {
                        maxWidth: "sm",
                        className: "login-form",
                        children: [Object(K.jsxs)("div", {
                            children: [Object(K.jsx)(d.a, {
                                src: "/images/logo.png"
                            }), Object(K.jsx)(ze.a, {
                                variant: "h4",
                                children: t.REGISTER.toUpperCase()
                            })]
                        }), Object(K.jsxs)("form", {
                            onSubmit: function(e) {
                                e.preventDefault();
                                var a = !1,
                                    n = !1;
                                M(null), m(!0), Object(dt.checkEmpty)(p) ? M(t.PLEASE_ENTER_EMAIL) : Object(dt.checkEmail)(p) ? M(t.INVALID_EMAIL) : Object(dt.checkEmpty)(S) ? M(t.PLEASE_ENTER_PASSWORD) : Object(dt.checkLength)(S, 8) ? M(t.PLEASE_ENTER_PASSWORD_MORE_THAN) : S.length > 16 ? M(t.PLEASE_ENTER_PASSWORD_LESS_THAN) : (n = !0, a = !0), a && n ? "" !== T.trim() ? w ? he("/user-service/user/register", {
                                    email: p,
                                    password: S,
                                    referralId: T
                                }, (function() {
                                    se("success", t.REGISTER_SUCCESS), setTimeout((function() {
                                        I.push("/login"), m(!1)
                                    }), 1e3)
                                }), (function(e) {
                                    m(!1), M(t[e.code])
                                })) : (m(!1), M(t.PLEASER_CHECK_TOS)) : (m(!1), M(t.PLEASE_ENTER_REFERRAL)) : m(!1)
                            },
                            noValidate: !0,
                            children: [Object(K.jsx)(it.a, {
                                autoComplete: "off",
                                required: !0,
                                label: "Email",
                                fullWidth: !0,
                                placeholder: t.PLEASE_ENTER_EMAIL,
                                variant: "outlined",
                                className: "mb-20",
                                onChange: function(e) {
                                    return g(e.target.value)
                                },
                                maxLength: "128",
                                value: p
                            }), Object(K.jsxs)("div", {
                                style: {
                                    position: "relative"
                                },
                                children: [Object(K.jsx)(it.a, {
                                    autoComplete: "new-password",
                                    required: !0,
                                    label: t.PASSWORD,
                                    fullWidth: !0,
                                    placeholder: t.PLEASE_ENTER_EMAIL,
                                    variant: "outlined",
                                    className: "mb-20",
                                    type: i ? "input" : "password",
                                    onChange: function(e) {
                                        return _(e.target.value)
                                    },
                                    maxLength: "128",
                                    value: S
                                }), Object(K.jsx)(st.a, {
                                    "aria-label": "toggle password visibility",
                                    onClick: function() {
                                        return s(!i)
                                    },
                                    className: "eye-icon",
                                    children: i ? Object(K.jsx)(ut.a, {}) : Object(K.jsx)(jt.a, {})
                                })]
                            }), Object(K.jsx)(it.a, {
                                required: !0,
                                id: "new_referral",
                                name: "new_referral",
                                label: t.REFERRAL_ID,
                                fullWidth: !0,
                                placeholder: t.PLEASE_ENTER_REFERRAL,
                                variant: "outlined",
                                className: "mb-20",
                                onChange: function(e) {
                                    return C(Object(B.deleteText)(e.target.value))
                                },
                                maxLength: "128",
                                autoComplete: "off",
                                value: T
                            }), Object(K.jsxs)("div", {
                                className: "d-flex-sbt",
                                children: [Object(K.jsx)(xt.a, {
                                    checked: w,
                                    onChange: function(e) {
                                        return P(e.target.checked)
                                    },
                                    name: "checkedA",
                                    color: "default"
                                }), Object(K.jsxs)("p", {
                                    style: {
                                        marginLeft: 10,
                                        fontSize: "0.9em"
                                    },
                                    children: [t.AGREE_TOS, " ", Object(K.jsx)("a", {
                                        href: "/terms-of-service",
                                        target: "_blank",
                                        children: t.fastwallet_TOS
                                    }), " ", "&", " ", Object(K.jsx)("a", {
                                        href: "/policy",
                                        target: "blank",
                                        children: t.PRIVACY_AND_POLICY
                                    }), "."]
                                })]
                            }), Object(K.jsx)(rt.a, {
                                error: W,
                                className: "mb-20 mt-20",
                                children: Object(K.jsxs)(lt.a, {
                                    children: [W, "\xa0"]
                                })
                            }), Object(K.jsx)(b.a, {
                                type: "submit",
                                className: "submit-btn mt-30",
                                disabled: h,
                                children: h ? Object(K.jsx)(ot.a, {
                                    color: "primary",
                                    stye: {
                                        display: "flex"
                                    }
                                }) : Object(K.jsx)("div", {
                                    children: t.CREATE_NEW_ACCOUNT
                                })
                            })]
                        }), Object(K.jsx)("div", {
                            className: "login-footer",
                            children: Object(K.jsx)(r.Link, {
                                to: "/login",
                                children: t.HAVE_A_ACCOUNT
                            })
                        })]
                    })
                })
            };
            var gt = function() {
                    var e = Object(n.useState)(""),
                        t = Object(o.a)(e, 2),
                        a = t[0],
                        c = t[1],
                        i = Object(n.useState)(!1),
                        s = Object(o.a)(i, 2),
                        l = s[0],
                        j = s[1],
                        O = Object(y.useSelector)((function(e) {
                            return e
                        })).setting.library,
                        h = Object(n.useState)(null),
                        m = Object(o.a)(h, 2),
                        f = m[0],
                        x = m[1];
                    return Object(K.jsx)("div", {
                        className: "login",
                        children: Object(K.jsxs)(u.a, {
                            maxWidth: "sm",
                            className: "login-form",
                            children: [Object(K.jsxs)("div", {
                                children: [Object(K.jsx)(d.a, {
                                    src: "/images/logo.png"
                                }), Object(K.jsx)(ze.a, {
                                    variant: "h4",
                                    children: O.FORGOT_PASSWORD.toUpperCase()
                                })]
                            }), Object(K.jsxs)("form", {
                                onSubmit: function(e) {
                                    e.preventDefault(), x(null), Object(dt.checkEmail)(a) ? x(O.INVALID_EMAIL) : (j(!0), Oe("".concat("/user-service/user/forgot-pwd", "/").concat(a), (function() {
                                        se("success", O.FORGOT_PASSWORD_SUCCESS), j(!1)
                                    }), (function(e) {
                                        j(!1), x(O[e.code])
                                    })))
                                },
                                noValidate: !0,
                                children: [Object(K.jsx)(it.a, {
                                    autoComplete: "off",
                                    required: !0,
                                    label: "Email",
                                    fullWidth: !0,
                                    placeholder: O.PLEASE_ENTER_EMAIL,
                                    variant: "outlined",
                                    onChange: function(e) {
                                        return c(e.target.value)
                                    },
                                    maxLength: "128",
                                    value: a
                                }), Object(K.jsx)(rt.a, {
                                    error: f,
                                    className: "mb-20 mt-20",
                                    children: Object(K.jsxs)(lt.a, {
                                        children: [f, "\xa0"]
                                    })
                                }), Object(K.jsx)(b.a, {
                                    type: "submit",
                                    className: "submit-btn mt-30",
                                    disabled: l,
                                    children: l ? Object(K.jsx)(ot.a, {
                                        color: "primary",
                                        stye: {
                                            display: "flex"
                                        }
                                    }) : Object(K.jsx)("div", {
                                        children: O.CONFIRM
                                    })
                                })]
                            }), Object(K.jsx)("div", {
                                className: "login-footer",
                                children: Object(K.jsx)(r.Link, {
                                    to: "/login",
                                    children: "Remember password"
                                })
                            })]
                        })
                    })
                },
                Et = a(809),
                vt = a(786),
                yt = a(779),
                St = a(780),
                _t = a(781),
                At = a(782),
                Nt = a(783),
                Tt = a(784),
                Ct = a(785),
                It = a(818),
                Rt = a(170),
                kt = a.n(Rt),
                wt = a(236),
                Pt = a.n(wt);
            var Dt = function() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    t = e.user,
                    a = e.setting,
                    c = t.airdropRewards,
                    i = a.library,
                    s = Object(y.useDispatch)(),
                    r = i.TIME,
                    l = i.AMOUNT,
                    d = i.MEMBER,
                    u = Object(n.useState)(1),
                    j = Object(o.a)(u, 2),
                    b = j[0],
                    O = j[1],
                    h = Object(n.useState)(10),
                    m = Object(o.a)(h, 2),
                    f = m[0],
                    x = m[1];
                return Object(n.useEffect)((function() {
                    s(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        return function(a) {
                            he(U, {
                                page: e,
                                pageSize: t,
                                type: "AIRDROP"
                            }, (function(e) {
                                a({
                                    type: _,
                                    payload: e
                                })
                            }), (function(e) {
                                return console.error(e)
                            }))
                        }
                    }(b, f))
                }), [f, b]), Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)(ze.a, {
                        variant: "h5",
                        className: "mb-30",
                        children: i.AIRDROP_HISTORY
                    }), Object(K.jsx)(Be.a, {
                        children: Object(K.jsx)(yt.a, {
                            children: Object(K.jsxs)(St.a, {
                                "aria-label": "custom pagination table",
                                children: [Object(K.jsx)(_t.a, {
                                    children: Object(K.jsxs)(At.a, {
                                        children: [Object(K.jsx)(Nt.a, {
                                            children: r
                                        }), Object(K.jsx)(Nt.a, {
                                            children: d
                                        }), Object(K.jsx)(Nt.a, {
                                            children: l
                                        })]
                                    })
                                }), Object(K.jsx)(Tt.a, {
                                    children: c && (0 !== c.itemCount ? c.items.map((function(e) {
                                        return Object(K.jsxs)(At.a, {
                                            children: [Object(K.jsx)(Nt.a, {
                                                className: "text-bold",
                                                component: "th",
                                                scope: "row",
                                                children: Pt()(e.time).format("YYYY MM DD, mm:hh:ss")
                                            }), Object(K.jsx)(Nt.a, {
                                                children: e.note
                                            }), Object(K.jsxs)(Nt.a, {
                                                children: [Object(B.formatAmount)(e.amount), " ", e.coin]
                                            })]
                                        }, e.id)
                                    })) : Object(K.jsx)(At.a, {
                                        children: Object(K.jsx)(Nt.a, {
                                            colSpan: 3,
                                            children: i.NO_RECORDS_FOUND
                                        })
                                    }))
                                }), Object(K.jsx)(Ct.a, {
                                    children: Object(K.jsx)(At.a, {
                                        children: Object(K.jsx)(It.a, {
                                            rowsPerPageOptions: [5, 10, 25, {
                                                label: "All",
                                                value: -1
                                            }],
                                            colSpan: 3,
                                            count: c && c.itemCount,
                                            rowsPerPage: f,
                                            page: b - 1,
                                            SelectProps: {
                                                inputProps: {
                                                    "aria-label": "rows per page"
                                                },
                                                native: !0
                                            },
                                            onChangePage: function(e, t) {
                                                O(t + 1)
                                            },
                                            onChangeRowsPerPage: function(e) {
                                                x(parseInt(e.target.value, 10)), O(0)
                                            },
                                            ActionsComponent: kt.a
                                        })
                                    })
                                })]
                            })
                        })
                    })]
                })
            };
            var Lt = function() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    t = e.user,
                    a = e.setting,
                    c = t.giftRewards,
                    i = a.library,
                    s = Object(y.useDispatch)(),
                    r = i.TIME,
                    l = i.AMOUNT,
                    d = (i.MEMBER, Object(n.useState)(1)),
                    u = Object(o.a)(d, 2),
                    j = u[0],
                    b = u[1],
                    O = Object(n.useState)(10),
                    h = Object(o.a)(O, 2),
                    m = h[0],
                    f = h[1];
                return Object(n.useEffect)((function() {
                    s(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        return function(a) {
                            he(U, {
                                page: e,
                                pageSize: t,
                                type: "GIFT"
                            }, (function(e) {
                                a({
                                    type: N,
                                    payload: e
                                })
                            }), (function(e) {
                                return console.error(e)
                            }))
                        }
                    }(j, m))
                }), [m, j]), Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)(ze.a, {
                        variant: "h5",
                        className: "mb-30",
                        children: i.GIFT_HISTORY
                    }), Object(K.jsx)(Be.a, {
                        children: Object(K.jsx)(yt.a, {
                            children: Object(K.jsxs)(St.a, {
                                "aria-label": "custom pagination table",
                                children: [Object(K.jsx)(_t.a, {
                                    children: Object(K.jsxs)(At.a, {
                                        children: [Object(K.jsx)(Nt.a, {
                                            children: r
                                        }), Object(K.jsx)(Nt.a, {
                                            children: l
                                        })]
                                    })
                                }), Object(K.jsx)(Tt.a, {
                                    children: c && (0 !== c.itemCount ? c.items.map((function(e) {
                                        return Object(K.jsxs)(At.a, {
                                            children: [Object(K.jsx)(Nt.a, {
                                                className: "text-bold",
                                                component: "th",
                                                scope: "row",
                                                children: Pt()(e.time).format("YYYY MM DD, mm:hh:ss")
                                            }), Object(K.jsxs)(Nt.a, {
                                                children: [Object(B.formatAmount)(e.amount), " ", e.coin]
                                            })]
                                        }, e.id)
                                    })) : Object(K.jsx)(At.a, {
                                        children: Object(K.jsx)(Nt.a, {
                                            colSpan: 2,
                                            children: i.NO_RECORDS_FOUND
                                        })
                                    }))
                                }), Object(K.jsx)(Ct.a, {
                                    children: Object(K.jsx)(At.a, {
                                        children: Object(K.jsx)(It.a, {
                                            rowsPerPageOptions: [5, 10, 25, {
                                                label: "All",
                                                value: -1
                                            }],
                                            colSpan: 3,
                                            count: c && c.itemCount,
                                            rowsPerPage: m,
                                            page: j - 1,
                                            SelectProps: {
                                                inputProps: {
                                                    "aria-label": "rows per page"
                                                },
                                                native: !0
                                            },
                                            onChangePage: function(e, t) {
                                                b(t + 1)
                                            },
                                            onChangeRowsPerPage: function(e) {
                                                f(parseInt(e.target.value, 10)), b(0)
                                            },
                                            ActionsComponent: kt.a
                                        })
                                    })
                                })]
                            })
                        })
                    })]
                })
            };
            var Wt = function() {
                var e = Object(n.useState)(null),
                    t = Object(o.a)(e, 2),
                    a = t[0],
                    c = t[1],
                    i = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    s = Object(n.useState)(1),
                    r = Object(o.a)(s, 2),
                    l = r[0],
                    d = r[1],
                    u = Object(n.useState)(10),
                    j = Object(o.a)(u, 2),
                    b = j[0],
                    O = j[1];
                return Object(n.useEffect)((function() {
                    c(null), he("/user-service/referral/list", {
                        page: l,
                        pageSize: b
                    }, (function(e) {
                        c(e)
                    }), (function(e) {
                        return console.error(e)
                    }))
                }), [l, b]), Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)(ze.a, {
                        variant: "h5",
                        className: "mb-30",
                        children: "Affiliate F1 List"
                    }), Object(K.jsx)(Be.a, {
                        children: Object(K.jsx)(yt.a, {
                            children: Object(K.jsxs)(St.a, {
                                "aria-label": "custom pagination table",
                                children: [Object(K.jsx)(_t.a, {
                                    children: Object(K.jsxs)(At.a, {
                                        children: [Object(K.jsx)(Nt.a, {
                                            children: "#"
                                        }), Object(K.jsx)(Nt.a, {
                                            children: i.MEMBER
                                        })]
                                    })
                                }), Object(K.jsx)(Tt.a, {
                                    children: a && (0 !== a.itemCount ? a.items.map((function(e) {
                                        return Object(K.jsxs)(At.a, {
                                            children: [Object(K.jsxs)(Nt.a, {
                                                className: "text-bold",
                                                component: "th",
                                                scope: "row",
                                                children: ["#", e.id]
                                            }), Object(K.jsx)(Nt.a, {
                                                children: e.referralEmail
                                            })]
                                        }, e.id)
                                    })) : Object(K.jsx)(At.a, {
                                        children: Object(K.jsx)(Nt.a, {
                                            colSpan: 2,
                                            children: i.NO_RECORDS_FOUND
                                        })
                                    }))
                                }), Object(K.jsx)(Ct.a, {
                                    children: Object(K.jsx)(At.a, {
                                        children: Object(K.jsx)(It.a, {
                                            rowsPerPageOptions: [5, 10, 25, {
                                                label: "All",
                                                value: -1
                                            }],
                                            colSpan: 3,
                                            count: a && a.itemCount,
                                            rowsPerPage: b,
                                            page: l - 1,
                                            SelectProps: {
                                                inputProps: {
                                                    "aria-label": "rows per page"
                                                },
                                                native: !0
                                            },
                                            onChangePage: function(e, t) {
                                                d(t + 1)
                                            },
                                            onChangeRowsPerPage: function(e) {
                                                O(parseInt(e.target.value, 10)), d(0)
                                            },
                                            ActionsComponent: kt.a
                                        })
                                    })
                                })]
                            })
                        })
                    })]
                })
            };
            var Mt = function() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    t = e.user,
                    a = e.setting,
                    c = t.stakingReferralRewards,
                    i = a.library,
                    s = Object(y.useDispatch)(),
                    r = i.TIME,
                    l = i.AMOUNT,
                    d = i.MEMBER,
                    u = Object(n.useState)(1),
                    j = Object(o.a)(u, 2),
                    b = j[0],
                    O = j[1],
                    h = Object(n.useState)(10),
                    m = Object(o.a)(h, 2),
                    f = m[0],
                    x = m[1];
                return Object(n.useEffect)((function() {
                    s(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        return function(a) {
                            he(U, {
                                page: e,
                                pageSize: t,
                                type: "STAKING_REFERRAL"
                            }, (function(e) {
                                a({
                                    type: A,
                                    payload: e
                                })
                            }), (function(e) {
                                return console.error(e)
                            }))
                        }
                    }(b, f))
                }), [f, b]), Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)(ze.a, {
                        variant: "h5",
                        className: "mb-30",
                        children: i.COMMISSION_HISTORY
                    }), Object(K.jsx)(Be.a, {
                        children: Object(K.jsx)(yt.a, {
                            children: Object(K.jsxs)(St.a, {
                                "aria-label": "custom pagination table",
                                children: [Object(K.jsx)(_t.a, {
                                    children: Object(K.jsxs)(At.a, {
                                        children: [Object(K.jsx)(Nt.a, {
                                            children: r
                                        }), Object(K.jsx)(Nt.a, {
                                            children: d
                                        }), Object(K.jsx)(Nt.a, {
                                            children: l
                                        })]
                                    })
                                }), Object(K.jsx)(Tt.a, {
                                    children: c && (0 !== c.itemCount ? c.items.map((function(e) {
                                        return Object(K.jsxs)(At.a, {
                                            children: [Object(K.jsx)(Nt.a, {
                                                className: "text-bold",
                                                component: "th",
                                                scope: "row",
                                                children: Pt()(e.time).format("YYYY MM DD, mm:hh:ss")
                                            }), Object(K.jsx)(Nt.a, {
                                                children: e.note
                                            }), Object(K.jsxs)(Nt.a, {
                                                children: [Object(B.formatAmount)(e.amount), " ", e.coin]
                                            })]
                                        }, e.id)
                                    })) : Object(K.jsx)(At.a, {
                                        children: Object(K.jsx)(Nt.a, {
                                            colSpan: 3,
                                            children: i.NO_RECORDS_FOUND
                                        })
                                    }))
                                }), Object(K.jsx)(Ct.a, {
                                    children: Object(K.jsx)(At.a, {
                                        children: Object(K.jsx)(It.a, {
                                            rowsPerPageOptions: [5, 10, 25, {
                                                label: "All",
                                                value: -1
                                            }],
                                            colSpan: 3,
                                            count: c && c.itemCount,
                                            rowsPerPage: f,
                                            page: b - 1,
                                            SelectProps: {
                                                inputProps: {
                                                    "aria-label": "rows per page"
                                                },
                                                native: !0
                                            },
                                            onChangePage: function(e, t) {
                                                O(t + 1)
                                            },
                                            onChangeRowsPerPage: function(e) {
                                                x(parseInt(e.target.value, 10)), O(0)
                                            },
                                            ActionsComponent: kt.a
                                        })
                                    })
                                })]
                            })
                        })
                    })]
                })
            };
            var Ft = function() {
                    var e = Object(y.useSelector)((function(e) {
                            return e
                        })).setting.library,
                        t = e.STAKING_COMMISSION,
                        a = e.AIRDROP,
                        c = e.GIFT,
                        i = Object(n.useState)(0),
                        s = Object(o.a)(i, 2),
                        r = s[0],
                        l = s[1],
                        d = [{
                            menuItem: "Affiliate F1",
                            render: Object(K.jsx)(Wt, {})
                        }, {
                            menuItem: a,
                            render: Object(K.jsx)(Dt, {})
                        }, {
                            menuItem: t,
                            render: Object(K.jsx)(Mt, {})
                        }, {
                            menuItem: c,
                            render: Object(K.jsx)(Lt, {})
                        }];
                    return Object(K.jsxs)(K.Fragment, {
                        children: [Object(K.jsx)("div", {
                            style: {
                                backgroundColor: "rgb(43, 45, 50)"
                            },
                            children: Object(K.jsx)(u.a, {
                                children: Object(K.jsx)(Et.a, {
                                    value: r,
                                    indicatorColor: "primary",
                                    textColor: "primary",
                                    onChange: function(e, t) {
                                        l(t)
                                    },
                                    "aria-label": "disabled tabs example",
                                    children: d.map((function(e, t) {
                                        return Object(K.jsx)(vt.a, {
                                            label: e.menuItem,
                                            value: e.index,
                                            style: {
                                                color: "#fff"
                                            }
                                        }, t)
                                    }))
                                })
                            })
                        }), Object(K.jsx)(u.a, {
                            className: "mt-20",
                            style: {
                                minHeight: "100vh"
                            },
                            children: d[r].render
                        })]
                    })
                },
                Ut = a(398),
                Ht = a.n(Ut);
            var Gt = function() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    t = e.user,
                    a = e.setting,
                    c = t.information,
                    i = Object(n.useState)(null),
                    s = Object(o.a)(i, 2),
                    r = s[0],
                    l = s[1],
                    d = a.library,
                    b = d.INVITED_FRIEND,
                    O = d.INVITED_TIP,
                    h = d.COPIED,
                    m = d.AFFILIATE,
                    f = d.YOUR_TOTAL_AFFILIATE,
                    x = d.YOUR_TOTAL_AFFILIATE_F1;
                return Object(n.useEffect)((function() {
                    !r && Oe("/user-service/referral/statistic", (function(e) {
                        l(e)
                    }), (function(e) {
                        return console.error(e)
                    }))
                }), [r]), Object(K.jsx)("div", {
                    style: {
                        background: "linear-gradient(295.27deg, rgb(20, 21, 26) 0%, rgb(71, 77, 87) 84.52%)",
                        color: "#fff"
                    },
                    children: Object(K.jsx)(u.a, {
                        children: Object(K.jsxs)(j.a, {
                            container: !0,
                            spacing: 2,
                            alignItems: "center",
                            justify: "space-between",
                            children: [Object(K.jsxs)(j.a, {
                                item: !0,
                                xs: 12,
                                md: 6,
                                children: [Object(K.jsx)(ze.a, {
                                    variant: "h3",
                                    children: b
                                }), Object(K.jsxs)(ze.a, {
                                    variant: "body1",
                                    className: "mt-20 mb-20 opacity-06",
                                    children: [O, "."]
                                })]
                            }), Object(K.jsx)(j.a, {
                                item: !0,
                                xs: 12,
                                md: 5,
                                children: Object(K.jsxs)(Be.a, {
                                    className: "p-40 bg-black text-white",
                                    style: {
                                        borderTop: "6px solid #00a2ff"
                                    },
                                    children: [Object(K.jsx)(ze.a, {
                                        className: "opacity-06",
                                        children: "Default Referral ID"
                                    }), Object(K.jsxs)("div", {
                                        className: "d-flex-es",
                                        children: [Object(K.jsx)(ze.a, {
                                            variant: "h3",
                                            children: c && c.id
                                        }), Object(K.jsx)(st.a, {
                                            onClick: function() {
                                                navigator.clipboard.writeText(c && c.id), se("success", h)
                                            },
                                            children: Object(K.jsx)(Ht.a, {
                                                fontSize: "small"
                                            })
                                        })]
                                    }), Object(K.jsx)("br", {}), Object(K.jsx)(ze.a, {
                                        className: "opacity-06",
                                        children: "Default link"
                                    }), Object(K.jsxs)("div", {
                                        className: "d-flex-cs",
                                        children: [Object(K.jsx)(ze.a, {
                                            variant: "body1",
                                            children: "".concat(window.location.origin.toString(), "/register/").concat(c && c.id)
                                        }), Object(K.jsx)(st.a, {
                                            onClick: function() {
                                                navigator.clipboard.writeText("".concat(window.location.origin.toString(), "/register/").concat(c && c.id)), se("success", h)
                                            },
                                            children: Object(K.jsx)(Ht.a, {
                                                fontSize: "small"
                                            })
                                        })]
                                    }), Object(K.jsxs)(j.a, {
                                        container: !0,
                                        spacing: 1,
                                        className: "text-center p-20 mt-20 mb-20",
                                        style: {
                                            backgroundColor: "rgb(30, 32, 38)"
                                        },
                                        children: [Object(K.jsxs)(j.a, {
                                            item: !0,
                                            xs: 4,
                                            children: [Object(K.jsx)("div", {
                                                className: "opacity-06",
                                                children: m
                                            }), Object(K.jsxs)(ze.a, {
                                                variant: "h5",
                                                children: ["#", c ? c.referralId : "0"]
                                            })]
                                        }), Object(K.jsxs)(j.a, {
                                            item: !0,
                                            xs: 4,
                                            children: [Object(K.jsx)("div", {
                                                className: "opacity-06",
                                                children: f
                                            }), Object(K.jsx)(ze.a, {
                                                variant: "h5",
                                                children: r && r.referralCount
                                            })]
                                        }), Object(K.jsxs)(j.a, {
                                            item: !0,
                                            xs: 4,
                                            children: [Object(K.jsx)("div", {
                                                className: "opacity-06",
                                                children: x
                                            }), Object(K.jsx)(ze.a, {
                                                variant: "h5",
                                                children: r && r.referralLevel1Count
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            };
            var Yt = function() {
                    Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library;
                    var e = Object(l.k)();
                    return Object(n.useEffect)((function() {
                        re() || e.push("/")
                    }), [e]), Object(K.jsxs)("div", {
                        className: "affiliate",
                        children: [Object(K.jsx)(Gt, {}), Object(K.jsx)(Ft, {})]
                    })
                },
                Bt = a(508),
                zt = a(255),
                Vt = a(400),
                Kt = (a(694), a(808)),
                qt = a(787);
            var $t = function() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })).user.device,
                    t = Object(y.useDispatch)();
                return Object(n.useEffect)((function() {
                    t((function(e) {
                        Oe("/user-service/device", (function(t) {
                            return e({
                                type: C,
                                payload: t.slice(0, 5)
                            })
                        }), (function(e) {
                            return console.error(e)
                        }))
                    })), t(Se())
                }), [t]), e && Object(K.jsx)("div", {
                    className: "device-list mt-20",
                    children: Object(K.jsx)(Kt.a, {
                        divided: !0,
                        verticalAlign: "middle",
                        children: e.map((function(e, t) {
                            return Object(K.jsxs)(Kt.a.Item, {
                                children: [Object(K.jsxs)(Kt.a.Content, {
                                    floated: "right",
                                    children: [Object(K.jsx)(Kt.a.Header, {
                                        as: "div",
                                        children: Object(K.jsx)(qt.a, {
                                            fluid: !0,
                                            children: e.ip
                                        })
                                    }), Object(K.jsx)(Kt.a.Description, {
                                        as: "div",
                                        children: Object(K.jsx)(qt.a, {
                                            fluid: !0,
                                            children: Object(B.formatTime)(e.time)
                                        })
                                    })]
                                }), Object(K.jsxs)(Kt.a.Content, {
                                    children: [Object(K.jsx)(Kt.a.Header, {
                                        as: "p",
                                        children: e.name
                                    }), Object(K.jsx)(Kt.a.Description, {
                                        as: "p",
                                        children: e.location
                                    })]
                                })]
                            }, t)
                        }))
                    })
                })
            };
            var Xt = function() {
                    var e = Object(y.useSelector)((function(e) {
                        return e
                    })).user.activity;
                    return e && Object(K.jsx)("div", {
                        className: "login-list mt-20",
                        children: Object(K.jsx)(Kt.a, {
                            divided: !0,
                            verticalAlign: "middle",
                            children: e.items.map((function(e, t) {
                                return Object(K.jsxs)(Kt.a.Item, {
                                    children: [Object(K.jsxs)(Kt.a.Content, {
                                        floated: "right",
                                        children: [Object(K.jsx)(Kt.a.Header, {
                                            as: "div",
                                            children: Object(K.jsx)(qt.a, {
                                                fluid: !0,
                                                children: e.ip
                                            })
                                        }), Object(K.jsx)(Kt.a.Description, {
                                            as: "div",
                                            children: Object(K.jsx)(qt.a, {
                                                fluid: !0,
                                                children: Object(B.formatTime)(e.time)
                                            })
                                        })]
                                    }), Object(K.jsxs)(Kt.a.Content, {
                                        children: [Object(K.jsx)(Kt.a.Header, {
                                            as: "p",
                                            children: e.device
                                        }), Object(K.jsx)(Kt.a.Description, {
                                            as: "p",
                                            children: e.location
                                        })]
                                    })]
                                }, t)
                            }))
                        })
                    })
                },
                Qt = a(807),
                Zt = a(355),
                Jt = a(813),
                ea = a(507),
                ta = a(803),
                aa = a(44),
                na = a(349),
                ca = ["_showHidePassword", "isPassword", "showPassword"];
            var ia = function(e) {
                var t = e._showHidePassword,
                    a = e.isPassword,
                    n = e.showPassword,
                    c = Object(na.a)(e, ca);
                return Object(K.jsxs)("div", {
                    style: {
                        position: "relative"
                    },
                    children: [Object(K.jsx)(it.a, Object(aa.a)(Object(aa.a)({}, c), {}, {
                        variant: c.variant ? c.variant : "outlined",
                        className: "mb-10",
                        inputProps: {
                            maxLength: c.maxLength
                        },
                        size: c.size ? c.size : "small"
                    })), a && Object(K.jsx)(st.a, {
                        "aria-label": "toggle password visibility",
                        onClick: t,
                        style: {
                            position: "absolute",
                            right: 0,
                            height: 53.63
                        },
                        children: n ? Object(K.jsx)(ut.a, {}) : Object(K.jsx)(jt.a, {})
                    })]
                })
            };
            var sa = function(e) {
                var t = e.open,
                    a = e._close,
                    c = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    i = c.setting,
                    s = c.user.gaEnable,
                    r = i.library,
                    l = Object(n.useState)(null),
                    d = Object(o.a)(l, 2),
                    u = d[0],
                    O = d[1],
                    h = Object(n.useState)(!1),
                    f = Object(o.a)(h, 2),
                    x = f[0],
                    p = f[1],
                    g = Object(n.useState)(!1),
                    E = Object(o.a)(g, 2),
                    v = E[0],
                    S = E[1],
                    _ = Object(n.useState)(!1),
                    A = Object(o.a)(_, 2),
                    N = A[0],
                    T = A[1],
                    C = Object(n.useState)(!1),
                    I = Object(o.a)(C, 2),
                    R = I[0],
                    k = I[1];
                return Object(K.jsx)(m.a, {
                    anchor: "left",
                    open: t,
                    className: "custom-modal-vk",
                    children: Object(K.jsxs)("div", {
                        className: "bg-white p-20  min-h-400 min-w-300",
                        children: [Object(K.jsx)(ze.a, {
                            variant: "h4",
                            textAlign: "center",
                            children: r.CHANGE_PASSWORD
                        }), Object(K.jsxs)("form", {
                            onSubmit: function(e) {
                                e.preventDefault();
                                var t = e.target.oldPassword.value,
                                    a = e.target.newPassword.value,
                                    n = e.target.confirmPassword.value,
                                    c = s ? e.target.gaCode.value : "";
                                O(null), Object(dt.checkEmpty)(t) ? O("PLEASE_ENTER_OLD_PASSWORD") : Object(dt.checkEmpty)(a) ? O("PLEASE_ENTER_NEW_PASSWORD") : Object(dt.checkLength)(a, 8) ? O("PLEASE_ENTER_NEW_PASSWORD_MORE_THAN") : a.length > 16 ? O("PLEASE_ENTER_NEW_PASSWORD_LESS_THAN") : Object(dt.checkEmpty)(n) ? O("PLEASE_ENTER_CONFIRM_PASSWORD") : a !== n ? O("CONFIRM_PASSWORD_VS_NEW_PASSWORD") : s && Object(dt.checkEmpty)(c) ? O("PLEASE_ENTER_GA_CODE") : s && 6 !== c.length ? O("WRONG_GACODE") : (p(!0), me("/user-service/user/change-pwd", {
                                    oldPassword: t,
                                    password: a,
                                    gaCode: c,
                                    device: q()
                                }, (function() {
                                    se("success", r.CHANGE_PASSWORD_SUCCESS), localStorage.removeItem(ee), window.location.replace("/login")
                                }), (function(e) {
                                    O(e.code), p(!1)
                                })))
                            },
                            className: "mt-20",
                            noValidate: !0,
                            children: [Object(K.jsx)(ia, {
                                required: !0,
                                id: "oldPassword",
                                name: "oldPassword",
                                label: r.OLD_PASSWORD,
                                fullWidth: !0,
                                placeholder: r.PLEASE_ENTER_PASSWORD,
                                type: v ? "input" : "password",
                                maxLength: "128",
                                isPassword: !0,
                                _showHidePassword: function() {
                                    return S(!v)
                                },
                                showPassword: v
                            }), Object(K.jsx)(ia, {
                                required: !0,
                                id: "newPassword",
                                name: "newPassword",
                                label: r.NEW_PASSWORD,
                                fullWidth: !0,
                                placeholder: r.PLEASE_ENTER_NEW_PASSWORD,
                                type: N ? "input" : "password",
                                maxLength: "128",
                                isPassword: !0,
                                _showHidePassword: function() {
                                    return T(!N)
                                },
                                showPassword: N
                            }), Object(K.jsx)(ia, {
                                required: !0,
                                id: "confirmPassword",
                                name: "confirmPassword",
                                label: r.CONFIRM_NEW_PASSWORD,
                                fullWidth: !0,
                                placeholder: r.PLEASE_ENTER_CONFIRM_PASSWORD,
                                type: R ? "input" : "password",
                                maxLength: "128",
                                isPassword: !0,
                                _showHidePassword: function() {
                                    return k(!R)
                                },
                                showPassword: R
                            }), s && Object(K.jsx)(ia, {
                                label: r.GA_CODE,
                                type: "input",
                                placeholder: r.PLEASE_ENTER_GA_CODE,
                                id: "gaCode",
                                maxLength: "6",
                                fullWidth: !0
                            }), u && Object(K.jsx)(Jt.a, {
                                error: !0,
                                content: r[u]
                            }), Object(K.jsxs)(j.a, {
                                container: !0,
                                spacing: 2,
                                className: "mt-20",
                                children: [Object(K.jsx)(j.a, {
                                    item: !0,
                                    xs: 6,
                                    children: Object(K.jsx)(b.a, {
                                        fullWidth: !0,
                                        disabled: x,
                                        type: "button",
                                        variant: "outlined",
                                        onClick: a,
                                        children: r.CANCEL
                                    })
                                }), Object(K.jsx)(j.a, {
                                    item: !0,
                                    xs: 6,
                                    children: Object(K.jsx)(b.a, {
                                        className: "submit-btn",
                                        fullWidth: !0,
                                        disabled: x,
                                        type: "submit",
                                        children: r.CONFIRM
                                    })
                                })]
                            })]
                        })]
                    })
                })
            };
            var ra = function() {
                    var e = Object(n.useState)(null),
                        t = Object(o.a)(e, 2),
                        a = t[0],
                        c = t[1],
                        i = Object(n.useState)(!1),
                        s = Object(o.a)(i, 2),
                        r = s[0],
                        d = s[1],
                        O = Object(n.useState)(null),
                        h = Object(o.a)(O, 2),
                        m = h[0],
                        f = h[1],
                        x = Object(y.useSelector)((function(e) {
                            return e
                        })),
                        p = x.setting,
                        g = x.user,
                        v = g.gaEnable,
                        S = p.library,
                        _ = Object(n.useState)(!1),
                        A = Object(o.a)(_, 2),
                        N = A[0],
                        T = A[1],
                        C = Object(y.useDispatch)(),
                        I = Object(l.k)(),
                        R = Object(n.useState)(!1),
                        k = Object(o.a)(R, 2),
                        w = k[0],
                        P = k[1],
                        D = Object(n.useState)(!1),
                        L = Object(o.a)(D, 2),
                        W = L[0],
                        M = L[1];
                    Object(n.useEffect)((function() {
                        v || Oe(H, (function(e) {
                            return c(e)
                        }), (function() {
                            return null
                        }))
                    }), [v]);
                    var F = S.TURN_OFF,
                        U = S.TURN_ON,
                        G = S.CANCEL,
                        Y = S.IDENTITY_VERIFICATION,
                        B = S.LOGIN_PASSWORD,
                        z = S.CHANGE,
                        q = S.PLEASE_ENTER_GA_CODE,
                        $ = S.PLEASE_ENTER_PASSWORD,
                        X = S.PASSWORD,
                        Q = S.GA_CODE,
                        J = S.GA,
                        ee = S.SECURITY,
                        te = S.VERIFIED,
                        ae = S.VERIFY,
                        ne = S.PENDING,
                        ce = ae;
                    if (g.information) {
                        var ie = g.information.verifyStatusLv2;
                        "VERIFIED" === ie && (ce = te), "PENDING" === ie && (ce = ne)
                    }
                    return Object(K.jsxs)(Be.a, {
                        className: "p-20",
                        children: [Object(K.jsx)(ze.a, {
                            variant: "h5",
                            children: ee
                        }), Object(K.jsx)(E.a, {
                            className: "mt-10 mb-20"
                        }), Object(K.jsxs)(j.a, {
                            container: !0,
                            justify: "space-between",
                            children: [Object(K.jsx)(j.a, {
                                item: !0,
                                children: J
                            }), Object(K.jsx)(j.a, {
                                item: !0,
                                children: Object(K.jsx)(b.a, {
                                    className: "submit-btn mb-20",
                                    style: {
                                        width: 120
                                    },
                                    onClick: function() {
                                        d(!0), P(!1)
                                    },
                                    children: v ? F : U
                                })
                            })]
                        }), Object(K.jsxs)(j.a, {
                            container: !0,
                            justify: "space-between",
                            children: [Object(K.jsx)(j.a, {
                                item: !0,
                                children: Y
                            }), Object(K.jsx)(j.a, {
                                item: !0,
                                children: Object(K.jsx)(b.a, {
                                    color: "Verified" === ce || "Pending" === ce ? "default" : "inherit",
                                    variant: "contained",
                                    style: {
                                        marginBottom: 20,
                                        width: 120
                                    },
                                    onClick: function() {
                                        return I.push("/verify")
                                    },
                                    disabled: "Verified" === ce || "Pending" === ce,
                                    children: ce
                                })
                            })]
                        }), Object(K.jsxs)(j.a, {
                            container: !0,
                            justify: "space-between",
                            children: [Object(K.jsx)(j.a, {
                                item: !0,
                                children: B
                            }), Object(K.jsx)(j.a, {
                                item: !0,
                                children: Object(K.jsx)(b.a, {
                                    className: "submit-btn mb-20",
                                    onClick: function() {
                                        return M(!0)
                                    },
                                    style: {
                                        width: 120
                                    },
                                    children: z
                                })
                            })]
                        }), Object(K.jsx)(Qt.a, {
                            visible: r,
                            duration: 500,
                            animation: "fade right",
                            children: Object(K.jsxs)(Zt.a, {
                                open: r,
                                onOpen: function() {
                                    return d(!0)
                                },
                                size: "mini",
                                children: [Object(K.jsx)(Zt.a.Header, {
                                    children: v ? F + " " + J : U + " " + J
                                }), Object(K.jsx)(Zt.a.Content, {
                                    children: v ? Object(K.jsxs)("form", {
                                        onSubmit: function(e) {
                                            e.preventDefault();
                                            var t = e.target.password.value,
                                                a = e.target.gaCode.value;
                                            f(null), Object(dt.checkEmpty)(t) ? f(S.PLEASE_ENTER_PASSWORD) : Object(dt.checkEmpty)(a) ? f(S.PLEASE_ENTER_GA_CODE) : (T(!0), me(H, {
                                                gaCode: a,
                                                password: t,
                                                enable: !1
                                            }, (function() {
                                                se("success", S.DISABLE_GA_CODE), d(!1), C(ve()), f(null), T(!1), C(ye())
                                            }), (function(e) {
                                                f(S[e.code]), T(!1)
                                            })))
                                        },
                                        error: !0,
                                        children: [Object(K.jsx)(it.a, {
                                            placeholder: $,
                                            label: X,
                                            type: "password",
                                            id: "password",
                                            name: "password",
                                            variant: "outlined",
                                            fullWidth: !0,
                                            className: "mb-10"
                                        }), Object(K.jsx)(it.a, {
                                            placeholder: q,
                                            label: Q,
                                            type: "input",
                                            id: "gaCode",
                                            name: "gaCode",
                                            variant: "outlined",
                                            fullWidth: !0,
                                            className: "mb-20"
                                        }), Object(K.jsx)(Jt.a, {
                                            content: m,
                                            hidden: null === m,
                                            error: !0
                                        }), Object(K.jsxs)(j.a, {
                                            container: !0,
                                            spacing: 2,
                                            children: [Object(K.jsx)(j.a, {
                                                item: !0,
                                                xs: 6,
                                                children: Object(K.jsx)(b.a, {
                                                    onClick: function() {
                                                        return d(!1)
                                                    },
                                                    type: "button",
                                                    disabled: N,
                                                    fullWidth: !0,
                                                    variant: "outlined",
                                                    children: G
                                                })
                                            }), Object(K.jsx)(j.a, {
                                                item: !0,
                                                xs: 6,
                                                children: Object(K.jsx)(b.a, {
                                                    className: "submit-btn mb-20",
                                                    type: "submit",
                                                    loading: N,
                                                    disabled: N,
                                                    fullWidth: !0,
                                                    children: S.CONFIRM
                                                })
                                            })]
                                        })]
                                    }) : a && Object(K.jsxs)(u.a, {
                                        children: [Object(K.jsxs)("div", {
                                            loading: !w,
                                            basic: !0,
                                            className: "min-h-300",
                                            children: [Object(K.jsx)(ea.a, {
                                                src: "".concat(Z, "/fastwallet/fastwallet-qrcode.png"),
                                                size: "medium",
                                                centered: !0,
                                                style: {
                                                    display: w ? "none" : "block"
                                                }
                                            }), Object(K.jsx)(ea.a, {
                                                src: a.qrCodeSetupImageUrl,
                                                size: "medium",
                                                centered: !0,
                                                style: {
                                                    display: w ? "block" : "none"
                                                },
                                                onLoad: function() {
                                                    return P(!0)
                                                }
                                            }), Object(K.jsx)(ta.a, {
                                                content: "Copied",
                                                on: "click",
                                                basic: !0,
                                                position: "bottom center",
                                                hideOnScroll: !0,
                                                trigger: Object(K.jsxs)("p", {
                                                    style: {
                                                        textOverflow: "ellipsis",
                                                        overflow: "hidden",
                                                        cursor: "pointer",
                                                        textAlign: "center",
                                                        color: "#000"
                                                    },
                                                    onClick: function() {
                                                        return navigator.clipboard.writeText(a.manualEntryKey)
                                                    },
                                                    children: [a.manualEntryKey, " ", Object(K.jsx)(V.a, {
                                                        name: "copy outline",
                                                        size: "large"
                                                    })]
                                                })
                                            })]
                                        }), Object(K.jsxs)("form", {
                                            onSubmit: function(e) {
                                                e.preventDefault();
                                                var t = e.target.password.value,
                                                    a = e.target.gaCode.value;
                                                f(null), Object(dt.checkEmpty)(t) ? f(S.PLEASE_ENTER_PASSWORD) : Object(dt.checkEmpty)(a) ? f(S.PLEASE_ENTER_GA_CODE) : (T(!0), me(H, {
                                                    gaCode: a,
                                                    password: t,
                                                    enable: !0
                                                }, (function() {
                                                    se("success", S.ENABLE_GA_CODE), d(!1), C(ve()), f(null), T(!1), C(ye())
                                                }), (function(e) {
                                                    f(S[e.code]), T(!1)
                                                })))
                                            },
                                            className: "mt-20",
                                            children: [Object(K.jsx)(ia, {
                                                placeholder: $,
                                                label: X,
                                                type: "password",
                                                id: "password",
                                                name: "password",
                                                variant: "outlined",
                                                fullWidth: !0
                                            }), Object(K.jsx)(ia, {
                                                placeholder: q,
                                                label: Q,
                                                type: "input",
                                                id: "gaCode",
                                                name: "gaCode",
                                                variant: "outlined",
                                                fullWidth: !0
                                            }), Object(K.jsx)(Jt.a, {
                                                content: m,
                                                hidden: null === m,
                                                error: !0
                                            }), Object(K.jsxs)(j.a, {
                                                container: !0,
                                                spacing: 2,
                                                className: "mt-10",
                                                children: [Object(K.jsx)(j.a, {
                                                    item: !0,
                                                    xs: 6,
                                                    children: Object(K.jsx)(b.a, {
                                                        onClick: function() {
                                                            f(null), d(!1)
                                                        },
                                                        type: "button",
                                                        disabled: N,
                                                        fullWidth: !0,
                                                        variant: "outlined",
                                                        children: G
                                                    })
                                                }), Object(K.jsx)(j.a, {
                                                    item: !0,
                                                    xs: 6,
                                                    children: Object(K.jsx)(b.a, {
                                                        className: "submit-btn",
                                                        type: "submit",
                                                        loading: N,
                                                        disabled: N,
                                                        fullWidth: !0,
                                                        children: S.CONFIRM
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), Object(K.jsx)(sa, {
                            open: W,
                            _close: function() {
                                return M(!1)
                            }
                        })]
                    })
                },
                la = a(789),
                oa = a(280),
                da = a(821),
                ua = a(495),
                ja = a(788);

            function ba(e) {
                var t = e.onLoading,
                    a = e.close,
                    c = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    i = c.setting,
                    s = c.user,
                    r = i.library,
                    l = s.information,
                    d = Object(n.useState)(l.countryCode),
                    u = Object(o.a)(d, 2),
                    j = u[0],
                    O = u[1],
                    h = Object(n.useState)(null),
                    m = Object(o.a)(h, 2),
                    f = m[0],
                    x = m[1],
                    p = Object(y.useDispatch)();
                return Object(K.jsx)("div", {
                    className: "pt-20 pb-20",
                    children: Object(K.jsxs)("form", {
                        onSubmit: function(e) {
                            e.preventDefault(), j ? (x(null), t(!0), me("/user-service/user/country", {
                                countryCode: j
                            }, (function() {
                                t(!1), se("success", r.UPDATE_COUNTRY_SUCCESS), p(ve()), a()
                            }), (function(e) {
                                x(r[e.code]), t(!1)
                            }))) : x("Please select country")
                        },
                        children: [Object(K.jsxs)("div", {
                            style: {
                                height: 200
                            },
                            children: [Object(K.jsx)("label", {
                                children: r.PLEASE_SELECT_COUNTRY
                            }), Object(K.jsx)(ua.a, {
                                searchable: !0,
                                onSelect: function(e) {
                                    return O(e)
                                },
                                selected: j
                            }), Object(K.jsx)("div", {
                                style: {
                                    height: 80,
                                    display: "flex"
                                },
                                children: Object(K.jsx)(Jt.a, {
                                    hidden: null === f,
                                    content: f,
                                    negative: !0,
                                    style: {
                                        margin: "auto",
                                        width: "100%"
                                    }
                                })
                            })]
                        }), Object(K.jsx)(b.a, {
                            fullWidth: !0,
                            className: "submit-btn",
                            type: "submit",
                            children: r.UPDATE
                        })]
                    })
                })
            }

            function Oa(e) {
                var t = e.onLoading,
                    a = e.close,
                    c = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    i = c.setting,
                    s = c.user,
                    r = i.library,
                    l = s.information,
                    d = Object(n.useState)(l.displayName),
                    u = Object(o.a)(d, 2),
                    j = u[0],
                    O = u[1],
                    h = Object(n.useState)(null),
                    m = Object(o.a)(h, 2),
                    f = m[0],
                    x = m[1],
                    p = Object(y.useDispatch)();
                return Object(K.jsx)("div", {
                    className: "pt-20 pb-20",
                    children: Object(K.jsxs)("form", {
                        onSubmit: function(e) {
                            e.preventDefault(), !j || j.length < 3 || !/^[a-zA-z0-9]+$/g.test(j) || parseInt(j[0]) >= 0 ? x(r.PLEASE_CHECK_NICKNAME_AGAIN) : (t(!0), x(null), me("/user-service/user/display-name", {
                                displayName: j
                            }, (function() {
                                t(!1), se("success", r.UPDATE_NICKNAME_SUCCESS), p(ve()), a()
                            }), (function(e) {
                                x(r[e.code]), t(!1)
                            })))
                        },
                        children: [Object(K.jsxs)("div", {
                            style: {
                                height: 200
                            },
                            children: [Object(K.jsx)(ia, {
                                label: r.YOUR_NICKNAME,
                                placeholder: r.PLEASE_TELL_US_YOUR_NICKNAME,
                                maxLength: "32",
                                onChange: function(e) {
                                    return O(e.target.value)
                                },
                                value: j,
                                fullWidth: !0,
                                variant: "outlined"
                            }), Object(K.jsx)("div", {
                                className: "mt-10",
                                children: r.EDIT_NICKNAME_NOTE
                            }), Object(K.jsx)("div", {
                                style: {
                                    height: 80,
                                    display: "flex"
                                },
                                children: Object(K.jsx)(Jt.a, {
                                    hidden: null === f,
                                    content: f,
                                    negative: !0,
                                    style: {
                                        margin: "auto",
                                        width: "100%"
                                    }
                                })
                            })]
                        }), Object(K.jsx)(b.a, {
                            className: "submit-btn",
                            fullWidth: !0,
                            type: "submit",
                            children: r.UPDATE
                        })]
                    })
                })
            }
            var ha = function(e) {
                var t = e.close,
                    a = Object(n.useState)(!1),
                    c = Object(o.a)(a, 2),
                    i = c[0],
                    s = c[1],
                    l = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    d = Object(n.useState)(0),
                    b = Object(o.a)(d, 2),
                    O = b[0],
                    h = b[1],
                    m = [{
                        menuItem: "Nickname",
                        render: Object(K.jsx)(Oa, {
                            onLoading: function(e) {
                                return s(e)
                            },
                            close: t
                        })
                    }, {
                        menuItem: "Country",
                        render: Object(K.jsx)(ba, {
                            onLoading: function(e) {
                                return s(e)
                            },
                            close: t
                        })
                    }];
                return Object(K.jsxs)(u.a, {
                    className: "p-20 bg-white",
                    loading: i,
                    maxWidth: "xs",
                    children: [Object(K.jsx)("div", {
                        children: Object(K.jsxs)(j.a, {
                            className: "mb-20",
                            justify: "space-between",
                            alignItems: "center",
                            container: !0,
                            children: [Object(K.jsx)(j.a, {
                                item: !0,
                                children: Object(K.jsx)(da.a, {
                                    children: l.EDIT_PROFILE
                                })
                            }), Object(K.jsx)(j.a, {
                                item: !0,
                                children: Object(K.jsx)(r.Link, {
                                    onClick: t,
                                    children: Object(K.jsx)(ja.a, {})
                                })
                            })]
                        })
                    }), Object(K.jsx)(Et.a, {
                        value: O,
                        indicatorColor: "primary",
                        textColor: "primary",
                        onChange: function(e, t) {
                            h(t)
                        },
                        "aria-label": "disabled tabs example",
                        children: m.map((function(e, t) {
                            return Object(K.jsx)(vt.a, {
                                label: e.menuItem,
                                value: e.index
                            }, t)
                        }))
                    }), m[O].render]
                })
            };
            var ma = function() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    t = e.user,
                    a = e.setting,
                    c = t.information,
                    i = t.activity,
                    s = a.library.LAST_LOGIN,
                    l = i && i.items[0],
                    d = Object(n.useState)(!1),
                    u = Object(o.a)(d, 2),
                    j = u[0],
                    b = u[1],
                    O = Object(y.useDispatch)();
                return Object(n.useEffect)((function() {
                    O(Se())
                }), [O]), Object(K.jsxs)(Be.a, {
                    className: "p-20 mb-20",
                    children: [Object(K.jsxs)("div", {
                        style: {
                            display: "flex"
                        },
                        className: "pb-20",
                        children: [Object(K.jsx)("div", {
                            style: {
                                minWidth: 40,
                                height: 40,
                                color: "#fafafa",
                                backgroundColor: "#bdbdbd",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: "1em"
                            },
                            children: c && c.email.slice(0, 2)
                        }), Object(K.jsxs)("div", {
                            children: [Object(K.jsxs)("div", {
                                children: [Object(K.jsx)("span", {
                                    style: {
                                        marginRight: "1em"
                                    },
                                    children: Object(K.jsx)("span", {
                                        style: {
                                            fontWeight: 600
                                        },
                                        children: c && c.email
                                    })
                                }), Object(K.jsxs)("span", {
                                    style: {
                                        marginRight: "1em"
                                    },
                                    children: ["ID:", Object(K.jsxs)("span", {
                                        style: {
                                            fontWeight: 600
                                        },
                                        children: ["#", c && c.id]
                                    })]
                                })]
                            }), Object(K.jsxs)("div", {
                                children: [Object(K.jsxs)("span", {
                                    style: {
                                        marginRight: "1em"
                                    },
                                    children: ["Nickname:", " ", Object(K.jsx)("span", {
                                        style: {
                                            fontWeight: 600
                                        },
                                        children: c && c.displayName
                                    })]
                                }), c && c.countryCode && Object(K.jsx)(la.a, {
                                    name: c && c.countryCode.toLowerCase()
                                })]
                            }), Object(K.jsxs)(r.Link, {
                                to: "#",
                                onClick: function() {
                                    return b(!0)
                                },
                                className: "yellow-link",
                                children: ["Edit profile ", ">>"]
                            })]
                        })]
                    }), Object(K.jsxs)("div", {
                        className: "pb-20",
                        children: [Object(K.jsxs)("span", {
                            children: [s, ":", " ", Object(K.jsx)("span", {
                                style: {
                                    fontWeight: 600
                                },
                                children: Object(B.formatTime)(l && l.time)
                            })]
                        }), Object(K.jsxs)("span", {
                            className: "ip",
                            children: [" ", "IP:", " ", Object(K.jsx)("span", {
                                style: {
                                    fontWeight: 600
                                },
                                children: l && l.ip
                            })]
                        })]
                    }), Object(K.jsx)(E.a, {}), Object(K.jsxs)("div", {
                        className: "pt-20 pb-20",
                        children: [Object(K.jsxs)(oa.a, {
                            style: {
                                color: "#fbbd08",
                                backgroundColor: "rgb(0, 77, 128)"
                            },
                            children: [Object(K.jsx)(V.a, {
                                name: "gem"
                            }), " Agency"]
                        }), Object(K.jsxs)(oa.a, {
                            style: {
                                color: "#fff",
                                backgroundColor: "rgb(0, 77, 128)"
                            },
                            children: [Object(K.jsx)(V.a, {
                                name: "star"
                            }), "Master"]
                        })]
                    }), Object(K.jsx)(m.a, {
                        anchor: "left",
                        open: j,
                        className: "custom-modal-vk",
                        children: Object(K.jsx)(ha, {
                            close: function() {
                                return b(!1)
                            }
                        })
                    })]
                })
            };
            var fa = function() {
                    var e = Object(y.useSelector)((function(e) {
                            return e
                        })).setting.library,
                        t = e.DEVICE_LIST,
                        a = e.LOGIN_ACTIVITY,
                        c = Object(n.useState)(0),
                        i = Object(o.a)(c, 2),
                        s = i[0],
                        r = i[1],
                        d = Object(l.k)();
                    Object(n.useEffect)((function() {
                        re() || d.push("/")
                    }), [d]);
                    var j = [{
                        menuItem: t,
                        render: Object(K.jsx)($t, {})
                    }, {
                        menuItem: a,
                        render: Object(K.jsx)(Xt, {})
                    }];
                    return Object(K.jsxs)(u.a, {
                        children: [Object(K.jsx)("div", {
                            boxShadow: 3,
                            className: "pt-20 pb-20 d-flex-sbt",
                            children: Object(K.jsx)(ze.a, {
                                variant: "h4",
                                children: e.INFORMATION
                            })
                        }), Object(K.jsx)(ma, {}), Object(K.jsxs)(Bt.a, {
                            stretched: !0,
                            children: [Object(K.jsx)(zt.a, {
                                computer: 8,
                                tablet: 8,
                                mobile: 16,
                                children: Object(K.jsxs)(Vt.a, {
                                    children: [Object(K.jsx)(Et.a, {
                                        value: s,
                                        indicatorColor: "primary",
                                        textColor: "primary",
                                        onChange: function(e, t) {
                                            r(t)
                                        },
                                        "aria-label": "disabled tabs example",
                                        children: j.map((function(e, t) {
                                            return Object(K.jsx)(vt.a, {
                                                label: e.menuItem,
                                                value: e.index
                                            }, t)
                                        }))
                                    }), j[s].render]
                                })
                            }), Object(K.jsx)(zt.a, {
                                computer: 8,
                                tablet: 8,
                                mobile: 16,
                                children: Object(K.jsx)(ra, {})
                            })]
                        })]
                    })
                },
                xa = a(814),
                pa = a(805),
                ga = a(819),
                Ea = a(791),
                va = a(806),
                ya = a(804),
                Sa = a(401),
                _a = [{
                    key: "af",
                    value: "af",
                    flag: "af",
                    text: "Afghanistan"
                }, {
                    key: "ax",
                    value: "ax",
                    flag: "ax",
                    text: "Aland Islands"
                }, {
                    key: "al",
                    value: "al",
                    flag: "al",
                    text: "Albania"
                }, {
                    key: "dz",
                    value: "dz",
                    flag: "dz",
                    text: "Algeria"
                }, {
                    key: "as",
                    value: "as",
                    flag: "as",
                    text: "American Samoa"
                }, {
                    key: "ad",
                    value: "ad",
                    flag: "ad",
                    text: "Andorra"
                }, {
                    key: "ao",
                    value: "ao",
                    flag: "ao",
                    text: "Angola"
                }, {
                    key: "ai",
                    value: "ai",
                    flag: "ai",
                    text: "Anguilla"
                }, {
                    key: "ag",
                    value: "ag",
                    flag: "ag",
                    text: "Antigua"
                }, {
                    key: "ar",
                    value: "ar",
                    flag: "ar",
                    text: "Argentina"
                }, {
                    key: "am",
                    value: "am",
                    flag: "am",
                    text: "Armenia"
                }, {
                    key: "aw",
                    value: "aw",
                    flag: "aw",
                    text: "Aruba"
                }, {
                    key: "au",
                    value: "au",
                    flag: "au",
                    text: "Australia"
                }, {
                    key: "at",
                    value: "at",
                    flag: "at",
                    text: "Austria"
                }, {
                    key: "az",
                    value: "az",
                    flag: "az",
                    text: "Azerbaijan"
                }, {
                    key: "bs",
                    value: "bs",
                    flag: "bs",
                    text: "Bahamas"
                }, {
                    key: "bh",
                    value: "bh",
                    flag: "bh",
                    text: "Bahrain"
                }, {
                    key: "bd",
                    value: "bd",
                    flag: "bd",
                    text: "Bangladesh"
                }, {
                    key: "bb",
                    value: "bb",
                    flag: "bb",
                    text: "Barbados"
                }, {
                    key: "by",
                    value: "by",
                    flag: "by",
                    text: "Belarus"
                }, {
                    key: "be",
                    value: "be",
                    flag: "be",
                    text: "Belgium"
                }, {
                    key: "bz",
                    value: "bz",
                    flag: "bz",
                    text: "Belize"
                }, {
                    key: "bj",
                    value: "bj",
                    flag: "bj",
                    text: "Benin"
                }, {
                    key: "bm",
                    value: "bm",
                    flag: "bm",
                    text: "Bermuda"
                }, {
                    key: "bt",
                    value: "bt",
                    flag: "bt",
                    text: "Bhutan"
                }, {
                    key: "bo",
                    value: "bo",
                    flag: "bo",
                    text: "Bolivia"
                }, {
                    key: "ba",
                    value: "ba",
                    flag: "ba",
                    text: "Bosnia"
                }, {
                    key: "bw",
                    value: "bw",
                    flag: "bw",
                    text: "Botswana"
                }, {
                    key: "bv",
                    value: "bv",
                    flag: "bv",
                    text: "Bouvet Island"
                }, {
                    key: "br",
                    value: "br",
                    flag: "br",
                    text: "Brazil"
                }, {
                    key: "vg",
                    value: "vg",
                    flag: "vg",
                    text: "British Virgin Islands"
                }, {
                    key: "bn",
                    value: "bn",
                    flag: "bn",
                    text: "Brunei"
                }, {
                    key: "bg",
                    value: "bg",
                    flag: "bg",
                    text: "Bulgaria"
                }, {
                    key: "bf",
                    value: "bf",
                    flag: "bf",
                    text: "Burkina Faso"
                }, {
                    key: "mm",
                    value: "mm",
                    flag: "mm",
                    text: "Burma"
                }, {
                    key: "bi",
                    value: "bi",
                    flag: "bi",
                    text: "Burundi"
                }, {
                    key: "tc",
                    value: "tc",
                    flag: "tc",
                    text: "Caicos Islands"
                }, {
                    key: "kh",
                    value: "kh",
                    flag: "kh",
                    text: "Cambodia"
                }, {
                    key: "cm",
                    value: "cm",
                    flag: "cm",
                    text: "Cameroon"
                }, {
                    key: "ca",
                    value: "ca",
                    flag: "ca",
                    text: "Canada"
                }, {
                    key: "cv",
                    value: "cv",
                    flag: "cv",
                    text: "Cape Verde"
                }, {
                    key: "ky",
                    value: "ky",
                    flag: "ky",
                    text: "Cayman Islands"
                }, {
                    key: "cf",
                    value: "cf",
                    flag: "cf",
                    text: "Central African Republic"
                }, {
                    key: "td",
                    value: "td",
                    flag: "td",
                    text: "Chad"
                }, {
                    key: "cl",
                    value: "cl",
                    flag: "cl",
                    text: "Chile"
                }, {
                    key: "cn",
                    value: "cn",
                    flag: "cn",
                    text: "China"
                }, {
                    key: "cx",
                    value: "cx",
                    flag: "cx",
                    text: "Christmas Island"
                }, {
                    key: "cc",
                    value: "cc",
                    flag: "cc",
                    text: "Cocos Islands"
                }, {
                    key: "co",
                    value: "co",
                    flag: "co",
                    text: "Colombia"
                }, {
                    key: "km",
                    value: "km",
                    flag: "km",
                    text: "Comoros"
                }, {
                    key: "cd",
                    value: "cd",
                    flag: "cd",
                    text: "Congo"
                }, {
                    key: "cg",
                    value: "cg",
                    flag: "cg",
                    text: "Congo Brazzaville"
                }, {
                    key: "ck",
                    value: "ck",
                    flag: "ck",
                    text: "Cook Islands"
                }, {
                    key: "cr",
                    value: "cr",
                    flag: "cr",
                    text: "Costa Rica"
                }, {
                    key: "ci",
                    value: "ci",
                    flag: "ci",
                    text: "Cote Divoire"
                }, {
                    key: "hr",
                    value: "hr",
                    flag: "hr",
                    text: "Croatia"
                }, {
                    key: "cu",
                    value: "cu",
                    flag: "cu",
                    text: "Cuba"
                }, {
                    key: "cy",
                    value: "cy",
                    flag: "cy",
                    text: "Cyprus"
                }, {
                    key: "cz",
                    value: "cz",
                    flag: "cz",
                    text: "Czech Republic"
                }, {
                    key: "dk",
                    value: "dk",
                    flag: "dk",
                    text: "Denmark"
                }, {
                    key: "dj",
                    value: "dj",
                    flag: "dj",
                    text: "Djibouti"
                }, {
                    key: "dm",
                    value: "dm",
                    flag: "dm",
                    text: "Dominica"
                }, {
                    key: "do",
                    value: "do",
                    flag: "do",
                    text: "Dominican Republic"
                }, {
                    key: "ec",
                    value: "ec",
                    flag: "ec",
                    text: "Ecuador"
                }, {
                    key: "eg",
                    value: "eg",
                    flag: "eg",
                    text: "Egypt"
                }, {
                    key: "sv",
                    value: "sv",
                    flag: "sv",
                    text: "El Salvador"
                }, {
                    key: "gb eng",
                    value: "gb eng",
                    flag: "gb eng",
                    text: "England"
                }, {
                    key: "gq",
                    value: "gq",
                    flag: "gq",
                    text: "Equatorial Guinea"
                }, {
                    key: "er",
                    value: "er",
                    flag: "er",
                    text: "Eritrea"
                }, {
                    key: "ee",
                    value: "ee",
                    flag: "ee",
                    text: "Estonia"
                }, {
                    key: "et",
                    value: "et",
                    flag: "et",
                    text: "Ethiopia"
                }, {
                    key: "eu",
                    value: "eu",
                    flag: "eu",
                    text: "Europeanunion"
                }, {
                    key: "fk",
                    value: "fk",
                    flag: "fk",
                    text: "Falkland Islands"
                }, {
                    key: "fo",
                    value: "fo",
                    flag: "fo",
                    text: "Faroe Islands"
                }, {
                    key: "fj",
                    value: "fj",
                    flag: "fj",
                    text: "Fiji"
                }, {
                    key: "fi",
                    value: "fi",
                    flag: "fi",
                    text: "Finland"
                }, {
                    key: "fr",
                    value: "fr",
                    flag: "fr",
                    text: "France"
                }, {
                    key: "gf",
                    value: "gf",
                    flag: "gf",
                    text: "French Guiana"
                }, {
                    key: "pf",
                    value: "pf",
                    flag: "pf",
                    text: "French Polynesia"
                }, {
                    key: "tf",
                    value: "tf",
                    flag: "tf",
                    text: "French Territories"
                }, {
                    key: "ga",
                    value: "ga",
                    flag: "ga",
                    text: "Gabon"
                }, {
                    key: "gm",
                    value: "gm",
                    flag: "gm",
                    text: "Gambia"
                }, {
                    key: "ge",
                    value: "ge",
                    flag: "ge",
                    text: "Georgia"
                }, {
                    key: "de",
                    value: "de",
                    flag: "de",
                    text: "Germany"
                }, {
                    key: "gh",
                    value: "gh",
                    flag: "gh",
                    text: "Ghana"
                }, {
                    key: "gi",
                    value: "gi",
                    flag: "gi",
                    text: "Gibraltar"
                }, {
                    key: "gr",
                    value: "gr",
                    flag: "gr",
                    text: "Greece"
                }, {
                    key: "gl",
                    value: "gl",
                    flag: "gl",
                    text: "Greenland"
                }, {
                    key: "gd",
                    value: "gd",
                    flag: "gd",
                    text: "Grenada"
                }, {
                    key: "gp",
                    value: "gp",
                    flag: "gp",
                    text: "Guadeloupe"
                }, {
                    key: "gu",
                    value: "gu",
                    flag: "gu",
                    text: "Guam"
                }, {
                    key: "gt",
                    value: "gt",
                    flag: "gt",
                    text: "Guatemala"
                }, {
                    key: "gn",
                    value: "gn",
                    flag: "gn",
                    text: "Guinea"
                }, {
                    key: "gw",
                    value: "gw",
                    flag: "gw",
                    text: "Guinea-Bissau"
                }, {
                    key: "gy",
                    value: "gy",
                    flag: "gy",
                    text: "Guyana"
                }, {
                    key: "ht",
                    value: "ht",
                    flag: "ht",
                    text: "Haiti"
                }, {
                    key: "hm",
                    value: "hm",
                    flag: "hm",
                    text: "Heard Island"
                }, {
                    key: "hn",
                    value: "hn",
                    flag: "hn",
                    text: "Honduras"
                }, {
                    key: "hk",
                    value: "hk",
                    flag: "hk",
                    text: "Hong Kong"
                }, {
                    key: "hu",
                    value: "hu",
                    flag: "hu",
                    text: "Hungary"
                }, {
                    key: "is",
                    value: "is",
                    flag: "is",
                    text: "Iceland"
                }, {
                    key: "in",
                    value: "in",
                    flag: "in",
                    text: "India"
                }, {
                    key: "io",
                    value: "io",
                    flag: "io",
                    text: "Indian Ocean Territory"
                }, {
                    key: "id",
                    value: "id",
                    flag: "id",
                    text: "Indonesia"
                }, {
                    key: "ir",
                    value: "ir",
                    flag: "ir",
                    text: "Iran"
                }, {
                    key: "iq",
                    value: "iq",
                    flag: "iq",
                    text: "Iraq"
                }, {
                    key: "ie",
                    value: "ie",
                    flag: "ie",
                    text: "Ireland"
                }, {
                    key: "il",
                    value: "il",
                    flag: "il",
                    text: "Israel"
                }, {
                    key: "it",
                    value: "it",
                    flag: "it",
                    text: "Italy"
                }, {
                    key: "jm",
                    value: "jm",
                    flag: "jm",
                    text: "Jamaica"
                }, {
                    key: "sj",
                    value: "sj",
                    flag: "sj",
                    text: "Jan Mayen"
                }, {
                    key: "jp",
                    value: "jp",
                    flag: "jp",
                    text: "Japan"
                }, {
                    key: "jo",
                    value: "jo",
                    flag: "jo",
                    text: "Jordan"
                }, {
                    key: "kz",
                    value: "kz",
                    flag: "kz",
                    text: "Kazakhstan"
                }, {
                    key: "ke",
                    value: "ke",
                    flag: "ke",
                    text: "Kenya"
                }, {
                    key: "ki",
                    value: "ki",
                    flag: "ki",
                    text: "Kiribati"
                }, {
                    key: "kw",
                    value: "kw",
                    flag: "kw",
                    text: "Kuwait"
                }, {
                    key: "kg",
                    value: "kg",
                    flag: "kg",
                    text: "Kyrgyzstan"
                }, {
                    key: "la",
                    value: "la",
                    flag: "la",
                    text: "Laos"
                }, {
                    key: "lv",
                    value: "lv",
                    flag: "lv",
                    text: "Latvia"
                }, {
                    key: "lb",
                    value: "lb",
                    flag: "lb",
                    text: "Lebanon"
                }, {
                    key: "ls",
                    value: "ls",
                    flag: "ls",
                    text: "Lesotho"
                }, {
                    key: "lr",
                    value: "lr",
                    flag: "lr",
                    text: "Liberia"
                }, {
                    key: "ly",
                    value: "ly",
                    flag: "ly",
                    text: "Libya"
                }, {
                    key: "li",
                    value: "li",
                    flag: "li",
                    text: "Liechtenstein"
                }, {
                    key: "lt",
                    value: "lt",
                    flag: "lt",
                    text: "Lithuania"
                }, {
                    key: "lu",
                    value: "lu",
                    flag: "lu",
                    text: "Luxembourg"
                }, {
                    key: "mo",
                    value: "mo",
                    flag: "mo",
                    text: "Macau"
                }, {
                    key: "mk",
                    value: "mk",
                    flag: "mk",
                    text: "Macedonia"
                }, {
                    key: "mg",
                    value: "mg",
                    flag: "mg",
                    text: "Madagascar"
                }, {
                    key: "mw",
                    value: "mw",
                    flag: "mw",
                    text: "Malawi"
                }, {
                    key: "my",
                    value: "my",
                    flag: "my",
                    text: "Malaysia"
                }, {
                    key: "mv",
                    value: "mv",
                    flag: "mv",
                    text: "Maldives"
                }, {
                    key: "ml",
                    value: "ml",
                    flag: "ml",
                    text: "Mali"
                }, {
                    key: "mt",
                    value: "mt",
                    flag: "mt",
                    text: "Malta"
                }, {
                    key: "mh",
                    value: "mh",
                    flag: "mh",
                    text: "Marshall Islands"
                }, {
                    key: "mq",
                    value: "mq",
                    flag: "mq",
                    text: "Martinique"
                }, {
                    key: "mr",
                    value: "mr",
                    flag: "mr",
                    text: "Mauritania"
                }, {
                    key: "mu",
                    value: "mu",
                    flag: "mu",
                    text: "Mauritius"
                }, {
                    key: "yt",
                    value: "yt",
                    flag: "yt",
                    text: "Mayotte"
                }, {
                    key: "mx",
                    value: "mx",
                    flag: "mx",
                    text: "Mexico"
                }, {
                    key: "fm",
                    value: "fm",
                    flag: "fm",
                    text: "Micronesia"
                }, {
                    key: "md",
                    value: "md",
                    flag: "md",
                    text: "Moldova"
                }, {
                    key: "mc",
                    value: "mc",
                    flag: "mc",
                    text: "Monaco"
                }, {
                    key: "mn",
                    value: "mn",
                    flag: "mn",
                    text: "Mongolia"
                }, {
                    key: "me",
                    value: "me",
                    flag: "me",
                    text: "Montenegro"
                }, {
                    key: "ms",
                    value: "ms",
                    flag: "ms",
                    text: "Montserrat"
                }, {
                    key: "ma",
                    value: "ma",
                    flag: "ma",
                    text: "Morocco"
                }, {
                    key: "mz",
                    value: "mz",
                    flag: "mz",
                    text: "Mozambique"
                }, {
                    key: "na",
                    value: "na",
                    flag: "na",
                    text: "Namibia"
                }, {
                    key: "nr",
                    value: "nr",
                    flag: "nr",
                    text: "Nauru"
                }, {
                    key: "np",
                    value: "np",
                    flag: "np",
                    text: "Nepal"
                }, {
                    key: "nl",
                    value: "nl",
                    flag: "nl",
                    text: "Netherlands"
                }, {
                    key: "an",
                    value: "an",
                    flag: "an",
                    text: "Netherlandsantilles"
                }, {
                    key: "nc",
                    value: "nc",
                    flag: "nc",
                    text: "New Caledonia"
                }, {
                    key: "pg",
                    value: "pg",
                    flag: "pg",
                    text: "New Guinea"
                }, {
                    key: "nz",
                    value: "nz",
                    flag: "nz",
                    text: "New Zealand"
                }, {
                    key: "ni",
                    value: "ni",
                    flag: "ni",
                    text: "Nicaragua"
                }, {
                    key: "ne",
                    value: "ne",
                    flag: "ne",
                    text: "Niger"
                }, {
                    key: "ng",
                    value: "ng",
                    flag: "ng",
                    text: "Nigeria"
                }, {
                    key: "nu",
                    value: "nu",
                    flag: "nu",
                    text: "Niue"
                }, {
                    key: "nf",
                    value: "nf",
                    flag: "nf",
                    text: "Norfolk Island"
                }, {
                    key: "kp",
                    value: "kp",
                    flag: "kp",
                    text: "North Korea"
                }, {
                    key: "mp",
                    value: "mp",
                    flag: "mp",
                    text: "Northern Mariana Islands"
                }, {
                    key: "no",
                    value: "no",
                    flag: "no",
                    text: "Norway"
                }, {
                    key: "om",
                    value: "om",
                    flag: "om",
                    text: "Oman"
                }, {
                    key: "pk",
                    value: "pk",
                    flag: "pk",
                    text: "Pakistan"
                }, {
                    key: "pw",
                    value: "pw",
                    flag: "pw",
                    text: "Palau"
                }, {
                    key: "ps",
                    value: "ps",
                    flag: "ps",
                    text: "Palestine"
                }, {
                    key: "pa",
                    value: "pa",
                    flag: "pa",
                    text: "Panama"
                }, {
                    key: "py",
                    value: "py",
                    flag: "py",
                    text: "Paraguay"
                }, {
                    key: "pe",
                    value: "pe",
                    flag: "pe",
                    text: "Peru"
                }, {
                    key: "ph",
                    value: "ph",
                    flag: "ph",
                    text: "Philippines"
                }, {
                    key: "pn",
                    value: "pn",
                    flag: "pn",
                    text: "Pitcairn Islands"
                }, {
                    key: "pl",
                    value: "pl",
                    flag: "pl",
                    text: "Poland"
                }, {
                    key: "pt",
                    value: "pt",
                    flag: "pt",
                    text: "Portugal"
                }, {
                    key: "pr",
                    value: "pr",
                    flag: "pr",
                    text: "Puerto Rico"
                }, {
                    key: "qa",
                    value: "qa",
                    flag: "qa",
                    text: "Qatar"
                }, {
                    key: "re",
                    value: "re",
                    flag: "re",
                    text: "Reunion"
                }, {
                    key: "ro",
                    value: "ro",
                    flag: "ro",
                    text: "Romania"
                }, {
                    key: "ru",
                    value: "ru",
                    flag: "ru",
                    text: "Russia"
                }, {
                    key: "rw",
                    value: "rw",
                    flag: "rw",
                    text: "Rwanda"
                }, {
                    key: "sh",
                    value: "sh",
                    flag: "sh",
                    text: "Saint Helena"
                }, {
                    key: "kn",
                    value: "kn",
                    flag: "kn",
                    text: "Saint Kitts and Nevis"
                }, {
                    key: "lc",
                    value: "lc",
                    flag: "lc",
                    text: "Saint Lucia"
                }, {
                    key: "pm",
                    value: "pm",
                    flag: "pm",
                    text: "Saint Pierre"
                }, {
                    key: "vc",
                    value: "vc",
                    flag: "vc",
                    text: "Saint Vincent"
                }, {
                    key: "ws",
                    value: "ws",
                    flag: "ws",
                    text: "Samoa"
                }, {
                    key: "sm",
                    value: "sm",
                    flag: "sm",
                    text: "San Marino"
                }, {
                    key: "gs",
                    value: "gs",
                    flag: "gs",
                    text: "Sandwich Islands"
                }, {
                    key: "st",
                    value: "st",
                    flag: "st",
                    text: "Sao Tome"
                }, {
                    key: "sa",
                    value: "sa",
                    flag: "sa",
                    text: "Saudi Arabia"
                }, {
                    key: "gb sct",
                    value: "gb sct",
                    flag: "gb sct",
                    text: "Scotland"
                }, {
                    key: "sn",
                    value: "sn",
                    flag: "sn",
                    text: "Senegal"
                }, {
                    key: "cs",
                    value: "cs",
                    flag: "cs",
                    text: "Serbia"
                }, {
                    key: "rs",
                    value: "rs",
                    flag: "rs",
                    text: "Serbia"
                }, {
                    key: "sc",
                    value: "sc",
                    flag: "sc",
                    text: "Seychelles"
                }, {
                    key: "sl",
                    value: "sl",
                    flag: "sl",
                    text: "Sierra Leone"
                }, {
                    key: "sg",
                    value: "sg",
                    flag: "sg",
                    text: "Singapore"
                }, {
                    key: "sk",
                    value: "sk",
                    flag: "sk",
                    text: "Slovakia"
                }, {
                    key: "si",
                    value: "si",
                    flag: "si",
                    text: "Slovenia"
                }, {
                    key: "sb",
                    value: "sb",
                    flag: "sb",
                    text: "Solomon Islands"
                }, {
                    key: "so",
                    value: "so",
                    flag: "so",
                    text: "Somalia"
                }, {
                    key: "za",
                    value: "za",
                    flag: "za",
                    text: "South Africa"
                }, {
                    key: "kr",
                    value: "kr",
                    flag: "kr",
                    text: "South Korea"
                }, {
                    key: "es",
                    value: "es",
                    flag: "es",
                    text: "Spain"
                }, {
                    key: "lk",
                    value: "lk",
                    flag: "lk",
                    text: "Sri Lanka"
                }, {
                    key: "sd",
                    value: "sd",
                    flag: "sd",
                    text: "Sudan"
                }, {
                    key: "sr",
                    value: "sr",
                    flag: "sr",
                    text: "Suriname"
                }, {
                    key: "sz",
                    value: "sz",
                    flag: "sz",
                    text: "Swaziland"
                }, {
                    key: "se",
                    value: "se",
                    flag: "se",
                    text: "Sweden"
                }, {
                    key: "ch",
                    value: "ch",
                    flag: "ch",
                    text: "Switzerland"
                }, {
                    key: "sy",
                    value: "sy",
                    flag: "sy",
                    text: "Syria"
                }, {
                    key: "tw",
                    value: "tw",
                    flag: "tw",
                    text: "Taiwan"
                }, {
                    key: "tj",
                    value: "tj",
                    flag: "tj",
                    text: "Tajikistan"
                }, {
                    key: "tz",
                    value: "tz",
                    flag: "tz",
                    text: "Tanzania"
                }, {
                    key: "th",
                    value: "th",
                    flag: "th",
                    text: "Thailand"
                }, {
                    key: "tl",
                    value: "tl",
                    flag: "tl",
                    text: "Timorleste"
                }, {
                    key: "tg",
                    value: "tg",
                    flag: "tg",
                    text: "Togo"
                }, {
                    key: "tk",
                    value: "tk",
                    flag: "tk",
                    text: "Tokelau"
                }, {
                    key: "to",
                    value: "to",
                    flag: "to",
                    text: "Tonga"
                }, {
                    key: "tt",
                    value: "tt",
                    flag: "tt",
                    text: "Trinidad"
                }, {
                    key: "tn",
                    value: "tn",
                    flag: "tn",
                    text: "Tunisia"
                }, {
                    key: "tr",
                    value: "tr",
                    flag: "tr",
                    text: "Turkey"
                }, {
                    key: "tm",
                    value: "tm",
                    flag: "tm",
                    text: "Turkmenistan"
                }, {
                    key: "tv",
                    value: "tv",
                    flag: "tv",
                    text: "Tuvalu"
                }, {
                    key: "ae",
                    value: "ae",
                    flag: "ae",
                    text: "U.A.E."
                }, {
                    key: "ug",
                    value: "ug",
                    flag: "ug",
                    text: "Uganda"
                }, {
                    key: "ua",
                    value: "ua",
                    flag: "ua",
                    text: "Ukraine"
                }, {
                    key: "gb",
                    value: "gb",
                    flag: "gb",
                    text: "United Kingdom"
                }, {
                    key: "us",
                    value: "us",
                    flag: "us",
                    text: "United States"
                }, {
                    key: "uy",
                    value: "uy",
                    flag: "uy",
                    text: "Uruguay"
                }, {
                    key: "um",
                    value: "um",
                    flag: "um",
                    text: "US Minor Islands"
                }, {
                    key: "vi",
                    value: "vi",
                    flag: "vi",
                    text: "US Virgin Islands"
                }, {
                    key: "uz",
                    value: "uz",
                    flag: "uz",
                    text: "Uzbekistan"
                }, {
                    key: "vu",
                    value: "vu",
                    flag: "vu",
                    text: "Vanuatu"
                }, {
                    key: "va",
                    value: "va",
                    flag: "va",
                    text: "Vatican City"
                }, {
                    key: "ve",
                    value: "ve",
                    flag: "ve",
                    text: "Venezuela"
                }, {
                    key: "vn",
                    value: "vn",
                    flag: "vn",
                    text: "Vietnam"
                }, {
                    key: "gb wls",
                    value: "gb wls",
                    flag: "gb wls",
                    text: "Wales"
                }, {
                    key: "wf",
                    value: "wf",
                    flag: "wf",
                    text: "Wallis and Futuna"
                }, {
                    key: "eh",
                    value: "eh",
                    flag: "eh",
                    text: "Western Sahara"
                }, {
                    key: "ye",
                    value: "ye",
                    flag: "ye",
                    text: "Yemen"
                }, {
                    key: "zm",
                    value: "zm",
                    flag: "zm",
                    text: "Zambia"
                }, {
                    key: "zw",
                    value: "zw",
                    flag: "zw",
                    text: "Zimbabwe"
                }],
                Aa = a(496),
                Na = a.n(Aa);

            function Ta() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    t = e.BASIC_INFO,
                    a = e.VERIFY_REASON,
                    n = e.VERIFY_REASON_1,
                    c = e.VERIFY_REASON_2,
                    i = e.VERIFY_REASON_3,
                    s = e.VERIFY_NOTE;
                return Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)("div", {
                        style: {
                            backgroundColor: "var(--white)",
                            borderRadius: ".28571429rem",
                            width: "fit-content",
                            margin: "auto"
                        },
                        children: Object(K.jsx)(ea.a, {
                            src: "/images/kyc_step_01.png",
                            centered: !0,
                            size: "medium"
                        })
                    }), Object(K.jsx)(E.a, {}), Object(K.jsx)(da.a, {
                        children: t
                    }), Object(K.jsx)("p", {
                        children: a
                    }), Object(K.jsxs)("p", {
                        children: ["- ", n]
                    }), Object(K.jsxs)("p", {
                        children: ["- ", c]
                    }), Object(K.jsxs)("p", {
                        children: ["- ", i]
                    }), Object(K.jsx)("p", {
                        children: s
                    })]
                })
            }
            var Ca = function(e) {
                    var t = e._next,
                        a = Object(y.useSelector)((function(e) {
                            return e
                        })),
                        c = a.setting,
                        i = a.user,
                        s = c.library,
                        r = i.verification,
                        l = Object(n.useState)(r.country),
                        d = Object(o.a)(l, 2),
                        u = d[0],
                        j = d[1],
                        b = Object(n.useState)(r.idType),
                        O = Object(o.a)(b, 2),
                        h = O[0],
                        m = O[1],
                        f = Object(y.useDispatch)(),
                        x = Object(n.useState)([]),
                        p = Object(o.a)(x, 2),
                        g = p[0],
                        E = p[1],
                        v = Object(n.useState)(null),
                        S = Object(o.a)(v, 2),
                        _ = S[0],
                        A = S[1],
                        N = s.FIRST_NAME,
                        T = s.LAST_NAME,
                        C = s.MIDDLE_NAME,
                        I = s.DOB,
                        k = s.COUNTRY,
                        w = s.SELECT_COUNTRY,
                        P = s.POSTAL_CODE,
                        D = s.CITY,
                        L = s.ADDRESS,
                        W = s.CONTINUE,
                        M = s.DRIVER_LICENSE,
                        F = s.PASSPORT;
                    return Object(K.jsx)("div", {
                        className: "p-20",
                        children: Object(K.jsxs)(Bt.a, {
                            children: [Object(K.jsx)(Bt.a.Column, {
                                computer: 8,
                                tablet: 8,
                                mobile: 16,
                                children: Object(K.jsx)(Ta, {})
                            }), Object(K.jsx)(Bt.a.Column, {
                                computer: 8,
                                tablet: 8,
                                mobile: 16,
                                children: Object(K.jsxs)(va.a, {
                                    error: !0,
                                    onSubmit: function(e) {
                                        for (var a, n = [], c = 0, i = Object.values(e.target); c < i.length; c++) {
                                            var s = i[c];
                                            "" === s.value && "" !== s.id && "middleName" !== s.id && n.push(s.id)
                                        }
                                        if (n.length > 0) E(n), A("PLEASE_ENTER_YOUR_FULL_INFORMATION");
                                        else {
                                            var r = e.target.firstName.value,
                                                l = e.target.middleName.value,
                                                o = e.target.lastName.value,
                                                d = e.target.postalCode.value,
                                                j = e.target.city.value,
                                                b = e.target.address.value,
                                                O = e.target.idCode.value,
                                                m = e.target.dob.value;
                                            if ((a = new Date("".concat(m, "T00:00:00"))) instanceof Date && !isNaN(a)) f({
                                                type: R,
                                                payload: {
                                                    firstName: r,
                                                    middleName: l,
                                                    lastName: o,
                                                    dob: m,
                                                    country: u,
                                                    postalCode: d,
                                                    city: j,
                                                    address: b,
                                                    idCode: O,
                                                    idType: h
                                                }
                                            }), t();
                                            else A("DOB_INVALID"), E(["dob"])
                                        }
                                    },
                                    children: [Object(K.jsxs)(va.a.Group, {
                                        widths: 3,
                                        children: [Object(K.jsxs)(va.a.Field, {
                                            required: !0,
                                            error: g.includes("firstName"),
                                            children: [Object(K.jsx)("label", {
                                                children: N
                                            }), Object(K.jsx)(va.a.Input, {
                                                placeholder: N,
                                                id: "firstName",
                                                defaultValue: r.firstName,
                                                maxLength: 32
                                            })]
                                        }), Object(K.jsxs)(va.a.Field, {
                                            children: [Object(K.jsx)("label", {
                                                children: C
                                            }), Object(K.jsx)(va.a.Input, {
                                                placeholder: C,
                                                id: "middleName",
                                                defaultValue: r.middleName,
                                                maxLength: 32
                                            })]
                                        }), Object(K.jsxs)(va.a.Field, {
                                            required: !0,
                                            error: g.includes("lastName"),
                                            children: [Object(K.jsx)("label", {
                                                children: T
                                            }), Object(K.jsx)(va.a.Input, {
                                                placeholder: T,
                                                id: "lastName",
                                                defaultValue: r.lastName,
                                                maxLength: 32
                                            })]
                                        })]
                                    }), Object(K.jsxs)(va.a.Field, {
                                        required: !0,
                                        error: g.includes("dob"),
                                        children: [Object(K.jsx)("label", {
                                            children: I
                                        }), Object(K.jsx)(Na.a, {
                                            mask: function(e) {
                                                var t = "3" === e.substr(8, 1) ? /[0-1]/ : /[0-9]/;
                                                return [/[1-9]/, /\d/, /\d/, /\d/, "-", /[0-1]/, "1" === e.substr(5, 1) ? /[0-2]/ : /[0-9]/, "-", /[0-3]/, t]
                                            },
                                            placeholder: "1990-12-31",
                                            id: "dob",
                                            name: "dob",
                                            className: "masked-input",
                                            defaultValue: r.dob
                                        })]
                                    }), Object(K.jsx)(va.a.Select, {
                                        label: s.ID_TYPE,
                                        options: [{
                                            key: 0,
                                            value: 0,
                                            text: s.ID_CARD
                                        }, {
                                            key: 1,
                                            value: 1,
                                            text: F
                                        }, {
                                            key: 2,
                                            value: 2,
                                            text: M
                                        }],
                                        value: h,
                                        id: "idType",
                                        name: "idType",
                                        onChange: function(e, t) {
                                            var a = t.value;
                                            return m(a)
                                        },
                                        required: !0
                                    }), Object(K.jsxs)(va.a.Field, {
                                        required: !0,
                                        error: g.includes("idCode"),
                                        children: [Object(K.jsx)("label", {
                                            children: s.ID_CODE
                                        }), Object(K.jsx)(va.a.Input, {
                                            placeholder: s.ID_CODE,
                                            id: "idCode",
                                            defaultValue: r.idCode,
                                            maxLength: 32
                                        })]
                                    }), Object(K.jsxs)(va.a.Field, {
                                        required: !0,
                                        error: g.includes("country"),
                                        children: [Object(K.jsx)("label", {
                                            children: k
                                        }), Object(K.jsx)(ya.a, {
                                            placeholder: w,
                                            search: !0,
                                            selection: !0,
                                            options: _a,
                                            onChange: function(e, t) {
                                                var a = t.value;
                                                j(a)
                                            },
                                            value: u
                                        })]
                                    }), Object(K.jsxs)(va.a.Field, {
                                        required: !0,
                                        error: g.includes("address"),
                                        children: [Object(K.jsx)("label", {
                                            children: L
                                        }), Object(K.jsx)(va.a.TextArea, {
                                            placeholder: L,
                                            id: "address",
                                            defaultValue: r.address,
                                            maxLength: 128
                                        })]
                                    }), Object(K.jsxs)(va.a.Group, {
                                        widths: 2,
                                        children: [Object(K.jsxs)(va.a.Field, {
                                            required: !0,
                                            error: g.includes("postalCode"),
                                            children: [Object(K.jsx)("label", {
                                                children: P
                                            }), Object(K.jsx)(va.a.Input, {
                                                placeholder: P,
                                                id: "postalCode",
                                                defaultValue: r.postalCode,
                                                maxLength: 32
                                            })]
                                        }), Object(K.jsxs)(va.a.Field, {
                                            required: !0,
                                            error: g.includes("city"),
                                            children: [Object(K.jsx)("label", {
                                                children: D
                                            }), Object(K.jsx)(va.a.Input, {
                                                placeholder: D,
                                                id: "city",
                                                defaultValue: r.city,
                                                maxLength: 32
                                            })]
                                        })]
                                    }), Object(K.jsx)(Jt.a, {
                                        error: !0,
                                        content: s[_],
                                        hidden: 0 === g.length
                                    }), Object(K.jsx)(Sa.a, {
                                        className: "submit-btn",
                                        fluid: !0,
                                        children: W
                                    })]
                                })
                            })]
                        })
                    })
                },
                Ia = a(790);

            function Ra() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    t = (e.KYC_REQUEST, e.SIGN, e.VERIFY_NOTE),
                    a = (e.UPLOAD_PHOTO_NOTE, e.FRONT_PAGE);
                e.UPLOAD_PHOTO_WITH, e.UPLOAD_PHOTO_NOTE_1, e.UPLOAD_PHOTO_NOTE_2, e.DATE_REQUIRE, e.KYC_FOR;
                return Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)(ea.a, {
                        src: "/images/front-of-page.png",
                        centered: !0,
                        size: "medium"
                    }), Object(K.jsx)(E.a, {
                        className: "mt-20"
                    }), Object(K.jsx)(da.a, {
                        children: a
                    }), Object(K.jsx)(Vt.a, {
                        vertical: !0,
                        children: t
                    })]
                })
            }
            var ka = function(e) {
                var t = e._next,
                    a = e._previous,
                    c = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    i = c.setting,
                    s = c.user,
                    r = s.verificationPhotos,
                    l = s.verification,
                    d = i.library,
                    u = d.UPLOAD,
                    j = d.CONTINUE,
                    b = d.NOTE_UPLOAD_PHOTO,
                    O = d.UPLOAD_PHOTO,
                    h = d.FRONT_PAGE,
                    m = Object(y.useDispatch)(),
                    f = Object(n.useState)(!1),
                    x = Object(o.a)(f, 2),
                    p = x[0],
                    g = x[1];
                return Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)(Vt.a, {
                        basic: !0,
                        vertical: !0,
                        textAlign: "left",
                        children: Object(K.jsx)(V.a, {
                            name: "arrow left",
                            onClick: a,
                            size: "large",
                            style: {
                                cursor: "pointer"
                            }
                        })
                    }), Object(K.jsxs)(Bt.a, {
                        textAlign: "left",
                        children: [Object(K.jsx)(Bt.a.Column, {
                            computer: 8,
                            tablet: 8,
                            mobile: 16,
                            children: Object(K.jsx)(Ra, {})
                        }), Object(K.jsxs)(Bt.a.Column, {
                            computer: 8,
                            tablet: 8,
                            mobile: 16,
                            children: [Object(K.jsxs)(da.a, {
                                style: {
                                    marginTop: 0
                                },
                                children: [u, " ", h]
                            }), Object(K.jsx)("div", {
                                children: b
                            }), Object(K.jsx)("label", {
                                htmlFor: p ? "" : "upload-photo-front-photo",
                                style: {
                                    cursor: "pointer"
                                },
                                children: Object(K.jsxs)(Vt.a, {
                                    style: {
                                        border: "2px dashed #999",
                                        padding: 0,
                                        margin: "1em auto",
                                        height: 370
                                    },
                                    loading: p,
                                    children: [r.front && Object(K.jsx)(ea.a, {
                                        src: r.front,
                                        style: {
                                            width: "100%",
                                            objectFit: "cover",
                                            height: 300
                                        },
                                        centered: !0
                                    }), Object(K.jsxs)(Vt.a, {
                                        basic: !0,
                                        vertical: !0,
                                        textAlign: "center",
                                        children: [Object(K.jsx)(V.a, {
                                            name: "upload",
                                            size: "large"
                                        }), Object(K.jsx)("p", {
                                            children: O
                                        })]
                                    })]
                                })
                            }), Object(K.jsx)("div", {
                                className: "upload-photo",
                                children: Object(K.jsx)(Ia.a, {
                                    type: "file",
                                    name: "upload-photo-front-photo",
                                    id: "upload-photo-front-photo",
                                    onChange: function(e) {
                                        if (e.target.files.length > 0)
                                            if ((a = e.target.files[0]) && ["image/gif", "image/jpeg", "image/png"].includes(a.type))
                                                if (e.target.files[0].size < 5e6) {
                                                    var t = new FormData;
                                                    t.append("image", e.target.files[0]), g(!0), m({
                                                        type: R,
                                                        payload: {
                                                            frontPhoto: ""
                                                        }
                                                    }), fetch("".concat(J, "/user-service/photo/upload"), {
                                                        headers: {
                                                            Authorization: "bearer " + oe()
                                                        },
                                                        method: "POST",
                                                        body: t
                                                    }).then((function(e) {
                                                        return e.json()
                                                    })).then((function(e) {
                                                        m({
                                                            type: R,
                                                            payload: {
                                                                frontPhoto: e.data.name
                                                            }
                                                        }), e.success || alert(e.data.msg), g(!1)
                                                    })).catch((function(e) {
                                                        return console.log(e)
                                                    })), m({
                                                        type: k,
                                                        payload: {
                                                            front: URL.createObjectURL(e.target.files[0])
                                                        }
                                                    })
                                                } else se("error", d.IMAGE_LARGE);
                                        else se("error", d.IMAGE_CORRECT);
                                        var a
                                    },
                                    accept: "image/x-png,image/jpeg",
                                    fluid: !0
                                })
                            }), Object(K.jsx)(Sa.a, {
                                className: "submit-btn mt-20",
                                fluid: !0,
                                disabled: !l.frontPhoto,
                                onClick: t,
                                children: j
                            })]
                        })]
                    })]
                })
            };

            function wa() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    t = (e.KYC_REQUEST, e.SIGN, e.VERIFY_NOTE),
                    a = (e.UPLOAD_PHOTO_NOTE, e.FRONT_PAGE, e.UPLOAD_PHOTO_WITH, e.UPLOAD_PHOTO_NOTE_1, e.UPLOAD_PHOTO_NOTE_2, e.DATE_REQUIRE, e.KYC_FOR, e.BACK_PAGE);
                return Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)(ea.a, {
                        src: "/images/back-of-page.png",
                        centered: !0,
                        size: "medium"
                    }), Object(K.jsx)(E.a, {
                        className: "mt-20"
                    }), Object(K.jsx)(da.a, {
                        children: a
                    }), Object(K.jsx)(Vt.a, {
                        vertical: !0,
                        children: t
                    })]
                })
            }
            var Pa = function(e) {
                var t = e._next,
                    a = e._previous,
                    c = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    i = c.setting,
                    s = c.user,
                    r = s.verificationPhotos,
                    l = s.verification,
                    d = i.library,
                    u = d.CONTINUE,
                    j = d.UPLOAD,
                    b = d.BACK_PAGE,
                    O = d.NOTE_UPLOAD_PHOTO,
                    h = d.UPLOAD_PHOTO,
                    m = Object(y.useDispatch)(),
                    f = Object(n.useState)(!1),
                    x = Object(o.a)(f, 2),
                    p = x[0],
                    g = x[1];
                return Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)(Vt.a, {
                        basic: !0,
                        vertical: !0,
                        textAlign: "left",
                        children: Object(K.jsx)(V.a, {
                            name: "arrow left",
                            onClick: a,
                            size: "large",
                            style: {
                                cursor: "pointer"
                            }
                        })
                    }), Object(K.jsxs)(Bt.a, {
                        textAlign: "left",
                        children: [Object(K.jsx)(Bt.a.Column, {
                            computer: 8,
                            tablet: 8,
                            mobile: 16,
                            children: Object(K.jsx)(wa, {})
                        }), Object(K.jsxs)(Bt.a.Column, {
                            computer: 8,
                            tablet: 8,
                            mobile: 16,
                            children: [Object(K.jsxs)(da.a, {
                                style: {
                                    marginTop: 0
                                },
                                children: [j, " ", b]
                            }), Object(K.jsxs)("div", {
                                children: [O, " "]
                            }), Object(K.jsx)("label", {
                                htmlFor: p ? "" : "upload-photo-back-photo",
                                style: {
                                    cursor: "pointer"
                                },
                                children: Object(K.jsxs)(Vt.a, {
                                    style: {
                                        border: "2px dashed #999",
                                        padding: 0,
                                        margin: "1em auto",
                                        height: 370
                                    },
                                    loading: p,
                                    children: [r.back && Object(K.jsx)(ea.a, {
                                        src: r.back,
                                        style: {
                                            width: "100%",
                                            objectFit: "cover",
                                            height: 300
                                        },
                                        centered: !0
                                    }), Object(K.jsxs)(Vt.a, {
                                        basic: !0,
                                        vertical: !0,
                                        textAlign: "center",
                                        children: [Object(K.jsx)(V.a, {
                                            name: "upload",
                                            size: "large"
                                        }), Object(K.jsx)("p", {
                                            children: h
                                        })]
                                    })]
                                })
                            }), Object(K.jsx)("div", {
                                className: "upload-photo",
                                children: Object(K.jsx)(Ia.a, {
                                    type: "file",
                                    name: "upload-photo-back-photo",
                                    id: "upload-photo-back-photo",
                                    onChange: function(e) {
                                        if (e.target.files.length > 0)
                                            if ((a = e.target.files[0]) && ["image/gif", "image/jpeg", "image/png"].includes(a.type))
                                                if (e.target.files[0].size < 5e6) {
                                                    var t = new FormData;
                                                    t.append("image", e.target.files[0]), g(!0), m({
                                                        type: R,
                                                        payload: {
                                                            backPhoto: ""
                                                        }
                                                    }), fetch("".concat(J, "/user-service/photo/upload"), {
                                                        headers: {
                                                            Authorization: "bearer " + oe()
                                                        },
                                                        method: "POST",
                                                        body: t
                                                    }).then((function(e) {
                                                        return e.json()
                                                    })).then((function(e) {
                                                        m({
                                                            type: R,
                                                            payload: {
                                                                backPhoto: e.data.name
                                                            }
                                                        }), e.success || alert(e.data.msg), g(!1)
                                                    })).catch((function(e) {
                                                        return console.log(e)
                                                    })), m({
                                                        type: k,
                                                        payload: {
                                                            back: URL.createObjectURL(e.target.files[0])
                                                        }
                                                    })
                                                } else se("error", d.IMAGE_LARGE);
                                        else se("error", d.IMAGE_CORRECT);
                                        var a
                                    },
                                    accept: "image/x-png,image/jpeg",
                                    fluid: !0
                                })
                            }), Object(K.jsx)(Sa.a, {
                                className: "submit-btn mt-20",
                                fluid: !0,
                                disabled: !l.backPhoto,
                                onClick: t,
                                children: u
                            })]
                        })]
                    })]
                })
            };

            function Da() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    t = (e.KYC_REQUEST, e.SIGN, e.VERIFY_NOTE);
                e.UPLOAD_PHOTO_NOTE, e.UPLOAD_PHOTO_WITH, e.UPLOAD_PHOTO_NOTE_1, e.UPLOAD_PHOTO_NOTE_2, e.DATE_REQUIRE, e.KYC_FOR;
                return Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)("div", {
                        style: {
                            backgroundColor: "var(--white)",
                            width: "fit-content",
                            margin: "auto",
                            borderRadius: ".28571429rem"
                        },
                        children: Object(K.jsx)(ea.a, {
                            src: "/images/selfie-photo.jpeg",
                            centered: !0,
                            size: "medium",
                            style: {
                                borderRadius: ".28571429rem"
                            }
                        })
                    }), Object(K.jsx)(E.a, {
                        className: "mt-20"
                    }), Object(K.jsxs)(da.a, {
                        children: [e.SELFIE, " with front of of card ID/Passport/Driver license"]
                    }), Object(K.jsx)(Vt.a, {
                        vertical: !0,
                        children: t
                    })]
                })
            }
            var La = function(e) {
                    var t = e._next,
                        a = e._previous,
                        c = Object(y.useSelector)((function(e) {
                            return e
                        })),
                        i = c.setting,
                        s = c.user,
                        r = s.verificationPhotos,
                        l = s.verification,
                        d = i.library,
                        u = d.CONTINUE,
                        j = d.UPLOAD_SELFIE_PHOTO,
                        b = d.NOTE_UPLOAD_PHOTO,
                        O = d.UPLOAD_PHOTO,
                        h = Object(y.useDispatch)(),
                        m = Object(n.useState)(!1),
                        f = Object(o.a)(m, 2),
                        x = f[0],
                        p = f[1];
                    return Object(K.jsxs)(K.Fragment, {
                        children: [Object(K.jsx)(Vt.a, {
                            basic: !0,
                            vertical: !0,
                            textAlign: "left",
                            children: Object(K.jsx)(V.a, {
                                name: "arrow left",
                                onClick: a,
                                size: "large",
                                style: {
                                    cursor: "pointer"
                                }
                            })
                        }), Object(K.jsxs)(Bt.a, {
                            textAlign: "left",
                            children: [Object(K.jsx)(Bt.a.Column, {
                                computer: 8,
                                tablet: 8,
                                mobile: 16,
                                children: Object(K.jsx)(Da, {})
                            }), Object(K.jsxs)(Bt.a.Column, {
                                computer: 8,
                                tablet: 8,
                                mobile: 16,
                                children: [Object(K.jsx)(da.a, {
                                    style: {
                                        marginTop: 0
                                    },
                                    children: j
                                }), Object(K.jsx)("div", {
                                    children: b
                                }), Object(K.jsx)("label", {
                                    htmlFor: x ? "" : "upload-photo-selfie-photo",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: Object(K.jsxs)(Vt.a, {
                                        style: {
                                            border: "2px dashed #999",
                                            padding: 0,
                                            margin: "1em auto",
                                            height: 370
                                        },
                                        loading: x,
                                        children: [r.selfie && Object(K.jsx)(ea.a, {
                                            src: r.selfie,
                                            style: {
                                                width: "100%",
                                                objectFit: "cover",
                                                height: 300
                                            },
                                            centered: !0
                                        }), Object(K.jsxs)(Vt.a, {
                                            basic: !0,
                                            vertical: !0,
                                            textAlign: "center",
                                            children: [Object(K.jsx)(V.a, {
                                                name: "upload",
                                                size: "large"
                                            }), Object(K.jsx)("p", {
                                                children: O
                                            })]
                                        })]
                                    })
                                }), Object(K.jsx)("div", {
                                    className: "upload-photo",
                                    children: Object(K.jsx)(Ia.a, {
                                        type: "file",
                                        name: "upload-photo-selfie-photo",
                                        id: "upload-photo-selfie-photo",
                                        onChange: function(e) {
                                            if (e.target.files.length > 0)
                                                if ((a = e.target.files[0]) && ["image/gif", "image/jpeg", "image/png"].includes(a.type))
                                                    if (e.target.files[0].size < 5e6) {
                                                        var t = new FormData;
                                                        t.append("image", e.target.files[0]), p(!0), h({
                                                            type: R,
                                                            payload: {
                                                                selfiePhoto: ""
                                                            }
                                                        }), fetch("".concat(J, "/user-service/photo/upload"), {
                                                            headers: {
                                                                Authorization: "bearer " + oe()
                                                            },
                                                            method: "POST",
                                                            body: t
                                                        }).then((function(e) {
                                                            return e.json()
                                                        })).then((function(e) {
                                                            h({
                                                                type: R,
                                                                payload: {
                                                                    selfiePhoto: e.data.name
                                                                }
                                                            }), e.success || alert(e.data.msg), p(!1)
                                                        })).catch((function(e) {
                                                            return console.log(e)
                                                        })), h({
                                                            type: k,
                                                            payload: {
                                                                selfie: URL.createObjectURL(e.target.files[0])
                                                            }
                                                        })
                                                    } else se("error", d.IMAGE_LARGE);
                                            else se("error", d.IMAGE_CORRECT);
                                            var a
                                        },
                                        accept: "image/x-png,image/jpeg",
                                        fluid: !0
                                    })
                                }), Object(K.jsx)(Sa.a, {
                                    className: "submit-btn mt-20",
                                    fluid: !0,
                                    disabled: !l.selfiePhoto,
                                    onClick: t,
                                    children: u
                                })]
                            })]
                        })]
                    })
                },
                Wa = a(825);
            var Ma = function(e) {
                    var t = e._previous,
                        a = Object(y.useSelector)((function(e) {
                            return e
                        })).user,
                        c = a.verification,
                        i = a.verificationPhotos,
                        s = Object(n.useState)(!1),
                        r = Object(o.a)(s, 2),
                        d = r[0],
                        u = r[1],
                        j = _a[_a.findIndex((function(e) {
                            return e.value === c.country
                        }))].text,
                        b = Object(n.useState)(!1),
                        O = Object(o.a)(b, 2),
                        h = O[0],
                        m = O[1],
                        f = Object(l.k)(),
                        x = i.front,
                        p = i.back,
                        g = i.selfie,
                        E = c.dob.split("-"),
                        v = "".concat(E[0], "-").concat(E[1], "-").concat(E[2], "T00:00:00"),
                        S = !1,
                        _ = function() {
                            d && !S ? (S = !0, m(!0), he("/user-service/user/identity-verification", {
                                FirstName: c.firstName,
                                MiddleName: c.middleName,
                                LastName: c.lastName,
                                DateOfBirth: v,
                                Nationality: j,
                                ResidentialAddress: c.address,
                                PostalCode: c.postalCode,
                                City: c.city,
                                BackPhoto: c.backPhoto,
                                FrontPhoto: c.frontPhoto,
                                SelfiePhoto: c.selfiePhoto,
                                idCode: c.idCode,
                                IdType: c.idType
                            }, (function() {
                                se("success", A.KYC_SUCCESS), f.push("/my-profile")
                            }), (function(e) {
                                alert(JSON.stringify(e))
                            }))) : se("error", A.PLEASER_CHECK_TOS)
                        },
                        A = Object(y.useSelector)((function(e) {
                            return e
                        })).setting.library,
                        N = A.FULL_NAME,
                        T = A.DOB,
                        C = A.ADDRESS,
                        I = A.CITY,
                        R = A.COUNTRY,
                        k = A.FRONT_PAGE,
                        w = A.BACK_PAGE,
                        P = A.SELFIE,
                        D = A.ID_CODE,
                        L = A.CONFIRM,
                        W = A.VERIFY_NOTE,
                        M = A.WELL_DONE,
                        F = A.KYC_CONFIRM_NOTE,
                        U = A.KYC_CONFIRM_NOTE_1,
                        H = A.KYC_CONFIRM_NOTE_2,
                        G = A.KYC_CONFIRM_NOTE_3,
                        Y = A.TERM_OF_USE,
                        B = A.AND,
                        z = A.AGREE_AFTER,
                        q = A.I_AGREE_TO_THE;
                    return Object(K.jsxs)(K.Fragment, {
                        children: [Object(K.jsx)(ga.a, {
                            page: !0,
                            active: h,
                            children: Object(K.jsx)(Ea.a, {})
                        }), Object(K.jsx)(Vt.a, {
                            basic: !0,
                            vertical: !0,
                            textAlign: "left",
                            children: Object(K.jsx)(V.a, {
                                name: "arrow left",
                                onClick: t,
                                size: "large",
                                style: {
                                    cursor: "pointer"
                                }
                            })
                        }), Object(K.jsxs)(Bt.a, {
                            textAlign: "left",
                            children: [Object(K.jsxs)(Bt.a.Column, {
                                computer: 8,
                                tablet: 8,
                                mobile: 16,
                                children: [Object(K.jsx)("div", {
                                    style: {
                                        backgroundColor: "var(--white)",
                                        width: "fit-content",
                                        margin: "auto",
                                        borderRadius: ".28571429rem"
                                    },
                                    children: Object(K.jsx)(ea.a, {
                                        src: "/images/kyc_step_05.png",
                                        centered: !0,
                                        size: "medium",
                                        style: {
                                            borderRadius: ".28571429rem"
                                        }
                                    })
                                }), Object(K.jsx)(da.a, {
                                    textAlign: "center",
                                    children: M
                                }), Object(K.jsx)(Wa.a, {
                                    label: function() {
                                        return Object(K.jsxs)("label", {
                                            children: [q, " ", Object(K.jsx)("a", {
                                                href: "/terms-of-service",
                                                target: "_blank",
                                                children: Y
                                            }), " ", ", ", Object(K.jsx)("span", {
                                                children: z
                                            }), " ", A.AND, " ", Object(K.jsx)("span", {
                                                children: A.SPEXCHANGE_KYC_NOTE
                                            })]
                                        })
                                    },
                                    checked: d,
                                    onChange: function(e, t) {
                                        var a = t.checked;
                                        return u(a)
                                    },
                                    className: "hide-mobile"
                                }), Object(K.jsx)(Vt.a, {
                                    vertical: !0,
                                    className: "hide-mobile",
                                    children: Object(K.jsx)(Sa.a, {
                                        onClick: _,
                                        className: "submit-btn mt-20",
                                        fluid: !0,
                                        children: L
                                    })
                                }), Object(K.jsx)(da.a, {
                                    as: "h5",
                                    children: G
                                }), Object(K.jsxs)("div", {
                                    children: ["- ", F]
                                }), Object(K.jsxs)("div", {
                                    children: ["- ", U]
                                }), Object(K.jsxs)("div", {
                                    children: ["- ", H]
                                }), Object(K.jsx)("br", {}), Object(K.jsx)("div", {
                                    children: W
                                })]
                            }), Object(K.jsxs)(Bt.a.Column, {
                                computer: 8,
                                tablet: 8,
                                mobile: 16,
                                children: [Object(K.jsxs)(Vt.a, {
                                    vertical: !0,
                                    textAlign: "left",
                                    style: {
                                        paddingTop: 0
                                    },
                                    children: [Object(K.jsxs)("p", {
                                        children: [N, ": ", c.firstName, " ", c.middleName, " ", c.lastName]
                                    }), Object(K.jsxs)("p", {
                                        children: [D, ": ", c.idCode]
                                    }), Object(K.jsxs)("p", {
                                        children: [T, ": ", c.dob]
                                    }), Object(K.jsxs)("p", {
                                        children: [C, ": ", c.address]
                                    }), Object(K.jsxs)("p", {
                                        children: [I, ": ", c.city]
                                    }), Object(K.jsxs)("p", {
                                        children: [R, ": ", j]
                                    }), Object(K.jsxs)(Bt.a, {
                                        columns: 2,
                                        children: [Object(K.jsxs)(Bt.a.Column, {
                                            children: [Object(K.jsx)("p", {
                                                children: k
                                            }), Object(K.jsx)(ea.a, {
                                                src: x,
                                                style: {
                                                    width: "100%",
                                                    objectFit: "cover",
                                                    height: 150,
                                                    border: "1px solid #fff"
                                                }
                                            })]
                                        }), Object(K.jsxs)(Bt.a.Column, {
                                            children: [Object(K.jsx)("p", {
                                                children: w
                                            }), Object(K.jsx)(ea.a, {
                                                src: p,
                                                style: {
                                                    width: "100%",
                                                    objectFit: "cover",
                                                    height: 150,
                                                    border: "1px solid #fff"
                                                }
                                            })]
                                        })]
                                    }), Object(K.jsxs)(Vt.a, {
                                        textAlign: "center",
                                        basic: !0,
                                        children: [Object(K.jsx)("p", {
                                            children: P
                                        }), Object(K.jsx)(ea.a, {
                                            src: g,
                                            style: {
                                                width: 200,
                                                objectFit: "cover",
                                                height: 200,
                                                borderRadius: "50%",
                                                border: "1px solid #fff"
                                            },
                                            centered: !0
                                        })]
                                    })]
                                }), Object(K.jsxs)("div", {
                                    className: "show-mobile",
                                    children: [Object(K.jsx)(Wa.a, {
                                        label: function() {
                                            return Object(K.jsx)("label", {
                                                children: Object(K.jsxs)("p", {
                                                    children: [q, " ", Object(K.jsx)("a", {
                                                        href: "/terms-of-service",
                                                        target: "_blank",
                                                        children: Y
                                                    }), " ", B, " ", Object(K.jsxs)("a", {
                                                        children: [z, "."]
                                                    })]
                                                })
                                            })
                                        },
                                        checked: d,
                                        onChange: function(e, t) {
                                            var a = t.checked;
                                            return u(a)
                                        }
                                    }), Object(K.jsx)("p", {}), Object(K.jsx)(Sa.a, {
                                        onClick: _,
                                        className: "submit-btn mt-20",
                                        fluid: !0,
                                        children: L
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                Fa = a(792);
            var Ua = function() {
                    var e = Object(y.useSelector)((function(e) {
                            return e
                        })),
                        t = e.user,
                        a = e.setting.library,
                        c = t.information,
                        i = Object(n.useState)(0),
                        s = Object(o.a)(i, 2),
                        r = s[0],
                        d = s[1],
                        j = Object(l.k)();
                    Object(n.useEffect)((function() {
                        re() || j.push("/")
                    }), [j]);
                    var b = a.INFORMATION,
                        O = (a.PHOTOS, a.CONFIRM),
                        h = function() {
                            r < 5 && d(r + 1)
                        },
                        f = function() {
                            r > 0 && d(r - 1)
                        },
                        x = [{
                            menuItem: b,
                            index: 0,
                            render: function() {
                                return Object(K.jsx)(Ca, {
                                    _next: h
                                })
                            },
                            description: "Enter personal information"
                        }, {
                            menuItem: "Front photo",
                            index: 1,
                            render: function() {
                                return Object(K.jsx)(ka, {
                                    _next: h,
                                    _previous: f
                                })
                            },
                            description: "ID/Passport/Driver license"
                        }, {
                            menuItem: "Back photo",
                            index: 2,
                            render: function() {
                                return Object(K.jsx)(Pa, {
                                    _next: h,
                                    _previous: f
                                })
                            },
                            description: "ID/Passport/Driver license"
                        }, {
                            menuItem: "Selfie photo",
                            index: 3,
                            render: function() {
                                return Object(K.jsx)(La, {
                                    _next: h,
                                    _previous: f
                                })
                            },
                            description: "Take a selfie"
                        }, {
                            menuItem: O,
                            index: 4,
                            render: function() {
                                return Object(K.jsx)(Ma, {
                                    _previous: f
                                })
                            },
                            description: "Check the information again"
                        }];
                    return Object(n.useEffect)((function() {
                        c && ("PENDING" !== c.verifyStatusLv2 && "VERIFIED" !== c.verifyStatusLv2 || setTimeout((function() {
                            j.push("/my-profile")
                        }), 3e3))
                    })), c ? "PENDING" === c.verifyStatusLv2 || "VERIFIED" === c.verifyStatusLv2 ? Object(K.jsx)(m.a, {
                        anchor: "bottom",
                        open: !0,
                        className: "custom-modal-vk",
                        children: Object(K.jsxs)("div", {
                            className: "p-20 bg-white text-center",
                            children: [Object(K.jsx)(Fa.a, {
                                style: {
                                    fontSize: "5rem",
                                    fill: "gold",
                                    marginBottom: 20
                                }
                            }), Object(K.jsx)(ze.a, {
                                variant: "h5",
                                children: a.KYC_NOTIFICATION
                            })]
                        })
                    }) : Object(K.jsx)(u.a, {
                        className: "verification fastwallet-container",
                        children: Object(K.jsxs)(Be.a, {
                            className: "p-20",
                            children: [Object(K.jsx)(xa.a.Group, {
                                ordered: !0,
                                size: "tiny",
                                fluid: !0,
                                className: "hide-mobile",
                                children: x.map((function(e) {
                                    return Object(K.jsx)(xa.a, {
                                        completed: r > e.index,
                                        active: r === e.index,
                                        children: Object(K.jsxs)(xa.a.Content, {
                                            children: [Object(K.jsx)(xa.a.Title, {
                                                children: e.menuItem
                                            }), Object(K.jsx)(xa.a.Description, {
                                                children: Object(K.jsx)("small", {
                                                    children: e.description
                                                })
                                            })]
                                        })
                                    })
                                }))
                            }), Object(K.jsx)(pa.a, {
                                menu: {
                                    secondary: !0,
                                    pointing: !0,
                                    inverted: !1,
                                    fluid: !0
                                },
                                panes: x,
                                activeIndex: r
                            })]
                        })
                    }) : Object(K.jsx)(ga.a, {
                        active: !0,
                        children: Object(K.jsx)(Ea.a, {})
                    })
                },
                Ha = a(816),
                Ga = a(354),
                Ya = a(399),
                Ba = a(506);
            var za = function() {
                var e = Object(y.useSelector)((function(e) {
                    return e
                })).wallet.fundListForCoinChart;
                return Object(n.useLayoutEffect)((function() {
                    if (e.length > 0) {
                        var t = 0,
                            a = e.map((function(e) {
                                return Object.assign({}, e)
                            }));
                        if (a) {
                            for (var n = 0; n < a.length; n++) {
                                t += a[n].usdAmount
                            }
                            for (var c = 0; c < a.length; c++) {
                                var i = a[c];
                                i.usdAmount < t / (2 * a.length) && i.usdAmount > 0 && (i.usdAmount += t / (3 * a.length))
                            }
                            0 === t && (a = [{
                                coin: null,
                                usdAmount: 100
                            }])
                        }
                        Ga.c(Ba.a);
                        var s = Ga.b("chartdiv", Ya.a);
                        s.logo.height = -15, s.data = a;
                        var r = s.series.push(new Ya.b);
                        r.dataFields.value = "usdAmount", r.dataFields.category = "coin", r.hiddenState.properties.endAngle = -90, s.innerRadius = 115, r.labels.template.disabled = !0, r.ticks.template.disabled = !0, r.slices.template.tooltipText = "", r.slices.template.propertyFields.fill = "color", r.slices.template.stroke = Ga.a("#fff"), r.slices.template.strokeWidth = 1, r.hiddenState.properties.endAngle = -90, r.slices.template.strokeOpacity = 1;
                        var l = r.slices.template;
                        return l.states.getKey("hover").properties.scale = 1, l.states.getKey("active").properties.shiftRadius = 0, l.propertyFields.fillOpacity = "opacity",
                            function() {
                                s.dispose()
                            }
                    }
                }), [e]), Object(K.jsx)("div", {
                    id: "chartdiv",
                    style: {
                        width: "100%",
                        height: "300px"
                    }
                })
            };
            var Va, Ka = function() {
                    var e, t = Object(l.k)(),
                        a = Object(y.useSelector)((function(e) {
                            return e
                        })),
                        i = a.wallet,
                        s = a.setting,
                        r = a.user,
                        j = s.library,
                        O = i.fundList,
                        h = Object(n.useState)(""),
                        m = Object(o.a)(h, 2),
                        f = m[0],
                        x = m[1],
                        p = Object(n.useState)(!1),
                        g = Object(o.a)(p, 2),
                        v = g[0],
                        S = g[1];
                    Object(n.useEffect)((function() {
                        re() || t.push("/")
                    }), [t]);
                    var _ = O.reduce((function(e, t) {
                        return e + t.usdAmount
                    }), 0);
                    return (e = f.trim().length > 0 ? O.filter((function(e) {
                        return e.coin.toLowerCase().includes(f.toLowerCase()) || e.fullName.toLowerCase().includes(f.toLowerCase())
                    })) : O).sort((function(e, t) {
                        return t.usdAmount - e.usdAmount
                    })), e = e.slice(0, v ? e.length : 5), Object(K.jsxs)(u.a, {
                        className: "dashboard pb-50",
                        children: [Object(K.jsxs)("div", {
                            style: {
                                position: "relative"
                            },
                            children: [Object(K.jsx)(za, {}), Object(K.jsxs)(Ha.a, {
                                size: "small",
                                style: {
                                    position: "absolute",
                                    bottom: 0,
                                    top: 0,
                                    right: "50%",
                                    left: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: 0
                                },
                                children: [Object(K.jsx)(Ha.a.Label, {
                                    style: {
                                        color: "$main-blue"
                                    },
                                    children: j.TOTAL
                                }), Object(K.jsxs)(Ha.a.Value, {
                                    style: r.data && "realbewhy@gmail.com" === r.data.email ? {
                                        color: "pink"
                                    } : null,
                                    children: [Object(K.jsx)("span", {
                                        style: {
                                            fontSize: 25
                                        },
                                        children: "$"
                                    }), Object(K.jsx)("span", {
                                        style: {
                                            fontSize: 35
                                        },
                                        children: Object(B.formatShortMoney)(_)
                                    })]
                                })]
                            })]
                        }), Object(K.jsx)(Vt.a, {
                            className: "balances p-minus",
                            padded: !0,
                            children: Object(K.jsxs)(Bt.a, {
                                columns: "equal",
                                textAlign: " ",
                                children: [Object(K.jsxs)(Bt.a.Row, {
                                    children: [Object(K.jsx)(Bt.a.Column, {
                                        mobile: 16,
                                        tablet: 6,
                                        computer: 4,
                                        floated: "right",
                                        children: Object(K.jsx)(it.a, {
                                            placeholder: j.SEARCH_COIN_TOKEN,
                                            type: "text",
                                            icon: Object(K.jsx)(V.a, {
                                                name: "search",
                                                inverted: !0
                                            }),
                                            onChange: function(e) {
                                                return x(e.target.value)
                                            },
                                            variant: "outlined",
                                            size: "small",
                                            fullWidth: !0
                                        })
                                    }), Object(K.jsx)(Bt.a.Column, {
                                        width: 16,
                                        children: Object(K.jsx)(E.a, {
                                            className: "mt-20 mb-20"
                                        })
                                    })]
                                }), Object(K.jsxs)(Bt.a.Row, {
                                    only: "computer",
                                    style: {
                                        fontWeight: 600
                                    },
                                    className: "opacity-06",
                                    children: [Object(K.jsx)(Bt.a.Column, {
                                        textAlign: "left",
                                        width: 4,
                                        children: j.COIN_TOKEN
                                    }), Object(K.jsx)(Bt.a.Column, {
                                        children: j.PRICE
                                    }), Object(K.jsx)(Bt.a.Column, {
                                        children: j.BALANCE
                                    }), Object(K.jsx)(Bt.a.Column, {
                                        width: 5
                                    })]
                                }), e.map((function(e, a) {
                                    return Object(K.jsxs)(c.a.Fragment, {
                                        children: [Object(K.jsxs)(Bt.a.Row, {
                                            only: "computer",
                                            className: "portfolio-item",
                                            children: [Object(K.jsxs)(Bt.a.Column, {
                                                style: {
                                                    display: "flex"
                                                },
                                                textAlign: "left",
                                                width: 4,
                                                onClick: function(a) {
                                                    a.target.className.includes("button") || t.push("/portfolio/".concat(e.coin))
                                                },
                                                children: [Object(K.jsx)(d.a, {
                                                    src: "".concat(Z, "/coins/").concat(e.coin.replace(" ", "_"), ".png")
                                                }), Object(K.jsxs)("div", {
                                                    style: {
                                                        marginLeft: 20
                                                    },
                                                    children: [Object(K.jsx)("div", {
                                                        style: {
                                                            fontWeight: 600,
                                                            fontSize: 15
                                                        },
                                                        children: e.coin
                                                    }), Object(K.jsx)("div", {
                                                        className: "opacity-06",
                                                        children: e.fullName
                                                    })]
                                                })]
                                            }), Object(K.jsxs)(Bt.a.Column, {
                                                verticalAlign: "middle",
                                                className: "text-bold",
                                                onClick: function(a) {
                                                    a.target.className.includes("button") || t.push("/portfolio/".concat(e.coin))
                                                },
                                                children: [Object(K.jsx)("small", {
                                                    children: "$"
                                                }), Object(B.formatMoney)(e.usdPrice)]
                                            }), Object(K.jsxs)(Bt.a.Column, {
                                                verticalAlign: "middle",
                                                style: {
                                                    color: e.color,
                                                    fontWeight: 600
                                                },
                                                onClick: function(a) {
                                                    a.target.className.includes("button") || t.push("/portfolio/".concat(e.coin))
                                                },
                                                children: [Object(B.formatShortAmount)(e.amount), " ", Object(K.jsx)("br", {}), 0 !== e.blockedAmount && Object(K.jsx)("p", {
                                                    style: {
                                                        opacity: .8,
                                                        color: "grey",
                                                        fontWeight: 300
                                                    },
                                                    children: Object(B.formatShortAmount)(e.blockedAmount)
                                                })]
                                            }), Object(K.jsxs)(Bt.a.Column, {
                                                textAlign: "right",
                                                className: "d-flex-es",
                                                width: 5,
                                                children: [Object(K.jsx)(b.a, {
                                                    onClick: function() {
                                                        return t.push("/deposit/" + e.coin)
                                                    },
                                                    className: "submit-btn custom-btn",
                                                    disabled: !e.depositEnable,
                                                    type: "button",
                                                    style: {
                                                        zIndex: 1e3
                                                    },
                                                    children: j.DEPOSIT
                                                }), Object(K.jsx)(b.a, {
                                                    onClick: function() {
                                                        return t.push("/withdraw/" + e.coin)
                                                    },
                                                    disabled: !e.withdrawEnable,
                                                    variant: "outlined",
                                                    type: "button",
                                                    className: "custom-btn",
                                                    children: j.WITHDRAW
                                                })]
                                            })]
                                        }), Object(K.jsx)(Bt.a.Row, {
                                            only: "mobile tablet",
                                            onClick: function(a) {
                                                a.target.className.includes("button") || t.push("/portfolio/".concat(e.coin))
                                            },
                                            children: Object(K.jsxs)(Bt.a.Column, {
                                                textAlign: "left",
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between"
                                                },
                                                children: [Object(K.jsxs)(Bt.a.Column, {
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    width: 8,
                                                    children: [Object(K.jsx)(d.a, {
                                                        src: "".concat(Z, "/coins/").concat(e.coin.replace(" ", "_"), ".png")
                                                    }), Object(K.jsxs)("div", {
                                                        style: {
                                                            marginLeft: 20
                                                        },
                                                        children: [Object(K.jsx)("div", {
                                                            style: {
                                                                fontWeight: 600,
                                                                fontSize: 15
                                                            },
                                                            children: e.coin
                                                        }), Object(K.jsxs)("div", {
                                                            children: ["$", Object(B.formatMoney)(e.usdPrice)]
                                                        }), 0 !== e.blockedAmount && Object(K.jsx)("p", {
                                                            style: {
                                                                opacity: .8,
                                                                color: "grey"
                                                            },
                                                            children: Object(B.formatShortAmount)(e.blockedAmount)
                                                        })]
                                                    })]
                                                }), Object(K.jsxs)(Bt.a.Column, {
                                                    width: 8,
                                                    children: [Object(K.jsx)("div", {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        children: Object(K.jsx)("small", {
                                                            children: j.BALANCE
                                                        })
                                                    }), Object(K.jsxs)("div", {
                                                        style: {
                                                            textAlign: "right",
                                                            color: e.color,
                                                            fontWeight: 600
                                                        },
                                                        children: [Object(B.formatShortAmount)(e.amount), " ", e.coin]
                                                    })]
                                                })]
                                            })
                                        })]
                                    }, a)
                                })), Object(K.jsx)(Bt.a.Row, {
                                    columns: "equal",
                                    children: Object(K.jsx)(E.a, {
                                        style: {
                                            width: "100%"
                                        }
                                    })
                                }), Object(K.jsx)(Bt.a.Row, {
                                    columns: "equal",
                                    style: {
                                        justifyContent: "center"
                                    },
                                    children: Object(K.jsx)(b.a, {
                                        style: {
                                            width: 300
                                        },
                                        onClick: function() {
                                            return S(!v)
                                        },
                                        variant: "text",
                                        children: v ? j.SHOW_LESS : j.SHOW_MORE
                                    })
                                })]
                            })
                        })]
                    })
                },
                qa = function() {
                    return function(e) {
                        Oe("/fund-service/fund/list", (function(t) {
                            t.sort((function(e, t) {
                                return t.usdAmount - e.usdAmount
                            })), e({
                                type: w,
                                payload: t
                            })
                        }))
                    }
                },
                $a = function() {
                    return function(e) {
                        re() && Oe("/fund-service/fund/list", (function(t) {
                            t.sort((function(e, t) {
                                return t.usdAmount - e.usdAmount
                            })), e({
                                type: w,
                                payload: t
                            }), e({
                                type: P,
                                payload: t
                            }), clearInterval(Va), X && (Va = setInterval(qa, 1e4, e))
                        }))
                    }
                },
                Xa = function(e) {
                    var t = e.page,
                        a = void 0 === t ? 1 : t,
                        n = e.pageSize,
                        c = void 0 === n ? 10 : n,
                        i = e.coin,
                        s = e.from,
                        r = void 0 === s ? 0 : s,
                        l = e.to,
                        o = void 0 === l ? 0 : l;
                    return function(e) {
                        he("/swap-service/transaction/list", {
                            page: a,
                            pageSize: c,
                            coin: i,
                            from: r,
                            to: o
                        }, (function(t) {
                            e({
                                type: L,
                                payload: t
                            })
                        }), (function(e) {
                            return console.log(e)
                        }))
                    }
                },
                Qa = function(e) {
                    var t = e.page,
                        a = void 0 === t ? 1 : t,
                        n = e.pageSize,
                        c = void 0 === n ? 10 : n,
                        i = e.coin,
                        s = e.from,
                        r = void 0 === s ? 0 : s,
                        l = e.to,
                        o = void 0 === l ? 0 : l,
                        d = e.status,
                        u = void 0 === d ? "" : d;
                    return function(e) {
                        he("/fund-service/withdraw/list", {
                            page: a,
                            pageSize: c,
                            coin: i,
                            from: r,
                            to: o,
                            status: u
                        }, (function(t) {
                            e({
                                type: W,
                                payload: t
                            })
                        }), (function(e) {
                            return console.log(e)
                        }))
                    }
                },
                Za = function(e) {
                    var t = e.page,
                        a = void 0 === t ? 1 : t,
                        n = e.pageSize,
                        c = void 0 === n ? 10 : n,
                        i = e.coin,
                        s = e.from,
                        r = void 0 === s ? 0 : s,
                        l = e.to,
                        o = void 0 === l ? 0 : l;
                    return function(e) {
                        he("/fund-service/deposit/list", {
                            coin: i,
                            from: r,
                            to: o,
                            pageSize: c,
                            page: a
                        }, (function(t) {
                            e({
                                type: M,
                                payload: t
                            })
                        }), (function(e) {
                            return console.log(e)
                        }))
                    }
                },
                Ja = function() {
                    return function(e) {
                        Oe("/swap-service/product", (function(t) {
                            console.log(t), e({
                                type: F,
                                payload: t
                            })
                        }), (function(e) {
                            return console.log(e)
                        }))
                    }
                };
            a(698);
            var en = function(e) {
                var t = e.fund,
                    a = e.coin,
                    n = Object(l.k)(),
                    c = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library;
                return Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsxs)("div", {
                        className: "coin-logo mt-20",
                        style: {
                            textAlign: "center"
                        },
                        children: [Object(K.jsx)(d.a, {
                            src: "".concat(Z, "/coins/").concat(a.replace(" ", "_"), ".png"),
                            centered: !0,
                            onClick: function() {
                                return n.push("/portfolio/".concat(a))
                            },
                            style: {
                                cursor: "pointer",
                                margin: "auto",
                                width: 100,
                                height: 100
                            }
                        }), Object(K.jsxs)("div", {
                            vertical: !0,
                            basic: !0,
                            children: [Object(K.jsx)("div", {
                                children: Object(K.jsxs)("h1", {
                                    style: {
                                        color: t.color
                                    },
                                    children: [Object(B.formatAmount)(t.amount), " ", Object(K.jsx)("small", {
                                        translate: "no",
                                        children: t.coin
                                    })]
                                })
                            }), Object(K.jsx)("div", {
                                children: Object(K.jsxs)(da.a, {
                                    children: ["~", Object(B.formatUSD)(t.usdAmount), Object(K.jsx)("small", {
                                        children: "$"
                                    })]
                                })
                            })]
                        })]
                    }), Object(K.jsxs)("div", {
                        className: "mt-10 mb-20",
                        style: {
                            textAlign: "center"
                        },
                        children: [Object(K.jsx)(b.a, {
                            onClick: function() {
                                return n.push("/deposit/".concat(t.coin))
                            },
                            className: n.location.pathname.includes("deposit") ? "active" : "",
                            children: c.DEPOSIT
                        }), Object(K.jsx)(b.a, {
                            onClick: function() {
                                return n.push("/withdraw/".concat(t.coin))
                            },
                            className: n.location.pathname.includes("withdraw") ? "active" : "",
                            children: c.WITHDRAW
                        })]
                    })]
                })
            };

            function tn(e) {
                var t, a = e.data,
                    c = (e.coin, Object(n.useState)(!1)),
                    i = Object(o.a)(c, 2),
                    s = i[0],
                    r = i[1],
                    l = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    d = a.time,
                    u = parseInt((Date.now() - d) / 1e3),
                    j = Math.floor(u / 24 / 60 / 60),
                    b = Math.floor(u - 86400 * j),
                    O = Math.floor(b / 3600),
                    h = Math.floor(b - 3600 * O),
                    m = Math.floor(h / 60);
                t = parseInt(j) > 0 ? Object(B.formatDate)(d) : O > 0 ? O + " " + l.HOURS_AGO : m > 0 ? m + " " + l.MINUTES_AGO : "1 " + l.MINUTES_AGO;
                var f, x, p = null,
                    g = null;
                switch (a.amount > 0 ? (f = "+ " + Object(B.formatAmount)(a.amount), x = "color-primary") : (f = "- " + Object(B.formatAmount)(a.amount), x = "color-secondary"), a.type) {
                    case "SAFE_LUS_TRANSACTION":
                        p = Object(K.jsx)(V.a, {
                            name: "share alternate"
                        });
                        break;
                    case "TRANSACTION":
                        p = Object(K.jsx)(V.a, {
                            name: "sign-in",
                            rotated: "clockwise"
                        });
                        break;
                    case "EASY_BUY":
                        p = Object(K.jsx)(V.a, {
                            name: "exchange"
                        });
                        break;
                    case "WITHDRAW":
                        p = Object(K.jsx)(V.a, {
                            name: "paper plane outline"
                        }), g = "CONFIRMED" === a.status ? Object(K.jsx)("small", {
                            size: "small",
                            children: l.COMPLETED
                        }) : Object(K.jsx)("small", {
                            size: "small",
                            children: l[a.status]
                        });
                        break;
                    case "DEPOSIT":
                        p = Object(K.jsx)(V.a, {
                            name: "sign-in",
                            rotated: "clockwise"
                        });
                        break;
                    case "REDEEM":
                        p = Object(K.jsx)(V.a, {
                            name: "chart line"
                        });
                        break;
                    case "SWAP":
                        p = Object(K.jsx)(V.a, {
                            name: "refresh"
                        });
                        break;
                    default:
                        p = Object(K.jsx)(V.a, {
                            name: "chart line"
                        })
                }
                return Object(K.jsx)(K.Fragment, {
                    children: Object(K.jsxs)("div", {
                        className: "history-item",
                        onClick: function() {
                            return r(!s)
                        },
                        children: [Object(K.jsxs)("div", {
                            className: "left",
                            children: [Object(K.jsxs)("div", {
                                className: "type",
                                children: [Object(K.jsx)("div", {
                                    children: p
                                }), Object(K.jsx)("div", {
                                    children: l[a.type]
                                })]
                            }), Object(K.jsx)("div", {
                                children: Object(K.jsx)("small", {
                                    children: t
                                })
                            })]
                        }), Object(K.jsxs)("div", {
                            className: "right text-bold",
                            children: [g, Object(K.jsx)("div", {
                                className: x,
                                children: f
                            })]
                        })]
                    })
                })
            }
            var an = function() {
                var e, t = Object(l.m)().coin,
                    a = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    c = a.wallet,
                    i = (a.setting.library, Object(l.k)()),
                    s = c.fundList,
                    r = Object(n.useState)(null),
                    d = Object(o.a)(r, 2),
                    j = d[0],
                    b = d[1];
                if (Object(n.useEffect)((function() {
                        re() || i.push("/")
                    }), [i]), s.length > 0) {
                    var O = s.filter((function(e) {
                        return e.coin === t
                    }))[0];
                    O ? e = O : i.push("/")
                }
                return Object(n.useEffect)((function() {
                    re() && he("/fund-service/fund/log", {
                        page: 1,
                        pageSize: 10,
                        filters: {
                            coin: t
                        }
                    }, (function(e) {
                        return b(e)
                    }))
                }), [t]), e ? Object(K.jsxs)(u.a, {
                    id: "portfolio",
                    maxWidth: "md",
                    children: [Object(K.jsx)(en, {
                        coin: t,
                        fund: e
                    }), Object(K.jsx)("div", {
                        className: "p-20 p-minus",
                        children: Object(K.jsx)("div", {
                            style: {
                                minHeight: 300
                            },
                            className: "transaction-history",
                            children: j && j.items.length > 0 ? j.items.map((function(t, a) {
                                return Object(K.jsx)(Be.a, {
                                    className: "pl-10 pr-10 mb-10",
                                    style: {
                                        paddingTop: 15,
                                        paddingBottom: 15
                                    },
                                    vertical: !0,
                                    children: Object(K.jsx)(tn, {
                                        data: t,
                                        coin: e
                                    })
                                }, a)
                            })) : null
                        })
                    })]
                }) : null
            };
            var nn = function(e) {
                var t = e.coin,
                    a = e.network,
                    c = Object(n.useState)(null),
                    i = Object(o.a)(c, 2),
                    s = i[0],
                    r = i[1],
                    l = Object(n.useState)(!0),
                    d = Object(o.a)(l, 2),
                    u = d[0],
                    j = d[1],
                    b = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    O = b.COIN_TOKEN,
                    h = b.NETWORK,
                    m = Object(n.useState)(!0),
                    f = Object(o.a)(m, 2),
                    x = f[0],
                    p = f[1],
                    g = Object(n.useState)(!0),
                    E = Object(o.a)(g, 2),
                    v = E[0],
                    S = E[1];
                return Object(n.useEffect)((function() {
                    return v && (j(!0), Oe("/fund-service/address?coin=".concat(t, "&network=").concat(a), (function(e) {
                            p(!0), j(!1), r(e)
                        }), (function(e) {
                            "DEPOSIT_DISABLE" === e.code && (p(!1), j(!1))
                        }))),
                        function() {
                            return S(!v)
                        }
                }), [t, v, a]), u ? Object(K.jsx)(Vt.a, {
                    basic: !0,
                    children: Object(K.jsx)(Ea.a, {
                        active: !0
                    })
                }) : x ? s && s.addressTag ? Object(K.jsxs)(Vt.a, {
                    loading: u,
                    vertical: !0,
                    children: [Object(K.jsxs)(da.a, {
                        as: "h5",
                        translate: "no",
                        children: [O, ": ", t, " - ", h, ": ", a]
                    }), Object(K.jsxs)(Bt.a, {
                        children: [Object(K.jsxs)(Bt.a.Column, {
                            computer: 8,
                            tablet: 16,
                            mobile: 8,
                            children: [Object(K.jsx)(ea.a, {
                                src: "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=" + s.address,
                                size: "small",
                                className: "Logo",
                                centered: !0
                            }), Object(K.jsx)("br", {}), Object(K.jsx)(ta.a, {
                                content: "Copied",
                                on: "click",
                                basic: !0,
                                position: "bottom center",
                                hideOnScroll: !0,
                                trigger: Object(K.jsxs)("p", {
                                    style: {
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        cursor: "pointer"
                                    },
                                    onClick: function() {
                                        return navigator.clipboard.writeText(s.address)
                                    },
                                    children: [s.address, Object(K.jsx)(V.a, {
                                        name: "copy outline"
                                    })]
                                })
                            })]
                        }), Object(K.jsxs)(Bt.a.Column, {
                            computer: 8,
                            tablet: 16,
                            mobile: 8,
                            children: [Object(K.jsx)(ea.a, {
                                src: "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=" + s.addressTag,
                                size: "small",
                                className: "Logo",
                                centered: !0
                            }), Object(K.jsx)("br", {}), Object(K.jsx)(ta.a, {
                                content: "Copied",
                                on: "click",
                                basic: !0,
                                position: "bottom center",
                                hideOnScroll: !0,
                                trigger: Object(K.jsxs)("p", {
                                    style: {
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        cursor: "pointer"
                                    },
                                    onClick: function() {
                                        return navigator.clipboard.writeText(s.addressTag)
                                    },
                                    children: [s.addressTag, Object(K.jsx)(V.a, {
                                        name: "copy outline"
                                    })]
                                })
                            })]
                        })]
                    })]
                }) : s ? Object(K.jsxs)(Vt.a, {
                    loading: u,
                    vertical: !0,
                    children: [Object(K.jsxs)(da.a, {
                        as: "h5",
                        children: [O, ": ", t, " - ", h, ": ", a]
                    }), Object(K.jsx)(ea.a, {
                        src: "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=" + s.address,
                        size: "small",
                        className: "Logo",
                        centered: !0
                    }), Object(K.jsx)("br", {}), s && Object(K.jsx)(ta.a, {
                        content: "Copied",
                        on: "click",
                        basic: !0,
                        position: "bottom center",
                        hideOnScroll: !0,
                        trigger: Object(K.jsxs)("p", {
                            style: {
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                cursor: "pointer"
                            },
                            onClick: function() {
                                return navigator.clipboard.writeText(s.address)
                            },
                            children: [s.address, Object(K.jsx)(V.a, {
                                name: "copy outline"
                            })]
                        })
                    })]
                }) : Object(K.jsx)(Vt.a, {
                    basic: !0,
                    children: b.DEPOSIT_DISABLE
                }) : Object(K.jsx)(Vt.a, {
                    basic: !0,
                    children: b.DEPOSIT_DISABLE
                })
            };
            var cn = function(e) {
                var t = e.data;
                return t.txId ? Object(K.jsxs)("div", {
                    children: [ie(t), " ", Object(K.jsx)(ta.a, {
                        content: "Copied",
                        on: "click",
                        basic: !0,
                        position: "bottom center",
                        hideOnScroll: !0,
                        trigger: Object(K.jsx)("div", {
                            style: {
                                cursor: "pointer",
                                display: "inline-block"
                            },
                            onClick: function() {
                                return navigator.clipboard.writeText(t.txId)
                            },
                            children: Object(K.jsx)(V.a, {
                                name: "copy outline",
                                style: {
                                    fontSize: "1em",
                                    marginLeft: 2
                                }
                            })
                        })
                    })]
                }) : null
            };
            var sn = function(e) {
                var t = e.data;
                return Object(K.jsx)(ta.a, {
                    content: "Copied",
                    on: "click",
                    basic: !0,
                    position: "bottom center",
                    hideOnScroll: !0,
                    trigger: Object(K.jsxs)("div", {
                        style: {
                            cursor: "pointer",
                            display: "inline-block"
                        },
                        onClick: function() {
                            return navigator.clipboard.writeText(t.address)
                        },
                        children: [Object(B.formatAddress)(t.address), Object(K.jsx)(V.a, {
                            name: "copy outline",
                            style: {
                                fontSize: "1em",
                                marginLeft: 2
                            }
                        }), Object(K.jsx)("br", {}), Object(K.jsx)("small", {
                            children: t.addressTag && "Memo: " + Object(B.formatAddress)(t.addressTag)
                        })]
                    })
                })
            };

            function rn(e) {
                var t = e.selectedItem,
                    a = e._close,
                    n = e._handleCancel,
                    c = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library;
                return Object(K.jsx)(m.a, {
                    anchor: "top",
                    open: t,
                    className: "custom-modal-vk",
                    children: Object(K.jsxs)(Be.a, {
                        style: {
                            maxWidth: 450,
                            minWidth: 300,
                            padding: 20
                        },
                        children: [Object(K.jsxs)("div", {
                            children: [Object(K.jsxs)(ze.a, {
                                children: ["#", t && t.id, " -", " ", Object(K.jsx)("small", {
                                    children: c[t && t.status]
                                })]
                            }), Object(K.jsx)(V.a, {
                                name: "x",
                                style: {
                                    position: "absolute",
                                    right: 10,
                                    top: 10,
                                    cursor: "pointer"
                                },
                                size: "large",
                                onClick: a,
                                inverted: !0,
                                color: "grey"
                            })]
                        }), Object(K.jsxs)("div", {
                            style: {
                                wordBreak: "break-all"
                            },
                            children: [Object(K.jsx)("div", {
                                style: {
                                    opacity: .6
                                },
                                children: c.AMOUNT
                            }), Object(K.jsxs)("div", {
                                style: {
                                    textAlign: "right"
                                },
                                children: [t && Object(B.formatAmount)(t.amount), " ", t && t.coin]
                            }), Object(K.jsx)("div", {
                                style: {
                                    opacity: .6
                                },
                                children: c.FEE
                            }), Object(K.jsxs)("div", {
                                style: {
                                    textAlign: "right"
                                },
                                children: [t && Object(B.formatAmount)(t.fee), " ", t && t.coin]
                            }), Object(K.jsx)("div", {
                                style: {
                                    opacity: .6
                                },
                                children: c.ADDRESS
                            }), Object(K.jsx)("div", {
                                style: {
                                    textAlign: "right"
                                },
                                children: t && t.address
                            }), t && t.addressTag && Object(K.jsxs)(K.Fragment, {
                                children: [Object(K.jsx)("div", {
                                    style: {
                                        opacity: .6
                                    },
                                    children: "Memo"
                                }), Object(K.jsx)("div", {
                                    style: {
                                        textAlign: "right"
                                    },
                                    children: t && t.addressTag
                                })]
                            }), Object(K.jsx)("div", {
                                style: {
                                    opacity: .6
                                },
                                children: c.TYPE
                            }), Object(K.jsxs)("div", {
                                style: {
                                    textAlign: "right"
                                },
                                children: [" ", c[t && t.type], " -", " ", t && t.network]
                            }), t && t.txId && Object(K.jsxs)(K.Fragment, {
                                children: [Object(K.jsx)("div", {
                                    style: {
                                        opacity: .6
                                    },
                                    children: "Hash"
                                }), Object(K.jsx)("div", {
                                    style: {
                                        textAlign: "right"
                                    },
                                    children: t && t.txId
                                })]
                            }), Object(K.jsx)("div", {
                                style: {
                                    opacity: .6
                                },
                                children: c.TIME
                            }), Object(K.jsx)("div", {
                                style: {
                                    textAlign: "right"
                                },
                                children: Object(B.formatTime)(t && t.time)
                            })]
                        }), Object(K.jsx)("div", {
                            style: {
                                textAlign: "right",
                                marginTop: 20
                            },
                            children: t && ("WAITING_CONFIRM" === t.status || "PENDING" === t.status) && Object(K.jsx)(b.a, {
                                onClick: function() {
                                    return n(t.id)
                                },
                                variant: "outlined",
                                color: "default",
                                children: c.CANCEL
                            })
                        })]
                    })
                })
            }
            var ln = function(e) {
                var t = e.data,
                    a = e._handleCancel,
                    c = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    i = Object(n.useState)(null),
                    s = Object(o.a)(i, 2),
                    r = s[0],
                    l = s[1];
                return Object(K.jsxs)("div", {
                    className: "show-mobile",
                    children: [t && t.items.map((function(e, t) {
                        return Object(K.jsxs)(j.a, {
                            container: !0,
                            justify: "space-between",
                            spacing: 2,
                            className: "pl-10 pr-10",
                            onClick: function() {
                                return l(e)
                            },
                            style: {
                                cursor: "pointer"
                            },
                            alignItems: "center",
                            children: [Object(K.jsxs)(j.a, {
                                item: !0,
                                children: [Object(K.jsxs)(j.a, {
                                    container: !0,
                                    justify: "flex-start",
                                    alignItems: "center",
                                    children: [Object(K.jsx)(j.a, {
                                        item: !0,
                                        children: Object(K.jsx)(d.a, {
                                            src: "".concat(Z, "/coins/").concat(e.coin.replace(" ", "_"), ".png"),
                                            style: {
                                                width: 25,
                                                height: 25,
                                                marginRight: 5
                                            }
                                        })
                                    }), Object(K.jsx)(j.a, {
                                        id: !0,
                                        children: Object(K.jsxs)(ze.a, {
                                            className: "text-bold",
                                            children: [Object(B.formatAmount)(e.amount), " ", e.coin]
                                        })
                                    })]
                                }), Object(K.jsx)("small", {
                                    className: "opacity-06",
                                    children: Object(B.formatTime)(e.time)
                                })]
                            }), Object(K.jsxs)(j.a, {
                                item: !0,
                                style: {
                                    textAlign: "right"
                                },
                                children: [Object(K.jsx)("div", {
                                    children: c[e.status]
                                }), Object(K.jsxs)("small", {
                                    className: "opacity-06",
                                    children: [c[e.type], " - ", e.network]
                                })]
                            }), Object(K.jsx)(j.a, {
                                container: !0,
                                children: Object(K.jsx)(j.a, {
                                    item: !0,
                                    xs: 12,
                                    children: Object(K.jsx)(E.a, {
                                        style: {
                                            marginBottom: 8
                                        }
                                    })
                                })
                            })]
                        }, t)
                    })), Object(K.jsx)(rn, {
                        selectedItem: r,
                        _close: function() {
                            return l(null)
                        },
                        _handleCancel: function(e) {
                            l(null), a(e)
                        }
                    })]
                })
            };
            var on = function(e) {
                var t = e.tableName,
                    a = e.columns,
                    c = e.actions,
                    i = e._fetchFunction,
                    s = e._handleCancel,
                    r = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    l = r.setting,
                    d = r.wallet,
                    u = l.library,
                    O = Object(n.useState)(1),
                    h = Object(o.a)(O, 2),
                    m = h[0],
                    f = h[1],
                    x = Object(n.useState)(10),
                    p = Object(o.a)(x, 2),
                    g = p[0],
                    E = p[1],
                    v = Object(y.useDispatch)(),
                    S = d[t];
                return Object(n.useEffect)((function() {
                    v(i({
                        page: m,
                        pageSize: g
                    }))
                }), [m, g]), Object(K.jsxs)(K.Fragment, {
                    children: ["swapHistory" === t && Object(K.jsx)("div", {
                        className: "show-mobile swap-mobile-history",
                        children: S && (S.items.length > 0 ? S.items.map((function(e, t) {
                            return Object(K.jsxs)(j.a, {
                                container: !0,
                                className: "item",
                                children: [Object(K.jsxs)(j.a, {
                                    item: !0,
                                    textAlign: "left",
                                    xs: 6,
                                    children: [Object(K.jsxs)("div", {
                                        className: "id",
                                        children: ["#", e.id]
                                    }), Object(K.jsx)("div", {
                                        className: "time",
                                        children: Object(B.formatTime)(e.time)
                                    })]
                                }), Object(K.jsxs)(j.a, {
                                    item: !0,
                                    className: "text-right",
                                    xs: 6,
                                    children: [Object(K.jsxs)("div", {
                                        className: "base",
                                        children: ["- ", Object(B.formatAmount)(e.amount), " ", e.base]
                                    }), Object(K.jsxs)("div", {
                                        className: "quote color-green",
                                        children: ["+ ", Object(B.formatAmount)(e.total), " ", e.quote]
                                    }), Object(K.jsxs)("small", {
                                        children: [u.FEE, ": ", Object(B.formatAmount)(e.fee), " ", e.base]
                                    })]
                                })]
                            }, t)
                        })) : u.lengthNO_RECORDS_FOUND)
                    }), ("depositHistory" === t || "withdrawHistory" === t) && Object(K.jsx)(ln, {
                        data: S,
                        _handleCancel: s
                    }), Object(K.jsx)(yt.a, {
                        children: Object(K.jsxs)(St.a, {
                            size: "small",
                            "aria-label": "custom pagination table",
                            children: [Object(K.jsx)(_t.a, {
                                className: "hide-mobile",
                                children: Object(K.jsxs)(At.a, {
                                    children: [a.map((function(e) {
                                        return Object(K.jsx)(Nt.a, {
                                            children: e.text
                                        }, e.key)
                                    })), c && Object(K.jsx)(Nt.a, {})]
                                })
                            }), Object(K.jsx)(Tt.a, {
                                className: "hide-mobile",
                                children: S && (0 !== S.itemCount ? S.items.map((function(e, t) {
                                    return Object(K.jsxs)(At.a, {
                                        children: [a.map((function(t) {
                                            var a = t.isAddress,
                                                n = t.isHash,
                                                c = t.isSub,
                                                i = t.key,
                                                s = t.isTime,
                                                r = t.isAmount,
                                                l = t.isHighLight,
                                                o = t.isCoin,
                                                d = t.isBase,
                                                j = t.isQuote,
                                                b = "",
                                                O = e[t.key],
                                                h = "";
                                            return "id" === i && (O = "#" + O), c && (O = u[O]), a && (O = Object(K.jsx)(sn, {
                                                data: e
                                            })), n && (O = Object(K.jsx)(cn, {
                                                data: e
                                            })), s && (O = Object(B.formatTime)(O)), r && (O = Object(B.formatAmount)(O)), l && (h += " text-bold"), o && (b = e.coin), d && (b = e.base), j && (b = e.quote), Object(K.jsxs)(Nt.a, {
                                                className: h,
                                                children: [O, " ", b || null]
                                            }, t.key + e.index)
                                        })), c && Object(K.jsx)(Nt.a, {
                                            children: c.map((function(t) {
                                                return t.condition.includes(e[t.conditionField]) ? Object(K.jsx)(b.a, {
                                                    style: {
                                                        width: 100,
                                                        height: 30
                                                    },
                                                    onClick: function() {
                                                        return t._handle(e.id)
                                                    },
                                                    color: "default",
                                                    variant: "outlined",
                                                    children: t.text
                                                }, t.key) : null
                                            }))
                                        })]
                                    }, t)
                                })) : Object(K.jsx)(At.a, {
                                    children: Object(K.jsx)(Nt.a, {
                                        colSpan: a.length,
                                        children: u.NO_RECORDS_FOUND
                                    })
                                }))
                            })]
                        })
                    }), Object(K.jsx)(It.a, {
                        component: "div",
                        rowsPerPageOptions: [5, 10, 25, 50, 100],
                        colSpan: a.length,
                        count: S ? S.itemCount : 0,
                        rowsPerPage: g,
                        page: m - 1,
                        SelectProps: {
                            inputProps: {
                                "aria-label": "rows per page"
                            },
                            native: !0
                        },
                        onChangePage: function(e, t) {
                            f(t + 1)
                        },
                        onChangeRowsPerPage: function(e) {
                            E(parseInt(e.target.value, 10)), f(1)
                        }
                    })]
                })
            };
            var dn = function(e) {
                    e.coin;
                    var t = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library;
                    return Object(K.jsx)(on, {
                        _fetchFunction: Za,
                        tableName: "depositHistory",
                        columns: [{
                            key: "time",
                            text: t.TIME,
                            isTime: !0
                        }, {
                            key: "amount",
                            text: t.AMOUNT,
                            isAmount: !0,
                            isCoin: !0
                        }, {
                            key: "address",
                            text: t.ADDRESS,
                            isAddress: !0
                        }, {
                            key: "txId",
                            text: "Tx Hash",
                            isHash: !0
                        }]
                    })
                },
                un = a(240),
                jn = a.n(un);
            var bn = function() {
                    var e = Object(l.m)().coin,
                        t = Object(y.useSelector)((function(e) {
                            return e
                        })),
                        a = t.wallet,
                        c = t.api,
                        i = t.user,
                        s = t.setting,
                        r = a.fundList,
                        d = r.find((function(t) {
                            return t.coin === e
                        })),
                        O = Object(n.useState)(null),
                        h = Object(o.a)(O, 2),
                        m = h[0],
                        f = h[1],
                        x = Object(n.useState)(null),
                        p = Object(o.a)(x, 2),
                        g = p[0],
                        E = p[1],
                        v = Object(l.k)();
                    Object(n.useEffect)((function() {
                        re() || v.push("/")
                    }), [v]), Object(n.useEffect)((function() {
                        if (d) {
                            var t = [];
                            d.networks.forEach((function(a) {
                                t.push({
                                    menuItem: a.network,
                                    render: function() {
                                        return Object(K.jsx)(nn, {
                                            coin: e,
                                            network: a.network
                                        })
                                    }
                                })
                            })), e !== g && (f(t), E(e))
                        }
                    }), [d, m, e, c, i.accessToken, g, E]);
                    var S = s.library,
                        _ = S.DEPOSIT_TIP_0_BEGIN,
                        A = S.DEPOSIT_TIP_0_END,
                        N = S.DEPOSIT_TIP_1,
                        T = S.DEPOSIT_TIP_2,
                        C = S.DEPOSIT_TIP_3,
                        I = S.DEPOSIT_TIP_4,
                        R = [_ + " " + e + " " + A, N, T, C, I],
                        k = [];
                    return r && r.forEach((function(t) {
                        k.push({
                            key: t.coin,
                            value: t.coin,
                            text: t.coin === e ? t.coin : t.coin + " - " + Object(B.formatAmount)(t.amount),
                            image: {
                                avatar: !0,
                                src: "".concat(Z, "/coins/").concat(t.icon)
                            }
                        })
                    })), void 0 === d && r.length > 0 && v.push("/"), Object(K.jsxs)(u.a, {
                        className: "pb-50",
                        children: [Object(K.jsxs)("div", {
                            boxShadow: 3,
                            className: "pt-20 pb-20 d-flex-sbt",
                            children: [Object(K.jsxs)(ze.a, {
                                variant: "h4",
                                children: [S.DEPOSIT, " crypto"]
                            }), Object(K.jsxs)(b.a, {
                                variant: "contained",
                                onClick: function() {
                                    return v.push("/withdraw/".concat(e))
                                },
                                className: "hide-mobile bg-white",
                                children: [S.WITHDRAW, " ", d && d.coin, " ", Object(K.jsx)(jn.a, {})]
                            })]
                        }), Object(K.jsxs)(Be.a, {
                            className: "p-20 p-minus",
                            children: [Object(K.jsxs)(j.a, {
                                container: !0,
                                justify: "space-between",
                                children: [Object(K.jsx)(j.a, {
                                    item: !0,
                                    lg: 7,
                                    md: 7,
                                    xs: 12,
                                    children: Object(K.jsxs)(Be.a, {
                                        className: "p-20",
                                        children: [Object(K.jsxs)(j.a, {
                                            container: !0,
                                            children: [Object(K.jsx)(j.a, {
                                                item: !0,
                                                xs: 12,
                                                md: 4,
                                                children: Object(K.jsx)(ze.a, {
                                                    children: S.SELECT_COIN
                                                })
                                            }), Object(K.jsx)(j.a, {
                                                item: !0,
                                                xs: 12,
                                                md: 8,
                                                children: k.length > 0 && Object(K.jsx)(ya.a, {
                                                    options: k,
                                                    selection: !0,
                                                    fluid: !0,
                                                    onChange: function(e, t) {
                                                        var a = t.value;
                                                        return v.push("/deposit/".concat(a))
                                                    },
                                                    value: v.location.pathname.replace("/deposit/", ""),
                                                    translate: "no"
                                                })
                                            })]
                                        }), Object(K.jsx)(pa.a, {
                                            panes: m,
                                            menu: {
                                                secondary: !0,
                                                pointing: !0,
                                                inverted: !1
                                            },
                                            style: {
                                                textAlign: "center"
                                            }
                                        })]
                                    })
                                }), Object(K.jsx)(j.a, {
                                    item: !0,
                                    sm: 5,
                                    xs: 12,
                                    className: "hide-mobile",
                                    children: Object(K.jsxs)("div", {
                                        className: "fastwallet-tips pl-30 p-20",
                                        children: [Object(K.jsxs)("div", {
                                            children: [Object(K.jsx)(V.a, {
                                                name: "lightbulb",
                                                size: "large"
                                            }), "Tips:"]
                                        }), Object(K.jsx)(Kt.a, {
                                            bulleted: !0,
                                            as: "ul",
                                            children: R.map((function(e, t) {
                                                return Object(K.jsx)(Kt.a.Item, {
                                                    as: "li",
                                                    className: "mb-10",
                                                    children: e
                                                }, t)
                                            }))
                                        })]
                                    })
                                })]
                            }), Object(K.jsx)(ze.a, {
                                variant: "h5",
                                className: "mb-30 mt-50",
                                children: S.DEPOSIT_HISTORY
                            }), Object(K.jsx)(dn, {
                                coin: e
                            })]
                        })]
                    })
                },
                On = (a(699), a(497)),
                hn = a.n(On);
            var mn = function(e) {
                var t = e.openConfirm,
                    a = e.amount,
                    n = e.coin,
                    c = e.address,
                    i = e.withdrawFee,
                    s = e.total,
                    r = e.addressTag,
                    l = e._onClose,
                    o = e._handleConfirm,
                    d = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library;
                return Object(K.jsx)(m.a, {
                    anchor: "left",
                    open: t,
                    className: "custom-modal-vk",
                    children: Object(K.jsxs)(Be.a, {
                        style: {
                            maxWidth: 450,
                            minWidth: 300,
                            padding: 20
                        },
                        children: [Object(K.jsxs)("div", {
                            className: "p-20",
                            children: [Object(K.jsx)(ze.a, {
                                variant: "h5",
                                children: d.WITHDRAW_CONFIRM
                            }), Object(K.jsx)(V.a, {
                                name: "x",
                                style: {
                                    position: "absolute",
                                    right: 10,
                                    top: 10,
                                    cursor: "pointer"
                                },
                                size: "large",
                                onClick: l,
                                inverted: !0,
                                color: "grey"
                            })]
                        }), Object(K.jsxs)(Be.a, {
                            className: "p-20",
                            children: [Object(K.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [Object(K.jsx)("p", {
                                    style: {
                                        opacity: .6
                                    },
                                    children: d.AMOUNT
                                }), Object(K.jsxs)("p", {
                                    children: [Object(B.formatAmount)(a), " ", n]
                                })]
                            }), Object(K.jsx)("div", {
                                children: Object(K.jsx)("p", {
                                    style: {
                                        opacity: .6,
                                        marginBottom: 15
                                    },
                                    children: d.WALLET_ADDRESS
                                })
                            }), Object(K.jsxs)("p", {
                                style: {
                                    textAlign: "right"
                                },
                                children: [c, " ", r ? "- Memo: " + r : null]
                            }), Object(K.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [Object(K.jsx)("p", {
                                    style: {
                                        opacity: .6
                                    },
                                    children: d.WITHDRAW_FEE
                                }), Object(K.jsxs)("p", {
                                    children: [Object(B.formatAmount)(i), " ", n]
                                })]
                            }), Object(K.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [Object(K.jsx)("p", {
                                    style: {
                                        opacity: .6
                                    },
                                    children: d.YOU_WILL_GET
                                }), Object(K.jsxs)("p", {
                                    children: [Object(B.formatAmount)(s), " ", n]
                                })]
                            })]
                        }), Object(K.jsx)(b.a, {
                            onClick: o,
                            className: "submit-btn mt-20",
                            type: "button",
                            fullWidth: !0,
                            children: d.CONFIRM
                        })]
                    })
                })
            };

            function fn(e) {
                var t = e.split("@");
                t[0] = t[0].slice(0, 2) + "***";
                var a = t[1].split(".");
                return a[0] = "***", a[1] = a[1].slice(0, 2) + "...", t[0] + "@" + a[0] + "." + a[1]
            }
            var xn = function(e) {
                    var t = e.open,
                        a = e.close,
                        c = e.coin,
                        i = e.network,
                        s = e.address,
                        r = e.amount,
                        l = (e.memo, e.deviceSecret),
                        d = e._handleVerification,
                        u = e.loading,
                        j = Object(y.useSelector)((function(e) {
                            return e
                        })),
                        b = j.setting,
                        O = j.user,
                        h = b.library,
                        f = O.data,
                        x = Object(n.useState)(0),
                        p = Object(o.a)(x, 2),
                        g = p[0],
                        E = p[1],
                        v = Object(n.useState)(""),
                        S = Object(o.a)(v, 2),
                        _ = S[0],
                        A = S[1],
                        N = Object(n.useState)(""),
                        T = Object(o.a)(N, 2),
                        C = T[0],
                        I = T[1],
                        R = Object(n.useState)(!1),
                        k = Object(o.a)(R, 2),
                        w = k[0],
                        P = k[1];
                    return Object(n.useEffect)((function() {
                        A(""), I(""), E(0)
                    }), [t]), Object(n.useEffect)((function() {
                        t && (g > 0 ? setTimeout((function() {
                            E(g - 1)
                        }), 1e3) : P(!1))
                    }), [g]), Object(K.jsx)(m.a, {
                        anchor: "left",
                        open: t,
                        className: "custom-modal-vk",
                        children: Object(K.jsxs)(Be.a, {
                            style: {
                                width: 350
                            },
                            children: [Object(K.jsxs)("div", {
                                className: "p-20",
                                children: [Object(K.jsx)(ze.a, {
                                    variant: "h5",
                                    children: h.VERIFICATION
                                }), Object(K.jsx)(V.a, {
                                    name: "x",
                                    style: {
                                        position: "absolute",
                                        right: 10,
                                        top: 10,
                                        cursor: "pointer"
                                    },
                                    size: "large",
                                    onClick: a,
                                    inverted: !0,
                                    color: "grey"
                                })]
                            }), Object(K.jsx)("div", {
                                className: "p-20",
                                children: Object(K.jsxs)(va.a, {
                                    children: [Object(K.jsx)(va.a.Input, {
                                        label: h.CODE_WILL_BE_SENT_TO + " " + (f ? fn(f.email) : ""),
                                        placeholder: h.EMAIL_VERIFICATION_CODE,
                                        value: _,
                                        action: Object(K.jsx)(Sa.a, {
                                            onClick: function() {
                                                P(!0), he("/fund-service/withdraw/send-otp", {
                                                    coin: c,
                                                    network: i,
                                                    address: s,
                                                    amount: r,
                                                    deviceSecret: l
                                                }, (function() {
                                                    E(59)
                                                }))
                                            },
                                            disabled: w,
                                            className: "submit-btn",
                                            children: 0 === g ? h.SEND_CODE : g + "s"
                                        }),
                                        onChange: function(e, t) {
                                            var a = t.value;
                                            return A(a)
                                        },
                                        type: "text",
                                        maxLength: 6
                                    }), Object(K.jsx)(va.a.Input, {
                                        label: h.ENTER_GA_CODE,
                                        placeholder: h.GA_CODE,
                                        value: C,
                                        onChange: function(e, t) {
                                            var a = t.value;
                                            return I(a)
                                        },
                                        type: "text",
                                        maxLength: 6
                                    }), Object(K.jsx)(Sa.a, {
                                        onClick: function() {
                                            d(_, C)
                                        },
                                        fluid: !0,
                                        className: "submit-btn",
                                        disabled: !C || !_ || u,
                                        loading: u,
                                        children: h.SUBMIT
                                    })]
                                })
                            })]
                        })
                    })
                },
                pn = a(499),
                gn = a(500),
                En = a.n(gn);
            var vn = function() {
                    var e = Object(l.k)(),
                        t = Object(y.useSelector)((function(e) {
                            return e
                        })),
                        a = t.setting,
                        c = t.wallet,
                        i = t.user,
                        s = Object(l.m)().coin,
                        r = c.fundList,
                        d = a.library,
                        u = Object(n.useState)(!1),
                        O = Object(o.a)(u, 2),
                        h = O[0],
                        f = O[1],
                        x = Object(n.useState)(null),
                        p = Object(o.a)(x, 2),
                        g = p[0],
                        v = p[1],
                        S = Object(n.useState)(null),
                        _ = Object(o.a)(S, 2),
                        A = _[0],
                        N = _[1],
                        T = Object(n.useState)(""),
                        C = Object(o.a)(T, 2),
                        I = C[0],
                        R = C[1],
                        k = Object(n.useState)(null),
                        w = Object(o.a)(k, 2),
                        P = w[0],
                        D = w[1],
                        L = Object(n.useState)(!1),
                        W = Object(o.a)(L, 2),
                        M = W[0],
                        F = W[1],
                        U = Object(n.useState)(""),
                        H = Object(o.a)(U, 2),
                        G = H[0],
                        Y = H[1],
                        z = Object(n.useState)(""),
                        q = Object(o.a)(z, 2),
                        $ = q[0],
                        X = q[1],
                        Q = Object(n.useState)(null),
                        J = Object(o.a)(Q, 2),
                        ee = J[0],
                        te = J[1],
                        ae = i.information,
                        ne = i.gaEnable,
                        ce = Object(n.useState)(!1),
                        ie = Object(o.a)(ce, 2),
                        re = ie[0],
                        le = ie[1],
                        oe = Object(n.useState)(!1),
                        ue = Object(o.a)(oe, 2),
                        je = ue[0],
                        be = ue[1],
                        me = Object(n.useState)(!1),
                        fe = Object(o.a)(me, 2),
                        xe = fe[0],
                        pe = fe[1],
                        ge = Object(n.useState)(!1),
                        Ee = Object(o.a)(ge, 2),
                        ve = Ee[0],
                        ye = Ee[1],
                        Se = Object(n.useState)(!1),
                        _e = Object(o.a)(Se, 2),
                        Ae = _e[0],
                        Ne = _e[1],
                        Te = Object(y.useDispatch)();
                    Object(n.useEffect)((function() {
                        R(""), Y(""), X(""), te(null), D(null)
                    }), [s]), Object(n.useEffect)((function() {
                        if (r) {
                            var e = r.find((function(e) {
                                return e.coin === s
                            }));
                            e && (v(e), N(e.networks[0]))
                        }
                    }), [s, r]);
                    var Ce = 0;
                    A && xe && (Ce = "LuS" === s && re ? Math.round(parseFloat(4 * Object(B.deleteText)($) / 100)) : A.withdrawFee);
                    var Ie = Math.round(parseFloat($) * Math.pow(10, 8) - Ce * Math.pow(10, 8)) / Math.pow(10, 8),
                        Re = null;
                    ae && ("VERIFIED" !== ae.verifyStatusLv2 ? Re = d.USER_NOT_VERIFIED : ne || (Re = d.PLEASE_ENABLE_GA));
                    var ke = [];
                    r && r.forEach((function(e, t) {
                        ke.push({
                            key: e.coin,
                            value: e.coin,
                            text: e.coin === s ? e.coin : e.coin + " - " + Object(B.formatAmount)(e.amount),
                            image: {
                                avatar: !0,
                                src: "".concat(Z, "/coins/").concat(e.icon)
                            }
                        })
                    }));
                    var we = [];
                    g && g.networks.forEach((function(e) {
                        we.push({
                            key: e.network,
                            value: e.network,
                            text: e.network
                        })
                    }));
                    var Pe = function(e) {
                        D(null), f(!0), pe(!1), Object(dt.checkEmpty)(I) ? (D(d.PLEASE_ENTER_WALLET_ADDRESS), f(!1)) : Oe("/fund-service/address/validate?address=".concat(I, "&network=").concat(A.network), (function(t) {
                            var a = t.result,
                                n = t.transferType;
                            a ? (pe(!0), le("EXTERNAL" === n), e && (0 === $.trim().length || 0 === parseFloat($) ? te(d.PLEASE_ENTER_AMOUNT_WITHDRAW) : Ie <= 0 || $ < A.minimumWithdraw ? te(d.WITHDRAW_AMOUNT_TOO_SMALL) : Ie > g.amount ? te(d.UNAVAILABLE_BALANCE) : (te(null), be(!0)))) : D(d.INVALID_WALLET_ADDRESS), f(!1)
                        }), (function() {
                            f(!1), D(d.INVALID_WALLET_ADDRESS)
                        }))
                    };
                    return g ? Object(K.jsxs)(K.Fragment, {
                        children: [Object(K.jsxs)("form", {
                            onSubmit: function(e) {
                                e.preventDefault(), Pe(!0)
                            },
                            children: [Object(K.jsxs)(j.a, {
                                container: !0,
                                style: {
                                    height: g.withdrawEnable ? 500 : "auto"
                                },
                                children: [Object(K.jsx)(j.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 4,
                                    children: Object(K.jsx)(ze.a, {
                                        children: d.SELECT_COIN
                                    })
                                }), Object(K.jsx)(j.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 8,
                                    children: Object(K.jsx)(ya.a, {
                                        options: ke,
                                        selection: !0,
                                        fluid: !0,
                                        onChange: function(t, a) {
                                            var n = a.value;
                                            return e.push("/withdraw/".concat(n))
                                        },
                                        value: e.location.pathname.replace("/withdraw/", ""),
                                        translate: "no",
                                        className: "mb-10"
                                    })
                                }), g.withdrawEnable ? Object(K.jsxs)(K.Fragment, {
                                    children: [Object(K.jsx)(j.a, {
                                        item: !0,
                                        xs: 12,
                                        children: Object(K.jsx)("br", {})
                                    }), Object(K.jsx)(j.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 4,
                                        children: Object(K.jsx)(ze.a, {
                                            children: d.WITHDRAW_TO
                                        })
                                    }), Object(K.jsxs)(j.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 8,
                                        children: [Object(K.jsxs)("div", {
                                            style: {
                                                position: "relative"
                                            },
                                            children: [Object(K.jsx)(ia, {
                                                label: d.ADDRESS,
                                                placeholder: d.PLEASE_ENTER_WALLET_ADDRESS,
                                                onChange: function(e) {
                                                    return R(e.target.value)
                                                },
                                                value: I,
                                                maxLength: "128",
                                                onBlur: function() {
                                                    return Pe(!1)
                                                },
                                                fullWidth: !0
                                            }), Object(K.jsx)(V.a, {
                                                name: "qrcode",
                                                onClick: function() {
                                                    return F(!0)
                                                },
                                                link: !0,
                                                style: {
                                                    position: "absolute",
                                                    top: -5,
                                                    right: 0,
                                                    height: "100%",
                                                    alignItems: "center",
                                                    display: "flex",
                                                    fontSize: 20
                                                }
                                            })]
                                        }), Object(K.jsx)("small", {
                                            className: "error-message",
                                            children: P
                                        }), Object(K.jsx)("div", {
                                            className: "mt-10 opacity-06",
                                            children: d.CHOOSE_NETWORK
                                        }), we && Object(K.jsx)(ya.a, {
                                            options: we,
                                            selection: !0,
                                            onChange: function(e, t) {
                                                var a = t.value,
                                                    n = g.networks.find((function(e) {
                                                        return e.network === a
                                                    }));
                                                N(n)
                                            },
                                            value: A.network,
                                            translate: "no",
                                            fluid: !0,
                                            className: "mb-10"
                                        }), A.hasAddressTag && Object(K.jsxs)(K.Fragment, {
                                            children: [Object(K.jsx)(ia, {
                                                label: "MEMO",
                                                placeholder: d.OPTION,
                                                value: G,
                                                onChange: function(e, t) {
                                                    var a = t.value;
                                                    Y(a)
                                                },
                                                type: "text",
                                                maxLength: "128",
                                                fullWidth: !0
                                            }), Object(K.jsx)("small", {
                                                children: d.MEMO_NOTE
                                            })]
                                        })]
                                    }), Object(K.jsx)(j.a, {
                                        item: !0,
                                        xs: 12,
                                        children: Object(K.jsx)("br", {})
                                    }), Object(K.jsx)(j.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 4,
                                        children: Object(K.jsx)(ze.a, {
                                            children: d.WITHDRAW_AMOUNT
                                        })
                                    }), Object(K.jsxs)(j.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 8,
                                        children: [Object(K.jsx)("div", {
                                            style: {
                                                position: "relative"
                                            },
                                            children: Object(K.jsx)(ia, {
                                                label: d.AMOUNT,
                                                placeholder: d.MINIMUM + ": " + A.minimumWithdraw + " " + s,
                                                value: $,
                                                onChange: function(e) {
                                                    var t = e.target.value;
                                                    "." === t && (e.target.value = "");
                                                    var a = t.indexOf(".");
                                                    a > 0 && (t.replace(".", ""), e.target.value = t.substring(0, a + 1) + t.substring(a, t.length).replace(/\./g, "").substring(0, 8)),
                                                        function(e) {
                                                            X(Object(B.deleteText)(e.target.value))
                                                        }(e)
                                                },
                                                type: "text",
                                                fullWidth: !0
                                            })
                                        }), Object(K.jsxs)("small", {
                                            className: "text-right",
                                            children: [d.AVAILABLE, ": ", Object(B.formatAmount)(g.amount), " ", s]
                                        }), Object(K.jsx)("small", {
                                            className: "error-message",
                                            children: ee
                                        })]
                                    }), Object(K.jsx)(j.a, {
                                        item: !0,
                                        xs: 12,
                                        children: Object(K.jsx)("br", {})
                                    }), Object(K.jsx)(j.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 4,
                                        children: Object(K.jsx)(ze.a, {
                                            children: d.RECEIVE_AMOUNT
                                        })
                                    }), Object(K.jsxs)(j.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 6,
                                        children: [Object(K.jsxs)(ze.a, {
                                            variant: "h5",
                                            children: [Object(B.formatAmount)(Ie), " ", s]
                                        }), Object(K.jsxs)("small", {
                                            children: ["Fee: ", Object(B.formatAmount)(A.withdrawFee), " ", s]
                                        })]
                                    }), Object(K.jsx)(j.a, {
                                        item: !0,
                                        xs: 12,
                                        md: 2,
                                        children: !Re && Object(K.jsx)(b.a, {
                                            color: "inherit",
                                            fullWidth: !0,
                                            disabled: h || Re,
                                            type: "submit",
                                            children: d.WITHDRAW
                                        })
                                    })]
                                }) : Object(K.jsx)(j.a, {
                                    item: !0,
                                    xs: 12,
                                    children: Object(K.jsxs)("div", {
                                        className: "pt-50 pb-20",
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: [Object(K.jsx)(En.a, {
                                            color: "disabled",
                                            fontSize: "large",
                                            className: "mr-10",
                                            style: {
                                                fontSize: 100
                                            }
                                        }), Object(K.jsx)(ze.a, {
                                            variant: "h5",
                                            color: "disable",
                                            children: d.WITHDRAW_DISABLE
                                        })]
                                    })
                                })]
                            }), Re && Object(K.jsxs)(K.Fragment, {
                                children: [Object(K.jsx)(E.a, {
                                    className: "mt-10 mb-20"
                                }), Object(K.jsxs)(ze.a, {
                                    className: "color-secondary",
                                    children: ["Tips: ", Re]
                                })]
                            })]
                        }), Object(K.jsx)(m.a, {
                            anchor: "left",
                            open: M,
                            className: "custom-modal-vk",
                            children: Object(K.jsxs)(Be.a, {
                                className: "p-20",
                                children: [Object(K.jsx)(ze.a, {
                                    children: d.SCAN_QR_CODE
                                }), Object(K.jsx)("div", {
                                    children: Object(K.jsx)(hn.a, {
                                        delay: 300,
                                        onError: function(e) {
                                            return console.log(e)
                                        },
                                        onScan: function(e) {
                                            e && (R(e), F(!1))
                                        },
                                        style: {
                                            width: 300,
                                            margin: "2em 0"
                                        },
                                        facingMode: "environment"
                                    })
                                }), Object(K.jsx)("div", {
                                    className: "text-right",
                                    children: Object(K.jsx)(b.a, {
                                        type: "button",
                                        onClick: function() {
                                            return F(!1)
                                        },
                                        variant: "outlined",
                                        children: d.CLOSE
                                    })
                                })]
                            })
                        }), Object(K.jsx)(mn, {
                            openConfirm: je,
                            amount: $,
                            withdrawFee: Ce,
                            coin: s,
                            total: Ie,
                            address: I,
                            addressTag: G,
                            _onClose: function() {
                                return be(!1)
                            },
                            _handleConfirm: function() {
                                be(!1), ye(!0)
                            }
                        }), Object(K.jsx)(xn, {
                            open: ve,
                            close: function() {
                                return ye(!1)
                            },
                            coin: s,
                            network: A.network,
                            address: I,
                            amount: Ie,
                            deviceSecret: de(),
                            _handleVerification: function(e, t) {
                                Ne(!0), he("/fund-service/withdraw", {
                                    coin: s,
                                    network: A.network,
                                    address: I,
                                    amount: Ie,
                                    deviceSecret: de(),
                                    gaCode: t,
                                    otpCode: e,
                                    addressTag: "" === G.trim ? null : G
                                }, (function() {
                                    Ne(!1), te(null), X(""), R(""), ye(!1), Te(Qa(1)), Te($a()), Object(pn.confirmAlert)({
                                        title: "",
                                        overlayClassName: "sdfsd",
                                        message: Object(K.jsx)("div", {
                                            className: "d-flex-cbt",
                                            children: Object(K.jsxs)("div", {
                                                style: {
                                                    textAlign: "center",
                                                    width: "100%"
                                                },
                                                children: [Object(K.jsx)("img", {
                                                    src: "".concat(Z, "/withdraw-success.png"),
                                                    style: {
                                                        width: 150,
                                                        margin: "15px auto"
                                                    }
                                                }), Object(K.jsx)("h3", {
                                                    className: "m-0 up",
                                                    children: d.WITHDRAW_SUCCESSFUL
                                                }), Object(K.jsx)("div", {
                                                    children: Object(K.jsxs)("span", {
                                                        className: "font-size-15 d-flex-ec",
                                                        children: [Object(B.formatAmount)(Ie), Object(K.jsx)("span", {
                                                            style: {
                                                                marginLeft: "2px",
                                                                opacity: .4,
                                                                fontSize: "1.2rem"
                                                            },
                                                            children: s
                                                        })]
                                                    })
                                                }), Object(K.jsxs)("div", {
                                                    style: {
                                                        width: "100%",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        marginTop: "20px"
                                                    },
                                                    children: [Object(K.jsx)("span", {
                                                        className: "p-10",
                                                        children: d.ADDRESS
                                                    }), Object(K.jsx)("span", {
                                                        className: "p-10",
                                                        style: {
                                                            maxWidth: 200,
                                                            textAlign: "right",
                                                            whiteSpace: "pre-wrap",
                                                            wordBreak: "break-word"
                                                        },
                                                        children: I
                                                    })]
                                                })]
                                            })
                                        }),
                                        buttons: [{
                                            label: "OK",
                                            onClick: function() {
                                                R(""), Y(""), X("")
                                            }
                                        }]
                                    })
                                }), (function(e) {
                                    se("error", d[e.code]), f(!1), Ne(!1)
                                }))
                            },
                            memo: G,
                            loading: Ae
                        })]
                    }) : Object(K.jsx)(Ea.a, {
                        active: !0,
                        inverted: !0
                    })
                },
                yn = a(22).useSelector,
                Sn = a(54).useParams;
            var _n = function() {
                    var e = yn((function(e) {
                            return e
                        })),
                        t = e.setting,
                        a = e.wallet,
                        n = Sn().coin,
                        c = a.fundList,
                        i = t.library,
                        s = [i.WITHDRAW_TIP_0, i.WITHDRAW_TIP_2],
                        r = [];
                    return c && c.forEach((function(e, t) {
                        r.push({
                            key: e.coin,
                            value: e.coin,
                            text: e.coin === n ? e.coin : e.coin + " - " + Object(B.formatAmount)(e.amount),
                            image: {
                                avatar: !0,
                                src: "".concat(Z, "/coins/").concat(e.icon)
                            }
                        })
                    })), Object(K.jsxs)(j.a, {
                        container: !0,
                        className: "mt-20 mb-20",
                        children: [Object(K.jsx)(j.a, {
                            item: !0,
                            sm: 7,
                            xs: 12,
                            children: Object(K.jsx)(Be.a, {
                                elevation: 3,
                                className: "p-20",
                                children: Object(K.jsx)(vn, {})
                            })
                        }), Object(K.jsx)(j.a, {
                            item: !0,
                            sm: 5,
                            xs: 12,
                            className: "hide-mobile pl-20",
                            children: Object(K.jsxs)("div", {
                                className: "spwallet-tips",
                                children: [Object(K.jsxs)("div", {
                                    children: [Object(K.jsx)(V.a, {
                                        name: "lightbulb",
                                        size: "large"
                                    }), "Tips:"]
                                }), Object(K.jsx)(Kt.a, {
                                    bulleted: !0,
                                    as: "ul",
                                    children: s.map((function(e, t) {
                                        return Object(K.jsx)(Kt.a.Item, {
                                            as: "li",
                                            className: "mb-10",
                                            children: e
                                        }, t)
                                    }))
                                })]
                            })
                        })]
                    })
                },
                An = a(793);
            var Nn = function() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    t = Object(y.useDispatch)(),
                    a = Object(n.useState)(null),
                    c = Object(o.a)(a, 2),
                    i = c[0],
                    s = c[1];
                return Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)(ze.a, {
                        variant: "h5",
                        className: "mb-30 mt-50",
                        children: e.WITHDRAW_HISTORY
                    }), Object(K.jsx)(on, {
                        _fetchFunction: Qa,
                        tableName: "withdrawHistory",
                        columns: [{
                            key: "time",
                            text: e.TIME,
                            isTime: !0
                        }, {
                            key: "amount",
                            text: e.AMOUNT,
                            isAmount: !0,
                            isCoin: !0
                        }, {
                            key: "address",
                            text: e.ADDRESS,
                            isAddress: !0
                        }, {
                            key: "txId",
                            text: "Tx Hash",
                            isHash: !0
                        }, {
                            key: "type",
                            text: e.TYPE,
                            isSub: !0
                        }, {
                            key: "status",
                            text: e.STATUS,
                            isSub: !0
                        }],
                        actions: [{
                            key: "cancel",
                            text: e.CANCEL,
                            _handle: function(e) {
                                return s(e)
                            },
                            condition: ["WAITING_CONFIRM", "PENDING"],
                            conditionField: "status"
                        }],
                        _handleCancel: function(e) {
                            return s(e)
                        }
                    }), Object(K.jsx)(An.a, {
                        open: null !== i,
                        onCancel: function() {
                            return s(null)
                        },
                        onConfirm: function() {
                            fe("/fund-service/withdraw/".concat(i), {}, (function() {
                                s(null), se("success", e.CANCEL_WITHDRAW), t(Qa({
                                    page: 1,
                                    pageSize: 10
                                })), t($a())
                            }))
                        },
                        header: e.ARE_YOU_SURE_CANCEL_WITHDRAW + " #" + i,
                        cancelButton: e.CANCEL,
                        confirmButton: e.CONFIRM,
                        size: "small",
                        className: "fastwallet-animation"
                    })]
                })
            };
            var Tn = function() {
                    var e = Object(y.useSelector)((function(e) {
                            return e
                        })),
                        t = e.wallet,
                        a = e.setting,
                        c = Object(l.m)().coin,
                        i = t.fundList,
                        s = Object(l.k)(),
                        r = i.find((function(e) {
                            return e.coin === c
                        })),
                        o = a.library;
                    return Object(n.useEffect)((function() {
                        void 0 === r && i.length > 0 && s.push("/assets")
                    }), [r, i.length, s]), Object(K.jsxs)(u.a, {
                        className: "pb-50",
                        children: [Object(K.jsxs)("div", {
                            className: "d-flex-sbt pt-20 pb-20",
                            children: [Object(K.jsxs)(ze.a, {
                                variant: "h4",
                                children: [o.WITHDRAW, " crypto"]
                            }), Object(K.jsxs)(b.a, {
                                variant: "contained",
                                onClick: function() {
                                    return s.push("/deposit/".concat(c))
                                },
                                className: "hide-mobile bg-white",
                                children: [o.DEPOSIT, " ", r && r.coin, " ", Object(K.jsx)(jn.a, {})]
                            })]
                        }), Object(K.jsxs)(Be.a, {
                            elevation: 0,
                            className: "p-20 p-minus",
                            children: [Object(K.jsx)(_n, {}), Object(K.jsx)(Nn, {})]
                        })]
                    })
                },
                Cn = a(794),
                In = a(795),
                Rn = ["onChange"];
            var kn = function(e) {
                var t = e.onChange,
                    a = Object(na.a)(e, Rn);
                return Object(K.jsx)(ia, Object(aa.a)(Object(aa.a)({}, a), {}, {
                    onChange: function(e) {
                        var a = e.target.value;
                        "." === a && (e.target.value = "");
                        var n = a.indexOf(".");
                        n > 0 && (a.replace(".", ""), e.target.value = a.substring(0, n + 1) + a.substring(n, a.length).replace(/\./g, "").substring(0, 8)), t(e)
                    },
                    type: "text"
                }))
            };
            a(704);
            var wn = function() {
                var e = Object(y.useSelector)((function(e) {
                    return e
                })).setting.library;
                return Object(K.jsxs)("div", {
                    className: "token-information",
                    children: [Object(K.jsx)("img", {
                        src: "https://cashpickup.net/assets/images/logo.png",
                        className: "token-logo"
                    }), Object(K.jsxs)(ze.a, {
                        variant: "body1",
                        className: "mt-20 mb-10",
                        children: ["CPU (Crypto Payment Universal) is a token based on TRON's TRC20 digital platform with low transaction cost and high transaction speed.", " "]
                    }), Object(K.jsx)(b.a, {
                        variant: "outlined",
                        onClick: function() {
                            return window.open("https://cashpickup.net/")
                        },
                        children: e.LEAR_MORE.toUpperCase()
                    })]
                })
            };
            var Pn = function(e) {
                var t = e.coins,
                    a = e.changeBase,
                    c = e.close,
                    i = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    s = i.wallet,
                    r = i.setting,
                    l = s.fundList,
                    u = Object(n.useState)(t),
                    j = Object(o.a)(u, 2),
                    b = j[0],
                    O = j[1],
                    h = r.library;
                return Object(K.jsxs)(Be.a, {
                    style: {
                        width: "50vw",
                        maxWidth: 420,
                        minWidth: 300
                    },
                    className: "select-coin p-20",
                    vertical: !0,
                    children: [Object(K.jsxs)(Bt.a, {
                        columns: 2,
                        className: "mb-10",
                        children: [Object(K.jsx)(Bt.a.Column, {
                            children: Object(K.jsx)(da.a, {
                                children: h.SELECT_A_TOKEN
                            })
                        }), Object(K.jsx)(Bt.a.Column, {
                            textAlign: "right",
                            children: Object(K.jsx)(V.a, {
                                name: "x",
                                link: !0,
                                style: {
                                    fontSize: "1.3em"
                                },
                                onClick: c
                            })
                        })]
                    }), Object(K.jsx)(ia, {
                        fullWidth: !0,
                        placeholder: "Search token",
                        onChange: function(e, a) {
                            var n = a.value;
                            O(t.filter((function(e) {
                                return e.value.toLowerCase().includes(n.toLowerCase())
                            })))
                        },
                        inverted: !0,
                        className: "search-coin-input"
                    }), Object(K.jsxs)("div", {
                        style: {
                            maxHeight: "50vh",
                            minHeight: "50vh",
                            overflow: "auto"
                        },
                        children: [b.map((function(e, t) {
                            var n = l.length > 0 ? l.filter((function(t) {
                                return t.coin === e.value
                            }))[0] : {
                                coin: e.value,
                                fullName: "",
                                amount: 0
                            };
                            return Object(K.jsxs)("div", {
                                className: "item",
                                onClick: function() {
                                    return a(e.value)
                                },
                                children: [Object(K.jsxs)("div", {
                                    className: "item",
                                    children: [Object(K.jsx)(d.a, {
                                        src: "".concat(Z, "/coins/").concat(e.value, ".png"),
                                        className: "coin-logo"
                                    }), Object(K.jsxs)("div", {
                                        children: [Object(K.jsx)("div", {
                                            className: "symbol",
                                            children: n.coin
                                        }), Object(K.jsx)("div", {
                                            className: "full-name",
                                            children: n.fullName
                                        })]
                                    })]
                                }), Object(K.jsxs)("div", {
                                    children: [Object(K.jsx)("div", {
                                        className: "symbol text-right",
                                        children: Object(B.formatShortAmount)(n.amount)
                                    }), Object(K.jsx)("div", {
                                        className: "full-name",
                                        style: {
                                            textAlign: "right"
                                        },
                                        children: h.AVAILABLE
                                    })]
                                })]
                            }, t)
                        })), 0 === b.length && Object(K.jsx)("div", {
                            style: {
                                padding: "0 1em"
                            },
                            children: h.NO_RECORDS_FOUND
                        })]
                    })]
                })
            };

            function Dn(e) {
                var t = e._handleClose,
                    a = e._handleSwap,
                    c = e.quote,
                    i = e.base,
                    s = e.amount,
                    r = e.price,
                    l = e.fee,
                    d = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    u = Object(n.useState)(30),
                    j = Object(o.a)(u, 2),
                    O = j[0],
                    h = j[1],
                    m = Object(y.useDispatch)(),
                    f = d.RATIO,
                    x = d.SWAP_FEE,
                    p = d.SWAP_CONFIRM,
                    g = d.YOU_WILL_GET,
                    E = d.CONFIRM;
                return Object(n.useEffect)((function() {
                    return m(Ja())
                }), [m]), Object(n.useEffect)((function() {
                    var e = setInterval((function() {
                        h(O - 1)
                    }), 1e3);
                    return 0 === O && clearInterval(e),
                        function() {
                            return clearInterval(e)
                        }
                }), [O]), Object(K.jsxs)(Be.a, {
                    style: {
                        minWidth: 300,
                        textAlign: "center"
                    },
                    className: "fastwallet-container p-20",
                    children: [Object(K.jsxs)("div", {
                        className: "mb-20",
                        children: [Object(K.jsx)(ze.a, {
                            variant: "h5",
                            children: p
                        }), Object(K.jsx)(V.a, {
                            name: "x",
                            style: {
                                position: "absolute",
                                right: 10,
                                top: 10,
                                cursor: "pointer"
                            },
                            size: "large",
                            onClick: t,
                            color: "grey"
                        })]
                    }), Object(K.jsxs)(Be.a, {
                        children: [Object(K.jsx)("div", {
                            children: g
                        }), Object(K.jsxs)(ze.a, {
                            variant: "h5",
                            className: "pt-20 pb-20",
                            children: [Object(B.formatAmount)(parseFloat(s * r)), " ", c]
                        }), Object(K.jsxs)(Be.a, {
                            className: "p-20",
                            children: [Object(K.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "1em"
                                },
                                children: [Object(K.jsxs)("div", {
                                    children: [d.FROM, ": "]
                                }), Object(K.jsxs)("div", {
                                    children: [Object(B.formatAmount)(parseFloat(s)), " ", i]
                                })]
                            }), Object(K.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "1em"
                                },
                                children: [Object(K.jsxs)("div", {
                                    children: [f, ":"]
                                }), Object(K.jsxs)("div", {
                                    children: ["1 ", i, " = ", Object(B.formatAmount)(r), " ", c]
                                })]
                            }), Object(K.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [Object(K.jsxs)("div", {
                                    children: [x, ":"]
                                }), Object(K.jsxs)("div", {
                                    children: [l, " ", i]
                                })]
                            })]
                        })]
                    }), Object(K.jsxs)(b.a, {
                        className: "submit-btn mt-20",
                        fullWidth: !0,
                        disabled: !O,
                        onClick: a,
                        children: [E, " (", O, "s)"]
                    })]
                })
            }
            var Ln = function() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })),
                    t = e.wallet,
                    a = e.setting.library,
                    c = t.swapProduct,
                    i = Object(n.useState)("USDT"),
                    s = Object(o.a)(i, 2),
                    r = s[0],
                    O = s[1],
                    h = Object(n.useState)("CPU"),
                    f = Object(o.a)(h, 2),
                    x = f[0],
                    p = f[1],
                    g = Object(y.useDispatch)(),
                    E = Object(n.useState)([]),
                    v = Object(o.a)(E, 2),
                    S = v[0],
                    _ = v[1],
                    A = Object(n.useState)([]),
                    N = Object(o.a)(A, 2),
                    T = N[0],
                    C = N[1],
                    I = Object(n.useState)(0),
                    R = Object(o.a)(I, 2),
                    k = R[0],
                    w = R[1],
                    P = Object(n.useState)(0),
                    D = Object(o.a)(P, 2),
                    L = D[0],
                    W = D[1],
                    M = Object(n.useState)(null),
                    F = Object(o.a)(M, 2),
                    U = F[0],
                    H = F[1],
                    G = Object(n.useState)(!1),
                    Y = Object(o.a)(G, 2),
                    z = (Y[0], Y[1]),
                    q = t.fundList,
                    $ = Object(n.useState)(!1),
                    X = Object(o.a)($, 2),
                    Q = X[0],
                    J = X[1],
                    ee = Object(n.useState)(!1),
                    te = Object(o.a)(ee, 2),
                    ae = te[0],
                    ne = te[1],
                    ce = Object(n.useState)(!1),
                    ie = Object(o.a)(ce, 2),
                    le = ie[0],
                    oe = ie[1],
                    de = Object(l.k)(),
                    ue = function(e) {
                        ne(!1);
                        var t = [],
                            a = [];
                        H(null), c.forEach((function(n, c) {
                            t.findIndex((function(e) {
                                return e.value === n.base
                            })) < 0 && t.push({
                                key: c,
                                value: n.base,
                                text: n.base
                            }), n.base === e && a.push({
                                key: c,
                                value: n.quote,
                                text: Object(K.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: 70
                                    },
                                    children: [Object(K.jsx)(ea.a, {
                                        src: "".concat(Z, "/coins/").concat(n.quote, ".png"),
                                        style: {
                                            width: 20,
                                            height: 20
                                        }
                                    }), n.quote]
                                })
                            })
                        })), _(t), C(a), O(e);
                        var n = x;
                        a.findIndex((function(e) {
                            return e.value === x
                        })) < 0 && (p(a[0].value), n = a[0].value);
                        var i = c.find((function(t) {
                            return t.base === e && t.quote === n
                        }));
                        W(i.price * k)
                    },
                    je = c.find((function(e) {
                        return e.base === r && e.quote === x
                    }));
                Object(n.useEffect)((function() {
                    0 === c.length ? g(Ja()) : ue(r)
                }), [c, g]);
                var be = q && q.find((function(e) {
                    return e.coin === r
                }));
                return Object(K.jsxs)(K.Fragment, {
                    children: [Object(K.jsx)("div", {
                        className: "swap-form",
                        style: {
                            marginBottom: 200
                        },
                        children: Object(K.jsx)(u.a, {
                            children: Object(K.jsxs)(j.a, {
                                container: !0,
                                alignItems: "center",
                                justify: "space-between",
                                children: [Object(K.jsx)(j.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 6,
                                    className: "h-500",
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center"
                                    },
                                    children: "CPU" === r || "CPU" === x ? Object(K.jsx)(wn, {}) : Object(K.jsxs)(K.Fragment, {
                                        children: [Object(K.jsx)(ze.a, {
                                            variant: "h4",
                                            className: "mb-10",
                                            children: "Swap Crypto \u2026"
                                        }), Object(K.jsxs)(ze.a, {
                                            className: "mb-50",
                                            children: ["All coins and tokens, available in", " ", Object(K.jsx)("span", {
                                                translate: "no",
                                                children: "GUSD Stablecoins"
                                            })]
                                        })]
                                    })
                                }), Object(K.jsx)(j.a, {
                                    item: !0,
                                    xs: 12,
                                    md: 5,
                                    children: Object(K.jsxs)(Be.a, {
                                        className: "pt-50 pb-20 pl-20 pr-20 p-minus",
                                        style: {
                                            marginBottom: -200
                                        },
                                        children: [Object(K.jsx)(Be.a, {
                                            children: Object(K.jsxs)(j.a, {
                                                container: !0,
                                                className: "pb-10 pt-10 mb-30",
                                                justify: "space-evenly",
                                                children: [Object(K.jsxs)(j.a, {
                                                    item: !0,
                                                    className: "d-flex-cc",
                                                    children: [Object(K.jsx)(d.a, {
                                                        src: "".concat(Z, "/coins/").concat(r, ".png"),
                                                        style: {
                                                            marginRight: 10
                                                        }
                                                    }), Object(K.jsx)(ze.a, {
                                                        variant: "h5",
                                                        children: "1"
                                                    })]
                                                }), Object(K.jsx)(j.a, {
                                                    item: !0,
                                                    children: Object(K.jsx)(Cn.a, {
                                                        fontSize: "large"
                                                    })
                                                }), Object(K.jsxs)(j.a, {
                                                    item: !0,
                                                    className: "d-flex-cc",
                                                    children: [Object(K.jsx)(ze.a, {
                                                        variant: "h5",
                                                        children: je && Object(B.formatAmount)(je.price)
                                                    }), Object(K.jsx)(d.a, {
                                                        src: "".concat(Z, "/coins/").concat(x, ".png"),
                                                        style: {
                                                            marginLeft: 10
                                                        }
                                                    })]
                                                })]
                                            })
                                        }), Object(K.jsxs)("form", {
                                            error: !0,
                                            onSubmit: function(e) {
                                                e.preventDefault(), re() ? (H(null), Object(dt.checkEmpty)(k) ? H("PLEASER_ENTER_BASE_AMOUNT") : k < je.minAmount ? H("BASE_AMOUNT_GREATER_MIN") : k > be.amount ? H("UNAVAILABLE_BALANCE") : (g(Ja()), J(!0))) : de.push("/login?return=swap")
                                            },
                                            children: [Object(K.jsxs)("div", {
                                                style: {
                                                    position: "relative"
                                                },
                                                className: "mb-10",
                                                children: [Object(K.jsx)(kn, {
                                                    placeholder: a.PLEASE_ENTER_AMOUNT,
                                                    value: k,
                                                    onChange: function(e) {
                                                        var t = e.target.value;
                                                        t = Object(B.deleteText)(t), w(t), W(t > 0 ? Object(B.formatRoundAmount)(parseFloat(t) * je.price) : 0)
                                                    },
                                                    fullWidth: !0,
                                                    size: "medium",
                                                    label: a.SWAP
                                                }), Object(K.jsxs)("div", {
                                                    className: "select-coin",
                                                    onClick: function() {
                                                        return ne(!0)
                                                    },
                                                    children: [Object(K.jsx)("div", {
                                                        children: r
                                                    }), Object(K.jsx)(In.a, {})]
                                                })]
                                            }), Object(K.jsxs)("div", {
                                                className: "text-right mb-10",
                                                children: [Object(K.jsxs)("span", {
                                                    className: "opacity-06",
                                                    children: [a.AVAILABLE, ":"]
                                                }), " ", be ? Object(B.formatAmount)(be.amount) : 0, " ", r]
                                            }), Object(K.jsxs)("div", {
                                                style: {
                                                    position: "relative"
                                                },
                                                children: [Object(K.jsx)(kn, {
                                                    fullWidth: !0,
                                                    placeholder: a.PLEASE_ENTER_AMOUNT,
                                                    value: L,
                                                    onChange: function(e) {
                                                        var t = e.target.value;
                                                        t = Object(B.deleteText)(t), W(t), w(t ? Object(B.formatRoundAmount)(parseFloat(t) / je.price).toString() : 0)
                                                    },
                                                    size: "medium",
                                                    label: a.RECEIVE
                                                }), Object(K.jsxs)("div", {
                                                    className: "select-coin",
                                                    onClick: function() {
                                                        return oe(!0)
                                                    },
                                                    children: [Object(K.jsx)("div", {
                                                        children: x
                                                    }), Object(K.jsx)(In.a, {})]
                                                })]
                                            }), Object(K.jsx)(Jt.a, {
                                                error: !0,
                                                content: Object(K.jsxs)("div", {
                                                    style: {
                                                        display: "flex"
                                                    },
                                                    children: [Object(K.jsx)(V.a, {
                                                        name: "x",
                                                        size: "small",
                                                        circular: !0,
                                                        inverted: !0,
                                                        className: "error-icon",
                                                        style: {
                                                            display: null === U ? "none" : "block"
                                                        }
                                                    }), a[U], "\xa0"]
                                                }),
                                                floating: !0,
                                                style: {
                                                    backgroundColor: "transparent",
                                                    border: "none",
                                                    color: "#fe644e",
                                                    boxShadow: "none",
                                                    paddingLeft: 0,
                                                    paddingRight: 0
                                                }
                                            }), Object(K.jsxs)(b.a, {
                                                className: "submit-btn",
                                                type: "submit",
                                                fullWidth: !0,
                                                size: "medium",
                                                variant: "outlined",
                                                children: [!re() && a.LOGIN_FOR, " ", a.SWAP]
                                            })]
                                        }), Object(K.jsxs)("div", {
                                            className: "mt-20",
                                            children: [Object(K.jsxs)("div", {
                                                style: {
                                                    textAlign: "right"
                                                },
                                                children: [Object(K.jsxs)("span", {
                                                    className: "opacity-06",
                                                    children: [a.MINIMUM, ": "]
                                                }), je && je.minAmount, " ", r]
                                            }), Object(K.jsxs)("div", {
                                                style: {
                                                    textAlign: "right"
                                                },
                                                children: [Object(K.jsxs)("span", {
                                                    className: "opacity-06",
                                                    children: [a.FEE, ": "]
                                                }), je && je.fee, " ", r]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    }), je && Object(K.jsx)(m.a, {
                        anchor: "left",
                        open: Q,
                        className: "custom-modal-vk",
                        children: Object(K.jsx)(Dn, {
                            _handleClose: function() {
                                return J(!1)
                            },
                            _handleSwap: function() {
                                z(!0), J(!1), he("/swap-service/swap", {
                                    base: r,
                                    quote: x,
                                    price: je.price,
                                    amount: k
                                }, (function() {
                                    se("success", a.SWAP_SUCCESS), g($a()), g(Xa({})), z(!1)
                                }), (function(e) {
                                    if ("SWAP_CPU_BELOW_MINIMUM" === e.code) {
                                        var t = e.msg;
                                        se("error", a.SWAP_CPU_BELOW_MINIMUM + " " + Object(B.formatAmount)(t) + " CPU"), z(!1)
                                    } else se("error", a[e.code]), z(!1)
                                }))
                            },
                            price: je.price,
                            fee: je.fee,
                            amount: k,
                            base: r,
                            quote: x
                        })
                    }), Object(K.jsx)(m.a, {
                        anchor: "left",
                        open: ae,
                        className: "custom-modal-vk",
                        children: Object(K.jsx)(Pn, {
                            coins: S,
                            changeBase: ue,
                            close: function() {
                                return ne(!1)
                            }
                        })
                    }), Object(K.jsx)(m.a, {
                        anchor: "left",
                        open: le,
                        className: "custom-modal-vk",
                        children: Object(K.jsx)(Pn, {
                            coins: T,
                            changeBase: function(e) {
                                oe(!1);
                                var t = c.find((function(t) {
                                    return t.base === r && t.quote === e
                                }));
                                p(e), W(t.price * k)
                            },
                            close: function() {
                                return oe(!1)
                            }
                        })
                    })]
                })
            };
            var Wn = function() {
                var e = Object(y.useSelector)((function(e) {
                    return e
                })).setting.library;
                return Object(K.jsx)(u.a, {
                    className: "swap-history",
                    children: Object(K.jsxs)(Be.a, {
                        className: "fastwallet-history p-20",
                        children: [Object(K.jsx)(ze.a, {
                            variant: "h5",
                            className: "p-20",
                            children: e.SWAP_HISTORY
                        }), Object(K.jsx)(on, {
                            _fetchFunction: Xa,
                            tableName: "swapHistory",
                            columns: [{
                                key: "id",
                                text: "",
                                isHighLight: !0
                            }, {
                                key: "amount",
                                text: e.FROM,
                                isAmount: !0,
                                isBase: !0
                            }, {
                                key: "total",
                                text: e.TO,
                                isAmount: !0,
                                isQuote: !0
                            }, {
                                key: "time",
                                text: e.TIME,
                                isTime: !0
                            }]
                        })]
                    })
                })
            };
            a(705);
            var Mn = function() {
                return Object(K.jsxs)("div", {
                    textAlign: "left",
                    id: "swap",
                    className: "pb-50",
                    children: [Object(K.jsx)(Ln, {}), re() && Object(K.jsx)(Wn, {})]
                })
            };
            var Fn = function() {
                    return Object(K.jsxs)("div", {
                        style: {
                            height: "calc(100vh - 62.63px)",
                            backgroundImage: 'url("../images/background.jpeg")',
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "fixed",
                            backgroundPosition: "50% 50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        },
                        children: [Object(K.jsx)("div", {
                            style: {
                                height: "100%",
                                width: "100%",
                                backgroundColor: "rgba(0,0,0,0.4)",
                                position: "absolute",
                                top: 0,
                                zIndex: 0
                            }
                        }), Object(K.jsx)("div", {
                            style: {
                                zIndex: 1,
                                height: 300,
                                width: 300,
                                border: "2px solid #fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50%",
                                backgroundColor: "rgba(0,0,0,0.4)",
                                boxShadow: "rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px"
                            },
                            children: Object(K.jsx)(ze.a, {
                                variant: "h4",
                                className: "color-white text-bold",
                                children: "COMING SOON"
                            })
                        })]
                    })
                },
                Un = a(796),
                Hn = a(797),
                Gn = a(798),
                Yn = a(799),
                Bn = a(800),
                zn = a(502),
                Vn = a.n(zn),
                Kn = a(501),
                qn = a.n(Kn);
            var $n = function() {
                var e = Object(l.m)().token,
                    t = Object(l.k)(),
                    a = Object(n.useState)(null),
                    c = Object(o.a)(a, 2),
                    i = c[0],
                    s = c[1],
                    r = Object(n.useState)(!0),
                    d = Object(o.a)(r, 2),
                    j = d[0],
                    O = d[1],
                    h = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library;
                return Object(n.useEffect)((function() {
                    O(!0), Oe("".concat("/user-service/user/active", "/").concat(e), (function() {
                        O(!1), s(null)
                    }), (function(e) {
                        O(!1), s(h[e.code])
                    }))
                }), [h, e]), Object(K.jsxs)("div", {
                    className: "background-no-blur",
                    children: [Object(K.jsx)(ga.a, {
                        active: j,
                        children: Object(K.jsx)(Ea.a, {
                            inverted: !0,
                            content: "Waiting ..."
                        })
                    }), !j && Object(K.jsx)(u.a, {
                        maxWidth: "xs",
                        children: Object(K.jsxs)(Un.a, {
                            className: "p-20",
                            children: [Object(K.jsxs)(Hn.a, {
                                children: [Object(K.jsx)(Gn.a, {
                                    component: "icon",
                                    alt: "Contemplative Reptile",
                                    height: "140",
                                    className: "text-center",
                                    children: i ? Object(K.jsx)(qn.a, {
                                        style: {
                                            fontSize: 100
                                        },
                                        color: "secondary"
                                    }) : Object(K.jsx)(Vn.a, {
                                        style: {
                                            fontSize: 100
                                        },
                                        color: "primary"
                                    })
                                }), Object(K.jsx)(Yn.a, {
                                    className: "mt-10 mb-10  opacity-06",
                                    children: Object(K.jsx)(ze.a, {
                                        gutterBottom: !0,
                                        variant: "h5",
                                        component: "h2",
                                        align: "center",
                                        children: i || h.ACTIVE_ACCOUNT
                                    })
                                })]
                            }), Object(K.jsx)(Bn.a, {
                                style: {
                                    justifyContent: "center"
                                },
                                children: i ? Object(K.jsx)(b.a, {
                                    color: "default",
                                    variant: "outlined",
                                    className: "w-200",
                                    onClick: function() {
                                        return t.push("/")
                                    },
                                    children: h.BACK_TO_HOMEPAGE
                                }) : Object(K.jsx)(b.a, {
                                    color: "primary",
                                    variant: "outlined",
                                    className: "w-200",
                                    onClick: function() {
                                        return t.push("/login")
                                    },
                                    children: h.LOGIN.toUpperCase()
                                })
                            })]
                        })
                    })]
                })
            };

            function Xn() {
                var e, t, a, n = navigator.userAgent,
                    c = navigator.appName,
                    i = "" + parseFloat(navigator.appVersion); - 1 !== (t = n.indexOf("Opera")) ? (c = "Opera", i = n.substring(t + 6), -1 !== (t = n.indexOf("Version")) && (i = n.substring(t + 8))) : -1 !== (t = n.indexOf("MSIE")) ? (c = "Microsoft Internet Explorer", i = n.substring(t + 5)) : -1 !== (t = n.indexOf("Chrome")) ? (c = "Chrome", i = n.substring(t + 7)) : -1 !== (t = n.indexOf("Safari")) ? (c = "Safari", i = n.substring(t + 7), -1 !== (t = n.indexOf("Version")) && (i = n.substring(t + 8))) : -1 !== (t = n.indexOf("Firefox")) ? (c = "Firefox", i = n.substring(t + 8)) : (e = n.lastIndexOf(" ") + 1) < (t = n.lastIndexOf("/")) && (c = n.substring(e, t), i = n.substring(t + 1), c.toLowerCase() === c.toUpperCase() && (c = navigator.appName)), -1 !== (a = i.indexOf(";")) && (i = i.substring(0, a)), -1 !== (a = i.indexOf(" ")) && (i = i.substring(0, a));
                var s = "Unknown OS";
                return -1 !== navigator.appVersion.indexOf("Win") && (s = "Windows"), -1 !== navigator.appVersion.indexOf("Mac") && (s = "MacOS"), -1 !== navigator.appVersion.indexOf("X11") && (s = "UNIX"), -1 !== navigator.appVersion.indexOf("Linux") && (s = "Linux"), c + " V" + i + " (" + s + ")"
            }
            var Qn = function() {
                    var e = Object(y.useSelector)((function(e) {
                            return e
                        })).setting,
                        t = Object(l.m)().token,
                        a = Object(n.useState)(""),
                        c = Object(o.a)(a, 2),
                        i = c[0],
                        s = c[1],
                        j = e.library,
                        O = Object(n.useState)(null),
                        h = Object(o.a)(O, 2),
                        m = h[0],
                        f = h[1],
                        x = Object(n.useState)(!1),
                        p = Object(o.a)(x, 2),
                        g = p[0],
                        E = p[1],
                        v = Object(n.useState)(!1),
                        S = Object(o.a)(v, 2),
                        _ = S[0],
                        A = S[1],
                        N = Object(l.k)(),
                        T = Object(n.useState)(!1),
                        C = Object(o.a)(T, 2),
                        I = C[0],
                        R = C[1],
                        k = Object(n.useState)(""),
                        w = Object(o.a)(k, 2),
                        P = w[0],
                        D = w[1];
                    return Object(K.jsx)("div", {
                        className: "login",
                        children: Object(K.jsxs)(u.a, {
                            maxWidth: "sm",
                            className: "login-form",
                            children: [Object(K.jsxs)("div", {
                                children: [Object(K.jsx)(d.a, {
                                    src: "/images/logo.png"
                                }), Object(K.jsx)(ze.a, {
                                    variant: "h4",
                                    children: j.RESET_PASSWORD.toUpperCase()
                                })]
                            }), Object(K.jsxs)("form", {
                                onSubmit: function(e) {
                                    e.preventDefault(), f(null), Object(dt.checkEmpty)(i) ? f(j.PLEASE_ENTER_PASSWORD) : Object(dt.checkLength)(i, 8) ? f(j.PLEASE_ENTER_PASSWORD_MORE_THAN) : i.length > 16 ? f(j.PLEASE_ENTER_PASSWORD_LESS_THAN) : Object(dt.checkEmpty)(P) ? f(j.PLEASE_ENTER_CONFIRM_PASSWORD) : i !== P ? f(j.CONFIRM_PASSWORD_VS_NEW_PASSWORD) : (A(!0), me("/user-service/user/reset-pwd", {
                                        token: t,
                                        password: i,
                                        device: Xn()
                                    }, (function() {
                                        se("success", j.RESET_PASSWORD_SUCCESSFUL), N.push("/login")
                                    }), (function(e) {
                                        A(!1), f(j[e.code])
                                    })))
                                },
                                noValidate: !0,
                                children: [Object(K.jsxs)("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    children: [Object(K.jsx)(it.a, {
                                        required: !0,
                                        id: "password",
                                        name: "password",
                                        label: j.NEW_PASSWORD,
                                        fullWidth: !0,
                                        placeholder: j.PLEASE_ENTER_PASSWORD,
                                        variant: "outlined",
                                        autoComplete: "on",
                                        className: "mb-20",
                                        type: g ? "input" : "password",
                                        onChange: function(e) {
                                            return s(e.target.value)
                                        }
                                    }), Object(K.jsx)(st.a, {
                                        "aria-label": "toggle password visibility",
                                        onClick: function() {
                                            return E(!g)
                                        },
                                        className: "eye-icon",
                                        children: g ? Object(K.jsx)(ut.a, {}) : Object(K.jsx)(jt.a, {})
                                    })]
                                }), Object(K.jsxs)("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    children: [Object(K.jsx)(it.a, {
                                        required: !0,
                                        id: "confirmPassword",
                                        name: "confirmPassword",
                                        label: j.CONFIRM_NEW_PASSWORD,
                                        fullWidth: !0,
                                        placeholder: j.PLEASE_ENTER_CONFIRM_PASSWORD,
                                        variant: "outlined",
                                        autoComplete: "on",
                                        className: "mb-20",
                                        type: I ? "input" : "password",
                                        onChange: function(e) {
                                            return D(e.target.value)
                                        }
                                    }), Object(K.jsx)(st.a, {
                                        "aria-label": "toggle password visibility",
                                        onClick: function() {
                                            return R(!I)
                                        },
                                        className: "eye-icon",
                                        children: I ? Object(K.jsx)(ut.a, {}) : Object(K.jsx)(jt.a, {})
                                    })]
                                }), Object(K.jsx)(rt.a, {
                                    error: m,
                                    children: Object(K.jsx)(lt.a, {
                                        children: m
                                    })
                                }), Object(K.jsx)(b.a, {
                                    fullWidth: !0,
                                    className: "submit-btn mt-30",
                                    type: "submit",
                                    disabled: _,
                                    children: _ ? Object(K.jsx)(ot.a, {
                                        color: "primary",
                                        stye: {
                                            display: "flex"
                                        }
                                    }) : Object(K.jsx)("div", {
                                        children: j.RESET_PASSWORD
                                    })
                                }), Object(K.jsx)("br", {})]
                            }), Object(K.jsx)("div", {
                                className: "login-footer",
                                children: Object(K.jsx)(r.Link, {
                                    to: "/",
                                    children: j.HOMEPAGE
                                })
                            })]
                        })
                    })
                },
                Zn = (a(706), a(503)),
                Jn = a.n(Zn);
            var ec = function() {
                var e = Object(l.m)().token,
                    t = Object(y.useSelector)((function(e) {
                        return e
                    })).setting.library,
                    a = Object(n.useState)(!1),
                    c = Object(o.a)(a, 2),
                    i = c[0],
                    s = c[1],
                    r = Object(l.k)();
                return Object(K.jsx)(K.Fragment, {
                    children: Object(K.jsx)("div", {
                        className: "background-no-blur",
                        children: Object(K.jsx)(u.a, {
                            maxWidth: "xs",
                            children: Object(K.jsxs)(Un.a, {
                                className: "p-20",
                                children: [Object(K.jsxs)(Hn.a, {
                                    children: [Object(K.jsx)(Gn.a, {
                                        component: "icon",
                                        s: !0,
                                        alt: "Contemplative Reptile",
                                        height: "140",
                                        className: "text-center",
                                        children: Object(K.jsx)(Jn.a, {
                                            style: {
                                                fontSize: 100
                                            },
                                            color: "secondary"
                                        })
                                    }), Object(K.jsx)(Yn.a, {
                                        className: "mt-10 mb-10  opacity-06",
                                        children: Object(K.jsx)(ze.a, {
                                            gutterBottom: !0,
                                            variant: "h6",
                                            component: "h2",
                                            align: "center",
                                            children: t.DISABLE_ACCOUNT_NOTE
                                        })
                                    })]
                                }), Object(K.jsxs)(Bn.a, {
                                    style: {
                                        justifyContent: "center"
                                    },
                                    children: [Object(K.jsx)(b.a, {
                                        color: "default",
                                        variant: "outlined",
                                        className: "w-200",
                                        onClick: function() {
                                            return r.push("/")
                                        },
                                        disabled: i,
                                        children: t.CANCEL.toUpperCase()
                                    }), Object(K.jsx)(b.a, {
                                        color: "secondary",
                                        variant: "outlined",
                                        className: "w-200",
                                        onClick: function() {
                                            s(!0), fe("".concat("/user-service/user/disable", "/").concat(e), {}, (function() {
                                                se("success", t.DISABLE_ACCOUNT_SUCCESS), setTimeout((function() {
                                                    r.push("/")
                                                }), 3e3)
                                            }), (function(e) {
                                                console.error(e), se("error", t[e.code]), setTimeout((function() {
                                                    r.push("/")
                                                }), 3e3)
                                            }))
                                        },
                                        disabled: i,
                                        children: i ? Object(K.jsx)(ot.a, {
                                            color: "secondary",
                                            stye: {
                                                display: "flex"
                                            }
                                        }) : Object(K.jsx)("div", {
                                            children: t.CONFIRM.toUpperCase()
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                })
            };
            a(801), a(802);
            a(707);
            var tc = a(283),
                ac = a.n(tc);
            var nc = function() {
                var e = Object(y.useSelector)((function(e) {
                        return e
                    })).user.information,
                    t = Object(n.useState)(!1),
                    a = Object(o.a)(t, 2),
                    c = (a[0], a[1], function() {
                        window.location.replace("".concat(ce, "/login?token=").concat(oe()))
                    });
                return Object(K.jsx)(K.Fragment, {
                    children: Object(K.jsx)("div", {
                        className: "login",
                        children: Object(K.jsxs)(u.a, {
                            maxWidth: "sm",
                            className: "login-form",
                            style: {
                                padding: 0
                            },
                            children: [Object(K.jsxs)("div", {
                                vertical: !0,
                                style: {
                                    borderBottom: "1px solid rgba(255,255,255, 0.12)",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: 10,
                                    width: "100%"
                                },
                                children: [Object(K.jsx)(d.a, {
                                    src: "".concat(Z, "/logo.png"),
                                    style: {
                                        width: 20,
                                        height: 20,
                                        padding: 0,
                                        margin: "unset"
                                    }
                                }), Object(K.jsx)("div", {
                                    style: {
                                        margin: "0 10px"
                                    },
                                    children: "GUSD Stablecoins"
                                }), Object(K.jsx)("small", {
                                    style: {
                                        opacity: .8
                                    },
                                    children: "Most trust and secure cryptocurrency wallet"
                                })]
                            }), Object(K.jsxs)("div", {
                                style: {
                                    width: "100%",
                                    textAlign: "center"
                                },
                                className: "p-20",
                                children: [Object(K.jsx)(d.a, {
                                    src: "".concat(Z, "/coins/CPU.png"),
                                    style: {
                                        width: 80,
                                        height: 80,
                                        padding: 0,
                                        margin: "auto",
                                        marginBottom: 10
                                    }
                                }), Object(K.jsx)(ze.a, {
                                    variant: "h5",
                                    children: "Login to SAFE CPU"
                                })]
                            }), Object(K.jsxs)("div", {
                                style: {
                                    width: "100%"
                                },
                                className: "pl-20 pr-20",
                                children: [Object(K.jsx)(E.a, {
                                    style: {
                                        backgroundColor: "rgba(255,255,255,0.12)",
                                        marginTop: 10
                                    }
                                }), Object(K.jsxs)("div", {
                                    className: "account-item",
                                    onClick: c,
                                    children: [Object(K.jsx)("div", {
                                        style: {
                                            width: 28,
                                            height: 28,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: "rgba(3, 168, 157, 0.9)",
                                            borderRadius: "50%",
                                            marginRight: "1em",
                                            color: "#fff",
                                            fontWeight: 600
                                        },
                                        children: e && e.displayName.charAt(0).toUpperCase()
                                    }), Object(K.jsxs)("div", {
                                        children: [Object(K.jsx)(ze.a, {
                                            align: "left",
                                            varian: "h6",
                                            style: {
                                                fontWeight: 600
                                            },
                                            children: e && e.displayName
                                        }), Object(K.jsx)(ze.a, {
                                            align: "left",
                                            variant: "body2",
                                            style: {
                                                opacity: .8
                                            },
                                            children: e && e.email
                                        })]
                                    })]
                                }), Object(K.jsx)(E.a, {
                                    style: {
                                        backgroundColor: "rgba(255,255,255,0.12)"
                                    }
                                }), Object(K.jsxs)("div", {
                                    vertical: !0,
                                    className: "account-item",
                                    onClick: function() {
                                        localStorage.removeItem(ee), localStorage.removeItem(ae), window.location.reload()
                                    },
                                    children: [Object(K.jsx)("div", {
                                        style: {
                                            width: 28,
                                            marginRight: "1em"
                                        },
                                        children: Object(K.jsx)(d.a, {
                                            style: {
                                                width: 28,
                                                height: 28,
                                                margin: "auto",
                                                padding: 0
                                            }
                                        })
                                    }), "Use another account"]
                                }), Object(K.jsx)(E.a, {
                                    style: {
                                        backgroundColor: "rgba(255,255,255,0.12)",
                                        marginBottom: 10
                                    }
                                })]
                            }), Object(K.jsxs)("div", {
                                className: "p-20",
                                children: [Object(K.jsx)(ze.a, {
                                    children: "Stablecoins will share"
                                }), Object(K.jsxs)(j.a, {
                                    container: !0,
                                    className: "opacity-08",
                                    children: [Object(K.jsxs)(j.a, {
                                        item: !0,
                                        xs: 6,
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "0.5em 0"
                                        },
                                        children: [Object(K.jsx)(ac.a, {
                                            style: {
                                                marginRight: "0.2em",
                                                fontWeight: 600,
                                                fill: "#03a89d"
                                            }
                                        }), " ", "Your username"]
                                    }), Object(K.jsxs)(j.a, {
                                        item: !0,
                                        xs: 6,
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "0.5em 0"
                                        },
                                        children: [Object(K.jsx)(ac.a, {
                                            style: {
                                                marginRight: "0.2em",
                                                fontWeight: 600,
                                                fill: "#03a89d"
                                            }
                                        }), " ", "Your email"]
                                    }), Object(K.jsxs)(j.a, {
                                        item: !0,
                                        xs: 6,
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "0.5em 0"
                                        },
                                        children: [Object(K.jsx)(ac.a, {
                                            style: {
                                                marginRight: "0.2em",
                                                fontWeight: 600,
                                                fill: "#03a89d"
                                            }
                                        }), " ", "Your balances"]
                                    }), Object(K.jsxs)(j.a, {
                                        item: !0,
                                        xs: 6,
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "0.5em 0"
                                        },
                                        children: [Object(K.jsx)(ac.a, {
                                            style: {
                                                marginRight: "0.2em",
                                                fontWeight: 600,
                                                fill: "#03a89d"
                                            }
                                        }), " ", "Your transactions"]
                                    })]
                                })]
                            }), Object(K.jsx)("div", {}), Object(K.jsxs)("div", {
                                className: "p-20 text-left",
                                children: [Object(K.jsx)("div", {
                                    children: " Before using this website, you can review:"
                                }), Object(K.jsx)("br", {}), Object(K.jsx)("div", {
                                    children: Object(K.jsx)("a", {
                                        href: "/documents/SAFE_CPU_DISCLAIMER.pdf",
                                        target: "_blank",
                                        style: {
                                            color: "#fff"
                                        },
                                        rel: "noreferrer",
                                        children: "1. Safe CPU\u2019s privacy policy and terms of service."
                                    })
                                }), Object(K.jsx)("div", {
                                    children: Object(K.jsx)("a", {
                                        href: "/documents/FastWallet_DISCLAIMER.pdf",
                                        target: "_blank",
                                        style: {
                                            color: "#fff"
                                        },
                                        rel: "noreferrer",
                                        children: "2. Stablecoins Disclaimer."
                                    })
                                })]
                            }), Object(K.jsx)("div", {
                                className: "p-20",
                                children: Object(K.jsx)(b.a, {
                                    fullWidth: !0,
                                    color: "inherit",
                                    onClick: c,
                                    children: "Accept"
                                })
                            })]
                        })
                    })
                })
            };
            var cc = function() {
                return re() ? Object(K.jsx)(nc, {}) : Object(K.jsx)(ft, {})
            };
            var ic = function() {
                    var e = Object(y.useDispatch)();
                    return Object(n.useEffect)((function() {
                        e(ye()), e($a())
                    }), [e]), Object(K.jsxs)(r.BrowserRouter, {
                        children: [Object(K.jsx)("div", {
                            className: "background"
                        }), Object(K.jsxs)("div", {
                            className: (re() ? "logged-in " : "") + "App",
                            children: [Object(K.jsx)(Ye, {}), Object(K.jsxs)(l.g, {
                                children: [Object(K.jsx)(l.d, {
                                    path: "/disable-account/:token",
                                    component: ec
                                }), Object(K.jsx)(l.d, {
                                    path: "/reset-password/:token",
                                    component: Qn
                                }), Object(K.jsx)(l.d, {
                                    path: "/active/:token",
                                    component: $n
                                }), Object(K.jsx)(l.d, {
                                    path: "/staking",
                                    component: Fn
                                }), Object(K.jsx)(l.d, {
                                    path: "/swap",
                                    component: Mn
                                }), Object(K.jsx)(l.d, {
                                    path: "/deposit/:coin",
                                    component: bn
                                }), Object(K.jsx)(l.d, {
                                    path: "/withdraw/:coin",
                                    component: Tn
                                }), Object(K.jsx)(l.d, {
                                    path: "/portfolio/:coin",
                                    component: an
                                }), Object(K.jsx)(l.d, {
                                    path: "/assets",
                                    component: Ka
                                }), Object(K.jsx)(l.d, {
                                    path: "/verify",
                                    component: Ua
                                }), Object(K.jsx)(l.d, {
                                    path: "/my-profile",
                                    component: fa
                                }), Object(K.jsx)(l.d, {
                                    path: "/my-affiliate",
                                    component: Yt
                                }), Object(K.jsx)(l.d, {
                                    path: "/forgot-password",
                                    component: gt
                                }), Object(K.jsx)(l.d, {
                                    path: "/register",
                                    component: pt,
                                    exact: !0
                                }), Object(K.jsx)(l.d, {
                                    path: "/register/:id",
                                    component: pt
                                }), Object(K.jsx)(l.d, {
                                    path: "/login",
                                    component: cc
                                }), Object(K.jsx)(l.d, {
                                    path: "*",
                                    component: ct
                                })]
                            })]
                        }), Object(K.jsx)(z.a, {})]
                    })
                },
                sc = function(e) {
                    e && e instanceof Function && a.e(7).then(a.bind(null, 1020)).then((function(t) {
                        var a = t.getCLS,
                            n = t.getFID,
                            c = t.getFCP,
                            i = t.getLCP,
                            s = t.getTTFB;
                        a(e), n(e), c(e), i(e), s(e)
                    }))
                },
                rc = a(282),
                lc = a(504),
                oc = (a(708), {
                    darkMode: !0,
                    library: {
                        HOMEPAGE_BANNER_HEADER: "The most trusted & secure crypto wallet",
                        HOMEPAGE_SUB_BANNER_HEADER_1: "Storing, trading, digital assets and the simplest way ",
                        HOMEPAGE_SUB_BANNER_HEADER_2: "to monitoring Crypto Currencies",
                        HOMEPAGE_STRONG_HEADER: "You deserve easy access to Crypto Currencies",
                        HOMEPAGE_STRONG_SUB_HEADER: "Stablecoins advantages",
                        HOMEPAGE_STRONG_1: "Storing BTC and Crypto currencies in minutes",
                        HOMEPAGE_STRONG_2: "Withdrawing, receiving and save Crypto Currencies fast and and simple",
                        HOMEPAGE_STRONG_3: "Swapping between crypto currencies without an exchanges",
                        HOMEPAGE_STRONG_4: "P2P trading, rapid and comfy",
                        HOMEPAGE_STRONG_5: "Make more profit when holding Digital Assets",
                        HOMEPAGE_STRONG_6: "Purchasing Crypto Currencies through Bank Account",
                        HOMEPAGE_APPLICATION_HEADER: "ANY TIME, ANY WHERE 24/7",
                        HOMEPAGE_APPLICATION_SUB_HEADER: "Stablecoins Platform and Stablecoins official website is the best way to start trading and holding digital assets.",
                        INFORMATION: "Information",
                        COMMUNITY: "Community",
                        TERM_OF_USE: "Term of service",
                        SUPPORT: "Support",
                        LOGIN: "Login",
                        REGISTER: "Register",
                        PASSWORD: "Password",
                        REFERRAL: "Referral",
                        CONFIRM: "Confirm",
                        PLEASE_ENTER_EMAIL: "Please enter your email",
                        PLEASE_ENTER_PASSWORD: "Please enter your password",
                        PLEASE_ENTER_REFERRAL: "Please enter your referral ID",
                        CREATE_NEW_ACCOUNT: "Create a new account",
                        HAVE_A_ACCOUNT: "Already have an account",
                        INVALID_EMAIL: "Email is invalid ",
                        PASSWORD_TOO_SHORT: "Password should be more than 8 character",
                        NEW_PASSWORD_TOO_SHORT: "New password should be more than 8 character",
                        EMAIL_ALREADY_EXIST: "Your register email already taken",
                        REFERRAL_NOT_EXIST: "Referral ID not exist",
                        INVALID_TOKEN: "Token is invalid",
                        TOKEN_ALREADY_USED: "Token is already used",
                        WRONG_CREDENTIALS: "Email and password are incorrect",
                        PLEASE_ENTER_EMAIL_AND_PASSWORD: "Please enter your email and password",
                        UNVERIFIED_DEVICE: "Please check email to verify this device",
                        OTP_WRONG_OR_USED: "OTP is wrong or already used",
                        PLEASE_CHECK_EMAIL_FOR_RESET_PASSWORD: "Please check your email for reset password",
                        RESET_PASSWORD_SUCCESSFUL: "Reset password successful",
                        TOKEN_EXPIRED: "Token is expired",
                        PLEASE_ENTER_WALLET_ADDRESS: "Please enter wallet address",
                        INVALID_WALLET_ADDRESS: "Wallet address is incorrect",
                        PLEASE_ENTER_AMOUNT_WITHDRAW: "Please enter your withdrawal amount",
                        WITHDRAW_BELOW_MINIMUM: "Withdraw amount is below minimum withdraw",
                        OLD_PASSWORD: "Old password",
                        NEW_PASSWORD: "New password",
                        CHANGE_PASSWORD: "Change password",
                        PLEASER_ENTER_BASE_AMOUNT: "Please enter amount of swap",
                        BASE_AMOUNT_GREATER_MIN: "Please enter amount greater than minimum amount",
                        BASE_AMOUNT_LESS_MAX: "Please enter amount less than maximum amount",
                        INVALID_PARAMETERS: "Parameters is invalid",
                        INVALID_OPERATION: "Operation is invalid",
                        NOTIFICATION: "Notification",
                        SWAP_SUCCESS: "Swap was successful",
                        CONFIRM_SUCCESS: "Device confirmation is successful",
                        REGISTER_SUCCESS: "Register was successful. Please check email for active account",
                        RESET_PASSWORD: "Reset password",
                        ACTIVE_ACCOUNT: "The account has been activated. You can log in now",
                        OTP_EXPIRED: "OTP is expired",
                        KYC_SUCCESS: "Verify account was successful. Please waiting admin confirm.",
                        KYC_NOTIFICATION: "This account is waiting verified confirm or verified",
                        WITHDRAW_SUCCESSFUL: "Withdraw success",
                        CONFIRM_WITHDRAW_SUCCESS: "Confirm withdraw was successful",
                        CANCEL_WITHDRAW: "Withdraw was cancelled",
                        WAITING_CONFIRM: "Waiting for confirm email",
                        PENDING: "Pending",
                        CANCELLED: "Canceled",
                        CANCELED: "Canceled",
                        EXTERNAL: "Withdraw",
                        INTERNAL: "Transfer",
                        CANCEL_STAKING_SUCCESS: "Staking was cancelled",
                        CREATE_STAKING_SUCCESS: "Create staking was successful",
                        EXTERNAL_WITHDRAW_BLOCKED: "External withdraw was blocked",
                        USER_WAS_BLOCKED: "User is blocked. Please contact us to support.",
                        USER_NOT_ACTIVE: "User is inactive or blocked",
                        MISSING_GACODE: "Google authenticator code is missing",
                        WRONG_PASSWORD: "Password is wrong",
                        COIN_NOT_SUPPORT: "Coin is not support",
                        NETWORK_NOT_SUPPORT: "Network is not support",
                        DEPOSIT_DISABLE: "Deposit is disabled",
                        WITHDRAW_DISABLE: "Withdrawal has been disabled. Please try again later.",
                        DISABLE_ACCOUNT_SUCCESS: "This account was disabled",
                        PLEASE_ENTER_GA_CODE: "Please enter Google authenticator code",
                        WRONG_GACODE: "Google authenticator code is incorrect",
                        ENABLE_GA_CODE: "Google authenticator is enabled",
                        DISABLE_GA_CODE: "Google authenticator is disabled",
                        GACODE_REQUIRED: "Pease enter Google authenticator code",
                        CONFIRMED: "Completed",
                        PRICE_EXPIRED: "Price is expired",
                        PLEASE_ENTER_AMOUNT_MORE_THAN: "Please enter amount greater than",
                        UNAVAILABLE_BALANCE: "Unavailable balance",
                        PLEASE_ENTER_AMOUNT_FOR_STAKING: "Please enter your staking amount",
                        UNKNOWN: "Service unavailable",
                        INVALID_ADDRESS: "Wallet address is invalid",
                        PLEASE_ENTER_OLD_PASSWORD: "Please enter old password",
                        PLEASE_ENTER_NEW_PASSWORD: "Please enter new password ",
                        PLEASE_ENTER_CONFIRM_PASSWORD: "Please enter confirm password",
                        CONFIRM_NEW_PASSWORD: "Confirm new password",
                        CONFIRM_PASSWORD_VS_NEW_PASSWORD: "Confirm password not match new password",
                        CHANGE_PASSWORD_SUCCESS: "Change password was successful",
                        PORTFOLIO: "Portfolio",
                        SWAP: "Swap",
                        STAKING: "Staking",
                        ACCOUNT: "Account",
                        LOGOUT: "Logout",
                        FORGOT_PASSWORD: "Forgot password",
                        HOMEPAGE: "Homepage",
                        BACK: "Back",
                        PLEASE_ENTER_OTP: "Please enter your OTP from email",
                        TOTAL: "Total",
                        COIN: "Coin",
                        PRICE: "Price",
                        BALANCE: "Balance",
                        VALUE: "Value",
                        DEPOSIT: "Deposit",
                        WITHDRAW: "Withdraw",
                        ESTIMATED_BALANCE: "Estimated Balance",
                        EXCHANGE: "Exchange",
                        AMOUNT: "Amount",
                        PLEASE_ENTER_AMOUNT: "Please enter amount",
                        MIN: "Min",
                        HALF: "Half",
                        ALL: "All",
                        RECEIVE: "Receive",
                        SWAP_HISTORY: "Swap history",
                        TIME: "Time",
                        BASE_AMOUNT: "Base amount",
                        QUOTE_AMOUNT: "Quote amount",
                        DURATION: "Duration",
                        DAYS: "days",
                        MINIMUM_AMOUNT: "Minimum amount",
                        HISTORY: "History",
                        REDEEMS: "Redeems",
                        TYPE: "Type",
                        STATUS: "Status",
                        STAKE: "Stake",
                        LOCK: "Lock",
                        MINIMUM_LOCKED_AMOUNT: "Minimum locked Amount",
                        MAXIMUM_LOCKED_AMOUNT: "Maximum locked Amount",
                        REDEMPTION_PERIOD: "Redemption period",
                        LOCK_AMOUNT: "Lock amount",
                        CONFIRM_PURCHASE: "Confirm purchase",
                        CANCEL: "Cancel",
                        GO_TO_DEPOSIT: "Go to deposit",
                        NETWORK: "Network",
                        ADDRESS: "Address",
                        GO_TO_WITHDRAW: "Go to withdraw",
                        MINIMUM_WITHDRAW_AMOUNT: "Minimum withdraw amount",
                        TRANSACTION_FEE: "Transaction fee",
                        YOU_WILL_GET: "You will get",
                        PROFILE: "Profile",
                        SETTING: "Setting",
                        DEVICE_LIST: "Device list",
                        LOGIN_ACTIVITY: "Login activity",
                        TURN_OFF: "Turn off",
                        TURN_ON: "Turn on",
                        DISABLE: "Disable",
                        IDENTITY_VERIFICATION: "Identity verification",
                        ENABLE: "Enable",
                        LOGIN_PASSWORD: "Login password",
                        CHANGE: "Change",
                        INVITED_FRIEND: "Invite Friends, Earn Crypto",
                        INVITED_TIP: "Use your unique link to invite your friends over message or email. Your default invitation code can also be shared in real life or as a screenshot",
                        COPIED: "Copied",
                        REFERRAL_NUMBER: "Referral number",
                        F1_REFERRAL_NUMBER: "F1 referral number",
                        COMMISSION: "Commission",
                        YOUR_REFERRAL_ACCOUNT: "Your F1 members",
                        YOUR_COMMISSION_HISTORY: "Your commission history",
                        AIRDROP: "Airdrop",
                        AFFILIATE: "Affiliate",
                        PHOTOS: "Photos",
                        FIRST_NAME: "First name",
                        LAST_NAME: "Last name",
                        MIDDLE_NAME: "Middle name",
                        DOB: "Date of birth",
                        COUNTRY: "Country",
                        SELECT_COUNTRY: "Select country",
                        CITY: "City",
                        POSTAL_CODE: "Postal code",
                        NEXT: "Next",
                        PREVIOUS: "Previous",
                        UPLOAD: "Upload",
                        FRONT_PAGE: "Front of card ID/Passport/Driver license",
                        BACK_PAGE: "Back of card ID/Passport/Driver license",
                        UPLOAD_SELFIE_PHOTO: "Upload selfie photo",
                        FULL_NAME: "Full name",
                        VERIFY: "Verify",
                        LANGUAGE: "Language",
                        DRIVER_LICENSE: "Driver license",
                        PASSPORT: "Passport",
                        USER_NOT_VERIFIED: "Please verify user to make the transaction",
                        PLEASE_ENABLE_GA: "Please enable Google authenticator to make the transaction",
                        REFERRAL_PARENT: "Referral",
                        REFERRAL_ID: "Referral ID",
                        ID_TYPE: "ID/Passport/Driver license",
                        ID_CODE: "ID Code",
                        ID_CARD: "ID Card",
                        IMAGE_CORRECT: "Image is not correct",
                        IMAGE_LARGE: "Image too large",
                        PRIVACY_AND_POLICY: "Privacy and Policy",
                        AGREE_TOS: "I have read and agree to the",
                        fastwallet_TOS: "FastWallet's Terms",
                        PLEASER_CHECK_TOS: "Please read and agree to the FastWallet Term",
                        WISH_YOU_LUCK: "Wish you luck next time",
                        CONGRATULATION: "Congratulation",
                        PRIZE_VALUE: "Prize value",
                        LAST_LOGIN: "Last login time",
                        CONTINUE: "Continue",
                        INFO_BASIC: "INFO BASIC",
                        VERIFY_REASON: "Why verify your identity",
                        VERIFY_REASON_1: "To unlock the withdrawal function.",
                        VERIFY_REASON_2: "To unlock the internal money transfer function.",
                        VERIFY_REASON_3: "To ensure the security of your account.",
                        VERIFY_NOTE: "This information is used for identity verification only, and will be kept secure by FastWallet",
                        SELFIE: "Selfie photo",
                        ARE_YOU_SURE: "Are you sure ?",
                        GIFT: "Gift",
                        NO_RECORDS_FOUND: "No records found",
                        MEMBER: "Member",
                        EMAIL_NOT_FOUND: "Email not found",
                        MINIMUM_SWAP_AMOUNT: "Swap minimum amount",
                        EST_APY: "Est. APY",
                        GA_CODE: "Google authenticator code",
                        GA: "Google authenticator",
                        SECURITY: "Security",
                        PLEASE_ENTER_YOUR_FULL_INFORMATION: "Please enter your full information",
                        COIN_TOKEN: "Coin/Token",
                        CHANGE_24H: "24h Change",
                        VOLUME: "Volume",
                        NOTE_UPLOAD_PHOTO: "We are only accept .png, .jpg, .jpeg, or .HEIC and not exceeding 5Mb",
                        UPLOAD_PHOTO: "Upload photo",
                        BLOCKED: "Blocked",
                        LINK: "Link",
                        UPLOAD_PHOTO_WITH: "Upload photo with",
                        UPLOAD_PHOTO_NOTE: "Attach memo on your card.",
                        UPLOAD_PHOTO_NOTE_1: "Write a memo including with the follow phrases that KYC Request, email, a Date of request, KYC for FastWallet, and sign.",
                        UPLOAD_PHOTO_NOTE_2: "If it is not a valid or can't attack a memo, it can be reject.",
                        KYC_REQUEST: "KYC request",
                        SIGN: "Sign",
                        WELL_DONE: "Well done!",
                        I_AGREE_TO_THE: "I agree to the",
                        AND: "and",
                        AGREE_AFTER: "Purpose of Collecting Personal Information",
                        KYC_CONFIRM_NOTE: "Purpose of Collecting Personal Information: identification, increase Verification level",
                        KYC_CONFIRM_NOTE_1: "Required personal information: name, date of birth, Nationality, ID card | passport | driver license photo",
                        KYC_CONFIRM_NOTE_2: "Retention Period: The time set by the Act when the member is withdrawn or until the contact is terminated",
                        KYC_CONFIRM_NOTE_3: "KYC process will be done manually, so this process may takes time to be completed. 24h is the duration for this process in general, but if the amount of users increase rapidly, it's may takes more time. We really appreciate for your waiting. Please follow your Email to have more result information.",
                        VERIFIED: "Verified",
                        OPEN: "Open",
                        CLOSED: "Closed",
                        DEPOSIT_HISTORY: "Deposit history",
                        WITHDRAW_HISTORY: "Withdraw history",
                        SWAP_CONFIRM: "Swap confirm",
                        RATIO: "Ratio",
                        SWAP_FEE: "Swap fee",
                        DEPOSIT_TIP_0_BEGIN: "Only send",
                        DEPOSIT_TIP_0_END: "to this deposit address.",
                        DEPOSIT_TIP_1: "Sending coins or tokens other than the one you choose to this address may risk losing money.",
                        DEPOSIT_TIP_2: "If you have made a deposit, please pay attention to the text messages, website notifications and the email we sent you.",
                        DEPOSIT_TIP_3: "Coins will be deposited after confirmed by the network.",
                        DEPOSIT_TIP_4: "We are not responsible for assets for wrong wallet address or network platform when you mistakenly transfer.",
                        WITHDRAW_TIP_0: "Do not withdraw directly to an ICO address or crowdfunding, because your account will not be credited with tokens from this activity.",
                        WITHDRAW_TIP_1: "When transferring to a user in the FastWallet platform, the service will be processed at no cost.",
                        WITHDRAW_TIP_2: "We waived liability for wrong transfer of wallet addresses or different blockchain platforms.  FastWallet does not yet support cross-chain.",
                        SWAP_TIP_0: "The final price and amount is determined by the amount of tokens available in the pool at the time of your swap.",
                        SWAP_TIP_1: "Swap transactions are only executed when the price slippage is within the allowed range.",
                        SWAP_TIP_2: "Adding or withdrawing coins will not be restricted, but will depend on the number of tokens in the pool.",
                        SWAP_TIP_3: "Swap is just a form of conversion between different asset classes but is still based on the market price and the amount of tokens in the pool.  FastWallet disclaims liability when the token slips price during swaps.",
                        CHOOSE_NETWORK: "Choose network",
                        WITHDRAW_CONFIRM: "Withdraw confirm",
                        WALLET_ADDRESS: "Wallet address",
                        WITHDRAW_FEE: "Withdraw fee",
                        STAKING_CONFIRM: "Staking confirm",
                        AGREE_TO: "I have read and agree to the",
                        STAKING_POLICY: "Staking policy",
                        PLEASER_CHECK_STAKING_POLICY: "Please read and agree to the FastWallet Term and Staking Policy",
                        STAKING_POLICY_0: "Annual rate of return based on estimated historical market sales. Actual revenue depends on actual receipt.",
                        STAKING_POLICY_1: "The minimum staking amount is 100 mUSD.",
                        STAKING_POLICY_2: "During staking, the staking asset cannot be traded on the liquid market, and cannot be unlocked directly (Except for the Flexible Staking Package).",
                        STAKING_POLICY_3: "When the length of your staking period meets the staking interval requirement, the staking package will be canceled automatically, the revenue and the staking principal amount will be transferred to your storage wallet.",
                        STAKING_POLICY_4: "The staking amount will be refunded after 1-2 working days after your chosen deadline, the staking reward with the mined POL is paid interest on a daily basis",
                        STAKING_POLICY_5: "Staking policy is not changed, but FastWallet is not responsible for property slippage in the market while customers are staking.",
                        STAKING_POLICY_6: "Annual interest rate (APY), only to help members better understand the value of the profit.",
                        STAKING_TIME: "Staking time",
                        STAKING_START_DATE: "Staking start date",
                        STAKING_END_DATE: "Staking end date",
                        ESTIMATED_APY: "Estimated APY",
                        START_TIME: "Start time",
                        END_TIME: "End time",
                        LOCKED: "Locked",
                        YOUR_TOTAL_AFFILIATE: "Total affiliate",
                        YOUR_TOTAL_AFFILIATE_F1: "Total affiliate 1",
                        YOUR_AFFILIATE_F1: "Your affiliate 1",
                        MAXIMUM: "Maximum",
                        MINIMUM: "Minimum",
                        USE_MAX_AMOUNT: "Use max amount",
                        STAKING_TIP_0: "Make cryptocurrency anytime with FastWallet Staking",
                        STAKING_TIP_1: "Generate passive income with FastWallet Staking by keeping cryptocurrencies in your wallet. Select the crypto you want to keep from FastWallet's cryptocurrency (mUSD). Take your crypto investment potential to new level and enjoy low fees with FastWallet.",
                        DATE_REQUIRE: "Date require",
                        KYC_FOR: "KYC for FastWallet",
                        DOB_INVALID: "Invalid birthday",
                        WITHDRAW_AMOUNT_TOO_SMALL: "Withdraw amount is too low",
                        DISABLE_ACCOUNT: "Disable account",
                        CLOSE: "Close",
                        SCAN_QR_CODE: "Scan the QR code of the wallet address",
                        DISABLE_ACCOUNT_NOTE: "This action will disable your FastWallet account. Please contact to FastWallet support to reactivate your account.",
                        PLEASE_ENTER_PASSWORD_MORE_THAN: "Please enter a password more than 8 characters",
                        PLEASE_ENTER_PASSWORD_LESS_THAN: "Please enter a new password less than 16 characters",
                        PLEASE_ENTER_NEW_PASSWORD_MORE_THAN: "Please enter a new password more than 8 characters",
                        PLEASE_ENTER_NEW_PASSWORD_LESS_THAN: "Please enter a new password less than 16 characters",
                        FAILED: "Failed",
                        SEARCH_COIN_TOKEN: "Search Coin/Token",
                        SP_ACCOUNT_TITLE: "Support FastWallet.io account login.",
                        SP_ACCOUNT: "FastWallet.org support log in with your FastWallet.io account. With your authorization, you can log in both FastWallet.io exchange and your FastWallet.org with one account and enjoy a one-stop solution from storage, transfer to exchange.",
                        EASY_BUY: "Easy buy",
                        YOU_HAVE: "You have",
                        BUY: "Buy",
                        AVAILABLE_BALANCE: "Available balance",
                        COMPLETED: "Completed",
                        SESSION_SUPPLY: "Session supply",
                        SOLD: "Sold",
                        BY: "by",
                        START_DATE: "Start date",
                        END_DATE: "End date",
                        WEBSITE: "Website",
                        WHITEPAPER: "Whitepaper",
                        BUY_TOKEN_SUCCESS: "Buy token successful",
                        FEE: "Fee",
                        BUY_TOKEN_CONFIRM: "Buy token confirm",
                        PROJECT_INTRODUCTION: "Project introduction",
                        EASY_BUY_SLOGAN: 'Easy exchange with "Easy-Buy"',
                        EASY_BUY_SUB_SLOGAN: "Support instant exchange of popular cryptocurrencies around the world",
                        FAST: "Fast",
                        EFFICIENT: "Efficient",
                        ZERO_CHANGES: "0 Changes",
                        USER_OVERVIEW_MEMBER: "Members of the FastWallet",
                        USER_OVERVIEW_ASSETS: "Variety Digital Assets/Crypto management",
                        USER_OVERVIEW_SOCIAL: "Social media followers",
                        FastWallet_KYC_NOTE: "using this KYC document for FastWallet and also FastWallet.",
                        YOU_PAY: "You pay",
                        OPTION: "Option",
                        MEMO_NOTE: "Please confirm if the receiving address requires a MEMO/ Tag. If it is not filled or filled incorrectly, the asset will be lost. Other exchanges or wallets also call Tag names Memo, digital ID, label, and notes.",
                        TRANSACTION_HASH: "Transaction hash",
                        EXCHANGE_DETAIL: "Exchange detail",
                        TO: "to",
                        FROM: "from",
                        SEND: "Send",
                        HOURS_AGO: "hours ago",
                        MINUTES_AGO: "minutes ago",
                        TRANSACTION_HISTORY: "Transaction history",
                        PAY: "Pay",
                        GET: "Get",
                        STAKING_REFERRAL: "Commission",
                        PRESALE_PRODUCT_OUT_OF_SUPPLY: "The purchase amount has exceeded the supply. Please try again.",
                        PRESALE_PRODUCT_NOT_OPEN: "Coin/Token has not been opened for sale.",
                        PRESALE_PRODUCT_ENDED: "Coin/Token has timed out to purchase",
                        EASY_BUY_HISTORY: "Easy buy history",
                        SELECT_COIN: "Select Coin/Token",
                        COMING_SOON: "Upcoming",
                        SUMMARY: "Summary",
                        LOCK_AMOUNT_LIMITATION: "Lock amount limitation",
                        VALUE_DATE: "Value date",
                        INTEREST_PERIOD: "Interest period",
                        INTEREST_END_DATE: "Interest end date",
                        REDEMPTION_DATE: "Redemption date",
                        ESTIMATE_INTEREST: "Estimate interest",
                        INSUFFICIENT_FUNDS: "Unavailable balance",
                        AMOUNT_TOO_LARGE: "Your amount of staking is too large",
                        AMOUNT_TOO_LOW: "Your amount of staking is too low",
                        STAKING_PRODUCT_NOT_OPEN: "Staking product is not open",
                        STAKING_PRODUCT_ENDED: "Staking product is ended",
                        PLEASE_TRY_AGAIN: "Please try again",
                        STAKING_PRODUCT_OUT_OF_SUPPLY: "Your staking amount out of remain",
                        REDEEM: "Redeem",
                        STAKING_SUCCESS: "Staking success",
                        PROFIT: "Profit",
                        YEAR: "year",
                        MONTH: "month",
                        CONFIRM_STAKING: "Confirming for staking",
                        PARTNER: "Partner",
                        DISPLAY_NAME: "Display name",
                        UPDATE: "Update",
                        ITEM_ALREADY_EXIST: "Display name was existed",
                        PLEASE_ENTER_YOUR_DISPLAY_NAME: "Please enter your display name",
                        DISPLAY_NAME_WAS_UPDATED: "Display name was updated",
                        MARCH_PROMOTION: "Promotion March",
                        APRIL_REWARD: "April reward",
                        ORDER_DETAIL: "Order detail",
                        RECEIVER_ADDRESS: "Receiver's address",
                        PHONE: "Phone",
                        CHECKOUT_METHOD: "Checkout method",
                        CHECKOUT_BY_LUS: "Payment by LuS on FastWallet (Free of charge).",
                        PAYMENT_SUCCESS: "Payment success",
                        DISCOUNT: "Discount",
                        PRODUCT: "Product",
                        SUBTOTAL: "Subtotal",
                        BACK_TO_ORDER: "Back to my orders",
                        MY_ORDERS: "My orders",
                        PRODUCTS: "Products",
                        SAVE: "Save",
                        AVAILABLE: "Available",
                        BUY_NOW: "Buy now",
                        PRODUCT_DETAIL: "Product detail",
                        LEARN_MORE: "learn more",
                        SHOPPING_PRICE_NOTE: "Price is inclusive of duties and taxes for all US bound orders",
                        SHOPPING_NOTE_1: "Verified & authenticated by our experts",
                        SHOPPING_NOTE_2: "Delivery time : 2-4 business days",
                        SHOPPING_NOTE_3: "30 days easy return",
                        ORDER: "Order",
                        SHIPPING_INFORMATION: "Shipping information",
                        CHOSE_ADDRESS: "Chose address",
                        ADD_NEW_ADDRESS: "Add new address",
                        CHECKOUT: "Checkout",
                        CONFIRM_INFORMATION: "Confirm information",
                        SWAP_FROM: "From",
                        CREATE_ORDER_DATE: "Created order date",
                        BACK_TO_fastwallet: "Back to FastWallet",
                        NAME: "Name",
                        NEW: "New",
                        SHIPPING: "Shipping",
                        INPROGRESS: "In progress",
                        CANCEL_ORDER: "Cancel order",
                        ARE_YOU_SURE_CANCEL_ORDER: "Are you sure you want cancel this order ?",
                        ORDER_ID: "Order ID",
                        SELECT_A_TOKEN: "Select a token",
                        CANCEL_ORDER_SUCCESS: "Cancel order success",
                        EDIT_PROFILE: "Edit profile",
                        EDIT_NICKNAME_NOTE: "We accept names from 3 to 32 characters in length, without special characters and does not begin with a number.",
                        PLEASE_TELL_US_YOUR_NICKNAME: "Please tell us your nickname",
                        YOUR_NICKNAME: "Your nickname",
                        PLEASE_CHECK_NICKNAME_AGAIN: "Please check your nickname again.",
                        PLEASE_SELECT_COUNTRY: "Please select your country",
                        UPDATE_COUNTRY_SUCCESS: "Update country success",
                        UPDATE_NICKNAME_SUCCESS: "Update nickname success",
                        CONFIRM_CANCEL_ORDER_ADDRESS: "Confirming for cancel order address",
                        SHOPPING_ORDER_OUT_OF_STOCK: "Your order products out of remain",
                        SOLD_OUT: "Sold out",
                        RANKING_BONUS: "Bonus",
                        UNBLOCK: "Unlock",
                        VERIFICATION: "Verification",
                        CODE_WILL_BE_SENT_TO: "Code will be sent to",
                        EMAIL_VERIFICATION_CODE: "Email verification code",
                        ENTER_GA_CODE: "Enter Google verification code",
                        SUBMIT: "Submit",
                        SEND_CODE: "Send code",
                        SP_INTERNAL: "Internal transfer",
                        OR: "or",
                        INTERNAL_WITHDRAW: "Internal withdraw",
                        EXTERNAL_WITHDRAW: "External withdraw",
                        ASSETS: "Assets",
                        MY_PROFILE: "My profile",
                        MY_AFFILIATE: "My affiliate",
                        AIRDROP_HISTORY: "Airdrop History",
                        COMMISSION_HISTORY: "Commission History",
                        GIFT_HISTORY: "Receive Gift History",
                        STAKING_COMMISSION: "Staking Commission",
                        SHOW_MORE: "Show more",
                        SHOW_LESS: "Show less",
                        WITHDRAW_TO: "Withdraw to",
                        WITHDRAW_AMOUNT: "Withdraw amount",
                        RECEIVE_AMOUNT: "Receive amount",
                        WALLET: "Wallet",
                        LOGIN_FOR: "Login for",
                        BACK_TO_HOMEPAGE: "Back to homepage",
                        FORGOT_PASSWORD_SUCCESS: "Please check your email to reset your password.",
                        LEAR_MORE: "Learn more",
                        INVALID_CPU_WITHDRAW: "Currently, CPU token only allows internal withdraw",
                        SELECT_METHOD: "Select method",
                        SELECT_FIAT: "Select fiat",
                        I_WANT_TO_SPEND: "I want to spend",
                        YOU_WILL_RECEIVE: "You will receive",
                        CONFIRMING_FOR_CANCEL_WITHDRAW: "Confirming for cancel withdraw",
                        ARE_YOU_SURE_CANCEL_WITHDRAW: "Confirming to cancel the withdrawal",
                        SAFE_CPU_HOLDER_COMMISSION: "Pool holder",
                        SAFE_CPU_REWARD: "Pool reward",
                        SAFE_CPU_BA_REWARD: "Pool promotion",
                        SAFE_CPU_STAKING: "Staking",
                        CPU_AFFILIATE_COMMISSION: "Affiliate commission",
                        SAFE_CPU_DAILY_RELEASE: "Daily release",
                        SAFE_CPU_AFFILIATE_COMMISSION: "Affiliate commission",
                        SAFE_CPU_RELEASE: "Release",
                        SAFE_CPU_RANKING_BONUS: "Ranking bonus",
                        SWAP_CPU_AFFILIATE_COMMISSION: "Affiliate commission",
                        SAFE_CPU_PROMOTION: "Affiliate commission",
                        SWAP_CPU_BELOW_MINIMUM: "Please swap at least",
                        WITHDRAW_HOLDER_COMMISSION: "Profit recovery",
                        WITHDRAW_REWARD: "Profit recovery"
                    },
                    lang: "en",
                    loading: !0,
                    modalContent: null
                }),
                dc = {
                    isLogin: !!oe(),
                    information: null,
                    device: null,
                    activity: null,
                    gaEnable: !1,
                    verification: {
                        firstName: "",
                        middleName: "",
                        lastName: "",
                        dob: "",
                        country: "vn",
                        postalCode: "",
                        city: "",
                        idCode: "",
                        idType: 0,
                        frontPhoto: "",
                        backPhoto: "",
                        selfiePhoto: ""
                    },
                    verificationPhotos: {
                        front: "",
                        back: "",
                        selfie: ""
                    },
                    gift: null,
                    giftRewards: null,
                    stakingReferralRewards: null,
                    airdropRewards: null
                },
                uc = {
                    fundList: [],
                    swapProduct: [],
                    swapHistory: null,
                    stakingProduct: null,
                    stakingHistory: null,
                    depositHistory: null,
                    withdrawHistory: null,
                    fundListForCoinChart: [],
                    easyBuyHistory: null,
                    redeemHistory: null,
                    _transactionHistory: null,
                    lusStakingProducts: null,
                    lusStakingHistory: null
                },
                jc = Object(rc.b)({
                    setting: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oc,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return t.type, Object(aa.a)({}, e)
                    },
                    user: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dc,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            a = t.type,
                            n = t.payload;
                        switch (a) {
                            case k:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    verificationPhotos: Object.assign(e.verificationPhotos, t.payload)
                                });
                            case R:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    verification: Object.assign(e.verification, t.payload)
                                });
                            case C:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    device: t.payload
                                });
                            case I:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    activity: t.payload
                                });
                            case T:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    gaEnable: n
                                });
                            case N:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    giftRewards: n
                                });
                            case A:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    stakingReferralRewards: n
                                });
                            case _:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    airdropRewards: t.payload
                                });
                            case S:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    information: n
                                });
                            default:
                                return Object(aa.a)({}, e)
                        }
                    },
                    wallet: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case D:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    _transactionHistory: t.payload
                                });
                            case w:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    fundList: t.payload
                                });
                            case F:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    swapProduct: t.payload
                                });
                            case L:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    swapHistory: t.payload
                                });
                            case M:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    depositHistory: t.payload
                                });
                            case W:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    withdrawHistory: t.payload
                                });
                            case P:
                                return Object(aa.a)(Object(aa.a)({}, e), {}, {
                                    fundListForCoinChart: t.payload
                                });
                            default:
                                return Object(aa.a)({}, e)
                        }
                    }
                }),
                bc = Object(rc.c)(jc, Object(rc.a)(lc.a));
            s.a.render(Object(K.jsx)(y.Provider, {
                store: bc,
                children: Object(K.jsx)(ic, {})
            }), document.getElementById("root")), sc()
        }
    },
    [
        [709, 1, 3]
    ]
]);
//# sourceMappingURL=main.6dce55f3.chunk.js.map