import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  const handleSocialClick = (platform) => {
    console.log(`Navigating to ${platform}`);
    // Add real navigation logic here if needed
  };

  return (
    <footer className="bg-gray-100 py-6 text-center text-gray-700">
      <div className="container mx-auto">
        <div className="flex justify-center mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 mr-4"
            onClick={() => handleSocialClick("Facebook")}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 mr-4"
            onClick={() => handleSocialClick("Twitter")}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 mr-4"
            onClick={() => handleSocialClick("Instagram")}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900"
            onClick={() => handleSocialClick("LinkedIn")}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <p className="mb-4">
          © 2024 Your Company. All rights reserved.
        </p> 
      </div>
    </footer>
  );
};

export default Footer;
