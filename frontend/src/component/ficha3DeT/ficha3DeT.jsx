import React, { Component } from 'react'
import Conceito from './conceito'
import Caracteristicas from './caracteristicas'
import { modelo } from './modelo'
import './ficha3DeT.css'




class Ficha3DeT extends Component {


    constructor(props) {
        super(props)
        
        let _modelo= { ...modelo }
        _modelo.sistemaId = props.idSistema
        this.state = {modelo: _modelo}
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
        let ponto  = this.state.modelo.ficha.pontos;



        switch (passo) {
            case 0:
                return <Conceito 
                    state={this.state} 
                    proximoPasso={this.proximo_passo.bind(this)} 
                    mensagem={this.define_mensagem.bind(this)} 
                    setaModelo={this.setaModelo.bind(this)}
                />
                
            case 1:
                return <Caracteristicas 
                        state={this.state} 
                        proximoPasso={this.proximo_passo.bind(this)} 
                        passoAnterior={this.passo_anterior.bind(this)} 
                        mensagem={this.define_mensagem.bind(this)} 
                        setaModelo={this.setaModelo.bind(this)}
                            
                    />
            default:
                console.log(this.state)
          } 
    }

    removeMensagem(){
        this.define_mensagem('')
    }

    define_mensagem(mens){
        console.log(mens)
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

    render() {
            return (
                <section className='section'>
                    {this.render_mensagem()}
                    <h1 className="title title3DEt">{`3D&T`}</h1>
                    <div className="columns">
                        <div className="column">
                        {this.render_parteinferior()}
                        </div>
                        </div>
                    
                </section> 
            )
        

    }
}

export default Ficha3DeT