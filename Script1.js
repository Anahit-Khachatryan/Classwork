let firstAngle = +prompt("Please enter triangle the first angle");
let secondAngle = +prompt("Please enter triangle the second angle");
let sumOfAngles = 180;
let thirdAngle;

thirdAngle = sumOfAngles - (firstAngle + secondAngle);

if ((firstAngle < secondAngle + thirdAngle) && (secondAngle < firstAngle + thirdAngle) && (thirdAngle < firstAngle + secondAngle)) {
    console.log(`The third angle of the triangle is ${thirdAngle} `);
}
else {
    console.log("You entered no valid number, it isn't triangle");
}



