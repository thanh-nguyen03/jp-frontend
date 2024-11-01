import { Box, Heading, HStack } from "@chakra-ui/react";
import { ArcElement, Chart as ChartJS, Legend, Title, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ApplicationStatusChart = ({ chartData }) => {
  const data = {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        label: "Amount",
        data: [chartData.accepted, chartData.pending, chartData.rejected],
        backgroundColor: ["rgba(75, 200, 192, 0.4)", "rgba(255, 159, 64, 0.4)", "rgba(255, 99, 132, 0.4)"],
        borderColor: ["rgba(75, 200, 192, 1)", "rgba(255, 159, 64, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <HStack justifyContent="center" mt={10} w="100%">
      <Box w="80%">
        <Pie data={data} />
        <Heading textAlign="center" size="sm" mt={4}>
          Application Status
        </Heading>
      </Box>
    </HStack>
  );
};

export default ApplicationStatusChart;
