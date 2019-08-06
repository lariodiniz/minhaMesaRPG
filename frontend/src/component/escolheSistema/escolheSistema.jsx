import React, { Component } from 'react'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

const SISTEMAS = [
    {id:1, nome:'Tormenta20', descricao: 'Tormenta20 blablabla', site:'https://www.jamboeditora.com.br'},
    {id:2, nome:'Tagmar', descricao: 'Tormenta20 blablabla', site:'https://www.tagmar.com.br'},
]

class EscolherSistema extends Component {


    constructor(props) {
        super(props)
        this.state = {sistemas: SISTEMAS}
    }
    
    render_sistema(){
        return this.state.sistemas.map((sistema=>{
            return (
                <div className='column' onClick={() => this.props.click(sistema.id)}>
                    
                    <div className="card">
                        <div className="card-content">     
                            <div className="content">  
                                <h3>{sistema.nome}</h3>  
                                <p>{sistema.descricao}</p>
                                <br />
                                <p>mais informações em <a href={sistema.site} rel="noopener noreferrer" target='_blank'>{sistema.site}</a>.</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                )
        })) 
    }


    render() {
        return (
            <React.Fragment >
                {this.render_sistema()}
            </React.Fragment>
        )
        

    }
}


//const mapDispatchToProps = dispatch => bindActionCreators({ login, signup },dispatch)
//export default connect(null, mapDispatchToProps)(Mesas)

export default EscolherSistema