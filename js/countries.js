// search input element
const elSearchInput = document.querySelector('.filters-search-input');
// ul element index-countries-list
const elCountriesList = document.querySelector('.index-countries-list');



// show countries function
async function getCountries() {
  const API = await fetch('https://restcountries.com/v3.1/all')
  const res = await API.json()
  res.forEach(country => {
    showCountry(country)
  });
}
getCountries()

//  Append to the HTML
function showCountry(data) {
  const countryItem = document.createElement('li')
  countryItem.classList.add('index-countries-item')
  countryItem.innerHTML = `
    <div class="index-country">
      <img class="index-country-img" src=${data.flags.svg} width="264" height="160">
      <div class="index-country-info">
        <h3 class="index-country-name">
          <a class="index-country-link" href="country.html">
            ${data.name.common}
          </a>
        </h3>
        <dl class="index-country-details">
          <div class="index-country-details-item">
            <dt class="index-country-details-title">Population:</dt>
            <dd class="index-country-details-value">${data.population}</dd>
          </div>
          <div class="index-country-details-item">
            <dt class="index-country-details-title">Region:</dt>
            <dd class="index-country-details-value">${data.region}</dd>
          </div>
          <div class="index-country-details-item">
            <dt class="index-country-details-title">Capital:</dt>
            <dd class="index-country-details-value">${data.capital}</dd>
          </div>
        </dl>
      </div>
    </div>
  `
  elCountriesList.appendChild(countryItem)
}

// Search input function
if(elSearchInput) {
  const countryName = document.getElementsByClassName('index-country-name')
  elSearchInput.addEventListener('input', e => {
    Array.from(countryName).forEach(country => {
      if(country.innerText.toLowerCase().includes(elSearchInput.value.toLowerCase())) {
        country.parentElement.parentElement.parentElement.style.display = "grid"
      } else {
        country.parentElement.parentElement.parentElement.style.display = "none"
      }
    })
  })
}
