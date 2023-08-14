// src/app/pages/HomePage.tsx
<<<<<<< HEAD
import React from 'react';
import Navbar from '../../auth/components/Navbar';
import Footer from '../../auth/components/Footer';
import ContactUs from '../components/ContactUs';
import HireUs from '../components/HireUs';
import CompanyDescription from '../components/CompanyDescription';

=======
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HomePageInformation } from "../components/HomePageInformation";
>>>>>>> d58259238e386a59a16fdcf090d041ae05178b02

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* barra de navegacion */}
      <Navbar />
<<<<<<< HEAD
      <main className="p-4">
        {/* Contenido de la página */}
        <h1 className="text-2xl font-bold">¡Bienvenidos cacas!</h1>
        <p>Esta es la página de homepage.</p>
        <CompanyDescription/>
        <HireUs/>
        <ContactUs/>
      </main>
=======
      {/* informacion en el HomePage */}
      <HomePageInformation />
      {/* Footer con redes sociales */}
>>>>>>> d58259238e386a59a16fdcf090d041ae05178b02
      <Footer />
    </div>
  );
};
