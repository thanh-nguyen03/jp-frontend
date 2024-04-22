import { Button, Heading, HStack, useDisclosure, useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmModal from "src/components/ConfirmModal";
import LoadingSpinner from "src/components/LoadingSpinner";
import Page from "src/components/Page";
import ROUTES from "src/constants/routes";
import useToastResponseError from "src/hooks/useToastResponseError";
import RecruitmentForm from "src/pages/company-admin/recruitments/RecruitmentForm";
import {
  useDeleteRecruitmentMutation,
  useGetRecruitmentDetailQuery,
  useUpdateRecruitmentMutation,
} from "src/redux/api/recruitmentApi";

const RecruitmentDetail = () => {
  const { recruitmentId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();

  // APIs
  const { data, isLoading } = useGetRecruitmentDetailQuery(recruitmentId);
  const [updateRecruitment, { error: updateRecruitmentError, isLoading: isSubmitting }] =
    useUpdateRecruitmentMutation();
  const [deleteRecruitment, { error: deleteRecruitmentError, isLoading: isDeleting }] = useDeleteRecruitmentMutation();

  // Error handling
  useToastResponseError(updateRecruitmentError);
  useToastResponseError(deleteRecruitmentError);

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await updateRecruitment({ recruitmentId, ...values }).unwrap();
      toast({
        title: "Success",
        description: "Recruitment updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteRecruitment = async () => {
    try {
      await deleteRecruitment(recruitmentId).unwrap();
      navigate(ROUTES.companyManageRecruitments);
      toast({
        title: "Success",
        description: "Recruitment deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Page>
      <ConfirmModal
        title="Are you sure to delete this recruitment?"
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleDeleteRecruitment}
        confirmBtnColorScheme="red"
      />
      <HStack justifyContent="space-between">
        <Heading size="lg" mb={2}>
          {data?.data.title}
        </Heading>

        <Button isLoading={isDeleting} colorScheme="red" onClick={onOpen}>
          Delete recruitment
        </Button>
      </HStack>

      {isLoading && <LoadingSpinner />}
      {!isLoading && <RecruitmentForm recruitment={data?.data} isSubmitting={isSubmitting} onSubmit={handleSubmit} />}
    </Page>
  );
};

export default RecruitmentDetail;
