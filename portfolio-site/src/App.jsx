import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperienceListPage from './pages/ExperienceListPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillPage from './pages/SkillPage';
import Layout from './Layout';
import NotFoudPage from './pages/NotFoundPage';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoudPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/experience',
        element: <ExperienceListPage />,
      },
      {
        path: '/experience/:name',
        element: <ExperiencePage />,
      },
      {
        path: '/skill',
        element: <SkillPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
