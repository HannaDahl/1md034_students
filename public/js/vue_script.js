


const box = new Vue({
  el: '#menu',
  data: {
    food: food,
    // categories: "ordered",
    //arrays: []
    array: [],
    categories: "",
    test: ""
  },
  methods: {
    orderedAll: function () {
      this.test = "Trump, Scary, French"
      console.log("did da funtion")
    },
    independentOrder: function () {
      all = "The Scary One, The French One, The Trump One"
      this.array = this.array.filter(name => name !== all)
    },
    bigOrder: function () {
      scary = "The Scary One"
      french = "The French One"
      trump = "The Trump One"
      this.array = this.array.filter(name => name !== scary),
      this.array = this.array.filter(name => name !== french),
      this.array = this.array.filter(name => name !== trump)
    }
  }
})

var button = new Vue({
  el: '#button',
  data: {
    message: "✔ submit"

  },
  methods: {
    buttonpress: function (event) {
      this.message = "🍔 order has been sent!"
      console.log(this.message);
    }
  }
})

/*
const app = new Vue({
  el: '#app',
  data: {
    hi: "",
    isTrue: true,
    hello: "Hejsan"
  }
})*/

const app2 = new Vue({
  el: '#app2',
  data: {
    personalInfo1: "",
    personalInfo2: "",
    personalInfo3: "",
    personalInfo4: "",
    personalInfo5: "",
    personalInfo6: "",
    payments: ['BitCoin', 'Klarna', 'VISA / Mastercard', 'Paypal'],
    gender: ""
  }
})
/*
console.log(personalInfo1);
new Vue({
  el: 'info',
  data: {
    personalInfo1: "",
    personalInfo2: "",
    personalInfo3: "",
    personalInfo4: "",
    personalInfo5: "",
    personalInfo6: "",
    personalInfo7: "",
    personalInfo8: "",
    personalInfo9: "",
    personalInfo10: "",
    personalInfo11: "",
    personalInfo12: "",
    personalInfo: [personalInfo1,personalInfo2,personalInfo3,personalInfo4,personalInfo5]
  }
})

console.log(personalInfo1);*/

/*
var burger1 = new Vue({
  el: '#burger1',
  data: {
    items: [
      { contains: "Vegan Beef" },
      { contains: "Beans" },
      { contains: "3 kCal" },
      { contains: "Nuts" },
    ],
    name: "The Scary One",
    pics: {
      burgerpic: 'Scary.jpg',
  }
  },
});

var burger2 = new Vue({
  el: '#burger2',
  data: {
    items: [
      { contains: "Finest Meat" },
      { contains: "Camembert" },
      { contains: "300kCal" },
      { contains: "Lactose" },
    ],
    name: "The French One",
    pics: {
      burgerpic: 'French.jpg',
  }
}
});

var burger3 = new Vue({
  el: '#burger3',
  data: {
    items: [
      { contains: "Probably Meat" },
      { contains: "E450, E251, E542" },
      { contains: "3000 kCal" },
      { contains: "Cholesterol" },
    ],
    name: "The Trump One",
    pics: {
      burgerpic: 'Trump.jpg',
  }
  }
});
*/