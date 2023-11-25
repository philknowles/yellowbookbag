(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(43)},20:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=(a(20),a(7)),i=a(1),s=a(11),m=a.n(s);a(36),a(37);var u=e=>{let{rating:t}=e;const a=Math.floor(t),n=Math.ceil(t-a),r=5-a-n,c=(e,t)=>{const a="full"===t?"\u2605":"half"===t?"\xbd":"\u2606";return Array(e).fill(a).join("")};return l.a.createElement("div",null,c(a,"full"),c(n,"half"),c(r,"empty"))};var E=e=>{let{book:t,isVisible:a}=e;const{publish_date:n,publisher:r,language:c}=t;return l.a.createElement("div",{className:"book-details-transition"},l.a.createElement("p",null,t.first_sentence||"N/A"),l.a.createElement("div",{className:"book-details-row"},l.a.createElement("div",{className:"book-publication"},l.a.createElement("p",null,l.a.createElement("span",null,"Publication Date:"),l.a.createElement("br",null)," ",n&&n[0]||"N/A")),l.a.createElement("div",{className:"book-publication"},l.a.createElement("p",null,l.a.createElement("span",null,"Publisher:"),l.a.createElement("br",null)," ",r?r[0]:"N/A")),l.a.createElement("div",{className:"book-publication"},l.a.createElement("p",null,l.a.createElement("span",null,"Language:"),l.a.createElement("br",null)," ",c&&"eng"==c[0]?"English":"N/A"))),l.a.createElement("div",{className:"book-details-row"},l.a.createElement("div",{className:"book-publication"},l.a.createElement("p",null,l.a.createElement("span",null,"ISBN:"),l.a.createElement("br",null)," ",t.isbn?t.isbn[0]:"N/A")),l.a.createElement("div",{className:"book-publication"},l.a.createElement("p",null,l.a.createElement("span",null,"Edition:"),l.a.createElement("br",null)," ",t.edition_key?t.edition_key[0]:"N/A")),l.a.createElement("div",{className:"book-publication"},l.a.createElement("p",null,l.a.createElement("span",null,"Number of Pages:"),l.a.createElement("br",null)," ",t.number_of_pages_median+" "||!1))),l.a.createElement("p",null,"Genres: ",l.a.createElement("small",null,t.subject?t.subject.join(", "):"N/A")),l.a.createElement("p",null,"Tags: ",l.a.createElement("small",null,t.subject?t.subject.join(", "):"N/A")),t.rating&&l.a.createElement("div",null,l.a.createElement("p",null,"Rating: ",t.rating.toFixed(1)),l.a.createElement(u,{rating:t.rating})))},d=(a(38),a(3)),b=a.n(d);a(39);var h=e=>{let{onBarcodeScanned:t}=e;return Object(n.useEffect)(()=>{if(window.innerWidth<=768)return b.a.init({inputStream:{name:"Live",type:"LiveStream",target:document.querySelector("#barcode-scanner")},decoder:{readers:["ean_reader"]}},e=>{e?console.error("Error initializing Quagga:",e):b.a.start()}),b.a.onDetected(e=>{const a=e.codeResult.code;t(a),b.a.stop()}),()=>{b.a.stop()}},[t]),l.a.createElement("div",null,window.innerWidth<=768&&l.a.createElement("div",{id:"barcode-scanner"}))};var p=e=>{let{searchTerm:t,onSearchChange:a,onSearchSubmit:r}=e;const c=Object(i.o)(),[o,s]=Object(n.useState)(""),[m,u]=Object(n.useState)(window.innerWidth<=768),[E,d]=Object(n.useState)(!1),[b,p]=Object(n.useState)(!1),[v,g]=Object(n.useState)([]),[f,N]=Object(n.useState)(!1);Object(n.useEffect)(()=>{const e=()=>{u(window.innerWidth<=768)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);const k=e=>{alert("Scanned barcode: "+e),s(e),p(!0),d(!1)},j=window.location.pathname;return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-title"},l.a.createElement("h2",null,"The Yellow Book Bag")),l.a.createElement("div",{className:"navbar-search"},l.a.createElement("ul",{className:"navbar-list"},l.a.createElement("li",null,l.a.createElement("button",{onClick:()=>c("/")},"Home")),l.a.createElement("li",null,l.a.createElement("button",{onClick:()=>c("/about")},"About"))),"/"===j||"/yellowbookbag/"===j?m?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Scan ISBN...",value:o,onChange:a,onClick:()=>{d(!0),p(!1)}}),E&&l.a.createElement("div",{className:"video-container"},l.a.createElement(h,{onBarcodeScanned:k}),l.a.createElement("button",{className:"close-video-btn",onClick:()=>{d(!1),p(!1)}},l.a.createElement("i",{className:"fas fa-times"})," ")),l.a.createElement("button",{onClick:r},l.a.createElement("i",{className:"fas fa-search"})," "))):l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"text",id:"searchInput",placeholder:"Enter your search query",value:t,onChange:a}),l.a.createElement("button",{onClick:r},l.a.createElement("i",{className:"fas fa-search"})," ")):null)),E&&!b&&l.a.createElement("div",{className:"video-container"},l.a.createElement(h,{onBarcodeScanned:k})))};a(40);var v=()=>l.a.createElement("div",{className:"hero-section"},l.a.createElement("img",{src:"path-to-your-hero-image.jpg",alt:"Hero Image"}),l.a.createElement("h1",null,"Welcome to the Open Library App"),l.a.createElement("p",null,"Discover the latest books and more..."));a(41),a(42);var g=()=>{const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)(""),[c,o]=Object(n.useState)(null),[i,s]=Object(n.useState)(1),[u]=Object(n.useState)(10),[d,b]=Object(n.useState)(!1);Object(n.useEffect)(()=>{fetch("https://openlibrary.org/subjects/new.json?limit=10").then(e=>e.json()).then(e=>{const a=e.works.filter(e=>!e.subject.includes("/subjects/romance")).filter(e=>e.cover_edition_key).map(e=>({key:e.cover_edition_key,title:e.title,cover_i:null}));t(a)}).catch(e=>console.error("Error fetching data:",e))},[]);const h=i*u,g=h-u,f=e.slice(g,h),N=e=>{s(e),o(null)};return l.a.createElement("div",null,l.a.createElement(p,{searchTerm:a,onSearchChange:e=>{r(e.target.value)},onSearchSubmit:()=>{const e="https://openlibrary.org/search.json?q=".concat(a);fetch(e).then(e=>e.json()).then(e=>{t(e.docs),b(!0)}).catch(e=>console.error("Error fetching data:",e))}}),!d&&l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{className:"carousel-container"},l.a.createElement("h2",null,"New Books"),l.a.createElement(m.a,{dots:!0,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:1},e.map(e=>l.a.createElement("div",{key:e.key,className:"carousel-item"},l.a.createElement("img",{src:"https://covers.openlibrary.org/b/olid/".concat(e.key,"-M.jpg"),alt:"Cover for ".concat(e.title),className:"cover-image"}),l.a.createElement("p",null,e.title)))))),d&&0===e.length&&l.a.createElement("p",null,"No books found. Please try a different search term."),d&&e.length>0&&l.a.createElement("div",{className:"carousel-container"},l.a.createElement("ul",null,f.map(e=>l.a.createElement("li",{key:e.key,className:"book-container"},l.a.createElement("p",null,l.a.createElement("b",null,e.title),l.a.createElement("br",null),l.a.createElement("small",null,"by ",e.author_name?e.author_name.join(", "):"Unknown"," | Star Reviews: ",e.ratings_average?Math.round(100*e.ratings_average)/100:"N/A"," | Edition count: ",e.edition_count)),l.a.createElement("div",{className:"book-info"},l.a.createElement("div",{className:"book-details"},e.cover_i?l.a.createElement("img",{src:"https://covers.openlibrary.org/b/id/".concat(e.cover_i,"-M.jpg"),alt:"Cover for ".concat(e.title),className:"cover-image"}):l.a.createElement("img",{src:"https://via.placeholder.com/200x300.png",alt:"No Cover"}),l.a.createElement("div",{className:"book-text"},l.a.createElement("button",{onClick:()=>(e=>{o(c===e?null:e)})(e)},c===e?"Hide Details":"View Details"),l.a.createElement("div",null,c===e&&l.a.createElement(E,{book:e}))))))))),e.length>u&&l.a.createElement("nav",null,l.a.createElement("ul",{className:"pagination"},Array.from({length:Math.ceil(e.length/u)}).map((e,t)=>l.a.createElement("li",{key:t+1,className:i===t+1?"active":"",onClick:()=>N(t+1)},l.a.createElement("a",{href:"#!",onClick:()=>N(t+1)},t+1))))))};var f=()=>l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement("h2",null,"About Page"));var N=()=>l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/about",element:l.a.createElement(f,null)}),l.a.createElement(i.a,{path:"/",element:l.a.createElement(g,null)}))));var k=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null))),k()}},[[12,1,2]]]);
//# sourceMappingURL=main.5e57f944.chunk.js.map