/**Get Our Elements**/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');

/**Build out functions**/

//change play or pause
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

//change the icon play or pause
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

//skip time video
function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

//change the volume and speed
function handleRangeUpdate() {
  video[this.name] = this.value;
}

//change the duration on click in progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/**Hook up the event listeners**/

//change pay or pause
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

//change the progress bar
let mousedown = false;
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

//skip time
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));