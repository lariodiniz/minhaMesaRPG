import React, { Component } from 'react'
import Panel from './panel'
import Input from '../../common/templates/input/input'

class ToquesFinais extends Component {

    constructor(props){
        super(props);
        this.state = props.state
    }    

    changeItens(event){ 
        let state = {...this.state}
        state.modelo.ficha.dinheiroEItens = event.target.value
        this.props.setaModelo(state)
        
    }

    changeHistoria(event){   
        let state = {...this.state}
        state.modelo.ficha.Historia = event.target.value
        this.props.setaModelo(state)
    }  

    changeTiposDeDano(event){   
        let state = {...this.state}
        state.modelo.ficha.tiposDeDano = event.target.value
        this.props.setaModelo(state)
    }  

    render() {

        let itens = this.state.modelo.ficha.dinheiroEItens
        let historia = this.state.modelo.ficha.Historia
        let tiposDeDano = this.state.modelo.ficha.tiposDeDano
    return (       
        <Panel 
            icon={this.props.icon}
            titulo='Toques Finais'
            state={this.state} 
            passoAnterior={this.props.passoAnterior}
            proximoPasso={() => this.props.proximoPasso(this.state)}>
            <div className="column">
            <div className="columns">
                    <div className="column">
                        <Input  id='' nome='tiposDeDano'  placeholder='escreva o tipo de dano' 
                         valor={tiposDeDano}
                            onChange={this.changeTiposDeDano.bind(this)}
                            />
                    </div>
                </div>                
                <div className="columns">
                    <div className="column">
                        <Input  id='itens' nome='Dinheiro e Itens'  placeholder='informe seus itens' 
                         valor={itens}
                            onChange={this.changeItens.bind(this)}
                            />
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <Input  id='historia' nome='História'  placeholder='escreva sua história' 
                         valor={historia}
                            onChange={this.changeHistoria.bind(this)}
                            />
                    </div>
                </div>

            </div>


        </Panel> 
    
)
}    
}


export default ToquesFinais

