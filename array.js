"use strict";
// 2- Task: Create an Array Manipulation Program
// Breakdown:
// · Declare an array of strings, e.g. ["apple", "banana", "cherry", "date", "elderberry"]
// · Use array methods to perform the following manipulations:
// o Append a string to the end of the array
// o Prepend a string to the beginning of the array
// o Remove a string from a specific index in the array and replace it with another string
// · Display the array before and after each manipulation to the user as output.
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits);
// let safwan =fruits.slice(1);
// console.log(safwan);
//adding string in the array at the end
fruits.push("mango");
console.log(fruits);
// //adding string at the begining of the array
fruits.unshift("orange");
console.log(fruits);
// another method of removing and replacing at the same time.
// fruits[0]="kino";
// console.log(fruits);
//Remove a string from a specific index in the array and replace it with another string
fruits.splice(2, 2, "lemon");
console.log(fruits);
