// Factory function
function animal(noOfLegs, vegetarian) {
    return {
        noOfLegs: noOfLegs,
        vegetarian: vegetarian,
        eat: function() {
            return "eating...";
        },
        greet: function() {
            return `Hi, I have ${noOfLegs} legs.`;
        }
    };
}

let a1 = animal(4, true);
console.log(a1.eat()); // eating...
console.log(a1.greet()); // Hi, I have 4 legs.

// Constructor function
function AnimalCF(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
    this.eat = function() {
        return "eating...";
    };
    this.greet = function() {
        return `Hi, I have ${noOfLegs} legs.`;
    };
}

let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); // eating...
console.log(animalCF.greet()); // Hi, I have 4 legs.

// ES6 Class
class AnimalES6 {
    constructor(noOfLegs, vegetarian) {
        this.noOfLegs = noOfLegs;
        this.vegetarian = vegetarian;
    }

    eat() {
        return "eating...";
    }

    greet() {
        return `Hi, I have ${this.noOfLegs} legs.`;
    }

    describeHabitat(habitat, region) {
        return `I live in the ${habitat} of ${region}.`;
    }
}

let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.

let description = animalES6.describeHabitat.call(animalES6, 'forest', 'Amazon');
console.log(description); // I live in the forest of Amazon.

description = animalES6.describeHabitat.apply(animalES6, ['savannah', 'Africa']);
console.log(description); // I live in the savannah of Africa.
