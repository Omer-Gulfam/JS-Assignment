
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."
let fuel = prompt("Enter remaining fuel of your car in liters");
var carFuel = 0.25;
if (carFuel <= 0.25){ alert("Please refill the fuel in your car");
}

// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).

// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.
let subject1Marks = prompt("Enter marks obtained in subject 1:");
let subject2Marks = prompt("Enter marks obtained in subject 2:");
let subject3Marks = prompt("Enter marks obtained in subject 3:");
let totalMarks = prompt("Enter total marks:");

let obtainedMarks = Number(subject1Marks) + Number(subject2Marks) + Number(subject3Marks);
let percentage = (obtainedMarks / Number(totalMarks)) * 100;

let grade;
let remarks;

if (percentage >= 90) {
  grade = 'A+';
  remarks = 'Excellent';
} else if (percentage >= 80) {
  grade = 'A';
  remarks = 'Very Good';
} else if (percentage >= 70) {
  grade = 'B';
  remarks = 'Good';
} else if (percentage >= 60) {
    grade = 'C';
    remarks = 'Average';
  } else if (percentage >= 50) {
    grade = 'D';
    remarks = 'Below Average';
  } else {
    grade = 'F';
    remarks = 'Fail';
  }
  
 document.write("Percentage: " + percentage + "%" + "<br>");
 document.write("Grade: " + grade + "<br>");
 document.write("Remarks: " + remarks + "<br><br>");
// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).

let literalArr = [true, null, undefined];
let stringArr = ["apple", "banana", "mango"];
let numberArr = [1, 2, 3, 4, 5];
let boolArr = [true, false, true];
let mixedArr = ["apple", 1, true, null, undefined];
let qualificationArr = ["Bachelor's Degree", "Master's Degree", "PhD"];

// 5)Write a program to store phone manufacturers in an array.
let phoneManufacturers = ["Apple", "Samsung", "Oppo", "Vivo", "Nokia"];

// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.
var studentScores = [80, 56, 91, 72, 97, 61];
document.write(studentScores + "<br><br>");
studentScores.sort();
document.write(studentScores + "<br><br>");
studentScores.reverse();
document.write(studentScores + "<br><br>");

// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].
let ary = ["This", "is", "my", "cat"];
let text = ary.join(" ");
document.write(text + "<br><br>");

// 8)Implement the FIFO (First In First Out) approach using arrays.
let queue = [];
queue.push("A");
queue.push("B");
queue.push("C");
document.write(queue + "<br><br>");
var dequeuedElement = queue.shift();
document.write(dequeuedElement + "<br>");
document.write(queue + "<br><br>");

// 9)// Implement the LIFO (Last In First Out) approach using arrays.
let que = [];
que.push("A");
que.push("B");
que.push("C");
document.write(que + "<br><br>");
var dequeuedElement = que.pop();
document.write(dequeuedElement + "<br>");
document.write(que + "<br><br>");

// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.
let fruits = ["mango", "orange", "apple", "banana", "pineapple"];
let userInput = prompt("Enter a fruit name to search:");
let found = fruits.includes(userInput);
if (found){
   document.write("Fruit found in the list!" + "<br><br>");
} else {
  document.write("Fruit not found in the list." + "<br><br>");
}

// 11)Write a program to identify the largest number in the given array.
let numbers = [61, 50, 70, 65, 82, 93];
numbers.sort((a, b)=>b-a);
console.log(`The highest value is ${numbers[0]}`);

let largestNumber = numbers[0];
for (i=0; i<numbers.length ;++i ){
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
      }
    }
   document.write("The largest number is:", largestNumber + "<br><br>");

// 12)Write a program to identify the smallest number in the given array.
let number = [61, 50, 70, 65, 82, 93];
number.sort();
console.log (`The lowest value is: ${number[0]}`);

let smallestNumber = numbers[0];
for (i=0; i<numbers.length ;++i ){
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
      }
    }
   document.write("The smallest number is:", smallestNumber + "<br><br>");

// 13)Write a program to print multiples of 5 ranging from 1 to 100.
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }

// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.
let numOne = Number(prompt("Enter the first number:"));
let numTwo = Number(prompt("Enter the second number:"));
var sum = numOne + numTwo ;
document.write("The sum of " + numOne + " and " + numTwo + " is: " + sum + "<br>");

// 14)Repeat task1 for subtraction, multiplication, division & modulus.
var subtract = numOne - numTwo ;
document.write("The subtraction of " + numOne + " and " + numTwo + " is: " + subtract + "<br>");
var multiply = numOne * numTwo;
document.write("The multiplication of " + numOne + " and " + numTwo + " is: " + multiply + "<br>");
var divide = numOne/numTwo;
document.write("The division of " + numOne + " and " + numTwo + " is: " + divide + "<br>");
var module = numOne % numTwo;
document.write("The modulus of " + numOne + " and " + numTwo + " is: " + module + "<br>");

//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."
let city = prompt("Enter a city name");
if (city === "Karachi"){
alert("Welcome to the city of lights.");
} else {
  alert("Welcome to " + city);
}

// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."
let gender = prompt("Enter your gender");
if (gender == "Male"){
alert("Good Morning Sir.");
} else if(gender == "Female") {
  alert("Good Morning Ma'am");
} else {
    alert("Good Morning");
}

//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."
let color = prompt("Enter the color of the traffic signal:");
if (color.toLowerCase() == "red") {
   document.write("Must Stop.");
  } else if (color.toLowerCase() == "yellow") {
    document.write("Ready to move.");
  } else if (color.toLowerCase() == "green") {
    document.write("Move now.");
  } else {
    document.write("Invalid color entered.");
  }
  