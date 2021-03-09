(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{717:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("简  述：")]),t._v(" "),a("code",[t._v("DTK")]),t._v(" 常用和测试代码片，在 "),a("code",[t._v("deepin 20")]),t._v(" 或 "),a("code",[t._v("uos 20")]),t._v(" 中，全部使用 "),a("code",[t._v("DTK")]),t._v(" 开发，其中有一些是经常遇到的定位 "),a("code",[t._v("bug")]),t._v(" 和修改的代码片。在此抛转引玉，提交一点开发的贡献")]),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[t._v("#")]),t._v(" 开发环境：")]),t._v(" "),a("p",[a("strong",[t._v("💻：")]),t._v(" "),a("code",[t._v("uos 20")]),t._v(" 📎 "),a("code",[t._v("deepin 20")]),t._v(" 📎 "),a("code",[t._v("gcc/g++ 8.3")]),t._v(" 📎 "),a("code",[t._v("gdb8.0")])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"将-dtkwidget-项目注册到系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将-dtkwidget-项目注册到系统"}},[t._v("#")]),t._v(" 将 dtkwidget 项目注册到系统：")]),t._v(" "),a("p",[t._v("这里以 "),a("code",[t._v("dtkwidget")]),t._v(" 为例，它在系统的动态库是存放路径为 "),a("code",[t._v("/usr/lib/x86_64-linux-gnu/")])]),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/20200407_134649.png",width:"100%"}}),t._v(" "),a("ul",[a("li",[a("strong",[t._v("解答图片：")]),t._v("\n经过测试，系统库和 DTK 项目的生成的 libdtkwidget.so 实际使用的都是 最新的 5.xxx 版本，这里面的是 .so.5.1.0；系统库里面遗留下来的 2.xxx 版本可能是提供给某些没有v20版本的项目使用的。")]),t._v(" "),a("li",[t._v("若是想要代码片生效的话，则将项目生成的 .so 文件替代换掉 系统路径下，若是有新的接口改动，那么对应的头文件也要一起替换掉")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#【命令： 5.1.0 需要替换为实际的最大】")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[拷贝二进制文件：]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf /usr/lib/x86_64-linux-gnu/libdtkwidget.so.5.1.0\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/build-dtkwidget-unknown-Debug/src/libdtkwidget.so.5.1.0 /usr/lib/x86_64-linux-gnu/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[拷贝头文件：]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /home/muli/project/dtkwidget/src/widgets/dslider.h /usr/include/libdtk-5.1.0/DWidget/\n")])])]),a("p",[a("strong",[t._v("PS（uos / deepin）：")])]),t._v(" "),a("p",[t._v("对于 "),a("code",[t._v("dtkwidget")]),t._v(" 项目会生成 "),a("code",[t._v("libdtkwidget.so")]),t._v(" 动态库；系统存放路径为 "),a("code",[t._v("/usr/lib/x86_64-linux-gnu/")]),t._v(" ；")]),t._v(" "),a("p",[t._v("项目 "),a("code",[t._v("dtkgui")]),t._v(" 会生成 "),a("code",[t._v("libdtkgui.so")]),t._v(" 动态库文件；系统存放路径为 "),a("code",[t._v("/usr/lib/x86_64-linux-gnu/")]),t._v(" ；")]),t._v(" "),a("p",[t._v("项目 "),a("code",[t._v("qt5integration")]),t._v(" 会生成 "),a("code",[t._v("libchameleon.so")]),t._v(" 动态库文件在 "),a("code",[t._v("./bin/plugins/styles/libchameleon.so")]),t._v(" 下 ；"),a("code",[t._v("/usr/lib/x86_64-linux-gnu/qt5/plugins/styles/")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf /usr/lib/x86_64-linux-gnu/qt5/plugins/styles/libchameleon.so\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v("  ./bin/plugins/styles/libchameleon.so /usr/lib/x86_64-linux-gnu/qt5/plugins/styles/\n")])])]),a("br"),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"判断-系统主题是浅色还是暗色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断-系统主题是浅色还是暗色"}},[t._v("#")]),t._v(" 判断 系统主题是浅色还是暗色：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("DGuiApplicationHelper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("guiAppHelp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DGuiApplicationHelper")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("guiAppHelp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("themeType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" DGuiApplicationHelper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ColorType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("DarkType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//暗色主题")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//浅色主题")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"对某一颜色-在浅-暗主题对其亮度进行修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对某一颜色-在浅-暗主题对其亮度进行修改"}},[t._v("#")]),t._v(" 对某一颜色，在浅 / 暗主题对其亮度进行修改：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//DGuiApplicationHelper::toColorType 获取颜色的明亮度，将其转换为主题类型的枚举值。")]),t._v("\n\nQColor "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lineColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("palette"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QPalette"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DGuiApplicationHelper")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toColorType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lineColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" DGuiApplicationHelper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("LightType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此颜色在浅色主题下，亮度 -10")]),t._v("\n\tlineColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DGuiApplicationHelper")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("adjustColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此颜色在暗色色主题下，亮度 +10")]),t._v("\n\tlineColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DGuiApplicationHelper")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("adjustColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"属性的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性的使用"}},[t._v("#")]),t._v(" 属性的使用：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Q_DECLARE_METATYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QMargins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_d_margins"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QVariant")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("margins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nQMargins magins "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" par"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_d_margins"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("QMargins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("par"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("property")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_d_margins"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isValid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tcontent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentsMargins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("QMargins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\tcontent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContentsMargins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("magins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"在-paintevent-里面获取一个颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-paintevent-里面获取一个颜色"}},[t._v("#")]),t._v(" 在 paintEvent() 里面获取一个颜色：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliderStrip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("paintEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QPaintEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Q_UNUSED")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    QPainter "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" dpa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DApplicationHelper")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("palette")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    QPen penLine "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("QPen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dpa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("textTips")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    QPen penNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("QPen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dpa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DPalette"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObviousBackground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    pa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("penLine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"将自定义风格-应用于-其他的软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将自定义风格-应用于-其他的软件"}},[t._v("#")]),t._v(" 将自定义风格 应用于 其他的软件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("qtcreator -style windows\n\nqtcreator -style chameleon\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"打印-qboxlayout里面的所有元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打印-qboxlayout里面的所有元素"}},[t._v("#")]),t._v(" 打印 QBoxLayout里面的所有元素：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("hBoxLayout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    QLayoutItem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QLayoutItem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("hBoxLayout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("itemAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("qDebug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("widget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"qt判断鼠标是否在某子窗口控件上方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qt判断鼠标是否在某子窗口控件上方"}},[t._v("#")]),t._v(" QT判断鼠标是否在某子窗口控件上方：")]),t._v(" "),a("p",[t._v("需要注意的是，子窗口获取geometry，是相对于父窗口的相对位置，QCursor::pos()获取的是鼠标绝对位置，要不将父窗口的相对位置进行换算，要不将鼠标的绝对位置进行换算，这里本文采用将鼠标绝对位置换算到控件上，示例代码如下：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ui"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("groupBox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("geometry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapFromGlobal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QCursor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"获取项目中的-svg-图片资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取项目中的-svg-图片资源"}},[t._v("#")]),t._v(" 获取项目中的 .svg 图片资源：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" SP_DialogResetButton"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            icon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("QIcon")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromTheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("QLatin1String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"edit-clear"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"下载地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载地址"}},[t._v("#")]),t._v(" 下载地址：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/xmuli/QtExamples",target:"_blank",rel:"noopener noreferrer"}},[t._v("QtExamples"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("欢迎 star 和 fork 这个系列的 linux 学习，附学习由浅入深的目录。")])])}),[],!1,null,null,null);s.default=e.exports}}]);