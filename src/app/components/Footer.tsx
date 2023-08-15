import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  setFooterHeight: (param: number) => void;
  width: number;
  height: number;
  menu: boolean;
}

const Footer = ({ setFooterHeight, width, height, menu }: Props) => {
  const element = useRef(null);

  useEffect(() => {
    const height = element.current?.getBoundingClientRect();
    setFooterHeight(height.height);
  }, [width, height, menu]);

  return (
    <footer ref={element} className="bg-slate-300 h-max p-4 w-max">
      <div className="flex justify-center">
        <a href="https://www.facebook.com" className="mr-4">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-blue-600 text-lg"
          />
        </a>
        <a href="https://www.instagram.com" className="mr-4">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-pink-600 text-lg"
          />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
