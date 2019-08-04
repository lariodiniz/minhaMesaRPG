import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Painel from '../painel/painel'
import ItemPainel from '../painel/itemPainel'

const MESAS_ = [
    {'nome': 'Mesa 01', 'description': 'descrição da mesa 1'},
    {'nome': 'Mesa 02', 'description': 'descrição da mesa 2'},
    {'nome': 'Mesa 03', 'description': 'descrição da mesa 3'},
    {'nome': 'Mesa 04', 'description': 'descrição da mesa 4'},
]

class Mesas extends Component {
    
    constructor(props) {
        super(props)
        this.state = {mesa: MESAS_}
    }

    _render_mesas(){
        
        return this.state.mesa.map(mesa =>{            
            
            return  <ItemPainel title={mesa.nome} description={mesa.description} />
        }
                    
        )
        
    }

    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        return (
            <Painel title='Mesas'>
                <div className='columns'>
                    
                    {this._render_mesas()}                        
                    
                </div>
            </Painel>
        )
    }
}


//const mapDispatchToProps = dispatch => bindActionCreators({ login, signup },dispatch)
//export default connect(null, mapDispatchToProps)(Mesas)

export default Mesas