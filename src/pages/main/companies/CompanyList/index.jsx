import { Box } from "@chakra-ui/react";
import { useState } from "react";
import LoadingSpinner from "src/components/LoadingSpinner";
import Page from "src/components/Page";
import CompanyListItem from "src/pages/main/companies/CompanyList/components/CompanyListItem";
import CompanySearchBar from "src/pages/main/companies/CompanyList/components/CompanySearchBar";
import { useUserGetAllCompaniesQuery } from "src/redux/api/companyApi";

const MainCompanyList = () => {
  const [query, setQuery] = useState({});
  const { data, isLoading, isFetching } = useUserGetAllCompaniesQuery(query);

  const handleSearch = (searchInfo) => {
    setQuery(searchInfo);
  };

  return (
    <Page title="Recruitment List">
      <CompanySearchBar handleSearch={handleSearch} isSearching={isLoading || isFetching} />
      <Box my={4} bgColor="white" p={4} rounded="sm">
        {isLoading && <LoadingSpinner size="lg" />}
        {data?.data.length > 0 && data.data.map((company) => <CompanyListItem key={company.id} company={company} />)}
        {data?.data.length === 0 && !isLoading && <Box textAlign="center">No company found</Box>}
      </Box>
    </Page>
  );
};

export default MainCompanyList;
