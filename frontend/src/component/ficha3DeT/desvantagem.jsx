import React, { Component } from 'react'
import axios from 'axios'
import { constantes } from '../../constants'
import Input from '../../common/templates/input/input'
import Button from '../../common/templates/button/button'
import Icon from '../../common/templates/icon/icon'
import Panel from './panel'

class Desdesvantagem extends Component {

    constructor(props){
        super(props);
        this.state = {state:props.state, desvantagens:[]}
    }    

    componentWillMount(){

        axios.get(`${constantes.API_URL}/api/tresDeT/desvantagens/`).then((resp) =>{
            let desvantagens = []
            resp.data.map((item) => {
                let desvantagem = {desvantagem:item, visualizar:false, selecionada:false}
                desvantagens.push(desvantagem)
            })
            this.setState( {...this.state, desvantagens:desvantagens})
        })
    }

    desvantagem_selecionada(item){ 

        let state = this.state
        let naoTem = true
        state.state.modelo.ficha.desvantagens.map(i => naoTem = item.desvantagem.id === i.id ? false : true)

        if (naoTem) {
            state.state.modelo.ficha.desvantagens.push(item.desvantagem)            
            item.selecionada = true;
            this.props.setaModelo(state.state)
        }
        else{
            this.props.mensagem(`A vantagem ${item.desvantagem.name} já foi selecionada!`)
        }        
 
    }

    render_desvantagens_linha(){

        let desvantagens = this.state.desvantagens ? this.state.desvantagens : []
        return desvantagens.map((item) =>{            
                if (item.visualizar && !item.selecionada){
                    let desvantagem = item.desvantagem
                    return  (
                        <tr key={desvantagem.id}> 
                            <th>{desvantagem.name}</th>
                            <th>{desvantagem.description}</th>
                            <th>{desvantagem.cost}</th>
                            <th>
                                <Button 
                                
                                classes='is-success' 
                                click={()=>{this.desvantagem_selecionada(item)}}>
                                    <Icon icon='add-circle-outline'/>   
                                </Button>
                                
                            </th>
                        </tr> 
                    )
                }
                else {
                    return null
                }
            }
        )
    }

    filtra(event) {

        let palavras = event.target.value.toUpperCase().split(' ');
        let desvantagens = this.state.desvantagens

        for (let i = 0; i < palavras.length; i++) {            
            let regexp = new RegExp(palavras[i]);           
            if (i === 0) {
                desvantagens.forEach((item) => {
                    let nome = item.desvantagem.name.toUpperCase()

                    if (regexp.test(nome)) {
                        item.visualizar = true;                        
                    } else {
                        item.visualizar = false;
                    }
                });                

            }
            else {
                desvantagens.filter(item => item.visualizar).forEach((item) => {
                    let nome = item.desvantagem.name.toUpperCase()

                    if (regexp.test(nome)) {
                        item.visualizar = true;                        
                    } else {
                        item.visualizar = false;
                    }
                });
            }
        }

        this.setState( {...this.state, desvantagens:desvantagens})
    }

    render_desvantagens(){

        
        return (
            <div className="table-container">
                <table className="table is-striped is-narrow is-hoverable is-fullwidth">
                    <thead> 
                        <tr>
                            <th>Nome</th> 
                            <th>Descrição</th> 
                            <th>Custo</th> 
                            <th></th>
                        </tr>
                    </thead> 
                    <tbody>
                        {this.render_desvantagens_linha()}
                    </tbody>
                </table>
            </div>
        )
    }

    render_interior(){
        return (
            <React.Fragment>
                <div className="column">
                    <div className="columns">
                        <div className="column">
                            <Input onChange={(event)=>{this.filtra(event)}} id='buscadesvantagem' nome='Pesquisar'  placeholder='Pesquisa desvantagem'/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            {this.render_desvantagens()}
                        </div>
                    </div>    
                </div>            
            </React.Fragment>
        )
    }
    render() {

        return (        
            <Panel 
                icon={this.props.icon}
                titulo='Desvantagens'  
                botaoAnterior={true}
                state={this.state.state} 
                passoAnterior={this.props.passoAnterior}
                proximoPasso={this.props.proximoPasso}>
                    {this.render_interior()}
            </Panel>
        )
    }    
}


export default Desdesvantagem

