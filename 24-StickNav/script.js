//get the nav
const nav = document.querySelector("#main");

//offset of nav
let topOfNav = nav.offsetTop;

//event stick
function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
}

//events
window.addEventListener("scroll", fixNav);