import React, { memo } from 'react'
import { CharacterHeader, CharacterTitle, Grid, GridItem, Typography } from './UI/Elements';
import {object} from 'prop-types';
import { CharacterProfile } from './CharacterProfile';

const Character = ({character}) => {
  return (
    <>
      <CharacterHeader>
        <CharacterTitle>
          {character.Name}
        </CharacterTitle>
        <CharacterProfile character={character}/>
      </CharacterHeader>
      <h2>Movies ({character.Films.length})</h2>
      <Grid>
        {character.Films.map((film, index)=>{
          return (<GridItem className='card' key={index}>
            <h4><b>{film.Title}</b></h4>
            <Typography><b>Director :</b>{film.Director}</Typography> 
            <Typography><b>Producer :</b>{film.Producer}</Typography> 
            <Typography><b>Release Date :</b>{film["Release Date"]}</Typography>   
          </GridItem>)
        })}
      </Grid>
    </>
  )
}
Character.propTypes = {
    character: object.isRequired
}
export default memo(Character);