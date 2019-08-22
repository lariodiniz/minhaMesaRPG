
import React from 'react'
import Button from '../../common/templates/button/button'
import Input from '../../common/templates/input/input'

export default props => (        
    <section className='section'>
        <div className="container">                
            <h1 className="title ">Conceito</h1>
        </div>
        <div className='container'>
            <div className="columns">
                <div className="column is-four-fifths">
                    <Input nome='Nome' cor='primary' placeholder='escreva seu nome' 
                        value={props.nome}/>
                </div>
                <div className="column">
                    <Input nome='pontos' cor='primary' type='number' placeholder='teste' />
                </div>                
            </div>
            <Button
                classes="is-primary is-rounded is-pulled-right"
                buttonText='Próximo' click={() => props.proximoPasso(props.nome)}/>
        </div>
    </section>    
)

