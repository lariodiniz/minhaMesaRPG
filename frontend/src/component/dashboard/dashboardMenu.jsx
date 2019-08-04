import React from 'react'
import Button from '../../common/templates/buttonNav/buttonNav'


export default props => (

    <nav className="navbar is-pulled-right " role="navigation" aria-label="main navigation">
        <div className="navbar-item">
            <div className="buttons ">
                <Button path='Ficha' icon='add-circle-outline' label='Ficha' classButton='is-small is-primary' />
                {/*<Button path='teste' icon='add-circle-outline' label='Mesa' classButton='is-small is-info' />*/}
            </div>
        </div>
    </nav>
    
)

