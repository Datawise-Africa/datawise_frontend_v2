import { socials } from '~/constants/navigation';
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
import NewsletterForm from './newsletter-form';

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
  [
    { to: '/', label: 'Home' },
    { to: '/datalab', label: 'Datalab' },
    { to: '/about-us', label: 'About Us' },
    { to: '/projects', label: 'Projects' },
  ],
  [
    { to: '/careers', label: 'Careers' },
    { to: '/contact-us', label: 'Contact Us' },
    { to: '/privacy-policy', label: 'Privacy Policy' },
  ],
];

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-5 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
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

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {companyLinks.map((column, colIdx) => (
                <div key={colIdx} className="flex flex-col space-y-2">
                  {column.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">
              Stay Connected
            </h4>
            <p className="text-sm text-gray-300">
              Get the latest updates on our research, projects, and
              opportunities.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Datawise Africa &copy; {new Date().getFullYear()}. All rights
            reserved.
          </p>

          <ul className="flex gap-4">
            {socials.map((item) => {
              const Icon = socialIcons[item.name];
              return (
                <a
                  key={item.id}
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
      </div>
    </footer>
  );
}
