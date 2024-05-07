import { Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { FaBriefcase, FaFileAlt, FaUser } from "react-icons/fa";
import Page from "src/components/Page";
import StatCard from "src/components/StatCard";
import ROUTES from "src/constants/routes";
import useAuth from "src/hooks/useAuth";
import ApplicationStatusChart from "src/pages/company-admin/Dashboard/components/ApplicationStatusChart";
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
          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={8} mt={6} mb={4}>
            <VStack spacing={2} w="100%" mt={32}>
              <StatCard
                data={{
                  label: "Total Recruitments",
                  number: statistics?.data.totalRecruitments,
                  icon: FaBriefcase,
                  route: ROUTES.companyManageRecruitments,
                }}
              />
              <StatCard
                data={{
                  label: "Total Applications",
                  number: statistics?.data.totalApplications.total,
                  icon: FaFileAlt,
                }}
              />
              <StatCard
                data={{
                  label: "Total HR",
                  number: statistics?.data.totalHRs,
                  icon: FaUser,
                }}
              />
            </VStack>
            <ApplicationStatusChart chartData={statistics?.data.totalApplications} />
          </SimpleGrid>
        </>
      )}
    </Page>
  );
};

export default CompanyAdminDashboard;
