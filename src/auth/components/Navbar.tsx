import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="flex items-center justify-between">
        <button
          className="text-white text-xl"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
        {/* Otras opciones del Navbar aquí */}
      </div>
      {/* Contenido del sidebar */}
      <div
        className={`bg-black h-full w-60 fixed top-0 left-0 transform transition-transform ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Botón de hamburguesa para cerrar el sidebar */}
        <button
          className="absolute top-4 right-4 z-10 text-white text-xl"
          onClick={toggleSidebar}
        >
          ✕
        </button>
        
        <ul className="text-white p-4">
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
