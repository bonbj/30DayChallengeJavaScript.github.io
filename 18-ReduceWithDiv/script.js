//data time of videos
let timeNodes = Array.from(document.querySelectorAll("[data-time]"));

//total time
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

//hours
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

//minutes
const mins = Math.floor(secondsLeft / 60);

//seconds
secondsLeft = secondsLeft % 60;


//show total time on screen
const videos = document.querySelector('.videos');
videos.innerHTML = `<li>total time : ${hours}:${mins}:${secondsLeft}</li>`;
   
//show time and div in console
console.log(hours, mins, secondsLeft);
console.table(timeNodes);
