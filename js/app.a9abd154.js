(function(e){function t(t){for(var n,c,s=t[0],i=t[1],l=t[2],u=0,f=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},c={app:0},r={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-21a22250":"c32313e0","chunk-525f853e":"525f7b5c","chunk-b24bc28c":"8d3b8889","chunk-d75d342e":"66da3c2f"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-21a22250":1,"chunk-525f853e":1,"chunk-b24bc28c":1,"chunk-d75d342e":1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-21a22250":"8ffc6b5e","chunk-525f853e":"565d63fa","chunk-b24bc28c":"3c3422f6","chunk-d75d342e":"60f2f843"}[e]+".css",r=i.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===n||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete c[e],d.parentNode.removeChild(d),a(o)},d.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){c[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",f.name="ChunkLoadError",f.type=n,f.request=c,a[1](f)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Home/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"12fe":function(e,t,a){},"3a19":function(e,t,a){e.exports=a.p+"img/profile.ed357185.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c={style:{display:"none"}},r={key:0,class:"back"},o=Object(n["h"])("i",{class:"fas fa-arrow-left"},null,-1),s={key:0,class:"fas fa-sun"},i={key:1,class:"fas fa-moon"};function l(e,t,a,l,u,f){var d=Object(n["B"])("router-link"),b=Object(n["B"])("router-view"),h=Object(n["B"])("p-loading");return Object(n["u"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",c,[Object(n["k"])(d,{id:"home-link",to:"/"}),Object(n["k"])(d,{id:"gallery-link",to:"/gallery"})]),Object(n["k"])(n["b"],{name:"opacity"},{default:Object(n["H"])((function(){return[u.showback?(Object(n["u"])(),Object(n["g"])("button",r,[Object(n["k"])(d,{to:"/"},{default:Object(n["H"])((function(){return[o]})),_:1})])):(Object(n["u"])(),Object(n["g"])("button",{key:1,onClick:t[0]||(t[0]=function(){return f.changeTheme&&f.changeTheme.apply(f,arguments)}),class:"theme-switch"},[Object(n["k"])(n["b"],{name:"slide-top",mode:"out-in"},{default:Object(n["H"])((function(){return["dark"===u.theme?(Object(n["u"])(),Object(n["g"])("i",s)):(Object(n["u"])(),Object(n["g"])("i",i))]})),_:1})]))]})),_:1}),Object(n["k"])(b,null,{default:Object(n["H"])((function(e){var t=e.Component;return[Object(n["k"])(n["b"],{name:"opacity",mode:"out-in"},{default:Object(n["H"])((function(){return[(Object(n["u"])(),Object(n["e"])(Object(n["C"])(t)))]})),_:2},1024)]})),_:1}),Object(n["k"])(n["b"],{name:"opacity"},{default:Object(n["H"])((function(){return[u.isLoading?(Object(n["u"])(),Object(n["e"])(h,{key:0,onFinishedLoading:t[1]||(t[1]=function(e){return u.isLoading=!1})})):Object(n["f"])("",!0)]})),_:1})],64)}var u=function(e){return Object(n["x"])("data-v-7eff84db"),e=e(),Object(n["v"])(),e},f={class:"Loading"},d=u((function(){return Object(n["h"])("div",{id:"logo"},[Object(n["h"])("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 162.9 186.6",style:{"enable-background":"new 0 0 162.9 186.6"},"xml:space":"preserve"},[Object(n["h"])("path",{class:"diamond",d:"M160.2,51.1l0.1,85.4c0,1.4-0.7,2.7-1.9,3.4l-73.9,42.8c-1.2,0.7-2.7,0.7-3.9,0L6.5,140c-1.2-0.7-1.9-2-1.9-3.4L4.5,51.3\n\tc0-1.4,0.7-2.7,1.9-3.3L80.3,5.1c1.2-0.7,2.7-0.7,3.9,0l74,42.6C159.4,48.4,160.2,49.7,160.2,51.1z"}),Object(n["h"])("path",{class:"right",d:"M116.1,130.9l12.1-6.9c0.8-0.5,1.3-1.3,1.3-2.3V64.8c0-0.9-0.5-1.8-1.3-2.3l-9.8-5.7c-0.8-0.5-1.9-0.5-2.7,0\n\tL82.4,77.4v22.1l25.8-16.8c1.7-1.1,4,0.1,4,2.2l0,43.8C112.2,130.6,114.3,131.9,116.1,130.9z"}),Object(n["h"])("path",{class:"left",d:"M52.6,128.6l0-43.8c0-2.1,2.3-3.3,4-2.2l25.8,16.8V77.4L49.1,56.9c-0.8-0.5-1.8-0.5-2.7,0l-9.8,5.7\n\tc-0.8,0.5-1.3,1.3-1.3,2.3v56.9c0,0.9,0.5,1.8,1.3,2.3l12.1,6.9C50.4,131.9,52.6,130.6,52.6,128.6z"})])],-1)})),b=[d];function h(e,t,a,c,r,o){return Object(n["u"])(),Object(n["g"])("div",f,b)}var m={name:"PLoading",mounted:function(){var e=this;setTimeout((function(){e.$emit("finished-loading")}),7e3)}},p=(a("d6c6"),a("6b0d")),g=a.n(p);const j=g()(m,[["render",h],["__scopeId","data-v-7eff84db"]]);var O=j,k={name:"app",components:{PLoading:O},watch:{$route:function(e){e.path.length<2?this.showback=!1:this.showback=!0,"/gallery"===e.path&&(document.getElementById("home-link").click(),setTimeout(document.getElementById("gallery-link").click(),1e3))}},data:function(){return{isLoading:!0,showback:!1,theme:this.mountedTheme}},computed:{mountedTheme:function(){return localStorage.getItem("theme")}},methods:{changeTheme:function(){document.body.classList.toggle("dark"),"dark"===this.theme?(localStorage.setItem("theme","light"),this.theme="light"):(localStorage.setItem("theme","dark"),this.theme="dark")}},mounted:function(){document.body.classList.add(this.mountedTheme)}};a("d9a2");const v=g()(k,[["render",l]]);var y=v,w=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),E=(a("b0c0"),a("3a19")),S=a.n(E),L=function(e){return Object(n["x"])("data-v-cd8ecd34"),e=e(),Object(n["v"])(),e},I={class:"HOME page"},C={class:"welcome"},M=L((function(){return Object(n["h"])("img",{src:S.a,alt:"me"},null,-1)})),_={class:"hgroup"},H={class:"main-menu menu"},x=Object(n["i"])('<div class="contact" data-v-cd8ecd34><a href="https://www.facebook.com/Moneer-Al-Dakkak-103812508370602/" class="fb" data-v-cd8ecd34><i class="fab fa-facebook-f" data-v-cd8ecd34></i></a><a href="https://www.linkedin.com/in/moneer-al-dakkak-2534511b3" class="lin" data-v-cd8ecd34><i class="fab fa-linkedin-in" data-v-cd8ecd34></i></a><a href="https://www.instagram.com/iammoneer/" class="in" data-v-cd8ecd34><i class="fab fa-instagram" data-v-cd8ecd34></i></a><a href="https://t.me/Iammoneer" class="te" data-v-cd8ecd34><i class="fab fa-telegram-plane" data-v-cd8ecd34></i></a></div>',1),T={class:"langs"},V=Object(n["j"])(" | ");function A(e,t,a,c,r,o){var s=Object(n["B"])("router-link");return Object(n["u"])(),Object(n["g"])("div",I,[Object(n["h"])("div",C,[M,Object(n["h"])("div",_,[Object(n["h"])("h1",null,Object(n["E"])(o.pageVocublary.name),1),Object(n["h"])("h5",null,Object(n["E"])(o.pageVocublary.title),1)])]),Object(n["h"])("ul",H,[Object(n["h"])("li",null,[Object(n["k"])(s,{to:"/me"},{default:Object(n["H"])((function(){return[Object(n["j"])(Object(n["E"])(o.pageVocublary.whoAmI),1)]})),_:1})]),Object(n["h"])("li",null,[Object(n["k"])(s,{to:"/gallery"},{default:Object(n["H"])((function(){return[Object(n["j"])(Object(n["E"])(o.pageVocublary.gallery),1)]})),_:1})]),Object(n["h"])("li",null,[Object(n["k"])(s,{to:"/skills"},{default:Object(n["H"])((function(){return[Object(n["j"])(Object(n["E"])(o.pageVocublary.skills),1)]})),_:1})]),Object(n["h"])("li",null,[Object(n["k"])(s,{to:"/services"},{default:Object(n["H"])((function(){return[Object(n["j"])(Object(n["E"])(o.pageVocublary.services),1)]})),_:1})])]),x,Object(n["h"])("div",T,[Object(n["h"])("button",{onClick:t[0]||(t[0]=function(e){return o.changeLang("ar")})},"Ar"),V,Object(n["h"])("button",{onClick:t[1]||(t[1]=function(e){return o.changeLang("en")})},"En")])])}var B={name:"Home",computed:{pageVocublary:function(){return this.$store.state.appVocublary[this.$store.state.lang].HOME}},methods:{changeLang:function(e){this.$store.commit("changeLang",e)}}};a("b242");const P=g()(B,[["render",A],["__scopeId","data-v-cd8ecd34"]]);var J=P,D=[{path:"/",name:"Home",component:J},{path:"/me",name:"Me",component:function(){return a.e("chunk-21a22250").then(a.bind(null,"0a99"))}},{path:"/skills",name:"Skills",component:function(){return a.e("chunk-525f853e").then(a.bind(null,"ad83"))}},{path:"/services",name:"Services",component:function(){return a.e("chunk-b24bc28c").then(a.bind(null,"f23e"))}},{path:"/gallery",name:"Gallery",component:function(){return a.e("chunk-d75d342e").then(a.bind(null,"0d77"))}}],N=Object(w["a"])({history:Object(w["b"])("/Home/"),routes:D}),F=N,q=a("5502"),$=a("a4be"),z=a("e6db"),W=Object(q["a"])({state:{lang:document.querySelector("html").lang,appVocublary:{ar:$,en:z}},mutations:{changeLang:function(e,t){e.lang=t,document.querySelector("html").lang=t,document.querySelector("html").dir="ar"===t?"rtl":"ltr"}},actions:{},modules:{}});Object(n["d"])(y).use(W).use(F).mount("#app")},"97b1":function(e,t,a){},a4be:function(e){e.exports=JSON.parse('{"HOME":{"name":"منير الدكاك","title":"مطور ويب","whoAmI":"من أنا ؟","gallery":"معرضي","skills":"مهاراتي","services":"خدماتي"},"ME":{"title":"منير الدكاك","paragraph":"مرحباً بكم !<br /> عمري 20 عاماً وأعيش في دمشق, سوريا.<br />أدرس هندسة الحواسيب في جامعة دمشق بالإضافة إل الهندسة المعلوماتية في الجامعة الافتراضية السورية. <br /> بدأت مسيرتي المهنية كمطور فرونت ايند في يونيو 2020 و مع مرور الوقت أصبحت أعمل كمطور باك ايند أيضاً.<br />أحب مشاهدة الأفلام والاستماع إل الموسيق في أوقات فراغي, كما أنني أقدر الفن والفنانين جداً.<br />أهلاً في موقعي الشخصي !"},"SKILLS":{"عامة":[["fas fa-font","طليق في الإنكليزية"],["fas fa-user-friends","قادر عل العمل مع فريق"],["fas fa-palette","مبدع"],["fas fa-keyboard","كاتب محتو"],["fas fa-smile","صبور"]],"مهارات Front-End":[["fab fa-html5","Html"],["fab fa-css3-alt","Css"],["fab fa-js","Javascript"],["fab fa-sass","Sass"],["fab fa-vuejs","VueJs"],["fas fa-file","Json"]],"مهارات Back-End":[["fab fa-node","NodeJs"],["fas fa-database","MongoDB"]]},"SERVICES":[["fas fa-code","كود مرتب","تحصل عل كود مرتب قابل للتعديل والتطوير"],["fas fa-paint-brush","ابدأ من الصفر","أستطيع مساعدتك في الحصول عل موقع بدون أي تصاميم مسبقة"],["fas fa-desktop","تصميم متجاوب","صفحتك ستكون متوافقة مع جميع أحجام الشاشات"],["fas fa-edit","تعدبلات عل الموقع","ربما لديك موقع تريد تعديل أو إضافة خاصية له ؟"],["fas fa-globe","توافق مع معايير محركات البحث","لا تقلق حيال ذلك فمواقعي متوافقة مع جميع هذه المعايير."]]}')},b242:function(e,t,a){"use strict";a("12fe")},d6c6:function(e,t,a){"use strict";a("97b1")},d9a2:function(e,t,a){"use strict";a("f342")},e6db:function(e){e.exports=JSON.parse('{"HOME":{"name":"Moneer Al-Dakkak","title":"Full stack web developer","whoAmI":"Who am I ?","gallery":"My Gallery","skills":"My Skills","services":"My Services"},"ME":{"title":"Moneer Al-Dakkak","paragraph":"Hello There ! <br> I am 20 years old and I live in Damascus, Syria.<br>  I study Computer Engineering in Damascus University and IT Egineering in the Syrian Virtual University.<br> I started my career as a front-end developer in june 2020 and by time I learnt back-end development and became a Full-stack developer.<br> I like watching movies and listening to music in my spare time and I highly appreciate art and artists.<br> Welcome to my website !"},"SKILLS":{"General":[["fas fa-font","Fluent in English"],["fas fa-user-friends","Able to work with team"],["fas fa-palette","Creative"],["fas fa-keyboard","Content Writer"],["fas fa-smile","Patient"]],"Front-End Skills":[["fab fa-html5","Html"],["fab fa-css3-alt","Css"],["fab fa-js","Javascript"],["fab fa-sass","Sass"],["fab fa-vuejs","VueJs"],["fas fa-file","Json"]],"Back-End Skills":[["fab fa-node","NodeJs"],["fas fa-database","MongoDB"]]},"SERVICES":[["fas fa-code","Clean Code","You get an organised easy to maintain code."],["fas fa-paint-brush","Start from scratch","I can create web pages even without any previous designs."],["fas fa-desktop","Responsive Design","Your web page will be compatible with all different screen sizes."],["fas fa-edit","Website Edits","Maybe you have a feature you want to add to your website ?"],["fas fa-globe","SEO compatibility","Don\'t worry about that. My websites are all SEO compatible !"]]}')},f342:function(e,t,a){}});
//# sourceMappingURL=app.a9abd154.js.map