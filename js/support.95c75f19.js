(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["support"],{"3c68":function(e,t,n){"use strict";var a=n("7a23"),c={class:"cpn-get-in-touch"},o={class:"contain"},r={key:0,class:"t-big text-center"},l={key:1,class:"t-big text-center"},s=Object(a["createTextVNode"])("GET IN "),i=Object(a["createElementVNode"])("span",{class:"tune"},"TOUCH",-1),u=[s,i],m=Object(a["createElementVNode"])("div",{class:"t-small text-center t2"},"Tell us everything about your questions/problem,we’ll be glad to help. Fill out the form, we will get back to you shortly.",-1),d=Object(a["createElementVNode"])("div",{class:"label"},"First Name",-1),b=Object(a["createElementVNode"])("div",{class:"label"},"Last Name",-1),j=Object(a["createElementVNode"])("div",{class:"label"},"Your Email",-1),O=Object(a["createElementVNode"])("div",{class:"label"},"Your Message",-1),p={class:"text-right"},f=Object(a["createTextVNode"])("Send Message");function g(e,t,n,s,i,g){var v=Object(a["resolveComponent"])("el-input"),V=Object(a["resolveComponent"])("el-col"),N=Object(a["resolveComponent"])("el-row"),h=Object(a["resolveComponent"])("el-button");return Object(a["openBlock"])(),Object(a["createElementBlock"])("section",c,[Object(a["createElementVNode"])("div",o,[g.haveTitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[Object(a["renderSlot"])(e.$slots,"title")])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,u)),m,Object(a["createVNode"])(N,{gutter:40},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(V,{sm:12},{default:Object(a["withCtx"])((function(){return[d,Object(a["createVNode"])(v,{class:"input required",modelValue:i.form.fName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.form.fName=e}),placeholder:"What’s your first name?"},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(V,{sm:12},{default:Object(a["withCtx"])((function(){return[b,Object(a["createVNode"])(v,{class:"input required",modelValue:i.form.lName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.form.lName=e}),placeholder:"What’s your last name?"},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(V,null,{default:Object(a["withCtx"])((function(){return[j,Object(a["createVNode"])(v,{class:"input required",modelValue:i.form.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.form.email=e}),placeholder:"What’s your email?"},null,8,["modelValue"])]})),_:1}),Object(a["createVNode"])(V,null,{default:Object(a["withCtx"])((function(){return[O,Object(a["createVNode"])(v,{class:"input required",modelValue:i.form.msg,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.form.msg=e}),rows:5,type:"textarea",placeholder:"Tell us how we can help!"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(a["createElementVNode"])("div",p,[Object(a["createVNode"])(h,{type:"primary",class:"btn",onClick:g.submit},{default:Object(a["withCtx"])((function(){return[f]})),_:1},8,["onClick"])])])])}var v=n("1da1"),V=(n("96cf"),n("3ef4")),N=n("f00f"),h={data:function(){return{form:{fName:"",lName:"",email:"",msg:""}}},computed:{haveTitle:function(){return!!Object(a["useSlots"])().title}},methods:{submit:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,a,c,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.form,a=n.fName,c=n.lName,o=n.email,r=n.msg,a){t.next=3;break}return t.abrupt("return",Object(V["a"])({message:"Please enter your first name",type:"warning"}));case 3:if(c){t.next=5;break}return t.abrupt("return",Object(V["a"])({message:"Please enter your last name",type:"warning"}));case 5:if(o){t.next=7;break}return t.abrupt("return",Object(V["a"])({message:"Please enter your email",type:"warning"}));case 7:if(N["a"](o)){t.next=9;break}return t.abrupt("return",Object(V["a"])({message:"Invalid email",type:"warning"}));case 9:if(r){t.next=11;break}return t.abrupt("return",Object(V["a"])({message:"Please enter your message",type:"warning"}));case 11:return t.abrupt("return");case 13:case"end":return t.stop()}}),t)})))()}}},w=(n("685d"),n("d959")),y=n.n(w);const k=y()(h,[["render",g]]);t["a"]=k},"5dc7":function(e,t,n){},"685d":function(e,t,n){"use strict";n("5dc7")},b8fa:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"page-contact"},o=Object(a["createStaticVNode"])('<section class="sct1 bg1 text-center"><div class="contain"><div class="t-big">We believe <span class="tune">Technology</span> can change the World, do you?</div><div class="t-small"> Get all types of logos and token symbol (.svg and .png) and learn about the usage guidelines. leave a reasonable amount of margin around the outside so the logo is clearly visible. </div></div></section>',1),r={class:"sct2"},l={class:"contain"},s=Object(a["createElementVNode"])("div",{class:"t-big text-center"},[Object(a["createTextVNode"])("How can we "),Object(a["createElementVNode"])("span",{class:"tune"},"help you ?")],-1),i={class:"item"},u={class:"color1 title"},m={class:"desc"},d=["href"],b=Object(a["createElementVNode"])("div",{class:"t-muted text-center t3"},[Object(a["createTextVNode"])("If not mentioned above, please refer to the FAQ, please visit "),Object(a["createElementVNode"])("a",{href:"https://docs.mainet.network",target:"_blank"},"docs.mainet.network"),Object(a["createTextVNode"])(".")],-1);function j(e,t,n,j,O,p){var f=Object(a["resolveComponent"])("Menu"),g=Object(a["resolveComponent"])("el-image"),v=Object(a["resolveComponent"])("el-col"),V=Object(a["resolveComponent"])("el-row"),N=Object(a["resolveComponent"])("GetInTouch"),h=Object(a["resolveComponent"])("EnterEmail"),w=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(f,{activeIndex:"brand-assets"}),Object(a["createElementVNode"])("div",c,[o,Object(a["createElementVNode"])("section",r,[Object(a["createElementVNode"])("div",l,[s,Object(a["createVNode"])(V,{class:"list",gutter:40},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.sct2,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(v,{sm:12,md:8,key:t},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(g,{class:"img",src:e.img},null,8,["src"]),Object(a["createElementVNode"])("div",u,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("div",m,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.desc)+" ",1),e.mail?(Object(a["openBlock"])(),Object(a["createElementBlock"])("a",{key:0,class:"mail",href:"mailto:"+e.mail},Object(a["toDisplayString"])(e.mail),9,d)):Object(a["createCommentVNode"])("",!0)])])]})),_:2},1024)})),128))]})),_:1}),b])])]),Object(a["createVNode"])(N),Object(a["createVNode"])(h),Object(a["createVNode"])(w)],64)}var O=n("fb62"),p=n("4cf1"),f=n("fd2d"),g=n("3c68"),v=(n("e2a5"),Object(a["defineComponent"])({components:{Menu:O["a"],EnterEmail:p["a"],Footer:f["a"],GetInTouch:g["a"]},data:function(){return{sct2:[]}},mounted:function(){this.init()},methods:{init:function(){this.sct2=[{img:"img/contact-sct2-1.svg",title:"Global Customer Support",desc:"If you need product support, please email to: ",mail:"support@mainet.network"},{img:"img/contact-sct2-2.svg",title:"Business Inquiries",desc:"For media/business inquiries, please email to: ",mail:"business@mainet.network"},{img:"img/contact-sct2-3.svg",title:"Node operator",desc:"If you are an investor Apply Node Server Installation"},{img:"img/contact-sct2-4.svg",title:"Dev sDK",desc:"To learn more, contribute or share feedback about SDK"},{img:"img/contact-sct2-5.svg",title:"Careers",desc:"Interested in working at Mainet? Visit our Careers Page or send your CV to: ",mail:"hr@mainet.network"},{img:"img/contact-sct2-6.svg",title:"Join a growing community",desc:"Mainet is building an active community, we welcome you to join at any time."}]}}})),V=n("d959"),N=n.n(V);const h=N()(v,[["render",j]]);t["default"]=h},e2a5:function(e,t,n){}}]);