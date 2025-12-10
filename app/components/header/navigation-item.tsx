import { type NavigationItem } from '@/constants/navigation';
import {
  CloseButton,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { Fragment } from 'react';
import { NavLink, useLocation } from 'react-router';
import { ChevronDown } from 'lucide-react';

type NavigationItemProps = {
  item: NavigationItem;
  variant?: 'desktop' | 'mobile';
};

export default function NavigationItemComponent({
  item,
  variant = 'desktop',
}: NavigationItemProps) {
  const location = useLocation();

  // Check if any child link is active
  const hasActiveChild = () => {
    if (!item.dropdownItems || item.dropdownItems.length === 0) return false;
    return item.dropdownItems.some((subItem) => {
      if (subItem.url === '/') {
        return location.pathname === '/';
      }
      return location.pathname.startsWith(subItem.url);
    });
  };

  const isParentActive = hasActiveChild();

  // If item has dropdown items, render dropdown/popover
  if (item.dropdownItems && item.dropdownItems.length > 0) {
    if (variant === 'desktop') {
      return (
        <Menu as="div" className="relative">
          {({ open: isOpen }) => (
            <>
              <MenuButton
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isParentActive
                    ? 'text-white bg-[#1E3A5F]/50'
                    : 'text-gray-300 hover:text-white hover:bg-[#1E3A5F]/30'
                }`}
              >
                {item.title}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </MenuButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <MenuItems className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg bg-[#1E3A5F] shadow-xl ring-black/5 focus:outline-none z-50 overflow-hidden">
                  <div className="py-1">
                    {item.dropdownItems.map((subItem, idx) => (
                      <MenuItem key={idx}>
                        {({ active }) => (
                          <NavLink
                            to={subItem.url}
                            className={({ isActive }) =>
                              `${
                                active || isActive
                                  ? 'bg-[#2D4B6A] text-white'
                                  : 'text-gray-300'
                              } block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-[#a8abaf]`
                            }
                          >
                            {subItem.title}
                          </NavLink>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Transition>
            </>
          )}
        </Menu>
      );
    }

    // Mobile variant with dropdown
    return (
      <Disclosure as="div" className="space-y-1">
        {({ open: isOpen }) => (
          <>
            <DisclosureButton
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                isParentActive
                  ? 'text-white bg-[#1E3A5F]/50'
                  : 'text-gray-300 hover:text-white hover:bg-[#1E3A5F]/30'
              }`}
            >
              {item.title}
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </DisclosureButton>
            <div className="overflow-hidden">
              <DisclosurePanel
                transition
                className="origin-top transition duration-200 ease-out data-closed:opacity-0 data-closed:-translate-y-2 data-open:opacity-100 data-open:translate-y-0"
              >
                <div className="pl-4 space-y-1">
                  {item.dropdownItems.map((subItem, idx) => (
                    <CloseButton
                      key={idx}
                      as={NavLink}
                      to={subItem.url}
                      className={({ isActive }: { isActive: boolean }) =>
                        `block w-full px-4 py-2.5 rounded-lg text-sm transition-colors duration-150 ${
                          isActive
                            ? 'text-white bg-[#2D4B6A]'
                            : 'text-gray-400 hover:text-white hover:bg-[#1E3A5F]/30'
                        }`
                      }
                    >
                      {subItem.title}
                    </CloseButton>
                  ))}
                </div>
              </DisclosurePanel>
            </div>
          </>
        )}
      </Disclosure>
    );
  }

  // If item has no dropdown items, render as simple link
  if (variant === 'desktop') {
    return (
      <NavLink
        to={item.url}
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isActive
              ? 'text-white bg-[#1E3A5F]/50'
              : 'text-gray-300 hover:text-white hover:bg-[#1E3A5F]/30'
          }`
        }
      >
        {item.title}
      </NavLink>
    );
  }

  // Mobile variant without dropdown
  return (
    <CloseButton
      as={NavLink}
      to={item.url}
      className={({ isActive }: { isActive: boolean }) =>
        `px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
          isActive
            ? 'text-white bg-[#1E3A5F]/50'
            : 'text-gray-300 hover:text-white hover:bg-[#1E3A5F]/30'
        }`
      }
    >
      {item.title}
    </CloseButton>
  );
}
