import { Container, Heading } from "@chakra-ui/react";

const Page = ({ title, children, sx }) => {
  return (
    <Container maxW="container.xl" mt={2} py={4} {...sx}>
      <Heading size="lg" mb={2}>
        {title}
      </Heading>
      {children}
    </Container>
  );
};

export default Page;
