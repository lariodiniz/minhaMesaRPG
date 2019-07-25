//import './auth.css'
import React, { Component } from 'react'
//import { reduxForm, Field } from 'redux-form'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
//import { login, signup } from './authActions'


import Header  from '../../common/templates/header/header'
import Footer  from '../../common/templates/footer/footer'


class AppLogin extends Component {
    
    constructor(props) {
        super(props)
        //this.state = {loginMode: true}
    }


    render() {
        return (
            <React.Fragment>
            <Header />
            <div className='background'></div>
            <div className='hero-body'>        
            <div className='panel-block panel'>
                <div className="container has-text-centered">                
                    <h1 data-test='title' className="title">
                        Logado
                    </h1>
                </div>
            </div>
        </div>

            <Footer />
            </React.Fragment>

        )
    }
}


//AppLogin = reduxForm({form: 'authForm'})(AppLogin)
//const mapDispatchToProps = dispatch => bindActionCreators({ login, signup },dispatch)
//export default connect(null, mapDispatchToProps)(AppLogin)
export default AppLogin