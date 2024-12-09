import React from 'react';

const About = () => {
  return (
    <div Name="About" className="ml-4 md:ml-6">
      <h1 className='text-2xl font-bold '>About</h1>
      <div className='mt-2 text-justify'>
      <p>
        Hello, I'm Akhil, a passionate Web developer with a keen eye for MERN Stack. With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
      </p>
      <br/>
      <h2 className='text-green-400 text-xl font-semibold'>Education & Training</h2>
      <p>[Degree/Certification], [Institution], [Year] [Degree/Certification], [Institution], [Year] [Relevant Course], [Platform/Institution], [Year]</p>
      <br/>
      <h2 className='text-green-400 text-xl font-semibold '>Skills & Expertise</h2>
      <ul>
        <li>Proficient in [Programming Languages]</li>
        <li>Experienced with [Software Tools/Technologies]</li>
        <li>Strong grasp of [Design Principles/Concepts]</li>
        <li>Excellent problem-solving skills</li>
        <li>Effective communicator and collaborator</li>
      </ul>
      <br/>
      <h2 className='text-green-400 text-xl font-semibold '>Professional Experience</h2>
      <div>
        <p>[Job Title], [Company/Organization], [Dates]
        [Brief description of responsibilities and achievements]</p>
      </div>
      <div>
        <p>[Job Title], [Company/Organization], [Dates]
        [Brief description of responsibilities and achievements]</p>
      </div>
      <div>
        <p>[Freelance/Contract Work], [Client/Organization], [Dates]
        [Brief description of projects and contributions]</p>
      </div>
      <br/>
      <h2 className='text-green-400 text-xl font-semibold '>Achievements & Awards</h2>
      <p>[Award/Recognition], [Organization/Institution], [Year]
      [Achievement], [Organization/Platform], [Year]</p>
      <br/>
      <h2 className='text-green-400 text-xl font-semibold '>Mission Statement</h2>
      <p>
        My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
      </p>
      </div>
    </div>
  );
};

export default About;