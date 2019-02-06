//5. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

let number = +prompt("Please enter number");

if (number % 3 == 0) {
    console.log("The number is multitiple of 3");
}
else if (number % 5 == 0) {
    console.log("The number is multitiple of 5");
}
else if (number % 7 == 0) {
    console.log("The number is multitiple of 7");
}
else {
    console.log("The number isn't multiple of 3,5,7 ");
}


//6. Given an age, figure out whether someone is a baby(1 months - 12 months), toddler(1 year - 2 years), child(3 years - 12 years ),
//    teenager(13 years - 17 years) or adult(18 years and more ).Also check that age in months is between 1 and 12.


let age = +prompt("Please enter age");
let month;
if (age <= 0.9 && age >= 0.1) {
    month = age * 12;
    console.log("You are a baby");
}

switch (age) {
    case 1:
    case 2:
        console.log("You are a toddler");
        break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        console.log("You are a child");
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("You are a teenager");
        break;
    default:
        console.log("You are a adult");
        break;
}