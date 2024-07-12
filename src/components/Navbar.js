import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Subir Archivos</h1>
      <div className="flex items-center space-x-4">
        <span>Análisis</span>
        <span>Internet Identity</span>
      </div>
    </div>
  );
};

export default Navbar;
