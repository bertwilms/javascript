/*

    One of the things that is annoying with JavaScript objects, is that they aren't locked... they are passed around by reference
    this means that if you change an object, other functions might be impacted causing unexpected behavior.

    In this exercise we will try to copy an object

 */

const toCopy = {
    "name": "Gandalf",
    "age": 99999,
    "hobbies": ["making fireworks", "battling balrogs"],
    "handler": function () {
        return "Hi I'm back! I'm now called whitey"
    },
    "attributes": {
        "strength": 4,
        "dexterity": 5,
        "intelligence": 9,
        "wisdom": 12,
        "charisma": 999
    }
};

console.log("::::::");
console.log ( toCopy);
/*

    Search the internet for how to do a decent copy... note that objects in objects also need to be copied... otherwise
    their references will still exist and even more unexpected behavior will occur.

 */
console.log(":::::: Copied object ");
const dstCopy = Object.assign({},toCopy );

console.log ( dstCopy );
