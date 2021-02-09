/*

    Higher order functions are simple. They look complicated but they really aren't.

    There are two different types of higher order functions:

    function apply (x, variable) {
        x(variable);
    }

    and

    function equals (variable) {
        return function (test) {
            return test === variable;
        }
    }

    In other words, if a function takes a function as parameter, or a function returns a function, that function
    is considered of a higher order.

 */


/*

    1. Create a function that makes a constant function of a value.

    const myfun = fun(1);
    console.log(myfun()) // logs 1

 */

function fun ( value ) {
    return const
}

/*

    2. Create an object or class that holds a list of listeners that can be called:

    const repository = ...

    repository.addListener(() => console.log('hello'));
    repository.addListener(() => console.log('world'));
    repository.inform(); // logs hello & world because there are two listeners

 */

