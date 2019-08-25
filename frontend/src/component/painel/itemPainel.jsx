
import React from 'react'

import './painel.css'

export default props => (        
    <div className='column'>
    <div className="card">
        <header className="card-header">
            <p className="card-header-title">{props.title}</p>
        </header>
        <div className="card-content">
            <div className="content">
                <p>{props.description}</p>
            </div>
        </div>
        <footer className="card-footer">
            <button href="#" className="card-footer-item">Entrar</button>
        </footer>
    </div>
</div>
)

