


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



  get HouseTemplate() {

    // NOTE: make sure to return your template here, or it's just going to show up as undefined if you try to draw it to the page.

    return /*html*/`
    <div class="container-fluid">
      <div class="row">
        <section class="col-5">
          <img src="${this.imgUrl}" alt="">

        </section>

        <section class="col-7">
          <div class="row">

            <div class="col-4">
              House Name: ${this.name}
            </div>
            <div class="col-4">
              House Year: ${this.year}
            </div>
            <div class="col-4">
              House Price: ${this.price}
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              Bedrooms: ${this.bedrooms}
            </div>
            <div class="col-4">
              Bathrooms: ${this.bathrooms}
            </div>
            <div class="col-4">
              Sqr. Feet: ${this.sqft}
            </div>

            <div class="row">
              Description: ${this.description}
            </div>
          </div>

        </section>
      </div>
    </div>
    
    `

  }




}