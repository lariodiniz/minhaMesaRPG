import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../auth/authActions'

import './menuLeft.css'
import MenuItem from './menuItem'
import Icon from '../../common/templates/icon/icon'
import If from '../../common/utils/if'

class MenuLeft extends Component {

    constructor(props) {
        super(props)
        let windowWidth = window.innerWidth;           
        this.state = { menu_active: windowWidth > 600 }             
    }
    Logoff() {        
        const { logout } = this.props
        logout()
    }

    is_mobile(){        
        let windowWidth = window.innerWidth;   
        return windowWidth <= 600 
    }

    is_menu_active(){        
        return this.state.menu_active;
    }    

    activeMenu(){
        this.setState({...this.state, menu_active:!this.state.menu_active }) 
    }

    render() {
        return (
            <React.Fragment>
                <If test={this.is_mobile()}>
                    <span onClick={() => this.activeMenu()} 
                        className={`navbar-burger`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>  
                </If>
                <If test={this.is_menu_active()}>
                    <aside className={`menu`}>
                        <p className="menu-label">Minha Mesa RPG</p>
                        <ul className="menu-list">
                            <MenuItem path='Dashboard' label='Dashboard' icon='browsers'/>
                            <MenuItem path='Personagens' label='Personages' icon='contacts'/>
                            {/*<MenuItem path='Mesas' label='Mesas' icon='paper'/>*/}
                        </ul>
                        <p className="menu-label">Geral</p>
                        <ul className="menu-list">
                            {/*<MenuItem path='Cadastro' label='Cadastro' icon='person'/>*/}
                            <a href='/' onClick={() =>this.Logoff()}>
                            <Icon icon='home' /><span>Sair</span>
                                </a>
                        </ul>  
                    </aside>
                </If>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout },dispatch)
export default connect(null, mapDispatchToProps)(MenuLeft)