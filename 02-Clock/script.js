
//change de angle - second
function rotateSecond(second){
    document.getElementById(`Csecond`).style.transform = 'rotate('+second+'deg)';
}

//change de angle - minute
function rotateMinute(minute){
    document.getElementById(`Cminute`).style.transform = 'rotate('+minute+'deg)';
}

//change de angle - hour
function rotateHour(hour){
    document.getElementById(`Chour`).style.transform = 'rotate('+hour+'deg)';
}

//every second change the hour
setInterval(function(){ 
    let date = new Date();

    //define the angle of pointer of second
    let second = date.getSeconds();
    rotateSecond((Math.trunc(360/60)*second));
    
    //define the angle of pointer of minute
    let minute = date.getMinutes();
    rotateMinute((Math.trunc(360/60)*minute));

    //define the angle of pointer of hour
    let hour = date.getHours();
    if(hour > 12){
        rotateHour((Math.trunc(360/12)*(hour-12)));
    }else{
        rotateHour((Math.trunc(360/12)*hour));
    }
    
}, 1000);