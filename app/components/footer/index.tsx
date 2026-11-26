import { socials } from '~/lib/data/socials';
import { href, Link } from 'react-router';
import { Icon } from '@iconify/react';

const socialIcons: Record<string, string> = {
  LinkedIn: 'tabler:brand-linkedin',
  Github: 'tabler:brand-github',
  X: 'tabler:brand-x',
};

const contactDetails = [
  { icon: 'tabler:phone', text: '+254 704 237 879' },
  { icon: 'tabler:mail', text: 'info@datawiseafrica.com' },
  {
    icon: 'tabler:map-pin',
    text: 'Highway Heights, Marcus Garvey Rd, Kilimani, Nairobi, Kenya',
  },
];

const primaryLinks = [
  { to: '/about-us', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/contact-us', label: 'Contact Us' },
];

const secondaryLinks = [
  { to: '/', label: 'Home' },
  { to: '/partners', label: 'Partners' },
  { to: '/careers', label: 'Careers' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
];

const linkGroups = [
  { title: 'Top Pages', links: primaryLinks },
  { title: 'More', links: secondaryLinks },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-5 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-10">
          {/* Logo & Tagline */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link to={href('/')} className="block w-48">
              <img
                src="/assets/datawise-logo-dark.png"
                alt="Datawise logo"
                loading="lazy"
                width={180}
                height={20}
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Research, build, and deploy reliable data and intelligent systems
              for Africa.
            </p>
            <ul className="flex gap-3 pt-2">
              {socials.map((item) => {
                const iconName = socialIcons[item.name];
                return (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Datawise Africa on ${item.name}`}
                      className="flex items-center justify-center w-11 h-11 bg-white/10 rounded-full transition-colors hover:bg-primary text-gray-300 hover:text-white"
                    >
                      {iconName && <Icon icon={iconName} className="h-5 w-5" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <p className="font-bold text-sm uppercase tracking-wide mb-4 text-white">
                {group.title}
              </p>
              <ul className="flex flex-col gap-y-1 md:gap-y-3">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-flex items-center min-h-11 md:min-h-5 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1">
            <p className="font-bold text-sm uppercase tracking-wide mb-4 text-white">
              Contact
            </p>
            <div className="space-y-3">
              {contactDetails.map((item) => (
                <p
                  key={item.text}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <Icon
                    icon={item.icon}
                    className="h-5 w-5 text-white shrink-0 mt-0.5"
                  />
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <p className="text-sm text-gray-400 text-center">
          Datawise Africa &copy; {new Date().getFullYear()}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
