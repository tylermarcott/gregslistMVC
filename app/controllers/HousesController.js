import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { carsService } from "../services/CarsService.js";
import { setHTML } from "../utils/Writer.js";




export class HousesController {

  constructor() {
    console.log('hello from house controller')

    this._drawHouse()
  }



  // NOTE: make sure to set our draw function private, because the user NEVER needs access to this.
  _drawHouse() {

    let houses = AppState.houses

    console.log("here's our houses array", houses)

    let content = ''

    houses.forEach(house => content += house.HouseTemplate)

    // this console log is showing up as undefined for content.

    console.log('drawing houses', content)

    // setHTML('houses', content)
  }



}