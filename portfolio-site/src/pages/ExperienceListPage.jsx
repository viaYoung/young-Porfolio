import ExperienceList from '../ExperienceList';
import experiences from '../experience-content';

export default function ExperienceListPage() {
  return (
    <div className="min-h-screen bg-[var(--primary)">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8 items-start text-left">
        {/* Left Section: Heading & Message */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-[var(--text-light)]">
            Experience
          </h1>
          <p className="text-base leading-relaxed text-[var(--text-light)]">
            A look at some of the meaningful work I’ve done across design,
            engineering, and product development.
          </p>
        </div>

        {/* Right Section: Experience List */}
        <div className="bg-[var(--secondary)] rounded-xl p-6 text-gray-200 space-y-8 text-left">
          <ExperienceList experiences={experiences} />
        </div>
      </div>
    </div>
  );
}
