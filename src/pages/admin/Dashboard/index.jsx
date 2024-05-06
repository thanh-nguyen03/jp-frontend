import { Box, Heading, Progress, SimpleGrid } from "@chakra-ui/react";
import { FaBriefcase, FaBuilding, FaFileAlt, FaUserAlt } from "react-icons/fa";
import Page from "src/components/Page";
import ROUTES from "src/constants/routes";
import StatCard from "src/components/StatCard";
import TopCompaniesChart from "src/pages/admin/Dashboard/components/TopCompany";
import UserChart from "src/pages/admin/Dashboard/components/UserChart";
import { useGetCommonStatisticsQuery } from "src/redux/api/adminApi";

const AdminDashboard = () => {
  const { data: statistics, isLoading } = useGetCommonStatisticsQuery();

  return (
    <Page>
      <Heading>Admin Dashboard</Heading>
      {isLoading && (
        <Box my={6}>
          <Progress size="xs" isIndeterminate colorScheme="green" />
        </Box>
      )}

      {!isLoading && (
        <>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={5} mt={6} mb={4}>
            <StatCard
              data={{
                label: "Total Users",
                number: statistics?.data.totalUsers,
                icon: FaUserAlt,
                route: ROUTES.adminManageUsers,
              }}
            />
            <StatCard
              data={{
                label: "Total Companies",
                number: statistics?.data.totalCompanies,
                icon: FaBuilding,
                route: ROUTES.adminManageCompanies,
              }}
            />
            <StatCard
              data={{ label: "Total Recruitments", number: statistics?.data.totalRecruitments, icon: FaBriefcase }}
            />
            <StatCard
              data={{ label: "Total Applications", number: statistics?.data.totalApplications.total, icon: FaFileAlt }}
            />
          </SimpleGrid>

          <UserChart userChartStatistics={statistics?.data.userChartStatistics} />
          <TopCompaniesChart topCompanies={statistics?.data.topCompanies} />
        </>
      )}
    </Page>
  );
};

export default AdminDashboard;
