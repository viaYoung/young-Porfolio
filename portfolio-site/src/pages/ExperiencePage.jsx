import { useParams } from 'react-router-dom';
import experiences from '../experience-content';

export default function ExperiencePage() {
  const { name } = useParams();
  const experience = experiences.find((a) => a.name === name);

  if (!experience) {
    return (
      <div className="min-h-screen bg-[var(--primary)] text-white flex items-center justify-center">
        <p className="text-lg">Experience not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--primary)] text-white">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8 items-start text-left">
        {/* Left Column: Title, Company, Dates, Content */}
        <div>
          <h1 className="text-5xl font-semibold tracking-tight mb-2">
            {experience.title}
          </h1>
          <p className="text-xl text-[var(--text-dark)]/70 italic mb-1">
            {experience.company}
          </p>
          <p className="text-sm text-[var(--text-dark)]/70 mb-4">
            {experience.dateRange}
          </p>

          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
            {experience.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Right Column: Skills with Background */}
        <div className="bg-[var(--secondary)] rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl text-[var(--tertiary)] font-semibold mb-4">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <li
                key={index}
                className="inline-block rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
