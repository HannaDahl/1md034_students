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