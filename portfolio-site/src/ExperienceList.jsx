import { Link } from 'react-router-dom';

export default function ExperienceList({ experiences }) {
  return (
    <div className="space-y-8">
      {experiences.map((a) => (
        <div
          key={a.name}
          className="bg-gray-800/60 rounded-xl p-6 text-gray-200 space-y-4"
        >
          <Link to={`/experience/${a.name}`}>
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-[var(--tertiary)] sm:text-2xl">
              {a.title}
            </h3>
            <h5 className="text-sm font-normal text-gray-300 sm:text-md">
              {a.company}
            </h5>
            <h5 className="mb-2 text-sm italic text-gray-400 sm:text-md">
              {a.dateRange}
            </h5>
          </Link>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 pl-1">
            {a.content?.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
