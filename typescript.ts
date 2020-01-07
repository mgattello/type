// Typescript change JS, which is a dynamically typed language into that is static typed
// Helps you to detect error before the production phase

// List of type below:

// boolean
let isCool: boolean = true;

// number
let age: number = 20;

// string
let eyeColor: string = "brown";

let test: string = `I'm not old, I'm only ${age}`;

// Array first method
let pets: string[] = ['cat', 'dog', 'dog'];
let numbers: number[]= [12, 213, 4343, 54];

// Array second method
let pets2: Array<string> = ['lion', 'dragon'];

// Object lowercase
let wizard: object = {
    a: 'Jhon'
}

// null and undefined
let meh: undefined = undefined;
let nah: null = null;

// Tuple: it's an array with different types with an order
let basket: [string, number];
basket= ['basketball', 234];

// Enum
enum Size { Small = 1, Medium= 2, Large= 3};
let sizeName: number = Size.Small;

// Any - !!!!!!!!!!!!!! BE CAREFUL
// Useful when you need to understand how to convert your js code and you don't know yet how to handle an element
let whatever: any = 'why?';
whatever = basket;

// void - functions that don't return anything
let sing = (): void => {
    console.log('Test');
}

// never - test 2 things: a function never returns and a variable is never true or doesn't have an endpoint
let error = (): never => {
   throw error();
}

// you can create your own type
type RobotArmy2 = {
    count: number,
    type: string,
    magic: string
}

// Interface capital letter - allows you to create an object or a list of parameters like in the previews example
interface RobotArmy {
    count: number,
    type: string,
    magic?: string  // May or may not have a magic parameter
}

let fightRobotArmy = ( robots: RobotArmy ) => {
    console.log('Fight!');
}

fightRobotArmy({count: 2, type: 'dragon'});

let fightRobotArmy2 = ( robots: {count: number, type: string, magic: string} ) => {
    console.log('Fight!');
}

// Type Assertion allows you to overide any type
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy

dog.count;

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('Fight');
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
    console.log('Fight');
    return 5;
}

// Class
class Animal {
    public sing: string = 'lalalalla';
    constructor(sound: string) {
        this.sing = sound;
    }
    greet(){
        return `Hello ${this.sing}`;
    }
}
let lion = new Animal('RAAAAWR');

// Union: when you have more than 1 type
let confused: string | number | boolean = 'Hello';

// If you initialize a number, TS will know which type is
let x: number = 4;
// x = "string"; // error TS2322: Type '"string"' is not assignable to type 'number'.