import { Card, CardBody, Heading, useDisclosure } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import LoadingScreen from "src/components/LoadingScreen";
import Page from "src/components/Page";
import ApplicationModal from "src/pages/main/recruitments/RecruitmentDetail/components/ApplicationModal";
import RecruitmentDetailTopCard from "src/pages/main/recruitments/RecruitmentDetail/components/RecruitmentDetailTopCard";
import { useGetUserApplicationOfRecruitmentQuery } from "src/redux/api/applicationApi";
import { useGetRecruitmentDetailForUserQuery } from "src/redux/api/recruitmentApi";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const RecruitmentDetail = () => {
  const { recruitmentId } = useParams();
  const { data } = useGetRecruitmentDetailForUserQuery(recruitmentId);
  const { data: applicationData, isLoading } = useGetUserApplicationOfRecruitmentQuery(recruitmentId);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {!data && !applicationData && <LoadingScreen />}
      {data && !isLoading && (
        <Page>
          <ApplicationModal isOpen={isOpen} onClose={onClose} application={applicationData?.data || null} />
          <RecruitmentDetailTopCard
            recruitment={data?.data}
            onApply={onOpen}
            userApplication={applicationData?.data}
            onViewApplication={onOpen}
          />
          <Card overflow="hidden" variant="outline" my={4}>
            <CardBody>
              <Heading size="md" mb={4}>
                Job Description
              </Heading>
              <SunEditor hideToolbar={true} disable={true} readOnly setContents={data.data.content} />
            </CardBody>
          </Card>
        </Page>
      )}
    </>
  );
};

export default RecruitmentDetail;
