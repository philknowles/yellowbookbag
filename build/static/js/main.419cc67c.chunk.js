(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),r=a(7),c=a.n(r),o=(a(17),a(24));var i=e=>{let{rating:t}=e;const a=Math.floor(t),n=Math.ceil(t-a),r=5-a-n,c=(e,t)=>{const a="full"===t?"\u2605":"half"===t?"\xbd":"\u2606";return Array(e).fill(a).join("")};return l.a.createElement("div",null,c(a,"full"),c(n,"half"),c(r,"empty"))};var u=e=>{let{book:t}=e;return l.a.createElement("div",null,l.a.createElement("h3",null,t.title),l.a.createElement("p",null,"Author: ",t.author_name),l.a.createElement("p",null,"First Published: ",t.first_publish_year),t.rating&&l.a.createElement("div",null,l.a.createElement("p",null,"Rating: ",t.rating.toFixed(1)),l.a.createElement(i,{rating:t.rating})))};var s=()=>{const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)(""),[c,i]=Object(n.useState)(null);return l.a.createElement("div",null,l.a.createElement("h2",null,"Search Books"),l.a.createElement("input",{type:"text",id:"searchInput",placeholder:"Enter your search query",value:a,onChange:e=>{r(e.target.value)}}),l.a.createElement("button",{onClick:()=>{(async()=>{try{const n=await o.a.get("https://openlibrary.org/search.json?q=".concat(a));t(n.data.docs)}catch(e){console.error("Error fetching data:",e)}})()}},"Search"),l.a.createElement("ul",null,e.map(e=>l.a.createElement("li",{key:e.key},l.a.createElement("h3",null,e.title),e.cover_i&&l.a.createElement("img",{src:"http://covers.openlibrary.org/b/id/".concat(e.cover_i,"-M.jpg"),alt:"Cover for ".concat(e.title)}),l.a.createElement("button",{onClick:()=>(e=>{i(e)})(e)},"View Details")))),c&&l.a.createElement("div",null,l.a.createElement(u,{book:c}),l.a.createElement("button",{onClick:()=>{i(null)}},"Close Details")))};var m=()=>l.a.createElement("div",null,l.a.createElement("h1",null,"Open Library App"),l.a.createElement(s,null));var E=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null))),E()},8:function(e,t,a){e.exports=a(22)}},[[8,1,2]]]);
//# sourceMappingURL=main.419cc67c.chunk.js.map