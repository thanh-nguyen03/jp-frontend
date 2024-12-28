import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import LoadingSpinner from "src/components/LoadingSpinner";
import Page from "src/components/Page";
import RecruitmentListItem from "src/pages/main/recruitments/RecruitmentList/components/RecruitmentListItem";
import CVUploadModal from "src/pages/main/suggests/components/CVUploadModal.jsx";
import { useGetSuggestListQuery, useLazyGetMostSuitableJobQuery } from "src/redux/api/suggestApi";

const MainSuggestedJobList = () => {
  const [query, setQuery] = useState({
    cvId: localStorage.getItem("cvId") || "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, isLoading } = useGetSuggestListQuery(query, {
    skip: query.cvId === "",
  });
  const [triggerGetMostSuitableJob, { data: mostSuitableJob, isLoading: isLoadingMostSuitableJob }] =
    useLazyGetMostSuitableJobQuery();

  useEffect(() => {
    if (query.cvId !== "") {
      triggerGetMostSuitableJob(query);
    }
  }, [query, triggerGetMostSuitableJob]);

  const updateCvId = (cvId) => {
    localStorage.setItem("cvId", cvId);
    setQuery({ cvId });
  };

  return (
    <Page title="Suggested Job List">
      <CVUploadModal isOpen={isOpen} onClose={onClose} updateCvId={updateCvId} />

      <Box my={4} bgColor="white" p={4} rounded="sm" display="flex" alignItems="center" justifyContent="space-between">
        <Text fontWeight="bold">
          {query.cvId === ""
            ? "Please upload your CV to get suggested jobs"
            : "Upload new CV to get new suggested jobs"}
        </Text>
        <Button onClick={onOpen}>Upload CV</Button>
      </Box>

      {query.cvId !== "" && (
        <>
          <Box my={4} bgColor="lightyellow" p={4} rounded="sm">
            <Text fontWeight="bold">Most Suitable Job Recommended By AI</Text>
            {isLoadingMostSuitableJob && (
              <Box>
                <Text textAlign="center" mb={3}>
                  AI is finding the most suitable job for you. This process may take up to 30 seconds...
                </Text>
                <LoadingSpinner size="lg" />
              </Box>
            )}
            {mostSuitableJob?.recruitment != null && (
              <RecruitmentListItem key={mostSuitableJob?.recruitment.id} recruitment={mostSuitableJob?.recruitment} />
            )}
            {mostSuitableJob?.recruitment == null && !isLoadingMostSuitableJob && (
              <Box textAlign="center">No recruitments found</Box>
            )}
          </Box>

          <Box my={4} bgColor="white" p={4} rounded="sm">
            {isLoading && <LoadingSpinner size="lg" />}
            {data?.recruitments.length > 0 &&
              data.recruitments.map((recruitment) => (
                <RecruitmentListItem key={recruitment.id} recruitment={recruitment} />
              ))}
            {data?.recruitments.length === 0 && !isLoading && <Box textAlign="center">No recruitments found</Box>}
          </Box>
        </>
      )}
    </Page>
  );
};

export default MainSuggestedJobList;
