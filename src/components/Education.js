import React, { useState } from 'react';

const Education = () => {
  const [degree, setDegree] = useState('');
  const [institution, setInstitution] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="p-4 border rounded mt-4 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Education</h2>
      <div className="flex flex-col gap-2">
        <input type="text" placeholder="Degree" value={degree} onChange={e => setDegree(e.target.value)} className="p-2 border rounded" />
        <input type="text" placeholder="Institution" value={institution} onChange={e => setInstitution(e.target.value)} className="p-2 border rounded" />
        <div className="flex gap-2">
          <input type="date" placeholder="Start Date" value={startDate} onChange={e => setStartDate(e.target.value)} className="p-2 border rounded" />
          <span className="self-center text-gray-600">to</span>
          <input type="date" placeholder="End Date" value={endDate} onChange={e => setEndDate(e.target.value)} className="p-2 border rounded" />
        </div>
      </div>
    </div>
  );
};

export default Education;
