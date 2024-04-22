import { Card, CardBody } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import LoadingScreen from "src/components/LoadingScreen";
import Page from "src/components/Page";
import RecruitmentDetailTopCard from "src/pages/main/recruitments/RecruitmentDetail/RecruitmentDetailTopCard";
import { useGetRecruitmentDetailForUserQuery } from "src/redux/api/recruitmentApi";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const RecruitmentDetail = () => {
  const { recruitmentId } = useParams();
  const { data, isLoading } = useGetRecruitmentDetailForUserQuery(recruitmentId);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <Page>
          <RecruitmentDetailTopCard recruitment={data.data} />
          <Card overflow="hidden" variant="outline" my={4}>
            <CardBody>
              <SunEditor hideToolbar={true} disable={true} readOnly setContents={data.data.content} />
            </CardBody>
          </Card>
        </Page>
      )}
    </>
  );
};

export default RecruitmentDetail;
