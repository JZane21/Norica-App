// src/app/pages/HomePage.tsx
import React from 'react';
import Navbar from '../../auth/components/Navbar';
import Footer from '../../auth/components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        {/* Contenido de la página */}
        <h1 className="text-2xl font-bold">¡Bienvenidos cacas!</h1>
        <p>Esta es la página de homepage.</p>
      </main>
      <Footer />
    </div>
  );
};
