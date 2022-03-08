import axios from 'axios';

export const getCharacters = async (req, res, next) => {
  const { id } = req.params;
  try {
    axios.get(`https://swapi.dev/api/people/${id}`)
      .then(initial => {
        axios.all(
          [initial.data.homeworld, `https://swapi.dev/api/species/${id}`, ...initial.data.films]
            .map((endpoint) => axios.get(endpoint))
        ).then(
          axios.spread((...responses) => {
            const responsePeople = initial.data;
            const responsePlanet = responses[0].data;
            const responseSpecie = responses[1].data;
            const payload = {
              Name: responsePeople.name,
              Height: responsePeople.height,
              Mass: responsePeople.mass,
              'Hair Color': responsePeople.hair_color,
              'Skin Color': responsePeople.skin_color,
              Gender: responsePeople.gender,
              'Birth Year': responsePeople.birth_year,
              'Home Planet': {
                Title: responsePlanet.name,
                Terrain: responsePlanet.terrain,
                Population: responsePlanet.population
              },
              Species: {
                Name: responseSpecie.name,
                'Average LifeSpan': responseSpecie.average_lifespan,
                Classification: responseSpecie.classification,
                Language: responseSpecie.language,
              },
              Films: []
            };
            for (let i = 2; i < initial.data.films.length+2; i++) {
              payload.Films.push({
                Title: responses[i].data.title,
                Director: responses[i].data.director,
                Producer: responses[i].data.producer,
                'Release Date': responses[i].data.release_date
              });
            }
            res.json(payload);
          })
        ).catch(() => {
          res.status(404).send('Not found');
        });
      }).catch(() => {
        res.status(404).send('Not found');
      });
  } catch (error) {
    res.status(500).send('Failed to perform query');
  }
};
