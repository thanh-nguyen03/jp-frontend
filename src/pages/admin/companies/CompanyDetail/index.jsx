import { Button, Heading, HStack, useDisclosure, useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmModal from "src/components/ConfirmModal";
import LoadingSpinner from "src/components/LoadingSpinner";
import Page from "src/components/Page";
import ROUTES from "src/constants/routes";
import useToastResponseError from "src/hooks/useToastResponseError";
import CompanyForm from "src/pages/admin/companies/CompanyForm";
import { useDeleteCompanyMutation, useGetDetailCompanyQuery, usePutCompanyMutation } from "src/redux/api/companyApi";

const CompanyDetail = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [putCompany, { error: updateCompanyError, isLoading: isSubmitting }] = usePutCompanyMutation();
  const [deleteCompany, { error: deleteCompanyError, isLoading: isDeleting }] = useDeleteCompanyMutation();
  const { data, isLoading } = useGetDetailCompanyQuery(companyId);
  const toast = useToast();

  useToastResponseError(updateCompanyError);
  useToastResponseError(deleteCompanyError);

  const onSubmit = async (values) => {
    try {
      await putCompany({ id: companyId, ...values }).unwrap();
      toast({
        title: "Success",
        description: "Company updated successfully",
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

  const handleDeleteCompany = async () => {
    try {
      await deleteCompany(companyId).unwrap();
      navigate(ROUTES.adminManageCompanies);
      toast({
        title: "Success",
        description: "Company deleted successfully",
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
    <Page>
      <ConfirmModal
        title="Are you sure to delete this company?"
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleDeleteCompany}
        confirmBtnColorScheme="red"
      />
      <HStack justifyContent="space-between">
        <Heading mb={2}>{data?.data?.name}</Heading>

        <Button isLoading={isDeleting} colorScheme="red" onClick={onOpen}>
          Delete company
        </Button>
      </HStack>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <CompanyForm company={data?.data} onSubmit={onSubmit} isSubmitting={isSubmitting} />}
    </Page>
  );
};

export default CompanyDetail;
