// src/app/pages/HomePage.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import HireUs from "../components/HireUs";
import CompanyDescription from "../components/CompanyDescription";
import BGHomePage from "../../assets/background-home-page.jpeg";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const HomePage: React.FC = () => {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState<boolean>(false);

  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleResizeWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResizeWidth);
  }, [window.innerWidth, menu]);

  const [height, setHeight] = useState<number>(window.innerHeight);
  const handleResizeHeight = () => {
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResizeHeight);
  }, [window.innerHeight, menu]);

  const [navbarHeight, setNavbarHeight] = useState<number>(0);
  const [footerHeight, setFooterHeight] = useState<number>(0);
  const [mainHeight, setMainHeight] = useState<number>(0);

  useEffect(() => {
    setMainHeight(height - (navbarHeight + footerHeight));
  }, [window.innerWidth, window.innerHeight, menu, navbarHeight, footerHeight]);

  return (
    <>
      <style>{`
        .HomePageBackground {
          background-image: url(${BGHomePage});
          background-size: cover;
          background-position: center;
        }
        .mainContentHeight{
          height: ${mainHeight}px;
        }
      `}</style>
      <section className="flex flex-col HomePageBackground">
        <Navbar
          setNavbarHeight={setNavbarHeight}
          width={width}
          height={height}
          setMenu={setMenu}
        />
        <div className="mainContentHeight">
          <div className="overflow-auto h-full m-3">
            {pathname === "/app/home" ? (
              <main className="p-4 flex flex-col">
                <CompanyDescription />
                <div
                  className={`flex ${
                    width >= 467 ? "flex-row" : "flex-col"
                  } justify-center items-center flex-wrap mt-8`}
                >
                  <HireUs width={width} />
                  <ContactUs width={width} />
                </div>
              </main>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
        <section className="w-full flex justify-center">
          <Footer
            setFooterHeight={setFooterHeight}
            width={width}
            height={height}
            menu={menu}
          />
        </section>
      </section>
    </>
  );
};
