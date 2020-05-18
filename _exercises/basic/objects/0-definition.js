/*

    After functions, objects are one of the most important building blocks in javascript

    They behave like maps => key, value and they can have mixed content!

 */

const frodo = {
    name: 'Frodo',
    age: 32,
    hobbies: ['walking', 'destroying rings'],
    handler: function () {
        return 'I do stuff, I guess';
    }
};

/*

    Note that JSON resembles javascript object, but it requires the keys (and values in case of strings) to be encapsulated between double quotes (" ")

 */

const Gandalf = {
    "name": "Gandalf",
    "age": 99999,
    "hobbies": ["making fireworks", "battling balrogs"],
    "handler": function () {
        return "Hi I'm back! I'm now called whitey"
    }
};


console.log ( "Hoi, my name is " , Gandalf.name, " and .. " , Gandalf.handler(), " and one of my hobbies is ", Gandalf.hobbies[0]);
console.log ( "all my hobbies are ", Gandalf.hobbies.join(", ") ) ;
/*

    This notation has an interesting feature. Using " " helps to create otherwise illegal keys. Note that you need to use
    the double quote accessor if you do these kind of things... it's useful to know, but only use it in dire need!

 */

const Bilbo = {
    "name": "Bilbo",
    "his age": 111
};

console.log('Bilbo: ', Bilbo["his age"]);

