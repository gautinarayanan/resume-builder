import React, { useState } from 'react';

const PersonalInformation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const handleFileUpload = (e) => {
    // Handle profile picture upload
  };

  return (
    <div className="p-4 border rounded mt-4 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Personal Information</h2>
      <div className="flex flex-col gap-2">
        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="p-2 border rounded" />
        <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} className="p-2 border rounded" />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="GitHub Link" value={github} onChange={e => setGithub(e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="LinkedIn Link" value={linkedin} onChange={e => setLinkedin(e.target.value)} className="p-2 border rounded" />
        <label className="flex items-center gap-2">
          <span>Profile Picture:</span>
          <input type="file" onChange={handleFileUpload} />
        </label>
      </div>
    </div>
  );
};

export default PersonalInformation;
