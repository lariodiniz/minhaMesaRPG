
import React from 'react'

import './painel.css'

export default props => (        
    <section className='section painel_dashboard'>
        <div className="container">                
            <h1 className="title ">{props.title}</h1>
        </div>
        <div className='container'>
            {props.children}   
        </div>
    </section>    
)

