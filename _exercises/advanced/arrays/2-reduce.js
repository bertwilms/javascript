/*

    Introducing reduce, but still working on lists

 */

const customers = require('../../../data/customers');

/*

    1. Display the list of customers as an object that looks like this { name: balance }

    {
        "Marcie Pardilla": "$1,198.67",
        ...
    }

    Use the reduce method
 */
console.log  ( "  1. Display the list of customers as an object that looks like this { name: balance }") ;

const customerObject = customers.reduce( (obj, customer) => {
    obj[customer.name.first + " " + customer.name.last] = customer.balance ;
    return obj ;
},{}) ;

console.log ( customerObject) ;

/*

    2. Display the full names of all the males that are over 30

 */

console.log  ( " 2. Display the full names of all the males that are over 30") ;
const isAbove30 = (item) => item.age > 30 ;
const isMale = (item) => item.isMale ;
const asFullName = (person) => person.name.last + " " + person.name.first ;
console.log ( customers
                .filter(isAbove30)
                .filter(isMale)
                .map(asFullName))  ;

/*

    3. Are all females over 30?

 */
console.log ( "3. Are all females over 30?", customers.every(isAbove30));

const hasblueeyes = ( customer ) => customer.eyeColor === "blue" ;
/*

    4. Are there some females with blue eyes?
 */
console.log ( "4. Are there some females with blue eyes?", customers.some(hasblueeyes)) ;


/*

    5. Get customers over 25 that are male and display them in one object as { _id: name }

 */
console.log ( "5. Get customers over 25 that are male and display them in one object as { _id: name }");
const isAbove25 = ( customer) => customer.age > 25 ;
const customerObject2 =
    customers
        .filter(isAbove25)
        .filter(isMale)
        .reduce((obj, customer) => {
            obj[customer._id] = customer.name.last + " " + customer.name.first ;
     return obj ;
 },{}) ;

console.log ( customerObject2) ;
