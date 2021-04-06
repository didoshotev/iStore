import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FontAwIcon = ({icon, size, color, onClick}) => {

    return (
        <FontAwesomeIcon icon={icon} size={size} color={color} onClick={onClick}/>
    )
}

export default FontAwIcon