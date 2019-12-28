//bands
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

//take unnecessary words
strip = (bandName) => {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

//sort bands
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

//event list
document.querySelector('.bands').innerHTML =
  sortedBands
    .map(band => `<li class="bands-item">${band}</li>`)
    .join('');