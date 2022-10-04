function makeCar(manufacturer, model_name, color = "blue", two_package = false) {
    car = { "Manufacturer": manufacturer, "Model Name": model_name, "Color": color, "Two Package": two_package }
    return car
}

car = makeCar("subaru", "outback", "blue", true)
console.log(car)


car = makeCar("subaru", "outback", "Red")
console.log(car)


car = makeCar("subaru", "outback")
console.log(car)