import React from 'react';

const ActionButtons = () => {
  return (
    <div className="flex justify-between mt-6">
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Agregar Artículo +</button>
      <button className="bg-red-500 text-white py-2 px-4 rounded">Quitar Artículo</button>
      <button className="bg-indigo-500 text-white py-2 px-4 rounded">Descargar Artículo</button>
    </div>
  );
};

export default ActionButtons;
