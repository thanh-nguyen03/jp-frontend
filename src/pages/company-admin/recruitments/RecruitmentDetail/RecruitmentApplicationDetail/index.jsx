import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Progress,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Document, Page as PDFPage } from "react-pdf";
import { useParams } from "react-router-dom";
import ConfirmModal from "src/components/ConfirmModal";
import Page from "src/components/Page";
import { formatDateTime } from "src/helpers/date";
import { useGetApplicationDetailQuery, useUpdateApplicationStatusMutation } from "src/redux/api/applicationApi";

const PDFDocumentWrapper = styled.div`
  border: 1px solid black;
  padding: 2px;
  border-radius: 5px;
  margin-bottom: 6px;
  width: 100%;
  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;

const ApplicationViewDetail = () => {
  const { applicationId } = useParams();
  const { data: application, isLoading } = useGetApplicationDetailQuery(applicationId);
  const [updateApplicationStatus, { isLoading: isUpdating }] = useUpdateApplicationStatusMutation();
  const [totalPages, setTotalPages] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const toast = useToast();
  const { isOpen: isApproveModalOpen, onClose: onApproveModalClose, onOpen: onApproveModalOpen } = useDisclosure();
  const { isOpen: isRejectModalOpen, onClose: onRejectModalClose, onOpen: onRejectModalOpen } = useDisclosure();

  const statusColor = useMemo(() => {
    switch (application?.data.status) {
      case "PENDING":
        return "orange";
      case "APPROVED":
        return "green";
      case "REJECTED":
        return "red";
      default:
        return "gray";
    }
  }, [application?.data.status]);

  const handleUpdateStatus = async (status) => {
    try {
      await updateApplicationStatus({ applicationId, isApproved: status }).unwrap();
      toast({
        title: "Success",
        description: status === true ? "Application approved" : "Application rejected",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onApproveModalClose();
      onRejectModalClose();
    } catch (error) {
      toast({
        title: "Error",
        description: error.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Page>
      <ConfirmModal
        isLoading={isUpdating}
        isOpen={isApproveModalOpen}
        onClose={onApproveModalClose}
        title="Are you sure to approve this application?"
        onConfirm={() => handleUpdateStatus(true)}
      />

      <ConfirmModal
        isLoading={isUpdating}
        isOpen={isRejectModalOpen}
        onClose={onRejectModalClose}
        title="Are you sure to reject this application?"
        onConfirm={() => handleUpdateStatus(false)}
        confirmBtnColorScheme="red"
      />

      <HStack justifyContent="space-between">
        <HStack gap={4}>
          <Heading size="lg">Application Detail</Heading>
          {application?.data.status && (
            <Badge fontSize={16} colorScheme={statusColor}>
              {application.data.status}
            </Badge>
          )}
        </HStack>
        <HStack gap={2}>
          <Button colorScheme="green" onClick={onApproveModalOpen}>
            Approve
          </Button>
          <Button colorScheme="red" onClick={onRejectModalOpen}>
            Reject
          </Button>
        </HStack>
      </HStack>

      {isLoading && (
        <Box my={6}>
          <Progress size="xs" isIndeterminate colorScheme="green" />
        </Box>
      )}

      {application && (
        <Grid gap={4} w="100%" templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={[12, 12, 12, 12, 4]}>
            <Card overflow="hidden" variant="outline" my={4}>
              <CardBody>
                <Heading size="md" my={2} textAlign="center">
                  Candidate Info
                </Heading>
                <Text>
                  <strong>Name: </strong>
                  {application.data.user.firstName} {application.data.user.lastName}
                </Text>
                <Text>
                  <strong>Email: </strong>
                  {application.data.user.email}
                </Text>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem colSpan={[12, 12, 12, 12, 8]}>
            <Card overflow="hidden" variant="outline" my={4}>
              <CardBody>
                <Heading size="md" my={2} textAlign="center">
                  Application Info
                </Heading>
                <Text my={2}>
                  <strong>Applied at:</strong> {formatDateTime(application.data.createdAt)}
                </Text>
                <Text my={2}>
                  <strong>Message:</strong> {application.data.message}
                </Text>
                <Text my={2}>
                  <strong>Status: </strong>
                  <Text display="inline" color={statusColor} fontWeight="bold">
                    {application.data.status}
                  </Text>
                </Text>
                <Text my={2}>
                  <strong>CV:</strong>
                </Text>

                <PDFDocumentWrapper>
                  <Document file={application.data.cvUrl} onLoadSuccess={({ numPages }) => setTotalPages(numPages)}>
                    <PDFPage pageNumber={pageNumber + 1} />
                  </Document>
                </PDFDocumentWrapper>
                {totalPages > 1 && (
                  <Flex justify="center" gap={2}>
                    <Button color="primary" onClick={() => setPageNumber((prev) => (prev > 0 ? prev - 1 : prev))}>
                      <Icon as={IoIosArrowBack} />
                    </Button>
                    <Text textAlign="center" mt={2}>
                      Page {pageNumber + 1} of {totalPages}
                    </Text>
                    <Button
                      color="primary"
                      onClick={() => setPageNumber((prev) => (prev < totalPages - 1 ? prev + 1 : prev))}
                    >
                      <Icon as={IoIosArrowForward} />
                    </Button>
                  </Flex>
                )}
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      )}
    </Page>
  );
};

export default ApplicationViewDetail;
