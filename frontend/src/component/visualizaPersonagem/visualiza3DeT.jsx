import React, { Component } from 'react'
import Button from '../../common/templates/button/button'
import Icon from '../../common/templates/icon/icon'
import Input from '../../common/templates/input/input'
import If from '../../common/utils/if'
import './visualiza3DeT.css'

class Visualiza3DeT extends Component {
    

    constructor(props) {
        super(props)
        this.state = { ...props.state, 
                        health_points_atu: props.state.health_points,
                        magic_points_atu: props.state.magic_points}
    }

    changePV(){
        document.getElementById('title_modal').innerHTML = 'Pontos de Vida'
        document.getElementById('modal').classList.add("is-active"); 
    }

    changePM(){
        document.getElementById('title_modal').innerHTML = 'Pontos de Magia'
        document.getElementById('modal').classList.add("is-active"); 
    }

    some_modal(modal){
        document.getElementById(modal).classList.remove("is-active");   
    }

    alteraItem(){
        let tipo = document.getElementById('title_modal').innerHTML
        let state = {...this.state}
        if (tipo === 'Pontos de Vida'){
            let alt = parseInt(state.health_points_atu)
            alt += parseInt(document.getElementById('alteraItem').value)
            state.health_points_atu = alt
        }
        else{
            let alt = parseInt(state.magic_points_atu)
            alt += parseInt(document.getElementById('alteraItem').value)
            state.magic_points_atu = alt
        }

        this.setState(state)
        this.some_modal('modal')

    }

    render_modal(){
        return (
            <div id="modal" className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p id='title_modal'></p>
                    </header>
                    <section className="modal-card-body">
                        <Input id='alteraItem' nome='Alterar'  />
                    </section>
                    <footer className="modal-card-foot">
                        <button onClick={() => this.some_modal('modal')} className="button">Sair</button>
                        <button onClick={()=> this.alteraItem()} className="button is-success is-pulled-right">Alterar</button>
                    </footer>
                </div>
            </div>
            
        )
    }


    render_habilidade(){
        

        return (
                <div className="grupo_panel">
                    <p className=" title grupo_panel_title">Caracteristicas</p>                    
                    <div className="grupo_panel_body">
                        <div className="columns is-mobile">
                            <div className="column area">
                                <p><strong>FOR: </strong> {'0'+this.state.force}</p>
                            </div>
                            <div className="column area">
                                <p><strong>HAB: </strong> {'0'+this.state.abiliity}</p>
                            </div>
                            <div className="column area">
                                <p><strong>RES: </strong> {'0'+this.state.resistance}</p>
                            </div>
                            <div className="column area">
                                <p><strong>ARM: </strong> {'0'+this.state.armor}</p>
                            </div>
                            <div className="column area">
                                <p><strong>PDF: </strong> {'0'+this.state.fire_power}</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <p><strong>Tipos de dano: </strong> {this.state.damage_types}</p>
                            </div>
                            <div className="column">
                                <p><strong>Itens: </strong> {this.state.items}</p>
                            </div>
                            <div className="column area">
                                <p><strong>História: </strong> {this.state.story}</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }



    render_lista(title, render){
        return (<div className="grupo_panel">
                <p className=" title grupo_panel_title">{title}</p>                    
                <div className="grupo_panel_body">
                    <div className="list is-hoverable">
                        {render}
                    </div>
                </div>
            </div>
        )
    }

    render_vantagem(){
        let vantagens = this.state.benefits ? this.state.benefits : []
        return vantagens.map(
            (vantagem) => <div key={vantagem.id} className="list-item">
                            <p><strong>{vantagem.name}</strong></p>
                            <p className='is-italic'><span >{vantagem.description}</span></p>
                        </div>
        ) 
    }
    
    render_vantagens(){
        return this.render_lista('Vantagens',this.render_vantagem())
    }

    render_desvantagem(){
        let desvantagens = this.state.disadvantages ? this.state.disadvantages : []
        return desvantagens.map(
            (desvantagem) => <div key={desvantagem.id} className="list-item">
                                <p><strong>{desvantagem.name}</strong></p>
                                <p className='is-italic'><span >{desvantagem.description}</span></p>
                            </div>
        ) 
    }

    render_desvantagens(){
        return this.render_lista('Desvantagens',this.render_desvantagem())
    }

    render_magia(){
        let magias = this.state.magic ? this.state.magic : []
        return magias.map(
            (magia) => <div key={magia.id} className="list-item">
                                <p><strong>{magia.name}</strong></p>
                                <p className='is-italic'><span >{magia.description}</span></p>
                            </div>
        ) 
    }

    render_magias(){
        return this.render_lista('Magias',this.render_magia())
    }

    mostraGrupo(grupo){
        
        document.getElementById('grupo_habilidade').classList.add("is-invisible");  
        document.getElementById('grupo_vantagens').classList.add("is-invisible");  
        document.getElementById('grupo_desvantagens').classList.add("is-invisible");  
        document.getElementById('grupo_magias').classList.add("is-invisible");  

        document.getElementById(grupo).classList.remove("is-invisible"); 
        document.getElementById('grupo_mostrar').classList.remove("is-invisible");  

    }


    render_modal2(){
        return (
            <div id="modal2" className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p id='title_modal2'></p>
                    </header>
                    <section id='body_modal2' className="modal-card-body">
                        
                    </section>
                    <footer className="modal-card-foot">
                        <button onClick={() => this.some_modal('modal2')} className="button">Sair</button>
                    </footer>
                </div>
            </div>
            
        )
    }    

    render() {
        let temMagia = this.state.magic.length > 0
        let temVantagem = this.state.benefits.length > 0
        let temDesvantatem = this.state.disadvantages.length > 0
        
        return (
            
            <React.Fragment>
                <div className='container'>
                    <section className='section title_area'>
                        <div className='columns'>
                            <div className='column'> 
                                <h2 className="title is-4 has-text-black">{this.state.name}</h2>
                            </div>
                            
                        </div>
                    </section>
                    <hr />
                    <section className='section title_area'>
                        <div className='columns'>
                            <div className='column'>
                                <div className='columns area is-mobile'>
                                     <div className='column'> 
                                        <h3 className="title is-4 has-text-black">PV</h3> 
                                    </div>                                 
                                    <div className='column'> 
                                        <p><strong>Total:</strong> {this.state.health_points}</p>
                                    </div>
                                    <div className='column'> 
                                        <p><strong>Atuais:</strong> {this.state.health_points_atu}</p>
                                    </div>     
                                    <div className='column'> 
                                        <Button 
                                            classes='is-success' 
                                            click={()=>{this.changePV()}}>
                                                <Icon icon='create'/>   
                                            </Button>
                                    </div>                          
                                </div>
                            </div>
                            <div className='column'>
                                <div className='columns area is-mobile'> 
                                    
                                <div className='column'> 
                                        <h3 className="title is-4 has-text-black">PM</h3> 
                                    </div>     
                                    
                                                                      
                                    <div className='column'> 
                                        <p><strong>Total:</strong> {this.state.magic_points}</p>
                                    </div>
                                    <div className='column'> 
                                        <p><strong>Atuais:</strong> {this.state.magic_points_atu}</p>
                                    </div>     
                                    <div className='column'> 
                                        <Button 
                                            classes='is-success' 
                                            click={()=>{this.changePM()}}>
                                                <Icon icon='create'/>   
                                            </Button>
                                    </div>                          
                                </div>
                            </div>
                        </div>
                    </section>
                    
                        
                    <section className='section'>
                        <nav className="menuSelesct">
                            <ul>
                                <li><button onClick={() => this.mostraGrupo('grupo_habilidade')} className='button'>Caracteristicas</button></li>
                                <If test={temVantagem}>
                                    <li><button onClick={() => this.mostraGrupo('grupo_vantagens')}  className='button'>Vantagens</button></li>
                                </If>
                                <If test={temDesvantatem}>
                                    <li><button onClick={() => this.mostraGrupo('grupo_desvantagens')}  className='button'>Desvantagens</button></li>
                                </If>                                
                                <If test={temMagia}>
                                    <li><button onClick={() => this.mostraGrupo('grupo_magias')}  className='button'>Magias</button></li>
                                </If>
                                
                            </ul>
                        </nav>
                        <div id='grupo_mostrar' className=' is-invisible'>
                            <div id='grupo_body' >
                                <div id='grupo_habilidade' className='grupo is-invisible'>
                                    {this.render_habilidade()}
                                </div>
                                <div id='grupo_vantagens' className='grupo is-invisible'>
                                    <If test={temVantagem}>
                                        {this.render_vantagens()}
                                    </If>
                                </div>
                                <div id='grupo_desvantagens' className='grupo is-invisible'>
                                    <If test={temDesvantatem}>
                                        {this.render_desvantagens()}
                                    </If> 
                                </div>
                                <div id='grupo_magias' className='grupo is-invisible'>
                                    <If test={temMagia}>
                                        {this.render_magias()}
                                    </If>
                                </div>
                            </div>
                            <div className='foote'>
                                <button onClick={() => document.getElementById('grupo_mostrar').classList.add("is-invisible")} className="button">Sair</button>
                            </div>
                        </div>
                    </section>                    
                </div>

                {this.render_modal()}

                
            </React.Fragment>
        )
    }
}

export default Visualiza3DeT



