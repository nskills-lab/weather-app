class DateUtils {
    #WEEKDAYS = new Map ([
        [0, 'Sun'],
        [1, 'Mon'],
        [2, 'Tue'],
        [3, 'Wed'],
        [4, 'Thu'],
        [5, 'Fri'],
        [6, 'Sat'],

    ])

  getDate (dateStr){
    const date = new Date(dateStr)
    const dayOfTheWeek = this.#WEEKDAYS.get(date.getDay())
    const month = date.toLocaleString('default', { month: 'short' })
    const day = date.getDate()
    return `${dayOfTheWeek} ${month} ${day}`
  }
}

export const week = new DateUtils()