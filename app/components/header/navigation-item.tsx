import { type NavigationItem } from '~/lib/types/navigation';
import { useState, useRef, useEffect, useId } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Icon } from '@iconify/react';
import type { ReactNode } from 'react';

type NavigationItemProps = {
  item: NavigationItem;
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
  /** Mobile accordion: controlled expansion so only one section is open */
  expanded?: boolean;
  onExpandedChange?: (_expanded: boolean) => void;
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
  return (
    <Icon
      icon="tabler:external-link"
      className="inline h-3 w-3 ml-1 opacity-50"
    />
  );
}

export default function NavigationItemComponent({
  item,
  variant = 'desktop',
  onNavigate,
  expanded,
  onExpandedChange,
}: NavigationItemProps) {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const openedByHover = useRef(false);

  /**
   * Desktop parent trigger only toggles the menu (WAI-ARIA disclosure
   * pattern); the section page is reached via the "overview" link inside.
   * A click on a menu that hover just opened pins it open instead of closing.
   */
  const handleParentClick = () => {
    clearTimeout(hoverTimer.current);
    if (openedByHover.current) {
      openedByHover.current = false;
      setDropdownOpen(true);
      return;
    }
    setDropdownOpen((open) => !open);
  };

  // Hover intent: delay open/close so passing pointers don't flicker the menu
  const hoverDelay = 300;
  const hoverProps = {
    onMouseEnter: () => {
      clearTimeout(hoverTimer.current);
      if (dropdownOpen) return;
      hoverTimer.current = setTimeout(() => {
        openedByHover.current = true;
        setDropdownOpen(true);
      }, hoverDelay);
    },
    onMouseLeave: () => {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = setTimeout(() => {
        openedByHover.current = false;
        setDropdownOpen(false);
      }, hoverDelay);
    },
  };

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  // Close on navigation (sub-item click, back/forward)
  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname, location.hash]);

  // Close on Escape and return focus to the trigger (desktop)
  useEffect(() => {
    if (variant !== 'desktop' || !dropdownOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setDropdownOpen(false);
      triggerRef.current?.focus();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [dropdownOpen, variant]);

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
    const { groups: allGroups, featured } = item.megaMenu;
    const groups = allGroups.filter((group) => group.items.length > 0);
    return (
      <div className="static" ref={dropdownRef} {...hoverProps}>
        <button
          ref={triggerRef}
          onClick={handleParentClick}
          aria-expanded={dropdownOpen}
          aria-controls={panelId}
          className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
            dropdownOpen
              ? 'text-white border-primary'
              : isParentActive
                ? 'text-white border-primary/50'
                : 'text-gray-300 border-transparent hover:text-white'
          }`}
        >
          {item.title}
          <Icon
            icon="tabler:chevron-down"
            className={`h-4 w-4 transition-transform duration-200 ${
              dropdownOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
        {dropdownOpen && (
          <div
            id={panelId}
            className="fixed left-0 right-0 top-20 z-50 flex justify-center border-t border-white/10"
          >
            <div className="w-full max-w-7xl mx-auto bg-navy-light shadow-2xl rounded-b-2xl px-5 lg:px-8 py-8">
              <div className="flex gap-8">
                {/* Grouped links — one column per group */}
                <div
                  className="flex-1 grid divide-x divide-white/10"
                  style={{
                    gridTemplateColumns: `repeat(${groups.length}, minmax(0, 1fr))`,
                  }}
                >
                  {groups.map((group) => (
                    <div
                      key={group.heading}
                      className="flex flex-col px-6 first:pl-0 last:pr-0"
                    >
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                        {group.heading}
                      </h4>
                      <ul className="space-y-1">
                        {group.items.map((link) => (
                          <li key={link.title}>
                            <NavLinkOrAnchor
                              link={link}
                              onClick={() => setDropdownOpen(false)}
                              className="group/item -mx-2 flex items-start gap-3 rounded-lg p-2 transition-colors duration-150 hover:bg-white/5"
                            >
                              {link.icon && (
                                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-white/5 text-primary">
                                  <Icon icon={link.icon} className="h-4 w-4" />
                                </span>
                              )}
                              <span className="min-w-0 flex-1">
                                <span className="block text-sm font-medium text-white">
                                  {link.title}
                                  {link.external && <ExternalBadge />}
                                </span>
                                {link.description && (
                                  <span className="block text-xs text-gray-400 mt-0.5 leading-relaxed line-clamp-2">
                                    {link.description}
                                  </span>
                                )}
                              </span>
                              <Icon
                                icon="tabler:chevron-right"
                                className="h-4 w-4 shrink-0 self-center text-gray-500 opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:opacity-100 group-hover/item:text-white"
                                aria-hidden="true"
                              />
                            </NavLinkOrAnchor>
                          </li>
                        ))}
                      </ul>
                      {group.seeAll && (
                        <NavLinkOrAnchor
                          link={group.seeAll}
                          onClick={() => setDropdownOpen(false)}
                          className="mt-3 inline-flex w-fit items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          {group.seeAll.title}
                          <Icon
                            icon="tabler:arrow-right"
                            className="h-3.5 w-3.5"
                          />
                        </NavLinkOrAnchor>
                      )}
                    </div>
                  ))}
                </div>

                {/* Featured cards */}
                {featured && featured.length > 0 && (
                  <div className="w-72 shrink-0 space-y-3">
                    {featured.map((card) => (
                      <NavLinkOrAnchor
                        key={card.title}
                        link={card}
                        onClick={() => setDropdownOpen(false)}
                        className="group block rounded-xl bg-navy-lighter p-5 hover:bg-navy-lighter/80 transition-colors"
                      >
                        {card.eyebrow && (
                          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                            {card.eyebrow}
                          </span>
                        )}
                        <h5 className="mt-1 text-white font-semibold text-sm leading-snug">
                          {card.title}
                        </h5>
                        <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                          {card.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-3 group-hover:gap-2 transition-all">
                          {card.external ? 'Read report' : 'Learn more'}
                          <Icon
                            icon="tabler:arrow-right"
                            className="h-3.5 w-3.5"
                          />
                        </span>
                      </NavLinkOrAnchor>
                    ))}
                  </div>
                )}
              </div>
              {/* View all link */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <NavLinkOrAnchor
                  link={item}
                  onClick={() => setDropdownOpen(false)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {item.title} overview
                  <Icon icon="tabler:arrow-right" className="h-4 w-4" />
                </NavLinkOrAnchor>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Mega menu — mobile
  if (item.megaMenu && variant === 'mobile') {
    const { groups: allGroups, featured } = item.megaMenu;
    const groups = allGroups.filter((group) => group.items.length > 0);
    const isExpanded = expanded ?? dropdownOpen;
    const toggle = () =>
      onExpandedChange
        ? onExpandedChange(!isExpanded)
        : setDropdownOpen(!isExpanded);
    const close = () => {
      onExpandedChange?.(false);
      setDropdownOpen(false);
      onNavigate?.();
    };
    return (
      <div className="space-y-1">
        <button
          onClick={toggle}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
            isParentActive || isExpanded
              ? 'text-white bg-navy-light/50'
              : 'text-gray-300 hover:text-white hover:bg-navy-light/30'
          }`}
        >
          {item.title}
          <Icon
            icon="tabler:chevron-down"
            className={`h-5 w-5 transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
        {isExpanded && (
          <div id={panelId} className="pl-2 space-y-4 pt-1 pb-2">
            <NavLinkOrAnchor
              link={item}
              onClick={close}
              className="flex items-center gap-1.5 min-h-11 px-4 text-sm font-medium text-primary"
            >
              {item.title} overview
              <Icon icon="tabler:arrow-right" className="h-4 w-4" />
            </NavLinkOrAnchor>
            {groups.map((group) => (
              <div key={group.heading}>
                <p className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                  {group.heading}
                </p>
                {group.items.map((link) => (
                  <NavLinkOrAnchor
                    key={link.title}
                    link={link}
                    onClick={close}
                    className="flex items-center gap-3 min-h-11 px-4 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-navy-light/30 transition-colors duration-150"
                  >
                    {link.icon && (
                      <Icon
                        icon={link.icon}
                        className="h-4 w-4 shrink-0 text-primary"
                      />
                    )}
                    <span>
                      {link.title}
                      {link.external && <ExternalBadge />}
                    </span>
                  </NavLinkOrAnchor>
                ))}
                {group.seeAll && (
                  <NavLinkOrAnchor
                    link={group.seeAll}
                    onClick={close}
                    className="flex items-center gap-1 min-h-11 px-4 text-xs font-medium text-primary"
                  >
                    {group.seeAll.title}
                    <Icon icon="tabler:arrow-right" className="h-3.5 w-3.5" />
                  </NavLinkOrAnchor>
                )}
              </div>
            ))}
            {featured?.map((card) => (
              <NavLinkOrAnchor
                key={card.title}
                link={card}
                onClick={close}
                className="block mx-2 rounded-xl bg-navy-light p-4"
              >
                {card.eyebrow && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {card.eyebrow}
                  </span>
                )}
                <span className="mt-1 block text-sm font-semibold text-white leading-snug">
                  {card.title}
                </span>
                <span className="mt-1 block text-xs text-gray-400 leading-relaxed">
                  {card.description}
                </span>
              </NavLinkOrAnchor>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Regular dropdown — desktop
  if (hasDropdown && variant === 'desktop') {
    return (
      <div className="relative" ref={dropdownRef} {...hoverProps}>
        <button
          ref={triggerRef}
          onClick={handleParentClick}
          aria-expanded={dropdownOpen}
          aria-controls={panelId}
          className={`flex items-center gap-1.5 whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isParentActive
              ? 'text-white bg-navy-light/50'
              : 'text-gray-300 hover:text-white hover:bg-navy-light/30'
          }`}
        >
          {item.title}
          <Icon
            icon="tabler:chevron-down"
            className={`h-4 w-4 transition-transform duration-200 ${
              dropdownOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
        {dropdownOpen && (
          <div
            id={panelId}
            className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg bg-navy-light shadow-xl ring-black/5 focus:outline-none z-50 overflow-hidden"
          >
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
          <Icon
            icon="tabler:chevron-down"
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
          `whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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
