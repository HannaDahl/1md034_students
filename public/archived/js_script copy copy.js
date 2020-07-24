////////// Initialize burgers //////////////

function menuItem(name, ingr1, ingr2, kCal, allergy, image){
  this.name = name;
  this.ingr1 = ingr1;
  this.ingr2 = ingr2;
  this.kCal = kCal;
  this.allergies = allergy;
  //this.pathToImage; String = pathToImage
  this.image = '/img/' + image + '.jpg';
}
console.log('menuItem construct');

let Scary = new menuItem('The Scary One', 'Vegan Beef', 'Beans', '3 kCal', 'Nuts', 'Scary');
let French = new menuItem('The French One', 'Finest Meat', 'Camembert','300 kCal', 'Lactose','Scary');
let Trump = new menuItem('The Trump One', 'Probably Meat', 'E450, E251, E542', '3000 kCal', 'Cholesterol','Scary');
let Air = new menuItem('Air Force One', 'Beef', 'Bread', '299,792 kCal', '','Scary');
let Done = new menuItem('The Done', 'Charcoal', 'Ketchup','42 kCal', '','Scary');
console.log('menuItem create burgers');
let burger =  [Scary, French, Trump, Air, Done];


////////// Functions //////////////

console.log('allergies');
function makeAllergy(i){

	let allergi = [
  	res1.allergies, res2.allergies, res3.allergies, res4.allergies, res5.allergies
  ];

  console.log('allergies');
  return allergi[i];
}

/*
function makeList() {

  let menu = [
    res1.name, res2.name, res3.name, res4.name, res5.name
  ];

  listContainer = document.createElement('div'),
  listElement = document.createElement('ul'),
  numberOfListItems = menu.length,
  listItem,
  i;

  document.getElementsByTagName('body')[0].appendChild(listContainer);
  listContainer.appendChild(listElement);

  for (i = 0; i < numberOfListItems; ++i) {

      listItem = document.createElement('li');
      listItem.innerHTML = menu[i];
      listElement.appendChild(listItem);
      listItem = document.createElement('li');
      if(makeAllergy(i))
      {
      	listItem.innerHTML = makeAllergy(i);
	      listElement.appendChild(listItem);
       }
  }
}*/

function makeBurger() {
  console.log('makeBurgers');
  //for(burger of menu) {

  let listContainer = document.createElement('div');
  document.getElementById('Scary').appendChild(listContainer);

  let header = document.createElement('h1');
  header.innerHTML = burger[0].name;
  listContainer.appendChild(header);

  let img = document.createElement('img');
  img.setAttribute('src', burger[0].image);
  listContainer.appendChild(img);

  list = document.createElement('ul');
  listContainer.appendChild(list);

  listItem = document.createElement('li');
  listItem.innerHTML = burger[0].ingr1;
  list.appendChild(listItem);
}
  
/*
  console.log('aenters loop');
  for (i = 0; i < numberOfListItems; ++i) {

      listItem = document.createElement('li');
      listItem.innerHTML = burger[i];
      listElement.appendChild(listItem);
      listItem = document.createElement('li');
      console.log("SKAPA BURGARE");

      if(makeAllergy(1))
      {
      	listItem.innerHTML = makeAllergy(1);
	      listElement.appendChild(listItem);
       }
  }
}
*/

////////////////////////

console.log('document');


/////////////////////////////////////////

makeBurger();