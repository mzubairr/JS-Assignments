// for loops.

// 1. Write a program to display the message "Hello World" in your browser using for loop.
let display = document.querySelector("#display");
// for (let i = 1; i <= 5; i++) {
//   display.innerHTML += `Hello World <br/>`;
// }

// 2. Write a program to print numeric counting from 1 to 10.
// for (let i = 1; i <= 10; i++){
//     display.innerHTML += `${i} <br/>`;
// }

// 3. Write a program to print multiplication table of any number using for loop.
//   Table number & length should be taken as an input from user.

// let tableNo = +prompt("Enter a number to print its multiplication table");
// let tablelength = +prompt("Enter length of multiplication table");
// display.innerHTML += `Multiplication table of ${tableNo} <br/>`;
// display.innerHTML += `Length ${tablelength} <br/><br/>`;
// for (let i = 1; i <= tablelength; i++) {
//   display.innerHTML += `${tableNo} x ${i} = ${tableNo * i} <br/> `;
// }

// 4. You have an array
//    A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
//    Write each element on new line with the help of for loop.

// let a = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (let i = 0; i < a.length; i++) {
//   display.innerHTML += `${a[i]} <br/>`;
// }

// 5. Write a program to print items of the following array using for loop:
//    fruits = [“apple”, “banana", "mango”, "orange", "strawberry"]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   display.innerHTML += `Element at index ${i} is ${fruits[i]} <br/>`;
// }

// 6. Write a program to initialize an array of N items by using prompt.
//    Where N is number of items as entered by the user.

// let itemsNum = +prompt("Enter number of items");
// let initializeArr = [];
// for (let i = 0; i < itemsNum; i++) {
//     let val = prompt(`Enter value of index ${i}`);
//     initializeArr.push(val);
//     console.log(initializeArr);
// }
// display.innerHTML += `Number of items ${itemsNum} <br/>`;
// display.innerHTML += `Items <br/></br>`;
// for (let i = 0; i < initializeArr.length; i++) {
//     display.innerHTML += `${initializeArr[i]} <br/>`;
// }

// 7. Generate the following series in output.

// display.innerHTML += `<b>Counting:</b> <br/><br/>`;
// for (let i = 1; i <= 15; i++) {
//     display.innerHTML += `${i},`;
// }

// display.innerHTML += `<br/><br/><b>Reverse Counting:</b> <br/><br/>`;
// for (let i = 10; i >= 1; i--) {
//     display.innerHTML += `${i}, `;
// }

// display.innerHTML += `<br/><br/><b>Even:</b> <br/><br/>`;
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         display.innerHTML += `${i}, `;
//     }
// }

// display.innerHTML += `<br/><br/><b>Odd:</b> <br/><br/>`;
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         display.innerHTML += `${i}, `;
//     }
// }

// display.innerHTML += `<br/><br/><b>Series:</b> <br/><br/>`;
// for (let i = 2; i <= 20; i++) {
//     if (i % 2 === 0) {
//         display.innerHTML += `${i}k, `;
//     }
// }

// 8. You have an array
//    A = ["cake", "apple pie", "cookie", "chips", "patties"]
//    Write a program to enable "search by user input" in an array.
//    After searching, prompt the user whether the given item is found in the list or not.

// let a = ["cake", "apple pie", "cookie", "chips", "patties"];
// let input = prompt(
//     "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
// );

// for (let i = 0; i < a.length; i++) {
//     let check = a.indexOf(input);
//     if (check === -1) {
//         display.innerHTML = `We are sorry. ${input} is not available in our bakery`;
//     } else {
//         display.innerHTML = `${input} is available at index ${check} in our bakery`;
//     }
// }

// 9. Write a program to identify the largest number in the given array.
//    A = [24, 53, 78, 91, 12]

// let a = [24, 53, 78, 91, 12];
// let greater = a[2];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] >= greater) {
//     greater = a[i];
//   }
// }
// display.innerHTML = `Array items: ${a} <br/>
//     The largest number is ${greater}`;

// 10. Write a program to identify the smallest number in array.
//     the given A = [24, 53, 78, 91, 12]

// let a = [24, 53, 78, 91, 12];
// let smaller = a[2];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] < smaller) {
//     smaller = a[i];
//   }
// }
// display.innerHTML = `Array items: ${a} <br/>
// The smallest number is ${smaller}`;

// 11. Write a program to identify the largest & the smallest number in the given array.
//     A = [24, 53, 78, 91, 12]

// let a = [24, 53, 78, 91, 12];
// let greater = a[2];
// let smaller = a[2];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > greater) {
//         greater = a[i];
//     }
//     for (let j = 0; j < a.length; j++) {
//         if (a[j] < smaller) {
//             smaller = a[j];
//         }
//     }
// }
// display.innerHTML = `Array items: ${a} <br/>
// The smallest number is ${smaller} <br/>
// The largest number is ${greater}`;

// 12. Write a program to print multiples of 5 ranging 1 to 100

// for (let i = 1; i <= 20; i++) {
//   display.innerHTML += `${i * 5}, `;
// }

// 13. You have given the following arrays:
//     var students = ["Ali", "Sami", "Taha", "Inam"];
//     var scores = [58, 73, 89, 90];
//     Write a program to generate the following HTML table in your browser using JS.

// let table = document.querySelector(".table");
// let students = ["Ali", "Sami", "Taha", "Inam"];
// let scores = [58, 73, 89, 90];
// table.innerHTML += `<tr><th>Students</th><th>Scores</th></tr>`;
// for (let i = 0; i < students.length; i++) {
//     table.innerHTML += `<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`;
// }

// 14. Write a program that prints number from start of the array to desired stop value.
//     Given array: var scores = [12, 45, 3, 22, 34, 50];
//     (Hint: take stop value from user)

// let scores = [12, 45, 3, 22, 34, 50];
// let inputStop = +prompt("Enter value");
// for (let i = 0; i < scores.length; i++) {
//     display.innerHTML += `${scores[i]} `;
//     if (scores[i] === inputStop) {
//         break;
//     }
// }

// 15. You have an array
//     A = [[1,2,3], [4,5,6], [7,8,9]]
//     Write each element on new line with the help of nested for loops.
// let a = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a[i].length; j++) {
//     display.innerHTML += `${a[i][j]} <br/>`;
//   }
// }

// 16. Write a program to repeatedly print the value of the variable num which is input by user.
//     Value should be decreasing by 0.5 each time, as long as x Value remains positive.

// let inputNum = +prompt("Enter a number");
// for (let i = inputNum; i >= 0; i -= 0.5) {
//   display.innerHTML += `${i}, `;
// }

// 17. The even/odd reporter Write a for loop that will iterate from 0 to 20.
//     For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     display.innerHTML += `${i} is even <br/>`;
//   } else {
//     display.innerHTML += `${i} is odd <br/>`;
//   }
// }

// 18. Write a program to calculate the product of the odd integers from 1 to 7.

// let product = 1;
// for (let i = 0; i <= 7; i++) {
//   if (i % 2 !== 0) {
//     product *= i;
//   }
// }
// display.innerHTML += `The product of the odd integers from 1 to 7
//   is ${product}<br/>`;

// 19. Write a program that will write out a wedge of stars.
//     The user will enter the initial number of stars,
//     and the program will write out lines of stars where each line has one few star than the previous line.
//     Initial number of stars: 7

// for (let i = 7; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         display.innerHTML += "*";
//     }
//     display.innerHTML += "<br/>";
// }

// 20. Write a program to create the following patterns in your browser.
//     Take number of lines as an input.

// a)
// let stars = "*****";
// for (let i = 1; i <= 4; i++) {
//     display.innerHTML += stars + "<br/>"
// }

// b)
// let stars = "";
// for (let i = 1; i <= 5; i++) {
//     stars += "*";
//     display.innerHTML += stars + "<br/>";
// }

// c)
// for (let i = 5; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         display.innerHTML += "*";
//     }
//     display.innerHTML += "<br/>";
// }
