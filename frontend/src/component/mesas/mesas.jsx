import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Painel from '../painel/painel'

const MESAS_ = [
    {'nome': 'Mesa 01', 'description': 'descrição da mesa 1'},
    {'nome': 'Mesa 02', 'description': 'descrição da mesa 2'},
    {'nome': 'Mesa 03', 'description': 'descrição da mesa 3'},
    {'nome': 'Mesa 04', 'description': 'descrição da mesa 4'},
]

class Mesas extends Component {
    
    constructor(props) {
        super(props)
        this.state = {loginMode: true}
    }

    _render_mesa(title, description){
        return (
            `<div className="card">
                <header className="card-header">
                    <p className="card-header-title">${title}</p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <p>${description}</p>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">Entrar</a>
                </footer>
            </div>`
        )
    }
    _render_mesas(){
        return MESAS_.map(mesa =>{
            let a = this._render_mesa(mesa.nome, mesa.description)
            console.log(a) 
            return a
        }            
        ).join()
        
    }

    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        return (
            <Painel title='Mesas'>
                <div className='columns'>
                    <div className='column is-two-fifths'>
                    {this._render_mesas()}                        
                    </div>
                </div>
            </Painel>
        )
    }
}


//const mapDispatchToProps = dispatch => bindActionCreators({ login, signup },dispatch)
//export default connect(null, mapDispatchToProps)(Mesas)

export default Mesas