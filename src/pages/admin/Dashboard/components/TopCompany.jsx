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
      text: "Top Companies",
      font: {
        size: 18,
      },
    },
  },
};

const TopCompaniesChart = ({ topCompanies }) => {
  const data = {
    labels: topCompanies.map((company) => company.name),
    datasets: [
      {
        label: "Recruitments",
        data: topCompanies.map((data) => data.recruitments.length),
        backgroundColor: "rgba(53, 162, 235, 0.7)",
      },
      {
        label: "Applications",
        data: topCompanies.map((data) => data.recruitments.reduce((acc, curr) => acc + curr.applications.length, 0)),
        backgroundColor: "rgba(88,193,137,0.7)",
      },
    ],
  };

  return <Bar data={data} options={options} />;
};

export default TopCompaniesChart;
