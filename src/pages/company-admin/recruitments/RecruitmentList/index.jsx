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
import jobType from "src/constants/jobType";
import ROUTES from "src/constants/routes";
import { formatDateTime } from "src/helpers/date";
import { useGetCompanyRecruitmentsQuery } from "src/redux/api/recruitmentApi";

const RecruitmentList = () => {
  const { data, isLoading } = useGetCompanyRecruitmentsQuery();
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
          Recruitment List
        </Heading>

        <Link to={ROUTES.companyRecruitmentCreate}>
          <Button colorScheme="green" leftIcon={<Icon as={IoAdd} />}>
            Create recruitment
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
                  <Th>No</Th>
                  <Th>Title</Th>
                  <Th>Job Type</Th>
                  <Th>Deadline</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>

              <Tbody>
                {data?.data.map((recruitment, index) => (
                  <Tr key={recruitment.id}>
                    <Th>{index + 1}</Th>
                    <Th>{recruitment.title}</Th>
                    <Th>{jobType[recruitment.jobType]}</Th>
                    <Th>{formatDateTime(recruitment.deadline)}</Th>
                    <Th>
                      <ButtonGroup>
                        <Link to={ROUTES.companyRecruitmentDetail.replace(":recruitmentId", recruitment.id)}>
                          <Button colorScheme="gray" size="md">
                            Detail
                          </Button>
                        </Link>
                        <Link to={ROUTES.companyRecruitmentApplications.replace(":recruitmentId", recruitment.id)}>
                          <Button colorScheme="teal" size="md">
                            Application List
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

export default RecruitmentList;
