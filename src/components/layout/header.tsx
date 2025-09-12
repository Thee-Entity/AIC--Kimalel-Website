'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Ministries', href: '/ministries' },
  { name: 'Events', href: '/events' },
  { name: 'Support Us', href: '/support' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll(); // Check on initial render
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const headerClasses = cn(
    'sticky top-0 z-50 w-full transition-all duration-300',
    {
      'bg-transparent': isHomePage && !isScrolled,
      'bg-primary/80 backdrop-blur-sm shadow-md': isScrolled,
      'bg-primary': !isHomePage
    }
  );

  const linkColor = isScrolled || !isHomePage ? 'text-primary-foreground' : 'text-black';

  return (
    <header className={headerClasses} id="home">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Logo className={linkColor} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent',
                  linkColor
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent hover:border-accent/90 rounded-full transition-shadow hover:shadow-lg hover:glow-gold"
              asChild
            >
              <Link href="/contact">Plan Your Visit</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(linkColor, "hover:bg-white/10")}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-primary text-primary-foreground p-0 w-3/4">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between p-4 border-b border-white/20">
                        <Logo className="text-primary-foreground" />
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </SheetTrigger>
                    </div>
                  <nav className="flex-1 flex flex-col items-start p-4 space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-accent"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                    <Button
                        variant="outline"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent hover:border-accent/90 w-full mt-auto rounded-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                        asChild
                    >
                      <Link href="/contact">Plan Your Visit</Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}