// src/app/pages/HomePage.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import HireUs from "../components/HireUs";
import BGHomePage from "../../assets/background-home-page.jpeg.jpg";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CompanyDescription from "../components/CompanyDescription";

export const HomePage: React.FC = () => {
  const { pathname } = useLocation();

  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleResizeWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResizeWidth);
  }, [window.innerWidth]);

  return (
    <>
      <style>{`
        .HomePageBackground {
          background-image: url(${BGHomePage});
          background-size: cover;
          background-position: center;
        }
      `}</style>
      <section className="h-[825px] flex flex-col HomePageBackground">
        <Navbar width={width} />
        <div className="overflow-auto h-full m-3">
          {pathname === "/app/home" ? (
            <main className="p-4 flex flex-col">
              <CompanyDescription />
              <div
                className={`flex ${
                  width >= 467 ? "flex-row" : "flex-col"
                }  items-center flex-wrap mt-8`}
              >
                <HireUs width={width} />
                <ContactUs width={width} />
              </div>
            </main>
          ) : (
            <Outlet />
          )}
        </div>
        <section className="w-full flex justify-center">
          <Footer />
        </section>
      </section>
    </>
  );
};
