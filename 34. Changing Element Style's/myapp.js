var el = document.getElementById("style");

el.style.background = "yellow";
/*
el.style.color = "white";
el.style.width = "100px";

el.style.cssText = "background:blue; color:white;width: 100px; height: 100px;";

el.style.cssText += " height:100px;"; */

console.log(getComputedStyle(el));