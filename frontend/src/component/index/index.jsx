import React from 'react';

import Header  from '../../common/templates/header/header'
import Footer  from '../../common/templates/footer/footer'

import './index.css'
export default props => (
    <React.Fragment>
        <Header />
        <div class='background'></div>
        <div className='hero-body'>        
            <div className='panel-block panel'>
                <div className="container has-text-centered">                
                    <h1 className="title">
                        Minha Mesa RPG
                    </h1>
                    <h2 className="subtitle">
                       Seu Assistente para rolagens de dados.
                    </h2>
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>
)