import React from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../icon/icon'


export default props => (        

    <NavLink to={props.path} className={`button ${props.classButton}`}>
            <Icon icon={props.icon} /><span>{props.label}</span>
    </NavLink>
    
)

