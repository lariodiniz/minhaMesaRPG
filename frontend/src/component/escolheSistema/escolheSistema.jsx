import React, { Component } from 'react'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

const SISTEMAS = [
    {id:1, nome:'Tormenta20'},
    {id:2, nome:'Tagmar'}
]

class EscolherSistema extends Component {


    constructor(props) {
        super(props)
        this.state = {sistemas: SISTEMAS}
    }
    
    render_sistema(){
        return this.state.sistemas.map((sistema=>{
            return <div><button onClick={() => this.props.click(sistema.id)}>{sistema.nome}</button><br/></div>
        })) 
    }


    render() {
        return (
            <React.Fragment>
                {this.render_sistema()}
            </React.Fragment>
        )
        

    }
}


//const mapDispatchToProps = dispatch => bindActionCreators({ login, signup },dispatch)
//export default connect(null, mapDispatchToProps)(Mesas)

export default EscolherSistema