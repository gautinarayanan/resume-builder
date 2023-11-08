import React, { useState } from 'react';
import PersonalInformation from '../src/components/PersonalInformation';
import Education from '../src/components/Education';
import WorkExperience from '../src/components/WorkExperience';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import { generate_latex_code } from '../src/utils/latexGenerator';
import MasterPage from '../src/components/MasterPage';
// import Logo from '../public/Felix3.png';

const Home = () => {
  const [resumeData, setResumeData] = useState({
    personalInformation: {},
    education: [],
    workExperience: [],
    skills: [],
    projects: []
  });

  const updateSection = (section, data) => {
    setResumeData({
      ...resumeData,
      [section]: data
    });
  };

  const handlePreview = () => {
    const latexSource = generate_latex_code(resumeData);

    fetch('/api/compileLatex', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ latexSource }),
    })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank');
    });
  };
  

  
    
  

  const updatePersonalInformation = (info) => {
    setResumeData({ ...resumeData, personalInformation: info });
  };

  const updateEducation = (education) => {
    setResumeData({ ...resumeData, education });
  };

  const updateWorkExperience = (workExperience) => {
    setResumeData({ ...resumeData, workExperience });
  };

  const updateSkills = (skills) => {
    setResumeData({ ...resumeData, skills });
  };

  const updateProjects = (projects) => {
    setResumeData({ ...resumeData, projects });
  };
//   return (
//     <div className="p-8">
//       <MasterPage />
//       <PersonalInformation updatePersonalInformation={updatePersonalInformation} />
//       <Education updateEducation={updateEducation} />
//       <WorkExperience updateWorkExperience={updateWorkExperience} />
//       <Skills updateSkills={updateSkills} />
//       <Projects updateProjects={updateProjects} />
//       {/* <button onClick={handlePreview} className="bg-blue-500 text-white p-2 rounded mt-4">Preview Resume</button> */}
//       <button onClick={handlePreview} style={{ backgroundColor: 'blue', color: 'white' }}>  Preview Resume </button>

//     </div>
//   );
// };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 p-8">
      <header className="flex items-center mb-8">
        <img src="../public/Felix3.png" alt="Logo" className="h-12" /> {/* Adjust the size and path as needed */}
        <h1 className="ml-4 text-3xl text-white font-bold">Resume Builder</h1>
      </header>
      <div className="bg-white p-8 rounded shadow-lg">
        <PersonalInformation updatePersonalInformation={updatePersonalInformation} />
        <Education updateEducation={updateEducation} />
        <WorkExperience updateWorkExperience={updateWorkExperience} />
        <Skills updateSkills={updateSkills} />
        <Projects updateProjects={updateProjects} />
        {/* <button onClick={handlePreview} className="bg-blue-500 text-white p-2 rounded mt-4">Preview Resume</button> */}
        <button onClick={handlePreview} style={{ backgroundColor: 'blue', color: 'white' }}>
  Preview Resume
</button>

        {/* Additional buttons and functionalities for preview and download will be added here */}
      </div>
    </div>
  );
  
};

export default Home;
