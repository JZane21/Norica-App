// src/app/pages/HomePage.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import HireUs from "../components/HireUs";
import CompanyDescription from "../components/CompanyDescription";
import { useEffect, useState } from "react";

export const HomePage: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="p-4 flex flex-col">
        <CompanyDescription />
        <div
          className={`flex ${
            width >= 467 ? "flex-row" : "flex-col"
          } justify-center items-center flex-wrap`}
        >
          <HireUs width={width} />
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  );
};
