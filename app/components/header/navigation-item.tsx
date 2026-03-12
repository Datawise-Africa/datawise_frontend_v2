import { type NavigationItem } from '~/constants/navigation';
import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import { IconChevronDown } from '@tabler/icons-react';

type NavigationItemProps = {
  item: NavigationItem;
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
};

export default function NavigationItemComponent({
  item,
  variant = 'desktop',
  onNavigate,
}: NavigationItemProps) {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    if (variant !== 'desktop' || !dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropdownOpen, variant]);

  const hasActiveChild = () => {
    if (!item.dropdownItems || item.dropdownItems.length === 0) return false;
    return item.dropdownItems.some((subItem) => {
      if (subItem.url === '/') return location.pathname === '/';
      return location.pathname.startsWith(subItem.url);
    });
  };

  const isParentActive = hasActiveChild();

  // Dropdown items
  if (item.dropdownItems && item.dropdownItems.length > 0) {
    if (variant === 'desktop') {
      return (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              isParentActive
                ? 'text-white bg-navy-light/50'
                : 'text-gray-300 hover:text-white hover:bg-navy-light/30'
            }`}
          >
            {item.title}
            <IconChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                dropdownOpen ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg bg-navy-light shadow-xl ring-black/5 focus:outline-none z-50 overflow-hidden">
              <div className="py-1">
                {item.dropdownItems.map((subItem, idx) => (
                  <NavLink
                    key={idx}
                    to={subItem.url}
                    onClick={() => setDropdownOpen(false)}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? 'bg-navy-lighter text-white'
                          : 'text-gray-300'
                      } block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-navy-lighter`
                    }
                  >
                    {subItem.title}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    // Mobile variant with dropdown
    return (
      <div className="space-y-1">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
            isParentActive
              ? 'text-white bg-navy-light/50'
              : 'text-gray-300 hover:text-white hover:bg-navy-light/30'
          }`}
        >
          {item.title}
          <IconChevronDown
            className={`h-5 w-5 transition-transform duration-200 ${
              dropdownOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
        {dropdownOpen && (
          <div className="pl-4 space-y-1">
            {item.dropdownItems.map((subItem, idx) => (
              <NavLink
                key={idx}
                to={subItem.url}
                onClick={() => {
                  setDropdownOpen(false);
                  onNavigate?.();
                }}
                className={({ isActive }) =>
                  `block w-full px-4 py-2.5 rounded-lg text-sm transition-colors duration-150 ${
                    isActive
                      ? 'text-white bg-navy-lighter'
                      : 'text-gray-400 hover:text-white hover:bg-navy-light/30'
                  }`
                }
              >
                {subItem.title}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Simple link — desktop
  if (variant === 'desktop') {
    return (
      <NavLink
        to={item.url}
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isActive
              ? 'text-white bg-navy-light/50'
              : 'text-gray-300 hover:text-white hover:bg-navy-light/30'
          }`
        }
      >
        {item.title}
      </NavLink>
    );
  }

  // Simple link — mobile
  return (
    <NavLink
      to={item.url}
      onClick={() => onNavigate?.()}
      className={({ isActive }) =>
        `px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
          isActive
            ? 'text-white bg-navy-light/50'
            : 'text-gray-300 hover:text-white hover:bg-navy-light/30'
        }`
      }
    >
      {item.title}
    </NavLink>
  );
}
