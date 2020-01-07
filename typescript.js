// Typescript change JS, which is a dynamically typed language into that is static typed
// Helps you to detect error before the production phase
// List of type below:
// boolean
var isCool = true;
// number
var age = 20;
// string
var eyeColor = "brown";
var test = "I'm not old, I'm only " + age;
// Array first method
var pets = ['cat', 'dog', 'dog'];
var numbers = [12, 213, 4343, 54];
// Array second method
var pets2 = ['lion', 'dragon'];
// Object lowercase
var wizard = {
    a: 'Jhon'
};
// null and undefined
var meh = undefined;
var nah = null;
// Tuple: it's an array with different types with an order
var basket;
basket = ['basketball', 234];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size.Small;
// Any - !!!!!!!!!!!!!! BE CAREFUL
// Useful when you need to understand how to convert your js code and you don't know yet how to handle an element
var whatever = 'why?';
whatever = basket;
// void - functions that don't return anything
var sing = function () {
    console.log('Test');
};
// never - test 2 things: a function never returns and a variable is never true or doesn't have an endpoint
var error = function () {
    throw error();
};
var fightRobotArmy = function (robots) {
    console.log('Fight!');
};
fightRobotArmy({ count: 2, type: 'dragon' });
var fightRobotArmy2 = function (robots) {
    console.log('Fight!');
};
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log('Fight');
};
var fightRobotArmy4 = function (robots) {
    console.log('Fight');
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalalla';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var Car = /** @class */ (function () {
    function Car(modello) {
        this.model = 'Macchina';
        this.model = modello;
    }
    Car.prototype.greet = function () {
        return console.log(this.model);
    };
    return Car;
}());
var Ferrari = new Car('enzo');
var lion = new Animal('RAAAAWR');
console.log(Ferrari.model);
// Union: when you have more than 1 type
var confused = 'Hello';
// If you initialize a number TS will know what type is
var x = 4;
// x = "string"; // error TS2322: Type '"string"' is not assignable to type 'number'.
