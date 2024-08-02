/**
 *
 * 9. Optimize code: 
 * - more modular code
 * - reduce redundancy
 * - see if anything can be improved 
 *  - see if any of JS advanced can be used
 * 10. Update to include webpack 
 */


import DOM from "./views/DOM.js"

await DOM.defaultDisplay()
document.addEventListener('click', DOM.switchTimeScales)
document.getElementById('search-options-form').addEventListener('submit', DOM.displayWeatherForLocation)
