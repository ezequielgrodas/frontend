import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css'


const ContactoPage = (props) => {
  
  const initialForm = {
    nombre: '',
    email: '',
    paginaweb: '',
    telefono: '',
    mensaje: ''

  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e =>{
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  };
  const handleSubmit = async e =>{
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if(response.data.error === false){
      setFormData(initialForm)
    }
  }

    return (
        <main>
        <div className="bannerSeccion">
      
            <h5>Contacto</h5>
           
        </div>
        <div className="contacto-container">  
            <form id="contact" action="/contacto" method="post" onSubmit={handleSubmit}>
              <h5>Contacto rápido</h5>
              <div className="division"></div>
              <em>Contáctanos hoy para formar parte del roaster de Lucrecia Records, y en 24hs. te responderemos!</em>
              <br/><br/>
              <fieldset>
                <input placeholder="Tu nombre" type="text" tabindex="1" name="nombre" value={formData.nombre} onChange={handleChange} required autofocus/>
              </fieldset>
              <fieldset>
                <input placeholder="Tu e-mail" type="email" tabindex="2" name="email" value={formData.email} onChange={handleChange} required/>
              </fieldset>
              <fieldset>
                <input placeholder="Tu numero de telefono" type="tel" tabindex="3" name="telefono" value={formData.telefono} onChange={handleChange} required/>
              </fieldset>
              <fieldset>
                <input placeholder="Tu sitio web empezando con http://" type="url" tabindex="4" name="paginaweb" value={formData.paginaweb} onChange={handleChange} required/>
              </fieldset>
              <fieldset>
                <textarea placeholder="Escribe tu mensaje aqui...." tabindex="5" name="mensaje" value={formData.mensaje} onChange={handleChange} required></textarea>
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Enviar</button>
              </fieldset>
              {sending ? <p>Enviando...</p> : null}
              {msg ? <p>{msg}</p> : null}
            </form>
           
            
          </div>
    </main>

    )
}

export default ContactoPage;