// Challenge: 00-sayHello (example)
// Difficulty: Basic
// Prompt:
// Write a function called sayHello that returns the string "Hello!".
// Examples:
// sayHello() //=> Hello!
/*-----------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here

function sayHello() {
  return "Hello!";
}

console.log(sayHello());



// Challenge: greet (example)
//Difficulty: Basic
//Prompt:
//Write a function called greet that takes a name as an argument and returns the string "Hello, John!"
//Examples:
//greet("Dylan") => Hello Dylan!
/*-----------------------------------------------------------------*/
// Your solution for the greet example here

function greet(name) {
  console.log("hello , " + name + "!");
}

greet("Dylan");


/*-----------------------------------------------------------------
Challenge: 01-addOne
Difficulty: Basic
Prompt:
Write a function called addOne that takes a single number as an argument and returns that number plus 1.
Examples:
addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------*/
// Your solution for 01-addOne here:


function addOne(n) {
  return n + 1;
}

console.log(addOne(9))