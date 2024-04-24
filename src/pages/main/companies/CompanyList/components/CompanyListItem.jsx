import { Box, Button, Card, CardBody, CardFooter, Heading, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ROUTES from "src/constants/routes";

const CompanyListItem = ({ company }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      my={4}
      _hover={{
        bgColor: "gray.50",
      }}
    >
      <Image
        objectFit="cover"
        w={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Company Logo"
      />

      <Stack w="100%">
        <CardBody>
          <Link to={ROUTES.companyDetail.replace(":companyId", company.id)}>
            <Heading size="md">{company.name}</Heading>

            <Text>Number of recruitments: {company.recruitments.length}</Text>
          </Link>
        </CardBody>

        <CardFooter justifyContent="space-between" alignItems="center">
          <Box>
            <HStack>
              <Icon as={FaLocationDot} color="primary" fontSize={18} />
              <Text>{company.address}</Text>
            </HStack>
          </Box>
          <Button
            as={Link}
            variant="solid"
            size="sm"
            colorScheme="green"
            to={ROUTES.companyDetail.replace(":recruitmentId", company.id)}
          >
            View Company
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CompanyListItem;
