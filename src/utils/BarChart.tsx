import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Comments",
        data: [
          4600, 3100, 2200, 3900, 3050, 4800, 3800, 3400, 3950, 4800, 4800,
          3400,
        ],
        backgroundColor: "#f1f5f9",
        borderColor: "#d2d8e5",
        borderWidth: 1,
        borderRadius: 100,
        borderSkipped: false,
      },
      {
        label: "Bubbles",
        data: [
          4800, 2500, 3500, 4800, 3200, 3900, 3300, 2500, 4800, 3900, 3900,
          2200,
        ],

        backgroundColor: "#0019FF",
        borderColor: "#0019FF",
        borderWidth: 1,
        borderRadius: 100,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
