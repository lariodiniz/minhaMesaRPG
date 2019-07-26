import React from 'react'
import './appLogin.css'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Personagem from '../personagem/personagem'
import Mesa from '../mesa/mesa'
import Cadastro from '../cadastro/cadastro'


import Menu from '../menuLeft/menuLeft'

export default props => (
    <div className="columns">
        <div className='column is-narrow'>
            <div class="box_menu">
                <Menu />            
            </div>
        </div>
        <div className='column'>
            <section className='section'>
                
                <Switch>
                    <Route exact path='/Dashboard' component={Dashboard} />   
                    <Route exact path='/Personagens' component={Personagem} />  
                    <Route exact path='/Mesas' component={Mesa} />          
                    <Route exact path='/Cadastro' component={Cadastro} />          
                    <Redirect from='*' to='/Dashboard' />
                </Switch> 
                
            </section>
        </div>
    </div>
)