//get elements and create span
const triggers = document.querySelectorAll(".link");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

//follow function
function highlightLink() {
  //get position of link
  const linkCoords = this.getBoundingClientRect();
  
  //set coords by scroll page
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  //set coords
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

//event
triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
