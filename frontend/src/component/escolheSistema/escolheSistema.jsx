import React, { Component } from 'react'
import axios from 'axios'
import { constantes } from '../../constants'

//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

class EscolherSistema extends Component {


    constructor(props) {
        super(props)
        this.state = {sistemas: []}
    }

    componentWillMount(){
        

        
        axios.get(`${constantes.API_URL}/api/system/`).then((resp) =>{
            this.setState( {...this.state, sistemas:resp.data})
            
        })

        
    }
    
    render_sistema(){
        return this.state.sistemas.map((sistema=>{
            return (
                <div className='column' key={sistema.id}>                    
                    <div className="card">
                        <div className="card-content">     
                            <div className="content">  
                                <h3>{sistema.name}</h3>  
                                <p>{sistema.description}</p>
                                <br />
                                <p>mais informações em:</p>
                                <p><a href={sistema.site} rel="noopener noreferrer" target='_blank'>{sistema.site}</a>.</p>
                            </div>
                        </div>
                        <footer className="card-footer">
                            <button onClick={() => this.props.click(sistema.id, sistema.name)} 
                                className="card-footer-item">selecionar</button>
                        </footer>
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