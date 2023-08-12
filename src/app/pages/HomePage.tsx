// src/app/pages/HomePage.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HomePageInformation } from "../components/HomePageInformation";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* barra de navegacion */}
      <Navbar />
      {/* informacion en el HomePage */}
      <HomePageInformation />
      {/* Footer con redes sociales */}
      <Footer />
    </div>
  );
};
