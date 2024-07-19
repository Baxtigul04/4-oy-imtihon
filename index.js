// 1-masala yechimi

// const numbers = "34567";
// const numberArray = numbers.split(``);
// const reversed = numberArray.reverse();
// let numberArray2 = reversed.map((el) => parseInt(el));
// console.log("numberArray:", numberArray2);

// 2-masala yechimi

// const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.map((val) => {
//   return val * 2;
// });
// console.log(newArray);

// 3-masala yechimi

// 4-masala yechimi

// const numbers = [10, 31, 57, 8, 9, 3, 2, 6];
// const oddArray = numbers.filter((val) => {
//   if (val % 2 === 0) {
//     return val;
//   }
// });
// const coupleArray = numbers.filter((val) => {
//   if (val % 2 !== 0) {
//     return val;
//   }
// });
// console.log("Toq:", oddArray, "  Juft:", coupleArray);

// 5-masala yechimi
// let theWordString = "salom dunyo! hello world!";
// function filtrString(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "!") {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(filtrString(theWordString));

// 6-misol yechimi

// let num1 = [1, 4, 6];
// let num2 = [3, 2, 5];
// function functions(arr1, arr2) {
//   let sum = 0;
//   for (let i = 0; i < num1.length; i++) {
//     sum += arr1[i];
//   }
//   for (let i = 0; i < num2.length; i++) {
//     sum += arr2[i];
//   }
//   return sum;
// }
// console.log(functions(num1, num2));

// 7-misol yechimi

// let strings = "salom";
// function stringTheWord(str) {
//   let result = "";
//   if (str.length <= 2) {
//     return "";
//   }
//   for (let i = 1; i < str.length - 1; i++) {
//     result += str[i];
//   }
//   return result;
// }
// console.log(stringTheWord(strings));

// 8-misol yechimi

// let array1 = [1, 2, 3, 4];
// function arrayTheInverse(arr) {
//   let inverse = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     inverse.push(arr[i]);
//   }
//   return inverse;
// }
// console.log(arrayTheInverse(array1));

// 9-misol yechimi

// let numbers = "12300";
// function numberfunctions(str) {
//   if (str.length - 1 === "0") {
//     return str.slice(0, str.length - 1);
//   }
//   return str;
// }
// console.log(numberfunctions(numbers));

// 10-masala yechimi

// let numbers = [5, 3, 9, 1, 7];
// function smallNumber(arr) {
//   let small = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < small) {
//       small = arr[i];
//     }
//   }
//   let power = small ** 4;
//   return power.toString();
// }
// console.log(smallNumber(numbers));
