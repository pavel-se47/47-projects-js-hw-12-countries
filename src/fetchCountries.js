import {
  renderAlert404,
  renderAlertError,
  renderAlert,
  renderCountryList,
  renderCountryCard,
} from './renderCard';

export default function fetchCountries(searchQuery) {
  fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
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
