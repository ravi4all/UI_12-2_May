window.addEventListener("DOMContentLoaded", init);

var a;

function init(){
    a = document.getElementById("main-nav");
    a.classList.add("hide_menu");

    document.getElementById("btn").addEventListener("click", function(){
        a.classList.toggle("hide_menu");
    })
}
