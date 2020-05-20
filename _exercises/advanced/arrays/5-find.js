/*

    Find

 */

const customers = require('../../../data/customers');

/*

    1. Find one customer based on his ID

 */

console.log ( customers.find(customers => customers._id === "5a9d032709e6bfcd4d5b6b3d"));
