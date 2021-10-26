import React from 'react';
import '../styles/components/pages/ContactoPage.css'


const ContactoPage = (props) => {
    return (
        <main>
        <div className="bannerSeccion">
      
            <h5>Contacto</h5>
           
        </div>
        <div className="contacto-container">  
            <form id="contact" action="" method="post">
              <h5>Contacto rápido</h5>
              <div className="division"></div>
              <em>Contáctanos hoy, y en 24hs. te responderemos!</em>
              <br/><br/>
              <fieldset>
                <input placeholder="Tu nombre" type="text" tabindex="1" required autofocus/>
              </fieldset>
              <fieldset>
                <input placeholder="Tu e-mail" type="email" tabindex="2" required/>
              </fieldset>
              <fieldset>
                <input placeholder="Tu numero de telefono" type="tel" tabindex="3" required/>
              </fieldset>
              <fieldset>
                <input placeholder="Tu sitio web empezando con http://" type="url" tabindex="4" required/>
              </fieldset>
              <fieldset>
                <textarea placeholder="Escribe tu mensaje aqui...." tabindex="5" required></textarea>
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Enviar</button>
              </fieldset>
            </form>
           
            
          </div>
    </main>

    )
}

export default ContactoPage;