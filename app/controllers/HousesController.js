import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


function _drawHouses() {

  let houses = AppState.houses

  // console.log("here's our houses array", houses)

  let content = ''

  houses.forEach(house => content += house.HouseTemplate)

  // console.log('drawing houses', content)

  // NOTE: ok so what was happening here, houses element wasn't defined, I was getting an error saying "trying to set HTML but can't find houses you are talking about basically". Where was I trying to draw my HTML from my template to? To my view point, which is my router. How does my template know where to insert the HTML? By using an id. All I had to do was make a section below my current default code that I had in my router and put this id in there!

  setHTML('houses', content)
}



// TODO: now all I have to do is create syntax and styling for creating a delete button on the listing and implementing. Also would be nice to use local storage

export class HousesController {

  constructor() {
    // console.log('hello from house controller')

    _drawHouses()

    // why do we not use a parenthesis here at _drawHouses?
    AppState.on('houses', _drawHouses)  // this says that when there is a chance in our appstate class instances, call _drawHouses()/ This is our listener
  }


  createHouse() {

    console.log('hello from createHouse function.')

    window.event.preventDefault() //prevents page from refreshing on submit

    const formEvent = window.event.target

    console.log("here's our form event", formEvent)

    const formData = getFormData(formEvent) //this is our form data object. get our form data from our form event, which in this case is the submission of the form itself.

    // NOTE we do this here bc this is part of handling the user input and is not manipulating data (appstate)
    if (formData.isNew == 'on') {
      formData.isNew = true
    }

    console.log('form data obj', formData)

    formEvent.reset() // NOTE clears the form after submission

    housesService.createHouse(formData)


  }




}