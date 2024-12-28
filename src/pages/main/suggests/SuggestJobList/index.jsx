import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import LoadingSpinner from "src/components/LoadingSpinner";
import Page from "src/components/Page";
import RecruitmentListItem from "src/pages/main/recruitments/RecruitmentList/components/RecruitmentListItem";
import { useGetSuggestListQuery, useLazyGetMostSuitableJobQuery } from "src/redux/api/suggestApi";

const MainSuggestedJobList = () => {
  const [query, setQuery] = useState({
    cvId: "clvrgnoqg00001uy20ibjlm5j",
  });

  const { data, isLoading } = useGetSuggestListQuery(query);
  const [triggerGetMostSuitableJob, { data: mostSuitableJob, isLoading: isLoadingMostSuitableJob }] =
    useLazyGetMostSuitableJobQuery(query);

  useEffect(() => {
    // Start fetching the suggest list
  }, [query]);

  useEffect(() => {
    // Start fetching the most suitable job
    triggerGetMostSuitableJob(query);
  }, [query, triggerGetMostSuitableJob]);

  return (
    <Page title="Suggested Job List">
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
    </Page>
  );
};

export default MainSuggestedJobList;
