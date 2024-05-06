import { Heading, SimpleGrid } from "@chakra-ui/react";
import { FaBriefcase, FaFileAlt } from "react-icons/fa";
import Page from "src/components/Page";
import StatCard from "src/components/StatCard";
import ROUTES from "src/constants/routes";
import useAuth from "src/hooks/useAuth";
import ApplicationChart from "src/pages/company-admin/Dashboard/components/ApplicationChart";
import { useGetCompanyStatisticsQuery } from "src/redux/api/adminApi";

const CompanyAdminDashboard = () => {
  const { isAuthenticated, displayName } = useAuth();
  const { data: statistics, isLoading } = useGetCompanyStatisticsQuery();

  return (
    <Page>
      <Heading>Company Dashboard</Heading>
      {isAuthenticated && <Heading size="md">Welcome, {displayName}</Heading>}

      {!isLoading && (
        <>
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5} mt={6} mb={4}>
            <StatCard
              data={{
                label: "Total Recruitments",
                number: statistics?.data.totalRecruitments,
                icon: FaBriefcase,
                route: ROUTES.companyManageRecruitments,
              }}
            />
            <StatCard
              data={{ label: "Total Applications", number: statistics?.data.totalApplications.total, icon: FaFileAlt }}
            />
          </SimpleGrid>

          <ApplicationChart chartData={statistics?.data.totalApplications} />
        </>
      )}
    </Page>
  );
};

export default CompanyAdminDashboard;
