import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Page from "src/components/Page";
import ROUTES from "src/constants/routes";
import { formatDate } from "src/helpers/date";
import { useAdminGetUsersQuery } from "src/redux/api/userApi";

const UserList = () => {
  const { data, isLoading } = useAdminGetUsersQuery({
    sort: "id:asc",
  });
  const toast = useToast();

  useEffect(() => {
    if (isLoading) return;
    if (!data?.success) {
      toast({
        title: "Error",
        description: data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [data?.message, data?.success, isLoading, toast]);

  return (
    <Page>
      <HStack justifyContent="space-between">
        <Heading size="lg" mb={2}>
          User List
        </Heading>
      </HStack>
      {isLoading && (
        <Box my={6}>
          <Progress size="xs" isIndeterminate colorScheme="green" />
        </Box>
      )}

      {!isLoading && data && (
        <>
          <TableContainer my={6}>
            <Table variant="simple" size="lg">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Created At</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>

              <Tbody>
                {data?.data.map((user, index) => (
                  <Tr key={user.id}>
                    <Td>{index + 1}</Td>
                    <Td>{`${user.firstName} ${user.lastName}`}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.role.replace("_", " ")}</Td>
                    <Td>{formatDate(user.createdAt)}</Td>
                    <Td>
                      <ButtonGroup>
                        <Link to={ROUTES.adminUserDetail.replace(":userId", user.id)}>
                          <Button colorScheme="gray" size="md">
                            View
                          </Button>
                        </Link>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}
    </Page>
  );
};

export default UserList;
