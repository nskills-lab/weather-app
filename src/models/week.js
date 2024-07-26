class Week {
    #dateToDayOfWeek = new Map ([
        [0, 'Sun'],
        [1, 'Mon'],
        [2, 'Tue'],
        [3, 'Wed'],
        [4, 'Thu'],
        [5, 'Fri'],
        [6, 'Sat'],

    ])

  getDayOfWeek(date){
    const numOfWeek = new Date(date).getDay()
    return this.#dateToDayOfWeek.get(numOfWeek)
  }
}

export const week = new Week()