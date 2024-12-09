import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-gray-700">
      <div className="container mx-auto">
        <div className="flex justify-center mb-4">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 mr-4"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 mr-4"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 mr-4"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <p className="mb-4">
          © 2024 Your Company. All rights reserved.
        </p>
        <p>
          <span className="font-bold">Supportive Partner:</span>{" "}
          <FontAwesomeIcon icon={faHeart} className="text-red-500" /> Ankur
        </p>
      </div>
    </footer>
  );
};

export default Footer;
