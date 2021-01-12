/*
  You own a small fruit store. You just received a shipment of 
  various fruits. Your job is to package these fruits up. Each
  fruit needs to be packaged along with it's price. Think about
  what kind of Data Structure you would use to package the fruit.

  When you are finished packaging the fruit then create a simple
  shopping cart for your customers to add the fruit to.
 */

 /* Fruit Shipment */
const apple = "🍎"
const banana = "🍌"
const grapes = "🍇"
const pineapple = "🍍"
const watermelon = "🍉"
const lemon = "🍋"
const pear = "🍐"
const cherries = "🍒"
const kiwi = "🥝"


/* Package The Fruit */
const fruits = {
  apple:{
    id: 1,
    image: apple,
    name: "apple",
    price: 0.99
  },
  banana:{
    id: 2,
    image: banana,
    name: "banana",
    price: 2.79
  },
  grapes:{
    id: 3,
    image: grapes,
    name: "grapes",
    price: 2.39
  },
  pineapple:{
    id: 4,
    image: pineapple,
    name: "pineapple",
    price: 2.99
  },
  watermelon:{
    id: 5,
    image: watermelon,
    name: "watermelon",
    price: 2.99
  },
  lemon:{
    id: 6,
    image: lemon,
    name: "lemon",
    price: 1.29
  },
  pear:{
    id: 7,
    image: pear,
    name: "pear",
    price: 0.89
  },
  cherries:{
    id: 8,
    image: cherries,
    name: "pear",
    price: 1.29
  },
  kiwi:{
    id: 9,
    image: kiwi,
    name: "kiwi",
    price: 0.99,
  }
}

/* Create Shopping Cart */
let cart = [];
const addItem = function (item) {
  cart.push(item)
};