import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { constantes } from '../../constants'
import './apagaFicha'


class ApagaFicha extends Component {
    

    Apaga(){

        const { user } = this.props.auth

        if (user){
            let system = this.props.match.params.system
            let id =this.props.match.params.id
    
            if (system === '3deT') {
                axios.delete(`${constantes.API_URL}/api/tresDeT/personagem/${user.user_id}/${id}`).then((resp) =>{
                    this.props.history.push("/Dashboard");
                    
                }).catch( (e) => {
                    console.log(e)
                })
            }
        }

       
    }
    
    render() {

        return (
            <div className='container'>
                <section className='section'>
                    <p><strong>Personagem: </strong>{this.props.match.params.name}</p>
                    <p><strong>Sistema: </strong>{this.props.match.params.system}</p>
                    
                </section>
                <div className='fot_apaga_ficha'>
                    <div className='columns'>
                        <div className='column'>
                            <NavLink to={`/Personagem/${this.props.match.params.system}/${this.props.match.params.id}`} className="button is-success">
                                Não</NavLink>                    
                            <button onClick={()=>this.Apaga()} className='button is-danger is-pulled-right'>Sim</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps, null)(ApagaFicha)
