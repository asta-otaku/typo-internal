import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

function LineChart({ data }: { data: number[] }) {
  return (
    <Line
      data={{
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            data,
            fill: false,
            backgroundColor: "rgba(141, 121, 246, 0.5)",
            borderColor: "rgba(141, 121, 246, 1)",
            tension: 0.4,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      }}
    />
  );
}

export default LineChart;
