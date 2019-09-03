import React from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../../common/templates/icon/icon'

export default props => (
    <li> 
        <NavLink to={`/${props.path}`} activeClassName='is-active' id={props.id}>
            <Icon icon={props.icon} /><span>{props.label}</span>
        </NavLink>
    </li>
)