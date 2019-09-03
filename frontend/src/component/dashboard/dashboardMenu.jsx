import React from 'react'
import Icon from '../../common/templates/icon/icon'
import { NavLink } from 'react-router-dom'


export default props => (

    <nav className="navbar is-pulled-right " role="navigation" aria-label="main navigation">
        <div className="navbar-item">
            <div className="buttons ">
            <NavLink to={`/Ficha/`} className="button is-small is-primary">
                <Icon icon='add-circle-outline' /><span>Ficha</span>
            </NavLink> 
               
                {/*<Button path='teste' icon='add-circle-outline' label='Mesa' classButton='is-small is-info' />*/}
            </div>
        </div>
    </nav>
    
)

