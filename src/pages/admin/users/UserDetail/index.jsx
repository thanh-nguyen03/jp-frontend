import { Box, Card, CardBody, Heading, HStack, Progress, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Page from "src/components/Page";
import { useAdminGetUserDetailQuery } from "src/redux/api/userApi";

const UserDetail = () => {
  const { userId } = useParams();
  const { data, isLoading } = useAdminGetUserDetailQuery(userId);

  const user = data?.data;

  return (
    <Page title="User Detail">
      {isLoading && (
        <Box my={6}>
          <Progress size="xs" isIndeterminate colorScheme="green" />
        </Box>
      )}

      {data && (
        <>
          <Card variant="outline" my={4}>
            <CardBody>
              <Heading size="md">User Info</Heading>
              <Text fontSize="lg" mt={2}>
                <strong>Full Name:</strong> {`${user.firstName} ${user.lastName}`}
              </Text>

              <Text fontSize="lg" mt={2}>
                <strong>Email:</strong> {user.email}
              </Text>

              <Text fontSize="lg" mt={2}>
                <strong>Role:</strong> {user.role}
              </Text>
            </CardBody>
          </Card>

          <Card variant="outline" my={4}>
            <CardBody>
              <HStack justifyContent="space-between" alignItems="center">
                <Heading size="md">User&apos;s Application List</Heading>
                <Text fontSize="lg" mt={2}>
                  <strong>Total:</strong> {user.applications.length}
                </Text>
              </HStack>

              {user.applications.map((application) => (
                <Card key={application.id} variant="outline" my={4}>
                  <CardBody>
                    <Heading size="md">{application.recruitment.title}</Heading>
                    <Text fontSize="lg" mt={2}>
                      <strong>Company:</strong> {application.recruitment.company.name}
                    </Text>
                    <Text fontSize="lg" mt={2}>
                      <strong>Status:</strong> {application.status}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </CardBody>
          </Card>
        </>
      )}
    </Page>
  );
};

export default UserDetail;
