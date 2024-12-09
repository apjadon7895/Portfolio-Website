import React from "react";
import HTML from "../Assets/html.png"; 
import CSS from "../Assets/css.jpg";
import JS from "../Assets/javascript.jpg";
import REACT from "../Assets/react.jpg";
import BOOTSTRAP from "../Assets/bootstrap.png";  
import JAVA from "../Assets/java.png"; 
import PHP from "../Assets/php.png"; 

const Experiance = () => {
  return (
    <div Name="Experiance" className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Experience
      </h2>
      <p className="text-lg text-center mb-12">
        I've more than 2 years of experience in the following technologies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={HTML}
            alt="HTML"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">HTML</h3>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={JS}
            alt="JavaScript"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">JavaScript</h3>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={CSS}
            alt="CSS"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">CSS</h3>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={JAVA}
            alt="Java"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">Java</h3>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={REACT}
            alt="React"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">React</h3>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={PHP}
            alt="PHP"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">PHP</h3>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <img
            src={BOOTSTRAP}
            alt="Bootstrap"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">Bootstrap</h3>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
