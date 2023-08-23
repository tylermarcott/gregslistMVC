import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { carsService } from "../services/CarsService.js";
import { setHTML } from "../utils/Writer.js";


function _drawHouses() {

  let houses = AppState.houses

  // console.log("here's our houses array", houses)

  let content = ''

  houses.forEach(house => content += house.HouseTemplate)

  // console.log('drawing houses', content)

  // FIXME: getting undefined element for 'houses'
  // NOTE: ok so what was happening here, houses element wasn't defined, I was getting an error saying "trying to set HTML but can't find houses you are talking about basically". Where was I trying to draw my HTML from my template to? To my view point, which is my router. How does my template know where to insert the HTML? By using an id. All I had to do was make a section below my current default code that I had in my router and put this id in there!

  setHTML('houses', content)
}

export class HousesController {

  constructor() {
    console.log('hello from house controller')

    _drawHouses()
  }



  // NOTE: make sure to set our draw function private, because the user NEVER needs access to this.




}