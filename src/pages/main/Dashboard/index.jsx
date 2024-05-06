import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Page from "src/components/Page";
import ROLES from "src/constants/roles";
import ROUTES from "src/constants/routes";
import useAuth from "src/hooks/useAuth";

const MainDashboard = () => {
  const { isAuthenticated, displayName, hasAnyRole } = useAuth();
  return (
    <Page sx={{ height: "95vh" }}>
      <Stack direction="column" spacing={6} alignItems="center" mt="20vh">
        <Box py={2} px={3} bg="teal" w="max-content" color="white" rounded="md" fontSize="sm">
          <Stack direction={{ base: "column", sm: "row" }}>
            <Text fontWeight="bold" fontSize="md">
              Ready, Set, Apply 🚀
            </Text>
            <Text fontSize="md" fontWeight="bold">
              Apply to your dream job with confidence. We have a wide range of job listings from top companies.
            </Text>
          </Stack>
        </Box>
        <Heading fontSize={{ base: "6xl", sm: "7xl" }} fontWeight="bold" textAlign="center" maxW="650px">
          Search and apply for your dream job{" "}
          <Text display="inline" color="teal" bg="linear-gradient(transparent 50%, #83e9e7 50%)">
            with speed
          </Text>
        </Heading>
        <Text maxW="550px" fontSize="3xl" textAlign="center" color="gray.600">
          {isAuthenticated ? `Welcome back, ${displayName}!` : "Login or sign up now to get started."}
        </Text>
        <Stack direction={{ base: "column", sm: "row" }} w={{ base: "100%", sm: "auto" }} spacing={5}>
          {!isAuthenticated && (
            <HStack gap={2}>
              <Link to={ROUTES.login}>
                <Button colorScheme="teal" variant="solid" rounded="md" size="lg" fontSize="1.2rem">
                  Login
                </Button>
              </Link>
              <Link to={ROUTES.register}>
                <Button colorScheme="teal" variant="outline" rounded="md" size="lg" fontSize="1.2rem">
                  Sign up
                </Button>
              </Link>
            </HStack>
          )}
          {isAuthenticated && (
            <HStack gap={2}>
              {hasAnyRole(ROLES.COMPANY_ADMIN, ROLES.COMPANY_HR) && (
                <Link to={ROUTES.companyAdmin}>
                  <Button colorScheme="teal" variant="solid" rounded="md" size="lg" fontSize="1.2rem">
                    Manage My Company
                  </Button>
                </Link>
              )}
              {hasAnyRole(ROLES.ADMIN) && (
                <Link to={ROUTES.admin}>
                  <Button colorScheme="teal" variant="solid" rounded="md" size="lg" fontSize="1.2rem">
                    Admin Dashboard
                  </Button>
                </Link>
              )}
              {hasAnyRole(ROLES.USER) && (
                <>
                  <Link to={ROUTES.recruitments}>
                    <Button colorScheme="teal" variant="outline" rounded="md" size="lg" fontSize="1.2rem">
                      View Recruitments
                    </Button>
                  </Link>
                  <Link to={ROUTES.companies}>
                    <Button colorScheme="teal" variant="outline" rounded="md" size="lg" fontSize="1.2rem">
                      View Companies
                    </Button>
                  </Link>
                </>
              )}
            </HStack>
          )}
        </Stack>
      </Stack>
    </Page>
  );
};

export default MainDashboard;
