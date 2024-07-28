import { timelineWeatherClient } from "../api/client/timelineWeather.js"
export default class ForecastService {

    static async fetchweekly({location, date1, date2} = {})  {
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
}
