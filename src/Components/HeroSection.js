import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiExpress } from 'react-icons/si';
import pic from "../Assets/amit.jpg"; // Ensure the path is correct
import ReactTypingEffect from 'react-typing-effect';

const HeroSection = () => {
  return (
    <div Name="HeroSection" className="flex flex-col-reverse md:flex-row max-w-screen-2xl container px-4 mt-20 md:px-20 my-20">
      {/* Left Section */}
      <div className="flex flex-col mt-12 md:mt-24 space-y-4 md:w-1/2">
        <h2 className="text-lg font-semibold">Welcome In My Feed</h2>
        <h1 className="text-4xl font-bold">
          Hello, I'm a <ReactTypingEffect
            className='pl-3 text-red-600'
            text={['web Developer', 'Full Stack Developer', 'React Developer']}
            speed={100}
            eraseSpeed={120}
            eraseDelay={1000}
            typingDelay={500}
          />
        </h1>
        <p className="text-gray-500 text-justify">
        Aspiring Full-Stack Developer with experience in creating and managing web applications. Proficient in React,
        Node.js, PHP, and MongoDB, with knowledge of RESTful APIs and frontend/backend integration. Seeking a
        challenging role to contribute and grow my skills.
        </p>

       
        {/* Social Media Links */}
<div className='flex justify-between'>
<div>
<h3 className="text-lg font-semibold mb-2">Availble on</h3> 
<div className="flex space-x-6 ">
<a href="https://www.facebook.com/7895Amit.singh" className="text-black hover:text-gray-700">
<FaFacebookF size={24} />
</a>
<a href="https://www.linkedin.com/in/apJadon7895" className="text-black hover:text-gray-700">
<FaLinkedinIn size={24} />
</a>
<a href="https://github.com/apjadon7895" className="text-black hover:text-gray-700">
<FaGithub size={24} />
</a>
<a href="https://www.instagram.com/singh_ap_7895?igsh=dno0bDZ4aXJycmQ5" className="text-black hover:text-gray-700">
  <FaInstagram size={24} />
</a>


</div>
</div>

{/* Currently Working On */}
<div>
<h3 className="text-lg font-semibold mb-2">Currently working on</h3>
<div className="flex space-x-4">
<SiExpress size={32} className="text-black" />
<SiReact size={32} className="text-black" />
<SiNodedotjs size={32} className="text-black" />
<SiJavascript size={32} className="text-black" />
</div>
</div>
</div>
</div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center items-center mt-12 md:mt-20">
        <img 
          src={pic} 
          alt="Coder" 
          className="w-64 h-64 md:w-[450px] md:h-[450px] object-cover rounded-full"
        />
      </div>
    </div>
    
  );
}

export default HeroSection;
