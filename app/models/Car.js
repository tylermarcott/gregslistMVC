import { generateId } from "../utils/generateId.js"

export class Car {

  constructor(data) {
    this.id = generateId()
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.price = data.price
    //             this || is called a pipe operator and reads as 'OR'.. use this for handling default values
    this.isNew = data.isNew || false // NOTE set default value to false
    this.description = data.description
    this.color = data.color
    this.listingDate = new Date()
  }
  // constructor({name,year}){

  // }


  get CardTemplate() {
    return /*html*/`
       <div class="col-md-10 elevation-5 rounded-top my-2" style="border: 2px solid ${this.color}">
        <div class="row">
          <div class="col-4 p-0">
            <img class="img-fluid rounded-start"
              src=${this.imgUrl}
              alt="${this.make} ${this.model}">
          </div>
          <div class="col-8">
            <h2 class="text-center">${this.year} ${this.make} ${this.model}</h2>
            <div class="d-flex justify-content-around pt-3">
              <span>$${this.price}</span>
              <span>${this.listingDate.toLocaleDateString()}</span>
            </div>
            <p>${this.description}</p>
            <div class="text-end py-2">
                <button class="btn btn-danger" onclick="app.CarsController.deleteCar('${this.id}')">Remove Car <i class="mdi mdi-delete"></i> </button>
            </div>
          </div>
        </div>
      </div>`
  }


}