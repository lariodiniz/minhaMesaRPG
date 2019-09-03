import React from 'react'
import {  Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'


import Index from '../index/index'
import Auth from '../auth/auth'
import VisualizaPersonagem from '../visualizaPersonagem/visualizaPersonagem'

export default props => (     
       <HashRouter>
           <Route exact path='/' component={Index} />
           <Route exact path='/Login' component={Auth} />

           <Route path='/Personagem/:system/:id' component={VisualizaPersonagem} />

           <Redirect from='*' to='/' />
       </HashRouter>  
)



