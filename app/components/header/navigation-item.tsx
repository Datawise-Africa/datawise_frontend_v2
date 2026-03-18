import { type NavigationItem } from '~/lib/types/navigation';
import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import {
  IconChevronDown,
  IconArrowRight,
  IconExternalLink,
} from '@tabler/icons-react';
import type { ReactNode } from 'react';

type NavigationItemProps = {
  item: NavigationItem;
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
};

/** Renders a NavLink for internal URLs or an <a> for external ones */
function NavLinkOrAnchor({
  link,
  className,
  onClick,
  children,
}: {
  link: { url: string; external?: boolean };
  className: string | ((_props: { isActive: boolean }) => string);
  onClick?: () => void;
  children: ReactNode;
}) {
  if (link.external) {
    const cls =
      typeof className === 'function'
        ? className({ isActive: false })
        : className;
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <NavLink to={link.url} className={className} onClick={onClick}>
      {children}
    </NavLink>
  );
}

/** Small external icon shown next to external links */
function ExternalBadge() {
  return <IconExternalLink className="inline h-3 w-3 ml-1 opacity-50" />;
}

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
    // Check mega menu groups
    if (item.megaMenu) {
      return item.megaMenu.groups.some((group) =>
        group.items.some((link) => {
          if (link.external) return false;
          const path = link.url.split('#')[0];
          if (path === '/') return location.pathname === '/';
          return path && location.pathname.startsWith(path);
        })
      );
    }
    // Check regular dropdown items
    if (!item.dropdownItems || item.dropdownItems.length === 0) return false;
    return item.dropdownItems.some((subItem) => {
      if (subItem.external) return false;
      if (subItem.url === '/') return location.pathname === '/';
      return location.pathname.startsWith(subItem.url.split('#')[0]);
    });
  };

  const isParentActive = hasActiveChild();
  const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0;

  // Mega menu — desktop
  if (item.megaMenu && variant === 'desktop') {
    const { groups, featured } = item.megaMenu;
    return (
      <div className="static" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
            dropdownOpen
              ? 'text-white border-primary'
              : isParentActive
                ? 'text-white border-primary/50'
                : 'text-gray-300 border-transparent hover:text-white'
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
          <div className="fixed left-0 right-0 top-20 z-50 flex justify-center border-t border-white/10">
            <div className="w-full max-w-7xl mx-auto bg-navy-light shadow-2xl rounded-b-2xl px-5 lg:px-8 py-8">
              <div className="flex gap-8">
                {/* Grouped links */}
                <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {groups.map((group) => (
                    <div key={group.heading}>
                      <h4 className="text-white font-bold text-sm mb-4">
                        {group.heading}
                      </h4>
                      <ul className="space-y-2">
                        {group.items.map((link) => (
                          <li key={link.title}>
                            <NavLinkOrAnchor
                              link={link}
                              onClick={() => setDropdownOpen(false)}
                              className={({ isActive }) =>
                                `block text-sm transition-colors duration-150 ${
                                  isActive
                                    ? 'text-primary'
                                    : 'text-gray-400 hover:text-white'
                                }`
                              }
                            >
                              {link.title}
                              {link.external && <ExternalBadge />}
                              {link.description && (
                                <span className="block text-xs text-gray-500 mt-0.5 leading-relaxed">
                                  {link.description}
                                </span>
                              )}
                            </NavLinkOrAnchor>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured cards */}
                {featured && featured.length > 0 && (
                  <div className="w-72 shrink-0 border-l border-white/10 pl-8">
                    <h4 className="text-white font-bold text-sm mb-4">
                      Featured
                    </h4>
                    <div className="space-y-3">
                      {featured.map((card) => (
                        <NavLinkOrAnchor
                          key={card.title}
                          link={card}
                          onClick={() => setDropdownOpen(false)}
                          className="block rounded-xl bg-navy-lighter p-4 hover:bg-navy-lighter/80 transition-colors group"
                        >
                          <h5 className="text-white font-semibold text-sm">
                            {card.title}
                            {card.external && <ExternalBadge />}
                          </h5>
                          <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                            {card.description}
                          </p>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-2 group-hover:gap-2 transition-all">
                            <IconArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </NavLinkOrAnchor>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Mega menu — mobile
  if (item.megaMenu && variant === 'mobile') {
    const { groups } = item.megaMenu;
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
          <div className="pl-4 space-y-4 pt-2">
            {groups.map((group) => (
              <div key={group.heading}>
                <p className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  {group.heading}
                </p>
                {group.items.map((link) => (
                  <NavLinkOrAnchor
                    key={link.title}
                    link={link}
                    onClick={() => {
                      setDropdownOpen(false);
                      onNavigate?.();
                    }}
                    className={({ isActive }) =>
                      `block px-4 py-1.5 text-sm transition-colors duration-150 ${
                        isActive
                          ? 'text-primary'
                          : 'text-gray-400 hover:text-white'
                      }`
                    }
                  >
                    {link.title}
                    {link.external && <ExternalBadge />}
                  </NavLinkOrAnchor>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Regular dropdown — desktop
  if (hasDropdown && variant === 'desktop') {
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
                <NavLinkOrAnchor
                  key={idx}
                  link={subItem}
                  onClick={() => setDropdownOpen(false)}
                  className={({ isActive }) =>
                    `${
                      isActive ? 'bg-navy-lighter text-white' : 'text-gray-300'
                    } block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-navy-lighter`
                  }
                >
                  {subItem.title}
                  {subItem.external && <ExternalBadge />}
                </NavLinkOrAnchor>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Regular dropdown — mobile
  if (hasDropdown) {
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
              <NavLinkOrAnchor
                key={idx}
                link={subItem}
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
                {subItem.external && <ExternalBadge />}
              </NavLinkOrAnchor>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Simple link — desktop
  if (variant === 'desktop') {
    return (
      <NavLinkOrAnchor
        link={item}
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isActive
              ? 'text-white bg-navy-light/50'
              : 'text-gray-300 hover:text-white hover:bg-navy-light/30'
          }`
        }
      >
        {item.title}
        {item.external && <ExternalBadge />}
      </NavLinkOrAnchor>
    );
  }

  // Simple link — mobile
  return (
    <NavLinkOrAnchor
      link={item}
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
      {item.external && <ExternalBadge />}
    </NavLinkOrAnchor>
  );
}
