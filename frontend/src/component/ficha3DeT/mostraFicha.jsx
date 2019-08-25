import React, { Component } from 'react'
import Conceito from './conceito'
import Caracteristicas from './caracteristicas'
import { modelo } from './modelo'
import './ficha3DeT.css'




class MostraFicha extends Component {


    constructor(props) {
        super(props)
        this.state = props.state
    }

    componentWillMount(){        
        this.setState(this.props.state)        
    }


    
    render(){
        return (

                <div className="container ficha">
                    <h1 className="title title3DEt">{`3D&T`}</h1>
                    <div className="section">
                        <div className="columns">
                            <div className="column is-three-fifths">
                                <p><strong>Nome: </strong>{this.state.modelo.ficha.nome}</p>
                            </div>
                            <div className="column">
                                <p><strong>Pontos: </strong>{this.state.modelo.ficha.pontos}</p>
                            </div>                                
                        </div>
                        <div className="columns">                                        
                            <div className="column">
                                <div className="columns">                                        
                                    <div className="column">                                            
                                        <h2 className="title3DEt">Caracteristicas</h2>
                                        <div className="columns">
                                            <div className="column is-three-fifths">
                                                <strong>Força: </strong>
                                            </div>
                                            <div className="column">
                                                <p>{this.state.modelo.ficha.caracteristicas.forca}</p>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-three-fifths">
                                                <strong>Habilidade: </strong>
                                            </div>
                                            <div className="column">
                                                <p>{this.state.modelo.ficha.caracteristicas.habilidade}</p>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-three-fifths">
                                                <strong>Resistência: </strong>
                                            </div>
                                            <div className="column">
                                                <p>{this.state.modelo.ficha.caracteristicas.resistencia}</p>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-three-fifths">
                                                <strong>Armadura: </strong>
                                            </div>
                                            <div className="column">
                                                <p>{this.state.modelo.ficha.caracteristicas.armadura}</p>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-three-fifths">
                                                <strong>Poder de Fogo: </strong>
                                            </div>
                                            <div className="column">
                                                <p>{this.state.modelo.ficha.caracteristicas.poderDeFoco}</p>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-three-fifths">
                                                <strong>Pontos de Vida: </strong>
                                            </div>
                                            <div className="column">
                                                <p>{this.state.modelo.ficha.caracteristicas.pontosDeVida}</p>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="column is-three-fifths">
                                                <strong>Pontos de Magia: </strong>
                                            </div>
                                            <div className="column">
                                                <p>{this.state.modelo.ficha.caracteristicas.pontosDeMagia}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">                                        
                                    <div className="column">                                            
                                        <h2 className="title3DEt">Vantagens</h2>
                                        <div className="columns">
                                            <div className="column">
                                                <p></p>
                                            </div>
                                        </div>                                                    
                                    </div>                                                
                                </div>
                                <div className="columns">                                        
                                    <div className="column">                                            
                                        <h2 className="title3DEt">Desvantagens</h2>
                                        <div className="columns">
                                            <div className="column">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>                                                
                                </div>                                            
                            </div>
                            <div className="column">
                                <div className="columns">                                        
                                    <div className="column">                                            
                                        <h2 className="title3DEt">Tipos de Dano</h2>
                                        <div className="columns">
                                            <div className="column">
                                                <p></p>
                                            </div>
                                        </div>                                                    
                                    </div>
                                </div>
                                <div className="columns">                                        
                                    <div className="column">                                            
                                        <h2 className="title3DEt">Magias conhecidas</h2>
                                        <div className="columns">
                                            <div className="column">
                                                <p></p>
                                            </div>
                                        </div>                                                    
                                    </div>
                                </div>
                                <div className="columns">                                        
                                    <div className="column">                                            
                                        <h2 className="title3DEt">Dinheiro e itens</h2>
                                        <div className="columns">
                                            <div className="column">
                                                <p></p>
                                            </div>
                                        </div>                                                    
                                    </div>
                                </div>
                                <div className="columns">                                        
                                    <div className="column">                                            
                                        <h2 className="title3DEt">História</h2>
                                        <div className="columns">
                                            <div className="column">
                                                <p></p>
                                            </div>
                                        </div>                                                    
                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </div>
                </div>  
        )
    }

}

export default MostraFicha