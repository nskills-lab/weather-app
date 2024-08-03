import { appUtils } from '../utils/dateUtils.js'
import { temperature } from './temperature.js'
import { icons } from './icons.js'
import { tempScale as TempScale } from './tempScaleToggle.js'
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from '../utils/localStorage.js'
class ForecastDisplay {
  renderWeatherData(weather) {
    document.querySelectorAll('[data-day]').forEach((dayCard) => {
      const day = Number(dayCard.dataset.day)
      const weatherDatum = weather[day]
      const formattedDate = weatherDatum.date
      const weekDay = appUtils.getDate(formattedDate)
      const locationName = document.getElementById('location-name')
      locationName.innerText = appUtils.capitalize(weather[7].city)
      temperature.renderTemps(weather, dayCard)
      icons.renderWeatherIcons(weather, dayCard)

      if (day !== 0) {
        const dateEl = dayCard.querySelector('[data-weekly-card-date]')
        dateEl.innerText = `${weekDay}`
      }
    })
    const currentEl = document.querySelector('[data-weekly-card-temp-scale]')
    currentEl.dataset.weeklyCardTempScale = weather[8].scale
    TempScale.updateToggle(weather[8].scale)
  }

  updateTempScaleDisplay(tempScale) {
    const localStorageForecast = getFromLocalStorage()
    document.querySelectorAll('[data-day]').forEach((dayCard) => {
      temperature.convertTempUpdateData(
        localStorageForecast,
        dayCard,
        tempScale
      )
      temperature.renderTemps(localStorageForecast, dayCard)
    })
    TempScale.updateToggle(tempScale)
    const currentEl = document.querySelector('[data-weekly-card-temp-scale]')
    currentEl.dataset.weeklyCardTempScale = tempScale
    localStorageForecast[8].scale = tempScale
    saveToLocalStorage(localStorageForecast)
  }
}

export const forecastDisplay = new ForecastDisplay()
