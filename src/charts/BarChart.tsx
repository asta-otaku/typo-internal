import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { apiUrl } from '../config';


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface MonthlySummaryDto {
  month: string;
  bubblesCount: number;
  commentsCount: number;
}

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    borderSkipped: boolean;
  }>;
}


function BarChart({ year }: { year: string }) {

  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        // const year = new Date().getFullYear(); // or set a specific year
        const response = await axios.get<MonthlySummaryDto[]>(`${apiUrl}/analytics/monthlySummary/${year}`,
        {
          headers: {
            accept: "*/*",
            "x-user-id": "861f4c04-e718-43f4-9c4f-656910d71cd9",
          },
        }
        );
        const data = response.data;

        const labels = data.map(d => d.month);
        const bubblesData = data.map(d => d.bubblesCount);
        const commentsData = data.map(d => d.commentsCount);

        const newChartData: ChartData = {
          labels,
          datasets: [
            {
              label: "Comments",
              data: commentsData,
              backgroundColor: "#f1f5f9",
              borderColor: "#d2d8e5",
              borderWidth: 1,
              borderRadius: 100,
              borderSkipped: false,
            },
            {
              label: "Bubbles",
              data: bubblesData,
              backgroundColor: "#0019FF",
              borderColor: "#0019FF",
              borderWidth: 1,
              borderRadius: 100,
              borderSkipped: false,
            },
          ],
        };

        setChartData(newChartData);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, [year]);

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
      {chartData && <Bar data={chartData} options={options} />}
    </div>
  );
}

export default BarChart;
