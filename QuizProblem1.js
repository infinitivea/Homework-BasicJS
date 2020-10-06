// Initial variable
let sum = 0,
  max = -Infinity,
  min = Infinity;

// 1
let oneAns = (a, b) => {
  let gcd = 1;
  for (let i = 2; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
    }
  }
  console.log("OUTPUT\n");
  console.log("a = ", a / gcd, "\nb = ", b / gcd);
};
const a = +prompt("Please enter a");
const b = +prompt("Please enter b");
console.log("--- 1 ---");
console.log("INPUT\n");
console.log("a = ", a, "\nb = ", b);
oneAns(a, b);

// 2
// let twoAns = (sum) => {
//   for (let i = 160; i <= 2048; i += 2) {
//     sum += i;
//   }
//   return sum;
// };
// console.log("2 = ", twoAns(sum));

// 3
// let threeAns = (sum) => {
//   for (let i = 163; i <= 815; i += 4) {
//     sum += i;
//   }
//   return sum;
// };
// console.log("3 = ", threeAns(sum));

// 4
// let nFibo = +prompt("Enter n number");
// let fiboAns = (sum) => {
//   let a = 1,
//     b = 0;
//   for (let i = 0; i < nFibo - 1; i++) {
//     sum = a;
//     a += b;
//     b = sum;
//   }
//   return b;
// };
// console.log("INPUT\n", nFibo);
// console.log("OUTPUT\n", fiboAns(sum));

// 5
// let fiveAns = (sum) => {
//   for (let i = 1; i <= 18954; i++) {
//     if (i % 2 === 0) sum -= i;
//     else sum += i;
//   }
//   return sum;
// };
// console.log("5 = ", fiveAns(sum));

// 6
// let sixAns = (sum) => {
//   for (let i = 1; i <= 87; i++) {
//     sum += i * (i + 1);
//   }
//   return sum;
// };
// console.log("6 = ", sixAns(sum));

// 7
// let sevenAns = (sum) => {
//   for (let i = 1; i <= 87; i++) {
//     sum += i * (i + 1) * (i + 2);
//   }
//   return sum;
// };
// console.log("7 = ", sevenAns(sum));

// 8
// let eightAns = (sum) => {
//   for (let i = 1; i <= 155; i += 2) {
//     sum += i * (i + 2) * (i + 4);
//   }
//   return sum;
// };
// console.log("8 = ", eightAns(sum));

// 9 (duplicate)

// 10
// let numInput = prompt("Enter number");
// let tenAns = () => {
//   while (numInput.toLowerCase() !== "stop") {
//     if (min > Number(numInput)) min = Number(numInput);
//     numInput = prompt("Enter number");
//   }
//   console.log("10 = ", min);
// };
// tenAns();

// 11
// let numInput = prompt("Enter number");
// let minFirst = 999,
//   minSecond = 999,
//   minThird = 999;
// let elevenAns = () => {
//   while (numInput.toLowerCase() !== "stop") {
//     if (Number(numInput) <= minFirst) {
//       minThird = minSecond;
//       minSecond = minFirst;
//       minFirst = +numInput;
//     } else if (Number(numInput) > minFirst) {
//       if (numInput <= minSecond) {
//         minThird = minSecond;
//         minSecond = +numInput;
//       } else if (numInput <= minThird) {
//         minThird = +numInput;
//       }
//     }
//     numInput = prompt("Enter number");
//   }
//   console.log("Min 1 : ", minFirst);
//   console.log("Min 2 : ", minSecond);
//   console.log("Min 3 : ", minThird);
// };
// elevenAns();

// 12
// let input12 = prompt("Enter number");
// let twelveAns = () => {
//   while (input12.toLowerCase() !== "stop") {
//     if (Number(input12) > max) max = +input12;
//     else if (Number(input12) < min) min = +input12;
//     input12 = prompt("Enter number");
//   }
//   console.log("--- 12 ---");
//   console.log("Max is ", max);
//   console.log("Min is ", min);
// };
// twelveAns();

// 13
// let input13 = prompt("Enter number");
// let thirteenAns = () => {
//   while (input13.toLowerCase() !== "stop") {
//     if (Number(input13) > max) max = +input13;
//     else if (Number(input13) < min) min = +input13;
//     input13 = prompt("Enter number");
//   }
//   console.log("--- 13 ---");
//   console.log("Max is ", max);
//   console.log("Min is ", min);
//   console.log("Results = ", max - min);
// };
// thirteenAns();

// 14
// let input14 = prompt("Enter number");
// let i = 0;
// let fourteenAns = (sum) => {
//   while (input14.toLowerCase() !== "stop") {
//     sum += Number(input14);
//     input14 = prompt("Enter number");
//     i++;
//   }
//   console.log("--- 14 ---");
//   console.log("Average = ", (sum / i).toFixed(2));
// };
// fourteenAns(sum);

// 15
// let reverseNumber = (num) => {
//   //converse number to String and split to array
//   let str = num.toString().split("");
//   //reverse String in array and delete comma in array with join("")
//   str = str.reverse().join("");
//   //converse String to Integer and multiple with sign of num
//   return parseInt(str) * Math.sign(num);
// };
// const input15 = +prompt("Please enter number");
// console.log("--- 15 ---");
// console.log("INPUT\n", input15);
// console.log("OUTPUT\n", reverseNumber(input15));
