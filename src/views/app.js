import ForecastService from '../containers/forecast.js'
import { forecastDisplay } from '../components/forecastDisplay.js'
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../utils/localStorage.js'
const errorEl = document.getElementById('error')

export default class AppController {
  static switchTimeScales(event) {
    if (event.target.matches('button')) {
      const selectedTempScale = event.target.dataset.tempScale
      const currentEl = document.querySelector('[data-weekly-card-temp-scale]')
      const currentScaleValue = currentEl.dataset.weeklyCardTempScale
      if (currentScaleValue === selectedTempScale) return
      forecastDisplay.updateTempScaleDisplay(selectedTempScale)
    }
  }

  static async defaultDisplay(prevCity = 'New York') {
    const weather = await ForecastService.fetchweekly({ location: prevCity })
    const parsedForcastData = ForecastService.extractWeatherData(weather)
    parsedForcastData.push({ city: prevCity })
    parsedForcastData.push({ scale: 'fahrenheit' })
    forecastDisplay.renderWeatherData(parsedForcastData)
    saveToLocalStorage(parsedForcastData)
  }

  static async displayWeatherForLocation(event) {
    event.preventDefault()
    errorEl.innerText = ''
    const prevCity = getFromLocalStorage()[7].city
    const input = document.getElementById('search')
    let cityToSearch = input.value
    try {
      if (cityToSearch.length === 0) {
        throw new Error("Name can't be blank!")
      }
      const forecast = await ForecastService.fetchweekly({
        location: cityToSearch,
      })
      const parsedForcastData = ForecastService.extractWeatherData(forecast)
      parsedForcastData.push({ city: cityToSearch })
      parsedForcastData.push({ scale: 'fahrenheit' })
      forecastDisplay.renderWeatherData(parsedForcastData)
      saveToLocalStorage(parsedForcastData)
    } catch (error) {
      if (error.message.match('HTTP')) {
        errorEl.innerText = 'Invalid request! Please try again.'
      } else {
        errorEl.innerText = error.message
      }
      await AppController.defaultDisplay(prevCity)
    }
  }
}
