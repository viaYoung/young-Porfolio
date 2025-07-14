import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skill', href: '/skill' },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--primary)] max-w-6xl mx-auto">
      <nav aria-label="Global" className="px-6 lg:px-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4">
          {/* Left: Logo or Name */}
          <a href="/" className="text-lg font-bold">
            <span className="sr-only">Young Hong Works</span>
            <span className="hidden lg:inline"></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-[var(--secondary)] transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-50 lg:hidden"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <DialogPanel className="fixed inset-0 z-50 w-full h-full bg-[var(--primary)] text-white p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-white hover:text-[var(--secondary)]"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Name */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight">Young Hong</h1>
          </div>

          {/* Mobile Nav */}
          <div className="space-y-6 text-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-semibold hover:text-[var(--secondary)] transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
