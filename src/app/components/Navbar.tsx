import React, { useEffect, useState } from "react";
import { OptionNavbar } from "./OptionNavbar";
import { LogoApp } from "./LogoApp";
import { OptionsNavBar } from "../../models/navbarModel";
import { ModalPage } from "../../modals/ModalPage";
import { ModalConfirmation } from "../../modals/ModalConfirmation";
import { useDispatch } from "../../store/StoreProvider";
import { types } from "../../store/storeReducer";

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const HOME_PATH: string = "/app/home";

  const OPTION_LIST: OptionsNavBar[] = [
    {
      option: "Home",
      path: `${HOME_PATH}`,
    },
    {
      option: "Nosotros",
      path: `${HOME_PATH}/nosotros`,
    },
    {
      option: "Trabajos",
      path: `${HOME_PATH}/trabajos`,
    },
    {
      option: "Productos",
      path: `${HOME_PATH}/productos`,
    },
    {
      option: "Contacto",
      path: `${HOME_PATH}/contacto`,
    },
  ];

  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const dispatch = useDispatch();
  const [askLogOut, setAskLogOut] = useState<boolean>(false);

  return (
    <>
      {askLogOut && (
        <ModalPage>
          <ModalConfirmation
            actionOne={() => {
              setAskLogOut(false);
              dispatch({ type: types.logout });
            }}
            actionTwo={() => setAskLogOut(false)}
            title={"¿Cerrar sesión?"}
            message={`La sesión se cerrará, y tendrá que ingresar
            por email/contraseña o Google nuevamente`}
          />
        </ModalPage>
      )}
      <nav
        className={`p-4 flex items-center
        ${width > 530 ? "flex-row" : "flex-col"} flex-wrap justify-between`}
      >
        <section className="flex items-center">
          <button className="ml-5 mr-5 p-1" onClick={() => setAskLogOut(true)}>
            <LogoApp />
          </button>
          <button
            className="text-white bg-red-600 hover:bg-red-500
          active:bg-red-700 text-base font-thin p-2 pl-3 pr-3 rounded-md"
            onClick={toggleSidebar}
          >
            ☰ Menu
          </button>
        </section>
        {sidebarOpen && (
          <section
            className="text-white relative top-0 right-0 bg-transparent
            flex items-center flex-wrap"
          >
            <ul
              className={`text-white flex 
              ${width < 743 && "mt-5"}
              ${width > 530 ? "flex-row" : "flex-col"}
            flex-row flex-wrap w-max`}
            >
              {OPTION_LIST.map((option) => (
                <OptionNavbar
                  key={option.option}
                  option={option.option}
                  path={option.path}
                />
              ))}
            </ul>
          </section>
        )}
      </nav>
      <div
        className="m-1 p-[0.1px] bg-white w-[90%] flex
      self-center"
      />
    </>
  );
};

export default Navbar;
