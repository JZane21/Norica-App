import { FinishedProductCard } from "../components/FinishedProductCard";
import SimpleSlider from "../components/SimpleSlider";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { getPreviusWorks } from "../../firebase/firebase";
import { ModalPage } from "../../modals/ModalPage";
import { ModalLoading } from "../../modals/ModalLoading";
import { ErrorPage } from "./ErrorPage";

export const TrabajosPage = () => {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const handleZoomToggle = (index: number) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null);
    } else {
      setZoomedIndex(index);
    }
  };

  const [projectData, setProjectData] = useState([]);
  const [errorLoading, setErrorLoading] = useState<boolean>(false);

  const getWorks = async () => {
    try {
      const listWorks = await getPreviusWorks();
      setProjectData(listWorks);
    } catch (err) {
      setErrorLoading(true);
    }
  };

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getWorks();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading && (
        <>
          <ModalPage>
            <ModalLoading />
          </ModalPage>
        </>
      )}
      {errorLoading && <ErrorPage />}
      <section className={`w-full ${loading && "h-[800px]"}`}>
        <div className=" p-4 h-full w-full bg-white rounded-3xl">
          <h2 className="p-5 text-5xl font-bold -mb-20 text-black   ">
            Nuestros Trabajos
          </h2>

          <SimpleSlider>
            {projectData.map((item, index) => (
              <FinishedProductCard
                key={item.productName}
                productName={item.productName}
                productDescription={item.productDescription}
                productDescriptionZone={item.productDescriptionZone}
                productDescriptionDuration={item.productDescriptionDuration}
                productImage={item.productImage}
                isZoomed={zoomedIndex === index}
                onZoomToggle={() => handleZoomToggle(index)}
              />
            ))}
          </SimpleSlider>
          {zoomedIndex !== null && (
            <div className="z-10 fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-90 backdrop-blur ">
              <div className=" p-4 h-[95%] w-[90%] bg-white rounded-2xl flex flex-col ">
                <div className="flex">
                  <img
                    className=" ml-12 w-[550px] h-[550px] rounded-2xl mt-2"
                    src={projectData[zoomedIndex].productImage}
                  />
                  <div>
                    <h5 className=" text-7xl mt-7 ml-12 mb-12  tracking-tight text-black dark:text-gray-900 flex flex-col">
                      {projectData[zoomedIndex].productName}
                    </h5>
                    <hr style={{ borderColor: "#999", margin: 10 }} />
                    <p className=" p-10 font-normal text-4xl ml-10 text-end text-gray-900 dark:text-gray-200">
                      {projectData[zoomedIndex].productDescription}
                    </p>
                    <p className="p-10 font-normal text-4xl ml-10 text-end text-gray-900 dark:text-gray-200">
                      {projectData[zoomedIndex].productDescriptionZone}
                    </p>
                    <p className=" -mb-10 p-10 font-normal text-4xl ml-10 text-end text-gray-900 dark:text-gray-200">
                      {projectData[zoomedIndex].productDescriptionDuration}
                    </p>
                  </div>
                </div>
                <div
                  className=" -mt-12 w-[50%] "
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    className="w-[150px] h-[45px] text-white bg-red-600 hover:bg-gray-500
              active:bg-gray-700 text-base font-thin p-2 pl-3 pr-3 rounded-xl m-5 ml-11"
                    onClick={() => setZoomedIndex(null)}
                  >
                    Volver
                  </button>
                  <a>
                    <Link
                      className="w-max h-max ml-3 mr-3"
                      to={`/app/home/contacto`}
                    >
                      <button
                        className="w-[150px] h-[45px] text-white bg-gray-600 hover:bg-red-700
              active:bg-red-700 text-base font-thin p-2 pl-3 pr-3 rounded-xl m-5 ml-11"
                      >
                        Contratanos
                      </button>
                    </Link>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TrabajosPage;
