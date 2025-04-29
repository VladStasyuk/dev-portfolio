import React from 'react';
import useFetch, { Profile } from './hooks/useFetch';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGrid from './components/ProjectsGrid';

const App: React.FC = () => {
  const { data, loading, error } = useFetch<Profile>('/profile.json');

  if (loading) return <div className="p-6 text-center">Loading…</div>;
  if (error || !data)
    return <div className="p-6 text-center text-red-500">Error loading profile</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* HEADER */}
        <header className="text-center">
          <h1 className="text-6xl font-extrabold text-gray-900">{data.name}</h1>
        </header>

        {/* MAIN GRID */}
        <section className="grid gap-8 md:grid-cols-3">
          {/* LEFT COLUMN: Skills + Experience */}
          <div className="space-y-8 md:col-span-1">
            {/* Skills */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <div className="relative border-l-2 border-gray-200 pl-6">
                {data.experience.map((item, i) => (
                  <div key={i} className="mb-6 flex items-start">
                    <span className="absolute -left-3 mt-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />
                    <p className="text-gray-700 ml-4">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT 2-COL SPAN: Projects */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.projects.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    className="block p-4 rounded-lg border border-gray-200 hover:shadow-lg transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg font-medium text-gray-900">{p.name}</h3>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;