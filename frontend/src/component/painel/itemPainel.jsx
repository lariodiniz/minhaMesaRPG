
import React from 'react'

import './painel.css'
import If from '../../common/utils/if'
import { NavLink } from 'react-router-dom'

export default props => {

    return (        
    <div className='column'>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">{props.title}

                </p>
                <If test={props.system}>
                        <span className='tag is-small is-info is-pulled-right'>{props.system}</span>
                    </If>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>{props.description}</p>
                </div>
            </div>
            <footer className="card-footer">
            <NavLink to={props.slug} className="card-footer-item">
                Entrar</NavLink>
            </footer>
        </div>
        </div>
)
}


