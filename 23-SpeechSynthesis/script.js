//get itens
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  
  //for filter the languange
  //.filter(voice => voice.lang.includes("en"))
  voicesDropdown.innerHTML = voices
    .map(
      voice =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

//set voice
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

//play
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

//set rate and pitch
function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}


//events
speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach(option => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
