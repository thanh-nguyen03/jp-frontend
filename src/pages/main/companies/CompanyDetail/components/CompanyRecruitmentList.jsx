import { Box, Card, CardBody, Heading } from "@chakra-ui/react";
import RecruitmentListItem from "src/pages/main/recruitments/RecruitmentList/components/RecruitmentListItem";

const CompanyRecruitmentList = ({ company }) => {
  return (
    <Card>
      <CardBody my={4} bgColor="white" p={4} rounded="sm">
        <Heading size="md">Recruitment List</Heading>

        <>
          {company.recruitments.length > 0 &&
            company.recruitments.map((recruitment) => (
              <RecruitmentListItem key={recruitment.id} company={company} recruitment={recruitment} />
            ))}
          {company.recruitments.length === 0 && <Box textAlign="center">No recruitment found</Box>}
        </>
      </CardBody>
    </Card>
  );
};

export default CompanyRecruitmentList;
