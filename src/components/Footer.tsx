'use client';
import { Code } from 'lucide-react';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FacebookIcon, InstagramIcon, XIcon } from './SocialIcons';

import { useAccentColor } from './theme-provider';

export function Footer() {
  const pathname = usePathname();
  const { accentColor } = useAccentColor();
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Site Icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link href="/" passHref>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Code className="w-6 h-6" />
              <span style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>MySite</span>
            </div>
          </Link>
        </div>

        {/* Middle: Policy Links */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <Link href="/privacy-policy" passHref>
            <Button variant={pathname === '/privacy-policy' ? "soft" : "ghost"} color={pathname === '/privacy-policy' ? accentColor : undefined} size="1" className="text-xs">
              Privacy Policy
            </Button>
          </Link>
          <Link href="/terms-and-conditions" passHref>
            <Button variant={pathname === '/terms-and-conditions' ? "soft" : "ghost"} color={pathname === '/terms-and-conditions' ? accentColor : undefined} size="1" className="text-xs">
              Terms and Conditions
            </Button>
          </Link>
        </div>

        {/* Right: Social Icons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link href="#" passHref><XIcon className="w-5 h-5 text-gray-600 hover:text-blue-500" /></Link>
          <Link href="#" passHref><InstagramIcon className="w-5 h-5 text-gray-600 hover:text-pink-500" /></Link>
          <Link href="#" passHref><FacebookIcon className="w-5 h-5 text-gray-600 hover:text-blue-700" /></Link>
        </div>
      </div>
    </footer>
  );
}