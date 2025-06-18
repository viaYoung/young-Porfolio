import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className="pt-20 px-6 py-12 lg:px-16">
        <Outlet />
      </main>
    </>
  );
}
