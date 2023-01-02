import _ from 'lodash';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './fetchCountries';

const inputEl = document.querySelector('#search-country');

function onSearch(event) {
  fetchCountries(`${event.target.value}`);
}

const debouncedOnSearch = _.debounce(onSearch, 300);

inputEl.addEventListener('input', debouncedOnSearch);
