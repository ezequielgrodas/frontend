import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EventoItem from '../components/eventos/EventoItem';
import '../styles/components/pages/EventosPage.css'


const EventosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const cargarEventos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/eventos');
            setEventos(response.data);
            setLoading(false)
        };
        cargarEventos();
    }, []);
    return (
        <main>
            <div className="bannerSeccion">

                <h5>Eventos</h5>

            </div>
            <div className="infoImportanteEventos">
                <p>Recorda que podes adquirir todas las entradas ingresando a <span><a href="https://www.ticketek.com.ar" target="_blank">este enlace.</a></span></p>

            </div>
            <div className="contenedorEventos">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    eventos.map(item => <EventoItem key={item.id}
                        title={item.titulo} imagen={item.imagen} description={item.descripcion} info={item.info} />).reverse()
                )}

            </div>

        </main>


    )
}

export default EventosPage;