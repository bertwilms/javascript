/*

    1. the calculator

    As stated in exercise 0, javascript only handles one return statement. But you can return objects!

    You can also define functions inside a function. In this exercise we will create a calculator object when an
    input of two parameters is provided. Use an object to return an interface (object of functions)

 */


const calculator = function (x, y) {
  const add = () => x + y ;
  const subtract = () => x - y ;
  const multiply = () => x * y ;
  const divide = () => x / y ;

  return {
      add,
      subtract,
      multiply,
      divide
  };
};

 const calc = calculator(7,4);
 console.log('Add: ', calc.add());
 console.log('Subtract: ', calc.subtract());
 console.log('Multiply: ', calc.multiply());
 console.log('Divide: ', calc.divide());

/*

    2. parameters by reference

    Objects that are passed to a function are passed by reference, it is important to know this! This can cause
    unwanted side effects

 */

const x = { y: 1 };

const change = function (obj) {
    obj.y = 2;
};

change(x);

console.log(x);
