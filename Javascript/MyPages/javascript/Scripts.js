

let ownerName = "Gazpacho Blaze";
if (ownerName === "Gazpacho Blaze") alert("GAZPACHO IS THE KING");





const today = new Date();
let currentYear = today.getFullYear();


alert(today);
alert(currentYear);


const personName = prompt("What's your name?");
alert(`Your name is ${personName}`);

const personBirthYear = prompt("What year were you born?");
alert(`Your birth year is ${personBirthYear}`);


const personCurrentAge = currentYear - personBirthYear;
alert(personCurrentAge);

const firstName = "Gazpacho";
const lastName = "Blaze";
console.log(firstName + " " + lastName);





console.log(`regular string`);
console.log(`this has two lines \n\
so its \n\
different`);

const legalAge = 16;
const isOldEnough = personCurrentAge >= legalAge;

if (isOldEnough) {
    console.log(`You can start driving`);


} else {
    const yearsLeft = legalAge - personCurrentAge;
    console.log(yearsLeft);
    console.log(`You are too young to drive so wait ${yearsLeft} more years`);
    alert(`You are too young to drive so wait ${yearsLeft} more years`);
}


// Type coercion //
const inputTheYear = '1994';
console.log(Number(inputTheYear) + inputTheYear);
console.log(Number(inputTheYear) + 27);
console.log(String(17), 17);
document.write(` "I am" + 24 + "years old"`);
console.log("23" * "4");






/* 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive");

const interface = "audio";

*/

function logger() {
    console.log("My name is Gazpacho");
}


/* Calling / Running / Invoking / the function */
logger();
logger();
logger();
logger();

function plants(mangoes, peaches) {
    const juice = (`juice with ${mangoes} mangoes and ${peaches} peaches.`);
    return juice;
}

const mangojuice = plants(5,0);
console.log(mangojuice);
console.log(plants(5,0));

MangoPeachJuice = plants(7,8);
console.log(MangoPeachJuice);

/* Function declarations */

function calcAge1(birthdayYear) {
    return 2021 - birthdayYear;
}

const age1 = calcAge1(1994);
console.log(age1);


const calcAge2 = function (birthdayYear) {
    return 2021 - birthdayYear;
}

const age2 = calcAge2(1994);
console.log(age1,age2);

/* Arrow Functions */

const calcAge3 = birthdayYear => 2021 - birthdayYear;
const age3 = calcAge3(1994);
console.log(age3);

const retirementYears = birthdayYear => {
    const age = 2021 - birthdayYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(retirementYears(1994, "Gazpacho"));

