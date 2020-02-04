/* <script src="https://vuejs.org/js/vue.js"></script>

<div id="myID">
    {{ ArbitraryVariableName }}
</div> */

const vm = new Vue({
    el: '#myID',
    data: {
      ArbitraryVariableName: 'Välj en burgare'
    }
  })