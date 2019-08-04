import React, { Component } from 'react'
import EscolherSistema from '../escolheSistema/escolheSistema'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'


class Ficha extends Component {
    
    constructor(props) {
        super(props)
        this.state = {sistema: ''}
    }

    define_sistema(sist){
        this.setState( {...this.state, sistema:sist})
    }


    render() {
        let { sistema } = this.state;
        console.log(this.state.sistema)

        if (sistema === '') {
            return (
                <div>
                <button onClick={() => this.define_sistema('teste')}>a</button>
                <EscolherSistema click={this.define_sistema.bind(this)}/>
                </div>
            )
        }
        else{
            return (

                <p>ficha</p>
            )
        }

    }
}


//const mapDispatchToProps = dispatch => bindActionCreators({ login, signup },dispatch)
//export default connect(null, mapDispatchToProps)(Mesas)

export default Ficha