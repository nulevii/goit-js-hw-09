const e=document.querySelector("body"),o=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d;t.disabled=!0;const a=()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,changeBgColorcondition=!changeBgColorcondition};o.addEventListener("click",(()=>{o.disabled=!0,t.disabled=!1,d=setInterval(a,1e3)})),stopChangeBgColor=()=>{o.disabled=!1,t.disabled=!0,clearInterval(d)},t.addEventListener("click",stopChangeBgColor);
//# sourceMappingURL=01-color-switcher.4fa8f249.js.map