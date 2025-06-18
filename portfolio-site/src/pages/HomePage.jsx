export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--primary)] text-[var(--text-light)]">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8 items-start text-left">
        {/* Left Section: Intro */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Young Hong
          </h1>
          <p className="text-xl font-medium mb-2">
            Web Engineer · Web Designer
          </p>
          <p className="text-base leading-relaxed text-[var(--text-light)]">
            Building better websites that work beautifully for everyone —
            including your users.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/younghong0706/"
              className="inline-block px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/viaYoung"
              className="inline-block px-4 py-2 bg-white text-[var(--text-dark)] rounded-lg font-medium hover:bg-gray-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="mailto:younghong.works@gmail.com"
              className="inline-block px-4 py-2 bg-white text-[var(--text-dark)] rounded-lg font-medium hover:bg-gray-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              E-mail ↗
            </a>
          </div>
        </div>

        {/* Right Section: Bio Summary */}
        <div className="bg-[var(--secondary)] rounded-xl p-6 text-[var(--text-light)] space-y-4 text-left">
          <p>
            <span className="text-[var(--accent)] font-semibold">
              Hi, I’m Young
            </span>{' '}
            — a front-end developer focused on creating accessible,
            high-performance user interfaces.
          </p>
          <p>
            With over 9 years of experience, I specialize in building responsive
            web applications using HTML, CSS, JavaScript, TypeScript, and React.
          </p>
          <p>
            I combine strong UI/UX principles with thoughtful engineering to
            deliver fast, scalable, and inclusive digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
