import React, { useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([{ name: '', description: '', technologies: '', role: '', duration: '' }]);

  const handleAddProject = () => {
    setProjects([...projects, { name: '', description: '', technologies: '', role: '', duration: '' }]);
  };

  const handleRemoveProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 border rounded mt-4 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-2 mb-4">
          <input type="text" placeholder="Project Name" value={project.name} onChange={e => setProjects([...projects.slice(0, index), { ...project, name: e.target.value }, ...projects.slice(index + 1)])} className="p-2 border rounded" />
          <textarea placeholder="Description" value={project.description} onChange={e => setProjects([...projects.slice(0, index), { ...project, description: e.target.value }, ...projects.slice(index + 1)])} className="p-2 border rounded h-20" />
          <input type="text" placeholder="Technologies Used" value={project.technologies} onChange={e => setProjects([...projects.slice(0, index), { ...project, technologies: e.target.value }, ...projects.slice(index + 1)])} className="p-2 border rounded" />
          <input type="text" placeholder="Role" value={project.role} onChange={e => setProjects([...projects.slice(0, index), { ...project, role: e.target.value }, ...projects.slice(index + 1)])} className="p-2 border rounded" />
          <input type="text" placeholder="Duration" value={project.duration} onChange={e => setProjects([...projects.slice(0, index), { ...project, duration: e.target.value }, ...projects.slice(index + 1)])} className="p-2 border rounded" />
          <button onClick={() => handleRemoveProject(index)} className="text-red-500">Remove</button>
        </div>
      ))}
      <button onClick={handleAddProject} className="text-blue-500">Add Project</button>
    </div>
  );
};

export default Projects;

