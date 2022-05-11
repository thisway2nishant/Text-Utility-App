(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1));a(15);function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#textform"},l.a.createElement("strong",null,e.title)),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#textform"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active",href:"#about"},e.aboutTxt))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch","aria-checked":"false",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark Mode")))))}function i(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1],m=Object(n.useState)(""),i=Object(c.a)(m,2),s=i[0],u=i[1],d=Object(n.useState)(""),b=Object(c.a)(d,2),h=b[0],p=b[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-3",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h2",{className:"my-3",style:{width:"fit-content",margin:"auto",fontFamily:"'Roboto Condensed', sans-serif"}},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",id:"textBox",value:h,onChange:function(e){p(e.target.value)},rows:"8",placeholder:"Enter your text here.",style:{color:"light"===e.mode?"black":"white",backgroundColor:"light"===e.mode?"white":"#212529",border:"light"===e.mode?"2px solid black":"2px solid white"}})),l.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"primary":"secondary"," mx-2 my-2"),onClick:function(){o(h);var e=h.toUpperCase();p(e),u(h)}},"Upper Case"),l.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"primary":"secondary"," mx-2 my-2"),onClick:function(){o(h);var e=h.toLowerCase();p(e),u(h)}},"Lower Case"),l.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"primary":"secondary"," mx-2 my-2"),onClick:function(){o(h);var e=h.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)});e=e.join(" "),p(e),u(h)}},"Title Case"),l.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"primary":"secondary"," mx-2 my-2"),onClick:function(){o(h);var e=h.toLowerCase().split(".").map(function(e){return" "===e.charAt(0)?e.charAt(1).toUpperCase()+e.slice(2):e.charAt(0).toUpperCase()+e.slice(1)});e=e.join(". "),p(e),u(h)}},"Sentence Case"),l.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"primary":"secondary"," mx-2 my-2"),onClick:function(){o(h);var e=h.split(/[ ]+/);p(e.join(" ")),u(h)}},"Remove Extra Spaces"),l.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"primary":"secondary"," mx-2 my-2"),onClick:function(){o(h),p(""),u(h),e.showAlert("Text Cleared!","success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"primary":"secondary"," mx-2 my-2"),onClick:function(){var t=document.getElementById("textBox");t.select(),null===t.value?e.showAlert("TextArea is empty","warning"):(navigator.clipboard.writeText(t.value),e.showAlert("Text Copied!","success"))}},"Copy"),l.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"primary":"secondary"," mx-2 my-2"),onClick:function(){var e=h.replace(/\n/g,"\r\n"),t=new Blob([e],{type:"text/plain"}),a=document.createElement("a");a.download="myText.txt",a.href=window.URL.createObjectURL(t),a.target="_blank",a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}},"Save"),l.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"primary":"secondary"," mx-2 my-2"),onClick:function(){var e=r;u(h),p(e)}},"Undo"),l.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"primary":"secondary"," mx-2 my-2"),onClick:function(){var e=s;o(h),p(e)}},"Redo")),l.a.createElement("hr",null),l.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("table",{className:"table table-striped table-bordered ".concat("light"===e.mode?"":"table-dark"),style:{border:"light"===e.mode?"2px solid black":"2px solid white"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Summary Of Your Text")),l.a.createElement("th",null))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Number of Words"),l.a.createElement("td",null,h.split(" ").length)),l.a.createElement("tr",null,l.a.createElement("td",null,"Number of Characters"),l.a.createElement("td",null,h.length)),l.a.createElement("tr",null,l.a.createElement("td",null,"Number of Sentences"),l.a.createElement("td",null,h.split(/[.?]+/).length)),l.a.createElement("tr",null,l.a.createElement("td",null,"Reading Time"),l.a.createElement("td",null,.08*h.split(" ").length))))))}function s(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.Type),role:"alert"},l.a.createElement("strong",null,e.alert.msg))}function u(e){return l.a.createElement("div",{className:"container my-4 ",style:{border:"light"===e.mode?"2px solid black":"2px solid white",backgroundColor:"light"===e.mode?"#f0efef":"#212529",color:"light"===e.mode?"black":"white",borderRadius:"5px"}},l.a.createElement("h2",{style:{width:"fit-content",margin:"8px auto"}},l.a.createElement("strong",null,"About Us")),l.a.createElement("p",null,"Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. Text Utils will help to make sure its word count reaches a specific requirement or stays within a certain limit."),l.a.createElement("p",null,"To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above."),l.a.createElement("p",null,l.a.createElement("strong",null,"Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so.")))}function d(){return l.a.createElement("div",null,l.a.createElement("footer",{style:{backgroundColor:"black",height:"200px",color:"white",padding:"5px"}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,l.a.createElement("p",null,"Site Map")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",style:{textDecoration:"none",color:"white"}},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about",style:{textDecoration:"none",color:"white"}},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",style:{textDecoration:"none",color:"white"}},"Contact Us")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",style:{textDecoration:"none",color:"white"}},"Privacy Policy"))),l.a.createElement("ul",{style:{listStyle:"none",marginLeft:"125px"}},l.a.createElement("li",null,l.a.createElement("p",null,"Follow us")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",style:{textDecoration:"none",color:"white"}},"Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",style:{textDecoration:"none",color:"white"}},"Instagram")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",style:{textDecoration:"none",color:"white"}},"Facebook")))),l.a.createElement("p",{className:"mx-3"},"All Rights Reserved. \xa92022 Nishant Kumar")))}m.defaultProps={title:"set title",aboutTxt:"Set about"};var b=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),b=Object(c.a)(o,2),h=b[0],p=b[1],E=function(e,t){p({msg:e,Type:t}),setTimeout(function(){p(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"Text Utils",aboutTxt:"About",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="grey",E("Dark Mode Enabled","success")):(r("light"),document.body.style.backgroundColor="white",E("Dark Mode Disabled","success"))}}),l.a.createElement(s,{alert:h}),l.a.createElement("div",{className:"container my-3"},l.a.createElement("section",{id:"textform"},l.a.createElement(i,{heading:"Enter the text below for analyzing",mode:a,showAlert:E})),l.a.createElement("section",{id:"about"},l.a.createElement(u,{mode:a})),l.a.createElement(d,null)))},h=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),h()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.19ecb845.chunk.js.map