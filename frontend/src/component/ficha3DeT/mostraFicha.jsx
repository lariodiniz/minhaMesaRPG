import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { constantes } from '../../constants'
import { NavLink } from 'react-router-dom'

import Button from '../../common/templates/button/button'




class MostraFicha extends Component {

    constructor(props) {
        super(props)
        this.state = props.state
    }

    componentWillMount(){        
        this.setState(this.props.state)        
    }

    render_vantagens(){
        let vantagens = this.state.modelo.ficha.vantagens ? this.state.modelo.ficha.vantagens : []
        return vantagens.map((vantagem) =>{            
            return  (
                <p key={vantagem.id}>{(vantagem.name+' ('+vantagem.cost+')')}</p>
                )
            })
    }

    render_desvantagens(){
        let desvantagens = this.state.modelo.ficha.desvantagens ? this.state.modelo.ficha.desvantagens : []
        
        return desvantagens.map((desvantagem) =>{            
            return  (
                <p key={desvantagem.id}>{(desvantagem.name+' ('+desvantagem.cost+')')}</p>
                )
            })
    }   
    
    render_magias(){
        let magias = this.state.modelo.ficha.magiasConhecidas ? this.state.modelo.ficha.magiasConhecidas : []
        
        return magias.map((magia) =>{            
            return  (
                <p key={magia.id}>{(magia.name)}</p>
                )
            })
    }

    acaoFicha(){
        let verbo = this.props.tipo === "INSERT" ? 'post' : 'put'
        const { user } = this.props.auth
        
        let data = 	{
            "name": this.state.modelo.ficha.nome, 
            "points": this.state.modelo.ficha.pontos, 
            "force": this.state.modelo.ficha.caracteristicas.forca, 
            "abiliity": this.state.modelo.ficha.caracteristicas.habilidade, 
            "resistance": this.state.modelo.ficha.caracteristicas.resistencia, 
            "armor": this.state.modelo.ficha.caracteristicas.armadura, 
            "fire_power": this.state.modelo.ficha.caracteristicas.poderDeFoco, 
            "health_points": this.state.modelo.ficha.caracteristicas.pontosDeVida, 
            "magic_points": this.state.modelo.ficha.caracteristicas.pontosDeMagia, 
            "benefits":this.state.modelo.ficha.vantagens, 
            "disadvantages":this.state.modelo.ficha.desvantagens,
            "damage_types":this.state.modelo.ficha.tiposDeDano ===''?'não definido':this.state.modelo.ficha.tiposDeDano, 
            "magic":this.state.modelo.ficha.magiasConhecidas,
            "items":this.state.modelo.ficha.dinheiroEItens ===''?'não definido':this.state.modelo.ficha.dinheiroEItens,  
            "story":this.state.modelo.ficha.Historia ===''?'não definido':this.state.modelo.ficha.Historia,  
            "user":user.user_id, 
            "system":this.state.modelo.sistemaId, 
            "experience_points": this.state.modelo.ficha.caracteristicas.pontosDeExperiencia
            }

        axios[verbo](`${constantes.API_URL}/api/tresDeT/fichas/`, data).then((resp) =>{
            document.getElementById('button_dashboard').click()
        })
        .catch( (e) => {
            console.log(e)
            
        })


    }

    render_rodape(){

        let texto = this.props.tipo === "INSERT" ? 'Cadastrar' : 'Alterar'

        if (this.props.tipo){
            return (
                <React.Fragment>
                    <div className="section">
                        <div className="columns">
                            <div className="column">
                                <Button
                                    classes="is-primary is-rounded is-pulled-right"
                                    buttonText={texto} click={() => this.acaoFicha()}/>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        
    }
    
    render(){
        return (
            <React.Fragment>
            <div className="container ficha topo_ficha">
                <h1 className="title title3DEt">{`3D&T`}</h1>
                <div className="section topo_ficha">
                    <div className="columns is-mobile topo_ficha">
                        <div className="column is-three-fifths">
                            <p><strong>Nome: </strong>{this.state.modelo.ficha.nome}</p>
                        </div>
                        <div className="column">
                            <p><strong>Pontos: </strong>{this.state.modelo.ficha.pontos}</p>
                        </div>                                
                    </div>
                    <div className="columns is-mobile">                                        
                        <div className="column">
                            <div className="columns">                                        
                                <div className="column">                                            
                                    <h2 className="title3DEt">Caracteristicas</h2>
                                    <div className="columns is-mobile">
                                        <div className="column is-three-fifths">
                                            <strong>Força: </strong>
                                        </div>
                                        <div className="column">
                                            <p>{this.state.modelo.ficha.caracteristicas.forca}</p>
                                        </div>
                                    </div>
                                    <div className="columns is-mobile">
                                        <div className="column is-three-fifths">
                                            <strong>Habilidade: </strong>
                                        </div>
                                        <div className="column">
                                            <p>{this.state.modelo.ficha.caracteristicas.habilidade}</p>
                                        </div>
                                    </div>
                                    <div className="columns is-mobile">
                                        <div className="column is-three-fifths">
                                            <strong>Resistência: </strong>
                                        </div>
                                        <div className="column">
                                            <p>{this.state.modelo.ficha.caracteristicas.resistencia}</p>
                                        </div>
                                    </div>
                                    <div className="columns is-mobile">
                                        <div className="column is-three-fifths">
                                            <strong>Armadura: </strong>
                                        </div>
                                        <div className="column">
                                            <p>{this.state.modelo.ficha.caracteristicas.armadura}</p>
                                        </div>
                                    </div>
                                    <div className="columns is-mobile">
                                        <div className="column is-three-fifths">
                                            <strong>Poder de Fogo: </strong>
                                        </div>
                                        <div className="column">
                                            <p>{this.state.modelo.ficha.caracteristicas.poderDeFoco}</p>
                                        </div>
                                    </div>
                                    <div className="columns is-mobile">
                                        <div className="column is-three-fifths">
                                            <strong>Pontos de Vida: </strong>
                                        </div>
                                        <div className="column">
                                            <p>{this.state.modelo.ficha.caracteristicas.pontosDeVida}</p>
                                        </div>
                                    </div>
                                    <div className="columns is-mobile">
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
                                            {this.render_vantagens()}
                                        </div>
                                    </div>                                                    
                                </div>                                                
                            </div>
                            <div className="columns">                                        
                                <div className="column">                                            
                                    <h2 className="title3DEt">Desvantagens</h2>
                                    <div className="columns">
                                        <div className="column">
                                            {this.render_desvantagens()}
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
                                            <p>{this.state.modelo.ficha.tiposDeDano}</p>
                                        </div>
                                    </div>                                                    
                                </div>
                            </div>
                            <div className="columns">                                        
                                <div className="column">                                            
                                    <h2 className="title3DEt">Magias conhecidas</h2>
                                    <div className="columns">
                                        <div className="column">
                                        {this.render_magias()}
                                        </div>
                                    </div>                                                    
                                </div>
                            </div>
                            <div className="columns">                                        
                                <div className="column">                                            
                                    <h2 className="title3DEt">Dinheiro e itens</h2>
                                    <div className="columns">
                                        <div className="column">
                                            <p>{this.state.modelo.ficha.dinheiroEItens}</p>
                                        </div>
                                    </div>                                                    
                                </div>
                            </div>
                            <div className="columns">                                        
                                <div className="column">                                            
                                    <h2 className="title3DEt">História</h2>
                                    <div className="columns">
                                        <div className="column">
                                        <p>{this.state.modelo.ficha.Historia}</p>
                                        </div>
                                    </div>                                                    
                                </div>
                            </div>
                        </div>                                
                    </div>
                </div>
                
                
                {this.render_rodape()}
            </div> 
            
            <NavLink id='button_dashboard' to={`/Dashboard/`} className="button is-invisible">Dashboard</NavLink>
            </React.Fragment> 
        )
    }

}


const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps, null)(MostraFicha)
