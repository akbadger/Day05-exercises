//
// Day 05 Homework
// ------------ 1 ----------------
//
//function addNumbers(numberA, numberB) {
//   return numberA + numberB;
// }
//
// var twoPlusTwo = addNumbers(2, 2)
//
// console.log(twoPlusTwo) // 4
//
// ------------ 2 ----------------
//
// function yell() {
//   var str = "this sentence is uppercase";
//   return str.toUpperCase();
// }
//
// console.log(yell());
//
// function yell10() {
//   return yell().repeat(10);
// }
//
// console.log(yell10());
//
// ------------ 3 ----------------
//
// function longest() {
//   var str1 = "this is a short string";
//   var str2 = "this is a really really really long string";
//
//   if (str1.length > str2.length) {
//     return str1;
//   }
//   else if (str2.length > str1.length) {
//     return str2;
//   }
//
//   else {
//     return "the two strings are equal in length";
//   }
// }
//
// console.log(longest());
//
// ------------ 4 ----------------

// function checkVowel(letter) {
//   var letter = letter.toUpperCase();
//   if (letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
//     return true;
//   }
//   else {
//     return false
//   }
// };
//
// console.log(checkVowel("R"));






// Exercise 1
//
// Read the following description of an animal and create an object named animal based on all the details in the description. Your object should contain the following:
//
// name
// age
// location
// foods
// hobbies

// Elle the elephant is 6 years old and is currently living at the Wildlife Trust. She loves to eat tomatoes and corn on the cob. Her hobbies include laying in the sun and swimming in the pond.

// var animal = {
//   name: "Elle",
//   age: 6,
//   location: "Wildlife Trust",
//   foods: ["Tomatoes", "Corn on the cob"],
//   hobbies: ["laying in the sun", "swimming in the pond"]
//
// };


// let productData = {
//   state: "active",
//   title: "Mid Century Siesta Ware White Mug with Anchor",
//   price: 12.00,
//   quantity: 1,
//   tags: ["mug", "siesta ware", "beer mug", "white glass mug", "anchor and stars"],
//   category_path: ["Vintage", "Housewares", "Cup"],
//   image: {
//     small: {
//       url: "http://placehold.it/300x300"
//     }
//   }
// };
//
// console.log(productData.price);
// console.log(productData.title);
// console.log(productData.tags[2]);
// console.log(productData.image.small.url);
// console.log(productData.category_path[0]);

// Log the price
// Log the title
// Log the third tag listed in tags
// Log the image URL.
// Log the first category





// Copy the following block of code to your main.js file and write 2 statements for each function and log the results.

// Get the sum of two numbers
// function sum (x, y) {
//   return x + y;
// }
//
// var result = sum(120, 17);
// console.log(result);
//
// console.log(sum(2, 18));

// Find the largest of two numbers
// function max(a, b){
//   var largest;
//   if (a > b) {
//     largest = a;
//   } else {
//     largest = b;
//   }
//   return largest;
// }
//
// console.log(max(2, 15));
// console.log(max(24, 8));




// Take a look at the following code example and fix the errors so that the function returns the proper answer (10).


// function math (num1, num2, operator) {
//   var answer;
//
//   if (operator === "+") {
//     answer = num1 + num2;
//   } else if (operator === "-") {
//     answer = num1 - num2;
//   } else if (operator === "/") {
//     answer = num1 / num2;
//   } else if (operator === "*") {
//     answer = num1 * num2;
//   }
//
//   return answer;
// }
//
// console.log(math(5, 5, "+"));
// console.log(math(15, 5, "-"));
// console.log(math(100, 10, "/"));
// console.log(math(2, 5, "*"));
//
// 3 === 3
//
// 3 == "3"

// var string = "this is a string with lots of spaces       ";
//
// console.log(string.trim().toUpperCase());
