

console.log('here');

function menuItem(name, kCal, allergy, pathToImage){
  this.name = name;
  this.kCal = kCal;
  this.allergies = allergy;
  this.pathToImage; String = pathToImage
//  this.image = '/public/img/' + this.name + '.jpg';
//  this.item = function() {
//    return this.name + ' ' + this.kCal /*+ ' ' + this.allergies;*/  };
}

let Scary = new menuItem('The Scary One', '3 kCal', 'Nuts', 'hejtppat');
let French = new menuItem('The French One', '300 kCal', 'Lactose');
let Trump = new menuItem('The Trump One', '3000 kCal', 'Cholesterol');
let Air = new menuItem('Air Force One', '299,792 kCal', '0');
let Done = new menuItem('The Done', '42 kCal', '0');
console.log(Scary);

function returnkCalAndName(product) {
  console.log(product);
  console.log(product.name);
  return {
    name: product.name,
    kCal: product.kCal
  }
}

console.log('cal and name returned:')
let res1 = returnkCalAndName(Scary);
let res2 = returnkCalAndName(Trump);
let res3 = returnkCalAndName(Air);
let res4 = returnkCalAndName(Done);
console.log(res1, res2, res2, res3, res4);



console.log(Scary.item);
console.log(French.item);
console.log(Trump.item);
console.log(Air.item);
console.log(Done.item);

/*const vm = new Vue({
  //Here comes the optional elements of the Vue object
})

// Binding vue instance to object
const vm = new Vue({
  el: '#myID'
  }
)*/

document.getElementById("myID").innerHTML = "Välj en burgare";

/*
// To get an element with a specific ID, use getElementById()
let el = document.getElementById('anID');

// To get a NodeList of all elements of a specific class, use getElementsByClassName()
let els = document.getElementsByClassName('aClassName');

// To get a NodeList of all elements with a specific name, use getElementsByName()
let elss = document.getElementsByName('aName');

// To get a NodeList of all elements of a certain type, use getElementsByTagName()
let elsss = document.getElementsByTagName('p'); // Returns all paragraph elements in the document


document.getElementById("myID").innerHTML = "Välj en burgare";*/

/*
function makeListNoLoops() {
    
  let res1 = Scary.name;
  let res2 = French.name;
  let res3 = Trump.name;
  let res4 = Air.name;
  let res5 = Done.name;

  let burgerList = [
      res1, res2, res3, res4, res5
  ],

listContainer = document.createElement('div'),
listElement = document.createElement('ul'),
listItem;

 document.getElementsByTagName('body')[0].appendChild(listContainer);

listContainer.appendChild(listElement);

 listItem = document.createElement('li');
 listItem.innerHTML = burgerList[0];
 listElement.appendChild(listItem);
 
 listItem = document.createElement('li');
 listItem.innerHTML = burgerList[1];
 listElement.appendChild(listItem);
 
 listItem = document.createElement('li');
 listItem.innerHTML = burgerList[2];
 listElement.appendChild(listItem);
 
 listItem = document.createElement('li');
 listItem.innerHTML = burgerList[3];
 listElement.appendChild(listItem);
 
 listItem = document.createElement('li');
 listItem.innerHTML = burgerList[4];
 listElement.appendChild(listItem);
   
}

makeListNoLoops(); */

function makeListPre() {
    
  let res1 = Scary.name;
  let res2 = French.name;
  let res3 = Trump.name;
  let res4 = Air.name;
  let res5 = Done.name;

  let menu = [
      res1, res2, res3, res4, res5
  ],

  // Make a container element for the list
  listContainer = document.createElement('div'),
  // Make the list
  listElement = document.createElement('ul'),
  // Loop that goes through the items in order
  numberOfListItems = burgerList.length,
  listItem,
  i;

  // Add it to webpage
  document.getElementsByTagName('body')[0].appendChild(listContainer);
  listContainer.appendChild(listElement);

  for (i = 0; i < numberOfListItems; ++i) {
     
    //creates list
      listItem = document.createElement('li');
      // takes ith element of burgerList to append ....
      listItem.innerHTML = burgerList[i];
      // ... here
      listElement.appendChild(listItem);
      
  }
}

makeListPre();
*/
////////// With conditional: ////////////////////


function makeAllergy(i){
  let res1 = Scary;
  let res2 = French;
  let res3 = Trump;
  let res4 = Air;
  let res5 = Done;

	let allergi = [
  	res1.allergies, res2.allergies, res3.allergies, res4.allergies, res5.allergies
  ];
  let allergy = allergi[i],
  
		listContainer = document.createElement('div'),
		listElement = document.createElement('ul'),
		listItem;

 		document.getElementsByTagName('body')[0].appendChild(listContainer);

		listContainer.appendChild(listElement);
			listItem = document.createElement('li');
 			listItem.innerHTML = allergy;
 			listElement.appendChild(listItem);
  
}

makeAllergy(2);

function makeAllergy2(i){
  let res1 = Scary;
  let res2 = French;
  let res3 = Trump;
  let res4 = Air;
  let res5 = Done;

	let allergi = [
  	res1.allergies, res2.allergies, res3.allergies, res4.allergies, res5.allergies
  ];
  
  return allergi[i];
}

function makeList() {
    
  let res1 = Scary;
  let res2 = French;
  let res3 = Trump;
  let res4 = Air;
  let res5 = Done;

/*let listAllergies = [
      res1.allergies, res2.allergies, res3.allergies, res4.alleriges, res5.allergies
  ];*/
  
  let menu = [
      res1.name, res2.name, res3.name, res4.name, res5.name
  ],

  // Make a container element for the list
  listContainer = document.createElement('div'),
  // Make the list
  listElement = document.createElement('ul'),
  // Loop that goes through the items in order
  numberOfListItems = menu.length,
  listItem,
  //listAllergy,
  i;

  // Add it to webpage
  document.getElementsByTagName('body')[0].appendChild(listContainer);
  listContainer.appendChild(listElement);

  for (i = 0; i < numberOfListItems; ++i) {
 
    //creates list
      listItem = document.createElement('li');
      // takes ith element of burgerList to append ....
      listItem.innerHTML = menu[i];
      // ... here
      listElement.appendChild(listItem);
      
      listItem = document.createElement('li');
      
      if(makeAllergy2(i))
      {
      	listItem.innerHTML = makeAllergy2(i);
	      listElement.appendChild(listItem);
       }
      
  }
}

makeList();