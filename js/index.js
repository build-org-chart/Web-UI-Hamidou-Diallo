// Event Listeners
const btnDesk = document.querySelectorAll(".btn-1");
console.log(btnDesk);


btnDesk.forEach(function(item){
    item.addEventListener("click", ev =>{
        ev.target.style.backgroundColor = "white";
        ev.target.style.color = "#F64C72";
        
        setTimeout(function(){
            ev.target.backgroundColor = " ";
            ev.target.color = " ";
        },200);
    },false);
});


// Components
 window.addEventListener("scroll", function(ev){
    document.querySelector(".low-content-2").style.backgroundColor = "#379683";

});


// stick nav bar
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("nav");
console.log(navbar);


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

const navSlide = () =>{
    const bars = document.querySelector(".drop-down-bar");
    const bar1 = document.querySelector(".bar1");
    const bar2 = document.querySelector(".bar2")
    const bar3 = document.querySelector(".bar3");
    const navEnd = document.querySelector(".nav-end");

    bars.addEventListener("click", ev =>{
        console.log("Hello");
        bar1.classList.toggle("change-1");
        bar2.classList.toggle("toggle-off");
        bar3.classList.toggle("change-2");
        navEnd.classList.toggle("toggle-off");
        navEnd.classList.toggle("toggle-on");
    });
};

navSlide();











// TODO: Begin tabs and additional events for the landing page.Begin




const image = () => {
    // const panels = document.querySelector(".panel");
    const images = document.querySelectorAll("img");
    // const text = document.querySelector("p");

    // panels.addEventListener("mouseon", ev =>{
    //     ev.backgroundColor = "grey";
    // });
    images.forEach(function(item){
        item.addEventListener("click", ev => {
            ev.target.style.border = " 5px groove #ff6644";
            setTimeout(function(){
                ev.target.style.border = "";
            },200);
        },false);
    });


};

image();
// images.forEach(item =>{
//     item.addEventListener("click", ev =>{
//         ev.style.target.style.backgroundColor = "#ff6644";
//     });
// });