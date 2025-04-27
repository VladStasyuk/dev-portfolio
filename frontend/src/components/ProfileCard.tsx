import React, { useEffect, useState } from 'react';
import { Profile } from '../hooks/useFetch';
import SkillsList from './SkillsList';
import ExperienceTimeline from './ExperienceTimeline';
import ProjectsGrid from './ProjectsGrid';

interface Props { profile: Profile }

const ProfileCard: React.FC<Props> = ({ profile }) => {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => setVisible(true), []);

  return (
    <div className={`transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>      
      <h1 className="text-3xl font-bold mb-4">{profile.name}</h1>
      <SkillsList skills={profile.skills} />
      <ExperienceTimeline items={profile.experience} />
      <ProjectsGrid projects={profile.projects} />
    </div>
  );
};

export default ProfileCard;