/**
 *
 * 6. Add a way to toggle between F and C options
 * 7. Improve desing:
 * - Add icons for weather conditions
 * 8. Optimize code: 
 * - more modular code
 * - reduce redundancy
 * - see if anything can be improved 
 *  - see if any of JS advanced can be used
 * 9. Update to include webpack 
 */


import DOM from "./views/DOM.js"

window.onload = await DOM.defaultDisplay()
document.addEventListener('click', DOM.switchTimeScales)
document.getElementById('search-options-form').addEventListener('submit', DOM.displayWeatherForLocation)
