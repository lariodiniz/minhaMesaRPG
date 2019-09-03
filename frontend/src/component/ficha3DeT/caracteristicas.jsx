import React, { Component } from 'react'
import Panel from './panel'
import Input from '../../common/templates/input/input'

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

    changePV(event){ 
        let state = {...this.state}
        state.modelo.ficha.caracteristicas.pontosDeVida = event.target.value
        this.props.setaModelo(state)
        
    }

    changePM(event){ 
        let state = {...this.state}
        state.modelo.ficha.caracteristicas.pontosDeMagia = event.target.value
        this.props.setaModelo(state)
        
    }

    render_pv_e_pm() {
        let pv = this.state.modelo.ficha.caracteristicas.pontosDeVida
        let pm = this.state.modelo.ficha.caracteristicas.pontosDeMagia

        return (
            <React.Fragment>
                <div className="column">
                    <Input  id='pv' nome='PV'  type='number'
                        valor={pv}
                        onChange={this.changePV.bind(this)}
                        value={pv}
                    />  
                </div>
                <div className="column">
                    <Input  id='pm' nome='PM'  type='number'
                        valor={pm}
                        onChange={this.changePM.bind(this)}
                        value={pm}
                    />  
                </div>
            </React.Fragment>
        )
    }

    render() {
        return (   
            <Panel 
                icon={this.props.icon}
                titulo='Caracteristicas'  
                botaoAnterior={true}
                state={this.state} 
                passoAnterior={this.props.passoAnterior}
                proximoPasso={this.props.proximoPasso}>
                    <div className="column">                        
                        <div className="columns">
                            {this.render_caracteristicas()}
                        </div>
                        <div className="columns">
                        {this.render_pv_e_pm()}
                        </div>
                    </div>
                    
            </Panel>
        )
    }    
}


export default Caracteristicas

