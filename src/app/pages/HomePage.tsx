// src/app/pages/HomePage.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HomePageInformation } from "../components/HomePageInformation";
import { Outlet, useLocation } from "react-router-dom";
import BGHomePage from "../../assets/background-home-page.jpeg";

export const HomePage: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <style>{`
        .HomePageBackground {
          background-image: url(${BGHomePage});
          background-size: cover;
          background-position: center;
        }
      `}</style>
      <div className="flex flex-col HomePageBackground">
        <Navbar />
        {pathname === "/app/home" && <HomePageInformation />}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
