/*

    Numbers in JavaScript are a bit tricky.

    In most programming languages there is a type difference between Integers and Floats, but JavaScript does not
    make that distinction, they are all Numbers.

 */

const integer = 1;
const float = 1.456;
const infinite = Infinity;
const negative = Number.NEGATIVE_INFINITY;

const maximum = Number.MAX_VALUE;
const maximumSafe = Number.MAX_SAFE_INTEGER;

/*


    1. Parse the following strings to a Number

 */

const integerString = "1234";
const floatString = "12.34";

console.log ( maximumSafe);
console.log ( integerString);
console.log ( floatString);
console.log ( maximum);
