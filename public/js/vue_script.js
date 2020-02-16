<script src="https://vuejs.org/js/vue.js"></script>

<div id="myID">
    {{ ArbitraryVariableName}}
</div> */

const vm = new Vue({
    el: '#myID',
    data: {
      ArbitraryVariableName: 'Välj en burgare'
    }
  })

/*
<script src="https://vuejs.org/js/vue.js"></script>


<div >

  
  <ul id="list">
  <li v-for="value in object">
  {{ value }}
  </li>
  </ul>
</div>

*/
  
var lists = new Vue({
  el: '#list',
  data: {
  object: [
   'The Scary One',
   'The French One',
   'The Trump One',
   'Air Force One',
   'The Done'
   ]
  }
  })

  // -----------------------------

  /* JS FIDDLE js
  const vm = new Vue({
    el: '#myID',
    data: {
      xyz: 'Välj en burgare' + new Date()
    }
  })

  JS FIDDLE HTML 

  <script src="https://vuejs.org/js/vue.js"></script>

<!--<div id="myID">
    {{ Burger }}
</div>-->

<!--<div v-bind:title="arbitraryVariableName" id="myID">-->

<div id="myID">
  <input v-model="xyz">
  <h1>{{xyz}}</h1>
</div>

  */

  ////////////// WITH CONDITIONAL AND LOOP ////

  // HTML

  /*

  <script src="https://vuejs.org/js/vue.js"></script>

<div id="list">
<ul>
  
  
   <li  v-for="burger in burgers" >
   {{burger.text}} 
   <p v-if="burger.id > 0">
   {{burger.allergy}}
   </p>
   </li>
</ul>
</div>

*/

///// JS / VUE ////

/*



var lists = new Vue({
  el: '#list',
  data: {
  burgers: [
  
  	 { text: 'The Scary One', allergy: 'nuts', id: 1},
     { text: 'The French One', allergy: 'lactose', id: 1},
   	 { text: 'The Trump One', allergy: 'cholesterol', id: 1 },
  	 { text: 'Air Force One', allergy: '', id: 0},
     { text: 'The Done', allergy: '', id: 0}
   ]
  }
  })
  
  */