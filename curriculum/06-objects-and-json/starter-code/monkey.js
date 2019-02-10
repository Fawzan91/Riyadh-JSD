const Monkey = function (name, species, foodsEaten) {
    this.name = name;
    this.species = species;
    this.foodsEaten = [foodsEaten];
}
Monkey.prototype.eatSomthing = function (food) {
    this.foodsEaten.push(food)
}
Monkey.prototype.introduce = function () {
    console.log(this.name + ' is a monkey which is from the species of ' + this.species)
}
let jack = new Monkey('jack', 'mammals', 'banana');
console.log(jack.foodsEaten)
jack.eatSomthing('oranges')
console.log(jack.foodsEaten)
jack.introduce();

let monkey2 = new Monkey('Saeed', 'mammals', 'strowberries')
monkey2.introduce()