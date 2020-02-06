//get divs
const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

//speed controller
function handleMove(e) {
  //get offset of height div
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  //change min and max in porcent
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;

  //change height of div
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "×";

  //change playback rate
  video.playbackRate = playbackRate;
}

//event
speed.addEventListener("mousemove", handleMove);