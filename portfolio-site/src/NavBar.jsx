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
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Young Hong Works</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              className="h-8 w-auto"
            >
              <path
                d="M29.6533 3.56599C29.6543 -1.18829 46.0303 -1.18829 46.0312 3.56599V30.4322C48.3308 30.031 50.5737 29.8297 52.5459 29.8297C61.5275 29.8297 74.9996 33.9904 75 42.3111V71.4351C74.9991 76.1894 58.623 76.1894 58.6221 71.4351V44.3111C58.622 41.3396 57.5977 39.5562 51.9844 39.5562C46.3713 39.5563 45.3477 41.3396 45.3477 44.3111V71.4351C45.3467 76.1894 28.9697 76.1894 28.9688 71.4351V44.5679C26.6692 44.9691 24.4263 45.1715 22.4541 45.1715C13.4725 45.1714 0.000355556 41.0107 0 32.69V3.56599C0.000957183 -1.18828 16.377 -1.18828 16.3779 3.56599V30.69C16.378 33.6616 17.4023 35.4449 23.0156 35.4449C28.629 35.4449 29.6532 33.6616 29.6533 30.69V3.56599Z"
                fill="#6EE7B7"
              />
            </svg>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Young Hong Works</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                className="h-8 w-auto"
              >
                <path
                  d="M29.6533 3.56599C29.6543 -1.18829 46.0303 -1.18829 46.0312 3.56599V30.4322C48.3308 30.031 50.5737 29.8297 52.5459 29.8297C61.5275 29.8297 74.9996 33.9904 75 42.3111V71.4351C74.9991 76.1894 58.623 76.1894 58.6221 71.4351V44.3111C58.622 41.3396 57.5977 39.5562 51.9844 39.5562C46.3713 39.5563 45.3477 41.3396 45.3477 44.3111V71.4351C45.3467 76.1894 28.9697 76.1894 28.9688 71.4351V44.5679C26.6692 44.9691 24.4263 45.1715 22.4541 45.1715C13.4725 45.1714 0.000355556 41.0107 0 32.69V3.56599C0.000957183 -1.18828 16.377 -1.18828 16.3779 3.56599V30.69C16.378 33.6616 17.4023 35.4449 23.0156 35.4449C28.629 35.4449 29.6532 33.6616 29.6533 30.69V3.56599Z"
                  fill="#6EE7B7"
                />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
