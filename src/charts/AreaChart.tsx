import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

export const options = {
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
      display: false,
    },
    x: {
      display: false,
    },
  },
};

const getGradient = (chart: any) => {
  const { ctx, chartArea } = chart;
  if (!chartArea) {
    return null;
  }
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.top,
    0,
    chartArea.bottom
  );
  gradient.addColorStop(0.1, "rgba(141, 121, 246, 0.4)");
  gradient.addColorStop(1, "rgba(141, 121, 246, 0)");
  return gradient;
};

export const data = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "My First dataset",
      data: [65, 59, 80, 81],
      fill: true,
      // backgroundColor: "rgba(141, 121, 246, 0.09)",
      backgroundColor: (context: any) => {
        const chart = context.chart;
        const { chartArea } = chart;
        if (!chartArea) {
          return null;
        }
        return getGradient(chart);
      },
      borderColor: "#8D79F6",
      tension: 0.5,
    },
  ],
};

export default function AreaChart() {
  return <Line options={options} data={data} />;
}
