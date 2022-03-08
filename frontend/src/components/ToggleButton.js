import React from 'react'
import {Button, Icon} from './UI/Elements';
import { func, string } from 'prop-types';
import empire from '../assets/icons8-empire-50.png';
import rebel from '../assets/icons8-rebel-50.png';

const ToggleButton = ({theme, toggleTheme}) => {
  return (
    <Button style={{height:'fit-content'}} onClick={toggleTheme}>
        {theme==='light'?<Icon src={rebel}/>:<Icon src={empire}/>}
    </Button>
  )
}
ToggleButton.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}
export default ToggleButton