import React from 'react'
import './appLogin.css'
import {  Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'
import Dashboard from '../dashboard/dashboard'
import Personagens from '../personagens/personagens'
import Mesas from '../mesas/mesas'
import Cadastro from '../cadastro/cadastro'
import Ficha from '../ficha/ficha'
import VisualizaPersonagem from '../visualizaPersonagem/visualizaPersonagem'


import Menu from '../menuLeft/menuLeft'

export default props => (
    <div className="columns">
        <div className='column is-narrow'>
            <div className="box_menu">
                <Menu />            
            </div>
        </div>
        <div className='column'>
            <HashRouter>
                <Route exact path='/Dashboard/' component={Dashboard} />   
                <Route exact path='/Personagens/' component={Personagens} />  
                <Route exact path='/Mesas/' component={Mesas} />
                <Route exact path='/Cadastro/' component={Cadastro} />
                <Route exact path='/Ficha/' component={Ficha} />
                <Route path='/Personagem/:system/:id' component={VisualizaPersonagem} />
                
                <Redirect from='*' to='/Dashboard' />
            </HashRouter> 
        </div>
    </div>
)