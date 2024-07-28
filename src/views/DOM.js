import ForecastService from "../services/weatherForecast.js";
import { appUtils } from "../utils/dateUtils.js";
import { constants } from "../utils/constants.js";
const locationName =  document.getElementById('location-name')

export default class DOM {

    static async displayWeatherForLocation (event){
        event.preventDefault();
        const input = document.getElementById('search')
        let cityToSearch =  input .value 
        const prevCity = locationName.innerText;
        try {
            if (cityToSearch.length === 0 ){
                throw new Error("Name can't be blank!")
            }
          console.log('still rendering even with errors')
          DOM.renderWeatherData({weather: forecast, location: cityToSearch})
          
        } catch (error){
            cityToSearch = prevCity
            if (error.message.match('HTTP')){
                input .classList.toggle('invalid-request-error')
            } 
            input.classList.toggle('required-error')
        } 
    }

    static updateTempElement (element, temp){
        element.innerText = `${temp}${constants.DEGREE_SIGN}`
        element.dataset.tempValue = temp
}

    static renderWeatherData ({weather, location}){
        document.querySelectorAll('[data-day]').forEach(dayCard => {
            const day = dayCard.dataset.day
            const weatherDatum = weather.days[day]
            const formattedDate = weatherDatum.datetime.replaceAll('-', ',')
            const weekDay = appUtils.getDate(formattedDate)
           
            if (day == 0){
                const cityFinalVal =  location ?? 'new york'
                locationName.innerText =  appUtils.capitalize(cityFinalVal)
                const todayTempEl = dayCard.querySelector('[data-weekly-card-temp="now"]')
                DOM.updateTempElement(todayTempEl, weather.currentConditions.temp)
            } else {
                const dateEl = dayCard.querySelector('[data-weekly-card-date]')
                dateEl.innerText = `${weekDay}`
            }
            // Setting temperature desciption attributes
            const tempDescEl = dayCard.querySelector('[data-weekly-card-temp="desc"]')
            tempDescEl.innerText = `${weatherDatum.conditions.split(',')[0]}`
    
            // Setting the highest temp of the day attributes
            const tempHighEl =  dayCard.querySelector('[data-weekly-card-temp="high"]')
            DOM.updateTempElement(tempHighEl, weatherDatum.tempmax)
    
            // Setting the lowest temp of the day attributes
            const tempLowEl = dayCard.querySelector('[data-weekly-card-temp="low"]')
            DOM.updateTempElement(tempLowEl, weatherDatum.tempmin)
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
        const weather = await ForecastService.fetchweekly()
        DOM.renderWeatherData({weather: weather})
        locationName.innerText = 'New York'
    }


    static switchTimeScales(event){
        if(event.target.matches('button')){
            const tempScale = event.target.dataset.tempScale
            DOM.updateTempScaleDisplay(tempScale)
        }
    }
}


