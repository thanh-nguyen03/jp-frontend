import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const ConfirmModal = ({
  onConfirm,
  title = "Are you sure to do this action?",
  isOpen,
  onClose,
  confirmBtnColorScheme = "green",
  isLoading = false,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirm</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{title}</Text>
        </ModalBody>

        <ModalFooter>
          <Button isLoading={isLoading} colorScheme={confirmBtnColorScheme} mr={3} onClick={onConfirm}>
            Confirm
          </Button>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
