//get items, plates and form
const addItems = document.querySelector('.sheet-add');
const itemsList = document.querySelector('.sheet-plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

//add item to local storage
function addItem(e) {
    e.preventDefault();
    //get item to input
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };

    //add iten to array
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

//list items
function populateList(plates = [], platesList) {
    //sort the list
    plates = plates.sort( (a,b) => {
        return a.text > b.text ? 1 : -1;
    });
    console.log(plates)
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li class="plates-item">
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
}

//change the checkbox by check
function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

//event add
addItems.addEventListener('submit', addItem);

//event chance the checkbox
itemsList.addEventListener('click', toggleDone);

//call list items
populateList(items, itemsList);