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
// Showing list, but not with reduced
console.log  ( " ==========  without Reduce ===============") ;
const showFormatted = (customer) => customer.name.last + " " + customer.name.first + ": " + customer.balance  ;
console.log ( customers.map(showFormatted)) ;


console.log  ( " ==========  with Reduce ===============") ;
 let allCustomers = customers.reduce ( function (AllCustomers, customer) {
      return  AllCustomers + showFormatted(customer)  ;
 },{});
 console.log ( allCustomers) ;

console.log  (":::::::::::::::::::::::::");



/*

    2. Display the full names of all the males that are over 30

 */
console.log  ( " ==========  2. Display the full names of all the males that are over 30") ;
const isAbove30 = (item) => item.age > 30 ;
const isMale = (item) => item.isMale ;
console.log ( customers.filter(isAbove30 && isMale).map(showFormatted))  ;

/*

    3. Are all females over 30?

 */

/*

    4. Are there some females with blue eyes?

 */

/*

    5. Get customers over 25 that are male and display them in one object as { _id: name }

 */
