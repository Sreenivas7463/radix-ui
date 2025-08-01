import { Heading, Text } from '@radix-ui/themes';

export default function ContactPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Heading as="h1" size="8" mb="4" style={{ color: 'var(--accent-9)' }}>Contact Us</Heading>
      <Text as="p">This is the Contact page. Feel free to reach out to us!</Text>
    </main>
  );
}
