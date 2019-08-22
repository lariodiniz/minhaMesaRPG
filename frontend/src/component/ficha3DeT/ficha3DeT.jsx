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
        
        let _ficha = {..._Modelo }
        _ficha.sistemaId = props.idSistema
        this.state = {modelo: _ficha}

    }

    primeiro_passo(nome, pontos){
        let _ficha = {...this.state.modelo }
        _ficha.passo = 1
        _ficha.ficha.nome = nome
        _ficha.ficha.pontos = pontos
        this.setState( {...this.state, modelo:_ficha})
    }

    render() {
        let passo  = this.state.modelo.passo;

        if (passo === 0){
            return <Conceito proximoPasso={this.primeiro_passo.bind(this)} />
        }
        else
        {
            return (
                <section className='section'>
                    <div className='container'>
                        <div className="columns">
                            <div className="column">
                                <p><strong>Nome: </strong>{this.state.modelo.ficha.nome}</p>
                            </div>
                            <div className="column">
                                <p><strong>Pontos: </strong>{this.state.modelo.ficha.pontos}</p>
                            </div>
                        </div>
                    </div>                    
                    
                </section> 
            )
        }

    }
}

export default Ficha3DeT