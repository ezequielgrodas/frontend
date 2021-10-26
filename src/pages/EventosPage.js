import React from 'react';
import '../styles/components/pages/EventosPage.css'


const EventosPage = (props) => {
    return (
        <main>
        <div className="bannerSeccion">
          
            <h5>Eventos</h5>
          
        </div>
        <div className="infoImportanteEventos">
            <p>Recorda que podes adquirir todas las entradas ingresando a <span><a href="" target="blank">este enlace.</a></span></p>
    
        </div>
        <div className="contenedorEventos">
            <div className="eventoDelMes">
                <div className="bannerEventos">
                    <h5>Evento del mes</h5>
    
                </div>
                <div className="contenedorEventoDelMes">
                    <div className="contenidoEventoDelMes">
                        <img src="images/drab majesty carrousel.jpg" alt=""/>
                        <span className="infoEventoDelMes">
                            <em>Drab Majesty @Niceto</em>
                            <div className="division"></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, consequuntur. Quia inventore, voluptatem saepe soluta facere nulla illum itaque blanditiis. Aut repudiandae saepe non ullam? Ea velit vitae nostrum quae aspernatur est praesentium iure optio ex fuga dolorem odit recusandae in, eveniet dignissimos, ipsum mollitia, sed accusantium unde? Laboriosam, facere.</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="proximosEventos">
                <div className="bannerEventos">
                    <h5>Proximos eventos</h5>
    
                </div>
                <div className="proximosEventos-container">
                    <div className="row">
                        <div className="col-6">
                            <div className="cajaEvento">
                                <img src="images/mbv carrousel.jpg" alt=""/>
                                <span className="infoEventoProx">
                                    <em>my bloody valentine</em>
                                    <div className="division"></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magnam? Perspiciatis, totam!</p>
    
                                </span>
    
                            </div>
    
                        </div>
                        <div className="col-6">
                            <div className="cajaEvento">
                                <img src="images/Dead Can Dance carrousel.jpg" alt=""/>
                                <span className="infoEventoProx">
                                    <em>Dead Can Dance</em>
                                    <div className="division"></div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magnam? Perspiciatis, totam!</p>
    
                                </span>
    
                            </div>
    
                        </div>
    
                    </div>
                
    
                </div>
    
            </div>
    
        </div>
        
      </main>
     
    
    )
}

export default EventosPage;