export function saveToLocalStorage(forecast) {

    localStorage.setItem('weatherApp', JSON.stringify(forecast));
  }
  export function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('weatherApp'));
  }