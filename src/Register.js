import React from 'react';
import azulimg from './img/azul.jpeg'; 
import gotaimg from './img/gota.png';
import './App.css';


const Register = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg flex max-w-4xl mx-auto overflow-hidden">
        {/* Left Side: Registration Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">REGÍSTRATE</h2>
          <p className="mb-6">Registrarse a nuestra plataforma</p>
          
          <form action="#">
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                <i className="fas fa-user mr-2"></i> Nombre de Usuario
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                <i className="fas fa-lock mr-2"></i> Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg">Registrarme</button>
          </form>
          
          <div className="my-4 flex items-center justify-center">
            <span className="block h-px w-16 bg-gray-300"></span>
            <span className="mx-4 text-gray-500">o</span>
            <span className="block h-px w-16 bg-gray-300"></span>
          </div>
          
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center border border-gray-400 p-3 rounded-lg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQExly8Xk3GWUOkmUGETvVobduKHck3ivnVA&s" className="w-5 h-5 mr-3" alt="Google" />
              Continuar con <span className="ml-2 text-gray-600 font-medium">Google</span>
            </button>
            
            <button className="w-full flex items-center justify-center border border-gray-400 p-3 rounded-lg">
              <img src="https://s3.coinmarketcap.com/static-gravity/image/2fb1bc84c1494178beef0822179d137d.png" className="w-5 h-5 mr-3" alt="Internet Identity" />
              Continuar con <span className="ml-2 text-gray-600 font-medium">Internet Identity</span>
            </button>
          </div>
        </div>
        {/* Right Side: Information */}
        <div
          className="w-1/2 flex items-center justify-center p-8 text-white relative"
          style={{
            backgroundImage: `url(${azulimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="text-start">
            <h3 className="text-xl font-bold mb-4">
              Nuestra comunidad y seguimiento en tiempo real de las plantas tratadoras de agua
            </h3>
            <img src={gotaimg} className="absolute bottom-0 right-0 w-2/5" alt="Water Drop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
