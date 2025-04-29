import React from 'react';
import useFetch, { Profile } from './hooks/useFetch';
import ProfileCard from './components/ProfileCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGrid from './components/ProjectsGrid';

const App: React.FC = () => {
  const { data, loading, error } = useFetch<Profile>('/profile.json');

  if (loading) return <div className="p-4">Loading...</div>;
  if (error || !data) return <div className="p-4 text-red-500">Error loading profile</div>;

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      <ProfileCard profile={data} />
      <ExperienceTimeline experience={data.experience} />
      <ProjectsGrid projects={data.projects} />
    </div>
  );
};

export default App;