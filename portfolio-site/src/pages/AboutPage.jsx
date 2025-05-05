export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-left">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              About me
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              <spa className="text-indigo-500">
                Experienced Web Engineer with 9+ years of front-end development
                and UI/UX design
              </spa>{' '}
              expertise. Specializes in building responsive, accessible, and
              secure web applications using HTML, CSS, JavaScript, TypeScript,
              and React. Adept in user-centered design, performance
              optimization, and agile development. Seeking to contribute
              technical and creative problem-solving skills to impactful web
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
