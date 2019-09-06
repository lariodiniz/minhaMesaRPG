import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { constantes } from '../../constants'

import MostraFicha3DeT from '../ficha3DeT/mostraFicha'
import Visualiza3DeT from './visualiza3DeT'
import { modelo as modelo3DeT } from '../ficha3DeT/modelo'
import  Loading  from  '../../common/templates/loading/loading'


class VisualizaPersonagens extends Component {
    
    constructor(props) {
        super(props)
        this.state = {type:'loading', ficha:{}}

    }

    componentWillMount(){

        let system = this.props.match.params.system
        let id =this.props.match.params.id

        if (system === '3deT') {
            axios.get(`${constantes.API_URL}/api/tresDeT/personagem/${id}`).then((resp) =>{
                const { user } = this.props.auth
                
                if (user && resp.data.user === user.user_id){
                    this.setState({type: 'private', ficha: resp.data})
                }
                else {
                    this.setState({type: 'public', ficha: resp.data})    
                }
            }).catch( (e) => {
                this.props.history.push("/Dashboard");
            })
        }


    }

    render_public(){
        let system = this.props.match.params.system        
        if (system === '3deT') {
            let _modelo= JSON.parse(JSON.stringify(modelo3DeT))

            let pericias = this.state.ficha.expertise
            this.state.ficha.specializations.map(item => pericias.push({id:'ESP'+item.id, name:'Especialização - '+item.name}))

            _modelo.sistemaId = this.state.ficha.system
            _modelo.ficha.nome = this.state.ficha.name
            _modelo.ficha.pontos = this.state.ficha.points
            _modelo.ficha.caracteristicas.forca = this.state.ficha.force
            _modelo.ficha.caracteristicas.habilidade = this.state.ficha.abiliity
            _modelo.ficha.caracteristicas.resistencia = this.state.ficha.resistance
            _modelo.ficha.caracteristicas.armadura = this.state.ficha.armor
            _modelo.ficha.caracteristicas.poderDeFoco = this.state.ficha.fire_power
            _modelo.ficha.caracteristicas.pontosDeVida = this.state.ficha.health_points
            _modelo.ficha.caracteristicas.pontosDeMagia = this.state.ficha.magic_points
            _modelo.ficha.caracteristicas.pontosDeExperiencia = this.state.ficha.experience_points
            _modelo.ficha.vantagens = this.state.ficha.benefits
            _modelo.ficha.desvantagens = this.state.ficha.disadvantages
            _modelo.ficha.vantagensUnicas = this.state.ficha.unique_benefits
            _modelo.ficha.pericias = pericias
            _modelo.ficha.tiposDeDano = this.state.ficha.damage_types
            _modelo.ficha.magiasConhecidas = this.state.ficha.magic
            _modelo.ficha.dinheiroEItens = this.state.ficha.items
            _modelo.ficha.Historia = this.state.ficha.story
            return (
                <div className='section'>
                    <div className='columns'>
                        <div className='column'>
                        <MostraFicha3DeT state={{modelo: _modelo}} tipo='PUBLIC'/>
                        </div>
                    </div>
                    
                </div>
                
                )
        }
    }


    render_private(){
        let id = this.props.match.params.id
        let ficha = {...this.state.ficha, id:id}
        return <Visualiza3DeT state={ficha}/>
    }


    render() {

        let type = this.state.type

        if (type === 'public') {
            return this.render_public()
        }
        else if (type === 'private') {
            return this.render_private()
        }
        else{
            return <Loading />
        }

    }
}

const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps, null)(VisualizaPersonagens)



