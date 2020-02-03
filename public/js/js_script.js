function menuItem(){
  this.name = name;
  this.kCal = kCal;
  this.allergies = allergy;
  this.item = function() {
    return this.name + ', ' + this.kCal;
  this.item
  };
  this.image = '/public/img/' + this.name + '.jpg';
}

let Scary = new menuItem('The Scary One', '3 kCal', 'Nuts');
let French = new menuItem('The French One', '300 kCal', 'Lactose');
let Trump = new menuItem('The Trump One', '3000 kCal', 'Cholesterol');
let Swede = new menuItem('Air Force One', '299,792 kCal', '');
let Aussie = new menuItem('The Done', '42 kCal', 'Bacon (pig)');
console.log(Scary.item);
console.log(French.item);
console.log(Trump.item);
