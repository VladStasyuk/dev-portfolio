import React from 'react';
import { Project } from '../hooks/useFetch';

interface Props { projects: Project[] }

const ProjectsGrid: React.FC<Props> = ({ projects }) => (
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map(({ name, url }) => (
        <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-medium mb-1">{name}</h3>
          <p className="text-sm text-blue-600 truncate">{url}</p>
        </a>
      ))}
    </div>
  </section>
);

export default ProjectsGrid;