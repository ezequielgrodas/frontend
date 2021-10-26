import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main>
                    <Carousel>
                        <Carousel.Item className="ItemCarrousel">
                            <img
                            className="d-block w-100"
                            src="images/Dead Can Dance carrousel.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption className="CaptionCarrousel">
                            <h3>Dead Can Dance</h3>
                            <p>Pioneros del dark-wave</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="ItemCarrousel">
                            <img
                            className="d-block w-100"
                            src="images/drab majesty carrousel.jpg"
                            alt="Second slide"
                            />

                            <Carousel.Caption className="CaptionCarrousel">
                            <h3>Drab Majesty</h3>
                            <p>Lágrimas en la pista de baile</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="ItemCarrousel">
                            <img
                            className="d-block w-100"
                            src="images/mbv carrousel.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption className="CaptionCarrousel">
                            <h3>my bloody valentine</h3>
                            <p>Melodias ahogadas en feedback</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                            
                    <br/>
                    <ul id="redes">
                    <li>
                        <a href="facebook.com" className="bi bi-facebook" ></a>
                    </li>
                    <li>
                        <a href="twitter.com" className="bi bi-twitter" ></a>
                    </li>
                    <li>
                        <a href="spotify.com" className="bi bi-spotify" ></a>
                    </li>
                    <li>
                        <a href="instagram.com" className="bi bi-instagram" ></a>
                    </li>
                    <li>
                        <a href="youtube.com" className="bi bi-youtube" ></a>
                    </li>
                    </ul>

                   
                    <div className="ultimoslanzamientos-container">
                    
                        <h4>Nuevos Lanzamientos</h4>
                        


                    
                    
                    <div className="lanzamientos-container">
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="lanzamientoRec">
                            <img src="images/Killing Joke.jpg" alt="KillingJoke"/>
                            <span className="infoLanzRec">
                                <em>Killing Joke</em>
                                <div className="division"></div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quibusdam?</p>
                
                            </span>
                            </div>
                
                        </div>
                        <div className="col-lg-4">
                            <div className="lanzamientoRec">
                            <img src="images/Slowdive.png" alt="Slowdive"/>
                            <span className="infoLanzRec">
                                <em>Slowdive</em>
                                <div className="division"></div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quibusdam?</p>
                
                            </span>
                            </div>
                
                        </div>
                        <div className="col-lg-4">
                            <div className="lanzamientoRec">
                            <img src="images/The Cure.jpg" alt="The Cure"/>
                            <span className="infoLanzRec">
                                <em>The Cure</em>
                                <div className="division"></div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quibusdam?</p>
                
                            </span>
                            </div>
                
                        </div>
                        <div className="col-lg-4">
                            <div className="lanzamientoRec">
                            <img src="images/The Pop Group.jpg" alt="The Pop Group"/>
                            <span className="infoLanzRec">
                                <em>The Pop Group</em>
                                <div className="division"></div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quibusdam?</p>
                
                            </span>
                            </div>
                
                        </div>
                        <div className="col-lg-4">
                            <div className="lanzamientoRec">
                            <img src="images/talktalkalbum.jpg.opdownload" alt="talk talk"/>
                            <span className="infoLanzRec">
                                <em>Talk Talk</em>
                                <div className="division"></div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quibusdam?</p>
                
                            </span>
                            </div>
                
                        </div>
                        <div className="col-lg-4">
                            <div className="lanzamientoRec">
                            <img src="images/ulver-flowers.jpg" alt="ulver"/>
                            <span className="infoLanzRec">
                                <em>Ulver</em>
                                <div className="division"></div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quibusdam?</p>
                
                            </span>
                            </div>
                
                        </div>
                    

                    </div>
                    </div>
                    </div>

         
                    <div className="ultimasnovedades-container" >
                    
                        <h4>Ultimas Novedades</h4>
                        
                        


                    
                    
                    <div className="row" >
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6" >
                        <div className="contenidonovedades">
                            <img src="images/dead can dance entrevista.jpg" alt="dead can dance" />
                            
                            <span className="novedad">
                            <em>Dead Can Dance</em>
                            <div className="division"></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            </span>
                        </div>
                        
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6" >
                        <div className="contenidonovedades">
                            <img src="images/drab majesty entrevista.jpg" alt="drab majesty"/>
                            
                            <span className="novedad">
                            <em>Drab Majesty</em>
                            <div className="division"></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            </span>
                            

                        </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6" >
                        <div className="contenidonovedades">
                            <img src="images/kevin shields entrevista.jpg" alt="kevin shields"/>
                            
                            <div className="novedad">
                            <em>Kevin Shields</em>
                            <div className="division"></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                            </div>
                        </div>
                        </div>
                        
                    </div>  
                    </div>
                    

             
                    <div className="eventos-container">
                        <div className="tituloeventos">
                            <h4>Evento del mes</h4>
                        </div>
                        <div className="contenedoreventohome">
                            <div className="contenidoeventos">    
                                <img src="images/drab majesty evento.jpeg" alt="drab majesty@niceto" />
                                <span className="infoevento">
                                <h3>Drab Majesty @Niceto</h3>
                                <div className="division"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, accusamus saepe dolore reiciendiscorrupti quis at odit maxime. Nesciunt, iure!</p>
                                <div className="division"></div>
                                <h5>Junto a:</h5>
                                <div className="division"></div>
                                <p>The Rope</p>
                                <p>Silent Age</p>    
                                </span>        
                            </div>
                        </div>
                    </div>
                
                
                    
  </main>
 
    )
}

export default HomePage;