//active speech
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//set language
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "pt-BR";

//get paragraph
let p = document.createElement("p");
const words = document.querySelector(".text");
words.appendChild(p);

//transform
recognition.addEventListener("result", e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");

    //write
    p.textContent = transcript;

    //make a new p
    if (e.results[0].isFinal) {
        p = document.createElement("p");
        words.appendChild(p);
    }
});

//events
recognition.addEventListener("end", recognition.start);
recognition.start();