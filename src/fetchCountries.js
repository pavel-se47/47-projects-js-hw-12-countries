import {
  renderAlert404,
  renderAlertError,
  renderAlert,
  renderCountryList,
  renderCountryCard,
} from './renderCard.js';

export default function fetchCountries(searchQuery) {
  const searchQueryTrim = searchQuery.trim();
  const filter = '?fields=name,capital,population,flags,languages';
  fetch(`https://restcountries.com/v3.1/name/${searchQueryTrim}${filter}`)
    .then(response => {
      return response.json();
    })
    .then(countries => {
      if (countries.message === 'Not Found') {
        return renderAlertError();
      } else if (countries.message === 'Page Not Found') {
        return renderAlert404();
      } else if (countries.length > 10) {
        return renderAlert();
      } else if (countries.length >= 2 && countries.length <= 10) {
        return renderCountryList(countries);
      } else {
        return renderCountryCard(countries);
      }
    })
    .catch(err => {
      console.log(err);
    });
}
