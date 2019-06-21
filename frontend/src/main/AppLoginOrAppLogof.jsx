import '../common/templates/dependencies'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import AppLogin from '../component/appLogin/appLogin'
import AppLogof from '../component/appLogof/appLogof'
import { validateToken } from '../component/auth/authActions'

class AppLoginOrAppLogof extends Component {

    componentWillMount() {
        if(this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth

        if(user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token
            return <AppLogin>{this.props.children}</AppLogin>
        } else if(!user && !validToken) {
            return <AppLogof>{this.props.children}</AppLogof>
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AppLoginOrAppLogof)