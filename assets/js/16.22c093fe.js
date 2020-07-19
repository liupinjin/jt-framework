(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{342:function(t,a,s){"use strict";s.r(a);var n=s(33),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"异常处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[t._v("#")]),t._v(" 异常处理")]),t._v(" "),s("p",[t._v("直接实现 "),s("code",[t._v("MsgHandler")]),t._v(" 等接口并 "),s("code",[t._v("手动注册")]),t._v(" 的组件的异常处理可以在实现类中自己处理。")]),t._v(" "),s("p",[t._v("基于注解的 "),s("code",[t._v("MsgHandler")]),t._v(" 的异常处理可以直接由注解实现。")]),t._v(" "),s("p",[t._v("具体配置请移步 "),s("a",{attrs:{href:""}},[t._v("配置文档")])]),t._v(" "),s("h2",{attrs:{id:"jt808requestmsghandleradvice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jt808requestmsghandleradvice"}},[t._v("#")]),t._v(" @Jt808RequestMsgHandlerAdvice")]),t._v(" "),s("p",[t._v("类比于 "),s("code",[t._v("Spring")]),t._v(" 的 "),s("code",[t._v("@ControllerAdvice")]),t._v(" 注解。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Slf4j")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Jt808RequestMsgHandlerAdvice")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuiltinDefaultExceptionHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"jt808exceptionhandler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jt808exceptionhandler"}},[t._v("#")]),t._v(" @Jt808ExceptionHandler")]),t._v(" "),s("p",[t._v("类比于 "),s("code",[t._v("Spring")]),t._v(" 的 "),s("code",[t._v("@ExceptionHandler")]),t._v(" 注解。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Slf4j")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Jt808RequestMsgHandlerAdvice")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BuiltinDefaultExceptionHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Jt808ExceptionHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processThrowable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" throwable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BuiltinDefaultExceptionHandler :"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" throwable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("传送门")]),t._v(" "),s("p",[t._v("内置的异常处理器位于 "),s("code",[t._v("BuiltinDefaultExceptionHandler")]),t._v(" 中。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);