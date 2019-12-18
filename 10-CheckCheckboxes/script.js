//list checkboxes
const checkboxes = document.querySelectorAll('.checkbox-item-check');

//first checked
let lastChecked;

//check function
function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      //check if the check is in the ranger
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

//call function check click
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));