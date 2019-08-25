import React, { Component } from 'react'
import Panel from './panel'
import Input from '../../common/templates/input/input'

class Conceito extends Component {

    constructor(props){
        super(props);
        this.state = props.state
    }    

    proximo() {
        let nome = this.state.modelo.ficha.nome ? this.state.modelo.ficha.nome : ''
        let pontos = this.state.modelo.ficha.pontos ? this.state.modelo.ficha.pontos : 0
        
        if (nome === ''){
            this.props.mensagem('Informe um nome para o seu personagem!')
        }
        else if (pontos <=0 ){
            this.props.mensagem('Informe os pontos para o seu personagem!')
        }
        else {
            this.props.proximoPasso(this.state)
        }

        

    }
    
    changeNome(event){ 
        let state = {...this.state}
        state.modelo.ficha.nome = event.target.value
        state.modelo.mensagem = ''
        this.props.setaModelo(state)
        
    }

    changePontos(event){   
        let state = {...this.state}
        state.modelo.ficha.pontos = parseInt(event.target.value)
        state.modelo.mensagem = ''
        this.props.setaModelo(state)
    }  


    render() {

        let nome = this.state.modelo.ficha.nome
        let pontos = this.state.modelo.ficha.pontos
    return (       
        <Panel 
            titulo='Conceito'
            state={this.state} 
            passoAnterior={this.props.passoAnterior}
            proximoPasso={this.props.proximoPasso}>
            <div className="column is-four-fifths">
                <Input  id='nome' nome='Nome'  placeholder='escreva o nome' 
                    valor={nome}
                    onChange={this.changeNome.bind(this)}
                    />
            </div>
            <div className="column">
            <Input  id='pontos' nome='Pontos'  type='number'
                    valor={pontos}
                    onChange={this.changePontos.bind(this)}
                    />                                        
            </div> 
        </Panel> 
    
)
}    
}


export default Conceito

