import React, { Component } from 'react'
import Button from '../../common/templates/button/button'
import Icon from '../../common/templates/icon/icon'
import Input from '../../common/templates/input/input'
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

    some_modal(){
        document.getElementById('modal').classList.remove("is-active");   
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
        this.some_modal()

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
                        <button onClick={this.some_modal} className="button">Sair</button>
                        <button onClick={()=> this.alteraItem()} className="button is-success is-pulled-right">Alterar</button>
                    </footer>
                </div>
            </div>
            
        )
    }

    render() {
        console.log(this.state)
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
                                            classes='is-success is-small' 
                                            click={()=>{this.changePV()}}>
                                                <Icon icon='add-circle-outline'/>   
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
                                            classes='is-success is-small' 
                                            click={()=>{this.changePM()}}>
                                                <Icon icon='add-circle-outline'/>   
                                            </Button>
                                    </div>                          
                                </div>
                            </div>
                        </div>
                    </section>
                    
                        
                    <section className='section'>
                        <nav className="menuSelesct">
                            <ul>
                                <li><button className='button'>Habilidades</button></li>
                                <li><button className='button'>Vantagens</button></li>
                                <li><button className='button'>Desvantagens</button></li>
                                <li><button className='button'>Magias</button></li>
                            </ul>
                        </nav>
                    </section>                    
                </div>
                {this.render_modal()}
            </React.Fragment>
        )
    }
}

export default Visualiza3DeT



