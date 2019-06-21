import React from 'react'

import github from '../../imgs/github.png'
import stackoverflow from '../../imgs/stackoverflow.png'
import medium from '../../imgs/medium.png'
import twitter from '../../imgs/twitter.png'

import './footer.css'
export default props => (
    <footer className="footer">
        <div class="container">
            <p>
            © 2019 Lário Diniz 
            
            <span class="is-pulled-right">
            <a href="https://github.com/lariodiniz" target="_blank" rel="noopener noreferrer">
                <img src={github} alt='Logo do GitHub'/>
            </a>
            <a href="https://pt.stackoverflow.com/users/74344/l%C3%A1rio-diniz" target="_blank" rel="noopener noreferrer">
                <img src={stackoverflow} alt='Logo do Stack Overflow'/>
            </a>
            <a href="https://medium.com/@lariodiniz" target="_blank" rel="noopener noreferrer">
                <img src={medium} alt='Logo do Medium'/>
            </a>
            <a href="https://twitter.com/lariodiniz" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt='Logo do Twitter'/>
            </a>  
            </span>
            </p>
        </div>
  </footer>
)
