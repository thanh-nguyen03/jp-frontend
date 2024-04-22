import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import jobType from "src/constants/jobType";
import ROUTES from "src/constants/routes";

const RecruitmentListItem = ({ recruitment }) => {
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
          <Link to={ROUTES.recruitmentDetail.replace(":recruitmentId", recruitment.id)}>
            <Heading size="md">{recruitment.title}</Heading>
          </Link>

          <Text>{recruitment.company.name}</Text>
          <Tag colorScheme="green" mt={2}>
            {jobType[recruitment.jobType]}
          </Tag>
        </CardBody>

        <CardFooter justifyContent="space-between" alignItems="center">
          <Box>
            <HStack>
              <Icon as={FaLocationDot} color="primary" fontSize={18} />
              <Text>{recruitment.company.address}</Text>
            </HStack>
          </Box>
          <Button
            as={Link}
            variant="solid"
            size="sm"
            colorScheme="green"
            to={ROUTES.recruitmentDetail.replace(":recruitmentId", recruitment.id)}
          >
            Apply Now
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default RecruitmentListItem;
