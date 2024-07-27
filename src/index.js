/**
 *
 * 1. Calling API with the location name - DONE
 * 2. Parsing data - DONE
 * 3. Displaying in the correct places - DONE
 * 
 * 4. Getting city:
 *  - select OR input text field?
 * 5. updating step 1 with dynamic input
 */

import { timelineWeatherClient } from "./api/client/timelineWeather.js"
import { week } from "./utils/dateUtils.js"


const getWeatherForecastWeek = async ({location = 'Chicago', date1, date2} = {}) =>  {
    const today = new Date()
    const dateStart = date1 ?? `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    today.setDate(today.getDate() + 6)
    const dateEnd = date2 ??`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    const URL = timelineWeatherClient.endpoint() + `/${location}/${dateStart}/${dateEnd}?key=${timelineWeatherClient.key}`
    const response = await fetch(URL, {mode: 'cors'})

   const {currentConditions, days} = (await response.json())
   return {currentConditions, days} 
}


const renderWeatherData = async(weatherData) =>{

    document.querySelectorAll('[data-day]').forEach(dayCard => {
        const day = dayCard.dataset.day
        const weatherDatum = weatherData.days[day]
        const formattedDate = weatherDatum.datetime.replaceAll('-', ',')
        const weekDay = week.getDate(formattedDate)
       
        if (day == 0){
            const todayTempEl = dayCard.querySelector('[data-weekly-card-now]')
            todayTempEl.innerText = `${weatherData.currentConditions.temp}°`
        } else {
            const dateEl = dayCard.querySelector('[data-weekly-card-date]')
            dateEl.innerText = `${weekDay}`
        }
        const tempDescEl = dayCard.querySelector('[data-weekly-card-temp-desc]')
        tempDescEl.innerText = `${weatherDatum.conditions}`
        const tempHighEl =  dayCard.querySelector('[data-weekly-card-temp-high]')
        tempHighEl.innerText = `H ${weatherDatum.tempmax}°`
        const tempLowEl = dayCard.querySelector('[data-weekly-card-temp-low]')
        tempLowEl.innerText = `L ${weatherDatum.tempmin}°`
        
    });
}

const weather = await getWeatherForecastWeek()
renderWeatherData(weather)

