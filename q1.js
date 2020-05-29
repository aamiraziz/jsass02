var a = prompt('Enter your city: ', 'Karachi')

function display(cityName) {
    if (cityName == 'Karachi' || cityName == 'karachi') {
        document.write("Welcome to city of lights")
    } else {
        document.write(cityName)
    }
}