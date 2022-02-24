let fullName = 'nick';
fullName = 8;

console.log(fullName);

let test1 = 100 - 100;
console.log(test1);

test1++;
if (test1 > 0) {
    test1++;
}
console.log(test1);

var remainder
remainder = 11 % 3;
console.log(remainder);

/*BELOW BOTH MEAN THE SAME THING
    a = a -6;
    a -= 6;
*/

let myStr = '<a href="test.com">xxx</a>'
console.log(myStr);

myStr = 'first\n\tsecnd\nthird';
console.log(myStr);

let ourStr1 = "I come first." + "i come second";
let myStr1 = "I come first." + " " + "i come second";
console.log(ourStr1);
console.log(myStr1);

let newStr = "i come first1. ";
newStr += "i come second1.";
console.log(newStr);

let myName = 'Nick';
let mynewstr = "my name is " + myName + " and im good!";
console.log(mynewstr);

let together = '<strong>' + myName + '</strong>' + ' ' + mynewstr;
console.log(together);

let togetherLength = together.length;
console.log(togetherLength);

let firstLet;
let firstNew = "Isla";
firstLet = firstNew[0];
console.log(firstLet); // shows first letter of the first name

let mystoo = "test new";



let example10 = "Isla";
let secondLet = example10[1];
console.log(secondLet);

let thirdLet = example10[2];
console.log(thirdLet);

let lastLet = example10[example10.length - 1];
console.log(lastLet);

let secLastLet = example10[example10.length - 2];
console.log(secLastLet);



//functions
function wordBlanks(mynoun, myadj, myverb, myadv) {
    let result = "";
    result += "the " + myadj + " " + mynoun + " " + myverb + " " + "to the store " + myadv + ".";
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));


/////////////////ARRAYS

let ourArray = ["Nick", "38", "Male"];
let myArray = ["Isla", "6", "Female"];
console.log(ourArray);
console.log(myArray);
// displays both arrays

var array10 = [["the universe", 42], ["everything", 101010]];
var myArray10 = [["nick", 38], ["isla", 6]];
console.log(myArray10[1]);
//displays Isla, 6

let array2 = [50, 60, 70];
let myData = array2[2];
console.log(myData);
//displays 70

let array3 = [1, 2, 3];
array3[2] = 10;
console.log(array3);
//replaces the 3 with 10

let array4 = [[1, 2, 3], [4, 5, 6], [[7, 8, 9], 10, 11]];
let myData1 = array4[2][0][1];
console.log(myData1);
//this should find the number 8 above


let array5 = [['xxxx', 10], ['yyyy', 6]];
array5.push(['zzzz', 13]);
console.log(array5[2]);
// push adds the data to the array.  then the console log displays the 2nd item.

let array51 = [['aaaa', 10], ['bbbb', 6]];
array51.unshift(['cccc', 13]);
console.log(array51[0]);
// push adds the data to the array.  then the console log displays the 2nd item.





let array6 = [1, 2, 3];
let del = array6.pop();
//this removes the last item in the array and adds it to "del" so del = 3 now

let array7 = [['nick', 38], ['isla', 6], ['cole', 13]];
let popFrArray = array7.pop();
console.log(popFrArray);
// working example - this pops the last nested array entry and displays Cole's info


let array8 = [1, 2, 3];
let del8 = array8.shift();
//this removes the first item in the array and adds it to "del8" so del8 = 1 now

let array9 = [['nick', 38], ['isla', 6], ['cole', 13]];
let popFrArray9 = array9.shift();
console.log(popFrArray9);
// working example - this pops the first nested array entry and displays Nick's info




// pop - moves the last in an array
// shift - moves first in an array
// push - adds to the end of an array
// unshift - adds to the start of an array



let myList = [["cereal", 4], ["milk", 3], ['juice', 2], ['eggs', 1]];
//shopping list array

// function allow you to build reuseable code
function reFunc() {
    console.log('hey world');
}
function reuse() {
    console.log('sup yall');
}
reFunc();
reuse();
// declares the functions then call them later.


function ourFun1(one, two) {
    console.log(one - two);
}
ourFun1(12, 5); //random numbers outputs 7
ourFun1(11, 20); //random numbers , outputs -9
function ourFun2(one, two) {
    console.log(one + two);
}
ourFun2(12, 5); //random numbers outputs 17
ourFun2(11, 20); //random numbers , outputs 31



//GLOBAL SCOPE WITH FUNCTIONS
let myGlobal = 10;
function fun01() {
    let whatever = 0;
}
// the variable 'whatever' will only be able to be used within fun1 function
function fun02() {
    whatever = 0;
}
// WHEN YOU DONT DECLARE THE TYPE the variable 'whatever' will be able to be used anywhere.

//LOCAL SCOPE
function myLocalScope() {
    var myVar = "5";
    console.log(myVar);
}
myLocalScope();
// declares a variable inside the function then runs the function to display it.


function testF1(num) {
    return num - 7;
}
console.log(testF1(10));
function timesFour(nummer) {
    return nummer * 4;
}
console.log(timesFour(4));

let sum = 0;
function addThree(sum) {
    return sum = sum + 3;
}
console.log(addThree(3));
function addFive(sum) {
    return sum += 5;
}
console.log(addFive(3));


// returned value test
let testvar = 0;
function testy(whatever) {
    return (whatever + 3) * 5;
}
testvar = testy(100);
console.log(testvar);
console.log(testy(100));
//LAST 2 LINES DO THE SAME THING.  TEST IT BELOW:
let idunno;
function newfunc(ayy) {
    return (ayy + 10);
}
idunno = newfunc(100);
console.log(idunno);
// END

/*THIS DOESNT WORK
STAND IN LINE - this returns the first items on the list
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift;
}
let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testarr)); //stringify changes an array into a string to be printed
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
*/

function bools() {
    return true;
}

// 3 examples of if statements with equals
function trueFalse(isItTrue) {
    if (isItTrue) {
        return "Yes it is"
    }
    return "No its not"
}
console.log(trueFalse(false));

function testTrue(wasTrue) {
    if (wasTrue) {
        return "yep"
    }
    return "no"
}
console.log(testTrue(false));

function testEqual(val) {
    if (val === 12) {
        return "Equal";
    }
    return "Not equal";
}
console.log(testEqual(12));


//  3 == "3" and 3 == 3    BUT 3 === 3 ONLY





function newnew0(nicko) {
    if (nicko == 1) {
        return "yesss";
    }
    else if (nicko == 2) {
        return "nooo"
    }
    return "poop";
}
console.log(newnew0(7));


var names = ["holein1", "eag", "bird", "Par", "bogie"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if (strokes <= par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    else if (strokes >= par + 1) {
        return names[4];
    }
}
console.log(golfScore(5, 6)); //passes values for 5 Par and 6 Strokes


//SWITCH STATEMENTS
function caseswitch(val) {
    let answer = "";
    switch (val) {   //establish statement with what you're trying to find
        case 1:   //basically IF 1
            answer = 'alpha';  // DO THIS
            break;  // break has to be added to stop it running into 2
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'something';
            break;
        case 4:
            answer = 'four';
            break;
    }
    return answer;  // return the answer
}
function writeit() {  //create function for console.log, wont execute
    console.log(caseswitch(4));
}
writeit();  //now writes it to console log, totally unneeded but just trying it out


//SWITCH STATEMENTS
function caseswitch(xxx) {
    let answer = "";
    switch (xxx) {   //establish statement with what you're trying to find
        case 'a':   //basically IF 1
            answer = 'dog';  // DO THIS
            break;  // break has to be added to stop it running into 2
        case 'b':
            answer = 'cat';
            break;
        case 'c':
            answer = 'bird';
            break;
        case 'd':
            answer = 'human';
            break;
        default:
            answer = "default or something";
            break;
    }
    return answer;  // return the answer
}
console.log(caseswitch('b'));


function sS(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low"
            break;
        case 4:
        case 5:
            answer = "high"
            break;
    }
    return answer;
}
console.log(sS(2));


//returning booleans from functions
function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
console.log(isLess(10, 15));

// BELOW IS THE SAME AS ABOVE
//returning booleans from functions
function isLess(a, b) {
    return a < b;
}
console.log(isLess(10, 15));


function abtest(a, b) {
    if (a < 0 || b > 0) {
        return undefined;
    }
    return Math.round(Math.sqrt(a) + Math.sqrt((b), 2));
}
console.log(abtest(10, 2));


//card counter
let count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break; //add 1 to low counts
        case 7:
        case 8:
        case 9:
            break; //do nothing for these medium ones
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break; //do nothing for these medium ones
    }
    let holdbet = "hold";
    if (count > 0) {
        holdbet = "bet"
    }
    return count + " " + holdbet;
}
//cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4));


//declaring objects
let ourDog0 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
}
let myDog0 = {
    "name": "Sugar",
    "legs": 4,
    "tails": 0,
    "friends": []
}

// dot notation
let testObj0 = {
    "hat": "ballcap",
    "shirt": "jersy",
    "shoes": "cleats"
}
let hatValue = testObj0.hat;  //add new variable & give it the value of ballcap by looking up the object & hat value
let shirtValue = testObj0.shirt;
console.log(hatValue + " & " + shirtValue);

// bracket notation - needed if object property has a space
let testObj1 = {
    "a hat": "ballcap",
    "a shirt": "jersy",
    "a shoes": "cleats"
}
let hatValue1 = testObj1["a hat"];  //same thing but using bracket notation
let shoesValue1 = testObj1["a shoes"];
console.log(hatValue1 + " & " + shoesValue1);


// bracket notation - also used to look up object properties with variables
// like if a user typed in 12, it'd be stored in that variable then found
let playerObject = {
    12: "namath",
    16: "montana",
    19: "unitas"
}
let playerNumber = 16;
let player = playerObject[playerNumber];

console.log(player);




//declaring objects
let ourDog1 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
}
let myDog1 = {
    "name": "Sugar",
    "legs": 4,
    "tails": 0,
    "friends": ["everyone and everything"]
}

myDog1.name = "happy sugar" // this changes sugars name to happy sugar
myDog1.bark = "bow-wow"; // add a property to the object
console.log(myDog1.name); //display the name
console.log(myDog1.bark); // display the new property

delete myDog1.bark; //delete the property
console.log(myDog1.bark); //shows as undefined because it's been erased


// use objects to look up instead of a switch statement
function phoLookup(val) {       // declare function
    let result = "";            //init result variable
    let lookup = {              //init lookup object
        "alpha": "adams",
        "bravo": "boston",
        "charlie": "chicago"
    }
    result = lookup[val]        //result equals lookup > "property"
    return result;              //return result
}
console.log(phoLookup("alpha")); //displays "Adams" after passing 'alpha' as the property


/* i understand what its supposed to do but it isnt working
//challenge - record look up
let collection = {
    "2548": {
        "album": "slippery when wet",
        "artist": "bon jovi",
        "tracks": [
            "let it rock", "you give love"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "prince",
        "tracks": [
            "purple rain", "little red corvette"
        ]
    },
    "1245": {
        "album": "robert palmer",
        "artist": "prince",
        "tracks": []
    },
    "5439": {
        "album": "abba gold"
    }
}

let collectionCopy = JSON.parse(JSON.stringify(collection));  // this is just a fancy way to make a copy of the object

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecords(5429, "artist", "abba"));
*/

// START ARRAY & +1 EVERY TIME LOOP RUNS UNTIL 5
let myArrayZ = [];
let i = 0;
while (i < 5) {
    myArrayZ.push(i);
    i++;
}
console.log(myArrayZ);