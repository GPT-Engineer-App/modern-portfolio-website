import { Container, VStack, HStack, Box, Text, Heading, SimpleGrid, IconButton, Link, Image, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const projects = [
  { title: "Project One", description: "Description for project one.", image: "https://images.unsplash.com/photo-1622962733255-935a059e5578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwb25lfGVufDB8fHx8MTcxODUyNTY3OHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { title: "Project Two", description: "Description for project two.", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwdHdvfGVufDB8fHx8MTcxODUyNTY3OHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { title: "Project Three", description: "Description for project three.", image: "https://images.unsplash.com/photo-1523365280197-f1783db9fe62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwdGhyZWV8ZW58MHx8fHwxNzE4NTI1Njc5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML"];

const blogPosts = [
  { title: "Blog Post One", description: "Summary of blog post one.", link: "#" },
  { title: "Blog Post Two", description: "Summary of blog post two.", link: "#" },
  { title: "Blog Post Three", description: "Summary of blog post three.", link: "#" },
];

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            John Doe
          </Heading>
          <Text fontSize="xl">Full Stack Developer</Text>
          <HStack spacing={4} justify="center" mt={4}>
            <IconButton as={Link} href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" />
            <IconButton as={Link} href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton as={Link} href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton as={Link} href="mailto:email@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" />
          </HStack>
        </Box>

        {/* Projects Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            {projects.map((project, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={project.image} alt={project.title} />
                <Box p={4}>
                  <Heading as="h3" size="md">
                    {project.title}
                  </Heading>
                  <Text mt={2}>{project.description}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Skills Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Skills
          </Heading>
          <HStack spacing={4} wrap="wrap">
            {skills.map((skill, index) => (
              <Box key={index} p={2} borderWidth="1px" borderRadius="md">
                {skill}
              </Box>
            ))}
          </HStack>
        </Box>

        {/* Blog Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Blog
          </Heading>
          <VStack spacing={4} align="stretch">
            {blogPosts.map((post, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md">
                  {post.title}
                </Heading>
                <Text mt={2}>{post.description}</Text>
                <Link href={post.link} color="teal.500" mt={2}>
                  Read more
                </Link>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <Box as="form">
            <VStack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your Name" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your Message" />
              </FormControl>
              <Button type="submit" colorScheme="teal" size="lg">
                Send Message
              </Button>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
