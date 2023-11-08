import React, { useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState(['']);

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleChangeSkill = (index, value) => {
    setSkills([...skills.slice(0, index), value, ...skills.slice(index + 1)]);
  };

  return (
    <div className="p-4 border rounded mt-4 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <input type="text" placeholder="Skill" value={skill} onChange={e => handleChangeSkill(index, e.target.value)} className="p-2 border rounded flex-grow" />
          <button onClick={() => handleRemoveSkill(index)} className="text-red-500">Remove</button>
        </div>
      ))}
      <button onClick={handleAddSkill} className="text-blue-500">Add Skill</button>
    </div>
  );
};

export default Skills;
