import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/NovedadesPage.css'


const NovedadesPage = (props) => {

  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() =>{
    const cargarNovedades = async() =>{
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading(false)
    };
    cargarNovedades();
  },[]);
  
    return (
        <main>
    <div className="bannerSeccion">
      
        <h5>Novedades</h5>
      
    </div>
    <div className="novedades-container">
      
      {loading ? (
        <p>Cargando...</p>
      ) : (
        novedades.map(item => <NovedadItem key={item.id}
          title={item.titulo} imagen={item.imagen} body={item.descripcion}/>).reverse()
      )}

      
    </div>
    
  </main>
 
    )
}

export default NovedadesPage;