/**
 *
 * 1. Calling API with the location name - DONE
 * 2. Parsing data 
 * 3. Displaying in the correct places.
 * 4. Getting city:
 *  - select OR input text field?
 * 5. updating step 1 with dynamic input
 */

import { timelineWeatherClient } from "./api/client/timelineWeather.js"
import { week } from "./models/week.js"


const getWeatherData = async (location = 'Chicago') =>  {
    const URL = timelineWeatherClient.endpoint() + `/${location}?key=${timelineWeatherClient.key}`
    const response = await fetch(URL, {mode: 'cors'})
    const data = await response.json()
    const sevenDayData = data.days.slice(0,7)
    console.log(sevenDayData)
    const date = sevenDayData[0].datetime
    console.log(date )
    const weekDay = week.getDayOfWeek(date)
    console.log(weekDay)
}

getWeatherData()