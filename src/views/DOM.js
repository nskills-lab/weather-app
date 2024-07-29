import ForecastService from "../services/forecast.js";
import { appUtils } from "../utils/dateUtils.js";
import { constants } from "../utils/constants.js";
import { getFromLocalStorage, saveToLocalStorage } from "../services/localStorage.js";
const locationName =  document.getElementById('location-name')

export default class DOM {

    static async displayWeatherForLocation (event){
        event.preventDefault();
        const input = document.getElementById('search')
        let cityToSearch =  input .value 
        try {
            if (cityToSearch.length === 0 ){
                throw new Error("Name can't be blank!")
            }
          const forecast = await ForecastService.fetchweekly({location: cityToSearch})
          const parsedForcastData = ForecastService.extractWeatherData(forecast)
          parsedForcastData.push({'city': cityToSearch})
          saveToLocalStorage(JSON.stringify(parsedForcastData))
          DOM.renderWeatherData({weather: parsedForcastData, location: cityToSearch})
          
        } catch (error){
            if (error.message.match('HTTP')){
                input .classList.toggle('invalid-request-error')
            } 
            input.classList.toggle('required-error')
            const lastForecast = JSON.parse(getFromLocalStorage())
            DOM.renderWeatherData({weather: lastForecast, location: lastForecast[7].city})
        } 
    }

    static updateTempElement (element, temp){
        element.innerText = `${temp}${constants.DEGREE_SIGN}`
        element.dataset.tempValue = temp
}

    static renderWeatherData ({weather, location}){
     
        document.querySelectorAll('[data-day]').forEach(dayCard => {
            const day =  Number(dayCard.dataset.day)
            const weatherDatum = weather[day]
            const formattedDate = weatherDatum.date
            const weekDay = appUtils.getDate(formattedDate)
           
            if (day == 0){
                locationName.innerText =  appUtils.capitalize(location)
                const todayTempEl = dayCard.querySelector('[data-weekly-card-temp="now"]')
                DOM.updateTempElement(todayTempEl, weatherDatum.currentTemp)
            } else {
                const dateEl = dayCard.querySelector('[data-weekly-card-date]')
                dateEl.innerText = `${weekDay}`
            }
            // Setting temperature desciption attributes
            const tempDescEl = dayCard.querySelector('[data-weekly-card-temp="desc"]')
            tempDescEl.innerText = `${weatherDatum.desc}`
    
            // Setting the highest temp of the day attributes
            const tempHighEl =  dayCard.querySelector('[data-weekly-card-temp="high"]')
            DOM.updateTempElement(tempHighEl, weatherDatum.high)
    
            // Setting the lowest temp of the day attributes
            const tempLowEl = dayCard.querySelector('[data-weekly-card-temp="low"]')
            DOM.updateTempElement(tempLowEl, weatherDatum.low)
        });
    }

    static updateTempElement(element, temp){
    element.innerText = `${temp}${constants.DEGREE_SIGN}`
    element.dataset.tempValue = temp
    }

    static async  updateTempScaleDisplay (tempScale) {
        document.querySelectorAll('[data-day]').forEach(dayCard =>{
            const day = dayCard.dataset.day
            let convertedDegree
            if (day === '0'){
                const todayTempEl = dayCard.querySelector('[data-weekly-card-temp="now"]')
                convertedDegree = appUtils.convertTemp(tempScale, Number(todayTempEl.dataset.tempValue) )
                DOM.updateTempElement(todayTempEl, convertedDegree)
            }   
            const tempHighEl =  dayCard.querySelector('[data-weekly-card-temp="high"]')
            convertedDegree = appUtils.convertTemp(tempScale, Number(tempHighEl.dataset.tempValue) )
            DOM.updateTempElement(tempHighEl, convertedDegree)
    
            const tempLowEl = dayCard.querySelector('[data-weekly-card-temp="low"]')
            convertedDegree = appUtils.convertTemp(tempScale, Number(tempLowEl.dataset.tempValue))
            DOM.updateTempElement(tempLowEl, convertedDegree)
        })
    }

    static async defaultDisplay (){
        const defaultCity = 'New York'
        const weather = await ForecastService.fetchweekly({location: defaultCity})
        const parsedForcastData = ForecastService.extractWeatherData(weather)
        parsedForcastData.push({'city': defaultCity})
        saveToLocalStorage(JSON.stringify(parsedForcastData))
        DOM.renderWeatherData({weather:  parsedForcastData, location: defaultCity} )
   
    }


    static switchTimeScales(event){
        if(event.target.matches('button')){
            const tempScale = event.target.dataset.tempScale
            DOM.updateTempScaleDisplay(tempScale)
        }
    }
}


