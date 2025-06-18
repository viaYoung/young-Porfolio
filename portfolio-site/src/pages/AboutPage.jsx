export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--primary)] text-[var(--text-light)]">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8 items-start text-left">
        {/* Left Section: Heading & Message */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            About Me
          </h1>
          <p className="text-base leading-relaxed text-[var(--text-light)]">
            I'm a developer who blends creativity and code to build thoughtful,
            user-first digital experiences.
          </p>
        </div>

        {/* Right Section: Detailed Bio */}
        <div className="bg-[var(--secondary)] rounded-xl p-6 text-[var(--text-light)] space-y-4 text-left">
          <p>
            <span className="text-[var(--accent)] font-semibold">
              Experienced Web Engineer
            </span>{' '}
            with 9+ years of front-end development and UI/UX design expertise.
          </p>
          <p>
            Specializes in building responsive, accessible, and secure web
            applications using HTML, CSS, JavaScript, TypeScript, and React.
          </p>
          <p>
            Adept in user-centered design, performance optimization, and agile
            development. Passionate about crafting clean, scalable interfaces
            that prioritize usability and elegance.
          </p>
          <p>
            I thrive at the intersection of design and development, always
            looking to solve real problems through intuitive and inclusive web
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
