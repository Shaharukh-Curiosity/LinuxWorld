(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{GcIU:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),i=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),o=u("VjyN"),s=u("AytR"),r=u("/Yn+"),a=function(){function l(){this.if_else=[],this.post_object={title:"",publisher:"",description:"",body:"",conclusion:""},this.client=Object(o.a)({space:s.a.contentful.spaceId,accessToken:s.a.contentful.accessToken})}return l.prototype.returnHtmlFromRichText=function(l){return null==l||"document"!==l.nodeType?"<p>Error</p>":Object(r.documentToHtmlString)(l)},l.prototype.ngOnInit=function(){var l=this;this.client.getEntry("2eRFt7arajIhuYnoDGGM01").then(function(n){l.if_else=n,l.post_object.title=l.if_else.fields.title,l.post_object.publisher=l.if_else.fields.publisher,l.post_object.description=l.if_else.fields.description,l.post_object.body=l.if_else.fields.body,l.post_object.conclusion=l.if_else.fields.conclusion,document.getElementById("textbody").innerHTML=l.returnHtmlFromRichText(l.post_object.body),console.log(l.post_object)}).catch(function(l){console.log(l)})},l}(),b=function(){return function(){}}(),c=u("pMnS"),p=u("ZYCi"),h=u("Ip0R"),m=t.rb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding-top:50px}.card[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}body[_ngcontent-%COMP%]{padding:0;margin:0}a[_ngcontent-%COMP%]{text-decoration:none;color:#000}h4[_ngcontent-%COMP%]{padding:10%;font-family:Merriweather,serif;line-height:30px;color:#323b45;font-size:22px}"]],data:{}});function d(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,33,"html",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,5,"head",[],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,1,"title",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Shell Script Tutorials"])),(l()(),t.tb(4,0,null,null,0,"meta",[["charset","utf-8"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,0,"meta",[["content","width=device-width, initial-scale=1.0"],["name","viewport"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,0,"meta",[["content","Shaharukh Parmar"],["name","author"]],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,26,"body",[],null,null,null,null,null)),(l()(),t.tb(8,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(9,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,5,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t.tb(11,0,null,null,4,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,3,"a",[["routerLink","/introduction-linux-shell-scripting"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Db(l,13).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.sb(13,671744,null,0,p.l,[p.k,p.a,h.h],{routerLink:[0,"routerLink"]},null),(l()(),t.tb(14,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Get Started"])),(l()(),t.tb(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(17,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(26,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(27,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(29,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(32,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(33,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){l(n,13,0,"/introduction-linux-shell-scripting")},function(l,n){l(n,12,0,t.Db(n,13).target,t.Db(n,13).href)})}function g(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,1,"app-shell-script-home",[],null,null,null,d,m)),t.sb(1,114688,null,0,e,[],null,null)],function(l,n){l(n,1,0)},null)}var f=t.pb("app-shell-script-home",e,g,{},{},[]),y=t.rb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding-top:50px}h1[_ngcontent-%COMP%]{font-family:Merriweather,serif;line-height:45px;color:#323b45;font-size:33px;font-weight:700}h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Merriweather,serif;line-height:23px;color:#323b45;font-size:17px}.card[_ngcontent-%COMP%]{background-color:#fff;padding:3%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}img[_ngcontent-%COMP%]{width:60%;height:60%}"]],data:{}});function w(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,115,"html",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,27,"head",[],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,1,"title",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["What is Shell Script"])),(l()(),t.tb(4,0,null,null,0,"meta",[["charset","utf-8"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,0,"meta",[["content","what is shell script,how to use it,basic program of shell script"],["name","keyword"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,0,"meta",[["content","how to run shell script, give permsission to run shell script file or .sh file"],["name","description"]],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,0,"meta",[["content","width=device-width, initial-scale=1.0"],["name","viewport"]],null,null,null,null,null)),(l()(),t.tb(8,0,null,null,0,"link",[["href","https://visionrosetta.in/introduction-linux-shell-scripting"],["rel","canonical"]],null,null,null,null,null)),(l()(),t.tb(9,0,null,null,0,"meta",[["content","https://visionrosetta.in/introduction-linux-shell-scripting"],["property","og:url"]],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,0,"meta",[["content","website"],["property","og:type"]],null,null,null,null,null)),(l()(),t.tb(11,0,null,null,0,"meta",[["content","Introduction of bash shell"],["property","og:title"]],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,0,"meta",[["content","what is shell script and how to use for begginers"],["property","og:description"]],null,null,null,null,null)),(l()(),t.tb(13,0,null,null,0,"meta",[["content","https://visionrosetta.in/assets/images/shellscript/kernel_diagram.png"],["property","og:image"]],null,null,null,null,null)),(l()(),t.tb(14,0,null,null,0,"meta",[["content","1632104053519386"],["property","fb:app_id"]],null,null,null,null,null)),(l()(),t.tb(15,0,null,null,0,"meta",[["content","en_US"],["property","og:locale"]],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,0,"meta",[["content","visionrosetta"],["property","og:site_name"]],null,null,null,null,null)),(l()(),t.tb(17,0,null,null,0,"meta",[["content","738"],["property","og:image:width"]],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,0,"meta",[["content","415"],["property","og:image:height"]],null,null,null,null,null)),(l()(),t.tb(19,0,null,null,0,"meta",[["content","Ubuntu"],["property","article:tag"]],null,null,null,null,null)),(l()(),t.tb(20,0,null,null,0,"meta",[["content","operating system"],["property","article:section"]],null,null,null,null,null)),(l()(),t.tb(21,0,null,null,0,"meta",[["content","2020-05-22T02:04:43.495Z"],["property","article:published_time"]],null,null,null,null,null)),(l()(),t.tb(22,0,null,null,0,"meta",[["content","image/png"],["property","og:image:type"]],null,null,null,null,null)),(l()(),t.tb(23,0,null,null,0,"meta",[["content","Steps by Steps Guides to ubuntu 20.04  LTS installation to make task easy for the beginners"],["name","twitter:card"]],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,0,"meta",[["content","@visionrosetta"],["name","twitter:site"]],null,null,null,null,null)),(l()(),t.tb(25,0,null,null,0,"meta",[["content","https://visionrosetta.in/introduction-linux-shell-scripting"],["name","twitter:url"]],null,null,null,null,null)),(l()(),t.tb(26,0,null,null,0,"meta",[["content","Introduction of Shell Script"],["name","twitter:title"]],null,null,null,null,null)),(l()(),t.tb(27,0,null,null,0,"meta",[["content","steps by steps guides of using shell script for begginers"],["name","twitter:description"]],null,null,null,null,null)),(l()(),t.tb(28,0,null,null,0,"meta",[["content","https://visionrosetta.in/assets/images/shellscript/kernel_diagram.png"],["name","twitter:image"]],null,null,null,null,null)),(l()(),t.tb(29,0,null,null,86,"body",[],null,null,null,null,null)),(l()(),t.tb(30,0,null,null,84,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(31,0,null,null,83,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(32,0,null,null,82,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.tb(33,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["What is a Shell and Shell Scripting(Introduction)"])),(l()(),t.tb(35,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Written By:Shaharukh Parmar, 22,May 2020 "])),(l()(),t.tb(37,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" we always have been tech enthusiast and are loved to do various experiments in operating systems, some of you might have thought how this all Linux command will work internally and how to interact with the kernel to allocate on-demand user request, this post is all about before you make the jump to writing shell script code you will have to understand about operating system main component which is listed below "])),(l()(),t.tb(39,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Kernel"])),(l()(),t.tb(41,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" - we can say kernel is the heart of the operating system we know without heart what will happen, Kernel is the main program is written for the operating system to interact with the low-level machine component For Example - you might have learned in operating system subject about User level space and kernel-level space this is perfect example fit here to enlighten you more about kernel working "])),(l()(),t.tb(43,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["let understand how kernel does work with help of diagram "])),(l()(),t.tb(45,0,null,null,1,"div",[["class","col-sm"]],null,null,null,null,null)),(l()(),t.tb(46,0,null,null,0,"img",[["alt","how kernel work internally"],["src","assets/images/shellscript/kernel_diagram.png"]],null,null,null,null,null)),(l()(),t.tb(47,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Kernel Mainly Managed the following Resources"])),(l()(),t.tb(49,0,null,null,9,"p",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" 1: File Management"])),(l()(),t.tb(51,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" 2: Process Management"])),(l()(),t.tb(53,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" 3: I/O Management"])),(l()(),t.tb(55,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" 4: Memory Management"])),(l()(),t.tb(57,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" 5: Disk Management "])),(l()(),t.tb(59,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),t.tb(60,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["What is a shell"])),(l()(),t.tb(62,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" - a shell script is nothing more a list of command in a computer program that is run by Unix shell "])),(l()(),t.tb(64,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.tb(65,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Author of Bourne Shell"])),(l()(),t.tb(67,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Stephen Richard(7, January,1944)is a computer scientist, which is the foundation for the standard command-line interfaces to Unix. "])),(l()(),t.tb(69,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.tb(70,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["What is the purpose of run shell script"])),(l()(),t.tb(72,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" at some point, we need to work on the file system "])),(l()(),t.tb(74,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(75,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["For Instance :"])),(l()(),t.Ib(-1,null,[" I want to change the content of the particular file, run file with such privileges, "])),(l()(),t.tb(78,0,null,null,26,"p",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Before we dive into we must have to understand about different types of shell available for Linux system, "])),(l()(),t.tb(80,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(81,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" There are Total 3 Types of Shell"])),(l()(),t.tb(83,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(84,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" 1:Bash Shell(Bourne Again Shell)"])),(l()(),t.tb(86,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" 2:C Shell(CSH)"])),(l()(),t.tb(88,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" 3:Korn Shell(KSH)"])),(l()(),t.tb(90,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(91,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" 1:Bash Shell"])),(l()(),t.tb(93,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" It is most widely used shell in Linux system, it comes as default login shell in Linux distribution and another operating system (macOS).if you want to install on windows you can "])),(l()(),t.tb(95,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(96,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" 2:C Shell"])),(l()(),t.tb(98,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" -the C Shell is also Unix shell created by Bill Joy in the late 1970s, it follows all syntax similar we are used in C Programming "])),(l()(),t.tb(100,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(101,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" 3:Korn Shell"])),(l()(),t.tb(103,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" -The Korn is the Unix shell often called a command interpreter, it was developed by David Korn of Bell Labs "])),(l()(),t.tb(105,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(106,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),t.tb(107,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Let's see how bash shell communicate internally with kernel and operating system through diagram"])),(l()(),t.tb(109,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.tb(110,0,null,null,0,"img",[["alt","how shell work internally"],["src","assets/images/shellscript/shell_diagram.png"]],null,null,null,null,null)),(l()(),t.tb(111,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(112,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.tb(113,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" I hope you got to know basic about Linux"])),(l()(),t.tb(115,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}function I(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,1,"app-shell-intro",[],null,null,null,w,y)),t.sb(1,114688,null,0,i,[],null,null)],function(l,n){l(n,1,0)},null)}var x=t.pb("app-shell-intro",i,I,{},{},[]),v=t.rb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{padding-top:50px;font-family:Merriweather,serif;line-height:23px;color:#323b45;font-size:17px}.card[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);padding:3%}h1[_ngcontent-%COMP%]{font-family:Merriweather,serif;line-height:45px;color:#323b45;font-size:33px;font-weight:700}#textbody[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Merriweather,serif;line-height:23px;color:#323b45;font-size:17px}"]],data:{}});function _(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,35,"html",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,5,"head",[],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,1,"title",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["if-else statement"])),(l()(),t.tb(4,0,null,null,0,"meta",[["charset","utf-8"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,0,"meta",[["content","how to write the if ,if.else , nested if and else if ladder in shell script"],["name","keyword"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,0,"meta",[["content","conditional statement in shell script on linux operating system, how to write simple if statement,else if in shell script"],["name","description"]],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,28,"body",[],null,null,null,null,null)),(l()(),t.tb(8,0,null,null,27,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(9,0,null,null,26,"div",[["class","row"],["style","border: 2px salmon;"]],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,25,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.tb(11,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Ib(12,null,[" "," "])),(l()(),t.tb(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(14,null,["Written By:",""])),(l()(),t.tb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(16,null,[" "," "])),(l()(),t.tb(17,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,1,"div",[["class","col-sm-2"],["style","margin-left: 9%;"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" If Statement "])),(l()(),t.tb(20,0,null,null,1,"div",[["clss","com-sm-2"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" If-Else Statement "])),(l()(),t.tb(22,0,null,null,1,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" If Else-if Statement "])),(l()(),t.tb(24,0,null,null,1,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" Nested If "])),(l()(),t.tb(26,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(27,0,null,null,1,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t.tb(28,0,null,null,0,"img",[["alt","shell script if statement"],["src","assets/images/shellscript/conditional_statment/if_statment.png"]],null,null,null,null,null)),(l()(),t.tb(29,0,null,null,1,"div",[["class","col-sm-2"],["style","border: 2px salmon;"]],null,null,null,null,null)),(l()(),t.tb(30,0,null,null,0,"img",[["alt","shell script if statement"],["src","assets/images/shellscript/conditional_statment/if_statment.png"]],null,null,null,null,null)),(l()(),t.tb(31,0,null,null,1,"div",[["class","col-sm-2"],["style","border: 2px salmon;"]],null,null,null,null,null)),(l()(),t.tb(32,0,null,null,0,"img",[["alt","shell script if statement"],["src","assets/images/shellscript/conditional_statment/if_statment.png"]],null,null,null,null,null)),(l()(),t.tb(33,0,null,null,1,"div",[["class","col-sm-2"],["style","border: 2px salmon;"]],null,null,null,null,null)),(l()(),t.tb(34,0,null,null,0,"img",[["alt","shell script if statement"],["src","assets/images/shellscript/conditional_statment/if_statment.png"]],null,null,null,null,null)),(l()(),t.tb(35,0,null,null,0,"div",[["id","textbody"]],null,null,null,null,null))],null,function(l,n){var u=n.component;l(n,12,0,u.post_object.title),l(n,14,0,u.post_object.publisher),l(n,16,0,u.post_object.description)})}function k(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,1,"app-conditional-statment",[],null,null,null,_,v)),t.sb(1,114688,null,0,a,[],null,null)],function(l,n){l(n,1,0)},null)}var S=t.pb("app-conditional-statment",a,k,{},{},[]);u.d(n,"ShellScriptModuleNgFactory",function(){return M});var M=t.qb(b,[],function(l){return t.Ab([t.Bb(512,t.j,t.eb,[[8,[c.a,f,x,S]],[3,t.j],t.z]),t.Bb(4608,h.m,h.l,[t.w,[2,h.A]]),t.Bb(1073742336,h.b,h.b,[]),t.Bb(1073742336,p.m,p.m,[[2,p.r],[2,p.k]]),t.Bb(1073742336,b,b,[]),t.Bb(1024,p.i,function(){return[[{path:"shell-script-tutorials",component:e},{path:"introduction-linux-shell-scripting",component:i},{path:"conditional-statement-in-shell-script",component:a}]]},[])])})}}]);