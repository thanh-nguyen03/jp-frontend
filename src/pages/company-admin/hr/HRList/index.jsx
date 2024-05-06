import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import ConfirmModal from "src/components/ConfirmModal";
import Page from "src/components/Page";
import ROUTES from "src/constants/routes";
import { useDeleteCompanyHRMutation, useGetCompanyHRsQuery } from "src/redux/api/adminApi";

const HRList = () => {
  const { data, isLoading } = useGetCompanyHRsQuery();
  const [deleteHR, { isLoading: isDeleting }] = useDeleteCompanyHRMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedHR, setSelectedHR] = useState(null);
  const toast = useToast();

  const handleDelete = async (id) => {
    try {
      await deleteHR(id).unwrap();
      toast({
        title: "Success",
        description: "HR removed successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } catch (err) {
      toast({
        title: "Error",
        description: err.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleClick = (id) => {
    setSelectedHR(id);
    onOpen();
  };

  return (
    <Page>
      <ConfirmModal
        isLoading={isDeleting}
        onConfirm={() => handleDelete(selectedHR)}
        title="Are you sure to remove this HR?"
        onClose={onClose}
        isOpen={isOpen}
        confirmBtnColorScheme="red"
      />

      <HStack justifyContent="space-between">
        <Heading size="lg" mb={2}>
          Company Hr List
        </Heading>

        <HStack gap={2}>
          <Link to={ROUTES.companyCreateHR}>
            <Button colorScheme="green" leftIcon={<Icon as={IoAdd} />}>
              Create HR
            </Button>
          </Link>
        </HStack>
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
                  <Th>Actions</Th>
                </Tr>
              </Thead>

              <Tbody>
                {data?.data.map((hr, index) => (
                  <Tr key={hr.id}>
                    <Td>{index + 1}</Td>
                    <Td>{`${hr.firstName} ${hr.lastName}`}</Td>
                    <Td>{hr.email}</Td>
                    <Td>
                      <Button colorScheme="red" size="sm" onClick={() => handleClick(hr.id)}>
                        Remove
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          {data?.data.length === 0 && (
            <Box textAlign="center" my={6}>
              <Heading size="md">No HR found</Heading>
            </Box>
          )}
        </>
      )}
    </Page>
  );
};

export default HRList;
