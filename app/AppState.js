import { Car } from "./models/Car.js"

// NOTE: make sure to import your model to your Appstate
import { House } from "./models/House.js"


import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  cars = loadState('cars', [Car])


  houses = [

    new House({
      age: '1991',
      name: 'Western Cottage',
      bedrooms: 2,
      bathrooms: 2,
      size: 1100,
      price: 900000,
      description: "This house is expensive and small af",
      imgUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }),
    new House({
      age: '2023',
      name: 'The Richman',
      bedrooms: 10,
      bathrooms: 10,
      size: 10000,
      price: 7000000,
      description: "This house is even more expensive, but at least this time it's large LOL",
      imgUrl: "https://images.unsplash.com/photo-1521543387600-c745f8e83d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnNpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }),
    new House({
      age: '1920',
      name: 'Cardboard Hut',
      bedrooms: 1,
      bathrooms: 1,
      size: 10,
      price: 200000,
      description: "You won't find a better deal than this in northern California, this market is HOT",
      imgUrl: "https://images.unsplash.com/photo-1671557746001-1abd1e0d851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcmRib2FyZCUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    })
  ]



  // all of the initial cars created in lecture are commented out, just the functionality remains

  // cars = [

  //   new Car({
  //     make: "BMW",
  //     model: "335i",
  //     year: 1973,
  //     imgUrl: "https://bringatrailer.com/wp-content/uploads/2020/05/2011_bmw_335_15901301926d884f6124Photo-May-03-1-45-59-PM.jpg?fit=940%2C627",
  //     price: 50000,
  //     isNew: true,
  //     description: "Mint",
  //     color: "silver"
  //   }),
  //   new Car(
  //     {
  //       make: "Mazda",
  //       model: "Miata",
  //       year: 1997,
  //       imgUrl: "https://bringatrailer.com/wp-content/uploads/2022/06/1997_mazda_mx-5-miata_img_1612-5-84972.jpg?fit=940%2C626",
  //       price: 8000,
  //       isNew: false,
  //       description: "Perfect for cruisin' down the coast",
  //       color: "black"
  //     }
  //   ),
  //   new Car(
  //     {
  //       make: "Muscle",
  //       model: "Car",
  //       year: 2043,
  //       imgUrl: "https://media.tenor.com/EgMfjYtMD3oAAAAC/car-jump.gif",
  //       price: 900000,
  //       isNew: false,
  //       description: "Getcha one of these bad boys",
  //       color: "red"
  //     }
  //   )

  // ]



  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
