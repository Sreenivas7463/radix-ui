'use client';

import { useTheme } from 'next-themes';
import { useAccentColor } from '@/components/theme-provider';
import { RadixAccentColor } from '@/types/radix';
import { DropdownMenu, Button, Flex, Text } from '@radix-ui/themes';
import { Sun, Moon, Palette, Monitor } from 'lucide-react';

  const accentColors: RadixAccentColor[] = ['tomato', 'cyan', 'mint', 'indigo', 'orange', 'grass', 'sky'];

export function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const { accentColor, setAccentColor } = useAccentColor();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          <Palette className="w-5 h-5" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Appearance</DropdownMenu.Label>
        <DropdownMenu.Item onClick={() => setTheme('light')}>
          <Flex align="center" gap="2">
            <Sun className="w-4 h-4" />
            <Text>Light</Text>
          </Flex>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('dark')}>
          <Flex align="center" gap="2">
            <Moon className="w-4 h-4" />
            <Text>Dark</Text>
          </Flex>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('system')}>
          <Flex align="center" gap="2">
            <Monitor className="w-4 h-4" />
            <Text>System</Text>
          </Flex>
        </DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Label>Accent Color</DropdownMenu.Label>
        <Flex wrap="wrap" gap="2" p="2" style={{ maxWidth: 150 }}>
          {accentColors.map((color) => (
            <Button
              key={color}
              onClick={() => setAccentColor(color)}
              variant={accentColor === color ? 'solid' : 'soft'}
              style={{ backgroundColor: accentColor !== color ? `var(--${color}-a3)` : `var(--${color}-a9)` }}
              size="1"
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: `var(--${color}-9)` }}
              />
            </Button>
          ))}
        </Flex>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
