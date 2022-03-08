import React from 'react'
import { object } from 'prop-types'
import { Typography, Grid, GridItem } from './UI/Elements'
export const CharacterProfile = ({ character }) => {
  return (
    <Grid>
        <GridItem>
            <Typography>Gender: {character.Gender}</Typography>
            <Typography>Hair color: {character["Hair Color"]}</Typography>
            <Typography>Borned: {character["Birth Year"]}</Typography>
            <Typography>Height: {character.Height} | Mass: {character.Mass}</Typography>
            <Typography>Specie: {character.Species.Name} | Average Lifespan: {character.Species["Average LifeSpan"]}</Typography>
            <Typography>Classification: {character.Species.Classification} | Language: {character.Species.Language}</Typography>
        </GridItem>
        <GridItem>
            <Typography>Home planet: {character["Home Planet"].Title}</Typography>
            <Typography>Population: {character["Home Planet"].Population}</Typography>
            <Typography>Terrain: {character["Home Planet"].Terrain}</Typography>
        </GridItem>
    </Grid>
  )
}
CharacterProfile.propTypes = {
  character: object.isRequired,

}
