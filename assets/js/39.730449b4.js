(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{729:function(t,i,a){"use strict";a.r(i);var p=a(46),o=Object(p.a)({},(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("Dtk-接口变更日志：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("日期")]),t._v(" "),a("th",[t._v("项目名")]),t._v(" "),a("th",[t._v("版本号")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2020/11/03")]),t._v(" "),a("td",[t._v("dtkwidget")]),t._v(" "),a("td",[t._v("5.4.1")]),t._v(" "),a("td",[a("code",[t._v("-DApplication *DApplication::globalApplication(int argc, char **argv)")]),t._v(" "),a("br"),a("code",[t._v("+DApplication *DApplication::globalApplication(int &argc, char **argv)")]),a("br"),t._v("refactor: 为已存在的DApplication对象重设命令行参数    globalApplication的argc参数和DApplication的构造保持  一致，改为使用int引用传参数。    当实例已经存在时则根据传入的argc、argv更新QCoreApplication  中保存的进程参数信息")])]),t._v(" "),a("tr",[a("td",[t._v("2020/10/29")]),t._v(" "),a("td",[t._v("dtkwidget")]),t._v(" "),a("td",[t._v("5.4.0")]),t._v(" "),a("td",[a("code",[t._v("+DApplication *DApplication::globalApplication(int &argc, char **argv)add DApplication::globalApplication")]),a("br"),t._v("添加一个用于生成DApplication的接口，主要是为了跟deepin-trubo配合使用，避免程序自身再创建DApplication对象，使用globalApplication将支持共享deepin-turbo已创建的实例。")])])])])])}),[],!1,null,null,null);i.default=o.exports}}]);