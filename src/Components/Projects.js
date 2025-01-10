import React from 'react';

const Projects = () => {
  const projects = [
  { name: 'React', logo: '⚛️', description: 'A JavaScript library for building user interfaces. Ex- Portfolio, Weather Application' },
  { name: 'Node.js', logo: '🟩', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine. Ex- CRUD Application, Flipkart Clone' },
  { name: 'Express', logo: '🟪', description: 'Fast, unopinionated, minimalist web framework for Node.js. Ex- Flipkart Clone, CRUD Application' },
  { name: 'MongoDB', logo: '🍃', description: 'A document-based NoSQL database that provides high performance. Ex- Flipkart Clone, CRUD Application' },
  { name: 'JavaScript', logo: '🟨', description: 'A programming language that enables dynamic content on websites. Ex- Flashcard Quiz App' },
  { name: 'PHP', logo: '🐘', description: 'A popular general-purpose scripting language that is especially suited to web development. Ex- Student Attendence Management System' },
  { name: 'MySQL', logo: '🔵', description: 'An open-source relational database management system. Ex- Student Attendence Management System' },
  { name: 'HTML', logo: '🌐', description: 'The standard markup language for documents designed to be displayed in a web browser. Ex- Weather' },
  { name: 'CSS', logo: '🎨', description: 'A stylesheet language used for describing the presentation of a document written in HTML or XML. Ex- Weather' },
  { name: 'Java', logo: '☕', description: 'A high-level, class-based, object-oriented programming language. Ex- Git' },
  { name: 'Python', logo: '🐍', description: 'A high-level, interpreted programming language known for its readability. Ex- Face Attendance System' }
  ];

  return (
    <div Name="Projects" className="p-6 ">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <h2 className="text-xl font-bold mb-6 underline">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="text-5xl mb-4">{project.logo}</div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <div className="mt-auto">
              
            <a href="https://github.com/apjadon7895" target="_blank" rel="noopener noreferrer">
           <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
           Source Code
           </button>
           </a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;