import { Box, Button, ButtonGroup, Progress, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import Page from "src/components/Page";
import ROUTES from "src/constants/routes";
import { formatDateTime } from "src/helpers/date";
import { useGetRecruitmentApplicationsQuery } from "src/redux/api/applicationApi";

const RecruitmentApplications = () => {
  const { recruitmentId } = useParams();
  const { data, isLoading } = useGetRecruitmentApplicationsQuery(recruitmentId);

  return (
    <Page title="Recruitment Application List">
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
                  <Th>Candidate name</Th>
                  <Th>Date time applied</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.data.map((application, index) => (
                  <Tr key={application.id}>
                    <Th>{index + 1}</Th>
                    <Th>{`${application.user.firstName} ${application.user.lastName}`}</Th>
                    <Th>{formatDateTime(application.createdAt)}</Th>
                    <Th>{application.status}</Th>
                    <Th>
                      <ButtonGroup>
                        <Link
                          to={ROUTES.companyRecruitmentApplicationDetail
                            .replace(":recruitmentId", recruitmentId)
                            .replace(":applicationId", application.id)}
                        >
                          <Button colorScheme="teal" size="md">
                            View
                          </Button>
                        </Link>
                      </ButtonGroup>
                    </Th>
                  </Tr>
                ))}
              </Tbody>
              d
            </Table>
          </TableContainer>
        </>
      )}
    </Page>
  );
};

export default RecruitmentApplications;
