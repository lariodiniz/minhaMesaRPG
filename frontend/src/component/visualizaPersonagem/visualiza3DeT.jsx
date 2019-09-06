import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import Button from '../../common/templates/button/button'
import Icon from '../../common/templates/icon/icon'
import Input from '../../common/templates/input/input'
import If from '../../common/utils/if'
import MostraFicha3DeT from '../ficha3DeT/mostraFicha'
import { modelo as modelo3DeT } from '../ficha3DeT/modelo'
import { renderToString } from "react-dom/server";
import './visualiza3DeT.css'

class Visualiza3DeT extends Component {
    

    constructor(props) {
        super(props)
        this.state = { ...props.state, 
                        health_points_atu: props.state.health_points,
                        magic_points_atu: props.state.magic_points}
    }

    changePV(){
        document.getElementById('title_modal').innerHTML = 'Pontos de Vida'
        document.getElementById('modal').classList.add("is-active"); 
    }

    changePM(){
        document.getElementById('title_modal').innerHTML = 'Pontos de Magia'
        document.getElementById('modal').classList.add("is-active"); 
    }

    some_modal(modal){
        document.getElementById(modal).classList.remove("is-active");   
    }

    alteraItem(){
        let tipo = document.getElementById('title_modal').innerHTML
        let state = {...this.state}
        if (tipo === 'Pontos de Vida'){
            let alt = parseInt(state.health_points_atu)
            alt += parseInt(document.getElementById('alteraItem').value)
            state.health_points_atu = alt
        }
        else{
            let alt = parseInt(state.magic_points_atu)
            alt += parseInt(document.getElementById('alteraItem').value)
            state.magic_points_atu = alt
        }

        this.setState(state)
        this.some_modal('modal')

    }

    render_modal(){
        return (
            <div id="modal" className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p id='title_modal'></p>
                    </header>
                    <section className="modal-card-body">
                        <Input id='alteraItem' nome='Alterar'  />
                    </section>
                    <footer className="modal-card-foot">
                        <button onClick={() => this.some_modal('modal')} className="button">Sair</button>
                        <button onClick={()=> this.alteraItem()} className="button is-success is-pulled-right">Alterar</button>
                    </footer>
                </div>
            </div>
            
        )
    }


    render_habilidade(){
        

        return (
                <div className="grupo_panel">
                    <p className=" title grupo_panel_title">Caracteristicas</p>                    
                    <div className="grupo_panel_body">
                        <div className='section'>
                            <div className="columns is-mobile">
                                <div className="column area">
                                    <p><strong>FOR: </strong> {'0'+this.state.force}</p>
                                </div>
                                <div className="column area">
                                    <p><strong>HAB: </strong> {'0'+this.state.abiliity}</p>
                                </div>
                                <div className="column area">
                                    <p><strong>RES: </strong> {'0'+this.state.resistance}</p>
                                </div>
                                <div className="column area">
                                    <p><strong>ARM: </strong> {'0'+this.state.armor}</p>
                                </div>
                                <div className="column area">
                                    <p><strong>PDF: </strong> {'0'+this.state.fire_power}</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <p><strong>Tipos de dano: </strong> {this.state.damage_types}</p>
                                </div>
                                <div className="column">
                                    <p><strong>Itens: </strong> {this.state.items}</p>
                                </div>
                                <div className="column area">
                                    <p><strong>História: </strong> {this.state.story}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }


    render_item(lista){
        
        return lista.map(
            item =>(
                <div key={item.id} className="list-item">
                    <div className='container'>
                        <p><strong>{item.name}</strong></p>
                        <p><span >{item.description}</span></p>
                        </div>
                    <div className='container'>
                        <p className='is-italic'><span >Pagina {item.page} do livro {item.book}</span></p>
                    </div>
                </div>
        ))
    }

    render_lista(title, render){
        return (<div className="grupo_panel">
                <p className=" title grupo_panel_title">{title}</p>                    
                <div className="grupo_panel_body">
                    <div className="list is-hoverable">
                        {render}
                    </div>
                </div>
            </div>
        )
    }

    render_vantagem(){
        let vantagens = this.state.benefits ? this.state.benefits : []
        return this.render_item(vantagens)
    }
    
    render_vantagens(){
        return this.render_lista('Vantagens',this.render_vantagem())
    }

    render_desvantagem(){
        let desvantagens = this.state.disadvantages ? this.state.disadvantages : []
        return this.render_item(desvantagens)
    }

    render_desvantagens(){
        return this.render_lista('Desvantagens',this.render_desvantagem())
    }

    render_magia(){
        let magias = this.state.magic ? this.state.magic : []
        return magias.map(
            (magia) => {
                return (
                    <div key={magia.id} className="list-item">
                    <div className='container'>
                        <p><strong>{magia.name}</strong></p>
                    </div>
                    <div className='container'>
                        <p><span className='is-pulled-left'>{magia.cost}</span> 
                            <span className='is-pulled-right'>{magia.duration}</span>
                        </p>
                    </div>
                    <br />
                    <div className='container'>
                        <p><span >{magia.description}</span></p>
                    </div>
                    <div className='container'>
                        <p className='is-italic'><span >Pagina {magia.page} do livro {magia.book}</span></p>
                    </div>
                </div>
                            
                            )}
        ) 
    }

    render_magias(){
        return this.render_lista('Magias',this.render_magia())
    }

    mostraGrupo(grupo){
        
        document.getElementById('grupo_habilidade').classList.add("is-invisible");  
        document.getElementById('grupo_vantagens').classList.add("is-invisible");  
        document.getElementById('grupo_desvantagens').classList.add("is-invisible");  
        document.getElementById('grupo_magias').classList.add("is-invisible");  

        document.getElementById(grupo).classList.remove("is-invisible"); 
        document.getElementById('grupo_mostrar').classList.remove("is-invisible");  

    }


    render_modal2(){
        return (
            <div id="modal2" className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p id='title_modal2'></p>
                    </header>
                    <section id='body_modal2' className="modal-card-body">
                        
                    </section>
                    <footer className="modal-card-foot">
                        <button onClick={() => this.some_modal('modal2')} className="button">Sair</button>
                    </footer>
                </div>
            </div>
            
        )
    }    

    render_ficha(_modelo){
        return (<div className='tamA4'>
                    <MostraFicha3DeT state={{modelo: _modelo}} tipo='PUBLIC'/>
                </div>)
    }

    geraPDF(){

        let _modelo= JSON.parse(JSON.stringify(modelo3DeT))

        let pericias = this.state.expertise
        this.state.specializations.map(item => pericias.push({id:'ESP'+item.id, name:'Especialização - '+item.name}))

        _modelo.sistemaId = this.state.system
        _modelo.ficha.nome = this.state.name
        _modelo.ficha.pontos = this.state.points
        _modelo.ficha.caracteristicas.forca = this.state.force
        _modelo.ficha.caracteristicas.habilidade = this.state.abiliity
        _modelo.ficha.caracteristicas.resistencia = this.state.resistance
        _modelo.ficha.caracteristicas.armadura = this.state.armor
        _modelo.ficha.caracteristicas.poderDeFoco = this.state.fire_power
        _modelo.ficha.caracteristicas.pontosDeVida = this.state.health_points
        _modelo.ficha.caracteristicas.pontosDeMagia = this.state.magic_points
        _modelo.ficha.caracteristicas.pontosDeExperiencia = this.state.experience_points
        _modelo.ficha.vantagens = this.state.benefits
        _modelo.ficha.desvantagens = this.state.disadvantages
        _modelo.ficha.vantagensUnicas = this.state.unique_benefits
        _modelo.ficha.pericias = pericias
        _modelo.ficha.tiposDeDano = this.state.damage_types
        _modelo.ficha.magiasConhecidas = this.state.magic
        _modelo.ficha.dinheiroEItens = this.state.items
        _modelo.ficha.Historia = this.state.story

        let div = document.createElement("div");
        div.innerHTML = renderToString(this.render_ficha(_modelo))
        document.body.appendChild(div)
        html2canvas(div).then(canvas => {
            
            let imgData = canvas.toDataURL('image/jpeg');
            let imgWidth = 210; 
            let pageHeight = 295;  
            let imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let doc = new jsPDF('p', 'mm');
            let position = 1;
            
            doc.addImage(imgData, 'PNG', 1, position, imgWidth, imgHeight);
            heightLeft -= pageHeight; 
            
            while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              doc.addPage();
              doc.addImage(imgData, 'PNG', 1, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
            }
            doc.save(_modelo.ficha.nome+'.pdf');
            document.body.removeChild(div)
        });






        /*let doc = new jsPDF('portrait', 'pt', 'a4')

        doc.fromHTML(
            renderToString(<div className='section'>
                <div className='columns'>
                    <div className='column'>
                    <MostraFicha3DeT state={{modelo: _modelo}} tipo='PUBLIC'/>
                    </div>
                </div>
            </div>)
            )

        doc.save(_modelo.ficha.nome+'.pdf')*/


        /*
                let margins = { top: 40, bottom: 60, left: 40, width: 1000};
        doc.fromHTML(
            <div className='section'>
                <div className='columns'>
                    <div className='column'>
                    <MostraFicha3DeT state={{modelo: _modelo}} tipo='PUBLIC'/>
                    </div>
                </div>
            </div>
            ,
                       margins.left, // x coord
                       margins.top, { pagesplit: true },
                       function(a){
                            doc.save(_modelo.ficha.nome+'.pdf');
                    });
                    */
    }

    render() {
        let temMagia = this.state.magic.length > 0
        let temVantagem = this.state.benefits.length > 0
        let temDesvantatem = this.state.disadvantages.length > 0
        
        
        return (
            
            <React.Fragment>
                <div className='container'>
                    <section className='section title_area'>
                        <div className='columns'>
                            <div className='column'> 
                                <h2 className="title is-4 has-text-black">{this.state.name}</h2>
                            </div>
                            
                        </div>
                    </section>
                    <hr />
                    <section className='section title_area'>
                        <div className='columns'>
                            <div className='column'>
                                <div className='columns area is-mobile'>
                                     <div className='column'> 
                                        <h3 className="title is-4 has-text-black">PV</h3> 
                                    </div>                                 
                                    <div className='column'> 
                                        <p><strong>Total:</strong> {this.state.health_points}</p>
                                    </div>
                                    <div className='column'> 
                                        <p><strong>Atuais:</strong> {this.state.health_points_atu}</p>
                                    </div>     
                                    <div className='column'> 
                                        <Button 
                                            classes='is-success' 
                                            click={()=>{this.changePV()}}>
                                                <Icon icon='create'/>   
                                            </Button>
                                    </div>                          
                                </div>
                            </div>
                            <div className='column'>
                                <div className='columns area is-mobile'> 
                                    
                                <div className='column'> 
                                        <h3 className="title is-4 has-text-black">PM</h3> 
                                    </div>     
                                    
                                                                      
                                    <div className='column'> 
                                        <p><strong>Total:</strong> {this.state.magic_points}</p>
                                    </div>
                                    <div className='column'> 
                                        <p><strong>Atuais:</strong> {this.state.magic_points_atu}</p>
                                    </div>     
                                    <div className='column'> 
                                        <Button 
                                            classes='is-success' 
                                            click={()=>{this.changePM()}}>
                                                <Icon icon='create'/>   
                                            </Button>
                                    </div>                          
                                </div>
                            </div>
                        </div>
                    </section>
                    
                        
                    <section className='section'>
                        <nav className="menuSelesct">
                            <ul>
                                <li><button onClick={() => this.mostraGrupo('grupo_habilidade')} className='button'>Caracteristicas</button></li>
                                <If test={temVantagem}>
                                    <li><button onClick={() => this.mostraGrupo('grupo_vantagens')}  className='button'>Vantagens</button></li>
                                </If>
                                <If test={temDesvantatem}>
                                    <li><button onClick={() => this.mostraGrupo('grupo_desvantagens')}  className='button'>Desvantagens</button></li>
                                </If>                                
                                <If test={temMagia}>
                                    <li><button onClick={() => this.mostraGrupo('grupo_magias')}  className='button'>Magias</button></li>
                                </If>
                                
                            </ul>
                            <div className='fot'>
                                <div className='columns is-mobile'> 
                                    <div className='column'> 
                                        <NavLink to={`/Apaga/Ficha/3deT/${this.state.name}/${this.state.id}`} className="button is-danger">
                                            Apagar
                                        </NavLink>
                                    </div>
                                    <div className='column'> 
                                        <button onClick={()=>this.geraPDF()} className="button is-primary">
                                            PDF
                                        </button>
                                    </div>                                    
                                </div>
                            </div>
                        </nav>
                        <div id='grupo_mostrar' className=' is-invisible'>
                            <div id='grupo_body' >
                                <div id='grupo_habilidade' className='grupo is-invisible'>
                                    {this.render_habilidade()}
                                </div>
                                <div id='grupo_vantagens' className='grupo is-invisible'>
                                    <If test={temVantagem}>
                                        {this.render_vantagens()}
                                    </If>
                                </div>
                                <div id='grupo_desvantagens' className='grupo is-invisible'>
                                    <If test={temDesvantatem}>
                                        {this.render_desvantagens()}
                                    </If> 
                                </div>
                                <div id='grupo_magias' className='grupo is-invisible'>
                                    <If test={temMagia}>
                                        {this.render_magias()}
                                    </If>
                                </div>
                            </div>
                            <div className='foote'>
                                <button onClick={() => document.getElementById('grupo_mostrar').classList.add("is-invisible")} className="button">Sair</button>
                            </div>
                        </div>
                    </section> 
                    
                </div>

                {this.render_modal()}

                
            </React.Fragment>
        )
    }
}

export default Visualiza3DeT



