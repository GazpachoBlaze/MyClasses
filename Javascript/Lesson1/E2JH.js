

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

//boolean//
document.write(boolean);






