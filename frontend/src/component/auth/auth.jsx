import './auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, signup } from './authActions'
import Input from '../../common/form/inputAuth'

import Header  from '../../common/templates/header/header'
import Footer  from '../../common/templates/footer/footer'

class Auth extends Component {
    
    constructor(props) {
        super(props)
        this.state = {loginMode: true}
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }

    onSubmit(values) {        
        const { login, signup } = this.props        
        this.state.loginMode ? login(values) : signup(values)
    }

    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        return (
            <React.Fragment>
            <Header />
            <div class='background'></div>
            <div className='hero-body'>                                   
                    <div className='column is-4 is-offset-4'>                        
                        <div className='box panel_auth'>
                            <h3 class="title">Login</h3>
                            <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                                <Field component={Input} type="input" name="name"
                                    placeholder="Nome" icon='user' hide={loginMode} />
                                <Field component={Input} type="email" name="email"
                                    placeholder="E-mail" icon='mail'/>
                                <Field component={Input} type="password" name="password"
                                    placeholder="Senha" icon='lock' />
                                <Field component={Input} type="password" name="confirm_password"
                                    placeholder="Confirmar Senha" icon='lock' hide={loginMode} />
                                <button type="submit"
                                    className="button is-rounded is-pulled-right">
                                    {loginMode ? 'Entrar' : 'Registrar'}
                                </button>                                                    
                            </form>  
                            <br />
                            <button className="button is-link  is-inverted is-outlined" onClick={() => this.changeMode()}>
                                {loginMode ? 'Novo usuário? Registrar aqui!' :
                                'Já é cadastrado? Entrar aqui!'}
                            </button> 
                        </div>
                    
                    
                </div>
                
            </div> 
      
            
            <Footer />
            </React.Fragment>
                       
        )
    }
}

Auth = reduxForm({form: 'authForm'})(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup },dispatch)
export default connect(null, mapDispatchToProps)(Auth)