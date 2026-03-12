import { navigation } from '~/constants/navigation';
import { useState } from 'react';
import { href, Link } from 'react-router';
import {
  IconArrowRight,
  IconMenu2,
  IconX,
  IconSun,
  IconMoon,
} from '@tabler/icons-react';
import NavigationItemComponent from './navigation-item';
import { useTheme } from '~/hooks/use-theme';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { darkMode, toggle: toggleTheme } = useTheme();

  const handleExploreDatasetsClick = () => {
    window.open(
      'https://datalab.datawiseafrica.com',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <nav className="bg-navy text-gray-light sticky top-0 left-0 z-50">
      <div
        id="navbar"
        className={`sticky top-0 left-0 w-full z-50 backdrop-blur-sm ${
          mobileOpen ? 'bg-navy' : 'bg-navy/90'
        } transition-colors duration-200 h-20 border-b border-white/10`}
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
              <div className="flex items-center space-x-1 justify-center">
                {navigation.map((item) => (
                  <NavigationItemComponent
                    key={item.id}
                    item={item}
                    variant="desktop"
                  />
                ))}
              </div>

              {/* Desktop CTA Button */}
              <button
                onClick={handleExploreDatasetsClick}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Datasets
                <IconArrowRight className="h-5 w-5" />
              </button>

              {/* Desktop Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="ml-3 inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:bg-navy-light/50 hover:text-white transition-colors duration-200"
                aria-label={
                  darkMode ? 'Switch to light mode' : 'Switch to dark mode'
                }
              >
                {darkMode ? (
                  <IconSun className="h-5 w-5" />
                ) : (
                  <IconMoon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-navy-light/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {mobileOpen ? (
                <IconX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <IconMenu2 className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden">
            <div className="px-5 pt-2 pb-6 space-y-1 bg-navy border-t border-navy-light/50">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <NavigationItemComponent
                    key={item.id}
                    item={item}
                    variant="mobile"
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <button
                onClick={handleExploreDatasetsClick}
                className="flex items-center justify-center gap-2 w-full mt-4 bg-primary hover:bg-primary-hover text-white px-6 py-3 font-medium rounded-lg transition-colors duration-200 shadow-lg"
              >
                Explore Datasets
                <IconArrowRight className="h-5 w-5" />
              </button>

              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 w-full mt-2 px-6 py-3 rounded-lg text-gray-300 hover:bg-navy-light/50 hover:text-white transition-colors duration-200"
              >
                {darkMode ? (
                  <>
                    <IconSun className="h-5 w-5" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <IconMoon className="h-5 w-5" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
