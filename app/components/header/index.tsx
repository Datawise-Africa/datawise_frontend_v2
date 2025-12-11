import { navigation } from '@/constants/navigation';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { href, Link } from 'react-router';
import { ArrowRightIcon, Menu as MenuIcon, X } from 'lucide-react';
import NavigationItemComponent from './navigation-item';

export default function Header() {
  const handleExploreDatasetsClick = () => {
    window.open(
      'https://datalab.datawiseafrica.com',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <Disclosure
      as="nav"
      className="bg-[#0F2542] text-[#E5E7EB] h-20 sticky top-0 left-0 z-50"
    >
      {({ open }) => (
        <>
          <div
            id="navbar"
            className={`sticky top-0 left-0 w-full z-50 backdrop-blur-sm ${
              open ? 'bg-[#0F2542]' : 'bg-[#0F2542]/90'
            } transition-colors duration-200 h-20`}
          >
            <div className="container mx-auto px-5 lg:px-8">
              <div className="flex items-center justify-between h-16 lg:h-20">
                {/* Logo */}
                <Link to={href('/')} className="shrink-0 w-48">
                  <img
                    src={'/assets/datawise-logo-dark.png'}
                    alt="Datawise logo"
                    loading="lazy"
                    width={180}
                    height={20}
                    className="h-12 w-auto md:h-16"
                  />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:ml-8">
                  <nav className="flex items-center space-x-1 justify-center">
                    {navigation.map((item) => (
                      <NavigationItemComponent
                        key={item.id}
                        item={item}
                        variant="desktop"
                      />
                    ))}
                  </nav>

                  {/* Desktop CTA Button */}
                  <button
                    onClick={handleExploreDatasetsClick}
                    className="flex items-center justify-center gap-2 bg-[#26A37E] hover:bg-[#208D6F] text-white px-6 py-2.5 font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Explore Datasets
                    <ArrowRightIcon className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile menu button */}
                <DisclosureButton className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-[#1E3A5F]/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset  transition-colors duration-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>

            {/* Mobile Navigation */}
            <DisclosurePanel className="lg:hidden">
              <div className="px-5 pt-2 pb-6 space-y-1 bg-[#0F2542] border-t border-[#1E3A5F]/50">
                <nav className="flex flex-col space-y-1">
                  {navigation.map((item) => (
                    <NavigationItemComponent
                      key={item.id}
                      item={item}
                      variant="mobile"
                    />
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <button
                  onClick={handleExploreDatasetsClick}
                  className="flex items-center justify-center gap-2 w-full mt-4 bg-[#26A37E] hover:bg-[#208D6F] text-white px-6 py-3 font-medium rounded-lg transition-colors duration-200 shadow-lg"
                >
                  Explore Datasets
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
