//bring a list of inputs
const inputs = document.querySelectorAll('input');

function inputUpdate(){
    //console.log(this.value);

    //get a data type of input
    const suffix = this.dataset.sizing || '';

    //set value css with specific name of input
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


// make a seach of data type in DOM
inputs.forEach(input => input.addEventListener('change', inputUpdate));
inputs.forEach(input => input.addEventListener('mousemove', inputUpdate));