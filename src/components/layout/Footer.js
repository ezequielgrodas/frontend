import React from 'react';
import '../../styles/components/layout/Footer.css'

const Footer = (props) => {
    return (
        <footer>
          
        <div className="footer">
          
          <img src="images/logolucrecia.svg" alt="" className="logoLucrecia"/>
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
          <p>Diseñado por Ezequiel Gastón - 2021</p>
    
        </div>
      </footer>
    );
}

export default Footer;