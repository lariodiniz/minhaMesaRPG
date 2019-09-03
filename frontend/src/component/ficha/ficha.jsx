import React, { Component } from 'react'
import EscolherSistema from '../escolheSistema/escolheSistema'
import Ficha3DET from '../ficha3DeT/ficha3DeT'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'


class Ficha extends Component {
    
    constructor(props) {
        super(props)
        this.state = {sistema: {id:'', name:''}}
    }

    define_sistema(id, sist){
        this.setState( {...this.state, sistema:{id:id, name:sist}})
    }


    render() {
        let { sistema } = this.state;

        if (sistema.name === '') {
            return (
                <React.Fragment>
                    <br/>
                    <EscolherSistema click={this.define_sistema.bind(this)}/>
                </React.Fragment>                
            )
        }
        else{
            if (sistema.name === '3D&T') {
                return (

                    <Ficha3DET idSistema={sistema.id} />
                )    
            }
            else {
                return (

                    <p>Sistema Não configurado</p>
                )
            }
            
        }

    }
}

export default Ficha