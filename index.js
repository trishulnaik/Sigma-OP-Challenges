// Calculate Factorial of a number


const userInput = Number(prompt("Enter a number to find its factorial"));

// using reduce function
// let arr = [];
// for(let i=userInput;i>0;i--){
//   arr.push(i);
// }
let arr = Array.from(Array(userInput+1).keys())
arr.shift(); 
let result1 = arr.reduce((prev, curr)=> curr*prev)
alert(`The Factorial using Reduce method is ${result1}`)

// using for loops

let result2 = 1;
for(let i=userInput;i>0;i--){
  result2*=i;
}
alert(`The Factorial using Loops method is ${result2}`)
