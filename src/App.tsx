import React from 'react';
import useFetch from './hooks/useFetch';
import ProfileCard from './components/ProfileCard';
import { Profile } from './hooks/useFetch';

const App: React.FC = () => {
  const { data, loading, error } = useFetch<Profile>('/data/profile.json');

  if (loading) return <div className="p-4">Loading...</div>;
  if (error || !data) return <div className="p-4 text-red-500">Error loading profile</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ProfileCard profile={data} />
    </div>
  );
};

export default App;