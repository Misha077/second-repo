let names = ["misha", "sushil", "nidhi", "Sushil", "Misha", "mmisha"];
let number = [2, 5, 23, 423, 8, 3, 448, 434, 643,32, 22,];
let num = [2, 8, 448, 434, 32, 22,];
let fullName = 'This is my world';

/* Sorting */
//names.sort((i, j) => {
    //i = i.toUpperCase();
  //  j = j.toUpperCase();
    //if( i > j) return 1;
    //if( j > i) return -1;
   // return 0;
//});

//names.sort( (i, j) => i.toLowerCase().charCodeAt(0) - j.toLowerCase().charCodeAt(0));

/* filtering of even numbers values */
let filtered = number.filter((el) => el % 2 == 0);

/* Using map for square of all values in number array*/
let mapped = number.map((el) => el ** 2);

/* using reduce for sum of all values of number array */
let sum = number.reduce((acc, el) => {
    return acc + el;
}, 0);

/* using every */
//let res = number.some ((el) => el % 2 == 0);

/* using some */
//let res = num.every((el) => el % 2 == 0);