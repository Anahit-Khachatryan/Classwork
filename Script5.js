//7. Given three numbers.Sort them by the ascending order.

let a = +prompt("Please enter first number");
let b = +prompt("Please enter second number");
let c = +prompt("Please enter third number");

let biggest;
let middle;
let smallest;

if (a > b && a > c) {
    biggest = a;
    if (b > c) {
        middle = b;
        smallest = c;
    }
    else {
        middle = c;
        smallest = b;

    }

}
if (b > a && b > c) {
    biggest = b;
    if (a > c) {
        middle = a;
        smallest = c;
    }
    else {
        middle = c;
        smallest = a;
    }

}
if (c > a && c > b) {
    biggest = c;
    if (a > b) {
        middle = a;
        smallest = b;
    }
    else {
        middle = b;
        smallest = a;
    }

}


console.log(`Smallest is ${smallest} middle is ${middle} biggest is ${biggest}`);


//8. Percentage marks obtained by a student in three exams are to be entered to a computer.
//var firstExamMark = +prompt("Please enter your first exam mark");
//var secondExamMark = +prompt("lease enter your second exam mark");
//var thirdExamMark = +prompt("lease enter your third exam mark");

//if (firstExamMark > 40 && secondExamMark > 40 && thirdExamMark > 40) {
//    console.log("Student pass the exam");
//}
//else if ((firstExamMark + secondExamMark + thirdExamMark) / 3 >= 50) {
//    console.log("Student pass the exam");
//}
//else {
//    console.log("Student failed the exam");
//}
