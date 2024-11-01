import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ApplicationForm from "src/pages/main/recruitments/RecruitmentDetail/components/ApplicationForm";
import { useApplyRecruitmentMutation } from "src/redux/api/applicationApi";
import { useUploadFileMutation } from "src/redux/api/fileApi";

const ApplicationModal = ({ isOpen, onClose, application }) => {
  const { recruitmentId } = useParams();
  const [applyRecruitment, { isLoading }] = useApplyRecruitmentMutation();
  const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation();
  const toast = useToast();

  const handleSubmit = async (values) => {
    if (application) {
      // Update application
      console.log("update application not implemented yet");
      return;
    }

    const formData = new FormData();
    formData.append("file", values.uploadCv[0]);

    try {
      const response = await uploadFile(formData).unwrap();
      values.cvId = response.data;
      values.recruitmentId = Number(recruitmentId);
      delete values.uploadCv;
      await applyRecruitment(values).unwrap();
      onClose();
      toast({
        title: "Success",
        description: "Apply successfully!",
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
    <Modal isOpen={isOpen} onClose={onClose} size={{ sm: "lg", md: "2xl", lg: "5xl" }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Application Form</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <ApplicationForm
            application={application || null}
            onSubmit={handleSubmit}
            isSubmitting={isUploading || isLoading}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ApplicationModal;
