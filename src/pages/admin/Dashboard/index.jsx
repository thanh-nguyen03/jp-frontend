import { Heading, Text } from "@chakra-ui/react";
import Page from "src/components/Page";
import { useGetHelloQuery } from "src/redux/api/adminApi";

const AdminDashboard = () => {
  const { data, isLoading } = useGetHelloQuery();

  return (
    <Page>
      <Heading>Admin Dashboard</Heading>
      {!isLoading && <Text>{data.message}</Text>}
    </Page>
  );
};

export default AdminDashboard;
