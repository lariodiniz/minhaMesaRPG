import React, { Component } from 'react'
import axios from 'axios'
import { constantes } from '../../constants'
import { NavLink } from 'react-router-dom'
import If from '../../common/utils/if'

import Button from '../../common/templates/button/button'
//import './ficha3DeT.css'


class MostraFicha extends Component {

    constructor(props) {
        super(props)
        this.state = props.state
    }

    componentWillMount(){        
        this.setState(this.props.state)        
    }

    render_list(lista, filtrar){
        let publico = this.props.tipo === "PUBLIC"
        if (filtrar){
            return lista.map((item) =>{  
                if (item.name.indexOf(filtrar) !== -1){return  (<div key={item.name+item.id} className='level is-small'>
                                                                    <p >
                                                                        {item.name} 
                                                                        <If test={!publico}>
                                                                            <button onClick={() => this.remove_item(lista, item)} className='button is-warning is-pulled-right is-small'>-</button>
                                                                        </If>
                                                                    </p>
                                                                </div>)}
                else{return  (<div key={item.name+item.id} className='level is-small'>
                                    <p >
                                        {(item.name+' ('+item.cost+')')} 
                                        <If test={!publico}>
                                            <button onClick={() => this.remove_item(lista, item)} className='button is-warning is-pulled-right is-small'>-</button>
                                        </If>
                                    </p>
                                </div>)}})
        }
        else{
            return lista.map(item => (<div key={item.name+item.id} className='level is-small'>
                                            <p >
                                                {(item.name+' ('+item.cost+')')} 
                                                <If test={!publico}>
                                                    <button onClick={() => this.remove_item(lista, item)} className='button is-warning is-pulled-right is-small'>-</button>
                                                </If>
                                            </p>
                                        </div>))
        }
        
    }

    remove_item(lista, item){
        
        lista.splice(lista.indexOf(item), 1)        
        let state = { ...this.props.state }
        this.setState(state) 
    }

    render_vantagens_unicas(){
        let vantagensUnicas = this.state.modelo.ficha.vantagensUnicas ? this.state.modelo.ficha.vantagensUnicas : []
        return this.render_list(vantagensUnicas)
    }

    render_vantagens(){
        let vantagens = this.state.modelo.ficha.vantagens ? this.state.modelo.ficha.vantagens : []
        return this.render_list(vantagens)
    }

    render_pericias(){

        let pericias = this.state.modelo.ficha.pericias ? this.state.modelo.ficha.pericias : []
        return this.render_list(pericias, 'Especialização')
    }

    render_desvantagens(){
        let desvantagens = this.state.modelo.ficha.desvantagens ? this.state.modelo.ficha.desvantagens : []
        return this.render_list(desvantagens)
    }   
    
    render_magias(){
        let publico = this.props.tipo === "PUBLIC"
        let magias = this.state.modelo.ficha.magiasConhecidas ? this.state.modelo.ficha.magiasConhecidas : []
        return magias.map(magia =>(
            <div key={magia.name+magia.id} className='level'>
            <p >
                {magia.name} 
                <If test={!publico}>
                    <button onClick={() => this.remove_item(magias, magia)} className='button is-warning is-pulled-right is-small'>-</button>
                </If>
            </p>
        </div>))
    }

    acaoFicha(){
        let verbo = this.props.tipo === "INSERT" ? 'post' : 'put'
        const user = this.props.user
        let pericias = []
        let especializacao = []

        let p = this.state.modelo.ficha.pericias ? this.state.modelo.ficha.pericias : []

        p.map((item) =>{  
            if (item.name.indexOf('Especialização') !== -1){
                let i ={
                    id: item.id.replace('Esp', ''),
                    name: item.name.replace('Especialização - ', '')
                }    
                especializacao.push(i)
            }
            else{pericias.push(item)}})

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
            "expertise": pericias,
            "specializations": especializacao,
            "unique_benefits": this.state.modelo.ficha.vantagensUnicas,
            "damage_types":this.state.modelo.ficha.tiposDeDano ===''?'não definido':this.state.modelo.ficha.tiposDeDano, 
            "magic":this.state.modelo.ficha.magiasConhecidas,
            "items":this.state.modelo.ficha.dinheiroEItens ===''?'não definido':this.state.modelo.ficha.dinheiroEItens,  
            "story":this.state.modelo.ficha.Historia ===''?'não definido':this.state.modelo.ficha.Historia,  
            "user":user, 
            "system":this.state.modelo.sistemaId, 
            "experience_points": this.state.modelo.ficha.caracteristicas.pontosDeExperiencia
            }

        axios[verbo](`${constantes.API_URL}/api/tresDeT/fichas/`, data).then((resp) =>{
            document.getElementById('button_dashboard').click()
        })
        .catch( (e) => {
            console.log(e)
            console.log(e.data)
            
        })


    }

    render_rodape(){

        let publico = this.props.tipo === "PUBLIC"

        let texto = this.props.tipo === "INSERT" ? 'Cadastrar' : 'Alterar'

        if (this.props.tipo){
            return (
                <If test={!publico}>
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
                </If>
            )
        }
        
    }
    
    render(){
        let publico = this.props.tipo === "PUBLIC"

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
                                            {this.render_vantagens_unicas()}
                                            {this.render_vantagens()}
                                            {this.render_pericias()}
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
            <If test={!publico}>
                <NavLink id='button_dashboard' to={`/Dashboard/`} className="button is-invisible">Dashboard</NavLink>
            </If>
            
            </React.Fragment> 
        )
    }

}

export default MostraFicha
