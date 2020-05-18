/*

    Use the following list for the exercises

 */

const orders = [
    { id: 1, paid: true, customer: { isMale: true }, amount: 123 },
    { id: 2, paid: false, customer: { isMale: false }, amount: 321 },
    { id: 3, paid: true, customer: { isMale: true }, amount: 456 },
    { id: 4, paid: true, customer: { isMale: false }, amount: 323 },
    { id: 5, paid: false, customer: { isMale: false }, amount: 212 },
    { id: 6, paid: true, customer: { isMale: true }, amount: 145 },
];

/*

    1. use the every method to check if every order is paid?

 */
 const isPaid = ( order ) => order.paid === true;

 const isEveryOrderedPaid = orders.every(isPaid);

 console.log("Was every order paid :" + isEveryOrderedPaid);


/*

    2. use the some method to check if some males (filter) paid for their order

 */
const isMale = ( order ) => order.customer.isMale === true ;

console.log ( "Is there an order thas was paid by a male customer ? " + orders.filter(isMale).some(isPaid) );

/*

    3. calculate how much needs to be paid (where paid = false)

 */

