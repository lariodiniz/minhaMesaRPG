import React from 'react'
import './appLogin.css'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Personagens from '../personagens/personagens'
import Mesas from '../mesas/mesas'
import Cadastro from '../cadastro/cadastro'
import Ficha from '../ficha/ficha'


import Menu from '../menuLeft/menuLeft'

export default props => (
    <div className="columns">
        <div className='column is-narrow'>
            <div class="box_menu">
                <Menu />            
            </div>
        </div>
        <div className='column'>
            <Switch>
                <Route exact path='/Dashboard' component={Dashboard} />   
                <Route exact path='/Personagens' component={Personagens} />  
                <Route exact path='/Mesas' component={Mesas} />
                <Route exact path='/Cadastro' component={Cadastro} />
                <Route exact path='/Ficha' component={Ficha} />
                
                <Redirect from='*' to='/Dashboard' />
            </Switch> 
        </div>
    </div>
)