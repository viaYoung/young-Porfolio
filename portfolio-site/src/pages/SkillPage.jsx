import skills from '../skills-content';

export default function SkillPage() {
  return (
    <div className="min-h-screen bg-[var(--primary)] text-white">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8 items-start text-left">
        {/* Left Section: Heading & Intro */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Skills
          </h1>
          <p className="text-base leading-relaxed">
            A snapshot of the technologies, tools, and disciplines I use to
            build thoughtful and performant user experiences.
          </p>
        </div>

        {/* Right Section: Skill Categories */}
        <div className="bg-[var(--secondary)] rounded-2xl p-6 text-white space-y-6 shadow-md">
          {skills.map((a, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-[var(--tertiary)] mb-2">
                {a.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {a.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
