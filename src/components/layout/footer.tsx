import Link from 'next/link';
import { Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from '@/components/logo';

const socialLinks = [
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#services' },
  { name: 'Sermons', href: '#sermons' },
  { name: 'Events', href: '#events' },
  { name: 'Give', href: '#give' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 dark:bg-gray-900 border-t border-accent/20">
      <div className="relative py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-gray-400">
                Rooted in Christ, Growing in Faith, Serving the World.
              </p>
            </div>

            {/* Middle Column */}
            <div className="md:mx-auto">
              <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>+254 700 000 000</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:info@aickimalel.org" className="hover:text-accent transition-colors">info@aickimalel.org</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Kericho County, Kenya</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <Link key={social.name} href={social.href} aria-label={social.name} className="text-gray-400 hover:text-accent transition-colors">
                    <social.icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} AIC Kimalel Saramek Church. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
