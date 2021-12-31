(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{892:function(t,s,a){"use strict";a.r(s);var e=a(243),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node-js-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-api"}},[t._v("#")]),t._v(" Node.js API")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" eject "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("h3",{attrs:{id:"createapp-options-promise-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createapp-options-promise-app"}},[t._v("#")]),t._v(" createApp([options]): Promise<App>")]),t._v(" "),a("p",[t._v("创建一个 VuePress 应用实例。")]),t._v(" "),a("h4",{attrs:{id:"app-prototype-process-promise-void-never"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-prototype-process-promise-void-never"}},[t._v("#")]),t._v(" App.prototype.process: () => Promise<void> | never")]),t._v(" "),a("p",[t._v("用于准备当前站点上下文的异步方法。其中包含加载页面和插件、应用插件等。")]),t._v(" "),a("h4",{attrs:{id:"app-prototype-dev-promise-app-never"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-prototype-dev-promise-app-never"}},[t._v("#")]),t._v(" App.prototype.dev: () => Promise<App> | never")]),t._v(" "),a("p",[t._v("使用当前应用程序上下文启动一个 devProcess.")]),t._v(" "),a("h4",{attrs:{id:"app-prototype-build-promise-app-never"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-prototype-build-promise-app-never"}},[t._v("#")]),t._v(" App.prototype.build: () => Promise<App> | never")]),t._v(" "),a("p",[t._v("使用当前应用程序上下文启动一个 buildProcess.")]),t._v(" "),a("h3",{attrs:{id:"dev-options-promise-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dev-options-promise-app"}},[t._v("#")]),t._v(" dev([options]): Promise<App>")]),t._v(" "),a("p",[t._v("启动一个 Dev Server，实际上它是由 "),a("code",[t._v("createapp")]),t._v(" 实现的：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dev")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"build-options-promise-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-options-promise-app"}},[t._v("#")]),t._v(" build([options]): Promise<App>")]),t._v(" "),a("p",[t._v("将源文件构建为静态站点, 实际上它是由 "),a("code",[t._v("createapp")]),t._v(" 实现的：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"eject-targetdir-promise-void"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eject-targetdir-promise-void"}},[t._v("#")]),t._v(" eject(targetDir): Promise<void>")]),t._v(" "),a("p",[t._v("将默认主题复制到 "),a("code",[t._v("{targetDir}/.vuepress/theme")]),t._v("中进行自定义。")]),t._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("h3",{attrs:{id:"sourcedir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sourcedir"}},[t._v("#")]),t._v(" sourceDir")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("true")])])]),t._v(" "),a("p",[t._v("指定 VuePress 站点的源目录。")]),t._v(" "),a("h3",{attrs:{id:"theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme"}},[t._v("#")]),t._v(" theme")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("参见 "),a("RouterLink",{attrs:{to:"/zh/config/#theme"}},[t._v("theme")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("array")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("参见 "),a("RouterLink",{attrs:{to:"/zh/config/#plugins"}},[t._v("plugins")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"temp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#temp"}},[t._v("#")]),t._v(" temp")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("参见 "),a("RouterLink",{attrs:{to:"/zh/config/#temp"}},[t._v("temp")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"dest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dest"}},[t._v("#")]),t._v(" dest")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("false")])])]),t._v(" "),a("p",[t._v("参见 "),a("RouterLink",{attrs:{to:"/zh/config/#dest"}},[t._v("dest")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"siteconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#siteconfig"}},[t._v("#")]),t._v(" siteConfig")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("object")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("{}")])])]),t._v(" "),a("p",[t._v("当你想编写测试且不想依赖于实际的配置文件时，它将非常有用。想要查看所有的配置选项，请移步 "),a("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("siteConfig")]),t._v("。")],1)])}),[],!1,null,null,null);s.default=r.exports}}]);