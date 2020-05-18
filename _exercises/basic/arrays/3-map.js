
/*

    Use the following list for the exercises

 */

const list = [1,2,4,6];

/*

    1. Use the map method to square all even numbers from the array

 */
const isEven = (number) => number % 2 === 0 ;
const showAsSquared = (number) => Math.pow(number, 2) ;

const squared = list.filter(isEven).map(showAsSquared) ;

console.log ( squared );
