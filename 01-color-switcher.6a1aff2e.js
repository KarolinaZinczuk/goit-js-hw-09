const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}let d=null;t.addEventListener("click",(function(){n.style.backgroundColor=o(),t.disabled=!0,e.disabled=!1,d=setInterval((()=>{n.style.backgroundColor=o()}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.6a1aff2e.js.map
