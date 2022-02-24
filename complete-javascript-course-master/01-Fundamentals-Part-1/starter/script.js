
/*let js = "amazing";

//console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Bob";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let newTest = 22;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

let country = "scotland";
let continent = "Europe";
let population = "5000000";

console.log(country);
console.log(continent);
console.log(population);
console.log(country, continent, population);




let age = 23; //floating point number
let foreName = "Nick"; //string
let fullAge = true; //boolean
let children; //undefined variable
//null also means empty value
//symbol unique and cant be changed
//BigInt large integers than the Number type can hold
//DONT have to define variable type in JS, automatically assigned
/*
multi line comments
*/

/*true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof foreName);

javascriptIsFun = "Yes!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);



//2 ways to declare variables
let age2 = 30;
age2 = 200;

const birthYear = 1991;
birthYear = 1990; // BAD cant change because const*/

/*
//OPERATORS - allows us to transform values or combine multiple values
const now = 2037
const ageNick = now - 1983;
const ageMaris = now - 1996;
console.log(ageNick, ageMaris);

console.log(ageNick * 2, ageNick / 2, 2 ** 3);
//2 ** 3 means 2 to the power of 3

console.log(ageNick + ageMaris);

const firstname = 'Nick';
const lastname = 'Van Nuil';
console.log(firstname + ' ' + lastname);

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x+ 10 = 25
x *= 4;// x =  x *  = 100
x++; // x + 1
x--; // x - 1
console.log(x);

// Comparison operators
console.log(ageNick > ageMaris); // >,<, >=, <=
console.log(ageMaris >= 18);

if (ageMaris >= 18) {
    console.log(ageMaris, ageNick);
}

const isFullAge = ageMaris >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;
const ageNick = now - 1983;
const ageMaris = now - 1996;
console.log(now - 1991 > now - 2018);

console.log();
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10, y = 10
console.log(x, y);

const averageAge = (ageNick + ageMaris) / 2;
console.log(ageNick, ageMaris);
console.log(averageAge);*/


/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;



console.log(markWeight, markHeight, johnWeight, johnHeight);
console.log('Mark BMI:' + markBMI, 'John BMI:' + johnBMI);
let markHigherBMI;
console.log('Marks BMI is higher is ' + (markBMI > johnBMI));



//STRINGS AND TEMPLATE PARTIALS
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2032;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job;
console.log(jonas);

const jonasNew = `Im $(firstName), a $(job)`;
console.log(jonasNew);

console.log(`Long setnence heresfaf ...`);

console.log(`String with \n\ multiple \n\ lines`);

console.log(`string
muleiple
lines`)




const age = 17;
const isOldEnough = age >= 18;


if (isOldEnough) {
    console.log('ayyyy');
}
else {
    const yearsLeft = 18 - age;
    console.log('too young by' + yearsLeft)
}

const birthYear = 1991;


console.log(`string with 
multiple
lines`) // no \n\ needed when using ` backticks
*/

const age = 17;
const isOldEnough = age >= 18;  //creates boolean value
if (isOldEnough) {
    console.log(`true true!`)
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young wait another ${yearsLeft} years`)
}// can add variables using the ${xxxxx} with backticks

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
// if () { } else { } these are CONTROL statements

// NEW CHALLENGE
const markWeight = 78;
const markHeight = 1.69;
const markBMI = markWeight / markHeight ** 2;
const johnWeight = 92;
const johnHeight = 1.95;
const johnBMI = johnWeight / johnHeight ** 2;

console.log(markWeight, markHeight, johnWeight, johnHeight);
console.log('Mark BMI:' + markBMI, 'John BMI:' + johnBMI);
console.log('Marks BMI is higher is ' + (markBMI > johnBMI));
console.log(`Marks bmi is ${markBMI} and Johns is ${johnBMI}`);

if (markBMI > johnBMI) {
    console.log(`marks is higher ${markBMI}`)
} else {
    console.log(`johns is higher ${johnBMI}`)
}


//CONVERTING NUMBERS TO STRINGS - TYPE COERCION
const inputYear = '1991'; //this stores the number as a strong, not an Integer
console.log(Number(inputYear)); //Number is standard function that converts the string to a number, otherwise 18 cant be added.
console.log(Number(inputYear) + 18);
console.log(Number('Nick'));  // this will produce NaN - not a number
console.log(String(1983)); //does the opposite, turns the number into a string.

console.log(`i am ` + 20 + ` years old`); // type coercion - JS converts the number into a string because of the +
console.log(`i am ` + `20` + ` years old`) //this is the same as above
console.log(`23` - `10` - 3);  //changed the strings to Integers because of the - sign
console.log(`23` * `2`);  //changed the strings to Integers because of the * sign

let n = `1` + 1; // = 11 because it converts it to strings
n = n - 1; // = 10
console.log(n);


// 5 falsy values: 0, "", undefined, null, NaN  -  not really used often
console.log(Boolean(0));  // false
console.log(Boolean(undefined));  // false
console.log(Boolean(""));  // false
console.log(Boolean("Jonas"));  // true
console.log(Boolean({}));  // true

const money = 10;
if (money) {        // same as saying money = true or false.  JS tried to convert it to a boolean.
    console.log('you have a bit money');
} else {
    console.log('probly get a job');
}
/*
//  == can be used in type coercion like '18' = 18
//  === strict equality operator  like 18 === 18
//  '18' == 18 is TRUE
//  '18' === 18 is FALSE
const nickAge = "18";
if (nickAge == 18) console.log(`loose true`);
if (nickAge === 18) { console.log(`strict true`) } else { console.log(`strict false`) };

//create variable, force it to convert from a string to a number, launch a prompt on screen asking for favorite number
const favorite = Number(prompt("whats your favorite number?"));
//print number
console.log(favorite);
//print variable type
console.log(typeof favorite);
//display results.  === meaning it's an actual integer, not a string like if it was ==
if (favorite === 23) {
    console.log(`great, 23 is an awesome number`);
} else if (favorite === 7) {
    console.log(`7 is ok too`);
} else {
    console.log("not 23 or 7");
}

if (favorite !== 23) { console.log("why not 23?") }
*/



// BASIC BOOLOEAN LOGIC
const ageage = 16;
const hasDL = true; // a
const hasVision = true;  // b

//&& is the AND operator
// ||  is the OR operator
// !variableName is the NOT operator
console.log(hasDL && hasVision);  //returns true because both are true 

const shouldDrive = hasDL && hasVision;  //  set this variable to the result of the 2 booleans being true
// if (shouldDrive) {
//     console.log("they can drive");
// } else {
//     console.log("someone else should should Drive")
// })
const isTired = false;
console.log(shouldDrive && isTired);

if (shouldDrive && !isTired) { // 
    console.log("they can drive");
} else {
    console.log("someone else should should Drive")
}



//average score using test data
//dolphins 96 108 89
// koalas 88 91 110
/*
let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];

console.log((dolphins[0] + dolphins[1] + dolphins[2]) / dolphins.length);
console.log((koalas[0] + koalas[1] + koalas[2]) / koalas.length);

if (koalas > dolphins) {
    console.log("koalas are winner");
} else if (koalas < dolphins) {
    console.log("dolphins are winner");
} else {
    console.log("draw");
}
*/

let dolphins1 = [97, 112, 101];
let koalas1 = [109, 95, 123];
let dolphinsAvg = (dolphins1[0] + dolphins1[1] + dolphins1[2]) / dolphins1.length;
let koalasAvg = (koalas1[0] + koalas1[1] + koalas1[2]) / koalas1.length;
let winner = Math.max(dolphinsAvg, koalasAvg);  //MATH.MAX just picks the highest score
console.log("koalas score " + koalasAvg + ". dolphins score " + dolphinsAvg);
if (winner >= 100) {
    if (koalasAvg > dolphinsAvg) {
        console.log("koalas winner");
    } else if (koalasAvg < dolphinsAvg) {
        console.log("dolphins winner");
    } else {
        console.log("no one wins")
    }
}


// SWITCH STATEMENTS
const day = `wed`;
switch (day) {
    case 'monday':
        console.log("its monday");
        break;
    case 'tuesday':
        console.log("its tuesday");
        break;
    case 'wednesday':
        console.log("its wednesday");
        break;
    default:
        console.log("its no days");
}



// STATEMENTS AND EXPRESSIONS
// 3+4 is an expression because it gives a value
// 1983 is also an expression because its a value
// true && false && !false is also an expression because it gives a final value
// anything ending in a ; is a statement
// 


if (23 > 10) {
    const mmm = '23 is bigger'
}
const me = `Nick`;
console.log(`im ${2000 - 1000} years old and name is ${me}`);



// CONDITIONAL OPERATOR
const agetest = 23;
agetest >= 18 ? console.log(`over 21`) : console.log(`underage`);
//if this     ?        do this         :        else this
//SAME AS SAYING,  MORE FREQ USED: 
const testAge = agetest >= 18 ? `over 21` : `underage`;
// VARIABLE      IF THIS     DO THIS     ELSE
console.log(testAge);


// let bill = prompt('how much is the bill?');
// bill >= 50 && bill <= 300 ? bill = bill * 1.15 : bill = bill * 1.20;
// console.log(bill);

//bill=bill + 15%
//else 50 - 300 tip is 20%

let much = 200;
let tip;
let total;
much >= 50 && much <= 300 ? tip = much * 0.15 : tip = much * 0.20;
much >= 50 && much <= 300 ? total = much * 1.15 : total = much * 1.20;
console.log(`bill is ${much} tip is $${tip}, total is ${total}`);



//bill=bill + 15%
//else 50 - 300 tip is 20%