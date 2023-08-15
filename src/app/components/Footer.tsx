import { useEffect, useRef, useState } from "react";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { SocialNetworkButton } from "./SocialNetworkButton";

interface Props {
  setFooterHeight: (param: number) => void;
  width: number;
  height: number;
  menu: boolean;
}

const Footer = ({ setFooterHeight, width, height, menu }: Props) => {
  const element = useRef(null);
  const [showSocialNetworks, setShowSocialNetworks] = useState<boolean>(false);

  useEffect(() => {
    const height = element.current?.getBoundingClientRect();
    setFooterHeight(height.height);
  }, [width, height, menu, showSocialNetworks]);

  const REDES_SOCIALES = [
    {
      socialNetworkName: "facebook",
      icon: faFacebook,
      socialNetworkLink: "https://www.facebook.com",
    },
    {
      socialNetworkName: "instagram",
      icon: faInstagram,
      socialNetworkLink: "https://www.instagram.com",
    },
    {
      socialNetworkName: "youtube",
      icon: faYoutube,
      socialNetworkLink: "https://www.youtube.com",
    },
  ];

  return (
    <footer ref={element} className="bg-transparent p-4 w-full h-max">
      {!showSocialNetworks && (
        <div className="p-5">
          <a
            onClick={() => setShowSocialNetworks(true)}
            className="w-max p-[6px] pl-3 pr-3 hover:bg-slate-700
              active:bg-slate-800 text-base font-semibold leading-relaxed
              rounded-lg text-sky-400"
          >
            Visite nuestras redes sociales dando click aquí
          </a>
        </div>
      )}
      {showSocialNetworks && (
        <div
          className="w-full h-max p-10 bg-transparent rounded-3xl flex
          justify-between items-center text-white border-[0.5px]
          border-white"
        >
          <div
            className="grow shrink basis-0 h-max justify-around items-center
          flex flex-wrap"
          >
            <button
              onClick={() => setShowSocialNetworks(false)}
              className="w-max p-[6px] pl-3 pr-3 hover:bg-slate-700
              active:bg-slate-800 text-base font-semibold leading-relaxed
              rounded-lg border-[0.5px] border-white m-3"
            >
              Cerrar
            </button>
            <>
              {REDES_SOCIALES.map((item) => (
                <SocialNetworkButton
                  key={item.socialNetworkName}
                  socialNetworkName={item.socialNetworkName}
                  socialNetworkLink={item.socialNetworkLink}
                  icon={item.icon}
                />
              ))}
            </>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
