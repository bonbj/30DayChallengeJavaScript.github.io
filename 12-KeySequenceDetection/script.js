let pressed = [];
const secretCode = 'orange';
let title = document.getElementById('title');
let log = document.getElementById('log');

window.addEventListener('keyup',(event) => {
    pressed = [...pressed,event.key];
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode) 
        || pressed.join('').includes('victor') 
        || pressed.join('').includes('junior')){
        title.innerHTML = "DING DING!!";
        cornify_add();
    }
    log.innerHTML = pressed;
});