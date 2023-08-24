import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { saveState } from "../utils/Store.js";


function _saveCars() {
    saveState('cars', AppState.cars)
}

class CarsService {
    deleteCar(carId) {
        // console.log('delete car service', carId)
        let foundCar = AppState.cars.find(car => car.id == carId) // NOTE this will be an important step later....
        let filteredCarArr = AppState.cars.filter(car => car.id != carId) // NOTE filter out the car we want to remove
        console.log(filteredCarArr)
        AppState.cars = filteredCarArr // NOTE set the appstate to the returned array that filters out the car we want to remove
        _saveCars() //NOTE save the newly filtered appstate back to local storage
    }
    createCar(formData) {
        let newCar = new Car(formData)
        AppState.cars.push(newCar)
        console.log(AppState.cars)
        AppState.emit('cars') //NOTE emits change from AppState.cars so that our listener can catch the change
        _saveCars()
    }

}

export const carsService = new CarsService()