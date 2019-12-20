let pressed = [];
const secretCode = 'orange';
//get divs in html
let title = document.getElementById('title');
let log = document.getElementById('log');


//key event capture function
window.addEventListener('keyup',(event) => {
    //add last key press into array
    pressed = [...pressed,event.key];
    
    //divide the array by password length
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    
    //testing if contains the secretCode or strings
    if(pressed.join('').includes(secretCode) 
        || pressed.join('').includes('victor') 
        || pressed.join('').includes('junior')){
        title.innerHTML = "DING DING!!";
        //call the function for show unicorn
        cornify_add();
    }
    //show the log of key pressed
    log.innerHTML = pressed;
});
