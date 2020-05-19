/*

    You can do some fun stuff with arrays, but did you know you can also do this with objects? It requires a bit more
    tweaking, but with the Object.keys, Object.values, and Object.entries method, you can map the object to a list for you to use! If you
    want to convert your list back to an object... just use the reduce method (see advanced arrays for exercises)!

 */

const CharacterMap = {
    4325432: {name: 'Bilbo', age: 111},
    879437: {name: 'Gandalf', age: 9999},
    9347282: {name: 'Frodo', age: 32},
    3784298: {name: 'Sam', age: 32},
    849237: {name: 'Aragorn', age: 67},
    8934857: {name: 'Arwen', age: 89},
    9328949: {name: 'Sauron', age: Infinity}
};

/*

    1. Display a comma separated list of names on the screen

 */
console.log ( "Characters ") ;
console.log ( "===========");
const asName = (item) => item.name ;
console.log ( Object.values(CharacterMap).map(asName).join ( ", "));


/*

    2. Get a list of the identifiers of the characters

 */
console.log ( "Identifiers ") ;
console.log ( "===========");
//const characterIdentifies = Object.values((CharacterMap));
console.log (Object.keys(CharacterMap));
//console.log ( characterIdentifies);
//console.log ( Object.getOwnPropertyNames(CharacterMap));



/*

    3. Get the names in a comma separated list of every character older than 50

 */
console.log ( "Characters older than 50") ;
console.log ( "========================") ;
const isAbove50 = (item) => item.age > 50 ;
console.log ( Object.values(CharacterMap).filter(isAbove50).map(asName).join ( ", "));

/*

    4. Write a search function that takes a partial string as input (e.g. "Fro") and returns every character starting with that string

 */

console.log ( "\nSearch by partial string") ;
console.log ( "========================") ;

const searchByName = function ( searchString) {
const hasString = (item) => item.name.indexOf(searchString) !== -1 ;
    return ( Object.values(CharacterMap).filter(hasString).map(asName).join(", ")) ;
}

console.log ( searchByName("Fro")) ;
console.log ( searchByName("Ar")) ;
console.log ( searchByName("orn")) ;

