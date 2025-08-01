import { Heading, Text } from '@radix-ui/themes';

export default function AboutPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Heading as="h1" size="8" mb="4" style={{ color: 'var(--accent-9)' }}>About Us</Heading>
      <Text as="p">This is the About page. We are a team dedicated to building amazing things with Radix UI and Next.js.</Text>
    </main>
  );
}
