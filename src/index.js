/**
 *
 * 7. Handle weather display when invalid input (right now it reloads with NA)
 * 8. Improve desing:
 * - Add icons for weather conditions
 * - Add custom error messages: empty input, invalid city => DONE
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
