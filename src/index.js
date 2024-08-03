/**

 * 10. Update to include webpack
 */

import AppController from './views/app.js'

await AppController.defaultDisplay()
document.addEventListener('click', AppController.switchTimeScales)
document
  .getElementById('search-options-form')
  .addEventListener('submit', AppController.displayWeatherForLocation)
