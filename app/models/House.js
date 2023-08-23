


// NOTE remember to always export your class!
export class House {

  // NOTE: just commenting out generateId until we use it.
  constructor(data) {
    // this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
}