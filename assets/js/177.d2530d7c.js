(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{554:function(e,t,a){"use strict";a.r(t);var n=a(46),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("strong",[e._v("Summary:")]),e._v(" Community version of "),a("code",[e._v("Deepin")]),e._v("'s `Big Round Corners' Official version of "),a("strong",[e._v("Small, Medium, Extra Large")]),e._v(" is here! . All windows have and taskbar has got "),a("strong",[e._v("right, small rounded, large rounded (0px, 8px, 18px)")]),e._v(". Attached is a detailed tutorial on how to modify the tutorial steps, and how to modify the rounded corners at any angle.")]),e._v(" "),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/qDfvKgq1JP0",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),a("p",[e._v("[TOC]")]),e._v(" "),a("br"),e._v(" "),a("blockquote",[a("p",[e._v("Translated from the original： "),a("a",{attrs:{href:"https://xmuli.tech/posts/cd317ccc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deepin 自定义修改窗口圆角大小"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"preface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preface"}},[e._v("#")]),e._v(" Preface.")]),e._v(" "),a("p",[e._v("Some people want to stick to the big rounded corners, while others want to adjust the small rounded corners and right corners; personal experiences and living environment are different, so the citrus is different, so they have their own perspectives on the idea, and can appreciate each other!")]),e._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/20201022150848.png",width:"25%"}}),e._v(" "),a("p",[e._v("The scope of "),a("code",[e._v("DDE")]),e._v(" rounding modification is:  **all main window rounding + Dock rounding + Menu rounding  **.")]),e._v(" "),a("p",[e._v("This modification only involves the community "),a("code",[e._v("Deepin")]),e._v(" has this feature (belongs to the community customization feature, is also a certain text and the community's heart love ~ ).")]),e._v(" "),a("p",[a("code",[e._v("UOS")]),e._v(" version is not enabled by default, of course, if you want to experience it, you can also change the size of the rounded corners by command (these kinds of features, for the time being, are out of the planning. I'm also afraid of being hammered by "),a("code",[e._v("UOS")]),e._v("'s product managers and developers, and then reported as a "),a("code",[e._v("bug")]),e._v(" single by the test ladies).")]),e._v(" "),a("blockquote",[a("p",[e._v("Because "),a("code",[e._v("Deepin")]),e._v(" and "),a("code",[e._v("UOS")]),e._v(" are actually two different forms of a product.")])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"copywriting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copywriting"}},[e._v("#")]),e._v(" Copywriting:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Chinese text:")]),e._v(" "),a("code",[e._v("window rounded corner',")]),e._v("small', "),a("code",[e._v("medium',")]),e._v("large'")]),e._v(" "),a("li",[a("strong",[e._v("English text :")]),e._v(" "),a("code",[e._v("Rounded Corner")]),e._v(", "),a("code",[e._v("small")]),e._v(", "),a("code",[e._v("medium")]),e._v(", "),a("code",[e._v("large")])])]),e._v(" "),a("p",[e._v("Large rounded corners (system original style): window = 18px; Medium rounded corners: window = 8px; Small rounded corners: window = 0px; For the internal (button, item background, etc.) rounded corners size, no change.")]),e._v(" "),a("p",[e._v("Well, this is also the design from the design department (she is beautiful too).")]),e._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/eb07e579-973e-4a08-aab8-0f8e120dccfc.png",width:"25%"}}),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"modify-rounded-corner-window-ideas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-rounded-corner-window-ideas"}},[e._v("#")]),e._v(" Modify rounded corner window ideas.")]),e._v(" "),a("blockquote",[a("ol",[a("li",[e._v("First "),a("code",[e._v("fork' the official repository to your own repository. To compile the project's dependencies, run")]),e._v("sudo apt build-dep dtkgui"),a("code",[e._v(", or go to the project root and run")]),e._v("dpkg-checkbuilddeps` ;")]),e._v(" "),a("li",[e._v("Modify the code and commit it in the format (important)")]),e._v(" "),a("li",[e._v("After the test meets expectations, the code is submitted and awaits merging.")])])]),e._v(" "),a("p",[e._v("How this is achieved, modifying the place will involve designing three items in total.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dtkgui",target:"_blank",rel:"noopener noreferrer"}},[e._v("dtkgui"),a("OutboundLink")],1),e._v(": Modify the basic rounded corner values and add an interface.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dde-control-center",target:"_blank",rel:"noopener noreferrer"}},[e._v("ddde-control-center"),a("OutboundLink")],1),e._v(": add control to change the rounded corner value of the software, international translation.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dde-dock",target:"_blank",rel:"noopener noreferrer"}},[e._v("ddde-dock"),a("OutboundLink")],1),e._v(": Also change the rounded corner size of the dock in the taskbar in fashion mode.")])]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"modify-dtkgui-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-dtkgui-code"}},[e._v("#")]),e._v(" Modify dtkgui code.")]),e._v(" "),a("p",[e._v("Add the corresponding interface first; make sure "),a("code",[e._v("winID")]),e._v(" is created (otherwise a default window will be created), and then modify the value of the attribute, otherwise the dock will be grayed out, and the right-click menu will become opaque, which is a serious bug. Submit this modification with the following code.")]),e._v(" "),a("p",[a("strong",[e._v("Change code commit:")])]),e._v(" "),a("blockquote",[a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dtkgui/commit/a3b9836b83f92e308b2af58c148350471119690b",target:"_blank",rel:"noopener noreferrer"}},[e._v("commit  a3b9836b"),a("OutboundLink")],1),e._v("                // Add Modify Rounded Interface")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dtkgui/commit/de1f742edefee47963515acf63721ffb53193a8b",target:"_blank",rel:"noopener noreferrer"}},[e._v("commit de1f742e"),a("OutboundLink")],1),e._v("                 // Fix default display as right angle.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dtkgui/commit/6ae8f77d42beea9e026444f29944cc06d298b3e6",target:"_blank",rel:"noopener noreferrer"}},[e._v("commit 6ae8f77d"),a("OutboundLink")],1),e._v("                 // Fix ToolTip's rounded corners as 18px unsightly accidental bug")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dtkgui/commit/ea60f6b0bb40cad111548a8374060f06473f66b1",target:"_blank",rel:"noopener noreferrer"}},[e._v("commit ea60f6b0"),a("OutboundLink")],1),e._v("                 // Optimization code")])])])]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("After running, replace the new header file and the resulting binary with the system to see the effect")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("☁  dtkgui "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" ⚡ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf /usr/lib/x86_64-linux-gnu/libdtkgui.so.5.2.2\n☁  dtkgui "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" ⚡ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" ~/project/build-dtkgui-unknown-Debug/src/libdtkgui.so.5.2.2 /usr/lib/x86_64-linux-gnu/\n☁  dtkgui "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" ⚡  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" src/dplatformtheme.h /usr/include/libdtk-5.2.2/DGui\n")])])]),a("br"),e._v(" "),a("h3",{attrs:{id:"modify-de-control-center-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-de-control-center-code"}},[e._v("#")]),e._v(" Modify de-control-center code.")]),e._v(" "),a("p",[a("strong",[e._v("Modify code to submit:")])]),e._v(" "),a("blockquote",[a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dde-control-center/commit/a37aae159ab5fb0b8c4cbb8189e81e8ac81f0f43",target:"_blank",rel:"noopener noreferrer"}},[e._v("commit a37aae15"),a("OutboundLink")],1),e._v(" // add controls Modify the value of the large round angle")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dde-control-center/commit/b9926d9795cb39d9298d22c295eed90dd437fe11",target:"_blank",rel:"noopener noreferrer"}},[e._v("commit b9926d97"),a("OutboundLink")],1),e._v(" // Add the right application. International translation")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dde-control-center/commit/a6ea6be6927efede1ee3b7aac7265adcb62c21a9",target:"_blank",rel:"noopener noreferrer"}},[e._v("commit a6ea6be6"),a("OutboundLink")],1),e._v(" // fix layout Errors cause other controls to be compressed")])])]),e._v(" "),a("p",[e._v("Run it directly to see if there are any real-time effects.")]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"modify-dode-dock-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-dode-dock-code"}},[e._v("#")]),e._v(" Modify dode-dock code.")]),e._v(" "),a("p",[a("strong",[e._v("Change code commit:")])]),e._v(" "),a("blockquote",[a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dde-dock/commit/89cf36abf18a5a0283db739a5b3cd053b1e011f1",target:"_blank",rel:"noopener noreferrer"}},[e._v("commit 89cf36ab"),a("OutboundLink")],1),e._v(" // Dock taskbar modifying large rounded corners.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/linuxdeepin/dde-dock/commit/63953ef5d05a7320ac3bd2d952602038d6b1fb48",target:"_blank",rel:"noopener noreferrer"}},[e._v("commit 63953ef5"),a("OutboundLink")],1),e._v(" // Fix after logging out of reboot, dock The default display is right angle.")])])]),e._v(" "),a("p",[e._v("To run the compile and see the effect, you need to download the "),a("code",[e._v("dconf-editor")]),e._v(" software, search for "),a("code",[e._v("watchdog")]),e._v(", and disable the "),a("code",[e._v("dde-dock")]),e._v(" button, so that you can run the dock generated by the code instead of always displaying the system's own taskbar dock.")]),e._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/20201020202526.png",width:"50%"}}),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"post-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-optimization"}},[e._v("#")]),e._v(" Post-optimization.")]),e._v(" "),a("p",[e._v("Suddenly, a defect was reported by the upstairs test lady.")]),e._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/407bef0d-99f4-412e-a10b-7cd0729351b2.gif",width:"40%"}}),e._v(" "),a("p",[e._v('Since we only set this value in front end, every time we "logout, restart, turn off effects and then turn them back on", we lose the value '),a("code",[e._v('"DTK/windowRadius" QVariant(int, 8)')]),e._v(", which results in big rounded corners.")]),e._v(" "),a("p",[e._v("In the next stage, an assignment will be added to this value in a back-end piece to fix this flaw.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"customize-the-fillet-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customize-the-fillet-size"}},[e._v("#")]),e._v(" Customize the fillet size.")]),e._v(" "),a("h3",{attrs:{id:"mode-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode-1"}},[e._v("#")]),e._v(" Mode 1.")]),e._v(" "),a("p",[e._v('Changes to "Control Center - Personalization - Rounded Window "** (available only for '),a("code",[e._v("Deepin")]),e._v(") via Interface Adjustment. Only right angle"),a("code",[e._v("(0px")]),e._v("), small rounded corner ("),a("code",[e._v("8px")]),e._v("), and large rounded corner (18px) are adjustable.")]),e._v(" "),a("p",[a("br"),e._v(" ** Adjustable in three levels.")]),e._v(" "),a("h3",{attrs:{id:"mode-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode-2"}},[e._v("#")]),e._v(" Mode 2.")]),e._v(" "),a("p",[e._v("Execute the command by commanding Terminal Adjustment, where the specific parameter "),a("code",[e._v("8")]),e._v(" can be replaced with any number of angles, and takes effect for both "),a("code",[e._v("Deepin")]),e._v(" and "),a("code",[e._v("UOS")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Manual adjustment of terminal values "DTK/windowRadius" QVariant(int, 8)')]),e._v("\n/usr/lib/x86_64-linux-gnu/libdtk-5.2.2/DGui/bin/deepin-gui-settings --set "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"DTK/WindowRadius"')]),e._v(" -i "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v("  // Rounding value setting\n/usr/lib/x86_64-linux-gnu/libdtk-5.2.2/DGui/bin/deepin-gui-settings    // View Fillet Values\n")])])]),a("blockquote",[a("p",[e._v("PS: If there is no such program running in this path, you need to execute the： "),a("code",[e._v("sudo apt install libdtkgui5-bin")])])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"end-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-result"}},[e._v("#")]),e._v(" End result.")]),e._v(" "),a("p",[e._v("No picture. No picture. Say a  🔨：")]),e._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/20201022145645.png",width:"20%"}}),e._v(" "),a("p",[e._v("Let's start with the final realization.")]),e._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/截图录屏_dde-desktop_20201015211555.png",width:"90%"}}),e._v(" "),a("br"),e._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/截图录屏_dde-desktop_20201015211629.png",width:"90%"}}),e._v(" "),a("br"),e._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xmuli/xmuliPic@pic/2020/截图录屏_dde-desktop_20201015211822.png",width:"90%"}}),e._v(" "),a("br"),e._v(" "),a("p",[e._v("#Breakdown summary~.")]),e._v(" "),a("p",[e._v("This time the function is very small, but it is the community users have always wanted the function, submit a lot this time. The first is to be tested by the test lady, the second is to adhere to a commit to do only one thing. Third, to participate in the community to contribute to the partners, a submission demonstration, showing how to submit from "),a("code",[e._v("github")]),e._v(" "),a("code",[e._v("pr")]),e._v(" and then be merged into the main code flow. Fourthly, share your own details and happiness.")]),e._v(" "),a("p",[e._v("For any piece of software, I personally feel that it should be to uphold the ** \"people-oriented \"** point of view. ** a product should have temperature **, in some details of the place with the care of the user, rather than knowledge of a cold device. Not a little emotion, although the need to be able to use, but do not use the discarded, and then never thought of. Life is short, have to do a little interesting things. Always do my best to add a thought in it. I'm not sure how much I'll be able to do.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"participate-together-in-contributing-to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#participate-together-in-contributing-to"}},[e._v("#")]),e._v(" Participate together in contributing to.")]),e._v(" "),a("p",[e._v("If you are interested, you can also add some new features to it and merge it directly into the upstream Deepin mainline code. The source code can be downloaded directly from "),a("a",{attrs:{href:"https://github.com/linuxdeepin",target:"_blank",rel:"noopener noreferrer"}},[e._v("linuxdeepin"),a("OutboundLink")],1),e._v(" and is synchronized with the intranet code in real time. For DTK, in addition to the source code comments, you can also read the "),a("a",{attrs:{href:"https://linuxdeepin.github.io/dtk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DTK API"),a("OutboundLink")],1),e._v(" web page (currently updated daily). If you want more people to experience the effect of your code, just submit "),a("code",[e._v("pr")]),e._v(" and remember to refer to this "),a("a",{attrs:{href:"https://github.com/linuxdeepin/developer-center/wiki/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commit Submission Specification"),a("OutboundLink")],1),e._v(" for submission specifications. Commit%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83) Oh. See you next~~.")]),e._v(" "),a("br"),e._v(" "),a("p",[a("strong",[e._v("If you want to be merged quickly, attach some suggestions:")])]),e._v(" "),a("ol",[a("li",[e._v("for porting to other distributions, bug fixes, such contributions pr are easy and fast to merge;")]),e._v(" "),a("li",[e._v("for some community customization features, it is recommended to set them to take effect only on community Deepin, and to disable them by default on UOS to speed up the merge process. 3. for some new features and functions, if they are needed in the UOS version or are in the planning stage, it is recommended to set them to take effect only on community Deepin;")]),e._v(" "),a("li",[e._v("for some new features and functions, if they are required by the UOS version or are in the planning stage, they can also be merged quickly; 4. for individuals and from the community, it is recommended to set it to work only on community Deepin;")]),e._v(" "),a("li",[e._v("for individuals and rounds from the community, it is also easy to merge, with communication that the community is looking forward to it (less strict rules and processes than the commercial line). 5;")]),e._v(" "),a("li",[e._v("to test as fully and completely as possible before submitting.")]),e._v(" "),a("li",[a("strong",[e._v("Be sure to pay attention to the "),a("a",{attrs:{href:"https://github.com/linuxdeepin/developer-center/wiki/Commit%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83",target:"_blank",rel:"noopener noreferrer"}},[e._v("Commit Submission Specification"),a("OutboundLink")],1),e._v(";")])]),e._v(" "),a("li",[e._v("you can communicate in the community bbs forum or github to remind the")])]),e._v(" "),a("p",[e._v("In addition, the following interface classes [dsysinfo.h](https://github.com/linuxdeepin/dtkcore/blob/523a51ab69e97b5fd8c906cb83ed3049888f680d/src/ dsysinfo.h), and write a detailed tutorial sometime, distinguishing between the various versions of the system.")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[e._v("QString "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("DSysInfo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("uosEditionName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" QLocale "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("locale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// Get the version name, for example, "Professional"/"Home"/"Community"....')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("UosEdition")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    UosEditionUnknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    UosProfessional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//专业版")]),e._v("\n    UosHome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//个人版")]),e._v("\n    UosCommunity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//社区版")]),e._v("\n    UosMilitary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    UosEnterprise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    UosEnterpriseC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    UosEuler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 欧拉版")]),e._v("\n    UosMilitaryS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// for Server")]),e._v("\n\n    UosEditionCount "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// must at last")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The following interface is not recommended, as it will be removed later.")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ProductType")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        UnknownType "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        Deepin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        ArchLinux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        CentOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        Debian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        Fedora"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        LinuxMint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        Manjaro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        openSUSE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        SailfishOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        Ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        Uos\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("DeepinType")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        UnknownDeepin "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        DeepinDesktop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        DeepinProfessional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        DeepinServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        DeepinPersonal\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("br"),e._v(" "),a("h2",{attrs:{id:"updated-2020-11-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updated-2020-11-16"}},[e._v("#")]),e._v(" Updated: 2020-11-16")]),e._v(" "),a("p",[e._v("However, due to various factors such as release schedule, expected release strategy, overall rush, allowing time for testing, and coordinating with other project developers and working together, it is not possible to schedule the fixes immediately once they are applied and see the effect.")]),e._v(" "),a("p",[e._v("Fix the bug that the default transparency module is compressed due to a layout error in "),a("strong",[e._v("Control Center and Modify Window with Rounded Corners")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("This part of the fix involves front-end support:\n"),a("ul",[a("li",[a("code",[e._v("dde-control-center")]),e._v(": [a6ea6be6](https://github.com/linuxdeepin/dde-control-center/commit/ a6ea6be6927efede1ee3b7aac7265adcb62c21a9)")])])])]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("Fix "),a("strong",[e._v("after logging out/restarting, the right corner of the taskbar and active window becomes rounded and the state cannot be saved.")])]),e._v(" "),a("ul",[a("li",[e._v("This part of the change concerns backend support:\n"),a("ul",[a("li",[a("code",[e._v("dde-daemon")]),e._v(" : "),a("a",{attrs:{href:"https://github.com/linuxdeepin/dde-daemon/commit/a6fee1b90fad7bf3a5414a241c90266bc2275322",target:"_blank",rel:"noopener noreferrer"}},[e._v("a6fee1b9"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("startdde")]),e._v(" : "),a("a",{attrs:{href:"https://github.com/linuxdeepin/startdde/commit/f7b62e85d599e0c87734d2f4365b3fd15dd49cee",target:"_blank",rel:"noopener noreferrer"}},[e._v("f7b62e85"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("deepin-desktop-schemas")]),e._v(":  "),a("a",{attrs:{href:"https://github.com/linuxdeepin/deepin-desktop-schemas/commit/73b992dae8984675a3d93c96c200dd5baf31fe88",target:"_blank",rel:"noopener noreferrer"}},[e._v("73b992da"),a("OutboundLink")],1),e._v("，  "),a("a",{attrs:{href:"https://github.com/linuxdeepin/deepin-desktop-schemas/commit/9b448b22823d8d2fa051f792f161fd5c3eaa89af",target:"_blank",rel:"noopener noreferrer"}},[e._v("9b448b22"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("This part of the revision concerns front-end support:\n"),a("ul",[a("li",[a("code",[e._v("dde-control-center")]),e._v(": "),a("a",{attrs:{href:"https://github.com/linuxdeepin/dde-control-center/commit/e523a87f80726dff196bccb78bbe5b1c2b0366ad",target:"_blank",rel:"noopener noreferrer"}},[e._v("e523a87f"),a("OutboundLink")],1)])])])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary:")]),e._v(" "),a("p",[e._v("The method is to modify the value of a "),a("code",[e._v("dtkgui")]),e._v(" item, then regenerate the corresponding binary and replace it in the system directory; although it works for the time being, it is not standardized, and it will fail after reboot or logout. It doesn't feel so simple and elegant;**")]),e._v(" "),a("p",[e._v("I'm just saying it's working. Who's to say they haven't done it yet? The enthusiastic techies who can't wait to get started will have to find a way to make it work, and we'll see what we can achieve first.")]),e._v(" "),a("p",[a("strong",[e._v("But as a formal change,")]),e._v(" it must not be treated in the same way, it has to conform to a dtk style, user-friendly, functional and product design planning must not conflict, interface changes must be standardized, and the interface must be kept backward compatible.")]),e._v(" "),a("p",[a("br"),e._v("It is important that the interface is standardized and kept backwards compatible.")]),e._v(" "),a("p",[e._v("I thought I was modifying a simple feature, but it would end up involving so many items I didn't expect: "),a("code",[e._v("dde-daemon")]),e._v(", "),a("code",[e._v("startdde")]),e._v(", "),a("code",[e._v("deepin-desktop-schemas")]),e._v(", "),a("code",[e._v("dde-control-center")]),e._v(", "),a("code",[e._v("dtkgui")]),e._v(", `dde-dock There are a total of 6 of them, many of them are very important core base libraries, if you modify them, it will affect many other projects, so it is more careful and cautious to modify them. But I'm happy to add this feature to the community at last. "),a("br"),e._v("It's a good thing that we have a lot of people working on this;")]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"series-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#series-address"}},[e._v("#")]),e._v(" Series Address.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/xmuli/QtExamples",target:"_blank",rel:"noopener noreferrer"}},[e._v("QtExamples"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Welcome to the "),a("code",[e._v("star")]),e._v(" and "),a("code",[e._v("fork")]),e._v(" series of QT / DTK learnings, with a table of contents for learning the ins and outs.")])])}),[],!1,null,null,null);t.default=o.exports}}]);