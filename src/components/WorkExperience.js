import React, { useState } from 'react';

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([{ jobTitle: '', company: '', startDate: '', endDate: '', present: false, responsibilities: [''] }]);

  const handleAddExperience = () => {
    setExperiences([...experiences, { jobTitle: '', company: '', startDate: '', endDate: '', present: false, responsibilities: [''] }]);
  };

  const handleRemoveExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 border rounded mt-4 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="flex flex-col gap-2 mb-4">
          <input type="text" placeholder="Job Title" value={exp.jobTitle} onChange={e => setExperiences([...experiences.slice(0, index), { ...exp, jobTitle: e.target.value }, ...experiences.slice(index + 1)])} className="p-2 border rounded" />
          <input type="text" placeholder="Company" value={exp.company} onChange={e => setExperiences([...experiences.slice(0, index), { ...exp, company: e.target.value }, ...experiences.slice(index + 1)])} className="p-2 border rounded" />
          <div className="flex gap-2">
            <input type="date" placeholder="Start Date" value={exp.startDate} onChange={e => setExperiences([...experiences.slice(0, index), { ...exp, startDate: e.target.value }, ...experiences.slice(index + 1)])} className="p-2 border rounded" />
            <span className="self-center text-gray-600">to</span>
            <input type="date" placeholder="End Date" value={exp.endDate} onChange={e => setExperiences([...experiences.slice(0, index), { ...exp, endDate: e.target.value }, ...experiences.slice(index + 1)])} className="p-2 border rounded" />
            <label className="flex items-center">
              <input type="checkbox" checked={exp.present} onChange={e => setExperiences([...experiences.slice(0, index), { ...exp, present: e.target.checked }, ...experiences.slice(index + 1)])} />
              <span className="ml-2 text-sm text-gray-600">Present</span>
            </label>
          </div>
          <div className="flex flex-col gap-2">
            {exp.responsibilities.map((resp, respIndex) => (
              <div key={respIndex} className="flex gap-2">
                <button className="text-gray-400">•</button>
                <input type="text" placeholder="Description" value={resp} onChange={e => setExperiences([...experiences.slice(0, index), { ...exp, responsibilities: [...exp.responsibilities.slice(0, respIndex), e.target.value, ...exp.responsibilities.slice(respIndex + 1)] }, ...experiences.slice(index + 1)])} className="p-2 border rounded flex-grow" />
              </div>
            ))}
            <button onClick={() => setExperiences([...experiences.slice(0, index), { ...exp, responsibilities: [...exp.responsibilities, ''] }, ...experiences.slice(index + 1)])} className="text-blue-500">Add Bullet</button>
          </div>
          <button onClick={() => handleRemoveExperience(index)} className="text-red-500">Remove</button>
        </div>
      ))}
      <button onClick={handleAddExperience} className="text-blue-500">Add Experience</button>
    </div>
  );
};

export default WorkExperience;
