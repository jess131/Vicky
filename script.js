var bar = document.querySelector(".bar");
var sidenav = document.querySelector(".side-nav");
var container = document.querySelector(".container");

bar.onclick = function(){
    sidenav.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}