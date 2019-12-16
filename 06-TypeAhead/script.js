//get json of cities
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//transform json in data
const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

//make a search in array of cities with the value in search
findMatches = (wordToMatch, cities) => {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}


//do the division of population em commas
numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//show on screen what was searched
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li class="suggestions-table table-first">
        <span class="name">${cityName}, ${stateName}</span>
        <span class="table-population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}


//search the input and table
const searchInput = document.querySelector('.listCities-search');
const suggestions = document.querySelector('.listCities-suggestions');

//event of search and list
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);