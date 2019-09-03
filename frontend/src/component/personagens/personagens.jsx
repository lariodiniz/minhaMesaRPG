import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { constantes } from '../../constants'

import Painel from '../painel/painel'
import ItemPainel from '../painel/itemPainel'


class Personagens extends Component {
    
    constructor(props) {
        super(props)
        this.state = {personagens: []}
    }

    componentWillMount(){
        const { user } = this.props.auth

        axios.get(`${constantes.API_URL}/api/personagens/${user.user_id}`).then((resp) =>{
            this.setState( {...this.state, personagens:resp.data})
        })
    }

    _render_personagens(){
        
        return this.state.personagens.map(personagem =>{
            
            return  <ItemPainel key={personagem.id} 
                title={personagem.name} 
                description={personagem.description} 
                system={personagem.system}
                slug={personagem.slug}
                />
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


const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps, null)(Personagens)

