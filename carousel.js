var header = document.getElementById("header");
var menu = document.getElementById("menu");
console.log(menu)
menu.addEventListener("click", ()=>{
    if(header.getAttribute("class") == "expand"){
        header.setAttribute("class", "");
    }
    else{
        header.setAttribute("class", "expand");
    }
})