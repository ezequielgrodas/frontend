import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import NovedadItem from '../components/novedades/NovedadItem';
import EventoItem from '../components/eventos/EventoItem';
import LanzamientoItem from '../components/lanzamientos/LanzamientoItem';
import CarrouselItem from '../components/carrousel/CarrouselItem';
import UltimasNovedadesItem from '../components/ultimasnovedades/UltimasNovedadesItem';

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);
    const [eventos, setEventos] = useState([]);
    const [lanzamientos, setLanzamientos] = useState([]);
    const [carrousel, setCarrousel] = useState([]);
    const [ultimasnovedades, setUltimasnovedades] = useState([]);


    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false)
        };
        cargarNovedades();
    }, []);



    useEffect(() => {
        const cargarEventos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/eventos');
            setEventos(response.data);
            setLoading(false)
        };
        cargarEventos();
    }, []);

    useEffect(() => {
        const cargarLanzamientos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/lanzamientos');
            setLanzamientos(response.data);
            setLoading(false)
        };
        cargarLanzamientos();
    }, []);

    useEffect(() => {
        const cargarCarrousel = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setCarrousel(response.data);
            setLoading(false)
        };
        cargarCarrousel();
    }, []);

    useEffect(() => {
        const cargarUltimasnovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setUltimasnovedades(response.data);
            setLoading(false)
        };
        cargarUltimasnovedades();
    }, []);

    return (
        <main>
            <Carousel>
                <Carousel.Item className="ItemCarrousel">

                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        carrousel.map(item => <CarrouselItem key={item.id}
                            title={item.titulo} imagen={item.imagen} />).slice(-1)
                    )}
                </Carousel.Item>
                <Carousel.Item className="ItemCarrousel">
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        carrousel.map(item => <CarrouselItem key={item.id}
                            title={item.titulo} imagen={item.imagen} />).slice(-2)
                    )}
                </Carousel.Item>
                <Carousel.Item className="ItemCarrousel">
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        carrousel.map(item => <CarrouselItem key={item.id}
                            title={item.titulo} imagen={item.imagen} />).slice(-3)
                    )}
                </Carousel.Item>
            </Carousel>

            <br />
            <ul id="redes">
                <li>
                    <a href="https://www.facebook.com" className="bi bi-facebook" target="_blank" ></a>
                </li>
                <li>
                    <a href="https://www.twitter.com" className="bi bi-twitter" target="_blank"></a>
                </li>
                <li>
                    <a href="https://www.spotify.com" className="bi bi-spotify" target="_blank"></a>
                </li>
                <li>
                    <a href="https://www.instagram.com" className="bi bi-instagram" target="_blank"></a>
                </li>
                <li>
                    <a href="https://www.youtube.com" className="bi bi-youtube" target="_blank"></a>
                </li>
            </ul>


            <div className="ultimoslanzamientos-container">

                <h4>Nuevos Lanzamientos</h4>





                <div className="lanzamientos-container">
                    <div className="row">
                        {loading ? (
                            <p>Cargando...</p>
                        ) : (
                            lanzamientos.map(item => <LanzamientoItem key={item.id}
                                title={item.titulo} artist={item.artista} imagen={item.imagen} description={item.descripcion} />).slice(-6).reverse()
                        )}

                    </div>
                </div>
            </div>


            <div className="ultimasnovedades-container" >

                <h4>Ultimas Novedades</h4>






                <div className="row" >
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        ultimasnovedades.map(item => <UltimasNovedadesItem
                            key={item.id} title={item.titulo} imagen={item.imagen} />).slice(-3).reverse()
                    )}

                </div>
            </div>



            <div className="eventos-container">
                <div className="tituloeventos">
                    <h4>Evento del mes</h4>
                </div>
                <div className="contenedoreventohome">
                    <a><NavLink activeClassName="activo" exact to="/eventos">
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        eventos.map(item => <EventoItem key={item.id}
                            title={item.titulo} imagen={item.imagen} description={item.descripcion} info={item.info} />).slice(-1).reverse()
                    )}
                </NavLink></a>
                </div>
            </div>



        </main>

    )
}

export default HomePage;