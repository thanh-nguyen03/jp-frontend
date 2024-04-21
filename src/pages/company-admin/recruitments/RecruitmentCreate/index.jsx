import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Page from "src/components/Page";
import ROUTES from "src/constants/routes";
import RecruitmentForm from "src/pages/company-admin/recruitments/RecruitmentForm";
import { useCreateRecruitmentMutation } from "src/redux/api/recruitmentApi";

const RecruitmentCreate = () => {
  const [createCompany, { isLoading }] = useCreateRecruitmentMutation();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (values) => {
    try {
      await createCompany(values).unwrap();
      navigate(ROUTES.companyManageRecruitments);
      toast({
        title: "Success",
        description: "Recruitment created successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
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

  return (
    <Page title="Create Recruitment">
      <RecruitmentForm onSubmit={handleSubmit} isSubmitting={isLoading} />
    </Page>
  );
};

export default RecruitmentCreate;
