import React from 'react'
import Menu from './dashboardMenu'
import Mesas from '../mesas/mesas'
import Personagens from '../personagens/personagens'

import './dashboard.css'


export default props => (        
        <React.Fragment>
                <main className='container '>
                        <Menu />
                        <Personagens /> 
                        <Mesas />
                                          
                </main>
        </React.Fragment>
    
)

