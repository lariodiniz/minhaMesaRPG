import React, { Component } from 'react'
import Conceito from './conceito'

const _Modelo = {
    sistemaId : 0,   
    passo: 0, 
    ficha : {
        nome: '',
        pontos: '',
        caracteristicas: {
            forca : 0,
            habilidade: 0,
            resistencia: 0,
            armadura: 0,
            poderDeFoco: 0,
            pontosDeVida: 0,
            pontosDeMagia:0,
            pontosDeExperiencia:0
        },
        vantagens: [],
        desvantagens: [],
        tiposDeDano: [],
        magiasConhecidas: [],
        dinheiroEItens: [],
        Historia: ''
    }
}


class Ficha3DeT extends Component {


    constructor(props) {
        super(props)
        
        let _ficha = _Modelo
        _ficha.sistemaId = props.idSistema
        this.state = {ficha: _ficha}

    }

    primeiro_passo(nome, pontos){        
        let _ficha = this.state.ficha
        _ficha.passo = 1
        _ficha.ficha.nome = nome
        _ficha.ficha.nome = pontos
        this.setState( {...this.state, ficha:_ficha.passo})
    }

    render() {
        let passo  = this.state.ficha.passo;
        if (passo === 0){
            return <Conceito proximoPasso={this.primeiro_passo.bind(this)}
                    nome={this.state.ficha.nome}
                    pontos={this.state.ficha.pontos}
                    />
        }
        else
        {
            return (
                <React.Fragment >
                    <p>{this.state.ficha.sistemaId}</p>
                    <p>{this.state.ficha.nome}</p>
                </React.Fragment>
            )
        }

    }
}

export default Ficha3DeT