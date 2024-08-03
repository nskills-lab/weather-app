import { constants } from '../utils/constants.js'
import { appUtils } from '../utils/dateUtils.js'
class Temperature {
  #updateTempElementVal(element, temp, attr = '') {
    element.innerText = `${attr} ${temp}${constants.DEGREE_SIGN}`
    element.dataset.tempValue = temp
  }

  renderTemps(weather, dayCard) {
    const day = Number(dayCard.dataset.day)
    const weatherDatum = weather[day]
    if (day === 0) {
      const todayTempEl = dayCard.querySelector('[data-weekly-card-temp="now"]')
      this.#updateTempElementVal(todayTempEl, weatherDatum.currentTemp)
    }
    // Setting the highest temp of the day attributes
    const tempHighEl = dayCard.querySelector('[data-weekly-card-temp="high"]')
    this.#updateTempElementVal(tempHighEl, weatherDatum.high, 'H')

    // Setting the lowest temp of the day attributes
    const tempLowEl = dayCard.querySelector('[data-weekly-card-temp="low"]')
    this.#updateTempElementVal(tempLowEl, weatherDatum.low, 'L')
  }

  convertTempUpdateData(tempData, dayCard, tempScale) {
    const day = Number(dayCard.dataset.day)
    const weatherDatum = tempData[day]
    let convertedDegree = 0
    if (day === '0') {
      convertedDegree = appUtils.convertTemp(
        tempScale,
        Number(tempData[day].currentTemp)
      )
      weatherDatum.currentTemp = convertedDegree
    }
    convertedDegree = appUtils.convertTemp(
      tempScale,
      Number(tempData[day].high)
    )
    tempData[day].high = convertedDegree
    convertedDegree = appUtils.convertTemp(tempScale, Number(tempData[day].low))
    tempData[day].low = convertedDegree
    return tempData
  }
}

export const temperature = new Temperature()
