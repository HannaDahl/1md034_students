///////////////////// FUNCTIONS & VARIABLES ///////////////////////

    /*
    function: menuItem
    description: Initializes burgers 
    name: name of burger
    ingr1 & ingr2: ingrediens #1 and #2
    kCal: amount of calories 
    allergy: ingredient
    image: path to image 
    */

/*
function menuItem(name, ingr1, ingr2, kCal, allergy, image){
  this.name = name;
  this.ingr1 = ingr1;
  this.ingr2 = ingr2;
  this.kCal = kCal;
  this.allergies = allergy;
  this.tag = image;
  //this.pathToImage; String = pathToImage
  this.image = '/img/' + image + '.jpg';
}
*/

    /*
    Chooses burgers to initialize
    */

/*
let Scary = new menuItem('The Scary One', 'Vegan Beef', 'Beans', '3 kCal', 'Nuts', 'Scary');
let French = new menuItem('The French One', 'Finest Meat', 'Camembert','300 kCal', 'Lactose','French');
let Trump = new menuItem('The Trump One', 'Probably Meat', 'E450, E251, E542', '3000 kCal', 'Cholesterol','Trump');
*/
    /*
    Prints out message to inform that burgers have been created to console.
    */

//console.log('menuItems have been created; next - menu');

    /*
    Creates menu consisting of the burgers above.
    */

//    let menu =  [Scary, French, Trump];

    /*
    function: makeAllergy
    description: assignes individual allergies of burgers to a list
    */
   
/*function makeAllergy(i){
	let allergi = [
  	Scary.allergies, French.allergies, Trump.allergies
  ];
  return allergi[i];
}
*/

    /*
    Prints out message to console notifying that allergies have been created.
    */
//console.log('allergies created');



    /*
    function: makeBurger
    description: adds all burgers to the page
    */
/*function makeBurger() {
  let i = 0;
  let tags = ['Scary', 'French', 'Trump'];

  for(burger of menu) {

  let listContainer = document.createElement('div');
  document.getElementById(tags[i]).appendChild(listContainer);

  //header
  let header = document.createElement('h1');
  header.innerHTML = burger.name;
  listContainer.appendChild(header);
  

  //image
  let img = document.createElement('img');
  img.setAttribute('src', burger.image);
  listContainer.appendChild(img);

  //create list
  list = document.createElement('ul');
  listContainer.appendChild(list);

  //ingr1
  listItem = document.createElement('li');
  listItem.innerHTML = burger.ingr1;
  list.appendChild(listItem);

  //ingr2
  listItem = document.createElement('li');
  listItem.innerHTML = burger.ingr2;
  list.appendChild(listItem);

  //kCal
  listItem = document.createElement('li');
  listItem.innerHTML = burger.kCal;
  list.appendChild(listItem);

  if(makeAllergy(i))
      {
        listItem = document.createElement('li');
      	listItem.innerHTML = makeAllergy(i);
	      list.appendChild(listItem);
       }

  ++i;
}
}

*/
  
///////////////////// INITIALIZING BURGERS ///////////////////////

    /*
    Calling makeBurger to initialize all the burgers.
    */
//makeBurger();

    /*
      Informs via console that the burgers are finished being created.
    */
//   console.log('finished initializing burgers');



/////////// BUTTON CLICKED /////////////

let myButton = document.getElementById('button');

console.log("testing");

// You can pass a defined function as above (no parentheses), or provide an anonymous function
myButton.onclick = function () {
    console.log("button clicked!");
    this.value = "🍔 Order has been sent!"
}
                      

