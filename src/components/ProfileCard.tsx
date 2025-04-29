import React from 'react';
import { Profile } from '../hooks/useFetch';

const ProfileCard: React.FC<{ profile: Profile }> = ({ profile }) => (
  <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
    <h1 className="text-5xl font-bold mb-4">{profile.name}</h1>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {profile.skills.map((s) => (
          <span
            key={s}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  </div>
);

export default ProfileCard;