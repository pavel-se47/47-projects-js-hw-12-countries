import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import countryCardTpl from './templates/country-card.hbs';
import countryListTpl from './templates/country-list.hbs';

defaultModules.set(PNotifyMobile, {});

const countryCardEl = document.querySelector('.js-country-card');

export function renderAlertError() {
  countryCardEl.innerHTML = '';
  alert({
    title: 'Error!',
    text: 'The country you are looking for does not exist!',
    delay: 2000,
    hide: true,
  });
}

export function renderAlert404() {
  countryCardEl.innerHTML = '';
  alert({
    title: 'Error!',
    text: 'The input field must not be empty!',
    delay: 2000,
    hide: true,
  });
}

export function renderAlert() {
  countryCardEl.innerHTML = '';
  alert({
    title: 'Attention!',
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 2000,
    hide: true,
  });
}

export function renderCountryCard(arr) {
  countryCardEl.innerHTML = '';
  arr.map(country => {
    const markup = countryCardTpl(country);
    countryCardEl.innerHTML = markup;
  });
}

export function renderCountryList(arr) {
  countryCardEl.innerHTML = '';
  arr.map(country => {
    const markup = countryListTpl(country);
    countryCardEl.insertAdjacentHTML('beforeend', markup);
  });
}
