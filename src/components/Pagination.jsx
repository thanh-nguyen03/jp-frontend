import { Container, Text, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Pagination = ({ pageInfo }) => {
  const { offset, limit, total } = pageInfo;
  const start = offset + 1;
  const end = offset + limit < total ? offset + limit : total;

  return (
    <Container d="flex" maxWidth="7xl" w="full" justifyContent="space-between" alignItems="center">
      <PaginationMain start={start} end={end} total={total} />
    </Container>
  );
};

// Ideally, only the Pagination component should be used. The PaginationContainer component is used to style the preview.
const PaginationMain = ({ start, end, total }) => {
  return (
    <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center" w="full">
      <Text fontSize="md">
        Showing {start} to {end} of {total} results
      </Text>
      <Flex as="nav" aria-label="Pagination" alignItems="center" mt={{ base: 3, md: 0 }}>
        <PaginationButton borderTopLeftRadius="md" borderBottomLeftRadius="md" isDisabled={start === 1}>
          <Icon as={FaChevronLeft} w={3.5} h={3.5} />
        </PaginationButton>
        <PaginationButton borderTopRightRadius="md" borderBottomRightRadius="md" isDisabled={end === total}>
          <Icon as={FaChevronRight} w={3.5} h={3.5} />
        </PaginationButton>
      </Flex>
    </Flex>
  );
};

const PaginationButton = ({ children, isDisabled, isActive, ...props }) => {
  const activeStyle = {
    bg: useColorModeValue("gray.300", "gray.700"),
  };

  return (
    <Flex
      p={3}
      px={3}
      fontSize="md"
      fontWeight="500"
      lineHeight="1rem"
      height="2.5rem"
      opacity={isDisabled && 0.5}
      _hover={!isDisabled && activeStyle}
      cursor={isDisabled ? "not-allowed" : "pointer"}
      border="1px solid"
      mr="-1px"
      borderColor={useColorModeValue("gray.300", "gray.700")}
      {...(isActive && activeStyle)}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Pagination;
