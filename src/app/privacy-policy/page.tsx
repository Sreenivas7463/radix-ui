import { Heading, Text } from '@radix-ui/themes';

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Heading as="h1" size="8" mb="4" style={{ color: 'var(--accent-9)' }}>Privacy Policy</Heading>
      <Text as="p">This is the Privacy Policy page. Your privacy is important to us.</Text>
    </main>
  );
}
