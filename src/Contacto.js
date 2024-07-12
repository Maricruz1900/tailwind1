import React from 'react';
import './App.css';
import logo from './img/logo.png';
import locationIcon from './img/ubicacion.png';
import emailIcon from './img/correo.png';
import phoneIcon from './img/telefono.png';
import facebookIcon from './img/facebook.png';
import twitterIcon from './img/twitter.png';
import instagramIcon from './img/instagram.png';
import linkedinIcon from './img/linkedin.png';
import youtubeIcon from './img/youtube.png';
import hainLogo from './img/azul.jpeg';
import chain from './img/chain.png';

const Contacto = () => {
  return (
    <footer className="bg-cover text-white py-8 mt-10" style={{ backgroundImage: `url(${hainLogo})` }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <img src={logo} alt="Varuna Logo" className="mb-4" />
            <p>
              "Varuna" es un proyecto que utiliza IA y otras tecnologías para eliminar microplásticos de las
              aguas tratadas, mejorando su calidad para usos empresariales y agrícolas, y contribuyendo al
              cuidado del medio ambiente.
            </p>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="font-bold mb-2">Get in Touch</h3>
            <p>
              <img src={locationIcon} alt="Location" className="w-7 h-7 inline-block mr-2" />
              Av. Gerónimo de la Cueva s/n, Villas del Río, 20126 Aguascalientes, Ags.
            </p>
            <p>
              <img src={emailIcon} alt="Email" className="w-7 h-7 inline-block mr-2" />
              <a href="mailto:varunaia@outlook.com" className="text-white">varunaia@outlook.com</a>
            </p>
            <p>
              <img src={phoneIcon} alt="Phone" className="w-7 h-7 inline-block mr-2" />
              <a href="tel:+52134567892" className="text-white">+52 4499253920</a>
            </p>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="font-bold mb-2">Contáctanos</h3>
            <div className="flex justify-center space-x-5">
              <a href="#" className="text-white">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6 inline-block" />
              </a>
              <a href="#" className="text-white">
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6 inline-block" />
              </a>
              <a href="#" className="text-white">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6 inline-block" />
              </a>
              <a href="#" className="text-white">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 inline-block" />
              </a>
              <a href="#" className="text-white">
                <img src={youtubeIcon} alt="YouTube" className="w-6 h-6 inline-block" />
              </a>
            </div>
            <p className="mt-2 text-center">Síguenos en todas nuestras redes sociales.</p>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="font-bold mb-2">Enlaces</h3>
            <ul>
              <li>
                <a href="#" className="text-white">Política de privacidad</a>
              </li>
              <li>
                <a href="#" className="text-white">Cookies</a>
              </li>
            </ul>
            <div className="mt-4">
              <img src={chain} alt="On-Chain Hosted 100%" />  {/* Aquí está la imagen importada */}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>2022 © VARUNA - EQUIPO: IRIS</p>
        </div>
      </div>
    </footer>
  );
};

export default Contacto;
