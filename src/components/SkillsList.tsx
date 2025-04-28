import React from 'react';

interface Props { skills: string[] }

const SkillsList: React.FC<Props> = ({ skills }) => (
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">Skills</h2>
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li key={skill} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default SkillsList;