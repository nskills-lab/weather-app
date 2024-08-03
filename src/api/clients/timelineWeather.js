class TimelineWeatherClient {
  key = 'JAL6N8TXYGWG3VZSGAS6BM3JE'
  endpoint = () => {
    return 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'
  }
}

export const timelineWeatherClient = new TimelineWeatherClient()
