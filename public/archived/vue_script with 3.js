

// Handles burger orders
const box = new Vue({
  el: '#menu',
  data: {
    food: food,
    array: [],
    categories: "",
    test: ""
  },
  methods: {
    orderedAll: function () {
      this.test = "Trump, Scary, French"
      console.log("did da funtion")
    },
    bigOrder: function () {
      scary = "The Scary One"
      french = "The French One"
      trump = "The Trump One"
      air = "The Air Force One"
      done = "The Done"
      this.array = this.array.filter(name => name !== scary),
        this.array = this.array.filter(name => name !== french),
        this.array = this.array.filter(name => name !== trump),
        this.array = this.array.filter(name => name !== air),
        this.array = this.array.filter(name => name !== done)
    }
  }
})

// handles personal information
const app2 = new Vue({
  el: '#app2',
  data: {
    personalInfo1: "",
    personalInfo2: "",
    personalInfo3: "",
    personalInfo6: "",
    payments: ['BitCoin', 'Klarna', 'VISA / Mastercard', 'Paypal'],
    gender: "",
  },
})



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
      target: "T",
    },
  },
  methods: {
    getNext: function () {
      this.increment +1;
      return this.increment
    },
    displayOrder: function (event) {
      console.log("event:");
      console.log(event);
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      this.localOrder.details = {
        x: event.clientX - 10 - offset.x,
        y: event.clientY - 10 - offset.y,
      }
    }
  },
});

// handles the sending of information via submit button
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
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: vam.getNext(),
        details: vam.localOrder.details,
        orderItems: box.array,
        orderName1: app2.personalInfo1,
        orderName2: app2.personalInfo2,
        orderMail: app2.personalInfo3,
        orderPay: app2.personalInfo6,
        orderGender: app2.gender
        //    orderItems: ['Beans', 'Curry'],
      });
    }
  }
})


