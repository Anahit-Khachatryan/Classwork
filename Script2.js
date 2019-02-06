//2. Given number n (positive integer).Print the value of n + nn + nnn(not multiplication).
let n = prompt("Please enter number");

let secondNumber = n + n;
let thirdNumber = n + n + n;
let value = Number(n) + Number(secondNumber) + Number(thirdNumber);

if (n > 0) {
    console.log(`The value is ${value}`);
}
else {
    console.log("You entered no valid number");
}





