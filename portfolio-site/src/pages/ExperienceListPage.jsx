import ExperienceList from '../ExperienceList';
import experiences from '../experience-content';

export default function ExperienceListPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl pt-16 sm:pt-24 lg:pt-28">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-left">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Experience
          </h1>
        </div>
      </div>
      <ExperienceList experiences={experiences} />
    </>
  );
}
