import { useParams } from "react-router-dom";
import LoadingScreen from "src/components/LoadingScreen";
import Page from "src/components/Page";
import CompanyDetailMainCard from "src/pages/main/companies/CompanyDetail/components/CompanyDetailMainCard";
import CompanyRecruitmentList from "src/pages/main/companies/CompanyDetail/components/CompanyRecruitmentList";
import { useUserGetCompanyDetailQuery } from "src/redux/api/companyApi";

const CompanyDetail = () => {
  const { companyId } = useParams();
  const { data, isLoading } = useUserGetCompanyDetailQuery(companyId);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <Page>
          <CompanyDetailMainCard company={data.data} />
          <CompanyRecruitmentList company={data.data} />
        </Page>
      )}
    </>
  );
};

export default CompanyDetail;
