import { socials } from '~/lib/data/socials';
import { href, Link } from 'react-router';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconPhone,
  IconMail,
  IconMapPin,
} from '@tabler/icons-react';
import type { FC } from 'react';

const socialIcons: Record<string, FC<{ className?: string }>> = {
  LinkedIn: IconBrandLinkedin,
  Github: IconBrandGithub,
  X: IconBrandX,
};

const contactDetails = [
  { icon: IconPhone, text: '+254 704 237 879' },
  { icon: IconMail, text: 'info@datawiseafrica.com' },
  {
    icon: IconMapPin,
    text: 'Highway Heights, Marcus Garvey Rd, Kilimani, Nairobi, Kenya',
  },
];

const companyLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/datalab', label: 'Datalab' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact-us', label: 'Contact Us' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-5 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Tagline */}
          <div className="space-y-4">
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
              Research, build, and deploy reliable data and intelligence systems
              for Africa.
            </p>
            <ul className="flex gap-3 pt-2">
              {socials.map((item) => {
                const Icon = socialIcons[item.name];
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 bg-white/10 rounded-full transition-colors hover:bg-primary text-gray-300 hover:text-white"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-white">
              Company
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-white">
              Contact
            </h4>
            <div className="space-y-3">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <p
                    key={item.text}
                    className="flex items-start gap-3 text-gray-300 text-sm"
                  >
                    <Icon className="h-5 w-5 text-white shrink-0 mt-0.5" />
                    {item.text}
                  </p>
                );
              })}
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
