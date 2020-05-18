
/*

    Use the following list for the exercises

 */

const list = [1,2,3,4,5,6];

/*

    1. Use a for loop to log every item in the array

 */
for ( let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

/*

    2. Use a for loop to filter all even numbers from the array

 */

const even = [];
for ( let i = 0; i < list.length;i++){
    if ( list[i]%2 === 0 ){
        even.push(list[i]);
    }
}
console.log ( "de even nummers zijn ", even) ;

/*

    3. Use a for loop to square every item in the even list.

 */
console.log ( "====================") ;

const squared = [];

for ( let i=0; i < even.length;i++) {
    squared.push(Math.pow(even[i], 2));
}
console.log(squared);
