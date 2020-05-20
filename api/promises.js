const axios = require('axios').default ;

const collectData = (response) => response.data ;
const get = (url) => axios.get(url).then(collectData) ;
const asPlanetName = (planets) => planets.name ;

//******************************************************************
//maak een functie die een planet ophaalt (planet id als parameter)
//******************************************************************
const getNamePlanetbyId = (planetid) => get(`https://swapi.dev/api/planets/${planetid}`)
                               .then(asPlanetName) ;

getNamePlanetbyId(1)
    .then(console.log);
//  getNamePlanetbyId(4)
//     .then(console.log);


//***************************************************************************************************
// maak een functie die de naam van de homeworld van een person ophaalt (person id als parameter)
//***************************************************************************************************
const asHomeWorld = (person) => person.homeworld ;

const getNamePlanetbyUrl = (url) => get ( url)
    .then(asPlanetName) ;

const getPerson = (personid) => get ( `https://swapi.dev/api/people/${personid}`);

const getHomeWorldPerson = (personid) => getPerson(personid)
    .then(asHomeWorld)
    .then(getNamePlanetbyUrl);

  getHomeWorldPerson(1)
      .then(console.log);

//***************************************************************************************************
// maak een functie die de namen van alle films ophaalt waarin de homeworld van een person voorkomt (person id als parameter)
//***************************************************************************************************
const asFilmName = ( films ) => films.title ;

getMoviesForHomeworldPerson = (personid) =>
    getPerson(personid)
        .then(asHomeWorld)
        .then((planeturl) => get(planeturl))
        .then((planet) => Promise.all(planet.films.map(get)))
       .then((films) => films.map (asFilmName))
;

getMoviesForHomeworldPerson(1)
    .then(console.log);

//***************************************************************************************************
// maak een functie die de totale massa van de persons in een film berekent (film id als parameter)
//***************************************************************************************************
getMovie = ( filmid ) => get ( `http://swapi.dev/api/films/${filmid}`) ;
const asPersonMass = ( person ) => parseInt(person.mass) ;

getTotalMassOfPersonsInFilm = ( filmid ) =>
    getMovie ( filmid )
        .then((film) => Promise.all(film.characters.map(get)))
        .then((characters) => characters.map(asPersonMass ))
         .then((mass) => mass.reduce(function( accumulator, currentValue) {
             if ( isNaN(currentValue) ) {
                 return accumulator ;
             } else {
                  return accumulator + currentValue;
             }
         }, 0))
        ;

getTotalMassOfPersonsInFilm(1)
    .then( (total) => console.log("Total mass of all the characters is", total));

