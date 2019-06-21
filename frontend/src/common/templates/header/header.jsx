import React from 'react'


import logo from '../../imgs/icons/logo.png'

export default props => (
    <header className='hero-head'>
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={logo} alt="Logo"/>
                    </a> 
                    <span className="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>   
                </div>
                <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">                        
                        <a className="navbar-item is-active" href="/" >
                            Home
                        </a>
                        <font style={{vertical_align: 'inherit',}}>
                            <span className="navbar-item">
                                <a href='#/login' className="button is-inverted">
                                    <span>
                                        <font style={{vertical_align: 'inherit',}}>
                                            Login
                                        </font>
                                    </span>
                                </a>
                            </span>
                        </font>
                        
                    </div>    
                </div>
            </div>    
        </nav>
    </header>
)
/*
<div className="hero-head">
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="../">
                        <img src="images/logo.png" alt="Logo" />
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end">
                            <span className="navbar-item">
                                <a href="#">
                                    Home
                                </a>
                            </span>
                            <span className="navbar-item">
                                <a href="#">
                                   About
                                </a>
                            </span>
                            <span className="navbar-item">
                                <a href="#">
                                    Tours
                                </a>
                            </span>
                            <span className="navbar-item">
                                <a href="#">
                                    Hotel
                                </a>
                            </span>
                             <span className="navbar-item">
                                <a href="#">
                                    Blog
                                </a>
                            </span>
                             <span className="navbar-item">
                                <a href="#">
                                    Contact
                                </a>
                            </span>
                             <span className="navbar-item">
                                <a href="#">
                                   <span className="icon">
                                        <i className="fa fa-search"></i>
</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            </div>*/