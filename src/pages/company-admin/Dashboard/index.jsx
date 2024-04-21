import { Heading } from "@chakra-ui/react";
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";

const CompanyAdminDashboard = () => {
  const { isAuthenticated, displayName } = useAuth();
  return (
    <Page>
      <Heading>Company Dashboard</Heading>
      {isAuthenticated && <Heading size="md">Welcome, {displayName}</Heading>}
    </Page>
  );
};

export default CompanyAdminDashboard;
