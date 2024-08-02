export class Icon {

    #ICON_FILE_NAME = new Map ([
        ['snow', 'icon-snow.svg'],
        ['rain', 'icon-rain.svg'],
        ['fog', 'icon-fog.svg'],
        ['wind', 'icon-wind.svg'],
        ['cloudy', 'icon-cloudy.svg'],
        ['partly-cloudy-day', 'icon-partly-cloudy.svg'],
        ['partly-cloudy-night', 'icon-partly-cloudy-night.svg'],
        ['clear-day', 'icon-clear-day.svg'],
        ['clear-night', 'icon-clear-night.svg']
        
    ])

    getIconFilePath (iconName){
        return  `styles/icons/${this.#ICON_FILE_NAME.get(iconName)}`
    }
}
export const icon = new Icon()