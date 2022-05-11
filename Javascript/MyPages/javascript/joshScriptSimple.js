/*Developer; Josh
Date 2/4/22


*/

let ownerName = "Gazpacho Blaze";
if (ownerName === "Gazpacho Blaze") alert("Welcome");


const personName = prompt("What's your name?");
document.write('<h2>This is from Javascript</h2>');

const day = "monday";

switch (day) {
    case "monday":
        console.log("Work on javascript");
        console.log("Workout arms and front abs for Monday");
        break;
    case "Tuesday":
        console.log("Work on html for website");
        console.log("Workout legs and side abs for Tuesday");
        break;
    case "Wednesday":
        console.log("Work on css for website");
        console.log("Cardio for Wednesday");
        break;
    case "Thursday":
        console.log("Work on javascript");
        console.log("Workout on arms and front abs for Thursday");
        break;
    case "Friday":
        console.log("Work on html and css");
        console.log("Workout on legs and side abs for Friday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Take time off to relax and calm down");
        break;
    default:
        console.log("Not a valid day");
}

/* Challenge 4 */
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

/* Activating strict mode*/


