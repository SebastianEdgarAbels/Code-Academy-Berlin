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
//     //console.log(studentAges[i])
//     if(studentAges[i] % 2 == 0) {
//         console.log(studentAges[i]);
//     }
//     i++;
// }

/* Creating a new array called evenAges and then it is looping through the studentAges array and
pushing all the even numbers into the evenAges array. */
// let evenAges = [];
// for (let i = 0; i < studentAges.length; i++) {
//     console.log(studentAges[i])
//     if(studentAges[i] % 2 === 0) {
//         evenAges.push(studentAges[i]);
//     }
// }
// console.log(evenAges);



/** Functions */
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

// const myArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// function arrNum(array, index) {
//     return array[index];
// }
// console.log(arrNum(myArray,1));


// Ex 11

// let myArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// let sameNrArray = [];
//
// function repNr (arr) {
//     arr.sort(function (a, b) {return a - b});
//
//     for(let i = 0; i < arr.length; i++) {
//         //console.log(arr[i]);
//         if(arr[i] == arr[i+1]){
//             sameNrArray.push(arr[i]);
//         }
//     }
//     // let i = 0;
//     // while (i < arr.length) {
//     //     if (arr[i] == arr[i+1]){
//     //         sameNrArray.push(arr[i]);
//     //     }
//     //     i++;
//     // }
//     console.log(sameNrArray);
// }
// repNr(myArray);

// Ex 12

// let myColor = ["Red", "Green", "White", "Black"];
//
// function comeTogether(arr) {
//     console.log(arr.join(" | "));
// }
//
// comeTogether(myColor);


/** Strings */
// Ex 13

let number = "32443";
// let text = x.toString();

// function rev (smth) {
//     console.log(smth.toString()  // toString turns it into a String
//     .split("")                   // split a String into a an Array of substrings
//     .reverse()                   // reverse the elements in an Array
//     .join("")                    // joins all elements of an Array into a String
//     );
                                    // btw in JS methods written like those here are red one after another not like in PHP where we start with the last one inside to the last one outside
// }
// rev(number)

// for(let i = 0; i < text.length; i++) {
//     myArray.push(text[i]);
// }

// First approach charAt() -> The charAt() method returns the character at a specified index (position) in a string
// function stringRev(smth) {
//     //Creating a loop to find iterate each element from the string, depending on it's length
//     for (let i = smth.length - 1; i >= 0; i--) {
//         console.log(smth.charAt(i)) ;
//     }
// }
//
// stringRev(text);

// Second approach with property access -> If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// function stringRev(smth) {
//     for( let i = smth.length - 1; i >= 0 ; i--) {
//         console.log(smth[i]);
//     }
// }
// stringRev(text);



// Ex 14

// let x = "webmaster";
// let myArray = [];
//
// function alphaOrder (smth) {
//     // console.log(smth);
//     for (let i = 0; i < smth.length - 1; i++) {
//         myArray.push(smth.charAt(i));
//     }
//     let newArray = myArray.sort();
//     console.log(newArray.join(""));
// }
//
// alphaOrder(x);


// Ex 15

// let x = "prince of persia";

// function fstToUpper(smth) {
//     // split the sentence into an array of words
//     let sentenceArray = smth.split(" ");
//     // iterate over each word
//     for (let i = 0; i < sentenceArray.length; i++) {
//         // select the first letter and capitalite it and concatenate it with the rest of the string
//         sentenceArray[i] = sentenceArray[i][0].toUpperCase() + sentenceArray[i].substr(1);
//     }
//     // transform the array into string with the " " as separator
//     console.log(sentenceArray.join(" "));
// }
// fstToUpper(x);


// Ex 16
// let  x = "Web Development Tutorial";
// const sentenceArray = x.split(" ");
// // console.log('sentenceArray :>> ', sentenceArray);
// let word = "";
// // console.log('word :>> ', word.length);

// function longestWord(smth) {
//     // split the sentence into an array of words
//     for (let i = 0 ; i < smth.length ;i++) {
//         if(smth[i].length > word.length) {
//         // console.log('object :>> ', word.length);
//             word = smth[i];
//         }
//     }
//     console.log(word);
// }
// longestWord(sentenceArray);



// Finally the extra ones
// Ex 19

// function numberMultiplication () {
//     return 12 * 324;
// }

// console.log(numberMultiplication());


// Ex 20

// function againMultiplicationWithReturn ()  {
//     console.log(38 * 24);
// }

// againMultiplicationWithReturn();


// Ex 21

// function numMult (a, b) {
//     console.log(a * b);
// }

// numMult(15, 2);
// numMult(15, 40);
// numMult(1587, 2);


// Ex 22

// function triangleType (a, b, c) {
//     if(a == b && b == c) {
//         console.log('The Triangle is :>> Equilateral');
//     } else if( a == b && b != c && c > a) {
//         console.log('The Triangle is :>> Isosceles');
//     } else {
//         console.log('The Triangle is :>> Scalene');
//     }
// }

// triangleType(9,9,9);
// triangleType(8,8,9);
// triangleType(9,8,7);


// Ex 23

// const myArray = ["Javascript", "Mantra", "MathLab", "Abracadabra"];

// function replaceChar (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let letterReplace = arr[i].replace(/a+/g, "1");
//         console.log(letterReplace);
//     }
// }

// replaceChar(myArray);


// Ex 24

// const myArray = [3, 5, 6, 7, 10, 23, 62, 543, 12];
// let total = 0;
// let min = 10000;

// function sumArray (arr) {
//     for(let i = 0; i < arr.length; i++) {
//        total += arr[i];
//     }
//     console.log('The sum of all the elements in the array is :>> ', total);
// }

// function smallestNum (arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < min) {
//             min = arr[i]
//         }
//         console.log('the smalles Number in the array is :>> ', min);
//     }
// }

// sumArray(myArray);
// smallestNum(myArray);


// Ex 25

// const myArray = [1, 2, 8, 3, 2];
// let total = 0;

// function evenNumAdding (arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             total += arr[i];
//         }
//     }
//     console.log('The addition of the even number in the array is:>> ', total);
// }

// evenNumAdding (myArray);


// Ex 26

// const myArray = [1, 2, 8, 3, 2, 3, 4];
// let total = 0;

// function addingSamePositon (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(i % 2 == 0 && i != 0) {
//             console.log(arr[i]);
//             total += arr[i];
//         }
//     }
//     console.log('The addition of the elements of the array that are on an even index is:>> ', total);
// }

// addingSamePositon(myArray);


// Ex 27

// let num = 9;

// function evenNum (a) {
//     if(a % 2 != 0) {
//         a -= 1;
//         console.log(a);
//         for ( let i = 0; i <= a/2; i++ ) {
//             a -= 2;
//             console.log(a);
//         } 
//     } else {
//         for ( let i = 0; i <= a/2; i++ ) {
//             a -= 2;
//             console.log(a);
//         } 
//     }
// }

// evenNum(8);


// Ex 28

//  First approach
// function tellOdd(a, b) {
        // if(a > b) {
        //     let c = 0;
        //     c = a;
        //     a = b;
        //     b = a;
        // }
//     if (a % 2 == 0 && b % 2 != 0) {
//         console.log(a += 1);
//         for (let i = 0; i < Math.floor((b / 2) -1); i++) { 
//             console.log(a += 2);
//         }
//     } else if (a % 2 == 0 && b % 2 == 0) {
//         console.log(a += 1);
//         for (let i = 0; i < Math.floor((b / 2) -2); i++) {   
//             console.log(a += 2);
//         } 
//     } else if (a % 2 != 0 && b % 2 != 0) {
//         console.log(a);
//         for (let i = 1; i < b; i += 2) {
//             console.log(a += 2);
//         }
//     } else if (a % 2 != 0 && b % 2 == 0) {
//         console.log(a);
//         for (let i = 1; i < b - 1; i += 2) {
//             console.log(a += 2);
//         }
//     }
// }
// tellOdd(1, 27);

// Second approach

function tellOdd(a, b) {
    const myArray = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            if(i % 2 != 0) {
                myArray.push(i);
            }
        }
    } else {
        for (let i = b; i <= a; i++) {
            if(i % 2 != 0) {
                myArray.push(i);
            }
        }
    }
    console.log(myArray);
}

tellOdd(15, 3);
