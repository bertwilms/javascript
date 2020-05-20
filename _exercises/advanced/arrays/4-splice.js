/*

    Splice is a powerful function that allows you to work with arrays, adding, removing stuff.

    Pay attention! splice is MUTABLE.

 */

const list = [1,2,3,4];

/*
    1. Add the number zero as the first element of the array
 */

list.unshift (0);
console.log ( list );
/*

    2. Remove the last element of the array

 */
list.splice(-1, 1);
console.log ( list );
/*

    3. Add [4, 5] to the array

 */
list.push(4,5);
