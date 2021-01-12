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
    image:apple,
    price:"$0.99"
  },
  banana:{
    image:banana,
    price:"$2.79"
  },
  grapes:{
    image:grapes,
    price:"$2.39"
  },
  pineapple:{
    image:pineapple,
    price:"$2.99"
  },
  watermelon:{
    image:watermelon,
    price:"$2.99"
  },
  lemon:{
    image:lemon,
    price:"$1.29"
  },
  pear:{
    image:pear,
    price:"$0.89"
  },
  cherries:{
    image:cherries,
    price:"$1.29"
  },
  kiwi:{
    image:kiwi,
    price:"$0.99"
  }
}

/* Create Shopping Cart */
let cart = [];
const addItem = function (item) {
  cart.push(item)
};