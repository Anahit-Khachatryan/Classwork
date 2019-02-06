//3. Given a positive integer.Bring the last digit of the number to the beginning.Print the new number.If the last digit of the inserted number is 0, number remains the same.

var x = +prompt("Please enter positive number");
var newNumber;

var lastDigit = x % 10;
var remNum = (x - lastDigit) / 10;

if (lastDigit > 0) {
    newNumber = String(lastDigit) + String(remNum);
    console.log(`The new number is ${newNumber}`);
}
else {
    console.log(+x);
}


//4. Given five numbers as input.Calculate and print the average of the numbers (without using arrays).
//let firstNumber = +prompt("Please enter first number");
//let secondNumber = +prompt("Please enter second number");
//let thirdNumber = +prompt("Please enter third number");
//let fourthNumber = +prompt("PLease enter fourth number");
//let fifthNumber = +prompt("Please enter fifth number");

//var average = (firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber) / 5;
//console.log(`The average is ${average}`);