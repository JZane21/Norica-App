import { useRef } from "react";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { SocialNetworkButton } from "./SocialNetworkButton";

const Footer = () => {
  const element = useRef(null);

  const REDES_SOCIALES = [
    {
      socialNetworkName: "facebook",
      icon: faFacebook,
      socialNetworkLink: "https://www.facebook.com/noricasrl?mibextid=LQQJ4d",
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
    <footer ref={element} className="bg-transparent w-full h-max m-3">
      <div
        className="w-full h-max p-7 bg-transparent rounded-3xl flex
        justify-between items-center text-white border-[0.5px]
        border-white"
      >
        <div
          className="grow shrink basis-0 h-max justify-around items-center
        flex flex-wrap"
        >
          <p
            className="w-max p-[6px] pl-3 pr-3 text-base
            font-semibold leading-relaxed rounded-lg m-3"
          >
            Redes Sociales
          </p>
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
    </footer>
  );
};

export default Footer;
