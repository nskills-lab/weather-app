class Icons {
  #ICON_FILE_NAME = new Map([
    ['snow', 'icon-snow.svg'],
    ['rain', 'icon-rain.svg'],
    ['fog', 'icon-fog.svg'],
    ['wind', 'icon-wind.svg'],
    ['cloudy', 'icon-cloudy.svg'],
    ['partly-cloudy-day', 'icon-partly-cloudy.svg'],
    ['partly-cloudy-night', 'icon-partly-cloudy-night.svg'],
    ['clear-day', 'icon-clear-day.svg'],
    ['clear-night', 'icon-clear-night.svg'],
  ])

  #getIconFilePath(iconName) {
    return `./styles/icons/${this.#ICON_FILE_NAME.get(iconName)}`
  }

  renderWeatherIcons(weather, dayCard) {
    const day = Number(dayCard.dataset.day)
    const weatherDatum = weather[day]
    let iconEl
    if (day === 0) {
      iconEl = dayCard.querySelector('[data-weekly-card-temp-icon="now"]')
      iconEl.querySelector('img').src = this.#getIconFilePath(weatherDatum.icon)
    } else {
      iconEl = dayCard.querySelector('[data-weekly-card-temp-icon]')
    }

    iconEl.querySelector('img').src = this.#getIconFilePath(weatherDatum.icon)
  }
}

export const icons = new Icons()
