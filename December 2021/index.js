
//comment here for the console
console.log("Hello world");

let name1 = "Nick";
console.log(name1);

let firstName = 'nicolaas';
let lastName = 'test';
console.log(firstName, lastName);

// const
let irate = 0.3;
irate = 1;
console.log(irate);

let name2 = "Nick";
let age = '30'
let isApproved = false;
let newName = undefined;
let selectedColor = 'red';
newName = "Ava";

// OBJECTS - a list of PROPERTIES like a person, name age height etc
//normally represent a thing like a car, person, book, character
let person = {
    name: 'NickObject',
    age: 40
} // ;

//Dot notation
person.name = 'John;'

//Bracket notation
let selection = 'name';
person[selection] = 'Mary';
console.log(person);


// ARRAYS - data store
//normally represent 
let selectedColors = ['red', 'blue']; //[] is array literal
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);


// FUNCTIONS - set of statements that performs a task or calculates and returns a value
// performing a task
function greet(name, lastName) {
    console.log('Hello' + name + ' ' + lastName);
}
greet('John', 'Smith');
greet('Mary');

// calculating a value
function square(number) {
    return number * number;
}

let number = square(5);
console.log(number);

//CAN ALSO BE WRITTEN AS:
console.log(square(5));

