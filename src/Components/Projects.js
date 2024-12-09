import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'mongoDB', logo: '🍃', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { name: 'Express Js', logo: 'EX', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { name: 'React Js', logo: '⚛️', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { name: 'Node JS', logo: 'JS', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { name: 'Java', logo: '☕', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { name: 'Python', logo: '🐍', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition-colors">
                Video
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;