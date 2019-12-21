//function "wait a time to perform"
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//call divs
const sliderImages = document.querySelectorAll(".slide-in");

//check if the scroll is on top of the image
function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // half way through the image
    const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    //check if the image is on the screen 
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    //show the slide and remove
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

//event scroll mouse
window.addEventListener("scroll", debounce(checkSlide));
