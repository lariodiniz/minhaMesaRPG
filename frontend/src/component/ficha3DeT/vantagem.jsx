import React, { Component } from 'react'
import axios from 'axios'
import { constantes } from '../../constants'
import Input from '../../common/templates/input/input'
import Panel from './panel'

class Vantagem extends Component {

    constructor(props){
        super(props);
        this.state = props.state
    }    

    componentWillMount(){

        axios.get(`${constantes.API_URL}/api/tresDeT/vantagens/`).then((resp) =>{
            this.setState( {...this.state, vantagens:resp.data})
            console.log(this.state)    
        })
    }

    render_vantagens_linha(){

        let vantagem = this.state.vantagens ? this.state.vantagens : []
        return vantagem.map(vantagem =>{            
            return  (
                <tr key={vantagem.id}> 
                    <th>{vantagem.name}</th>
                    <th>{vantagem.description}</th>
                    <th>{vantagem.cost}</th>
                </tr> 
            )
            }
        )
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
                        <div className="column is-11">
                            <Input id='buscaVantagem' nome='Pesquisar'  placeholder='Pesquisa vantagem'/>
                        </div>
                        <div className="column">
                            <button><i className={`icon ion-md-search`}></i></button>
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
                titulo='Vantagens'  
                botaoAnterior={true}
                state={this.state} 
                passoAnterior={this.props.passoAnterior}
                proximoPasso={this.props.proximoPasso}>
                    {this.render_interior()}
            </Panel>
        )
    }    
}


export default Vantagem

