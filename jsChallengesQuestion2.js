// Answer to Question Two

let birthYear = prompt("Enter Year of Birth");
let currentYear = new Date().getFullYear();
if (currentYear - birthYear <= 18) {
  console.log("You are still a Minor");
} else if (currentYear - birthYear <= 36) {
  console.log("You are a Youth");
} else console.log("You are an elder");
