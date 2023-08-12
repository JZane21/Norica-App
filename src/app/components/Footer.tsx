import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="flex justify-center">
        <a href="https://www.facebook.com" className="mr-4">
          <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-lg" />
        </a>
        <a href="https://www.instagram.com" className="mr-4">
          <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-lg" />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
