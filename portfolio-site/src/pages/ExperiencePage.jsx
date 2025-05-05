import { useParams } from 'react-router-dom';
import experiences from '../experience-content';

export default function ExperiencePage() {
  const { name } = useParams();
  const experience = experiences.find((a) => a.name === name);

  return (
    <>
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
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-slate-900 sm:text-7xl">
                {experience.title}
              </h1>
              <div className="mt-6">
                {experience.content.map((p) => (
                  <p
                    className="mt-2 text-lg font-medium text-pretty text-gray-500 sm:text-lg/7"
                    key={p}
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-6">
                {experience.skills.map((s) => (
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-emerald-300 to-indigo-500 group-hover:from-indigo-500 group-hover:to-emerald-300 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-indigo-500">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent">
                      {s}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
