import { timelineWeatherClient } from "../api/client/timelineWeather.js"
export default class ForecastService {

    static async fetchweekly({location, date1, date2} = {})  {
        const today = new Date()
        const dateStart = date1 ?? `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        today.setDate(today.getDate() + 6)
        const dateEnd = date2 ??`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        const locationToSearch = location ?? 'New York'
        const URL = timelineWeatherClient.endpoint() + `/${locationToSearch}/${dateStart}/${dateEnd}?key=${timelineWeatherClient.key}&IconSet=icons1`
        const response = await fetch(URL, {mode: 'cors'})
        if (!response.ok) {
                throw new Error("HTTP status " + response.status);
        }
        const {currentConditions, days} = (await response.json())
        console.log(currentConditions)
        console.log(days)
        return {currentConditions, days} 
        
    }

    static extractWeatherData (forecastRes){

        let weatherToSave = []
        for (let day = 0; day < 7; day++){
            weatherToSave[day] = {}
            let dailyWeather = forecastRes.days[day]
       
            weatherToSave[day]['date'] =   dailyWeather.datetime.replaceAll('-', ',')
            if (day === 0){
                weatherToSave[day]['currentTemp'] = forecastRes.currentConditions.temp
                weatherToSave[day]['icon'] = forecastRes.currentConditions.icon
            }
            weatherToSave[day]['desc'] = dailyWeather.conditions.split(',')[0]
            weatherToSave[day]['high'] = dailyWeather.tempmax
            weatherToSave[day]['low'] = dailyWeather.tempmin
            weatherToSave[day]['icon'] = dailyWeather.icon
        }
        return weatherToSave
    }
}
