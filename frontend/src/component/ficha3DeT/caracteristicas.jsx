import React, { Component } from 'react'
import Panel from './panel'

class Caracteristicas extends Component {

    constructor(props){
        super(props);
        this.state = props.state
        this._caracter = ['For', 'Hab', 'Res','Arm', 'PdF']
        
    } 
    
    add(evento){
        this.props.mensagem('')
        let state = {...this.state}
        let campo = evento.target.name
        let numero = evento.target.value        
        let pontos = this.state.modelo.ficha.pontos
        let gastos = this.state.modelo.ficha.pontos_gastos
        let anterior = 0

        switch (campo) {
            case this._caracter[0]:
                anterior = this.state.modelo.ficha.caracteristicas.forca
                state.modelo.ficha.caracteristicas.forca = 0
                break;
            case this._caracter[1]:
                anterior = this.state.modelo.ficha.caracteristicas.habilidade 
                state.modelo.ficha.caracteristicas.habilidade = 0
                break;
            case this._caracter[2]:
                anterior = this.state.modelo.ficha.caracteristicas.resistencia 
                state.modelo.ficha.caracteristicas.resistencia = 0
                break;
            case this._caracter[3]:
                anterior = this.state.modelo.ficha.caracteristicas.armadura 
                state.modelo.ficha.caracteristicas.armadura = 0
                break;
            case this._caracter[4]:
                anterior = this.state.modelo.ficha.caracteristicas.poderDeFoco 
                state.modelo.ficha.caracteristicas.poderDeFoco = 0
                break;
            default:
              console.log('Sorry.');
          }

        gastos -= anterior;
        pontos -= gastos;

        state.modelo.ficha.pontos_gastos -= anterior
 
        if (pontos < numero){
            console.log(pontos)
            evento.target.checked = false
            this.props.mensagem('Você não tem pontos suficientes!')
            
        }
        else {

            switch (campo) {
                case this._caracter[0]:
                    state.modelo.ficha.caracteristicas.forca = parseInt(numero)
                    break;
                case this._caracter[1]:
                    state.modelo.ficha.caracteristicas.habilidade = parseInt(numero)
                    break;
                case this._caracter[2]:
                    state.modelo.ficha.caracteristicas.resistencia = parseInt(numero)  
                    state.modelo.ficha.caracteristicas.pontosDeVida = parseInt(numero) * 5 
                    state.modelo.ficha.caracteristicas.pontosDeMagia = parseInt(numero) * 5                    
                    break;
                case this._caracter[3]:
                    state.modelo.ficha.caracteristicas.armadura = parseInt(numero)
                    break;
                case this._caracter[4]:
                    state.modelo.ficha.caracteristicas.poderDeFoco = parseInt(numero)
                    break;
                default:
                  console.log('Sorry.');
              }       
                   
              
              state.modelo.ficha.pontos_gastos += parseInt(numero)                
              
              
        }

        this.props.setaModelo(state)

    }



    render_radios(tipo){
        
        let mapa = [1,2,3,4,5]
        return mapa.map(item =>{            
            return  <input key={item} className="radioButton" type="radio" name={tipo} value={item} onClick={(e) => this.add(e)}/>
                     
            }
        )
    }

    render_caracteristicas(){
        
        return this._caracter.map(nome => {            
            return (
                <div key={nome} className="column">
                <div className="control">
                    <label className="radio">
                        <strong>{nome}: </strong>
                        {this.render_radios(nome)}
                    </label>                        
                </div>
            </div>
            )
        })
       
    }

    render() {
        return (   
            <Panel 
                titulo='Caracteristicas'  
                botaoAnterior={true}
                state={this.state} 
                passoAnterior={this.props.passoAnterior}
                proximoPasso={this.props.proximoPasso}>
                    {this.render_caracteristicas()}
            </Panel>
        )
    }    
}


export default Caracteristicas

