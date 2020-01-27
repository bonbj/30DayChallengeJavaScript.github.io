//get divs
const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

//show class in log
function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stop bubbling!
  // console.log(this);
}

//evets
divs.forEach(div => div.addEventListener("click", logText, {capture: false, once: true}));
button.addEventListener("click", () => {console.log("Click!!!");},{once: true});
