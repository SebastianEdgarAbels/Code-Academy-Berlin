console.log("Starting JavaScript...")

// Writing expressions with variables
// Ex 1-3

// var myName = "SEA";
// console.log(myName)
// var myAge = 35;
// console.log(myAge);
// var juliaAge = 32;
// var ageDiff = myAge - juliaAge;
// console.log(ageDiff);


// // Writting code with conditionals (CS - Conditional Statements)
// // Ex 4

// if(myAge > 21) {
//     console.log("You are older then 21");
// } else {
//     console.log("You are not older then 21");
// }


// // Ex 5

// if(myAge < juliaAge) {
//     console.log("Julia is older then you");
// } else if (myAge > juliaAge) {
//     console.log("Julia is younger then you");
// } else {
//     console.log("You have the same age as Julia");
// }



// //Sorting an Array
// //Ex 6

// const myArray = ["Monica", "Jana", "Sandra", "Mirna", "Jacopo", "Viktor", "Dickson", "Haron", "Jost", "Ottavia", "Raul", "Lucas", "Kilian", "Sarah"];
// console.log(myArray.sort());
// console.log(myArray.length);
// console.log(myArray[13]);
//
// for(let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }


// Ex 7
const studentAges = [32, 28, 35, 28, 32, 40, 25, 26, 45, 35, 30];

// let i = 0;
// while(i < studentAges.length) {
//     console.log(studentAges[i])
//     if(studentAges[i] % 2 == 0) {
//         console.log(studentAges[i]);
//     }
//     i++;
// }

// for(let i = 0; i < studentAges.length; i++) {
//     console.log(studentAges[i]);
//     if(studentAges[i] % 2 == 0) {
//         console.log(studentAges[i]);
//     }
// }



/** Functions*/
// Ex 8 

//### First approach ###
// studentAges.sort(function(a,b){return a - b})
// console.log(studentAges[0]);

//### Second approach ###
// var min = 1000;
// for(let i = 0; i < studentAges.length; i++) {
//     if(studentAges[i] < min) {
//         min = studentAges[i];
//     }
// }
// console.log("The lowest number in the array studentAges is: " + min);


// Ex 9

//### First approach ###
// studentAges.sort(function(a,b){return b-a});
// console.log(studentAges[0]);

//### Second approach ###
// var max = 1;
// for (let i = 0; i < studentAges.length; i++) {
//     if(studentAges[i] > max) {
//         max = studentAges[i];
//     }
// }
// console.log("The biggest number in the array studentAges is: " + max);


// Ex 10

const myArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
function arrNum(array, index) {
    return array[index];
}
console.log(arrNum(myArray,1));
