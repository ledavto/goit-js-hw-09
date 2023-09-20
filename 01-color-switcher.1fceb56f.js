let t=null;const e=document.body,o=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");o.addEventListener("click",(()=>t=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3))),a.addEventListener("click",(()=>clearInterval(t)));
//# sourceMappingURL=01-color-switcher.1fceb56f.js.map
