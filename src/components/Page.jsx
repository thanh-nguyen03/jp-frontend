import { Container, Heading } from "@chakra-ui/react";

const Page = ({ title, children }) => {
  return (
    <Container maxW="container.xl" mt={2} py={4}>
      <Heading mb={2}>{title}</Heading>
      {children}
    </Container>
  );
};

export default Page;
