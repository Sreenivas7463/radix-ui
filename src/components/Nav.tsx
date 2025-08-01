'use client';

import { Flex, Button, Text, Dialog } from '@radix-ui/themes';
import { Code, Menu, X } from 'lucide-react';
import { ThemeSwitcher } from './theme-switcher';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

import { useAccentColor } from './theme-provider';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();
  const { accentColor } = useAccentColor();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="py-4 border-b">
      <Flex justify="between" align="center" px="8">
        {/* Left: Icon and Name */}
        <Flex align="center" gap="2">
          <Link href="/" passHref>
            <Flex align="center" gap="2">
          <Code className="w-6 h-6" />
          <Text size="5" weight="bold">MySite</Text>
        </Flex>
          </Link>
        </Flex>

        {/* Middle: Desktop Navigation Links */}
        {isDesktop && (
          <Flex gap="4"> {/* Hide on mobile */}
            <nav className="space-x-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} passHref>
                  <Button variant={pathname === item.href ? "soft" : "ghost"} color={pathname === item.href ? accentColor : undefined}>
                    <Text>{item.label}</Text>
                  </Button>
                </Link>
              ))}
            </nav>
          </Flex>
        )}

        {/* Right: Mobile Menu Toggle & Theme Switcher */}
        <Flex align="center" gap="4">
          <ThemeSwitcher />
          {!isDesktop && (
            <div className="md:hidden"> {/* Show only on mobile */}
              <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Trigger>
                  <Button variant="ghost" size="2">
                    <Menu className="w-6 h-6" />
                  </Button>
                </Dialog.Trigger>
                <Dialog.Content className="fixed inset-y-0 right-0 w-3/4 max-w-sm p-6 shadow-lg z-50 md:hidden">
                  <Flex justify="end" mb="4">
                    <Dialog.Close>
                      <Button variant="ghost" size="2">
                        <X className="w-6 h-6" />
                      </Button>
                    </Dialog.Close>
                  </Flex>
                  <Flex direction="column" gap="8">
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                      {navItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeMenu} style={{ width: '100%' }}>
                          <Button variant={pathname === item.href ? "soft" : "ghost"} color={pathname === item.href ? accentColor : undefined} size="3" style={{ width: '100%' }}>
                            {item.label}
                          </Button>
                        </Link>
                      ))}
                    </nav>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </div>
          )}
        </Flex>
      </Flex>
    </header>
  );
}
