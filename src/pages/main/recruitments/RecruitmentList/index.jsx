import { Box } from "@chakra-ui/react";
import { useState } from "react";
import LoadingSpinner from "src/components/LoadingSpinner";
import Page from "src/components/Page";
import RecruitmentListItem from "src/pages/main/recruitments/RecruitmentList/components/RecruitmentListItem";
import RecruitmentSearchBar from "src/pages/main/recruitments/RecruitmentList/components/RecruitmentSearchBar";
import { useGetAllRecruitmentsQuery } from "src/redux/api/recruitmentApi";

const MainRecruitmentList = () => {
  const [query, setQuery] = useState({});
  const { data, isLoading, isFetching } = useGetAllRecruitmentsQuery(query);

  const handleSearch = (searchInfo) => {
    setQuery(searchInfo);
  };

  return (
    <Page title="Recruitment List">
      <RecruitmentSearchBar handleSearch={handleSearch} isSearching={isLoading || isFetching} />
      <Box my={4} bgColor="white" p={4} rounded="sm">
        {isLoading && <LoadingSpinner size="lg" />}
        {data?.data.length > 0 &&
          data.data.map((recruitment) => <RecruitmentListItem key={recruitment.id} recruitment={recruitment} />)}
        {data?.data.length === 0 && !isLoading && <Box textAlign="center">No recruitment found</Box>}
      </Box>
    </Page>
  );
};

export default MainRecruitmentList;
