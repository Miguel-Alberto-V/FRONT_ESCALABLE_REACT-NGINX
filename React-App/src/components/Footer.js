// components/Footer.js
import React from 'react';
import '../index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#tiktok">TikTok</a>
        <a href="#instagram">Instagram</a>
        <a href="#youtube">YouTube</a>
      </div>
      <div className="policies">
        <a href="#terms">Términos y condiciones</a>
        <a href="#security">Política de seguridad</a>
        <a href="#privacy">Política de privacidad</a>
      </div>
      <p>Copyright SoloGuitar 2024 - 2024 © Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;
