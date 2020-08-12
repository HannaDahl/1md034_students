


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


// buttoin

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
    //personalInfo4: "",
    //personalInfo5: "",
    personalInfo6: "",
    payments: ['BitCoin', 'Klarna', 'VISA / Mastercard', 'Paypal'],
    gender: ""
  }
})

/*
new Vue({
  el: 'info',
  data: {
    personalInfo1: "",
    personalInfo2: "",
    personalInfo3: "",
    //personalInfo4: "",
    //personalInfo5: "",
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
*/




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


/////////////////////////////////

/* jslint es6:true, indent: 2 */
/* global Vue, io */
/* exported vm */
'use strict';
const socket = io();

/* eslint-disable-next-line no-unused-vars */
const vam = new Vue({
  el: '#dots',
  data: {
    orders: {},
    message: "✔ submit",
    increment: 0,
    localOrder: {
      details: { x: 0, y: 0 },
      target: "T"
    },
  },
  /*created: function () {
    /* When the page is loaded, get the current orders stored on the server.
     * (the server's code is in app.js) */
  /* console.log("initialized"),
     socket.on('initialize', function (data) {
       this.orders = data.orders;
     }.bind(this));*/

  /* Whenever an addOrder is emitted by a client (every open map.html is
   * a client), the server responds with a currentQueue message (this is
   * defined in app.js). The message's data payload is the entire updated
   * order object. Here we define what the client should do with it.
   * Spoiler: We replace the current local order object with the new one. */
  /*socket.on('currentQueue', function (data) {
    this.orders = data.orders;
  }.bind(this));
},*/
  methods: {
    getNext: function () {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      /* let lastOrder = Object.keys(this.orders).reduce(function (last, next) {
         return Math.max(last, next);
       }, 0);
       return lastOrder + 1;*/
      return this.increment + 1
    },
    //addOrder
    // },
    displayOrder: function (event) {
      console.log("event:");
      console.log(event);
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      this.localOrder.details = {
        x: event.clientX - 10 - offset.x,
        y: event.clientY - 10 - offset.y,
      }
       // orderItems = ['Beans', 'Curry'];
      //});
    }
  },
});


var button = new Vue({
  el: '#button',
  data: {
    message: "✔ submit"

  },
  methods: {
    buttonpress: function (event) {
      this.message = "🍔 order has been sent!"
      console.log(this.message);
    },
    addOrder: function (event) {
      this.message = "🍔 order has been sent!"
      console.log(this.message);
      console.log(vam.getNext);
      console.log(vam.localOrder.details);
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: vam.getNext(),
        details: vam.localOrder.details,
        orderItems: box.array,
        //    orderItems: ['Beans', 'Curry'],
      });
    }
  }
})
