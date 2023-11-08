import React from 'react';
import Education from './Education';
import WorkExperience from './WorkExperience';
import PersonalInformation from './PersonalInformation';
import Projects from './Projects';
import Skills from './Skills';
import Logo from './Felix3.png'; // Replace with the correct path to your logo

const MasterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 p-8">
      <header className="flex items-center mb-8">
        <img src={Logo} alt="Logo" className="h-12" /> {/* Adjust the size as needed */}
        <h1 className="ml-4 text-3xl text-white font-bold">Resume Builder</h1>
      </header>
      <div className="bg-white p-8 rounded shadow-lg">
        <PersonalInformation />
        <Education />
        <WorkExperience />
        <Skills />
        <Projects />
        {/* Add any other components as needed */}
      </div>
    </div>
  );
};

export default MasterPage;

