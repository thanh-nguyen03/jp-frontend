import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import CVUploadForm from "src/pages/main/suggests/components/CVUploadForm.jsx";
import { useUploadFileMutation } from "src/redux/api/fileApi";

const CVUploadModal = ({ isOpen, onClose, updateCvId }) => {
  const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation();
  const toast = useToast();

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("file", values.uploadCv[0]);

    try {
      const response = await uploadFile(formData).unwrap();
      updateCvId(response.data);
      onClose();
      toast({
        title: "Success",
        description: "Upload successfully!",
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
        <ModalHeader>Upload CV</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <CVUploadForm onSubmit={handleSubmit} isSubmitting={isUploading} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CVUploadModal;
