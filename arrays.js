// Arrays

// 1)  Declare an empty array using JS literal notation to store student names in future.

// let students = [];
// console.log(students);

// 2) Declare an empty array using JS object notation student names in future.

// let studentsData = {
//     studentNames: []
// };
// console.log(studentsData);

// 3) Declare and initialize a strings array.

// let stringsArray = ["a","b","c"];
// console.log(stringsArray);

// 4) Declare and initialize a numbers array.
// let numArray = [10,20,30,4];
// console.log(numArray);

// 5) Declare and initialize a boolean array.
// let booleanArray = [true,false];
// console.log(booleanArray);

// 6) Declare and initialize a mixed array.
// let mixArray = [true,1,2,4,4,"grapes","egg",false];
// console.log(mixArray);

// 7) Declare and Initialize an array and store available mobile networks in Pakistan.
// let networksPk = ["ufone","telenor","jazz"];
// console.log(networksPk);

// 8) Declare and Initialize an array and store available education qualifications in Pakistan
//    (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// let ol = document.querySelector("#ol");
// let qualifications = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil",
//   "PhD",
// ];

// for (let i = 0; i < qualifications.length; i++) {
//   ol.innerHTML += `<li>${qualifications[i]}</li>`;
// }

// 9) Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. Display the elements & length of array in your browser. (Use array's length method)

// let h1 = document.querySelector("#h1");
// let ol = document.querySelector("#ol");
// let display2 = document.querySelector("#display");

// h1.innerHTML = "Top movies of 2015";
// let emptyArray = [];
// emptyArray.push("Avengers: Age of Ultron");
// emptyArray.push("Spectre");
// emptyArray.push("Jurrasic");
// emptyArray.push("Inside Out");
// for (let i = 0; i < emptyArray.length; i++) {
//     ol.innerHTML += `<li>${emptyArray[i]}</li>`;
// }
// display2.innerHTML += `Lenght of the array: ${emptyArray.length}`;

// 10) Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array

// h1.innerHTML = "Favorite Cars<br/>";
// let favCars = ["Audi","Volvo","Ford","Lamborghini"];

// display2.innerHTML += `${favCars} <br/><br/> `;
// idxNum1 = favCars.indexOf("Audi");
// idxNum2 = favCars.indexOf("Lamborghini");
// display2.innerHTML += `First index of the array: ${idxNum1}<br/> `
// display2.innerHTML += `Car at first index of the array: ${favCars[0]}<br/> `
// display2.innerHTML += `Last index of the array: ${idxNum2}<br/> `
// display2.innerHTML += `Car at Last index of the array: ${favCars[3]}<br/> `

// 11) Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// let students = ["Michael", "John", "Tony"];
// let studentScore = [320, 230, 480];
// function total(x) {
//   return (x / 500) * 100;
// }
// for (let i = 0; i < students.length; i++) {
//   const student = students[i];

//   display2.innerHTML += `Score of ${student} is ${studentScore[i]}.
//    Percentage: ${total(studentScore[i])}% <br/>`;
// }

// 12) Initialize an array with color names.
//     Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the          beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d) Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index.. Display the updated array in your browser.

// h1.innerHTML = "Colors";
// let colors = ["red", "blue", "black", "green", "orange", "purple"];
// for (let i = 0; i < colors.length; i++) {
//   display2.innerHTML += `${colors[i]} <br/><br/>`;
// }

// a)
// function edit() {
//   let userColor = prompt("What color you want to add at the start?");
//   if (userColor === "" || userColor === null) {
//     return;
//   } else {
//     colors.unshift(userColor);
//     display2.innerHTML = "";
//     for (let i = 0; i < colors.length; i++) {
//       display2.innerHTML += `${colors[i]} <br/><br/>`;
//     }
//   }
// }

// b)
// function edit() {
//   let userColor = prompt("What color you want to add at the end?");
//   if (userColor === "" || userColor === null) {
//     return;
//   } else {
//     colors.push(userColor);
//     display2.innerHTML = "";
//     for (let i = 0; i < colors.length; i++) {
//       display2.innerHTML += `${colors[i]} <br/><br/>`;
//     }
//   }
// }

// c)
// function edit() {
//   let userColor1 = prompt("What 2 colors you want to add at the start one by one");
//   let userColor2= prompt("One more color?");
//   if (!userColor1 || !userColor2) {
//     return;
//   }
//   else {
//     colors.unshift(userColor1);
//     colors.unshift(userColor2);
//     display2.innerHTML = "";
//     for (let i = 0; i < colors.length; i++) {
//       display2.innerHTML += `${colors[i]} <br/><br/>`;
//     }
//   }
// }

// d)
// function edit() {
//   let userColor = confirm("Delete the first color?");
//   if (!userColor) {
//     return;
//   } else {
//     colors.shift();
//     display2.innerHTML = "";
//     for (let i = 0; i < colors.length; i++) {
//       display2.innerHTML += `${colors[i]} <br/><br/>`;
//     }
//   }
// }

// e)
// function edit() {
//     let userColor = confirm("Delete the last color?");
//     if (!userColor) {
//       return;
//     } else {
//       colors.pop();
//       display2.innerHTML = "";
//       for (let i = 0; i < colors.length; i++) {
//         display2.innerHTML += `${colors[i]} <br/><br/>`;
//       }
//     }
//   }

// f)
// function edit() {
//     let userColor = prompt("Which index number you want to add a color?");
//     if (!userColor) {
//         return;
//     }
//     if(userColor !== "" || userColor !== null){
//         let userColor2 = prompt("Color name?");
//         colors.splice(userColor,0,userColor2);
//         display2.innerHTML = "";
//         for (let i = 0; i < colors.length; i++) {
//             display2.innerHTML += `${colors[i]} <br/><br/>`;
//           }
//     }
//   }

// g)
// function edit() {
//     let userColor = prompt("Which index number you want to delete color?");
//     if (!userColor) {
//         return;
//     }
//     if(userColor !== "" || userColor !== null){
//         let userColor2 = prompt("How many colors you want to delete?");
//         colors.splice(userColor,userColor2);
//         display2.innerHTML = "";
//         for (let i = 0; i < colors.length; i++) {
//             display2.innerHTML += `${colors[i]} <br/><br/>`;
//           }
//     }
//   }

// 13) Write a program to store student scores in an array & sort the array in ascending order using Array's sort method.

// let studentScore = [320,230,480,120];
// display2.innerHTML += `Scores of students: ${studentScore} <br/>`
// display2.innerHTML += `Ordered Scores of students: ${studentScore.sort()} `

// 14) Write a program to sort the below mentioned array: var fruits = ["strawberry", "apple", "orange", "banana"];

// let fruits = ["strawberry", "apple", "orange", "banana"];
// display2.innerHTML += `Fruits list: ${fruits} <br/>`
// display2.innerHTML += `Ordered Fruits list: ${fruits.sort()}`

// 15) Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// display2.innerHTML += `Cities List: <br/> ${cities} <br/><br/>`
// let selectedCities = cities.slice(2,4);
// display2.innerHTML += `Selected Cities List: <br/>${selectedCities}`;

// 16) Write a program to create a single string from the below mentioned array: from the b var arr = ["This ", " is ", " my", " cat"]; (Use array's join method)

// let animal = ["This ", " is ", " my", " cat"];
// display2.innerHTML += `Array: <br/>${animal}<br/><br/>`;
// display2.innerHTML += `Array: <br/>${animal.join("")}`;

// 17) Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// let devices = ["keyboard", "mouse", "printer", "monitor"];
// display2.innerHTML += "Devices: <br/>";
// display2.innerHTML += `${devices.join(",")} <br/><br/>`;
// let i = 0;
// while ( i < devices.length) {
//     display2.innerHTML += ` Out:<br/> ${devices.shift()}<br/>`
// }

// 18) Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

// let devices = ["keyboard", "mouse", "printer", "monitor"];
// display2.innerHTML += "Devices: <br/>";
// display2.innerHTML += `${devices.join(",")} <br/><br/>`;
// let i = devices.length;
// while (i > 0) {
//   display2.innerHTML += `Out:<br/> ${devices.pop()}<br/>`;
//   i--;
// }

// 19) Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
// let dropdrown = document.querySelector("#dropdrown");
// let mobiles = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// for (let i = 0; i < mobiles.length; i++) {
//     dropdrown.innerHTML += `<option>${ mobiles[i]}</option>`
// }

// 20) Declare and initialize an empty multidimensional array. (Array of arrays)

// let multiArray = [[],[[],[]]];

// 21) Declare and initialize a multidimensional array representing the following matrix:
// let multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for (let i = 0; i < multiArray.length; i++) {
//     display2.innerHTML += `${multiArray[i]} <br/>`;
// }
