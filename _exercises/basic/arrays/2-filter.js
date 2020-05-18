
/*

    Use the following list for the exercises

 */

const list = [1,2,3,4,5,6];

/*

    1. Use the filter method to filter all even numbers from the array

 */
const isEven = (number) => number % 2 === 0 ;

const even = list.filter(isEven);

console.log ( "the even numbers are " + even) ;

