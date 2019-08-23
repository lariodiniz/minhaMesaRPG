import React, { Component } from 'react'
import Button from '../../common/templates/button/button'
import Input from '../../common/templates/input/input'

class Caracteristicas extends Component {

    constructor(props){
        super(props);
        this.state = { 
            mensagem:'',
            pontos: props.pontos,
            tipo: this._define_pessoa(props.pontos),
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
        caracteristicas_selecionadas: {
            forca : 0,
            habilidade: 0,
            resistencia: 0,
            armadura: 0,
            poderDeFoco: 0
        },
    
    }
        
    }    
    _define_pessoa(pontos){
        if (pontos <= 4){
            return 0
        }
        else if (pontos <= 5){
            return 1
        }
        else if (pontos <= 7){
            return 2
        }
        else if (pontos <10){
            return 3
        }
        else {
            return 4
        }
    }

    proximo() {
        console.log('proximo')
    }

    anterior() {
        console.log('anterior')
    }
    
    changeNome(event){ 
        let state = {...this.state}
        state.nome = event.target.value
        state.corInput.nome = 'primary'
        state.mensagem = ''
        this.setState(state)
        
    }

    changePontos(event){   
        let state = {...this.state}
        state.pontos = event.target.value
        state.corInput.pontos = 'primary'
        state.mensagem = ''
        this.setState(state)
        
    }
    
    render_mensagem() {
        let { mensagem } = this.state
        console.log(mensagem)
        if (mensagem !== ''){
            return ( 
                <div className="container">                
                    <div className="notification is-warning">
                        <p>{mensagem}</p>
                    </div>
                </div>
            )
        }
        else{
            return ''
        }
    }

    add(evento){
        let numero = evento.target.value
        let forca_sel  = this.state.caracteristicas_selecionadas.forca
        let num = numero - forca_sel         
        let p = this.state.pontos - num  
        console.log(this.state.pontos)
        console.log(num)
        console.log(p)

        if (p < 0){
            let state = {...this.state}            
            state.mensagem = 'Você não tem pontos suficientes!'
            this.setState(state)
        }
        else {
            let nome = evento.target.name
            if (nome==='For'){ 
                let state = {...this.state}            
                state.caracteristicas_selecionadas.forca = parseInt(numero)
                state.caracteristicas.forca = parseInt(numero)
                state.pontos = parseInt(p)
                
                this.setState(state)         
    
            }
            console.log(this.state)
        }

    }

    render_radios(tipo){
        
        let mapa = [1,2,3,4,5]
        return mapa.map(item =>{            
            if (this.state.tipo === 0 && item > 1){
                return  <input disabled className="radioButton" type="radio" name={tipo}/>    
            }
            else {
                return  <input className="radioButton" type="radio" name={tipo} value={item} onClick={(e) => this.add(e)}/>
            }            
            }
        )
    }

    render_caracteristicas(){
        let caracter = ['For', 'Hab', 'Res','Arm', 'PdF']
        return caracter.map(c => {
            let nome  = c
            return (
                <div className="column">
                <div className="control">
                    <label className="radio">
                        <strong>{c}: </strong>
                        {this.render_radios(nome)}
                    </label>                        
                </div>
            </div>
            )
        })
       
    }

    render() {

    return (        
    <section className='section'>
        {this.render_mensagem()}
        <div className="container">                
            <h1 className="title title3DEt">Caracteristicas</h1>
        </div>
        
        <div className='container'>
            <div className="columns">
                {this.render_caracteristicas()}
            </div>
            <Button
                classes="is-primary is-rounded is-pulled-right"
                buttonText='Próximo' click={() => this.proximo()}/>
        </div>
    </section>    
)
}    
}


export default Caracteristicas

