import AppController from './views/app.js'
import './styles/main.css'
import './styles/normalize.css'

await AppController.defaultDisplay()
document.addEventListener('click', AppController.switchTimeScales)
document
  .getElementById('search-options-form')
  .addEventListener('submit', AppController.displayWeatherForLocation)
