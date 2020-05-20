/*

    You've already been introduced to map, filer, every, and some. In these exercises we'll dive in deeper.

 */

const episodes = require('../../../data/south-park')._embedded.episodes;

/*

    1. Create a function that has as parameter a season and return all the episodes from that season

 */

  const getAllEpisodesBySeason = ( season ) => episodes.filter(function( episode) {
      return episode.season === season;
  });

  console.log ( getAllEpisodesBySeason ( 1 )) ;
/*

    2. create a function that has as parameter a season and return all the episodes from that season but only the names

 */
  const asName = ( episode ) => episode.name ;
  console.log ("only the names ") ;
  console.log ( getAllEpisodesBySeason(1).map(asName));
/*

    3. create a function that has as parameters a season and a partial string that returns every episode of that season
    that contains the string in its description

 */

/*

    4. create a function that has as parameter a season and a partial string that returns every episode of that season
    that contains the string in its name. Display the list of episodes as a comma separated list of names

 */

/*

    5. search an episode based on the season and the number of the episode.

 */
