// Get type of var;

// String
typeof "tekst";

//Number
typeof 222.222;

//Boolean 
typeof true;
typeof 2 == 3;

//Undefined
typeof undefined;
let val;
typeof val;

// Object
let refValue1 = [1,2,3];
let refValue2 = refValue1;
refValue1[1] = 1;
console.log("Val 2: " + refValue2);
refValue2[1] = 99;
console.log("Val 1: " + refValue1);
refValue1[3] = 4;
console.log("Val 1: " + refValue1);

let userSurname = "Smith";
let showUserName = function() {
    console.log(userSurname) 
};

let name, age, adress;
let position = [200,300], score = null, time = 20.2, ipAddress;
const firstUser = "Anita", secondUser = "Tomasz";

// const = zmienna stała
// let - zmienna
// var zmienna przed ES6
