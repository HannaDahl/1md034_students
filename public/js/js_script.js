

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
console.log(Scary);

function returnkCalAndName(product) {
  console.log(product);
  console.log(product.name);
  return {
    name: product.name,
    kCal: product.kCal
  }
}

let res = returnkCalAndName(Scary);
console.log('heheheh')
console.log(res);
/*let French = new menuItem('The French One', '300 kCal', 'Lactose');
let Trump = new menuItem('The Trump One', '3000 kCal', 'Cholesterol');
let Swede = new menuItem('Air Force One', '299,792 kCal', '');
let Aussie = new menuItem('The Done', '42 kCal', 'Bacon (pig)');*/

console.log(Scary.item);
console.log(French.item);
console.log(Trump.item);
console.log(Swede.item);
console.log(Aussie.item);


// To get an element with a specific ID, use getElementById()
let el = document.getElementById('anID');

// To get a NodeList of all elements of a specific class, use getElementsByClassName()
let els = document.getElementsByClassName('aClassName');

// To get a NodeList of all elements with a specific name, use getElementsByName()
let elss = document.getElementsByName('aName');

// To get a NodeList of all elements of a certain type, use getElementsByTagName()
let elsss = document.getElementsByTagName('p'); // Returns all paragraph elements in the document


document.getElementById("myID").innerHTML = "Välj en burgare";
