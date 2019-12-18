const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 }
];

//title modification
function makeGreen() {
  const p = document.querySelector(".title");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello console");

// Interpolated
console.log("Hello I am a %s string!", "Big");

// Styled
console.log('%c I am some great text', 'font-size:20px; background:red;');

// warning!
console.warn("OH NOOO");

// Error :|
console.error("something wrong is not right!");

// Info
console.info("I think this information is useful");

// Testing
const p = document.querySelector(".title");

//show a string if the condition is false
console.assert(/*condition*/p.classList.contains("ouch"), "That is wrong!");

// clearing the console
//console.clear();

// Viewing DOM Elements
console.log(p);//show the div
console.dir(p);//show date of div

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

//counts how many times the same word appears
console.count("jao");
console.count("maria");
console.count("jao");
console.count("maria");
console.count("jao");
console.count("maria");

// timing
console.time("fetching data");//start time
fetch("https://api.github.com/users/wesbos")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");//finish time
    console.log(data);
  });

//show the data in table
console.table(dogs);