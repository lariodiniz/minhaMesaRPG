
import React from 'react'
import Button from '../../common/templates/button/button'
import If from '../../common/utils/if'
import Icon from '../../common/templates/icon/icon'

export default props => (      
    <div className='container'>
        
        <div className="container">                
            <h2 className="title3DEt">
                <Icon icon={props.icon} />
                {props.titulo}       
                <span className="tag is-white is-pulled-right">Pontos: {props.state.modelo.ficha.pontos - props.state.modelo.ficha.pontos_gastos}</span>
            </h2>     
        </div>
        
        <div className='container'>
            <div className="columns">
                {props.children} 
            </div>
            <div className="columns">
                <div className="column">
                    <If test={props.botaoAnterior}>
                        <Button
                            classes="is-warning is-rounded"
                            buttonText='Voltar' click={() => props.passoAnterior(props.state)}/>
                    </If>
                    <Button
                        classes="is-primary is-rounded is-pulled-right"
                        buttonText='Próximo' click={() => props.proximoPasso(props.state)}/>
                </div>
            </div>
        </div>
    </div>
)
