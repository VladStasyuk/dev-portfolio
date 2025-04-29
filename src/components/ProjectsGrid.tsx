import React from 'react';
import { Project } from '../hooks/useFetch';

const ProjectsGrid: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <div className="animate-fade-in">
    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((p) => (
        <a
          key={p.name}
          href={p.url}
          className="block bg-white shadow hover:shadow-lg rounded-lg p-4 transition-transform transform hover:-translate-y-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-lg font-medium text-gray-900">{p.name}</h3>
        </a>
      ))}
    </div>
  </div>
);

export default ProjectsGrid;