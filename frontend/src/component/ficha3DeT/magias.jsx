import React, { Component } from 'react'
import axios from 'axios'
import { constantes } from '../../constants'
import Input from '../../common/templates/input/input'
import Button from '../../common/templates/button/button'
import Icon from '../../common/templates/icon/icon'
import Panel from './panel'

class Magias extends Component {

    constructor(props){
        super(props);
        this.state = {state:props.state, magias:[]}
    }    

    componentWillMount(){

        axios.get(`${constantes.API_URL}/api/tresDeT/magias/`).then((resp) =>{
            let magias = []
            resp.data.map((item) => {
                let magia = {magia:item, visualizar:false, selecionada:false}
                magias.push(magia)
            })
            this.setState( {...this.state, magias:magias})
        })
    }

    magia_selecionada(item){ 

        let state = this.state
        state.state.modelo.ficha.magiasConhecidas.push(item.magia)            
        item.selecionada = true;
        this.props.setaModelo(state.state)
    }

    render_magias_linha(){

        let magias = this.state.magias ? this.state.magias : []
        return magias.map((item) =>{            
                if (item.visualizar && !item.selecionada){
                    let magia = item.magia
                    return  (
                        <tr key={magia.id}> 
                            <th>{magia.name}</th>
                            <th>{magia.description}</th>
                            <th>{magia.cost}</th>
                            <th>
                                <Button 
                                
                                classes='is-success' 
                                click={()=>{this.magia_selecionada(item)}}>
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
        let magias = this.state.magias

        for (let i = 0; i < palavras.length; i++) {            
            let regexp = new RegExp(palavras[i]);           
            if (i === 0) {
                magias.forEach((item) => {
                    let nome = item.magia.name.toUpperCase()

                    if (regexp.test(nome)) {
                        item.visualizar = true;                        
                    } else {
                        item.visualizar = false;
                    }
                });                

            }
            else {
                magias.filter(item => item.visualizar).forEach((item) => {
                    let nome = item.magia.name.toUpperCase()

                    if (regexp.test(nome)) {
                        item.visualizar = true;                        
                    } else {
                        item.visualizar = false;
                    }
                });
            }
        }

        this.setState( {...this.state, magias:magias})
    }

    render_magias(){

        
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
                        {this.render_magias_linha()}
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
                            <Input onChange={(event)=>{this.filtra(event)}} id='buscamagia' nome='Pesquisar'  placeholder='Pesquisa magia'/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            {this.render_magias()}
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
                titulo='Magias'  
                botaoAnterior={true}
                state={this.state.state} 
                passoAnterior={this.props.passoAnterior}
                proximoPasso={this.props.proximoPasso}>
                    {this.render_interior()}
            </Panel>
        )
    }    
}

export default Magias

