//make the select of every tags with class .panel
const panels = document.querySelectorAll('.panel');

//change the div for class open
function toggleOpen(){
    this.classList.toggle('open');
}

//make the event active
/* Safari transitionend event.propertyName === flex */
/* Chrome + FF transitionend event.propertyName === flex-grow */
function toggleActive(event){
    if (event.propertyName.includes('flex-grow')) {
        this.classList.toggle('open-active');
    }
}

//checks if one div was clicked or changed
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));