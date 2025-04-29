import React from 'react';

interface Props { experience: string[] }

const ExperienceTimeline: React.FC<Props> = ({ experience }) => (
  <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
    <h2 className="text-2xl font-semibold mb-4">Experience</h2>
    <div className="relative border-l-2 border-gray-200 pl-6">
      {experience.map((item, i) => (
        <div key={i} className="mb-6 flex items-start">
          <span className="absolute -left-3 mt-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />
          <p className="text-gray-700 ml-4">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceTimeline;