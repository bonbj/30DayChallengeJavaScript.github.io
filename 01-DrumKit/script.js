/* for show key id : onkeypress="alert(event.keyCode);" */
//event of change of css
function change(id){
    let A = document.getElementById(id);
    A.classList.add('box-active');
    var timeA = setTimeout(setColor, 70);
    function setColor() {
        let a = document.getElementById(id);
        a.classList.remove('box-active');
    }
}
// capture the event code and transform in audio and css
function keyEvent(event){
    //console.log(event.keyCode);
    switch (event.keyCode) {
        case 97 : 
            const audio = new Audio('sounds/clap.wav');
            change('A');
            audio.play();
            break;
        case 115 :
            const audio1 = new Audio('sounds/hihat.wav');
            change('S');
            audio1.play();
            break;
        case 100 :
            const audio2 = new Audio('sounds/kick.wav');
            change('D');
            audio2.play();
            break;
        case 102 :
            const audio3 = new Audio('sounds/openhat.wav');
            change('F');
            audio3.play();
            break;
        case 103 :
            const audio4 = new Audio('sounds/boom.wav');
            change('G');
            audio4.play();
            break;
        case 104 :
            const audio5 = new Audio('sounds/ride.wav');
            change('H');
            audio5.play();
            break;
        case 106 :
            const audio6 = new Audio('sounds/snare.wav');
            change('J');
            audio6.play();
            break;
        case 107 :
            const audio7 = new Audio('sounds/tom.wav');
            change('K');
            audio7.play();
            break;
        case 108 :
            const audio8 = new Audio('sounds/tink.wav');
            change('L');
            audio8.play();
            break;
    }
}

function clickEvent(id){
    switch (id) {
        case 97 : 
            const audio = new Audio('sounds/clap.wav');
            audio.play();
            break;
        case 115 :
            const audio1 = new Audio('sounds/hihat.wav');
            audio1.play();
            break;
        case 100 :
            const audio2 = new Audio('sounds/kick.wav');
            audio2.play();
            break;
        case 102 :
            const audio3 = new Audio('sounds/openhat.wav');
            audio3.play();
            break;
        case 103 :
            const audio4 = new Audio('sounds/boom.wav');
            audio4.play();
            break;
        case 104 :
            const audio5 = new Audio('sounds/ride.wav');
            audio5.play();
            break;
        case 106 :
            const audio6 = new Audio('sounds/snare.wav');
            audio6.play();
            break;
        case 107 :
            const audio7 = new Audio('sounds/tom.wav');
            audio7.play();
            break;
        case 108 :
            const audio8 = new Audio('sounds/tink.wav');
            audio8.play();
            break;
    }
}