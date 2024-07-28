/**
 *
 * 1. Calling API with the location name - DONE
 * 2. Parsing data - DONE
 * 3. Displaying in the correct places - DONE
 * 4. Getting city - DONE
 * 
 * 5. Defalt page when a user lands on the screen - DONE
 * 6. Add a way to toggle between F and C options
 * 7. Improve desing:
 * - Add icons for weather conditions
 * 8. Optimize code: 
 * - more modular code
 * - reduce redundancy
 * - see if anything can be improved 
 *  - see if any of JS advanced can be used
 * 9. Update to include webpack 
 */

import { timelineWeatherClient } from "./api/client/timelineWeather.js"
import { week } from "./utils/dateUtils.js"
const searchForm = document.getElementById('search-options-form')
const cityInput =  document.getElementById('location-name')
const fahrenheit = document.getElementById('fahrenheit')
const celsius = document.getElementById('celsius')

const displayWeatherForLocation = async (e) => {
    e.preventDefault();
    const cityToSearch =  document.getElementById('search').value 
    if (cityToSearch.length === 0 ) return alert("City name can't be blank!")
    try {
    const forecast = await getWeatherForecastWeek({location: cityToSearch})
    console.log(forecast)
    await renderWeatherData({weather: forecast, location: cityToSearch})
    } catch (e){
        alert("Invalid request!")
    }
}

const getWeatherForecastWeek = async ({location, date1, date2} = {}) =>  {
    const today = new Date()
    const dateStart = date1 ?? `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    today.setDate(today.getDate() + 6)
    const dateEnd = date2 ??`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    const locationToSearch = location ?? 'New York'
    const URL = timelineWeatherClient.endpoint() + `/${locationToSearch}/${dateStart}/${dateEnd}?key=${timelineWeatherClient.key}`
    const response = await fetch(URL, {mode: 'cors'})
    if (!response.ok) {
            throw new Error("HTTP status " + response.status);
    }
    const {currentConditions, days} = (await response.json())
    return {currentConditions, days} 
    
}

const capitalize = (string)=> {
    const strArr = string.trim().toLowerCase().split(' ')
    const everyFirstLetterCapStr = strArr.map(
        word => word[0].toUpperCase()+word.slice(1)
    ).join(" ")
    return everyFirstLetterCapStr
}


const renderWeatherData = async({weather, location}) =>{

    document.querySelectorAll('[data-day]').forEach(dayCard => {
        const day = dayCard.dataset.day
        const weatherDatum = weather.days[day]
        const formattedDate = weatherDatum.datetime.replaceAll('-', ',')
        const weekDay = week.getDate(formattedDate)
       
        if (day == 0){
            
            const cityFinalVal =  location ?? 'new york'
            cityInput.innerText =  capitalize(cityFinalVal)
            const todayTempEl = dayCard.querySelector('[data-weekly-card-now]')
            todayTempEl.innerText = `${weather.currentConditions.temp}°`
        } else {
            const dateEl = dayCard.querySelector('[data-weekly-card-date]')
            dateEl.innerText = `${weekDay}`
        }
        const tempDescEl = dayCard.querySelector('[data-weekly-card-temp-desc]')
        tempDescEl.innerText = `${weatherDatum.conditions.split(',')[0]}`
        const tempHighEl =  dayCard.querySelector('[data-weekly-card-temp-high]')
        tempHighEl.innerText = `H ${weatherDatum.tempmax}°`
        const tempLowEl = dayCard.querySelector('[data-weekly-card-temp-low]')
        tempLowEl.innerText = `L ${weatherDatum.tempmin}°`
        
    });
}

const defaultDisplay = async()=>{
    const weather = await getWeatherForecastWeek()
    await renderWeatherData({weather: weather})
    cityInput.innerText = 'New York'
}
await defaultDisplay()
document.addEventListener('click', (e)=> {
    
})
searchForm.addEventListener('submit', displayWeatherForLocation)
