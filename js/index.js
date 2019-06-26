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


// drop-down menu

// constructor function
// class Dropper{
//     constructor(element){
//         this.element = element;
//         this.bars = this.element.querySelector(".bar1");
//         // console.log("hello");
//         this.links = this.element.querySelector(".link");
//         // console.log("bye");
//         this.bars.addEventListener("click", () => this.toggle());
//     }

//     toggle(){
//         this.bars.classList.toggle(".toggle-on");
//         console.log('Hello Tom');
//     }
// }

// query selector
// const newNav = document.querySelectorAll(".bar1 .bar2 .bar3");
// console.log(newNav);
// newNav.classList.add("mobile-menu");


const menu = document.querySelectorAll("nav");
console.log(menu);

// const newNav1 = Array.from(newNav);
// console.log(newNav1);
// newNav1.forEach(item => {
//     item.addEventListener("click", ev => {
//        ev.classList.toggle("change-1");
//     });
// });
// newNav.addEventListener("click", ev => {
//     console.log("hello");
//     // document.querySelectorAll(".bar1").add("change-1");
// });
// console.log(newNav);



// newNav.forEach(function(items){
//     return new Dropper(items);
// });







// TODO: Begin tabs and additional events for the landing page.Begin

