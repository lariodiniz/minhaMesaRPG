import React from 'react'
import { HashRouter } from 'react-router-dom'


/*
import Header from '../common/templates/header'
import SideBar from '../common/templates/sideBar'
import Footer from '../common/templates/footer'
import Messages from '../common/msg/messages'
*/
import Routes from './routes'

export default props => (
    <HashRouter>
        
            <Routes/>
        
    </HashRouter>
)