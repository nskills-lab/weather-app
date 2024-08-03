import { constants } from './constants.js'
class AppUtils {
  getDate(dateStr) {
    const date = new Date(dateStr)
    const dayOfTheWeek = constants.WEEKDAYS.get(date.getDay())
    const month = date.toLocaleString('default', { month: 'short' })
    const day = date.getDate()
    return `${dayOfTheWeek} ${month} ${day}`
  }

  convertTemp(tempScale, degree) {
    let temp
    if (tempScale === 'celsius') {
      temp = (degree - 32) / (9 / 5)
    }
    if (tempScale === 'fahrenheit') {
      temp = degree * 1.8 + 32
    }
    return Math.round(temp * 10) / 10
  }

  capitalize(string) {
    const strArr = string.trim().toLowerCase().split(' ')
    const everyFirstLetterCapStr = strArr
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ')
    return everyFirstLetterCapStr
  }
}

export const appUtils = new AppUtils()
