import { useEffect, useState } from "react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

ChartJs.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const [totalBubbles, setTotalBubbles] = useState(0);
  const [totalComments, setTotalComments] = useState(0);

  useEffect(() => {
    const fetchTotalBubbles = async () => {
      try {
        const response = await axios.get('http://localhost:5269/api/analytics/artifacts/count', {
          headers: {
            'accept': '*/*',
            'x-user-id': '861f4c04-e718-43f4-9c4f-656910d71cd9',
          },
        });
        setTotalBubbles(response.data.totalArtifactsCount);
      } catch (error) {
        console.error('Error fetching total bubbles:', error);
      }
    };

    const fetchTotalComments = async () => {
      try {
        const response = await axios.get('http://localhost:5269/api/analytics/comments/count', {
          headers: {
            'accept': '*/*',
            'x-user-id': '861f4c04-e718-43f4-9c4f-656910d71cd9',
          },
        });
        setTotalComments(response.data.totalCommentsSent);
      } catch (error) {
        console.error('Error fetching total comments:', error);
      }
    };

    fetchTotalBubbles();
    fetchTotalComments();
  }, []);

  const data = {
    labels: ["Bubbles", "Comments"],
    datasets: [
      {
        data: [totalBubbles, totalComments],
        backgroundColor: ["#0019FF", "#ABB0BC"],
        borderColor: ["#0019FF", "#ABB0BC"],
        hoverOffset: 4,
        rotation: 250,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="max-w-sm w-full">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
