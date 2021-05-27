webpackJsonp([3], {
    "/JD2": function (t, s, e) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var i = {
                name: "choiceQuestion",
                data: function () {
                    return {
                        radio: 1,
                        Mask: !1
                    }
                },
                props: {
                    questionList: {
                        type: Array,
                        Default: []
                    },
                    indexNow: {
                        type: Number,
                        Default: 0
                    }
                },
                methods: {
                    vfAnswer: function (t, s) {
                        var e = this;
                        alert(this.questionList.questionAnswer);
                        if (this.radio = t, this.Mask = !0, console.log("submit", this.radio), this.questionList.questionAnswer === t) this.$refs.answerlist[s].className = "van-cell van-cell--clickable correct-on", this.$parent.addNumber(this.questionList.questionScore), this.$notify({
                            type: "success",
                            message: "正确答案"
                        });
                        else {
                            for (var i = 0; i < this.questionList.answerList.length; i++) this.questionList.answerList[i].enumValue === this.questionList.questionAnswer && (this.$refs.answerlist[i].className = "van-cell van-cell--clickable correct-on");
                            this.$refs.answerlist[s].className = "van-cell van-cell--clickable error-on"
                        }
                        this.$notify({
                            type: "warning",
                            message: "2S后为您跳转下一题",
                            duration: 2e3
                        }), setTimeout(function () {
                            for (var s = 0; s < e.questionList.answerList.length; s++) e.$refs.answerlist[s].className = "van-cell van-cell--clickable";
                            e.$store.state.answerParams += e.questionList.questionId + "-" + t + "#", e.$parent.changeList(e.indexNow + 1), e.Mask = !1
                        }, 2500)
                    }
                }
            },
            n = {
                render: function () {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "choice-question"
                    }, [e("div", {
                        staticClass: "choice-question-wrap"
                    }, [e("div", {
                        staticClass: "question-t"
                    }, [e("div", {
                        staticClass: "login-top-left"
                    }), t._v(" "), e("h3", {
                        staticClass: "choice-question-wrap-tip"
                    }, [t._v(t._s(t.indexNow) + "/10题")]), t._v(" "), e("div", {
                        staticClass: "login-top-right"
                    })]), t._v(" "), e("div", {
                        staticClass: "choice-question-list"
                    }, [e("h3", {
                        staticClass: "title"
                    }, [t._v(t._s(t.questionList.questionAnswer))]), t._v(" "), e("div", {
                        staticClass: "choice-question-l"
                    }, [e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.Mask,
                            expression: "Mask"
                        }],
                        staticClass: "zhezhao"
                    }), t._v(" "), e("van-radio-group", {
                        attrs: {
                            max: 1
                        },
                        model: {
                            value: t.radio,
                            callback: function (s) {
                                t.radio = s
                            },
                            expression: "radio"
                        }
                    }, [e("van-cell-group", t._l(t.questionList.answerList, function (s, i) {
                        return e("div", {
                            key: i
                        }, [e("van-cell", {
                            ref: "answerlist",
                            refInFor: !0,
                            attrs: {
                                title: s.enumValue + ":" + s.questionAnswerContent
                            },
                            on: {
                                click: function (e) {
                                    return t.vfAnswer(s.enumValue, i)
                                }
                            },
                            scopedSlots: t._u([{
                                key: "right-icon",
                                fn: function () {
                                    return [e("van-radio", {
                                        attrs: {
                                            name: "item.id"
                                        }
                                    })]
                                },
                                proxy: !0
                            }], null, !0)
                        })], 1)
                    }), 0)], 1)], 1)])])])
                },
                staticRenderFns: []
            };
        var a = e("VU/8")(i, n, !1, function (t) {
                e("ylga")
            }, "data-v-561dcb51", null).exports,
            o = {
                name: "moreChoiceQuestion",
                data: function () {
                    return {
                        result: []
                    }
                },
                props: {
                    questionList: {
                        type: Array,
                        Default: []
                    },
                    indexNow: {
                        type: Number,
                        Default: 0
                    }
                },
                methods: {
                    toggle: function (t, s) {
                        this.$refs.checkboxes[s].toggle()
                    },
                    nextTo: function () {
                        var t = this;
                        console.log("submit", this.result);
                        for (var s = "", e = 0; e < this.result.length; e++) s += this.result[e].enumValue + ",";
                        var i = (s = s.substring(0, s.lastIndexOf(","))).split(",");
                        i = i.sort(), s = i.toString(), this.questionList.questionAnswer === s && this.$parent.addNumber(this.questionList.questionScore), this.$notify({
                            type: "warning",
                            message: "2S后为您跳转下一题",
                            duration: 2e3
                        }), setTimeout(function () {
                            t.$store.state.answerParams += t.indexNow + "-" + s + "#", t.$parent.changeList(t.indexNow + 1)
                        }, 2500)
                    }
                }
            },
            r = {
                render: function () {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "choice-question"
                    }, [t._m(0), t._v(" "), e("div", {
                        staticClass: "choice-question-wrap"
                    }, [e("h3", {
                        staticClass: "choice-question-wrap-tip"
                    }, [t._v(t._s(t.indexNow) + "/15题")]), t._v(" "), e("div", {
                        staticClass: "choice-question-list"
                    }, [e("h3", {
                        staticClass: "title"
                    }, [t._v(t._s(t.questionList.questionAnswer)), e("span", [t._v(t._s(t.questionList.enumQuestionType) + "：" + t._s(t.questionList.questionScore) + "分")])]), t._v(" "), e("div", {
                        staticClass: "choice-question-l"
                    }, [e("van-checkbox-group", {
                        model: {
                            value: t.result,
                            callback: function (s) {
                                t.result = s
                            },
                            expression: "result"
                        }
                    }, [e("van-cell-group", t._l(t.questionList.questionAnswer, function (s, i) {
                        return e("div", {
                            key: i
                        }, [e("van-cell", {
                            ref: "answerlist",
                            refInFor: !0,
                            attrs: {
                                title: s.enumValue + ":" + s.questionAnswerContent,
                                clickable: ""
                            },
                            on: {
                                click: function (e) {
                                    return t.toggle(s.enumValue, i)
                                }
                            },
                            scopedSlots: t._u([{
                                key: "right-icon",
                                fn: function () {
                                    return [e("van-checkbox", {
                                        ref: "checkboxes",
                                        refInFor: !0,
                                        attrs: {
                                            name: s
                                        }
                                    })]
                                },
                                proxy: !0
                            }], null, !0)
                        })], 1)
                    }), 0)], 1)], 1), t._v(" "), e("van-button", {
                        attrs: {
                            type: "primary",
                            size: "large"
                        },
                        on: {
                            click: function (s) {
                                return t.nextTo()
                            }
                        }
                    }, [t._v("下一题")])], 1)])])
                },
                staticRenderFns: [function () {
                    var t = this.$createElement,
                        s = this._self._c || t;
                    return s("div", {
                        staticClass: "answer-tip"
                    }, [s("img", {
                        staticClass: "login-top-left",
                        attrs: {
                            src: e("39xm")
                        }
                    }), this._v(" "), s("img", {
                        staticClass: "login-top-right",
                        attrs: {
                            src: e("39xm")
                        }
                    })])
                }]
            };
        var c = {
                name: "login",
                data: function () {
                    return {
                        answerNumber: 0,
                        timeNumber: 301e3,
                        isStart: !1,
                        answerList: [],
                        nowList: [],
                        indexNow: 1,
                        numShow: !1,
                        examId: 0
                    }
                },
                methods: {
                    start: function () {
                        this.axios.post("/rmt/question/start").then(function (t) {
                            0 === t.code && console.log("ces")
                        }), this.$refs.countDown.start()
                    },
                    finish: function () {
                        var t = this;
                        this.$notify({
                            type: "success",
                            message: "答题结束"
                        }), console.log(this.$store.state.answerParams), this.$store.state.answerParams = this.$store.state.answerParams.substring(0, this.$store.state.answerParams.lastIndexOf("#"));
                        var s = {
                            id: this.examId,
                            params: this.$store.state.answerParams
                        };
                        this.axios.post("/rmt/question/complete/learn", s).then(function (s) {
                            0 === s.code && s.data && (t.$toast.success("您的得分为：" + s.data.count), t.$router.push({
                                path: "/score",
                                query: {
                                    scoreList: s.data
                                }
                            }))
                        })
                    },
                    addNumber: function (t) {
                        this.answerNumber += t
                    },
                    getList: function () {
                        var t = this;
                        this.axios.get("/rmt/question/list/learn").then(function (s) {
                            0 === s.code && s.data && (t.examId = s.data.id, t.answerList = s.data.list, t.indexNow = 1, t.nowList = s.data.list[t.indexNow - 1], t.$store.state.answerParams = "", console.log(t.nowList))
                        })
                    },
                    changeList: function (t) {
                        var s = this;
                        if (11 === t) {
                            console.log(this.$store.state.answerParams), this.$store.state.answerParams = this.$store.state.answerParams.substring(0, this.$store.state.answerParams.lastIndexOf("#"));
                            var e = {
                                id: this.examId,
                                params: this.$store.state.answerParams
                            };
                            this.axios.post("/rmt/question/complete/learn", e).then(function (t) {
                                0 === t.code && t.data && (s.$toast.success("您的得分为：" + t.data.count), s.$router.push({
                                    path: "/score",
                                    query: {
                                        scoreList: t.data
                                    }
                                }))
                            })
                        } else console.log(this.$store.state.answerParams), this.indexNow = t, this.nowList = this.answerList[this.indexNow - 1]
                    }
                },
                mounted: function () {
                    this.getList()
                },
                components: {
                    choiceQuestion: a,
                    moreChoiceQuestion: e("VU/8")(o, r, !1, function (t) {
                        e("ocBC")
                    }, "data-v-e0650bba", null).exports
                }
            },
            l = {
                render: function () {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "answer"
                    }, [e("div", {
                        staticClass: "answer-top"
                    }, [e("div", {
                        staticClass: "answer-number"
                    }, [e("h3", [t._v(t._s(t.answerNumber))]), t._v(" "), e("p", [t._v("得分")])]), t._v(" "), e("div", {
                        staticClass: "answer-time"
                    }, [e("div", {
                        staticClass: "answer-time-wrap"
                    }, [e("h3", [e("van-count-down", {
                        attrs: {
                            time: t.timeNumber,
                            format: "ss",
                            "auto-start": !0
                        },
                        on: {
                            finish: t.finish
                        }
                    })], 1), t._v(" "), e("p", [t._v("倒计时")])])])]), t._v(" "), e("choice-question", {
                        attrs: {
                            "question-list": t.nowList,
                            "index-now": t.indexNow
                        }
                    })], 1)
                },
                staticRenderFns: []
            };
        var u = e("VU/8")(c, l, !1, function (t) {
            e("sHR3")
        }, "data-v-76c33405", null);
        s.default = u.exports
    },
    "39xm": function (t, s) {
        t.exports = "data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSAiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFRQ0FZQUFBQXZmKzVBQUFBQlBFbEVRVlFvVTJOa2dBS3RLNnZZMkgrd05QMW5ZRWdEQ1RFeU1NejZ5ZkduN3BwTzJDOG9INkxTOE15Nmp2OE1ET1V3alZESnp2TW1RUlVvQ2czT3JIdkh3TUFnaUt5UWdZSGgvUVdUSUNGMGhmL1JGSUc1RjB5Q0dJZW5Rb2VnYnhZZnFuWWN4K1pyZ1RZUHl3UHJ1RTR3T29mK2NQMy83OStXZDVVNzJMQXBGR3IzK01YSXhPVEQ2QlQ4OVJJREE2UHV1NG9kL3hrWVFUR0hCUDR6L0JmcThBQ0pYV0owRHY3KzlUL0RmNjczeFh2dS9HZjdvNElTaGI5WTdnajJ1cWd3TWpCK1kzUU0rYjZkOGY5L2p6L3k3ejUrRGp2TC9aL2xMd3M0SnY0dy8rRmRaZnlWNWFFUS8zOUd4aDJNRGdIZkZSaVovKzlqWkdCUS9Ndi9uZUdYMWpPd29XelhwQmlZUDNJeS9HZGd1UC8vTDZNVDJFM21ubS81dUxpNThobi8vUTltWUdSVUJhdjgvLy8yZnliR3RkKytmcHQ0Y3J2d0p3Q3c3b1N1MXRpOWh3QUFBQUJKUlU1RXJrSmdnZz09IgoKCi8vLy8vLy8vLy8vLy8vLy8vLwovLyBXRUJQQUNLIEZPT1RFUgovLyAuL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ2luLXRpcC5wbmcKLy8gbW9kdWxlIGlkID0gMzl4bQovLyBtb2R1bGUgY2h1bmtzID0gMSAy"
    },
    ocBC: function (t, s) {},
    sHR3: function (t, s) {},
    ylga: function (t, s) {}
});
//# sourceMappingURL=3.d30f906ecbddfd20208e.js.map
