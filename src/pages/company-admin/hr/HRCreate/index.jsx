import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Page from "src/components/Page";
import ROUTES from "src/constants/routes";
import HRForm from "src/pages/company-admin/hr/HRForm";
import { useCreateCompanyHRMutation } from "src/redux/api/adminApi";

const HRCreate = () => {
  const [createHR, { isLoading }] = useCreateCompanyHRMutation();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await createHR([values]).unwrap();
      navigate(ROUTES.companyManageHRs);
      toast({
        title: "Success",
        description: "HR created successfully.",
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
    <Page title="Create HR">
      <HRForm onSubmit={handleSubmit} isSubmitting={isLoading} />
    </Page>
  );
};

export default HRCreate;
