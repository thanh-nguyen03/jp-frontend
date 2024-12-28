import { Button, Flex, Grid, GridItem, Icon, Stack, Text, useDisclosure, useToast } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbSend } from "react-icons/tb";
import { Document, Page } from "react-pdf";
import ConfirmModal from "src/components/ConfirmModal";
import FormInput from "src/components/form/FormInput";

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

const CVUploadForm = ({ onSubmit, isSubmitting }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {},
  });
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [totalPages, setTotalPages] = useState();
  const [pageNumber, setPageNumber] = useState(0);

  const handleButtonClick = () => {
    const uploadCv = watch("uploadCv");

    if (uploadCv.length === 0) {
      toast({
        title: "Error",
        description: "CV are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    onOpen();
  };

  return (
    <Flex w="100%" flex={1} align="center" justifyContent="center" mt={4}>
      <ConfirmModal
        isLoading={isSubmitting}
        isOpen={isOpen}
        onClose={onClose}
        title="Confirm"
        onConfirm={handleSubmit(onSubmit)}
        confirmBtnColorScheme="green"
      />

      <Stack as="form" spacing={4} w="100%">
        <Grid gap={4} w="100%" templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={12}>
            <FormInput name="uploadCv" label="CV (Only PDF files)" type="file" errors={errors} register={register} />
          </GridItem>

          {watch("uploadCv") && (
            <GridItem colSpan={12}>
              <>
                <Text fontSize="lg" fontWeight="bold" my={2}>
                  CV Preview
                </Text>
                <PDFDocumentWrapper>
                  <Document
                    file={watch("uploadCv")?.[0] ? URL.createObjectURL(watch("uploadCv")[0]) : ""}
                    onLoadSuccess={({ numPages }) => setTotalPages(numPages)}
                  >
                    <Page pageNumber={pageNumber + 1} />
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
              </>
            </GridItem>
          )}
        </Grid>
        <Button
          leftIcon={<Icon fontSize={20} as={TbSend} />}
          variant="solid"
          size="md"
          colorScheme="green"
          w="100%"
          my={2}
          onClick={handleButtonClick}
        >
          Upload
        </Button>
      </Stack>
    </Flex>
  );
};

export default CVUploadForm;
