import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "User Created Statistics",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const UserChart = ({ userChartStatistics }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "User",
        data: userChartStatistics.map((data) => data.data),
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  };

  return <Bar data={data} options={options} />;
};

export default UserChart;
