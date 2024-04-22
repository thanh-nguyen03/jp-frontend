import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Icon,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import Page from "src/components/Page";
import Pagination from "src/components/Pagination";
import ROUTES from "src/constants/routes";
import { useGetAllCompaniesQuery } from "src/redux/api/companyApi";

const CompanyList = () => {
  const { data, isLoading } = useGetAllCompaniesQuery();
  const toast = useToast();

  useEffect(() => {
    if (isLoading) return;
    if (!data?.success) {
      toast({
        title: "Error",
        description: data.message,
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
          Company List
        </Heading>

        <Link to={ROUTES.adminCreateCompany}>
          <Button colorScheme="green" leftIcon={<Icon as={IoAdd} />}>
            Create company
          </Button>
        </Link>
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
                  <Th>Id</Th>
                  <Th>Code</Th>
                  <Th>Name</Th>
                  <Th>Address</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>

              <Tbody>
                {data?.data.map((company) => (
                  <Tr key={company.id}>
                    <Th>{company.id}</Th>
                    <Th>{company.code}</Th>
                    <Th>{company.name}</Th>
                    <Th>{company.address}</Th>
                    <Th>
                      <ButtonGroup>
                        <Link to={ROUTES.adminCompanyDetail.replace(":companyId", company.id)}>
                          <Button colorScheme="gray" size="md">
                            View
                          </Button>
                        </Link>
                      </ButtonGroup>
                    </Th>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          <Pagination pageInfo={data?.pageInfo} />
        </>
      )}
    </Page>
  );
};

export default CompanyList;
