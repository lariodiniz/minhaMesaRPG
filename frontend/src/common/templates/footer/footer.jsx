import React from 'react'

import github from '../../../assets/imgs/github.png'
import stackoverflow from '../../../assets/imgs/stackoverflow.png'
import medium from '../../../assets/imgs/medium.png'
import twitter from '../../../assets/imgs/twitter.png'

import './footer.css'
export default props => (
    <footer data-test='footer' className="footer">
        <div className="container">
            <p>
            © 2019 Lário Diniz 
            
            <span className="is-pulled-right">
            <a data-test='link_github' href="https://github.com/lariodiniz" target="_blank" rel="noopener noreferrer">
                <img src={github} alt='Logo do GitHub'/>
            </a>
            <a data-test='link_stackoverflow' href="https://pt.stackoverflow.com/users/74344/l%C3%A1rio-diniz" target="_blank" rel="noopener noreferrer">
                <img src={stackoverflow} alt='Logo do Stack Overflow'/>
            </a>
            <a data-test='link_medium' href="https://medium.com/@lariodiniz" target="_blank" rel="noopener noreferrer">
                <img src={medium} alt='Logo do Medium'/>
            </a>
            <a data-test='link_twitter' href="https://twitter.com/lariodiniz" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt='Logo do Twitter'/>
            </a>  
            </span>
            </p>
        </div>
  </footer>
)
