import React from 'react';

interface Props { items: string[] }

const ExperienceTimeline: React.FC<Props> = ({ items }) => (
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">Experience</h2>
    <ol className="border-l-2 border-gray-300 dark:border-gray-600 pl-4 space-y-4">
      {items.map((exp, idx) => (
        <li key={idx} className="relative">
          <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full"></span>
          <p className="text-sm">{exp}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default ExperienceTimeline;