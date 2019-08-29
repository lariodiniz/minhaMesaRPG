import React, { Component } from 'react'
import Button from '../../common/templates/button/button'
import Icon from '../../common/templates/icon/icon'
import Conceito from './conceito'
import Caracteristicas from './caracteristicas'
import Vantagens from './vantagem'
import Desvantagens from './desvantagem'
import Magias from './magias'
import MostraFicha from './mostraFicha'
import ToquesFinais from './toquesFinais'
import If from '../../common/utils/if'
import { modelo } from './modelo'

import './ficha3DeT.css'


const ICONES = [
    'book',
    'body',
    'remove-circle',
    'add-circle',
    'color-wand',
    'checkmark'
]
class Ficha3DeT extends Component {

    constructor(props) {
        super(props)
        
        let _modelo= JSON.parse(JSON.stringify(modelo))
        _modelo.sistemaId = props.idSistema
        this.state = {modelo: _modelo}
    }

    componentWillMount(){        
        let _modelo= JSON.parse(JSON.stringify(modelo))
        _modelo.sistemaId = this.props.idSistema
        this.setaModelo({modelo: _modelo})        
    }


    definePasso(passo){   
        let state = { ...this.state }     
        state.modelo.passo = passo
        this.setState(state)
    }

    passo_anterior(state){        
        state.modelo.passo -= 1
        this.setState(state)
    }

    proximo_passo(state){
        state.modelo.passo += 1
        this.setState(state)
    }

    render_parteinferior(){
        let passo  = this.state.modelo.passo;
        switch (passo) {
            case 0:
                return <Conceito 
                    icon={ICONES[passo]}
                    state={this.state} 
                    proximoPasso={this.proximo_passo.bind(this)} 
                    mensagem={this.define_mensagem.bind(this)} 
                    setaModelo={this.setaModelo.bind(this)}
                />
                
            case 1:
                return <Caracteristicas 
                        icon={ICONES[passo]}
                        state={this.state} 
                        proximoPasso={this.proximo_passo.bind(this)} 
                        passoAnterior={this.passo_anterior.bind(this)} 
                        mensagem={this.define_mensagem.bind(this)} 
                        setaModelo={this.setaModelo.bind(this)}
                            
                    />
            case 2:
                return <Desvantagens 
                        icon={ICONES[passo]}
                        state={this.state} 
                        proximoPasso={this.proximo_passo.bind(this)} 
                        passoAnterior={this.passo_anterior.bind(this)} 
                        mensagem={this.define_mensagem.bind(this)} 
                        setaModelo={this.setaModelo.bind(this)}
                            
                    />
            case 3:
                return <Vantagens 
                        icon={ICONES[passo]}
                        state={this.state} 
                        proximoPasso={this.proximo_passo.bind(this)} 
                        passoAnterior={this.passo_anterior.bind(this)} 
                        mensagem={this.define_mensagem.bind(this)} 
                        setaModelo={this.setaModelo.bind(this)}
                            
                    />
            case 4:
                return <Magias 
                        icon={ICONES[passo]}
                        state={this.state} 
                        proximoPasso={this.proximo_passo.bind(this)} 
                        passoAnterior={this.passo_anterior.bind(this)} 
                        mensagem={this.define_mensagem.bind(this)} 
                        setaModelo={this.setaModelo.bind(this)}
                            
                    />
            case 5:
                return <ToquesFinais 
                        icon={ICONES[passo]}
                        state={this.state} 
                        proximoPasso={this.proximo_passo.bind(this)} 
                        passoAnterior={this.passo_anterior.bind(this)} 
                        mensagem={this.define_mensagem.bind(this)} 
                        setaModelo={this.setaModelo.bind(this)}
                            
                    />
            default:
                return <MostraFicha state={this.state} />
          } 
    }

    removeMensagem(){
        this.define_mensagem('')
    }

    define_mensagem(mens){
        let state = {...this.state}            
        state.modelo.mensagem = mens
        this.setaModelo(state)   
    }

    setaModelo(state){
        this.setState(state)  
    }

    render_mensagem() {        
        let { mensagem } = this.state.modelo        
        if (mensagem !== ''){
            return ( 
                <React.Fragment>
                    <div className="container">                
                        <div className="notification is-warning">
                        <button className="delete" onClick={()=>this.removeMensagem()}></button>
                            <p>{mensagem}</p>
                        </div>
                    </div>
                    <br/>
                </React.Fragment>
                
            )
        }
        else{
            return ''
        }
    }

    mostra_modal(){
        document.getElementById('modal').classList.add("is-active"); 
    }

    some_modal(){
        document.getElementById('modal').classList.remove("is-active");   
    }

    render_modal(){
        return (
            <React.Fragment>
                <button onClick={this.mostra_modal} className="button button_relative"><i className={`icon ion-md-search`}></i></button>

                <div id="modal" className="modal">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                                <Button 
                                    classes='is-info' 
                                    click={()=> {this.definePasso(0); this.some_modal()}} >
                                    <Icon icon={ICONES[0]}/>
                                </Button>
                                <Button 
                                    classes='is-info' 
                                    click={()=> {this.definePasso(1); this.some_modal()}} >
                                    <Icon icon={ICONES[1]}/>
                                </Button>
                                <Button 
                                    classes='is-info' 
                                    click={()=> {this.definePasso(2); this.some_modal()}} >
                                    <Icon icon={ICONES[2]}/>
                                </Button>
                                <Button 
                                    classes='is-info' 
                                    click={()=> {this.definePasso(3); this.some_modal()}} >
                                    <Icon icon={ICONES[3]}/>
                                </Button>
                                <Button 
                                    classes='is-info' 
                                    click={()=> {this.definePasso(4); this.some_modal()}} >
                                    <Icon icon={ICONES[4]}/>
                                </Button>
                                <Button 
                                    classes='is-info' 
                                    click={()=> {this.definePasso(5); this.some_modal()}} >
                                    <Icon icon={ICONES[5]}/>
                                </Button>
                                
                        </header>
                        <section className="modal-card-body">
                            <MostraFicha state={this.state} />
                        </section>
                        <footer className="modal-card-foot">
                            
                            <button onClick={this.some_modal} className="button">Sair</button>
                        </footer>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    render() {
            return (
                <React.Fragment>
                    <section className='section'>
                        {this.render_mensagem()}
                        <If test={this.state.modelo.passo < 6}>
                            <h1 className="title title3DEt">{`3D&T`}</h1>
                        </If>
                        <div className="columns">
                            <div className="column">
                            {this.render_parteinferior()}
                            </div>
                        </div>
                    </section> 
                    {this.render_modal()}  
                </React.Fragment>
            )
        

    }
}

export default Ficha3DeT