import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button, Card, Flex, Text, Heading } from '@radix-ui/themes';

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Flex direction="column" gap="9" p="6">
        {/* Hero Section */}
        <section className="text-center">
          <Flex justify="center" mb="4">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src="/photo0.jpg"
                alt="Colm Tuite"
                className="rounded-full"
              />
              <AvatarFallback delayMs={600}>CT</AvatarFallback>
            </Avatar>
          </Flex>
          <Heading as="h1" size="8" mb="2" style={{ color: 'var(--accent-9)' }}>
            Radix UI Landing Page
          </Heading>
          <Text as="p" size="5" className="text-gray-600">
            Fast, accessible, beautiful. Powered by Radix UI and Tailwind CSS.
          </Text>
          <Button size="3" mt="4">
            Get Started
          </Button>
        </section>

        {/* Feature Section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Heading as="h3" size="4" mb="2" style={{ color: 'var(--accent-9)' }}>
                Accessible
              </Heading>
              <Text>
                All components use best practices for accessibility out of the box.
              </Text>
            </Card>
            <Card>
              <Heading as="h3" size="4" mb="2" style={{ color: 'var(--accent-9)' }}>
                Customizable
              </Heading>
              <Text>
                Easily style and configure every part to fit your brand.
              </Text>
            </Card>
            <Card>
              <Heading as="h3" size="4" mb="2" style={{ color: 'var(--accent-9)' }}>
                Composable
              </Heading>
              <Text>
                Compose multiple primitives to create complex UIs.
              </Text>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Heading as="h2" size="6" mb="4" style={{ color: 'var(--accent-9)' }}>
            Ready to build?
          </Heading>
          <Button size="3" variant="solid" mt="4">
            Join Now
          </Button>
        </section>
      </Flex>
    </main>
  );
}