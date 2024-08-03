import AppController from './views/app.js'
import './styles/main.css'
import './styles/normalize.css'
import './styles/icons/icon-clear-day.svg'
import './styles/icons/icon-clear-night.svg'
import './styles/icons/icon-cloudy.svg'
import './styles/icons/icon-fog.svg'
import './styles/icons/icon-partly-cloudy.svg'
import './styles/icons/icon-partly-cloudy-night.svg'
import './styles/icons/icon-rain.svg'
import './styles/icons/icon-snow.svg'
import './styles/icons/icon-wind.svg'

await AppController.defaultDisplay()
document.addEventListener('click', AppController.switchTimeScales)
document
  .getElementById('search-options-form')
  .addEventListener('submit', AppController.displayWeatherForLocation)
