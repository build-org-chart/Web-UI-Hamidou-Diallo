// const menu = document.querySelector(".main-container");
// menu.addEventListener("scroll",function(event){
//     event.target.style.backgroundColor = "#553D67";
// })

window.addEventListener("scroll", function(ev){
     document.querySelector(".low-content-2").style.backgroundColor = "#379683";

});


// stick nav bar
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("nav");


// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}







// TODO: Begin tabs and additional events for the landing page.Begin

