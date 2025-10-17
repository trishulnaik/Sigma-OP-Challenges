/*
Create a Faulty Calculator which does the follows
1. Takes 2 numbers as input from the users
2. It performs wrong operations as follows, only 10% of the times.

+ ---> -
* ---> +
- ---> /
/ ---> **

*/

const a = Number(prompt("Enter the first Number"));
const b = Number(prompt("Enter the second Number"));
let op = prompt("Enter the operation you want to perform")

const isFaulty = Math.random() < 0.1;
const FaultyLogic = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**"
}
if(isFaulty){
  op = FaultyLogic[op];
}

alert(eval(`${a} ${op} ${b}`));