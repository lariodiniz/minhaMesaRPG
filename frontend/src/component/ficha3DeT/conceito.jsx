import React, { Component } from 'react'
import Button from '../../common/templates/button/button'
import Input from '../../common/templates/input/input'

class Conceito extends Component {

    constructor(props){
        super(props);
        this.state = { nome: '', pontos: 0, corInput:{nome:'primary', pontos:'primary'}, mensagem:''}
        
    }    

    proximo(nome, pontos) {

        if ((!nome) || (nome <=0 )){
            let state = {...this.state}
            state.corInput.nome = 'warning'
            state.mensagem = 'Informe um nome para o seu personagem!'
            this.setState(state)
        }
        else if ((!pontos) || (pontos <=0 )){
            let state = {...this.state}
            state.corInput.pontos = 'warning'
            state.mensagem = 'Informe um nome os pontos do personagem!'
            this.setState(state)
        }
        else {
            this.props.proximoPasso(nome, pontos)
        }

        

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

    render() {
    
    let { nome, pontos } = this.state
    

    return (        
    <section className='section'>
        {this.render_mensagem()}
        <div className="container">                
            <h1 className="title title3DEt">Conceito</h1>
        </div>
        
        <div className='container'>
            <div className="columns">
                <div className="column is-four-fifths">
                    <Input  id='nome' nome='Nome' cor={this.state.corInput.nome} placeholder='escreva seu nome' 
                        value={this.state.nome}
                        onChange={this.changeNome.bind(this)}
                        />
                </div>
                <div className="column">
                <Input  id='pontos' nome='Pontos' cor={this.state.corInput.pontos} type='number'
                        value={this.state.pontos}
                        onChange={this.changePontos.bind(this)}
                        />                                        
                </div>                
            </div>
            <Button
                classes="is-primary is-rounded is-pulled-right"
                buttonText='Próximo' click={() => this.proximo(nome, pontos)}/>
        </div>
    </section>    
)
}    
}


export default Conceito

