//get divs
const slider = document.querySelector('.items');
//set mouse clickMove
let isDown = false;
let startX;
let scrollLeft;

//set click
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

//click out
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

//move scroll
slider.addEventListener('mousemove', (e) => {
  //stop if not click
  if (!isDown) return;
  e.preventDefault();
  //move on offset
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
