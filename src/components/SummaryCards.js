import React from 'react';
import totalArticulosImg from '../img/articulos.png';
import lectoresSeguimientoImg from '../img/usuario.png';
import resultados23JunioImg from '../img/pdf.png';

const SummaryCards = () => {
  return (
    <div className="flex space-x-6 mb-6">
      <div className="relative p-4 bg-white-500 rounded shadow-lg flex-1">
        <img src={totalArticulosImg} alt="Total de artículos" className="absolute top-1 left-80 h-30 w-12 object-cover m-4" />
        <div className="ml-29">
          <h1 className="text-lg">Total de artículos</h1>
          <p className="text-2xl font-bold">1200</p>
          <p>Total en el último mes</p>
        </div>
      </div>
      <div className="relative p-4 bg-white-500 rounded shadow-lg flex-1">
        <img src={lectoresSeguimientoImg} alt="Lectores y seguimiento" className="absolute top-1 left-80 h-30 w-12 object-cover m-4" />
        <div className="ml-29">
          <h2 className="text-lg ">Lectores y seguimiento</h2>
          <p className="text-2xl font-bold">34400</p>
          <p>Total en el último mes</p>
        </div>
      </div>
      <div className="relative p-4 bg-white-500 rounded shadow-lg flex-1">
        <img src={resultados23JunioImg} alt="Resultados 23 de junio" className="absolute top-1 left-80 h-30 w-12 object-cover m-4" />
        <div className="ml-29">
          <h2 className="text-lg">Resultados 23 de junio</h2>
          <p className="text-2xl font-bold">Cargando</p>
          <p>Confirmado el artículo</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;