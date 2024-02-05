import { Container } from "@chakra-ui/react";

const Page = ({ children }) => {
  return (
    <Container maxW="container.xl" py={2}>
      {children}
    </Container>
  );
};

export default Page;
