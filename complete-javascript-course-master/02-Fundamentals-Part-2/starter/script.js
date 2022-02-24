'use strict';  // start sctrict mode - forces you to write secure code

//below purposely making a mistake to show Error message with strict mode. no strict wouldnt flag the bug.
/*let hasLicense = false;
const passTest = true;
if (passTest) hasLicensse = true;
if (hasLicense) console.log("i can drive"

//  strict mode stops you being about to use reserved words as variable names
const interface = `Audio`;
const private = 543;
const if = 23;)*/

// FUNCTIONS
// functions are reuseable code, holds multi lines of code like a variable holds a value



// function logger() {         // declare function
//     console.log(`test`);    // print test
// }
// logger();                   //call function to print test


// function fruitP(apples, oranges) { //parameters are like variables JUST for this function
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// // 5 apples, 0 oranges
// const appleJuice = fruitP(5, 0);
// console.log(appleJuice);    //same result WITH variable (above0)
// console.log(fruitP(2, 4));  //same result WITHOUT variable - not used as much

// Number(`23`);


// functional declaration  ---  declarations can be called anywhere before they're defined.
// function calcAge1(birthYeah) {
//     const age = 2037 - birthYeah;
//     return age;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// // functional expression - remember expressions give values  ---  these cant be called before declared
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);


//  Arrow function  ---  3 examples
//  with a one line function
// const calcAge3 = birthYeah => 2037 - birthYeah;  // great for writing 1 line functions
// const age3 = calcAge3(100);
// console.log(age3);

//  where it needs multi lines
// const yearsRetire = birthYeah => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsRetire(1991));

//  multiple parameteres to return
// const yearsRetire2 = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsRetire2(1991, "Nick"));


//function calling another function
// function nestChild(yyy) {
//     yyy = yyy - 10;
//     return yyy;
// }
// function nestParent() {
//     console.log(nestChild(100));
// }
// nestParent();


// const var1 = prompt(`number of apples?`); //ask how many apples
// const var2 = prompt(`number of oranges?`); //ask how many oranges
// function cutFruit(fruit) {
//     return fruit * 4;   // multiply the given number above by 4 ONLY when function is called
// }
// function fruitP(apples, oranges) { //parameters are like variables JUST for this function
//     const applePieces = cutFruit(apples);
//     const orangePieces = cutFruit(oranges);
//     const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }
// console.log(fruitP(var1, var2)); //print the results of fruitP function with the values given by user




const calcAgeZ = function (birthYeah) {
    return 2037 - birthYeah;
}
const yearsUntil = function (birthYeah, firstName) {
    const age = calcAgeZ(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntil(1991, "Nick"));
console.log(yearsUntil(1973, "Ava"));



// 3 times then average calculated
// team only wins if double score of last team

// koas 65 54 49
// dolphins   44 23 71

// let koaScore = [65, 54, 49];
// let dolphScore = [44, 23, 71];

// const koaAvg = (koaScore[0] + koaScore[1] + koaScore[2]) / 3;
// const dolphAvg = (dolphScore[0] + dolphScore[1] + dolphScore[2]) / 3;
// console.log(koaAvg, dolphAvg)


// function avgScore(sc1, sc2, sc3) {
//     const score = (sc1 + sc2 + sc3) / 3;
//     return score;
// }
// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
// const scoreDol = calcAverage(65, 54, 49);
// const scoreKoa = calcAverage(44, 23, 71);
// const calcWinner = function (scoreDol, scoreKoa) {
//     let winner = "";
//     if (scoreDol <= 2 * scoreKoa) {
//         winner = "Koalas win"
//     } else if (scoreDol >= 2 * scoreKoa) {
//         winner = "Dolphins win"
//     } else {
//         winner = "Draw"
//     }
//     return winner;
// }
// console.log(calcWinner(scoreDol, scoreKoa));


//  ARRAYS
const f1 = `mike`;
const f2 = `steve`;
const f3 = `peter`;

const friendsArray = new Array(1991, 1998, 2004, 2020); //same thing as below
const friends = [`mike`, `steve`, `peter`]  //deliteral syntax
console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length); //counts objects in the array

friends[2] = 'Jay'; // replace peter with jay
console.log(friends); // display arrow

const firstName = `Nick`
const nick = [firstName, `van`, 2037 - 1991, `dev`, friends];
console.log(nick);

//Exercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [1990, 1994, 1998, 2000, 2002];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1])];
console.log(ages);

const myFriends = [`nick`, `nack`, `paddy`];



///////  ADD elements
/////// PUSH
const newLength = myFriends.push(`wack`);  // ADDS to the END
console.log(myFriends);
console.log(newLength);

//UNSHIFT
myFriends.unshift(`first`);        // ADD element to array to FIRST
console.log(myFriends);


/////// REMOVE elements
/////// POP
myFriends.pop();                  // pop removes the last in array
const popped = myFriends.pop();   //  POP removes LAST element
console.log(popped);              // which friend was removed from last element?
console.log(myFriends);           // display friends with one taken off from pop

/////// SHIFT
myFriends.shift();                // SHIFT removes the FIRST element

/////// QUERY AN ARRAY
console.log(myFriends.indexOf(`nick`));  // INDEX OF --- what position is it in?
console.log(myFriends.indexOf(`nack`));  // INDEX OF --- what position is it in?
console.log(myFriends.includes(`nick`)); // DOES IT INCLUDE? (it does)
console.log(myFriends.includes(`wack`)); // DOES IT INCLUDE? (it doesn't)
if (myFriends.includes(`nick`)) {
    console.log(`you have a friend called Nick`)
}




//const bill = [prompt("Bill 1?"), prompt("Bill 2?"), prompt("Bill 3?")];
//bit JS here to turn the string above into integers from strings
const bill = [10, 100, 1000];
function justthetip(bill) {
    if (bill >= 50 && bill <= 300) {
        bill = bill * 0.15
    } else { bill = bill * 0.2; }
    return bill;
}
function calcTotal(bill, tip) {
    return bill + tip;
}
const tip = [justthetip(bill[0]), justthetip(bill[1]), justthetip(bill[2])];
const totalBill = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(bill);
console.log(tip);
console.log(totalBill);




//////// OBJECTS  
// 2 ways to write it below:
const nickObject1 = [
    'Nick',
    'Van Nuil',
    2027 - 1991,
    'Tampa',
    ['ava', 'cole', 'isla']
]
// BEST way to create it...
const nickObject2 = {
    firstName: `nick`,
    lastName: `van nuil`,
    age: 2021 - 1991,
    from: `tampa`,
    kids: ['ava', 'cole', 'isla']
}

//////// DOT vs. NOTATION
// how to retreive and push data to and from objects

console.log(nickObject2);
console.log(nickObject2.lastName); //pull lastName from nickObject2
console.log(nickObject2['lastName']) // does same thing
const nameKey = `Name`; // load variable with the word "Name"
console.log(nickObject2[`first` + nameKey]); //look for something called 'first'+'Name"
console.log(nickObject2[`last` + nameKey]);  //look for something called 'last'+'Name"
// console.log(nickObject2.`last` + nameKey); // DOES NOT WORK in dot notation

const interestedIn = prompt(`what do you want to know about nick? firstName, lastName, age, from, kids?`);

if (nickObject2[interestedIn]) {                // if there's something stored there (TRUE)
    console.log(nickObject2[interestedIn]);     // print it
} else {
    console.log(`wrong request`);               // else error message
}

nickObject2.state = `florida`;      // add to the object in dot notation
nickObject2[`shoes`] = `puma`;      // add to the object in bracket notation
console.log(nickObject2);           // print it all

//////// CHALLENGE
// write nick has 3 kids, and his first kid is Ava
//2 different ways to write the same thing: 
console.log(nickObject2.firstName + ` has ` + nickObject2.kids.length + ` kids and his first kid is ` + nickObject2.kids[0] + `.`);
console.log(`${nickObject2.firstName} has ${nickObject2.kids.length} kids and his first kid is ${nickObject2.kids[0]}. `);

const nObj = {
    first: `nick`,
    last: `van nuil`,
    dob: 1983,
    from: `tampa`,
    kids: ['ava', 'cole', 'isla'],
    house: true,
    // FUNCTION 1
    // calcAge: function (dob) {
    //     return 2021 - dob;
    // }
    // FUNCTION 2
    // calcAge: function () {
    //     //console.log(this);  //just display the whole array in console to check THIS command
    //     return 2021 - this.dob;
    // }
    // FUNCTION 3
    calcAge: function () {
        this.age = 2022 - this.dob;
        return this.age;
    }
};
nObj.calcAge();        // this runs function inside the object/array.  doesn't affect the DOB.
console.log(nObj.age);        // this asks for 'age' which we created the function for
//nick is an age year old from FROM and he has a/no house
console.log(`${nObj.first} is a ${nObj.age} year old from ${nObj.from} and has ${nObj.house ? `a` : `no`} house.`)




// study what a function vs expression is again  and METHODS



//mass / height * 2

const mark = {
    first: `mark`,
    mass: `78`,
    height: `1.69`,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    first: `john`,
    mass: `92`,
    height: `1.95`,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
john.calcBMI();
mark.calcBMI();
console.log(`Mark's BMI is ${mark.bmi}, and is ${mark.bmi > john.bmi ? `greater` : `less`} than John's BMI of ${john.bmi}`);
//alternative
// const people = {
//     mark: [`mark`, `78`, `1.69`],
//     john: [`john`, `92`, `1.95`]
// }



console.log(`////////// LOOPS ////////////`)
//for loop keeps running while condition is true

for (let rep = 1; rep <= 10; rep++) {   //while rep <= 10, add 1 to rep and print test sentence.
    console.log(`test sentence ${rep}`);
}






// const person1 = {
//     first: `nick`,
//     last: `van nuil`,
//     dob: 1983,
//     from: `tampa`,
//     kids: ['ava', 'cole', 'isla'],
//     house: true
// }
const person = [
    'Nick',
    'Van Nuil',
    2027 - 1991,
    'Tampa',
    ['ava', 'cole', 'isla'],
    true
]
for (let i = 0; i < 5; i++) {                   // while i < 5, add 1 to it () count to 5 and do this each time
    console.log(person[i],);                    //print it the "i" amount of properties (5 of them)
}
for (let i = 0; i < person.length; i++) {       //while i < the size of the array (6 items just now), count to that number and do this:
    console.log(person[i], typeof person[i]);   // print it the length of the array times, print the type of value stored in the i-th (6th) position 
}


console.log(`/////////////////`);


const types = [];                               // create empty array
for (let i = 0; i < person.length; i++) {       // while i < the size of the array, count to that number and do this
    types[i] = typeof person[i];                // push the types of variables into the new array
    types.push(typeof person[i]);                 // another way to write the same thing
}
console.log(types);                             // print array - ['string', 'string', 'number', 'string', 'object', 'boolean']


const born = [1991, 2007, 1969, 2020];
const agesArray = [];
for (let i = 0; i < born.length; i++) {
    //agesArray[i] = 2020 - born[i];            // does same as below
    agesArray.push(2020 - born[i]);
}
console.log(agesArray);





console.log(`////////// CONTINUE AND BREAK ////////////`)

console.log(`!!!only strings below!!!`);
const pObj = [
    'Nick',
    'Van Nuil',
    2027 - 1991,
    'Tampa',
    ['ava', 'cole', 'isla'],
    true
]
for (let i = 0; i < pObj.length; i++) {       // set up loop to go thru array
    if (typeof pObj[i] !== `string`) continue;     //  ONLY log strings to console
    console.log(pObj[i]);                       //print it
}

console.log(`!!!break with number!!!`);
for (let i = 0; i < pObj.length; i++) {             // set up loop to go thru array
    if (typeof pObj[i] == `number`) break;          //  STOP LOOP when it finds a 'number' type
    console.log(pObj[i]);                           // print it
}



console.log(`//////////BACKWARDS DISPLAY////////////`)
const newNick = [
    'Nick',
    'Van Nuil',
    2027 - 1991,
    'Tampa',
    ['ava', 'cole', 'isla'],
    true
]
for (let i = newNick.length - 1; i >= 0; i--) {
    console.log(newNick[i])
}


console.log(`////////// LOOP INSIDE LOOP ////////////`);

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- starting exercise ${exercise}`);

    for (let rep = 1; rep < 4; rep++) {
        console.log(` ${exercise}: lifting weights rep ${rep}`);
    }
}



console.log(`////////// WHILE LOOP ////////////`);
let rep = 1;
while (rep <= 10) {
    console.log(`lifting weights ${rep}`);
    rep++;
}



console.log(`////////// DICE ROLL WHILE LOOP ////////////`);
let dice = Math.trunc(Math.random() * 6) + 1;  // create int with random number, max six 
while (dice !== 6) {                            // while it doesnt equal 6
    console.log(`Dice: ${dice}`);               // print dice - the value
    dice = Math.trunc(Math.random() * 6) + 1;   // reset the variable with a new value
    if (dice === 6) console.log(`loop is about to end..`);  //if it equals 6, end the loop
}


console.log(`////////// CHALLENGE ////////////`);




const calcTip = function (billy) {
    return billy >= 50 && billy <= 300 ? billy * 0.15 : billy * 0.2
}
const billy = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tis = [];
let totaly = [];

for (let i = 0; i < billy.length; i++) {
    const ti = calcTip(billy[i]);
    tis.push(ti);
    totaly.push(ti + billy[i]);
}
console.log(tis, totaly);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum+ arr[i]  // same thing
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length
}
console.log(calcAverage(totaly));


