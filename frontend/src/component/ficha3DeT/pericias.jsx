import React, { Component } from 'react'
import axios from 'axios'
import { constantes } from '../../constants'
import Input from '../../common/templates/input/input'
import Button from '../../common/templates/button/button'
import Icon from '../../common/templates/icon/icon'
import Panel from './panel'

class Pericias extends Component {

    constructor(props){
        super(props);
        this.state = {state:props.state, vantagens:[]}
    }    

    componentWillMount(){

        axios.get(`${constantes.API_URL}/api/tresDeT/pericias/`).then((resp) =>{
            let vantagens = []
            resp.data.map((item) => {
                let vantagem = {vantagem:item, visualizar:false, selecionada:false}
                vantagens.push(vantagem)
                return null
            })
            axios.get(`${constantes.API_URL}/api/tresDeT/especializacoes/`).then((resp) =>{
                resp.data.map((item) => {
                    let i = {
                        id: 'Esp'+item.id,
                        name: 'Especialização - '+item.name,
                        description: item.description
                    }
                    
                    let vantagem = {vantagem:i, visualizar:false, selecionada:false}
                    vantagens.push(vantagem)
                    return null
                })
                this.setState( {...this.state, vantagens:vantagens})
            })
        })

        
    }

    vantagem_selecionada(item){ 

        let state = this.state
        let naoTem = true
        state.state.modelo.ficha.pericias.map(i => naoTem = item.vantagem.id === i.id ? false : true)

        if (naoTem) {
            state.state.modelo.ficha.pericias.push(item.vantagem)            
            item.selecionada = true;
            this.props.setaModelo(state.state)
        }
        else{
            this.props.mensagem(`A pericia ${item.vantagem.name} já foi selecionada!`)
        }
    }

    render_vantagens_linha(){

        let vantagens = this.state.vantagens ? this.state.vantagens : []
        return vantagens.map((item) =>{            
                if (item.visualizar && !item.selecionada){
                    let vantagem = item.vantagem
                    return  (
                        <tr key={vantagem.id}> 
                            <th>{vantagem.name}</th>
                            <th>{vantagem.description}</th>
                            <th>{vantagem.cost}</th>
                            <th>
                                <Button 
                                
                                classes='is-success' 
                                click={()=>{this.vantagem_selecionada(item)}}>
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
        let vantagens = this.state.vantagens

        for (let i = 0; i < palavras.length; i++) {            
            let regexp = new RegExp(palavras[i]);           
            if (i === 0) {
                vantagens.forEach((item) => {
                    let nome = item.vantagem.name.toUpperCase()

                    if (regexp.test(nome)) {
                        item.visualizar = true;                        
                    } else {
                        item.visualizar = false;
                    }
                });                

            }
            else {
                vantagens.filter(item => item.visualizar).forEach((item) => {
                    let nome = item.vantagem.name.toUpperCase()

                    if (regexp.test(nome)) {
                        item.visualizar = true;                        
                    } else {
                        item.visualizar = false;
                    }
                });
            }
        }

        this.setState( {...this.state, vantagens:vantagens})
    }

    render_vantagens(){

        
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
                        {this.render_vantagens_linha()}
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
                            <Input onChange={(event)=>{this.filtra(event)}} id='buscaVantagem' nome='Pesquisar'  placeholder='Pesquisa vantagem'/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            {this.render_vantagens()}
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
                titulo='Pericias'  
                botaoAnterior={true}
                state={this.state.state} 
                passoAnterior={this.props.passoAnterior}
                proximoPasso={this.props.proximoPasso}>
                    {this.render_interior()}
            </Panel>
        )
    }    
}


export default Pericias

