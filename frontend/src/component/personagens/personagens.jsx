import React, { Component } from 'react'

import Painel from '../painel/painel'
import ItemPainel from '../painel/itemPainel'

const MESAS_ = [
    {'nome': 'Personagem 01', 'description': 'descrição da Personagem 1'},
    {'nome': 'Personagem 02', 'description': 'descrição da Personagem 2'},
    {'nome': 'Personagem 03', 'description': 'descrição da Personagem 3'},
    {'nome': 'Personagem 04', 'description': 'descrição da Personagem 4'},    

]

class Personagens extends Component {
    
    constructor(props) {
        super(props)
        this.state = {mesa: MESAS_}
    }

    _render_personagens(){
        
        return this.state.mesa.map(mesa =>{
            return  <ItemPainel title={mesa.nome} description={mesa.description} />
        }
        )
        
    }

    render() {
        return (
            <Painel title='Personagens'>
                <div className='columns'>
                    
                    {this._render_personagens()}                        
                    
                </div>
            </Painel>
        )
    }
}


//const mapDispatchToProps = dispatch => bindActionCreators({ login, signup },dispatch)
//export default connect(null, mapDispatchToProps)(Mesas)

export default Personagens