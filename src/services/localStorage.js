export function saveToLocalStorage(forecast) {
    localStorage.setItem('weatherApp', forecast);
  }
  export function getFromLocalStorage() {
    return localStorage.getItem('weatherApp');
  }