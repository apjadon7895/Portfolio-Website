import React from 'react';

const About = () => {
  return (
    <div Name="About" className="ml-4 md:ml-6">
      <h1 className='text-2xl font-bold '>About</h1>
      <div className='mt-2 text-justify'>
      <p>
        Hello, I'm Amit, a passionate Web developer with a keen eye for MERN Stack. With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
      </p>
      <br/>
      <h2 className='text-green-400 text-xl font-semibold'>Education & Training</h2>
      <p>[Master’s of Computer Applications (GLA University)]  [2022– 2024]</p>
      <p>[Bachelor of Science (J.S University)]  [2018– 2021]</p>
      <p>[ Intermediate (RadhaMohan F SVM)]  [2017– 2018]</p>
      <p>[High School (RadhaMohan F SVM)]  [2015– 2016]</p>
      <br/>
      <h2 className='text-green-400 text-xl font-semibold '>Skills & Expertise</h2>
      <ul>
        <li><span className='font-bold'>Programming Languages:</span> Java, C, JavaScript, PHP, SQL, HTML/CSS</li>
        <li><span className='font-bold'>Core Concepts:</span> Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), RESTful
        APIs</li>
        <li><span className='font-bold'>Technologies/Frameworks:</span> ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, TailwindCSS, Bootstrap</li>
        <li><span className='font-bold'>Developer Tools:</span> Git/Github, VS Code, Google Cloud Platform, Postman</li>
      </ul>
      <br/>
      <h2 className='text-green-400 text-xl font-semibold '>Professional Experience</h2>
      <div>
        <p><span className='font-bold'>Charpixel Technologies Private Limited </span> [Jan 2024– June 2024]</p>
        <p>Software Development Intern</p>
        <p>Developed responsive web applications: Built user-friendly interfaces using React, ensuring compatibility across multiple devices.</p>
 <p>Streamlined backend processes: Engineered server-side functionalities using PHP, leading to a 15% performance improvement.</p>
 <p> Optimized database interactions: Enhanced data retrieval processes, reducing query execution time by 20%</p>
      </div>
      <br/>
      <h2 className='text-green-400 text-xl font-semibold '>Achievements & Awards</h2>
      <p>Achieved 1st place in a college-level Hackathon by building a real-time student management system.</p>
      <p>Recognized as ”Best Performer” during a 6-month internship at Charpixel Technologies Private Limited.</p>
      <p>Organized and led 5+ tech workshops, mentoring over 300 students on modern web development practices.</p>
      <br/>
      <h2 className='text-green-400 text-xl font-semibold '>Mission Statement</h2>
      <p>
      As a dedicated developer, I strive to create efficient, user-centric applications that solve real-world problems.
      With expertise in modern technologies like React, MERN, PHP, and MySQL, I aim to build dynamic and scalable solutions, 
      enhancing user experiences and driving innovation in every project I undertake.
      My commitment to continuous learning and adaptability ensures I stay at the forefront of technological advancements, 
      delivering value through creative and impactful development.
      </p>
      </div>
    </div>
  );
};

export default About;