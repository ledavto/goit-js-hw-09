!function(){var t=null,n=document.body,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){return t=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),o.addEventListener("click",(function(){return clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.167e9ae9.js.map
