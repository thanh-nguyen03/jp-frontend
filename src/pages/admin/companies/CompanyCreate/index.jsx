import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Page from "src/components/Page";
import ROUTES from "src/constants/routes";
import CompanyForm from "src/pages/admin/companies/CompanyForm";
import { useCreateCompanyMutation } from "src/redux/api/companyApi";

const CompanyCreate = () => {
  const [createCompany, { isLoading }] = useCreateCompanyMutation();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await createCompany(values).unwrap();
      navigate(ROUTES.adminManageCompanies);
      toast({
        title: "Success",
        description: "Company created successfully.",
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
    <Page title="Create Company">
      <CompanyForm onSubmit={handleSubmit} isSubmitting={isLoading} />
    </Page>
  );
};

export default CompanyCreate;
